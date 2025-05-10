import { Fragment as Ie, isVNode as po, Comment as ah, Text as Xf, defineComponent as Z, reactive as Le, getCurrentInstance as Ut, onMounted as be, onUpdated as Pn, onUnmounted as Zo, watch as ae, computed as T, inject as Ee, provide as _e, ref as te, unref as ge, shallowRef as k, watchEffect as Pe, onBeforeUnmount as Ae, triggerRef as qf, createVNode as v, h as eo, Transition as Gt, withDirectives as Bt, resolveDirective as Kf, cloneVNode as Jo, render as on, nextTick as Fe, toRef as Ct, withModifiers as wc, vShow as mo, onBeforeMount as lh, Teleport as Yf, createTextVNode as Me, isRef as Qf, toRefs as sh, toRaw as rn, onBeforeUpdate as Zf, TransitionGroup as ai, openBlock as Ze, createBlock as kn, withCtx as ce, renderSlot as Ma, createCommentVNode as Xn, createElementBlock as tn, createElementVNode as qn, renderList as ch, normalizeClass as Sc, vModelText as uh } from "vue";
function Lo(e) {
  "@babel/helpers - typeof";
  return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lo(e);
}
function dh(e, t) {
  if (Lo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t || "default");
    if (Lo(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fh(e) {
  var t = dh(e, "string");
  return Lo(t) == "symbol" ? t : t + "";
}
function ph(e, t, n) {
  return (t = fh(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function xc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xc(Object(n), !0).forEach(function(o) {
      ph(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xc(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function g() {
  return g = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, g.apply(null, arguments);
}
const mh = (e) => typeof e == "function", gh = Array.isArray, vh = (e) => typeof e == "string", hh = (e) => e !== null && typeof e == "object", yh = /^on[^a-z]/, bh = (e) => yh.test(e), Jf = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, wh = /-(\w)/g, ep = Jf((e) => e.replace(wh, (t, n) => n ? n.toUpperCase() : "")), Sh = /\B([A-Z])/g, xh = Jf((e) => e.replace(Sh, "-$1").toLowerCase()), Ch = Object.prototype.hasOwnProperty, Cc = (e, t) => Ch.call(e, t);
function $h(e, t, n, o) {
  const r = e[n];
  if (r != null) {
    const i = Cc(r, "default");
    if (i && o === void 0) {
      const a = r.default;
      o = r.type !== Function && mh(a) ? a() : a;
    }
    r.type === Boolean && (!Cc(t, n) && !i ? o = !1 : o === "" && (o = !0));
  }
  return o;
}
function Wn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e ?? n;
}
function Oh(e) {
  let t;
  const n = new Promise((r) => {
    t = e(() => {
      r(!0);
    });
  }), o = () => {
    t == null || t();
  };
  return o.then = (r, i) => n.then(r, i), o.promise = n, o;
}
function oe() {
  const e = [];
  for (let t = 0; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (vh(n))
        e.push(n);
      else if (gh(n))
        for (let o = 0; o < n.length; o++) {
          const r = oe(n[o]);
          r && e.push(r);
        }
      else if (hh(n))
        for (const o in n)
          n[o] && e.push(o);
    }
  }
  return e.join(" ");
}
var tp = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var o = -1;
    return t.some(function(r, i) {
      return r[0] === n ? (o = i, !0) : !1;
    }), o;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var o = e(this.__entries__, n), r = this.__entries__[o];
        return r && r[1];
      }, t.prototype.set = function(n, o) {
        var r = e(this.__entries__, n);
        ~r ? this.__entries__[r][1] = o : this.__entries__.push([n, o]);
      }, t.prototype.delete = function(n) {
        var o = this.__entries__, r = e(o, n);
        ~r && o.splice(r, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, o) {
        o === void 0 && (o = null);
        for (var r = 0, i = this.__entries__; r < i.length; r++) {
          var a = i[r];
          n.call(o, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), Ra = typeof window < "u" && typeof document < "u" && window.document === document, Wr = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Ph = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Wr) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Ih = 2;
function Th(e, t) {
  var n = !1, o = !1, r = 0;
  function i() {
    n && (n = !1, e()), o && l();
  }
  function a() {
    Ph(i);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - r < Ih)
        return;
      o = !0;
    } else
      n = !0, o = !1, setTimeout(a, t);
    r = s;
  }
  return l;
}
var Eh = 20, _h = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ah = typeof MutationObserver < "u", Mh = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Th(this.refresh.bind(this), Eh);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, o = n.indexOf(t);
      ~o && n.splice(o, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Ra || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ah ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ra || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, o = n === void 0 ? "" : n, r = _h.some(function(i) {
        return !!~o.indexOf(i);
      });
      r && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), np = function(e, t) {
  for (var n = 0, o = Object.keys(t); n < o.length; n++) {
    var r = o[n];
    Object.defineProperty(e, r, {
      value: t[r],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, to = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Wr;
}, op = li(0, 0, 0, 0);
function Ur(e) {
  return parseFloat(e) || 0;
}
function $c(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(o, r) {
    var i = e["border-" + r + "-width"];
    return o + Ur(i);
  }, 0);
}
function Rh(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, o = 0, r = t; o < r.length; o++) {
    var i = r[o], a = e["padding-" + i];
    n[i] = Ur(a);
  }
  return n;
}
function Fh(e) {
  var t = e.getBBox();
  return li(0, 0, t.width, t.height);
}
function Dh(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return op;
  var o = to(e).getComputedStyle(e), r = Rh(o), i = r.left + r.right, a = r.top + r.bottom, l = Ur(o.width), s = Ur(o.height);
  if (o.boxSizing === "border-box" && (Math.round(l + i) !== t && (l -= $c(o, "left", "right") + i), Math.round(s + a) !== n && (s -= $c(o, "top", "bottom") + a)), !Lh(e)) {
    var c = Math.round(l + i) - t, u = Math.round(s + a) - n;
    Math.abs(c) !== 1 && (l -= c), Math.abs(u) !== 1 && (s -= u);
  }
  return li(r.left, r.top, l, s);
}
var Nh = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof to(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof to(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Lh(e) {
  return e === to(e).document.documentElement;
}
function jh(e) {
  return Ra ? Nh(e) ? Fh(e) : Dh(e) : op;
}
function Hh(e) {
  var t = e.x, n = e.y, o = e.width, r = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return np(a, {
    x: t,
    y: n,
    width: o,
    height: r,
    top: n,
    right: t + o,
    bottom: r + n,
    left: t
  }), a;
}
function li(e, t, n, o) {
  return { x: e, y: t, width: n, height: o };
}
var Bh = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = li(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = jh(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), zh = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var o = Hh(n);
      np(this, { target: t, contentRect: o });
    }
    return e;
  }()
), Vh = (
  /** @class */
  function() {
    function e(t, n, o) {
      if (this.activeObservations_ = [], this.observations_ = new tp(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = o;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof to(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new Bh(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof to(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(o) {
          return new zh(o.target, o.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), rp = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new tp(), ip = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Mh.getInstance(), o = new Vh(t, n, this);
      rp.set(this, o);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  ip.prototype[e] = function() {
    var t;
    return (t = rp.get(this))[e].apply(t, arguments);
  };
});
var ap = function() {
  return typeof Wr.ResizeObserver < "u" ? Wr.ResizeObserver : ip;
}();
const Wh = (e) => e != null && e !== "", Be = (e, t) => {
  const n = g({}, e);
  return Object.keys(t).forEach((o) => {
    const r = n[o];
    if (r)
      r.type || r.default ? r.default = t[o] : r.def ? r.def(t[o]) : n[o] = {
        type: r,
        default: t[o]
      };
    else
      throw new Error(`not have ${o} prop`);
  }), n;
}, Uh = (e) => {
  const t = Object.keys(e), n = {}, o = {}, r = {};
  for (let i = 0, a = t.length; i < a; i++) {
    const l = t[i];
    bh(l) ? (n[l[2].toLowerCase() + l.slice(3)] = e[l], o[l] = e[l]) : r[l] = e[l];
  }
  return {
    onEvents: o,
    events: n,
    extraAttrs: r
  };
}, Gh = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n = {}, o = /;(?![^(]*\))/g, r = /:(.+)/;
  return typeof e == "object" ? e : (e.split(o).forEach(function(i) {
    if (i) {
      const a = i.split(r);
      if (a.length > 1) {
        const l = t ? ep(a[0].trim()) : a[0].trim();
        n[l] = a[1].trim();
      }
    }
  }), n);
}, kh = (e, t) => e[t] !== void 0, Xh = Symbol("skipFlatten"), Je = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = Array.isArray(e) ? e : [e], o = [];
  return n.forEach((r) => {
    Array.isArray(r) ? o.push(...Je(r, t)) : r && r.type === Ie ? r.key === Xh ? o.push(r) : o.push(...Je(r.children, t)) : r && po(r) ? t && !lp(r) ? o.push(r) : t || o.push(r) : Wh(r) && o.push(r);
  }), o;
}, qh = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (po(e))
    return e.type === Ie ? t === "default" ? Je(e.children) : [] : e.children && e.children[t] ? Je(e.children[t](n)) : [];
  {
    const o = e.$slots[t] && e.$slots[t](n);
    return Je(o);
  }
}, Ht = (e) => {
  var t;
  let n = ((t = e == null ? void 0 : e.vnode) === null || t === void 0 ? void 0 : t.el) || e && (e.$el || e);
  for (; n && !n.tagName; )
    n = n.nextSibling;
  return n;
}, Kh = (e) => {
  const t = {};
  if (e.$ && e.$.vnode) {
    const n = e.$.vnode.props || {};
    Object.keys(e.$props).forEach((o) => {
      const r = e.$props[o], i = xh(o);
      (r !== void 0 || i in n) && (t[o] = r);
    });
  } else if (po(e) && typeof e.type == "object") {
    const n = e.props || {}, o = {};
    Object.keys(n).forEach((i) => {
      o[ep(i)] = n[i];
    });
    const r = e.type.props || {};
    Object.keys(r).forEach((i) => {
      const a = $h(r, o, i, o[i]);
      (a !== void 0 || i in o) && (t[i] = a);
    });
  }
  return t;
}, Yh = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, r;
  if (e.$) {
    const i = e[t];
    if (i !== void 0)
      return typeof i == "function" && o ? i(n) : i;
    r = e.$slots[t], r = o && r ? r(n) : r;
  } else if (po(e)) {
    const i = e.props && e.props[t];
    if (i !== void 0 && e.props !== null)
      return typeof i == "function" && o ? i(n) : i;
    e.type === Ie ? r = e.children : e.children && e.children[t] && (r = e.children[t], r = o && r ? r(n) : r);
  }
  return Array.isArray(r) && (r = Je(r), r = r.length === 1 ? r[0] : r, r = r.length === 0 ? void 0 : r), r;
};
function Oc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = {};
  return e.$ ? n = g(g({}, n), e.$attrs) : n = g(g({}, n), e.props), Uh(n)[t ? "onEvents" : "events"];
}
function Qh(e, t) {
  let o = ((po(e) ? e.props : e.$attrs) || {}).style || {};
  return typeof o == "string" && (o = Gh(o, t)), o;
}
function Zh(e) {
  return e.length === 1 && e[0].type === Ie;
}
function lp(e) {
  return e && (e.type === ah || e.type === Ie && e.children.length === 0 || e.type === Xf && e.children.trim() === "");
}
function ht() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const t = [];
  return e.forEach((n) => {
    Array.isArray(n) ? t.push(...n) : (n == null ? void 0 : n.type) === Ie ? t.push(...ht(n.children)) : t.push(n);
  }), t.filter((n) => !lp(n));
}
function zt(e) {
  return Array.isArray(e) && e.length === 1 && (e = e[0]), e && e.__v_isVNode && typeof e.type != "symbol";
}
function Jh(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
  var o, r;
  return (o = t[n]) !== null && o !== void 0 ? o : (r = e[n]) === null || r === void 0 ? void 0 : r.call(e);
}
const si = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ResizeObserver",
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ["resize"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = Le({
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    });
    let r = null, i = null;
    const a = () => {
      i && (i.disconnect(), i = null);
    }, l = (u) => {
      const {
        onResize: d
      } = e, f = u[0].target, {
        width: p,
        height: h
      } = f.getBoundingClientRect(), {
        offsetWidth: m,
        offsetHeight: w
      } = f, b = Math.floor(p), C = Math.floor(h);
      if (o.width !== b || o.height !== C || o.offsetWidth !== m || o.offsetHeight !== w) {
        const S = {
          width: b,
          height: C,
          offsetWidth: m,
          offsetHeight: w
        };
        g(o, S), d && Promise.resolve().then(() => {
          d(g(g({}, S), {
            offsetWidth: m,
            offsetHeight: w
          }), f);
        });
      }
    }, s = Ut(), c = () => {
      const {
        disabled: u
      } = e;
      if (u) {
        a();
        return;
      }
      const d = Ht(s);
      d !== r && (a(), r = d), !i && d && (i = new ap(l), i.observe(d));
    };
    return be(() => {
      c();
    }), Pn(() => {
      c();
    }), Zo(() => {
      a();
    }), ae(() => e.disabled, () => {
      c();
    }, {
      flush: "post"
    }), () => {
      var u;
      return (u = n.default) === null || u === void 0 ? void 0 : u.call(n)[0];
    };
  }
});
let sp = (e) => setTimeout(e, 16), cp = (e) => clearTimeout(e);
typeof window < "u" && "requestAnimationFrame" in window && (sp = (e) => window.requestAnimationFrame(e), cp = (e) => window.cancelAnimationFrame(e));
let Pc = 0;
const _l = /* @__PURE__ */ new Map();
function up(e) {
  _l.delete(e);
}
function $e(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Pc += 1;
  const n = Pc;
  function o(r) {
    if (r === 0)
      up(n), e();
    else {
      const i = sp(() => {
        o(r - 1);
      });
      _l.set(n, i);
    }
  }
  return o(t), n;
}
$e.cancel = (e) => {
  const t = _l.get(e);
  return up(t), cp(t);
};
const an = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t;
}, In = (e) => {
  const t = e;
  return t.install = function(n) {
    n.component(t.displayName || t.name, e);
  }, e;
};
function Gr() {
  return {
    type: [Function, Array]
  };
}
function pe(e) {
  return {
    type: Object,
    default: e
  };
}
function Ce(e) {
  return {
    type: Boolean,
    default: e
  };
}
function se(e) {
  return {
    type: Function,
    default: e
  };
}
function Re(e, t) {
  const n = {
    validator: () => !0,
    default: e
  };
  return n;
}
function no(e) {
  return {
    type: Array,
    default: e
  };
}
function Te(e) {
  return {
    type: String,
    default: e
  };
}
function Ye(e, t) {
  return e ? {
    type: e,
    default: t
  } : Re(t);
}
let Ke = !1;
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Ke = !0;
    }
  });
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
} catch {
}
function Un(e, t, n, o) {
  if (e && e.addEventListener) {
    let r = o;
    r === void 0 && Ke && (t === "touchstart" || t === "touchmove" || t === "wheel") && (r = {
      passive: !1
    }), e.addEventListener(t, n, r);
  }
  return {
    remove: () => {
      e && e.removeEventListener && e.removeEventListener(t, n);
    }
  };
}
const Al = "anticon", dp = Symbol("GlobalFormContextKey"), e0 = (e) => {
  _e(dp, e);
}, t0 = () => Ee(dp, {
  validateMessages: T(() => {
  })
}), n0 = () => ({
  iconPrefixCls: String,
  getTargetContainer: {
    type: Function
  },
  getPopupContainer: {
    type: Function
  },
  prefixCls: String,
  getPrefixCls: {
    type: Function
  },
  renderEmpty: {
    type: Function
  },
  transformCellText: {
    type: Function
  },
  csp: pe(),
  input: pe(),
  autoInsertSpaceInButton: {
    type: Boolean,
    default: void 0
  },
  locale: pe(),
  pageHeader: pe(),
  componentSize: {
    type: String
  },
  componentDisabled: {
    type: Boolean,
    default: void 0
  },
  direction: {
    type: String,
    default: "ltr"
  },
  space: pe(),
  virtual: {
    type: Boolean,
    default: void 0
  },
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: !0
  },
  form: pe(),
  pagination: pe(),
  theme: pe(),
  select: pe(),
  wave: pe()
}), Ml = Symbol("configProvider"), fp = {
  getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
  iconPrefixCls: T(() => Al),
  getPopupContainer: T(() => () => document.body),
  direction: T(() => "ltr")
}, ci = () => Ee(Ml, fp), o0 = (e) => _e(Ml, e), pp = Symbol("DisabledContextKey"), Tn = () => Ee(pp, te(void 0)), mp = (e) => {
  const t = Tn();
  return _e(pp, T(() => {
    var n;
    return (n = e.value) !== null && n !== void 0 ? n : t.value;
  })), e;
}, r0 = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
}, i0 = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
}, gp = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Ic = {
  lang: g({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, i0),
  timePickerLocale: g({}, gp)
}, rt = "${label} is not a valid ${type}", Mt = {
  locale: "en",
  Pagination: r0,
  DatePicker: Ic,
  TimePicker: gp,
  Calendar: Ic,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: rt,
        method: rt,
        array: rt,
        object: rt,
        number: rt,
        date: rt,
        boolean: rt,
        integer: rt,
        float: rt,
        regexp: rt,
        email: rt,
        url: rt,
        hex: rt
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  }
}, vp = Z({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = Ee("localeData", {}), r = T(() => {
      const {
        componentName: a = "global",
        defaultLocale: l
      } = e, s = l || Mt[a || "global"], {
        antLocale: c
      } = o, u = a && c ? c[a] : {};
      return g(g({}, typeof s == "function" ? s() : s), u || {});
    }), i = T(() => {
      const {
        antLocale: a
      } = o, l = a && a.locale;
      return a && a.exist && !l ? Mt.locale : l;
    });
    return () => {
      const a = e.children || n.default, {
        antLocale: l
      } = o;
      return a == null ? void 0 : a(r.value, i.value, l);
    };
  }
});
function go(e, t, n) {
  const o = Ee("localeData", {});
  return [T(() => {
    const {
      antLocale: i
    } = o, a = ge(t) || Mt[e || "global"], l = e && i ? i[e] : {};
    return g(g(g({}, typeof a == "function" ? a() : a), l || {}), ge(n) || {});
  })];
}
function Rl(e) {
  for (var t = 0, n, o = 0, r = e.length; r >= 4; ++o, r -= 4)
    n = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (r) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
const Tc = "%";
class a0 {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.instanceId = t;
  }
  get(t) {
    return this.cache.get(Array.isArray(t) ? t.join(Tc) : t) || null;
  }
  update(t, n) {
    const o = Array.isArray(t) ? t.join(Tc) : t, r = this.cache.get(o), i = n(r);
    i === null ? this.cache.delete(o) : this.cache.set(o, i);
  }
}
const hp = "data-token-hash", bn = "data-css-hash", l0 = "data-cache-path", Gn = "__cssinjs_instance__";
function jo() {
  const e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    const t = document.body.querySelectorAll(`style[${bn}]`) || [], {
      firstChild: n
    } = document.head;
    Array.from(t).forEach((r) => {
      r[Gn] = r[Gn] || e, r[Gn] === e && document.head.insertBefore(r, n);
    });
    const o = {};
    Array.from(document.querySelectorAll(`style[${bn}]`)).forEach((r) => {
      var i;
      const a = r.getAttribute(bn);
      o[a] ? r[Gn] === e && ((i = r.parentNode) === null || i === void 0 || i.removeChild(r)) : o[a] = !0;
    });
  }
  return new a0(e);
}
const yp = Symbol("StyleContextKey"), s0 = () => {
  var e, t, n;
  const o = Ut();
  let r;
  if (o && o.appContext) {
    const i = (n = (t = (e = o.appContext) === null || e === void 0 ? void 0 : e.config) === null || t === void 0 ? void 0 : t.globalProperties) === null || n === void 0 ? void 0 : n.__ANTDV_CSSINJS_CACHE__;
    i ? r = i : (r = jo(), o.appContext.config.globalProperties && (o.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = r));
  } else
    r = jo();
  return r;
}, bp = {
  cache: jo(),
  defaultCache: !0,
  hashPriority: "low"
}, ui = () => {
  const e = s0();
  return Ee(yp, k(g(g({}, bp), {
    cache: e
  })));
}, c0 = (e) => {
  const t = ui(), n = k(g(g({}, bp), {
    cache: jo()
  }));
  return ae([() => ge(e), t], () => {
    const o = g({}, t.value), r = ge(e);
    Object.keys(r).forEach((a) => {
      const l = r[a];
      r[a] !== void 0 && (o[a] = l);
    });
    const {
      cache: i
    } = r;
    o.cache = o.cache || jo(), o.defaultCache = !i && t.value.defaultCache, n.value = o;
  }, {
    immediate: !0
  }), _e(yp, n), n;
}, u0 = () => ({
  autoClear: Ce(),
  /** @private Test only. Not work in production. */
  mock: Te(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: pe(),
  /** Tell children that this context is default generated context */
  defaultCache: Ce(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: Te(),
  /** Tell cssinjs where to inject style in */
  container: Ye(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: Ce(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: no(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: no()
});
In(Z({
  name: "AStyleProvider",
  inheritAttrs: !1,
  props: u0(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return c0(e), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
}));
function d0() {
  return !1;
}
let Fa = !1;
function f0() {
  return Fa;
}
const p0 = process.env.NODE_ENV === "production" ? d0 : f0;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  const e = window;
  if (typeof e.webpackHotUpdate == "function") {
    const t = e.webpackHotUpdate;
    e.webpackHotUpdate = function() {
      return Fa = !0, setTimeout(() => {
        Fa = !1;
      }, 0), t(...arguments);
    };
  }
}
function wp(e, t, n, o) {
  const r = ui(), i = k(""), a = k();
  Pe(() => {
    i.value = [e, ...t.value].join("%");
  });
  const l = p0(), s = (c) => {
    r.value.cache.update(c, (u) => {
      const [d = 0, f] = u || [];
      return d - 1 === 0 ? (o == null || o(f, !1), null) : [d - 1, f];
    });
  };
  return ae(i, (c, u) => {
    u && s(u), r.value.cache.update(c, (d) => {
      const [f = 0, p] = d || [];
      let h = p;
      process.env.NODE_ENV !== "production" && p && l && (o == null || o(h, l), h = null);
      const m = h || n();
      return [f + 1, m];
    }), a.value = r.value.cache.get(i.value)[1];
  }, {
    immediate: !0
  }), Ae(() => {
    s(i.value);
  }), a;
}
function yt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Qt(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
const Ec = "data-vc-order", m0 = "vc-util-key", Da = /* @__PURE__ */ new Map();
function Sp() {
  let {
    mark: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return e ? e.startsWith("data-") ? e : `data-${e}` : m0;
}
function di(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function g0(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function xp(e) {
  return Array.from((Da.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function Cp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!yt())
    return null;
  const {
    csp: n,
    prepend: o
  } = t, r = document.createElement("style");
  r.setAttribute(Ec, g0(o)), n != null && n.nonce && (r.nonce = n == null ? void 0 : n.nonce), r.innerHTML = e;
  const i = di(t), {
    firstChild: a
  } = i;
  if (o) {
    if (o === "queue") {
      const l = xp(i).filter((s) => ["prepend", "prependQueue"].includes(s.getAttribute(Ec)));
      if (l.length)
        return i.insertBefore(r, l[l.length - 1].nextSibling), r;
    }
    i.insertBefore(r, a);
  } else
    i.appendChild(r);
  return r;
}
function $p(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = di(t);
  return xp(n).find((o) => o.getAttribute(Sp(t)) === e);
}
function kr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = $p(e, t);
  n && di(t).removeChild(n);
}
function v0(e, t) {
  const n = Da.get(e);
  if (!n || !Qt(document, n)) {
    const o = Cp("", t), {
      parentNode: r
    } = o;
    Da.set(e, r), e.removeChild(o);
  }
}
function Ho(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var o, r, i;
  const a = di(n);
  v0(a, n);
  const l = $p(t, n);
  if (l)
    return !((o = n.csp) === null || o === void 0) && o.nonce && l.nonce !== ((r = n.csp) === null || r === void 0 ? void 0 : r.nonce) && (l.nonce = (i = n.csp) === null || i === void 0 ? void 0 : i.nonce), l.innerHTML !== e && (l.innerHTML = e), l;
  const s = Cp(e, n);
  return s.setAttribute(Sp(n), t), s;
}
function h0(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
class oo {
  constructor() {
    this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = {
      map: this.cache
    };
    return t.forEach((r) => {
      var i;
      o ? o = (i = o == null ? void 0 : o.map) === null || i === void 0 ? void 0 : i.get(r) : o = void 0;
    }), o != null && o.value && n && (o.value[1] = this.cacheCallTimes++), o == null ? void 0 : o.value;
  }
  get(t) {
    var n;
    return (n = this.internalGet(t, !0)) === null || n === void 0 ? void 0 : n[0];
  }
  has(t) {
    return !!this.internalGet(t);
  }
  set(t, n) {
    if (!this.has(t)) {
      if (this.size() + 1 > oo.MAX_CACHE_SIZE + oo.MAX_CACHE_OFFSET) {
        const [r] = this.keys.reduce((i, a) => {
          const [, l] = i;
          return this.internalGet(a)[1] < l ? [a, this.internalGet(a)[1]] : i;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(r);
      }
      this.keys.push(t);
    }
    let o = this.cache;
    t.forEach((r, i) => {
      if (i === t.length - 1)
        o.set(r, {
          value: [n, this.cacheCallTimes++]
        });
      else {
        const a = o.get(r);
        a ? a.map || (a.map = /* @__PURE__ */ new Map()) : o.set(r, {
          map: /* @__PURE__ */ new Map()
        }), o = o.get(r).map;
      }
    });
  }
  deleteByPath(t, n) {
    var o;
    const r = t.get(n[0]);
    if (n.length === 1)
      return r.map ? t.set(n[0], {
        map: r.map
      }) : t.delete(n[0]), (o = r.value) === null || o === void 0 ? void 0 : o[0];
    const i = this.deleteByPath(r.map, n.slice(1));
    return (!r.map || r.map.size === 0) && !r.value && t.delete(n[0]), i;
  }
  delete(t) {
    if (this.has(t))
      return this.keys = this.keys.filter((n) => !h0(n, t)), this.deleteByPath(this.cache, t);
  }
}
oo.MAX_CACHE_SIZE = 20;
oo.MAX_CACHE_OFFSET = 5;
let Na = {};
function ro(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error(`Warning: ${t}`);
}
function y0(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.warn(`Note: ${t}`);
}
function b0() {
  Na = {};
}
function Op(e, t, n) {
  !t && !Na[n] && (e(!1, n), Na[n] = !0);
}
function mt(e, t) {
  Op(ro, e, t);
}
function _c(e, t) {
  Op(y0, e, t);
}
function w0() {
}
let et = w0;
process.env.NODE_ENV !== "production" && (et = (e, t, n) => {
  mt(e, `[ant-design-vue: ${t}] ${n}`), process.env.NODE_ENV === "test" && b0();
});
let Ac = 0;
class Pp {
  constructor(t) {
    this.derivatives = Array.isArray(t) ? t : [t], this.id = Ac, t.length === 0 && et(t.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function."), Ac += 1;
  }
  getDerivativeToken(t) {
    return this.derivatives.reduce((n, o) => o(t, n), void 0);
  }
}
const qi = new oo();
function Ip(e) {
  const t = Array.isArray(e) ? e : [e];
  return qi.has(t) || qi.set(t, new Pp(t)), qi.get(t);
}
const Mc = /* @__PURE__ */ new WeakMap();
function Xr(e) {
  let t = Mc.get(e) || "";
  return t || (Object.keys(e).forEach((n) => {
    const o = e[n];
    t += n, o instanceof Pp ? t += o.id : o && typeof o == "object" ? t += Xr(o) : t += o;
  }), Mc.set(e, t)), t;
}
function S0(e, t) {
  return Rl(`${t}_${Xr(e)}`);
}
const _o = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ""), Tp = "_bAmBoO_";
function x0(e, t, n) {
  var o, r;
  if (yt()) {
    Ho(e, _o);
    const i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t == null || t(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    const a = n ? n(i) : (o = getComputedStyle(i).content) === null || o === void 0 ? void 0 : o.includes(Tp);
    return (r = i.parentNode) === null || r === void 0 || r.removeChild(i), kr(_o), a;
  }
  return !1;
}
let Ki;
function C0() {
  return Ki === void 0 && (Ki = x0(`@layer ${_o} { .${_o} { content: "${Tp}"!important; } }`, (e) => {
    e.className = _o;
  })), Ki;
}
const Rc = {}, $0 = process.env.NODE_ENV === "production", O0 = process.env.NODE_ENV === "prerender", P0 = !$0 && !O0 ? "css-dev-only-do-not-override" : "css", mn = /* @__PURE__ */ new Map();
function I0(e) {
  mn.set(e, (mn.get(e) || 0) + 1);
}
function T0(e, t) {
  typeof document < "u" && document.querySelectorAll(`style[${hp}="${e}"]`).forEach((o) => {
    var r;
    o[Gn] === t && ((r = o.parentNode) === null || r === void 0 || r.removeChild(o));
  });
}
const E0 = 0;
function _0(e, t) {
  mn.set(e, (mn.get(e) || 0) - 1);
  const n = Array.from(mn.keys()), o = n.filter((r) => (mn.get(r) || 0) <= 0);
  n.length - o.length > E0 && o.forEach((r) => {
    T0(r, t), mn.delete(r);
  });
}
const A0 = (e, t, n, o) => {
  const r = n.getDerivativeToken(e);
  let i = g(g({}, r), t);
  return o && (i = o(i)), i;
};
function M0(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : te({});
  const o = ui(), r = T(() => g({}, ...t.value)), i = T(() => Xr(r.value)), a = T(() => Xr(n.value.override || Rc));
  return wp("token", T(() => [n.value.salt || "", e.value.id, i.value, a.value]), () => {
    const {
      salt: s = "",
      override: c = Rc,
      formatToken: u,
      getComputedToken: d
    } = n.value, f = d ? d(r.value, c, e.value) : A0(r.value, c, e.value, u), p = S0(f, s);
    f._tokenKey = p, I0(p);
    const h = `${P0}-${Rl(p)}`;
    return f._hashId = h, [f, h];
  }, (s) => {
    var c;
    _0(s[0]._tokenKey, (c = o.value) === null || c === void 0 ? void 0 : c.cache.instanceId);
  });
}
var R0 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ep = "comm", _p = "rule", Ap = "decl", F0 = "@import", D0 = "@keyframes", N0 = "@layer", Mp = Math.abs, Fl = String.fromCharCode;
function Rp(e) {
  return e.trim();
}
function Er(e, t, n) {
  return e.replace(t, n);
}
function L0(e, t, n) {
  return e.indexOf(t, n);
}
function Bo(e, t) {
  return e.charCodeAt(t) | 0;
}
function io(e, t, n) {
  return e.slice(t, n);
}
function Tt(e) {
  return e.length;
}
function j0(e) {
  return e.length;
}
function ur(e, t) {
  return t.push(e), e;
}
var fi = 1, ao = 1, Fp = 0, bt = 0, Ne = 0, vo = "";
function Dl(e, t, n, o, r, i, a, l) {
  return { value: e, root: t, parent: n, type: o, props: r, children: i, line: fi, column: ao, length: a, return: "", siblings: l };
}
function H0() {
  return Ne;
}
function B0() {
  return Ne = bt > 0 ? Bo(vo, --bt) : 0, ao--, Ne === 10 && (ao = 1, fi--), Ne;
}
function $t() {
  return Ne = bt < Fp ? Bo(vo, bt++) : 0, ao++, Ne === 10 && (ao = 1, fi++), Ne;
}
function Jt() {
  return Bo(vo, bt);
}
function _r() {
  return bt;
}
function pi(e, t) {
  return io(vo, e, t);
}
function zo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function z0(e) {
  return fi = ao = 1, Fp = Tt(vo = e), bt = 0, [];
}
function V0(e) {
  return vo = "", e;
}
function Yi(e) {
  return Rp(pi(bt - 1, La(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function W0(e) {
  for (; (Ne = Jt()) && Ne < 33; )
    $t();
  return zo(e) > 2 || zo(Ne) > 3 ? "" : " ";
}
function U0(e, t) {
  for (; --t && $t() && !(Ne < 48 || Ne > 102 || Ne > 57 && Ne < 65 || Ne > 70 && Ne < 97); )
    ;
  return pi(e, _r() + (t < 6 && Jt() == 32 && $t() == 32));
}
function La(e) {
  for (; $t(); )
    switch (Ne) {
      case e:
        return bt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && La(Ne);
        break;
      case 40:
        e === 41 && La(e);
        break;
      case 92:
        $t();
        break;
    }
  return bt;
}
function G0(e, t) {
  for (; $t() && e + Ne !== 57; )
    if (e + Ne === 84 && Jt() === 47)
      break;
  return "/*" + pi(t, bt - 1) + "*" + Fl(e === 47 ? e : $t());
}
function k0(e) {
  for (; !zo(Jt()); )
    $t();
  return pi(e, bt);
}
function X0(e) {
  return V0(Ar("", null, null, null, [""], e = z0(e), 0, [0], e));
}
function Ar(e, t, n, o, r, i, a, l, s) {
  for (var c = 0, u = 0, d = a, f = 0, p = 0, h = 0, m = 1, w = 1, b = 1, C = 0, S = "", x = r, $ = i, O = o, y = S; w; )
    switch (h = C, C = $t()) {
      case 40:
        if (h != 108 && Bo(y, d - 1) == 58) {
          L0(y += Er(Yi(C), "&", "&\f"), "&\f", Mp(c ? l[c - 1] : 0)) != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += Yi(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += W0(h);
        break;
      case 92:
        y += U0(_r() - 1, 7);
        continue;
      case 47:
        switch (Jt()) {
          case 42:
          case 47:
            ur(q0(G0($t(), _r()), t, n, s), s), (zo(h || 1) == 5 || zo(Jt() || 1) == 5) && Tt(y) && io(y, -1, void 0) !== " " && (y += " ");
            break;
          default:
            y += "/";
        }
        break;
      case 123 * m:
        l[c++] = Tt(y) * b;
      case 125 * m:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            w = 0;
          case 59 + u:
            b == -1 && (y = Er(y, /\f/g, "")), p > 0 && (Tt(y) - d || m === 0 && h === 47) && ur(p > 32 ? Dc(y + ";", o, n, d - 1, s) : Dc(Er(y, " ", "") + ";", o, n, d - 2, s), s);
            break;
          case 59:
            y += ";";
          default:
            if (ur(O = Fc(y, t, n, c, u, r, l, S, x = [], $ = [], d, i), i), C === 123)
              if (u === 0)
                Ar(y, t, O, O, x, i, d, l, $);
              else
                switch (f === 99 && Bo(y, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ar(e, O, O, o && ur(Fc(e, O, O, 0, 0, r, l, S, r, x = [], d, $), $), r, $, d, l, o ? x : $);
                    break;
                  default:
                    Ar(y, O, O, O, [""], $, 0, l, $);
                }
        }
        c = u = p = 0, m = b = 1, S = y = "", d = a;
        break;
      case 58:
        d = 1 + Tt(y), p = h;
      default:
        if (m < 1) {
          if (C == 123)
            --m;
          else if (C == 125 && m++ == 0 && B0() == 125)
            continue;
        }
        switch (y += Fl(C), C * m) {
          case 38:
            b = u > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            l[c++] = (Tt(y) - 1) * b, b = 1;
            break;
          case 64:
            Jt() === 45 && (y += Yi($t())), f = Jt(), u = d = Tt(S = y += k0(_r())), C++;
            break;
          case 45:
            h === 45 && Tt(y) == 2 && (m = 0);
        }
    }
  return i;
}
function Fc(e, t, n, o, r, i, a, l, s, c, u, d) {
  for (var f = r - 1, p = r === 0 ? i : [""], h = j0(p), m = 0, w = 0, b = 0; m < o; ++m)
    for (var C = 0, S = io(e, f + 1, f = Mp(w = a[m])), x = e; C < h; ++C)
      (x = Rp(w > 0 ? p[C] + " " + S : Er(S, /&\f/g, p[C]))) && (s[b++] = x);
  return Dl(e, t, n, r === 0 ? _p : l, s, c, u, d);
}
function q0(e, t, n, o) {
  return Dl(e, t, n, Ep, Fl(H0()), io(e, 2, -2), 0, o);
}
function Dc(e, t, n, o, r) {
  return Dl(e, t, n, Ap, io(e, 0, o), io(e, o + 1, -1), o, r);
}
function ja(e, t) {
  for (var n = "", o = 0; o < e.length; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function K0(e, t, n, o) {
  switch (e.type) {
    case N0:
      if (e.children.length) break;
    case F0:
    case Ap:
      return e.return = e.return || e.value;
    case Ep:
      return "";
    case D0:
      return e.return = e.value + "{" + ja(e.children, o) + "}";
    case _p:
      if (!Tt(e.value = e.props.join(","))) return "";
  }
  return Tt(n = ja(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function Dp(e, t) {
  const {
    path: n,
    parentSelectors: o
  } = t;
  mt(!1, `[Ant Design Vue CSS-in-JS] ${n ? `Error in '${n}': ` : ""}${e}${o.length ? ` Selector info: ${o.join(" -> ")}` : ""}`);
}
const Y0 = (e, t, n) => {
  if (e === "content") {
    const o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    (typeof t != "string" || ["normal", "none", "initial", "inherit", "unset"].indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Dp(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${t}"'\`.`, n);
  }
}, Q0 = (e, t, n) => {
  e === "animation" && n.hashId && t !== "none" && Dp(`You seem to be using hashed animation '${t}', in which case 'animationName' with Keyframe as value is recommended.`, n);
}, Nc = "data-ant-cssinjs-cache-path", Z0 = "_FILE_STYLE__";
let wn, Np = !0;
function J0() {
  var e;
  if (!wn && (wn = {}, yt())) {
    const t = document.createElement("div");
    t.className = Nc, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    let n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach((r) => {
      const [i, a] = r.split(":");
      wn[i] = a;
    });
    const o = document.querySelector(`style[${Nc}]`);
    o && (Np = !1, (e = o.parentNode) === null || e === void 0 || e.removeChild(o)), document.body.removeChild(t);
  }
}
function ey(e) {
  return J0(), !!wn[e];
}
function ty(e) {
  const t = wn[e];
  let n = null;
  if (t && yt())
    if (Np)
      n = Z0;
    else {
      const o = document.querySelector(`style[${bn}="${wn[e]}"]`);
      o ? n = o.innerHTML : delete wn[e];
    }
  return [n, t];
}
const Lc = yt(), Lp = "_skip_check_", jp = "_multi_value_";
function jc(e) {
  return ja(X0(e), K0).replace(/\{%%%\:[^;];}/g, ";");
}
function ny(e) {
  return typeof e == "object" && e && (Lp in e || jp in e);
}
function oy(e, t, n) {
  if (!t)
    return e;
  const o = `.${t}`, r = n === "low" ? `:where(${o})` : o;
  return e.split(",").map((a) => {
    var l;
    const s = a.trim().split(/\s+/);
    let c = s[0] || "";
    const u = ((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return c = `${u}${r}${c.slice(u.length)}`, [c, ...s.slice(1)].join(" ");
  }).join(",");
}
const Ha = /* @__PURE__ */ new Set();
process.env.NODE_ENV;
const Ba = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    root: n,
    injectHash: o,
    parentSelectors: r
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  };
  const {
    hashId: i,
    layer: a,
    path: l,
    hashPriority: s,
    transformers: c = [],
    linters: u = []
  } = t;
  let d = "", f = {};
  function p(w) {
    const b = w.getName(i);
    if (!f[b]) {
      const [C] = Ba(w.style, t, {
        root: !1,
        parentSelectors: r
      });
      f[b] = `@keyframes ${w.getName(i)}${C}`;
    }
  }
  function h(w) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return w.forEach((C) => {
      Array.isArray(C) ? h(C, b) : C && b.push(C);
    }), b;
  }
  if (h(Array.isArray(e) ? e : [e]).forEach((w) => {
    const b = typeof w == "string" && !n ? {} : w;
    if (typeof b == "string")
      d += `${b}
`;
    else if (b._keyframe)
      p(b);
    else {
      const C = c.reduce((S, x) => {
        var $;
        return (($ = x == null ? void 0 : x.visit) === null || $ === void 0 ? void 0 : $.call(x, S)) || S;
      }, b);
      Object.keys(C).forEach((S) => {
        var x;
        const $ = C[S];
        if (typeof $ == "object" && $ && (S !== "animationName" || !$._keyframe) && !ny($)) {
          let O = !1, y = S.trim(), I = !1;
          (n || o) && i ? y.startsWith("@") ? O = !0 : y = oy(S, i, s) : n && !i && (y === "&" || y === "") && (y = "", I = !0);
          const [E, R] = Ba($, t, {
            root: I,
            injectHash: O,
            parentSelectors: [...r, y]
          });
          f = g(g({}, f), R), d += `${y}${E}`;
        } else {
          let O = function(I, E) {
            process.env.NODE_ENV !== "production" && (typeof $ != "object" || !($ != null && $[Lp])) && [Y0, Q0, ...u].forEach((N) => N(I, E, {
              path: l,
              hashId: i,
              parentSelectors: r
            }));
            const R = I.replace(/[A-Z]/g, (N) => `-${N.toLowerCase()}`);
            let _ = E;
            !R0[I] && typeof _ == "number" && _ !== 0 && (_ = `${_}px`), I === "animationName" && (E != null && E._keyframe) && (p(E), _ = E.getName(i)), d += `${R}:${_};`;
          };
          const y = (x = $ == null ? void 0 : $.value) !== null && x !== void 0 ? x : $;
          typeof $ == "object" && ($ != null && $[jp]) && Array.isArray(y) ? y.forEach((I) => {
            O(S, I);
          }) : O(S, y);
        }
      });
    }
  }), !n)
    d = `{${d}}`;
  else if (a && C0()) {
    const w = a.split(",");
    d = `@layer ${w[w.length - 1].trim()} {${d}}`, w.length > 1 && (d = `@layer ${a}{%%%:%}${d}`);
  }
  return [d, f];
};
function ry(e, t) {
  return Rl(`${e.join("%")}${t}`);
}
function za(e, t) {
  const n = ui(), o = T(() => e.value.token._tokenKey), r = T(() => [o.value, ...e.value.path]);
  let i = Lc;
  return process.env.NODE_ENV !== "production" && n.value.mock !== void 0 && (i = n.value.mock === "client"), wp(
    "style",
    r,
    // Create cache if needed
    () => {
      const {
        path: a,
        hashId: l,
        layer: s,
        nonce: c,
        clientOnly: u,
        order: d = 0
      } = e.value, f = r.value.join("|");
      if (ey(f)) {
        const [y, I] = ty(f);
        if (y)
          return [y, o.value, I, {}, u, d];
      }
      const p = t(), {
        hashPriority: h,
        container: m,
        transformers: w,
        linters: b,
        cache: C
      } = n.value, [S, x] = Ba(p, {
        hashId: l,
        hashPriority: h,
        layer: s,
        path: a.join("-"),
        transformers: w,
        linters: b
      }), $ = jc(S), O = ry(r.value, $);
      if (i) {
        const y = {
          mark: bn,
          prepend: "queue",
          attachTo: m,
          priority: d
        }, I = typeof c == "function" ? c() : c;
        I && (y.csp = {
          nonce: I
        });
        const E = Ho($, O, y);
        E[Gn] = C.instanceId, E.setAttribute(hp, o.value), process.env.NODE_ENV !== "production" && E.setAttribute(l0, r.value.join("|")), Object.keys(x).forEach((R) => {
          Ha.has(R) || (Ha.add(R), Ho(jc(x[R]), `_effect-${R}`, {
            mark: bn,
            prepend: "queue",
            attachTo: m
          }));
        });
      }
      return [$, o.value, O, x, u, d];
    },
    // Remove cache if no need
    (a, l) => {
      let [, , s] = a;
      (l || n.value.autoClear) && Lc && kr(s, {
        mark: bn
      });
    }
  ), (a) => a;
}
class fe {
  constructor(t, n) {
    this._keyframe = !0, this.name = t, this.style = n;
  }
  getName() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return t ? `${t}-${this.name}` : this.name;
  }
}
const iy = "4.2.6", Vo = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function We(e, t) {
  ay(e) && (e = "100%");
  var n = ly(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function dr(e) {
  return Math.min(1, Math.max(0, e));
}
function ay(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function ly(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Hp(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function fr(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function vn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function sy(e, t, n) {
  return {
    r: We(e, 255) * 255,
    g: We(t, 255) * 255,
    b: We(n, 255) * 255
  };
}
function Hc(e, t, n) {
  e = We(e, 255), t = We(t, 255), n = We(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), i = 0, a = 0, l = (o + r) / 2;
  if (o === r)
    a = 0, i = 0;
  else {
    var s = o - r;
    switch (a = l > 0.5 ? s / (2 - o - r) : s / (o + r), o) {
      case e:
        i = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / s + 2;
        break;
      case n:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l };
}
function Qi(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function cy(e, t, n) {
  var o, r, i;
  if (e = We(e, 360), t = We(t, 100), n = We(n, 100), t === 0)
    r = n, i = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = Qi(l, a, e + 1 / 3), r = Qi(l, a, e), i = Qi(l, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: i * 255 };
}
function Va(e, t, n) {
  e = We(e, 255), t = We(t, 255), n = We(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), i = 0, a = o, l = o - r, s = o === 0 ? 0 : l / o;
  if (o === r)
    i = 0;
  else {
    switch (o) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s, v: a };
}
function uy(e, t, n) {
  e = We(e, 360) * 6, t = We(t, 100), n = We(n, 100);
  var o = Math.floor(e), r = e - o, i = n * (1 - t), a = n * (1 - r * t), l = n * (1 - (1 - r) * t), s = o % 6, c = [n, a, i, i, l, n][s], u = [l, n, n, a, i, i][s], d = [i, i, l, n, n, a][s];
  return { r: c * 255, g: u * 255, b: d * 255 };
}
function Wa(e, t, n, o) {
  var r = [
    vn(Math.round(e).toString(16)),
    vn(Math.round(t).toString(16)),
    vn(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function dy(e, t, n, o, r) {
  var i = [
    vn(Math.round(e).toString(16)),
    vn(Math.round(t).toString(16)),
    vn(Math.round(n).toString(16)),
    vn(fy(o))
  ];
  return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function fy(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Bc(e) {
  return at(e) / 255;
}
function at(e) {
  return parseInt(e, 16);
}
function py(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Ua = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Bn(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, i = null, a = !1, l = !1;
  return typeof e == "string" && (e = vy(e)), typeof e == "object" && (Nt(e.r) && Nt(e.g) && Nt(e.b) ? (t = sy(e.r, e.g, e.b), a = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Nt(e.h) && Nt(e.s) && Nt(e.v) ? (o = fr(e.s), r = fr(e.v), t = uy(e.h, o, r), a = !0, l = "hsv") : Nt(e.h) && Nt(e.s) && Nt(e.l) && (o = fr(e.s), i = fr(e.l), t = cy(e.h, o, i), a = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Hp(n), {
    ok: a,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var my = "[-\\+]?\\d+%?", gy = "[-\\+]?\\d*\\.\\d+%?", en = "(?:".concat(gy, ")|(?:").concat(my, ")"), Zi = "[\\s|\\(]+(".concat(en, ")[,|\\s]+(").concat(en, ")[,|\\s]+(").concat(en, ")\\s*\\)?"), Ji = "[\\s|\\(]+(".concat(en, ")[,|\\s]+(").concat(en, ")[,|\\s]+(").concat(en, ")[,|\\s]+(").concat(en, ")\\s*\\)?"), xt = {
  CSS_UNIT: new RegExp(en),
  rgb: new RegExp("rgb" + Zi),
  rgba: new RegExp("rgba" + Ji),
  hsl: new RegExp("hsl" + Zi),
  hsla: new RegExp("hsla" + Ji),
  hsv: new RegExp("hsv" + Zi),
  hsva: new RegExp("hsva" + Ji),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function vy(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Ua[e])
    e = Ua[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = xt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = xt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = xt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = xt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = xt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = xt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = xt.hex8.exec(e), n ? {
    r: at(n[1]),
    g: at(n[2]),
    b: at(n[3]),
    a: Bc(n[4]),
    format: t ? "name" : "hex8"
  } : (n = xt.hex6.exec(e), n ? {
    r: at(n[1]),
    g: at(n[2]),
    b: at(n[3]),
    format: t ? "name" : "hex"
  } : (n = xt.hex4.exec(e), n ? {
    r: at(n[1] + n[1]),
    g: at(n[2] + n[2]),
    b: at(n[3] + n[3]),
    a: Bc(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = xt.hex3.exec(e), n ? {
    r: at(n[1] + n[1]),
    g: at(n[2] + n[2]),
    b: at(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Nt(e) {
  return !!xt.CSS_UNIT.exec(String(e));
}
var He = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = py(t)), this.originalInput = t;
      var r = Bn(t);
      this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (o = n.format) !== null && o !== void 0 ? o : r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, o, r, i = t.r / 255, a = t.g / 255, l = t.b / 255;
      return i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? o = a / 12.92 : o = Math.pow((a + 0.055) / 1.055, 2.4), l <= 0.03928 ? r = l / 12.92 : r = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Hp(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Va(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Va(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Hc(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Hc(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Wa(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), dy(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), o = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(o, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(o, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(We(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(We(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Wa(this.r, this.g, this.b, !1), n = 0, o = Object.entries(Ua); n < o.length; n++) {
        var r = o[n], i = r[0], a = r[1];
        if (t === a)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var o = !1, r = this.a < 1 && this.a >= 0, i = !n && r && (t.startsWith("hex") || t === "name");
      return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = dr(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = dr(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = dr(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = dr(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), i = n / 100, a = {
        r: (r.r - o.r) * i + o.r,
        g: (r.g - o.g) * i + o.g,
        b: (r.b - o.b) * i + o.b,
        a: (r.a - o.a) * i + o.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), r = 360 / n, i = [this];
      for (o.h = (o.h - (r * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + r) % 360, i.push(new e(o));
      return i;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, r = n.s, i = n.v, a = [], l = 1 / t; t--; )
        a.push(new e({ h: o, s: r, v: i })), i = (i + l) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), o = new e(t).toRgb(), r = n.a + o.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + o.r * o.a * (1 - n.a)) / r,
        g: (n.g * n.a + o.g * o.a * (1 - n.a)) / r,
        b: (n.b * n.a + o.b * o.a * (1 - n.a)) / r,
        a: r
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), o = n.h, r = [this], i = 360 / t, a = 1; a < t; a++)
        r.push(new e({ h: (o + a * i) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), pr = 2, zc = 0.16, hy = 0.05, yy = 0.05, by = 0.15, Bp = 5, zp = 4, wy = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function Vc(e) {
  var t = e.r, n = e.g, o = e.b, r = Va(t, n, o);
  return {
    h: r.h * 360,
    s: r.s,
    v: r.v
  };
}
function mr(e) {
  var t = e.r, n = e.g, o = e.b;
  return "#".concat(Wa(t, n, o, !1));
}
function Sy(e, t, n) {
  var o = n / 100, r = {
    r: (t.r - e.r) * o + e.r,
    g: (t.g - e.g) * o + e.g,
    b: (t.b - e.b) * o + e.b
  };
  return r;
}
function Wc(e, t, n) {
  var o;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? o = n ? Math.round(e.h) - pr * t : Math.round(e.h) + pr * t : o = n ? Math.round(e.h) + pr * t : Math.round(e.h) - pr * t, o < 0 ? o += 360 : o >= 360 && (o -= 360), o;
}
function Uc(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var o;
  return n ? o = e.s - zc * t : t === zp ? o = e.s + zc : o = e.s + hy * t, o > 1 && (o = 1), n && t === Bp && o > 0.1 && (o = 0.1), o < 0.06 && (o = 0.06), Number(o.toFixed(2));
}
function Gc(e, t, n) {
  var o;
  return n ? o = e.v + yy * t : o = e.v - by * t, o > 1 && (o = 1), Number(o.toFixed(2));
}
function xn(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], o = Bn(e), r = Bp; r > 0; r -= 1) {
    var i = Vc(o), a = mr(Bn({
      h: Wc(i, r, !0),
      s: Uc(i, r, !0),
      v: Gc(i, r, !0)
    }));
    n.push(a);
  }
  n.push(mr(o));
  for (var l = 1; l <= zp; l += 1) {
    var s = Vc(o), c = mr(Bn({
      h: Wc(s, l),
      s: Uc(s, l),
      v: Gc(s, l)
    }));
    n.push(c);
  }
  return t.theme === "dark" ? wy.map(function(u) {
    var d = u.index, f = u.opacity, p = mr(Sy(Bn(t.backgroundColor || "#141414"), Bn(n[d]), f * 100));
    return p;
  }) : n;
}
var Kn = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Mr = {}, ea = {};
Object.keys(Kn).forEach(function(e) {
  Mr[e] = xn(Kn[e]), Mr[e].primary = Mr[e][5], ea[e] = xn(Kn[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), ea[e].primary = ea[e][5];
});
var xy = Mr.blue;
const Cy = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function $y(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3)
    // 4
  };
}
const Vp = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, mi = g(g({}, Vp), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1
});
function Oy(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: o
  } = t;
  const {
    colorSuccess: r,
    colorWarning: i,
    colorError: a,
    colorInfo: l,
    colorPrimary: s,
    colorBgBase: c,
    colorTextBase: u
  } = e, d = n(s), f = n(r), p = n(i), h = n(a), m = n(l), w = o(c, u);
  return g(g({}, w), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: f[1],
    colorSuccessBgHover: f[2],
    colorSuccessBorder: f[3],
    colorSuccessBorderHover: f[4],
    colorSuccessHover: f[4],
    colorSuccess: f[6],
    colorSuccessActive: f[7],
    colorSuccessTextHover: f[8],
    colorSuccessText: f[9],
    colorSuccessTextActive: f[10],
    colorErrorBg: h[1],
    colorErrorBgHover: h[2],
    colorErrorBorder: h[3],
    colorErrorBorderHover: h[4],
    colorErrorHover: h[5],
    colorError: h[6],
    colorErrorActive: h[7],
    colorErrorTextHover: h[8],
    colorErrorText: h[9],
    colorErrorTextActive: h[10],
    colorWarningBg: p[1],
    colorWarningBgHover: p[2],
    colorWarningBorder: p[3],
    colorWarningBorderHover: p[4],
    colorWarningHover: p[4],
    colorWarning: p[6],
    colorWarningActive: p[7],
    colorWarningTextHover: p[8],
    colorWarningText: p[9],
    colorWarningTextActive: p[10],
    colorInfoBg: m[1],
    colorInfoBgHover: m[2],
    colorInfoBorder: m[3],
    colorInfoBorderHover: m[4],
    colorInfoHover: m[4],
    colorInfo: m[6],
    colorInfoActive: m[7],
    colorInfoTextHover: m[8],
    colorInfoText: m[9],
    colorInfoTextActive: m[10],
    colorBgMask: new He("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Py = (e) => {
  let t = e, n = e, o = e, r = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? o = 1 : e >= 6 && (o = 2), e > 4 && e < 8 ? r = 4 : e >= 8 && (r = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: o,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: r
  };
};
function Iy(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: o,
    lineWidth: r
  } = e;
  return g({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: r + 1
  }, Py(o));
}
const Lt = (e, t) => new He(e).setAlpha(t).toRgbString(), So = (e, t) => new He(e).darken(t).toHexString(), Ty = (e) => {
  const t = xn(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Ey = (e, t) => {
  const n = e || "#fff", o = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: o,
    colorText: Lt(o, 0.88),
    colorTextSecondary: Lt(o, 0.65),
    colorTextTertiary: Lt(o, 0.45),
    colorTextQuaternary: Lt(o, 0.25),
    colorFill: Lt(o, 0.15),
    colorFillSecondary: Lt(o, 0.06),
    colorFillTertiary: Lt(o, 0.04),
    colorFillQuaternary: Lt(o, 0.02),
    colorBgLayout: So(n, 4),
    colorBgContainer: So(n, 0),
    colorBgElevated: So(n, 0),
    colorBgSpotlight: Lt(o, 0.85),
    colorBorder: So(n, 15),
    colorBorderSecondary: So(n, 6)
  };
};
function _y(e) {
  const t = new Array(10).fill(null).map((n, o) => {
    const r = o - 1, i = e * Math.pow(2.71828, r / 5), a = o > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return t[1] = e, t.map((n) => {
    const o = n + 8;
    return {
      size: n,
      lineHeight: o / n
    };
  });
}
const Ay = (e) => {
  const t = _y(e), n = t.map((r) => r.size), o = t.map((r) => r.lineHeight);
  return {
    fontSizeSM: n[0],
    fontSize: n[1],
    fontSizeLG: n[2],
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: o[1],
    lineHeightLG: o[2],
    lineHeightSM: o[0],
    lineHeightHeading1: o[6],
    lineHeightHeading2: o[5],
    lineHeightHeading3: o[4],
    lineHeightHeading4: o[3],
    lineHeightHeading5: o[2]
  };
};
function My(e) {
  const t = Object.keys(Vp).map((n) => {
    const o = xn(e[n]);
    return new Array(10).fill(1).reduce((r, i, a) => (r[`${n}-${a + 1}`] = o[a], r), {});
  }).reduce((n, o) => (n = g(g({}, n), o), n), {});
  return g(g(g(g(g(g(g({}, e), t), Oy(e, {
    generateColorPalettes: Ty,
    generateNeutralColorPalettes: Ey
  })), Ay(e.fontSize)), $y(e)), Cy(e)), Iy(e));
}
function ta(e) {
  return e >= 0 && e <= 255;
}
function gr(e, t) {
  const {
    r: n,
    g: o,
    b: r,
    a: i
  } = new He(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: l,
    b: s
  } = new He(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((n - a * (1 - c)) / c), d = Math.round((o - l * (1 - c)) / c), f = Math.round((r - s * (1 - c)) / c);
    if (ta(u) && ta(d) && ta(f))
      return new He({
        r: u,
        g: d,
        b: f,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new He({
    r: n,
    g: o,
    b: r,
    a: 1
  }).toRgbString();
}
var Ry = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function Fy(e) {
  const {
    override: t
  } = e, n = Ry(e, ["override"]), o = g({}, t);
  Object.keys(mi).forEach((p) => {
    delete o[p];
  });
  const r = g(g({}, n), o), i = 480, a = 576, l = 768, s = 992, c = 1200, u = 1600, d = 2e3;
  return g(g(g({}, r), {
    colorLink: r.colorInfoText,
    colorLinkHover: r.colorInfoHover,
    colorLinkActive: r.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: r.colorFillSecondary,
    colorFillContentHover: r.colorFill,
    colorFillAlter: r.colorFillQuaternary,
    colorBgContainerDisabled: r.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: r.colorBgContainer,
    colorSplit: gr(r.colorBorderSecondary, r.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: r.colorTextQuaternary,
    colorTextDisabled: r.colorTextQuaternary,
    colorTextHeading: r.colorText,
    colorTextLabel: r.colorTextSecondary,
    colorTextDescription: r.colorTextTertiary,
    colorTextLightSolid: r.colorWhite,
    colorHighlight: r.colorError,
    colorBgTextHover: r.colorFillSecondary,
    colorBgTextActive: r.colorFill,
    colorIcon: r.colorTextTertiary,
    colorIconHover: r.colorText,
    colorErrorOutline: gr(r.colorErrorBg, r.colorBgContainer),
    colorWarningOutline: gr(r.colorWarningBg, r.colorBgContainer),
    // Font
    fontSizeIcon: r.fontSizeSM,
    // Control
    lineWidth: r.lineWidth,
    controlOutlineWidth: r.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: r.controlHeight / 2,
    controlItemBgHover: r.colorFillTertiary,
    controlItemBgActive: r.colorPrimaryBg,
    controlItemBgActiveHover: r.colorPrimaryBgHover,
    controlItemBgActiveDisabled: r.colorFill,
    controlTmpOutline: r.colorFillQuaternary,
    controlOutline: gr(r.colorPrimaryBg, r.colorBgContainer),
    lineType: r.lineType,
    borderRadius: r.borderRadius,
    borderRadiusXS: r.borderRadiusXS,
    borderRadiusSM: r.borderRadiusSM,
    borderRadiusLG: r.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: r.sizeXXS,
    paddingXS: r.sizeXS,
    paddingSM: r.sizeSM,
    padding: r.size,
    paddingMD: r.sizeMD,
    paddingLG: r.sizeLG,
    paddingXL: r.sizeXL,
    paddingContentHorizontalLG: r.sizeLG,
    paddingContentVerticalLG: r.sizeMS,
    paddingContentHorizontal: r.sizeMS,
    paddingContentVertical: r.sizeSM,
    paddingContentHorizontalSM: r.size,
    paddingContentVerticalSM: r.sizeXS,
    marginXXS: r.sizeXXS,
    marginXS: r.sizeXS,
    marginSM: r.sizeSM,
    margin: r.size,
    marginMD: r.sizeMD,
    marginLG: r.sizeLG,
    marginXL: r.sizeXL,
    marginXXL: r.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: a - 1,
    screenSM: a,
    screenSMMin: a,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: s - 1,
    screenLG: s,
    screenLGMin: s,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    screenXXLMax: d - 1,
    screenXXXL: d,
    screenXXXLMin: d,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new He("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new He("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new He("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), o);
}
const Dy = (e, t, n, o, r) => {
  const i = e / 2, a = 0, l = i, s = n * 1 / Math.sqrt(2), c = i - n * (1 - 1 / Math.sqrt(2)), u = i - t * (1 / Math.sqrt(2)), d = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)), f = 2 * i - u, p = d, h = 2 * i - s, m = c, w = 2 * i - a, b = l, C = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2), S = n * (Math.sqrt(2) - 1);
  return {
    pointerEvents: "none",
    width: e,
    height: e,
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      width: C,
      height: C,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${t}px 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: r,
      zIndex: 0,
      background: "transparent"
    },
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: e,
      height: e / 2,
      background: o,
      clipPath: {
        _multi_value_: !0,
        value: [`polygon(${S}px 100%, 50% ${S}px, ${2 * i - S}px 100%, ${S}px 100%)`, `path('M ${a} ${l} A ${n} ${n} 0 0 0 ${s} ${c} L ${u} ${d} A ${t} ${t} 0 0 1 ${f} ${p} L ${h} ${m} A ${n} ${n} 0 0 0 ${w} ${b} Z')`]
      },
      content: '""'
    }
  };
};
function Ny(e, t) {
  return Vo.reduce((n, o) => {
    const r = e[`${o}-1`], i = e[`${o}-3`], a = e[`${o}-6`], l = e[`${o}-7`];
    return g(g({}, n), t(o, {
      lightColor: r,
      lightBorderColor: i,
      darkColor: a,
      textColor: l
    }));
  }, {});
}
const Wo = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, ot = (e) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: e.fontFamily
}), Nl = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), gi = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), Ly = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), jy = (e, t) => {
  const {
    fontFamily: n,
    fontSize: o
  } = e, r = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [r]: {
      fontFamily: n,
      fontSize: o,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [r]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
}, Hy = (e) => ({
  outline: `${e.lineWidthBold}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Wp = (e) => ({
  "&:focus-visible": g({}, Hy(e))
});
function Ge(e, t, n) {
  return (o) => {
    const r = T(() => o == null ? void 0 : o.value), [i, a, l] = ho(), {
      getPrefixCls: s,
      iconPrefixCls: c
    } = ci(), u = T(() => s()), d = T(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: ["Shared", u.value]
    }));
    za(d, () => [{
      // Link
      "&": Ly(a.value)
    }]);
    const f = T(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: [e, r.value, c.value]
    }));
    return [za(f, () => {
      const {
        token: p,
        flush: h
      } = zy(a.value), m = typeof n == "function" ? n(p) : n, w = g(g({}, m), a.value[e]), b = `.${r.value}`, C = we(p, {
        componentCls: b,
        prefixCls: r.value,
        iconCls: `.${c.value}`,
        antCls: `.${u.value}`
      }, w), S = t(C, {
        hashId: l.value,
        prefixCls: r.value,
        rootPrefixCls: u.value,
        iconPrefixCls: c.value,
        overrideComponentToken: a.value[e]
      });
      return h(e, w), [jy(a.value, r.value), S];
    }), l];
  };
}
const Up = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let Ga = !0;
function we() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Up)
    return g({}, ...t);
  Ga = !1;
  const o = {};
  return t.forEach((r) => {
    Object.keys(r).forEach((a) => {
      Object.defineProperty(o, a, {
        configurable: !0,
        enumerable: !0,
        get: () => r[a]
      });
    });
  }), Ga = !0, o;
}
function By() {
}
function zy(e) {
  let t, n = e, o = By;
  return Up && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(r, i) {
      return Ga && t.add(i), r[i];
    }
  }), o = (r, i) => {
    Array.from(t);
  }), {
    token: n,
    keys: t,
    flush: o
  };
}
const Vy = Ip(My), Gp = {
  token: mi,
  hashed: !0
}, kp = Symbol("DesignTokenContext"), ka = k(), Wy = (e) => {
  _e(kp, e), ae(e, () => {
    ka.value = ge(e), qf(ka);
  }, {
    immediate: !0,
    deep: !0
  });
}, Uy = Z({
  props: {
    value: pe()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Wy(T(() => e.value)), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
function ho() {
  const e = Ee(kp, T(() => ka.value || Gp)), t = T(() => `${iy}-${e.value.hashed || ""}`), n = T(() => e.value.theme || Vy), o = M0(n, T(() => [mi, e.value.token]), T(() => ({
    salt: t.value,
    override: g({
      override: e.value.token
    }, e.value.components),
    formatToken: Fy
  })));
  return [n, T(() => o.value[0]), T(() => e.value.hashed ? o.value[1] : "")];
}
const Ll = Z({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = ho(), t = T(() => new He(e.value.colorBgBase).toHsl().l < 0.5 ? {
      opacity: 0.65
    } : {});
    return () => v("svg", {
      style: t.value,
      width: "184",
      height: "152",
      viewBox: "0 0 184 152",
      xmlns: "http://www.w3.org/2000/svg"
    }, [v("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, [v("g", {
      transform: "translate(24 31.67)"
    }, [v("ellipse", {
      "fill-opacity": ".8",
      fill: "#F5F5F7",
      cx: "67.797",
      cy: "106.89",
      rx: "67.797",
      ry: "12.668"
    }, null), v("path", {
      d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      fill: "#AEB8C2"
    }, null), v("path", {
      d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      fill: "url(#linearGradient-1)",
      transform: "translate(13.56)"
    }, null), v("path", {
      d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      fill: "#F5F5F7"
    }, null), v("path", {
      d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      fill: "#DCE0E6"
    }, null)]), v("path", {
      d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      fill: "#DCE0E6"
    }, null), v("g", {
      transform: "translate(149.65 15.383)",
      fill: "#FFF"
    }, [v("ellipse", {
      cx: "20.654",
      cy: "3.167",
      rx: "2.849",
      ry: "2.815"
    }, null), v("path", {
      d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Ll.PRESENTED_IMAGE_DEFAULT = !0;
const Xp = Z({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = ho(), t = T(() => {
      const {
        colorFill: n,
        colorFillTertiary: o,
        colorFillQuaternary: r,
        colorBgContainer: i
      } = e.value;
      return {
        borderColor: new He(n).onBackground(i).toHexString(),
        shadowColor: new He(o).onBackground(i).toHexString(),
        contentColor: new He(r).onBackground(i).toHexString()
      };
    });
    return () => v("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, [v("g", {
      transform: "translate(0 1)",
      fill: "none",
      "fill-rule": "evenodd"
    }, [v("ellipse", {
      fill: t.value.shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }, null), v("g", {
      "fill-rule": "nonzero",
      stroke: t.value.borderColor
    }, [v("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), v("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: t.value.contentColor
    }, null)])])]);
  }
});
Xp.PRESENTED_IMAGE_SIMPLE = !0;
const Gy = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: o,
    marginXL: r,
    fontSize: i,
    lineHeight: a
  } = e;
  return {
    [t]: {
      marginInline: o,
      fontSize: i,
      lineHeight: a,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: o,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          height: "100%",
          margin: "auto"
        }
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-footer`]: {
        marginTop: n
      },
      "&-normal": {
        marginBlock: r,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: o,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, ky = Ge("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, o = we(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [Gy(o)];
});
var Xy = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const qy = () => ({
  prefixCls: String,
  imageStyle: pe(),
  image: Re(),
  description: Re()
}), jl = Z({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: qy(),
  setup(e, t) {
    let {
      slots: n = {},
      attrs: o
    } = t;
    const {
      direction: r,
      prefixCls: i
    } = Se("empty", e), [a, l] = ky(i);
    return () => {
      var s, c;
      const u = i.value, d = g(g({}, e), o), {
        image: f = ((s = n.image) === null || s === void 0 ? void 0 : s.call(n)) || eo(Ll),
        description: p = ((c = n.description) === null || c === void 0 ? void 0 : c.call(n)) || void 0,
        imageStyle: h,
        class: m = ""
      } = d, w = Xy(d, ["image", "description", "imageStyle", "class"]), b = typeof f == "function" ? f() : f, C = typeof b == "object" && "type" in b && b.type.PRESENTED_IMAGE_SIMPLE;
      return a(v(vp, {
        componentName: "Empty",
        children: (S) => {
          const x = typeof p < "u" ? p : S.description, $ = typeof x == "string" ? x : "empty";
          let O = null;
          return typeof b == "string" ? O = v("img", {
            alt: $,
            src: b
          }, null) : O = b, v("div", D({
            class: oe(u, m, l.value, {
              [`${u}-normal`]: C,
              [`${u}-rtl`]: r.value === "rtl"
            })
          }, w), [v("div", {
            class: `${u}-image`,
            style: h
          }, [O]), x && v("p", {
            class: `${u}-description`
          }, [x]), n.default && v("div", {
            class: `${u}-footer`
          }, [ht(n.default())])]);
        }
      }, null));
    };
  }
});
jl.PRESENTED_IMAGE_DEFAULT = () => eo(Ll);
jl.PRESENTED_IMAGE_SIMPLE = () => eo(Xp);
const xo = In(jl), Hl = (e) => {
  const {
    prefixCls: t
  } = Se("empty", e);
  return ((o) => {
    switch (o) {
      case "Table":
      case "List":
        return v(xo, {
          image: xo.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return v(xo, {
          image: xo.PRESENTED_IMAGE_SIMPLE,
          class: `${t.value}-small`
        }, null);
      default:
        return v(xo, null, null);
    }
  })(e.componentName);
};
function Ky(e) {
  return v(Hl, {
    componentName: e
  }, null);
}
const qp = Symbol("SizeContextKey"), Kp = () => Ee(qp, te(void 0)), Yp = (e) => {
  const t = Kp();
  return _e(qp, T(() => e.value || t.value)), e;
}, Se = (e, t) => {
  const n = Kp(), o = Tn(), r = Ee(Ml, g(g({}, fp), {
    renderEmpty: (y) => eo(Hl, {
      componentName: y
    })
  })), i = T(() => r.getPrefixCls(e, t.prefixCls)), a = T(() => {
    var y, I;
    return (y = t.direction) !== null && y !== void 0 ? y : (I = r.direction) === null || I === void 0 ? void 0 : I.value;
  }), l = T(() => {
    var y;
    return (y = t.iconPrefixCls) !== null && y !== void 0 ? y : r.iconPrefixCls.value;
  }), s = T(() => r.getPrefixCls()), c = T(() => {
    var y;
    return (y = r.autoInsertSpaceInButton) === null || y === void 0 ? void 0 : y.value;
  }), u = r.renderEmpty, d = r.space, f = r.pageHeader, p = r.form, h = T(() => {
    var y, I;
    return (y = t.getTargetContainer) !== null && y !== void 0 ? y : (I = r.getTargetContainer) === null || I === void 0 ? void 0 : I.value;
  }), m = T(() => {
    var y, I, E;
    return (I = (y = t.getContainer) !== null && y !== void 0 ? y : t.getPopupContainer) !== null && I !== void 0 ? I : (E = r.getPopupContainer) === null || E === void 0 ? void 0 : E.value;
  }), w = T(() => {
    var y, I;
    return (y = t.dropdownMatchSelectWidth) !== null && y !== void 0 ? y : (I = r.dropdownMatchSelectWidth) === null || I === void 0 ? void 0 : I.value;
  }), b = T(() => {
    var y;
    return (t.virtual === void 0 ? ((y = r.virtual) === null || y === void 0 ? void 0 : y.value) !== !1 : t.virtual !== !1) && w.value !== !1;
  }), C = T(() => t.size || n.value), S = T(() => {
    var y, I, E;
    return (y = t.autocomplete) !== null && y !== void 0 ? y : (E = (I = r.input) === null || I === void 0 ? void 0 : I.value) === null || E === void 0 ? void 0 : E.autocomplete;
  }), x = T(() => {
    var y;
    return (y = t.disabled) !== null && y !== void 0 ? y : o.value;
  }), $ = T(() => {
    var y;
    return (y = t.csp) !== null && y !== void 0 ? y : r.csp;
  }), O = T(() => {
    var y, I;
    return (y = t.wave) !== null && y !== void 0 ? y : (I = r.wave) === null || I === void 0 ? void 0 : I.value;
  });
  return {
    configProvider: r,
    prefixCls: i,
    direction: a,
    size: C,
    getTargetContainer: h,
    getPopupContainer: m,
    space: d,
    pageHeader: f,
    form: p,
    autoInsertSpaceInButton: c,
    renderEmpty: u,
    virtual: b,
    dropdownMatchSelectWidth: w,
    rootPrefixCls: s,
    getPrefixCls: r.getPrefixCls,
    autocomplete: S,
    csp: $,
    iconPrefixCls: l,
    disabled: x,
    select: r.select,
    wave: O
  };
};
function Ue(e, t) {
  const n = g({}, e);
  for (let o = 0; o < t.length; o += 1) {
    const r = t[o];
    delete n[r];
  }
  return n;
}
function kc(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function Xc(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function na(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return Xc(n.overflowY, t) || Xc(n.overflowX, t) || function(o) {
      var r = function(i) {
        if (!i.ownerDocument || !i.ownerDocument.defaultView) return null;
        try {
          return i.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      }(o);
      return !!r && (r.clientHeight < o.scrollHeight || r.clientWidth < o.scrollWidth);
    }(e);
  }
  return !1;
}
function vr(e, t, n, o, r, i, a, l) {
  return i < e && a > t || i > e && a < t ? 0 : i <= e && l <= n || a >= t && l >= n ? i - e - o : a > t && l < n || i < e && l > n ? a - t + r : 0;
}
var qc = function(e, t) {
  var n = window, o = t.scrollMode, r = t.block, i = t.inline, a = t.boundary, l = t.skipOverflowHiddenElements, s = typeof a == "function" ? a : function(le) {
    return le !== a;
  };
  if (!kc(e)) throw new TypeError("Invalid target");
  for (var c, u, d = document.scrollingElement || document.documentElement, f = [], p = e; kc(p) && s(p); ) {
    if ((p = (u = (c = p).parentElement) == null ? c.getRootNode().host || null : u) === d) {
      f.push(p);
      break;
    }
    p != null && p === document.body && na(p) && !na(document.documentElement) || p != null && na(p, l) && f.push(p);
  }
  for (var h = n.visualViewport ? n.visualViewport.width : innerWidth, m = n.visualViewport ? n.visualViewport.height : innerHeight, w = window.scrollX || pageXOffset, b = window.scrollY || pageYOffset, C = e.getBoundingClientRect(), S = C.height, x = C.width, $ = C.top, O = C.right, y = C.bottom, I = C.left, E = r === "start" || r === "nearest" ? $ : r === "end" ? y : $ + S / 2, R = i === "center" ? I + x / 2 : i === "end" ? O : I, _ = [], N = 0; N < f.length; N++) {
    var F = f[N], j = F.getBoundingClientRect(), P = j.height, M = j.width, L = j.top, H = j.right, A = j.bottom, z = j.left;
    if (o === "if-needed" && $ >= 0 && I >= 0 && y <= m && O <= h && $ >= L && y <= A && I >= z && O <= H) return _;
    var q = getComputedStyle(F), Y = parseInt(q.borderLeftWidth, 10), K = parseInt(q.borderTopWidth, 10), W = parseInt(q.borderRightWidth, 10), G = parseInt(q.borderBottomWidth, 10), ee = 0, re = 0, ie = "offsetWidth" in F ? F.offsetWidth - F.clientWidth - Y - W : 0, X = "offsetHeight" in F ? F.offsetHeight - F.clientHeight - K - G : 0, B = "offsetWidth" in F ? F.offsetWidth === 0 ? 0 : M / F.offsetWidth : 0, U = "offsetHeight" in F ? F.offsetHeight === 0 ? 0 : P / F.offsetHeight : 0;
    if (d === F) ee = r === "start" ? E : r === "end" ? E - m : r === "nearest" ? vr(b, b + m, m, K, G, b + E, b + E + S, S) : E - m / 2, re = i === "start" ? R : i === "center" ? R - h / 2 : i === "end" ? R - h : vr(w, w + h, h, Y, W, w + R, w + R + x, x), ee = Math.max(0, ee + b), re = Math.max(0, re + w);
    else {
      ee = r === "start" ? E - L - K : r === "end" ? E - A + G + X : r === "nearest" ? vr(L, A, P, K, G + X, E, E + S, S) : E - (L + P / 2) + X / 2, re = i === "start" ? R - z - Y : i === "center" ? R - (z + M / 2) + ie / 2 : i === "end" ? R - H + W + ie : vr(z, H, M, Y, W + ie, R, R + x, x);
      var ne = F.scrollLeft, Q = F.scrollTop;
      E += Q - (ee = Math.max(0, Math.min(Q + ee / U, F.scrollHeight - P / U + X))), R += ne - (re = Math.max(0, Math.min(ne + re / B, F.scrollWidth - M / B + ie)));
    }
    _.push({ el: F, top: ee, left: re });
  }
  return _;
};
function Qp(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function Yy(e, t) {
  t === void 0 && (t = "auto");
  var n = "scrollBehavior" in document.body.style;
  e.forEach(function(o) {
    var r = o.el, i = o.top, a = o.left;
    r.scroll && n ? r.scroll({
      top: i,
      left: a,
      behavior: t
    }) : (r.scrollTop = i, r.scrollLeft = a);
  });
}
function Qy(e) {
  return e === !1 ? {
    block: "end",
    inline: "nearest"
  } : Qp(e) ? e : {
    block: "start",
    inline: "nearest"
  };
}
function Zy(e, t) {
  var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (Qp(t) && typeof t.behavior == "function")
    return t.behavior(n ? qc(e, t) : []);
  if (n) {
    var o = Qy(t);
    return Yy(qc(e, o), o.behavior);
  }
}
function Jy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
  }
}
function Zp(e, t, n) {
  return n && Jy(e, n), e;
}
function Rr() {
  return (Rr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }).apply(this, arguments);
}
function Jp(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function em(e, t) {
  if (e == null) return {};
  var n, o, r = {}, i = Object.keys(e);
  for (o = 0; o < i.length; o++) t.indexOf(n = i[o]) >= 0 || (r[n] = e[n]);
  return r;
}
function Kc(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var tm = Object.prototype, nm = tm.toString, eb = tm.hasOwnProperty, om = /^\s*function (\w+)/;
function Yc(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var o = n.toString().match(om);
    return o ? o[1] : "";
  }
  return "";
}
var Cn = function(e) {
  var t, n;
  return Kc(e) !== !1 && typeof (t = e.constructor) == "function" && Kc(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, rm = function(e) {
  return e;
}, Xe = rm;
if (process.env.NODE_ENV !== "production") {
  var tb = typeof console < "u";
  Xe = tb ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : rm;
}
var Uo = function(e, t) {
  return eb.call(e, t);
}, nb = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, lo = Array.isArray || function(e) {
  return nm.call(e) === "[object Array]";
}, so = function(e) {
  return nm.call(e) === "[object Function]";
}, qr = function(e) {
  return Cn(e) && Uo(e, "_vueTypes_name");
}, im = function(e) {
  return Cn(e) && (Uo(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return Uo(e, t);
  }));
};
function Bl(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function En(e, t, n) {
  var o;
  n === void 0 && (n = !1);
  var r = !0, i = "";
  o = Cn(e) ? e : { type: e };
  var a = qr(o) ? o._vueTypes_name + " - " : "";
  if (im(o) && o.type !== null) {
    if (o.type === void 0 || o.type === !0 || !o.required && t === void 0) return r;
    lo(o.type) ? (r = o.type.some(function(d) {
      return En(d, t, !0) === !0;
    }), i = o.type.map(function(d) {
      return Yc(d);
    }).join(" or ")) : r = (i = Yc(o)) === "Array" ? lo(t) : i === "Object" ? Cn(t) : i === "String" || i === "Number" || i === "Boolean" || i === "Function" ? function(d) {
      if (d == null) return "";
      var f = d.constructor.toString().match(om);
      return f ? f[1] : "";
    }(t) === i : t instanceof o.type;
  }
  if (!r) {
    var l = a + 'value "' + t + '" should be of type "' + i + '"';
    return n === !1 ? (Xe(l), !1) : l;
  }
  if (Uo(o, "validator") && so(o.validator)) {
    var s = Xe, c = [];
    if (Xe = function(d) {
      c.push(d);
    }, r = o.validator(t), Xe = s, !r) {
      var u = (c.length > 1 ? "* " : "") + c.join(`
* `);
      return c.length = 0, n === !1 ? (Xe(u), r) : u;
    }
  }
  return r;
}
function ct(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(r) {
    return r !== void 0 || this.default ? so(r) || En(this, r, !0) === !0 ? (this.default = lo(r) ? function() {
      return [].concat(r);
    } : Cn(r) ? function() {
      return Object.assign({}, r);
    } : r, this) : (Xe(this._vueTypes_name + ' - invalid default value: "' + r + '"'), this) : this;
  } } }), o = n.validator;
  return so(o) && (n.validator = Bl(o, n)), n;
}
function Rt(e, t) {
  var n = ct(e, t);
  return Object.defineProperty(n, "validate", { value: function(o) {
    return so(this.validator) && Xe(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = Bl(o, this), this;
  } });
}
function Qc(e, t, n) {
  var o, r, i = (o = t, r = {}, Object.getOwnPropertyNames(o).forEach(function(d) {
    r[d] = Object.getOwnPropertyDescriptor(o, d);
  }), Object.defineProperties({}, r));
  if (i._vueTypes_name = e, !Cn(n)) return i;
  var a, l, s = n.validator, c = em(n, ["validator"]);
  if (so(s)) {
    var u = i.validator;
    u && (u = (l = (a = u).__original) !== null && l !== void 0 ? l : a), i.validator = Bl(u ? function(d) {
      return u.call(this, d) && s.call(this, d);
    } : s, i);
  }
  return Object.assign(i, c);
}
function vi(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var ob = function() {
  return Rt("any", {});
}, rb = function() {
  return Rt("function", { type: Function });
}, ib = function() {
  return Rt("boolean", { type: Boolean });
}, ab = function() {
  return Rt("string", { type: String });
}, lb = function() {
  return Rt("number", { type: Number });
}, sb = function() {
  return Rt("array", { type: Array });
}, cb = function() {
  return Rt("object", { type: Object });
}, ub = function() {
  return ct("integer", { type: Number, validator: function(e) {
    return nb(e);
  } });
}, db = function() {
  return ct("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function fb(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function") throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return ct(e.name || "<<anonymous function>>", { validator: function(n) {
    var o = e(n);
    return o || Xe(this._vueTypes_name + " - " + t), o;
  } });
}
function pb(e) {
  if (!lo(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(o, r) {
    if (r != null) {
      var i = r.constructor;
      o.indexOf(i) === -1 && o.push(i);
    }
    return o;
  }, []);
  return ct("oneOf", { type: n.length > 0 ? n : void 0, validator: function(o) {
    var r = e.indexOf(o) !== -1;
    return r || Xe(t), r;
  } });
}
function mb(e) {
  if (!lo(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], o = 0; o < e.length; o += 1) {
    var r = e[o];
    if (im(r)) {
      if (qr(r) && r._vueTypes_name === "oneOf") {
        n = n.concat(r.type);
        continue;
      }
      if (so(r.validator) && (t = !0), r.type !== !0 && r.type) {
        n = n.concat(r.type);
        continue;
      }
    }
    n.push(r);
  }
  return n = n.filter(function(i, a) {
    return n.indexOf(i) === a;
  }), ct("oneOfType", t ? { type: n, validator: function(i) {
    var a = [], l = e.some(function(s) {
      var c = En(qr(s) && s._vueTypes_name === "oneOf" ? s.type || null : s, i, !0);
      return typeof c == "string" && a.push(c), c === !0;
    });
    return l || Xe("oneOfType - provided value does not match any of the " + a.length + ` passed-in validators:
` + vi(a.join(`
`))), l;
  } } : { type: n });
}
function gb(e) {
  return ct("arrayOf", { type: Array, validator: function(t) {
    var n, o = t.every(function(r) {
      return (n = En(e, r, !0)) === !0;
    });
    return o || Xe(`arrayOf - value validation error:
` + vi(n)), o;
  } });
}
function vb(e) {
  return ct("instanceOf", { type: e });
}
function hb(e) {
  return ct("objectOf", { type: Object, validator: function(t) {
    var n, o = Object.keys(t).every(function(r) {
      return (n = En(e, t[r], !0)) === !0;
    });
    return o || Xe(`objectOf - value validation error:
` + vi(n)), o;
  } });
}
function yb(e) {
  var t = Object.keys(e), n = t.filter(function(r) {
    var i;
    return !!(!((i = e[r]) === null || i === void 0) && i.required);
  }), o = ct("shape", { type: Object, validator: function(r) {
    var i = this;
    if (!Cn(r)) return !1;
    var a = Object.keys(r);
    if (n.length > 0 && n.some(function(s) {
      return a.indexOf(s) === -1;
    })) {
      var l = n.filter(function(s) {
        return a.indexOf(s) === -1;
      });
      return Xe(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
    }
    return a.every(function(s) {
      if (t.indexOf(s) === -1) return i._vueTypes_isLoose === !0 || (Xe('shape - shape definition does not include a "' + s + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var c = En(e[s], r[s], !0);
      return typeof c == "string" && Xe('shape - "' + s + `" property validation error:
 ` + vi(c)), c === !0;
    });
  } });
  return Object.defineProperty(o, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(o, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), o;
}
var It = function() {
  function e() {
  }
  return e.extend = function(t) {
    var n = this;
    if (lo(t)) return t.forEach(function(d) {
      return n.extend(d);
    }), this;
    var o = t.name, r = t.validate, i = r !== void 0 && r, a = t.getter, l = a !== void 0 && a, s = em(t, ["name", "validate", "getter"]);
    if (Uo(this, o)) throw new TypeError('[VueTypes error]: Type "' + o + '" already defined');
    var c, u = s.type;
    return qr(u) ? (delete s.type, Object.defineProperty(this, o, l ? { get: function() {
      return Qc(o, u, s);
    } } : { value: function() {
      var d, f = Qc(o, u, s);
      return f.validator && (f.validator = (d = f.validator).bind.apply(d, [f].concat([].slice.call(arguments)))), f;
    } })) : (c = l ? { get: function() {
      var d = Object.assign({}, s);
      return i ? Rt(o, d) : ct(o, d);
    }, enumerable: !0 } : { value: function() {
      var d, f, p = Object.assign({}, s);
      return d = i ? Rt(o, p) : ct(o, p), p.validator && (d.validator = (f = p.validator).bind.apply(f, [d].concat([].slice.call(arguments)))), d;
    }, enumerable: !0 }, Object.defineProperty(this, o, c));
  }, Zp(e, null, [{ key: "any", get: function() {
    return ob();
  } }, { key: "func", get: function() {
    return rb().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return ib().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return ab().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return lb().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return sb().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return cb().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return ub().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return db();
  } }]), e;
}();
function am(e) {
  var t;
  return e === void 0 && (e = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (t = function(n) {
    function o() {
      return n.apply(this, arguments) || this;
    }
    return Jp(o, n), Zp(o, null, [{ key: "sensibleDefaults", get: function() {
      return Rr({}, this.defaults);
    }, set: function(r) {
      this.defaults = r !== !1 ? Rr({}, r !== !0 ? r : e) : {};
    } }]), o;
  }(It)).defaults = Rr({}, e), t;
}
It.defaults = {}, It.custom = fb, It.oneOf = pb, It.instanceOf = vb, It.oneOfType = mb, It.arrayOf = gb, It.objectOf = hb, It.shape = yb, It.utils = { validate: function(e, t) {
  return En(t, e, !0) === !0;
}, toType: function(e, t, n) {
  return n === void 0 && (n = !1), n ? Rt(e, t) : ct(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return Jp(t, e), t;
})(am());
const V = am({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
V.extend([{
  name: "looseBool",
  getter: !0,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: !0,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: !0,
  type: null
}]);
const vt = (e, t, n) => {
  mt(e, `[ant-design-vue: ${t}] ${n}`);
};
function Zc(e, t) {
  const {
    key: n
  } = e;
  let o;
  return "value" in e && ({
    value: o
  } = e), n ?? (o !== void 0 ? o : `rc-index-key-${t}`);
}
function lm(e, t) {
  const {
    label: n,
    value: o,
    options: r
  } = e || {};
  return {
    label: n || (t ? "children" : "label"),
    value: o || "value",
    options: r || "options"
  };
}
function bb(e) {
  let {
    fieldNames: t,
    childrenAsData: n
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const o = [], {
    label: r,
    value: i,
    options: a
  } = lm(t, !1);
  function l(s, c) {
    s.forEach((u) => {
      const d = u[r];
      if (c || !(a in u)) {
        const f = u[i];
        o.push({
          key: Zc(u, o.length),
          groupOption: c,
          data: u,
          label: d,
          value: f
        });
      } else {
        let f = d;
        f === void 0 && n && (f = u.label), o.push({
          key: Zc(u, o.length),
          group: !0,
          data: u,
          label: f
        }), l(u[a], !0);
      }
    });
  }
  return l(e, !1), o;
}
function Xa(e) {
  const t = g({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get() {
      return ro(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
function wb(e, t) {
  if (!t || !t.length)
    return null;
  let n = !1;
  function o(i, a) {
    let [l, ...s] = a;
    if (!l)
      return [i];
    const c = i.split(l);
    return n = n || c.length > 1, c.reduce((u, d) => [...u, ...o(d, s)], []).filter((u) => u);
  }
  const r = o(e, t);
  return n ? r : null;
}
function Sb() {
  return "";
}
function xb(e) {
  return e ? e.ownerDocument : window.document;
}
function sm() {
}
const Cb = () => ({
  action: V.oneOfType([V.string, V.arrayOf(V.string)]).def([]),
  showAction: V.any.def([]),
  hideAction: V.any.def([]),
  getPopupClassNameFromAlign: V.any.def(Sb),
  onPopupVisibleChange: Function,
  afterPopupVisibleChange: V.func.def(sm),
  popup: V.any,
  arrow: V.bool.def(!0),
  popupStyle: {
    type: Object,
    default: void 0
  },
  prefixCls: V.string.def("rc-trigger-popup"),
  popupClassName: V.string.def(""),
  popupPlacement: String,
  builtinPlacements: V.object,
  popupTransitionName: String,
  popupAnimation: V.any,
  mouseEnterDelay: V.number.def(0),
  mouseLeaveDelay: V.number.def(0.1),
  zIndex: Number,
  focusDelay: V.number.def(0),
  blurDelay: V.number.def(0.15),
  getPopupContainer: Function,
  getDocument: V.func.def(xb),
  forceRender: {
    type: Boolean,
    default: void 0
  },
  destroyPopupOnHide: {
    type: Boolean,
    default: !1
  },
  mask: {
    type: Boolean,
    default: !1
  },
  maskClosable: {
    type: Boolean,
    default: !0
  },
  // onPopupAlign: PropTypes.func.def(noop),
  popupAlign: V.object.def(() => ({})),
  popupVisible: {
    type: Boolean,
    default: void 0
  },
  defaultPopupVisible: {
    type: Boolean,
    default: !1
  },
  maskTransitionName: String,
  maskAnimation: String,
  stretch: String,
  alignPoint: {
    type: Boolean,
    default: void 0
  },
  autoDestroy: {
    type: Boolean,
    default: !1
  },
  mobile: Object,
  getTriggerDOMNode: Function
}), zl = {
  visible: Boolean,
  prefixCls: String,
  zIndex: Number,
  destroyPopupOnHide: Boolean,
  forceRender: Boolean,
  arrow: {
    type: Boolean,
    default: !0
  },
  // Legacy Motion
  animation: [String, Object],
  transitionName: String,
  // Measure
  stretch: {
    type: String
  },
  // Align
  align: {
    type: Object
  },
  point: {
    type: Object
  },
  getRootDomNode: {
    type: Function
  },
  getClassNameFromAlign: {
    type: Function
  },
  onAlign: {
    type: Function
  },
  onMouseenter: {
    type: Function
  },
  onMouseleave: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
}, $b = g(g({}, zl), {
  mobile: {
    type: Object
  }
}), Ob = g(g({}, zl), {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
function Vl(e) {
  let {
    prefixCls: t,
    animation: n,
    transitionName: o
  } = e;
  return n ? {
    name: `${t}-${n}`
  } : o ? {
    name: o
  } : {};
}
function cm(e) {
  const {
    prefixCls: t,
    visible: n,
    zIndex: o,
    mask: r,
    maskAnimation: i,
    maskTransitionName: a
  } = e;
  if (!r)
    return null;
  let l = {};
  return (a || i) && (l = Vl({
    prefixCls: t,
    transitionName: a,
    animation: i
  })), v(Gt, D({
    appear: !0
  }, l), {
    default: () => [Bt(v("div", {
      style: {
        zIndex: o
      },
      class: `${t}-mask`
    }, null), [[Kf("if"), n]])]
  });
}
cm.displayName = "Mask";
const Pb = Z({
  compatConfig: {
    MODE: 3
  },
  name: "MobilePopupInner",
  inheritAttrs: !1,
  props: $b,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      slots: o
    } = t;
    const r = te();
    return n({
      forceAlign: () => {
      },
      getElement: () => r.value
    }), () => {
      var i;
      const {
        zIndex: a,
        visible: l,
        prefixCls: s,
        mobile: {
          popupClassName: c,
          popupStyle: u,
          popupMotion: d = {},
          popupRender: f
        } = {}
      } = e, p = g({
        zIndex: a
      }, u);
      let h = Je((i = o.default) === null || i === void 0 ? void 0 : i.call(o));
      h.length > 1 && (h = v("div", {
        class: `${s}-content`
      }, [h])), f && (h = f(h));
      const m = oe(s, c);
      return v(Gt, D({
        ref: r
      }, d), {
        default: () => [l ? v("div", {
          class: m,
          style: p
        }, [h]) : null]
      });
    };
  }
});
var Ib = function(e, t, n, o) {
  function r(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(u) {
      try {
        c(o.next(u));
      } catch (d) {
        a(d);
      }
    }
    function s(u) {
      try {
        c(o.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : r(u.value).then(l, s);
    }
    c((o = o.apply(e, t || [])).next());
  });
};
const Jc = ["measure", "align", null, "motion"], Tb = (e, t) => {
  const n = k(null), o = k(), r = k(!1);
  function i(s) {
    r.value || (n.value = s);
  }
  function a() {
    $e.cancel(o.value);
  }
  function l(s) {
    a(), o.value = $e(() => {
      let c = n.value;
      switch (n.value) {
        case "align":
          c = "motion";
          break;
        case "motion":
          c = "stable";
          break;
      }
      i(c), s == null || s();
    });
  }
  return ae(e, () => {
    i("measure");
  }, {
    immediate: !0,
    flush: "post"
  }), be(() => {
    ae(n, () => {
      switch (n.value) {
        case "measure":
          t();
          break;
      }
      n.value && (o.value = $e(() => Ib(void 0, void 0, void 0, function* () {
        const s = Jc.indexOf(n.value), c = Jc[s + 1];
        c && s !== -1 && i(c);
      })));
    }, {
      immediate: !0,
      flush: "post"
    });
  }), Ae(() => {
    r.value = !0, a();
  }), [n, l];
}, Eb = (e) => {
  const t = k({
    width: 0,
    height: 0
  });
  function n(r) {
    t.value = {
      width: r.offsetWidth,
      height: r.offsetHeight
    };
  }
  return [T(() => {
    const r = {};
    if (e.value) {
      const {
        width: i,
        height: a
      } = t.value;
      e.value.indexOf("height") !== -1 && a ? r.height = `${a}px` : e.value.indexOf("minHeight") !== -1 && a && (r.minHeight = `${a}px`), e.value.indexOf("width") !== -1 && i ? r.width = `${i}px` : e.value.indexOf("minWidth") !== -1 && i && (r.minWidth = `${i}px`);
    }
    return r;
  }), n];
};
function eu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function tu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eu(Object(n), !0).forEach(function(o) {
      _b(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eu(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function qa(e) {
  "@babel/helpers - typeof";
  return qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qa(e);
}
function _b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var Co, Ab = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function Kr() {
  if (Co !== void 0)
    return Co;
  Co = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var n in Ab)
    n + t in e && (Co = n);
  return Co;
}
function um() {
  return Kr() ? "".concat(Kr(), "TransitionProperty") : "transitionProperty";
}
function hi() {
  return Kr() ? "".concat(Kr(), "Transform") : "transform";
}
function nu(e, t) {
  var n = um();
  n && (e.style[n] = t, n !== "transitionProperty" && (e.style.transitionProperty = t));
}
function oa(e, t) {
  var n = hi();
  n && (e.style[n] = t, n !== "transform" && (e.style.transform = t));
}
function Mb(e) {
  return e.style.transitionProperty || e.style[um()];
}
function Rb(e) {
  var t = window.getComputedStyle(e, null), n = t.getPropertyValue("transform") || t.getPropertyValue(hi());
  if (n && n !== "none") {
    var o = n.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(o[12] || o[4], 0),
      y: parseFloat(o[13] || o[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var Fb = /matrix\((.*)\)/, Db = /matrix3d\((.*)\)/;
function Nb(e, t) {
  var n = window.getComputedStyle(e, null), o = n.getPropertyValue("transform") || n.getPropertyValue(hi());
  if (o && o !== "none") {
    var r, i = o.match(Fb);
    if (i)
      i = i[1], r = i.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), r[4] = t.x, r[5] = t.y, oa(e, "matrix(".concat(r.join(","), ")"));
    else {
      var a = o.match(Db)[1];
      r = a.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), r[12] = t.x, r[13] = t.y, oa(e, "matrix3d(".concat(r.join(","), ")"));
    }
  } else
    oa(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var Lb = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, er;
function ou(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function Yn(e, t, n) {
  var o = n;
  if (qa(t) === "object") {
    for (var r in t)
      t.hasOwnProperty(r) && Yn(e, r, t[r]);
    return;
  }
  if (typeof o < "u") {
    typeof o == "number" && (o = "".concat(o, "px")), e.style[t] = o;
    return;
  }
  return er(e, t);
}
function jb(e) {
  var t, n, o, r = e.ownerDocument, i = r.body, a = r && r.documentElement;
  return t = e.getBoundingClientRect(), n = Math.floor(t.left), o = Math.floor(t.top), n -= a.clientLeft || i.clientLeft || 0, o -= a.clientTop || i.clientTop || 0, {
    left: n,
    top: o
  };
}
function dm(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], o = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var r = e.document;
    n = r.documentElement[o], typeof n != "number" && (n = r.body[o]);
  }
  return n;
}
function fm(e) {
  return dm(e);
}
function pm(e) {
  return dm(e, !0);
}
function Go(e) {
  var t = jb(e), n = e.ownerDocument, o = n.defaultView || n.parentWindow;
  return t.left += fm(o), t.top += pm(o), t;
}
function Wl(e) {
  return e != null && e == e.window;
}
function mm(e) {
  return Wl(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function Hb(e, t, n) {
  var o = n, r = "", i = mm(e);
  return o = o || i.defaultView.getComputedStyle(e, null), o && (r = o.getPropertyValue(t) || o[t]), r;
}
var Bb = new RegExp("^(".concat(Lb, ")(?!px)[a-z%]+$"), "i"), zb = /^(top|right|bottom|left)$/, ra = "currentStyle", ia = "runtimeStyle", fn = "left", Vb = "px";
function Wb(e, t) {
  var n = e[ra] && e[ra][t];
  if (Bb.test(n) && !zb.test(t)) {
    var o = e.style, r = o[fn], i = e[ia][fn];
    e[ia][fn] = e[ra][fn], o[fn] = t === "fontSize" ? "1em" : n || 0, n = o.pixelLeft + Vb, o[fn] = r, e[ia][fn] = i;
  }
  return n === "" ? "auto" : n;
}
typeof window < "u" && (er = window.getComputedStyle ? Hb : Wb);
function hr(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function ru(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function iu(e, t, n) {
  Yn(e, "position") === "static" && (e.style.position = "relative");
  var o = -999, r = -999, i = hr("left", n), a = hr("top", n), l = ru(i), s = ru(a);
  i !== "left" && (o = 999), a !== "top" && (r = 999);
  var c = "", u = Go(e);
  ("left" in t || "top" in t) && (c = Mb(e) || "", nu(e, "none")), "left" in t && (e.style[l] = "", e.style[i] = "".concat(o, "px")), "top" in t && (e.style[s] = "", e.style[a] = "".concat(r, "px")), ou(e);
  var d = Go(e), f = {};
  for (var p in t)
    if (t.hasOwnProperty(p)) {
      var h = hr(p, n), m = p === "left" ? o : r, w = u[p] - d[p];
      h === p ? f[h] = m + w : f[h] = m - w;
    }
  Yn(e, f), ou(e), ("left" in t || "top" in t) && nu(e, c);
  var b = {};
  for (var C in t)
    if (t.hasOwnProperty(C)) {
      var S = hr(C, n), x = t[C] - u[C];
      C === S ? b[S] = f[S] + x : b[S] = f[S] - x;
    }
  Yn(e, b);
}
function Ub(e, t) {
  var n = Go(e), o = Rb(e), r = {
    x: o.x,
    y: o.y
  };
  "left" in t && (r.x = o.x + t.left - n.left), "top" in t && (r.y = o.y + t.top - n.top), Nb(e, r);
}
function Gb(e, t, n) {
  if (n.ignoreShake) {
    var o = Go(e), r = o.left.toFixed(0), i = o.top.toFixed(0), a = t.left.toFixed(0), l = t.top.toFixed(0);
    if (r === a && i === l)
      return;
  }
  n.useCssRight || n.useCssBottom ? iu(e, t, n) : n.useCssTransform && hi() in document.body.style ? Ub(e, t) : iu(e, t, n);
}
function Ul(e, t) {
  for (var n = 0; n < e.length; n++)
    t(e[n]);
}
function gm(e) {
  return er(e, "boxSizing") === "border-box";
}
var kb = ["margin", "border", "padding"], Ka = -1, Xb = 2, Ya = 1, qb = 0;
function Kb(e, t, n) {
  var o = {}, r = e.style, i;
  for (i in t)
    t.hasOwnProperty(i) && (o[i] = r[i], r[i] = t[i]);
  n.call(e);
  for (i in t)
    t.hasOwnProperty(i) && (r[i] = o[i]);
}
function Oo(e, t, n) {
  var o = 0, r, i, a;
  for (i = 0; i < t.length; i++)
    if (r = t[i], r)
      for (a = 0; a < n.length; a++) {
        var l = void 0;
        r === "border" ? l = "".concat(r).concat(n[a], "Width") : l = r + n[a], o += parseFloat(er(e, l)) || 0;
      }
  return o;
}
var _t = {
  getParent: function(t) {
    var n = t;
    do
      n.nodeType === 11 && n.host ? n = n.host : n = n.parentNode;
    while (n && n.nodeType !== 1 && n.nodeType !== 9);
    return n;
  }
};
Ul(["Width", "Height"], function(e) {
  _t["doc".concat(e)] = function(t) {
    var n = t.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      n.documentElement["scroll".concat(e)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      n.body["scroll".concat(e)],
      _t["viewport".concat(e)](n)
    );
  }, _t["viewport".concat(e)] = function(t) {
    var n = "client".concat(e), o = t.document, r = o.body, i = o.documentElement, a = i[n];
    return o.compatMode === "CSS1Compat" && a || r && r[n] || a;
  };
});
function au(e, t, n) {
  var o = n;
  if (Wl(e))
    return t === "width" ? _t.viewportWidth(e) : _t.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? _t.docWidth(e) : _t.docHeight(e);
  var r = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], i = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), a = gm(e), l = 0;
  (i == null || i <= 0) && (i = void 0, l = er(e, t), (l == null || Number(l) < 0) && (l = e.style[t] || 0), l = Math.floor(parseFloat(l)) || 0), o === void 0 && (o = a ? Ya : Ka);
  var s = i !== void 0 || a, c = i || l;
  return o === Ka ? s ? c - Oo(e, ["border", "padding"], r) : l : s ? o === Ya ? c : c + (o === Xb ? -Oo(e, ["border"], r) : Oo(e, ["margin"], r)) : l + Oo(e, kb.slice(o), r);
}
var Yb = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function lu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var o, r = t[0];
  return r.offsetWidth !== 0 ? o = au.apply(void 0, t) : Kb(r, Yb, function() {
    o = au.apply(void 0, t);
  }), o;
}
Ul(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  _t["outer".concat(t)] = function(o, r) {
    return o && lu(o, e, r ? qb : Ya);
  };
  var n = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  _t[e] = function(o, r) {
    var i = r;
    if (i !== void 0) {
      if (o) {
        var a = gm(o);
        return a && (i += Oo(o, ["padding", "border"], n)), Yn(o, e, i);
      }
      return;
    }
    return o && lu(o, e, Ka);
  };
});
function vm(e, t) {
  for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
var ue = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var n = t.ownerDocument || t;
    return n.defaultView || n.parentWindow;
  },
  getDocument: mm,
  offset: function(t, n, o) {
    if (typeof n < "u")
      Gb(t, n, o || {});
    else
      return Go(t);
  },
  isWindow: Wl,
  each: Ul,
  css: Yn,
  clone: function(t) {
    var n, o = {};
    for (n in t)
      t.hasOwnProperty(n) && (o[n] = t[n]);
    var r = t.overflow;
    if (r)
      for (n in t)
        t.hasOwnProperty(n) && (o.overflow[n] = t.overflow[n]);
    return o;
  },
  mix: vm,
  getWindowScrollLeft: function(t) {
    return fm(t);
  },
  getWindowScrollTop: function(t) {
    return pm(t);
  },
  merge: function() {
    for (var t = {}, n = 0; n < arguments.length; n++)
      ue.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
vm(ue, _t);
var aa = ue.getParent;
function Qa(e) {
  if (ue.isWindow(e) || e.nodeType === 9)
    return null;
  var t = ue.getDocument(e), n = t.body, o, r = ue.css(e, "position"), i = r === "fixed" || r === "absolute";
  if (!i)
    return e.nodeName.toLowerCase() === "html" ? null : aa(e);
  for (o = aa(e); o && o !== n && o.nodeType !== 9; o = aa(o))
    if (r = ue.css(o, "position"), r !== "static")
      return o;
  return null;
}
var su = ue.getParent;
function Qb(e) {
  if (ue.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = ue.getDocument(e), n = t.body, o = null;
  for (
    o = su(e);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    o && o !== n && o !== t;
    o = su(o)
  ) {
    var r = ue.css(o, "position");
    if (r === "fixed")
      return !0;
  }
  return !1;
}
function Gl(e, t) {
  for (var n = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, o = Qa(e), r = ue.getDocument(e), i = r.defaultView || r.parentWindow, a = r.body, l = r.documentElement; o; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || o.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    o !== a && o !== l && ue.css(o, "overflow") !== "visible") {
      var s = ue.offset(o);
      s.left += o.clientLeft, s.top += o.clientTop, n.top = Math.max(n.top, s.top), n.right = Math.min(
        n.right,
        // consider area without scrollBar
        s.left + o.clientWidth
      ), n.bottom = Math.min(n.bottom, s.top + o.clientHeight), n.left = Math.max(n.left, s.left);
    } else if (o === a || o === l)
      break;
    o = Qa(o);
  }
  var c = null;
  if (!ue.isWindow(e) && e.nodeType !== 9) {
    c = e.style.position;
    var u = ue.css(e, "position");
    u === "absolute" && (e.style.position = "fixed");
  }
  var d = ue.getWindowScrollLeft(i), f = ue.getWindowScrollTop(i), p = ue.viewportWidth(i), h = ue.viewportHeight(i), m = l.scrollWidth, w = l.scrollHeight, b = window.getComputedStyle(a);
  if (b.overflowX === "hidden" && (m = i.innerWidth), b.overflowY === "hidden" && (w = i.innerHeight), e.style && (e.style.position = c), t || Qb(e))
    n.left = Math.max(n.left, d), n.top = Math.max(n.top, f), n.right = Math.min(n.right, d + p), n.bottom = Math.min(n.bottom, f + h);
  else {
    var C = Math.max(m, d + p);
    n.right = Math.min(n.right, C);
    var S = Math.max(w, f + h);
    n.bottom = Math.min(n.bottom, S);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function Zb(e, t, n, o) {
  var r = ue.clone(e), i = {
    width: t.width,
    height: t.height
  };
  return o.adjustX && r.left < n.left && (r.left = n.left), o.resizeWidth && r.left >= n.left && r.left + i.width > n.right && (i.width -= r.left + i.width - n.right), o.adjustX && r.left + i.width > n.right && (r.left = Math.max(n.right - i.width, n.left)), o.adjustY && r.top < n.top && (r.top = n.top), o.resizeHeight && r.top >= n.top && r.top + i.height > n.bottom && (i.height -= r.top + i.height - n.bottom), o.adjustY && r.top + i.height > n.bottom && (r.top = Math.max(n.bottom - i.height, n.top)), ue.mix(r, i);
}
function kl(e) {
  var t, n, o;
  if (!ue.isWindow(e) && e.nodeType !== 9)
    t = ue.offset(e), n = ue.outerWidth(e), o = ue.outerHeight(e);
  else {
    var r = ue.getWindow(e);
    t = {
      left: ue.getWindowScrollLeft(r),
      top: ue.getWindowScrollTop(r)
    }, n = ue.viewportWidth(r), o = ue.viewportHeight(r);
  }
  return t.width = n, t.height = o, t;
}
function cu(e, t) {
  var n = t.charAt(0), o = t.charAt(1), r = e.width, i = e.height, a = e.left, l = e.top;
  return n === "c" ? l += i / 2 : n === "b" && (l += i), o === "c" ? a += r / 2 : o === "r" && (a += r), {
    left: a,
    top: l
  };
}
function yr(e, t, n, o, r) {
  var i = cu(t, n[1]), a = cu(e, n[0]), l = [a.left - i.left, a.top - i.top];
  return {
    left: Math.round(e.left - l[0] + o[0] - r[0]),
    top: Math.round(e.top - l[1] + o[1] - r[1])
  };
}
function uu(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function du(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function Jb(e, t, n) {
  return e.left > n.right || e.left + t.width < n.left;
}
function e1(e, t, n) {
  return e.top > n.bottom || e.top + t.height < n.top;
}
function br(e, t, n) {
  var o = [];
  return ue.each(e, function(r) {
    o.push(r.replace(t, function(i) {
      return n[i];
    }));
  }), o;
}
function wr(e, t) {
  return e[t] = -e[t], e;
}
function fu(e, t) {
  var n;
  return /%$/.test(e) ? n = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : n = parseInt(e, 10), n || 0;
}
function pu(e, t) {
  e[0] = fu(e[0], t.width), e[1] = fu(e[1], t.height);
}
function hm(e, t, n, o) {
  var r = n.points, i = n.offset || [0, 0], a = n.targetOffset || [0, 0], l = n.overflow, s = n.source || e;
  i = [].concat(i), a = [].concat(a), l = l || {};
  var c = {}, u = 0, d = !!(l && l.alwaysByViewport), f = Gl(s, d), p = kl(s);
  pu(i, p), pu(a, t);
  var h = yr(p, t, r, i, a), m = ue.merge(p, h);
  if (f && (l.adjustX || l.adjustY) && o) {
    if (l.adjustX && uu(h, p, f)) {
      var w = br(r, /[lr]/gi, {
        l: "r",
        r: "l"
      }), b = wr(i, 0), C = wr(a, 0), S = yr(p, t, w, b, C);
      Jb(S, p, f) || (u = 1, r = w, i = b, a = C);
    }
    if (l.adjustY && du(h, p, f)) {
      var x = br(r, /[tb]/gi, {
        t: "b",
        b: "t"
      }), $ = wr(i, 1), O = wr(a, 1), y = yr(p, t, x, $, O);
      e1(y, p, f) || (u = 1, r = x, i = $, a = O);
    }
    u && (h = yr(p, t, r, i, a), ue.mix(m, h));
    var I = uu(h, p, f), E = du(h, p, f);
    if (I || E) {
      var R = r;
      I && (R = br(r, /[lr]/gi, {
        l: "r",
        r: "l"
      })), E && (R = br(r, /[tb]/gi, {
        t: "b",
        b: "t"
      })), r = R, i = n.offset || [0, 0], a = n.targetOffset || [0, 0];
    }
    c.adjustX = l.adjustX && I, c.adjustY = l.adjustY && E, (c.adjustX || c.adjustY) && (m = Zb(h, p, f, c));
  }
  return m.width !== p.width && ue.css(s, "width", ue.width(s) + m.width - p.width), m.height !== p.height && ue.css(s, "height", ue.height(s) + m.height - p.height), ue.offset(s, {
    left: m.left,
    top: m.top
  }, {
    useCssRight: n.useCssRight,
    useCssBottom: n.useCssBottom,
    useCssTransform: n.useCssTransform,
    ignoreShake: n.ignoreShake
  }), {
    points: r,
    offset: i,
    targetOffset: a,
    overflow: c
  };
}
function t1(e, t) {
  var n = Gl(e, t), o = kl(e);
  return !n || o.left + o.width <= n.left || o.top + o.height <= n.top || o.left >= n.right || o.top >= n.bottom;
}
function Xl(e, t, n) {
  var o = n.target || t, r = kl(o), i = !t1(o, n.overflow && n.overflow.alwaysByViewport);
  return hm(e, r, n, i);
}
Xl.__getOffsetParent = Qa;
Xl.__getVisibleRectForElement = Gl;
function n1(e, t, n) {
  var o, r, i = ue.getDocument(e), a = i.defaultView || i.parentWindow, l = ue.getWindowScrollLeft(a), s = ue.getWindowScrollTop(a), c = ue.viewportWidth(a), u = ue.viewportHeight(a);
  "pageX" in t ? o = t.pageX : o = l + t.clientX, "pageY" in t ? r = t.pageY : r = s + t.clientY;
  var d = {
    left: o,
    top: r,
    width: 0,
    height: 0
  }, f = o >= 0 && o <= l + c && r >= 0 && r <= s + u, p = [n.points[0], "cc"];
  return hm(e, d, tu(tu({}, n), {}, {
    points: p
  }), f);
}
function tt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, r = e;
  if (Array.isArray(e) && (r = ht(e)[0]), !r)
    return null;
  const i = Jo(r, t, o);
  return i.props = n ? g(g({}, i.props), t) : i.props, et(typeof i.props.class != "object", "class must be string"), i;
}
function o1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return e.map((o) => tt(o, t, n));
}
function r1(e, t, n) {
  on(Jo(e, g({}, t)), n);
}
const ym = (e) => {
  if (!e)
    return !1;
  if (e.offsetParent)
    return !0;
  if (e.getBBox) {
    const t = e.getBBox();
    if (t.width || t.height)
      return !0;
  }
  if (e.getBoundingClientRect) {
    const t = e.getBoundingClientRect();
    if (t.width || t.height)
      return !0;
  }
  return !1;
};
function i1(e, t) {
  return e === t ? !0 : !e || !t ? !1 : "pageX" in t && "pageY" in t ? e.pageX === t.pageX && e.pageY === t.pageY : "clientX" in t && "clientY" in t ? e.clientX === t.clientX && e.clientY === t.clientY : !1;
}
function a1(e, t) {
  e !== document.activeElement && Qt(t, e) && typeof e.focus == "function" && e.focus();
}
function mu(e, t) {
  let n = null, o = null;
  function r(a) {
    let [{
      target: l
    }] = a;
    if (!document.documentElement.contains(l)) return;
    const {
      width: s,
      height: c
    } = l.getBoundingClientRect(), u = Math.floor(s), d = Math.floor(c);
    (n !== u || o !== d) && Promise.resolve().then(() => {
      t({
        width: u,
        height: d
      });
    }), n = u, o = d;
  }
  const i = new ap(r);
  return e && i.observe(e), () => {
    i.disconnect();
  };
}
const l1 = (e, t) => {
  let n = !1, o = null;
  function r() {
    clearTimeout(o);
  }
  function i(a) {
    if (!n || a === !0) {
      if (e() === !1)
        return;
      n = !0, r(), o = setTimeout(() => {
        n = !1;
      }, t.value);
    } else
      r(), o = setTimeout(() => {
        n = !1, i();
      }, t.value);
  }
  return [i, () => {
    n = !1, r();
  }];
};
function s1() {
  this.__data__ = [], this.size = 0;
}
function ql(e, t) {
  return e === t || e !== e && t !== t;
}
function yi(e, t) {
  for (var n = e.length; n--; )
    if (ql(e[n][0], t))
      return n;
  return -1;
}
var c1 = Array.prototype, u1 = c1.splice;
function d1(e) {
  var t = this.__data__, n = yi(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : u1.call(t, n, 1), --this.size, !0;
}
function f1(e) {
  var t = this.__data__, n = yi(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function p1(e) {
  return yi(this.__data__, e) > -1;
}
function m1(e, t) {
  var n = this.__data__, o = yi(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function kt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
kt.prototype.clear = s1;
kt.prototype.delete = d1;
kt.prototype.get = f1;
kt.prototype.has = p1;
kt.prototype.set = m1;
function g1() {
  this.__data__ = new kt(), this.size = 0;
}
function v1(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function h1(e) {
  return this.__data__.get(e);
}
function y1(e) {
  return this.__data__.has(e);
}
var bm = typeof global == "object" && global && global.Object === Object && global, b1 = typeof self == "object" && self && self.Object === Object && self, Pt = bm || b1 || Function("return this")(), wt = Pt.Symbol, wm = Object.prototype, w1 = wm.hasOwnProperty, S1 = wm.toString, $o = wt ? wt.toStringTag : void 0;
function x1(e) {
  var t = w1.call(e, $o), n = e[$o];
  try {
    e[$o] = void 0;
    var o = !0;
  } catch {
  }
  var r = S1.call(e);
  return o && (t ? e[$o] = n : delete e[$o]), r;
}
var C1 = Object.prototype, $1 = C1.toString;
function O1(e) {
  return $1.call(e);
}
var P1 = "[object Null]", I1 = "[object Undefined]", gu = wt ? wt.toStringTag : void 0;
function _n(e) {
  return e == null ? e === void 0 ? I1 : P1 : gu && gu in Object(e) ? x1(e) : O1(e);
}
function Vt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var T1 = "[object AsyncFunction]", E1 = "[object Function]", _1 = "[object GeneratorFunction]", A1 = "[object Proxy]";
function Sm(e) {
  if (!Vt(e))
    return !1;
  var t = _n(e);
  return t == E1 || t == _1 || t == T1 || t == A1;
}
var la = Pt["__core-js_shared__"], vu = function() {
  var e = /[^.]+$/.exec(la && la.keys && la.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function M1(e) {
  return !!vu && vu in e;
}
var R1 = Function.prototype, F1 = R1.toString;
function An(e) {
  if (e != null) {
    try {
      return F1.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var D1 = /[\\^$.*+?()[\]{}|]/g, N1 = /^\[object .+?Constructor\]$/, L1 = Function.prototype, j1 = Object.prototype, H1 = L1.toString, B1 = j1.hasOwnProperty, z1 = RegExp(
  "^" + H1.call(B1).replace(D1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function V1(e) {
  if (!Vt(e) || M1(e))
    return !1;
  var t = Sm(e) ? z1 : N1;
  return t.test(An(e));
}
function W1(e, t) {
  return e == null ? void 0 : e[t];
}
function Mn(e, t) {
  var n = W1(e, t);
  return V1(n) ? n : void 0;
}
var ko = Mn(Pt, "Map"), Xo = Mn(Object, "create");
function U1() {
  this.__data__ = Xo ? Xo(null) : {}, this.size = 0;
}
function G1(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var k1 = "__lodash_hash_undefined__", X1 = Object.prototype, q1 = X1.hasOwnProperty;
function K1(e) {
  var t = this.__data__;
  if (Xo) {
    var n = t[e];
    return n === k1 ? void 0 : n;
  }
  return q1.call(t, e) ? t[e] : void 0;
}
var Y1 = Object.prototype, Q1 = Y1.hasOwnProperty;
function Z1(e) {
  var t = this.__data__;
  return Xo ? t[e] !== void 0 : Q1.call(t, e);
}
var J1 = "__lodash_hash_undefined__";
function ew(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Xo && t === void 0 ? J1 : t, this;
}
function $n(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
$n.prototype.clear = U1;
$n.prototype.delete = G1;
$n.prototype.get = K1;
$n.prototype.has = Z1;
$n.prototype.set = ew;
function tw() {
  this.size = 0, this.__data__ = {
    hash: new $n(),
    map: new (ko || kt)(),
    string: new $n()
  };
}
function nw(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function bi(e, t) {
  var n = e.__data__;
  return nw(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ow(e) {
  var t = bi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function rw(e) {
  return bi(this, e).get(e);
}
function iw(e) {
  return bi(this, e).has(e);
}
function aw(e, t) {
  var n = bi(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Xt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Xt.prototype.clear = tw;
Xt.prototype.delete = ow;
Xt.prototype.get = rw;
Xt.prototype.has = iw;
Xt.prototype.set = aw;
var lw = 200;
function sw(e, t) {
  var n = this.__data__;
  if (n instanceof kt) {
    var o = n.__data__;
    if (!ko || o.length < lw - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Xt(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function At(e) {
  var t = this.__data__ = new kt(e);
  this.size = t.size;
}
At.prototype.clear = g1;
At.prototype.delete = v1;
At.prototype.get = h1;
At.prototype.has = y1;
At.prototype.set = sw;
var cw = "__lodash_hash_undefined__";
function uw(e) {
  return this.__data__.set(e, cw), this;
}
function dw(e) {
  return this.__data__.has(e);
}
function qo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Xt(); ++t < n; )
    this.add(e[t]);
}
qo.prototype.add = qo.prototype.push = uw;
qo.prototype.has = dw;
function fw(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Za(e, t) {
  return e.has(t);
}
var pw = 1, mw = 2;
function xm(e, t, n, o, r, i) {
  var a = n & pw, l = e.length, s = t.length;
  if (l != s && !(a && s > l))
    return !1;
  var c = i.get(e), u = i.get(t);
  if (c && u)
    return c == t && u == e;
  var d = -1, f = !0, p = n & mw ? new qo() : void 0;
  for (i.set(e, t), i.set(t, e); ++d < l; ) {
    var h = e[d], m = t[d];
    if (o)
      var w = a ? o(m, h, d, t, e, i) : o(h, m, d, e, t, i);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!fw(t, function(b, C) {
        if (!Za(p, C) && (h === b || r(h, b, n, o, i)))
          return p.push(C);
      })) {
        f = !1;
        break;
      }
    } else if (!(h === m || r(h, m, n, o, i))) {
      f = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), f;
}
var Yr = Pt.Uint8Array;
function gw(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function vw(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var hw = 1, yw = 2, bw = "[object Boolean]", ww = "[object Date]", Sw = "[object Error]", xw = "[object Map]", Cw = "[object Number]", $w = "[object RegExp]", Ow = "[object Set]", Pw = "[object String]", Iw = "[object Symbol]", Tw = "[object ArrayBuffer]", Ew = "[object DataView]", hu = wt ? wt.prototype : void 0, sa = hu ? hu.valueOf : void 0;
function _w(e, t, n, o, r, i, a) {
  switch (n) {
    case Ew:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Tw:
      return !(e.byteLength != t.byteLength || !i(new Yr(e), new Yr(t)));
    case bw:
    case ww:
    case Cw:
      return ql(+e, +t);
    case Sw:
      return e.name == t.name && e.message == t.message;
    case $w:
    case Pw:
      return e == t + "";
    case xw:
      var l = gw;
    case Ow:
      var s = o & hw;
      if (l || (l = vw), e.size != t.size && !s)
        return !1;
      var c = a.get(e);
      if (c)
        return c == t;
      o |= yw, a.set(e, t);
      var u = xm(l(e), l(t), o, r, i, a);
      return a.delete(e), u;
    case Iw:
      if (sa)
        return sa.call(e) == sa.call(t);
  }
  return !1;
}
function Kl(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var ut = Array.isArray;
function Cm(e, t, n) {
  var o = t(e);
  return ut(e) ? o : Kl(o, n(e));
}
function Aw(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, i = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (i[r++] = a);
  }
  return i;
}
function $m() {
  return [];
}
var Mw = Object.prototype, Rw = Mw.propertyIsEnumerable, yu = Object.getOwnPropertySymbols, Yl = yu ? function(e) {
  return e == null ? [] : (e = Object(e), Aw(yu(e), function(t) {
    return Rw.call(e, t);
  }));
} : $m;
function Fw(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
function Ft(e) {
  return e != null && typeof e == "object";
}
var Dw = "[object Arguments]";
function bu(e) {
  return Ft(e) && _n(e) == Dw;
}
var Om = Object.prototype, Nw = Om.hasOwnProperty, Lw = Om.propertyIsEnumerable, wi = bu(/* @__PURE__ */ function() {
  return arguments;
}()) ? bu : function(e) {
  return Ft(e) && Nw.call(e, "callee") && !Lw.call(e, "callee");
};
function jw() {
  return !1;
}
var Pm = typeof exports == "object" && exports && !exports.nodeType && exports, wu = Pm && typeof module == "object" && module && !module.nodeType && module, Hw = wu && wu.exports === Pm, Su = Hw ? Pt.Buffer : void 0, Bw = Su ? Su.isBuffer : void 0, Ko = Bw || jw, zw = 9007199254740991, Vw = /^(?:0|[1-9]\d*)$/;
function Im(e, t) {
  var n = typeof e;
  return t = t ?? zw, !!t && (n == "number" || n != "symbol" && Vw.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ww = 9007199254740991;
function Ql(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ww;
}
var Uw = "[object Arguments]", Gw = "[object Array]", kw = "[object Boolean]", Xw = "[object Date]", qw = "[object Error]", Kw = "[object Function]", Yw = "[object Map]", Qw = "[object Number]", Zw = "[object Object]", Jw = "[object RegExp]", eS = "[object Set]", tS = "[object String]", nS = "[object WeakMap]", oS = "[object ArrayBuffer]", rS = "[object DataView]", iS = "[object Float32Array]", aS = "[object Float64Array]", lS = "[object Int8Array]", sS = "[object Int16Array]", cS = "[object Int32Array]", uS = "[object Uint8Array]", dS = "[object Uint8ClampedArray]", fS = "[object Uint16Array]", pS = "[object Uint32Array]", Oe = {};
Oe[iS] = Oe[aS] = Oe[lS] = Oe[sS] = Oe[cS] = Oe[uS] = Oe[dS] = Oe[fS] = Oe[pS] = !0;
Oe[Uw] = Oe[Gw] = Oe[oS] = Oe[kw] = Oe[rS] = Oe[Xw] = Oe[qw] = Oe[Kw] = Oe[Yw] = Oe[Qw] = Oe[Zw] = Oe[Jw] = Oe[eS] = Oe[tS] = Oe[nS] = !1;
function mS(e) {
  return Ft(e) && Ql(e.length) && !!Oe[_n(e)];
}
function Zl(e) {
  return function(t) {
    return e(t);
  };
}
var Tm = typeof exports == "object" && exports && !exports.nodeType && exports, Ao = Tm && typeof module == "object" && module && !module.nodeType && module, gS = Ao && Ao.exports === Tm, ca = gS && bm.process, co = function() {
  try {
    var e = Ao && Ao.require && Ao.require("util").types;
    return e || ca && ca.binding && ca.binding("util");
  } catch {
  }
}(), xu = co && co.isTypedArray, Jl = xu ? Zl(xu) : mS, vS = Object.prototype, hS = vS.hasOwnProperty;
function Em(e, t) {
  var n = ut(e), o = !n && wi(e), r = !n && !o && Ko(e), i = !n && !o && !r && Jl(e), a = n || o || r || i, l = a ? Fw(e.length, String) : [], s = l.length;
  for (var c in e)
    (t || hS.call(e, c)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Im(c, s))) && l.push(c);
  return l;
}
var yS = Object.prototype;
function Si(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || yS;
  return e === n;
}
function _m(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var bS = _m(Object.keys, Object), wS = Object.prototype, SS = wS.hasOwnProperty;
function Am(e) {
  if (!Si(e))
    return bS(e);
  var t = [];
  for (var n in Object(e))
    SS.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function yo(e) {
  return e != null && Ql(e.length) && !Sm(e);
}
function bo(e) {
  return yo(e) ? Em(e) : Am(e);
}
function Ja(e) {
  return Cm(e, bo, Yl);
}
var xS = 1, CS = Object.prototype, $S = CS.hasOwnProperty;
function OS(e, t, n, o, r, i) {
  var a = n & xS, l = Ja(e), s = l.length, c = Ja(t), u = c.length;
  if (s != u && !a)
    return !1;
  for (var d = s; d--; ) {
    var f = l[d];
    if (!(a ? f in t : $S.call(t, f)))
      return !1;
  }
  var p = i.get(e), h = i.get(t);
  if (p && h)
    return p == t && h == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var w = a; ++d < s; ) {
    f = l[d];
    var b = e[f], C = t[f];
    if (o)
      var S = a ? o(C, b, f, t, e, i) : o(b, C, f, e, t, i);
    if (!(S === void 0 ? b === C || r(b, C, n, o, i) : S)) {
      m = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (m && !w) {
    var x = e.constructor, $ = t.constructor;
    x != $ && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof $ == "function" && $ instanceof $) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var el = Mn(Pt, "DataView"), tl = Mn(Pt, "Promise"), nl = Mn(Pt, "Set"), ol = Mn(Pt, "WeakMap"), Cu = "[object Map]", PS = "[object Object]", $u = "[object Promise]", Ou = "[object Set]", Pu = "[object WeakMap]", Iu = "[object DataView]", IS = An(el), TS = An(ko), ES = An(tl), _S = An(nl), AS = An(ol), gt = _n;
(el && gt(new el(new ArrayBuffer(1))) != Iu || ko && gt(new ko()) != Cu || tl && gt(tl.resolve()) != $u || nl && gt(new nl()) != Ou || ol && gt(new ol()) != Pu) && (gt = function(e) {
  var t = _n(e), n = t == PS ? e.constructor : void 0, o = n ? An(n) : "";
  if (o)
    switch (o) {
      case IS:
        return Iu;
      case TS:
        return Cu;
      case ES:
        return $u;
      case _S:
        return Ou;
      case AS:
        return Pu;
    }
  return t;
});
var MS = 1, Tu = "[object Arguments]", Eu = "[object Array]", Sr = "[object Object]", RS = Object.prototype, _u = RS.hasOwnProperty;
function FS(e, t, n, o, r, i) {
  var a = ut(e), l = ut(t), s = a ? Eu : gt(e), c = l ? Eu : gt(t);
  s = s == Tu ? Sr : s, c = c == Tu ? Sr : c;
  var u = s == Sr, d = c == Sr, f = s == c;
  if (f && Ko(e)) {
    if (!Ko(t))
      return !1;
    a = !0, u = !1;
  }
  if (f && !u)
    return i || (i = new At()), a || Jl(e) ? xm(e, t, n, o, r, i) : _w(e, t, s, n, o, r, i);
  if (!(n & MS)) {
    var p = u && _u.call(e, "__wrapped__"), h = d && _u.call(t, "__wrapped__");
    if (p || h) {
      var m = p ? e.value() : e, w = h ? t.value() : t;
      return i || (i = new At()), r(m, w, n, o, i);
    }
  }
  return f ? (i || (i = new At()), OS(e, t, n, o, r, i)) : !1;
}
function xi(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Ft(e) && !Ft(t) ? e !== e && t !== t : FS(e, t, n, o, xi, r);
}
function es(e, t) {
  return xi(e, t);
}
const DS = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function Au(e) {
  return typeof e != "function" ? null : e();
}
function Mu(e) {
  return typeof e != "object" || !e ? null : e;
}
const NS = Z({
  compatConfig: {
    MODE: 3
  },
  name: "Align",
  props: DS,
  emits: ["align"],
  setup(e, t) {
    let {
      expose: n,
      slots: o
    } = t;
    const r = te({}), i = te(), [a, l] = l1(() => {
      const {
        disabled: f,
        target: p,
        align: h,
        onAlign: m
      } = e;
      if (!f && p && i.value) {
        const w = i.value;
        let b;
        const C = Au(p), S = Mu(p);
        r.value.element = C, r.value.point = S, r.value.align = h;
        const {
          activeElement: x
        } = document;
        return C && ym(C) ? b = Xl(w, C, h) : S && (b = n1(w, S, h)), a1(x, w), m && b && m(w, b), !0;
      }
      return !1;
    }, T(() => e.monitorBufferTime)), s = te({
      cancel: () => {
      }
    }), c = te({
      cancel: () => {
      }
    }), u = () => {
      const f = e.target, p = Au(f), h = Mu(f);
      i.value !== c.value.element && (c.value.cancel(), c.value.element = i.value, c.value.cancel = mu(i.value, a)), (r.value.element !== p || !i1(r.value.point, h) || !es(r.value.align, e.align)) && (a(), s.value.element !== p && (s.value.cancel(), s.value.element = p, s.value.cancel = mu(p, a)));
    };
    be(() => {
      Fe(() => {
        u();
      });
    }), Pn(() => {
      Fe(() => {
        u();
      });
    }), ae(() => e.disabled, (f) => {
      f ? l() : a();
    }, {
      immediate: !0,
      flush: "post"
    });
    const d = te(null);
    return ae(() => e.monitorWindowResize, (f) => {
      f ? d.value || (d.value = Un(window, "resize", a)) : d.value && (d.value.remove(), d.value = null);
    }, {
      flush: "post"
    }), Zo(() => {
      s.value.cancel(), c.value.cancel(), d.value && d.value.remove(), l();
    }), n({
      forceAlign: () => a(!0)
    }), () => {
      const f = o == null ? void 0 : o.default();
      return f ? tt(f[0], {
        ref: i
      }, !0, !0) : null;
    };
  }
});
an("bottomLeft", "bottomRight", "topLeft", "topRight");
const LS = (e) => e !== void 0 && (e === "topLeft" || e === "topRight") ? "slide-down" : "slide-up", tr = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return g(e ? {
    name: e,
    appear: !0,
    // type: 'animation',
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    // appearActiveClass: `antdv-base-transtion`,
    // appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
    enterFromClass: `${e}-enter ${e}-enter-prepare ${e}-enter-start`,
    enterActiveClass: `${e}-enter ${e}-enter-prepare`,
    enterToClass: `${e}-enter ${e}-enter-active`,
    leaveFromClass: ` ${e}-leave`,
    leaveActiveClass: `${e}-leave ${e}-leave-active`,
    leaveToClass: `${e}-leave ${e}-leave-active`
  } : {
    css: !1
  }, t);
}, Ci = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return g(e ? {
    name: e,
    appear: !0,
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    appearActiveClass: `${e}`,
    appearToClass: `${e}-appear ${e}-appear-active`,
    enterFromClass: `${e}-appear ${e}-enter ${e}-appear-prepare ${e}-enter-prepare`,
    enterActiveClass: `${e}`,
    enterToClass: `${e}-enter ${e}-appear ${e}-appear-active ${e}-enter-active`,
    leaveActiveClass: `${e} ${e}-leave`,
    leaveToClass: `${e}-leave-active`
  } : {
    css: !1
  }, t);
}, ln = (e, t, n) => n !== void 0 ? n : `${e}-${t}`, jS = Z({
  compatConfig: {
    MODE: 3
  },
  name: "PopupInner",
  inheritAttrs: !1,
  props: zl,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      attrs: o,
      slots: r
    } = t;
    const i = k(), a = k(), l = k(), [s, c] = Eb(Ct(e, "stretch")), u = () => {
      e.stretch && c(e.getRootDomNode());
    }, d = k(!1);
    let f;
    ae(() => e.visible, (O) => {
      clearTimeout(f), O ? f = setTimeout(() => {
        d.value = e.visible;
      }) : d.value = !1;
    }, {
      immediate: !0
    });
    const [p, h] = Tb(d, u), m = k(), w = () => e.point ? e.point : e.getRootDomNode, b = () => {
      var O;
      (O = i.value) === null || O === void 0 || O.forceAlign();
    }, C = (O, y) => {
      var I;
      const E = e.getClassNameFromAlign(y), R = l.value;
      l.value !== E && (l.value = E), p.value === "align" && (R !== E ? Promise.resolve().then(() => {
        b();
      }) : h(() => {
        var _;
        (_ = m.value) === null || _ === void 0 || _.call(m);
      }), (I = e.onAlign) === null || I === void 0 || I.call(e, O, y));
    }, S = T(() => {
      const O = typeof e.animation == "object" ? e.animation : Vl(e);
      return ["onAfterEnter", "onAfterLeave"].forEach((y) => {
        const I = O[y];
        O[y] = (E) => {
          h(), p.value = "stable", I == null || I(E);
        };
      }), O;
    }), x = () => new Promise((O) => {
      m.value = O;
    });
    ae([S, p], () => {
      !S.value && p.value === "motion" && h();
    }, {
      immediate: !0
    }), n({
      forceAlign: b,
      getElement: () => a.value.$el || a.value
    });
    const $ = T(() => {
      var O;
      return !(!((O = e.align) === null || O === void 0) && O.points && (p.value === "align" || p.value === "stable"));
    });
    return () => {
      var O;
      const {
        zIndex: y,
        align: I,
        prefixCls: E,
        destroyPopupOnHide: R,
        onMouseenter: _,
        onMouseleave: N,
        onTouchstart: F = () => {
        },
        onMousedown: j
      } = e, P = p.value, M = [g(g({}, s.value), {
        zIndex: y,
        opacity: P === "motion" || P === "stable" || !d.value ? null : 0,
        // pointerEvents: statusValue === 'stable' ? null : 'none',
        pointerEvents: !d.value && P !== "stable" ? "none" : null
      }), o.style];
      let L = Je((O = r.default) === null || O === void 0 ? void 0 : O.call(r, {
        visible: e.visible
      }));
      L.length > 1 && (L = v("div", {
        class: `${E}-content`
      }, [L]));
      const H = oe(E, o.class, l.value, !e.arrow && `${E}-arrow-hidden`), z = d.value || !e.visible ? tr(S.value.name, S.value) : {};
      return v(Gt, D(D({
        ref: a
      }, z), {}, {
        onBeforeEnter: x
      }), {
        default: () => !R || e.visible ? Bt(v(NS, {
          target: w(),
          key: "popup",
          ref: i,
          monitorWindowResize: !0,
          disabled: $.value,
          align: I,
          onAlign: C
        }, {
          default: () => v("div", {
            class: H,
            onMouseenter: _,
            onMouseleave: N,
            onMousedown: wc(j, ["capture"]),
            [Ke ? "onTouchstartPassive" : "onTouchstart"]: wc(F, ["capture"]),
            style: M
          }, [L])
        }), [[mo, d.value]]) : null
      });
    };
  }
}), HS = Z({
  compatConfig: {
    MODE: 3
  },
  name: "Popup",
  inheritAttrs: !1,
  props: Ob,
  setup(e, t) {
    let {
      attrs: n,
      slots: o,
      expose: r
    } = t;
    const i = k(!1), a = k(!1), l = k(), s = k();
    return ae([() => e.visible, () => e.mobile], () => {
      i.value = e.visible, e.visible && e.mobile && (a.value = !0);
    }, {
      immediate: !0,
      flush: "post"
    }), r({
      forceAlign: () => {
        var c;
        (c = l.value) === null || c === void 0 || c.forceAlign();
      },
      getElement: () => {
        var c;
        return (c = l.value) === null || c === void 0 ? void 0 : c.getElement();
      }
    }), () => {
      const c = g(g(g({}, e), n), {
        visible: i.value
      }), u = a.value ? v(Pb, D(D({}, c), {}, {
        mobile: e.mobile,
        ref: l
      }), {
        default: o.default
      }) : v(jS, D(D({}, c), {}, {
        ref: l
      }), {
        default: o.default
      });
      return v("div", {
        ref: s
      }, [v(cm, c, null), u]);
    };
  }
});
function BS(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Ru(e, t, n) {
  const o = e[t] || {};
  return g(g({}, o), n);
}
function zS(e, t, n, o) {
  const {
    points: r
  } = n, i = Object.keys(e);
  for (let a = 0; a < i.length; a += 1) {
    const l = i[a];
    if (BS(e[l].points, r, o))
      return `${t}-placement-${l}`;
  }
  return "";
}
const VS = {
  methods: {
    setState() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = typeof e == "function" ? e(this.$data, this.$props) : e;
      if (this.getDerivedStateFromProps) {
        const o = this.getDerivedStateFromProps(Kh(this), g(g({}, this.$data), n));
        if (o === null)
          return;
        n = g(g({}, n), o || {});
      }
      g(this.$data, n), this._.isMounted && this.$forceUpdate(), Fe(() => {
        t && t();
      });
    },
    __emit() {
      const e = [].slice.call(arguments, 0);
      let t = e[0];
      t = `on${t[0].toUpperCase()}${t.substring(1)}`;
      const n = this.$props[t] || this.$attrs[t];
      if (e.length && n)
        if (Array.isArray(n))
          for (let o = 0, r = n.length; o < r; o++)
            n[o](...e.slice(1));
        else
          n(...e.slice(1));
    }
  }
}, Mm = Symbol("PortalContextKey"), ts = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: !0
  };
  _e(Mm, {
    inTriggerContext: t.inTriggerContext,
    shouldRender: T(() => {
      const {
        sPopupVisible: n,
        popupRef: o,
        forceRender: r,
        autoDestroy: i
      } = e || {};
      let a = !1;
      return (n || o || r) && (a = !0), !n && i && (a = !1), a;
    })
  });
}, WS = () => {
  ts({}, {
    inTriggerContext: !1
  });
  const e = Ee(Mm, {
    shouldRender: T(() => !1),
    inTriggerContext: !1
  });
  return {
    shouldRender: T(() => e.shouldRender.value || e.inTriggerContext === !1)
  };
}, Rm = Z({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: !1,
  props: {
    getContainer: V.func.isRequired,
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t, o = !0, r;
    const {
      shouldRender: i
    } = WS();
    function a() {
      i.value && (r = e.getContainer());
    }
    lh(() => {
      o = !1, a();
    }), be(() => {
      r || a();
    });
    const l = ae(i, () => {
      i.value && !r && (r = e.getContainer()), r && l();
    });
    return Pn(() => {
      Fe(() => {
        var s;
        i.value && ((s = e.didUpdate) === null || s === void 0 || s.call(e, e));
      });
    }), () => {
      var s;
      return i.value ? o ? (s = n.default) === null || s === void 0 ? void 0 : s.call(n) : r ? v(Yf, {
        to: r
      }, n) : null : null;
    };
  }
});
let ua;
function US(e) {
  if (typeof document > "u")
    return 0;
  if (ua === void 0) {
    const t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    const n = document.createElement("div"), o = n.style;
    o.position = "absolute", o.top = "0", o.left = "0", o.pointerEvents = "none", o.visibility = "hidden", o.width = "200px", o.height = "150px", o.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    const r = t.offsetWidth;
    n.style.overflow = "scroll";
    let i = t.offsetWidth;
    r === i && (i = n.clientWidth), document.body.removeChild(n), ua = r - i;
  }
  return ua;
}
const GS = `vc-util-locker-${Date.now()}`;
let Fu = 0;
function kS() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
function XS(e) {
  const t = T(() => !!e && !!e.value);
  Fu += 1;
  const n = `${GS}_${Fu}`;
  Pe((o) => {
    if (yt()) {
      if (t.value) {
        const r = US(), i = kS();
        Ho(`
html body {
  overflow-y: hidden;
  ${i ? `width: calc(100% - ${r}px);` : ""}
}`, n);
      } else
        kr(n);
      o(() => {
        kr(n);
      });
    }
  }, {
    flush: "post"
  });
}
let pn = 0;
const Fr = yt(), Du = (e) => {
  if (!Fr)
    return null;
  if (e) {
    if (typeof e == "string")
      return document.querySelectorAll(e)[0];
    if (typeof e == "function")
      return e();
    if (typeof e == "object" && e instanceof window.HTMLElement)
      return e;
  }
  return document.body;
}, Fm = Z({
  compatConfig: {
    MODE: 3
  },
  name: "PortalWrapper",
  inheritAttrs: !1,
  props: {
    wrapperClassName: String,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getContainer: V.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    autoLock: Ce(),
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = k(), r = k(), i = k(), a = k(1), l = yt() && document.createElement("div"), s = () => {
      var p, h;
      o.value === l && ((h = (p = o.value) === null || p === void 0 ? void 0 : p.parentNode) === null || h === void 0 || h.removeChild(o.value)), o.value = null;
    };
    let c = null;
    const u = function() {
      return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) || o.value && !o.value.parentNode ? (c = Du(e.getContainer), c ? (c.appendChild(o.value), !0) : !1) : !0;
    }, d = () => Fr ? (o.value || (o.value = l, u(!0)), f(), o.value) : null, f = () => {
      const {
        wrapperClassName: p
      } = e;
      o.value && p && p !== o.value.className && (o.value.className = p);
    };
    return Pn(() => {
      f(), u();
    }), XS(T(() => e.autoLock && e.visible && yt() && (o.value === document.body || o.value === l))), be(() => {
      let p = !1;
      ae([() => e.visible, () => e.getContainer], (h, m) => {
        let [w, b] = h, [C, S] = m;
        Fr && (c = Du(e.getContainer), c === document.body && (w && !C ? pn += 1 : p && (pn -= 1))), p && (typeof b == "function" && typeof S == "function" ? b.toString() !== S.toString() : b !== S) && s(), p = !0;
      }, {
        immediate: !0,
        flush: "post"
      }), Fe(() => {
        u() || (i.value = $e(() => {
          a.value += 1;
        }));
      });
    }), Ae(() => {
      const {
        visible: p
      } = e;
      Fr && c === document.body && (pn = p && pn ? pn - 1 : pn), s(), $e.cancel(i.value);
    }), () => {
      const {
        forceRender: p,
        visible: h
      } = e;
      let m = null;
      const w = {
        getOpenCount: () => pn,
        getContainer: d
      };
      return a.value && (p || h || r.value) && (m = v(Rm, {
        getContainer: d,
        ref: r,
        didUpdate: e.didUpdate
      }, {
        default: () => {
          var b;
          return (b = n.default) === null || b === void 0 ? void 0 : b.call(n, w);
        }
      })), m;
    };
  }
}), qS = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"], Dm = Z({
  compatConfig: {
    MODE: 3
  },
  name: "Trigger",
  mixins: [VS],
  inheritAttrs: !1,
  props: Cb(),
  setup(e) {
    const t = T(() => {
      const {
        popupPlacement: r,
        popupAlign: i,
        builtinPlacements: a
      } = e;
      return r && a ? Ru(a, r, i) : i;
    }), n = k(null), o = (r) => {
      n.value = r;
    };
    return {
      vcTriggerContext: Ee("vcTriggerContext", {}),
      popupRef: n,
      setPopupRef: o,
      triggerRef: k(null),
      align: t,
      focusTime: null,
      clickOutsideHandler: null,
      contextmenuOutsideHandler1: null,
      contextmenuOutsideHandler2: null,
      touchOutsideHandler: null,
      attachId: null,
      delayTimer: null,
      hasPopupMouseDown: !1,
      preClickTime: null,
      preTouchTime: null,
      mouseDownTimeout: null,
      childOriginEvents: {}
    };
  },
  data() {
    const e = this.$props;
    let t;
    return this.popupVisible !== void 0 ? t = !!e.popupVisible : t = !!e.defaultPopupVisible, qS.forEach((n) => {
      this[`fire${n}`] = (o) => {
        this.fireEvents(n, o);
      };
    }), {
      prevPopupVisible: t,
      sPopupVisible: t,
      point: null
    };
  },
  watch: {
    popupVisible(e) {
      e !== void 0 && (this.prevPopupVisible = this.sPopupVisible, this.sPopupVisible = e);
    }
  },
  created() {
    _e("vcTriggerContext", {
      onPopupMouseDown: this.onPopupMouseDown,
      onPopupMouseenter: this.onPopupMouseenter,
      onPopupMouseleave: this.onPopupMouseleave
    }), ts(this);
  },
  deactivated() {
    this.setPopupVisible(!1);
  },
  mounted() {
    this.$nextTick(() => {
      this.updatedCal();
    });
  },
  updated() {
    this.$nextTick(() => {
      this.updatedCal();
    });
  },
  beforeUnmount() {
    this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), $e.cancel(this.attachId);
  },
  methods: {
    updatedCal() {
      const e = this.$props;
      if (this.$data.sPopupVisible) {
        let n;
        !this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow()) && (n = e.getDocument(this.getRootDomNode()), this.clickOutsideHandler = Un(n, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (n = n || e.getDocument(this.getRootDomNode()), this.touchOutsideHandler = Un(n, "touchstart", this.onDocumentClick, Ke ? {
          passive: !1
        } : !1)), !this.contextmenuOutsideHandler1 && this.isContextmenuToShow() && (n = n || e.getDocument(this.getRootDomNode()), this.contextmenuOutsideHandler1 = Un(n, "scroll", this.onContextmenuClose)), !this.contextmenuOutsideHandler2 && this.isContextmenuToShow() && (this.contextmenuOutsideHandler2 = Un(window, "blur", this.onContextmenuClose));
      } else
        this.clearOutsideHandler();
    },
    onMouseenter(e) {
      const {
        mouseEnterDelay: t
      } = this.$props;
      this.fireEvents("onMouseenter", e), this.delaySetPopupVisible(!0, t, t ? null : e);
    },
    onMouseMove(e) {
      this.fireEvents("onMousemove", e), this.setPoint(e);
    },
    onMouseleave(e) {
      this.fireEvents("onMouseleave", e), this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
    },
    onPopupMouseenter() {
      const {
        vcTriggerContext: e = {}
      } = this;
      e.onPopupMouseenter && e.onPopupMouseenter(), this.clearDelayTimer();
    },
    onPopupMouseleave(e) {
      var t;
      if (e && e.relatedTarget && !e.relatedTarget.setTimeout && Qt((t = this.popupRef) === null || t === void 0 ? void 0 : t.getElement(), e.relatedTarget))
        return;
      this.isMouseLeaveToHide() && this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
      const {
        vcTriggerContext: n = {}
      } = this;
      n.onPopupMouseleave && n.onPopupMouseleave(e);
    },
    onFocus(e) {
      this.fireEvents("onFocus", e), this.clearDelayTimer(), this.isFocusToShow() && (this.focusTime = Date.now(), this.delaySetPopupVisible(!0, this.$props.focusDelay));
    },
    onMousedown(e) {
      this.fireEvents("onMousedown", e), this.preClickTime = Date.now();
    },
    onTouchstart(e) {
      this.fireEvents("onTouchstart", e), this.preTouchTime = Date.now();
    },
    onBlur(e) {
      Qt(e.target, e.relatedTarget || document.activeElement) || (this.fireEvents("onBlur", e), this.clearDelayTimer(), this.isBlurToHide() && this.delaySetPopupVisible(!1, this.$props.blurDelay));
    },
    onContextmenu(e) {
      e.preventDefault(), this.fireEvents("onContextmenu", e), this.setPopupVisible(!0, e);
    },
    onContextmenuClose() {
      this.isContextmenuToShow() && this.close();
    },
    onClick(e) {
      if (this.fireEvents("onClick", e), this.focusTime) {
        let n;
        if (this.preClickTime && this.preTouchTime ? n = Math.min(this.preClickTime, this.preTouchTime) : this.preClickTime ? n = this.preClickTime : this.preTouchTime && (n = this.preTouchTime), Math.abs(n - this.focusTime) < 20)
          return;
        this.focusTime = 0;
      }
      this.preClickTime = 0, this.preTouchTime = 0, this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && e && e.preventDefault && e.preventDefault(), e && e.domEvent && e.domEvent.preventDefault();
      const t = !this.$data.sPopupVisible;
      (this.isClickToHide() && !t || t && this.isClickToShow()) && this.setPopupVisible(!this.$data.sPopupVisible, e);
    },
    onPopupMouseDown() {
      const {
        vcTriggerContext: e = {}
      } = this;
      this.hasPopupMouseDown = !0, clearTimeout(this.mouseDownTimeout), this.mouseDownTimeout = setTimeout(() => {
        this.hasPopupMouseDown = !1;
      }, 0), e.onPopupMouseDown && e.onPopupMouseDown(...arguments);
    },
    onDocumentClick(e) {
      if (this.$props.mask && !this.$props.maskClosable)
        return;
      const t = e.target, n = this.getRootDomNode(), o = this.getPopupDomNode();
      // mousedown on the target should also close popup when action is contextMenu.
      // https://github.com/ant-design/ant-design/issues/29853
      (!Qt(n, t) || this.isContextMenuOnly()) && !Qt(o, t) && !this.hasPopupMouseDown && this.delaySetPopupVisible(!1, 0.1);
    },
    getPopupDomNode() {
      var e;
      return ((e = this.popupRef) === null || e === void 0 ? void 0 : e.getElement()) || null;
    },
    getRootDomNode() {
      var e, t, n, o;
      const {
        getTriggerDOMNode: r
      } = this.$props;
      if (r) {
        const i = ((t = (e = this.triggerRef) === null || e === void 0 ? void 0 : e.$el) === null || t === void 0 ? void 0 : t.nodeName) === "#comment" ? null : Ht(this.triggerRef);
        return Ht(r(i));
      }
      try {
        const i = ((o = (n = this.triggerRef) === null || n === void 0 ? void 0 : n.$el) === null || o === void 0 ? void 0 : o.nodeName) === "#comment" ? null : Ht(this.triggerRef);
        if (i)
          return i;
      } catch {
      }
      return Ht(this);
    },
    handleGetPopupClassFromAlign(e) {
      const t = [], n = this.$props, {
        popupPlacement: o,
        builtinPlacements: r,
        prefixCls: i,
        alignPoint: a,
        getPopupClassNameFromAlign: l
      } = n;
      return o && r && t.push(zS(r, i, e, a)), l && t.push(l(e)), t.join(" ");
    },
    getPopupAlign() {
      const e = this.$props, {
        popupPlacement: t,
        popupAlign: n,
        builtinPlacements: o
      } = e;
      return t && o ? Ru(o, t, n) : n;
    },
    getComponent() {
      const e = {};
      this.isMouseEnterToShow() && (e.onMouseenter = this.onPopupMouseenter), this.isMouseLeaveToHide() && (e.onMouseleave = this.onPopupMouseleave), e.onMousedown = this.onPopupMouseDown, e[Ke ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
      const {
        handleGetPopupClassFromAlign: t,
        getRootDomNode: n,
        $attrs: o
      } = this, {
        prefixCls: r,
        destroyPopupOnHide: i,
        popupClassName: a,
        popupAnimation: l,
        popupTransitionName: s,
        popupStyle: c,
        mask: u,
        maskAnimation: d,
        maskTransitionName: f,
        zIndex: p,
        stretch: h,
        alignPoint: m,
        mobile: w,
        arrow: b,
        forceRender: C
      } = this.$props, {
        sPopupVisible: S,
        point: x
      } = this.$data, $ = g(g({
        prefixCls: r,
        arrow: b,
        destroyPopupOnHide: i,
        visible: S,
        point: m ? x : null,
        align: this.align,
        animation: l,
        getClassNameFromAlign: t,
        stretch: h,
        getRootDomNode: n,
        mask: u,
        zIndex: p,
        transitionName: s,
        maskAnimation: d,
        maskTransitionName: f,
        class: a,
        style: c,
        onAlign: o.onPopupAlign || sm
      }, e), {
        ref: this.setPopupRef,
        mobile: w,
        forceRender: C
      });
      return v(HS, $, {
        default: this.$slots.popup || (() => Yh(this, "popup"))
      });
    },
    attachParent(e) {
      $e.cancel(this.attachId);
      const {
        getPopupContainer: t,
        getDocument: n
      } = this.$props, o = this.getRootDomNode();
      let r;
      t ? (o || t.length === 0) && (r = t(o)) : r = n(this.getRootDomNode()).body, r ? r.appendChild(e) : this.attachId = $e(() => {
        this.attachParent(e);
      });
    },
    getContainer() {
      const {
        $props: e
      } = this, {
        getDocument: t
      } = e, n = t(this.getRootDomNode()).createElement("div");
      return n.style.position = "absolute", n.style.top = "0", n.style.left = "0", n.style.width = "100%", this.attachParent(n), n;
    },
    setPopupVisible(e, t) {
      const {
        alignPoint: n,
        sPopupVisible: o,
        onPopupVisibleChange: r
      } = this;
      this.clearDelayTimer(), o !== e && (kh(this, "popupVisible") || this.setState({
        sPopupVisible: e,
        prevPopupVisible: o
      }), r && r(e)), n && t && e && this.setPoint(t);
    },
    setPoint(e) {
      const {
        alignPoint: t
      } = this.$props;
      !t || !e || this.setState({
        point: {
          pageX: e.pageX,
          pageY: e.pageY
        }
      });
    },
    handlePortalUpdate() {
      this.prevPopupVisible !== this.sPopupVisible && this.afterPopupVisibleChange(this.sPopupVisible);
    },
    delaySetPopupVisible(e, t, n) {
      const o = t * 1e3;
      if (this.clearDelayTimer(), o) {
        const r = n ? {
          pageX: n.pageX,
          pageY: n.pageY
        } : null;
        this.delayTimer = setTimeout(() => {
          this.setPopupVisible(e, r), this.clearDelayTimer();
        }, o);
      } else
        this.setPopupVisible(e, n);
    },
    clearDelayTimer() {
      this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
    },
    clearOutsideHandler() {
      this.clickOutsideHandler && (this.clickOutsideHandler.remove(), this.clickOutsideHandler = null), this.contextmenuOutsideHandler1 && (this.contextmenuOutsideHandler1.remove(), this.contextmenuOutsideHandler1 = null), this.contextmenuOutsideHandler2 && (this.contextmenuOutsideHandler2.remove(), this.contextmenuOutsideHandler2 = null), this.touchOutsideHandler && (this.touchOutsideHandler.remove(), this.touchOutsideHandler = null);
    },
    createTwoChains(e) {
      let t = () => {
      };
      const n = Oc(this);
      return this.childOriginEvents[e] && n[e] ? this[`fire${e}`] : (t = this.childOriginEvents[e] || n[e] || t, t);
    },
    isClickToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("click") !== -1 || t.indexOf("click") !== -1;
    },
    isContextMenuOnly() {
      const {
        action: e
      } = this.$props;
      return e === "contextmenu" || e.length === 1 && e[0] === "contextmenu";
    },
    isContextmenuToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("contextmenu") !== -1 || t.indexOf("contextmenu") !== -1;
    },
    isClickToHide() {
      const {
        action: e,
        hideAction: t
      } = this.$props;
      return e.indexOf("click") !== -1 || t.indexOf("click") !== -1;
    },
    isMouseEnterToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("hover") !== -1 || t.indexOf("mouseenter") !== -1;
    },
    isMouseLeaveToHide() {
      const {
        action: e,
        hideAction: t
      } = this.$props;
      return e.indexOf("hover") !== -1 || t.indexOf("mouseleave") !== -1;
    },
    isFocusToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("focus") !== -1 || t.indexOf("focus") !== -1;
    },
    isBlurToHide() {
      const {
        action: e,
        hideAction: t
      } = this.$props;
      return e.indexOf("focus") !== -1 || t.indexOf("blur") !== -1;
    },
    forcePopupAlign() {
      var e;
      this.$data.sPopupVisible && ((e = this.popupRef) === null || e === void 0 || e.forceAlign());
    },
    fireEvents(e, t) {
      this.childOriginEvents[e] && this.childOriginEvents[e](t);
      const n = this.$props[e] || this.$attrs[e];
      n && n(t);
    },
    close() {
      this.setPopupVisible(!1);
    }
  },
  render() {
    const {
      $attrs: e
    } = this, t = ht(qh(this)), {
      alignPoint: n,
      getPopupContainer: o
    } = this.$props, r = t[0];
    this.childOriginEvents = Oc(r);
    const i = {
      key: "trigger"
    };
    this.isContextmenuToShow() ? i.onContextmenu = this.onContextmenu : i.onContextmenu = this.createTwoChains("onContextmenu"), this.isClickToHide() || this.isClickToShow() ? (i.onClick = this.onClick, i.onMousedown = this.onMousedown, i[Ke ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart) : (i.onClick = this.createTwoChains("onClick"), i.onMousedown = this.createTwoChains("onMousedown"), i[Ke ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart")), this.isMouseEnterToShow() ? (i.onMouseenter = this.onMouseenter, n && (i.onMousemove = this.onMouseMove)) : i.onMouseenter = this.createTwoChains("onMouseenter"), this.isMouseLeaveToHide() ? i.onMouseleave = this.onMouseleave : i.onMouseleave = this.createTwoChains("onMouseleave"), this.isFocusToShow() || this.isBlurToHide() ? (i.onFocus = this.onFocus, i.onBlur = this.onBlur) : (i.onFocus = this.createTwoChains("onFocus"), i.onBlur = (c) => {
      c && (!c.relatedTarget || !Qt(c.target, c.relatedTarget)) && this.createTwoChains("onBlur")(c);
    });
    const a = oe(r && r.props && r.props.class, e.class);
    a && (i.class = a);
    const l = tt(r, g(g({}, i), {
      ref: "triggerRef"
    }), !0, !0), s = v(Fm, {
      key: "portal",
      getContainer: o && (() => o(this.getRootDomNode())),
      didUpdate: this.handlePortalUpdate,
      visible: this.$data.sPopupVisible
    }, {
      default: this.getComponent
    });
    return v(Ie, null, [l, s]);
  }
});
var KS = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const YS = (e) => {
  const t = e === !0 ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: t,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: t,
        adjustY: 1
      }
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: t,
        adjustY: 1
      }
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: t,
        adjustY: 1
      }
    }
  };
}, QS = Z({
  name: "SelectTrigger",
  inheritAttrs: !1,
  props: {
    dropdownAlign: Object,
    visible: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    dropdownClassName: String,
    dropdownStyle: V.object,
    placement: String,
    empty: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    popupClassName: String,
    animation: String,
    transitionName: String,
    getPopupContainer: Function,
    dropdownRender: Function,
    containerWidth: Number,
    dropdownMatchSelectWidth: V.oneOfType([Number, Boolean]).def(!0),
    popupElement: V.any,
    direction: String,
    getTriggerDOMNode: Function,
    onPopupVisibleChange: Function,
    onPopupMouseEnter: Function,
    onPopupFocusin: Function,
    onPopupFocusout: Function
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      expose: r
    } = t;
    const i = T(() => {
      const {
        dropdownMatchSelectWidth: l
      } = e;
      return YS(l);
    }), a = te();
    return r({
      getPopupElement: () => a.value
    }), () => {
      const l = g(g({}, e), o), {
        empty: s = !1
      } = l, c = KS(l, ["empty"]), {
        visible: u,
        dropdownAlign: d,
        prefixCls: f,
        popupElement: p,
        dropdownClassName: h,
        dropdownStyle: m,
        direction: w = "ltr",
        placement: b,
        dropdownMatchSelectWidth: C,
        containerWidth: S,
        dropdownRender: x,
        animation: $,
        transitionName: O,
        getPopupContainer: y,
        getTriggerDOMNode: I,
        onPopupVisibleChange: E,
        onPopupMouseEnter: R,
        onPopupFocusin: _,
        onPopupFocusout: N
      } = c, F = `${f}-dropdown`;
      let j = p;
      x && (j = x({
        menuNode: p,
        props: e
      }));
      const P = $ ? `${F}-${$}` : O, M = g({
        minWidth: `${S}px`
      }, m);
      return typeof C == "number" ? M.width = `${C}px` : C && (M.width = `${S}px`), v(Dm, D(D({}, e), {}, {
        showAction: E ? ["click"] : [],
        hideAction: E ? ["click"] : [],
        popupPlacement: b || (w === "rtl" ? "bottomRight" : "bottomLeft"),
        builtinPlacements: i.value,
        prefixCls: F,
        popupTransitionName: P,
        popupAlign: d,
        popupVisible: u,
        getPopupContainer: y,
        popupClassName: oe(h, {
          [`${F}-empty`]: s
        }),
        popupStyle: M,
        getTriggerDOMNode: I,
        onPopupVisibleChange: E
      }), {
        default: n.default,
        popup: () => v("div", {
          ref: a,
          onMouseenter: R,
          onFocusin: _,
          onFocusout: N
        }, [j])
      });
    };
  }
}), J = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  /**
   * END
   */
  END: 35,
  /**
   * HOME
   */
  HOME: 36,
  /**
   * LEFT
   */
  LEFT: 37,
  /**
   * UP
   */
  UP: 38,
  /**
   * RIGHT
   */
  RIGHT: 39,
  /**
   * DOWN
   */
  DOWN: 40,
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  /**
   * DELETE
   */
  DELETE: 46,
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  /**
   * DASH
   */
  DASH: 189,
  /**
   * EQUALS
   */
  EQUALS: 187,
  /**
   * COMMA
   */
  COMMA: 188,
  /**
   * PERIOD
   */
  PERIOD: 190,
  /**
   * SLASH
   */
  SLASH: 191,
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    const {
      keyCode: n
    } = t;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    n >= J.F1 && n <= J.F12)
      return !1;
    switch (n) {
      case J.ALT:
      case J.CAPS_LOCK:
      case J.CONTEXT_MENU:
      case J.CTRL:
      case J.DOWN:
      case J.END:
      case J.ESC:
      case J.HOME:
      case J.INSERT:
      case J.LEFT:
      case J.MAC_FF_META:
      case J.META:
      case J.NUMLOCK:
      case J.NUM_CENTER:
      case J.PAGE_DOWN:
      case J.PAGE_UP:
      case J.PAUSE:
      case J.PRINT_SCREEN:
      case J.RIGHT:
      case J.SHIFT:
      case J.UP:
      case J.WIN_KEY:
      case J.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= J.ZERO && t <= J.NINE || t >= J.NUM_ZERO && t <= J.NUM_MULTIPLY || t >= J.A && t <= J.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case J.SPACE:
      case J.QUESTION_MARK:
      case J.NUM_PLUS:
      case J.NUM_MINUS:
      case J.NUM_PERIOD:
      case J.NUM_DIVISION:
      case J.SEMICOLON:
      case J.DASH:
      case J.EQUALS:
      case J.COMMA:
      case J.PERIOD:
      case J.SLASH:
      case J.APOSTROPHE:
      case J.SINGLE_QUOTE:
      case J.OPEN_SQUARE_BRACKET:
      case J.BACKSLASH:
      case J.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, On = (e, t) => {
  let {
    slots: n
  } = t;
  var o;
  const {
    class: r,
    customizeIcon: i,
    customizeIconProps: a,
    onMousedown: l,
    onClick: s
  } = e;
  let c;
  return typeof i == "function" ? c = i(a) : c = po(i) ? Jo(i) : i, v("span", {
    class: r,
    onMousedown: (u) => {
      u.preventDefault(), l && l(u);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: s,
    "aria-hidden": !0
  }, [c !== void 0 ? c : v("span", {
    class: r.split(/\s+/).map((u) => `${u}-icon`)
  }, [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)])]);
};
On.inheritAttrs = !1;
On.displayName = "TransBtn";
On.props = {
  class: String,
  customizeIcon: V.any,
  customizeIconProps: V.any,
  onMousedown: Function,
  onClick: Function
};
var ZS = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const JS = Z({
  compatConfig: {
    MODE: 3
  },
  // inheritAttrs: false,
  props: {
    disabled: V.looseBool,
    type: V.string,
    value: V.any,
    tag: {
      type: String,
      default: "input"
    },
    size: V.string,
    onChange: Function,
    onInput: Function,
    onBlur: Function,
    onFocus: Function,
    onKeydown: Function,
    onCompositionstart: Function,
    onCompositionend: Function,
    onKeyup: Function,
    onPaste: Function,
    onMousedown: Function
  },
  emits: ["change", "input", "blur", "keydown", "focus", "compositionstart", "compositionend", "keyup", "paste", "mousedown"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    const o = k(null);
    return n({
      focus: () => {
        o.value && o.value.focus();
      },
      blur: () => {
        o.value && o.value.blur();
      },
      input: o,
      setSelectionRange: (s, c, u) => {
        var d;
        (d = o.value) === null || d === void 0 || d.setSelectionRange(s, c, u);
      },
      select: () => {
        var s;
        (s = o.value) === null || s === void 0 || s.select();
      },
      getSelectionStart: () => {
        var s;
        return (s = o.value) === null || s === void 0 ? void 0 : s.selectionStart;
      },
      getSelectionEnd: () => {
        var s;
        return (s = o.value) === null || s === void 0 ? void 0 : s.selectionEnd;
      },
      getScrollTop: () => {
        var s;
        return (s = o.value) === null || s === void 0 ? void 0 : s.scrollTop;
      }
    }), () => {
      const {
        tag: s,
        value: c
      } = e, u = ZS(e, ["tag", "value"]);
      return v(s, D(D({}, u), {}, {
        ref: o,
        value: c
      }), null);
    };
  }
});
function ex(e) {
  return Object.keys(e).reduce((t, n) => {
    const o = e[n];
    return typeof o > "u" || o === null || (t += `${n}: ${e[n]};`), t;
  }, "");
}
var tx = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const ns = Z({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: {
    disabled: V.looseBool,
    type: V.string,
    value: V.any,
    lazy: V.bool.def(!0),
    tag: {
      type: String,
      default: "input"
    },
    size: V.string,
    style: V.oneOfType([String, Object]),
    class: V.string
  },
  emits: ["change", "input", "blur", "keydown", "focus", "compositionstart", "compositionend", "keyup", "paste", "mousedown"],
  setup(e, t) {
    let {
      emit: n,
      attrs: o,
      expose: r
    } = t;
    const i = k(null), a = te(), l = te(!1);
    ae([() => e.value, l], () => {
      l.value || (a.value = e.value);
    }, {
      immediate: !0
    });
    const s = (y) => {
      n("change", y);
    }, c = (y) => {
      l.value = !0, y.target.composing = !0, n("compositionstart", y);
    }, u = (y) => {
      l.value = !1, y.target.composing = !1, n("compositionend", y);
      const I = document.createEvent("HTMLEvents");
      I.initEvent("input", !0, !0), y.target.dispatchEvent(I), s(y);
    }, d = (y) => {
      if (l.value && e.lazy) {
        a.value = y.target.value;
        return;
      }
      n("input", y);
    }, f = (y) => {
      n("blur", y);
    }, p = (y) => {
      n("focus", y);
    }, h = () => {
      i.value && i.value.focus();
    }, m = () => {
      i.value && i.value.blur();
    }, w = (y) => {
      n("keydown", y);
    }, b = (y) => {
      n("keyup", y);
    }, C = (y, I, E) => {
      var R;
      (R = i.value) === null || R === void 0 || R.setSelectionRange(y, I, E);
    }, S = () => {
      var y;
      (y = i.value) === null || y === void 0 || y.select();
    };
    r({
      focus: h,
      blur: m,
      input: T(() => {
        var y;
        return (y = i.value) === null || y === void 0 ? void 0 : y.input;
      }),
      setSelectionRange: C,
      select: S,
      getSelectionStart: () => {
        var y;
        return (y = i.value) === null || y === void 0 ? void 0 : y.getSelectionStart();
      },
      getSelectionEnd: () => {
        var y;
        return (y = i.value) === null || y === void 0 ? void 0 : y.getSelectionEnd();
      },
      getScrollTop: () => {
        var y;
        return (y = i.value) === null || y === void 0 ? void 0 : y.getScrollTop();
      }
    });
    const x = (y) => {
      n("mousedown", y);
    }, $ = (y) => {
      n("paste", y);
    }, O = T(() => e.style && typeof e.style != "string" ? ex(e.style) : e.style);
    return () => {
      const y = tx(e, ["style", "lazy"]);
      return v(JS, D(D(D({}, y), o), {}, {
        style: O.value,
        onInput: d,
        onChange: s,
        onBlur: f,
        onFocus: p,
        ref: i,
        value: a.value,
        onCompositionstart: c,
        onCompositionend: u,
        onKeyup: b,
        onKeydown: w,
        onPaste: $,
        onMousedown: x
      }), null);
    };
  }
}), nx = {
  inputRef: V.any,
  prefixCls: String,
  id: String,
  inputElement: V.VueNode,
  disabled: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  editable: {
    type: Boolean,
    default: void 0
  },
  activeDescendantId: String,
  value: String,
  open: {
    type: Boolean,
    default: void 0
  },
  tabindex: V.oneOfType([V.number, V.string]),
  /** Pass accessibility props to input */
  attrs: V.object,
  onKeydown: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onPaste: {
    type: Function
  },
  onCompositionstart: {
    type: Function
  },
  onCompositionend: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  }
}, Nm = Z({
  compatConfig: {
    MODE: 3
  },
  name: "SelectInput",
  inheritAttrs: !1,
  props: nx,
  setup(e) {
    let t = null;
    const n = Ee("VCSelectContainerEvent");
    return () => {
      var o;
      const {
        prefixCls: r,
        id: i,
        inputElement: a,
        disabled: l,
        tabindex: s,
        autofocus: c,
        autocomplete: u,
        editable: d,
        activeDescendantId: f,
        value: p,
        onKeydown: h,
        onMousedown: m,
        onChange: w,
        onPaste: b,
        onCompositionstart: C,
        onCompositionend: S,
        onFocus: x,
        onBlur: $,
        open: O,
        inputRef: y,
        attrs: I
      } = e;
      let E = a || v(ns, null, null);
      const R = E.props || {}, {
        onKeydown: _,
        onInput: N,
        onFocus: F,
        onBlur: j,
        onMousedown: P,
        onCompositionstart: M,
        onCompositionend: L,
        style: H
      } = R;
      return E = tt(E, g(g(g(g(g({
        type: "search"
      }, R), {
        id: i,
        ref: y,
        disabled: l,
        tabindex: s,
        lazy: !1,
        autocomplete: u || "off",
        autofocus: c,
        class: oe(`${r}-selection-search-input`, (o = E == null ? void 0 : E.props) === null || o === void 0 ? void 0 : o.class),
        role: "combobox",
        "aria-expanded": O,
        "aria-haspopup": "listbox",
        "aria-owns": `${i}_list`,
        "aria-autocomplete": "list",
        "aria-controls": `${i}_list`,
        "aria-activedescendant": f
      }), I), {
        value: d ? p : "",
        readonly: !d,
        unselectable: d ? null : "on",
        style: g(g({}, H), {
          opacity: d ? null : 0
        }),
        onKeydown: (A) => {
          h(A), _ && _(A);
        },
        onMousedown: (A) => {
          m(A), P && P(A);
        },
        onInput: (A) => {
          w(A), N && N(A);
        },
        onCompositionstart(A) {
          C(A), M && M(A);
        },
        onCompositionend(A) {
          S(A), L && L(A);
        },
        onPaste: b,
        onFocus: function() {
          clearTimeout(t), F && F(arguments.length <= 0 ? void 0 : arguments[0]), x && x(arguments.length <= 0 ? void 0 : arguments[0]), n == null || n.focus(arguments.length <= 0 ? void 0 : arguments[0]);
        },
        onBlur: function() {
          for (var A = arguments.length, z = new Array(A), q = 0; q < A; q++)
            z[q] = arguments[q];
          t = setTimeout(() => {
            j && j(z[0]), $ && $(z[0]), n == null || n.blur(z[0]);
          }, 100);
        }
      }), E.type === "textarea" ? {} : {
        type: "search"
      }), !0, !0), E;
    };
  }
}), ox = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`, rx = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`, Nu = `${ox} ${rx}`.split(/[\s\n]+/), ix = "aria-", ax = "data-";
function Lu(e, t) {
  return e.indexOf(t) === 0;
}
function nr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = g({}, t);
  const o = {};
  return Object.keys(e).forEach((r) => {
    // Aria
    (n.aria && (r === "role" || Lu(r, ix)) || // Data
    n.data && Lu(r, ax) || // Attr
    n.attr && (Nu.includes(r) || Nu.includes(r.toLowerCase()))) && (o[r] = e[r]);
  }), o;
}
const Lm = Symbol("OverflowContextProviderKey"), rl = Z({
  compatConfig: {
    MODE: 3
  },
  name: "OverflowContextProvider",
  inheritAttrs: !1,
  props: {
    value: {
      type: Object
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return _e(Lm, T(() => e.value)), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
}), lx = () => Ee(Lm, T(() => null));
var sx = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Nn = void 0, Dr = Z({
  compatConfig: {
    MODE: 3
  },
  name: "Item",
  props: {
    prefixCls: String,
    item: V.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: {
      type: [String, Number]
    },
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: V.any,
    invalidate: Boolean
  },
  setup(e, t) {
    let {
      slots: n,
      expose: o
    } = t;
    const r = T(() => e.responsive && !e.display), i = te();
    o({
      itemNodeRef: i
    });
    function a(l) {
      e.registerSize(e.itemKey, l);
    }
    return Zo(() => {
      a(null);
    }), () => {
      var l;
      const {
        prefixCls: s,
        invalidate: c,
        item: u,
        renderItem: d,
        responsive: f,
        registerSize: p,
        itemKey: h,
        display: m,
        order: w,
        component: b = "div"
      } = e, C = sx(e, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"]), S = (l = n.default) === null || l === void 0 ? void 0 : l.call(n), x = d && u !== Nn ? d(u) : S;
      let $;
      c || ($ = {
        opacity: r.value ? 0 : 1,
        height: r.value ? 0 : Nn,
        overflowY: r.value ? "hidden" : Nn,
        order: f ? w : Nn,
        pointerEvents: r.value ? "none" : Nn,
        position: r.value ? "absolute" : Nn
      });
      const O = {};
      return r.value && (O["aria-hidden"] = !0), v(si, {
        disabled: !f,
        onResize: (y) => {
          let {
            offsetWidth: I
          } = y;
          a(I);
        }
      }, {
        default: () => v(b, D(D(D({
          class: oe(!c && s),
          style: $
        }, O), C), {}, {
          ref: i
        }), {
          default: () => [x]
        })
      });
    };
  }
});
var da = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const cx = Z({
  compatConfig: {
    MODE: 3
  },
  name: "RawItem",
  inheritAttrs: !1,
  props: {
    component: V.any,
    title: V.any,
    id: String,
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    role: String,
    tabindex: Number
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const r = lx();
    return () => {
      var i;
      if (!r.value) {
        const {
          component: d = "div"
        } = e, f = da(e, ["component"]);
        return v(d, D(D({}, f), o), {
          default: () => [(i = n.default) === null || i === void 0 ? void 0 : i.call(n)]
        });
      }
      const a = r.value, {
        className: l
      } = a, s = da(a, ["className"]), {
        class: c
      } = o, u = da(o, ["class"]);
      return v(rl, {
        value: null
      }, {
        default: () => [v(Dr, D(D(D({
          class: oe(l, c)
        }, s), u), e), n)]
      });
    };
  }
});
var ux = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const jm = "responsive", Hm = "invalidate";
function dx(e) {
  return `+ ${e.length} ...`;
}
const fx = () => ({
  id: String,
  prefixCls: String,
  data: Array,
  itemKey: [String, Number, Function],
  /** Used for `responsive`. It will limit render node to avoid perf issue */
  itemWidth: {
    type: Number,
    default: 10
  },
  renderItem: Function,
  /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
  renderRawItem: Function,
  maxCount: [Number, String],
  renderRest: Function,
  /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
  renderRawRest: Function,
  suffix: V.any,
  component: String,
  itemComponent: V.any,
  /** @private This API may be refactor since not well design */
  onVisibleChange: Function,
  /** When set to `full`, ssr will render full items by default and remove at client side */
  ssr: String,
  onMousedown: Function,
  role: String
}), $i = Z({
  name: "Overflow",
  inheritAttrs: !1,
  props: fx(),
  emits: ["visibleChange"],
  setup(e, t) {
    let {
      attrs: n,
      emit: o,
      slots: r
    } = t;
    const i = T(() => e.ssr === "full"), a = k(null), l = T(() => a.value || 0), s = k(/* @__PURE__ */ new Map()), c = k(0), u = k(0), d = k(0), f = k(null), p = k(null), h = T(() => p.value === null && i.value ? Number.MAX_SAFE_INTEGER : p.value || 0), m = k(!1), w = T(() => `${e.prefixCls}-item`), b = T(() => Math.max(c.value, u.value)), C = T(() => !!(e.data.length && e.maxCount === jm)), S = T(() => e.maxCount === Hm), x = T(() => C.value || typeof e.maxCount == "number" && e.data.length > e.maxCount), $ = T(() => {
      let P = e.data;
      return C.value ? a.value === null && i.value ? P = e.data : P = e.data.slice(0, Math.min(e.data.length, l.value / e.itemWidth)) : typeof e.maxCount == "number" && (P = e.data.slice(0, e.maxCount)), P;
    }), O = T(() => C.value ? e.data.slice(h.value + 1) : e.data.slice($.value.length)), y = (P, M) => {
      var L;
      return typeof e.itemKey == "function" ? e.itemKey(P) : (L = e.itemKey && (P == null ? void 0 : P[e.itemKey])) !== null && L !== void 0 ? L : M;
    }, I = T(() => e.renderItem || ((P) => P)), E = (P, M) => {
      p.value = P, M || (m.value = P < e.data.length - 1, o("visibleChange", P));
    }, R = (P, M) => {
      a.value = M.clientWidth;
    }, _ = (P, M) => {
      const L = new Map(s.value);
      M === null ? L.delete(P) : L.set(P, M), s.value = L;
    }, N = (P, M) => {
      c.value = u.value, u.value = M;
    }, F = (P, M) => {
      d.value = M;
    }, j = (P) => s.value.get(y($.value[P], P));
    return ae([l, s, u, d, () => e.itemKey, $], () => {
      if (l.value && b.value && $.value) {
        let P = d.value;
        const M = $.value.length, L = M - 1;
        if (!M) {
          E(0), f.value = null;
          return;
        }
        for (let H = 0; H < M; H += 1) {
          const A = j(H);
          if (A === void 0) {
            E(H - 1, !0);
            break;
          }
          if (P += A, // Only one means `totalWidth` is the final width
          L === 0 && P <= l.value || // Last two width will be the final width
          H === L - 1 && P + j(L) <= l.value) {
            E(L), f.value = null;
            break;
          } else if (P + b.value > l.value) {
            E(H - 1), f.value = P - A - d.value + u.value;
            break;
          }
        }
        e.suffix && j(0) + d.value > l.value && (f.value = null);
      }
    }), () => {
      const P = m.value && !!O.value.length, {
        itemComponent: M,
        renderRawItem: L,
        renderRawRest: H,
        renderRest: A,
        prefixCls: z = "rc-overflow",
        suffix: q,
        component: Y = "div",
        id: K,
        onMousedown: W
      } = e, {
        class: G,
        style: ee
      } = n, re = ux(n, ["class", "style"]);
      let ie = {};
      f.value !== null && C.value && (ie = {
        position: "absolute",
        left: `${f.value}px`,
        top: 0
      });
      const X = {
        prefixCls: w.value,
        responsive: C.value,
        component: M,
        invalidate: S.value
      }, B = L ? (le, ve) => {
        const he = y(le, ve);
        return v(rl, {
          key: he,
          value: g(g({}, X), {
            order: ve,
            item: le,
            itemKey: he,
            registerSize: _,
            display: ve <= h.value
          })
        }, {
          default: () => [L(le, ve)]
        });
      } : (le, ve) => {
        const he = y(le, ve);
        return v(Dr, D(D({}, X), {}, {
          order: ve,
          key: he,
          item: le,
          renderItem: I.value,
          itemKey: he,
          registerSize: _,
          display: ve <= h.value
        }), null);
      };
      let U = () => null;
      const ne = {
        order: P ? h.value : Number.MAX_SAFE_INTEGER,
        className: `${w.value} ${w.value}-rest`,
        registerSize: N,
        display: P
      };
      if (H)
        H && (U = () => v(rl, {
          value: g(g({}, X), ne)
        }, {
          default: () => [H(O.value)]
        }));
      else {
        const le = A || dx;
        U = () => v(Dr, D(D({}, X), ne), {
          default: () => typeof le == "function" ? le(O.value) : le
        });
      }
      const Q = () => {
        var le;
        return v(Y, D({
          id: K,
          class: oe(!S.value && z, G),
          style: ee,
          onMousedown: W,
          role: e.role
        }, re), {
          default: () => [$.value.map(B), x.value ? U() : null, q && v(Dr, D(D({}, X), {}, {
            order: h.value,
            class: `${w.value}-suffix`,
            registerSize: F,
            display: !0,
            style: ie
          }), {
            default: () => q
          }), (le = r.default) === null || le === void 0 ? void 0 : le.call(r)]
        });
      };
      return v(si, {
        disabled: !C.value,
        onResize: R
      }, {
        default: Q
      });
    };
  }
});
$i.Item = cx;
$i.RESPONSIVE = jm;
$i.INVALIDATE = Hm;
const px = Symbol("TreeSelectLegacyContextPropsKey");
function os() {
  return Ee(px, {});
}
const mx = {
  id: String,
  prefixCls: String,
  values: V.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: V.any,
  placeholder: V.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: V.oneOfType([V.number, V.string]),
  compositionStatus: Boolean,
  removeIcon: V.any,
  choiceTransitionName: String,
  maxTagCount: V.oneOfType([V.number, V.string]),
  maxTagTextLength: Number,
  maxTagPlaceholder: V.any.def(() => (e) => `+ ${e.length} ...`),
  tagRender: Function,
  onToggleOpen: {
    type: Function
  },
  onRemove: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
}, ju = (e) => {
  e.preventDefault(), e.stopPropagation();
}, gx = Z({
  name: "MultipleSelectSelector",
  inheritAttrs: !1,
  props: mx,
  setup(e) {
    const t = k(), n = k(0), o = k(!1), r = os(), i = T(() => `${e.prefixCls}-selection`), a = T(() => e.open || e.mode === "tags" ? e.searchValue : ""), l = T(() => e.mode === "tags" || e.showSearch && (e.open || o.value)), s = te("");
    Pe(() => {
      s.value = a.value;
    }), be(() => {
      ae(s, () => {
        n.value = t.value.scrollWidth;
      }, {
        flush: "post",
        immediate: !0
      });
    });
    function c(h, m, w, b, C) {
      return v("span", {
        class: oe(`${i.value}-item`, {
          [`${i.value}-item-disabled`]: w
        }),
        title: typeof h == "string" || typeof h == "number" ? h.toString() : void 0
      }, [v("span", {
        class: `${i.value}-item-content`
      }, [m]), b && v(On, {
        class: `${i.value}-item-remove`,
        onMousedown: ju,
        onClick: C,
        customizeIcon: e.removeIcon
      }, {
        default: () => [Me("×")]
      })]);
    }
    function u(h, m, w, b, C, S) {
      var x;
      const $ = (y) => {
        ju(y), e.onToggleOpen(!open);
      };
      let O = S;
      return r.keyEntities && (O = ((x = r.keyEntities[h]) === null || x === void 0 ? void 0 : x.node) || {}), v("span", {
        key: h,
        onMousedown: $
      }, [e.tagRender({
        label: m,
        value: h,
        disabled: w,
        closable: b,
        onClose: C,
        option: O
      })]);
    }
    function d(h) {
      const {
        disabled: m,
        label: w,
        value: b,
        option: C
      } = h, S = !e.disabled && !m;
      let x = w;
      if (typeof e.maxTagTextLength == "number" && (typeof w == "string" || typeof w == "number")) {
        const O = String(x);
        O.length > e.maxTagTextLength && (x = `${O.slice(0, e.maxTagTextLength)}...`);
      }
      const $ = (O) => {
        var y;
        O && O.stopPropagation(), (y = e.onRemove) === null || y === void 0 || y.call(e, h);
      };
      return typeof e.tagRender == "function" ? u(b, x, m, S, $, C) : c(w, x, m, S, $);
    }
    function f(h) {
      const {
        maxTagPlaceholder: m = (b) => `+ ${b.length} ...`
      } = e, w = typeof m == "function" ? m(h) : m;
      return c(w, w, !1);
    }
    const p = (h) => {
      const m = h.target.composing;
      s.value = h.target.value, m || e.onInputChange(h);
    };
    return () => {
      const {
        id: h,
        prefixCls: m,
        values: w,
        open: b,
        inputRef: C,
        placeholder: S,
        disabled: x,
        autofocus: $,
        autocomplete: O,
        activeDescendantId: y,
        tabindex: I,
        compositionStatus: E,
        onInputPaste: R,
        onInputKeyDown: _,
        onInputMouseDown: N,
        onInputCompositionStart: F,
        onInputCompositionEnd: j
      } = e, P = v("div", {
        class: `${i.value}-search`,
        style: {
          width: n.value + "px"
        },
        key: "input"
      }, [v(Nm, {
        inputRef: C,
        open: b,
        prefixCls: m,
        id: h,
        inputElement: null,
        disabled: x,
        autofocus: $,
        autocomplete: O,
        editable: l.value,
        activeDescendantId: y,
        value: s.value,
        onKeydown: _,
        onMousedown: N,
        onChange: p,
        onPaste: R,
        onCompositionstart: F,
        onCompositionend: j,
        tabindex: I,
        attrs: nr(e, !0),
        onFocus: () => o.value = !0,
        onBlur: () => o.value = !1
      }, null), v("span", {
        ref: t,
        class: `${i.value}-search-mirror`,
        "aria-hidden": !0
      }, [s.value, Me(" ")])]), M = v($i, {
        prefixCls: `${i.value}-overflow`,
        data: w,
        renderItem: d,
        renderRest: f,
        suffix: P,
        itemKey: "key",
        maxCount: e.maxTagCount,
        key: "overflow"
      }, null);
      return v(Ie, null, [M, !w.length && !a.value && !E && v("span", {
        class: `${i.value}-placeholder`
      }, [S])]);
    };
  }
}), vx = {
  inputElement: V.any,
  id: String,
  prefixCls: String,
  values: V.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: V.any,
  placeholder: V.any,
  compositionStatus: {
    type: Boolean,
    default: void 0
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: V.oneOfType([V.number, V.string]),
  activeValue: String,
  backfill: {
    type: Boolean,
    default: void 0
  },
  optionLabelRender: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
}, rs = Z({
  name: "SingleSelector",
  setup(e) {
    const t = k(!1), n = T(() => e.mode === "combobox"), o = T(() => n.value || e.showSearch), r = T(() => {
      let u = e.searchValue || "";
      return n.value && e.activeValue && !t.value && (u = e.activeValue), u;
    }), i = os();
    ae([n, () => e.activeValue], () => {
      n.value && (t.value = !1);
    }, {
      immediate: !0
    });
    const a = T(() => e.mode !== "combobox" && !e.open && !e.showSearch ? !1 : !!r.value || e.compositionStatus), l = T(() => {
      const u = e.values[0];
      return u && (typeof u.label == "string" || typeof u.label == "number") ? u.label.toString() : void 0;
    }), s = () => {
      if (e.values[0])
        return null;
      const u = a.value ? {
        visibility: "hidden"
      } : void 0;
      return v("span", {
        class: `${e.prefixCls}-selection-placeholder`,
        style: u
      }, [e.placeholder]);
    }, c = (u) => {
      u.target.composing || (t.value = !0, e.onInputChange(u));
    };
    return () => {
      var u, d, f, p;
      const {
        inputElement: h,
        prefixCls: m,
        id: w,
        values: b,
        inputRef: C,
        disabled: S,
        autofocus: x,
        autocomplete: $,
        activeDescendantId: O,
        open: y,
        tabindex: I,
        optionLabelRender: E,
        onInputKeyDown: R,
        onInputMouseDown: _,
        onInputPaste: N,
        onInputCompositionStart: F,
        onInputCompositionEnd: j
      } = e, P = b[0];
      let M = null;
      if (P && i.customSlots) {
        const L = (u = P.key) !== null && u !== void 0 ? u : P.value, H = ((d = i.keyEntities[L]) === null || d === void 0 ? void 0 : d.node) || {};
        M = i.customSlots[(f = H.slots) === null || f === void 0 ? void 0 : f.title] || i.customSlots.title || P.label, typeof M == "function" && (M = M(H));
      } else
        M = E && P ? E(P.option) : P == null ? void 0 : P.label;
      return v(Ie, null, [v("span", {
        class: `${m}-selection-search`
      }, [v(Nm, {
        inputRef: C,
        prefixCls: m,
        id: w,
        open: y,
        inputElement: h,
        disabled: S,
        autofocus: x,
        autocomplete: $,
        editable: o.value,
        activeDescendantId: O,
        value: r.value,
        onKeydown: R,
        onMousedown: _,
        onChange: c,
        onPaste: N,
        onCompositionstart: F,
        onCompositionend: j,
        tabindex: I,
        attrs: nr(e, !0)
      }, null)]), !n.value && P && !a.value && v("span", {
        class: `${m}-selection-item`,
        title: l.value
      }, [v(Ie, {
        key: (p = P.key) !== null && p !== void 0 ? p : P.value
      }, [M])]), s()]);
    };
  }
});
rs.props = vx;
rs.inheritAttrs = !1;
function hx(e) {
  return ![
    // System function button
    J.ESC,
    J.SHIFT,
    J.BACKSPACE,
    J.TAB,
    J.WIN_KEY,
    J.ALT,
    J.META,
    J.WIN_KEY_RIGHT,
    J.CTRL,
    J.SEMICOLON,
    J.EQUALS,
    J.CAPS_LOCK,
    J.CONTEXT_MENU,
    // F1-F12
    J.F1,
    J.F2,
    J.F3,
    J.F4,
    J.F5,
    J.F6,
    J.F7,
    J.F8,
    J.F9,
    J.F10,
    J.F11,
    J.F12
  ].includes(e);
}
function Bm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = null, n;
  Ae(() => {
    clearTimeout(n);
  });
  function o(r) {
    (r || t === null) && (t = r), clearTimeout(n), n = setTimeout(() => {
      t = null;
    }, e);
  }
  return [() => t, o];
}
function Yo() {
  const e = (t) => {
    e.current = t;
  };
  return e;
}
const yx = Z({
  name: "Selector",
  inheritAttrs: !1,
  props: {
    id: String,
    prefixCls: String,
    showSearch: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    /** Display in the Selector value, it's not same as `value` prop */
    values: V.array,
    multiple: {
      type: Boolean,
      default: void 0
    },
    mode: String,
    searchValue: String,
    activeValue: String,
    inputElement: V.any,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    activeDescendantId: String,
    tabindex: V.oneOfType([V.number, V.string]),
    disabled: {
      type: Boolean,
      default: void 0
    },
    placeholder: V.any,
    removeIcon: V.any,
    // Tags
    maxTagCount: V.oneOfType([V.number, V.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: V.any,
    tagRender: Function,
    optionLabelRender: Function,
    /** Check if `tokenSeparators` contains `\n` or `\r\n` */
    tokenWithEnter: {
      type: Boolean,
      default: void 0
    },
    // Motion
    choiceTransitionName: String,
    onToggleOpen: {
      type: Function
    },
    /** `onSearch` returns go next step boolean to check if need do toggle open */
    onSearch: Function,
    onSearchSubmit: Function,
    onRemove: Function,
    onInputKeyDown: {
      type: Function
    },
    /**
     * @private get real dom for trigger align.
     * This may be removed after React provides replacement of `findDOMNode`
     */
    domRef: Function
  },
  setup(e, t) {
    let {
      expose: n
    } = t;
    const o = Yo(), r = te(!1), [i, a] = Bm(0), l = (b) => {
      const {
        which: C
      } = b;
      (C === J.UP || C === J.DOWN) && b.preventDefault(), e.onInputKeyDown && e.onInputKeyDown(b), C === J.ENTER && e.mode === "tags" && !r.value && !e.open && e.onSearchSubmit(b.target.value), hx(C) && e.onToggleOpen(!0);
    }, s = () => {
      a(!0);
    };
    let c = null;
    const u = (b) => {
      e.onSearch(b, !0, r.value) !== !1 && e.onToggleOpen(!0);
    }, d = () => {
      r.value = !0;
    }, f = (b) => {
      r.value = !1, e.mode !== "combobox" && u(b.target.value);
    }, p = (b) => {
      let {
        target: {
          value: C
        }
      } = b;
      if (e.tokenWithEnter && c && /[\r\n]/.test(c)) {
        const S = c.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
        C = C.replace(S, c);
      }
      c = null, u(C);
    }, h = (b) => {
      const {
        clipboardData: C
      } = b;
      c = C.getData("text");
    }, m = (b) => {
      let {
        target: C
      } = b;
      C !== o.current && (document.body.style.msTouchAction !== void 0 ? setTimeout(() => {
        o.current.focus();
      }) : o.current.focus());
    }, w = (b) => {
      const C = i();
      b.target !== o.current && !C && b.preventDefault(), (e.mode !== "combobox" && (!e.showSearch || !C) || !e.open) && (e.open && e.onSearch("", !0, !1), e.onToggleOpen());
    };
    return n({
      focus: () => {
        o.current.focus();
      },
      blur: () => {
        o.current.blur();
      }
    }), () => {
      const {
        prefixCls: b,
        domRef: C,
        mode: S
      } = e, x = {
        inputRef: o,
        onInputKeyDown: l,
        onInputMouseDown: s,
        onInputChange: p,
        onInputPaste: h,
        compositionStatus: r.value,
        onInputCompositionStart: d,
        onInputCompositionEnd: f
      }, $ = S === "multiple" || S === "tags" ? v(gx, D(D({}, e), x), null) : v(rs, D(D({}, e), x), null);
      return v("div", {
        ref: C,
        class: `${b}-selector`,
        onClick: m,
        onMousedown: w
      }, [$]);
    };
  }
});
function bx(e, t, n) {
  function o(r) {
    var i, a, l;
    let s = r.target;
    s.shadowRoot && r.composed && (s = r.composedPath()[0] || s);
    const c = [(i = e[0]) === null || i === void 0 ? void 0 : i.value, (l = (a = e[1]) === null || a === void 0 ? void 0 : a.value) === null || l === void 0 ? void 0 : l.getPopupElement()];
    t.value && c.every((u) => u && !u.contains(s) && u !== s) && n(!1);
  }
  be(() => {
    window.addEventListener("mousedown", o);
  }), Ae(() => {
    window.removeEventListener("mousedown", o);
  });
}
function wx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  const t = k(!1);
  let n;
  const o = () => {
    clearTimeout(n);
  };
  return be(() => {
    o();
  }), [t, (i, a) => {
    o(), n = setTimeout(() => {
      t.value = i, a && a();
    }, e);
  }, o];
}
const zm = Symbol("BaseSelectContextKey");
function Sx(e) {
  return _e(zm, e);
}
function xx() {
  return Ee(zm, {});
}
const Cx = () => {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  const e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substring(0, 4));
};
function Vm(e) {
  if (!Qf(e)) return Le(e);
  const t = new Proxy({}, {
    get(n, o, r) {
      return Reflect.get(e.value, o, r);
    },
    set(n, o, r) {
      return e.value[o] = r, !0;
    },
    deleteProperty(n, o) {
      return Reflect.deleteProperty(e.value, o);
    },
    has(n, o) {
      return Reflect.has(e.value, o);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return Le(t);
}
var $x = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Ox = ["value", "onChange", "removeIcon", "placeholder", "autofocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabindex", "OptionList", "notFoundContent"], Px = () => ({
  prefixCls: String,
  id: String,
  omitDomProps: Array,
  // >>> Value
  displayValues: Array,
  onDisplayValuesChange: Function,
  // >>> Active
  /** Current dropdown list active item string value */
  activeValue: String,
  /** Link search input with target element */
  activeDescendantId: String,
  onActiveValueChange: Function,
  // >>> Search
  searchValue: String,
  /** Trigger onSearch, return false to prevent trigger open event */
  onSearch: Function,
  /** Trigger when search text match the `tokenSeparators`. Will provide split content */
  onSearchSplit: Function,
  maxLength: Number,
  OptionList: V.any,
  /** Tell if provided `options` is empty */
  emptyOptions: Boolean
}), Wm = () => ({
  showSearch: {
    type: Boolean,
    default: void 0
  },
  tagRender: {
    type: Function
  },
  optionLabelRender: {
    type: Function
  },
  direction: {
    type: String
  },
  // MISC
  tabindex: Number,
  autofocus: Boolean,
  notFoundContent: V.any,
  placeholder: V.any,
  onClear: Function,
  choiceTransitionName: String,
  // >>> Mode
  mode: String,
  // >>> Status
  disabled: {
    type: Boolean,
    default: void 0
  },
  loading: {
    type: Boolean,
    default: void 0
  },
  // >>> Open
  open: {
    type: Boolean,
    default: void 0
  },
  defaultOpen: {
    type: Boolean,
    default: void 0
  },
  onDropdownVisibleChange: {
    type: Function
  },
  // >>> Customize Input
  /** @private Internal usage. Do not use in your production. */
  getInputElement: {
    type: Function
  },
  /** @private Internal usage. Do not use in your production. */
  getRawInputElement: {
    type: Function
  },
  // >>> Selector
  maxTagTextLength: Number,
  maxTagCount: {
    type: [String, Number]
  },
  maxTagPlaceholder: V.any,
  // >>> Search
  tokenSeparators: {
    type: Array
  },
  // >>> Icons
  allowClear: {
    type: Boolean,
    default: void 0
  },
  showArrow: {
    type: Boolean,
    default: void 0
  },
  inputIcon: V.any,
  /** Clear all icon */
  clearIcon: V.any,
  /** Selector remove icon */
  removeIcon: V.any,
  // >>> Dropdown
  animation: String,
  transitionName: String,
  dropdownStyle: {
    type: Object
  },
  dropdownClassName: String,
  dropdownMatchSelectWidth: {
    type: [Boolean, Number],
    default: void 0
  },
  dropdownRender: {
    type: Function
  },
  dropdownAlign: Object,
  placement: {
    type: String
  },
  getPopupContainer: {
    type: Function
  },
  // >>> Focus
  showAction: {
    type: Array
  },
  onBlur: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  // >>> Rest Events
  onKeyup: Function,
  onKeydown: Function,
  onMousedown: Function,
  onPopupScroll: Function,
  onInputKeyDown: Function,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function
}), Ix = () => g(g({}, Px()), Wm());
function is(e) {
  return e === "tags" || e === "multiple";
}
const Tx = Z({
  compatConfig: {
    MODE: 3
  },
  name: "BaseSelect",
  inheritAttrs: !1,
  props: Be(Ix(), {
    showAction: [],
    notFoundContent: "Not Found"
  }),
  setup(e, t) {
    let {
      attrs: n,
      expose: o,
      slots: r
    } = t;
    const i = T(() => is(e.mode)), a = T(() => e.showSearch !== void 0 ? e.showSearch : i.value || e.mode === "combobox"), l = k(!1);
    be(() => {
      l.value = Cx();
    });
    const s = os(), c = k(null), u = Yo(), d = k(null), f = k(null), p = k(null), h = te(!1), [m, w, b] = wx();
    o({
      focus: () => {
        var B;
        (B = f.value) === null || B === void 0 || B.focus();
      },
      blur: () => {
        var B;
        (B = f.value) === null || B === void 0 || B.blur();
      },
      scrollTo: (B) => {
        var U;
        return (U = p.value) === null || U === void 0 ? void 0 : U.scrollTo(B);
      }
    });
    const x = T(() => {
      var B;
      if (e.mode !== "combobox")
        return e.searchValue;
      const U = (B = e.displayValues[0]) === null || B === void 0 ? void 0 : B.value;
      return typeof U == "string" || typeof U == "number" ? String(U) : "";
    }), $ = e.open !== void 0 ? e.open : e.defaultOpen, O = k($), y = k($), I = (B) => {
      O.value = e.open !== void 0 ? e.open : B, y.value = O.value;
    };
    ae(() => e.open, () => {
      I(e.open);
    });
    const E = T(() => !e.notFoundContent && e.emptyOptions);
    Pe(() => {
      y.value = O.value, (e.disabled || E.value && y.value && e.mode === "combobox") && (y.value = !1);
    });
    const R = T(() => E.value ? !1 : y.value), _ = (B) => {
      const U = B !== void 0 ? B : !y.value;
      y.value !== U && !e.disabled && (I(U), e.onDropdownVisibleChange && e.onDropdownVisibleChange(U), !U && Y.value && (Y.value = !1, w(!1, () => {
        z.value = !1, h.value = !1;
      })));
    }, N = T(() => (e.tokenSeparators || []).some((B) => [`
`, `\r
`].includes(B))), F = (B, U, ne) => {
      var Q, le;
      let ve = !0, he = B;
      (Q = e.onActiveValueChange) === null || Q === void 0 || Q.call(e, null);
      const De = ne ? null : wb(B, e.tokenSeparators);
      return e.mode !== "combobox" && De && (he = "", (le = e.onSearchSplit) === null || le === void 0 || le.call(e, De), _(!1), ve = !1), e.onSearch && x.value !== he && e.onSearch(he, {
        source: U ? "typing" : "effect"
      }), ve;
    }, j = (B) => {
      var U;
      !B || !B.trim() || (U = e.onSearch) === null || U === void 0 || U.call(e, B, {
        source: "submit"
      });
    };
    ae(y, () => {
      !y.value && !i.value && e.mode !== "combobox" && F("", !1, !1);
    }, {
      immediate: !0,
      flush: "post"
    }), ae(() => e.disabled, () => {
      O.value && e.disabled && I(!1), e.disabled && !h.value && w(!1);
    }, {
      immediate: !0
    });
    const [P, M] = Bm(), L = function(B) {
      var U;
      const ne = P(), {
        which: Q
      } = B;
      if (Q === J.ENTER && (e.mode !== "combobox" && B.preventDefault(), y.value || _(!0)), M(!!x.value), Q === J.BACKSPACE && !ne && i.value && !x.value && e.displayValues.length) {
        const De = [...e.displayValues];
        let ye = null;
        for (let ke = De.length - 1; ke >= 0; ke -= 1) {
          const qe = De[ke];
          if (!qe.disabled) {
            De.splice(ke, 1), ye = qe;
            break;
          }
        }
        ye && e.onDisplayValuesChange(De, {
          type: "remove",
          values: [ye]
        });
      }
      for (var le = arguments.length, ve = new Array(le > 1 ? le - 1 : 0), he = 1; he < le; he++)
        ve[he - 1] = arguments[he];
      y.value && p.value && p.value.onKeydown(B, ...ve), (U = e.onKeydown) === null || U === void 0 || U.call(e, B, ...ve);
    }, H = function(B) {
      for (var U = arguments.length, ne = new Array(U > 1 ? U - 1 : 0), Q = 1; Q < U; Q++)
        ne[Q - 1] = arguments[Q];
      y.value && p.value && p.value.onKeyup(B, ...ne), e.onKeyup && e.onKeyup(B, ...ne);
    }, A = (B) => {
      const U = e.displayValues.filter((ne) => ne !== B);
      e.onDisplayValuesChange(U, {
        type: "remove",
        values: [B]
      });
    }, z = k(!1), q = function() {
      w(!0), e.disabled || (e.onFocus && !z.value && e.onFocus(...arguments), e.showAction && e.showAction.includes("focus") && _(!0)), z.value = !0;
    }, Y = te(!1), K = function() {
      if (Y.value || (h.value = !0, w(!1, () => {
        z.value = !1, h.value = !1, _(!1);
      }), e.disabled))
        return;
      const B = x.value;
      B && (e.mode === "tags" ? e.onSearch(B, {
        source: "submit"
      }) : e.mode === "multiple" && e.onSearch("", {
        source: "blur"
      })), e.onBlur && e.onBlur(...arguments);
    }, W = () => {
      Y.value = !0;
    }, G = () => {
      Y.value = !1;
    };
    _e("VCSelectContainerEvent", {
      focus: q,
      blur: K
    });
    const ee = [];
    be(() => {
      ee.forEach((B) => clearTimeout(B)), ee.splice(0, ee.length);
    }), Ae(() => {
      ee.forEach((B) => clearTimeout(B)), ee.splice(0, ee.length);
    });
    const re = function(B) {
      var U, ne;
      const {
        target: Q
      } = B, le = (U = d.value) === null || U === void 0 ? void 0 : U.getPopupElement();
      if (le && le.contains(Q)) {
        const ye = setTimeout(() => {
          var ke;
          const qe = ee.indexOf(ye);
          qe !== -1 && ee.splice(qe, 1), b(), !l.value && !le.contains(document.activeElement) && ((ke = f.value) === null || ke === void 0 || ke.focus());
        });
        ee.push(ye);
      }
      for (var ve = arguments.length, he = new Array(ve > 1 ? ve - 1 : 0), De = 1; De < ve; De++)
        he[De - 1] = arguments[De];
      (ne = e.onMousedown) === null || ne === void 0 || ne.call(e, B, ...he);
    }, ie = k(null), X = () => {
    };
    return be(() => {
      ae(R, () => {
        var B;
        if (R.value) {
          const U = Math.ceil((B = c.value) === null || B === void 0 ? void 0 : B.offsetWidth);
          ie.value !== U && !Number.isNaN(U) && (ie.value = U);
        }
      }, {
        immediate: !0,
        flush: "post"
      });
    }), bx([c, d], R, _), Sx(Vm(g(g({}, sh(e)), {
      open: y,
      triggerOpen: R,
      showSearch: a,
      multiple: i,
      toggleOpen: _
    }))), () => {
      const B = g(g({}, e), n), {
        prefixCls: U,
        id: ne,
        open: Q,
        defaultOpen: le,
        mode: ve,
        // Search related
        showSearch: he,
        searchValue: De,
        onSearch: ye,
        // Icons
        allowClear: ke,
        clearIcon: qe,
        showArrow: sr,
        inputIcon: Wi,
        // Others
        disabled: Fn,
        loading: Dn,
        getInputElement: dc,
        getPopupContainer: jv,
        placement: Hv,
        // Dropdown
        animation: Bv,
        transitionName: zv,
        dropdownStyle: Vv,
        dropdownClassName: Wv,
        dropdownMatchSelectWidth: Uv,
        dropdownRender: Gv,
        dropdownAlign: kv,
        showAction: i_,
        direction: Xv,
        // Tags
        tokenSeparators: a_,
        tagRender: qv,
        optionLabelRender: Kv,
        // Events
        onPopupScroll: l_,
        onDropdownVisibleChange: s_,
        onFocus: c_,
        onBlur: u_,
        onKeyup: d_,
        onKeydown: f_,
        onMousedown: p_,
        onClear: Ui,
        omitDomProps: Gi,
        getRawInputElement: fc,
        displayValues: cr,
        onDisplayValuesChange: Yv,
        emptyOptions: Qv,
        activeDescendantId: Zv,
        activeValue: Jv,
        OptionList: eh
      } = B, th = $x(B, ["prefixCls", "id", "open", "defaultOpen", "mode", "showSearch", "searchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "disabled", "loading", "getInputElement", "getPopupContainer", "placement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "optionLabelRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onClear", "omitDomProps", "getRawInputElement", "displayValues", "onDisplayValuesChange", "emptyOptions", "activeDescendantId", "activeValue", "OptionList"]), pc = ve === "combobox" && dc && dc() || null, wo = typeof fc == "function" && fc(), ki = g({}, th);
      let mc;
      wo && (mc = (dn) => {
        _(dn);
      }), Ox.forEach((dn) => {
        delete ki[dn];
      }), Gi == null || Gi.forEach((dn) => {
        delete ki[dn];
      });
      const gc = sr !== void 0 ? sr : Dn || !i.value && ve !== "combobox";
      let vc;
      gc && (vc = v(On, {
        class: oe(`${U}-arrow`, {
          [`${U}-arrow-loading`]: Dn
        }),
        customizeIcon: Wi,
        customizeIconProps: {
          loading: Dn,
          searchValue: x.value,
          open: y.value,
          focused: m.value,
          showSearch: a.value
        }
      }, null));
      let hc;
      const nh = () => {
        Ui == null || Ui(), Yv([], {
          type: "clear",
          values: cr
        }), F("", !1, !1);
      };
      !Fn && ke && (cr.length || x.value) && (hc = v(On, {
        class: `${U}-clear`,
        onMousedown: nh,
        customizeIcon: qe
      }, {
        default: () => [Me("×")]
      }));
      const oh = v(eh, {
        ref: p
      }, g(g({}, s.customSlots), {
        option: r.option
      })), rh = oe(U, n.class, {
        [`${U}-focused`]: m.value,
        [`${U}-multiple`]: i.value,
        [`${U}-single`]: !i.value,
        [`${U}-allow-clear`]: ke,
        [`${U}-show-arrow`]: gc,
        [`${U}-disabled`]: Fn,
        [`${U}-loading`]: Dn,
        [`${U}-open`]: y.value,
        [`${U}-customize-input`]: pc,
        [`${U}-show-search`]: a.value
      }), yc = v(QS, {
        ref: d,
        disabled: Fn,
        prefixCls: U,
        visible: R.value,
        popupElement: oh,
        containerWidth: ie.value,
        animation: Bv,
        transitionName: zv,
        dropdownStyle: Vv,
        dropdownClassName: Wv,
        direction: Xv,
        dropdownMatchSelectWidth: Uv,
        dropdownRender: Gv,
        dropdownAlign: kv,
        placement: Hv,
        getPopupContainer: jv,
        empty: Qv,
        getTriggerDOMNode: () => u.current,
        onPopupVisibleChange: mc,
        onPopupMouseEnter: X,
        onPopupFocusin: W,
        onPopupFocusout: G
      }, {
        default: () => wo ? zt(wo) && tt(wo, {
          ref: u
        }, !1, !0) : v(yx, D(D({}, e), {}, {
          domRef: u,
          prefixCls: U,
          inputElement: pc,
          ref: f,
          id: ne,
          showSearch: a.value,
          mode: ve,
          activeDescendantId: Zv,
          tagRender: qv,
          optionLabelRender: Kv,
          values: cr,
          open: y.value,
          onToggleOpen: _,
          activeValue: Jv,
          searchValue: x.value,
          onSearch: F,
          onSearchSubmit: j,
          onRemove: A,
          tokenWithEnter: N.value
        }), null)
      });
      let Xi;
      return wo ? Xi = yc : Xi = v("div", D(D({}, ki), {}, {
        class: rh,
        ref: c,
        onMousedown: re,
        onKeydown: L,
        onKeyup: H
      }), [m.value && !y.value && v("span", {
        style: {
          width: 0,
          height: 0,
          position: "absolute",
          overflow: "hidden",
          opacity: 0
        },
        "aria-live": "polite"
      }, [`${cr.map((dn) => {
        let {
          label: bc,
          value: ih
        } = dn;
        return ["number", "string"].includes(typeof bc) ? bc : ih;
      }).join(", ")}`]), yc, vc, hc]), Xi;
    };
  }
}), Oi = (e, t) => {
  let {
    height: n,
    offset: o,
    prefixCls: r,
    onInnerResize: i
  } = e, {
    slots: a
  } = t;
  var l;
  let s = {}, c = {
    display: "flex",
    flexDirection: "column"
  };
  return o !== void 0 && (s = {
    height: `${n}px`,
    position: "relative",
    overflow: "hidden"
  }, c = g(g({}, c), {
    transform: `translateY(${o}px)`,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  })), v("div", {
    style: s
  }, [v(si, {
    onResize: (u) => {
      let {
        offsetHeight: d
      } = u;
      d && i && i();
    }
  }, {
    default: () => [v("div", {
      style: c,
      class: oe({
        [`${r}-holder-inner`]: r
      })
    }, [(l = a.default) === null || l === void 0 ? void 0 : l.call(a)])]
  })]);
};
Oi.displayName = "Filter";
Oi.inheritAttrs = !1;
Oi.props = {
  prefixCls: String,
  /** Virtual filler height. Should be `count * itemMinHeight` */
  height: Number,
  /** Set offset of visible items. Should be the top of start item position */
  offset: Number,
  onInnerResize: Function
};
const Um = (e, t) => {
  let {
    setRef: n
  } = e, {
    slots: o
  } = t;
  var r;
  const i = Je((r = o.default) === null || r === void 0 ? void 0 : r.call(o));
  return i.length ? Jo(i[0], {
    ref: n
  }) : i;
};
Um.props = {
  setRef: {
    type: Function,
    default: () => {
    }
  }
};
const Ex = 20;
function Hu(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
const _x = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ScrollBar",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    scrollTop: Number,
    scrollHeight: Number,
    height: Number,
    count: Number,
    onScroll: {
      type: Function
    },
    onStartMove: {
      type: Function
    },
    onStopMove: {
      type: Function
    }
  },
  setup() {
    return {
      moveRaf: null,
      scrollbarRef: Yo(),
      thumbRef: Yo(),
      visibleTimeout: null,
      state: Le({
        dragging: !1,
        pageY: null,
        startTop: null,
        visible: !1
      })
    };
  },
  watch: {
    scrollTop: {
      handler() {
        this.delayHidden();
      },
      flush: "post"
    }
  },
  mounted() {
    var e, t;
    (e = this.scrollbarRef.current) === null || e === void 0 || e.addEventListener("touchstart", this.onScrollbarTouchStart, Ke ? {
      passive: !1
    } : !1), (t = this.thumbRef.current) === null || t === void 0 || t.addEventListener("touchstart", this.onMouseDown, Ke ? {
      passive: !1
    } : !1);
  },
  beforeUnmount() {
    this.removeEvents(), clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden() {
      clearTimeout(this.visibleTimeout), this.state.visible = !0, this.visibleTimeout = setTimeout(() => {
        this.state.visible = !1;
      }, 2e3);
    },
    onScrollbarTouchStart(e) {
      e.preventDefault();
    },
    onContainerMouseDown(e) {
      e.stopPropagation(), e.preventDefault();
    },
    // ======================= Clean =======================
    patchEvents() {
      window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("mouseup", this.onMouseUp), this.thumbRef.current.addEventListener("touchmove", this.onMouseMove, Ke ? {
        passive: !1
      } : !1), this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
    },
    removeEvents() {
      window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("mouseup", this.onMouseUp), this.scrollbarRef.current.removeEventListener("touchstart", this.onScrollbarTouchStart, Ke ? {
        passive: !1
      } : !1), this.thumbRef.current && (this.thumbRef.current.removeEventListener("touchstart", this.onMouseDown, Ke ? {
        passive: !1
      } : !1), this.thumbRef.current.removeEventListener("touchmove", this.onMouseMove, Ke ? {
        passive: !1
      } : !1), this.thumbRef.current.removeEventListener("touchend", this.onMouseUp)), $e.cancel(this.moveRaf);
    },
    // ======================= Thumb =======================
    onMouseDown(e) {
      const {
        onStartMove: t
      } = this.$props;
      g(this.state, {
        dragging: !0,
        pageY: Hu(e),
        startTop: this.getTop()
      }), t(), this.patchEvents(), e.stopPropagation(), e.preventDefault();
    },
    onMouseMove(e) {
      const {
        dragging: t,
        pageY: n,
        startTop: o
      } = this.state, {
        onScroll: r
      } = this.$props;
      if ($e.cancel(this.moveRaf), t) {
        const i = Hu(e) - n, a = o + i, l = this.getEnableScrollRange(), s = this.getEnableHeightRange(), c = s ? a / s : 0, u = Math.ceil(c * l);
        this.moveRaf = $e(() => {
          r(u);
        });
      }
    },
    onMouseUp() {
      const {
        onStopMove: e
      } = this.$props;
      this.state.dragging = !1, e(), this.removeEvents();
    },
    // ===================== Calculate =====================
    getSpinHeight() {
      const {
        height: e,
        scrollHeight: t
      } = this.$props;
      let n = e / t * 100;
      return n = Math.max(n, Ex), n = Math.min(n, e / 2), Math.floor(n);
    },
    getEnableScrollRange() {
      const {
        scrollHeight: e,
        height: t
      } = this.$props;
      return e - t || 0;
    },
    getEnableHeightRange() {
      const {
        height: e
      } = this.$props, t = this.getSpinHeight();
      return e - t || 0;
    },
    getTop() {
      const {
        scrollTop: e
      } = this.$props, t = this.getEnableScrollRange(), n = this.getEnableHeightRange();
      return e === 0 || t === 0 ? 0 : e / t * n;
    },
    // Not show scrollbar when height is large than scrollHeight
    showScroll() {
      const {
        height: e,
        scrollHeight: t
      } = this.$props;
      return t > e;
    }
  },
  render() {
    const {
      dragging: e,
      visible: t
    } = this.state, {
      prefixCls: n
    } = this.$props, o = this.getSpinHeight() + "px", r = this.getTop() + "px", i = this.showScroll(), a = i && t;
    return v("div", {
      ref: this.scrollbarRef,
      class: oe(`${n}-scrollbar`, {
        [`${n}-scrollbar-show`]: i
      }),
      style: {
        width: "8px",
        top: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: a ? void 0 : "none"
      },
      onMousedown: this.onContainerMouseDown,
      onMousemove: this.delayHidden
    }, [v("div", {
      ref: this.thumbRef,
      class: oe(`${n}-scrollbar-thumb`, {
        [`${n}-scrollbar-thumb-moving`]: e
      }),
      style: {
        width: "100%",
        height: o,
        top: r,
        left: 0,
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "99px",
        cursor: "pointer",
        userSelect: "none"
      },
      onMousedown: this.onMouseDown
    }, null)]);
  }
});
function Ax(e, t, n, o) {
  const r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = te(Symbol("update"));
  ae(e, () => {
    a.value = Symbol("update");
  });
  let l;
  function s() {
    $e.cancel(l);
  }
  function c() {
    s(), l = $e(() => {
      r.forEach((d, f) => {
        if (d && d.offsetParent) {
          const {
            offsetHeight: p
          } = d;
          i.get(f) !== p && (a.value = Symbol("update"), i.set(f, d.offsetHeight));
        }
      });
    });
  }
  function u(d, f) {
    const p = t(d);
    r.get(p), f ? (r.set(p, f.$el || f), c()) : r.delete(p);
  }
  return Zo(() => {
    s();
  }), [u, c, i, a];
}
function Mx(e, t, n, o, r, i, a, l) {
  let s;
  return (c) => {
    if (c == null) {
      l();
      return;
    }
    $e.cancel(s);
    const u = t.value, d = o.itemHeight;
    if (typeof c == "number")
      a(c);
    else if (c && typeof c == "object") {
      let f;
      const {
        align: p
      } = c;
      "index" in c ? {
        index: f
      } = c : f = u.findIndex((w) => r(w) === c.key);
      const {
        offset: h = 0
      } = c, m = (w, b) => {
        if (w < 0 || !e.value) return;
        const C = e.value.clientHeight;
        let S = !1, x = b;
        if (C) {
          const $ = b || p;
          let O = 0, y = 0, I = 0;
          const E = Math.min(u.length, f);
          for (let N = 0; N <= E; N += 1) {
            const F = r(u[N]);
            y = O;
            const j = n.get(F);
            I = y + (j === void 0 ? d : j), O = I, N === f && j === void 0 && (S = !0);
          }
          const R = e.value.scrollTop;
          let _ = null;
          switch ($) {
            case "top":
              _ = y - h;
              break;
            case "bottom":
              _ = I - C + h;
              break;
            default: {
              const N = R + C;
              y < R ? x = "top" : I > N && (x = "bottom");
            }
          }
          _ !== null && _ !== R && a(_);
        }
        s = $e(() => {
          S && i(), m(w - 1, x);
        }, 2);
      };
      m(5);
    }
  };
}
const Rx = typeof navigator == "object" && /Firefox/i.test(navigator.userAgent), Gm = (e, t) => {
  let n = !1, o = null;
  function r() {
    clearTimeout(o), n = !0, o = setTimeout(() => {
      n = !1;
    }, 50);
  }
  return function(i) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const l = (
      // Pass origin wheel when on the top
      i < 0 && e.value || // Pass origin wheel when on the bottom
      i > 0 && t.value
    );
    return a && l ? (clearTimeout(o), n = !1) : (!l || n) && r(), !n && l;
  };
};
function Fx(e, t, n, o) {
  let r = 0, i = null, a = null, l = !1;
  const s = Gm(t, n);
  function c(d) {
    if (!e.value) return;
    $e.cancel(i);
    const {
      deltaY: f
    } = d;
    r += f, a = f, !s(f) && (Rx || d.preventDefault(), i = $e(() => {
      o(r * (l ? 10 : 1)), r = 0;
    }));
  }
  function u(d) {
    e.value && (l = d.detail === a);
  }
  return [c, u];
}
const Dx = 14 / 15;
function Nx(e, t, n) {
  let o = !1, r = 0, i = null, a = null;
  const l = () => {
    i && (i.removeEventListener("touchmove", s), i.removeEventListener("touchend", c));
  }, s = (f) => {
    if (o) {
      const p = Math.ceil(f.touches[0].pageY);
      let h = r - p;
      r = p, n(h) && f.preventDefault(), clearInterval(a), a = setInterval(() => {
        h *= Dx, (!n(h, !0) || Math.abs(h) <= 0.1) && clearInterval(a);
      }, 16);
    }
  }, c = () => {
    o = !1, l();
  }, u = (f) => {
    l(), f.touches.length === 1 && !o && (o = !0, r = Math.ceil(f.touches[0].pageY), i = f.target, i.addEventListener("touchmove", s, {
      passive: !1
    }), i.addEventListener("touchend", c));
  }, d = () => {
  };
  be(() => {
    document.addEventListener("touchmove", d, {
      passive: !1
    }), ae(e, (f) => {
      t.value.removeEventListener("touchstart", u), l(), clearInterval(a), f && t.value.addEventListener("touchstart", u, {
        passive: !1
      });
    }, {
      immediate: !0
    });
  }), Ae(() => {
    document.removeEventListener("touchmove", d);
  });
}
var Lx = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const jx = [], Hx = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function Bx(e, t, n, o, r, i) {
  let {
    getKey: a
  } = i;
  return e.slice(t, n + 1).map((l, s) => {
    const c = t + s, u = r(l, c, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    }), d = a(l);
    return v(Um, {
      key: d,
      setRef: (f) => o(l, f)
    }, {
      default: () => [u]
    });
  });
}
const zx = Z({
  compatConfig: {
    MODE: 3
  },
  name: "List",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    data: V.array,
    height: Number,
    itemHeight: Number,
    /** If not match virtual scroll condition, Set List still use height of container. */
    fullHeight: {
      type: Boolean,
      default: void 0
    },
    itemKey: {
      type: [String, Number, Function],
      required: !0
    },
    component: {
      type: [String, Object]
    },
    /** Set `false` will always use real scroll instead of virtual one */
    virtual: {
      type: Boolean,
      default: void 0
    },
    children: Function,
    onScroll: Function,
    onMousedown: Function,
    onMouseenter: Function,
    onVisibleChange: Function
  },
  setup(e, t) {
    let {
      expose: n
    } = t;
    const o = T(() => {
      const {
        height: A,
        itemHeight: z,
        virtual: q
      } = e;
      return !!(q !== !1 && A && z);
    }), r = T(() => {
      const {
        height: A,
        itemHeight: z,
        data: q
      } = e;
      return o.value && q && z * q.length > A;
    }), i = Le({
      scrollTop: 0,
      scrollMoving: !1
    }), a = T(() => e.data || jx), l = k([]);
    ae(a, () => {
      l.value = rn(a.value).slice();
    }, {
      immediate: !0
    });
    const s = k((A) => {
    });
    ae(() => e.itemKey, (A) => {
      typeof A == "function" ? s.value = A : s.value = (z) => z == null ? void 0 : z[A];
    }, {
      immediate: !0
    });
    const c = k(), u = k(), d = k(), f = (A) => s.value(A), p = {
      getKey: f
    };
    function h(A) {
      let z;
      typeof A == "function" ? z = A(i.scrollTop) : z = A;
      const q = O(z);
      c.value && (c.value.scrollTop = q), i.scrollTop = q;
    }
    const [m, w, b, C] = Ax(l, f), S = Le({
      scrollHeight: void 0,
      start: 0,
      end: 0,
      offset: void 0
    }), x = k(0);
    be(() => {
      Fe(() => {
        var A;
        x.value = ((A = u.value) === null || A === void 0 ? void 0 : A.offsetHeight) || 0;
      });
    }), Pn(() => {
      Fe(() => {
        var A;
        x.value = ((A = u.value) === null || A === void 0 ? void 0 : A.offsetHeight) || 0;
      });
    }), ae([o, l], () => {
      o.value || g(S, {
        scrollHeight: void 0,
        start: 0,
        end: l.value.length - 1,
        offset: void 0
      });
    }, {
      immediate: !0
    }), ae([o, l, x, r], () => {
      o.value && !r.value && g(S, {
        scrollHeight: x.value,
        start: 0,
        end: l.value.length - 1,
        offset: void 0
      }), c.value && (i.scrollTop = c.value.scrollTop);
    }, {
      immediate: !0
    }), ae([r, o, () => i.scrollTop, l, C, () => e.height, x], () => {
      if (!o.value || !r.value)
        return;
      let A = 0, z, q, Y;
      const K = l.value.length, W = l.value, G = i.scrollTop, {
        itemHeight: ee,
        height: re
      } = e, ie = G + re;
      for (let X = 0; X < K; X += 1) {
        const B = W[X], U = f(B);
        let ne = b.get(U);
        ne === void 0 && (ne = ee);
        const Q = A + ne;
        z === void 0 && Q >= G && (z = X, q = A), Y === void 0 && Q > ie && (Y = X), A = Q;
      }
      z === void 0 && (z = 0, q = 0, Y = Math.ceil(re / ee)), Y === void 0 && (Y = K - 1), Y = Math.min(Y + 1, K), g(S, {
        scrollHeight: A,
        start: z,
        end: Y,
        offset: q
      });
    }, {
      immediate: !0
    });
    const $ = T(() => S.scrollHeight - e.height);
    function O(A) {
      let z = A;
      return Number.isNaN($.value) || (z = Math.min(z, $.value)), z = Math.max(z, 0), z;
    }
    const y = T(() => i.scrollTop <= 0), I = T(() => i.scrollTop >= $.value), E = Gm(y, I);
    function R(A) {
      h(A);
    }
    function _(A) {
      var z;
      const {
        scrollTop: q
      } = A.currentTarget;
      q !== i.scrollTop && h(q), (z = e.onScroll) === null || z === void 0 || z.call(e, A);
    }
    const [N, F] = Fx(o, y, I, (A) => {
      h((z) => z + A);
    });
    Nx(o, c, (A, z) => E(A, z) ? !1 : (N({
      preventDefault() {
      },
      deltaY: A
    }), !0));
    function j(A) {
      o.value && A.preventDefault();
    }
    const P = () => {
      c.value && (c.value.removeEventListener("wheel", N, Ke ? {
        passive: !1
      } : !1), c.value.removeEventListener("DOMMouseScroll", F), c.value.removeEventListener("MozMousePixelScroll", j));
    };
    Pe(() => {
      Fe(() => {
        c.value && (P(), c.value.addEventListener("wheel", N, Ke ? {
          passive: !1
        } : !1), c.value.addEventListener("DOMMouseScroll", F), c.value.addEventListener("MozMousePixelScroll", j));
      });
    }), Ae(() => {
      P();
    });
    const M = Mx(c, l, b, e, f, w, h, () => {
      var A;
      (A = d.value) === null || A === void 0 || A.delayHidden();
    });
    n({
      scrollTo: M
    });
    const L = T(() => {
      let A = null;
      return e.height && (A = g({
        [e.fullHeight ? "height" : "maxHeight"]: e.height + "px"
      }, Hx), o.value && (A.overflowY = "hidden", i.scrollMoving && (A.pointerEvents = "none"))), A;
    });
    return ae([() => S.start, () => S.end, l], () => {
      if (e.onVisibleChange) {
        const A = l.value.slice(S.start, S.end + 1);
        e.onVisibleChange(A, l.value);
      }
    }, {
      flush: "post"
    }), {
      state: i,
      mergedData: l,
      componentStyle: L,
      onFallbackScroll: _,
      onScrollBar: R,
      componentRef: c,
      useVirtual: o,
      calRes: S,
      collectHeight: w,
      setInstance: m,
      sharedConfig: p,
      scrollBarRef: d,
      fillerInnerRef: u,
      delayHideScrollBar: () => {
        var A;
        (A = d.value) === null || A === void 0 || A.delayHidden();
      }
    };
  },
  render() {
    const e = g(g({}, this.$props), this.$attrs), {
      prefixCls: t = "rc-virtual-list",
      height: n,
      itemHeight: o,
      // eslint-disable-next-line no-unused-vars
      fullHeight: r,
      data: i,
      itemKey: a,
      virtual: l,
      component: s = "div",
      onScroll: c,
      children: u = this.$slots.default,
      style: d,
      class: f
    } = e, p = Lx(e, ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"]), h = oe(t, f), {
      scrollTop: m
    } = this.state, {
      scrollHeight: w,
      offset: b,
      start: C,
      end: S
    } = this.calRes, {
      componentStyle: x,
      onFallbackScroll: $,
      onScrollBar: O,
      useVirtual: y,
      collectHeight: I,
      sharedConfig: E,
      setInstance: R,
      mergedData: _,
      delayHideScrollBar: N
    } = this;
    return v("div", D({
      style: g(g({}, d), {
        position: "relative"
      }),
      class: h
    }, p), [v(s, {
      class: `${t}-holder`,
      style: x,
      ref: "componentRef",
      onScroll: $,
      onMouseenter: N
    }, {
      default: () => [v(Oi, {
        prefixCls: t,
        height: w,
        offset: b,
        onInnerResize: I,
        ref: "fillerInnerRef"
      }, {
        default: () => Bx(_, C, S, R, u, E)
      })]
    }), y && v(_x, {
      ref: "scrollBarRef",
      prefixCls: t,
      scrollTop: m,
      height: n,
      scrollHeight: w,
      count: _.length,
      onScroll: O,
      onStartMove: () => {
        this.state.scrollMoving = !0;
      },
      onStopMove: () => {
        this.state.scrollMoving = !1;
      }
    }, null)]);
  }
});
function Vx(e, t, n) {
  const o = te(e());
  return ae(t, (r, i) => {
    n(r, i) && (o.value = e());
  }), o;
}
function Wx() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
const km = Symbol("SelectContextKey");
function Ux(e) {
  return _e(km, e);
}
function Gx() {
  return Ee(km, {});
}
var kx = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function Bu(e) {
  return typeof e == "string" || typeof e == "number";
}
const Xx = Z({
  compatConfig: {
    MODE: 3
  },
  name: "OptionList",
  inheritAttrs: !1,
  setup(e, t) {
    let {
      expose: n,
      slots: o
    } = t;
    const r = xx(), i = Gx(), a = T(() => `${r.prefixCls}-item`), l = Vx(() => i.flattenOptions, [() => r.open, () => i.flattenOptions], ($) => $[0]), s = Yo(), c = ($) => {
      $.preventDefault();
    }, u = ($) => {
      s.current && s.current.scrollTo(typeof $ == "number" ? {
        index: $
      } : $);
    }, d = function($) {
      let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      const y = l.value.length;
      for (let I = 0; I < y; I += 1) {
        const E = ($ + I * O + y) % y, {
          group: R,
          data: _
        } = l.value[E];
        if (!R && !_.disabled)
          return E;
      }
      return -1;
    }, f = Le({
      activeIndex: d(0)
    }), p = function($) {
      let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      f.activeIndex = $;
      const y = {
        source: O ? "keyboard" : "mouse"
      }, I = l.value[$];
      if (!I) {
        i.onActiveValue(null, -1, y);
        return;
      }
      i.onActiveValue(I.value, $, y);
    };
    ae([() => l.value.length, () => r.searchValue], () => {
      p(i.defaultActiveFirstOption !== !1 ? d(0) : -1);
    }, {
      immediate: !0
    });
    const h = ($) => i.rawValues.has($) && r.mode !== "combobox";
    ae([() => r.open, () => r.searchValue], () => {
      if (!r.multiple && r.open && i.rawValues.size === 1) {
        const $ = Array.from(i.rawValues)[0], O = rn(l.value).findIndex((y) => {
          let {
            data: I
          } = y;
          return I[i.fieldNames.value] === $;
        });
        O !== -1 && (p(O), Fe(() => {
          u(O);
        }));
      }
      r.open && Fe(() => {
        var $;
        ($ = s.current) === null || $ === void 0 || $.scrollTo(void 0);
      });
    }, {
      immediate: !0,
      flush: "post"
    });
    const m = ($) => {
      $ !== void 0 && i.onSelect($, {
        selected: !i.rawValues.has($)
      }), r.multiple || r.toggleOpen(!1);
    }, w = ($) => typeof $.label == "function" ? $.label() : $.label;
    function b($) {
      const O = l.value[$];
      if (!O) return null;
      const y = O.data || {}, {
        value: I
      } = y, {
        group: E
      } = O, R = nr(y, !0), _ = w(O);
      return O ? v("div", D(D({
        "aria-label": typeof _ == "string" && !E ? _ : null
      }, R), {}, {
        key: $,
        role: E ? "presentation" : "option",
        id: `${r.id}_list_${$}`,
        "aria-selected": h(I)
      }), [I]) : null;
    }
    return n({
      onKeydown: ($) => {
        const {
          which: O,
          ctrlKey: y
        } = $;
        switch (O) {
          case J.N:
          case J.P:
          case J.UP:
          case J.DOWN: {
            let I = 0;
            if (O === J.UP ? I = -1 : O === J.DOWN ? I = 1 : Wx() && y && (O === J.N ? I = 1 : O === J.P && (I = -1)), I !== 0) {
              const E = d(f.activeIndex + I, I);
              u(E), p(E, !0);
            }
            break;
          }
          case J.ENTER: {
            const I = l.value[f.activeIndex];
            I && !I.data.disabled ? m(I.value) : m(void 0), r.open && $.preventDefault();
            break;
          }
          case J.ESC:
            r.toggleOpen(!1), r.open && $.stopPropagation();
        }
      },
      onKeyup: () => {
      },
      scrollTo: ($) => {
        u($);
      }
    }), () => {
      const {
        id: $,
        notFoundContent: O,
        onPopupScroll: y
      } = r, {
        menuItemSelectedIcon: I,
        fieldNames: E,
        virtual: R,
        listHeight: _,
        listItemHeight: N
      } = i, F = o.option, {
        activeIndex: j
      } = f, P = Object.keys(E).map((M) => E[M]);
      return l.value.length === 0 ? v("div", {
        role: "listbox",
        id: `${$}_list`,
        class: `${a.value}-empty`,
        onMousedown: c
      }, [O]) : v(Ie, null, [v("div", {
        role: "listbox",
        id: `${$}_list`,
        style: {
          height: 0,
          width: 0,
          overflow: "hidden"
        }
      }, [b(j - 1), b(j), b(j + 1)]), v(zx, {
        itemKey: "key",
        ref: s,
        data: l.value,
        height: _,
        itemHeight: N,
        fullHeight: !1,
        onMousedown: c,
        onScroll: y,
        virtual: R
      }, {
        default: (M, L) => {
          var H;
          const {
            group: A,
            groupOption: z,
            data: q,
            value: Y
          } = M, {
            key: K
          } = q, W = typeof M.label == "function" ? M.label() : M.label;
          if (A) {
            const qe = (H = q.title) !== null && H !== void 0 ? H : Bu(W) && W;
            return v("div", {
              class: oe(a.value, `${a.value}-group`),
              title: qe
            }, [F ? F(q) : W !== void 0 ? W : K]);
          }
          const {
            disabled: G,
            title: ee,
            children: re,
            style: ie,
            class: X,
            className: B
          } = q, U = kx(q, ["disabled", "title", "children", "style", "class", "className"]), ne = Ue(U, P), Q = h(Y), le = `${a.value}-option`, ve = oe(a.value, le, X, B, {
            [`${le}-grouped`]: z,
            [`${le}-active`]: j === L && !G,
            [`${le}-disabled`]: G,
            [`${le}-selected`]: Q
          }), he = w(M), De = !I || typeof I == "function" || Q, ye = typeof he == "number" ? he : he || Y;
          let ke = Bu(ye) ? ye.toString() : void 0;
          return ee !== void 0 && (ke = ee), v("div", D(D({}, ne), {}, {
            "aria-selected": Q,
            class: ve,
            title: ke,
            onMousemove: (qe) => {
              U.onMousemove && U.onMousemove(qe), !(j === L || G) && p(L);
            },
            onClick: (qe) => {
              G || m(Y), U.onClick && U.onClick(qe);
            },
            style: ie
          }), [v("div", {
            class: `${le}-content`
          }, [F ? F(q) : ye]), zt(I) || Q, De && v(On, {
            class: `${a.value}-option-state`,
            customizeIcon: I,
            customizeIconProps: {
              isSelected: Q
            }
          }, {
            default: () => [Q ? "✓" : null]
          })]);
        }
      })]);
    };
  }
});
var qx = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function Kx(e) {
  const t = e, {
    key: n,
    children: o
  } = t, r = t.props, {
    value: i,
    disabled: a
  } = r, l = qx(r, ["value", "disabled"]), s = o == null ? void 0 : o.default;
  return g({
    key: n,
    value: i !== void 0 ? i : n,
    children: s,
    disabled: a || a === ""
  }, l);
}
function as(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Je(e).map((o, r) => {
    var i;
    if (!zt(o) || !o.type)
      return null;
    const {
      type: {
        isSelectOptGroup: a
      },
      key: l,
      children: s,
      props: c
    } = o;
    if (t || !a)
      return Kx(o);
    const u = s && s.default ? s.default() : void 0, d = (c == null ? void 0 : c.label) || ((i = s.label) === null || i === void 0 ? void 0 : i.call(s)) || l;
    return g(g({
      key: `__RC_SELECT_GRP__${l === null ? r : String(l)}__`
    }, c), {
      label: d,
      options: as(u || [])
    });
  }).filter((o) => o);
}
function Yx(e, t, n) {
  const o = k(), r = k(), i = k(), a = k([]);
  return ae([e, t], () => {
    e.value ? a.value = rn(e.value).slice() : a.value = as(t.value);
  }, {
    immediate: !0,
    deep: !0
  }), Pe(() => {
    const l = a.value, s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = n.value;
    function d(f) {
      let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      for (let h = 0; h < f.length; h += 1) {
        const m = f[h];
        !m[u.options] || p ? (s.set(m[u.value], m), c.set(m[u.label], m)) : d(m[u.options], !0);
      }
    }
    d(l), o.value = l, r.value = s, i.value = c;
  }), {
    options: o,
    valueOptions: r,
    labelOptions: i
  };
}
let zu = 0;
const Qx = process.env.NODE_ENV !== "test" && yt();
function Zx() {
  let e;
  return Qx ? (e = zu, zu += 1) : e = "TEST_OR_SSR", e;
}
function Jx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : te("");
  const t = `rc_select_${Zx()}`;
  return e.value || t;
}
function ls(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
const eC = typeof window < "u" && window.document && window.document.documentElement;
process.env.NODE_ENV;
function tC(e) {
  const {
    mode: t,
    options: n,
    children: o,
    backfill: r,
    allowClear: i,
    placeholder: a,
    getInputElement: l,
    showSearch: s,
    onSearch: c,
    defaultOpen: u,
    autofocus: d,
    labelInValue: f,
    value: p,
    inputValue: h,
    optionLabelProp: m
  } = e, w = is(t), b = s !== void 0 ? s : w || t === "combobox", C = n || as(o);
  if (mt(t !== "tags" || C.every((S) => !S.disabled), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), mt(t !== "combobox" || !m, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), mt(t === "combobox" || !r, "`backfill` only works with `combobox` mode."), mt(t === "combobox" || !l, "`getInputElement` only work with `combobox` mode."), _c(t !== "combobox" || !l || !i || !a, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), c && !b && t !== "combobox" && t !== "tags" && mt(!1, "`onSearch` should work with `showSearch` instead of use alone."), _c(!u || d, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autofocus` if needed."), p != null) {
    const S = ls(p);
    mt(!f || S.every((x) => typeof x == "object" && ("key" in x || "value" in x)), "`value` should in shape of `{ value: string | number, label?: any }` when you set `labelInValue` to `true`"), mt(!w || Array.isArray(p), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (o) {
    let S = null;
    o.some((x) => {
      var $;
      if (!zt(x) || !x.type)
        return !1;
      const {
        type: O
      } = x;
      return O.isSelectOption ? !1 : O.isSelectOptGroup ? !((($ = x.children) === null || $ === void 0 ? void 0 : $.default()) || []).every((E) => !zt(E) || !x.type || E.type.isSelectOption ? !0 : (S = E.type, !1)) : (S = O, !0);
    }), S && mt(!1, `\`children\` should be \`Select.Option\` or \`Select.OptGroup\` instead of \`${S.displayName || S.name || S}\`.`), mt(h === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function fa(e, t) {
  return ls(e).join("").toUpperCase().includes(t);
}
const nC = (e, t, n, o, r) => T(() => {
  const i = n.value, a = r == null ? void 0 : r.value, l = o == null ? void 0 : o.value;
  if (!i || l === !1)
    return e.value;
  const {
    options: s,
    label: c,
    value: u
  } = t.value, d = [], f = typeof l == "function", p = i.toUpperCase(), h = f ? l : (w, b) => a ? fa(b[a], p) : b[s] ? fa(b[c !== "children" ? c : "label"], p) : fa(b[u], p), m = f ? (w) => Xa(w) : (w) => w;
  return e.value.forEach((w) => {
    if (w[s]) {
      if (h(i, m(w)))
        d.push(w);
      else {
        const C = w[s].filter((S) => h(i, m(S)));
        C.length && d.push(g(g({}, w), {
          [s]: C
        }));
      }
      return;
    }
    h(i, m(w)) && d.push(w);
  }), d;
}), oC = (e, t) => {
  const n = k({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  });
  return [T(() => {
    const {
      values: i,
      options: a
    } = n.value, l = e.value.map((u) => {
      var d;
      return u.label === void 0 ? g(g({}, u), {
        label: (d = i.get(u.value)) === null || d === void 0 ? void 0 : d.label
      }) : u;
    }), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
    return l.forEach((u) => {
      s.set(u.value, u), c.set(u.value, t.value.get(u.value) || a.get(u.value));
    }), n.value.values = s, n.value.options = c, l;
  }), (i) => t.value.get(i) || n.value.options.get(i)];
};
function Qr(e, t) {
  const {
    defaultValue: n,
    value: o = te()
  } = t || {};
  let r = typeof e == "function" ? e() : e;
  o.value !== void 0 && (r = ge(o)), n !== void 0 && (r = typeof n == "function" ? n() : n);
  const i = te(r), a = te(r);
  Pe(() => {
    let s = o.value !== void 0 ? o.value : i.value;
    t.postState && (s = t.postState(s)), a.value = s;
  });
  function l(s) {
    const c = a.value;
    i.value = s, rn(a.value) !== s && t.onChange && t.onChange(s, c);
  }
  return ae(o, () => {
    i.value = o.value;
  }), [a, l];
}
function jt(e) {
  const t = typeof e == "function" ? e() : e, n = te(t);
  function o(r) {
    n.value = r;
  }
  return [n, o];
}
const rC = ["inputValue"];
function Xm() {
  return g(g({}, Wm()), {
    prefixCls: String,
    id: String,
    backfill: {
      type: Boolean,
      default: void 0
    },
    // >>> Field Names
    fieldNames: Object,
    // >>> Search
    /** @deprecated Use `searchValue` instead */
    inputValue: String,
    searchValue: String,
    onSearch: Function,
    autoClearSearchValue: {
      type: Boolean,
      default: void 0
    },
    // >>> Select
    onSelect: Function,
    onDeselect: Function,
    // >>> Options
    /**
     * In Select, `false` means do nothing.
     * In TreeSelect, `false` will highlight match item.
     * It's by design.
     */
    filterOption: {
      type: [Boolean, Function],
      default: void 0
    },
    filterSort: Function,
    optionFilterProp: String,
    optionLabelProp: String,
    options: Array,
    defaultActiveFirstOption: {
      type: Boolean,
      default: void 0
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    listHeight: Number,
    listItemHeight: Number,
    // >>> Icon
    menuItemSelectedIcon: V.any,
    mode: String,
    labelInValue: {
      type: Boolean,
      default: void 0
    },
    value: V.any,
    defaultValue: V.any,
    onChange: Function,
    children: Array
  });
}
function iC(e) {
  return !e || typeof e != "object";
}
const aC = Z({
  compatConfig: {
    MODE: 3
  },
  name: "VcSelect",
  inheritAttrs: !1,
  props: Be(Xm(), {
    prefixCls: "vc-select",
    autoClearSearchValue: !0,
    listHeight: 200,
    listItemHeight: 20,
    dropdownMatchSelectWidth: !0
  }),
  setup(e, t) {
    let {
      expose: n,
      attrs: o,
      slots: r
    } = t;
    const i = Jx(Ct(e, "id")), a = T(() => is(e.mode)), l = T(() => !!(!e.options && e.children)), s = T(() => e.filterOption === void 0 && e.mode === "combobox" ? !1 : e.filterOption), c = T(() => lm(e.fieldNames, l.value)), [u, d] = Qr("", {
      value: T(() => e.searchValue !== void 0 ? e.searchValue : e.inputValue),
      postState: (X) => X || ""
    }), f = Yx(Ct(e, "options"), Ct(e, "children"), c), {
      valueOptions: p,
      labelOptions: h,
      options: m
    } = f, w = (X) => ls(X).map((U) => {
      var ne, Q;
      let le, ve, he, De;
      iC(U) ? le = U : (he = U.key, ve = U.label, le = (ne = U.value) !== null && ne !== void 0 ? ne : he);
      const ye = p.value.get(le);
      return ye && (ve === void 0 && (ve = ye == null ? void 0 : ye[e.optionLabelProp || c.value.label]), he === void 0 && (he = (Q = ye == null ? void 0 : ye.key) !== null && Q !== void 0 ? Q : le), De = ye == null ? void 0 : ye.disabled), {
        label: ve,
        value: le,
        key: he,
        disabled: De,
        option: ye
      };
    }), [b, C] = Qr(e.defaultValue, {
      value: Ct(e, "value")
    }), S = T(() => {
      var X;
      const B = w(b.value);
      return e.mode === "combobox" && !(!((X = B[0]) === null || X === void 0) && X.value) ? [] : B;
    }), [x, $] = oC(S, p), O = T(() => {
      if (!e.mode && x.value.length === 1) {
        const X = x.value[0];
        if (X.value === null && (X.label === null || X.label === void 0))
          return [];
      }
      return x.value.map((X) => {
        var B;
        return g(g({}, X), {
          label: (B = typeof X.label == "function" ? X.label() : X.label) !== null && B !== void 0 ? B : X.value
        });
      });
    }), y = T(() => new Set(x.value.map((X) => X.value)));
    Pe(() => {
      var X;
      if (e.mode === "combobox") {
        const B = (X = x.value[0]) === null || X === void 0 ? void 0 : X.value;
        B != null && d(String(B));
      }
    }, {
      flush: "post"
    });
    const I = (X, B) => {
      const U = B ?? X;
      return {
        [c.value.value]: X,
        [c.value.label]: U
      };
    }, E = k();
    Pe(() => {
      if (e.mode !== "tags") {
        E.value = m.value;
        return;
      }
      const X = m.value.slice(), B = (U) => p.value.has(U);
      [...x.value].sort((U, ne) => U.value < ne.value ? -1 : 1).forEach((U) => {
        const ne = U.value;
        B(ne) || X.push(I(ne, U.label));
      }), E.value = X;
    });
    const R = nC(E, c, u, s, Ct(e, "optionFilterProp")), _ = T(() => e.mode !== "tags" || !u.value || R.value.some((X) => X[e.optionFilterProp || "value"] === u.value) ? R.value : [I(u.value), ...R.value]), N = T(() => e.filterSort ? [..._.value].sort((X, B) => e.filterSort(X, B)) : _.value), F = T(() => bb(N.value, {
      fieldNames: c.value,
      childrenAsData: l.value
    })), j = (X) => {
      const B = w(X);
      if (C(B), e.onChange && // Trigger event only when value changed
      (B.length !== x.value.length || B.some((U, ne) => {
        var Q;
        return ((Q = x.value[ne]) === null || Q === void 0 ? void 0 : Q.value) !== (U == null ? void 0 : U.value);
      }))) {
        const U = e.labelInValue ? B.map((Q) => g(g({}, Q), {
          originLabel: Q.label,
          label: typeof Q.label == "function" ? Q.label() : Q.label
        })) : B.map((Q) => Q.value), ne = B.map((Q) => Xa($(Q.value)));
        e.onChange(
          // Value
          a.value ? U : U[0],
          // Option
          a.value ? ne : ne[0]
        );
      }
    }, [P, M] = jt(null), [L, H] = jt(0), A = T(() => e.defaultActiveFirstOption !== void 0 ? e.defaultActiveFirstOption : e.mode !== "combobox"), z = function(X, B) {
      let {
        source: U = "keyboard"
      } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      H(B), e.backfill && e.mode === "combobox" && X !== null && U === "keyboard" && M(String(X));
    }, q = (X, B) => {
      const U = () => {
        var ne;
        const Q = $(X), le = Q == null ? void 0 : Q[c.value.label];
        return [e.labelInValue ? {
          label: typeof le == "function" ? le() : le,
          originLabel: le,
          value: X,
          key: (ne = Q == null ? void 0 : Q.key) !== null && ne !== void 0 ? ne : X
        } : X, Xa(Q)];
      };
      if (B && e.onSelect) {
        const [ne, Q] = U();
        e.onSelect(ne, Q);
      } else if (!B && e.onDeselect) {
        const [ne, Q] = U();
        e.onDeselect(ne, Q);
      }
    }, Y = (X, B) => {
      let U;
      const ne = a.value ? B.selected : !0;
      ne ? U = a.value ? [...x.value, X] : [X] : U = x.value.filter((Q) => Q.value !== X), j(U), q(X, ne), e.mode === "combobox" ? M("") : (!a.value || e.autoClearSearchValue) && (d(""), M(""));
    }, K = (X, B) => {
      j(X), (B.type === "remove" || B.type === "clear") && B.values.forEach((U) => {
        q(U.value, !1);
      });
    }, W = (X, B) => {
      var U;
      if (d(X), M(null), B.source === "submit") {
        const ne = (X || "").trim();
        if (ne) {
          const Q = Array.from(/* @__PURE__ */ new Set([...y.value, ne]));
          j(Q), q(ne, !0), d("");
        }
        return;
      }
      B.source !== "blur" && (e.mode === "combobox" && j(X), (U = e.onSearch) === null || U === void 0 || U.call(e, X));
    }, G = (X) => {
      let B = X;
      e.mode !== "tags" && (B = X.map((ne) => {
        const Q = h.value.get(ne);
        return Q == null ? void 0 : Q.value;
      }).filter((ne) => ne !== void 0));
      const U = Array.from(/* @__PURE__ */ new Set([...y.value, ...B]));
      j(U), U.forEach((ne) => {
        q(ne, !0);
      });
    }, ee = T(() => e.virtual !== !1 && e.dropdownMatchSelectWidth !== !1);
    Ux(Vm(g(g({}, f), {
      flattenOptions: F,
      onActiveValue: z,
      defaultActiveFirstOption: A,
      onSelect: Y,
      menuItemSelectedIcon: Ct(e, "menuItemSelectedIcon"),
      rawValues: y,
      fieldNames: c,
      virtual: ee,
      listHeight: Ct(e, "listHeight"),
      listItemHeight: Ct(e, "listItemHeight"),
      childrenAsData: l
    }))), process.env.NODE_ENV !== "production" && Pe(() => {
      tC(e);
    }, {
      flush: "post"
    });
    const re = te();
    n({
      focus() {
        var X;
        (X = re.value) === null || X === void 0 || X.focus();
      },
      blur() {
        var X;
        (X = re.value) === null || X === void 0 || X.blur();
      },
      scrollTo(X) {
        var B;
        (B = re.value) === null || B === void 0 || B.scrollTo(X);
      }
    });
    const ie = T(() => Ue(e, [
      "id",
      "mode",
      "prefixCls",
      "backfill",
      "fieldNames",
      // Search
      "inputValue",
      "searchValue",
      "onSearch",
      "autoClearSearchValue",
      // Select
      "onSelect",
      "onDeselect",
      "dropdownMatchSelectWidth",
      // Options
      "filterOption",
      "filterSort",
      "optionFilterProp",
      "optionLabelProp",
      "options",
      "children",
      "defaultActiveFirstOption",
      "menuItemSelectedIcon",
      "virtual",
      "listHeight",
      "listItemHeight",
      // Value
      "value",
      "defaultValue",
      "labelInValue",
      "onChange"
    ]));
    return () => v(Tx, D(D(D({}, ie.value), o), {}, {
      id: i,
      prefixCls: e.prefixCls,
      ref: re,
      omitDomProps: rC,
      mode: e.mode,
      displayValues: O.value,
      onDisplayValuesChange: K,
      searchValue: u.value,
      onSearch: W,
      onSearchSplit: G,
      dropdownMatchSelectWidth: e.dropdownMatchSelectWidth,
      OptionList: Xx,
      emptyOptions: !F.value.length,
      activeValue: P.value,
      activeDescendantId: `${i}_list_${L.value}`
    }), r);
  }
}), ss = () => null;
ss.isSelectOption = !0;
ss.displayName = "ASelectOption";
const cs = () => null;
cs.isSelectOptGroup = !0;
cs.displayName = "ASelectOptGroup";
var lC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, sC = Symbol("iconContext"), qm = function() {
  return Ee(sC, {
    prefixCls: te("anticon"),
    rootClassName: te(""),
    csp: te()
  });
};
function us() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function cC(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var Vu = "data-vc-order", uC = "vc-icon-key", il = /* @__PURE__ */ new Map();
function Km() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : uC;
}
function ds(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function dC(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Ym(e) {
  return Array.from((il.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Qm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!us())
    return null;
  var n = t.csp, o = t.prepend, r = document.createElement("style");
  r.setAttribute(Vu, dC(o)), n && n.nonce && (r.nonce = n.nonce), r.innerHTML = e;
  var i = ds(t), a = i.firstChild;
  if (o) {
    if (o === "queue") {
      var l = Ym(i).filter(function(s) {
        return ["prepend", "prependQueue"].includes(s.getAttribute(Vu));
      });
      if (l.length)
        return i.insertBefore(r, l[l.length - 1].nextSibling), r;
    }
    i.insertBefore(r, a);
  } else
    i.appendChild(r);
  return r;
}
function fC(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = ds(t);
  return Ym(n).find(function(o) {
    return o.getAttribute(Km(t)) === e;
  });
}
function pC(e, t) {
  var n = il.get(e);
  if (!n || !cC(document, n)) {
    var o = Qm("", t), r = o.parentNode;
    il.set(e, r), e.removeChild(o);
  }
}
function mC(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = ds(n);
  pC(o, n);
  var r = fC(t, n);
  if (r)
    return n.csp && n.csp.nonce && r.nonce !== n.csp.nonce && (r.nonce = n.csp.nonce), r.innerHTML !== e && (r.innerHTML = e), r;
  var i = Qm(e, n);
  return i.setAttribute(Km(n), t), i;
}
function Wu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      gC(e, r, n[r]);
    });
  }
  return e;
}
function gC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function vC(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function hC(e, t) {
  vC(e, "[@ant-design/icons-vue] ".concat(t));
}
function Uu(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function al(e, t, n) {
  return n ? eo(e.tag, Wu({
    key: t
  }, n, e.attrs), (e.children || []).map(function(o, r) {
    return al(o, "".concat(t, "-").concat(e.tag, "-").concat(r));
  })) : eo(e.tag, Wu({
    key: t
  }, e.attrs), (e.children || []).map(function(o, r) {
    return al(o, "".concat(t, "-").concat(e.tag, "-").concat(r));
  }));
}
function Zm(e) {
  return xn(e)[0];
}
function Jm(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var yC = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
function eg(e) {
  return e && e.getRootNode && e.getRootNode();
}
function bC(e) {
  return us() ? eg(e) instanceof ShadowRoot : !1;
}
function wC(e) {
  return bC(e) ? eg(e) : null;
}
var SC = function() {
  var t = qm(), n = t.prefixCls, o = t.csp, r = Ut(), i = yC;
  n && (i = i.replace(/anticon/g, n.value)), Fe(function() {
    if (us()) {
      var a = r.vnode.el, l = wC(a);
      mC(i, "@ant-design-vue-icons", {
        prepend: !0,
        csp: o.value,
        attachTo: l
      });
    }
  });
}, xC = ["icon", "primaryColor", "secondaryColor"];
function CC(e, t) {
  if (e == null) return {};
  var n = $C(e, t), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      o = i[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
function $C(e, t) {
  if (e == null) return {};
  var n = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      OC(e, r, n[r]);
    });
  }
  return e;
}
function OC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Mo = Le({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function PC(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Mo.primaryColor = t, Mo.secondaryColor = n || Zm(t), Mo.calculated = !!n;
}
function IC() {
  return Nr({}, Mo);
}
var cn = function(t, n) {
  var o = Nr({}, t, n.attrs), r = o.icon, i = o.primaryColor, a = o.secondaryColor, l = CC(o, xC), s = Mo;
  if (i && (s = {
    primaryColor: i,
    secondaryColor: a || Zm(i)
  }), hC(Uu(r), "icon should be icon definiton, but got ".concat(r)), !Uu(r))
    return null;
  var c = r;
  return c && typeof c.icon == "function" && (c = Nr({}, c, {
    icon: c.icon(s.primaryColor, s.secondaryColor)
  })), al(c.icon, "svg-".concat(c.name), Nr({}, l, {
    "data-icon": c.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
cn.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
cn.inheritAttrs = !1;
cn.displayName = "IconBase";
cn.getTwoToneColors = IC;
cn.setTwoToneColors = PC;
function TC(e, t) {
  return MC(e) || AC(e, t) || _C(e, t) || EC();
}
function EC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _C(e, t) {
  if (e) {
    if (typeof e == "string") return Gu(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gu(e, t);
  }
}
function Gu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++)
    o[n] = e[n];
  return o;
}
function AC(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o = [], r = !0, i = !1, a, l;
    try {
      for (n = n.call(e); !(r = (a = n.next()).done) && (o.push(a.value), !(t && o.length === t)); r = !0)
        ;
    } catch (s) {
      i = !0, l = s;
    } finally {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (i) throw l;
      }
    }
    return o;
  }
}
function MC(e) {
  if (Array.isArray(e)) return e;
}
function tg(e) {
  var t = Jm(e), n = TC(t, 2), o = n[0], r = n[1];
  return cn.setTwoToneColors({
    primaryColor: o,
    secondaryColor: r
  });
}
function RC() {
  var e = cn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var FC = Z({
  name: "InsertStyles",
  setup: function() {
    return SC(), function() {
      return null;
    };
  }
}), DC = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function NC(e, t) {
  return BC(e) || HC(e, t) || jC(e, t) || LC();
}
function LC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jC(e, t) {
  if (e) {
    if (typeof e == "string") return ku(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ku(e, t);
  }
}
function ku(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++)
    o[n] = e[n];
  return o;
}
function HC(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o = [], r = !0, i = !1, a, l;
    try {
      for (n = n.call(e); !(r = (a = n.next()).done) && (o.push(a.value), !(t && o.length === t)); r = !0)
        ;
    } catch (s) {
      i = !0, l = s;
    } finally {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (i) throw l;
      }
    }
    return o;
  }
}
function BC(e) {
  if (Array.isArray(e)) return e;
}
function Xu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Po(e, r, n[r]);
    });
  }
  return e;
}
function Po(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function zC(e, t) {
  if (e == null) return {};
  var n = VC(e, t), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      o = i[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
function VC(e, t) {
  if (e == null) return {};
  var n = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
tg(xy.primary);
var de = function(t, n) {
  var o, r = Xu({}, t, n.attrs), i = r.class, a = r.icon, l = r.spin, s = r.rotate, c = r.tabindex, u = r.twoToneColor, d = r.onClick, f = zC(r, DC), p = qm(), h = p.prefixCls, m = p.rootClassName, w = (o = {}, Po(o, m.value, !!m.value), Po(o, h.value, !0), Po(o, "".concat(h.value, "-").concat(a.name), !!a.name), Po(o, "".concat(h.value, "-spin"), !!l || a.name === "loading"), o), b = c;
  b === void 0 && d && (b = -1);
  var C = s ? {
    msTransform: "rotate(".concat(s, "deg)"),
    transform: "rotate(".concat(s, "deg)")
  } : void 0, S = Jm(u), x = NC(S, 2), $ = x[0], O = x[1];
  return v("span", Xu({
    role: "img",
    "aria-label": a.name
  }, f, {
    onClick: d,
    class: [w, i],
    tabindex: b
  }), [v(cn, {
    icon: a,
    primaryColor: $,
    secondaryColor: O,
    style: C
  }, null), v(FC, null, null)]);
};
de.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
de.displayName = "AntdIcon";
de.inheritAttrs = !1;
de.getTwoToneColor = RC;
de.setTwoToneColor = tg;
function qu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      WC(e, r, n[r]);
    });
  }
  return e;
}
function WC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var fs = function(t, n) {
  var o = qu({}, t, n.attrs);
  return v(de, qu({}, o, {
    icon: lC
  }), null);
};
fs.displayName = "DownOutlined";
fs.inheritAttrs = !1;
var UC = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
function Ku(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      GC(e, r, n[r]);
    });
  }
  return e;
}
function GC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ot = function(t, n) {
  var o = Ku({}, t, n.attrs);
  return v(de, Ku({}, o, {
    icon: UC
  }), null);
};
Ot.displayName = "LoadingOutlined";
Ot.inheritAttrs = !1;
var kC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
function Yu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      XC(e, r, n[r]);
    });
  }
  return e;
}
function XC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Pi = function(t, n) {
  var o = Yu({}, t, n.attrs);
  return v(de, Yu({}, o, {
    icon: kC
  }), null);
};
Pi.displayName = "CheckOutlined";
Pi.inheritAttrs = !1;
var qC = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
function Qu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      KC(e, r, n[r]);
    });
  }
  return e;
}
function KC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var un = function(t, n) {
  var o = Qu({}, t, n.attrs);
  return v(de, Qu({}, o, {
    icon: qC
  }), null);
};
un.displayName = "CloseOutlined";
un.inheritAttrs = !1;
var YC = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
function Zu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      QC(e, r, n[r]);
    });
  }
  return e;
}
function QC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var St = function(t, n) {
  var o = Zu({}, t, n.attrs);
  return v(de, Zu({}, o, {
    icon: YC
  }), null);
};
St.displayName = "CloseCircleFilled";
St.inheritAttrs = !1;
var ZC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
function Ju(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      JC(e, r, n[r]);
    });
  }
  return e;
}
function JC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ii = function(t, n) {
  var o = Ju({}, t, n.attrs);
  return v(de, Ju({}, o, {
    icon: ZC
  }), null);
};
Ii.displayName = "SearchOutlined";
Ii.inheritAttrs = !1;
function e$(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    loading: n,
    multiple: o,
    prefixCls: r,
    hasFeedback: i,
    feedbackIcon: a,
    showArrow: l
  } = e, s = e.suffixIcon || t.suffixIcon && t.suffixIcon(), c = e.clearIcon || t.clearIcon && t.clearIcon(), u = e.menuItemSelectedIcon || t.menuItemSelectedIcon && t.menuItemSelectedIcon(), d = e.removeIcon || t.removeIcon && t.removeIcon(), f = c ?? v(St, null, null), p = (b) => v(Ie, null, [l !== !1 && b, i && a]);
  let h = null;
  if (s !== void 0)
    h = p(s);
  else if (n)
    h = p(v(Ot, {
      spin: !0
    }, null));
  else {
    const b = `${r}-suffix`;
    h = (C) => {
      let {
        open: S,
        showSearch: x
      } = C;
      return p(S && x ? v(Ii, {
        class: b
      }, null) : v(fs, {
        class: b
      }, null));
    };
  }
  let m = null;
  u !== void 0 ? m = u : o ? m = v(Pi, null, null) : m = null;
  let w = null;
  return d !== void 0 ? w = d : w = v(un, null, null), {
    clearIcon: f,
    suffixIcon: h,
    itemIcon: m,
    removeIcon: w
  };
}
function ps(e) {
  const t = Symbol("contextKey");
  return {
    useProvide: (r, i) => {
      const a = Le({});
      return _e(t, a), Pe(() => {
        g(a, r, i || {});
      }), a;
    },
    useInject: () => Ee(t, e) || {}
  };
}
const Zr = Symbol("ContextProps"), Jr = Symbol("InternalContextProps"), t$ = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T(() => !0);
  const n = te(/* @__PURE__ */ new Map()), o = (a, l) => {
    n.value.set(a, l), n.value = new Map(n.value);
  }, r = (a) => {
    n.value.delete(a), n.value = new Map(n.value);
  }, i = Ut();
  ae([t, n], () => {
    if (process.env.NODE_ENV !== "production" && t.value && n.value.size > 1) {
      vt(!1, "Form.Item", `FormItem can only collect one field item, you haved set ${[...n.value.values()].map((l) => `\`${l.name}\``).join(", ")} ${n.value.size} field items.
        You can set not need to be collected fields into \`a-form-item-rest\``);
      let a = i;
      for (; a.parent; )
        console.warn("at", a.type), a = a.parent;
    }
  }), _e(Zr, e), _e(Jr, {
    addFormItemField: o,
    removeFormItemField: r
  });
}, ll = {
  id: T(() => {
  }),
  onFieldBlur: () => {
  },
  onFieldChange: () => {
  },
  clearValidate: () => {
  }
}, sl = {
  addFormItemField: () => {
  },
  removeFormItemField: () => {
  }
}, or = () => {
  const e = Ee(Jr, sl), t = Symbol("FormItemFieldKey"), n = Ut();
  return e.addFormItemField(t, n.type), Ae(() => {
    e.removeFormItemField(t);
  }), _e(Jr, sl), _e(Zr, ll), Ee(Zr, ll);
}, cl = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItemRest",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return _e(Jr, sl), _e(Zr, ll), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
}), sn = ps({}), ed = Z({
  name: "NoFormStatus",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return sn.useProvide({}), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
function Qn(e, t, n) {
  return oe({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const Ti = (e, t) => t || e, n$ = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
}, o$ = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${t}-item`]: {
        "&:empty": {
          display: "none"
        }
      }
    }
  };
}, r$ = Ge("Space", (e) => [o$(e), n$(e)]);
var i$ = "[object Symbol]";
function Ei(e) {
  return typeof e == "symbol" || Ft(e) && _n(e) == i$;
}
function ms(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var a$ = 1 / 0, td = wt ? wt.prototype : void 0, nd = td ? td.toString : void 0;
function ng(e) {
  if (typeof e == "string")
    return e;
  if (ut(e))
    return ms(e, ng) + "";
  if (Ei(e))
    return nd ? nd.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -a$ ? "-0" : t;
}
var l$ = /\s/;
function s$(e) {
  for (var t = e.length; t-- && l$.test(e.charAt(t)); )
    ;
  return t;
}
var c$ = /^\s+/;
function u$(e) {
  return e && e.slice(0, s$(e) + 1).replace(c$, "");
}
var od = NaN, d$ = /^[-+]0x[0-9a-f]+$/i, f$ = /^0b[01]+$/i, p$ = /^0o[0-7]+$/i, m$ = parseInt;
function ul(e) {
  if (typeof e == "number")
    return e;
  if (Ei(e))
    return od;
  if (Vt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Vt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = u$(e);
  var n = f$.test(e);
  return n || p$.test(e) ? m$(e.slice(2), n ? 2 : 8) : d$.test(e) ? od : +e;
}
var rd = 1 / 0, g$ = 17976931348623157e292;
function v$(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = ul(e), e === rd || e === -rd) {
    var t = e < 0 ? -1 : 1;
    return t * g$;
  }
  return e === e ? e : 0;
}
function h$(e) {
  var t = v$(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function gs(e) {
  return e;
}
var id = Object.create, y$ = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Vt(t))
      return {};
    if (id)
      return id(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function b$(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function w$(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var S$ = 800, x$ = 16, C$ = Date.now;
function $$(e) {
  var t = 0, n = 0;
  return function() {
    var o = C$(), r = x$ - (o - n);
    if (n = o, r > 0) {
      if (++t >= S$)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function O$(e) {
  return function() {
    return e;
  };
}
var ei = function() {
  try {
    var e = Mn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), P$ = ei ? function(e, t) {
  return ei(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: O$(t),
    writable: !0
  });
} : gs, og = $$(P$);
function I$(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function rg(e, t, n, o) {
  for (var r = e.length, i = n + -1; ++i < r; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
function T$(e) {
  return e !== e;
}
function E$(e, t, n) {
  for (var o = n - 1, r = e.length; ++o < r; )
    if (e[o] === t)
      return o;
  return -1;
}
function _$(e, t, n) {
  return t === t ? E$(e, t, n) : rg(e, T$, n);
}
function A$(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && _$(e, t, 0) > -1;
}
function ig(e, t, n) {
  t == "__proto__" && ei ? ei(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var M$ = Object.prototype, R$ = M$.hasOwnProperty;
function ag(e, t, n) {
  var o = e[t];
  (!(R$.call(e, t) && ql(o, n)) || n === void 0 && !(t in e)) && ig(e, t, n);
}
function rr(e, t, n, o) {
  var r = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var l = t[i], s = void 0;
    s === void 0 && (s = e[l]), r ? ig(n, l, s) : ag(n, l, s);
  }
  return n;
}
var ad = Math.max;
function lg(e, t, n) {
  return t = ad(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, i = ad(o.length - t, 0), a = Array(i); ++r < i; )
      a[r] = o[t + r];
    r = -1;
    for (var l = Array(t + 1); ++r < t; )
      l[r] = o[r];
    return l[t] = n(a), b$(e, this, l);
  };
}
function F$(e, t) {
  return og(lg(e, t, gs), e + "");
}
function D$(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var N$ = Object.prototype, L$ = N$.hasOwnProperty;
function j$(e) {
  if (!Vt(e))
    return D$(e);
  var t = Si(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !L$.call(e, o)) || n.push(o);
  return n;
}
function vs(e) {
  return yo(e) ? Em(e, !0) : j$(e);
}
var H$ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, B$ = /^\w*$/;
function hs(e, t) {
  if (ut(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ei(e) ? !0 : B$.test(e) || !H$.test(e) || t != null && e in Object(t);
}
var z$ = "Expected a function";
function ys(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(z$);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], i = n.cache;
    if (i.has(r))
      return i.get(r);
    var a = e.apply(this, o);
    return n.cache = i.set(r, a) || i, a;
  };
  return n.cache = new (ys.Cache || Xt)(), n;
}
ys.Cache = Xt;
var V$ = 500;
function W$(e) {
  var t = ys(e, function(o) {
    return n.size === V$ && n.clear(), o;
  }), n = t.cache;
  return t;
}
var U$ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, G$ = /\\(\\)?/g, k$ = W$(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(U$, function(n, o, r, i) {
    t.push(r ? i.replace(G$, "$1") : o || n);
  }), t;
});
function X$(e) {
  return e == null ? "" : ng(e);
}
function _i(e, t) {
  return ut(e) ? e : hs(e, t) ? [e] : k$(X$(e));
}
var q$ = 1 / 0;
function ir(e) {
  if (typeof e == "string" || Ei(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -q$ ? "-0" : t;
}
function bs(e, t) {
  t = _i(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[ir(t[n++])];
  return n && n == o ? e : void 0;
}
function K$(e, t, n) {
  var o = e == null ? void 0 : bs(e, t);
  return o === void 0 ? n : o;
}
var ld = wt ? wt.isConcatSpreadable : void 0;
function Y$(e) {
  return ut(e) || wi(e) || !!(ld && e && e[ld]);
}
function Q$(e, t, n, o, r) {
  var i = -1, a = e.length;
  for (n || (n = Y$), r || (r = []); ++i < a; ) {
    var l = e[i];
    n(l) ? Kl(r, l) : r[r.length] = l;
  }
  return r;
}
function Z$(e) {
  var t = e == null ? 0 : e.length;
  return t ? Q$(e) : [];
}
function J$(e) {
  return og(lg(e, void 0, Z$), e + "");
}
var ws = _m(Object.getPrototypeOf, Object), e2 = "[object Object]", t2 = Function.prototype, n2 = Object.prototype, sg = t2.toString, o2 = n2.hasOwnProperty, r2 = sg.call(Object);
function cg(e) {
  if (!Ft(e) || _n(e) != e2)
    return !1;
  var t = ws(e);
  if (t === null)
    return !0;
  var n = o2.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && sg.call(n) == r2;
}
function i2(e, t, n) {
  var o = -1, r = e.length;
  t < 0 && (t = -t > r ? 0 : r + t), n = n > r ? r : n, n < 0 && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var i = Array(r); ++o < r; )
    i[o] = e[o + t];
  return i;
}
function a2(e, t) {
  return e && rr(t, bo(t), e);
}
function l2(e, t) {
  return e && rr(t, vs(t), e);
}
var ug = typeof exports == "object" && exports && !exports.nodeType && exports, sd = ug && typeof module == "object" && module && !module.nodeType && module, s2 = sd && sd.exports === ug, cd = s2 ? Pt.Buffer : void 0, ud = cd ? cd.allocUnsafe : void 0;
function c2(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = ud ? ud(n) : new e.constructor(n);
  return e.copy(o), o;
}
function u2(e, t) {
  return rr(e, Yl(e), t);
}
var d2 = Object.getOwnPropertySymbols, dg = d2 ? function(e) {
  for (var t = []; e; )
    Kl(t, Yl(e)), e = ws(e);
  return t;
} : $m;
function f2(e, t) {
  return rr(e, dg(e), t);
}
function fg(e) {
  return Cm(e, vs, dg);
}
var p2 = Object.prototype, m2 = p2.hasOwnProperty;
function g2(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && m2.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
function Ss(e) {
  var t = new e.constructor(e.byteLength);
  return new Yr(t).set(new Yr(e)), t;
}
function v2(e, t) {
  var n = t ? Ss(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var h2 = /\w*$/;
function y2(e) {
  var t = new e.constructor(e.source, h2.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var dd = wt ? wt.prototype : void 0, fd = dd ? dd.valueOf : void 0;
function b2(e) {
  return fd ? Object(fd.call(e)) : {};
}
function w2(e, t) {
  var n = t ? Ss(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var S2 = "[object Boolean]", x2 = "[object Date]", C2 = "[object Map]", $2 = "[object Number]", O2 = "[object RegExp]", P2 = "[object Set]", I2 = "[object String]", T2 = "[object Symbol]", E2 = "[object ArrayBuffer]", _2 = "[object DataView]", A2 = "[object Float32Array]", M2 = "[object Float64Array]", R2 = "[object Int8Array]", F2 = "[object Int16Array]", D2 = "[object Int32Array]", N2 = "[object Uint8Array]", L2 = "[object Uint8ClampedArray]", j2 = "[object Uint16Array]", H2 = "[object Uint32Array]";
function B2(e, t, n) {
  var o = e.constructor;
  switch (t) {
    case E2:
      return Ss(e);
    case S2:
    case x2:
      return new o(+e);
    case _2:
      return v2(e, n);
    case A2:
    case M2:
    case R2:
    case F2:
    case D2:
    case N2:
    case L2:
    case j2:
    case H2:
      return w2(e, n);
    case C2:
      return new o();
    case $2:
    case I2:
      return new o(e);
    case O2:
      return y2(e);
    case P2:
      return new o();
    case T2:
      return b2(e);
  }
}
function z2(e) {
  return typeof e.constructor == "function" && !Si(e) ? y$(ws(e)) : {};
}
var V2 = "[object Map]";
function W2(e) {
  return Ft(e) && gt(e) == V2;
}
var pd = co && co.isMap, U2 = pd ? Zl(pd) : W2, G2 = "[object Set]";
function k2(e) {
  return Ft(e) && gt(e) == G2;
}
var md = co && co.isSet, X2 = md ? Zl(md) : k2, q2 = 1, K2 = 2, Y2 = 4, pg = "[object Arguments]", Q2 = "[object Array]", Z2 = "[object Boolean]", J2 = "[object Date]", eO = "[object Error]", mg = "[object Function]", tO = "[object GeneratorFunction]", nO = "[object Map]", oO = "[object Number]", gg = "[object Object]", rO = "[object RegExp]", iO = "[object Set]", aO = "[object String]", lO = "[object Symbol]", sO = "[object WeakMap]", cO = "[object ArrayBuffer]", uO = "[object DataView]", dO = "[object Float32Array]", fO = "[object Float64Array]", pO = "[object Int8Array]", mO = "[object Int16Array]", gO = "[object Int32Array]", vO = "[object Uint8Array]", hO = "[object Uint8ClampedArray]", yO = "[object Uint16Array]", bO = "[object Uint32Array]", xe = {};
xe[pg] = xe[Q2] = xe[cO] = xe[uO] = xe[Z2] = xe[J2] = xe[dO] = xe[fO] = xe[pO] = xe[mO] = xe[gO] = xe[nO] = xe[oO] = xe[gg] = xe[rO] = xe[iO] = xe[aO] = xe[lO] = xe[vO] = xe[hO] = xe[yO] = xe[bO] = !0;
xe[eO] = xe[mg] = xe[sO] = !1;
function Ro(e, t, n, o, r, i) {
  var a, l = t & q2, s = t & K2, c = t & Y2;
  if (n && (a = r ? n(e, o, r, i) : n(e)), a !== void 0)
    return a;
  if (!Vt(e))
    return e;
  var u = ut(e);
  if (u) {
    if (a = g2(e), !l)
      return w$(e, a);
  } else {
    var d = gt(e), f = d == mg || d == tO;
    if (Ko(e))
      return c2(e, l);
    if (d == gg || d == pg || f && !r) {
      if (a = s || f ? {} : z2(e), !l)
        return s ? f2(e, l2(a, e)) : u2(e, a2(a, e));
    } else {
      if (!xe[d])
        return r ? e : {};
      a = B2(e, d, l);
    }
  }
  i || (i = new At());
  var p = i.get(e);
  if (p)
    return p;
  i.set(e, a), X2(e) ? e.forEach(function(w) {
    a.add(Ro(w, t, n, w, e, i));
  }) : U2(e) && e.forEach(function(w, b) {
    a.set(b, Ro(w, t, n, b, e, i));
  });
  var h = c ? s ? fg : Ja : s ? vs : bo, m = u ? void 0 : h(e);
  return I$(m || e, function(w, b) {
    m && (b = w, w = e[b]), ag(a, b, Ro(w, t, n, b, e, i));
  }), a;
}
var wO = 1, SO = 4;
function Lr(e) {
  return Ro(e, wO | SO);
}
var xO = 1, CO = 2;
function $O(e, t, n, o) {
  var r = n.length, i = r;
  if (e == null)
    return !i;
  for (e = Object(e); r--; ) {
    var a = n[r];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++r < i; ) {
    a = n[r];
    var l = a[0], s = e[l], c = a[1];
    if (a[2]) {
      if (s === void 0 && !(l in e))
        return !1;
    } else {
      var u = new At(), d;
      if (!(d === void 0 ? xi(c, s, xO | CO, o, u) : d))
        return !1;
    }
  }
  return !0;
}
function vg(e) {
  return e === e && !Vt(e);
}
function OO(e) {
  for (var t = bo(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, vg(r)];
  }
  return t;
}
function hg(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function PO(e) {
  var t = OO(e);
  return t.length == 1 && t[0][2] ? hg(t[0][0], t[0][1]) : function(n) {
    return n === e || $O(n, e, t);
  };
}
function IO(e, t) {
  return e != null && t in Object(e);
}
function TO(e, t, n) {
  t = _i(t, e);
  for (var o = -1, r = t.length, i = !1; ++o < r; ) {
    var a = ir(t[o]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++o != r ? i : (r = e == null ? 0 : e.length, !!r && Ql(r) && Im(a, r) && (ut(e) || wi(e)));
}
function EO(e, t) {
  return e != null && TO(e, t, IO);
}
var _O = 1, AO = 2;
function MO(e, t) {
  return hs(e) && vg(t) ? hg(ir(e), t) : function(n) {
    var o = K$(n, e);
    return o === void 0 && o === t ? EO(n, e) : xi(t, o, _O | AO);
  };
}
function RO(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function FO(e) {
  return function(t) {
    return bs(t, e);
  };
}
function DO(e) {
  return hs(e) ? RO(ir(e)) : FO(e);
}
function xs(e) {
  return typeof e == "function" ? e : e == null ? gs : typeof e == "object" ? ut(e) ? MO(e[0], e[1]) : PO(e) : DO(e);
}
function NO(e, t, n, o) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; ) {
    var a = e[r];
    t(o, a, n(a), e);
  }
  return o;
}
function LO(e) {
  return function(t, n, o) {
    for (var r = -1, i = Object(t), a = o(t), l = a.length; l--; ) {
      var s = a[++r];
      if (n(i[s], s, i) === !1)
        break;
    }
    return t;
  };
}
var jO = LO();
function HO(e, t) {
  return e && jO(e, t, bo);
}
function BO(e, t) {
  return function(n, o) {
    if (n == null)
      return n;
    if (!yo(n))
      return e(n, o);
    for (var r = n.length, i = -1, a = Object(n); ++i < r && o(a[i], i, a) !== !1; )
      ;
    return n;
  };
}
var zO = BO(HO);
function VO(e, t, n, o) {
  return zO(e, function(r, i, a) {
    t(o, r, n(r), a);
  }), o;
}
function WO(e, t) {
  return function(n, o) {
    var r = ut(n) ? NO : VO, i = t();
    return r(n, e, xs(o), i);
  };
}
var pa = function() {
  return Pt.Date.now();
}, UO = "Expected a function", GO = Math.max, kO = Math.min;
function XO(e, t, n) {
  var o, r, i, a, l, s, c = 0, u = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(UO);
  t = ul(t) || 0, Vt(n) && (u = !!n.leading, d = "maxWait" in n, i = d ? GO(ul(n.maxWait) || 0, t) : i, f = "trailing" in n ? !!n.trailing : f);
  function p(O) {
    var y = o, I = r;
    return o = r = void 0, c = O, a = e.apply(I, y), a;
  }
  function h(O) {
    return c = O, l = setTimeout(b, t), u ? p(O) : a;
  }
  function m(O) {
    var y = O - s, I = O - c, E = t - y;
    return d ? kO(E, i - I) : E;
  }
  function w(O) {
    var y = O - s, I = O - c;
    return s === void 0 || y >= t || y < 0 || d && I >= i;
  }
  function b() {
    var O = pa();
    if (w(O))
      return C(O);
    l = setTimeout(b, m(O));
  }
  function C(O) {
    return l = void 0, f && o ? p(O) : (o = r = void 0, a);
  }
  function S() {
    l !== void 0 && clearTimeout(l), c = 0, o = s = r = l = void 0;
  }
  function x() {
    return l === void 0 ? a : C(pa());
  }
  function $() {
    var O = pa(), y = w(O);
    if (o = arguments, r = this, s = O, y) {
      if (l === void 0)
        return h(s);
      if (d)
        return clearTimeout(l), l = setTimeout(b, t), p(s);
    }
    return l === void 0 && (l = setTimeout(b, t)), a;
  }
  return $.cancel = S, $.flush = x, $;
}
function qO(e) {
  return Ft(e) && yo(e);
}
function KO(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function YO(e) {
  return function(t, n, o) {
    var r = Object(t);
    if (!yo(t)) {
      var i = xs(n);
      t = bo(t), n = function(l) {
        return i(r[l], l, r);
      };
    }
    var a = e(t, n, o);
    return a > -1 ? r[i ? t[a] : a] : void 0;
  };
}
var QO = Math.max;
function ZO(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = n == null ? 0 : h$(n);
  return r < 0 && (r = QO(o + r, 0)), rg(e, xs(t), r);
}
var JO = YO(ZO), e4 = Math.min;
function t4(e, t, n) {
  for (var o = A$, r = e[0].length, i = e.length, a = i, l = Array(i), s = 1 / 0, c = []; a--; ) {
    var u = e[a];
    s = e4(u.length, s), l[a] = r >= 120 && u.length >= 120 ? new qo(a && u) : void 0;
  }
  u = e[0];
  var d = -1, f = l[0];
  e:
    for (; ++d < r && c.length < s; ) {
      var p = u[d], h = p;
      if (p = p !== 0 ? p : 0, !(f ? Za(f, h) : o(c, h))) {
        for (a = i; --a; ) {
          var m = l[a];
          if (!(m ? Za(m, h) : o(e[a], h)))
            continue e;
        }
        f && f.push(h), c.push(p);
      }
    }
  return c;
}
function n4(e) {
  return qO(e) ? e : [];
}
var o4 = F$(function(e) {
  var t = ms(e, n4);
  return t.length && t[0] === e[0] ? t4(t) : [];
});
function r4(e, t) {
  return t.length < 2 ? e : bs(e, i2(t, 0, -1));
}
var i4 = "[object Map]", a4 = "[object Set]", l4 = Object.prototype, s4 = l4.hasOwnProperty;
function yg(e) {
  if (e == null)
    return !0;
  if (yo(e) && (ut(e) || typeof e == "string" || typeof e.splice == "function" || Ko(e) || Jl(e) || wi(e)))
    return !e.length;
  var t = gt(e);
  if (t == i4 || t == a4)
    return !e.size;
  if (Si(e))
    return !Am(e).length;
  for (var n in e)
    if (s4.call(e, n))
      return !1;
  return !0;
}
function c4(e, t) {
  return t = _i(t, e), e = r4(e, t), e == null || delete e[ir(KO(t))];
}
function u4(e) {
  return cg(e) ? void 0 : e;
}
var d4 = 1, f4 = 2, p4 = 4, m4 = J$(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var o = !1;
  t = ms(t, function(i) {
    return i = _i(i, e), o || (o = i.length > 1), i;
  }), rr(e, fg(e), n), o && (n = Ro(n, d4 | f4 | p4, u4));
  for (var r = t.length; r--; )
    c4(n, t[r]);
  return n;
}), g4 = WO(function(e, t, n) {
  e[n ? 0 : 1].push(t);
}, function() {
  return [[], []];
});
const v4 = () => ({
  compactSize: String,
  compactDirection: V.oneOf(an("horizontal", "vertical")).def("horizontal"),
  isFirstItem: Ce(),
  isLastItem: Ce()
}), Ai = ps(null), Cs = (e, t) => {
  const n = Ai.useInject(), o = T(() => {
    if (!n || yg(n)) return "";
    const {
      compactDirection: r,
      isFirstItem: i,
      isLastItem: a
    } = n, l = r === "vertical" ? "-vertical-" : "-";
    return oe({
      [`${e.value}-compact${l}item`]: !0,
      [`${e.value}-compact${l}first-item`]: i,
      [`${e.value}-compact${l}last-item`]: a,
      [`${e.value}-compact${l}item-rtl`]: t.value === "rtl"
    });
  });
  return {
    compactSize: T(() => n == null ? void 0 : n.compactSize),
    compactDirection: T(() => n == null ? void 0 : n.compactDirection),
    compactItemClassnames: o
  };
}, gd = Z({
  name: "NoCompactStyle",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Ai.useProvide(null), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
}), h4 = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: V.oneOf(an("horizontal", "vertical")).def("horizontal"),
  align: V.oneOf(an("start", "end", "center", "baseline")),
  block: {
    type: Boolean,
    default: void 0
  }
}), y4 = Z({
  name: "CompactItem",
  props: v4(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Ai.useProvide(e), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
Z({
  name: "ASpaceCompact",
  inheritAttrs: !1,
  props: h4(),
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const {
      prefixCls: r,
      direction: i
    } = Se("space-compact", e), a = Ai.useInject(), [l, s] = r$(r), c = T(() => oe(r.value, s.value, {
      [`${r.value}-rtl`]: i.value === "rtl",
      [`${r.value}-block`]: e.block,
      [`${r.value}-vertical`]: e.direction === "vertical"
    }));
    return () => {
      var u;
      const d = Je(((u = o.default) === null || u === void 0 ? void 0 : u.call(o)) || []);
      return d.length === 0 ? null : l(v("div", D(D({}, n), {}, {
        class: [c.value, n.class]
      }), [d.map((f, p) => {
        var h;
        const m = f && f.key || `${r.value}-item-${p}`, w = !a || yg(a);
        return v(y4, {
          key: m,
          compactSize: (h = e.size) !== null && h !== void 0 ? h : "middle",
          compactDirection: e.direction,
          isFirstItem: p === 0 && (w || (a == null ? void 0 : a.isFirstItem)),
          isLastItem: p === d.length - 1 && (w || (a == null ? void 0 : a.isLastItem))
        }, {
          default: () => [f]
        });
      })]));
    };
  }
});
const b4 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), w4 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Mi = function(e, t, n, o) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: g(g({}, b4(o)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: g(g({}, w4(o)), {
      animationPlayState: "paused"
    }),
    [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${i}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, S4 = new fe("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), x4 = new fe("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), C4 = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const {
    antCls: n
  } = e, o = `${n}-fade`, r = t ? "&" : "";
  return [Mi(o, S4, x4, e.motionDurationMid, t), {
    [`
        ${r}${o}-enter,
        ${r}${o}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${r}${o}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
}, $4 = new fe("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), O4 = new fe("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), P4 = new fe("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), I4 = new fe("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), T4 = new fe("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), E4 = new fe("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), _4 = new fe("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), A4 = new fe("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), M4 = {
  "move-up": {
    inKeyframes: _4,
    outKeyframes: A4
  },
  "move-down": {
    inKeyframes: $4,
    outKeyframes: O4
  },
  "move-left": {
    inKeyframes: P4,
    outKeyframes: I4
  },
  "move-right": {
    inKeyframes: T4,
    outKeyframes: E4
  }
}, vd = (e, t) => {
  const {
    antCls: n
  } = e, o = `${n}-${t}`, {
    inKeyframes: r,
    outKeyframes: i
  } = M4[t];
  return [Mi(o, r, i, e.motionDurationMid), {
    [`
        ${o}-enter,
        ${o}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc
    },
    [`${o}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, bg = new fe("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), wg = new fe("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), Sg = new fe("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), xg = new fe("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), R4 = new fe("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), F4 = new fe("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), D4 = new fe("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), N4 = new fe("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), L4 = {
  "slide-up": {
    inKeyframes: bg,
    outKeyframes: wg
  },
  "slide-down": {
    inKeyframes: Sg,
    outKeyframes: xg
  },
  "slide-left": {
    inKeyframes: R4,
    outKeyframes: F4
  },
  "slide-right": {
    inKeyframes: D4,
    outKeyframes: N4
  }
}, hd = (e, t) => {
  const {
    antCls: n
  } = e, o = `${n}-${t}`, {
    inKeyframes: r,
    outKeyframes: i
  } = L4[t];
  return [Mi(o, r, i, e.motionDurationMid), {
    [`
      ${o}-enter,
      ${o}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint
    },
    [`${o}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
}, $s = new fe("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), j4 = new fe("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), yd = new fe("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), bd = new fe("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), H4 = new fe("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), B4 = new fe("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), z4 = new fe("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), V4 = new fe("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), W4 = new fe("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), U4 = new fe("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), G4 = new fe("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), k4 = new fe("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), X4 = {
  zoom: {
    inKeyframes: $s,
    outKeyframes: j4
  },
  "zoom-big": {
    inKeyframes: yd,
    outKeyframes: bd
  },
  "zoom-big-fast": {
    inKeyframes: yd,
    outKeyframes: bd
  },
  "zoom-left": {
    inKeyframes: z4,
    outKeyframes: V4
  },
  "zoom-right": {
    inKeyframes: W4,
    outKeyframes: U4
  },
  "zoom-up": {
    inKeyframes: H4,
    outKeyframes: B4
  },
  "zoom-down": {
    inKeyframes: G4,
    outKeyframes: k4
  }
}, Os = (e, t) => {
  const {
    antCls: n
  } = e, o = `${n}-${t}`, {
    inKeyframes: r,
    outKeyframes: i
  } = X4[t];
  return [Mi(o, r, i, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
    [`
        ${o}-enter,
        ${o}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${o}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, Cg = (e) => ({
  [e.componentCls]: {
    // For common/openAnimation
    [`${e.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
      }
    },
    [`${e.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
    }
  }
}), wd = (e) => {
  const {
    controlPaddingHorizontal: t
  } = e;
  return {
    position: "relative",
    display: "block",
    minHeight: e.controlHeight,
    padding: `${(e.controlHeight - e.fontSize * e.lineHeight) / 2}px ${t}px`,
    color: e.colorText,
    fontWeight: "normal",
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    boxSizing: "border-box"
  };
}, q4 = (e) => {
  const {
    antCls: t,
    componentCls: n
  } = e, o = `${n}-item`;
  return [
    {
      [`${n}-dropdown`]: g(g({}, ot(e)), {
        position: "absolute",
        top: -9999,
        zIndex: e.zIndexPopup,
        boxSizing: "border-box",
        padding: e.paddingXXS,
        overflow: "hidden",
        fontSize: e.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: e.colorBgElevated,
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        [`
            &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-bottomLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-bottomLeft
          `]: {
          animationName: bg
        },
        [`
            &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-topLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-topLeft
          `]: {
          animationName: Sg
        },
        [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-bottomLeft`]: {
          animationName: wg
        },
        [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-topLeft`]: {
          animationName: xg
        },
        "&-hidden": {
          display: "none"
        },
        "&-empty": {
          color: e.colorTextDisabled
        },
        // ========================= Options =========================
        [`${o}-empty`]: g(g({}, wd(e)), {
          color: e.colorTextDisabled
        }),
        [`${o}`]: g(g({}, wd(e)), {
          cursor: "pointer",
          transition: `background ${e.motionDurationSlow} ease`,
          borderRadius: e.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": g({
              flex: "auto"
            }, Wo),
            "&-state": {
              flex: "none"
            },
            [`&-active:not(${o}-option-disabled)`]: {
              backgroundColor: e.controlItemBgHover
            },
            [`&-selected:not(${o}-option-disabled)`]: {
              color: e.colorText,
              fontWeight: e.fontWeightStrong,
              backgroundColor: e.controlItemBgActive,
              [`${o}-option-state`]: {
                color: e.colorPrimary
              }
            },
            "&-disabled": {
              [`&${o}-option-selected`]: {
                backgroundColor: e.colorBgContainerDisabled
              },
              color: e.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: e.controlPaddingHorizontal * 2
            }
          }
        }),
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    hd(e, "slide-up"),
    hd(e, "slide-down"),
    vd(e, "move-up"),
    vd(e, "move-down")
  ];
}, Ln = 2;
function $g(e) {
  let {
    controlHeightSM: t,
    controlHeight: n,
    lineWidth: o
  } = e;
  const r = (n - t) / 2 - o, i = Math.ceil(r / 2);
  return [r, i];
}
function ma(e, t) {
  const {
    componentCls: n,
    iconCls: o
  } = e, r = `${n}-selection-overflow`, i = e.controlHeightSM, [a] = $g(e), l = t ? `${n}-${t}` : "";
  return {
    [`${n}-multiple${l}`]: {
      fontSize: e.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [r]: {
        position: "relative",
        display: "flex",
        flex: "auto",
        flexWrap: "wrap",
        maxWidth: "100%",
        "&-item": {
          flex: "none",
          alignSelf: "center",
          maxWidth: "100%",
          display: "inline-flex"
        }
      },
      // ========================= Selector =========================
      [`${n}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        // Multiple is little different that horizontal is follow the vertical
        padding: `${a - Ln}px ${Ln * 2}px`,
        borderRadius: e.borderRadius,
        [`${n}-show-search&`]: {
          cursor: "text"
        },
        [`${n}-disabled&`]: {
          background: e.colorBgContainerDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${Ln}px 0`,
          lineHeight: `${i}px`,
          content: '"\\a0"'
        }
      },
      [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: {
        paddingInlineEnd: e.fontSizeIcon + e.controlPaddingHorizontal
      },
      // ======================== Selections ========================
      [`${n}-selection-item`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        height: i,
        marginTop: Ln,
        marginBottom: Ln,
        lineHeight: `${i - e.lineWidth * 2}px`,
        background: e.colorFillSecondary,
        border: `${e.lineWidth}px solid ${e.colorSplit}`,
        borderRadius: e.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
        userSelect: "none",
        marginInlineEnd: Ln * 2,
        paddingInlineStart: e.paddingXS,
        paddingInlineEnd: e.paddingXS / 2,
        [`${n}-disabled&`]: {
          color: e.colorTextDisabled,
          borderColor: e.colorBorder,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: e.paddingXS / 2,
          overflow: "hidden",
          whiteSpace: "pre",
          textOverflow: "ellipsis"
        },
        "&-remove": g(g({}, Nl()), {
          display: "inline-block",
          color: e.colorIcon,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${o}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: e.colorIconHover
          }
        })
      },
      // ========================== Input ==========================
      [`${r}-item + ${r}-item`]: {
        [`${n}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      [`${n}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: e.inputPaddingHorizontalBase - a,
        "\n          &-input,\n          &-mirror\n        ": {
          height: i,
          fontFamily: e.fontFamily,
          lineHeight: `${i}px`,
          transition: `all ${e.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder `]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: e.inputPaddingHorizontalBase,
        insetInlineEnd: e.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${e.motionDurationSlow}`
      }
    }
  };
}
function K4(e) {
  const {
    componentCls: t
  } = e, n = we(e, {
    controlHeight: e.controlHeightSM,
    controlHeightSM: e.controlHeightXS,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), [, o] = $g(e);
  return [
    ma(e),
    // ======================== Small ========================
    // Shared
    ma(n, "sm"),
    // Padding
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInlineStart: e.controlPaddingHorizontalSM - e.lineWidth,
          insetInlineEnd: "auto"
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${t}-selection-search`]: {
          marginInlineStart: o
        }
      }
    },
    // ======================== Large ========================
    // Shared
    ma(we(e, {
      fontSize: e.fontSizeLG,
      controlHeight: e.controlHeightLG,
      controlHeightSM: e.controlHeight,
      borderRadius: e.borderRadiusLG,
      borderRadiusSM: e.borderRadius
    }), "lg")
  ];
}
function ga(e, t) {
  const {
    componentCls: n,
    inputPaddingHorizontalBase: o,
    borderRadius: r
  } = e, i = e.controlHeight - e.lineWidth * 2, a = Math.ceil(e.fontSize * 1.25), l = t ? `${n}-${t}` : "";
  return {
    [`${n}-single${l}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${n}-selector`]: g(g({}, ot(e)), {
        display: "flex",
        borderRadius: r,
        [`${n}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: o,
          insetInlineEnd: o,
          bottom: 0,
          "&-input": {
            width: "100%"
          }
        },
        [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${i}px`,
          transition: `all ${e.motionDurationSlow}`,
          // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
          "@supports (-moz-appearance: meterbar)": {
            lineHeight: `${i}px`
          }
        },
        [`${n}-selection-item`]: {
          position: "relative",
          userSelect: "none"
        },
        [`${n}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${n}-selection-item:after`,
          /* For undefined value baseline align */
          `${n}-selection-placeholder:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: {
        paddingInlineEnd: a
      },
      // Opacity selection if open
      [`&${n}-open ${n}-selection-item`]: {
        color: e.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${n}-customize-input)`]: {
        [`${n}-selector`]: {
          width: "100%",
          height: e.controlHeight,
          padding: `0 ${o}px`,
          [`${n}-selection-search-input`]: {
            height: i
          },
          "&:after": {
            lineHeight: `${i}px`
          }
        }
      },
      [`&${n}-customize-input`]: {
        [`${n}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${n}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${n}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${o}px`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function Y4(e) {
  const {
    componentCls: t
  } = e, n = e.controlPaddingHorizontalSM - e.lineWidth;
  return [
    ga(e),
    // ======================== Small ========================
    // Shared
    ga(we(e, {
      controlHeight: e.controlHeightSM,
      borderRadius: e.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selection-search`]: {
            insetInlineStart: n,
            insetInlineEnd: n
          },
          [`${t}-selector`]: {
            padding: `0 ${n}px`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: n + e.fontSize * 1.5
          },
          [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: {
            paddingInlineEnd: e.fontSize * 1.5
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    ga(we(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
function Q4(e, t, n) {
  const {
    focusElCls: o,
    focus: r,
    borderElCls: i
  } = n, a = i ? "> *" : "", l = ["hover", r ? "focus" : null, "active"].filter(Boolean).map((s) => `&:${s} ${a}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: -e.lineWidth
    },
    "&-item": g(g({
      [l]: {
        zIndex: 2
      }
    }, o ? {
      [`&${o}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${a}`]: {
        zIndex: 0
      }
    })
  };
}
function Z4(e, t, n) {
  const {
    borderElCls: o
  } = n, r = o ? `> ${o}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${r}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${r}, &${e}-sm ${r}, &${e}-lg ${r}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${r}, &${e}-sm ${r}, &${e}-lg ${r}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Ps(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, o = `${n}-compact`;
  return {
    [o]: g(g({}, Q4(e, o, t)), Z4(n, o, t))
  };
}
const J4 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    position: "relative",
    backgroundColor: e.colorBgContainer,
    border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
    transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${t}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit"
      }
    },
    [`${t}-disabled&`]: {
      color: e.colorTextDisabled,
      background: e.colorBgContainerDisabled,
      cursor: "not-allowed",
      [`${t}-multiple&`]: {
        background: e.colorBgContainerDisabled
      },
      input: {
        cursor: "not-allowed"
      }
    }
  };
}, va = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const {
    componentCls: o,
    borderHoverColor: r,
    outlineColor: i,
    antCls: a
  } = t, l = n ? {
    [`${o}-selector`]: {
      borderColor: r
    }
  } : {};
  return {
    [e]: {
      [`&:not(${o}-disabled):not(${o}-customize-input):not(${a}-pagination-size-changer)`]: g(g({}, l), {
        [`${o}-focused& ${o}-selector`]: {
          borderColor: r,
          boxShadow: `0 0 0 ${t.controlOutlineWidth}px ${i}`,
          borderInlineEndWidth: `${t.controlLineWidth}px !important`,
          outline: 0
        },
        [`&:hover ${o}-selector`]: {
          borderColor: r,
          borderInlineEndWidth: `${t.controlLineWidth}px !important`
        }
      })
    }
  };
}, eP = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      "&::-webkit-search-cancel-button": {
        display: "none",
        "-webkit-appearance": "none"
      }
    }
  };
}, tP = (e) => {
  const {
    componentCls: t,
    inputPaddingHorizontalBase: n,
    iconCls: o
  } = e;
  return {
    [t]: g(g({}, ot(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${t}-customize-input) ${t}-selector`]: g(g({}, J4(e)), eP(e)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${t}-selection-item`]: g({
        flex: 1,
        fontWeight: "normal"
      }, Wo),
      // ======================= Placeholder =======================
      [`${t}-selection-placeholder`]: g(g({}, Wo), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${t}-arrow`]: g(g({}, Nl()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: n,
        height: e.fontSizeIcon,
        marginTop: -e.fontSizeIcon / 2,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        [o]: {
          verticalAlign: "top",
          transition: `transform ${e.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${t}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${t}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Clear ==========================
      [`${t}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: n,
        zIndex: 1,
        display: "inline-block",
        width: e.fontSizeIcon,
        height: e.fontSizeIcon,
        marginTop: -e.fontSizeIcon / 2,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        background: e.colorBgContainer,
        cursor: "pointer",
        opacity: 0,
        transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
        textRendering: "auto",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: e.colorTextTertiary
        }
      },
      "&:hover": {
        [`${t}-clear`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${t}-has-feedback`]: {
      [`${t}-clear`]: {
        insetInlineEnd: n + e.fontSize + e.paddingXXS
      }
    }
  };
}, nP = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    {
      [t]: {
        // ==================== BorderLess ====================
        [`&-borderless ${t}-selector`]: {
          backgroundColor: "transparent !important",
          borderColor: "transparent !important",
          boxShadow: "none !important"
        },
        // ==================== In Form ====================
        [`&${t}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    tP(e),
    // Single
    Y4(e),
    // Multiple
    K4(e),
    // Dropdown
    q4(e),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${t}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==                     Status                      ==
    // =====================================================
    va(t, we(e, {
      borderHoverColor: e.colorPrimaryHover,
      outlineColor: e.controlOutline
    })),
    va(`${t}-status-error`, we(e, {
      borderHoverColor: e.colorErrorHover,
      outlineColor: e.colorErrorOutline
    }), !0),
    va(`${t}-status-warning`, we(e, {
      borderHoverColor: e.colorWarningHover,
      outlineColor: e.colorWarningOutline
    }), !0),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Ps(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, oP = Ge("Select", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const o = we(e, {
    rootPrefixCls: n,
    inputPaddingHorizontalBase: e.paddingSM - 1
  });
  return [nP(o)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
})), rP = () => g(g({}, Ue(Xm(), ["inputIcon", "mode", "getInputElement", "getRawInputElement", "backfill"])), {
  value: Ye([Array, Object, String, Number]),
  defaultValue: Ye([Array, Object, String, Number]),
  notFoundContent: V.any,
  suffixIcon: V.any,
  itemIcon: V.any,
  size: Te(),
  mode: Te(),
  bordered: Ce(!0),
  transitionName: String,
  choiceTransitionName: Te(""),
  popupClassName: String,
  /** @deprecated Please use `popupClassName` instead */
  dropdownClassName: String,
  placement: Te(),
  status: Te(),
  "onUpdate:value": se()
}), Sd = "SECRET_COMBOBOX_MODE_DO_NOT_USE", Et = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ASelect",
  Option: ss,
  OptGroup: cs,
  inheritAttrs: !1,
  props: Be(rP(), {
    listHeight: 256,
    listItemHeight: 24
  }),
  SECRET_COMBOBOX_MODE_DO_NOT_USE: Sd,
  slots: Object,
  setup(e, t) {
    let {
      attrs: n,
      emit: o,
      slots: r,
      expose: i
    } = t;
    const a = te(), l = or(), s = sn.useInject(), c = T(() => Ti(s.status, e.status)), u = () => {
      var Y;
      (Y = a.value) === null || Y === void 0 || Y.focus();
    }, d = () => {
      var Y;
      (Y = a.value) === null || Y === void 0 || Y.blur();
    }, f = (Y) => {
      var K;
      (K = a.value) === null || K === void 0 || K.scrollTo(Y);
    }, p = T(() => {
      const {
        mode: Y
      } = e;
      if (Y !== "combobox")
        return Y === Sd ? "combobox" : Y;
    });
    process.env.NODE_ENV !== "production" && vt(!e.dropdownClassName, "Select", "`dropdownClassName` is deprecated. Please use `popupClassName` instead.");
    const {
      prefixCls: h,
      direction: m,
      configProvider: w,
      renderEmpty: b,
      size: C,
      getPrefixCls: S,
      getPopupContainer: x,
      disabled: $,
      select: O
    } = Se("select", e), {
      compactSize: y,
      compactItemClassnames: I
    } = Cs(h, m), E = T(() => y.value || C.value), R = Tn(), _ = T(() => {
      var Y;
      return (Y = $.value) !== null && Y !== void 0 ? Y : R.value;
    }), [N, F] = oP(h), j = T(() => S()), P = T(() => e.placement !== void 0 ? e.placement : m.value === "rtl" ? "bottomRight" : "bottomLeft"), M = T(() => ln(j.value, LS(P.value), e.transitionName)), L = T(() => oe({
      [`${h.value}-lg`]: E.value === "large",
      [`${h.value}-sm`]: E.value === "small",
      [`${h.value}-rtl`]: m.value === "rtl",
      [`${h.value}-borderless`]: !e.bordered,
      [`${h.value}-in-form-item`]: s.isFormItemInput
    }, Qn(h.value, c.value, s.hasFeedback), I.value, F.value)), H = function() {
      for (var Y = arguments.length, K = new Array(Y), W = 0; W < Y; W++)
        K[W] = arguments[W];
      o("update:value", K[0]), o("change", ...K), l.onFieldChange();
    }, A = (Y) => {
      o("blur", Y), l.onFieldBlur();
    };
    i({
      blur: d,
      focus: u,
      scrollTo: f
    });
    const z = T(() => p.value === "multiple" || p.value === "tags"), q = T(() => e.showArrow !== void 0 ? e.showArrow : e.loading || !(z.value || p.value === "combobox"));
    return () => {
      var Y, K, W, G;
      const {
        notFoundContent: ee,
        listHeight: re = 256,
        listItemHeight: ie = 24,
        popupClassName: X,
        dropdownClassName: B,
        virtual: U,
        dropdownMatchSelectWidth: ne,
        id: Q = l.id.value,
        placeholder: le = (Y = r.placeholder) === null || Y === void 0 ? void 0 : Y.call(r),
        showArrow: ve
      } = e, {
        hasFeedback: he,
        feedbackIcon: De
      } = s;
      let ye;
      ee !== void 0 ? ye = ee : r.notFoundContent ? ye = r.notFoundContent() : p.value === "combobox" ? ye = null : ye = (b == null ? void 0 : b("Select")) || v(Hl, {
        componentName: "Select"
      }, null);
      const {
        suffixIcon: ke,
        itemIcon: qe,
        removeIcon: sr,
        clearIcon: Wi
      } = e$(g(g({}, e), {
        multiple: z.value,
        prefixCls: h.value,
        hasFeedback: he,
        feedbackIcon: De,
        showArrow: q.value
      }), r), Fn = Ue(e, ["prefixCls", "suffixIcon", "itemIcon", "removeIcon", "clearIcon", "size", "bordered", "status"]), Dn = oe(X || B, {
        [`${h.value}-dropdown-${m.value}`]: m.value === "rtl"
      }, F.value);
      return N(v(aC, D(D(D({
        ref: a,
        virtual: U,
        dropdownMatchSelectWidth: ne
      }, Fn), n), {}, {
        showSearch: (K = e.showSearch) !== null && K !== void 0 ? K : (W = O == null ? void 0 : O.value) === null || W === void 0 ? void 0 : W.showSearch,
        placeholder: le,
        listHeight: re,
        listItemHeight: ie,
        mode: p.value,
        prefixCls: h.value,
        direction: m.value,
        inputIcon: ke,
        menuItemSelectedIcon: qe,
        removeIcon: sr,
        clearIcon: Wi,
        notFoundContent: ye,
        class: [L.value, n.class],
        getPopupContainer: x == null ? void 0 : x.value,
        dropdownClassName: Dn,
        onChange: H,
        onBlur: A,
        id: Q,
        dropdownRender: Fn.dropdownRender || r.dropdownRender,
        transitionName: M.value,
        children: (G = r.default) === null || G === void 0 ? void 0 : G.call(r),
        tagRender: e.tagRender || r.tagRender,
        optionLabelRender: r.optionLabel,
        maxTagPlaceholder: e.maxTagPlaceholder || r.maxTagPlaceholder,
        showArrow: he || ve,
        disabled: _.value
      }), {
        option: r.option
      }));
    };
  }
});
Et.install = function(e) {
  return e.component(Et.name, Et), e.component(Et.Option.displayName, Et.Option), e.component(Et.OptGroup.displayName, Et.OptGroup), e;
};
Et.Option;
Et.OptGroup;
var iP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
function xd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      aP(e, r, n[r]);
    });
  }
  return e;
}
function aP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Is = function(t, n) {
  var o = xd({}, t, n.attrs);
  return v(de, xd({}, o, {
    icon: iP
  }), null);
};
Is.displayName = "CheckCircleOutlined";
Is.inheritAttrs = !1;
var lP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
function Cd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      sP(e, r, n[r]);
    });
  }
  return e;
}
function sP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ts = function(t, n) {
  var o = Cd({}, t, n.attrs);
  return v(de, Cd({}, o, {
    icon: lP
  }), null);
};
Ts.displayName = "ExclamationCircleOutlined";
Ts.inheritAttrs = !1;
var cP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
function $d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      uP(e, r, n[r]);
    });
  }
  return e;
}
function uP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Es = function(t, n) {
  var o = $d({}, t, n.attrs);
  return v(de, $d({}, o, {
    icon: cP
  }), null);
};
Es.displayName = "InfoCircleOutlined";
Es.inheritAttrs = !1;
var dP = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" };
function Od(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      fP(e, r, n[r]);
    });
  }
  return e;
}
function fP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _s = function(t, n) {
  var o = Od({}, t, n.attrs);
  return v(de, Od({}, o, {
    icon: dP
  }), null);
};
_s.displayName = "CloseCircleOutlined";
_s.inheritAttrs = !1;
var pP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Pd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      mP(e, r, n[r]);
    });
  }
  return e;
}
function mP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var qt = function(t, n) {
  var o = Pd({}, t, n.attrs);
  return v(de, Pd({}, o, {
    icon: pP
  }), null);
};
qt.displayName = "CheckCircleFilled";
qt.inheritAttrs = !1;
var gP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
function Id(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      vP(e, r, n[r]);
    });
  }
  return e;
}
function vP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Kt = function(t, n) {
  var o = Id({}, t, n.attrs);
  return v(de, Id({}, o, {
    icon: gP
  }), null);
};
Kt.displayName = "ExclamationCircleFilled";
Kt.inheritAttrs = !1;
var hP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
function Td(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      yP(e, r, n[r]);
    });
  }
  return e;
}
function yP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Rn = function(t, n) {
  var o = Td({}, t, n.attrs);
  return v(de, Td({}, o, {
    icon: hP
  }), null);
};
Rn.displayName = "InfoCircleFilled";
Rn.inheritAttrs = !1;
const xr = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"], bP = (e) => ({
  xs: `(max-width: ${e.screenXSMax}px)`,
  sm: `(min-width: ${e.screenSM}px)`,
  md: `(min-width: ${e.screenMD}px)`,
  lg: `(min-width: ${e.screenLG}px)`,
  xl: `(min-width: ${e.screenXL}px)`,
  xxl: `(min-width: ${e.screenXXL}px)`,
  xxxl: `{min-width: ${e.screenXXXL}px}`
});
function wP() {
  const [, e] = ho();
  return T(() => {
    const t = bP(e.value), n = /* @__PURE__ */ new Map();
    let o = -1, r = {};
    return {
      matchHandlers: {},
      dispatch(i) {
        return r = i, n.forEach((a) => a(r)), n.size >= 1;
      },
      subscribe(i) {
        return n.size || this.register(), o += 1, n.set(o, i), i(r), o;
      },
      unsubscribe(i) {
        n.delete(i), n.size || this.unregister();
      },
      unregister() {
        Object.keys(t).forEach((i) => {
          const a = t[i], l = this.matchHandlers[a];
          l == null || l.mql.removeListener(l == null ? void 0 : l.listener);
        }), n.clear();
      },
      register() {
        Object.keys(t).forEach((i) => {
          const a = t[i], l = (c) => {
            let {
              matches: u
            } = c;
            this.dispatch(g(g({}, r), {
              [i]: u
            }));
          }, s = window.matchMedia(a);
          s.addListener(l), this.matchHandlers[a] = {
            mql: s,
            listener: l
          }, l(s);
        });
      },
      responsiveMap: t
    };
  });
}
const dt = {
  adjustX: 1,
  adjustY: 1
}, ft = [0, 0], Og = {
  left: {
    points: ["cr", "cl"],
    overflow: dt,
    offset: [-4, 0],
    targetOffset: ft
  },
  right: {
    points: ["cl", "cr"],
    overflow: dt,
    offset: [4, 0],
    targetOffset: ft
  },
  top: {
    points: ["bc", "tc"],
    overflow: dt,
    offset: [0, -4],
    targetOffset: ft
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: dt,
    offset: [0, 4],
    targetOffset: ft
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: dt,
    offset: [0, -4],
    targetOffset: ft
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: dt,
    offset: [-4, 0],
    targetOffset: ft
  },
  topRight: {
    points: ["br", "tr"],
    overflow: dt,
    offset: [0, -4],
    targetOffset: ft
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: dt,
    offset: [4, 0],
    targetOffset: ft
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: dt,
    offset: [0, 4],
    targetOffset: ft
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: dt,
    offset: [4, 0],
    targetOffset: ft
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: dt,
    offset: [0, 4],
    targetOffset: ft
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: dt,
    offset: [-4, 0],
    targetOffset: ft
  }
}, SP = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: V.any
}, xP = Z({
  compatConfig: {
    MODE: 3
  },
  name: "TooltipContent",
  props: SP,
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var o;
      return v("div", {
        class: `${e.prefixCls}-inner`,
        id: e.id,
        role: "tooltip",
        style: e.overlayInnerStyle
      }, [(o = n.overlay) === null || o === void 0 ? void 0 : o.call(n)]);
    };
  }
});
var CP = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function Ed() {
}
const $P = Z({
  compatConfig: {
    MODE: 3
  },
  name: "Tooltip",
  inheritAttrs: !1,
  props: {
    trigger: V.any.def(["hover"]),
    defaultVisible: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    placement: V.string.def("right"),
    transitionName: String,
    animation: V.any,
    afterVisibleChange: V.func.def(() => {
    }),
    overlayStyle: {
      type: Object,
      default: void 0
    },
    overlayClassName: String,
    prefixCls: V.string.def("rc-tooltip"),
    mouseEnterDelay: V.number.def(0.1),
    mouseLeaveDelay: V.number.def(0.1),
    getPopupContainer: Function,
    destroyTooltipOnHide: {
      type: Boolean,
      default: !1
    },
    align: V.object.def(() => ({})),
    arrowContent: V.any.def(null),
    tipId: String,
    builtinPlacements: V.object,
    overlayInnerStyle: {
      type: Object,
      default: void 0
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    onVisibleChange: Function,
    onPopupAlign: Function,
    arrow: {
      type: Boolean,
      default: !0
    }
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      expose: r
    } = t;
    const i = k(), a = () => {
      const {
        prefixCls: u,
        tipId: d,
        overlayInnerStyle: f
      } = e;
      return [e.arrow ? v("div", {
        class: `${u}-arrow`,
        key: "arrow"
      }, [Jh(n, e, "arrowContent")]) : null, v(xP, {
        key: "content",
        prefixCls: u,
        id: d,
        overlayInnerStyle: f
      }, {
        overlay: n.overlay
      })];
    };
    r({
      getPopupDomNode: () => i.value.getPopupDomNode(),
      triggerDOM: i,
      forcePopupAlign: () => {
        var u;
        return (u = i.value) === null || u === void 0 ? void 0 : u.forcePopupAlign();
      }
    });
    const s = k(!1), c = k(!1);
    return Pe(() => {
      const {
        destroyTooltipOnHide: u
      } = e;
      if (typeof u == "boolean")
        s.value = u;
      else if (u && typeof u == "object") {
        const {
          keepParent: d
        } = u;
        s.value = d === !0, c.value = d === !1;
      }
    }), () => {
      const {
        overlayClassName: u,
        trigger: d,
        mouseEnterDelay: f,
        mouseLeaveDelay: p,
        overlayStyle: h,
        prefixCls: m,
        afterVisibleChange: w,
        transitionName: b,
        animation: C,
        placement: S,
        align: x,
        destroyTooltipOnHide: $,
        defaultVisible: O
      } = e, y = CP(e, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"]), I = g({}, y);
      e.visible !== void 0 && (I.popupVisible = e.visible);
      const E = g(g(g({
        popupClassName: u,
        prefixCls: m,
        action: d,
        builtinPlacements: Og,
        popupPlacement: S,
        popupAlign: x,
        afterPopupVisibleChange: w,
        popupTransitionName: b,
        popupAnimation: C,
        defaultPopupVisible: O,
        destroyPopupOnHide: s.value,
        autoDestroy: c.value,
        mouseLeaveDelay: p,
        popupStyle: h,
        mouseEnterDelay: f
      }, I), o), {
        onPopupVisibleChange: e.onVisibleChange || Ed,
        onPopupAlign: e.onPopupAlign || Ed,
        ref: i,
        arrow: !!e.arrow,
        popup: a()
      });
      return v(Dm, E, {
        default: n.default
      });
    };
  }
}), As = () => ({
  trigger: [String, Array],
  open: {
    type: Boolean,
    default: void 0
  },
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: void 0
  },
  placement: String,
  color: String,
  transitionName: String,
  overlayStyle: pe(),
  overlayInnerStyle: pe(),
  overlayClassName: String,
  openClassName: String,
  prefixCls: String,
  mouseEnterDelay: Number,
  mouseLeaveDelay: Number,
  getPopupContainer: Function,
  /**@deprecated Please use `arrow={{ pointAtCenter: true }}` instead. */
  arrowPointAtCenter: {
    type: Boolean,
    default: void 0
  },
  arrow: {
    type: [Boolean, Object],
    default: !0
  },
  autoAdjustOverflow: {
    type: [Boolean, Object],
    default: void 0
  },
  destroyTooltipOnHide: {
    type: Boolean,
    default: void 0
  },
  align: pe(),
  builtinPlacements: pe(),
  children: Array,
  /** @deprecated Please use `onOpenChange` instead. */
  onVisibleChange: Function,
  /** @deprecated Please use `onUpdate:open` instead. */
  "onUpdate:visible": Function,
  onOpenChange: Function,
  "onUpdate:open": Function
}), OP = {
  adjustX: 1,
  adjustY: 1
}, _d = {
  adjustX: 0,
  adjustY: 0
}, PP = [0, 0];
function Ad(e) {
  return typeof e == "boolean" ? e ? OP : _d : g(g({}, _d), e);
}
function IP(e) {
  const {
    arrowWidth: t = 4,
    horizontalArrowShift: n = 16,
    verticalArrowShift: o = 8,
    autoAdjustOverflow: r,
    arrowPointAtCenter: i
  } = e, a = {
    left: {
      points: ["cr", "cl"],
      offset: [-4, 0]
    },
    right: {
      points: ["cl", "cr"],
      offset: [4, 0]
    },
    top: {
      points: ["bc", "tc"],
      offset: [0, -4]
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4]
    },
    topLeft: {
      points: ["bl", "tc"],
      offset: [-(n + t), -4]
    },
    leftTop: {
      points: ["tr", "cl"],
      offset: [-4, -(o + t)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [n + t, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(o + t)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [n + t, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, o + t]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-(n + t), 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, o + t]
    }
  };
  return Object.keys(a).forEach((l) => {
    a[l] = i ? g(g({}, a[l]), {
      overflow: Ad(r),
      targetOffset: PP
    }) : g(g({}, Og[l]), {
      overflow: Ad(r)
    }), a[l].ignoreShake = !0;
  }), a;
}
function TP() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  for (let t = 0, n = e.length; t < n; t++)
    if (e[t] !== void 0)
      return e[t];
}
const EP = Vo.map((e) => `${e}-inverse`);
function _P(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [...EP, ...Vo].includes(e) : Vo.includes(e);
}
function AP(e, t) {
  const n = _P(t), o = oe({
    [`${e}-${t}`]: t && n
  }), r = {}, i = {};
  return t && !n && (r.background = t, i["--antd-arrow-background-color"] = t), {
    className: o,
    overlayStyle: r,
    arrowStyle: i
  };
}
function Cr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return e.map((n) => `${t}${n}`).join(",");
}
const Pg = 8;
function MP(e) {
  const t = Pg, {
    sizePopupArrow: n,
    contentRadius: o,
    borderRadiusOuter: r,
    limitVerticalRadius: i
  } = e, a = n / 2 - Math.ceil(r * (Math.sqrt(2) - 1)), l = (o > 12 ? o + 2 : 12) - a, s = i ? t - a : l;
  return {
    dropdownArrowOffset: l,
    dropdownArrowOffsetVertical: s
  };
}
function Ig(e, t) {
  const {
    componentCls: n,
    sizePopupArrow: o,
    marginXXS: r,
    borderRadiusXS: i,
    borderRadiusOuter: a,
    boxShadowPopoverArrow: l
  } = e, {
    colorBg: s,
    showArrowCls: c,
    contentRadius: u = e.borderRadiusLG,
    limitVerticalRadius: d
  } = t, {
    dropdownArrowOffsetVertical: f,
    dropdownArrowOffset: p
  } = MP({
    sizePopupArrow: o,
    contentRadius: u,
    borderRadiusOuter: a,
    limitVerticalRadius: d
  }), h = o / 2 + r;
  return {
    [n]: {
      // ============================ Basic ============================
      [`${n}-arrow`]: [g(g({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, Dy(o, i, a, s, l)), {
        "&:before": {
          background: s
        }
      })],
      // ========================== Placement ==========================
      // Here handle the arrow position and rotate stuff
      // >>>>> Top
      [[`&-placement-top ${n}-arrow`, `&-placement-topLeft ${n}-arrow`, `&-placement-topRight ${n}-arrow`].join(",")]: {
        bottom: 0,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: p
        }
      },
      [`&-placement-topRight ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: p
        }
      },
      // >>>>> Bottom
      [[`&-placement-bottom ${n}-arrow`, `&-placement-bottomLeft ${n}-arrow`, `&-placement-bottomRight ${n}-arrow`].join(",")]: {
        top: 0,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      [`&-placement-bottomLeft ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: p
        }
      },
      [`&-placement-bottomRight ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: p
        }
      },
      // >>>>> Left
      [[`&-placement-left ${n}-arrow`, `&-placement-leftTop ${n}-arrow`, `&-placement-leftBottom ${n}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: 0
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop ${n}-arrow`]: {
        top: f
      },
      [`&-placement-leftBottom ${n}-arrow`]: {
        bottom: f
      },
      // >>>>> Right
      [[`&-placement-right ${n}-arrow`, `&-placement-rightTop ${n}-arrow`, `&-placement-rightBottom ${n}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: 0
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop ${n}-arrow`]: {
        top: f
      },
      [`&-placement-rightBottom ${n}-arrow`]: {
        bottom: f
      },
      // =========================== Offset ============================
      // Offset the popover to account for the dropdown arrow
      // >>>>> Top
      [Cr(["&-placement-topLeft", "&-placement-top", "&-placement-topRight"].map((m) => m += ":not(&-arrow-hidden)"), c)]: {
        paddingBottom: h
      },
      // >>>>> Bottom
      [Cr(["&-placement-bottomLeft", "&-placement-bottom", "&-placement-bottomRight"].map((m) => m += ":not(&-arrow-hidden)"), c)]: {
        paddingTop: h
      },
      // >>>>> Left
      [Cr(["&-placement-leftTop", "&-placement-left", "&-placement-leftBottom"].map((m) => m += ":not(&-arrow-hidden)"), c)]: {
        paddingRight: {
          _skip_check_: !0,
          value: h
        }
      },
      // >>>>> Right
      [Cr(["&-placement-rightTop", "&-placement-right", "&-placement-rightBottom"].map((m) => m += ":not(&-arrow-hidden)"), c)]: {
        paddingLeft: {
          _skip_check_: !0,
          value: h
        }
      }
    }
  };
}
const RP = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: n,
    tooltipColor: o,
    tooltipBg: r,
    tooltipBorderRadius: i,
    zIndexPopup: a,
    controlHeight: l,
    boxShadowSecondary: s,
    paddingSM: c,
    paddingXS: u,
    tooltipRadiusOuter: d
  } = e;
  return [
    {
      [t]: g(g(g(g({}, ot(e)), {
        position: "absolute",
        zIndex: a,
        display: "block",
        "&": [{
          width: "max-content"
        }, {
          width: "intrinsic"
        }],
        maxWidth: n,
        visibility: "visible",
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": r,
        // Wrapper for the tooltip content
        [`${t}-inner`]: {
          minWidth: l,
          minHeight: l,
          padding: `${c / 2}px ${u}px`,
          color: o,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: r,
          borderRadius: i,
          boxShadow: s
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: Math.min(i, Pg)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), Ny(e, (f, p) => {
        let {
          darkColor: h
        } = p;
        return {
          [`&${t}-${f}`]: {
            [`${t}-inner`]: {
              backgroundColor: h
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": h
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    Ig(we(e, {
      borderRadiusOuter: d
    }), {
      colorBg: "var(--antd-arrow-background-color)",
      showArrowCls: "",
      contentRadius: i,
      limitVerticalRadius: !0
    }),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none"
      }
    }
  ];
}, FP = (e, t) => Ge("Tooltip", (o) => {
  if ((t == null ? void 0 : t.value) === !1)
    return [];
  const {
    borderRadius: r,
    colorTextLightSolid: i,
    colorBgDefault: a,
    borderRadiusOuter: l
  } = o, s = we(o, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: i,
    tooltipBorderRadius: r,
    tooltipBg: a,
    tooltipRadiusOuter: l > 4 ? 4 : l
  });
  return [RP(s), Os(o, "zoom-big-fast")];
}, (o) => {
  let {
    zIndexPopupBase: r,
    colorBgSpotlight: i
  } = o;
  return {
    zIndexPopup: r + 70,
    colorBgDefault: i
  };
})(e), DP = (e, t) => {
  const n = {}, o = g({}, e);
  return t.forEach((r) => {
    e && r in e && (n[r] = e[r], delete o[r]);
  }), {
    picked: n,
    omitted: o
  };
}, NP = () => g(g({}, As()), {
  title: V.any
}), Tg = () => ({
  trigger: "hover",
  align: {},
  placement: "top",
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: !1,
  autoAdjustOverflow: !0
}), LP = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ATooltip",
  inheritAttrs: !1,
  props: Be(NP(), {
    trigger: "hover",
    align: {},
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: !1,
    autoAdjustOverflow: !0
  }),
  slots: Object,
  // emits: ['update:visible', 'visibleChange'],
  setup(e, t) {
    let {
      slots: n,
      emit: o,
      attrs: r,
      expose: i
    } = t;
    process.env.NODE_ENV !== "production" && [["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((R) => {
      let [_, N] = R;
      et(e[_] === void 0, "Tooltip", `\`${_}\` is deprecated, please use \`${N}\` instead.`);
    });
    const {
      prefixCls: a,
      getPopupContainer: l,
      direction: s,
      rootPrefixCls: c
    } = Se("tooltip", e), u = T(() => {
      var R;
      return (R = e.open) !== null && R !== void 0 ? R : e.visible;
    }), d = te(TP([e.open, e.visible])), f = te();
    let p;
    ae(u, (R) => {
      $e.cancel(p), p = $e(() => {
        d.value = !!R;
      });
    });
    const h = () => {
      var R;
      const _ = (R = e.title) !== null && R !== void 0 ? R : n.title;
      return !_ && _ !== 0;
    }, m = (R) => {
      const _ = h();
      u.value === void 0 && (d.value = _ ? !1 : R), _ || (o("update:visible", R), o("visibleChange", R), o("update:open", R), o("openChange", R));
    };
    i({
      getPopupDomNode: () => f.value.getPopupDomNode(),
      open: d,
      forcePopupAlign: () => {
        var R;
        return (R = f.value) === null || R === void 0 ? void 0 : R.forcePopupAlign();
      }
    });
    const b = T(() => {
      var R;
      const {
        builtinPlacements: _,
        autoAdjustOverflow: N,
        arrow: F,
        arrowPointAtCenter: j
      } = e;
      let P = j;
      return typeof F == "object" && (P = (R = F.pointAtCenter) !== null && R !== void 0 ? R : j), _ || IP({
        arrowPointAtCenter: P,
        autoAdjustOverflow: N
      });
    }), C = (R) => R || R === "", S = (R) => {
      const _ = R.type;
      if (typeof _ == "object" && R.props && ((_.__ANT_BUTTON === !0 || _ === "button") && C(R.props.disabled) || _.__ANT_SWITCH === !0 && (C(R.props.disabled) || C(R.props.loading)) || _.__ANT_RADIO === !0 && C(R.props.disabled))) {
        const {
          picked: N,
          omitted: F
        } = DP(Qh(R), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), j = g(g({
          display: "inline-block"
        }, N), {
          cursor: "not-allowed",
          lineHeight: 1,
          width: R.props && R.props.block ? "100%" : void 0
        }), P = g(g({}, F), {
          pointerEvents: "none"
        }), M = tt(R, {
          style: P
        }, !0);
        return v("span", {
          style: j,
          class: `${a.value}-disabled-compatible-wrapper`
        }, [M]);
      }
      return R;
    }, x = () => {
      var R, _;
      return (R = e.title) !== null && R !== void 0 ? R : (_ = n.title) === null || _ === void 0 ? void 0 : _.call(n);
    }, $ = (R, _) => {
      const N = b.value, F = Object.keys(N).find((j) => {
        var P, M;
        return N[j].points[0] === ((P = _.points) === null || P === void 0 ? void 0 : P[0]) && N[j].points[1] === ((M = _.points) === null || M === void 0 ? void 0 : M[1]);
      });
      if (F) {
        const j = R.getBoundingClientRect(), P = {
          top: "50%",
          left: "50%"
        };
        F.indexOf("top") >= 0 || F.indexOf("Bottom") >= 0 ? P.top = `${j.height - _.offset[1]}px` : (F.indexOf("Top") >= 0 || F.indexOf("bottom") >= 0) && (P.top = `${-_.offset[1]}px`), F.indexOf("left") >= 0 || F.indexOf("Right") >= 0 ? P.left = `${j.width - _.offset[0]}px` : (F.indexOf("right") >= 0 || F.indexOf("Left") >= 0) && (P.left = `${-_.offset[0]}px`), R.style.transformOrigin = `${P.left} ${P.top}`;
      }
    }, O = T(() => AP(a.value, e.color)), y = T(() => r["data-popover-inject"]), [I, E] = FP(a, T(() => !y.value));
    return () => {
      var R, _;
      const {
        openClassName: N,
        overlayClassName: F,
        overlayStyle: j,
        overlayInnerStyle: P
      } = e;
      let M = (_ = ht((R = n.default) === null || R === void 0 ? void 0 : R.call(n))) !== null && _ !== void 0 ? _ : null;
      M = M.length === 1 ? M[0] : M;
      let L = d.value;
      if (u.value === void 0 && h() && (L = !1), !M)
        return null;
      const H = S(zt(M) && !Zh(M) ? M : v("span", null, [M])), A = oe({
        [N || `${a.value}-open`]: !0,
        [H.props && H.props.class]: H.props && H.props.class
      }), z = oe(F, {
        [`${a.value}-rtl`]: s.value === "rtl"
      }, O.value.className, E.value), q = g(g({}, O.value.overlayStyle), P), Y = O.value.arrowStyle, K = g(g(g({}, r), e), {
        prefixCls: a.value,
        arrow: !!e.arrow,
        getPopupContainer: l == null ? void 0 : l.value,
        builtinPlacements: b.value,
        visible: L,
        ref: f,
        overlayClassName: z,
        overlayStyle: g(g({}, Y), j),
        overlayInnerStyle: q,
        onVisibleChange: m,
        onPopupAlign: $,
        transitionName: ln(c.value, "zoom-big-fast", e.transitionName)
      });
      return I(v($P, K, {
        default: () => [d.value ? tt(H, {
          class: A
        }) : H],
        arrowContent: () => v("span", {
          class: `${a.value}-arrow-content`
        }, null),
        overlay: x
      }));
    };
  }
}), uo = In(LP), jP = (e) => {
  const {
    componentCls: t,
    popoverBg: n,
    popoverColor: o,
    width: r,
    fontWeightStrong: i,
    popoverPadding: a,
    boxShadowSecondary: l,
    colorTextHeading: s,
    borderRadiusLG: c,
    zIndexPopup: u,
    marginXS: d,
    colorBgElevated: f
  } = e;
  return [
    {
      [t]: g(g({}, ot(e)), {
        position: "absolute",
        top: 0,
        // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
        left: {
          _skip_check_: !0,
          value: 0
        },
        zIndex: u,
        fontWeight: "normal",
        whiteSpace: "normal",
        textAlign: "start",
        cursor: "auto",
        userSelect: "text",
        "--antd-arrow-background-color": f,
        "&-rtl": {
          direction: "rtl"
        },
        "&-hidden": {
          display: "none"
        },
        [`${t}-content`]: {
          position: "relative"
        },
        [`${t}-inner`]: {
          backgroundColor: n,
          backgroundClip: "padding-box",
          borderRadius: c,
          boxShadow: l,
          padding: a
        },
        [`${t}-title`]: {
          minWidth: r,
          marginBottom: d,
          color: s,
          fontWeight: i
        },
        [`${t}-inner-content`]: {
          color: o
        }
      })
    },
    // Arrow Style
    Ig(e, {
      colorBg: "var(--antd-arrow-background-color)"
    }),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        [`${t}-content`]: {
          display: "inline-block"
        }
      }
    }
  ];
}, HP = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: Vo.map((n) => {
      const o = e[`${n}-6`];
      return {
        [`&${t}-${n}`]: {
          "--antd-arrow-background-color": o,
          [`${t}-inner`]: {
            backgroundColor: o
          },
          [`${t}-arrow`]: {
            background: "transparent"
          }
        }
      };
    })
  };
}, BP = (e) => {
  const {
    componentCls: t,
    lineWidth: n,
    lineType: o,
    colorSplit: r,
    paddingSM: i,
    controlHeight: a,
    fontSize: l,
    lineHeight: s,
    padding: c
  } = e, u = a - Math.round(l * s), d = u / 2, f = u / 2 - n, p = c;
  return {
    [t]: {
      [`${t}-inner`]: {
        padding: 0
      },
      [`${t}-title`]: {
        margin: 0,
        padding: `${d}px ${p}px ${f}px`,
        borderBottom: `${n}px ${o} ${r}`
      },
      [`${t}-inner-content`]: {
        padding: `${i}px ${p}px`
      }
    }
  };
}, zP = Ge("Popover", (e) => {
  const {
    colorBgElevated: t,
    colorText: n,
    wireframe: o
  } = e, r = we(e, {
    popoverBg: t,
    popoverColor: n,
    popoverPadding: 12
    // Fixed Value
  });
  return [jP(r), HP(r), o && BP(r), Os(r, "zoom-big")];
}, (e) => {
  let {
    zIndexPopupBase: t
  } = e;
  return {
    zIndexPopup: t + 30,
    width: 177
  };
}), VP = () => g(g({}, As()), {
  content: Re(),
  title: Re()
}), WP = Z({
  compatConfig: {
    MODE: 3
  },
  name: "APopover",
  inheritAttrs: !1,
  props: Be(VP(), g(g({}, Tg()), {
    trigger: "hover",
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1
  })),
  setup(e, t) {
    let {
      expose: n,
      slots: o,
      attrs: r
    } = t;
    const i = te();
    et(e.visible === void 0, "popover", "`visible` will be removed in next major version, please use `open` instead."), n({
      getPopupDomNode: () => {
        var f, p;
        return (p = (f = i.value) === null || f === void 0 ? void 0 : f.getPopupDomNode) === null || p === void 0 ? void 0 : p.call(f);
      }
    });
    const {
      prefixCls: a,
      configProvider: l
    } = Se("popover", e), [s, c] = zP(a), u = T(() => l.getPrefixCls()), d = () => {
      var f, p;
      const {
        title: h = ht((f = o.title) === null || f === void 0 ? void 0 : f.call(o)),
        content: m = ht((p = o.content) === null || p === void 0 ? void 0 : p.call(o))
      } = e, w = !!(Array.isArray(h) ? h.length : h), b = !!(Array.isArray(m) ? m.length : h);
      return !w && !b ? null : v(Ie, null, [w && v("div", {
        class: `${a.value}-title`
      }, [h]), v("div", {
        class: `${a.value}-inner-content`
      }, [m])]);
    };
    return () => {
      const f = oe(e.overlayClassName, c.value);
      return s(v(uo, D(D(D({}, Ue(e, ["title", "content"])), r), {}, {
        prefixCls: a.value,
        ref: i,
        overlayClassName: f,
        transitionName: ln(u.value, "zoom-big", e.transitionName),
        "data-popover-inject": !0
      }), {
        title: d,
        default: o.default
      }));
    };
  }
}), UP = In(WP), GP = (e) => {
  const {
    componentCls: t,
    colorPrimary: n
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${n})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        }
      }
    }
  };
}, kP = Ge("Wave", (e) => [GP(e)]);
function XP(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function ha(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && XP(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function qP(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: o
  } = getComputedStyle(e);
  return ha(t) ? t : ha(n) ? n : ha(o) ? o : null;
}
function ya(e) {
  return Number.isNaN(e) ? 0 : e;
}
const KP = Z({
  props: {
    target: pe(),
    className: String
  },
  setup(e) {
    const t = k(null), [n, o] = jt(null), [r, i] = jt([]), [a, l] = jt(0), [s, c] = jt(0), [u, d] = jt(0), [f, p] = jt(0), [h, m] = jt(!1);
    function w() {
      const {
        target: y
      } = e, I = getComputedStyle(y);
      o(qP(y));
      const E = I.position === "static", {
        borderLeftWidth: R,
        borderTopWidth: _
      } = I;
      l(E ? y.offsetLeft : ya(-parseFloat(R))), c(E ? y.offsetTop : ya(-parseFloat(_))), d(y.offsetWidth), p(y.offsetHeight);
      const {
        borderTopLeftRadius: N,
        borderTopRightRadius: F,
        borderBottomLeftRadius: j,
        borderBottomRightRadius: P
      } = I;
      i([N, F, P, j].map((M) => ya(parseFloat(M))));
    }
    let b, C, S;
    const x = () => {
      clearTimeout(S), $e.cancel(C), b == null || b.disconnect();
    }, $ = () => {
      var y;
      const I = (y = t.value) === null || y === void 0 ? void 0 : y.parentElement;
      I && (on(null, I), I.parentElement && I.parentElement.removeChild(I));
    };
    be(() => {
      x(), S = setTimeout(() => {
        $();
      }, 5e3);
      const {
        target: y
      } = e;
      y && (C = $e(() => {
        w(), m(!0);
      }), typeof ResizeObserver < "u" && (b = new ResizeObserver(w), b.observe(y)));
    }), Ae(() => {
      x();
    });
    const O = (y) => {
      y.propertyName === "opacity" && $();
    };
    return () => {
      if (!h.value)
        return null;
      const y = {
        left: `${a.value}px`,
        top: `${s.value}px`,
        width: `${u.value}px`,
        height: `${f.value}px`,
        borderRadius: r.value.map((I) => `${I}px`).join(" ")
      };
      return n && (y["--wave-color"] = n.value), v(Gt, {
        appear: !0,
        name: "wave-motion",
        appearFromClass: "wave-motion-appear",
        appearActiveClass: "wave-motion-appear",
        appearToClass: "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [v("div", {
          ref: t,
          class: e.className,
          style: y,
          onTransitionend: O
        }, null)]
      });
    };
  }
});
function YP(e, t) {
  const n = document.createElement("div");
  return n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e == null || e.insertBefore(n, e == null ? void 0 : e.firstChild), on(v(KP, {
    target: e,
    className: t
  }, null), n), () => {
    on(null, n), n.parentElement && n.parentElement.removeChild(n);
  };
}
function QP(e, t) {
  const n = Ut();
  let o;
  function r() {
    var i;
    const a = Ht(n);
    o == null || o(), !(!((i = t == null ? void 0 : t.value) === null || i === void 0) && i.disabled || !a) && (o = YP(a, e.value));
  }
  return Ae(() => {
    o == null || o();
  }), r;
}
const ZP = Z({
  compatConfig: {
    MODE: 3
  },
  name: "Wave",
  props: {
    disabled: Boolean
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = Ut(), {
      prefixCls: r,
      wave: i
    } = Se("wave", e), [, a] = kP(r), l = QP(T(() => oe(r.value, a.value)), i);
    let s;
    const c = () => {
      Ht(o).removeEventListener("click", s, !0);
    };
    return be(() => {
      ae(() => e.disabled, () => {
        c(), Fe(() => {
          const u = Ht(o);
          u == null || u.removeEventListener("click", s, !0), !(!u || u.nodeType !== 1 || e.disabled) && (s = (d) => {
            d.target.tagName === "INPUT" || !ym(d.target) || // No need wave
            !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || l();
          }, u.addEventListener("click", s, !0));
        });
      }, {
        immediate: !0,
        flush: "post"
      });
    }), Ae(() => {
      c();
    }), () => {
      var u;
      return (u = n.default) === null || u === void 0 ? void 0 : u.call(n)[0];
    };
  }
});
function ti(e) {
  return e === "danger" ? {
    danger: !0
  } : {
    type: e
  };
}
const JP = () => ({
  prefixCls: String,
  type: String,
  htmlType: {
    type: String,
    default: "button"
  },
  shape: {
    type: String
  },
  size: {
    type: String
  },
  loading: {
    type: [Boolean, Object],
    default: () => !1
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  ghost: {
    type: Boolean,
    default: void 0
  },
  block: {
    type: Boolean,
    default: void 0
  },
  danger: {
    type: Boolean,
    default: void 0
  },
  icon: V.any,
  href: String,
  target: String,
  title: String,
  onClick: Gr(),
  onMousedown: Gr()
}), Md = (e) => {
  e && (e.style.width = "0px", e.style.opacity = "0", e.style.transform = "scale(0)");
}, Rd = (e) => {
  Fe(() => {
    e && (e.style.width = `${e.scrollWidth}px`, e.style.opacity = "1", e.style.transform = "scale(1)");
  });
}, Fd = (e) => {
  e && e.style && (e.style.width = null, e.style.opacity = null, e.style.transform = null);
}, eI = Z({
  compatConfig: {
    MODE: 3
  },
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup(e) {
    return () => {
      const {
        existIcon: t,
        prefixCls: n,
        loading: o
      } = e;
      if (t)
        return v("span", {
          class: `${n}-loading-icon`
        }, [v(Ot, null, null)]);
      const r = !!o;
      return v(Gt, {
        name: `${n}-loading-icon-motion`,
        onBeforeEnter: Md,
        onEnter: Rd,
        onAfterEnter: Fd,
        onBeforeLeave: Rd,
        onLeave: (i) => {
          setTimeout(() => {
            Md(i);
          });
        },
        onAfterLeave: Fd
      }, {
        default: () => [r ? v("span", {
          class: `${n}-loading-icon`
        }, [v(Ot, null, null)]) : null]
      });
    };
  }
}), Dd = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), tI = (e) => {
  const {
    componentCls: t,
    fontSize: n,
    lineWidth: o,
    colorPrimaryHover: r,
    colorErrorHover: i
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -o,
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: n
        }
      },
      // Border Color
      Dd(`${t}-primary`, r),
      Dd(`${t}-danger`, i)
    ]
  };
};
function nI(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: -e.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function oI(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function rI(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: g(g({}, nI(e, t)), oI(e.componentCls, t))
  };
}
const iI = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: 400,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${e.lineWidth}px ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: e.lineHeight,
      color: e.colorText,
      "> span": {
        display: "inline-block"
      },
      // Leave a space between icon and text.
      [`> ${n} + span, > span + ${n}`]: {
        marginInlineStart: e.marginXS
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": g({}, Wp(e)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${t}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -e.lineWidth,
            insetInlineStart: -e.lineWidth,
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${e.lineWidth * 2}px)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -e.lineWidth,
              insetInlineStart: -e.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${e.lineWidth * 2}px)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, Wt = (e, t) => ({
  "&:not(:disabled)": {
    "&:hover": e,
    "&:active": t
  }
}), aI = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), lI = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), dl = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), ni = (e, t, n, o, r, i, a) => ({
  [`&${e}-background-ghost`]: g(g({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: n || void 0,
    boxShadow: "none"
  }, Wt(g({
    backgroundColor: "transparent"
  }, i), g({
    backgroundColor: "transparent"
  }, a))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: r || void 0
    }
  })
}), Ms = (e) => ({
  "&:disabled": g({}, dl(e))
}), Eg = (e) => g({}, Ms(e)), oi = (e) => ({
  "&:disabled": {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), _g = (e) => g(g(g(g(g({}, Eg(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), Wt({
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), ni(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: g(g(g({
    color: e.colorError,
    borderColor: e.colorError
  }, Wt({
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), ni(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Ms(e))
}), sI = (e) => g(g(g(g(g({}, Eg(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), Wt({
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), ni(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: g(g(g({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, Wt({
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), ni(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Ms(e))
}), cI = (e) => g(g({}, _g(e)), {
  borderStyle: "dashed"
}), uI = (e) => g(g(g({
  color: e.colorLink
}, Wt({
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), oi(e)), {
  [`&${e.componentCls}-dangerous`]: g(g({
    color: e.colorError
  }, Wt({
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), oi(e))
}), dI = (e) => g(g(g({}, Wt({
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), oi(e)), {
  [`&${e.componentCls}-dangerous`]: g(g({
    color: e.colorError
  }, oi(e)), Wt({
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), fI = (e) => g(g({}, dl(e)), {
  [`&${e.componentCls}:hover`]: g({}, dl(e))
}), pI = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: _g(e),
    [`${t}-primary`]: sI(e),
    [`${t}-dashed`]: cI(e),
    [`${t}-link`]: uI(e),
    [`${t}-text`]: dI(e),
    [`${t}-disabled`]: fI(e)
  };
}, Rs = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: n,
    iconCls: o,
    controlHeight: r,
    fontSize: i,
    lineHeight: a,
    lineWidth: l,
    borderRadius: s,
    buttonPaddingHorizontal: c
  } = e, u = Math.max(0, (r - i * a) / 2 - l), d = c - l, f = `${n}-icon-only`;
  return [
    // Size
    {
      [`${n}${t}`]: {
        fontSize: i,
        height: r,
        padding: `${u}px ${d}px`,
        borderRadius: s,
        [`&${f}`]: {
          width: r,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${n}-round`]: {
            width: "auto"
          },
          "> span": {
            transform: "scale(1.143)"
            // 14px -> 16px
          }
        },
        // Loading
        [`&${n}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${n}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        },
        [`&:not(${f}) ${n}-loading-icon > ${o}`]: {
          marginInlineEnd: e.marginXS
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: aI(e)
    },
    {
      [`${n}${n}-round${t}`]: lI(e)
    }
  ];
}, mI = (e) => Rs(e), gI = (e) => {
  const t = we(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM
  });
  return Rs(t, `${e.componentCls}-sm`);
}, vI = (e) => {
  const t = we(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG
  });
  return Rs(t, `${e.componentCls}-lg`);
}, hI = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, yI = Ge("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: n
  } = e, o = we(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: n
  });
  return [
    // Shared
    iI(o),
    // Size
    gI(o),
    mI(o),
    vI(o),
    // Block
    hI(o),
    // Group (type, ghost, danger, disabled, loading)
    pI(o),
    // Button Group
    tI(o),
    // Space Compact
    Ps(e, {
      focus: !1
    }),
    rI(e)
  ];
}), bI = () => ({
  prefixCls: String,
  size: {
    type: String
  }
}), Ag = ps(), fl = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: bI(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      prefixCls: o,
      direction: r
    } = Se("btn-group", e), [, , i] = ho();
    Ag.useProvide(Le({
      size: T(() => e.size)
    }));
    const a = T(() => {
      const {
        size: l
      } = e;
      let s = "";
      switch (l) {
        case "large":
          s = "lg";
          break;
        case "small":
          s = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          vt(!l, "Button.Group", "Invalid prop `size`.");
      }
      return {
        [`${o.value}`]: !0,
        [`${o.value}-${s}`]: s,
        [`${o.value}-rtl`]: r.value === "rtl",
        [i.value]: !0
      };
    });
    return () => {
      var l;
      return v("div", {
        class: a.value
      }, [Je((l = n.default) === null || l === void 0 ? void 0 : l.call(n))]);
    };
  }
}), Nd = /^[\u4e00-\u9fa5]{2}$/, Ld = Nd.test.bind(Nd);
function $r(e) {
  return e === "text" || e === "link";
}
const nt = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: Be(JP(), {
    type: "default"
  }),
  slots: Object,
  // emits: ['click', 'mousedown'],
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      emit: r,
      expose: i
    } = t;
    const {
      prefixCls: a,
      autoInsertSpaceInButton: l,
      direction: s,
      size: c
    } = Se("btn", e), [u, d] = yI(a), f = Ag.useInject(), p = Tn(), h = T(() => {
      var P;
      return (P = e.disabled) !== null && P !== void 0 ? P : p.value;
    }), m = k(null), w = k(void 0);
    let b = !1;
    const C = k(!1), S = k(!1), x = T(() => l.value !== !1), {
      compactSize: $,
      compactItemClassnames: O
    } = Cs(a, s), y = T(() => typeof e.loading == "object" && e.loading.delay ? e.loading.delay || !0 : !!e.loading);
    ae(y, (P) => {
      clearTimeout(w.value), typeof y.value == "number" ? w.value = setTimeout(() => {
        C.value = P;
      }, y.value) : C.value = P;
    }, {
      immediate: !0
    });
    const I = T(() => {
      const {
        type: P,
        shape: M = "default",
        ghost: L,
        block: H,
        danger: A
      } = e, z = a.value, q = {
        large: "lg",
        small: "sm",
        middle: void 0
      }, Y = $.value || (f == null ? void 0 : f.size) || c.value, K = Y && q[Y] || "";
      return [O.value, {
        [d.value]: !0,
        [`${z}`]: !0,
        [`${z}-${M}`]: M !== "default" && M,
        [`${z}-${P}`]: P,
        [`${z}-${K}`]: K,
        [`${z}-loading`]: C.value,
        [`${z}-background-ghost`]: L && !$r(P),
        [`${z}-two-chinese-chars`]: S.value && x.value,
        [`${z}-block`]: H,
        [`${z}-dangerous`]: !!A,
        [`${z}-rtl`]: s.value === "rtl"
      }];
    }), E = () => {
      const P = m.value;
      if (!P || l.value === !1)
        return;
      const M = P.textContent;
      b && Ld(M) ? S.value || (S.value = !0) : S.value && (S.value = !1);
    }, R = (P) => {
      if (C.value || h.value) {
        P.preventDefault();
        return;
      }
      r("click", P);
    }, _ = (P) => {
      r("mousedown", P);
    }, N = (P, M) => {
      const L = M ? " " : "";
      if (P.type === Xf) {
        let H = P.children.trim();
        return Ld(H) && (H = H.split("").join(L)), v("span", null, [H]);
      }
      return P;
    };
    return Pe(() => {
      vt(!(e.ghost && $r(e.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    }), be(E), Pn(E), Ae(() => {
      w.value && clearTimeout(w.value);
    }), i({
      focus: () => {
        var P;
        (P = m.value) === null || P === void 0 || P.focus();
      },
      blur: () => {
        var P;
        (P = m.value) === null || P === void 0 || P.blur();
      }
    }), () => {
      var P, M;
      const {
        icon: L = (P = n.icon) === null || P === void 0 ? void 0 : P.call(n)
      } = e, H = Je((M = n.default) === null || M === void 0 ? void 0 : M.call(n));
      b = H.length === 1 && !L && !$r(e.type);
      const {
        type: A,
        htmlType: z,
        href: q,
        title: Y,
        target: K
      } = e, W = C.value ? "loading" : L, G = g(g({}, o), {
        title: Y,
        disabled: h.value,
        class: [I.value, o.class, {
          [`${a.value}-icon-only`]: H.length === 0 && !!W
        }],
        onClick: R,
        onMousedown: _
      });
      h.value || delete G.disabled;
      const ee = L && !C.value ? L : v(eI, {
        existIcon: !!L,
        prefixCls: a.value,
        loading: !!C.value
      }, null), re = H.map((X) => N(X, b && x.value));
      if (q !== void 0)
        return u(v("a", D(D({}, G), {}, {
          href: q,
          target: K,
          ref: m
        }), [ee, re]));
      let ie = v("button", D(D({}, G), {}, {
        ref: m,
        type: z
      }), [ee, re]);
      if (!$r(A)) {
        const X = /* @__PURE__ */ function() {
          return ie;
        }();
        ie = v(ZP, {
          ref: "wave",
          disabled: !!C.value
        }, {
          default: () => [X]
        });
      }
      return u(ie);
    };
  }
});
nt.Group = fl;
nt.install = function(e) {
  return e.component(nt.name, nt), e.component(fl.name, fl), e;
};
function Mg(e, t) {
  return e.classList ? e.classList.contains(t) : ` ${e.className} `.indexOf(` ${t} `) > -1;
}
function jd(e, t) {
  e.classList ? e.classList.add(t) : Mg(e, t) || (e.className = `${e.className} ${t}`);
}
function Hd(e, t) {
  if (e.classList)
    e.classList.remove(t);
  else if (Mg(e, t)) {
    const n = e.className;
    e.className = ` ${n} `.replace(` ${t} `, " ");
  }
}
const Rg = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return {
    name: e,
    appear: t,
    css: !0,
    onBeforeEnter: (n) => {
      n.style.height = "0px", n.style.opacity = "0", jd(n, e);
    },
    onEnter: (n) => {
      Fe(() => {
        n.style.height = `${n.scrollHeight}px`, n.style.opacity = "1";
      });
    },
    onAfterEnter: (n) => {
      n && (Hd(n, e), n.style.height = null, n.style.opacity = null);
    },
    onBeforeLeave: (n) => {
      jd(n, e), n.style.height = `${n.offsetHeight}px`, n.style.opacity = null;
    },
    onLeave: (n) => {
      setTimeout(() => {
        n.style.height = "0px", n.style.opacity = "0";
      });
    },
    onAfterLeave: (n) => {
      n && (Hd(n, e), n.style && (n.style.height = null, n.style.opacity = null));
    }
  };
}, wI = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), Fs = (e) => ({
  borderColor: e.inputBorderHoverColor,
  borderInlineEndWidth: e.lineWidth
}), pl = (e) => ({
  borderColor: e.inputBorderHoverColor,
  boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
  borderInlineEndWidth: e.lineWidth,
  outline: 0
}), SI = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover": g({}, Fs(we(e, {
    inputBorderHoverColor: e.colorBorder
  })))
}), Fg = (e) => {
  const {
    inputPaddingVerticalLG: t,
    fontSizeLG: n,
    lineHeightLG: o,
    borderRadiusLG: r,
    inputPaddingHorizontalLG: i
  } = e;
  return {
    padding: `${t}px ${i}px`,
    fontSize: n,
    lineHeight: o,
    borderRadius: r
  };
}, Dg = (e) => ({
  padding: `${e.inputPaddingVerticalSM}px ${e.controlPaddingHorizontalSM - 1}px`,
  borderRadius: e.borderRadiusSM
}), Ng = (e, t) => {
  const {
    componentCls: n,
    colorError: o,
    colorWarning: r,
    colorErrorOutline: i,
    colorWarningOutline: a,
    colorErrorBorderHover: l,
    colorWarningBorderHover: s
  } = e;
  return {
    [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
      borderColor: o,
      "&:hover": {
        borderColor: l
      },
      "&:focus, &-focused": g({}, pl(we(e, {
        inputBorderActiveColor: o,
        inputBorderHoverColor: o,
        controlOutline: i
      }))),
      [`${n}-prefix`]: {
        color: o
      }
    },
    [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
      borderColor: r,
      "&:hover": {
        borderColor: s
      },
      "&:focus, &-focused": g({}, pl(we(e, {
        inputBorderActiveColor: r,
        inputBorderHoverColor: r,
        controlOutline: a
      }))),
      [`${n}-prefix`]: {
        color: r
      }
    }
  };
}, Lg = (e) => g(g({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${e.inputPaddingVertical}px ${e.inputPaddingHorizontal}px`,
  color: e.colorText,
  fontSize: e.fontSize,
  lineHeight: e.lineHeight,
  backgroundColor: e.colorBgContainer,
  backgroundImage: "none",
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: e.colorBorder,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, wI(e.colorTextPlaceholder)), {
  "&:hover": g({}, Fs(e)),
  "&:focus, &-focused": g({}, pl(e)),
  "&-disabled, &[disabled]": g({}, SI(e)),
  "&-borderless": {
    "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none"
    }
  },
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    height: "auto",
    minHeight: e.controlHeight,
    lineHeight: e.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${e.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": g({}, Fg(e)),
  "&-sm": g({}, Dg(e)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
}), xI = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: g({}, Fg(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: g({}, Dg(e)),
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${e.inputPaddingHorizontal}px`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.fontSize,
        textAlign: "center",
        backgroundColor: e.colorFillAlter,
        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${n}-select`]: {
          margin: `-${e.inputPaddingVertical + 1}px -${e.inputPaddingHorizontal}px`,
          [`&${n}-select-single:not(${n}-select-customize-input)`]: {
            [`${n}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${e.lineWidth}px ${e.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${n}-select-selector`]: {
              color: e.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${n}-cascader-picker`]: {
          margin: `-9px -${e.inputPaddingHorizontal}px`,
          backgroundColor: "transparent",
          [`${n}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    },
    [`${t}`]: {
      float: "inline-start",
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: g(g({
      display: "block"
    }, gi()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover": {
            zIndex: 1
          },
          "&:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-block",
        float: "none",
        verticalAlign: "top",
        borderRadius: 0
      },
      [`& > ${t}-affix-wrapper`]: {
        display: "inline-flex"
      },
      [`& > ${n}-picker-range`]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: -e.lineWidth,
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${t}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover": {
          zIndex: 1
        },
        "&:focus": {
          zIndex: 1
        }
      },
      [`& > ${n}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${n}-select > ${n}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${n}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: -e.lineWidth,
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    }),
    [`&&-sm ${n}-btn`]: {
      fontSize: e.fontSizeSM,
      height: e.controlHeightSM,
      lineHeight: "normal"
    },
    [`&&-lg ${n}-btn`]: {
      fontSize: e.fontSizeLG,
      height: e.controlHeightLG,
      lineHeight: "normal"
    },
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&&-lg ${n}-select-single ${n}-select-selector`]: {
      height: `${e.controlHeightLG}px`,
      [`${n}-select-selection-item, ${n}-select-selection-placeholder`]: {
        // -2 is for the border size & override default
        lineHeight: `${e.controlHeightLG - 2}px`
      },
      [`${n}-select-selection-search-input`]: {
        height: `${e.controlHeightLG}px`
      }
    },
    [`&&-sm ${n}-select-single ${n}-select-selector`]: {
      height: `${e.controlHeightSM}px`,
      [`${n}-select-selection-item, ${n}-select-selection-placeholder`]: {
        // -2 is for the border size & override default
        lineHeight: `${e.controlHeightSM - 2}px`
      },
      [`${n}-select-selection-search-input`]: {
        height: `${e.controlHeightSM}px`
      }
    }
  };
}, CI = (e) => {
  const {
    componentCls: t,
    controlHeightSM: n,
    lineWidth: o
  } = e, i = (n - o * 2 - 16) / 2;
  return {
    [t]: g(g(g(g({}, ot(e)), Lg(e)), Ng(e, t)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: n,
          paddingTop: i,
          paddingBottom: i
        }
      }
    })
  };
}, $I = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "&:hover": {
        color: e.colorTextTertiary
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${e.inputAffixPadding}px`
      }
    },
    // ======================= TextArea ========================
    "&-textarea-with-clear-btn": {
      padding: "0 !important",
      border: "0 !important",
      [`${t}-clear-icon`]: {
        position: "absolute",
        insetBlockStart: e.paddingXS,
        insetInlineEnd: e.paddingXS,
        zIndex: 1
      }
    }
  };
}, OI = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: n,
    colorTextDescription: o,
    motionDurationSlow: r,
    colorIcon: i,
    colorIconHover: a,
    iconCls: l
  } = e;
  return {
    [`${t}-affix-wrapper`]: g(g(g(g(g({}, Lg(e)), {
      display: "inline-flex",
      [`&:not(${t}-affix-wrapper-disabled):hover`]: g(g({}, Fs(e)), {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }),
      "&-focused, &:focus": {
        zIndex: 1
      },
      "&-disabled": {
        [`${t}[disabled]`]: {
          background: "transparent"
        }
      },
      [`> input${t}`]: {
        padding: 0,
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${t}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: o
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: n
        },
        "&-suffix": {
          marginInlineStart: n
        }
      }
    }), $I(e)), {
      // password
      [`${l}${t}-password-icon`]: {
        color: i,
        cursor: "pointer",
        transition: `all ${r}`,
        "&:hover": {
          color: a
        }
      }
    }), Ng(e, `${t}-affix-wrapper`))
  };
}, PI = (e) => {
  const {
    componentCls: t,
    colorError: n,
    colorSuccess: o,
    borderRadiusLG: r,
    borderRadiusSM: i
  } = e;
  return {
    [`${t}-group`]: g(g(g({}, ot(e)), xI(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": {
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: r
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: i
          }
        },
        // Status
        "&-status-error": {
          [`${t}-group-addon`]: {
            color: n,
            borderColor: n
          }
        },
        "&-status-warning": {
          [`${t}-group-addon:last-child`]: {
            color: o,
            borderColor: o
          }
        }
      }
    })
  };
}, II = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, o = `${t}-search`;
  return {
    [o]: {
      [`${t}`]: {
        "&:hover, &:focus": {
          borderColor: e.colorPrimaryHover,
          [`+ ${t}-group-addon ${o}-button:not(${n}-btn-primary)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.lineHeightLG - 2e-4
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${o}-button`]: {
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: e.borderRadius,
            borderEndEndRadius: e.borderRadius,
            borderEndStartRadius: 0
          },
          [`${o}-button:not(${n}-btn-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${n}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${o}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${o}-button`]: {
        height: e.controlHeightLG
      },
      [`&-small ${o}-button`]: {
        height: e.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: -e.lineWidth,
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover,&:focus,&:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
};
function TI(e) {
  return we(e, {
    inputAffixPadding: e.paddingXXS,
    inputPaddingVertical: Math.max(Math.round((e.controlHeight - e.fontSize * e.lineHeight) / 2 * 10) / 10 - e.lineWidth, 3),
    inputPaddingVerticalLG: Math.ceil((e.controlHeightLG - e.fontSizeLG * e.lineHeightLG) / 2 * 10) / 10 - e.lineWidth,
    inputPaddingVerticalSM: Math.max(Math.round((e.controlHeightSM - e.fontSize * e.lineHeight) / 2 * 10) / 10 - e.lineWidth, 0),
    inputPaddingHorizontal: e.paddingSM - e.lineWidth,
    inputPaddingHorizontalSM: e.paddingXS - e.lineWidth,
    inputPaddingHorizontalLG: e.controlPaddingHorizontal - e.lineWidth,
    inputBorderHoverColor: e.colorPrimaryHover,
    inputBorderActiveColor: e.colorPrimaryHover
  });
}
const EI = (e) => {
  const {
    componentCls: t,
    inputPaddingHorizontal: n,
    paddingLG: o
  } = e, r = `${t}-textarea`;
  return {
    [r]: {
      position: "relative",
      [`${r}-suffix`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: n,
        bottom: 0,
        zIndex: 1,
        display: "inline-flex",
        alignItems: "center",
        margin: "auto"
      },
      "&-status-error,\n        &-status-warning,\n        &-status-success,\n        &-status-validating": {
        [`&${r}-has-feedback`]: {
          [`${t}`]: {
            paddingInlineEnd: o
          }
        }
      },
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${t}`]: {
          height: "100%"
        },
        "&::after": {
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          content: "attr(data-count)",
          pointerEvents: "none",
          float: "right"
        }
      },
      "&-rtl": {
        "&::after": {
          float: "left"
        }
      }
    }
  };
}, Ds = Ge("Input", (e) => {
  const t = TI(e);
  return [
    CI(t),
    EI(t),
    OI(t),
    PI(t),
    II(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Ps(t)
  ];
}), _I = () => {
  const e = te(/* @__PURE__ */ new Map()), t = (n) => (o) => {
    e.value.set(n, o);
  };
  return Zf(() => {
    e.value = /* @__PURE__ */ new Map();
  }), [t, e];
}, jg = () => yt() && window.document.documentElement;
let Or;
const AI = () => {
  if (!jg())
    return !1;
  if (Or !== void 0)
    return Or;
  const e = document.createElement("div");
  return e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e), Or = e.scrollHeight === 1, document.body.removeChild(e), Or;
}, MI = () => {
  const e = k(!1);
  return be(() => {
    e.value = AI();
  }), e;
}, Hg = Symbol("rowContextKey"), RI = (e) => {
  _e(Hg, e);
}, FI = () => Ee(Hg, {
  gutter: T(() => {
  }),
  wrap: T(() => {
  }),
  supportFlexGap: T(() => {
  })
}), DI = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around ": {
        justifyContent: "space-around"
      },
      "&-space-evenly ": {
        justifyContent: "space-evenly"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
}, NI = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
}, LI = (e, t) => {
  const {
    componentCls: n,
    gridColumns: o
  } = e, r = {};
  for (let i = o; i >= 0; i--)
    i === 0 ? (r[`${n}${t}-${i}`] = {
      display: "none"
    }, r[`${n}-push-${i}`] = {
      insetInlineStart: "auto"
    }, r[`${n}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, r[`${n}${t}-push-${i}`] = {
      insetInlineStart: "auto"
    }, r[`${n}${t}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, r[`${n}${t}-offset-${i}`] = {
      marginInlineEnd: 0
    }, r[`${n}${t}-order-${i}`] = {
      order: 0
    }) : (r[`${n}${t}-${i}`] = {
      display: "block",
      flex: `0 0 ${i / o * 100}%`,
      maxWidth: `${i / o * 100}%`
    }, r[`${n}${t}-push-${i}`] = {
      insetInlineStart: `${i / o * 100}%`
    }, r[`${n}${t}-pull-${i}`] = {
      insetInlineEnd: `${i / o * 100}%`
    }, r[`${n}${t}-offset-${i}`] = {
      marginInlineStart: `${i / o * 100}%`
    }, r[`${n}${t}-order-${i}`] = {
      order: i
    });
  return r;
}, ml = (e, t) => LI(e, t), jI = (e, t, n) => ({
  [`@media (min-width: ${t}px)`]: g({}, ml(e, n))
}), HI = Ge("Grid", (e) => [DI(e)]), BI = Ge("Grid", (e) => {
  const t = we(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), n = {
    "-sm": t.screenSMMin,
    "-md": t.screenMDMin,
    "-lg": t.screenLGMin,
    "-xl": t.screenXLMin,
    "-xxl": t.screenXXLMin
  };
  return [NI(t), ml(t, ""), ml(t, "-xs"), Object.keys(n).map((o) => jI(t, n[o], o)).reduce((o, r) => g(g({}, o), r), {})];
}), zI = () => ({
  align: Ye([String, Object]),
  justify: Ye([String, Object]),
  prefixCls: String,
  gutter: Ye([Number, Array, Object], 0),
  wrap: {
    type: Boolean,
    default: void 0
  }
}), VI = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ARow",
  inheritAttrs: !1,
  props: zI(),
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const {
      prefixCls: r,
      direction: i
    } = Se("row", e), [a, l] = HI(r);
    let s;
    const c = wP(), u = te({
      xs: !0,
      sm: !0,
      md: !0,
      lg: !0,
      xl: !0,
      xxl: !0
    }), d = te({
      xs: !1,
      sm: !1,
      md: !1,
      lg: !1,
      xl: !1,
      xxl: !1
    }), f = (S) => T(() => {
      if (typeof e[S] == "string")
        return e[S];
      if (typeof e[S] != "object")
        return "";
      for (let x = 0; x < xr.length; x++) {
        const $ = xr[x];
        if (!d.value[$]) continue;
        const O = e[S][$];
        if (O !== void 0)
          return O;
      }
      return "";
    }), p = f("align"), h = f("justify"), m = MI();
    be(() => {
      s = c.value.subscribe((S) => {
        d.value = S;
        const x = e.gutter || 0;
        (!Array.isArray(x) && typeof x == "object" || Array.isArray(x) && (typeof x[0] == "object" || typeof x[1] == "object")) && (u.value = S);
      });
    }), Ae(() => {
      c.value.unsubscribe(s);
    });
    const w = T(() => {
      const S = [void 0, void 0], {
        gutter: x = 0
      } = e;
      return (Array.isArray(x) ? x : [x, void 0]).forEach((O, y) => {
        if (typeof O == "object")
          for (let I = 0; I < xr.length; I++) {
            const E = xr[I];
            if (u.value[E] && O[E] !== void 0) {
              S[y] = O[E];
              break;
            }
          }
        else
          S[y] = O;
      }), S;
    });
    RI({
      gutter: w,
      supportFlexGap: m,
      wrap: T(() => e.wrap)
    });
    const b = T(() => oe(r.value, {
      [`${r.value}-no-wrap`]: e.wrap === !1,
      [`${r.value}-${h.value}`]: h.value,
      [`${r.value}-${p.value}`]: p.value,
      [`${r.value}-rtl`]: i.value === "rtl"
    }, o.class, l.value)), C = T(() => {
      const S = w.value, x = {}, $ = S[0] != null && S[0] > 0 ? `${S[0] / -2}px` : void 0, O = S[1] != null && S[1] > 0 ? `${S[1] / -2}px` : void 0;
      return $ && (x.marginLeft = $, x.marginRight = $), m.value ? x.rowGap = `${S[1]}px` : O && (x.marginTop = O, x.marginBottom = O), x;
    });
    return () => {
      var S;
      return a(v("div", D(D({}, o), {}, {
        class: b.value,
        style: g(g({}, C.value), o.style)
      }), [(S = n.default) === null || S === void 0 ? void 0 : S.call(n)]));
    };
  }
});
function hn() {
  return hn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, hn.apply(this, arguments);
}
function WI(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Qo(e, t);
}
function gl(e) {
  return gl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, gl(e);
}
function Qo(e, t) {
  return Qo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, Qo(e, t);
}
function UI() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function jr(e, t, n) {
  return UI() ? jr = Reflect.construct.bind() : jr = function(r, i, a) {
    var l = [null];
    l.push.apply(l, i);
    var s = Function.bind.apply(r, l), c = new s();
    return a && Qo(c, a.prototype), c;
  }, jr.apply(null, arguments);
}
function GI(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function vl(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return vl = function(o) {
    if (o === null || !GI(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(o)) return t.get(o);
      t.set(o, r);
    }
    function r() {
      return jr(o, arguments, gl(this).constructor);
    }
    return r.prototype = Object.create(o.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Qo(r, o);
  }, vl(e);
}
var kI = /%[sdj%]/g, Bg = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Bg = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(o) {
    return typeof o == "string";
  }) && console.warn(t, n);
});
function hl(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var o = n.field;
    t[o] = t[o] || [], t[o].push(n);
  }), t;
}
function lt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  var r = 0, i = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var a = e.replace(kI, function(l) {
      if (l === "%%")
        return "%";
      if (r >= i)
        return l;
      switch (l) {
        case "%s":
          return String(n[r++]);
        case "%d":
          return Number(n[r++]);
        case "%j":
          try {
            return JSON.stringify(n[r++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return l;
      }
    });
    return a;
  }
  return e;
}
function XI(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function je(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || XI(t) && typeof e == "string" && !e);
}
function qI(e, t, n) {
  var o = [], r = 0, i = e.length;
  function a(l) {
    o.push.apply(o, l || []), r++, r === i && n(o);
  }
  e.forEach(function(l) {
    t(l, a);
  });
}
function Bd(e, t, n) {
  var o = 0, r = e.length;
  function i(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var l = o;
    o = o + 1, l < r ? t(e[l], i) : n([]);
  }
  i([]);
}
function KI(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var zd = /* @__PURE__ */ function(e) {
  WI(t, e);
  function t(n, o) {
    var r;
    return r = e.call(this, "Async Validation Error") || this, r.errors = n, r.fields = o, r;
  }
  return t;
}(/* @__PURE__ */ vl(Error));
function YI(e, t, n, o, r) {
  if (t.first) {
    var i = new Promise(function(f, p) {
      var h = function(b) {
        return o(b), b.length ? p(new zd(b, hl(b))) : f(r);
      }, m = KI(e);
      Bd(m, n, h);
    });
    return i.catch(function(f) {
      return f;
    }), i;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), s = l.length, c = 0, u = [], d = new Promise(function(f, p) {
    var h = function(w) {
      if (u.push.apply(u, w), c++, c === s)
        return o(u), u.length ? p(new zd(u, hl(u))) : f(r);
    };
    l.length || (o(u), f(r)), l.forEach(function(m) {
      var w = e[m];
      a.indexOf(m) !== -1 ? Bd(w, n, h) : qI(w, n, h);
    });
  });
  return d.catch(function(f) {
    return f;
  }), d;
}
function QI(e) {
  return !!(e && e.message !== void 0);
}
function ZI(e, t) {
  for (var n = e, o = 0; o < t.length; o++) {
    if (n == null)
      return n;
    n = n[t[o]];
  }
  return n;
}
function Vd(e, t) {
  return function(n) {
    var o;
    return e.fullFields ? o = ZI(t, e.fullFields) : o = t[n.field || e.fullField], QI(n) ? (n.field = n.field || e.fullField, n.fieldValue = o, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: o,
      field: n.field || e.fullField
    };
  };
}
function Wd(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var o = t[n];
        typeof o == "object" && typeof e[n] == "object" ? e[n] = hn({}, e[n], o) : e[n] = o;
      }
  }
  return e;
}
var zg = function(t, n, o, r, i, a) {
  t.required && (!o.hasOwnProperty(t.field) || je(n, a || t.type)) && r.push(lt(i.messages.required, t.fullField));
}, JI = function(t, n, o, r, i) {
  (/^\s+$/.test(n) || n === "") && r.push(lt(i.messages.whitespace, t.fullField));
}, Pr, e3 = function() {
  if (Pr)
    return Pr;
  var e = "[a-fA-F\\d:]", t = function(x) {
    return x && x.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", o = "[a-fA-F\\d]{1,4}", r = (`
(?:
(?:` + o + ":){7}(?:" + o + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + o + ":){6}(?:" + n + "|:" + o + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + o + ":){5}(?::" + n + "|(?::" + o + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + o + ":){4}(?:(?::" + o + "){0,1}:" + n + "|(?::" + o + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + o + ":){3}(?:(?::" + o + "){0,2}:" + n + "|(?::" + o + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + o + ":){2}(?:(?::" + o + "){0,3}:" + n + "|(?::" + o + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + o + ":){1}(?:(?::" + o + "){0,4}:" + n + "|(?::" + o + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + o + "){0,5}:" + n + "|(?::" + o + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + n + "$)|(?:^" + r + "$)"), a = new RegExp("^" + n + "$"), l = new RegExp("^" + r + "$"), s = function(x) {
    return x && x.exact ? i : new RegExp("(?:" + t(x) + n + t(x) + ")|(?:" + t(x) + r + t(x) + ")", "g");
  };
  s.v4 = function(S) {
    return S && S.exact ? a : new RegExp("" + t(S) + n + t(S), "g");
  }, s.v6 = function(S) {
    return S && S.exact ? l : new RegExp("" + t(S) + r + t(S), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", u = "(?:\\S+(?::\\S*)?@)?", d = s.v4().source, f = s.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", m = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", w = "(?::\\d{2,5})?", b = '(?:[/?#][^\\s"]*)?', C = "(?:" + c + "|www\\.)" + u + "(?:localhost|" + d + "|" + f + "|" + p + h + m + ")" + w + b;
  return Pr = new RegExp("(?:^" + C + "$)", "i"), Pr;
}, Ud = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Io = {
  integer: function(t) {
    return Io.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Io.number(t) && !Io.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Io.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Ud.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(e3());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Ud.hex);
  }
}, t3 = function(t, n, o, r, i) {
  if (t.required && n === void 0) {
    zg(t, n, o, r, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = t.type;
  a.indexOf(l) > -1 ? Io[l](n) || r.push(lt(i.messages.types[l], t.fullField, t.type)) : l && typeof n !== t.type && r.push(lt(i.messages.types[l], t.fullField, t.type));
}, n3 = function(t, n, o, r, i) {
  var a = typeof t.len == "number", l = typeof t.min == "number", s = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = n, d = null, f = typeof n == "number", p = typeof n == "string", h = Array.isArray(n);
  if (f ? d = "number" : p ? d = "string" : h && (d = "array"), !d)
    return !1;
  h && (u = n.length), p && (u = n.replace(c, "_").length), a ? u !== t.len && r.push(lt(i.messages[d].len, t.fullField, t.len)) : l && !s && u < t.min ? r.push(lt(i.messages[d].min, t.fullField, t.min)) : s && !l && u > t.max ? r.push(lt(i.messages[d].max, t.fullField, t.max)) : l && s && (u < t.min || u > t.max) && r.push(lt(i.messages[d].range, t.fullField, t.min, t.max));
}, jn = "enum", o3 = function(t, n, o, r, i) {
  t[jn] = Array.isArray(t[jn]) ? t[jn] : [], t[jn].indexOf(n) === -1 && r.push(lt(i.messages[jn], t.fullField, t[jn].join(", ")));
}, r3 = function(t, n, o, r, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || r.push(lt(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(n) || r.push(lt(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, me = {
  required: zg,
  whitespace: JI,
  type: t3,
  range: n3,
  enum: o3,
  pattern: r3
}, i3 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (je(n, "string") && !t.required)
      return o();
    me.required(t, n, r, a, i, "string"), je(n, "string") || (me.type(t, n, r, a, i), me.range(t, n, r, a, i), me.pattern(t, n, r, a, i), t.whitespace === !0 && me.whitespace(t, n, r, a, i));
  }
  o(a);
}, a3 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (je(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), n !== void 0 && me.type(t, n, r, a, i);
  }
  o(a);
}, l3 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (n === "" && (n = void 0), je(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), n !== void 0 && (me.type(t, n, r, a, i), me.range(t, n, r, a, i));
  }
  o(a);
}, s3 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (je(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), n !== void 0 && me.type(t, n, r, a, i);
  }
  o(a);
}, c3 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (je(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), je(n) || me.type(t, n, r, a, i);
  }
  o(a);
}, u3 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (je(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), n !== void 0 && (me.type(t, n, r, a, i), me.range(t, n, r, a, i));
  }
  o(a);
}, d3 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (je(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), n !== void 0 && (me.type(t, n, r, a, i), me.range(t, n, r, a, i));
  }
  o(a);
}, f3 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (n == null && !t.required)
      return o();
    me.required(t, n, r, a, i, "array"), n != null && (me.type(t, n, r, a, i), me.range(t, n, r, a, i));
  }
  o(a);
}, p3 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (je(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), n !== void 0 && me.type(t, n, r, a, i);
  }
  o(a);
}, m3 = "enum", g3 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (je(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), n !== void 0 && me[m3](t, n, r, a, i);
  }
  o(a);
}, v3 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (je(n, "string") && !t.required)
      return o();
    me.required(t, n, r, a, i), je(n, "string") || me.pattern(t, n, r, a, i);
  }
  o(a);
}, h3 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (je(n, "date") && !t.required)
      return o();
    if (me.required(t, n, r, a, i), !je(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), me.type(t, s, r, a, i), s && me.range(t, s.getTime(), r, a, i);
    }
  }
  o(a);
}, y3 = function(t, n, o, r, i) {
  var a = [], l = Array.isArray(n) ? "array" : typeof n;
  me.required(t, n, r, a, i, l), o(a);
}, ba = function(t, n, o, r, i) {
  var a = t.type, l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (je(n, a) && !t.required)
      return o();
    me.required(t, n, r, l, i, a), je(n, a) || me.type(t, n, r, l, i);
  }
  o(l);
}, b3 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (je(n) && !t.required)
      return o();
    me.required(t, n, r, a, i);
  }
  o(a);
}, Fo = {
  string: i3,
  method: a3,
  number: l3,
  boolean: s3,
  regexp: c3,
  integer: u3,
  float: d3,
  array: f3,
  object: p3,
  enum: g3,
  pattern: v3,
  date: h3,
  url: ba,
  hex: ba,
  email: ba,
  required: y3,
  any: b3
};
function yl() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var bl = yl(), ar = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = bl, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(o) {
    var r = this;
    if (!o)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof o != "object" || Array.isArray(o))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(o).forEach(function(i) {
      var a = o[i];
      r.rules[i] = Array.isArray(a) ? a : [a];
    });
  }, t.messages = function(o) {
    return o && (this._messages = Wd(yl(), o)), this._messages;
  }, t.validate = function(o, r, i) {
    var a = this;
    r === void 0 && (r = {}), i === void 0 && (i = function() {
    });
    var l = o, s = r, c = i;
    if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, l), Promise.resolve(l);
    function u(m) {
      var w = [], b = {};
      function C(x) {
        if (Array.isArray(x)) {
          var $;
          w = ($ = w).concat.apply($, x);
        } else
          w.push(x);
      }
      for (var S = 0; S < m.length; S++)
        C(m[S]);
      w.length ? (b = hl(w), c(w, b)) : c(null, l);
    }
    if (s.messages) {
      var d = this.messages();
      d === bl && (d = yl()), Wd(d, s.messages), s.messages = d;
    } else
      s.messages = this.messages();
    var f = {}, p = s.keys || Object.keys(this.rules);
    p.forEach(function(m) {
      var w = a.rules[m], b = l[m];
      w.forEach(function(C) {
        var S = C;
        typeof S.transform == "function" && (l === o && (l = hn({}, l)), b = l[m] = S.transform(b)), typeof S == "function" ? S = {
          validator: S
        } : S = hn({}, S), S.validator = a.getValidationMethod(S), S.validator && (S.field = m, S.fullField = S.fullField || m, S.type = a.getType(S), f[m] = f[m] || [], f[m].push({
          rule: S,
          value: b,
          source: l,
          field: m
        }));
      });
    });
    var h = {};
    return YI(f, s, function(m, w) {
      var b = m.rule, C = (b.type === "object" || b.type === "array") && (typeof b.fields == "object" || typeof b.defaultField == "object");
      C = C && (b.required || !b.required && m.value), b.field = m.field;
      function S(O, y) {
        return hn({}, y, {
          fullField: b.fullField + "." + O,
          fullFields: b.fullFields ? [].concat(b.fullFields, [O]) : [O]
        });
      }
      function x(O) {
        O === void 0 && (O = []);
        var y = Array.isArray(O) ? O : [O];
        !s.suppressWarning && y.length && e.warning("async-validator:", y), y.length && b.message !== void 0 && (y = [].concat(b.message));
        var I = y.map(Vd(b, l));
        if (s.first && I.length)
          return h[b.field] = 1, w(I);
        if (!C)
          w(I);
        else {
          if (b.required && !m.value)
            return b.message !== void 0 ? I = [].concat(b.message).map(Vd(b, l)) : s.error && (I = [s.error(b, lt(s.messages.required, b.field))]), w(I);
          var E = {};
          b.defaultField && Object.keys(m.value).map(function(N) {
            E[N] = b.defaultField;
          }), E = hn({}, E, m.rule.fields);
          var R = {};
          Object.keys(E).forEach(function(N) {
            var F = E[N], j = Array.isArray(F) ? F : [F];
            R[N] = j.map(S.bind(null, N));
          });
          var _ = new e(R);
          _.messages(s.messages), m.rule.options && (m.rule.options.messages = s.messages, m.rule.options.error = s.error), _.validate(m.value, m.rule.options || s, function(N) {
            var F = [];
            I && I.length && F.push.apply(F, I), N && N.length && F.push.apply(F, N), w(F.length ? F : null);
          });
        }
      }
      var $;
      if (b.asyncValidator)
        $ = b.asyncValidator(b, m.value, x, m.source, s);
      else if (b.validator) {
        try {
          $ = b.validator(b, m.value, x, m.source, s);
        } catch (O) {
          console.error == null || console.error(O), s.suppressValidatorError || setTimeout(function() {
            throw O;
          }, 0), x(O.message);
        }
        $ === !0 ? x() : $ === !1 ? x(typeof b.message == "function" ? b.message(b.fullField || b.field) : b.message || (b.fullField || b.field) + " fails") : $ instanceof Array ? x($) : $ instanceof Error && x($.message);
      }
      $ && $.then && $.then(function() {
        return x();
      }, function(O) {
        return x(O);
      });
    }, function(m) {
      u(m);
    }, l);
  }, t.getType = function(o) {
    if (o.type === void 0 && o.pattern instanceof RegExp && (o.type = "pattern"), typeof o.validator != "function" && o.type && !Fo.hasOwnProperty(o.type))
      throw new Error(lt("Unknown rule type %s", o.type));
    return o.type || "string";
  }, t.getValidationMethod = function(o) {
    if (typeof o.validator == "function")
      return o.validator;
    var r = Object.keys(o), i = r.indexOf("message");
    return i !== -1 && r.splice(i, 1), r.length === 1 && r[0] === "required" ? Fo.required : Fo[this.getType(o)] || void 0;
  }, e;
}();
ar.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Fo[t] = n;
};
ar.warning = Bg;
ar.messages = bl;
ar.validators = Fo;
function nn(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Vg(e, t) {
  let n = e;
  for (let o = 0; o < t.length; o += 1) {
    if (n == null)
      return;
    n = n[t[o]];
  }
  return n;
}
function Wg(e, t, n, o) {
  if (!t.length)
    return n;
  const [r, ...i] = t;
  let a;
  return !e && typeof r == "number" ? a = [] : Array.isArray(e) ? a = [...e] : a = g({}, e), o && n === void 0 && i.length === 1 ? delete a[r][i[0]] : a[r] = Wg(a[r], i, n, o), a;
}
function w3(e, t, n) {
  let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && o && n === void 0 && !Vg(e, t.slice(0, -1)) ? e : Wg(e, t, n, o);
}
function wl(e) {
  return nn(e);
}
function S3(e, t) {
  return Vg(e, t);
}
function x3(e, t, n) {
  let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return w3(e, t, n, o);
}
function C3(e, t) {
  return e && e.some((n) => O3(n, t));
}
function Gd(e) {
  return typeof e == "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Ug(e, t) {
  const n = Array.isArray(e) ? [...e] : g({}, e);
  return t && Object.keys(t).forEach((o) => {
    const r = n[o], i = t[o], a = Gd(r) && Gd(i);
    n[o] = a ? Ug(r, i || {}) : i;
  }), n;
}
function $3(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  return n.reduce((r, i) => Ug(r, i), e);
}
function kd(e, t) {
  let n = {};
  return t.forEach((o) => {
    const r = S3(e, o);
    n = x3(n, o, r);
  }), n;
}
function O3(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every((n, o) => t[o] === n);
}
const it = "'${name}' is not a valid ${type}", Ri = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: it,
    method: it,
    array: it,
    object: it,
    number: it,
    date: it,
    boolean: it,
    integer: it,
    float: it,
    regexp: it,
    email: it,
    url: it,
    hex: it
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
var Fi = function(e, t, n, o) {
  function r(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(u) {
      try {
        c(o.next(u));
      } catch (d) {
        a(d);
      }
    }
    function s(u) {
      try {
        c(o.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : r(u.value).then(l, s);
    }
    c((o = o.apply(e, t || [])).next());
  });
};
const P3 = ar;
function I3(e, t) {
  return e.replace(/\$\{\w+\}/g, (n) => {
    const o = n.slice(2, -1);
    return t[o];
  });
}
function Sl(e, t, n, o, r) {
  return Fi(this, void 0, void 0, function* () {
    const i = g({}, n);
    delete i.ruleIndex, delete i.trigger;
    let a = null;
    i && i.type === "array" && i.defaultField && (a = i.defaultField, delete i.defaultField);
    const l = new P3({
      [e]: [i]
    }), s = $3({}, Ri, o.validateMessages);
    l.messages(s);
    let c = [];
    try {
      yield Promise.resolve(l.validate({
        [e]: t
      }, g({}, o)));
    } catch (f) {
      f.errors ? c = f.errors.map((p, h) => {
        let {
          message: m
        } = p;
        return (
          // Wrap VueNode with `key`
          zt(m) ? Jo(m, {
            key: `error_${h}`
          }) : m
        );
      }) : (console.error(f), c = [s.default()]);
    }
    if (!c.length && a)
      return (yield Promise.all(t.map((p, h) => Sl(`${e}.${h}`, p, a, o, r)))).reduce((p, h) => [...p, ...h], []);
    const u = g(g(g({}, n), {
      name: e,
      enum: (n.enum || []).join(", ")
    }), r);
    return c.map((f) => typeof f == "string" ? I3(f, u) : f);
  });
}
function Gg(e, t, n, o, r, i) {
  const a = e.join("."), l = n.map((c, u) => {
    const d = c.validator, f = g(g({}, c), {
      ruleIndex: u
    });
    return d && (f.validator = (p, h, m) => {
      let w = !1;
      const C = d(p, h, function() {
        for (var S = arguments.length, x = new Array(S), $ = 0; $ < S; $++)
          x[$] = arguments[$];
        Promise.resolve().then(() => {
          ro(!w, "Your validator function has already return a promise. `callback` will be ignored."), w || m(...x);
        });
      });
      w = C && typeof C.then == "function" && typeof C.catch == "function", ro(w, "`callback` is deprecated. Please return a promise instead."), w && C.then(() => {
        m();
      }).catch((S) => {
        m(S || " ");
      });
    }), f;
  }).sort((c, u) => {
    let {
      warningOnly: d,
      ruleIndex: f
    } = c, {
      warningOnly: p,
      ruleIndex: h
    } = u;
    return !!d == !!p ? f - h : d ? 1 : -1;
  });
  let s;
  if (r === !0)
    s = new Promise((c, u) => Fi(this, void 0, void 0, function* () {
      for (let d = 0; d < l.length; d += 1) {
        const f = l[d], p = yield Sl(a, t, f, o, i);
        if (p.length) {
          u([{
            errors: p,
            rule: f
          }]);
          return;
        }
      }
      c([]);
    }));
  else {
    const c = l.map((u) => Sl(a, t, u, o, i).then((d) => ({
      errors: d,
      rule: u
    })));
    s = (r ? E3(c) : T3(c)).then((u) => Promise.reject(u));
  }
  return s.catch((c) => c), s;
}
function T3(e) {
  return Fi(this, void 0, void 0, function* () {
    return Promise.all(e).then((t) => [].concat(...t));
  });
}
function E3(e) {
  return Fi(this, void 0, void 0, function* () {
    let t = 0;
    return new Promise((n) => {
      e.forEach((o) => {
        o.then((r) => {
          r.errors.length && n([r]), t += 1, t === e.length && n([]);
        });
      });
    });
  });
}
const kg = Symbol("formContextKey"), Xg = (e) => {
  _e(kg, e);
}, Ns = () => Ee(kg, {
  name: T(() => {
  }),
  labelAlign: T(() => "right"),
  vertical: T(() => !1),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addField: (e, t) => {
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeField: (e) => {
  },
  model: T(() => {
  }),
  rules: T(() => {
  }),
  colon: T(() => {
  }),
  labelWrap: T(() => {
  }),
  labelCol: T(() => {
  }),
  requiredMark: T(() => !1),
  validateTrigger: T(() => {
  }),
  onValidate: () => {
  },
  validateMessages: T(() => Ri)
}), qg = Symbol("formItemPrefixContextKey"), _3 = (e) => {
  _e(qg, e);
}, A3 = () => Ee(qg, {
  prefixCls: T(() => "")
});
function M3(e) {
  return typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
}
const R3 = () => ({
  span: [String, Number],
  order: [String, Number],
  offset: [String, Number],
  push: [String, Number],
  pull: [String, Number],
  xs: {
    type: [String, Number, Object],
    default: void 0
  },
  sm: {
    type: [String, Number, Object],
    default: void 0
  },
  md: {
    type: [String, Number, Object],
    default: void 0
  },
  lg: {
    type: [String, Number, Object],
    default: void 0
  },
  xl: {
    type: [String, Number, Object],
    default: void 0
  },
  xxl: {
    type: [String, Number, Object],
    default: void 0
  },
  prefixCls: String,
  flex: [String, Number]
}), F3 = ["xs", "sm", "md", "lg", "xl", "xxl"], Kg = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ACol",
  inheritAttrs: !1,
  props: R3(),
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const {
      gutter: r,
      supportFlexGap: i,
      wrap: a
    } = FI(), {
      prefixCls: l,
      direction: s
    } = Se("col", e), [c, u] = BI(l), d = T(() => {
      const {
        span: p,
        order: h,
        offset: m,
        push: w,
        pull: b
      } = e, C = l.value;
      let S = {};
      return F3.forEach((x) => {
        let $ = {};
        const O = e[x];
        typeof O == "number" ? $.span = O : typeof O == "object" && ($ = O || {}), S = g(g({}, S), {
          [`${C}-${x}-${$.span}`]: $.span !== void 0,
          [`${C}-${x}-order-${$.order}`]: $.order || $.order === 0,
          [`${C}-${x}-offset-${$.offset}`]: $.offset || $.offset === 0,
          [`${C}-${x}-push-${$.push}`]: $.push || $.push === 0,
          [`${C}-${x}-pull-${$.pull}`]: $.pull || $.pull === 0,
          [`${C}-rtl`]: s.value === "rtl"
        });
      }), oe(C, {
        [`${C}-${p}`]: p !== void 0,
        [`${C}-order-${h}`]: h,
        [`${C}-offset-${m}`]: m,
        [`${C}-push-${w}`]: w,
        [`${C}-pull-${b}`]: b
      }, S, o.class, u.value);
    }), f = T(() => {
      const {
        flex: p
      } = e, h = r.value, m = {};
      if (h && h[0] > 0) {
        const w = `${h[0] / 2}px`;
        m.paddingLeft = w, m.paddingRight = w;
      }
      if (h && h[1] > 0 && !i.value) {
        const w = `${h[1] / 2}px`;
        m.paddingTop = w, m.paddingBottom = w;
      }
      return p && (m.flex = M3(p), a.value === !1 && !m.minWidth && (m.minWidth = 0)), m;
    });
    return () => {
      var p;
      return c(v("div", D(D({}, o), {}, {
        class: d.value,
        style: [f.value, o.style]
      }), [(p = n.default) === null || p === void 0 ? void 0 : p.call(n)]));
    };
  }
});
var D3 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, name: "question-circle", theme: "outlined" };
function Xd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      N3(e, r, n[r]);
    });
  }
  return e;
}
function N3(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ls = function(t, n) {
  var o = Xd({}, t, n.attrs);
  return v(de, Xd({}, o, {
    icon: D3
  }), null);
};
Ls.displayName = "QuestionCircleOutlined";
Ls.inheritAttrs = !1;
const js = (e, t) => {
  let {
    slots: n,
    emit: o,
    attrs: r
  } = t;
  var i, a, l, s, c;
  const {
    prefixCls: u,
    htmlFor: d,
    labelCol: f,
    labelAlign: p,
    colon: h,
    required: m,
    requiredMark: w
  } = g(g({}, e), r), [b] = go("Form"), C = (i = e.label) !== null && i !== void 0 ? i : (a = n.label) === null || a === void 0 ? void 0 : a.call(n);
  if (!C) return null;
  const {
    vertical: S,
    labelAlign: x,
    labelCol: $,
    labelWrap: O,
    colon: y
  } = Ns(), I = f || ($ == null ? void 0 : $.value) || {}, E = p || (x == null ? void 0 : x.value), R = `${u}-item-label`, _ = oe(R, E === "left" && `${R}-left`, I.class, {
    [`${R}-wrap`]: !!O.value
  });
  let N = C;
  const F = h === !0 || (y == null ? void 0 : y.value) !== !1 && h !== !1;
  if (F && !S.value && typeof C == "string" && C.trim() !== "" && (N = C.replace(/[:|：]\s*$/, "")), e.tooltip || n.tooltip) {
    const M = v("span", {
      class: `${u}-item-tooltip`
    }, [v(uo, {
      title: e.tooltip
    }, {
      default: () => [v(Ls, null, null)]
    })]);
    N = v(Ie, null, [N, n.tooltip ? (l = n.tooltip) === null || l === void 0 ? void 0 : l.call(n, {
      class: `${u}-item-tooltip`
    }) : M]);
  }
  w === "optional" && !m && (N = v(Ie, null, [N, v("span", {
    class: `${u}-item-optional`
  }, [((s = b.value) === null || s === void 0 ? void 0 : s.optional) || ((c = Mt.Form) === null || c === void 0 ? void 0 : c.optional)])]));
  const P = oe({
    [`${u}-item-required`]: m,
    [`${u}-item-required-mark-optional`]: w === "optional",
    [`${u}-item-no-colon`]: !F
  });
  return v(Kg, D(D({}, I), {}, {
    class: _
  }), {
    default: () => [v("label", {
      for: d,
      class: P,
      title: typeof C == "string" ? C : "",
      onClick: (M) => o("click", M)
    }, [N])]
  });
};
js.displayName = "FormItemLabel";
js.inheritAttrs = !1;
const L3 = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-show-help`, o = `${t}-show-help-item`;
  return {
    [n]: {
      // Explain holder
      transition: `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
      "&-appear, &-enter": {
        opacity: 0,
        "&-active": {
          opacity: 1
        }
      },
      "&-leave": {
        opacity: 1,
        "&-active": {
          opacity: 0
        }
      },
      // Explain
      [o]: {
        overflow: "hidden",
        transition: `height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,
        [`&${o}-appear, &${o}-enter`]: {
          transform: "translateY(-5px)",
          opacity: 0,
          "&-active": {
            transform: "translateY(0)",
            opacity: 1
          }
        },
        [`&${o}-leave-active`]: {
          transform: "translateY(-5px)"
        }
      }
    }
  };
}, j3 = (e) => ({
  legend: {
    display: "block",
    width: "100%",
    marginBottom: e.marginLG,
    padding: 0,
    color: e.colorTextDescription,
    fontSize: e.fontSizeLG,
    lineHeight: "inherit",
    border: 0,
    borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
  },
  label: {
    fontSize: e.fontSize
  },
  'input[type="search"]': {
    boxSizing: "border-box"
  },
  // Position radios and checkboxes better
  'input[type="radio"], input[type="checkbox"]': {
    lineHeight: "normal"
  },
  'input[type="file"]': {
    display: "block"
  },
  // Make range inputs behave like textual form controls
  'input[type="range"]': {
    display: "block",
    width: "100%"
  },
  // Make multiple select elements height not fixed
  "select[multiple], select[size]": {
    height: "auto"
  },
  // Focus for file, radio, and checkbox
  "input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus": {
    outline: 0,
    boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`
  },
  // Adjust output element
  output: {
    display: "block",
    paddingTop: 15,
    color: e.colorText,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight
  }
}), qd = (e, t) => {
  const {
    formItemCls: n
  } = e;
  return {
    [n]: {
      [`${n}-label > label`]: {
        height: t
      },
      [`${n}-control-input`]: {
        minHeight: t
      }
    }
  };
}, H3 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [e.componentCls]: g(g(g({}, ot(e)), j3(e)), {
      [`${t}-text`]: {
        display: "inline-block",
        paddingInlineEnd: e.paddingSM
      },
      // ================================================================
      // =                             Size                             =
      // ================================================================
      "&-small": g({}, qd(e, e.controlHeightSM)),
      "&-large": g({}, qd(e, e.controlHeightLG))
    })
  };
}, B3 = (e) => {
  const {
    formItemCls: t,
    iconCls: n,
    componentCls: o,
    rootPrefixCls: r
  } = e;
  return {
    [t]: g(g({}, ot(e)), {
      marginBottom: e.marginLG,
      verticalAlign: "top",
      "&-with-help": {
        transition: "none"
      },
      [`&-hidden,
        &-hidden.${r}-row`]: {
        // https://github.com/ant-design/ant-design/issues/26141
        display: "none"
      },
      "&-has-warning": {
        [`${t}-split`]: {
          color: e.colorError
        }
      },
      "&-has-error": {
        [`${t}-split`]: {
          color: e.colorWarning
        }
      },
      // ==============================================================
      // =                            Label                           =
      // ==============================================================
      [`${t}-label`]: {
        display: "inline-block",
        flexGrow: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textAlign: "end",
        verticalAlign: "middle",
        "&-left": {
          textAlign: "start"
        },
        "&-wrap": {
          overflow: "unset",
          lineHeight: `${e.lineHeight} - 0.25em`,
          whiteSpace: "unset"
        },
        "> label": {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          maxWidth: "100%",
          height: e.controlHeight,
          color: e.colorTextHeading,
          fontSize: e.fontSize,
          [`> ${n}`]: {
            fontSize: e.fontSize,
            verticalAlign: "top"
          },
          // Required mark
          [`&${t}-required:not(${t}-required-mark-optional)::before`]: {
            display: "inline-block",
            marginInlineEnd: e.marginXXS,
            color: e.colorError,
            fontSize: e.fontSize,
            fontFamily: "SimSun, sans-serif",
            lineHeight: 1,
            content: '"*"',
            [`${o}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${t}-optional`]: {
            display: "inline-block",
            marginInlineStart: e.marginXXS,
            color: e.colorTextDescription,
            [`${o}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${t}-tooltip`]: {
            color: e.colorTextDescription,
            cursor: "help",
            writingMode: "horizontal-tb",
            marginInlineStart: e.marginXXS
          },
          "&::after": {
            content: '":"',
            position: "relative",
            marginBlock: 0,
            marginInlineStart: e.marginXXS / 2,
            marginInlineEnd: e.marginXS
          },
          [`&${t}-no-colon::after`]: {
            content: '" "'
          }
        }
      },
      // ==============================================================
      // =                            Input                           =
      // ==============================================================
      [`${t}-control`]: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        [`&:first-child:not([class^="'${r}-col-'"]):not([class*="' ${r}-col-'"])`]: {
          width: "100%"
        },
        "&-input": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          minHeight: e.controlHeight,
          "&-content": {
            flex: "auto",
            maxWidth: "100%"
          }
        }
      },
      // ==============================================================
      // =                           Explain                          =
      // ==============================================================
      [t]: {
        "&-explain, &-extra": {
          clear: "both",
          color: e.colorTextDescription,
          fontSize: e.fontSize,
          lineHeight: e.lineHeight
        },
        "&-explain-connected": {
          width: "100%"
        },
        "&-extra": {
          minHeight: e.controlHeightSM,
          transition: `color ${e.motionDurationMid} ${e.motionEaseOut}`
          // sync input color transition
        },
        "&-explain": {
          "&-error": {
            color: e.colorError
          },
          "&-warning": {
            color: e.colorWarning
          }
        }
      },
      [`&-with-help ${t}-explain`]: {
        height: "auto",
        opacity: 1
      },
      // ==============================================================
      // =                        Feedback Icon                       =
      // ==============================================================
      [`${t}-feedback-icon`]: {
        fontSize: e.fontSize,
        textAlign: "center",
        visibility: "visible",
        animationName: $s,
        animationDuration: e.motionDurationMid,
        animationTimingFunction: e.motionEaseOutBack,
        pointerEvents: "none",
        "&-success": {
          color: e.colorSuccess
        },
        "&-error": {
          color: e.colorError
        },
        "&-warning": {
          color: e.colorWarning
        },
        "&-validating": {
          color: e.colorPrimary
        }
      }
    })
  };
}, z3 = (e) => {
  const {
    componentCls: t,
    formItemCls: n,
    rootPrefixCls: o
  } = e;
  return {
    [`${t}-horizontal`]: {
      [`${n}-label`]: {
        flexGrow: 0
      },
      [`${n}-control`]: {
        flex: "1 1 0",
        // https://github.com/ant-design/ant-design/issues/32777
        // https://github.com/ant-design/ant-design/issues/33773
        minWidth: 0
      },
      // https://github.com/ant-design/ant-design/issues/32980
      [`${n}-label.${o}-col-24 + ${n}-control`]: {
        minWidth: "unset"
      }
    }
  };
}, V3 = (e) => {
  const {
    componentCls: t,
    formItemCls: n
  } = e;
  return {
    [`${t}-inline`]: {
      display: "flex",
      flexWrap: "wrap",
      [n]: {
        flex: "none",
        flexWrap: "nowrap",
        marginInlineEnd: e.margin,
        marginBottom: 0,
        "&-with-help": {
          marginBottom: e.marginLG
        },
        [`> ${n}-label,
        > ${n}-control`]: {
          display: "inline-block",
          verticalAlign: "top"
        },
        [`> ${n}-label`]: {
          flex: "none"
        },
        [`${t}-text`]: {
          display: "inline-block"
        },
        [`${n}-has-feedback`]: {
          display: "inline-block"
        }
      }
    }
  };
}, zn = (e) => ({
  margin: 0,
  padding: `0 0 ${e.paddingXS}px`,
  whiteSpace: "initial",
  textAlign: "start",
  "> label": {
    margin: 0,
    "&::after": {
      display: "none"
    }
  }
}), W3 = (e) => {
  const {
    componentCls: t,
    formItemCls: n
  } = e;
  return {
    [`${n} ${n}-label`]: zn(e),
    [t]: {
      [n]: {
        flexWrap: "wrap",
        [`${n}-label,
          ${n}-control`]: {
          flex: "0 0 100%",
          maxWidth: "100%"
        }
      }
    }
  };
}, U3 = (e) => {
  const {
    componentCls: t,
    formItemCls: n,
    rootPrefixCls: o
  } = e;
  return {
    [`${t}-vertical`]: {
      [n]: {
        "&-row": {
          flexDirection: "column"
        },
        "&-label > label": {
          height: "auto"
        },
        [`${t}-item-control`]: {
          width: "100%"
        }
      }
    },
    [`${t}-vertical ${n}-label,
      .${o}-col-24${n}-label,
      .${o}-col-xl-24${n}-label`]: zn(e),
    [`@media (max-width: ${e.screenXSMax}px)`]: [W3(e), {
      [t]: {
        [`.${o}-col-xs-24${n}-label`]: zn(e)
      }
    }],
    [`@media (max-width: ${e.screenSMMax}px)`]: {
      [t]: {
        [`.${o}-col-sm-24${n}-label`]: zn(e)
      }
    },
    [`@media (max-width: ${e.screenMDMax}px)`]: {
      [t]: {
        [`.${o}-col-md-24${n}-label`]: zn(e)
      }
    },
    [`@media (max-width: ${e.screenLGMax}px)`]: {
      [t]: {
        [`.${o}-col-lg-24${n}-label`]: zn(e)
      }
    }
  };
}, Hs = Ge("Form", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const o = we(e, {
    formItemCls: `${e.componentCls}-item`,
    rootPrefixCls: n
  });
  return [H3(o), B3(o), L3(o), z3(o), V3(o), U3(o), Cg(o), $s];
}), G3 = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ErrorList",
  inheritAttrs: !1,
  props: ["errors", "help", "onErrorVisibleChanged", "helpStatus", "warnings"],
  setup(e, t) {
    let {
      attrs: n
    } = t;
    const {
      prefixCls: o,
      status: r
    } = A3(), i = T(() => `${o.value}-item-explain`), a = T(() => !!(e.errors && e.errors.length)), l = te(r.value), [, s] = Hs(o);
    return ae([a, r], () => {
      a.value && (l.value = r.value);
    }), () => {
      var c, u;
      const d = Rg(`${o.value}-show-help-item`), f = Ci(`${o.value}-show-help-item`, d);
      return f.role = "alert", f.class = [s.value, i.value, n.class, `${o.value}-show-help`], v(Gt, D(D({}, tr(`${o.value}-show-help`)), {}, {
        onAfterEnter: () => e.onErrorVisibleChanged(!0),
        onAfterLeave: () => e.onErrorVisibleChanged(!1)
      }), {
        default: () => [Bt(v(ai, D(D({}, f), {}, {
          tag: "div"
        }), {
          default: () => [(u = e.errors) === null || u === void 0 ? void 0 : u.map((p, h) => v("div", {
            key: h,
            class: l.value ? `${i.value}-${l.value}` : ""
          }, [p]))]
        }), [[mo, !!(!((c = e.errors) === null || c === void 0) && c.length)]])]
      });
    };
  }
}), k3 = Z({
  compatConfig: {
    MODE: 3
  },
  slots: Object,
  inheritAttrs: !1,
  props: ["prefixCls", "errors", "hasFeedback", "onDomErrorVisibleChange", "wrapperCol", "help", "extra", "status", "marginBottom", "onErrorVisibleChanged"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = Ns(), {
      wrapperCol: r
    } = o, i = g({}, o);
    return delete i.labelCol, delete i.wrapperCol, Xg(i), _3({
      prefixCls: T(() => e.prefixCls),
      status: T(() => e.status)
    }), () => {
      var a, l, s;
      const {
        prefixCls: c,
        wrapperCol: u,
        marginBottom: d,
        onErrorVisibleChanged: f,
        help: p = (a = n.help) === null || a === void 0 ? void 0 : a.call(n),
        errors: h = ht((l = n.errors) === null || l === void 0 ? void 0 : l.call(n)),
        // hasFeedback,
        // status,
        extra: m = (s = n.extra) === null || s === void 0 ? void 0 : s.call(n)
      } = e, w = `${c}-item`, b = u || (r == null ? void 0 : r.value) || {}, C = oe(`${w}-control`, b.class);
      return v(Kg, D(D({}, b), {}, {
        class: C
      }), {
        default: () => {
          var S;
          return v(Ie, null, [v("div", {
            class: `${w}-control-input`
          }, [v("div", {
            class: `${w}-control-input-content`
          }, [(S = n.default) === null || S === void 0 ? void 0 : S.call(n)])]), d !== null || h.length ? v("div", {
            style: {
              display: "flex",
              flexWrap: "nowrap"
            }
          }, [v(G3, {
            errors: h,
            help: p,
            class: `${w}-explain-connected`,
            onErrorVisibleChanged: f
          }, null), !!d && v("div", {
            style: {
              width: 0,
              height: `${d}px`
            }
          }, null)]) : null, m ? v("div", {
            class: `${w}-extra`
          }, [m]) : null]);
        }
      });
    };
  }
});
function X3(e) {
  const t = k(e.value.slice());
  let n = null;
  return Pe(() => {
    clearTimeout(n), n = setTimeout(() => {
      t.value = e.value;
    }, e.value.length ? 0 : 10);
  }), t;
}
an("success", "warning", "error", "validating", "");
const q3 = {
  success: qt,
  warning: Kt,
  error: St,
  validating: Ot
};
function wa(e, t, n) {
  let o = e;
  const r = t;
  let i = 0;
  try {
    for (let a = r.length; i < a - 1 && !(!o && !n); ++i) {
      const l = r[i];
      if (l in o)
        o = o[l];
      else {
        if (n)
          throw Error("please transfer a valid name path to form item!");
        break;
      }
    }
    if (n && !o)
      throw Error("please transfer a valid name path to form item!");
  } catch {
    console.error("please transfer a valid name path to form item!");
  }
  return {
    o,
    k: r[i],
    v: o ? o[r[i]] : void 0
  };
}
const K3 = () => ({
  htmlFor: String,
  prefixCls: String,
  label: V.any,
  help: V.any,
  extra: V.any,
  labelCol: {
    type: Object
  },
  wrapperCol: {
    type: Object
  },
  hasFeedback: {
    type: Boolean,
    default: !1
  },
  colon: {
    type: Boolean,
    default: void 0
  },
  labelAlign: String,
  prop: {
    type: [String, Number, Array]
  },
  name: {
    type: [String, Number, Array]
  },
  rules: [Array, Object],
  autoLink: {
    type: Boolean,
    default: !0
  },
  required: {
    type: Boolean,
    default: void 0
  },
  validateFirst: {
    type: Boolean,
    default: void 0
  },
  validateStatus: V.oneOf(an("", "success", "warning", "error", "validating")),
  validateTrigger: {
    type: [String, Array]
  },
  messageVariables: {
    type: Object
  },
  hidden: Boolean,
  noStyle: Boolean,
  tooltip: String
});
let Y3 = 0;
const Q3 = "form_item", Yg = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItem",
  inheritAttrs: !1,
  __ANT_NEW_FORM_ITEM: !0,
  props: K3(),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      expose: r
    } = t;
    ro(e.prop === void 0, "`prop` is deprecated. Please use `name` instead.");
    const i = `form-item-${++Y3}`, {
      prefixCls: a
    } = Se("form", e), [l, s] = Hs(a), c = k(), u = Ns(), d = T(() => e.name || e.prop), f = k([]), p = k(!1), h = k(), m = T(() => {
      const G = d.value;
      return wl(G);
    }), w = T(() => {
      if (m.value.length) {
        const G = u.name.value, ee = m.value.join("_");
        return G ? `${G}_${ee}` : `${Q3}_${ee}`;
      } else
        return;
    }), b = () => {
      const G = u.model.value;
      if (!(!G || !d.value))
        return wa(G, m.value, !0).v;
    }, C = T(() => b()), S = k(Lr(C.value)), x = T(() => {
      let G = e.validateTrigger !== void 0 ? e.validateTrigger : u.validateTrigger.value;
      return G = G === void 0 ? "change" : G, nn(G);
    }), $ = T(() => {
      let G = u.rules.value;
      const ee = e.rules, re = e.required !== void 0 ? {
        required: !!e.required,
        trigger: x.value
      } : [], ie = wa(G, m.value);
      G = G ? ie.o[ie.k] || ie.v : [];
      const X = [].concat(ee || G || []);
      return JO(X, (B) => B.required) ? X : X.concat(re);
    }), O = T(() => {
      const G = $.value;
      let ee = !1;
      return G && G.length && G.every((re) => re.required ? (ee = !0, !1) : !0), ee || e.required;
    }), y = k();
    Pe(() => {
      y.value = e.validateStatus;
    });
    const I = T(() => {
      let G = {};
      return typeof e.label == "string" ? G.label = e.label : e.name && (G.label = String(e.name)), e.messageVariables && (G = g(g({}, G), e.messageVariables)), G;
    }), E = (G) => {
      if (m.value.length === 0)
        return;
      const {
        validateFirst: ee = !1
      } = e, {
        triggerName: re
      } = G || {};
      let ie = $.value;
      if (re && (ie = ie.filter((B) => {
        const {
          trigger: U
        } = B;
        return !U && !x.value.length ? !0 : nn(U || x.value).includes(re);
      })), !ie.length)
        return Promise.resolve();
      const X = Gg(m.value, C.value, ie, g({
        validateMessages: u.validateMessages.value
      }, G), ee, I.value);
      return y.value = "validating", f.value = [], X.catch((B) => B).then(function() {
        let B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (y.value === "validating") {
          const U = B.filter((ne) => ne && ne.errors.length);
          y.value = U.length ? "error" : "success", f.value = U.map((ne) => ne.errors), u.onValidate(d.value, !f.value.length, f.value.length ? rn(f.value[0]) : null);
        }
      }), X;
    }, R = () => {
      E({
        triggerName: "blur"
      });
    }, _ = () => {
      if (p.value) {
        p.value = !1;
        return;
      }
      E({
        triggerName: "change"
      });
    }, N = () => {
      y.value = e.validateStatus, p.value = !1, f.value = [];
    }, F = () => {
      var G;
      y.value = e.validateStatus, p.value = !0, f.value = [];
      const ee = u.model.value || {}, re = C.value, ie = wa(ee, m.value, !0);
      Array.isArray(re) ? ie.o[ie.k] = [].concat((G = S.value) !== null && G !== void 0 ? G : []) : ie.o[ie.k] = S.value, Fe(() => {
        p.value = !1;
      });
    }, j = T(() => e.htmlFor === void 0 ? w.value : e.htmlFor), P = () => {
      const G = j.value;
      if (!G || !h.value)
        return;
      const ee = h.value.$el.querySelector(`[id="${G}"]`);
      ee && ee.focus && ee.focus();
    };
    r({
      onFieldBlur: R,
      onFieldChange: _,
      clearValidate: N,
      resetField: F
    }), t$({
      id: w,
      onFieldBlur: () => {
        e.autoLink && R();
      },
      onFieldChange: () => {
        e.autoLink && _();
      },
      clearValidate: N
    }, T(() => !!(e.autoLink && u.model.value && d.value)));
    let M = !1;
    ae(d, (G) => {
      G ? M || (M = !0, u.addField(i, {
        fieldValue: C,
        fieldId: w,
        fieldName: d,
        resetField: F,
        clearValidate: N,
        namePath: m,
        validateRules: E,
        rules: $
      })) : (M = !1, u.removeField(i));
    }, {
      immediate: !0
    }), Ae(() => {
      u.removeField(i);
    });
    const L = X3(f), H = T(() => e.validateStatus !== void 0 ? e.validateStatus : L.value.length ? "error" : y.value), A = T(() => ({
      [`${a.value}-item`]: !0,
      [s.value]: !0,
      // Status
      [`${a.value}-item-has-feedback`]: H.value && e.hasFeedback,
      [`${a.value}-item-has-success`]: H.value === "success",
      [`${a.value}-item-has-warning`]: H.value === "warning",
      [`${a.value}-item-has-error`]: H.value === "error",
      [`${a.value}-item-is-validating`]: H.value === "validating",
      [`${a.value}-item-hidden`]: e.hidden
    })), z = Le({});
    sn.useProvide(z), Pe(() => {
      let G;
      if (e.hasFeedback) {
        const ee = H.value && q3[H.value];
        G = ee ? v("span", {
          class: oe(`${a.value}-item-feedback-icon`, `${a.value}-item-feedback-icon-${H.value}`)
        }, [v(ee, null, null)]) : null;
      }
      g(z, {
        status: H.value,
        hasFeedback: e.hasFeedback,
        feedbackIcon: G,
        isFormItemInput: !0
      });
    });
    const q = k(null), Y = k(!1), K = () => {
      if (c.value) {
        const G = getComputedStyle(c.value);
        q.value = parseInt(G.marginBottom, 10);
      }
    };
    be(() => {
      ae(Y, () => {
        Y.value && K();
      }, {
        flush: "post",
        immediate: !0
      });
    });
    const W = (G) => {
      G || (q.value = null);
    };
    return () => {
      var G, ee;
      if (e.noStyle) return (G = n.default) === null || G === void 0 ? void 0 : G.call(n);
      const re = (ee = e.help) !== null && ee !== void 0 ? ee : n.help ? ht(n.help()) : null, ie = !!(re != null && Array.isArray(re) && re.length || L.value.length);
      return Y.value = ie, l(v("div", {
        class: [A.value, ie ? `${a.value}-item-with-help` : "", o.class],
        ref: c
      }, [v(VI, D(D({}, o), {}, {
        class: `${a.value}-item-row`,
        key: "row"
      }), {
        default: () => {
          var X, B;
          return v(Ie, null, [v(js, D(D({}, e), {}, {
            htmlFor: j.value,
            required: O.value,
            requiredMark: u.requiredMark.value,
            prefixCls: a.value,
            onClick: P,
            label: e.label
          }), {
            label: n.label,
            tooltip: n.tooltip
          }), v(k3, D(D({}, e), {}, {
            errors: re != null ? nn(re) : L.value,
            marginBottom: q.value,
            prefixCls: a.value,
            status: H.value,
            ref: h,
            help: re,
            extra: (X = e.extra) !== null && X !== void 0 ? X : (B = n.extra) === null || B === void 0 ? void 0 : B.call(n),
            onErrorVisibleChanged: W
          }), {
            default: n.default
          })]);
        }
      }), !!q.value && v("div", {
        class: `${a.value}-margin-offset`,
        style: {
          marginBottom: `-${q.value}px`
        }
      }, null)]));
    };
  }
});
function Qg(e) {
  let t = !1, n = e.length;
  const o = [];
  return e.length ? new Promise((r, i) => {
    e.forEach((a, l) => {
      a.catch((s) => (t = !0, s)).then((s) => {
        n -= 1, o[l] = s, !(n > 0) && (t && i(o), r(o));
      });
    });
  }) : Promise.resolve([]);
}
function Kd(e) {
  let t = !1;
  return e && e.length && e.every((n) => n.required ? (t = !0, !1) : !0), t;
}
function Yd(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Sa(e, t, n) {
  let o = e;
  t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, "");
  const r = t.split(".");
  let i = 0;
  for (let a = r.length; i < a - 1 && !(!o && !n); ++i) {
    const l = r[i];
    if (l in o)
      o = o[l];
    else {
      if (n)
        throw new Error("please transfer a valid name path to validate!");
      break;
    }
  }
  return {
    o,
    k: r[i],
    v: o ? o[r[i]] : null,
    isValid: o && r[i] in o
  };
}
function Z3(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : te({}), n = arguments.length > 2 ? arguments[2] : void 0;
  const o = Lr(ge(e)), r = Le({}), i = k([]), a = (S) => {
    g(ge(e), g(g({}, Lr(o)), S)), Fe(() => {
      Object.keys(r).forEach((x) => {
        r[x] = {
          autoLink: !1,
          required: Kd(ge(t)[x])
        };
      });
    });
  }, l = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], x = arguments.length > 1 ? arguments[1] : void 0;
    return x.length ? S.filter(($) => {
      const O = Yd($.trigger || "change");
      return o4(O, x).length;
    }) : S;
  };
  let s = null;
  const c = function(S) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, $ = arguments.length > 2 ? arguments[2] : void 0;
    const O = [], y = {};
    for (let R = 0; R < S.length; R++) {
      const _ = S[R], N = Sa(ge(e), _, $);
      if (!N.isValid) continue;
      y[_] = N.v;
      const F = l(ge(t)[_], Yd(x && x.trigger));
      F.length && O.push(u(_, N.v, F, x || {}).then(() => ({
        name: _,
        errors: [],
        warnings: []
      })).catch((j) => {
        const P = [], M = [];
        return j.forEach((L) => {
          let {
            rule: {
              warningOnly: H
            },
            errors: A
          } = L;
          H ? M.push(...A) : P.push(...A);
        }), P.length ? Promise.reject({
          name: _,
          errors: P,
          warnings: M
        }) : {
          name: _,
          errors: P,
          warnings: M
        };
      }));
    }
    const I = Qg(O);
    s = I;
    const E = I.then(() => s === I ? Promise.resolve(y) : Promise.reject([])).catch((R) => {
      const _ = R.filter((N) => N && N.errors.length);
      return _.length ? Promise.reject({
        values: y,
        errorFields: _,
        outOfDate: s !== I
      }) : Promise.resolve(y);
    });
    return E.catch((R) => R), E;
  }, u = function(S, x, $) {
    let O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const y = Gg([S], x, $, g({
      validateMessages: Ri
    }, O), !!O.validateFirst);
    return r[S] ? (r[S].validateStatus = "validating", y.catch((I) => I).then(function() {
      let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var E;
      if (r[S].validateStatus === "validating") {
        const R = I.filter((_) => _ && _.errors.length);
        r[S].validateStatus = R.length ? "error" : "success", r[S].help = R.length ? R.map((_) => _.errors) : null, (E = n == null ? void 0 : n.onValidate) === null || E === void 0 || E.call(n, S, !R.length, R.length ? rn(r[S].help[0]) : null);
      }
    }), y) : y.catch((I) => I);
  }, d = (S, x) => {
    let $ = [], O = !0;
    S ? Array.isArray(S) ? $ = S : $ = [S] : (O = !1, $ = i.value);
    const y = c($, x || {}, O);
    return y.catch((I) => I), y;
  }, f = (S) => {
    let x = [];
    S ? Array.isArray(S) ? x = S : x = [S] : x = i.value, x.forEach(($) => {
      r[$] && g(r[$], {
        validateStatus: "",
        help: null
      });
    });
  }, p = (S) => {
    const x = {
      autoLink: !1
    }, $ = [], O = Array.isArray(S) ? S : [S];
    for (let y = 0; y < O.length; y++) {
      const I = O[y];
      (I == null ? void 0 : I.validateStatus) === "error" && (x.validateStatus = "error", I.help && $.push(I.help)), x.required = x.required || (I == null ? void 0 : I.required);
    }
    return x.help = $, x;
  };
  let h = o, m = !0;
  const w = (S) => {
    const x = [];
    i.value.forEach(($) => {
      const O = Sa(S, $, !1), y = Sa(h, $, !1);
      (m && (n == null ? void 0 : n.immediate) && O.isValid || !es(O.v, y.v)) && x.push($);
    }), d(x, {
      trigger: "change"
    }), m = !1, h = Lr(rn(S));
  }, b = n == null ? void 0 : n.debounce;
  let C = !0;
  return ae(t, () => {
    i.value = t ? Object.keys(ge(t)) : [], !C && n && n.validateOnRuleChange && d(), C = !1;
  }, {
    deep: !0,
    immediate: !0
  }), ae(i, () => {
    const S = {};
    i.value.forEach((x) => {
      S[x] = g({}, r[x], {
        autoLink: !1,
        required: Kd(ge(t)[x])
      }), delete r[x];
    });
    for (const x in r)
      Object.prototype.hasOwnProperty.call(r, x) && delete r[x];
    g(r, S);
  }, {
    immediate: !0
  }), ae(e, b && b.wait ? XO(w, b.wait, m4(b, ["wait"])) : w, {
    immediate: n && !!n.immediate,
    deep: !0
  }), {
    modelRef: e,
    rulesRef: t,
    initialModel: o,
    validateInfos: r,
    resetFields: a,
    validate: d,
    validateField: u,
    mergeValidateInfo: p,
    clearValidate: f
  };
}
const J3 = () => ({
  layout: V.oneOf(an("horizontal", "inline", "vertical")),
  labelCol: pe(),
  wrapperCol: pe(),
  colon: Ce(),
  labelAlign: Te(),
  labelWrap: Ce(),
  prefixCls: String,
  requiredMark: Ye([String, Boolean]),
  /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
  hideRequiredMark: Ce(),
  model: V.object,
  rules: pe(),
  validateMessages: pe(),
  validateOnRuleChange: Ce(),
  // 提交失败自动滚动到第一个错误字段
  scrollToFirstError: Re(),
  onSubmit: se(),
  name: String,
  validateTrigger: Ye([String, Array]),
  size: Te(),
  disabled: Ce(),
  onValuesChange: se(),
  onFieldsChange: se(),
  onFinish: se(),
  onFinishFailed: se(),
  onValidate: se()
});
function e6(e, t) {
  return es(nn(e), nn(t));
}
const Zt = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AForm",
  inheritAttrs: !1,
  props: Be(J3(), {
    layout: "horizontal",
    hideRequiredMark: !1,
    colon: !0
  }),
  Item: Yg,
  useForm: Z3,
  // emits: ['finishFailed', 'submit', 'finish', 'validate'],
  setup(e, t) {
    let {
      emit: n,
      slots: o,
      expose: r,
      attrs: i
    } = t;
    const {
      prefixCls: a,
      direction: l,
      form: s,
      size: c,
      disabled: u
    } = Se("form", e), d = T(() => e.requiredMark === "" || e.requiredMark), f = T(() => {
      var L;
      return d.value !== void 0 ? d.value : s && ((L = s.value) === null || L === void 0 ? void 0 : L.requiredMark) !== void 0 ? s.value.requiredMark : !e.hideRequiredMark;
    });
    Yp(c), mp(u);
    const p = T(() => {
      var L, H;
      return (L = e.colon) !== null && L !== void 0 ? L : (H = s.value) === null || H === void 0 ? void 0 : H.colon;
    }), {
      validateMessages: h
    } = t0(), m = T(() => g(g(g({}, Ri), h.value), e.validateMessages)), [w, b] = Hs(a), C = T(() => oe(a.value, {
      [`${a.value}-${e.layout}`]: !0,
      [`${a.value}-hide-required-mark`]: f.value === !1,
      [`${a.value}-rtl`]: l.value === "rtl",
      [`${a.value}-${c.value}`]: c.value
    }, b.value)), S = te(), x = {}, $ = (L, H) => {
      x[L] = H;
    }, O = (L) => {
      delete x[L];
    }, y = (L) => {
      const H = !!L, A = H ? nn(L).map(wl) : [];
      return H ? Object.values(x).filter((z) => A.findIndex((q) => e6(q, z.fieldName.value)) > -1) : Object.values(x);
    }, I = (L) => {
      if (!e.model) {
        et(!1, "Form", "model is required for resetFields to work.");
        return;
      }
      y(L).forEach((H) => {
        H.resetField();
      });
    }, E = (L) => {
      y(L).forEach((H) => {
        H.clearValidate();
      });
    }, R = (L) => {
      const {
        scrollToFirstError: H
      } = e;
      if (n("finishFailed", L), H && L.errorFields.length) {
        let A = {};
        typeof H == "object" && (A = H), N(L.errorFields[0].name, A);
      }
    }, _ = function() {
      return P(...arguments);
    }, N = function(L) {
      let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const A = y(L ? [L] : void 0);
      if (A.length) {
        const z = A[0].fieldId.value, q = z ? document.getElementById(z) : null;
        q && Zy(q, g({
          scrollMode: "if-needed",
          block: "nearest"
        }, H));
      }
    }, F = function() {
      let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      if (L === !0) {
        const H = [];
        return Object.values(x).forEach((A) => {
          let {
            namePath: z
          } = A;
          H.push(z.value);
        }), kd(e.model, H);
      } else
        return kd(e.model, L);
    }, j = (L, H) => {
      if (et(!(L instanceof Function), "Form", "validateFields/validateField/validate not support callback, please use promise instead"), !e.model)
        return et(!1, "Form", "model is required for validateFields to work."), Promise.reject("Form `model` is required for validateFields to work.");
      const A = !!L, z = A ? nn(L).map(wl) : [], q = [];
      Object.values(x).forEach((W) => {
        var G;
        if (A || z.push(W.namePath.value), !(!((G = W.rules) === null || G === void 0) && G.value.length))
          return;
        const ee = W.namePath.value;
        if (!A || C3(z, ee)) {
          const re = W.validateRules(g({
            validateMessages: m.value
          }, H));
          q.push(re.then(() => ({
            name: ee,
            errors: [],
            warnings: []
          })).catch((ie) => {
            const X = [], B = [];
            return ie.forEach((U) => {
              let {
                rule: {
                  warningOnly: ne
                },
                errors: Q
              } = U;
              ne ? B.push(...Q) : X.push(...Q);
            }), X.length ? Promise.reject({
              name: ee,
              errors: X,
              warnings: B
            }) : {
              name: ee,
              errors: X,
              warnings: B
            };
          }));
        }
      });
      const Y = Qg(q);
      S.value = Y;
      const K = Y.then(() => S.value === Y ? Promise.resolve(F(z)) : Promise.reject([])).catch((W) => {
        const G = W.filter((ee) => ee && ee.errors.length);
        return Promise.reject({
          values: F(z),
          errorFields: G,
          outOfDate: S.value !== Y
        });
      });
      return K.catch((W) => W), K;
    }, P = function() {
      return j(...arguments);
    }, M = (L) => {
      L.preventDefault(), L.stopPropagation(), n("submit", L), e.model && j().then((A) => {
        n("finish", A);
      }).catch((A) => {
        R(A);
      });
    };
    return r({
      resetFields: I,
      clearValidate: E,
      validateFields: j,
      getFieldsValue: F,
      validate: _,
      scrollToField: N
    }), Xg({
      model: T(() => e.model),
      name: T(() => e.name),
      labelAlign: T(() => e.labelAlign),
      labelCol: T(() => e.labelCol),
      labelWrap: T(() => e.labelWrap),
      wrapperCol: T(() => e.wrapperCol),
      vertical: T(() => e.layout === "vertical"),
      colon: p,
      requiredMark: f,
      validateTrigger: T(() => e.validateTrigger),
      rules: T(() => e.rules),
      addField: $,
      removeField: O,
      onValidate: (L, H, A) => {
        n("validate", L, H, A);
      },
      validateMessages: m
    }), ae(() => e.rules, () => {
      e.validateOnRuleChange && j();
    }), () => {
      var L;
      return w(v("form", D(D({}, i), {}, {
        onSubmit: M,
        class: [C.value, i.class]
      }), [(L = o.default) === null || L === void 0 ? void 0 : L.call(o)]));
    };
  }
});
Zt.useInjectFormItemContext = or;
Zt.ItemRest = cl;
Zt.install = function(e) {
  return e.component(Zt.name, Zt), e.component(Zt.Item.name, Zt.Item), e.component(cl.name, cl), e;
};
let Hr = g({}, Mt.Modal);
function t6(e) {
  e ? Hr = g(g({}, Hr), e) : Hr = g({}, Mt.Modal);
}
function n6() {
  return Hr;
}
const xl = "internalMark", Br = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    et(e.ANT_MARK__ === xl, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    const o = Le({
      antLocale: g(g({}, e.locale), {
        exist: !0
      }),
      ANT_MARK__: xl
    });
    return _e("localeData", o), ae(() => e.locale, (r) => {
      t6(r && r.Modal), o.antLocale = g(g({}, r), {
        exist: !0
      });
    }, {
      immediate: !0
    }), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
Br.install = function(e) {
  return e.component(Br.name, Br), e;
};
const o6 = In(Br), Di = Z({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t, r, i = !1;
    const a = T(() => e.duration === void 0 ? 4.5 : e.duration), l = () => {
      a.value && !i && (r = setTimeout(() => {
        c();
      }, a.value * 1e3));
    }, s = () => {
      r && (clearTimeout(r), r = null);
    }, c = (d) => {
      d && d.stopPropagation(), s();
      const {
        onClose: f,
        noticeKey: p
      } = e;
      f && f(p);
    }, u = () => {
      s(), l();
    };
    return be(() => {
      l();
    }), Zo(() => {
      i = !0, s();
    }), ae([a, () => e.updateMark, () => e.visible], (d, f) => {
      let [p, h, m] = d, [w, b, C] = f;
      (p !== w || h !== b || m !== C && C) && u();
    }, {
      flush: "post"
    }), () => {
      var d, f;
      const {
        prefixCls: p,
        closable: h,
        closeIcon: m = (d = o.closeIcon) === null || d === void 0 ? void 0 : d.call(o),
        onClick: w,
        holder: b
      } = e, {
        class: C,
        style: S
      } = n, x = `${p}-notice`, $ = Object.keys(n).reduce((y, I) => ((I.startsWith("data-") || I.startsWith("aria-") || I === "role") && (y[I] = n[I]), y), {}), O = v("div", D({
        class: oe(x, C, {
          [`${x}-closable`]: h
        }),
        style: S,
        onMouseenter: s,
        onMouseleave: l,
        onClick: w
      }, $), [v("div", {
        class: `${x}-content`
      }, [(f = o.default) === null || f === void 0 ? void 0 : f.call(o)]), h ? v("a", {
        tabindex: 0,
        onClick: c,
        class: `${x}-close`
      }, [m || v("span", {
        class: `${x}-close-x`
      }, null)]) : null]);
      return b ? v(Yf, {
        to: b
      }, {
        default: () => O
      }) : O;
    };
  }
});
var r6 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
let Qd = 0;
const i6 = Date.now();
function Zd() {
  const e = Qd;
  return Qd += 1, `rcNotification_${i6}_${e}`;
}
const ri = Z({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
  setup(e, t) {
    let {
      attrs: n,
      expose: o,
      slots: r
    } = t;
    const i = /* @__PURE__ */ new Map(), a = te([]), l = T(() => {
      const {
        prefixCls: u,
        animation: d = "fade"
      } = e;
      let f = e.transitionName;
      return !f && d && (f = `${u}-${d}`), Ci(f);
    }), s = (u, d) => {
      const f = u.key || Zd(), p = g(g({}, u), {
        key: f
      }), {
        maxCount: h
      } = e, m = a.value.map((b) => b.notice.key).indexOf(f), w = a.value.concat();
      m !== -1 ? w.splice(m, 1, {
        notice: p,
        holderCallback: d
      }) : (h && a.value.length >= h && (p.key = w[0].notice.key, p.updateMark = Zd(), p.userPassKey = f, w.shift()), w.push({
        notice: p,
        holderCallback: d
      })), a.value = w;
    }, c = (u) => {
      a.value = rn(a.value).filter((d) => {
        let {
          notice: {
            key: f,
            userPassKey: p
          }
        } = d;
        return (p || f) !== u;
      });
    };
    return o({
      add: s,
      remove: c,
      notices: a
    }), () => {
      var u;
      const {
        prefixCls: d,
        closeIcon: f = (u = r.closeIcon) === null || u === void 0 ? void 0 : u.call(r, {
          prefixCls: d
        })
      } = e, p = a.value.map((m, w) => {
        let {
          notice: b,
          holderCallback: C
        } = m;
        const S = w === a.value.length - 1 ? b.updateMark : void 0, {
          key: x,
          userPassKey: $
        } = b, {
          content: O
        } = b, y = g(g(g({
          prefixCls: d,
          closeIcon: typeof f == "function" ? f({
            prefixCls: d
          }) : f
        }, b), b.props), {
          key: x,
          noticeKey: $ || x,
          updateMark: S,
          onClose: (I) => {
            var E;
            c(I), (E = b.onClose) === null || E === void 0 || E.call(b);
          },
          onClick: b.onClick
        });
        return C ? v("div", {
          key: x,
          class: `${d}-hook-holder`,
          ref: (I) => {
            typeof x > "u" || (I ? (i.set(x, I), C(I, y)) : i.delete(x));
          }
        }, null) : v(Di, D(D({}, y), {}, {
          class: oe(y.class, e.hashId)
        }), {
          default: () => [typeof O == "function" ? O({
            prefixCls: d
          }) : O]
        });
      }), h = {
        [d]: 1,
        [n.class]: !!n.class,
        [e.hashId]: !0
      };
      return v("div", {
        class: h,
        style: n.style || {
          top: "65px",
          left: "50%"
        }
      }, [v(ai, D({
        tag: "div"
      }, l.value), {
        default: () => [p]
      })]);
    };
  }
});
ri.newInstance = function(t, n) {
  const o = t || {}, {
    name: r = "notification",
    getContainer: i,
    appContext: a,
    prefixCls: l,
    rootPrefixCls: s,
    transitionName: c,
    hasTransitionName: u,
    useStyle: d
  } = o, f = r6(o, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]), p = document.createElement("div");
  i ? i().appendChild(p) : document.body.appendChild(p);
  const h = Z({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup(w, b) {
      let {
        attrs: C
      } = b;
      const S = k(), x = T(() => Ve.getPrefixCls(r, l)), [, $] = d(x);
      return be(() => {
        n({
          notice(O) {
            var y;
            (y = S.value) === null || y === void 0 || y.add(O);
          },
          removeNotice(O) {
            var y;
            (y = S.value) === null || y === void 0 || y.remove(O);
          },
          destroy() {
            on(null, p), p.parentNode && p.parentNode.removeChild(p);
          },
          component: S
        });
      }), () => {
        const O = Ve, y = O.getRootPrefixCls(s, x.value), I = u ? c : `${x.value}-${c}`;
        return v(Jn, D(D({}, O), {}, {
          prefixCls: y
        }), {
          default: () => [v(ri, D(D({
            ref: S
          }, C), {}, {
            prefixCls: x.value,
            transitionName: I,
            hashId: $.value
          }), null)]
        });
      };
    }
  }), m = v(h, f);
  m.appContext = a || m.appContext, on(m, p);
};
let Jd = 0;
const a6 = Date.now();
function ef() {
  const e = Jd;
  return Jd += 1, `rcNotification_${a6}_${e}`;
}
const l6 = Z({
  name: "HookNotification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const r = /* @__PURE__ */ new Map(), i = T(() => e.notices), a = T(() => {
      let u = e.transitionName;
      if (!u && e.animation)
        switch (typeof e.animation) {
          case "string":
            u = e.animation;
            break;
          case "function":
            u = e.animation().name;
            break;
          case "object":
            u = e.animation.name;
            break;
          default:
            u = `${e.prefixCls}-fade`;
            break;
        }
      return Ci(u);
    }), l = (u) => e.remove(u), s = te({});
    ae(i, () => {
      const u = {};
      Object.keys(s.value).forEach((d) => {
        u[d] = [];
      }), e.notices.forEach((d) => {
        const {
          placement: f = "topRight"
        } = d.notice;
        f && (u[f] = u[f] || [], u[f].push(d));
      }), s.value = u;
    });
    const c = T(() => Object.keys(s.value));
    return () => {
      var u;
      const {
        prefixCls: d,
        closeIcon: f = (u = o.closeIcon) === null || u === void 0 ? void 0 : u.call(o, {
          prefixCls: d
        })
      } = e, p = c.value.map((h) => {
        var m, w;
        const b = s.value[h], C = (m = e.getClassName) === null || m === void 0 ? void 0 : m.call(e, h), S = (w = e.getStyles) === null || w === void 0 ? void 0 : w.call(e, h), x = b.map((y, I) => {
          let {
            notice: E,
            holderCallback: R
          } = y;
          const _ = I === i.value.length - 1 ? E.updateMark : void 0, {
            key: N,
            userPassKey: F
          } = E, {
            content: j
          } = E, P = g(g(g({
            prefixCls: d,
            closeIcon: typeof f == "function" ? f({
              prefixCls: d
            }) : f
          }, E), E.props), {
            key: N,
            noticeKey: F || N,
            updateMark: _,
            onClose: (M) => {
              var L;
              l(M), (L = E.onClose) === null || L === void 0 || L.call(E);
            },
            onClick: E.onClick
          });
          return R ? v("div", {
            key: N,
            class: `${d}-hook-holder`,
            ref: (M) => {
              typeof N > "u" || (M ? (r.set(N, M), R(M, P)) : r.delete(N));
            }
          }, null) : v(Di, D(D({}, P), {}, {
            class: oe(P.class, e.hashId)
          }), {
            default: () => [typeof j == "function" ? j({
              prefixCls: d
            }) : j]
          });
        }), $ = {
          [d]: 1,
          [`${d}-${h}`]: 1,
          [n.class]: !!n.class,
          [e.hashId]: !0,
          [C]: !!C
        };
        function O() {
          var y;
          b.length > 0 || (Reflect.deleteProperty(s.value, h), (y = e.onAllRemoved) === null || y === void 0 || y.call(e));
        }
        return v("div", {
          key: h,
          class: $,
          style: n.style || S || {
            top: "65px",
            left: "50%"
          }
        }, [v(ai, D(D({
          tag: "div"
        }, a.value), {}, {
          onAfterLeave: O
        }), {
          default: () => [x]
        })]);
      });
      return v(Rm, {
        getContainer: e.getContainer
      }, {
        default: () => [p]
      });
    };
  }
});
var s6 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const c6 = () => document.body;
let tf = 0;
function u6() {
  const e = {};
  for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
    n[o] = arguments[o];
  return n.forEach((r) => {
    r && Object.keys(r).forEach((i) => {
      const a = r[i];
      a !== void 0 && (e[i] = a);
    });
  }), e;
}
function Zg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    getContainer: t = c6,
    motion: n,
    prefixCls: o,
    maxCount: r,
    getClassName: i,
    getStyles: a,
    onAllRemoved: l
  } = e, s = s6(e, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]), c = k([]), u = k(), d = (b, C) => {
    const S = b.key || ef(), x = g(g({}, b), {
      key: S
    }), $ = c.value.map((y) => y.notice.key).indexOf(S), O = c.value.concat();
    $ !== -1 ? O.splice($, 1, {
      notice: x,
      holderCallback: C
    }) : (r && c.value.length >= r && (x.key = O[0].notice.key, x.updateMark = ef(), x.userPassKey = S, O.shift()), O.push({
      notice: x,
      holderCallback: C
    })), c.value = O;
  }, f = (b) => {
    c.value = c.value.filter((C) => {
      let {
        notice: {
          key: S,
          userPassKey: x
        }
      } = C;
      return (x || S) !== b;
    });
  }, p = () => {
    c.value = [];
  }, h = () => v(l6, {
    ref: u,
    prefixCls: o,
    maxCount: r,
    notices: c.value,
    remove: f,
    getClassName: i,
    getStyles: a,
    animation: n,
    hashId: e.hashId,
    onAllRemoved: l,
    getContainer: t
  }, null), m = k([]), w = {
    open: (b) => {
      const C = u6(s, b);
      (C.key === null || C.key === void 0) && (C.key = `vc-notification-${tf}`, tf += 1), m.value = [...m.value, {
        type: "open",
        config: C
      }];
    },
    close: (b) => {
      m.value = [...m.value, {
        type: "close",
        key: b
      }];
    },
    destroy: () => {
      m.value = [...m.value, {
        type: "destroy"
      }];
    }
  };
  return ae(m, () => {
    m.value.length && (m.value.forEach((b) => {
      switch (b.type) {
        case "open":
          d(b.config);
          break;
        case "close":
          f(b.key);
          break;
        case "destroy":
          p();
          break;
      }
    }), m.value = []);
  }), [w, h];
}
const d6 = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    boxShadowSecondary: o,
    colorBgElevated: r,
    colorSuccess: i,
    colorError: a,
    colorWarning: l,
    colorInfo: s,
    fontSizeLG: c,
    motionEaseInOutCirc: u,
    motionDurationSlow: d,
    marginXS: f,
    paddingXS: p,
    borderRadiusLG: h,
    zIndexPopup: m,
    // Custom token
    messageNoticeContentPadding: w
  } = e, b = new fe("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: p,
      transform: "translateY(0)",
      opacity: 1
    }
  }), C = new fe("MessageMoveOut", {
    "0%": {
      maxHeight: e.height,
      padding: p,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [t]: g(g({}, ot(e)), {
        position: "fixed",
        top: f,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        pointerEvents: "none",
        zIndex: m,
        [`${t}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
          animationName: b,
          animationDuration: d,
          animationPlayState: "paused",
          animationTimingFunction: u
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: C,
          animationDuration: d,
          animationPlayState: "paused",
          animationTimingFunction: u
        },
        [`${t}-move-up-leave${t}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [`${t}-notice`]: {
        padding: p,
        textAlign: "center",
        [n]: {
          verticalAlign: "text-bottom",
          marginInlineEnd: f,
          fontSize: c
        },
        [`${t}-notice-content`]: {
          display: "inline-block",
          padding: w,
          background: r,
          borderRadius: h,
          boxShadow: o,
          pointerEvents: "all"
        },
        [`${t}-success ${n}`]: {
          color: i
        },
        [`${t}-error ${n}`]: {
          color: a
        },
        [`${t}-warning ${n}`]: {
          color: l
        },
        [`
        ${t}-info ${n},
        ${t}-loading ${n}`]: {
          color: s
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: {
        padding: 0,
        textAlign: "start"
      }
    }
  ];
}, Bs = Ge("Message", (e) => {
  const t = we(e, {
    messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
  });
  return [d6(t)];
}, (e) => ({
  height: 150,
  zIndexPopup: e.zIndexPopupBase + 10
})), f6 = {
  info: v(Rn, null, null),
  success: v(qt, null, null),
  error: v(St, null, null),
  warning: v(Kt, null, null),
  loading: v(Ot, null, null)
}, Jg = Z({
  name: "PureContent",
  inheritAttrs: !1,
  props: ["prefixCls", "type", "icon"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var o;
      return v("div", {
        class: oe(`${e.prefixCls}-custom-content`, `${e.prefixCls}-${e.type}`)
      }, [e.icon || f6[e.type], v("span", null, [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)])]);
    };
  }
});
Z({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content"],
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    var r;
    const {
      getPrefixCls: i
    } = ci(), a = T(() => e.prefixCls || i("message")), [, l] = Bs(a);
    return v(Di, D(D({}, o), {}, {
      prefixCls: a.value,
      class: oe(l.value, `${a.value}-notice-pure-panel`),
      noticeKey: "pure",
      duration: null
    }), {
      default: () => [v(Jg, {
        prefixCls: a.value,
        type: e.type,
        icon: e.icon
      }, {
        default: () => [(r = n.default) === null || r === void 0 ? void 0 : r.call(n)]
      })]
    });
  }
});
var p6 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const m6 = 8, g6 = 3, v6 = Z({
  name: "Holder",
  inheritAttrs: !1,
  props: ["top", "prefixCls", "getContainer", "maxCount", "duration", "rtl", "transitionName", "onAllRemoved", "animation", "staticGetContainer"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    var o, r;
    const {
      getPrefixCls: i,
      getPopupContainer: a
    } = Se("message", e), l = T(() => i("message", e.prefixCls)), [, s] = Bs(l), c = () => {
      var m;
      const w = (m = e.top) !== null && m !== void 0 ? m : m6;
      return {
        left: "50%",
        transform: "translateX(-50%)",
        top: typeof w == "number" ? `${w}px` : w
      };
    }, u = () => oe(s.value, e.rtl ? `${l.value}-rtl` : ""), d = () => {
      var m;
      return Vl({
        prefixCls: l.value,
        animation: (m = e.animation) !== null && m !== void 0 ? m : "move-up",
        transitionName: e.transitionName
      });
    }, f = v("span", {
      class: `${l.value}-close-x`
    }, [v(un, {
      class: `${l.value}-close-icon`
    }, null)]), [p, h] = Zg({
      //@ts-ignore
      getStyles: c,
      prefixCls: l.value,
      getClassName: u,
      motion: d,
      closable: !1,
      closeIcon: f,
      duration: (o = e.duration) !== null && o !== void 0 ? o : g6,
      getContainer: (r = e.staticGetContainer) !== null && r !== void 0 ? r : a.value,
      maxCount: e.maxCount,
      onAllRemoved: e.onAllRemoved
    });
    return n(g(g({}, p), {
      prefixCls: l,
      hashId: s
    })), h;
  }
});
let nf = 0;
function h6(e) {
  const t = k(null), n = Symbol("messageHolderKey"), o = (s) => {
    var c;
    (c = t.value) === null || c === void 0 || c.close(s);
  }, r = (s) => {
    if (!t.value) {
      const $ = () => {
      };
      return $.then = () => {
      }, $;
    }
    const {
      open: c,
      prefixCls: u,
      hashId: d
    } = t.value, f = `${u}-notice`, {
      content: p,
      icon: h,
      type: m,
      key: w,
      class: b,
      onClose: C
    } = s, S = p6(s, ["content", "icon", "type", "key", "class", "onClose"]);
    let x = w;
    return x == null && (nf += 1, x = `antd-message-${nf}`), Oh(($) => (c(g(g({}, S), {
      key: x,
      content: () => v(Jg, {
        prefixCls: u,
        type: m,
        icon: typeof h == "function" ? h() : h
      }, {
        default: () => [typeof p == "function" ? p() : p]
      }),
      placement: "top",
      // @ts-ignore
      class: oe(m && `${f}-${m}`, d, b),
      onClose: () => {
        C == null || C(), $();
      }
    })), () => {
      o(x);
    }));
  }, a = {
    open: r,
    destroy: (s) => {
      var c;
      s !== void 0 ? o(s) : (c = t.value) === null || c === void 0 || c.destroy();
    }
  };
  return ["info", "success", "warning", "error", "loading"].forEach((s) => {
    const c = (u, d, f) => {
      let p;
      u && typeof u == "object" && "content" in u ? p = u : p = {
        content: u
      };
      let h, m;
      typeof d == "function" ? m = d : (h = d, m = f);
      const w = g(g({
        onClose: m,
        duration: h
      }, p), {
        type: s
      });
      return r(w);
    };
    a[s] = c;
  }), [a, () => v(v6, D(D({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function y6(e) {
  return h6(e);
}
let ev = 3, tv, Qe, b6 = 1, nv = "", ov = "move-up", rv = !1, iv = () => document.body, av, lv = !1;
function w6() {
  return b6++;
}
function S6(e) {
  e.top !== void 0 && (tv = e.top, Qe = null), e.duration !== void 0 && (ev = e.duration), e.prefixCls !== void 0 && (nv = e.prefixCls), e.getContainer !== void 0 && (iv = e.getContainer, Qe = null), e.transitionName !== void 0 && (ov = e.transitionName, Qe = null, rv = !0), e.maxCount !== void 0 && (av = e.maxCount, Qe = null), e.rtl !== void 0 && (lv = e.rtl);
}
function x6(e, t) {
  if (Qe) {
    t(Qe);
    return;
  }
  ri.newInstance({
    appContext: e.appContext,
    prefixCls: e.prefixCls || nv,
    rootPrefixCls: e.rootPrefixCls,
    transitionName: ov,
    hasTransitionName: rv,
    style: {
      top: tv
    },
    getContainer: iv || e.getPopupContainer,
    maxCount: av,
    name: "message",
    useStyle: Bs
  }, (n) => {
    if (Qe) {
      t(Qe);
      return;
    }
    Qe = n, t(n);
  });
}
const sv = {
  info: Rn,
  success: qt,
  error: St,
  warning: Kt,
  loading: Ot
}, C6 = Object.keys(sv);
function $6(e) {
  const t = e.duration !== void 0 ? e.duration : ev, n = e.key || w6(), o = new Promise((i) => {
    const a = () => (typeof e.onClose == "function" && e.onClose(), i(!0));
    x6(e, (l) => {
      l.notice({
        key: n,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: (s) => {
          let {
            prefixCls: c
          } = s;
          const u = sv[e.type], d = u ? v(u, null, null) : "", f = oe(`${c}-custom-content`, {
            [`${c}-${e.type}`]: e.type,
            [`${c}-rtl`]: lv === !0
          });
          return v("div", {
            class: f
          }, [typeof e.icon == "function" ? e.icon() : e.icon || d, v("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
        },
        onClose: a,
        onClick: e.onClick
      });
    });
  }), r = () => {
    Qe && Qe.removeNotice(n);
  };
  return r.then = (i, a) => o.then(i, a), r.promise = o, r;
}
function O6(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
const Dt = {
  open: $6,
  config: S6,
  destroy(e) {
    if (Qe)
      if (e) {
        const {
          removeNotice: t
        } = Qe;
        t(e);
      } else {
        const {
          destroy: t
        } = Qe;
        t(), Qe = null;
      }
  }
};
function P6(e, t) {
  e[t] = (n, o, r) => O6(n) ? e.open(g(g({}, n), {
    type: t
  })) : (typeof o == "function" && (r = o, o = void 0), e.open({
    content: n,
    duration: o,
    type: t,
    onClose: r
  }));
}
C6.forEach((e) => P6(Dt, e));
Dt.warn = Dt.warning;
Dt.useMessage = y6;
const I6 = (e) => {
  const {
    componentCls: t,
    width: n,
    notificationMarginEdge: o
  } = e, r = new fe("antNotificationTopFadeIn", {
    "0%": {
      marginTop: "-100%",
      opacity: 0
    },
    "100%": {
      marginTop: 0,
      opacity: 1
    }
  }), i = new fe("antNotificationBottomFadeIn", {
    "0%": {
      marginBottom: "-100%",
      opacity: 0
    },
    "100%": {
      marginBottom: 0,
      opacity: 1
    }
  }), a = new fe("antNotificationLeftFadeIn", {
    "0%": {
      right: {
        _skip_check_: !0,
        value: n
      },
      opacity: 0
    },
    "100%": {
      right: {
        _skip_check_: !0,
        value: 0
      },
      opacity: 1
    }
  });
  return {
    [`&${t}-top, &${t}-bottom`]: {
      marginInline: 0
    },
    [`&${t}-top`]: {
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: r
      }
    },
    [`&${t}-bottom`]: {
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: i
      }
    },
    [`&${t}-topLeft, &${t}-bottomLeft`]: {
      marginInlineEnd: 0,
      marginInlineStart: o,
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: a
      }
    }
  };
}, T6 = (e) => {
  const {
    iconCls: t,
    componentCls: n,
    // .ant-notification
    boxShadowSecondary: o,
    fontSizeLG: r,
    notificationMarginBottom: i,
    borderRadiusLG: a,
    colorSuccess: l,
    colorInfo: s,
    colorWarning: c,
    colorError: u,
    colorTextHeading: d,
    notificationBg: f,
    notificationPadding: p,
    notificationMarginEdge: h,
    motionDurationMid: m,
    motionEaseInOut: w,
    fontSize: b,
    lineHeight: C,
    width: S,
    notificationIconSize: x
  } = e, $ = `${n}-notice`, O = new fe("antNotificationFadeIn", {
    "0%": {
      left: {
        _skip_check_: !0,
        value: S
      },
      opacity: 0
    },
    "100%": {
      left: {
        _skip_check_: !0,
        value: 0
      },
      opacity: 1
    }
  }), y = new fe("antNotificationFadeOut", {
    "0%": {
      maxHeight: e.animationMaxHeight,
      marginBottom: i,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [n]: g(g(g(g({}, ot(e)), {
        position: "fixed",
        zIndex: e.zIndexPopup,
        marginInlineEnd: h,
        [`${n}-hook-holder`]: {
          position: "relative"
        },
        [`&${n}-top, &${n}-bottom`]: {
          [`${n}-notice`]: {
            marginInline: "auto auto"
          }
        },
        [`&${n}-topLeft, &${n}-bottomLeft`]: {
          [`${n}-notice`]: {
            marginInlineEnd: "auto",
            marginInlineStart: 0
          }
        },
        //  animation
        [`${n}-fade-enter, ${n}-fade-appear`]: {
          animationDuration: e.motionDurationMid,
          animationTimingFunction: w,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${n}-fade-leave`]: {
          animationTimingFunction: w,
          animationFillMode: "both",
          animationDuration: m,
          animationPlayState: "paused"
        },
        [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]: {
          animationName: O,
          animationPlayState: "running"
        },
        [`${n}-fade-leave${n}-fade-leave-active`]: {
          animationName: y,
          animationPlayState: "running"
        }
      }), I6(e)), {
        // RTL
        "&-rtl": {
          direction: "rtl",
          [`${n}-notice-btn`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [$]: {
        position: "relative",
        width: S,
        maxWidth: `calc(100vw - ${h * 2}px)`,
        marginBottom: i,
        marginInlineStart: "auto",
        padding: p,
        overflow: "hidden",
        lineHeight: C,
        wordWrap: "break-word",
        background: f,
        borderRadius: a,
        boxShadow: o,
        [`${n}-close-icon`]: {
          fontSize: b,
          cursor: "pointer"
        },
        [`${$}-message`]: {
          marginBottom: e.marginXS,
          color: d,
          fontSize: r,
          lineHeight: e.lineHeightLG
        },
        [`${$}-description`]: {
          fontSize: b
        },
        [`&${$}-closable ${$}-message`]: {
          paddingInlineEnd: e.paddingLG
        },
        [`${$}-with-icon ${$}-message`]: {
          marginBottom: e.marginXS,
          marginInlineStart: e.marginSM + x,
          fontSize: r
        },
        [`${$}-with-icon ${$}-description`]: {
          marginInlineStart: e.marginSM + x,
          fontSize: b
        },
        // Icon & color style in different selector level
        // https://github.com/ant-design/ant-design/issues/16503
        // https://github.com/ant-design/ant-design/issues/15512
        [`${$}-icon`]: {
          position: "absolute",
          fontSize: x,
          lineHeight: 0,
          // icon-font
          [`&-success${t}`]: {
            color: l
          },
          [`&-info${t}`]: {
            color: s
          },
          [`&-warning${t}`]: {
            color: c
          },
          [`&-error${t}`]: {
            color: u
          }
        },
        [`${$}-close`]: {
          position: "absolute",
          top: e.notificationPaddingVertical,
          insetInlineEnd: e.notificationPaddingHorizontal,
          color: e.colorIcon,
          outline: "none",
          width: e.notificationCloseButtonSize,
          height: e.notificationCloseButtonSize,
          borderRadius: e.borderRadiusSM,
          transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            color: e.colorIconHover,
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContent
          }
        },
        [`${$}-btn`]: {
          float: "right",
          marginTop: e.marginSM
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${$}-pure-panel`]: {
        margin: 0
      }
    }
  ];
}, zs = Ge("Notification", (e) => {
  const t = e.paddingMD, n = e.paddingLG, o = we(e, {
    // default.less variables
    notificationBg: e.colorBgElevated,
    notificationPaddingVertical: t,
    notificationPaddingHorizontal: n,
    // index.less variables
    notificationPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
    notificationMarginBottom: e.margin,
    notificationMarginEdge: e.marginLG,
    animationMaxHeight: 150,
    notificationIconSize: e.fontSizeLG * e.lineHeightLG,
    notificationCloseButtonSize: e.controlHeightLG * 0.55
  });
  return [T6(o)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50,
  width: 384
}));
function cv(e, t) {
  return t || v("span", {
    class: `${e}-close-x`
  }, [v(un, {
    class: `${e}-close-icon`
  }, null)]);
}
v(Rn, null, null), v(qt, null, null), v(St, null, null), v(Kt, null, null), v(Ot, null, null);
const E6 = {
  success: qt,
  info: Rn,
  error: St,
  warning: Kt
};
function uv(e) {
  let {
    prefixCls: t,
    icon: n,
    type: o,
    message: r,
    description: i,
    btn: a
  } = e, l = null;
  if (n)
    l = v("span", {
      class: `${t}-icon`
    }, [Wn(n)]);
  else if (o) {
    const s = E6[o];
    l = v(s, {
      class: `${t}-icon ${t}-icon-${o}`
    }, null);
  }
  return v("div", {
    class: oe({
      [`${t}-with-icon`]: l
    }),
    role: "alert"
  }, [l, v("div", {
    class: `${t}-message`
  }, [r]), v("div", {
    class: `${t}-description`
  }, [i]), a && v("div", {
    class: `${t}-btn`
  }, [a])]);
}
Z({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "icon", "type", "message", "description", "btn", "closeIcon"],
  setup(e) {
    const {
      getPrefixCls: t
    } = Se("notification", e), n = T(() => e.prefixCls || t("notification")), o = T(() => `${n.value}-notice`), [, r] = zs(n);
    return () => v(Di, D(D({}, e), {}, {
      prefixCls: n.value,
      class: oe(r.value, `${o.value}-pure-panel`),
      noticeKey: "pure",
      duration: null,
      closable: e.closable,
      closeIcon: cv(n.value, e.closeIcon)
    }), {
      default: () => [v(uv, {
        prefixCls: o.value,
        icon: e.icon,
        type: e.type,
        message: e.message,
        description: e.description,
        btn: e.btn
      }, null)]
    });
  }
});
function dv(e, t, n) {
  let o;
  switch (t = typeof t == "number" ? `${t}px` : t, n = typeof n == "number" ? `${n}px` : n, e) {
    case "top":
      o = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: t,
        bottom: "auto"
      };
      break;
    case "topLeft":
      o = {
        left: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "topRight":
      o = {
        right: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "bottom":
      o = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom: n
      };
      break;
    case "bottomLeft":
      o = {
        left: 0,
        top: "auto",
        bottom: n
      };
      break;
    default:
      o = {
        right: 0,
        top: "auto",
        bottom: n
      };
      break;
  }
  return o;
}
function _6(e) {
  return {
    name: `${e}-fade`
  };
}
var A6 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const of = 24, M6 = 4.5, R6 = Z({
  name: "Holder",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content", "onAllRemoved"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    const {
      getPrefixCls: o,
      getPopupContainer: r
    } = Se("notification", e), i = T(() => e.prefixCls || o("notification")), a = (f) => {
      var p, h;
      return dv(f, (p = e.top) !== null && p !== void 0 ? p : of, (h = e.bottom) !== null && h !== void 0 ? h : of);
    }, [, l] = zs(i), s = () => oe(l.value, {
      [`${i.value}-rtl`]: e.rtl
    }), c = () => _6(i.value), [u, d] = Zg({
      prefixCls: i.value,
      getStyles: a,
      getClassName: s,
      motion: c,
      closable: !0,
      closeIcon: cv(i.value),
      duration: M6,
      getContainer: () => {
        var f, p;
        return ((f = e.getPopupContainer) === null || f === void 0 ? void 0 : f.call(e)) || ((p = r.value) === null || p === void 0 ? void 0 : p.call(r)) || document.body;
      },
      maxCount: e.maxCount,
      hashId: l.value,
      onAllRemoved: e.onAllRemoved
    });
    return n(g(g({}, u), {
      prefixCls: i.value,
      hashId: l
    })), d;
  }
});
function F6(e) {
  const t = k(null), n = Symbol("notificationHolderKey"), o = (l) => {
    if (!t.value)
      return;
    const {
      open: s,
      prefixCls: c,
      hashId: u
    } = t.value, d = `${c}-notice`, {
      message: f,
      description: p,
      icon: h,
      type: m,
      btn: w,
      class: b
    } = l, C = A6(l, ["message", "description", "icon", "type", "btn", "class"]);
    return s(g(g({
      placement: "topRight"
    }, C), {
      content: () => v(uv, {
        prefixCls: d,
        icon: typeof h == "function" ? h() : h,
        type: m,
        message: typeof f == "function" ? f() : f,
        description: typeof p == "function" ? p() : p,
        btn: typeof w == "function" ? w() : w
      }, null),
      // @ts-ignore
      class: oe(m && `${d}-${m}`, u, b)
    }));
  }, i = {
    open: o,
    destroy: (l) => {
      var s, c;
      l !== void 0 ? (s = t.value) === null || s === void 0 || s.close(l) : (c = t.value) === null || c === void 0 || c.destroy();
    }
  };
  return ["success", "info", "warning", "error"].forEach((l) => {
    i[l] = (s) => o(g(g({}, s), {
      type: l
    }));
  }), [i, () => v(R6, D(D({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function D6(e) {
  return F6(e);
}
const gn = {};
let fv = 4.5, pv = "24px", mv = "24px", Cl = "", gv = "topRight", vv = () => document.body, hv = null, $l = !1, yv;
function N6(e) {
  const {
    duration: t,
    placement: n,
    bottom: o,
    top: r,
    getContainer: i,
    closeIcon: a,
    prefixCls: l
  } = e;
  l !== void 0 && (Cl = l), t !== void 0 && (fv = t), n !== void 0 && (gv = n), o !== void 0 && (mv = typeof o == "number" ? `${o}px` : o), r !== void 0 && (pv = typeof r == "number" ? `${r}px` : r), i !== void 0 && (vv = i), a !== void 0 && (hv = a), e.rtl !== void 0 && ($l = e.rtl), e.maxCount !== void 0 && (yv = e.maxCount);
}
function L6(e, t) {
  let {
    prefixCls: n,
    placement: o = gv,
    getContainer: r = vv,
    top: i,
    bottom: a,
    closeIcon: l = hv,
    appContext: s
  } = e;
  const {
    getPrefixCls: c
  } = K6(), u = c("notification", n || Cl), d = `${u}-${o}-${$l}`, f = gn[d];
  if (f) {
    Promise.resolve(f).then((h) => {
      t(h);
    });
    return;
  }
  const p = oe(`${u}-${o}`, {
    [`${u}-rtl`]: $l === !0
  });
  ri.newInstance({
    name: "notification",
    prefixCls: n || Cl,
    useStyle: zs,
    class: p,
    style: dv(o, i ?? pv, a ?? mv),
    appContext: s,
    getContainer: r,
    closeIcon: (h) => {
      let {
        prefixCls: m
      } = h;
      return v("span", {
        class: `${m}-close-x`
      }, [Wn(l, {}, v(un, {
        class: `${m}-close-icon`
      }, null))]);
    },
    maxCount: yv,
    hasTransitionName: !0
  }, (h) => {
    gn[d] = h, t(h);
  });
}
const j6 = {
  success: Is,
  info: Es,
  error: _s,
  warning: Ts
};
function H6(e) {
  const {
    icon: t,
    type: n,
    description: o,
    message: r,
    btn: i
  } = e, a = e.duration === void 0 ? fv : e.duration;
  L6(e, (l) => {
    l.notice({
      content: (s) => {
        let {
          prefixCls: c
        } = s;
        const u = `${c}-notice`;
        let d = null;
        if (t)
          d = () => v("span", {
            class: `${u}-icon`
          }, [Wn(t)]);
        else if (n) {
          const f = j6[n];
          d = () => v(f, {
            class: `${u}-icon ${u}-icon-${n}`
          }, null);
        }
        return v("div", {
          class: d ? `${u}-with-icon` : ""
        }, [d && d(), v("div", {
          class: `${u}-message`
        }, [!o && d ? v("span", {
          class: `${u}-message-single-line-auto-margin`
        }, null) : null, Wn(r)]), v("div", {
          class: `${u}-description`
        }, [Wn(o)]), i ? v("span", {
          class: `${u}-btn`
        }, [Wn(i)]) : null]);
      },
      duration: a,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class
    });
  });
}
const fo = {
  open: H6,
  close(e) {
    Object.keys(gn).forEach((t) => Promise.resolve(gn[t]).then((n) => {
      n.removeNotice(e);
    }));
  },
  config: N6,
  destroy() {
    Object.keys(gn).forEach((e) => {
      Promise.resolve(gn[e]).then((t) => {
        t.destroy();
      }), delete gn[e];
    });
  }
}, B6 = ["success", "info", "warning", "error"];
B6.forEach((e) => {
  fo[e] = (t) => fo.open(g(g({}, t), {
    type: e
  }));
});
fo.warn = fo.warning;
fo.useNotification = D6;
const z6 = `-ant-${Date.now()}-${Math.random()}`;
function V6(e, t) {
  const n = {}, o = (a, l) => {
    let s = a.clone();
    return s = (l == null ? void 0 : l(s)) || s, s.toRgbString();
  }, r = (a, l) => {
    const s = new He(a), c = xn(s.toRgbString());
    n[`${l}-color`] = o(s), n[`${l}-color-disabled`] = c[1], n[`${l}-color-hover`] = c[4], n[`${l}-color-active`] = c[6], n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = c[0], n[`${l}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    r(t.primaryColor, "primary");
    const a = new He(t.primaryColor), l = xn(a.toRgbString());
    l.forEach((c, u) => {
      n[`primary-${u + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = o(a, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = o(a, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = o(a, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = o(a, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = o(a, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const s = new He(l[0]);
    n["primary-color-active-deprecated-f-30"] = o(s, (c) => c.setAlpha(c.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = o(s, (c) => c.darken(2));
  }
  return t.successColor && r(t.successColor, "success"), t.warningColor && r(t.warningColor, "warning"), t.errorColor && r(t.errorColor, "error"), t.infoColor && r(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim();
}
function W6(e, t) {
  const n = V6(e, t);
  yt() ? Ho(n, `${z6}-dynamic-theme`) : et(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const U6 = (e) => {
  const [t, n] = ho();
  return za(T(() => ({
    theme: t.value,
    token: n.value,
    hashId: "",
    path: ["ant-design-icons", e.value]
  })), () => [{
    [`.${e.value}`]: g(g({}, Nl()), {
      [`.${e.value} .${e.value}-icon`]: {
        display: "block"
      }
    })
  }]);
};
function G6(e, t) {
  const n = T(() => (e == null ? void 0 : e.value) || {}), o = T(() => n.value.inherit === !1 || !(t != null && t.value) ? Gp : t.value);
  return T(() => {
    if (!(e != null && e.value))
      return t == null ? void 0 : t.value;
    const i = g({}, o.value.components);
    return Object.keys(e.value.components || {}).forEach((a) => {
      i[a] = g(g({}, i[a]), e.value.components[a]);
    }), g(g(g({}, o.value), n.value), {
      token: g(g({}, o.value.token), n.value.token),
      components: i
    });
  });
}
var k6 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const X6 = "ant";
function Zn() {
  return Ve.prefixCls || X6;
}
function bv() {
  return Ve.iconPrefixCls || Al;
}
const Vs = Le({}), Ve = Le({});
Pe(() => {
  g(Ve, Vs), Ve.prefixCls = Zn(), Ve.iconPrefixCls = bv(), Ve.getPrefixCls = (e, t) => t || (e ? `${Ve.prefixCls}-${e}` : Ve.prefixCls), Ve.getRootPrefixCls = () => Ve.prefixCls ? Ve.prefixCls : Zn();
});
let xa;
const q6 = (e) => {
  xa && xa(), xa = Pe(() => {
    g(Vs, Le(e)), g(Ve, Le(e));
  }), e.theme && W6(Zn(), e.theme);
}, K6 = () => ({
  getPrefixCls: (e, t) => t || (e ? `${Zn()}-${e}` : Zn()),
  getIconPrefixCls: bv,
  getRootPrefixCls: () => Ve.prefixCls ? Ve.prefixCls : Zn()
}), Jn = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: n0(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = ci(), r = (P, M) => {
      const {
        prefixCls: L = "ant"
      } = e;
      if (M) return M;
      const H = L || o.getPrefixCls("");
      return P ? `${H}-${P}` : H;
    }, i = T(() => e.iconPrefixCls || o.iconPrefixCls.value || Al), a = T(() => i.value !== o.iconPrefixCls.value), l = T(() => {
      var P;
      return e.csp || ((P = o.csp) === null || P === void 0 ? void 0 : P.value);
    }), s = U6(i), c = G6(T(() => e.theme), T(() => {
      var P;
      return (P = o.theme) === null || P === void 0 ? void 0 : P.value;
    })), u = (P) => (e.renderEmpty || n.renderEmpty || o.renderEmpty || Ky)(P), d = T(() => {
      var P, M;
      return (P = e.autoInsertSpaceInButton) !== null && P !== void 0 ? P : (M = o.autoInsertSpaceInButton) === null || M === void 0 ? void 0 : M.value;
    }), f = T(() => {
      var P;
      return e.locale || ((P = o.locale) === null || P === void 0 ? void 0 : P.value);
    });
    ae(f, () => {
      Vs.locale = f.value;
    }, {
      immediate: !0
    });
    const p = T(() => {
      var P;
      return e.direction || ((P = o.direction) === null || P === void 0 ? void 0 : P.value);
    }), h = T(() => {
      var P, M;
      return (P = e.space) !== null && P !== void 0 ? P : (M = o.space) === null || M === void 0 ? void 0 : M.value;
    }), m = T(() => {
      var P, M;
      return (P = e.virtual) !== null && P !== void 0 ? P : (M = o.virtual) === null || M === void 0 ? void 0 : M.value;
    }), w = T(() => {
      var P, M;
      return (P = e.dropdownMatchSelectWidth) !== null && P !== void 0 ? P : (M = o.dropdownMatchSelectWidth) === null || M === void 0 ? void 0 : M.value;
    }), b = T(() => {
      var P;
      return e.getTargetContainer !== void 0 ? e.getTargetContainer : (P = o.getTargetContainer) === null || P === void 0 ? void 0 : P.value;
    }), C = T(() => {
      var P;
      return e.getPopupContainer !== void 0 ? e.getPopupContainer : (P = o.getPopupContainer) === null || P === void 0 ? void 0 : P.value;
    }), S = T(() => {
      var P;
      return e.pageHeader !== void 0 ? e.pageHeader : (P = o.pageHeader) === null || P === void 0 ? void 0 : P.value;
    }), x = T(() => {
      var P;
      return e.input !== void 0 ? e.input : (P = o.input) === null || P === void 0 ? void 0 : P.value;
    }), $ = T(() => {
      var P;
      return e.pagination !== void 0 ? e.pagination : (P = o.pagination) === null || P === void 0 ? void 0 : P.value;
    }), O = T(() => {
      var P;
      return e.form !== void 0 ? e.form : (P = o.form) === null || P === void 0 ? void 0 : P.value;
    }), y = T(() => {
      var P;
      return e.select !== void 0 ? e.select : (P = o.select) === null || P === void 0 ? void 0 : P.value;
    }), I = T(() => e.componentSize), E = T(() => e.componentDisabled), R = T(() => {
      var P, M;
      return (P = e.wave) !== null && P !== void 0 ? P : (M = o.wave) === null || M === void 0 ? void 0 : M.value;
    }), _ = {
      csp: l,
      autoInsertSpaceInButton: d,
      locale: f,
      direction: p,
      space: h,
      virtual: m,
      dropdownMatchSelectWidth: w,
      getPrefixCls: r,
      iconPrefixCls: i,
      theme: T(() => {
        var P, M;
        return (P = c.value) !== null && P !== void 0 ? P : (M = o.theme) === null || M === void 0 ? void 0 : M.value;
      }),
      renderEmpty: u,
      getTargetContainer: b,
      getPopupContainer: C,
      pageHeader: S,
      input: x,
      pagination: $,
      form: O,
      select: y,
      componentSize: I,
      componentDisabled: E,
      transformCellText: T(() => e.transformCellText),
      wave: R
    }, N = T(() => {
      const P = c.value || {}, {
        algorithm: M,
        token: L
      } = P, H = k6(P, ["algorithm", "token"]), A = M && (!Array.isArray(M) || M.length > 0) ? Ip(M) : void 0;
      return g(g({}, H), {
        theme: A,
        token: g(g({}, mi), L)
      });
    }), F = T(() => {
      var P, M;
      let L = {};
      return f.value && (L = ((P = f.value.Form) === null || P === void 0 ? void 0 : P.defaultValidateMessages) || ((M = Mt.Form) === null || M === void 0 ? void 0 : M.defaultValidateMessages) || {}), e.form && e.form.validateMessages && (L = g(g({}, L), e.form.validateMessages)), L;
    });
    o0(_), e0({
      validateMessages: F
    }), Yp(I), mp(E);
    const j = (P) => {
      var M, L;
      let H = a.value ? s((M = n.default) === null || M === void 0 ? void 0 : M.call(n)) : (L = n.default) === null || L === void 0 ? void 0 : L.call(n);
      if (e.theme) {
        const A = /* @__PURE__ */ function() {
          return H;
        }();
        H = v(Uy, {
          value: N.value
        }, {
          default: () => [A]
        });
      }
      return v(o6, {
        locale: f.value || P,
        ANT_MARK__: xl
      }, {
        default: () => [H]
      });
    };
    return Pe(() => {
      p.value && (Dt.config({
        rtl: p.value === "rtl"
      }), fo.config({
        rtl: p.value === "rtl"
      }));
    }), () => v(vp, {
      children: (P, M, L) => j(L)
    }, null);
  }
});
Jn.config = q6;
Jn.install = function(e) {
  e.component(Jn.name, Jn);
};
const Do = (e) => e != null && (Array.isArray(e) ? ht(e).length : !0);
function Ws(e) {
  return Do(e.prefix) || Do(e.suffix) || Do(e.allowClear);
}
function zr(e) {
  return Do(e.addonBefore) || Do(e.addonAfter);
}
function Ol(e) {
  return typeof e > "u" || e === null ? "" : String(e);
}
function No(e, t, n, o) {
  if (!n)
    return;
  const r = t;
  if (t.type === "click") {
    Object.defineProperty(r, "target", {
      writable: !0
    }), Object.defineProperty(r, "currentTarget", {
      writable: !0
    });
    const i = e.cloneNode(!0);
    r.target = i, r.currentTarget = i, i.value = "", n(r);
    return;
  }
  if (o !== void 0) {
    Object.defineProperty(r, "target", {
      writable: !0
    }), Object.defineProperty(r, "currentTarget", {
      writable: !0
    }), r.target = e, r.currentTarget = e, e.value = o, n(r);
    return;
  }
  n(r);
}
function wv(e, t) {
  if (!e) return;
  e.focus(t);
  const {
    cursor: n
  } = t || {};
  if (n) {
    const o = e.value.length;
    switch (n) {
      case "start":
        e.setSelectionRange(0, 0);
        break;
      case "end":
        e.setSelectionRange(o, o);
        break;
      default:
        e.setSelectionRange(0, o);
    }
  }
}
const Y6 = () => ({
  addonBefore: V.any,
  addonAfter: V.any,
  prefix: V.any,
  suffix: V.any,
  clearIcon: V.any,
  affixWrapperClassName: String,
  groupClassName: String,
  wrapperClassName: String,
  inputClassName: String,
  allowClear: {
    type: Boolean,
    default: void 0
  }
}), Sv = () => g(g({}, Y6()), {
  value: {
    type: [String, Number, Symbol],
    default: void 0
  },
  defaultValue: {
    type: [String, Number, Symbol],
    default: void 0
  },
  inputElement: V.any,
  prefixCls: String,
  disabled: {
    type: Boolean,
    default: void 0
  },
  focused: {
    type: Boolean,
    default: void 0
  },
  triggerFocus: Function,
  readonly: {
    type: Boolean,
    default: void 0
  },
  handleReset: Function,
  hidden: {
    type: Boolean,
    default: void 0
  }
}), xv = () => g(g({}, Sv()), {
  id: String,
  placeholder: {
    type: [String, Number]
  },
  autocomplete: String,
  type: Te("text"),
  name: String,
  size: {
    type: String
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  lazy: {
    type: Boolean,
    default: !0
  },
  maxlength: Number,
  loading: {
    type: Boolean,
    default: void 0
  },
  bordered: {
    type: Boolean,
    default: void 0
  },
  showCount: {
    type: [Boolean, Object]
  },
  htmlSize: Number,
  onPressEnter: Function,
  onKeydown: Function,
  onKeyup: Function,
  onFocus: Function,
  onBlur: Function,
  onChange: Function,
  onInput: Function,
  "onUpdate:value": Function,
  onCompositionstart: Function,
  onCompositionend: Function,
  valueModifiers: Object,
  hidden: {
    type: Boolean,
    default: void 0
  },
  status: String
}), Q6 = Z({
  name: "BaseInput",
  inheritAttrs: !1,
  props: Sv(),
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const r = te(), i = (l) => {
      var s;
      if (!((s = r.value) === null || s === void 0) && s.contains(l.target)) {
        const {
          triggerFocus: c
        } = e;
        c == null || c();
      }
    }, a = () => {
      var l;
      const {
        allowClear: s,
        value: c,
        disabled: u,
        readonly: d,
        handleReset: f,
        suffix: p = n.suffix,
        prefixCls: h
      } = e;
      if (!s)
        return null;
      const m = !u && !d && c, w = `${h}-clear-icon`, b = ((l = n.clearIcon) === null || l === void 0 ? void 0 : l.call(n)) || "*";
      return v("span", {
        onClick: f,
        onMousedown: (C) => C.preventDefault(),
        class: oe({
          [`${w}-hidden`]: !m,
          [`${w}-has-suffix`]: !!p
        }, w),
        role: "button",
        tabindex: -1
      }, [b]);
    };
    return () => {
      var l, s;
      const {
        focused: c,
        value: u,
        disabled: d,
        allowClear: f,
        readonly: p,
        hidden: h,
        prefixCls: m,
        prefix: w = (l = n.prefix) === null || l === void 0 ? void 0 : l.call(n),
        suffix: b = (s = n.suffix) === null || s === void 0 ? void 0 : s.call(n),
        addonAfter: C = n.addonAfter,
        addonBefore: S = n.addonBefore,
        inputElement: x,
        affixWrapperClassName: $,
        wrapperClassName: O,
        groupClassName: y
      } = e;
      let I = tt(x, {
        value: u,
        hidden: h
      });
      if (Ws({
        prefix: w,
        suffix: b,
        allowClear: f
      })) {
        const E = `${m}-affix-wrapper`, R = oe(E, {
          [`${E}-disabled`]: d,
          [`${E}-focused`]: c,
          [`${E}-readonly`]: p,
          [`${E}-input-with-clear-btn`]: b && f && u
        }, !zr({
          addonAfter: C,
          addonBefore: S
        }) && o.class, $), _ = (b || f) && v("span", {
          class: `${m}-suffix`
        }, [a(), b]);
        I = v("span", {
          class: R,
          style: o.style,
          hidden: !zr({
            addonAfter: C,
            addonBefore: S
          }) && h,
          onMousedown: i,
          ref: r
        }, [w && v("span", {
          class: `${m}-prefix`
        }, [w]), tt(x, {
          style: null,
          value: u,
          hidden: null
        }), _]);
      }
      if (zr({
        addonAfter: C,
        addonBefore: S
      })) {
        const E = `${m}-group`, R = `${E}-addon`, _ = oe(`${m}-wrapper`, E, O), N = oe(`${m}-group-wrapper`, o.class, y);
        return v("span", {
          class: N,
          style: o.style,
          hidden: h
        }, [v("span", {
          class: _
        }, [S && v("span", {
          class: R
        }, [S]), tt(I, {
          style: null,
          hidden: null
        }), C && v("span", {
          class: R
        }, [C])])]);
      }
      return I;
    };
  }
});
var Z6 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const J6 = Z({
  name: "VCInput",
  inheritAttrs: !1,
  props: xv(),
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      expose: r,
      emit: i
    } = t;
    const a = k(e.value === void 0 ? e.defaultValue : e.value), l = k(!1), s = k(), c = k();
    ae(() => e.value, () => {
      a.value = e.value;
    }), ae(() => e.disabled, () => {
      e.disabled && (l.value = !1);
    });
    const u = (y) => {
      s.value && wv(s.value.input, y);
    }, d = () => {
      var y;
      (y = s.value.input) === null || y === void 0 || y.blur();
    }, f = (y, I, E) => {
      var R;
      (R = s.value.input) === null || R === void 0 || R.setSelectionRange(y, I, E);
    }, p = () => {
      var y;
      (y = s.value.input) === null || y === void 0 || y.select();
    };
    r({
      focus: u,
      blur: d,
      input: T(() => {
        var y;
        return (y = s.value.input) === null || y === void 0 ? void 0 : y.input;
      }),
      stateValue: a,
      setSelectionRange: f,
      select: p
    });
    const h = (y) => {
      i("change", y);
    }, m = (y, I) => {
      a.value !== y && (e.value === void 0 ? a.value = y : Fe(() => {
        var E;
        s.value.input.value !== a.value && ((E = c.value) === null || E === void 0 || E.$forceUpdate());
      }), Fe(() => {
        I && I();
      }));
    }, w = (y) => {
      const {
        value: I
      } = y.target;
      if (a.value === I) return;
      const E = y.target.value;
      No(s.value.input, y, h), m(E);
    }, b = (y) => {
      y.keyCode === 13 && i("pressEnter", y), i("keydown", y);
    }, C = (y) => {
      l.value = !0, i("focus", y);
    }, S = (y) => {
      l.value = !1, i("blur", y);
    }, x = (y) => {
      No(s.value.input, y, h), m("", () => {
        u();
      });
    }, $ = () => {
      var y, I;
      const {
        addonBefore: E = n.addonBefore,
        addonAfter: R = n.addonAfter,
        disabled: _,
        valueModifiers: N = {},
        htmlSize: F,
        autocomplete: j,
        prefixCls: P,
        inputClassName: M,
        prefix: L = (y = n.prefix) === null || y === void 0 ? void 0 : y.call(n),
        suffix: H = (I = n.suffix) === null || I === void 0 ? void 0 : I.call(n),
        allowClear: A,
        type: z = "text"
      } = e, q = Ue(e, [
        "prefixCls",
        "onPressEnter",
        "addonBefore",
        "addonAfter",
        "prefix",
        "suffix",
        "allowClear",
        // Input elements must be either controlled or uncontrolled,
        // specify either the value prop, or the defaultValue prop, but not both.
        "defaultValue",
        "size",
        "bordered",
        "htmlSize",
        "lazy",
        "showCount",
        "valueModifiers",
        "showCount",
        "affixWrapperClassName",
        "groupClassName",
        "inputClassName",
        "wrapperClassName"
      ]), Y = g(g(g({}, q), o), {
        autocomplete: j,
        onChange: w,
        onInput: w,
        onFocus: C,
        onBlur: S,
        onKeydown: b,
        class: oe(P, {
          [`${P}-disabled`]: _
        }, M, !zr({
          addonAfter: R,
          addonBefore: E
        }) && !Ws({
          prefix: L,
          suffix: H,
          allowClear: A
        }) && o.class),
        ref: s,
        key: "ant-input",
        size: F,
        type: z,
        lazy: e.lazy
      });
      return N.lazy && delete Y.onInput, Y.autofocus || delete Y.autofocus, v(ns, Ue(Y, ["size"]), null);
    }, O = () => {
      var y;
      const {
        maxlength: I,
        suffix: E = (y = n.suffix) === null || y === void 0 ? void 0 : y.call(n),
        showCount: R,
        prefixCls: _
      } = e, N = Number(I) > 0;
      if (E || R) {
        const F = [...Ol(a.value)].length, j = typeof R == "object" ? R.formatter({
          count: F,
          maxlength: I
        }) : `${F}${N ? ` / ${I}` : ""}`;
        return v(Ie, null, [!!R && v("span", {
          class: oe(`${_}-show-count-suffix`, {
            [`${_}-show-count-has-suffix`]: !!E
          })
        }, [j]), E]);
      }
      return null;
    };
    return be(() => {
      process.env.NODE_ENV === "test" && e.autofocus && u();
    }), () => {
      const {
        prefixCls: y,
        disabled: I
      } = e, E = Z6(e, ["prefixCls", "disabled"]);
      return v(Q6, D(D(D({}, E), o), {}, {
        ref: c,
        prefixCls: y,
        inputElement: $(),
        handleReset: x,
        value: Ol(a.value),
        focused: l.value,
        triggerFocus: u,
        suffix: O(),
        disabled: I
      }), n);
    };
  }
}), Ni = () => Ue(xv(), ["wrapperClassName", "groupClassName", "inputClassName", "affixWrapperClassName"]), Cv = () => g(g({}, Ue(Ni(), ["prefix", "addonBefore", "addonAfter", "suffix"])), {
  rows: Number,
  autosize: {
    type: [Boolean, Object],
    default: void 0
  },
  autoSize: {
    type: [Boolean, Object],
    default: void 0
  },
  onResize: {
    type: Function
  },
  onCompositionstart: Gr(),
  onCompositionend: Gr(),
  valueModifiers: Object
});
var eT = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const ze = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AInput",
  inheritAttrs: !1,
  props: Ni(),
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      expose: r,
      emit: i
    } = t;
    const a = te(), l = or(), s = sn.useInject(), c = T(() => Ti(s.status, e.status)), {
      direction: u,
      prefixCls: d,
      size: f,
      autocomplete: p
    } = Se("input", e), {
      compactSize: h,
      compactItemClassnames: m
    } = Cs(d, u), w = T(() => h.value || f.value), [b, C] = Ds(d), S = Tn();
    r({
      focus: (F) => {
        var j;
        (j = a.value) === null || j === void 0 || j.focus(F);
      },
      blur: () => {
        var F;
        (F = a.value) === null || F === void 0 || F.blur();
      },
      input: a,
      setSelectionRange: (F, j, P) => {
        var M;
        (M = a.value) === null || M === void 0 || M.setSelectionRange(F, j, P);
      },
      select: () => {
        var F;
        (F = a.value) === null || F === void 0 || F.select();
      }
    });
    const I = te([]), E = () => {
      I.value.push(setTimeout(() => {
        var F, j, P, M;
        !((F = a.value) === null || F === void 0) && F.input && ((j = a.value) === null || j === void 0 ? void 0 : j.input.getAttribute("type")) === "password" && (!((P = a.value) === null || P === void 0) && P.input.hasAttribute("value")) && ((M = a.value) === null || M === void 0 || M.input.removeAttribute("value"));
      }));
    };
    be(() => {
      E();
    }), Zf(() => {
      I.value.forEach((F) => clearTimeout(F));
    }), Ae(() => {
      I.value.forEach((F) => clearTimeout(F));
    });
    const R = (F) => {
      E(), i("blur", F), l.onFieldBlur();
    }, _ = (F) => {
      E(), i("focus", F);
    }, N = (F) => {
      i("update:value", F.target.value), i("change", F), i("input", F), l.onFieldChange();
    };
    return () => {
      var F, j, P, M, L, H;
      const {
        hasFeedback: A,
        feedbackIcon: z
      } = s, {
        allowClear: q,
        bordered: Y = !0,
        prefix: K = (F = n.prefix) === null || F === void 0 ? void 0 : F.call(n),
        suffix: W = (j = n.suffix) === null || j === void 0 ? void 0 : j.call(n),
        addonAfter: G = (P = n.addonAfter) === null || P === void 0 ? void 0 : P.call(n),
        addonBefore: ee = (M = n.addonBefore) === null || M === void 0 ? void 0 : M.call(n),
        id: re = (L = l.id) === null || L === void 0 ? void 0 : L.value
      } = e, ie = eT(e, ["allowClear", "bordered", "prefix", "suffix", "addonAfter", "addonBefore", "id"]), X = (A || W) && v(Ie, null, [W, A && z]), B = d.value, U = Ws({
        prefix: K,
        suffix: W
      }) || !!A, ne = n.clearIcon || (() => v(St, null, null));
      return b(v(J6, D(D(D({}, o), Ue(ie, ["onUpdate:value", "onChange", "onInput"])), {}, {
        onChange: N,
        id: re,
        disabled: (H = e.disabled) !== null && H !== void 0 ? H : S.value,
        ref: a,
        prefixCls: B,
        autocomplete: p.value,
        onBlur: R,
        onFocus: _,
        prefix: K,
        suffix: X,
        allowClear: q,
        addonAfter: G && v(gd, null, {
          default: () => [v(ed, null, {
            default: () => [G]
          })]
        }),
        addonBefore: ee && v(gd, null, {
          default: () => [v(ed, null, {
            default: () => [ee]
          })]
        }),
        class: [o.class, m.value],
        inputClassName: oe({
          [`${B}-sm`]: w.value === "small",
          [`${B}-lg`]: w.value === "large",
          [`${B}-rtl`]: u.value === "rtl",
          [`${B}-borderless`]: !Y
        }, !U && Qn(B, c.value), C.value),
        affixWrapperClassName: oe({
          [`${B}-affix-wrapper-sm`]: w.value === "small",
          [`${B}-affix-wrapper-lg`]: w.value === "large",
          [`${B}-affix-wrapper-rtl`]: u.value === "rtl",
          [`${B}-affix-wrapper-borderless`]: !Y
        }, Qn(`${B}-affix-wrapper`, c.value, A), C.value),
        wrapperClassName: oe({
          [`${B}-group-rtl`]: u.value === "rtl"
        }, C.value),
        groupClassName: oe({
          [`${B}-group-wrapper-sm`]: w.value === "small",
          [`${B}-group-wrapper-lg`]: w.value === "large",
          [`${B}-group-wrapper-rtl`]: u.value === "rtl"
        }, Qn(`${B}-group-wrapper`, c.value, A), C.value)
      }), g(g({}, n), {
        clearIcon: ne
      })));
    };
  }
}), tT = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AInputGroup",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    size: {
      type: String
    },
    compact: {
      type: Boolean,
      default: void 0
    }
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const {
      prefixCls: r,
      direction: i,
      getPrefixCls: a
    } = Se("input-group", e), l = sn.useInject();
    sn.useProvide(l, {
      isFormItemInput: !1
    });
    const s = T(() => a("input")), [c, u] = Ds(s), d = T(() => {
      const f = r.value;
      return {
        [`${f}`]: !0,
        [u.value]: !0,
        [`${f}-lg`]: e.size === "large",
        [`${f}-sm`]: e.size === "small",
        [`${f}-compact`]: e.compact,
        [`${f}-rtl`]: i.value === "rtl"
      };
    });
    return () => {
      var f;
      return c(v("span", D(D({}, o), {}, {
        class: oe(d.value, o.class)
      }), [(f = n.default) === null || f === void 0 ? void 0 : f.call(n)]));
    };
  }
});
var nT = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const oT = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AInputSearch",
  inheritAttrs: !1,
  props: g(g({}, Ni()), {
    inputPrefixCls: String,
    // 不能设置默认值 https://github.com/vueComponent/ant-design-vue/issues/1916
    enterButton: V.any,
    onSearch: {
      type: Function
    }
  }),
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      expose: r,
      emit: i
    } = t;
    const a = k(), l = k(!1);
    r({
      focus: () => {
        var $;
        ($ = a.value) === null || $ === void 0 || $.focus();
      },
      blur: () => {
        var $;
        ($ = a.value) === null || $ === void 0 || $.blur();
      }
    });
    const u = ($) => {
      i("update:value", $.target.value), $ && $.target && $.type === "click" && i("search", $.target.value, $), i("change", $);
    }, d = ($) => {
      var O;
      document.activeElement === ((O = a.value) === null || O === void 0 ? void 0 : O.input) && $.preventDefault();
    }, f = ($) => {
      var O, y;
      i("search", (y = (O = a.value) === null || O === void 0 ? void 0 : O.input) === null || y === void 0 ? void 0 : y.stateValue, $);
    }, p = ($) => {
      l.value || e.loading || f($);
    }, h = ($) => {
      l.value = !0, i("compositionstart", $);
    }, m = ($) => {
      l.value = !1, i("compositionend", $);
    }, {
      prefixCls: w,
      getPrefixCls: b,
      direction: C,
      size: S
    } = Se("input-search", e), x = T(() => b("input", e.inputPrefixCls));
    return () => {
      var $, O, y, I;
      const {
        disabled: E,
        loading: R,
        addonAfter: _ = ($ = n.addonAfter) === null || $ === void 0 ? void 0 : $.call(n),
        suffix: N = (O = n.suffix) === null || O === void 0 ? void 0 : O.call(n)
      } = e, F = nT(e, ["disabled", "loading", "addonAfter", "suffix"]);
      let {
        enterButton: j = (I = (y = n.enterButton) === null || y === void 0 ? void 0 : y.call(n)) !== null && I !== void 0 ? I : !1
      } = e;
      j = j || j === "";
      const P = typeof j == "boolean" ? v(Ii, null, null) : null, M = `${w.value}-button`, L = Array.isArray(j) ? j[0] : j;
      let H;
      const A = L.type && cg(L.type) && L.type.__ANT_BUTTON;
      if (A || L.tagName === "button")
        H = tt(L, g({
          onMousedown: d,
          onClick: f,
          key: "enterButton"
        }, A ? {
          class: M,
          size: S.value
        } : {}), !1);
      else {
        const q = P && !j;
        H = v(nt, {
          class: M,
          type: j ? "primary" : void 0,
          size: S.value,
          disabled: E,
          key: "enterButton",
          onMousedown: d,
          onClick: f,
          loading: R,
          icon: q ? P : null
        }, {
          default: () => [q ? null : P || j]
        });
      }
      _ && (H = [H, _]);
      const z = oe(w.value, {
        [`${w.value}-rtl`]: C.value === "rtl",
        [`${w.value}-${S.value}`]: !!S.value,
        [`${w.value}-with-button`]: !!j
      }, o.class);
      return v(ze, D(D(D({
        ref: a
      }, Ue(F, ["onUpdate:value", "onSearch", "enterButton"])), o), {}, {
        onPressEnter: p,
        onCompositionstart: h,
        onCompositionend: m,
        size: S.value,
        prefixCls: x.value,
        addonAfter: H,
        suffix: N,
        onChange: u,
        class: z,
        disabled: E
      }), n);
    };
  }
}), rf = (e) => e != null && (Array.isArray(e) ? ht(e).length : !0);
function rT(e) {
  return rf(e.addonBefore) || rf(e.addonAfter);
}
const iT = ["text", "input"], aT = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ClearableLabeledInput",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    inputType: V.oneOf(an("text", "input")),
    value: Re(),
    defaultValue: Re(),
    allowClear: {
      type: Boolean,
      default: void 0
    },
    element: Re(),
    handleReset: Function,
    disabled: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String
    },
    size: {
      type: String
    },
    suffix: Re(),
    prefix: Re(),
    addonBefore: Re(),
    addonAfter: Re(),
    readonly: {
      type: Boolean,
      default: void 0
    },
    focused: {
      type: Boolean,
      default: void 0
    },
    bordered: {
      type: Boolean,
      default: !0
    },
    triggerFocus: {
      type: Function
    },
    hidden: Boolean,
    status: String,
    hashId: String
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const r = sn.useInject(), i = (l) => {
      const {
        value: s,
        disabled: c,
        readonly: u,
        handleReset: d,
        suffix: f = n.suffix
      } = e, p = !c && !u && s, h = `${l}-clear-icon`;
      return v(St, {
        onClick: d,
        onMousedown: (m) => m.preventDefault(),
        class: oe({
          [`${h}-hidden`]: !p,
          [`${h}-has-suffix`]: !!f
        }, h),
        role: "button"
      }, null);
    }, a = (l, s) => {
      const {
        value: c,
        allowClear: u,
        direction: d,
        bordered: f,
        hidden: p,
        status: h,
        addonAfter: m = n.addonAfter,
        addonBefore: w = n.addonBefore,
        hashId: b
      } = e, {
        status: C,
        hasFeedback: S
      } = r;
      if (!u)
        return tt(s, {
          value: c,
          disabled: e.disabled
        });
      const x = oe(`${l}-affix-wrapper`, `${l}-affix-wrapper-textarea-with-clear-btn`, Qn(`${l}-affix-wrapper`, Ti(C, h), S), {
        [`${l}-affix-wrapper-rtl`]: d === "rtl",
        [`${l}-affix-wrapper-borderless`]: !f,
        // className will go to addon wrapper
        [`${o.class}`]: !rT({
          addonAfter: m,
          addonBefore: w
        }) && o.class
      }, b);
      return v("span", {
        class: x,
        style: o.style,
        hidden: p
      }, [tt(s, {
        style: null,
        value: c,
        disabled: e.disabled
      }), i(l)]);
    };
    return () => {
      var l;
      const {
        prefixCls: s,
        inputType: c,
        element: u = (l = n.element) === null || l === void 0 ? void 0 : l.call(n)
      } = e;
      return c === iT[0] ? a(s, u) : null;
    };
  }
}), lT = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, sT = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], Ca = {};
let pt;
function cT(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && Ca[n])
    return Ca[n];
  const o = window.getComputedStyle(e), r = o.getPropertyValue("box-sizing") || o.getPropertyValue("-moz-box-sizing") || o.getPropertyValue("-webkit-box-sizing"), i = parseFloat(o.getPropertyValue("padding-bottom")) + parseFloat(o.getPropertyValue("padding-top")), a = parseFloat(o.getPropertyValue("border-bottom-width")) + parseFloat(o.getPropertyValue("border-top-width")), s = {
    sizingStyle: sT.map((c) => `${c}:${o.getPropertyValue(c)}`).join(";"),
    paddingSize: i,
    borderSize: a,
    boxSizing: r
  };
  return t && n && (Ca[n] = s), s;
}
function uT(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  pt || (pt = document.createElement("textarea"), pt.setAttribute("tab-index", "-1"), pt.setAttribute("aria-hidden", "true"), document.body.appendChild(pt)), e.getAttribute("wrap") ? pt.setAttribute("wrap", e.getAttribute("wrap")) : pt.removeAttribute("wrap");
  const {
    paddingSize: r,
    borderSize: i,
    boxSizing: a,
    sizingStyle: l
  } = cT(e, t);
  pt.setAttribute("style", `${l};${lT}`), pt.value = e.value || e.placeholder || "";
  let s, c, u, d = pt.scrollHeight;
  if (a === "border-box" ? d += i : a === "content-box" && (d -= r), n !== null || o !== null) {
    pt.value = " ";
    const p = pt.scrollHeight - r;
    n !== null && (s = p * n, a === "border-box" && (s = s + r + i), d = Math.max(s, d)), o !== null && (c = p * o, a === "border-box" && (c = c + r + i), u = d > c ? "" : "hidden", d = Math.min(c, d));
  }
  const f = {
    height: `${d}px`,
    overflowY: u,
    resize: "none"
  };
  return s && (f.minHeight = `${s}px`), c && (f.maxHeight = `${c}px`), f;
}
const $a = 0, Oa = 1, Pa = 2, dT = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ResizableTextArea",
  inheritAttrs: !1,
  props: Cv(),
  setup(e, t) {
    let {
      attrs: n,
      emit: o,
      expose: r
    } = t, i, a;
    const l = te(), s = te({}), c = te(Pa);
    Ae(() => {
      $e.cancel(i), $e.cancel(a);
    });
    const u = () => {
      try {
        if (l.value && document.activeElement === l.value.input) {
          const O = l.value.getSelectionStart(), y = l.value.getSelectionEnd(), I = l.value.getScrollTop();
          l.value.setSelectionRange(O, y), l.value.setScrollTop(I);
        }
      } catch {
      }
    }, d = te(), f = te();
    Pe(() => {
      const O = e.autoSize || e.autosize;
      O ? (d.value = O.minRows, f.value = O.maxRows) : (d.value = void 0, f.value = void 0);
    });
    const p = T(() => !!(e.autoSize || e.autosize)), h = () => {
      c.value = $a;
    };
    ae([() => e.value, d, f, p], () => {
      p.value && h();
    }, {
      immediate: !0
    });
    const m = te();
    ae([c, l], () => {
      if (l.value)
        if (c.value === $a)
          c.value = Oa;
        else if (c.value === Oa) {
          const O = uT(l.value.input, !1, d.value, f.value);
          c.value = Pa, m.value = O;
        } else
          u();
    }, {
      immediate: !0,
      flush: "post"
    });
    const w = Ut(), b = te(), C = () => {
      $e.cancel(b.value);
    }, S = (O) => {
      c.value === Pa && (o("resize", O), p.value && (C(), b.value = $e(() => {
        h();
      })));
    };
    Ae(() => {
      C();
    }), r({
      resizeTextarea: () => {
        h();
      },
      textArea: T(() => {
        var O;
        return (O = l.value) === null || O === void 0 ? void 0 : O.input;
      }),
      instance: w
    }), et(e.autosize === void 0, "Input.TextArea", "autosize is deprecated, please use autoSize instead.");
    const $ = () => {
      const {
        prefixCls: O,
        disabled: y
      } = e, I = Ue(e, ["prefixCls", "onPressEnter", "autoSize", "autosize", "defaultValue", "allowClear", "type", "maxlength", "valueModifiers"]), E = oe(O, n.class, {
        [`${O}-disabled`]: y
      }), R = p.value ? m.value : null, _ = [n.style, s.value, R], N = g(g(g({}, I), n), {
        style: _,
        class: E
      });
      return (c.value === $a || c.value === Oa) && _.push({
        overflowX: "hidden",
        overflowY: "hidden"
      }), N.autofocus || delete N.autofocus, N.rows === 0 && delete N.rows, v(si, {
        onResize: S,
        disabled: !p.value
      }, {
        default: () => [v(ns, D(D({}, N), {}, {
          ref: l,
          tag: "textarea"
        }), null)]
      });
    };
    return () => $();
  }
});
function $v(e, t) {
  return [...e || ""].slice(0, t).join("");
}
function af(e, t, n, o) {
  let r = n;
  return e ? r = $v(n, o) : [...t || ""].length < n.length && [...n || ""].length > o && (r = t), r;
}
const Ov = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ATextarea",
  inheritAttrs: !1,
  props: Cv(),
  setup(e, t) {
    let {
      attrs: n,
      expose: o,
      emit: r
    } = t;
    var i;
    const a = or(), l = sn.useInject(), s = T(() => Ti(l.status, e.status)), c = k((i = e.value) !== null && i !== void 0 ? i : e.defaultValue), u = k(), d = k(""), {
      prefixCls: f,
      size: p,
      direction: h
    } = Se("input", e), [m, w] = Ds(f), b = Tn(), C = T(() => e.showCount === "" || e.showCount || !1), S = T(() => Number(e.maxlength) > 0), x = k(!1), $ = k(), O = k(0), y = (A) => {
      x.value = !0, $.value = d.value, O.value = A.currentTarget.selectionStart, r("compositionstart", A);
    }, I = (A) => {
      var z;
      x.value = !1;
      let q = A.currentTarget.value;
      if (S.value) {
        const Y = O.value >= e.maxlength + 1 || O.value === ((z = $.value) === null || z === void 0 ? void 0 : z.length);
        q = af(Y, $.value, q, e.maxlength);
      }
      q !== d.value && (N(q), No(A.currentTarget, A, P, q)), r("compositionend", A);
    }, E = Ut();
    ae(() => e.value, () => {
      var A;
      "value" in E.vnode.props, c.value = (A = e.value) !== null && A !== void 0 ? A : "";
    });
    const R = (A) => {
      var z;
      wv((z = u.value) === null || z === void 0 ? void 0 : z.textArea, A);
    }, _ = () => {
      var A, z;
      (z = (A = u.value) === null || A === void 0 ? void 0 : A.textArea) === null || z === void 0 || z.blur();
    }, N = (A, z) => {
      c.value !== A && (e.value === void 0 ? c.value = A : Fe(() => {
        var q, Y, K;
        u.value.textArea.value !== d.value && ((K = (q = u.value) === null || q === void 0 ? void 0 : (Y = q.instance).update) === null || K === void 0 || K.call(Y));
      }), Fe(() => {
        z && z();
      }));
    }, F = (A) => {
      A.keyCode === 13 && r("pressEnter", A), r("keydown", A);
    }, j = (A) => {
      const {
        onBlur: z
      } = e;
      z == null || z(A), a.onFieldBlur();
    }, P = (A) => {
      r("update:value", A.target.value), r("change", A), r("input", A), a.onFieldChange();
    }, M = (A) => {
      No(u.value.textArea, A, P), N("", () => {
        R();
      });
    }, L = (A) => {
      let z = A.target.value;
      if (c.value !== z) {
        if (S.value) {
          const q = A.target, Y = q.selectionStart >= e.maxlength + 1 || q.selectionStart === z.length || !q.selectionStart;
          z = af(Y, d.value, z, e.maxlength);
        }
        No(A.currentTarget, A, P, z), N(z);
      }
    }, H = () => {
      var A, z;
      const {
        class: q
      } = n, {
        bordered: Y = !0
      } = e, K = g(g(g({}, Ue(e, ["allowClear"])), n), {
        class: [{
          [`${f.value}-borderless`]: !Y,
          [`${q}`]: q && !C.value,
          [`${f.value}-sm`]: p.value === "small",
          [`${f.value}-lg`]: p.value === "large"
        }, Qn(f.value, s.value), w.value],
        disabled: b.value,
        showCount: null,
        prefixCls: f.value,
        onInput: L,
        onChange: L,
        onBlur: j,
        onKeydown: F,
        onCompositionstart: y,
        onCompositionend: I
      });
      return !((A = e.valueModifiers) === null || A === void 0) && A.lazy && delete K.onInput, v(dT, D(D({}, K), {}, {
        id: (z = K == null ? void 0 : K.id) !== null && z !== void 0 ? z : a.id.value,
        ref: u,
        maxlength: e.maxlength,
        lazy: e.lazy
      }), null);
    };
    return o({
      focus: R,
      blur: _,
      resizableTextArea: u
    }), Pe(() => {
      let A = Ol(c.value);
      !x.value && S.value && (e.value === null || e.value === void 0) && (A = $v(A, e.maxlength)), d.value = A;
    }), () => {
      var A;
      const {
        maxlength: z,
        bordered: q = !0,
        hidden: Y
      } = e, {
        style: K,
        class: W
      } = n, G = g(g(g({}, e), n), {
        prefixCls: f.value,
        inputType: "text",
        handleReset: M,
        direction: h.value,
        bordered: q,
        style: C.value ? void 0 : K,
        hashId: w.value,
        disabled: (A = e.disabled) !== null && A !== void 0 ? A : b.value
      });
      let ee = v(aT, D(D({}, G), {}, {
        value: d.value,
        status: e.status
      }), {
        element: H
      });
      if (C.value || l.hasFeedback) {
        const re = [...d.value].length;
        let ie = "";
        typeof C.value == "object" ? ie = C.value.formatter({
          value: d.value,
          count: re,
          maxlength: z
        }) : ie = `${re}${S.value ? ` / ${z}` : ""}`, ee = v("div", {
          hidden: Y,
          class: oe(`${f.value}-textarea`, {
            [`${f.value}-textarea-rtl`]: h.value === "rtl",
            [`${f.value}-textarea-show-count`]: C.value,
            [`${f.value}-textarea-in-form-item`]: l.isFormItemInput
          }, `${f.value}-textarea-show-count`, W, w.value),
          style: K,
          "data-count": typeof ie != "object" ? ie : void 0
        }, [ee, l.hasFeedback && v("span", {
          class: `${f.value}-textarea-suffix`
        }, [l.feedbackIcon])]);
      }
      return m(ee);
    };
  }
});
var fT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" };
function lf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      pT(e, r, n[r]);
    });
  }
  return e;
}
function pT(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Li = function(t, n) {
  var o = lf({}, t, n.attrs);
  return v(de, lf({}, o, {
    icon: fT
  }), null);
};
Li.displayName = "EyeOutlined";
Li.inheritAttrs = !1;
var mT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" };
function sf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      gT(e, r, n[r]);
    });
  }
  return e;
}
function gT(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Us = function(t, n) {
  var o = sf({}, t, n.attrs);
  return v(de, sf({}, o, {
    icon: mT
  }), null);
};
Us.displayName = "EyeInvisibleOutlined";
Us.inheritAttrs = !1;
var vT = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const hT = {
  click: "onClick",
  hover: "onMouseover"
}, yT = (e) => e ? v(Li, null, null) : v(Us, null, null), bT = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AInputPassword",
  inheritAttrs: !1,
  props: g(g({}, Ni()), {
    prefixCls: String,
    inputPrefixCls: String,
    action: {
      type: String,
      default: "click"
    },
    visibilityToggle: {
      type: Boolean,
      default: !0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    "onUpdate:visible": Function,
    iconRender: Function
  }),
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      expose: r,
      emit: i
    } = t;
    const a = k(!1), l = () => {
      const {
        disabled: w
      } = e;
      w || (a.value = !a.value, i("update:visible", a.value));
    };
    Pe(() => {
      e.visible !== void 0 && (a.value = !!e.visible);
    });
    const s = k();
    r({
      focus: () => {
        var w;
        (w = s.value) === null || w === void 0 || w.focus();
      },
      blur: () => {
        var w;
        (w = s.value) === null || w === void 0 || w.blur();
      }
    });
    const d = (w) => {
      const {
        action: b,
        iconRender: C = n.iconRender || yT
      } = e, S = hT[b] || "", x = C(a.value), $ = {
        [S]: l,
        class: `${w}-icon`,
        key: "passwordIcon",
        onMousedown: (O) => {
          O.preventDefault();
        },
        onMouseup: (O) => {
          O.preventDefault();
        }
      };
      return tt(zt(x) ? x : v("span", null, [x]), $);
    }, {
      prefixCls: f,
      getPrefixCls: p
    } = Se("input-password", e), h = T(() => p("input", e.inputPrefixCls)), m = () => {
      const {
        size: w,
        visibilityToggle: b
      } = e, C = vT(e, ["size", "visibilityToggle"]), S = b && d(f.value), x = oe(f.value, o.class, {
        [`${f.value}-${w}`]: !!w
      }), $ = g(g(g({}, Ue(C, ["suffix", "iconRender", "action"])), o), {
        type: a.value ? "text" : "password",
        class: x,
        prefixCls: h.value,
        suffix: S
      });
      return w && ($.size = w), v(ze, D({
        ref: s
      }, $), n);
    };
    return () => m();
  }
});
ze.Group = tT;
ze.Search = oT;
ze.TextArea = Ov;
ze.Password = bT;
ze.install = function(e) {
  return e.component(ze.name, ze), e.component(ze.Group.name, ze.Group), e.component(ze.Search.name, ze.Search), e.component(ze.TextArea.name, ze.TextArea), e.component(ze.Password.name, ze.Password), e;
};
function Gs() {
  return {
    keyboard: {
      type: Boolean,
      default: void 0
    },
    mask: {
      type: Boolean,
      default: void 0
    },
    afterClose: Function,
    closable: {
      type: Boolean,
      default: void 0
    },
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    destroyOnClose: {
      type: Boolean,
      default: void 0
    },
    mousePosition: V.shape({
      x: Number,
      y: Number
    }).loose,
    title: V.any,
    footer: V.any,
    transitionName: String,
    maskTransitionName: String,
    animation: V.any,
    maskAnimation: V.any,
    wrapStyle: {
      type: Object,
      default: void 0
    },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    prefixCls: String,
    wrapClassName: String,
    rootClassName: String,
    width: [String, Number],
    height: [String, Number],
    zIndex: Number,
    bodyProps: V.any,
    maskProps: V.any,
    wrapProps: V.any,
    getContainer: V.any,
    dialogStyle: {
      type: Object,
      default: void 0
    },
    dialogClass: String,
    closeIcon: V.any,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getOpenCount: Function,
    // https://github.com/ant-design/ant-design/issues/19771
    // https://github.com/react-component/dialog/issues/95
    focusTriggerAfterClose: {
      type: Boolean,
      default: void 0
    },
    onClose: Function,
    modalRender: Function
  };
}
function cf(e, t, n) {
  let o = t;
  return !o && n && (o = `${e}-${n}`), o;
}
let uf = -1;
function wT() {
  return uf += 1, uf;
}
function df(e, t) {
  let n = e[`page${t ? "Y" : "X"}Offset`];
  const o = `scroll${t ? "Top" : "Left"}`;
  if (typeof n != "number") {
    const r = e.document;
    n = r.documentElement[o], typeof n != "number" && (n = r.body[o]);
  }
  return n;
}
function ST(e) {
  const t = e.getBoundingClientRect(), n = {
    left: t.left,
    top: t.top
  }, o = e.ownerDocument, r = o.defaultView || o.parentWindow;
  return n.left += df(r), n.top += df(r, !0), n;
}
const xT = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, CT = {
  outline: "none"
}, $T = Z({
  compatConfig: {
    MODE: 3
  },
  name: "DialogContent",
  inheritAttrs: !1,
  props: g(g({}, Gs()), {
    motionName: String,
    ariaId: String,
    onVisibleChanged: Function,
    onMousedown: Function,
    onMouseup: Function
  }),
  setup(e, t) {
    let {
      expose: n,
      slots: o,
      attrs: r
    } = t;
    const i = te(), a = te(), l = te();
    n({
      focus: () => {
        var f;
        (f = i.value) === null || f === void 0 || f.focus({
          preventScroll: !0
        });
      },
      changeActive: (f) => {
        const {
          activeElement: p
        } = document;
        f && p === a.value ? i.value.focus({
          preventScroll: !0
        }) : !f && p === i.value && a.value.focus({
          preventScroll: !0
        });
      }
    });
    const s = te(), c = T(() => {
      const {
        width: f,
        height: p
      } = e, h = {};
      return f !== void 0 && (h.width = typeof f == "number" ? `${f}px` : f), p !== void 0 && (h.height = typeof p == "number" ? `${p}px` : p), s.value && (h.transformOrigin = s.value), h;
    }), u = () => {
      Fe(() => {
        if (l.value) {
          const f = ST(l.value);
          s.value = e.mousePosition ? `${e.mousePosition.x - f.left}px ${e.mousePosition.y - f.top}px` : "";
        }
      });
    }, d = (f) => {
      e.onVisibleChanged(f);
    };
    return () => {
      var f, p, h, m;
      const {
        prefixCls: w,
        footer: b = (f = o.footer) === null || f === void 0 ? void 0 : f.call(o),
        title: C = (p = o.title) === null || p === void 0 ? void 0 : p.call(o),
        ariaId: S,
        closable: x,
        closeIcon: $ = (h = o.closeIcon) === null || h === void 0 ? void 0 : h.call(o),
        onClose: O,
        bodyStyle: y,
        bodyProps: I,
        onMousedown: E,
        onMouseup: R,
        visible: _,
        modalRender: N = o.modalRender,
        destroyOnClose: F,
        motionName: j
      } = e;
      let P;
      b && (P = v("div", {
        class: `${w}-footer`
      }, [b]));
      let M;
      C && (M = v("div", {
        class: `${w}-header`
      }, [v("div", {
        class: `${w}-title`,
        id: S
      }, [C])]));
      let L;
      x && (L = v("button", {
        type: "button",
        onClick: O,
        "aria-label": "Close",
        class: `${w}-close`
      }, [$ || v("span", {
        class: `${w}-close-x`
      }, null)]));
      const H = v("div", {
        class: `${w}-content`
      }, [L, M, v("div", D({
        class: `${w}-body`,
        style: y
      }, I), [(m = o.default) === null || m === void 0 ? void 0 : m.call(o)]), P]), A = tr(j);
      return v(Gt, D(D({}, A), {}, {
        onBeforeEnter: u,
        onAfterEnter: () => d(!0),
        onAfterLeave: () => d(!1)
      }), {
        default: () => [_ || !F ? Bt(v("div", D(D({}, r), {}, {
          ref: l,
          key: "dialog-element",
          role: "document",
          style: [c.value, r.style],
          class: [w, r.class],
          onMousedown: E,
          onMouseup: R
        }), [v("div", {
          tabindex: 0,
          ref: i,
          style: CT
        }, [N ? N({
          originVNode: H
        }) : H]), v("div", {
          tabindex: 0,
          ref: a,
          style: xT
        }, null)]), [[mo, _]]) : null]
      });
    };
  }
}), OT = Z({
  compatConfig: {
    MODE: 3
  },
  name: "DialogMask",
  props: {
    prefixCls: String,
    visible: Boolean,
    motionName: String,
    maskProps: Object
  },
  setup(e, t) {
    return () => {
      const {
        prefixCls: n,
        visible: o,
        maskProps: r,
        motionName: i
      } = e, a = tr(i);
      return v(Gt, a, {
        default: () => [Bt(v("div", D({
          class: `${n}-mask`
        }, r), null), [[mo, o]])]
      });
    };
  }
}), ff = Z({
  compatConfig: {
    MODE: 3
  },
  name: "VcDialog",
  inheritAttrs: !1,
  props: Be(g(g({}, Gs()), {
    getOpenCount: Function,
    scrollLocker: Object
  }), {
    mask: !0,
    visible: !1,
    keyboard: !0,
    closable: !0,
    maskClosable: !0,
    destroyOnClose: !1,
    prefixCls: "rc-dialog",
    getOpenCount: () => null,
    focusTriggerAfterClose: !0
  }),
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const r = k(), i = k(), a = k(), l = k(e.visible), s = k(`vcDialogTitle${wT()}`), c = (b) => {
      var C, S;
      if (b)
        Qt(i.value, document.activeElement) || (r.value = document.activeElement, (C = a.value) === null || C === void 0 || C.focus());
      else {
        const x = l.value;
        if (l.value = !1, e.mask && r.value && e.focusTriggerAfterClose) {
          try {
            r.value.focus({
              preventScroll: !0
            });
          } catch {
          }
          r.value = null;
        }
        x && ((S = e.afterClose) === null || S === void 0 || S.call(e));
      }
    }, u = (b) => {
      var C;
      (C = e.onClose) === null || C === void 0 || C.call(e, b);
    }, d = k(!1), f = k(), p = () => {
      clearTimeout(f.value), d.value = !0;
    }, h = () => {
      f.value = setTimeout(() => {
        d.value = !1;
      });
    }, m = (b) => {
      if (!e.maskClosable) return null;
      d.value ? d.value = !1 : i.value === b.target && u(b);
    }, w = (b) => {
      if (e.keyboard && b.keyCode === J.ESC) {
        b.stopPropagation(), u(b);
        return;
      }
      e.visible && b.keyCode === J.TAB && a.value.changeActive(!b.shiftKey);
    };
    return ae(() => e.visible, () => {
      e.visible && (l.value = !0);
    }, {
      flush: "post"
    }), Ae(() => {
      var b;
      clearTimeout(f.value), (b = e.scrollLocker) === null || b === void 0 || b.unLock();
    }), Pe(() => {
      var b, C;
      (b = e.scrollLocker) === null || b === void 0 || b.unLock(), l.value && ((C = e.scrollLocker) === null || C === void 0 || C.lock());
    }), () => {
      const {
        prefixCls: b,
        mask: C,
        visible: S,
        maskTransitionName: x,
        maskAnimation: $,
        zIndex: O,
        wrapClassName: y,
        rootClassName: I,
        wrapStyle: E,
        closable: R,
        maskProps: _,
        maskStyle: N,
        transitionName: F,
        animation: j,
        wrapProps: P,
        title: M = o.title
      } = e, {
        style: L,
        class: H
      } = n;
      return v("div", D({
        class: [`${b}-root`, I]
      }, nr(e, {
        data: !0
      })), [v(OT, {
        prefixCls: b,
        visible: C && S,
        motionName: cf(b, x, $),
        style: g({
          zIndex: O
        }, N),
        maskProps: _
      }, null), v("div", D({
        tabIndex: -1,
        onKeydown: w,
        class: oe(`${b}-wrap`, y),
        ref: i,
        onClick: m,
        role: "dialog",
        "aria-labelledby": M ? s.value : null,
        style: g(g({
          zIndex: O
        }, E), {
          display: l.value ? null : "none"
        })
      }, P), [v($T, D(D({}, Ue(e, ["scrollLocker"])), {}, {
        style: L,
        class: H,
        onMousedown: p,
        onMouseup: h,
        ref: a,
        closable: R,
        ariaId: s.value,
        prefixCls: b,
        visible: S,
        onClose: u,
        onVisibleChanged: c,
        motionName: cf(b, F, j)
      }), o)])]);
    };
  }
}), PT = Gs(), IT = Z({
  compatConfig: {
    MODE: 3
  },
  name: "DialogWrap",
  inheritAttrs: !1,
  props: Be(PT, {
    visible: !1
  }),
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const r = te(e.visible);
    return ts({}, {
      inTriggerContext: !1
    }), ae(() => e.visible, () => {
      e.visible && (r.value = !0);
    }, {
      flush: "post"
    }), () => {
      const {
        visible: i,
        getContainer: a,
        forceRender: l,
        destroyOnClose: s = !1,
        afterClose: c
      } = e;
      let u = g(g(g({}, e), n), {
        ref: "_component",
        key: "dialog"
      });
      return a === !1 ? v(ff, D(D({}, u), {}, {
        getOpenCount: () => 2
      }), o) : !l && s && !r.value ? null : v(Fm, {
        autoLock: !0,
        visible: i,
        forceRender: l,
        getContainer: a
      }, {
        default: (d) => (u = g(g(g({}, u), d), {
          afterClose: () => {
            c == null || c(), r.value = !1;
          }
        }), v(ff, u, o))
      });
    };
  }
});
var TT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z" } }, { tag: "path", attrs: { d: "M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z" } }] }, name: "rotate-right", theme: "outlined" };
function pf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      ET(e, r, n[r]);
    });
  }
  return e;
}
function ET(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ks = function(t, n) {
  var o = pf({}, t, n.attrs);
  return v(de, pf({}, o, {
    icon: TT
  }), null);
};
ks.displayName = "RotateRightOutlined";
ks.inheritAttrs = !1;
var _T = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-in", theme: "outlined" };
function mf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      AT(e, r, n[r]);
    });
  }
  return e;
}
function AT(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Xs = function(t, n) {
  var o = mf({}, t, n.attrs);
  return v(de, mf({}, o, {
    icon: _T
  }), null);
};
Xs.displayName = "ZoomInOutlined";
Xs.inheritAttrs = !1;
var MT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-out", theme: "outlined" };
function gf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      RT(e, r, n[r]);
    });
  }
  return e;
}
function RT(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var qs = function(t, n) {
  var o = gf({}, t, n.attrs);
  return v(de, gf({}, o, {
    icon: MT
  }), null);
};
qs.displayName = "ZoomOutOutlined";
qs.inheritAttrs = !1;
function vf(e) {
  return {
    position: e,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0
  };
}
const FT = (e) => {
  const {
    componentCls: t
  } = e;
  return [{
    [`${t}-root`]: {
      [`${t}${e.antCls}-zoom-enter, ${t}${e.antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: e.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      [`${t}${e.antCls}-zoom-leave ${t}-content`]: {
        pointerEvents: "none"
      },
      [`${t}-mask`]: g(g({}, vf("fixed")), {
        zIndex: e.zIndexPopupBase,
        height: "100%",
        backgroundColor: e.colorBgMask,
        [`${t}-hidden`]: {
          display: "none"
        }
      }),
      [`${t}-wrap`]: g(g({}, vf("fixed")), {
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${t}-root`]: C4(e)
  }];
}, DT = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    // ======================== Root =========================
    {
      [`${t}-root`]: {
        [`${t}-wrap`]: {
          zIndex: e.zIndexPopupBase,
          position: "fixed",
          inset: 0,
          overflow: "auto",
          outline: 0,
          WebkitOverflowScrolling: "touch"
        },
        [`${t}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${t}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [t]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${e.screenSMMax})`]: {
          [t]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${e.marginXS} auto`
          },
          [`${t}-centered`]: {
            [t]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [t]: g(g({}, ot(e)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${e.margin * 2}px)`,
        margin: "0 auto",
        paddingBottom: e.paddingLG,
        [`${t}-title`]: {
          margin: 0,
          color: e.modalHeadingColor,
          fontWeight: e.fontWeightStrong,
          fontSize: e.modalHeaderTitleFontSize,
          lineHeight: e.modalHeaderTitleLineHeight,
          wordWrap: "break-word"
        },
        [`${t}-content`]: {
          position: "relative",
          backgroundColor: e.modalContentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: e.borderRadiusLG,
          boxShadow: e.boxShadowSecondary,
          pointerEvents: "auto",
          padding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
        },
        [`${t}-close`]: g({
          position: "absolute",
          top: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
          insetInlineEnd: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
          zIndex: e.zIndexPopupBase + 10,
          padding: 0,
          color: e.modalCloseColor,
          fontWeight: e.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: e.borderRadiusSM,
          width: e.modalConfirmIconSize,
          height: e.modalConfirmIconSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
          "&-x": {
            display: "block",
            fontSize: e.fontSizeLG,
            fontStyle: "normal",
            lineHeight: `${e.modalCloseBtnSize}px`,
            textAlign: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: e.modalIconHoverColor,
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContent,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContentHover
          }
        }, Wp(e)),
        [`${t}-header`]: {
          color: e.colorText,
          background: e.modalHeaderBg,
          borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
          marginBottom: e.marginXS
        },
        [`${t}-body`]: {
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          wordWrap: "break-word"
        },
        [`${t}-footer`]: {
          textAlign: "end",
          background: e.modalFooterBg,
          marginTop: e.marginSM,
          [`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]: {
            marginBottom: 0,
            marginInlineStart: e.marginXS
          }
        },
        [`${t}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${t}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${t}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
}, NT = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-confirm`;
  return {
    [n]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${e.antCls}-modal-header`]: {
        display: "none"
      },
      [`${n}-body-wrapper`]: g({}, gi()),
      [`${n}-body`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        [`${n}-title`]: {
          flex: "0 0 100%",
          display: "block",
          // create BFC to avoid
          // https://user-images.githubusercontent.com/507615/37702510-ba844e06-2d2d-11e8-9b67-8e19be57f445.png
          overflow: "hidden",
          color: e.colorTextHeading,
          fontWeight: e.fontWeightStrong,
          fontSize: e.modalHeaderTitleFontSize,
          lineHeight: e.modalHeaderTitleLineHeight,
          [`+ ${n}-content`]: {
            marginBlockStart: e.marginXS,
            flexBasis: "100%",
            maxWidth: `calc(100% - ${e.modalConfirmIconSize + e.marginSM}px)`
          }
        },
        [`${n}-content`]: {
          color: e.colorText,
          fontSize: e.fontSize
        },
        [`> ${e.iconCls}`]: {
          flex: "none",
          marginInlineEnd: e.marginSM,
          fontSize: e.modalConfirmIconSize,
          [`+ ${n}-title`]: {
            flex: 1
          },
          // `content` after `icon` should set marginLeft
          [`+ ${n}-title + ${n}-content`]: {
            marginInlineStart: e.modalConfirmIconSize + e.marginSM
          }
        }
      },
      [`${n}-btns`]: {
        textAlign: "end",
        marginTop: e.marginSM,
        [`${e.antCls}-btn + ${e.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: e.marginXS
        }
      }
    },
    [`${n}-error ${n}-body > ${e.iconCls}`]: {
      color: e.colorError
    },
    [`${n}-warning ${n}-body > ${e.iconCls},
        ${n}-confirm ${n}-body > ${e.iconCls}`]: {
      color: e.colorWarning
    },
    [`${n}-info ${n}-body > ${e.iconCls}`]: {
      color: e.colorInfo
    },
    [`${n}-success ${n}-body > ${e.iconCls}`]: {
      color: e.colorSuccess
    },
    // https://github.com/ant-design/ant-design/issues/37329
    [`${t}-zoom-leave ${t}-btns`]: {
      pointerEvents: "none"
    }
  };
}, LT = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-root`]: {
      [`${t}-wrap-rtl`]: {
        direction: "rtl",
        [`${t}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
}, jT = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, o = `${t}-confirm`;
  return {
    [t]: {
      [`${t}-content`]: {
        padding: 0
      },
      [`${t}-header`]: {
        padding: e.modalHeaderPadding,
        borderBottom: `${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,
        marginBottom: 0
      },
      [`${t}-body`]: {
        padding: e.modalBodyPadding
      },
      [`${t}-footer`]: {
        padding: `${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,
        borderTop: `${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,
        borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
        marginTop: 0
      }
    },
    [o]: {
      [`${n}-modal-body`]: {
        padding: `${e.padding * 2}px ${e.padding * 2}px ${e.paddingLG}px`
      },
      [`${o}-body`]: {
        [`> ${e.iconCls}`]: {
          marginInlineEnd: e.margin,
          // `content` after `icon` should set marginLeft
          [`+ ${o}-title + ${o}-content`]: {
            marginInlineStart: e.modalConfirmIconSize + e.margin
          }
        }
      },
      [`${o}-btns`]: {
        marginTop: e.marginLG
      }
    }
  };
}, HT = Ge("Modal", (e) => {
  const t = e.padding, n = e.fontSizeHeading5, o = e.lineHeightHeading5, r = we(e, {
    modalBodyPadding: e.paddingLG,
    modalHeaderBg: e.colorBgElevated,
    modalHeaderPadding: `${t}px ${e.paddingLG}px`,
    modalHeaderBorderWidth: e.lineWidth,
    modalHeaderBorderStyle: e.lineType,
    modalHeaderTitleLineHeight: o,
    modalHeaderTitleFontSize: n,
    modalHeaderBorderColorSplit: e.colorSplit,
    modalHeaderCloseSize: o * n + t * 2,
    modalContentBg: e.colorBgElevated,
    modalHeadingColor: e.colorTextHeading,
    modalCloseColor: e.colorTextDescription,
    modalFooterBg: "transparent",
    modalFooterBorderColorSplit: e.colorSplit,
    modalFooterBorderStyle: e.lineType,
    modalFooterPaddingVertical: e.paddingXS,
    modalFooterPaddingHorizontal: e.padding,
    modalFooterBorderWidth: e.lineWidth,
    modalConfirmTitleFontSize: e.fontSizeLG,
    modalIconHoverColor: e.colorIconHover,
    modalConfirmIconSize: e.fontSize * e.lineHeight,
    modalCloseBtnSize: e.controlHeightLG * 0.55
  });
  return [DT(r), NT(r), LT(r), FT(r), e.wireframe && jT(r), Os(r, "zoom")];
});
var BT = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
let Pl;
const zT = (e) => {
  Pl = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => Pl = null, 100);
};
jg() && Un(document.documentElement, "click", zT, !0);
const VT = () => ({
  prefixCls: String,
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  confirmLoading: {
    type: Boolean,
    default: void 0
  },
  title: V.any,
  closable: {
    type: Boolean,
    default: void 0
  },
  closeIcon: V.any,
  onOk: Function,
  onCancel: Function,
  "onUpdate:visible": Function,
  "onUpdate:open": Function,
  onChange: Function,
  afterClose: Function,
  centered: {
    type: Boolean,
    default: void 0
  },
  width: [String, Number],
  footer: V.any,
  okText: V.any,
  okType: String,
  cancelText: V.any,
  icon: V.any,
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  forceRender: {
    type: Boolean,
    default: void 0
  },
  okButtonProps: pe(),
  cancelButtonProps: pe(),
  destroyOnClose: {
    type: Boolean,
    default: void 0
  },
  wrapClassName: String,
  maskTransitionName: String,
  transitionName: String,
  getContainer: {
    type: [String, Function, Boolean, Object],
    default: void 0
  },
  zIndex: Number,
  bodyStyle: pe(),
  maskStyle: pe(),
  mask: {
    type: Boolean,
    default: void 0
  },
  keyboard: {
    type: Boolean,
    default: void 0
  },
  wrapProps: Object,
  focusTriggerAfterClose: {
    type: Boolean,
    default: void 0
  },
  modalRender: Function,
  mousePosition: pe()
}), st = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AModal",
  inheritAttrs: !1,
  props: Be(VT(), {
    width: 520,
    confirmLoading: !1,
    okType: "primary"
  }),
  setup(e, t) {
    let {
      emit: n,
      slots: o,
      attrs: r
    } = t;
    const [i] = go("Modal"), {
      prefixCls: a,
      rootPrefixCls: l,
      direction: s,
      getPopupContainer: c
    } = Se("modal", e), [u, d] = HT(a);
    et(e.visible === void 0, "Modal", "`visible` will be removed in next major version, please use `open` instead.");
    const f = (m) => {
      n("update:visible", !1), n("update:open", !1), n("cancel", m), n("change", !1);
    }, p = (m) => {
      n("ok", m);
    }, h = () => {
      var m, w;
      const {
        okText: b = (m = o.okText) === null || m === void 0 ? void 0 : m.call(o),
        okType: C,
        cancelText: S = (w = o.cancelText) === null || w === void 0 ? void 0 : w.call(o),
        confirmLoading: x
      } = e;
      return v(Ie, null, [v(nt, D({
        onClick: f
      }, e.cancelButtonProps), {
        default: () => [S || i.value.cancelText]
      }), v(nt, D(D({}, ti(C)), {}, {
        loading: x,
        onClick: p
      }, e.okButtonProps), {
        default: () => [b || i.value.okText]
      })]);
    };
    return () => {
      var m, w;
      const {
        prefixCls: b,
        visible: C,
        open: S,
        wrapClassName: x,
        centered: $,
        getContainer: O,
        closeIcon: y = (m = o.closeIcon) === null || m === void 0 ? void 0 : m.call(o),
        focusTriggerAfterClose: I = !0
      } = e, E = BT(e, ["prefixCls", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]), R = oe(x, {
        [`${a.value}-centered`]: !!$,
        [`${a.value}-wrap-rtl`]: s.value === "rtl"
      });
      return u(v(IT, D(D(D({}, E), r), {}, {
        rootClassName: d.value,
        class: oe(d.value, r.class),
        getContainer: O || (c == null ? void 0 : c.value),
        prefixCls: a.value,
        wrapClassName: R,
        visible: S ?? C,
        onClose: f,
        focusTriggerAfterClose: I,
        transitionName: ln(l.value, "zoom", e.transitionName),
        maskTransitionName: ln(l.value, "fade", e.maskTransitionName),
        mousePosition: (w = E.mousePosition) !== null && w !== void 0 ? w : Pl
      }), g(g({}, o), {
        footer: o.footer || h,
        closeIcon: () => v("span", {
          class: `${a.value}-close-x`
        }, [y || v(un, {
          class: `${a.value}-close-icon`
        }, null)])
      })));
    };
  }
}), WT = () => {
  const e = k(!1);
  return Ae(() => {
    e.value = !0;
  }), e;
}, UT = {
  type: {
    type: String
  },
  actionFn: Function,
  close: Function,
  autofocus: Boolean,
  prefixCls: String,
  buttonProps: pe(),
  emitEvent: Boolean,
  quitOnNullishReturnValue: Boolean
};
function hf(e) {
  return !!(e && e.then);
}
const Il = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ActionButton",
  props: UT,
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = k(!1), r = k(), i = k(!1);
    let a;
    const l = WT();
    be(() => {
      e.autofocus && (a = setTimeout(() => {
        var d, f;
        return (f = (d = Ht(r.value)) === null || d === void 0 ? void 0 : d.focus) === null || f === void 0 ? void 0 : f.call(d);
      }));
    }), Ae(() => {
      clearTimeout(a);
    });
    const s = function() {
      for (var d, f = arguments.length, p = new Array(f), h = 0; h < f; h++)
        p[h] = arguments[h];
      (d = e.close) === null || d === void 0 || d.call(e, ...p);
    }, c = (d) => {
      hf(d) && (i.value = !0, d.then(function() {
        l.value || (i.value = !1), s(...arguments), o.value = !1;
      }, (f) => (l.value || (i.value = !1), o.value = !1, Promise.reject(f))));
    }, u = (d) => {
      const {
        actionFn: f
      } = e;
      if (o.value)
        return;
      if (o.value = !0, !f) {
        s();
        return;
      }
      let p;
      if (e.emitEvent) {
        if (p = f(d), e.quitOnNullishReturnValue && !hf(p)) {
          o.value = !1, s(d);
          return;
        }
      } else if (f.length)
        p = f(e.close), o.value = !1;
      else if (p = f(), !p) {
        s();
        return;
      }
      c(p);
    };
    return () => {
      const {
        type: d,
        prefixCls: f,
        buttonProps: p
      } = e;
      return v(nt, D(D(D({}, ti(d)), {}, {
        onClick: u,
        loading: i.value,
        prefixCls: f
      }, p), {}, {
        ref: r
      }), n);
    };
  }
});
function Hn(e) {
  return typeof e == "function" ? e() : e;
}
const Pv = Z({
  name: "ConfirmDialog",
  inheritAttrs: !1,
  props: ["icon", "onCancel", "onOk", "close", "closable", "zIndex", "afterClose", "visible", "open", "keyboard", "centered", "getContainer", "maskStyle", "okButtonProps", "cancelButtonProps", "okType", "prefixCls", "okCancel", "width", "mask", "maskClosable", "okText", "cancelText", "autoFocusButton", "transitionName", "maskTransitionName", "type", "title", "content", "direction", "rootPrefixCls", "bodyStyle", "closeIcon", "modalRender", "focusTriggerAfterClose", "wrapClassName", "confirmPrefixCls", "footer"],
  setup(e, t) {
    let {
      attrs: n
    } = t;
    const [o] = go("Modal");
    return process.env.NODE_ENV !== "production" && et(e.visible === void 0, "Modal", "`visible` is deprecated, please use `open` instead."), () => {
      const {
        icon: r,
        onCancel: i,
        onOk: a,
        close: l,
        okText: s,
        closable: c = !1,
        zIndex: u,
        afterClose: d,
        keyboard: f,
        centered: p,
        getContainer: h,
        maskStyle: m,
        okButtonProps: w,
        cancelButtonProps: b,
        okCancel: C,
        width: S = 416,
        mask: x = !0,
        maskClosable: $ = !1,
        type: O,
        open: y,
        title: I,
        content: E,
        direction: R,
        closeIcon: _,
        modalRender: N,
        focusTriggerAfterClose: F,
        rootPrefixCls: j,
        bodyStyle: P,
        wrapClassName: M,
        footer: L
      } = e;
      let H = r;
      if (!r && r !== null)
        switch (O) {
          case "info":
            H = v(Rn, null, null);
            break;
          case "success":
            H = v(qt, null, null);
            break;
          case "error":
            H = v(St, null, null);
            break;
          default:
            H = v(Kt, null, null);
        }
      const A = e.okType || "primary", z = e.prefixCls || "ant-modal", q = `${z}-confirm`, Y = n.style || {}, K = C ?? O === "confirm", W = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok", G = `${z}-confirm`, ee = oe(G, `${G}-${e.type}`, {
        [`${G}-rtl`]: R === "rtl"
      }, n.class), re = o.value, ie = K && v(Il, {
        actionFn: i,
        close: l,
        autofocus: W === "cancel",
        buttonProps: b,
        prefixCls: `${j}-btn`
      }, {
        default: () => [Hn(e.cancelText) || re.cancelText]
      });
      return v(st, {
        prefixCls: z,
        class: ee,
        wrapClassName: oe({
          [`${G}-centered`]: !!p
        }, M),
        onCancel: (X) => l == null ? void 0 : l({
          triggerCancel: !0
        }, X),
        open: y,
        title: "",
        footer: "",
        transitionName: ln(j, "zoom", e.transitionName),
        maskTransitionName: ln(j, "fade", e.maskTransitionName),
        mask: x,
        maskClosable: $,
        maskStyle: m,
        style: Y,
        bodyStyle: P,
        width: S,
        zIndex: u,
        afterClose: d,
        keyboard: f,
        centered: p,
        getContainer: h,
        closable: c,
        closeIcon: _,
        modalRender: N,
        focusTriggerAfterClose: F
      }, {
        default: () => [v("div", {
          class: `${q}-body-wrapper`
        }, [v("div", {
          class: `${q}-body`
        }, [Hn(H), I === void 0 ? null : v("span", {
          class: `${q}-title`
        }, [Hn(I)]), v("div", {
          class: `${q}-content`
        }, [Hn(E)])]), L !== void 0 ? Hn(L) : v("div", {
          class: `${q}-btns`
        }, [ie, v(Il, {
          type: A,
          actionFn: a,
          close: l,
          autofocus: W === "ok",
          buttonProps: w,
          prefixCls: `${j}-btn`
        }, {
          default: () => [Hn(s) || (K ? re.okText : re.justOkText)]
        })])])]
      });
    };
  }
}), yn = [], lr = (e) => {
  const t = document.createDocumentFragment();
  let n = g(g({}, Ue(e, ["parentContext", "appContext"])), {
    close: i,
    open: !0
  }), o = null;
  function r() {
    o && (on(null, t), o = null);
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    const f = u.some((p) => p && p.triggerCancel);
    e.onCancel && f && e.onCancel(() => {
    }, ...u.slice(1));
    for (let p = 0; p < yn.length; p++)
      if (yn[p] === i) {
        yn.splice(p, 1);
        break;
      }
  }
  function i() {
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    n = g(g({}, n), {
      open: !1,
      afterClose: () => {
        typeof e.afterClose == "function" && e.afterClose(), r.apply(this, u);
      }
    }), n.visible && delete n.visible, a(n);
  }
  function a(c) {
    typeof c == "function" ? n = c(n) : n = g(g({}, n), c), o && r1(o, n, t);
  }
  const l = (c) => {
    const u = Ve, d = u.prefixCls, f = c.prefixCls || `${d}-modal`, p = u.iconPrefixCls, h = n6();
    return v(Jn, D(D({}, u), {}, {
      prefixCls: d
    }), {
      default: () => [v(Pv, D(D({}, c), {}, {
        rootPrefixCls: d,
        prefixCls: f,
        iconPrefixCls: p,
        locale: h,
        cancelText: c.cancelText || h.cancelText
      }), null)]
    });
  };
  function s(c) {
    const u = v(l, g({}, c));
    return u.appContext = e.parentContext || e.appContext || u.appContext, on(u, t), u;
  }
  return o = s(n), yn.push(i), {
    destroy: i,
    update: a
  };
};
function Iv(e) {
  return g(g({}, e), {
    type: "warning"
  });
}
function Tv(e) {
  return g(g({}, e), {
    type: "info"
  });
}
function Ev(e) {
  return g(g({}, e), {
    type: "success"
  });
}
function _v(e) {
  return g(g({}, e), {
    type: "error"
  });
}
function Av(e) {
  return g(g({}, e), {
    type: "confirm"
  });
}
const GT = () => ({
  config: Object,
  afterClose: Function,
  destroyAction: Function,
  open: Boolean
}), kT = Z({
  name: "HookModal",
  inheritAttrs: !1,
  props: Be(GT(), {
    config: {
      width: 520,
      okType: "primary"
    }
  }),
  setup(e, t) {
    let {
      expose: n
    } = t;
    var o;
    const r = T(() => e.open), i = T(() => e.config), {
      direction: a,
      getPrefixCls: l
    } = ci(), s = l("modal"), c = l(), u = () => {
      var h, m;
      e == null || e.afterClose(), (m = (h = i.value).afterClose) === null || m === void 0 || m.call(h);
    }, d = function() {
      e.destroyAction(...arguments);
    };
    n({
      destroy: d
    });
    const f = (o = i.value.okCancel) !== null && o !== void 0 ? o : i.value.type === "confirm", [p] = go("Modal", Mt.Modal);
    return () => v(Pv, D(D({
      prefixCls: s,
      rootPrefixCls: c
    }, i.value), {}, {
      close: d,
      open: r.value,
      afterClose: u,
      okText: i.value.okText || (f ? p == null ? void 0 : p.value.okText : p == null ? void 0 : p.value.justOkText),
      direction: i.value.direction || a.value,
      cancelText: i.value.cancelText || (p == null ? void 0 : p.value.cancelText)
    }), null);
  }
});
let yf = 0;
const XT = Z({
  name: "ElementsHolder",
  inheritAttrs: !1,
  setup(e, t) {
    let {
      expose: n
    } = t;
    const o = k([]);
    return n({
      addModal: (i) => (o.value.push(i), o.value = o.value.slice(), () => {
        o.value = o.value.filter((a) => a !== i);
      })
    }), () => o.value.map((i) => i());
  }
});
function qT() {
  const e = k(null), t = k([]);
  ae(t, () => {
    t.value.length && ([...t.value].forEach((a) => {
      a();
    }), t.value = []);
  }, {
    immediate: !0
  });
  const n = (i) => function(l) {
    var s;
    yf += 1;
    const c = k(!0), u = k(null), d = k(ge(l)), f = k({});
    ae(() => l, (S) => {
      w(g(g({}, Qf(S) ? S.value : S), f.value));
    });
    const p = function() {
      c.value = !1;
      for (var S = arguments.length, x = new Array(S), $ = 0; $ < S; $++)
        x[$] = arguments[$];
      const O = x.some((y) => y && y.triggerCancel);
      d.value.onCancel && O && d.value.onCancel(() => {
      }, ...x.slice(1));
    };
    let h;
    const m = () => v(kT, {
      key: `modal-${yf}`,
      config: i(d.value),
      ref: u,
      open: c.value,
      destroyAction: p,
      afterClose: () => {
        h == null || h();
      }
    }, null);
    h = (s = e.value) === null || s === void 0 ? void 0 : s.addModal(m), h && yn.push(h);
    const w = (S) => {
      d.value = g(g({}, d.value), S);
    };
    return {
      destroy: () => {
        u.value ? p() : t.value = [...t.value, p];
      },
      update: (S) => {
        f.value = S, u.value ? w(S) : t.value = [...t.value, () => w(S)];
      }
    };
  }, o = T(() => ({
    info: n(Tv),
    success: n(Ev),
    error: n(_v),
    warning: n(Iv),
    confirm: n(Av)
  })), r = Symbol("modalHolderKey");
  return [o.value, () => v(XT, {
    key: r,
    ref: e
  }, null)];
}
function Mv(e) {
  return lr(Iv(e));
}
st.useModal = qT;
st.info = function(t) {
  return lr(Tv(t));
};
st.success = function(t) {
  return lr(Ev(t));
};
st.error = function(t) {
  return lr(_v(t));
};
st.warning = Mv;
st.warn = Mv;
st.confirm = function(t) {
  return lr(Av(t));
};
st.destroyAll = function() {
  for (; yn.length; ) {
    const t = yn.pop();
    t && t();
  }
};
st.install = function(e) {
  return e.component(st.name, st), e;
};
const KT = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    zIndexPopup: o,
    colorText: r,
    colorWarning: i,
    marginXS: a,
    fontSize: l,
    fontWeightStrong: s,
    lineHeight: c
  } = e;
  return {
    [t]: {
      zIndex: o,
      [`${t}-inner-content`]: {
        color: r
      },
      [`${t}-message`]: {
        position: "relative",
        marginBottom: a,
        color: r,
        fontSize: l,
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "start",
        [`> ${t}-message-icon ${n}`]: {
          color: i,
          fontSize: l,
          flex: "none",
          lineHeight: 1,
          paddingTop: (Math.round(l * c) - l) / 2
        },
        "&-title": {
          flex: "auto",
          marginInlineStart: a
        },
        "&-title-only": {
          fontWeight: s
        }
      },
      [`${t}-description`]: {
        position: "relative",
        marginInlineStart: l + a,
        marginBottom: a,
        color: r,
        fontSize: l
      },
      [`${t}-buttons`]: {
        textAlign: "end",
        button: {
          marginInlineStart: a
        }
      }
    }
  };
}, YT = Ge("Popconfirm", (e) => KT(e), (e) => {
  const {
    zIndexPopupBase: t
  } = e;
  return {
    zIndexPopup: t + 60
  };
});
var QT = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const ZT = () => g(g({}, As()), {
  prefixCls: String,
  content: Re(),
  title: Re(),
  description: Re(),
  okType: Te("primary"),
  disabled: {
    type: Boolean,
    default: !1
  },
  okText: Re(),
  cancelText: Re(),
  icon: Re(),
  okButtonProps: pe(),
  cancelButtonProps: pe(),
  showCancel: {
    type: Boolean,
    default: !0
  },
  onConfirm: Function,
  onCancel: Function
}), JT = Z({
  compatConfig: {
    MODE: 3
  },
  name: "APopconfirm",
  inheritAttrs: !1,
  props: Be(ZT(), g(g({}, Tg()), {
    trigger: "click",
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: !1,
    autoAdjustOverflow: !0,
    okType: "primary",
    disabled: !1
  })),
  slots: Object,
  // emits: ['update:open', 'visibleChange'],
  setup(e, t) {
    let {
      slots: n,
      emit: o,
      expose: r,
      attrs: i
    } = t;
    const a = te();
    et(e.visible === void 0, "Popconfirm", "`visible` will be removed in next major version, please use `open` instead."), r({
      getPopupDomNode: () => {
        var O, y;
        return (y = (O = a.value) === null || O === void 0 ? void 0 : O.getPopupDomNode) === null || y === void 0 ? void 0 : y.call(O);
      }
    });
    const [l, s] = Qr(!1, {
      value: Ct(e, "open")
    }), c = (O, y) => {
      e.open === void 0 && s(O), o("update:open", O), o("openChange", O, y);
    }, u = (O) => {
      c(!1, O);
    }, d = (O) => {
      var y;
      return (y = e.onConfirm) === null || y === void 0 ? void 0 : y.call(e, O);
    }, f = (O) => {
      var y;
      c(!1, O), (y = e.onCancel) === null || y === void 0 || y.call(e, O);
    }, p = (O) => {
      O.keyCode === J.ESC && l && c(!1, O);
    }, h = (O) => {
      const {
        disabled: y
      } = e;
      y || c(O);
    }, {
      prefixCls: m,
      getPrefixCls: w
    } = Se("popconfirm", e), b = T(() => w()), C = T(() => w("btn")), [S] = YT(m), [x] = go("Popconfirm", Mt.Popconfirm), $ = () => {
      var O, y, I, E, R;
      const {
        okButtonProps: _,
        cancelButtonProps: N,
        title: F = (O = n.title) === null || O === void 0 ? void 0 : O.call(n),
        description: j = (y = n.description) === null || y === void 0 ? void 0 : y.call(n),
        cancelText: P = (I = n.cancel) === null || I === void 0 ? void 0 : I.call(n),
        okText: M = (E = n.okText) === null || E === void 0 ? void 0 : E.call(n),
        okType: L,
        icon: H = ((R = n.icon) === null || R === void 0 ? void 0 : R.call(n)) || v(Kt, null, null),
        showCancel: A = !0
      } = e, {
        cancelButton: z,
        okButton: q
      } = n, Y = g({
        onClick: f,
        size: "small"
      }, N), K = g(g(g({
        onClick: d
      }, ti(L)), {
        size: "small"
      }), _);
      return v("div", {
        class: `${m.value}-inner-content`
      }, [v("div", {
        class: `${m.value}-message`
      }, [H && v("span", {
        class: `${m.value}-message-icon`
      }, [H]), v("div", {
        class: [`${m.value}-message-title`, {
          [`${m.value}-message-title-only`]: !!j
        }]
      }, [F])]), j && v("div", {
        class: `${m.value}-description`
      }, [j]), v("div", {
        class: `${m.value}-buttons`
      }, [A ? z ? z(Y) : v(nt, Y, {
        default: () => [P || x.value.cancelText]
      }) : null, q ? q(K) : v(Il, {
        buttonProps: g(g({
          size: "small"
        }, ti(L)), _),
        actionFn: d,
        close: u,
        prefixCls: C.value,
        quitOnNullishReturnValue: !0,
        emitEvent: !0
      }, {
        default: () => [M || x.value.okText]
      })])]);
    };
    return () => {
      var O;
      const {
        placement: y,
        overlayClassName: I,
        trigger: E = "click"
      } = e, R = QT(e, ["placement", "overlayClassName", "trigger"]), _ = Ue(R, ["title", "content", "cancelText", "okText", "onUpdate:open", "onConfirm", "onCancel", "prefixCls"]), N = oe(m.value, I);
      return S(v(UP, D(D(D({}, _), i), {}, {
        trigger: E,
        placement: y,
        onOpenChange: h,
        open: l.value,
        overlayClassName: N,
        transitionName: ln(b.value, "zoom-big", e.transitionName),
        ref: a,
        "data-popover-inject": !0
      }), {
        default: () => [o1(((O = n.default) === null || O === void 0 ? void 0 : O.call(n)) || [], {
          onKeydown: (F) => {
            p(F);
          }
        }, !1)],
        content: $
      }));
    };
  }
}), e8 = In(JT), t8 = ["normal", "exception", "active", "success"], ji = () => ({
  prefixCls: String,
  type: Te(),
  percent: Number,
  format: se(),
  status: Te(),
  showInfo: Ce(),
  strokeWidth: Number,
  strokeLinecap: Te(),
  strokeColor: Re(),
  trailColor: String,
  /** @deprecated Use `size` instead */
  width: Number,
  success: pe(),
  gapDegree: Number,
  gapPosition: Te(),
  size: Ye([String, Number, Array]),
  steps: Number,
  /** @deprecated Use `success` instead */
  successPercent: Number,
  title: String,
  progressStatus: Te()
});
function Sn(e) {
  return !e || e < 0 ? 0 : e > 100 ? 100 : e;
}
function ii(e) {
  let {
    success: t,
    successPercent: n
  } = e, o = n;
  return t && "progress" in t && (vt(!1, "Progress", "`success.progress` is deprecated. Please use `success.percent` instead."), o = t.progress), t && "percent" in t && (o = t.percent), o;
}
function n8(e) {
  let {
    percent: t,
    success: n,
    successPercent: o
  } = e;
  const r = Sn(ii({
    success: n,
    successPercent: o
  }));
  return [r, Sn(Sn(t) - r)];
}
function o8(e) {
  let {
    success: t = {},
    strokeColor: n
  } = e;
  const {
    strokeColor: o
  } = t;
  return [o || Kn.green, n || null];
}
const Hi = (e, t, n) => {
  var o, r, i, a;
  let l = -1, s = -1;
  if (t === "step") {
    const c = n.steps, u = n.strokeWidth;
    typeof e == "string" || typeof e > "u" ? (l = e === "small" ? 2 : 14, s = u ?? 8) : typeof e == "number" ? [l, s] = [e, e] : [l = 14, s = 8] = e, l *= c;
  } else if (t === "line") {
    const c = n == null ? void 0 : n.strokeWidth;
    typeof e == "string" || typeof e > "u" ? s = c || (e === "small" ? 6 : 8) : typeof e == "number" ? [l, s] = [e, e] : [l = -1, s = 8] = e;
  } else (t === "circle" || t === "dashboard") && (typeof e == "string" || typeof e > "u" ? [l, s] = e === "small" ? [60, 60] : [120, 120] : typeof e == "number" ? [l, s] = [e, e] : (process.env.NODE_ENV !== "production" && vt(!1, "Progress", 'Type "circle" and "dashboard" do not accept array as `size`, please use number or preset size instead.'), l = (r = (o = e[0]) !== null && o !== void 0 ? o : e[1]) !== null && r !== void 0 ? r : 120, s = (a = (i = e[0]) !== null && i !== void 0 ? i : e[1]) !== null && a !== void 0 ? a : 120));
  return {
    width: l,
    height: s
  };
};
var r8 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const i8 = () => g(g({}, ji()), {
  strokeColor: Re(),
  direction: Te()
}), a8 = (e) => {
  let t = [];
  return Object.keys(e).forEach((n) => {
    const o = parseFloat(n.replace(/%/g, ""));
    isNaN(o) || t.push({
      key: o,
      value: e[n]
    });
  }), t = t.sort((n, o) => n.key - o.key), t.map((n) => {
    let {
      key: o,
      value: r
    } = n;
    return `${r} ${o}%`;
  }).join(", ");
}, l8 = (e, t) => {
  const {
    from: n = Kn.blue,
    to: o = Kn.blue,
    direction: r = t === "rtl" ? "to left" : "to right"
  } = e, i = r8(e, ["from", "to", "direction"]);
  if (Object.keys(i).length !== 0) {
    const a = a8(i);
    return {
      backgroundImage: `linear-gradient(${r}, ${a})`
    };
  }
  return {
    backgroundImage: `linear-gradient(${r}, ${n}, ${o})`
  };
}, s8 = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ProgressLine",
  inheritAttrs: !1,
  props: i8(),
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const r = T(() => {
      const {
        strokeColor: p,
        direction: h
      } = e;
      return p && typeof p != "string" ? l8(p, h) : {
        backgroundColor: p
      };
    }), i = T(() => e.strokeLinecap === "square" || e.strokeLinecap === "butt" ? 0 : void 0), a = T(() => e.trailColor ? {
      backgroundColor: e.trailColor
    } : void 0), l = T(() => {
      var p;
      return (p = e.size) !== null && p !== void 0 ? p : [-1, e.strokeWidth || (e.size === "small" ? 6 : 8)];
    }), s = T(() => Hi(l.value, "line", {
      strokeWidth: e.strokeWidth
    }));
    process.env.NODE_ENV !== "production" && vt("strokeWidth" in e, "Progress", "`strokeWidth` is deprecated. Please use `size` instead.");
    const c = T(() => {
      const {
        percent: p
      } = e;
      return g({
        width: `${Sn(p)}%`,
        height: `${s.value.height}px`,
        borderRadius: i.value
      }, r.value);
    }), u = T(() => ii(e)), d = T(() => {
      const {
        success: p
      } = e;
      return {
        width: `${Sn(u.value)}%`,
        height: `${s.value.height}px`,
        borderRadius: i.value,
        backgroundColor: p == null ? void 0 : p.strokeColor
      };
    }), f = {
      width: s.value.width < 0 ? "100%" : s.value.width,
      height: `${s.value.height}px`
    };
    return () => {
      var p;
      return v(Ie, null, [v("div", D(D({}, o), {}, {
        class: [`${e.prefixCls}-outer`, o.class],
        style: [o.style, f]
      }), [v("div", {
        class: `${e.prefixCls}-inner`,
        style: a.value
      }, [v("div", {
        class: `${e.prefixCls}-bg`,
        style: c.value
      }, null), u.value !== void 0 ? v("div", {
        class: `${e.prefixCls}-success-bg`,
        style: d.value
      }, null) : null])]), (p = n.default) === null || p === void 0 ? void 0 : p.call(n)]);
    };
  }
}), c8 = {
  percent: 0,
  prefixCls: "vc-progress",
  strokeColor: "#2db7f5",
  strokeLinecap: "round",
  strokeWidth: 1,
  trailColor: "#D9D9D9",
  trailWidth: 1
}, u8 = (e) => {
  const t = te(null);
  return Pn(() => {
    const n = Date.now();
    let o = !1;
    e.value.forEach((r) => {
      const i = (r == null ? void 0 : r.$el) || r;
      if (!i)
        return;
      o = !0;
      const a = i.style;
      a.transitionDuration = ".3s, .3s, .3s, .06s", t.value && n - t.value < 100 && (a.transitionDuration = "0s, 0s");
    }), o && (t.value = Date.now());
  }), e;
}, d8 = {
  gapDegree: Number,
  gapPosition: {
    type: String
  },
  percent: {
    type: [Array, Number]
  },
  prefixCls: String,
  strokeColor: {
    type: [Object, String, Array]
  },
  strokeLinecap: {
    type: String
  },
  strokeWidth: Number,
  trailColor: String,
  trailWidth: Number,
  transition: String
};
var f8 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
let bf = 0;
function wf(e) {
  return +e.replace("%", "");
}
function Sf(e) {
  return Array.isArray(e) ? e : [e];
}
function xf(e, t, n, o) {
  let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, i = arguments.length > 5 ? arguments[5] : void 0;
  const a = 50 - o / 2;
  let l = 0, s = -a, c = 0, u = -2 * a;
  switch (i) {
    case "left":
      l = -a, s = 0, c = 2 * a, u = 0;
      break;
    case "right":
      l = a, s = 0, c = -2 * a, u = 0;
      break;
    case "bottom":
      s = a, u = 2 * a;
      break;
  }
  const d = `M 50,50 m ${l},${s}
   a ${a},${a} 0 1 1 ${c},${-u}
   a ${a},${a} 0 1 1 ${-c},${u}`, f = Math.PI * 2 * a, p = {
    stroke: n,
    strokeDasharray: `${t / 100 * (f - r)}px ${f}px`,
    strokeDashoffset: `-${r / 2 + e / 100 * (f - r)}px`,
    transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"
    // eslint-disable-line
  };
  return {
    pathString: d,
    pathStyle: p
  };
}
const p8 = Z({
  compatConfig: {
    MODE: 3
  },
  name: "VCCircle",
  props: Be(d8, c8),
  setup(e) {
    bf += 1;
    const t = te(bf), n = T(() => Sf(e.percent)), o = T(() => Sf(e.strokeColor)), [r, i] = _I();
    u8(i);
    const a = () => {
      const {
        prefixCls: l,
        strokeWidth: s,
        strokeLinecap: c,
        gapDegree: u,
        gapPosition: d
      } = e;
      let f = 0;
      return n.value.map((p, h) => {
        const m = o.value[h] || o.value[o.value.length - 1], w = Object.prototype.toString.call(m) === "[object Object]" ? `url(#${l}-gradient-${t.value})` : "", {
          pathString: b,
          pathStyle: C
        } = xf(f, p, m, s, u, d);
        f += p;
        const S = {
          key: h,
          d: b,
          stroke: w,
          "stroke-linecap": c,
          "stroke-width": s,
          opacity: p === 0 ? 0 : 1,
          "fill-opacity": "0",
          class: `${l}-circle-path`,
          style: C
        };
        return v("path", D({
          ref: r(h)
        }, S), null);
      });
    };
    return () => {
      const {
        prefixCls: l,
        strokeWidth: s,
        trailWidth: c,
        gapDegree: u,
        gapPosition: d,
        trailColor: f,
        strokeLinecap: p,
        strokeColor: h
      } = e, m = f8(e, ["prefixCls", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "strokeColor"]), {
        pathString: w,
        pathStyle: b
      } = xf(0, 100, f, s, u, d);
      delete m.percent;
      const C = o.value.find((x) => Object.prototype.toString.call(x) === "[object Object]"), S = {
        d: w,
        stroke: f,
        "stroke-linecap": p,
        "stroke-width": c || s,
        "fill-opacity": "0",
        class: `${l}-circle-trail`,
        style: b
      };
      return v("svg", D({
        class: `${l}-circle`,
        viewBox: "0 0 100 100"
      }, m), [C && v("defs", null, [v("linearGradient", {
        id: `${l}-gradient-${t.value}`,
        x1: "100%",
        y1: "0%",
        x2: "0%",
        y2: "0%"
      }, [Object.keys(C).sort((x, $) => wf(x) - wf($)).map((x, $) => v("stop", {
        key: $,
        offset: x,
        "stop-color": C[x]
      }, null))])]), v("path", S, null), a().reverse()]);
    };
  }
}), m8 = () => g(g({}, ji()), {
  strokeColor: Re()
}), g8 = 3, v8 = (e) => g8 / e * 100, h8 = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ProgressCircle",
  inheritAttrs: !1,
  props: Be(m8(), {
    trailColor: null
  }),
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const r = T(() => {
      var m;
      return (m = e.width) !== null && m !== void 0 ? m : 120;
    }), i = T(() => {
      var m;
      return (m = e.size) !== null && m !== void 0 ? m : [r.value, r.value];
    }), a = T(() => Hi(i.value, "circle")), l = T(() => {
      if (e.gapDegree || e.gapDegree === 0)
        return e.gapDegree;
      if (e.type === "dashboard")
        return 75;
    }), s = T(() => ({
      width: `${a.value.width}px`,
      height: `${a.value.height}px`,
      fontSize: `${a.value.width * 0.15 + 6}px`
    })), c = T(() => {
      var m;
      return (m = e.strokeWidth) !== null && m !== void 0 ? m : Math.max(v8(a.value.width), 6);
    }), u = T(() => e.gapPosition || e.type === "dashboard" && "bottom" || void 0), d = T(() => n8(e)), f = T(() => Object.prototype.toString.call(e.strokeColor) === "[object Object]"), p = T(() => o8({
      success: e.success,
      strokeColor: e.strokeColor
    })), h = T(() => ({
      [`${e.prefixCls}-inner`]: !0,
      [`${e.prefixCls}-circle-gradient`]: f.value
    }));
    return () => {
      var m;
      const w = v(p8, {
        percent: d.value,
        strokeWidth: c.value,
        trailWidth: c.value,
        strokeColor: p.value,
        strokeLinecap: e.strokeLinecap,
        trailColor: e.trailColor,
        prefixCls: e.prefixCls,
        gapDegree: l.value,
        gapPosition: u.value
      }, null);
      return v("div", D(D({}, o), {}, {
        class: [h.value, o.class],
        style: [o.style, s.value]
      }), [a.value.width <= 20 ? v(uo, null, {
        default: () => [v("span", null, [w])],
        title: n.default
      }) : v(Ie, null, [w, (m = n.default) === null || m === void 0 ? void 0 : m.call(n)])]);
    };
  }
}), y8 = () => g(g({}, ji()), {
  steps: Number,
  strokeColor: Ye(),
  trailColor: String
}), b8 = Z({
  compatConfig: {
    MODE: 3
  },
  name: "Steps",
  props: y8(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = T(() => Math.round(e.steps * ((e.percent || 0) / 100))), r = T(() => {
      var l;
      return (l = e.size) !== null && l !== void 0 ? l : [e.size === "small" ? 2 : 14, e.strokeWidth || 8];
    }), i = T(() => Hi(r.value, "step", {
      steps: e.steps,
      strokeWidth: e.strokeWidth || 8
    })), a = T(() => {
      const {
        steps: l,
        strokeColor: s,
        trailColor: c,
        prefixCls: u
      } = e, d = [];
      for (let f = 0; f < l; f += 1) {
        const p = Array.isArray(s) ? s[f] : s, h = {
          [`${u}-steps-item`]: !0,
          [`${u}-steps-item-active`]: f <= o.value - 1
        };
        d.push(v("div", {
          key: f,
          class: h,
          style: {
            backgroundColor: f <= o.value - 1 ? p : c,
            width: `${i.value.width / l}px`,
            height: `${i.value.height}px`
          }
        }, null));
      }
      return d;
    });
    return () => {
      var l;
      return v("div", {
        class: `${e.prefixCls}-steps-outer`
      }, [a.value, (l = n.default) === null || l === void 0 ? void 0 : l.call(n)]);
    };
  }
}), w8 = new fe("antProgressActive", {
  "0%": {
    transform: "translateX(-100%) scaleX(0)",
    opacity: 0.1
  },
  "20%": {
    transform: "translateX(-100%) scaleX(0)",
    opacity: 0.5
  },
  to: {
    transform: "translateX(0) scaleX(1)",
    opacity: 0
  }
}), S8 = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: g(g({}, ot(e)), {
      display: "inline-block",
      "&-rtl": {
        direction: "rtl"
      },
      "&-line": {
        position: "relative",
        width: "100%",
        fontSize: e.fontSize,
        marginInlineEnd: e.marginXS,
        marginBottom: e.marginXS
      },
      [`${t}-outer`]: {
        display: "inline-block",
        width: "100%"
      },
      [`&${t}-show-info`]: {
        [`${t}-outer`]: {
          marginInlineEnd: `calc(-2em - ${e.marginXS}px)`,
          paddingInlineEnd: `calc(2em + ${e.paddingXS}px)`
        }
      },
      [`${t}-inner`]: {
        position: "relative",
        display: "inline-block",
        width: "100%",
        overflow: "hidden",
        verticalAlign: "middle",
        backgroundColor: e.progressRemainingColor,
        borderRadius: e.progressLineRadius
      },
      [`${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.colorInfo
        }
      },
      [`${t}-success-bg, ${t}-bg`]: {
        position: "relative",
        backgroundColor: e.colorInfo,
        borderRadius: e.progressLineRadius,
        transition: `all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`
      },
      [`${t}-success-bg`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        backgroundColor: e.colorSuccess
      },
      [`${t}-text`]: {
        display: "inline-block",
        width: "2em",
        marginInlineStart: e.marginXS,
        color: e.progressInfoTextColor,
        lineHeight: 1,
        whiteSpace: "nowrap",
        textAlign: "start",
        verticalAlign: "middle",
        wordBreak: "normal",
        [n]: {
          fontSize: e.fontSize
        }
      },
      [`&${t}-status-active`]: {
        [`${t}-bg::before`]: {
          position: "absolute",
          inset: 0,
          backgroundColor: e.colorBgContainer,
          borderRadius: e.progressLineRadius,
          opacity: 0,
          animationName: w8,
          animationDuration: e.progressActiveMotionDuration,
          animationTimingFunction: e.motionEaseOutQuint,
          animationIterationCount: "infinite",
          content: '""'
        }
      },
      [`&${t}-status-exception`]: {
        [`${t}-bg`]: {
          backgroundColor: e.colorError
        },
        [`${t}-text`]: {
          color: e.colorError
        }
      },
      [`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.colorError
        }
      },
      [`&${t}-status-success`]: {
        [`${t}-bg`]: {
          backgroundColor: e.colorSuccess
        },
        [`${t}-text`]: {
          color: e.colorSuccess
        }
      },
      [`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.colorSuccess
        }
      }
    })
  };
}, x8 = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: {
      [`${t}-circle-trail`]: {
        stroke: e.progressRemainingColor
      },
      [`&${t}-circle ${t}-inner`]: {
        position: "relative",
        lineHeight: 1,
        backgroundColor: "transparent"
      },
      [`&${t}-circle ${t}-text`]: {
        position: "absolute",
        insetBlockStart: "50%",
        insetInlineStart: 0,
        width: "100%",
        margin: 0,
        padding: 0,
        color: e.colorText,
        lineHeight: 1,
        whiteSpace: "normal",
        textAlign: "center",
        transform: "translateY(-50%)",
        [n]: {
          fontSize: `${e.fontSize / e.fontSizeSM}em`
        }
      },
      [`${t}-circle&-status-exception`]: {
        [`${t}-text`]: {
          color: e.colorError
        }
      },
      [`${t}-circle&-status-success`]: {
        [`${t}-text`]: {
          color: e.colorSuccess
        }
      }
    },
    [`${t}-inline-circle`]: {
      lineHeight: 1,
      [`${t}-inner`]: {
        verticalAlign: "bottom"
      }
    }
  };
}, C8 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`${t}-steps`]: {
        display: "inline-block",
        "&-outer": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        "&-item": {
          flexShrink: 0,
          minWidth: e.progressStepMinWidth,
          marginInlineEnd: e.progressStepMarginInlineEnd,
          backgroundColor: e.progressRemainingColor,
          transition: `all ${e.motionDurationSlow}`,
          "&-active": {
            backgroundColor: e.colorInfo
          }
        }
      }
    }
  };
}, $8 = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: {
      [`${t}-small&-line, ${t}-small&-line ${t}-text ${n}`]: {
        fontSize: e.fontSizeSM
      }
    }
  };
}, O8 = Ge("Progress", (e) => {
  const t = e.marginXXS / 2, n = we(e, {
    progressLineRadius: 100,
    progressInfoTextColor: e.colorText,
    progressDefaultColor: e.colorInfo,
    progressRemainingColor: e.colorFillSecondary,
    progressStepMarginInlineEnd: t,
    progressStepMinWidth: t,
    progressActiveMotionDuration: "2.4s"
  });
  return [S8(n), x8(n), C8(n), $8(n)];
});
var P8 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const I8 = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AProgress",
  inheritAttrs: !1,
  props: Be(ji(), {
    type: "line",
    percent: 0,
    showInfo: !0,
    // null for different theme definition
    trailColor: null,
    size: "default",
    strokeLinecap: "round"
  }),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const {
      prefixCls: r,
      direction: i
    } = Se("progress", e), [a, l] = O8(r);
    process.env.NODE_ENV !== "production" && (vt("successPercent" in e, "Progress", "`successPercent` is deprecated. Please use `success.percent` instead."), vt("width" in e, "Progress", "`width` is deprecated. Please use `size` instead."));
    const s = T(() => Array.isArray(e.strokeColor) ? e.strokeColor[0] : e.strokeColor), c = T(() => {
      const {
        percent: h = 0
      } = e, m = ii(e);
      return parseInt(m !== void 0 ? m.toString() : h.toString(), 10);
    }), u = T(() => {
      const {
        status: h
      } = e;
      return !t8.includes(h) && c.value >= 100 ? "success" : h || "normal";
    }), d = T(() => {
      const {
        type: h,
        showInfo: m,
        size: w
      } = e, b = r.value;
      return {
        [b]: !0,
        [`${b}-inline-circle`]: h === "circle" && Hi(w, "circle").width <= 20,
        [`${b}-${h === "dashboard" && "circle" || h}`]: !0,
        [`${b}-status-${u.value}`]: !0,
        [`${b}-show-info`]: m,
        [`${b}-${w}`]: w,
        [`${b}-rtl`]: i.value === "rtl",
        [l.value]: !0
      };
    }), f = T(() => typeof e.strokeColor == "string" || Array.isArray(e.strokeColor) ? e.strokeColor : void 0), p = () => {
      const {
        showInfo: h,
        format: m,
        type: w,
        percent: b,
        title: C
      } = e, S = ii(e);
      if (!h) return null;
      let x;
      const $ = m || (n == null ? void 0 : n.format) || ((y) => `${y}%`), O = w === "line";
      return m || n != null && n.format || u.value !== "exception" && u.value !== "success" ? x = $(Sn(b), Sn(S)) : u.value === "exception" ? x = O ? v(St, null, null) : v(un, null, null) : u.value === "success" && (x = O ? v(qt, null, null) : v(Pi, null, null)), v("span", {
        class: `${r.value}-text`,
        title: C === void 0 && typeof x == "string" ? x : void 0
      }, [x]);
    };
    return () => {
      const {
        type: h,
        steps: m,
        title: w
      } = e, {
        class: b
      } = o, C = P8(o, ["class"]), S = p();
      let x;
      return h === "line" ? x = m ? v(b8, D(D({}, e), {}, {
        strokeColor: f.value,
        prefixCls: r.value,
        steps: m
      }), {
        default: () => [S]
      }) : v(s8, D(D({}, e), {}, {
        strokeColor: s.value,
        prefixCls: r.value,
        direction: i.value
      }), {
        default: () => [S]
      }) : (h === "circle" || h === "dashboard") && (x = v(h8, D(D({}, e), {}, {
        prefixCls: r.value,
        strokeColor: s.value,
        progressStatus: u.value
      }), {
        default: () => [S]
      })), a(v("div", D(D({
        role: "progressbar"
      }, C), {}, {
        class: [d.value, b],
        title: w
      }), [x]));
    };
  }
}), T8 = In(I8);
var E8 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" };
function Cf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      _8(e, r, n[r]);
    });
  }
  return e;
}
function _8(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Bi = function(t, n) {
  var o = Cf({}, t, n.attrs);
  return v(de, Cf({}, o, {
    icon: E8
  }), null);
};
Bi.displayName = "DeleteOutlined";
Bi.inheritAttrs = !1;
function A8(e, t) {
  const n = `cannot ${e.method} ${e.action} ${t.status}'`, o = new Error(n);
  return o.status = t.status, o.method = e.method, o.url = e.action, o;
}
function $f(e) {
  const t = e.responseText || e.response;
  if (!t)
    return t;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function M8(e) {
  const t = new XMLHttpRequest();
  e.onProgress && t.upload && (t.upload.onprogress = function(i) {
    i.total > 0 && (i.percent = i.loaded / i.total * 100), e.onProgress(i);
  });
  const n = new FormData();
  e.data && Object.keys(e.data).forEach((r) => {
    const i = e.data[r];
    if (Array.isArray(i)) {
      i.forEach((a) => {
        n.append(`${r}[]`, a);
      });
      return;
    }
    n.append(r, i);
  }), e.file instanceof Blob ? n.append(e.filename, e.file, e.file.name) : n.append(e.filename, e.file), t.onerror = function(i) {
    e.onError(i);
  }, t.onload = function() {
    return t.status < 200 || t.status >= 300 ? e.onError(A8(e, t), $f(t)) : e.onSuccess($f(t), t);
  }, t.open(e.method, e.action, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
  const o = e.headers || {};
  return o["X-Requested-With"] !== null && t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(o).forEach((r) => {
    o[r] !== null && t.setRequestHeader(r, o[r]);
  }), t.send(n), {
    abort() {
      t.abort();
    }
  };
}
const R8 = +/* @__PURE__ */ new Date();
let F8 = 0;
function Ia() {
  return `vc-upload-${R8}-${++F8}`;
}
const Ta = (e, t) => {
  if (e && t) {
    const n = Array.isArray(t) ? t : t.split(","), o = e.name || "", r = e.type || "", i = r.replace(/\/.*$/, "");
    return n.some((a) => {
      const l = a.trim();
      if (/^\*(\/\*)?$/.test(a))
        return !0;
      if (l.charAt(0) === ".") {
        const s = o.toLowerCase(), c = l.toLowerCase();
        let u = [c];
        return (c === ".jpg" || c === ".jpeg") && (u = [".jpg", ".jpeg"]), u.some((d) => s.endsWith(d));
      }
      return /\/\*$/.test(l) ? i === l.replace(/\/.*$/, "") : r === l ? !0 : /^\w+$/.test(l) ? (ro(!1, `Upload takes an invalidate 'accept' type '${l}'.Skip for check.`), !0) : !1;
    });
  }
  return !0;
};
function D8(e, t) {
  const n = e.createReader();
  let o = [];
  function r() {
    n.readEntries((i) => {
      const a = Array.prototype.slice.apply(i);
      o = o.concat(a), !a.length ? t(o) : r();
    });
  }
  r();
}
const N8 = (e, t, n) => {
  const o = (r, i) => {
    r.path = i || "", r.isFile ? r.file((a) => {
      n(a) && (r.fullPath && !a.webkitRelativePath && (Object.defineProperties(a, {
        webkitRelativePath: {
          writable: !0
        }
      }), a.webkitRelativePath = r.fullPath.replace(/^\//, ""), Object.defineProperties(a, {
        webkitRelativePath: {
          writable: !1
        }
      })), t([a]));
    }) : r.isDirectory && D8(r, (a) => {
      a.forEach((l) => {
        o(l, `${i}${r.name}/`);
      });
    });
  };
  e.forEach((r) => {
    o(r.webkitGetAsEntry());
  });
}, Rv = () => ({
  capture: [Boolean, String],
  multipart: {
    type: Boolean,
    default: void 0
  },
  name: String,
  disabled: {
    type: Boolean,
    default: void 0
  },
  componentTag: String,
  action: [String, Function],
  method: String,
  directory: {
    type: Boolean,
    default: void 0
  },
  data: [Object, Function],
  headers: Object,
  accept: String,
  multiple: {
    type: Boolean,
    default: void 0
  },
  onBatchStart: Function,
  onReject: Function,
  onStart: Function,
  onError: Function,
  onSuccess: Function,
  onProgress: Function,
  beforeUpload: Function,
  customRequest: Function,
  withCredentials: {
    type: Boolean,
    default: void 0
  },
  openFileDialogOnClick: {
    type: Boolean,
    default: void 0
  },
  prefixCls: String,
  id: String,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function
});
var L8 = function(e, t, n, o) {
  function r(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(u) {
      try {
        c(o.next(u));
      } catch (d) {
        a(d);
      }
    }
    function s(u) {
      try {
        c(o.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : r(u.value).then(l, s);
    }
    c((o = o.apply(e, t || [])).next());
  });
}, j8 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const H8 = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AjaxUploader",
  inheritAttrs: !1,
  props: Rv(),
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      expose: r
    } = t;
    const i = te(Ia()), a = {}, l = te();
    let s = !1;
    const c = (C, S) => L8(this, void 0, void 0, function* () {
      const {
        beforeUpload: x
      } = e;
      let $ = C;
      if (x) {
        try {
          $ = yield x(C, S);
        } catch {
          $ = !1;
        }
        if ($ === !1)
          return {
            origin: C,
            parsedFile: null,
            action: null,
            data: null
          };
      }
      const {
        action: O
      } = e;
      let y;
      typeof O == "function" ? y = yield O(C) : y = O;
      const {
        data: I
      } = e;
      let E;
      typeof I == "function" ? E = yield I(C) : E = I;
      const R = (
        // string type is from legacy `transformFile`.
        // Not sure if this will work since no related test case works with it
        (typeof $ == "object" || typeof $ == "string") && $ ? $ : C
      );
      let _;
      R instanceof File ? _ = R : _ = new File([R], C.name, {
        type: C.type
      });
      const N = _;
      return N.uid = C.uid, {
        origin: C,
        data: E,
        parsedFile: N,
        action: y
      };
    }), u = (C) => {
      let {
        data: S,
        origin: x,
        action: $,
        parsedFile: O
      } = C;
      if (!s)
        return;
      const {
        onStart: y,
        customRequest: I,
        name: E,
        headers: R,
        withCredentials: _,
        method: N
      } = e, {
        uid: F
      } = x, j = I || M8, P = {
        action: $,
        filename: E,
        data: S,
        file: O,
        headers: R,
        withCredentials: _,
        method: N || "post",
        onProgress: (M) => {
          const {
            onProgress: L
          } = e;
          L == null || L(M, O);
        },
        onSuccess: (M, L) => {
          const {
            onSuccess: H
          } = e;
          H == null || H(M, O, L), delete a[F];
        },
        onError: (M, L) => {
          const {
            onError: H
          } = e;
          H == null || H(M, L, O), delete a[F];
        }
      };
      y(x), a[F] = j(P);
    }, d = () => {
      i.value = Ia();
    }, f = (C) => {
      if (C) {
        const S = C.uid ? C.uid : C;
        a[S] && a[S].abort && a[S].abort(), delete a[S];
      } else
        Object.keys(a).forEach((S) => {
          a[S] && a[S].abort && a[S].abort(), delete a[S];
        });
    };
    be(() => {
      s = !0;
    }), Ae(() => {
      s = !1, f();
    });
    const p = (C) => {
      const S = [...C], x = S.map(($) => ($.uid = Ia(), c($, S)));
      Promise.all(x).then(($) => {
        const {
          onBatchStart: O
        } = e;
        O == null || O($.map((y) => {
          let {
            origin: I,
            parsedFile: E
          } = y;
          return {
            file: I,
            parsedFile: E
          };
        })), $.filter((y) => y.parsedFile !== null).forEach((y) => {
          u(y);
        });
      });
    }, h = (C) => {
      const {
        accept: S,
        directory: x
      } = e, {
        files: $
      } = C.target, O = [...$].filter((y) => !x || Ta(y, S));
      p(O), d();
    }, m = (C) => {
      const S = l.value;
      if (!S)
        return;
      const {
        onClick: x
      } = e;
      S.click(), x && x(C);
    }, w = (C) => {
      C.key === "Enter" && m(C);
    }, b = (C) => {
      const {
        multiple: S
      } = e;
      if (C.preventDefault(), C.type !== "dragover")
        if (e.directory)
          N8(Array.prototype.slice.call(C.dataTransfer.items), p, (x) => Ta(x, e.accept));
        else {
          const x = g4(Array.prototype.slice.call(C.dataTransfer.files), (y) => Ta(y, e.accept));
          let $ = x[0];
          const O = x[1];
          S === !1 && ($ = $.slice(0, 1)), p($), O.length && e.onReject && e.onReject(O);
        }
    };
    return r({
      abort: f
    }), () => {
      var C;
      const {
        componentTag: S,
        prefixCls: x,
        disabled: $,
        id: O,
        multiple: y,
        accept: I,
        capture: E,
        directory: R,
        openFileDialogOnClick: _,
        onMouseenter: N,
        onMouseleave: F
      } = e, j = j8(e, ["componentTag", "prefixCls", "disabled", "id", "multiple", "accept", "capture", "directory", "openFileDialogOnClick", "onMouseenter", "onMouseleave"]), P = {
        [x]: !0,
        [`${x}-disabled`]: $,
        [o.class]: !!o.class
      }, M = R ? {
        directory: "directory",
        webkitdirectory: "webkitdirectory"
      } : {};
      return v(S, D(D({}, $ ? {} : {
        onClick: _ ? m : () => {
        },
        onKeydown: _ ? w : () => {
        },
        onMouseenter: N,
        onMouseleave: F,
        onDrop: b,
        onDragover: b,
        tabindex: "0"
      }), {}, {
        class: P,
        role: "button",
        style: o.style
      }), {
        default: () => [v("input", D(D(D({}, nr(j, {
          aria: !0,
          data: !0
        })), {}, {
          id: O,
          type: "file",
          ref: l,
          onClick: (H) => H.stopPropagation(),
          onCancel: (H) => H.stopPropagation(),
          key: i.value,
          style: {
            display: "none"
          },
          accept: I
        }, M), {}, {
          multiple: y,
          onChange: h
        }, E != null ? {
          capture: E
        } : {}), null), (C = n.default) === null || C === void 0 ? void 0 : C.call(n)]
      });
    };
  }
});
function Ea() {
}
const Of = Z({
  compatConfig: {
    MODE: 3
  },
  name: "Upload",
  inheritAttrs: !1,
  props: Be(Rv(), {
    componentTag: "span",
    prefixCls: "rc-upload",
    data: {},
    headers: {},
    name: "file",
    multipart: !1,
    onStart: Ea,
    onError: Ea,
    onSuccess: Ea,
    multiple: !1,
    beforeUpload: null,
    customRequest: null,
    withCredentials: !1,
    openFileDialogOnClick: !0
  }),
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      expose: r
    } = t;
    const i = te();
    return r({
      abort: (l) => {
        var s;
        (s = i.value) === null || s === void 0 || s.abort(l);
      }
    }), () => v(H8, D(D(D({}, e), o), {}, {
      ref: i
    }), n);
  }
});
var B8 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" } }] }, name: "paper-clip", theme: "outlined" };
function Pf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      z8(e, r, n[r]);
    });
  }
  return e;
}
function z8(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ks = function(t, n) {
  var o = Pf({}, t, n.attrs);
  return v(de, Pf({}, o, {
    icon: B8
  }), null);
};
Ks.displayName = "PaperClipOutlined";
Ks.inheritAttrs = !1;
var V8 = { icon: function(t, n) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z", fill: t } }, { tag: "path", attrs: { d: "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z", fill: n } }, { tag: "path", attrs: { d: "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z", fill: n } }, { tag: "path", attrs: { d: "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", fill: n } }, { tag: "path", attrs: { d: "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z", fill: t } }] };
}, name: "picture", theme: "twotone" };
function If(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      W8(e, r, n[r]);
    });
  }
  return e;
}
function W8(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ys = function(t, n) {
  var o = If({}, t, n.attrs);
  return v(de, If({}, o, {
    icon: V8
  }), null);
};
Ys.displayName = "PictureTwoTone";
Ys.inheritAttrs = !1;
var U8 = { icon: function(t, n) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z", fill: n } }, { tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z", fill: t } }] };
}, name: "file", theme: "twotone" };
function Tf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      G8(e, r, n[r]);
    });
  }
  return e;
}
function G8(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Qs = function(t, n) {
  var o = Tf({}, t, n.attrs);
  return v(de, Tf({}, o, {
    icon: U8
  }), null);
};
Qs.displayName = "FileTwoTone";
Qs.inheritAttrs = !1;
function Fv() {
  return {
    capture: Ye([Boolean, String]),
    type: Te(),
    name: String,
    defaultFileList: no(),
    fileList: no(),
    action: Ye([String, Function]),
    directory: Ce(),
    data: Ye([Object, Function]),
    method: Te(),
    headers: pe(),
    showUploadList: Ye([Boolean, Object]),
    multiple: Ce(),
    accept: String,
    beforeUpload: se(),
    onChange: se(),
    "onUpdate:fileList": se(),
    onDrop: se(),
    listType: Te(),
    onPreview: se(),
    onDownload: se(),
    onReject: se(),
    onRemove: se(),
    /** @deprecated Please use `onRemove` directly */
    remove: se(),
    supportServerRender: Ce(),
    disabled: Ce(),
    prefixCls: String,
    customRequest: se(),
    withCredentials: Ce(),
    openFileDialogOnClick: Ce(),
    locale: pe(),
    id: String,
    previewFile: se(),
    /** @deprecated Please use `beforeUpload` directly */
    transformFile: se(),
    iconRender: se(),
    isImageUrl: se(),
    progress: pe(),
    itemRender: se(),
    /** Config max count of `fileList`. Will replace current one when `maxCount` is 1 */
    maxCount: Number,
    height: Ye([Number, String]),
    removeIcon: se(),
    downloadIcon: se(),
    previewIcon: se()
  };
}
function k8() {
  return {
    listType: Te(),
    onPreview: se(),
    onDownload: se(),
    onRemove: se(),
    items: no(),
    progress: pe(),
    prefixCls: Te(),
    showRemoveIcon: Ce(),
    showDownloadIcon: Ce(),
    showPreviewIcon: Ce(),
    removeIcon: se(),
    downloadIcon: se(),
    previewIcon: se(),
    locale: pe(void 0),
    previewFile: se(),
    iconRender: se(),
    isImageUrl: se(),
    appendAction: se(),
    appendActionVisible: Ce(),
    itemRender: se()
  };
}
function Ir(e) {
  return g(g({}, e), {
    lastModified: e.lastModified,
    lastModifiedDate: e.lastModifiedDate,
    name: e.name,
    size: e.size,
    type: e.type,
    uid: e.uid,
    percent: 0,
    originFileObj: e
  });
}
function Tr(e, t) {
  const n = [...t], o = n.findIndex((r) => {
    let {
      uid: i
    } = r;
    return i === e.uid;
  });
  return o === -1 ? n.push(e) : n[o] = e, n;
}
function _a(e, t) {
  const n = e.uid !== void 0 ? "uid" : "name";
  return t.filter((o) => o[n] === e[n])[0];
}
function X8(e, t) {
  const n = e.uid !== void 0 ? "uid" : "name", o = t.filter((r) => r[n] !== e[n]);
  return o.length === t.length ? null : o;
}
const q8 = function() {
  const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").split("/"), o = t[t.length - 1].split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(o) || [""])[0];
}, Dv = (e) => e.indexOf("image/") === 0, K8 = (e) => {
  if (e.type && !e.thumbUrl)
    return Dv(e.type);
  const t = e.thumbUrl || e.url || "", n = q8(t);
  return /^data:image\//.test(t) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(n) ? !0 : !(/^data:/.test(t) || n);
}, Yt = 200;
function Y8(e) {
  return new Promise((t) => {
    if (!e.type || !Dv(e.type)) {
      t("");
      return;
    }
    const n = document.createElement("canvas");
    n.width = Yt, n.height = Yt, n.style.cssText = `position: fixed; left: 0; top: 0; width: ${Yt}px; height: ${Yt}px; z-index: 9999; display: none;`, document.body.appendChild(n);
    const o = n.getContext("2d"), r = new Image();
    if (r.onload = () => {
      const {
        width: i,
        height: a
      } = r;
      let l = Yt, s = Yt, c = 0, u = 0;
      i > a ? (s = a * (Yt / i), u = -(s - l) / 2) : (l = i * (Yt / a), c = -(l - s) / 2), o.drawImage(r, c, u, l, s);
      const d = n.toDataURL();
      document.body.removeChild(n), t(d);
    }, r.crossOrigin = "anonymous", e.type.startsWith("image/svg+xml")) {
      const i = new FileReader();
      i.addEventListener("load", () => {
        i.result && (r.src = i.result);
      }), i.readAsDataURL(e);
    } else
      r.src = window.URL.createObjectURL(e);
  });
}
var Q8 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "download", theme: "outlined" };
function Ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Z8(e, r, n[r]);
    });
  }
  return e;
}
function Z8(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Zs = function(t, n) {
  var o = Ef({}, t, n.attrs);
  return v(de, Ef({}, o, {
    icon: Q8
  }), null);
};
Zs.displayName = "DownloadOutlined";
Zs.inheritAttrs = !1;
const J8 = () => ({
  prefixCls: String,
  locale: pe(void 0),
  file: pe(),
  items: no(),
  listType: Te(),
  isImgUrl: se(),
  showRemoveIcon: Ce(),
  showDownloadIcon: Ce(),
  showPreviewIcon: Ce(),
  removeIcon: se(),
  downloadIcon: se(),
  previewIcon: se(),
  iconRender: se(),
  actionIconRender: se(),
  itemRender: se(),
  onPreview: se(),
  onClose: se(),
  onDownload: se(),
  progress: pe()
}), eE = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ListItem",
  inheritAttrs: !1,
  props: J8(),
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    var r;
    const i = k(!1), a = k();
    be(() => {
      a.value = setTimeout(() => {
        i.value = !0;
      }, 300);
    }), Ae(() => {
      clearTimeout(a.value);
    });
    const l = k((r = e.file) === null || r === void 0 ? void 0 : r.status);
    ae(() => {
      var u;
      return (u = e.file) === null || u === void 0 ? void 0 : u.status;
    }, (u) => {
      u !== "removed" && (l.value = u);
    });
    const {
      rootPrefixCls: s
    } = Se("upload", e), c = T(() => tr(`${s.value}-fade`));
    return () => {
      var u, d;
      const {
        prefixCls: f,
        locale: p,
        listType: h,
        file: m,
        items: w,
        progress: b,
        iconRender: C = n.iconRender,
        actionIconRender: S = n.actionIconRender,
        itemRender: x = n.itemRender,
        isImgUrl: $,
        showPreviewIcon: O,
        showRemoveIcon: y,
        showDownloadIcon: I,
        previewIcon: E = n.previewIcon,
        removeIcon: R = n.removeIcon,
        downloadIcon: _ = n.downloadIcon,
        onPreview: N,
        onDownload: F,
        onClose: j
      } = e, {
        class: P,
        style: M
      } = o, L = C({
        file: m
      });
      let H = v("div", {
        class: `${f}-text-icon`
      }, [L]);
      if (h === "picture" || h === "picture-card")
        if (l.value === "uploading" || !m.thumbUrl && !m.url) {
          const Q = {
            [`${f}-list-item-thumbnail`]: !0,
            [`${f}-list-item-file`]: l.value !== "uploading"
          };
          H = v("div", {
            class: Q
          }, [L]);
        } else {
          const Q = $ != null && $(m) ? v("img", {
            src: m.thumbUrl || m.url,
            alt: m.name,
            class: `${f}-list-item-image`,
            crossorigin: m.crossOrigin
          }, null) : L, le = {
            [`${f}-list-item-thumbnail`]: !0,
            [`${f}-list-item-file`]: $ && !$(m)
          };
          H = v("a", {
            class: le,
            onClick: (ve) => N(m, ve),
            href: m.url || m.thumbUrl,
            target: "_blank",
            rel: "noopener noreferrer"
          }, [Q]);
        }
      const A = {
        [`${f}-list-item`]: !0,
        [`${f}-list-item-${l.value}`]: !0
      }, z = typeof m.linkProps == "string" ? JSON.parse(m.linkProps) : m.linkProps, q = y ? S({
        customIcon: R ? R({
          file: m
        }) : v(Bi, null, null),
        callback: () => j(m),
        prefixCls: f,
        title: p.removeFile
      }) : null, Y = I && l.value === "done" ? S({
        customIcon: _ ? _({
          file: m
        }) : v(Zs, null, null),
        callback: () => F(m),
        prefixCls: f,
        title: p.downloadFile
      }) : null, K = h !== "picture-card" && v("span", {
        key: "download-delete",
        class: [`${f}-list-item-actions`, {
          picture: h === "picture"
        }]
      }, [Y, q]), W = `${f}-list-item-name`, G = m.url ? [v("a", D(D({
        key: "view",
        target: "_blank",
        rel: "noopener noreferrer",
        class: W,
        title: m.name
      }, z), {}, {
        href: m.url,
        onClick: (Q) => N(m, Q)
      }), [m.name]), K] : [v("span", {
        key: "view",
        class: W,
        onClick: (Q) => N(m, Q),
        title: m.name
      }, [m.name]), K], ee = {
        pointerEvents: "none",
        opacity: 0.5
      }, re = O ? v("a", {
        href: m.url || m.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        style: m.url || m.thumbUrl ? void 0 : ee,
        onClick: (Q) => N(m, Q),
        title: p.previewFile
      }, [E ? E({
        file: m
      }) : v(Li, null, null)]) : null, ie = h === "picture-card" && l.value !== "uploading" && v("span", {
        class: `${f}-list-item-actions`
      }, [re, l.value === "done" && Y, q]), X = v("div", {
        class: A
      }, [H, G, ie, i.value && v(Gt, c.value, {
        default: () => [Bt(v("div", {
          class: `${f}-list-item-progress`
        }, ["percent" in m ? v(T8, D(D({}, b), {}, {
          type: "line",
          percent: m.percent
        }), null) : null]), [[mo, l.value === "uploading"]])]
      })]), B = {
        [`${f}-list-item-container`]: !0,
        [`${P}`]: !!P
      }, U = m.response && typeof m.response == "string" ? m.response : ((u = m.error) === null || u === void 0 ? void 0 : u.statusText) || ((d = m.error) === null || d === void 0 ? void 0 : d.message) || p.uploadError, ne = l.value === "error" ? v(uo, {
        title: U,
        getPopupContainer: (Q) => Q.parentNode
      }, {
        default: () => [X]
      }) : X;
      return v("div", {
        class: B,
        style: M
      }, [x ? x({
        originNode: ne,
        file: m,
        fileList: w,
        actions: {
          download: F.bind(null, m),
          preview: N.bind(null, m),
          remove: j.bind(null, m)
        }
      }) : ne]);
    };
  }
}), tE = (e, t) => {
  let {
    slots: n
  } = t;
  var o;
  return ht((o = n.default) === null || o === void 0 ? void 0 : o.call(n))[0];
}, nE = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AUploadList",
  props: Be(k8(), {
    listType: "text",
    progress: {
      strokeWidth: 2,
      showInfo: !1
    },
    showRemoveIcon: !0,
    showDownloadIcon: !1,
    showPreviewIcon: !0,
    previewFile: Y8,
    isImageUrl: K8,
    items: [],
    appendActionVisible: !0
  }),
  setup(e, t) {
    let {
      slots: n,
      expose: o
    } = t;
    const r = k(!1);
    be(() => {
      r.value == !0;
    });
    const i = k([]);
    ae(() => e.items, function() {
      let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      i.value = m.slice();
    }, {
      immediate: !0,
      deep: !0
    }), Pe(() => {
      if (e.listType !== "picture" && e.listType !== "picture-card")
        return;
      let m = !1;
      (e.items || []).forEach((w, b) => {
        typeof document > "u" || typeof window > "u" || !window.FileReader || !window.File || !(w.originFileObj instanceof File || w.originFileObj instanceof Blob) || w.thumbUrl !== void 0 || (w.thumbUrl = "", e.previewFile && e.previewFile(w.originFileObj).then((C) => {
          const S = C || "";
          S !== w.thumbUrl && (i.value[b].thumbUrl = S, m = !0);
        }));
      }), m && qf(i);
    });
    const a = (m, w) => {
      if (e.onPreview)
        return w == null || w.preventDefault(), e.onPreview(m);
    }, l = (m) => {
      typeof e.onDownload == "function" ? e.onDownload(m) : m.url && window.open(m.url);
    }, s = (m) => {
      var w;
      (w = e.onRemove) === null || w === void 0 || w.call(e, m);
    }, c = (m) => {
      let {
        file: w
      } = m;
      const b = e.iconRender || n.iconRender;
      if (b)
        return b({
          file: w,
          listType: e.listType
        });
      const C = w.status === "uploading", S = e.isImageUrl && e.isImageUrl(w) ? v(Ys, null, null) : v(Qs, null, null);
      let x = C ? v(Ot, null, null) : v(Ks, null, null);
      return e.listType === "picture" ? x = C ? v(Ot, null, null) : S : e.listType === "picture-card" && (x = C ? e.locale.uploading : S), x;
    }, u = (m) => {
      const {
        customIcon: w,
        callback: b,
        prefixCls: C,
        title: S
      } = m, x = {
        type: "text",
        size: "small",
        title: S,
        onClick: () => {
          b();
        },
        class: `${C}-list-item-action`
      };
      return zt(w) ? v(nt, x, {
        icon: () => w
      }) : v(nt, x, {
        default: () => [v("span", null, [w])]
      });
    };
    o({
      handlePreview: a,
      handleDownload: l
    });
    const {
      prefixCls: d,
      rootPrefixCls: f
    } = Se("upload", e), p = T(() => ({
      [`${d.value}-list`]: !0,
      [`${d.value}-list-${e.listType}`]: !0
    })), h = T(() => {
      const m = g({}, Rg(`${f.value}-motion-collapse`));
      delete m.onAfterAppear, delete m.onAfterEnter, delete m.onAfterLeave;
      const w = g(g({}, Ci(`${d.value}-${e.listType === "picture-card" ? "animate-inline" : "animate"}`)), {
        class: p.value,
        appear: r.value
      });
      return e.listType !== "picture-card" ? g(g({}, m), w) : w;
    });
    return () => {
      const {
        listType: m,
        locale: w,
        isImageUrl: b,
        showPreviewIcon: C,
        showRemoveIcon: S,
        showDownloadIcon: x,
        removeIcon: $,
        previewIcon: O,
        downloadIcon: y,
        progress: I,
        appendAction: E,
        itemRender: R,
        appendActionVisible: _
      } = e, N = E == null ? void 0 : E(), F = i.value;
      return v(ai, D(D({}, h.value), {}, {
        tag: "div"
      }), {
        default: () => [F.map((j) => {
          const {
            uid: P
          } = j;
          return v(eE, {
            key: P,
            locale: w,
            prefixCls: d.value,
            file: j,
            items: F,
            progress: I,
            listType: m,
            isImgUrl: b,
            showPreviewIcon: C,
            showRemoveIcon: S,
            showDownloadIcon: x,
            onPreview: a,
            onDownload: l,
            onClose: s,
            removeIcon: $,
            previewIcon: O,
            downloadIcon: y,
            itemRender: R
          }, g(g({}, n), {
            iconRender: c,
            actionIconRender: u
          }));
        }), E ? Bt(v(tE, {
          key: "__ant_upload_appendAction"
        }, {
          default: () => N
        }), [[mo, !!_]]) : null]
      });
    };
  }
}), oE = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [`${t}-wrapper`]: {
      [`${t}-drag`]: {
        position: "relative",
        width: "100%",
        height: "100%",
        textAlign: "center",
        background: e.colorFillAlter,
        border: `${e.lineWidth}px dashed ${e.colorBorder}`,
        borderRadius: e.borderRadiusLG,
        cursor: "pointer",
        transition: `border-color ${e.motionDurationSlow}`,
        [t]: {
          padding: `${e.padding}px 0`
        },
        [`${t}-btn`]: {
          display: "table",
          width: "100%",
          height: "100%",
          outline: "none"
        },
        [`${t}-drag-container`]: {
          display: "table-cell",
          verticalAlign: "middle"
        },
        [`&:not(${t}-disabled):hover`]: {
          borderColor: e.colorPrimaryHover
        },
        [`p${t}-drag-icon`]: {
          marginBottom: e.margin,
          [n]: {
            color: e.colorPrimary,
            fontSize: e.uploadThumbnailSize
          }
        },
        [`p${t}-text`]: {
          margin: `0 0 ${e.marginXXS}px`,
          color: e.colorTextHeading,
          fontSize: e.fontSizeLG
        },
        [`p${t}-hint`]: {
          color: e.colorTextDescription,
          fontSize: e.fontSize
        },
        // ===================== Disabled =====================
        [`&${t}-disabled`]: {
          cursor: "not-allowed",
          [`p${t}-drag-icon ${n},
            p${t}-text,
            p${t}-hint
          `]: {
            color: e.colorTextDisabled
          }
        }
      }
    }
  };
}, rE = (e) => {
  const {
    componentCls: t,
    antCls: n,
    iconCls: o,
    fontSize: r,
    lineHeight: i
  } = e, a = `${t}-list-item`, l = `${a}-actions`, s = `${a}-action`, c = Math.round(r * i);
  return {
    [`${t}-wrapper`]: {
      [`${t}-list`]: g(g({}, gi()), {
        lineHeight: e.lineHeight,
        [a]: {
          position: "relative",
          height: e.lineHeight * r,
          marginTop: e.marginXS,
          fontSize: r,
          display: "flex",
          alignItems: "center",
          transition: `background-color ${e.motionDurationSlow}`,
          "&:hover": {
            backgroundColor: e.controlItemBgHover
          },
          [`${a}-name`]: g(g({}, Wo), {
            padding: `0 ${e.paddingXS}px`,
            lineHeight: i,
            flex: "auto",
            transition: `all ${e.motionDurationSlow}`
          }),
          [l]: {
            [s]: {
              opacity: 0
            },
            [`${s}${n}-btn-sm`]: {
              height: c,
              border: 0,
              lineHeight: 1,
              // FIXME: should not override small button
              "> span": {
                transform: "scale(1)"
              }
            },
            [`
              ${s}:focus,
              &.picture ${s}
            `]: {
              opacity: 1
            },
            [o]: {
              color: e.colorTextDescription,
              transition: `all ${e.motionDurationSlow}`
            },
            [`&:hover ${o}`]: {
              color: e.colorText
            }
          },
          [`${t}-icon ${o}`]: {
            color: e.colorTextDescription,
            fontSize: r
          },
          [`${a}-progress`]: {
            position: "absolute",
            bottom: -e.uploadProgressOffset,
            width: "100%",
            paddingInlineStart: r + e.paddingXS,
            fontSize: r,
            lineHeight: 0,
            pointerEvents: "none",
            "> div": {
              margin: 0
            }
          }
        },
        [`${a}:hover ${s}`]: {
          opacity: 1,
          color: e.colorText
        },
        [`${a}-error`]: {
          color: e.colorError,
          [`${a}-name, ${t}-icon ${o}`]: {
            color: e.colorError
          },
          [l]: {
            [`${o}, ${o}:hover`]: {
              color: e.colorError
            },
            [s]: {
              opacity: 1
            }
          }
        },
        [`${t}-list-item-container`]: {
          transition: `opacity ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
          // For smooth removing animation
          "&::before": {
            display: "table",
            width: 0,
            height: 0,
            content: '""'
          }
        }
      })
    }
  };
}, _f = new fe("uploadAnimateInlineIn", {
  from: {
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0
  }
}), Af = new fe("uploadAnimateInlineOut", {
  to: {
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0
  }
}), iE = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-animate-inline`;
  return [{
    [`${t}-wrapper`]: {
      [`${n}-appear, ${n}-enter, ${n}-leave`]: {
        animationDuration: e.motionDurationSlow,
        animationTimingFunction: e.motionEaseInOutCirc,
        animationFillMode: "forwards"
      },
      [`${n}-appear, ${n}-enter`]: {
        animationName: _f
      },
      [`${n}-leave`]: {
        animationName: Af
      }
    }
  }, _f, Af];
}, aE = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    uploadThumbnailSize: o,
    uploadProgressOffset: r
  } = e, i = `${t}-list`, a = `${i}-item`;
  return {
    [`${t}-wrapper`]: {
      // ${listCls} 增加优先级
      [`${i}${i}-picture, ${i}${i}-picture-card`]: {
        [a]: {
          position: "relative",
          height: o + e.lineWidth * 2 + e.paddingXS * 2,
          padding: e.paddingXS,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          "&:hover": {
            background: "transparent"
          },
          [`${a}-thumbnail`]: g(g({}, Wo), {
            width: o,
            height: o,
            lineHeight: `${o + e.paddingSM}px`,
            textAlign: "center",
            flex: "none",
            [n]: {
              fontSize: e.fontSizeHeading2,
              color: e.colorPrimary
            },
            img: {
              display: "block",
              width: "100%",
              height: "100%",
              overflow: "hidden"
            }
          }),
          [`${a}-progress`]: {
            bottom: r,
            width: `calc(100% - ${e.paddingSM * 2}px)`,
            marginTop: 0,
            paddingInlineStart: o + e.paddingXS
          }
        },
        [`${a}-error`]: {
          borderColor: e.colorError,
          // Adjust the color of the error icon : https://github.com/ant-design/ant-design/pull/24160
          [`${a}-thumbnail ${n}`]: {
            "svg path[fill='#e6f7ff']": {
              fill: e.colorErrorBg
            },
            "svg path[fill='#1890ff']": {
              fill: e.colorError
            }
          }
        },
        [`${a}-uploading`]: {
          borderStyle: "dashed",
          [`${a}-name`]: {
            marginBottom: r
          }
        }
      }
    }
  };
}, lE = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    fontSizeLG: o,
    colorTextLightSolid: r
  } = e, i = `${t}-list`, a = `${i}-item`, l = e.uploadPicCardSize;
  return {
    [`${t}-wrapper${t}-picture-card-wrapper`]: g(g({}, gi()), {
      display: "inline-block",
      width: "100%",
      [`${t}${t}-select`]: {
        width: l,
        height: l,
        marginInlineEnd: e.marginXS,
        marginBottom: e.marginXS,
        textAlign: "center",
        verticalAlign: "top",
        backgroundColor: e.colorFillAlter,
        border: `${e.lineWidth}px dashed ${e.colorBorder}`,
        borderRadius: e.borderRadiusLG,
        cursor: "pointer",
        transition: `border-color ${e.motionDurationSlow}`,
        [`> ${t}`]: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center"
        },
        [`&:not(${t}-disabled):hover`]: {
          borderColor: e.colorPrimary
        }
      },
      // list
      [`${i}${i}-picture-card`]: {
        [`${i}-item-container`]: {
          display: "inline-block",
          width: l,
          height: l,
          marginBlock: `0 ${e.marginXS}px`,
          marginInline: `0 ${e.marginXS}px`,
          verticalAlign: "top"
        },
        "&::after": {
          display: "none"
        },
        [a]: {
          height: "100%",
          margin: 0,
          "&::before": {
            position: "absolute",
            zIndex: 1,
            width: `calc(100% - ${e.paddingXS * 2}px)`,
            height: `calc(100% - ${e.paddingXS * 2}px)`,
            backgroundColor: e.colorBgMask,
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            content: '" "'
          }
        },
        [`${a}:hover`]: {
          [`&::before, ${a}-actions`]: {
            opacity: 1
          }
        },
        [`${a}-actions`]: {
          position: "absolute",
          insetInlineStart: 0,
          zIndex: 10,
          width: "100%",
          whiteSpace: "nowrap",
          textAlign: "center",
          opacity: 0,
          transition: `all ${e.motionDurationSlow}`,
          [`${n}-eye, ${n}-download, ${n}-delete`]: {
            zIndex: 10,
            width: o,
            margin: `0 ${e.marginXXS}px`,
            fontSize: o,
            cursor: "pointer",
            transition: `all ${e.motionDurationSlow}`
          }
        },
        [`${a}-actions, ${a}-actions:hover`]: {
          [`${n}-eye, ${n}-download, ${n}-delete`]: {
            color: new He(r).setAlpha(0.65).toRgbString(),
            "&:hover": {
              color: r
            }
          }
        },
        [`${a}-thumbnail, ${a}-thumbnail img`]: {
          position: "static",
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain"
        },
        [`${a}-name`]: {
          display: "none",
          textAlign: "center"
        },
        [`${a}-file + ${a}-name`]: {
          position: "absolute",
          bottom: e.margin,
          display: "block",
          width: `calc(100% - ${e.paddingXS * 2}px)`
        },
        [`${a}-uploading`]: {
          [`&${a}`]: {
            backgroundColor: e.colorFillAlter
          },
          [`&::before, ${n}-eye, ${n}-download, ${n}-delete`]: {
            display: "none"
          }
        },
        [`${a}-progress`]: {
          bottom: e.marginXL,
          width: `calc(100% - ${e.paddingXS * 2}px)`,
          paddingInlineStart: 0
        }
      }
    })
  };
}, sE = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl"
    }
  };
}, cE = (e) => {
  const {
    componentCls: t,
    colorTextDisabled: n
  } = e;
  return {
    [`${t}-wrapper`]: g(g({}, ot(e)), {
      [t]: {
        outline: 0,
        "input[type='file']": {
          cursor: "pointer"
        }
      },
      [`${t}-select`]: {
        display: "inline-block"
      },
      [`${t}-disabled`]: {
        color: n,
        cursor: "not-allowed"
      }
    })
  };
}, uE = Ge("Upload", (e) => {
  const {
    fontSizeHeading3: t,
    fontSize: n,
    lineHeight: o,
    lineWidth: r,
    controlHeightLG: i
  } = e, a = Math.round(n * o), l = we(e, {
    uploadThumbnailSize: t * 2,
    uploadProgressOffset: a / 2 + r,
    uploadPicCardSize: i * 2.55
  });
  return [cE(l), oE(l), aE(l), lE(l), rE(l), iE(l), sE(l), Cg(l)];
});
var dE = function(e, t, n, o) {
  function r(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(u) {
      try {
        c(o.next(u));
      } catch (d) {
        a(d);
      }
    }
    function s(u) {
      try {
        c(o.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : r(u.value).then(l, s);
    }
    c((o = o.apply(e, t || [])).next());
  });
}, fE = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const To = `__LIST_IGNORE_${Date.now()}__`, Vr = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AUpload",
  inheritAttrs: !1,
  props: Be(Fv(), {
    type: "select",
    multiple: !1,
    action: "",
    data: {},
    accept: "",
    showUploadList: !0,
    listType: "text",
    supportServerRender: !0
  }),
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      expose: r
    } = t;
    const i = or(), {
      prefixCls: a,
      direction: l,
      disabled: s
    } = Se("upload", e), [c, u] = uE(a), d = Tn(), f = T(() => {
      var _;
      return (_ = s.value) !== null && _ !== void 0 ? _ : d.value;
    }), [p, h] = Qr(e.defaultFileList || [], {
      value: Ct(e, "fileList"),
      postState: (_) => {
        const N = Date.now();
        return (_ ?? []).map((F, j) => (!F.uid && !Object.isFrozen(F) && (F.uid = `__AUTO__${N}_${j}__`), F));
      }
    }), m = te("drop"), w = te(null);
    be(() => {
      vt(e.fileList !== void 0 || o.value === void 0, "Upload", "`value` is not a valid prop, do you mean `fileList`?"), vt(e.transformFile === void 0, "Upload", "`transformFile` is deprecated. Please use `beforeUpload` directly."), vt(e.remove === void 0, "Upload", "`remove` props is deprecated. Please use `remove` event.");
    });
    const b = (_, N, F) => {
      var j, P;
      let M = [...N];
      e.maxCount === 1 ? M = M.slice(-1) : e.maxCount && (M = M.slice(0, e.maxCount)), h(M);
      const L = {
        file: _,
        fileList: M
      };
      F && (L.event = F), (j = e["onUpdate:fileList"]) === null || j === void 0 || j.call(e, L.fileList), (P = e.onChange) === null || P === void 0 || P.call(e, L), i.onFieldChange();
    }, C = (_, N) => dE(this, void 0, void 0, function* () {
      const {
        beforeUpload: F,
        transformFile: j
      } = e;
      let P = _;
      if (F) {
        const M = yield F(_, N);
        if (M === !1)
          return !1;
        if (delete _[To], M === To)
          return Object.defineProperty(_, To, {
            value: !0,
            configurable: !0
          }), !1;
        typeof M == "object" && M && (P = M);
      }
      return j && (P = yield j(P)), P;
    }), S = (_) => {
      const N = _.filter((P) => !P.file[To]);
      if (!N.length)
        return;
      const F = N.map((P) => Ir(P.file));
      let j = [...p.value];
      F.forEach((P) => {
        j = Tr(P, j);
      }), F.forEach((P, M) => {
        let L = P;
        if (N[M].parsedFile)
          P.status = "uploading";
        else {
          const {
            originFileObj: H
          } = P;
          let A;
          try {
            A = new File([H], H.name, {
              type: H.type
            });
          } catch {
            A = new Blob([H], {
              type: H.type
            }), A.name = H.name, A.lastModifiedDate = /* @__PURE__ */ new Date(), A.lastModified = (/* @__PURE__ */ new Date()).getTime();
          }
          A.uid = P.uid, L = A;
        }
        b(L, j);
      });
    }, x = (_, N, F) => {
      try {
        typeof _ == "string" && (_ = JSON.parse(_));
      } catch {
      }
      if (!_a(N, p.value))
        return;
      const j = Ir(N);
      j.status = "done", j.percent = 100, j.response = _, j.xhr = F;
      const P = Tr(j, p.value);
      b(j, P);
    }, $ = (_, N) => {
      if (!_a(N, p.value))
        return;
      const F = Ir(N);
      F.status = "uploading", F.percent = _.percent;
      const j = Tr(F, p.value);
      b(F, j, _);
    }, O = (_, N, F) => {
      if (!_a(F, p.value))
        return;
      const j = Ir(F);
      j.error = _, j.response = N, j.status = "error";
      const P = Tr(j, p.value);
      b(j, P);
    }, y = (_) => {
      let N;
      const F = e.onRemove || e.remove;
      Promise.resolve(typeof F == "function" ? F(_) : F).then((j) => {
        var P, M;
        if (j === !1)
          return;
        const L = X8(_, p.value);
        L && (N = g(g({}, _), {
          status: "removed"
        }), (P = p.value) === null || P === void 0 || P.forEach((H) => {
          const A = N.uid !== void 0 ? "uid" : "name";
          H[A] === N[A] && !Object.isFrozen(H) && (H.status = "removed");
        }), (M = w.value) === null || M === void 0 || M.abort(N), b(N, L));
      });
    }, I = (_) => {
      var N;
      m.value = _.type, _.type === "drop" && ((N = e.onDrop) === null || N === void 0 || N.call(e, _));
    };
    r({
      onBatchStart: S,
      onSuccess: x,
      onProgress: $,
      onError: O,
      fileList: p,
      upload: w
    });
    const [E] = go("Upload", Mt.Upload, T(() => e.locale)), R = (_, N) => {
      const {
        removeIcon: F,
        previewIcon: j,
        downloadIcon: P,
        previewFile: M,
        onPreview: L,
        onDownload: H,
        isImageUrl: A,
        progress: z,
        itemRender: q,
        iconRender: Y,
        showUploadList: K
      } = e, {
        showDownloadIcon: W,
        showPreviewIcon: G,
        showRemoveIcon: ee
      } = typeof K == "boolean" ? {} : K;
      return K ? v(nE, {
        prefixCls: a.value,
        listType: e.listType,
        items: p.value,
        previewFile: M,
        onPreview: L,
        onDownload: H,
        onRemove: y,
        showRemoveIcon: !f.value && ee,
        showPreviewIcon: G,
        showDownloadIcon: W,
        removeIcon: F,
        previewIcon: j,
        downloadIcon: P,
        iconRender: Y,
        locale: E.value,
        isImageUrl: A,
        progress: z,
        itemRender: q,
        appendActionVisible: N,
        appendAction: _
      }, g({}, n)) : _ == null ? void 0 : _();
    };
    return () => {
      var _, N, F;
      const {
        listType: j,
        type: P
      } = e, {
        class: M,
        style: L
      } = o, H = fE(o, ["class", "style"]), A = g(g(g({
        onBatchStart: S,
        onError: O,
        onProgress: $,
        onSuccess: x
      }, H), e), {
        id: (_ = e.id) !== null && _ !== void 0 ? _ : i.id.value,
        prefixCls: a.value,
        beforeUpload: C,
        onChange: void 0,
        disabled: f.value
      });
      delete A.remove, (!n.default || f.value) && delete A.id;
      const z = {
        [`${a.value}-rtl`]: l.value === "rtl"
      };
      if (P === "drag") {
        const W = oe(a.value, {
          [`${a.value}-drag`]: !0,
          [`${a.value}-drag-uploading`]: p.value.some((G) => G.status === "uploading"),
          [`${a.value}-drag-hover`]: m.value === "dragover",
          [`${a.value}-disabled`]: f.value,
          [`${a.value}-rtl`]: l.value === "rtl"
        }, o.class, u.value);
        return c(v("span", D(D({}, o), {}, {
          class: oe(`${a.value}-wrapper`, z, M, u.value)
        }), [v("div", {
          class: W,
          onDrop: I,
          onDragover: I,
          onDragleave: I,
          style: o.style
        }, [v(Of, D(D({}, A), {}, {
          ref: w,
          class: `${a.value}-btn`
        }), D({
          default: () => [v("div", {
            class: `${a.value}-drag-container`
          }, [(N = n.default) === null || N === void 0 ? void 0 : N.call(n)])]
        }, n))]), R()]));
      }
      const q = oe(a.value, {
        [`${a.value}-select`]: !0,
        [`${a.value}-select-${j}`]: !0,
        [`${a.value}-disabled`]: f.value,
        [`${a.value}-rtl`]: l.value === "rtl"
      }), Y = Je((F = n.default) === null || F === void 0 ? void 0 : F.call(n)), K = (W) => v("div", {
        class: q,
        style: W
      }, [v(Of, D(D({}, A), {}, {
        ref: w
      }), n)]);
      return c(j === "picture-card" ? v("span", D(D({}, o), {}, {
        class: oe(`${a.value}-wrapper`, `${a.value}-picture-card-wrapper`, z, o.class, u.value)
      }), [R(K, !!Y.length)]) : v("span", D(D({}, o), {}, {
        class: oe(`${a.value}-wrapper`, z, o.class, u.value)
      }), [K(Y.length ? void 0 : {
        display: "none"
      }), R()]));
    };
  }
});
var Mf = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Aa = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AUploadDragger",
  inheritAttrs: !1,
  props: Fv(),
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    return () => {
      const {
        height: r
      } = e, i = Mf(e, ["height"]), {
        style: a
      } = o, l = Mf(o, ["style"]), s = g(g(g({}, i), l), {
        type: "drag",
        style: g(g({}, a), {
          height: typeof r == "number" ? `${r}px` : r
        })
      });
      return v(Vr, s, n);
    };
  }
}), pE = g(Vr, {
  Dragger: Aa,
  LIST_IGNORE: To,
  install(e) {
    return e.component(Vr.name, Vr), e.component(Aa.name, Aa), e;
  }
});
var mE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "down-circle", theme: "outlined" };
function Rf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      gE(e, r, n[r]);
    });
  }
  return e;
}
function gE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Js = function(t, n) {
  var o = Rf({}, t, n.attrs);
  return v(de, Rf({}, o, {
    icon: mE
  }), null);
};
Js.displayName = "DownCircleOutlined";
Js.inheritAttrs = !1;
var vE = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z" } }] }, name: "export", theme: "outlined" };
function Ff(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      hE(e, r, n[r]);
    });
  }
  return e;
}
function hE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ec = function(t, n) {
  var o = Ff({}, t, n.attrs);
  return v(de, Ff({}, o, {
    icon: vE
  }), null);
};
ec.displayName = "ExportOutlined";
ec.inheritAttrs = !1;
var yE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z" } }] }, name: "file-add", theme: "outlined" };
function Df(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      bE(e, r, n[r]);
    });
  }
  return e;
}
function bE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var tc = function(t, n) {
  var o = Df({}, t, n.attrs);
  return v(de, Df({}, o, {
    icon: yE
  }), null);
};
tc.displayName = "FileAddOutlined";
tc.inheritAttrs = !1;
var wE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M553.1 509.1l-77.8 99.2-41.1-52.4a8 8 0 00-12.6 0l-99.8 127.2a7.98 7.98 0 006.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 00-12.7 0zM360 442a40 40 0 1080 0 40 40 0 10-80 0zm494.6-153.4L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" } }] }, name: "file-image", theme: "outlined" };
function Nf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      SE(e, r, n[r]);
    });
  }
  return e;
}
function SE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var nc = function(t, n) {
  var o = Nf({}, t, n.attrs);
  return v(de, Nf({}, o, {
    icon: wE
  }), null);
};
nc.displayName = "FileImageOutlined";
nc.inheritAttrs = !1;
var xE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zm-650.3-80h85c4.2 0 8-2.7 9.3-6.8l53.7-166h219.2l53.2 166c1.3 4 5 6.8 9.3 6.8h89.1c1.1 0 2.2-.2 3.2-.5a9.7 9.7 0 006-12.4L573.6 118.6a9.9 9.9 0 00-9.2-6.6H462.1c-4.2 0-7.9 2.6-9.2 6.6L244.5 723.1c-.4 1-.5 2.1-.5 3.2-.1 5.3 4.3 9.7 9.7 9.7zm255.9-516.1h4.1l83.8 263.8H424.9l84.7-263.8z" } }] }, name: "font-colors", theme: "outlined" };
function Lf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      CE(e, r, n[r]);
    });
  }
  return e;
}
function CE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var oc = function(t, n) {
  var o = Lf({}, t, n.attrs);
  return v(de, Lf({}, o, {
    icon: xE
  }), null);
};
oc.displayName = "FontColorsOutlined";
oc.inheritAttrs = !1;
var $E = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z" } }, { tag: "path", attrs: { d: "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z" } }] }, name: "form", theme: "outlined" };
function jf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      OE(e, r, n[r]);
    });
  }
  return e;
}
function OE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var rc = function(t, n) {
  var o = jf({}, t, n.attrs);
  return v(de, jf({}, o, {
    icon: $E
  }), null);
};
rc.displayName = "FormOutlined";
rc.inheritAttrs = !1;
var PE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M957.6 507.4L603.2 158.2a7.9 7.9 0 00-11.2 0L353.3 393.4a8.03 8.03 0 00-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 00-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0011.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0011.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2zM389.8 796.2H229.6l134.4-133 80.1 78.9-54.3 54.1zm154.8-62.1L373.2 565.2l68.6-67.6 171.4 168.9-68.6 67.6zM713.1 658L450.3 399.1 597.6 254l262.8 259-147.3 145z" } }] }, name: "highlight", theme: "outlined" };
function Hf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      IE(e, r, n[r]);
    });
  }
  return e;
}
function IE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ic = function(t, n) {
  var o = Hf({}, t, n.attrs);
  return v(de, Hf({}, o, {
    icon: PE
  }), null);
};
ic.displayName = "HighlightOutlined";
ic.inheritAttrs = !1;
var TE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z" } }] }, name: "lock", theme: "outlined" };
function Bf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      EE(e, r, n[r]);
    });
  }
  return e;
}
function EE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ac = function(t, n) {
  var o = Bf({}, t, n.attrs);
  return v(de, Bf({}, o, {
    icon: TE
  }), null);
};
ac.displayName = "LockOutlined";
ac.inheritAttrs = !1;
var _E = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z" } }] }, name: "login", theme: "outlined" };
function zf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      AE(e, r, n[r]);
    });
  }
  return e;
}
function AE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var lc = function(t, n) {
  var o = zf({}, t, n.attrs);
  return v(de, zf({}, o, {
    icon: _E
  }), null);
};
lc.displayName = "LoginOutlined";
lc.inheritAttrs = !1;
var ME = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z" } }] }, name: "menu-fold", theme: "outlined" };
function Vf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      RE(e, r, n[r]);
    });
  }
  return e;
}
function RE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var sc = function(t, n) {
  var o = Vf({}, t, n.attrs);
  return v(de, Vf({}, o, {
    icon: ME
  }), null);
};
sc.displayName = "MenuFoldOutlined";
sc.inheritAttrs = !1;
var FE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z" } }] }, name: "menu-unfold", theme: "outlined" };
function Wf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      DE(e, r, n[r]);
    });
  }
  return e;
}
function DE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var cc = function(t, n) {
  var o = Wf({}, t, n.attrs);
  return v(de, Wf({}, o, {
    icon: FE
  }), null);
};
cc.displayName = "MenuUnfoldOutlined";
cc.inheritAttrs = !1;
var NE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z" } }] }, name: "unlock", theme: "outlined" };
function Uf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      LE(e, r, n[r]);
    });
  }
  return e;
}
function LE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var uc = function(t, n) {
  var o = Uf({}, t, n.attrs);
  return v(de, Uf({}, o, {
    icon: NE
  }), null);
};
uc.displayName = "UnlockOutlined";
uc.inheritAttrs = !1;
var jE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "upload", theme: "outlined" };
function Gf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      HE(e, r, n[r]);
    });
  }
  return e;
}
function HE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var zi = function(t, n) {
  var o = Gf({}, t, n.attrs);
  return v(de, Gf({}, o, {
    icon: jE
  }), null);
};
zi.displayName = "UploadOutlined";
zi.inheritAttrs = !1;
const kf = /* @__PURE__ */ Z({
  name: "ths-upload",
  __name: "index",
  props: {
    fileList: {
      type: Array,
      default: []
    },
    accept: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    maxCount: {
      type: Number,
      default: null
    },
    multiple: {
      type: Boolean,
      default: !0
    },
    slotType: {
      type: String,
      default: "default"
    },
    isShowMsg: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["handleChange", "beforeUpload"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = te(n.accept), i = te(n.slotType), a = te(n.fileList), l = te(!0), s = te(n.isShowMsg), c = (f) => {
      o("handleChange", f), f.file.status !== "uploading" && console.log(f.file, f.fileList), f.file.status === "done" ? s.value && Dt.success(`${f.file.name} 文件上传成功！`) : f.file.status === "error" && s.value && Dt.error(`${f.file.name} 文件上传失败.`);
    }, u = (f, p) => (o("beforeUpload", f, p, l), l.value);
    ae(
      () => n.fileList,
      (f) => {
        a.value = f;
      },
      { deep: !0, immediate: !0 }
    );
    const d = {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068"
      },
      strokeWidth: 3,
      format: (f) => `${parseFloat(f.toFixed(2))}%`,
      class: "test"
    };
    return (f, p) => {
      const h = nt, m = pE;
      return Ze(), kn(m, {
        "file-list": a.value,
        "onUpdate:fileList": p[0] || (p[0] = (w) => a.value = w),
        name: "file",
        accept: r.value,
        progress: d,
        maxCount: e.maxCount,
        multiple: e.multiple,
        disabled: e.disabled,
        beforeUpload: u,
        onChange: c
      }, {
        itemRender: ce(({ file: w, actions: b }) => [
          Ma(f.$slots, "fileItem", {
            file: w,
            actions: b
          }),
          Xn(` <a-space>\r
        <span :style="file.status === 'error' ? 'color: red' : ''">{{ file.name }}</span>\r
        <a href="javascript:;" @click="actions.download">下载</a>\r
        <a href="javascript:;" @click="actions.remove">删除</a>\r
      </a-space> `)
        ]),
        default: ce(() => [
          i.value === "default" ? (Ze(), kn(h, { key: 0 }, {
            default: ce(() => [
              v(ge(zi)),
              p[1] || (p[1] = Me(" 点击上传 "))
            ]),
            _: 1
            /* STABLE */
          })) : Ma(f.$slots, "default", { key: 1 })
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["file-list", "accept", "maxCount", "multiple", "disabled"]);
    };
  }
}), Vi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, BE = {
  props: {
    width: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 300
    },
    lineWidth: {
      type: Number,
      default: 4
    },
    lineColor: {
      type: String,
      default: "#000000"
    },
    bgColor: {
      type: String,
      default: ""
    },
    isCrop: {
      type: Boolean,
      default: !1
    },
    isClearBgColor: {
      type: Boolean,
      default: !0
    },
    format: {
      type: String,
      default: "image/png"
    },
    quality: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      hasDrew: !1,
      resultImg: "",
      points: [],
      canvasTxt: null,
      startX: 0,
      startY: 0,
      isDrawing: !1,
      sratio: 1
    };
  },
  computed: {
    ratio() {
      return this.height / this.width;
    },
    stageInfo() {
      return this.$refs.canvas.getBoundingClientRect();
    },
    myBg() {
      return this.bgColor ? this.bgColor : "rgba(255, 255, 255, 0)";
    }
  },
  watch: {
    myBg: function(e) {
      this.$refs.canvas.style.background = e;
    }
  },
  beforeMount() {
    window.addEventListener("resize", this.$_resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.$_resizeHandler);
  },
  mounted() {
    const e = this.$refs.canvas;
    e.height = this.height, e.width = this.width, e.style.background = this.myBg, this.$_resizeHandler(), document.onmouseup = () => {
      this.isDrawing = !1;
    };
  },
  methods: {
    $_resizeHandler() {
      const e = this.$refs.canvas;
      e.style.width = this.width + "px";
      const t = parseFloat(window.getComputedStyle(e).width);
      e.style.height = this.ratio * t + "px", this.canvasTxt = e.getContext("2d"), this.canvasTxt.scale(1 * this.sratio, 1 * this.sratio), this.sratio = t / this.width, this.canvasTxt.scale(1 / this.sratio, 1 / this.sratio);
    },
    // pc
    mouseDown(e) {
      e = e || event, e.preventDefault(), this.isDrawing = !0, this.hasDrew = !0;
      let t = {
        x: e.offsetX,
        y: e.offsetY
      };
      this.drawStart(t);
    },
    mouseMove(e) {
      if (e = e || event, e.preventDefault(), this.isDrawing) {
        let t = {
          x: e.offsetX,
          y: e.offsetY
        };
        this.drawMove(t);
      }
    },
    mouseUp(e) {
      e = e || event, e.preventDefault();
      let t = {
        x: e.offsetX,
        y: e.offsetY
      };
      this.drawEnd(t), this.isDrawing = !1;
    },
    // mobile
    touchStart(e) {
      if (e = e || event, e.preventDefault(), this.hasDrew = !0, e.touches.length === 1) {
        let t = {
          x: e.targetTouches[0].clientX - this.$refs.canvas.getBoundingClientRect().left,
          y: e.targetTouches[0].clientY - this.$refs.canvas.getBoundingClientRect().top
        };
        this.drawStart(t);
      }
    },
    touchMove(e) {
      if (e = e || event, e.preventDefault(), e.touches.length === 1) {
        let t = {
          x: e.targetTouches[0].clientX - this.$refs.canvas.getBoundingClientRect().left,
          y: e.targetTouches[0].clientY - this.$refs.canvas.getBoundingClientRect().top
        };
        this.drawMove(t);
      }
    },
    touchEnd(e) {
      if (e = e || event, e.preventDefault(), e.touches.length === 1) {
        let t = {
          x: e.targetTouches[0].clientX - this.$refs.canvas.getBoundingClientRect().left,
          y: e.targetTouches[0].clientY - this.$refs.canvas.getBoundingClientRect().top
        };
        this.drawEnd(t);
      }
    },
    // 绘制
    drawStart(e) {
      this.startX = e.x, this.startY = e.y, this.canvasTxt.beginPath(), this.canvasTxt.moveTo(this.startX, this.startY), this.canvasTxt.lineTo(e.x, e.y), this.canvasTxt.lineCap = "round", this.canvasTxt.lineJoin = "round", this.canvasTxt.lineWidth = this.lineWidth * this.sratio, this.canvasTxt.stroke(), this.canvasTxt.closePath(), this.points.push(e);
    },
    drawMove(e) {
      this.canvasTxt.beginPath(), this.canvasTxt.moveTo(this.startX, this.startY), this.canvasTxt.lineTo(e.x, e.y), this.canvasTxt.strokeStyle = this.lineColor, this.canvasTxt.lineWidth = this.lineWidth * this.sratio, this.canvasTxt.lineCap = "round", this.canvasTxt.lineJoin = "round", this.canvasTxt.stroke(), this.canvasTxt.closePath(), this.startY = e.y, this.startX = e.x, this.points.push(e);
    },
    drawEnd(e) {
      this.canvasTxt.beginPath(), this.canvasTxt.moveTo(this.startX, this.startY), this.canvasTxt.lineTo(e.x, e.y), this.canvasTxt.lineCap = "round", this.canvasTxt.lineJoin = "round", this.canvasTxt.stroke(), this.canvasTxt.closePath(), this.points.push(e), this.points.push({ x: -1, y: -1 });
    },
    // 操作
    generate(e) {
      let t = e && e.format ? e.format : this.format, n = e && e.quality ? e.quality : this.quality;
      return new Promise((r, i) => {
        if (!this.hasDrew) {
          i("Warning: Not Signned!");
          return;
        }
        var a = this.canvasTxt.getImageData(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
        this.canvasTxt.globalCompositeOperation = "destination-over", this.canvasTxt.fillStyle = this.myBg, this.canvasTxt.fillRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height), this.resultImg = this.$refs.canvas.toDataURL(t, n);
        var l = this.resultImg;
        if (this.canvasTxt.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height), this.canvasTxt.putImageData(a, 0, 0), this.canvasTxt.globalCompositeOperation = "source-over", this.isCrop) {
          const c = this.getCropArea(a.data);
          var s = document.createElement("canvas");
          const u = s.getContext("2d");
          s.width = c[2] - c[0], s.height = c[3] - c[1];
          const d = this.canvasTxt.getImageData(...c);
          u.globalCompositeOperation = "destination-over", u.putImageData(d, 0, 0), u.fillStyle = this.myBg, u.fillRect(0, 0, s.width, s.height), l = s.toDataURL(t, n), s = null;
        }
        r(l);
      });
    },
    reset() {
      this.canvasTxt.clearRect(
        0,
        0,
        this.$refs.canvas.width,
        this.$refs.canvas.height
      ), this.isClearBgColor && (this.$emit("update:bgColor", ""), this.$refs.canvas.style.background = "rgba(255, 255, 255, 0)"), this.points = [], this.hasDrew = !1, this.resultImg = "";
    },
    getCropArea(e) {
      for (var t = this.$refs.canvas.width, n = 0, o = this.$refs.canvas.height, r = 0, i = 0; i < this.$refs.canvas.width; i++)
        for (var a = 0; a < this.$refs.canvas.height; a++) {
          var l = (i + this.$refs.canvas.width * a) * 4;
          (e[l] > 0 || e[l + 1] > 0 || e[l + 2] || e[l + 3] > 0) && (r = Math.max(a, r), n = Math.max(i, n), o = Math.min(a, o), t = Math.min(i, t));
        }
      return t++, n++, o++, r++, [t, o, n, r];
    }
  }
};
function zE(e, t, n, o, r, i) {
  return Ze(), tn(
    "canvas",
    {
      ref: "canvas",
      onMousedown: t[0] || (t[0] = (...a) => i.mouseDown && i.mouseDown(...a)),
      onMousemove: t[1] || (t[1] = (...a) => i.mouseMove && i.mouseMove(...a)),
      onMouseup: t[2] || (t[2] = (...a) => i.mouseUp && i.mouseUp(...a)),
      onTouchstart: t[3] || (t[3] = (...a) => i.touchStart && i.touchStart(...a)),
      onTouchmove: t[4] || (t[4] = (...a) => i.touchMove && i.touchMove(...a)),
      onTouchend: t[5] || (t[5] = (...a) => i.touchEnd && i.touchEnd(...a))
    },
    null,
    544
    /* NEED_HYDRATION, NEED_PATCH */
  );
}
const Tl = /* @__PURE__ */ Vi(BE, [["render", zE], ["__scopeId", "data-v-5c7dd0c2"]]);
Tl.install = function(e) {
  this.installed || (this.installed = !0, e.component("vueEsign", Tl));
};
const VE = { class: "box" }, WE = { class: "btn-box" }, UE = ["onClick"], GE = ["src"], kE = /* @__PURE__ */ Z({
  __name: "index",
  setup(e, { expose: t }) {
    const n = te(null), o = te([]);
    te(1);
    const r = te(null);
    Le({
      display: "flex",
      height: "30px",
      lineHeight: "30px"
    });
    const i = () => {
      console.log("vueEsignRef.value=======", n.value), n.value.reset();
    }, a = () => {
      n.value.generate().then((c) => {
        o.value.push(c);
      }).catch((c) => {
        Dt.error("尚未完成签名！");
      });
    }, l = (c) => {
      o.value = o.value.filter((u, d) => c != u), o.value.length > 0 && (r.value = 0);
    }, s = (c) => {
      r.value = c;
    };
    return t({ images: o, signIndex: r }), (c, u) => {
      const d = nt, f = e8;
      return Ze(), tn("div", VE, [
        v(
          ge(Tl),
          {
            ref_key: "vueEsignRef",
            ref: n,
            style: { border: "2px solid #ccc", cursor: "grabbing" }
          },
          null,
          512
          /* NEED_PATCH */
        ),
        qn("div", WE, [
          v(d, {
            size: "small",
            type: "primary",
            danger: "",
            onClick: i
          }, {
            default: ce(() => u[0] || (u[0] = [
              Me("清空")
            ])),
            _: 1
            /* STABLE */
          }),
          v(d, {
            style: { margin: "0 10px" },
            size: "small",
            type: "primary",
            onClick: a
          }, {
            default: ce(() => u[1] || (u[1] = [
              Me("保存")
            ])),
            _: 1
            /* STABLE */
          }),
          Ma(c.$slots, "default", {}, void 0, !0)
        ]),
        (Ze(!0), tn(
          Ie,
          null,
          ch(o.value, (p) => (Ze(), tn("div", {
            key: p,
            class: Sc(["show-img", p === r.value ? "selected" : ""]),
            onClick: (h) => s(p)
          }, [
            qn("img", {
              src: p,
              alt: ""
            }, null, 8, GE),
            v(ge(Js), {
              class: Sc(["icon select", p === r.value ? "icon-selected" : ""])
            }, null, 8, ["class"]),
            v(f, {
              placement: "top",
              "ok-text": "确认",
              "cancel-text": "取消",
              onConfirm: (h) => l(p)
            }, {
              title: ce(() => u[2] || (u[2] = [
                qn(
                  "p",
                  null,
                  "确定要删除当前签名吗？",
                  -1
                  /* HOISTED */
                )
              ])),
              default: ce(() => [
                v(ge(Bi), { class: "icon delete" })
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["onConfirm"])
          ], 10, UE))),
          128
          /* KEYED_FRAGMENT */
        ))
      ]);
    };
  }
}), XE = /* @__PURE__ */ Vi(kE, [["__scopeId", "data-v-a2fba4f7"]]);
function qE(e, t, n) {
  var o = document.createElement("canvas");
  let r = 0;
  t <= 32 ? r = 1 : t > 32 && t <= 60 ? r = 2 : t > 60 && t <= 80 ? r = 4 : t > 80 && t <= 100 ? r = 6 : t > 100 && (r = 10), o.height = t + r;
  let i = o.getContext("2d");
  i == null || i.clearRect(0, 0, o.width, o.height), i.fillStyle = n, i.font = t + "px 黑体", i.textBaseline = "middle", i.fillText(e, 0, t / 2 + 2), o.width = i.measureText(e).width, i.fillStyle = n, i.font = t + "px 黑体", i.textBaseline = "middle", i.fillText(e, 0, t / 2 + 2);
  var a = o.toDataURL("image/png");
  return a;
}
function KE(e) {
  if (typeof e == "string") {
    for (var t = e.split(","), n = t[0].match(/:(.*?);/)[1], o = n.split("/")[1], r = atob(t[1]), i = r.length, a = new Uint8Array(i); i--; )
      a[i] = r.charCodeAt(i);
    return new File([a], "filename." + o, {
      type: n
    });
  }
}
function YE(e) {
  const t = e.split(",")[1], n = atob(t), o = [];
  for (let a = 0; a < n.length; a++) {
    const l = n.charCodeAt(a);
    o.push(l);
  }
  const r = new Blob([new Uint8Array(o)], { type: "application/pdf" });
  return URL.createObjectURL(r);
}
var Vn = /* @__PURE__ */ ((e) => (e[e.DISABLE = -1] = "DISABLE", e[e.NONE = 0] = "NONE", e[e.FREETEXT = 3] = "FREETEXT", e[e.HIGHLIGHT = 9] = "HIGHLIGHT", e[e.STAMP = 13] = "STAMP", e[e.INK = 15] = "INK", e))(Vn || {}), Nv = /* @__PURE__ */ ((e) => (e[e.RESIZE = 1] = "RESIZE", e[e.CREATE = 2] = "CREATE", e[e.FREETEXT_SIZE = 11] = "FREETEXT_SIZE", e[e.FREETEXT_COLOR = 12] = "FREETEXT_COLOR", e[e.FREETEXT_OPACITY = 13] = "FREETEXT_OPACITY", e[e.INK_COLOR = 21] = "INK_COLOR", e[e.INK_THICKNESS = 22] = "INK_THICKNESS", e[e.INK_OPACITY = 23] = "INK_OPACITY", e[e.HIGHLIGHT_COLOR = 31] = "HIGHLIGHT_COLOR", e[e.HIGHLIGHT_DEFAULT_COLOR = 32] = "HIGHLIGHT_DEFAULT_COLOR", e[e.HIGHLIGHT_THICKNESS = 33] = "HIGHLIGHT_THICKNESS", e[e.HIGHLIGHT_FREE = 34] = "HIGHLIGHT_FREE", e[e.HIGHLIGHT_SHOW_ALL = 35] = "HIGHLIGHT_SHOW_ALL", e))(Nv || {}), Eo = /* @__PURE__ */ ((e) => (e.TEXT_ANNOTATION = "文字批注", e.SIGNATURE = "选择签名", e))(Eo || {});
const QE = { class: "func-container" }, ZE = { class: "set_func" }, JE = {
  key: 1,
  class: "sign"
}, e_ = /* @__PURE__ */ Z({
  __name: "ToolBar",
  props: {
    pdfIframe: {
      type: Object
    },
    getViewerInstance: {
      type: Function
    }
  },
  emits: ["getSaveResult", "actionSwitchFile"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, i = te(null), a = te(!1), l = te(1), s = te([]), c = te([]), u = te(!1), d = te(null), f = te(), p = te(o.pdfIframe), h = Le({
      fontValue: null,
      fontSize: 16,
      fontColor: "#000000"
    }), m = [];
    for (let K = 1; K < 51; K++)
      m.push({
        label: K,
        value: K
      });
    function w() {
      h.fontSize = 16, h.fontValue = null, h.fontColor = "#000000";
    }
    ae(
      () => o.pdfIframe,
      (K) => {
        p.value = K;
      },
      { deep: !0, immediate: !0 }
    );
    function b() {
      return o.getViewerInstance();
    }
    function C(K) {
      a.value = K;
      const { PDFViewerApplication: W } = b();
      return K ? W.pdfSidebar.open() : W.pdfSidebar.close();
    }
    function S(K) {
      x(K);
      const { PDFViewerApplication: W } = b();
      W.eventBus.dispatch("scalechanged", {
        value: l.value
      });
    }
    function x(K) {
      K === "add" ? l.value += 0.25 : l.value -= 0.25, l.value < 0.25 && (l.value = 0.25), l.value > 2 && (l.value = 2);
    }
    function $() {
      const { PDFViewerApplication: K } = b();
      K.eventBus.dispatch("rotatecw");
    }
    function O() {
      I(Vn.STAMP);
    }
    function y() {
      I(Vn.HIGHLIGHT);
    }
    function I(K) {
      const { PDFViewerApplication: W } = b();
      console.log("-------------------test--------", W), W.eventBus.dispatch("switchannotationeditormode", {
        mode: K
      });
    }
    function E(K, W) {
      const { PDFViewerApplication: G } = b();
      G.eventBus.dispatch("switchannotationeditorparams", {
        type: K,
        value: W
      });
    }
    function R() {
      q(!0), f.value = Eo.TEXT_ANNOTATION;
    }
    function _() {
      f.value === Eo.TEXT_ANNOTATION && N(), f.value === Eo.SIGNATURE && F();
    }
    function N() {
      if (h.fontValue) {
        const K = qE(
          h.fontValue,
          h.fontSize,
          h.fontColor
        );
        P(K), w(), q(!1);
      } else
        Dt.warn("请输入批注内容！");
    }
    function F() {
      if (i.value.signIndex) {
        const { signIndex: K } = i.value;
        P(K), q(!1);
      } else
        Dt.warn("请输入选择签名图片！");
    }
    function j() {
      I(Vn.INK);
    }
    function P(K) {
      if (!K) {
        alert("设置失败！");
        return;
      }
      I(Vn.STAMP), E(
        Nv.CREATE,
        KE(K)
      );
    }
    const M = (K, W, G) => {
      if (K) {
        const ee = new FileReader();
        ee.onload = function(re) {
          const ie = re.target.result;
          i.value.images.push(ie);
        }, ee.readAsDataURL(K);
      }
    }, L = () => {
      q(!0), f.value = Eo.SIGNATURE;
    }, H = (K, W, G) => {
      if (K) {
        const ee = new FileReader();
        ee.onload = function(re) {
          const ie = re.target.result;
          d.value = K.name, r("actionSwitchFile", YE(ie));
        }, ee.readAsDataURL(K);
      }
    };
    function A() {
      I(Vn.NONE);
    }
    async function z(K = !0) {
      const W = b();
      console.log("下载文件-----", W);
      let { blob: G, filename: ee } = await W.PDFViewerApplication.save();
      if (console.log("----->二进制流-->", G, ee), K) {
        const re = URL.createObjectURL(G), ie = document.createElement("a");
        ie.download = d.value || ee, ie.href = re, document.body.appendChild(ie), ie.click(), document.body.removeChild(ie), URL.revokeObjectURL(re);
      }
      return r("getSaveResult", { blob: G, filename: ee }), { blob: G, filename: ee };
    }
    function q(K) {
      u.value = K;
    }
    function Y() {
    }
    return t({ saveFile: z }), (K, W) => {
      const G = uo, ee = Ov, re = Yg, ie = Et, X = Zt, B = nt, U = st, ne = Kf("drag");
      return Ze(), tn(
        Ie,
        null,
        [
          Bt((Ze(), tn("div", QE, [
            qn("div", ZE, [
              a.value ? Xn("v-if", !0) : (Ze(), kn(ge(uo), { key: 0 }, {
                title: ce(() => W[10] || (W[10] = [
                  Me("打开侧边栏")
                ])),
                default: ce(() => [
                  v(ge(cc), {
                    class: "anticon",
                    onClick: W[0] || (W[0] = (Q) => C(!0))
                  })
                ]),
                _: 1
                /* STABLE */
              })),
              a.value ? (Ze(), kn(G, { key: 1 }, {
                title: ce(() => W[11] || (W[11] = [
                  Me("关闭侧边栏")
                ])),
                default: ce(() => [
                  v(ge(sc), {
                    class: "anticon",
                    onClick: W[1] || (W[1] = (Q) => C(!1))
                  })
                ]),
                _: 1
                /* STABLE */
              })) : Xn("v-if", !0),
              v(G, null, {
                title: ce(() => W[12] || (W[12] = [
                  Me("导入文件")
                ])),
                default: ce(() => [
                  v(kf, {
                    isShowMsg: !1,
                    fileList: c.value,
                    maxCount: 1,
                    slotType: "self",
                    accept: "application/pdf",
                    onBeforeUpload: H
                  }, {
                    default: ce(() => [
                      v(ge(tc), {
                        style: { "font-size": "16px" },
                        class: "anticon",
                        onClick: K.importPdf
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["fileList"])
                ]),
                _: 1
                /* STABLE */
              }),
              v(G, null, {
                title: ce(() => W[13] || (W[13] = [
                  Me("放大")
                ])),
                default: ce(() => [
                  v(ge(Xs), {
                    class: "anticon",
                    onClick: W[2] || (W[2] = (Q) => S("add"))
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              v(G, null, {
                title: ce(() => W[14] || (W[14] = [
                  Me("缩小")
                ])),
                default: ce(() => [
                  v(ge(qs), {
                    class: "anticon",
                    onClick: W[3] || (W[3] = (Q) => S("minus"))
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              v(G, null, {
                title: ce(() => W[15] || (W[15] = [
                  Me("退出编辑模式")
                ])),
                default: ce(() => [
                  v(ge(ac), {
                    class: "anticon",
                    onClick: A
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              v(G, null, {
                title: ce(() => W[16] || (W[16] = [
                  Me("选择模式")
                ])),
                default: ce(() => [
                  v(ge(uc), {
                    class: "anticon",
                    onClick: O
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              v(G, null, {
                title: ce(() => W[17] || (W[17] = [
                  Me("旋转")
                ])),
                default: ce(() => [
                  v(ge(ks), {
                    class: "anticon",
                    onClick: $
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              v(G, null, {
                title: ce(() => W[18] || (W[18] = [
                  Me("高亮")
                ])),
                default: ce(() => [
                  v(ge(oc), {
                    class: "anticon",
                    onClick: y
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              v(G, null, {
                title: ce(() => W[19] || (W[19] = [
                  Me("输入文本批注")
                ])),
                default: ce(() => [
                  v(ge(rc), {
                    class: "anticon",
                    onClick: R
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              Xn(` <a-tooltip>\r
        <FontSizeOutlined class="anticon" @click="actionSetTextAnnotation2" />\r
        <template #title>文本批注</template>\r
      </a-tooltip> `),
              v(G, null, {
                title: ce(() => W[20] || (W[20] = [
                  Me("手写批注")
                ])),
                default: ce(() => [
                  v(ge(ic), {
                    class: "anticon",
                    onClick: W[4] || (W[4] = (Q) => j())
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              v(G, null, {
                title: ce(() => W[21] || (W[21] = [
                  Me("选择签名")
                ])),
                default: ce(() => [
                  v(ge(nc), {
                    class: "anticon",
                    onClick: L
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              v(G, null, {
                title: ce(() => W[22] || (W[22] = [
                  Me("导出PDF文件")
                ])),
                default: ce(() => [
                  v(ge(ec), {
                    class: "anticon",
                    onClick: z
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              v(G, null, {
                title: ce(() => W[23] || (W[23] = [
                  Me("关闭")
                ])),
                default: ce(() => [
                  v(ge(lc), {
                    class: "anticon",
                    onClick: W[5] || (W[5] = (Q) => void 0)
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ])), [
            [ne]
          ]),
          v(U, {
            width: 600,
            open: u.value,
            "onUpdate:open": W[9] || (W[9] = (Q) => u.value = Q),
            title: f.value,
            onOk: _,
            centered: "",
            bodyStyle: {
              overflowY: "auto",
              overflowX: "hidden",
              maxHeight: "500px",
              padding: "10px"
            }
          }, {
            default: ce(() => [
              f.value == "文字批注" ? (Ze(), kn(X, {
                key: 0,
                model: h,
                name: "basic",
                "label-col": { span: 6 },
                "wrapper-col": { span: 16 },
                autocomplete: "off"
              }, {
                default: ce(() => [
                  v(re, {
                    label: "批注内容",
                    name: "fontValue",
                    rules: [{ required: !0, message: "请输入批注内容!" }]
                  }, {
                    default: ce(() => [
                      v(ee, {
                        value: h.fontValue,
                        "onUpdate:value": W[6] || (W[6] = (Q) => h.fontValue = Q),
                        placeholder: "请输入文字批注"
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  v(re, {
                    label: "字体颜色",
                    name: "fontColor"
                  }, {
                    default: ce(() => [
                      Bt(qn(
                        "input",
                        {
                          type: "color",
                          "onUpdate:modelValue": W[7] || (W[7] = (Q) => h.fontColor = Q)
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [uh, h.fontColor]
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  v(re, {
                    label: "字体大小",
                    name: "fontSize"
                  }, {
                    default: ce(() => [
                      v(ie, {
                        ref: "select",
                        value: h.fontSize,
                        "onUpdate:value": W[8] || (W[8] = (Q) => h.fontSize = Q),
                        style: { width: "120px" },
                        options: m,
                        placeholder: "请选择字号"
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model"])) : (Ze(), tn("div", JE, [
                W[25] || (W[25] = Me(" 手写签名： ")),
                v(
                  XE,
                  {
                    ref_key: "signatureRef",
                    ref: i
                  },
                  {
                    default: ce(() => [
                      v(kf, {
                        isShowMsg: !1,
                        fileList: s.value,
                        maxCount: 1,
                        slotType: "self",
                        accept: "image/*",
                        onBeforeUpload: M
                      }, {
                        default: ce(() => [
                          v(B, { size: "small" }, {
                            default: ce(() => [
                              v(ge(zi)),
                              W[24] || (W[24] = Me(" 上传签名"))
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["fileList"])
                    ]),
                    _: 1
                    /* STABLE */
                  },
                  512
                  /* NEED_PATCH */
                )
              ]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["open", "title"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
}), t_ = /* @__PURE__ */ Vi(e_, [["__scopeId", "data-v-538d12f8"]]), n_ = {
  id: "app-pdf",
  class: "pdf-box"
}, o_ = /* @__PURE__ */ Z({
  name: "ths-pdf",
  __name: "index",
  props: {
    pdfUrl: {
      type: String,
      default: "/test3.pdf"
    },
    showTool: {
      type: Boolean,
      default: !1
    },
    pdfjsPath: {
      type: String,
      default: "/pdfjs/web/viewer.html"
    }
  },
  emits: ["getSaveResult", "actionSearch"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n;
    let i = te(null);
    const a = te(o.pdfUrl), l = te(null), s = te(o.showTool);
    be(() => {
      c(a.value), console.log("llh-pdf----created");
    });
    function c(h) {
      i.value && i.value.parentNode.removeChild(i.value);
      const m = document.createElement("iframe");
      m.src = `${o.pdfjsPath}?file=${encodeURIComponent(h)}`, m.style.width = "100%", m.style.height = "100%", m.onload = () => {
        const { PDFViewerApplication: b } = u();
        console.log("iframe 加载完成", b), b.pdfSidebar.close();
      }, document.querySelector(".pdf-container").appendChild(m), i.value = m;
    }
    function u() {
      if (i.value.contentWindow.document.readyState !== "complete")
        throw new Error("页面尚未加载完成");
      console.log("pdfIframe.value.contentWindow", i.value.contentWindow);
      const { PDFViewerApplication: h, PDFViewerApplicationOptions: m } = i.value.contentWindow;
      return { PDFViewerApplication: h, PDFViewerApplicationOptions: m };
    }
    function d(h) {
      console.log("切换文件", encodeURIComponent(h)), c(h);
    }
    function f(h) {
      const { PDFViewerApplication: m } = u();
      m.eventBus.dispatch("find", {
        type: "",
        query: h,
        highlightAll: !0
      });
    }
    function p(h) {
      if (h)
        r("getSaveResult", h);
      else
        return l.value.saveFile();
    }
    return t({ getSaveResult: p, actionSearch: f }), (h, m) => (Ze(), tn("div", n_, [
      m[0] || (m[0] = qn(
        "div",
        { class: "pdf-container" },
        [
          Xn(' <iframe src="pdfjs/web/viewer.html?file=compressed.tracemonkey-pldi-09.pdf" width="100%" frameborder="0"></iframe> ')
        ],
        -1
        /* HOISTED */
      )),
      s.value ? (Ze(), kn(t_, {
        key: 0,
        ref_key: "toolbarRef",
        ref: l,
        pdfIframe: ge(i),
        onGetSaveResult: p,
        onActionSwitchFile: d,
        getViewerInstance: u
      }, null, 8, ["pdfIframe"])) : Xn("v-if", !0)
    ]));
  }
}), El = /* @__PURE__ */ Vi(o_, [["__scopeId", "data-v-ebf1bf31"]]), Lv = {
  mounted(e) {
    e.style.cursor = "move", e.onmousedown = function(t) {
      const n = t.pageX - e.offsetLeft, o = t.pageY - e.offsetTop;
      return document.onmousemove = function(r) {
        let i = r.pageX - n, a = r.pageY - o;
        const l = document.body.clientWidth - e.offsetWidth, s = document.body.clientHeight - e.offsetHeight;
        i < 0 && (i = 0), a < 0 && (a = 0), i > l && (i = l), a > s && (a = s), e.style.left = i + "px", e.style.top = a + "px";
      }, document.onmouseup = function() {
        document.onmousemove = null, document.onmouseup = null;
      }, !1;
    };
  }
}, r_ = function(e) {
  e.component(El.name, El), e.directive("drag", Lv);
}, g_ = {
  install: r_,
  ThsPDF: El,
  dragDirective: Lv
};
export {
  g_ as default
};
