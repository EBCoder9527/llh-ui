import { Fragment as Ie, isVNode as uo, Comment as ih, Text as kf, defineComponent as Z, reactive as Le, getCurrentInstance as Ut, onMounted as be, onUpdated as Pn, onUnmounted as Zo, watch as ae, computed as T, inject as Ee, provide as _e, ref as te, unref as ve, shallowRef as X, watchEffect as Pe, onBeforeUnmount as Ae, triggerRef as qf, createVNode as v, h as Zn, Transition as Gt, withDirectives as Bt, resolveDirective as Kf, cloneVNode as Jo, render as on, nextTick as Fe, toRef as Ct, withModifiers as bc, vShow as fo, onBeforeMount as ah, Teleport as Yf, createTextVNode as Me, isRef as Qf, toRefs as lh, toRaw as rn, onBeforeUpdate as Zf, TransitionGroup as ai, openBlock as at, createBlock as To, withCtx as ce, renderSlot as Ma, createCommentVNode as Eo, createElementBlock as tn, createElementVNode as Xn, renderList as sh, normalizeClass as wc, vModelText as ch } from "vue";
function Lo(e) {
  "@babel/helpers - typeof";
  return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lo(e);
}
function uh(e, t) {
  if (Lo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t || "default");
    if (Lo(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dh(e) {
  var t = uh(e, "string");
  return Lo(t) == "symbol" ? t : t + "";
}
function fh(e, t, n) {
  return (t = dh(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Sc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sc(Object(n), !0).forEach(function(o) {
      fh(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sc(Object(n)).forEach(function(o) {
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
const ph = (e) => typeof e == "function", mh = Array.isArray, gh = (e) => typeof e == "string", vh = (e) => e !== null && typeof e == "object", hh = /^on[^a-z]/, yh = (e) => hh.test(e), Jf = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, bh = /-(\w)/g, ep = Jf((e) => e.replace(bh, (t, n) => n ? n.toUpperCase() : "")), wh = /\B([A-Z])/g, Sh = Jf((e) => e.replace(wh, "-$1").toLowerCase()), xh = Object.prototype.hasOwnProperty, xc = (e, t) => xh.call(e, t);
function Ch(e, t, n, o) {
  const r = e[n];
  if (r != null) {
    const i = xc(r, "default");
    if (i && o === void 0) {
      const a = r.default;
      o = r.type !== Function && ph(a) ? a() : a;
    }
    r.type === Boolean && (!xc(t, n) && !i ? o = !1 : o === "" && (o = !0));
  }
  return o;
}
function Wn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e ?? n;
}
function $h(e) {
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
      if (gh(n))
        e.push(n);
      else if (mh(n))
        for (let o = 0; o < n.length; o++) {
          const r = oe(n[o]);
          r && e.push(r);
        }
      else if (vh(n))
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
}(), Oh = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Wr) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Ph = 2;
function Ih(e, t) {
  var n = !1, o = !1, r = 0;
  function i() {
    n && (n = !1, e()), o && l();
  }
  function a() {
    Oh(i);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - r < Ph)
        return;
      o = !0;
    } else
      n = !0, o = !1, setTimeout(a, t);
    r = s;
  }
  return l;
}
var Th = 20, Eh = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], _h = typeof MutationObserver < "u", Ah = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ih(this.refresh.bind(this), Th);
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
      !Ra || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), _h ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ra || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, o = n === void 0 ? "" : n, r = Eh.some(function(i) {
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
}, Jn = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Wr;
}, op = li(0, 0, 0, 0);
function Ur(e) {
  return parseFloat(e) || 0;
}
function Cc(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(o, r) {
    var i = e["border-" + r + "-width"];
    return o + Ur(i);
  }, 0);
}
function Mh(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, o = 0, r = t; o < r.length; o++) {
    var i = r[o], a = e["padding-" + i];
    n[i] = Ur(a);
  }
  return n;
}
function Rh(e) {
  var t = e.getBBox();
  return li(0, 0, t.width, t.height);
}
function Fh(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return op;
  var o = Jn(e).getComputedStyle(e), r = Mh(o), i = r.left + r.right, a = r.top + r.bottom, l = Ur(o.width), s = Ur(o.height);
  if (o.boxSizing === "border-box" && (Math.round(l + i) !== t && (l -= Cc(o, "left", "right") + i), Math.round(s + a) !== n && (s -= Cc(o, "top", "bottom") + a)), !Dh(e)) {
    var c = Math.round(l + i) - t, u = Math.round(s + a) - n;
    Math.abs(c) !== 1 && (l -= c), Math.abs(u) !== 1 && (s -= u);
  }
  return li(r.left, r.top, l, s);
}
var Nh = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Jn(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Jn(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Dh(e) {
  return e === Jn(e).document.documentElement;
}
function Lh(e) {
  return Ra ? Nh(e) ? Rh(e) : Fh(e) : op;
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
var jh = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = li(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Lh(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Bh = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var o = Hh(n);
      np(this, { target: t, contentRect: o });
    }
    return e;
  }()
), zh = (
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
        if (!(t instanceof Jn(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new jh(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Jn(t).Element))
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
          return new Bh(o.target, o.broadcastRect());
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
      var n = Ah.getInstance(), o = new zh(t, n, this);
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
const Vh = (e) => e != null && e !== "", Be = (e, t) => {
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
}, Wh = (e) => {
  const t = Object.keys(e), n = {}, o = {}, r = {};
  for (let i = 0, a = t.length; i < a; i++) {
    const l = t[i];
    yh(l) ? (n[l[2].toLowerCase() + l.slice(3)] = e[l], o[l] = e[l]) : r[l] = e[l];
  }
  return {
    onEvents: o,
    events: n,
    extraAttrs: r
  };
}, Uh = function() {
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
}, Gh = (e, t) => e[t] !== void 0, Xh = Symbol("skipFlatten"), Ze = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = Array.isArray(e) ? e : [e], o = [];
  return n.forEach((r) => {
    Array.isArray(r) ? o.push(...Ze(r, t)) : r && r.type === Ie ? r.key === Xh ? o.push(r) : o.push(...Ze(r.children, t)) : r && uo(r) ? t && !lp(r) ? o.push(r) : t || o.push(r) : Vh(r) && o.push(r);
  }), o;
}, kh = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (uo(e))
    return e.type === Ie ? t === "default" ? Ze(e.children) : [] : e.children && e.children[t] ? Ze(e.children[t](n)) : [];
  {
    const o = e.$slots[t] && e.$slots[t](n);
    return Ze(o);
  }
}, jt = (e) => {
  var t;
  let n = ((t = e == null ? void 0 : e.vnode) === null || t === void 0 ? void 0 : t.el) || e && (e.$el || e);
  for (; n && !n.tagName; )
    n = n.nextSibling;
  return n;
}, qh = (e) => {
  const t = {};
  if (e.$ && e.$.vnode) {
    const n = e.$.vnode.props || {};
    Object.keys(e.$props).forEach((o) => {
      const r = e.$props[o], i = Sh(o);
      (r !== void 0 || i in n) && (t[o] = r);
    });
  } else if (uo(e) && typeof e.type == "object") {
    const n = e.props || {}, o = {};
    Object.keys(n).forEach((i) => {
      o[ep(i)] = n[i];
    });
    const r = e.type.props || {};
    Object.keys(r).forEach((i) => {
      const a = Ch(r, o, i, o[i]);
      (a !== void 0 || i in o) && (t[i] = a);
    });
  }
  return t;
}, Kh = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, r;
  if (e.$) {
    const i = e[t];
    if (i !== void 0)
      return typeof i == "function" && o ? i(n) : i;
    r = e.$slots[t], r = o && r ? r(n) : r;
  } else if (uo(e)) {
    const i = e.props && e.props[t];
    if (i !== void 0 && e.props !== null)
      return typeof i == "function" && o ? i(n) : i;
    e.type === Ie ? r = e.children : e.children && e.children[t] && (r = e.children[t], r = o && r ? r(n) : r);
  }
  return Array.isArray(r) && (r = Ze(r), r = r.length === 1 ? r[0] : r, r = r.length === 0 ? void 0 : r), r;
};
function $c() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = {};
  return e.$ ? n = g(g({}, n), e.$attrs) : n = g(g({}, n), e.props), Wh(n)[t ? "onEvents" : "events"];
}
function Yh(e, t) {
  let o = ((uo(e) ? e.props : e.$attrs) || {}).style || {};
  return typeof o == "string" && (o = Uh(o, t)), o;
}
function Qh(e) {
  return e.length === 1 && e[0].type === Ie;
}
function lp(e) {
  return e && (e.type === ih || e.type === Ie && e.children.length === 0 || e.type === kf && e.children.trim() === "");
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
function Zh(e, t) {
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
        onResize: f
      } = e, d = u[0].target, {
        width: p,
        height: h
      } = d.getBoundingClientRect(), {
        offsetWidth: m,
        offsetHeight: w
      } = d, b = Math.floor(p), C = Math.floor(h);
      if (o.width !== b || o.height !== C || o.offsetWidth !== m || o.offsetHeight !== w) {
        const S = {
          width: b,
          height: C,
          offsetWidth: m,
          offsetHeight: w
        };
        g(o, S), f && Promise.resolve().then(() => {
          f(g(g({}, S), {
            offsetWidth: m,
            offsetHeight: w
          }), d);
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
      const f = jt(s);
      f !== r && (a(), r = f), !i && f && (i = new ap(l), i.observe(f));
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
let Oc = 0;
const El = /* @__PURE__ */ new Map();
function up(e) {
  El.delete(e);
}
function $e(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Oc += 1;
  const n = Oc;
  function o(r) {
    if (r === 0)
      up(n), e();
    else {
      const i = sp(() => {
        o(r - 1);
      });
      El.set(n, i);
    }
  }
  return o(t), n;
}
$e.cancel = (e) => {
  const t = El.get(e);
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
function eo(e) {
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
const _l = "anticon", dp = Symbol("GlobalFormContextKey"), Jh = (e) => {
  _e(dp, e);
}, e0 = () => Ee(dp, {
  validateMessages: T(() => {
  })
}), t0 = () => ({
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
}), Al = Symbol("configProvider"), fp = {
  getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
  iconPrefixCls: T(() => _l),
  getPopupContainer: T(() => () => document.body),
  direction: T(() => "ltr")
}, ci = () => Ee(Al, fp), n0 = (e) => _e(Al, e), pp = Symbol("DisabledContextKey"), Tn = () => Ee(pp, te(void 0)), mp = (e) => {
  const t = Tn();
  return _e(pp, T(() => {
    var n;
    return (n = e.value) !== null && n !== void 0 ? n : t.value;
  })), e;
}, o0 = {
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
}, r0 = {
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
}, Pc = {
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
  }, r0),
  timePickerLocale: g({}, gp)
}, ot = "${label} is not a valid ${type}", Mt = {
  locale: "en",
  Pagination: o0,
  DatePicker: Pc,
  TimePicker: gp,
  Calendar: Pc,
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
        string: ot,
        method: ot,
        array: ot,
        object: ot,
        number: ot,
        date: ot,
        boolean: ot,
        integer: ot,
        float: ot,
        regexp: ot,
        email: ot,
        url: ot,
        hex: ot
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
function po(e, t, n) {
  const o = Ee("localeData", {});
  return [T(() => {
    const {
      antLocale: i
    } = o, a = ve(t) || Mt[e || "global"], l = e && i ? i[e] : {};
    return g(g(g({}, typeof a == "function" ? a() : a), l || {}), ve(n) || {});
  })];
}
function Ml(e) {
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
const Ic = "%";
class i0 {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.instanceId = t;
  }
  get(t) {
    return this.cache.get(Array.isArray(t) ? t.join(Ic) : t) || null;
  }
  update(t, n) {
    const o = Array.isArray(t) ? t.join(Ic) : t, r = this.cache.get(o), i = n(r);
    i === null ? this.cache.delete(o) : this.cache.set(o, i);
  }
}
const hp = "data-token-hash", bn = "data-css-hash", a0 = "data-cache-path", Gn = "__cssinjs_instance__";
function Ho() {
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
  return new i0(e);
}
const yp = Symbol("StyleContextKey"), l0 = () => {
  var e, t, n;
  const o = Ut();
  let r;
  if (o && o.appContext) {
    const i = (n = (t = (e = o.appContext) === null || e === void 0 ? void 0 : e.config) === null || t === void 0 ? void 0 : t.globalProperties) === null || n === void 0 ? void 0 : n.__ANTDV_CSSINJS_CACHE__;
    i ? r = i : (r = Ho(), o.appContext.config.globalProperties && (o.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = r));
  } else
    r = Ho();
  return r;
}, bp = {
  cache: Ho(),
  defaultCache: !0,
  hashPriority: "low"
}, ui = () => {
  const e = l0();
  return Ee(yp, X(g(g({}, bp), {
    cache: e
  })));
}, s0 = (e) => {
  const t = ui(), n = X(g(g({}, bp), {
    cache: Ho()
  }));
  return ae([() => ve(e), t], () => {
    const o = g({}, t.value), r = ve(e);
    Object.keys(r).forEach((a) => {
      const l = r[a];
      r[a] !== void 0 && (o[a] = l);
    });
    const {
      cache: i
    } = r;
    o.cache = o.cache || Ho(), o.defaultCache = !i && t.value.defaultCache, n.value = o;
  }, {
    immediate: !0
  }), _e(yp, n), n;
}, c0 = () => ({
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
  transformers: eo(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: eo()
});
In(Z({
  name: "AStyleProvider",
  inheritAttrs: !1,
  props: c0(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return s0(e), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
}));
function u0() {
  return !1;
}
let Fa = !1;
function d0() {
  return Fa;
}
const f0 = process.env.NODE_ENV === "production" ? u0 : d0;
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
  const r = ui(), i = X(""), a = X();
  Pe(() => {
    i.value = [e, ...t.value].join("%");
  });
  const l = f0(), s = (c) => {
    r.value.cache.update(c, (u) => {
      const [f = 0, d] = u || [];
      return f - 1 === 0 ? (o == null || o(d, !1), null) : [f - 1, d];
    });
  };
  return ae(i, (c, u) => {
    u && s(u), r.value.cache.update(c, (f) => {
      const [d = 0, p] = f || [];
      let h = p;
      process.env.NODE_ENV !== "production" && p && l && (o == null || o(h, l), h = null);
      const m = h || n();
      return [d + 1, m];
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
const Tc = "data-vc-order", p0 = "vc-util-key", Na = /* @__PURE__ */ new Map();
function Sp() {
  let {
    mark: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return e ? e.startsWith("data-") ? e : `data-${e}` : p0;
}
function di(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function m0(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function xp(e) {
  return Array.from((Na.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function Cp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!yt())
    return null;
  const {
    csp: n,
    prepend: o
  } = t, r = document.createElement("style");
  r.setAttribute(Tc, m0(o)), n != null && n.nonce && (r.nonce = n == null ? void 0 : n.nonce), r.innerHTML = e;
  const i = di(t), {
    firstChild: a
  } = i;
  if (o) {
    if (o === "queue") {
      const l = xp(i).filter((s) => ["prepend", "prependQueue"].includes(s.getAttribute(Tc)));
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
function Xr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = $p(e, t);
  n && di(t).removeChild(n);
}
function g0(e, t) {
  const n = Na.get(e);
  if (!n || !Qt(document, n)) {
    const o = Cp("", t), {
      parentNode: r
    } = o;
    Na.set(e, r), e.removeChild(o);
  }
}
function jo(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var o, r, i;
  const a = di(n);
  g0(a, n);
  const l = $p(t, n);
  if (l)
    return !((o = n.csp) === null || o === void 0) && o.nonce && l.nonce !== ((r = n.csp) === null || r === void 0 ? void 0 : r.nonce) && (l.nonce = (i = n.csp) === null || i === void 0 ? void 0 : i.nonce), l.innerHTML !== e && (l.innerHTML = e), l;
  const s = Cp(e, n);
  return s.setAttribute(Sp(n), t), s;
}
function v0(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
class to {
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
      if (this.size() + 1 > to.MAX_CACHE_SIZE + to.MAX_CACHE_OFFSET) {
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
      return this.keys = this.keys.filter((n) => !v0(n, t)), this.deleteByPath(this.cache, t);
  }
}
to.MAX_CACHE_SIZE = 20;
to.MAX_CACHE_OFFSET = 5;
let Da = {};
function no(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error(`Warning: ${t}`);
}
function h0(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.warn(`Note: ${t}`);
}
function y0() {
  Da = {};
}
function Op(e, t, n) {
  !t && !Da[n] && (e(!1, n), Da[n] = !0);
}
function mt(e, t) {
  Op(no, e, t);
}
function Ec(e, t) {
  Op(h0, e, t);
}
function b0() {
}
let Je = b0;
process.env.NODE_ENV !== "production" && (Je = (e, t, n) => {
  mt(e, `[ant-design-vue: ${t}] ${n}`), process.env.NODE_ENV === "test" && y0();
});
let _c = 0;
class Pp {
  constructor(t) {
    this.derivatives = Array.isArray(t) ? t : [t], this.id = _c, t.length === 0 && Je(t.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function."), _c += 1;
  }
  getDerivativeToken(t) {
    return this.derivatives.reduce((n, o) => o(t, n), void 0);
  }
}
const qi = new to();
function Ip(e) {
  const t = Array.isArray(e) ? e : [e];
  return qi.has(t) || qi.set(t, new Pp(t)), qi.get(t);
}
const Ac = /* @__PURE__ */ new WeakMap();
function kr(e) {
  let t = Ac.get(e) || "";
  return t || (Object.keys(e).forEach((n) => {
    const o = e[n];
    t += n, o instanceof Pp ? t += o.id : o && typeof o == "object" ? t += kr(o) : t += o;
  }), Ac.set(e, t)), t;
}
function w0(e, t) {
  return Ml(`${t}_${kr(e)}`);
}
const _o = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ""), Tp = "_bAmBoO_";
function S0(e, t, n) {
  var o, r;
  if (yt()) {
    jo(e, _o);
    const i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t == null || t(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    const a = n ? n(i) : (o = getComputedStyle(i).content) === null || o === void 0 ? void 0 : o.includes(Tp);
    return (r = i.parentNode) === null || r === void 0 || r.removeChild(i), Xr(_o), a;
  }
  return !1;
}
let Ki;
function x0() {
  return Ki === void 0 && (Ki = S0(`@layer ${_o} { .${_o} { content: "${Tp}"!important; } }`, (e) => {
    e.className = _o;
  })), Ki;
}
const Mc = {}, C0 = process.env.NODE_ENV === "production", $0 = process.env.NODE_ENV === "prerender", O0 = !C0 && !$0 ? "css-dev-only-do-not-override" : "css", mn = /* @__PURE__ */ new Map();
function P0(e) {
  mn.set(e, (mn.get(e) || 0) + 1);
}
function I0(e, t) {
  typeof document < "u" && document.querySelectorAll(`style[${hp}="${e}"]`).forEach((o) => {
    var r;
    o[Gn] === t && ((r = o.parentNode) === null || r === void 0 || r.removeChild(o));
  });
}
const T0 = 0;
function E0(e, t) {
  mn.set(e, (mn.get(e) || 0) - 1);
  const n = Array.from(mn.keys()), o = n.filter((r) => (mn.get(r) || 0) <= 0);
  n.length - o.length > T0 && o.forEach((r) => {
    I0(r, t), mn.delete(r);
  });
}
const _0 = (e, t, n, o) => {
  const r = n.getDerivativeToken(e);
  let i = g(g({}, r), t);
  return o && (i = o(i)), i;
};
function A0(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : te({});
  const o = ui(), r = T(() => g({}, ...t.value)), i = T(() => kr(r.value)), a = T(() => kr(n.value.override || Mc));
  return wp("token", T(() => [n.value.salt || "", e.value.id, i.value, a.value]), () => {
    const {
      salt: s = "",
      override: c = Mc,
      formatToken: u,
      getComputedToken: f
    } = n.value, d = f ? f(r.value, c, e.value) : _0(r.value, c, e.value, u), p = w0(d, s);
    d._tokenKey = p, P0(p);
    const h = `${O0}-${Ml(p)}`;
    return d._hashId = h, [d, h];
  }, (s) => {
    var c;
    E0(s[0]._tokenKey, (c = o.value) === null || c === void 0 ? void 0 : c.cache.instanceId);
  });
}
var M0 = {
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
}, Ep = "comm", _p = "rule", Ap = "decl", R0 = "@import", F0 = "@keyframes", N0 = "@layer", Mp = Math.abs, Rl = String.fromCharCode;
function Rp(e) {
  return e.trim();
}
function Er(e, t, n) {
  return e.replace(t, n);
}
function D0(e, t, n) {
  return e.indexOf(t, n);
}
function Bo(e, t) {
  return e.charCodeAt(t) | 0;
}
function oo(e, t, n) {
  return e.slice(t, n);
}
function Tt(e) {
  return e.length;
}
function L0(e) {
  return e.length;
}
function ur(e, t) {
  return t.push(e), e;
}
var fi = 1, ro = 1, Fp = 0, bt = 0, De = 0, mo = "";
function Fl(e, t, n, o, r, i, a, l) {
  return { value: e, root: t, parent: n, type: o, props: r, children: i, line: fi, column: ro, length: a, return: "", siblings: l };
}
function H0() {
  return De;
}
function j0() {
  return De = bt > 0 ? Bo(mo, --bt) : 0, ro--, De === 10 && (ro = 1, fi--), De;
}
function $t() {
  return De = bt < Fp ? Bo(mo, bt++) : 0, ro++, De === 10 && (ro = 1, fi++), De;
}
function Jt() {
  return Bo(mo, bt);
}
function _r() {
  return bt;
}
function pi(e, t) {
  return oo(mo, e, t);
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
function B0(e) {
  return fi = ro = 1, Fp = Tt(mo = e), bt = 0, [];
}
function z0(e) {
  return mo = "", e;
}
function Yi(e) {
  return Rp(pi(bt - 1, La(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function V0(e) {
  for (; (De = Jt()) && De < 33; )
    $t();
  return zo(e) > 2 || zo(De) > 3 ? "" : " ";
}
function W0(e, t) {
  for (; --t && $t() && !(De < 48 || De > 102 || De > 57 && De < 65 || De > 70 && De < 97); )
    ;
  return pi(e, _r() + (t < 6 && Jt() == 32 && $t() == 32));
}
function La(e) {
  for (; $t(); )
    switch (De) {
      case e:
        return bt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && La(De);
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
function U0(e, t) {
  for (; $t() && e + De !== 57; )
    if (e + De === 84 && Jt() === 47)
      break;
  return "/*" + pi(t, bt - 1) + "*" + Rl(e === 47 ? e : $t());
}
function G0(e) {
  for (; !zo(Jt()); )
    $t();
  return pi(e, bt);
}
function X0(e) {
  return z0(Ar("", null, null, null, [""], e = B0(e), 0, [0], e));
}
function Ar(e, t, n, o, r, i, a, l, s) {
  for (var c = 0, u = 0, f = a, d = 0, p = 0, h = 0, m = 1, w = 1, b = 1, C = 0, S = "", x = r, $ = i, O = o, y = S; w; )
    switch (h = C, C = $t()) {
      case 40:
        if (h != 108 && Bo(y, f - 1) == 58) {
          D0(y += Er(Yi(C), "&", "&\f"), "&\f", Mp(c ? l[c - 1] : 0)) != -1 && (b = -1);
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
        y += V0(h);
        break;
      case 92:
        y += W0(_r() - 1, 7);
        continue;
      case 47:
        switch (Jt()) {
          case 42:
          case 47:
            ur(k0(U0($t(), _r()), t, n, s), s), (zo(h || 1) == 5 || zo(Jt() || 1) == 5) && Tt(y) && oo(y, -1, void 0) !== " " && (y += " ");
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
            b == -1 && (y = Er(y, /\f/g, "")), p > 0 && (Tt(y) - f || m === 0 && h === 47) && ur(p > 32 ? Fc(y + ";", o, n, f - 1, s) : Fc(Er(y, " ", "") + ";", o, n, f - 2, s), s);
            break;
          case 59:
            y += ";";
          default:
            if (ur(O = Rc(y, t, n, c, u, r, l, S, x = [], $ = [], f, i), i), C === 123)
              if (u === 0)
                Ar(y, t, O, O, x, i, f, l, $);
              else
                switch (d === 99 && Bo(y, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ar(e, O, O, o && ur(Rc(e, O, O, 0, 0, r, l, S, r, x = [], f, $), $), r, $, f, l, o ? x : $);
                    break;
                  default:
                    Ar(y, O, O, O, [""], $, 0, l, $);
                }
        }
        c = u = p = 0, m = b = 1, S = y = "", f = a;
        break;
      case 58:
        f = 1 + Tt(y), p = h;
      default:
        if (m < 1) {
          if (C == 123)
            --m;
          else if (C == 125 && m++ == 0 && j0() == 125)
            continue;
        }
        switch (y += Rl(C), C * m) {
          case 38:
            b = u > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            l[c++] = (Tt(y) - 1) * b, b = 1;
            break;
          case 64:
            Jt() === 45 && (y += Yi($t())), d = Jt(), u = f = Tt(S = y += G0(_r())), C++;
            break;
          case 45:
            h === 45 && Tt(y) == 2 && (m = 0);
        }
    }
  return i;
}
function Rc(e, t, n, o, r, i, a, l, s, c, u, f) {
  for (var d = r - 1, p = r === 0 ? i : [""], h = L0(p), m = 0, w = 0, b = 0; m < o; ++m)
    for (var C = 0, S = oo(e, d + 1, d = Mp(w = a[m])), x = e; C < h; ++C)
      (x = Rp(w > 0 ? p[C] + " " + S : Er(S, /&\f/g, p[C]))) && (s[b++] = x);
  return Fl(e, t, n, r === 0 ? _p : l, s, c, u, f);
}
function k0(e, t, n, o) {
  return Fl(e, t, n, Ep, Rl(H0()), oo(e, 2, -2), 0, o);
}
function Fc(e, t, n, o, r) {
  return Fl(e, t, n, Ap, oo(e, 0, o), oo(e, o + 1, -1), o, r);
}
function Ha(e, t) {
  for (var n = "", o = 0; o < e.length; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function q0(e, t, n, o) {
  switch (e.type) {
    case N0:
      if (e.children.length) break;
    case R0:
    case Ap:
      return e.return = e.return || e.value;
    case Ep:
      return "";
    case F0:
      return e.return = e.value + "{" + Ha(e.children, o) + "}";
    case _p:
      if (!Tt(e.value = e.props.join(","))) return "";
  }
  return Tt(n = Ha(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function Np(e, t) {
  const {
    path: n,
    parentSelectors: o
  } = t;
  mt(!1, `[Ant Design Vue CSS-in-JS] ${n ? `Error in '${n}': ` : ""}${e}${o.length ? ` Selector info: ${o.join(" -> ")}` : ""}`);
}
const K0 = (e, t, n) => {
  if (e === "content") {
    const o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    (typeof t != "string" || ["normal", "none", "initial", "inherit", "unset"].indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Np(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${t}"'\`.`, n);
  }
}, Y0 = (e, t, n) => {
  e === "animation" && n.hashId && t !== "none" && Np(`You seem to be using hashed animation '${t}', in which case 'animationName' with Keyframe as value is recommended.`, n);
}, Nc = "data-ant-cssinjs-cache-path", Q0 = "_FILE_STYLE__";
let wn, Dp = !0;
function Z0() {
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
    o && (Dp = !1, (e = o.parentNode) === null || e === void 0 || e.removeChild(o)), document.body.removeChild(t);
  }
}
function J0(e) {
  return Z0(), !!wn[e];
}
function ey(e) {
  const t = wn[e];
  let n = null;
  if (t && yt())
    if (Dp)
      n = Q0;
    else {
      const o = document.querySelector(`style[${bn}="${wn[e]}"]`);
      o ? n = o.innerHTML : delete wn[e];
    }
  return [n, t];
}
const Dc = yt(), Lp = "_skip_check_", Hp = "_multi_value_";
function Lc(e) {
  return Ha(X0(e), q0).replace(/\{%%%\:[^;];}/g, ";");
}
function ty(e) {
  return typeof e == "object" && e && (Lp in e || Hp in e);
}
function ny(e, t, n) {
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
const ja = /* @__PURE__ */ new Set();
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
  let f = "", d = {};
  function p(w) {
    const b = w.getName(i);
    if (!d[b]) {
      const [C] = Ba(w.style, t, {
        root: !1,
        parentSelectors: r
      });
      d[b] = `@keyframes ${w.getName(i)}${C}`;
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
      f += `${b}
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
        if (typeof $ == "object" && $ && (S !== "animationName" || !$._keyframe) && !ty($)) {
          let O = !1, y = S.trim(), I = !1;
          (n || o) && i ? y.startsWith("@") ? O = !0 : y = ny(S, i, s) : n && !i && (y === "&" || y === "") && (y = "", I = !0);
          const [E, R] = Ba($, t, {
            root: I,
            injectHash: O,
            parentSelectors: [...r, y]
          });
          d = g(g({}, d), R), f += `${y}${E}`;
        } else {
          let O = function(I, E) {
            process.env.NODE_ENV !== "production" && (typeof $ != "object" || !($ != null && $[Lp])) && [K0, Y0, ...u].forEach((D) => D(I, E, {
              path: l,
              hashId: i,
              parentSelectors: r
            }));
            const R = I.replace(/[A-Z]/g, (D) => `-${D.toLowerCase()}`);
            let _ = E;
            !M0[I] && typeof _ == "number" && _ !== 0 && (_ = `${_}px`), I === "animationName" && (E != null && E._keyframe) && (p(E), _ = E.getName(i)), f += `${R}:${_};`;
          };
          const y = (x = $ == null ? void 0 : $.value) !== null && x !== void 0 ? x : $;
          typeof $ == "object" && ($ != null && $[Hp]) && Array.isArray(y) ? y.forEach((I) => {
            O(S, I);
          }) : O(S, y);
        }
      });
    }
  }), !n)
    f = `{${f}}`;
  else if (a && x0()) {
    const w = a.split(",");
    f = `@layer ${w[w.length - 1].trim()} {${f}}`, w.length > 1 && (f = `@layer ${a}{%%%:%}${f}`);
  }
  return [f, d];
};
function oy(e, t) {
  return Ml(`${e.join("%")}${t}`);
}
function za(e, t) {
  const n = ui(), o = T(() => e.value.token._tokenKey), r = T(() => [o.value, ...e.value.path]);
  let i = Dc;
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
        order: f = 0
      } = e.value, d = r.value.join("|");
      if (J0(d)) {
        const [y, I] = ey(d);
        if (y)
          return [y, o.value, I, {}, u, f];
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
      }), $ = Lc(S), O = oy(r.value, $);
      if (i) {
        const y = {
          mark: bn,
          prepend: "queue",
          attachTo: m,
          priority: f
        }, I = typeof c == "function" ? c() : c;
        I && (y.csp = {
          nonce: I
        });
        const E = jo($, O, y);
        E[Gn] = C.instanceId, E.setAttribute(hp, o.value), process.env.NODE_ENV !== "production" && E.setAttribute(a0, r.value.join("|")), Object.keys(x).forEach((R) => {
          ja.has(R) || (ja.add(R), jo(Lc(x[R]), `_effect-${R}`, {
            mark: bn,
            prepend: "queue",
            attachTo: m
          }));
        });
      }
      return [$, o.value, O, x, u, f];
    },
    // Remove cache if no need
    (a, l) => {
      let [, , s] = a;
      (l || n.value.autoClear) && Dc && Xr(s, {
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
const ry = "4.2.6", Vo = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function We(e, t) {
  iy(e) && (e = "100%");
  var n = ay(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function dr(e) {
  return Math.min(1, Math.max(0, e));
}
function iy(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function ay(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function jp(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function fr(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function vn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function ly(e, t, n) {
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
function sy(e, t, n) {
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
function cy(e, t, n) {
  e = We(e, 360) * 6, t = We(t, 100), n = We(n, 100);
  var o = Math.floor(e), r = e - o, i = n * (1 - t), a = n * (1 - r * t), l = n * (1 - (1 - r) * t), s = o % 6, c = [n, a, i, i, l, n][s], u = [l, n, n, a, i, i][s], f = [i, i, l, n, n, a][s];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function Wa(e, t, n, o) {
  var r = [
    vn(Math.round(e).toString(16)),
    vn(Math.round(t).toString(16)),
    vn(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function uy(e, t, n, o, r) {
  var i = [
    vn(Math.round(e).toString(16)),
    vn(Math.round(t).toString(16)),
    vn(Math.round(n).toString(16)),
    vn(dy(o))
  ];
  return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function dy(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function jc(e) {
  return it(e) / 255;
}
function it(e) {
  return parseInt(e, 16);
}
function fy(e) {
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
  return typeof e == "string" && (e = gy(e)), typeof e == "object" && (Dt(e.r) && Dt(e.g) && Dt(e.b) ? (t = ly(e.r, e.g, e.b), a = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Dt(e.h) && Dt(e.s) && Dt(e.v) ? (o = fr(e.s), r = fr(e.v), t = cy(e.h, o, r), a = !0, l = "hsv") : Dt(e.h) && Dt(e.s) && Dt(e.l) && (o = fr(e.s), i = fr(e.l), t = sy(e.h, o, i), a = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = jp(n), {
    ok: a,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var py = "[-\\+]?\\d+%?", my = "[-\\+]?\\d*\\.\\d+%?", en = "(?:".concat(my, ")|(?:").concat(py, ")"), Zi = "[\\s|\\(]+(".concat(en, ")[,|\\s]+(").concat(en, ")[,|\\s]+(").concat(en, ")\\s*\\)?"), Ji = "[\\s|\\(]+(".concat(en, ")[,|\\s]+(").concat(en, ")[,|\\s]+(").concat(en, ")[,|\\s]+(").concat(en, ")\\s*\\)?"), xt = {
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
function gy(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Ua[e])
    e = Ua[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = xt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = xt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = xt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = xt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = xt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = xt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = xt.hex8.exec(e), n ? {
    r: it(n[1]),
    g: it(n[2]),
    b: it(n[3]),
    a: jc(n[4]),
    format: t ? "name" : "hex8"
  } : (n = xt.hex6.exec(e), n ? {
    r: it(n[1]),
    g: it(n[2]),
    b: it(n[3]),
    format: t ? "name" : "hex"
  } : (n = xt.hex4.exec(e), n ? {
    r: it(n[1] + n[1]),
    g: it(n[2] + n[2]),
    b: it(n[3] + n[3]),
    a: jc(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = xt.hex3.exec(e), n ? {
    r: it(n[1] + n[1]),
    g: it(n[2] + n[2]),
    b: it(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Dt(e) {
  return !!xt.CSS_UNIT.exec(String(e));
}
var je = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = fy(t)), this.originalInput = t;
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
      return this.a = jp(t), this.roundA = Math.round(100 * this.a) / 100, this;
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
      return t === void 0 && (t = !1), uy(this.r, this.g, this.b, this.a, t);
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
), pr = 2, Bc = 0.16, vy = 0.05, hy = 0.05, yy = 0.15, Bp = 5, zp = 4, by = [{
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
function zc(e) {
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
function wy(e, t, n) {
  var o = n / 100, r = {
    r: (t.r - e.r) * o + e.r,
    g: (t.g - e.g) * o + e.g,
    b: (t.b - e.b) * o + e.b
  };
  return r;
}
function Vc(e, t, n) {
  var o;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? o = n ? Math.round(e.h) - pr * t : Math.round(e.h) + pr * t : o = n ? Math.round(e.h) + pr * t : Math.round(e.h) - pr * t, o < 0 ? o += 360 : o >= 360 && (o -= 360), o;
}
function Wc(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var o;
  return n ? o = e.s - Bc * t : t === zp ? o = e.s + Bc : o = e.s + vy * t, o > 1 && (o = 1), n && t === Bp && o > 0.1 && (o = 0.1), o < 0.06 && (o = 0.06), Number(o.toFixed(2));
}
function Uc(e, t, n) {
  var o;
  return n ? o = e.v + hy * t : o = e.v - yy * t, o > 1 && (o = 1), Number(o.toFixed(2));
}
function xn(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], o = Bn(e), r = Bp; r > 0; r -= 1) {
    var i = zc(o), a = mr(Bn({
      h: Vc(i, r, !0),
      s: Wc(i, r, !0),
      v: Uc(i, r, !0)
    }));
    n.push(a);
  }
  n.push(mr(o));
  for (var l = 1; l <= zp; l += 1) {
    var s = zc(o), c = mr(Bn({
      h: Vc(s, l),
      s: Wc(s, l),
      v: Uc(s, l)
    }));
    n.push(c);
  }
  return t.theme === "dark" ? by.map(function(u) {
    var f = u.index, d = u.opacity, p = mr(wy(Bn(t.backgroundColor || "#141414"), Bn(n[f]), d * 100));
    return p;
  }) : n;
}
var kn = {
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
Object.keys(kn).forEach(function(e) {
  Mr[e] = xn(kn[e]), Mr[e].primary = Mr[e][5], ea[e] = xn(kn[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), ea[e].primary = ea[e][5];
});
var Sy = Mr.blue;
const xy = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Cy(e) {
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
function $y(e, t) {
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
  } = e, f = n(s), d = n(r), p = n(i), h = n(a), m = n(l), w = o(c, u);
  return g(g({}, w), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
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
    colorBgMask: new je("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Oy = (e) => {
  let t = e, n = e, o = e, r = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? o = 1 : e >= 6 && (o = 2), e > 4 && e < 8 ? r = 4 : e >= 8 && (r = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: o,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: r
  };
};
function Py(e) {
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
  }, Oy(o));
}
const Lt = (e, t) => new je(e).setAlpha(t).toRgbString(), bo = (e, t) => new je(e).darken(t).toHexString(), Iy = (e) => {
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
}, Ty = (e, t) => {
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
    colorBgLayout: bo(n, 4),
    colorBgContainer: bo(n, 0),
    colorBgElevated: bo(n, 0),
    colorBgSpotlight: Lt(o, 0.85),
    colorBorder: bo(n, 15),
    colorBorderSecondary: bo(n, 6)
  };
};
function Ey(e) {
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
const _y = (e) => {
  const t = Ey(e), n = t.map((r) => r.size), o = t.map((r) => r.lineHeight);
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
function Ay(e) {
  const t = Object.keys(Vp).map((n) => {
    const o = xn(e[n]);
    return new Array(10).fill(1).reduce((r, i, a) => (r[`${n}-${a + 1}`] = o[a], r), {});
  }).reduce((n, o) => (n = g(g({}, n), o), n), {});
  return g(g(g(g(g(g(g({}, e), t), $y(e, {
    generateColorPalettes: Iy,
    generateNeutralColorPalettes: Ty
  })), _y(e.fontSize)), Cy(e)), xy(e)), Py(e));
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
  } = new je(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: l,
    b: s
  } = new je(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((n - a * (1 - c)) / c), f = Math.round((o - l * (1 - c)) / c), d = Math.round((r - s * (1 - c)) / c);
    if (ta(u) && ta(f) && ta(d))
      return new je({
        r: u,
        g: f,
        b: d,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new je({
    r: n,
    g: o,
    b: r,
    a: 1
  }).toRgbString();
}
var My = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function Ry(e) {
  const {
    override: t
  } = e, n = My(e, ["override"]), o = g({}, t);
  Object.keys(mi).forEach((p) => {
    delete o[p];
  });
  const r = g(g({}, n), o), i = 480, a = 576, l = 768, s = 992, c = 1200, u = 1600, f = 2e3;
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
    screenXXLMax: f - 1,
    screenXXXL: f,
    screenXXXLMin: f,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new je("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new je("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new je("rgba(0, 0, 0, 0.09)").toRgbString()}
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
const Fy = (e, t, n, o, r) => {
  const i = e / 2, a = 0, l = i, s = n * 1 / Math.sqrt(2), c = i - n * (1 - 1 / Math.sqrt(2)), u = i - t * (1 / Math.sqrt(2)), f = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)), d = 2 * i - u, p = f, h = 2 * i - s, m = c, w = 2 * i - a, b = l, C = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2), S = n * (Math.sqrt(2) - 1);
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
        value: [`polygon(${S}px 100%, 50% ${S}px, ${2 * i - S}px 100%, ${S}px 100%)`, `path('M ${a} ${l} A ${n} ${n} 0 0 0 ${s} ${c} L ${u} ${f} A ${t} ${t} 0 0 1 ${d} ${p} L ${h} ${m} A ${n} ${n} 0 0 0 ${w} ${b} Z')`]
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
}, nt = (e) => ({
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
}), Dy = (e) => ({
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
}), Ly = (e, t) => {
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
    const r = T(() => o == null ? void 0 : o.value), [i, a, l] = go(), {
      getPrefixCls: s,
      iconPrefixCls: c
    } = ci(), u = T(() => s()), f = T(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: ["Shared", u.value]
    }));
    za(f, () => [{
      // Link
      "&": Dy(a.value)
    }]);
    const d = T(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: [e, r.value, c.value]
    }));
    return [za(d, () => {
      const {
        token: p,
        flush: h
      } = By(a.value), m = typeof n == "function" ? n(p) : n, w = g(g({}, m), a.value[e]), b = `.${r.value}`, C = we(p, {
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
      return h(e, w), [Ly(a.value, r.value), S];
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
function jy() {
}
function By(e) {
  let t, n = e, o = jy;
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
const zy = Ip(Ay), Gp = {
  token: mi,
  hashed: !0
}, Xp = Symbol("DesignTokenContext"), Xa = X(), Vy = (e) => {
  _e(Xp, e), ae(e, () => {
    Xa.value = ve(e), qf(Xa);
  }, {
    immediate: !0,
    deep: !0
  });
}, Wy = Z({
  props: {
    value: pe()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Vy(T(() => e.value)), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
function go() {
  const e = Ee(Xp, T(() => Xa.value || Gp)), t = T(() => `${ry}-${e.value.hashed || ""}`), n = T(() => e.value.theme || zy), o = A0(n, T(() => [mi, e.value.token]), T(() => ({
    salt: t.value,
    override: g({
      override: e.value.token
    }, e.value.components),
    formatToken: Ry
  })));
  return [n, T(() => o.value[0]), T(() => e.value.hashed ? o.value[1] : "")];
}
const Dl = Z({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = go(), t = T(() => new je(e.value.colorBgBase).toHsl().l < 0.5 ? {
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
Dl.PRESENTED_IMAGE_DEFAULT = !0;
const kp = Z({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = go(), t = T(() => {
      const {
        colorFill: n,
        colorFillTertiary: o,
        colorFillQuaternary: r,
        colorBgContainer: i
      } = e.value;
      return {
        borderColor: new je(n).onBackground(i).toHexString(),
        shadowColor: new je(o).onBackground(i).toHexString(),
        contentColor: new je(r).onBackground(i).toHexString()
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
kp.PRESENTED_IMAGE_SIMPLE = !0;
const Uy = (e) => {
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
}, Gy = Ge("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, o = we(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [Uy(o)];
});
var Xy = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const ky = () => ({
  prefixCls: String,
  imageStyle: pe(),
  image: Re(),
  description: Re()
}), Ll = Z({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: ky(),
  setup(e, t) {
    let {
      slots: n = {},
      attrs: o
    } = t;
    const {
      direction: r,
      prefixCls: i
    } = Se("empty", e), [a, l] = Gy(i);
    return () => {
      var s, c;
      const u = i.value, f = g(g({}, e), o), {
        image: d = ((s = n.image) === null || s === void 0 ? void 0 : s.call(n)) || Zn(Dl),
        description: p = ((c = n.description) === null || c === void 0 ? void 0 : c.call(n)) || void 0,
        imageStyle: h,
        class: m = ""
      } = f, w = Xy(f, ["image", "description", "imageStyle", "class"]), b = typeof d == "function" ? d() : d, C = typeof b == "object" && "type" in b && b.type.PRESENTED_IMAGE_SIMPLE;
      return a(v(vp, {
        componentName: "Empty",
        children: (S) => {
          const x = typeof p < "u" ? p : S.description, $ = typeof x == "string" ? x : "empty";
          let O = null;
          return typeof b == "string" ? O = v("img", {
            alt: $,
            src: b
          }, null) : O = b, v("div", N({
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
Ll.PRESENTED_IMAGE_DEFAULT = () => Zn(Dl);
Ll.PRESENTED_IMAGE_SIMPLE = () => Zn(kp);
const wo = In(Ll), Hl = (e) => {
  const {
    prefixCls: t
  } = Se("empty", e);
  return ((o) => {
    switch (o) {
      case "Table":
      case "List":
        return v(wo, {
          image: wo.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return v(wo, {
          image: wo.PRESENTED_IMAGE_SIMPLE,
          class: `${t.value}-small`
        }, null);
      default:
        return v(wo, null, null);
    }
  })(e.componentName);
};
function qy(e) {
  return v(Hl, {
    componentName: e
  }, null);
}
const qp = Symbol("SizeContextKey"), Kp = () => Ee(qp, te(void 0)), Yp = (e) => {
  const t = Kp();
  return _e(qp, T(() => e.value || t.value)), e;
}, Se = (e, t) => {
  const n = Kp(), o = Tn(), r = Ee(Al, g(g({}, fp), {
    renderEmpty: (y) => Zn(Hl, {
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
  }), u = r.renderEmpty, f = r.space, d = r.pageHeader, p = r.form, h = T(() => {
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
    space: f,
    pageHeader: d,
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
function Gc(e) {
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
var kc = function(e, t) {
  var n = window, o = t.scrollMode, r = t.block, i = t.inline, a = t.boundary, l = t.skipOverflowHiddenElements, s = typeof a == "function" ? a : function(le) {
    return le !== a;
  };
  if (!Gc(e)) throw new TypeError("Invalid target");
  for (var c, u, f = document.scrollingElement || document.documentElement, d = [], p = e; Gc(p) && s(p); ) {
    if ((p = (u = (c = p).parentElement) == null ? c.getRootNode().host || null : u) === f) {
      d.push(p);
      break;
    }
    p != null && p === document.body && na(p) && !na(document.documentElement) || p != null && na(p, l) && d.push(p);
  }
  for (var h = n.visualViewport ? n.visualViewport.width : innerWidth, m = n.visualViewport ? n.visualViewport.height : innerHeight, w = window.scrollX || pageXOffset, b = window.scrollY || pageYOffset, C = e.getBoundingClientRect(), S = C.height, x = C.width, $ = C.top, O = C.right, y = C.bottom, I = C.left, E = r === "start" || r === "nearest" ? $ : r === "end" ? y : $ + S / 2, R = i === "center" ? I + x / 2 : i === "end" ? O : I, _ = [], D = 0; D < d.length; D++) {
    var F = d[D], H = F.getBoundingClientRect(), P = H.height, M = H.width, L = H.top, j = H.right, A = H.bottom, z = H.left;
    if (o === "if-needed" && $ >= 0 && I >= 0 && y <= m && O <= h && $ >= L && y <= A && I >= z && O <= j) return _;
    var q = getComputedStyle(F), Y = parseInt(q.borderLeftWidth, 10), K = parseInt(q.borderTopWidth, 10), W = parseInt(q.borderRightWidth, 10), G = parseInt(q.borderBottomWidth, 10), ee = 0, re = 0, ie = "offsetWidth" in F ? F.offsetWidth - F.clientWidth - Y - W : 0, k = "offsetHeight" in F ? F.offsetHeight - F.clientHeight - K - G : 0, B = "offsetWidth" in F ? F.offsetWidth === 0 ? 0 : M / F.offsetWidth : 0, U = "offsetHeight" in F ? F.offsetHeight === 0 ? 0 : P / F.offsetHeight : 0;
    if (f === F) ee = r === "start" ? E : r === "end" ? E - m : r === "nearest" ? vr(b, b + m, m, K, G, b + E, b + E + S, S) : E - m / 2, re = i === "start" ? R : i === "center" ? R - h / 2 : i === "end" ? R - h : vr(w, w + h, h, Y, W, w + R, w + R + x, x), ee = Math.max(0, ee + b), re = Math.max(0, re + w);
    else {
      ee = r === "start" ? E - L - K : r === "end" ? E - A + G + k : r === "nearest" ? vr(L, A, P, K, G + k, E, E + S, S) : E - (L + P / 2) + k / 2, re = i === "start" ? R - z - Y : i === "center" ? R - (z + M / 2) + ie / 2 : i === "end" ? R - j + W + ie : vr(z, j, M, Y, W + ie, R, R + x, x);
      var ne = F.scrollLeft, Q = F.scrollTop;
      E += Q - (ee = Math.max(0, Math.min(Q + ee / U, F.scrollHeight - P / U + k))), R += ne - (re = Math.max(0, Math.min(ne + re / B, F.scrollWidth - M / B + ie)));
    }
    _.push({ el: F, top: ee, left: re });
  }
  return _;
};
function Qp(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function Ky(e, t) {
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
function Yy(e) {
  return e === !1 ? {
    block: "end",
    inline: "nearest"
  } : Qp(e) ? e : {
    block: "start",
    inline: "nearest"
  };
}
function Qy(e, t) {
  var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (Qp(t) && typeof t.behavior == "function")
    return t.behavior(n ? kc(e, t) : []);
  if (n) {
    var o = Yy(t);
    return Ky(kc(e, o), o.behavior);
  }
}
function Zy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
  }
}
function Zp(e, t, n) {
  return n && Zy(e, n), e;
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
function qc(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var tm = Object.prototype, nm = tm.toString, Jy = tm.hasOwnProperty, om = /^\s*function (\w+)/;
function Kc(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var o = n.toString().match(om);
    return o ? o[1] : "";
  }
  return "";
}
var Cn = function(e) {
  var t, n;
  return qc(e) !== !1 && typeof (t = e.constructor) == "function" && qc(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, rm = function(e) {
  return e;
}, ke = rm;
if (process.env.NODE_ENV !== "production") {
  var eb = typeof console < "u";
  ke = eb ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : rm;
}
var Uo = function(e, t) {
  return Jy.call(e, t);
}, tb = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, io = Array.isArray || function(e) {
  return nm.call(e) === "[object Array]";
}, ao = function(e) {
  return nm.call(e) === "[object Function]";
}, qr = function(e) {
  return Cn(e) && Uo(e, "_vueTypes_name");
}, im = function(e) {
  return Cn(e) && (Uo(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return Uo(e, t);
  }));
};
function jl(e, t) {
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
    io(o.type) ? (r = o.type.some(function(f) {
      return En(f, t, !0) === !0;
    }), i = o.type.map(function(f) {
      return Kc(f);
    }).join(" or ")) : r = (i = Kc(o)) === "Array" ? io(t) : i === "Object" ? Cn(t) : i === "String" || i === "Number" || i === "Boolean" || i === "Function" ? function(f) {
      if (f == null) return "";
      var d = f.constructor.toString().match(om);
      return d ? d[1] : "";
    }(t) === i : t instanceof o.type;
  }
  if (!r) {
    var l = a + 'value "' + t + '" should be of type "' + i + '"';
    return n === !1 ? (ke(l), !1) : l;
  }
  if (Uo(o, "validator") && ao(o.validator)) {
    var s = ke, c = [];
    if (ke = function(f) {
      c.push(f);
    }, r = o.validator(t), ke = s, !r) {
      var u = (c.length > 1 ? "* " : "") + c.join(`
* `);
      return c.length = 0, n === !1 ? (ke(u), r) : u;
    }
  }
  return r;
}
function ct(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(r) {
    return r !== void 0 || this.default ? ao(r) || En(this, r, !0) === !0 ? (this.default = io(r) ? function() {
      return [].concat(r);
    } : Cn(r) ? function() {
      return Object.assign({}, r);
    } : r, this) : (ke(this._vueTypes_name + ' - invalid default value: "' + r + '"'), this) : this;
  } } }), o = n.validator;
  return ao(o) && (n.validator = jl(o, n)), n;
}
function Rt(e, t) {
  var n = ct(e, t);
  return Object.defineProperty(n, "validate", { value: function(o) {
    return ao(this.validator) && ke(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = jl(o, this), this;
  } });
}
function Yc(e, t, n) {
  var o, r, i = (o = t, r = {}, Object.getOwnPropertyNames(o).forEach(function(f) {
    r[f] = Object.getOwnPropertyDescriptor(o, f);
  }), Object.defineProperties({}, r));
  if (i._vueTypes_name = e, !Cn(n)) return i;
  var a, l, s = n.validator, c = em(n, ["validator"]);
  if (ao(s)) {
    var u = i.validator;
    u && (u = (l = (a = u).__original) !== null && l !== void 0 ? l : a), i.validator = jl(u ? function(f) {
      return u.call(this, f) && s.call(this, f);
    } : s, i);
  }
  return Object.assign(i, c);
}
function vi(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var nb = function() {
  return Rt("any", {});
}, ob = function() {
  return Rt("function", { type: Function });
}, rb = function() {
  return Rt("boolean", { type: Boolean });
}, ib = function() {
  return Rt("string", { type: String });
}, ab = function() {
  return Rt("number", { type: Number });
}, lb = function() {
  return Rt("array", { type: Array });
}, sb = function() {
  return Rt("object", { type: Object });
}, cb = function() {
  return ct("integer", { type: Number, validator: function(e) {
    return tb(e);
  } });
}, ub = function() {
  return ct("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function db(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function") throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return ct(e.name || "<<anonymous function>>", { validator: function(n) {
    var o = e(n);
    return o || ke(this._vueTypes_name + " - " + t), o;
  } });
}
function fb(e) {
  if (!io(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(o, r) {
    if (r != null) {
      var i = r.constructor;
      o.indexOf(i) === -1 && o.push(i);
    }
    return o;
  }, []);
  return ct("oneOf", { type: n.length > 0 ? n : void 0, validator: function(o) {
    var r = e.indexOf(o) !== -1;
    return r || ke(t), r;
  } });
}
function pb(e) {
  if (!io(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], o = 0; o < e.length; o += 1) {
    var r = e[o];
    if (im(r)) {
      if (qr(r) && r._vueTypes_name === "oneOf") {
        n = n.concat(r.type);
        continue;
      }
      if (ao(r.validator) && (t = !0), r.type !== !0 && r.type) {
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
    return l || ke("oneOfType - provided value does not match any of the " + a.length + ` passed-in validators:
` + vi(a.join(`
`))), l;
  } } : { type: n });
}
function mb(e) {
  return ct("arrayOf", { type: Array, validator: function(t) {
    var n, o = t.every(function(r) {
      return (n = En(e, r, !0)) === !0;
    });
    return o || ke(`arrayOf - value validation error:
` + vi(n)), o;
  } });
}
function gb(e) {
  return ct("instanceOf", { type: e });
}
function vb(e) {
  return ct("objectOf", { type: Object, validator: function(t) {
    var n, o = Object.keys(t).every(function(r) {
      return (n = En(e, t[r], !0)) === !0;
    });
    return o || ke(`objectOf - value validation error:
` + vi(n)), o;
  } });
}
function hb(e) {
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
      return ke(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
    }
    return a.every(function(s) {
      if (t.indexOf(s) === -1) return i._vueTypes_isLoose === !0 || (ke('shape - shape definition does not include a "' + s + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var c = En(e[s], r[s], !0);
      return typeof c == "string" && ke('shape - "' + s + `" property validation error:
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
    if (io(t)) return t.forEach(function(f) {
      return n.extend(f);
    }), this;
    var o = t.name, r = t.validate, i = r !== void 0 && r, a = t.getter, l = a !== void 0 && a, s = em(t, ["name", "validate", "getter"]);
    if (Uo(this, o)) throw new TypeError('[VueTypes error]: Type "' + o + '" already defined');
    var c, u = s.type;
    return qr(u) ? (delete s.type, Object.defineProperty(this, o, l ? { get: function() {
      return Yc(o, u, s);
    } } : { value: function() {
      var f, d = Yc(o, u, s);
      return d.validator && (d.validator = (f = d.validator).bind.apply(f, [d].concat([].slice.call(arguments)))), d;
    } })) : (c = l ? { get: function() {
      var f = Object.assign({}, s);
      return i ? Rt(o, f) : ct(o, f);
    }, enumerable: !0 } : { value: function() {
      var f, d, p = Object.assign({}, s);
      return f = i ? Rt(o, p) : ct(o, p), p.validator && (f.validator = (d = p.validator).bind.apply(d, [f].concat([].slice.call(arguments)))), f;
    }, enumerable: !0 }, Object.defineProperty(this, o, c));
  }, Zp(e, null, [{ key: "any", get: function() {
    return nb();
  } }, { key: "func", get: function() {
    return ob().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return rb().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return ib().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return ab().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return lb().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return sb().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return cb().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return ub();
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
It.defaults = {}, It.custom = db, It.oneOf = fb, It.instanceOf = gb, It.oneOfType = pb, It.arrayOf = mb, It.objectOf = vb, It.shape = hb, It.utils = { validate: function(e, t) {
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
function Qc(e, t) {
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
function yb(e) {
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
      const f = u[r];
      if (c || !(a in u)) {
        const d = u[i];
        o.push({
          key: Qc(u, o.length),
          groupOption: c,
          data: u,
          label: f,
          value: d
        });
      } else {
        let d = f;
        d === void 0 && n && (d = u.label), o.push({
          key: Qc(u, o.length),
          group: !0,
          data: u,
          label: d
        }), l(u[a], !0);
      }
    });
  }
  return l(e, !1), o;
}
function ka(e) {
  const t = g({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get() {
      return no(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
function bb(e, t) {
  if (!t || !t.length)
    return null;
  let n = !1;
  function o(i, a) {
    let [l, ...s] = a;
    if (!l)
      return [i];
    const c = i.split(l);
    return n = n || c.length > 1, c.reduce((u, f) => [...u, ...o(f, s)], []).filter((u) => u);
  }
  const r = o(e, t);
  return n ? r : null;
}
function wb() {
  return "";
}
function Sb(e) {
  return e ? e.ownerDocument : window.document;
}
function sm() {
}
const xb = () => ({
  action: V.oneOfType([V.string, V.arrayOf(V.string)]).def([]),
  showAction: V.any.def([]),
  hideAction: V.any.def([]),
  getPopupClassNameFromAlign: V.any.def(wb),
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
  getDocument: V.func.def(Sb),
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
}), Bl = {
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
}, Cb = g(g({}, Bl), {
  mobile: {
    type: Object
  }
}), $b = g(g({}, Bl), {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
function zl(e) {
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
  return (a || i) && (l = zl({
    prefixCls: t,
    transitionName: a,
    animation: i
  })), v(Gt, N({
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
const Ob = Z({
  compatConfig: {
    MODE: 3
  },
  name: "MobilePopupInner",
  inheritAttrs: !1,
  props: Cb,
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
          popupMotion: f = {},
          popupRender: d
        } = {}
      } = e, p = g({
        zIndex: a
      }, u);
      let h = Ze((i = o.default) === null || i === void 0 ? void 0 : i.call(o));
      h.length > 1 && (h = v("div", {
        class: `${s}-content`
      }, [h])), d && (h = d(h));
      const m = oe(s, c);
      return v(Gt, N({
        ref: r
      }, f), {
        default: () => [l ? v("div", {
          class: m,
          style: p
        }, [h]) : null]
      });
    };
  }
});
var Pb = function(e, t, n, o) {
  function r(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(u) {
      try {
        c(o.next(u));
      } catch (f) {
        a(f);
      }
    }
    function s(u) {
      try {
        c(o.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function c(u) {
      u.done ? i(u.value) : r(u.value).then(l, s);
    }
    c((o = o.apply(e, t || [])).next());
  });
};
const Zc = ["measure", "align", null, "motion"], Ib = (e, t) => {
  const n = X(null), o = X(), r = X(!1);
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
      n.value && (o.value = $e(() => Pb(void 0, void 0, void 0, function* () {
        const s = Zc.indexOf(n.value), c = Zc[s + 1];
        c && s !== -1 && i(c);
      })));
    }, {
      immediate: !0,
      flush: "post"
    });
  }), Ae(() => {
    r.value = !0, a();
  }), [n, l];
}, Tb = (e) => {
  const t = X({
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
function Jc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function eu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jc(Object(n), !0).forEach(function(o) {
      Eb(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jc(Object(n)).forEach(function(o) {
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
function Eb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var So, _b = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function Kr() {
  if (So !== void 0)
    return So;
  So = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var n in _b)
    n + t in e && (So = n);
  return So;
}
function um() {
  return Kr() ? "".concat(Kr(), "TransitionProperty") : "transitionProperty";
}
function hi() {
  return Kr() ? "".concat(Kr(), "Transform") : "transform";
}
function tu(e, t) {
  var n = um();
  n && (e.style[n] = t, n !== "transitionProperty" && (e.style.transitionProperty = t));
}
function oa(e, t) {
  var n = hi();
  n && (e.style[n] = t, n !== "transform" && (e.style.transform = t));
}
function Ab(e) {
  return e.style.transitionProperty || e.style[um()];
}
function Mb(e) {
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
var Rb = /matrix\((.*)\)/, Fb = /matrix3d\((.*)\)/;
function Nb(e, t) {
  var n = window.getComputedStyle(e, null), o = n.getPropertyValue("transform") || n.getPropertyValue(hi());
  if (o && o !== "none") {
    var r, i = o.match(Rb);
    if (i)
      i = i[1], r = i.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), r[4] = t.x, r[5] = t.y, oa(e, "matrix(".concat(r.join(","), ")"));
    else {
      var a = o.match(Fb)[1];
      r = a.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), r[12] = t.x, r[13] = t.y, oa(e, "matrix3d(".concat(r.join(","), ")"));
    }
  } else
    oa(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var Db = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, er;
function nu(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function qn(e, t, n) {
  var o = n;
  if (qa(t) === "object") {
    for (var r in t)
      t.hasOwnProperty(r) && qn(e, r, t[r]);
    return;
  }
  if (typeof o < "u") {
    typeof o == "number" && (o = "".concat(o, "px")), e.style[t] = o;
    return;
  }
  return er(e, t);
}
function Lb(e) {
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
  var t = Lb(e), n = e.ownerDocument, o = n.defaultView || n.parentWindow;
  return t.left += fm(o), t.top += pm(o), t;
}
function Vl(e) {
  return e != null && e == e.window;
}
function mm(e) {
  return Vl(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function Hb(e, t, n) {
  var o = n, r = "", i = mm(e);
  return o = o || i.defaultView.getComputedStyle(e, null), o && (r = o.getPropertyValue(t) || o[t]), r;
}
var jb = new RegExp("^(".concat(Db, ")(?!px)[a-z%]+$"), "i"), Bb = /^(top|right|bottom|left)$/, ra = "currentStyle", ia = "runtimeStyle", fn = "left", zb = "px";
function Vb(e, t) {
  var n = e[ra] && e[ra][t];
  if (jb.test(n) && !Bb.test(t)) {
    var o = e.style, r = o[fn], i = e[ia][fn];
    e[ia][fn] = e[ra][fn], o[fn] = t === "fontSize" ? "1em" : n || 0, n = o.pixelLeft + zb, o[fn] = r, e[ia][fn] = i;
  }
  return n === "" ? "auto" : n;
}
typeof window < "u" && (er = window.getComputedStyle ? Hb : Vb);
function hr(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function ou(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function ru(e, t, n) {
  qn(e, "position") === "static" && (e.style.position = "relative");
  var o = -999, r = -999, i = hr("left", n), a = hr("top", n), l = ou(i), s = ou(a);
  i !== "left" && (o = 999), a !== "top" && (r = 999);
  var c = "", u = Go(e);
  ("left" in t || "top" in t) && (c = Ab(e) || "", tu(e, "none")), "left" in t && (e.style[l] = "", e.style[i] = "".concat(o, "px")), "top" in t && (e.style[s] = "", e.style[a] = "".concat(r, "px")), nu(e);
  var f = Go(e), d = {};
  for (var p in t)
    if (t.hasOwnProperty(p)) {
      var h = hr(p, n), m = p === "left" ? o : r, w = u[p] - f[p];
      h === p ? d[h] = m + w : d[h] = m - w;
    }
  qn(e, d), nu(e), ("left" in t || "top" in t) && tu(e, c);
  var b = {};
  for (var C in t)
    if (t.hasOwnProperty(C)) {
      var S = hr(C, n), x = t[C] - u[C];
      C === S ? b[S] = d[S] + x : b[S] = d[S] - x;
    }
  qn(e, b);
}
function Wb(e, t) {
  var n = Go(e), o = Mb(e), r = {
    x: o.x,
    y: o.y
  };
  "left" in t && (r.x = o.x + t.left - n.left), "top" in t && (r.y = o.y + t.top - n.top), Nb(e, r);
}
function Ub(e, t, n) {
  if (n.ignoreShake) {
    var o = Go(e), r = o.left.toFixed(0), i = o.top.toFixed(0), a = t.left.toFixed(0), l = t.top.toFixed(0);
    if (r === a && i === l)
      return;
  }
  n.useCssRight || n.useCssBottom ? ru(e, t, n) : n.useCssTransform && hi() in document.body.style ? Wb(e, t) : ru(e, t, n);
}
function Wl(e, t) {
  for (var n = 0; n < e.length; n++)
    t(e[n]);
}
function gm(e) {
  return er(e, "boxSizing") === "border-box";
}
var Gb = ["margin", "border", "padding"], Ka = -1, Xb = 2, Ya = 1, kb = 0;
function qb(e, t, n) {
  var o = {}, r = e.style, i;
  for (i in t)
    t.hasOwnProperty(i) && (o[i] = r[i], r[i] = t[i]);
  n.call(e);
  for (i in t)
    t.hasOwnProperty(i) && (r[i] = o[i]);
}
function Co(e, t, n) {
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
Wl(["Width", "Height"], function(e) {
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
function iu(e, t, n) {
  var o = n;
  if (Vl(e))
    return t === "width" ? _t.viewportWidth(e) : _t.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? _t.docWidth(e) : _t.docHeight(e);
  var r = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], i = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), a = gm(e), l = 0;
  (i == null || i <= 0) && (i = void 0, l = er(e, t), (l == null || Number(l) < 0) && (l = e.style[t] || 0), l = Math.floor(parseFloat(l)) || 0), o === void 0 && (o = a ? Ya : Ka);
  var s = i !== void 0 || a, c = i || l;
  return o === Ka ? s ? c - Co(e, ["border", "padding"], r) : l : s ? o === Ya ? c : c + (o === Xb ? -Co(e, ["border"], r) : Co(e, ["margin"], r)) : l + Co(e, Gb.slice(o), r);
}
var Kb = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function au() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var o, r = t[0];
  return r.offsetWidth !== 0 ? o = iu.apply(void 0, t) : qb(r, Kb, function() {
    o = iu.apply(void 0, t);
  }), o;
}
Wl(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  _t["outer".concat(t)] = function(o, r) {
    return o && au(o, e, r ? kb : Ya);
  };
  var n = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  _t[e] = function(o, r) {
    var i = r;
    if (i !== void 0) {
      if (o) {
        var a = gm(o);
        return a && (i += Co(o, ["padding", "border"], n)), qn(o, e, i);
      }
      return;
    }
    return o && au(o, e, Ka);
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
      Ub(t, n, o || {});
    else
      return Go(t);
  },
  isWindow: Vl,
  each: Wl,
  css: qn,
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
var lu = ue.getParent;
function Yb(e) {
  if (ue.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = ue.getDocument(e), n = t.body, o = null;
  for (
    o = lu(e);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    o && o !== n && o !== t;
    o = lu(o)
  ) {
    var r = ue.css(o, "position");
    if (r === "fixed")
      return !0;
  }
  return !1;
}
function Ul(e, t) {
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
  var f = ue.getWindowScrollLeft(i), d = ue.getWindowScrollTop(i), p = ue.viewportWidth(i), h = ue.viewportHeight(i), m = l.scrollWidth, w = l.scrollHeight, b = window.getComputedStyle(a);
  if (b.overflowX === "hidden" && (m = i.innerWidth), b.overflowY === "hidden" && (w = i.innerHeight), e.style && (e.style.position = c), t || Yb(e))
    n.left = Math.max(n.left, f), n.top = Math.max(n.top, d), n.right = Math.min(n.right, f + p), n.bottom = Math.min(n.bottom, d + h);
  else {
    var C = Math.max(m, f + p);
    n.right = Math.min(n.right, C);
    var S = Math.max(w, d + h);
    n.bottom = Math.min(n.bottom, S);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function Qb(e, t, n, o) {
  var r = ue.clone(e), i = {
    width: t.width,
    height: t.height
  };
  return o.adjustX && r.left < n.left && (r.left = n.left), o.resizeWidth && r.left >= n.left && r.left + i.width > n.right && (i.width -= r.left + i.width - n.right), o.adjustX && r.left + i.width > n.right && (r.left = Math.max(n.right - i.width, n.left)), o.adjustY && r.top < n.top && (r.top = n.top), o.resizeHeight && r.top >= n.top && r.top + i.height > n.bottom && (i.height -= r.top + i.height - n.bottom), o.adjustY && r.top + i.height > n.bottom && (r.top = Math.max(n.bottom - i.height, n.top)), ue.mix(r, i);
}
function Gl(e) {
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
function su(e, t) {
  var n = t.charAt(0), o = t.charAt(1), r = e.width, i = e.height, a = e.left, l = e.top;
  return n === "c" ? l += i / 2 : n === "b" && (l += i), o === "c" ? a += r / 2 : o === "r" && (a += r), {
    left: a,
    top: l
  };
}
function yr(e, t, n, o, r) {
  var i = su(t, n[1]), a = su(e, n[0]), l = [a.left - i.left, a.top - i.top];
  return {
    left: Math.round(e.left - l[0] + o[0] - r[0]),
    top: Math.round(e.top - l[1] + o[1] - r[1])
  };
}
function cu(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function uu(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function Zb(e, t, n) {
  return e.left > n.right || e.left + t.width < n.left;
}
function Jb(e, t, n) {
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
function du(e, t) {
  var n;
  return /%$/.test(e) ? n = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : n = parseInt(e, 10), n || 0;
}
function fu(e, t) {
  e[0] = du(e[0], t.width), e[1] = du(e[1], t.height);
}
function hm(e, t, n, o) {
  var r = n.points, i = n.offset || [0, 0], a = n.targetOffset || [0, 0], l = n.overflow, s = n.source || e;
  i = [].concat(i), a = [].concat(a), l = l || {};
  var c = {}, u = 0, f = !!(l && l.alwaysByViewport), d = Ul(s, f), p = Gl(s);
  fu(i, p), fu(a, t);
  var h = yr(p, t, r, i, a), m = ue.merge(p, h);
  if (d && (l.adjustX || l.adjustY) && o) {
    if (l.adjustX && cu(h, p, d)) {
      var w = br(r, /[lr]/gi, {
        l: "r",
        r: "l"
      }), b = wr(i, 0), C = wr(a, 0), S = yr(p, t, w, b, C);
      Zb(S, p, d) || (u = 1, r = w, i = b, a = C);
    }
    if (l.adjustY && uu(h, p, d)) {
      var x = br(r, /[tb]/gi, {
        t: "b",
        b: "t"
      }), $ = wr(i, 1), O = wr(a, 1), y = yr(p, t, x, $, O);
      Jb(y, p, d) || (u = 1, r = x, i = $, a = O);
    }
    u && (h = yr(p, t, r, i, a), ue.mix(m, h));
    var I = cu(h, p, d), E = uu(h, p, d);
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
    c.adjustX = l.adjustX && I, c.adjustY = l.adjustY && E, (c.adjustX || c.adjustY) && (m = Qb(h, p, d, c));
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
function e1(e, t) {
  var n = Ul(e, t), o = Gl(e);
  return !n || o.left + o.width <= n.left || o.top + o.height <= n.top || o.left >= n.right || o.top >= n.bottom;
}
function Xl(e, t, n) {
  var o = n.target || t, r = Gl(o), i = !e1(o, n.overflow && n.overflow.alwaysByViewport);
  return hm(e, r, n, i);
}
Xl.__getOffsetParent = Qa;
Xl.__getVisibleRectForElement = Ul;
function t1(e, t, n) {
  var o, r, i = ue.getDocument(e), a = i.defaultView || i.parentWindow, l = ue.getWindowScrollLeft(a), s = ue.getWindowScrollTop(a), c = ue.viewportWidth(a), u = ue.viewportHeight(a);
  "pageX" in t ? o = t.pageX : o = l + t.clientX, "pageY" in t ? r = t.pageY : r = s + t.clientY;
  var f = {
    left: o,
    top: r,
    width: 0,
    height: 0
  }, d = o >= 0 && o <= l + c && r >= 0 && r <= s + u, p = [n.points[0], "cc"];
  return hm(e, f, eu(eu({}, n), {}, {
    points: p
  }), d);
}
function et(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, r = e;
  if (Array.isArray(e) && (r = ht(e)[0]), !r)
    return null;
  const i = Jo(r, t, o);
  return i.props = n ? g(g({}, i.props), t) : i.props, Je(typeof i.props.class != "object", "class must be string"), i;
}
function n1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return e.map((o) => et(o, t, n));
}
function o1(e, t, n) {
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
function r1(e, t) {
  return e === t ? !0 : !e || !t ? !1 : "pageX" in t && "pageY" in t ? e.pageX === t.pageX && e.pageY === t.pageY : "clientX" in t && "clientY" in t ? e.clientX === t.clientX && e.clientY === t.clientY : !1;
}
function i1(e, t) {
  e !== document.activeElement && Qt(t, e) && typeof e.focus == "function" && e.focus();
}
function pu(e, t) {
  let n = null, o = null;
  function r(a) {
    let [{
      target: l
    }] = a;
    if (!document.documentElement.contains(l)) return;
    const {
      width: s,
      height: c
    } = l.getBoundingClientRect(), u = Math.floor(s), f = Math.floor(c);
    (n !== u || o !== f) && Promise.resolve().then(() => {
      t({
        width: u,
        height: f
      });
    }), n = u, o = f;
  }
  const i = new ap(r);
  return e && i.observe(e), () => {
    i.disconnect();
  };
}
const a1 = (e, t) => {
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
function l1() {
  this.__data__ = [], this.size = 0;
}
function kl(e, t) {
  return e === t || e !== e && t !== t;
}
function yi(e, t) {
  for (var n = e.length; n--; )
    if (kl(e[n][0], t))
      return n;
  return -1;
}
var s1 = Array.prototype, c1 = s1.splice;
function u1(e) {
  var t = this.__data__, n = yi(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : c1.call(t, n, 1), --this.size, !0;
}
function d1(e) {
  var t = this.__data__, n = yi(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function f1(e) {
  return yi(this.__data__, e) > -1;
}
function p1(e, t) {
  var n = this.__data__, o = yi(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Xt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Xt.prototype.clear = l1;
Xt.prototype.delete = u1;
Xt.prototype.get = d1;
Xt.prototype.has = f1;
Xt.prototype.set = p1;
function m1() {
  this.__data__ = new Xt(), this.size = 0;
}
function g1(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function v1(e) {
  return this.__data__.get(e);
}
function h1(e) {
  return this.__data__.has(e);
}
var bm = typeof global == "object" && global && global.Object === Object && global, y1 = typeof self == "object" && self && self.Object === Object && self, Pt = bm || y1 || Function("return this")(), wt = Pt.Symbol, wm = Object.prototype, b1 = wm.hasOwnProperty, w1 = wm.toString, xo = wt ? wt.toStringTag : void 0;
function S1(e) {
  var t = b1.call(e, xo), n = e[xo];
  try {
    e[xo] = void 0;
    var o = !0;
  } catch {
  }
  var r = w1.call(e);
  return o && (t ? e[xo] = n : delete e[xo]), r;
}
var x1 = Object.prototype, C1 = x1.toString;
function $1(e) {
  return C1.call(e);
}
var O1 = "[object Null]", P1 = "[object Undefined]", mu = wt ? wt.toStringTag : void 0;
function _n(e) {
  return e == null ? e === void 0 ? P1 : O1 : mu && mu in Object(e) ? S1(e) : $1(e);
}
function Vt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var I1 = "[object AsyncFunction]", T1 = "[object Function]", E1 = "[object GeneratorFunction]", _1 = "[object Proxy]";
function Sm(e) {
  if (!Vt(e))
    return !1;
  var t = _n(e);
  return t == T1 || t == E1 || t == I1 || t == _1;
}
var la = Pt["__core-js_shared__"], gu = function() {
  var e = /[^.]+$/.exec(la && la.keys && la.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function A1(e) {
  return !!gu && gu in e;
}
var M1 = Function.prototype, R1 = M1.toString;
function An(e) {
  if (e != null) {
    try {
      return R1.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var F1 = /[\\^$.*+?()[\]{}|]/g, N1 = /^\[object .+?Constructor\]$/, D1 = Function.prototype, L1 = Object.prototype, H1 = D1.toString, j1 = L1.hasOwnProperty, B1 = RegExp(
  "^" + H1.call(j1).replace(F1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function z1(e) {
  if (!Vt(e) || A1(e))
    return !1;
  var t = Sm(e) ? B1 : N1;
  return t.test(An(e));
}
function V1(e, t) {
  return e == null ? void 0 : e[t];
}
function Mn(e, t) {
  var n = V1(e, t);
  return z1(n) ? n : void 0;
}
var Xo = Mn(Pt, "Map"), ko = Mn(Object, "create");
function W1() {
  this.__data__ = ko ? ko(null) : {}, this.size = 0;
}
function U1(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var G1 = "__lodash_hash_undefined__", X1 = Object.prototype, k1 = X1.hasOwnProperty;
function q1(e) {
  var t = this.__data__;
  if (ko) {
    var n = t[e];
    return n === G1 ? void 0 : n;
  }
  return k1.call(t, e) ? t[e] : void 0;
}
var K1 = Object.prototype, Y1 = K1.hasOwnProperty;
function Q1(e) {
  var t = this.__data__;
  return ko ? t[e] !== void 0 : Y1.call(t, e);
}
var Z1 = "__lodash_hash_undefined__";
function J1(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ko && t === void 0 ? Z1 : t, this;
}
function $n(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
$n.prototype.clear = W1;
$n.prototype.delete = U1;
$n.prototype.get = q1;
$n.prototype.has = Q1;
$n.prototype.set = J1;
function ew() {
  this.size = 0, this.__data__ = {
    hash: new $n(),
    map: new (Xo || Xt)(),
    string: new $n()
  };
}
function tw(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function bi(e, t) {
  var n = e.__data__;
  return tw(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function nw(e) {
  var t = bi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ow(e) {
  return bi(this, e).get(e);
}
function rw(e) {
  return bi(this, e).has(e);
}
function iw(e, t) {
  var n = bi(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function kt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
kt.prototype.clear = ew;
kt.prototype.delete = nw;
kt.prototype.get = ow;
kt.prototype.has = rw;
kt.prototype.set = iw;
var aw = 200;
function lw(e, t) {
  var n = this.__data__;
  if (n instanceof Xt) {
    var o = n.__data__;
    if (!Xo || o.length < aw - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new kt(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function At(e) {
  var t = this.__data__ = new Xt(e);
  this.size = t.size;
}
At.prototype.clear = m1;
At.prototype.delete = g1;
At.prototype.get = v1;
At.prototype.has = h1;
At.prototype.set = lw;
var sw = "__lodash_hash_undefined__";
function cw(e) {
  return this.__data__.set(e, sw), this;
}
function uw(e) {
  return this.__data__.has(e);
}
function qo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new kt(); ++t < n; )
    this.add(e[t]);
}
qo.prototype.add = qo.prototype.push = cw;
qo.prototype.has = uw;
function dw(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Za(e, t) {
  return e.has(t);
}
var fw = 1, pw = 2;
function xm(e, t, n, o, r, i) {
  var a = n & fw, l = e.length, s = t.length;
  if (l != s && !(a && s > l))
    return !1;
  var c = i.get(e), u = i.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, d = !0, p = n & pw ? new qo() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < l; ) {
    var h = e[f], m = t[f];
    if (o)
      var w = a ? o(m, h, f, t, e, i) : o(h, m, f, e, t, i);
    if (w !== void 0) {
      if (w)
        continue;
      d = !1;
      break;
    }
    if (p) {
      if (!dw(t, function(b, C) {
        if (!Za(p, C) && (h === b || r(h, b, n, o, i)))
          return p.push(C);
      })) {
        d = !1;
        break;
      }
    } else if (!(h === m || r(h, m, n, o, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), d;
}
var Yr = Pt.Uint8Array;
function mw(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function gw(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var vw = 1, hw = 2, yw = "[object Boolean]", bw = "[object Date]", ww = "[object Error]", Sw = "[object Map]", xw = "[object Number]", Cw = "[object RegExp]", $w = "[object Set]", Ow = "[object String]", Pw = "[object Symbol]", Iw = "[object ArrayBuffer]", Tw = "[object DataView]", vu = wt ? wt.prototype : void 0, sa = vu ? vu.valueOf : void 0;
function Ew(e, t, n, o, r, i, a) {
  switch (n) {
    case Tw:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Iw:
      return !(e.byteLength != t.byteLength || !i(new Yr(e), new Yr(t)));
    case yw:
    case bw:
    case xw:
      return kl(+e, +t);
    case ww:
      return e.name == t.name && e.message == t.message;
    case Cw:
    case Ow:
      return e == t + "";
    case Sw:
      var l = mw;
    case $w:
      var s = o & vw;
      if (l || (l = gw), e.size != t.size && !s)
        return !1;
      var c = a.get(e);
      if (c)
        return c == t;
      o |= hw, a.set(e, t);
      var u = xm(l(e), l(t), o, r, i, a);
      return a.delete(e), u;
    case Pw:
      if (sa)
        return sa.call(e) == sa.call(t);
  }
  return !1;
}
function ql(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var ut = Array.isArray;
function Cm(e, t, n) {
  var o = t(e);
  return ut(e) ? o : ql(o, n(e));
}
function _w(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, i = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (i[r++] = a);
  }
  return i;
}
function $m() {
  return [];
}
var Aw = Object.prototype, Mw = Aw.propertyIsEnumerable, hu = Object.getOwnPropertySymbols, Kl = hu ? function(e) {
  return e == null ? [] : (e = Object(e), _w(hu(e), function(t) {
    return Mw.call(e, t);
  }));
} : $m;
function Rw(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
function Ft(e) {
  return e != null && typeof e == "object";
}
var Fw = "[object Arguments]";
function yu(e) {
  return Ft(e) && _n(e) == Fw;
}
var Om = Object.prototype, Nw = Om.hasOwnProperty, Dw = Om.propertyIsEnumerable, wi = yu(/* @__PURE__ */ function() {
  return arguments;
}()) ? yu : function(e) {
  return Ft(e) && Nw.call(e, "callee") && !Dw.call(e, "callee");
};
function Lw() {
  return !1;
}
var Pm = typeof exports == "object" && exports && !exports.nodeType && exports, bu = Pm && typeof module == "object" && module && !module.nodeType && module, Hw = bu && bu.exports === Pm, wu = Hw ? Pt.Buffer : void 0, jw = wu ? wu.isBuffer : void 0, Ko = jw || Lw, Bw = 9007199254740991, zw = /^(?:0|[1-9]\d*)$/;
function Im(e, t) {
  var n = typeof e;
  return t = t ?? Bw, !!t && (n == "number" || n != "symbol" && zw.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Vw = 9007199254740991;
function Yl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Vw;
}
var Ww = "[object Arguments]", Uw = "[object Array]", Gw = "[object Boolean]", Xw = "[object Date]", kw = "[object Error]", qw = "[object Function]", Kw = "[object Map]", Yw = "[object Number]", Qw = "[object Object]", Zw = "[object RegExp]", Jw = "[object Set]", eS = "[object String]", tS = "[object WeakMap]", nS = "[object ArrayBuffer]", oS = "[object DataView]", rS = "[object Float32Array]", iS = "[object Float64Array]", aS = "[object Int8Array]", lS = "[object Int16Array]", sS = "[object Int32Array]", cS = "[object Uint8Array]", uS = "[object Uint8ClampedArray]", dS = "[object Uint16Array]", fS = "[object Uint32Array]", Oe = {};
Oe[rS] = Oe[iS] = Oe[aS] = Oe[lS] = Oe[sS] = Oe[cS] = Oe[uS] = Oe[dS] = Oe[fS] = !0;
Oe[Ww] = Oe[Uw] = Oe[nS] = Oe[Gw] = Oe[oS] = Oe[Xw] = Oe[kw] = Oe[qw] = Oe[Kw] = Oe[Yw] = Oe[Qw] = Oe[Zw] = Oe[Jw] = Oe[eS] = Oe[tS] = !1;
function pS(e) {
  return Ft(e) && Yl(e.length) && !!Oe[_n(e)];
}
function Ql(e) {
  return function(t) {
    return e(t);
  };
}
var Tm = typeof exports == "object" && exports && !exports.nodeType && exports, Ao = Tm && typeof module == "object" && module && !module.nodeType && module, mS = Ao && Ao.exports === Tm, ca = mS && bm.process, lo = function() {
  try {
    var e = Ao && Ao.require && Ao.require("util").types;
    return e || ca && ca.binding && ca.binding("util");
  } catch {
  }
}(), Su = lo && lo.isTypedArray, Zl = Su ? Ql(Su) : pS, gS = Object.prototype, vS = gS.hasOwnProperty;
function Em(e, t) {
  var n = ut(e), o = !n && wi(e), r = !n && !o && Ko(e), i = !n && !o && !r && Zl(e), a = n || o || r || i, l = a ? Rw(e.length, String) : [], s = l.length;
  for (var c in e)
    (t || vS.call(e, c)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Im(c, s))) && l.push(c);
  return l;
}
var hS = Object.prototype;
function Si(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || hS;
  return e === n;
}
function _m(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var yS = _m(Object.keys, Object), bS = Object.prototype, wS = bS.hasOwnProperty;
function Am(e) {
  if (!Si(e))
    return yS(e);
  var t = [];
  for (var n in Object(e))
    wS.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function vo(e) {
  return e != null && Yl(e.length) && !Sm(e);
}
function ho(e) {
  return vo(e) ? Em(e) : Am(e);
}
function Ja(e) {
  return Cm(e, ho, Kl);
}
var SS = 1, xS = Object.prototype, CS = xS.hasOwnProperty;
function $S(e, t, n, o, r, i) {
  var a = n & SS, l = Ja(e), s = l.length, c = Ja(t), u = c.length;
  if (s != u && !a)
    return !1;
  for (var f = s; f--; ) {
    var d = l[f];
    if (!(a ? d in t : CS.call(t, d)))
      return !1;
  }
  var p = i.get(e), h = i.get(t);
  if (p && h)
    return p == t && h == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var w = a; ++f < s; ) {
    d = l[f];
    var b = e[d], C = t[d];
    if (o)
      var S = a ? o(C, b, d, t, e, i) : o(b, C, d, e, t, i);
    if (!(S === void 0 ? b === C || r(b, C, n, o, i) : S)) {
      m = !1;
      break;
    }
    w || (w = d == "constructor");
  }
  if (m && !w) {
    var x = e.constructor, $ = t.constructor;
    x != $ && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof $ == "function" && $ instanceof $) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var el = Mn(Pt, "DataView"), tl = Mn(Pt, "Promise"), nl = Mn(Pt, "Set"), ol = Mn(Pt, "WeakMap"), xu = "[object Map]", OS = "[object Object]", Cu = "[object Promise]", $u = "[object Set]", Ou = "[object WeakMap]", Pu = "[object DataView]", PS = An(el), IS = An(Xo), TS = An(tl), ES = An(nl), _S = An(ol), gt = _n;
(el && gt(new el(new ArrayBuffer(1))) != Pu || Xo && gt(new Xo()) != xu || tl && gt(tl.resolve()) != Cu || nl && gt(new nl()) != $u || ol && gt(new ol()) != Ou) && (gt = function(e) {
  var t = _n(e), n = t == OS ? e.constructor : void 0, o = n ? An(n) : "";
  if (o)
    switch (o) {
      case PS:
        return Pu;
      case IS:
        return xu;
      case TS:
        return Cu;
      case ES:
        return $u;
      case _S:
        return Ou;
    }
  return t;
});
var AS = 1, Iu = "[object Arguments]", Tu = "[object Array]", Sr = "[object Object]", MS = Object.prototype, Eu = MS.hasOwnProperty;
function RS(e, t, n, o, r, i) {
  var a = ut(e), l = ut(t), s = a ? Tu : gt(e), c = l ? Tu : gt(t);
  s = s == Iu ? Sr : s, c = c == Iu ? Sr : c;
  var u = s == Sr, f = c == Sr, d = s == c;
  if (d && Ko(e)) {
    if (!Ko(t))
      return !1;
    a = !0, u = !1;
  }
  if (d && !u)
    return i || (i = new At()), a || Zl(e) ? xm(e, t, n, o, r, i) : Ew(e, t, s, n, o, r, i);
  if (!(n & AS)) {
    var p = u && Eu.call(e, "__wrapped__"), h = f && Eu.call(t, "__wrapped__");
    if (p || h) {
      var m = p ? e.value() : e, w = h ? t.value() : t;
      return i || (i = new At()), r(m, w, n, o, i);
    }
  }
  return d ? (i || (i = new At()), $S(e, t, n, o, r, i)) : !1;
}
function xi(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Ft(e) && !Ft(t) ? e !== e && t !== t : RS(e, t, n, o, xi, r);
}
function Jl(e, t) {
  return xi(e, t);
}
const FS = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function _u(e) {
  return typeof e != "function" ? null : e();
}
function Au(e) {
  return typeof e != "object" || !e ? null : e;
}
const NS = Z({
  compatConfig: {
    MODE: 3
  },
  name: "Align",
  props: FS,
  emits: ["align"],
  setup(e, t) {
    let {
      expose: n,
      slots: o
    } = t;
    const r = te({}), i = te(), [a, l] = a1(() => {
      const {
        disabled: d,
        target: p,
        align: h,
        onAlign: m
      } = e;
      if (!d && p && i.value) {
        const w = i.value;
        let b;
        const C = _u(p), S = Au(p);
        r.value.element = C, r.value.point = S, r.value.align = h;
        const {
          activeElement: x
        } = document;
        return C && ym(C) ? b = Xl(w, C, h) : S && (b = t1(w, S, h)), i1(x, w), m && b && m(w, b), !0;
      }
      return !1;
    }, T(() => e.monitorBufferTime)), s = te({
      cancel: () => {
      }
    }), c = te({
      cancel: () => {
      }
    }), u = () => {
      const d = e.target, p = _u(d), h = Au(d);
      i.value !== c.value.element && (c.value.cancel(), c.value.element = i.value, c.value.cancel = pu(i.value, a)), (r.value.element !== p || !r1(r.value.point, h) || !Jl(r.value.align, e.align)) && (a(), s.value.element !== p && (s.value.cancel(), s.value.element = p, s.value.cancel = pu(p, a)));
    };
    be(() => {
      Fe(() => {
        u();
      });
    }), Pn(() => {
      Fe(() => {
        u();
      });
    }), ae(() => e.disabled, (d) => {
      d ? l() : a();
    }, {
      immediate: !0,
      flush: "post"
    });
    const f = te(null);
    return ae(() => e.monitorWindowResize, (d) => {
      d ? f.value || (f.value = Un(window, "resize", a)) : f.value && (f.value.remove(), f.value = null);
    }, {
      flush: "post"
    }), Zo(() => {
      s.value.cancel(), c.value.cancel(), f.value && f.value.remove(), l();
    }), n({
      forceAlign: () => a(!0)
    }), () => {
      const d = o == null ? void 0 : o.default();
      return d ? et(d[0], {
        ref: i
      }, !0, !0) : null;
    };
  }
});
an("bottomLeft", "bottomRight", "topLeft", "topRight");
const DS = (e) => e !== void 0 && (e === "topLeft" || e === "topRight") ? "slide-down" : "slide-up", tr = function(e) {
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
}, ln = (e, t, n) => n !== void 0 ? n : `${e}-${t}`, LS = Z({
  compatConfig: {
    MODE: 3
  },
  name: "PopupInner",
  inheritAttrs: !1,
  props: Bl,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      attrs: o,
      slots: r
    } = t;
    const i = X(), a = X(), l = X(), [s, c] = Tb(Ct(e, "stretch")), u = () => {
      e.stretch && c(e.getRootDomNode());
    }, f = X(!1);
    let d;
    ae(() => e.visible, (O) => {
      clearTimeout(d), O ? d = setTimeout(() => {
        f.value = e.visible;
      }) : f.value = !1;
    }, {
      immediate: !0
    });
    const [p, h] = Ib(f, u), m = X(), w = () => e.point ? e.point : e.getRootDomNode, b = () => {
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
      const O = typeof e.animation == "object" ? e.animation : zl(e);
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
        onMouseleave: D,
        onTouchstart: F = () => {
        },
        onMousedown: H
      } = e, P = p.value, M = [g(g({}, s.value), {
        zIndex: y,
        opacity: P === "motion" || P === "stable" || !f.value ? null : 0,
        // pointerEvents: statusValue === 'stable' ? null : 'none',
        pointerEvents: !f.value && P !== "stable" ? "none" : null
      }), o.style];
      let L = Ze((O = r.default) === null || O === void 0 ? void 0 : O.call(r, {
        visible: e.visible
      }));
      L.length > 1 && (L = v("div", {
        class: `${E}-content`
      }, [L]));
      const j = oe(E, o.class, l.value, !e.arrow && `${E}-arrow-hidden`), z = f.value || !e.visible ? tr(S.value.name, S.value) : {};
      return v(Gt, N(N({
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
            class: j,
            onMouseenter: _,
            onMouseleave: D,
            onMousedown: bc(H, ["capture"]),
            [Ke ? "onTouchstartPassive" : "onTouchstart"]: bc(F, ["capture"]),
            style: M
          }, [L])
        }), [[fo, f.value]]) : null
      });
    };
  }
}), HS = Z({
  compatConfig: {
    MODE: 3
  },
  name: "Popup",
  inheritAttrs: !1,
  props: $b,
  setup(e, t) {
    let {
      attrs: n,
      slots: o,
      expose: r
    } = t;
    const i = X(!1), a = X(!1), l = X(), s = X();
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
      }), u = a.value ? v(Ob, N(N({}, c), {}, {
        mobile: e.mobile,
        ref: l
      }), {
        default: o.default
      }) : v(LS, N(N({}, c), {}, {
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
function jS(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Mu(e, t, n) {
  const o = e[t] || {};
  return g(g({}, o), n);
}
function BS(e, t, n, o) {
  const {
    points: r
  } = n, i = Object.keys(e);
  for (let a = 0; a < i.length; a += 1) {
    const l = i[a];
    if (jS(e[l].points, r, o))
      return `${t}-placement-${l}`;
  }
  return "";
}
const zS = {
  methods: {
    setState() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = typeof e == "function" ? e(this.$data, this.$props) : e;
      if (this.getDerivedStateFromProps) {
        const o = this.getDerivedStateFromProps(qh(this), g(g({}, this.$data), n));
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
}, Mm = Symbol("PortalContextKey"), es = function(e) {
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
}, VS = () => {
  es({}, {
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
    } = VS();
    function a() {
      i.value && (r = e.getContainer());
    }
    ah(() => {
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
function WS(e) {
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
const US = `vc-util-locker-${Date.now()}`;
let Ru = 0;
function GS() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
function XS(e) {
  const t = T(() => !!e && !!e.value);
  Ru += 1;
  const n = `${US}_${Ru}`;
  Pe((o) => {
    if (yt()) {
      if (t.value) {
        const r = WS(), i = GS();
        jo(`
html body {
  overflow-y: hidden;
  ${i ? `width: calc(100% - ${r}px);` : ""}
}`, n);
      } else
        Xr(n);
      o(() => {
        Xr(n);
      });
    }
  }, {
    flush: "post"
  });
}
let pn = 0;
const Fr = yt(), Fu = (e) => {
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
    const o = X(), r = X(), i = X(), a = X(1), l = yt() && document.createElement("div"), s = () => {
      var p, h;
      o.value === l && ((h = (p = o.value) === null || p === void 0 ? void 0 : p.parentNode) === null || h === void 0 || h.removeChild(o.value)), o.value = null;
    };
    let c = null;
    const u = function() {
      return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) || o.value && !o.value.parentNode ? (c = Fu(e.getContainer), c ? (c.appendChild(o.value), !0) : !1) : !0;
    }, f = () => Fr ? (o.value || (o.value = l, u(!0)), d(), o.value) : null, d = () => {
      const {
        wrapperClassName: p
      } = e;
      o.value && p && p !== o.value.className && (o.value.className = p);
    };
    return Pn(() => {
      d(), u();
    }), XS(T(() => e.autoLock && e.visible && yt() && (o.value === document.body || o.value === l))), be(() => {
      let p = !1;
      ae([() => e.visible, () => e.getContainer], (h, m) => {
        let [w, b] = h, [C, S] = m;
        Fr && (c = Fu(e.getContainer), c === document.body && (w && !C ? pn += 1 : p && (pn -= 1))), p && (typeof b == "function" && typeof S == "function" ? b.toString() !== S.toString() : b !== S) && s(), p = !0;
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
        getContainer: f
      };
      return a.value && (p || h || r.value) && (m = v(Rm, {
        getContainer: f,
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
}), kS = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"], Nm = Z({
  compatConfig: {
    MODE: 3
  },
  name: "Trigger",
  mixins: [zS],
  inheritAttrs: !1,
  props: xb(),
  setup(e) {
    const t = T(() => {
      const {
        popupPlacement: r,
        popupAlign: i,
        builtinPlacements: a
      } = e;
      return r && a ? Mu(a, r, i) : i;
    }), n = X(null), o = (r) => {
      n.value = r;
    };
    return {
      vcTriggerContext: Ee("vcTriggerContext", {}),
      popupRef: n,
      setPopupRef: o,
      triggerRef: X(null),
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
    return this.popupVisible !== void 0 ? t = !!e.popupVisible : t = !!e.defaultPopupVisible, kS.forEach((n) => {
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
    }), es(this);
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
        const i = ((t = (e = this.triggerRef) === null || e === void 0 ? void 0 : e.$el) === null || t === void 0 ? void 0 : t.nodeName) === "#comment" ? null : jt(this.triggerRef);
        return jt(r(i));
      }
      try {
        const i = ((o = (n = this.triggerRef) === null || n === void 0 ? void 0 : n.$el) === null || o === void 0 ? void 0 : o.nodeName) === "#comment" ? null : jt(this.triggerRef);
        if (i)
          return i;
      } catch {
      }
      return jt(this);
    },
    handleGetPopupClassFromAlign(e) {
      const t = [], n = this.$props, {
        popupPlacement: o,
        builtinPlacements: r,
        prefixCls: i,
        alignPoint: a,
        getPopupClassNameFromAlign: l
      } = n;
      return o && r && t.push(BS(r, i, e, a)), l && t.push(l(e)), t.join(" ");
    },
    getPopupAlign() {
      const e = this.$props, {
        popupPlacement: t,
        popupAlign: n,
        builtinPlacements: o
      } = e;
      return t && o ? Mu(o, t, n) : n;
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
        maskAnimation: f,
        maskTransitionName: d,
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
        maskAnimation: f,
        maskTransitionName: d,
        class: a,
        style: c,
        onAlign: o.onPopupAlign || sm
      }, e), {
        ref: this.setPopupRef,
        mobile: w,
        forceRender: C
      });
      return v(HS, $, {
        default: this.$slots.popup || (() => Kh(this, "popup"))
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
      this.clearDelayTimer(), o !== e && (Gh(this, "popupVisible") || this.setState({
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
      const n = $c(this);
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
    } = this, t = ht(kh(this)), {
      alignPoint: n,
      getPopupContainer: o
    } = this.$props, r = t[0];
    this.childOriginEvents = $c(r);
    const i = {
      key: "trigger"
    };
    this.isContextmenuToShow() ? i.onContextmenu = this.onContextmenu : i.onContextmenu = this.createTwoChains("onContextmenu"), this.isClickToHide() || this.isClickToShow() ? (i.onClick = this.onClick, i.onMousedown = this.onMousedown, i[Ke ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart) : (i.onClick = this.createTwoChains("onClick"), i.onMousedown = this.createTwoChains("onMousedown"), i[Ke ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart")), this.isMouseEnterToShow() ? (i.onMouseenter = this.onMouseenter, n && (i.onMousemove = this.onMouseMove)) : i.onMouseenter = this.createTwoChains("onMouseenter"), this.isMouseLeaveToHide() ? i.onMouseleave = this.onMouseleave : i.onMouseleave = this.createTwoChains("onMouseleave"), this.isFocusToShow() || this.isBlurToHide() ? (i.onFocus = this.onFocus, i.onBlur = this.onBlur) : (i.onFocus = this.createTwoChains("onFocus"), i.onBlur = (c) => {
      c && (!c.relatedTarget || !Qt(c.target, c.relatedTarget)) && this.createTwoChains("onBlur")(c);
    });
    const a = oe(r && r.props && r.props.class, e.class);
    a && (i.class = a);
    const l = et(r, g(g({}, i), {
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
var qS = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const KS = (e) => {
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
}, YS = Z({
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
      return KS(l);
    }), a = te();
    return r({
      getPopupElement: () => a.value
    }), () => {
      const l = g(g({}, e), o), {
        empty: s = !1
      } = l, c = qS(l, ["empty"]), {
        visible: u,
        dropdownAlign: f,
        prefixCls: d,
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
        onPopupFocusout: D
      } = c, F = `${d}-dropdown`;
      let H = p;
      x && (H = x({
        menuNode: p,
        props: e
      }));
      const P = $ ? `${F}-${$}` : O, M = g({
        minWidth: `${S}px`
      }, m);
      return typeof C == "number" ? M.width = `${C}px` : C && (M.width = `${S}px`), v(Nm, N(N({}, e), {}, {
        showAction: E ? ["click"] : [],
        hideAction: E ? ["click"] : [],
        popupPlacement: b || (w === "rtl" ? "bottomRight" : "bottomLeft"),
        builtinPlacements: i.value,
        prefixCls: F,
        popupTransitionName: P,
        popupAlign: f,
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
          onFocusout: D
        }, [H])
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
  return typeof i == "function" ? c = i(a) : c = uo(i) ? Jo(i) : i, v("span", {
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
var QS = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const ZS = Z({
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
    const o = X(null);
    return n({
      focus: () => {
        o.value && o.value.focus();
      },
      blur: () => {
        o.value && o.value.blur();
      },
      input: o,
      setSelectionRange: (s, c, u) => {
        var f;
        (f = o.value) === null || f === void 0 || f.setSelectionRange(s, c, u);
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
      } = e, u = QS(e, ["tag", "value"]);
      return v(s, N(N({}, u), {}, {
        ref: o,
        value: c
      }), null);
    };
  }
});
function JS(e) {
  return Object.keys(e).reduce((t, n) => {
    const o = e[n];
    return typeof o > "u" || o === null || (t += `${n}: ${e[n]};`), t;
  }, "");
}
var ex = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const ts = Z({
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
    const i = X(null), a = te(), l = te(!1);
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
    }, f = (y) => {
      if (l.value && e.lazy) {
        a.value = y.target.value;
        return;
      }
      n("input", y);
    }, d = (y) => {
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
    }, O = T(() => e.style && typeof e.style != "string" ? JS(e.style) : e.style);
    return () => {
      const y = ex(e, ["style", "lazy"]);
      return v(ZS, N(N(N({}, y), o), {}, {
        style: O.value,
        onInput: f,
        onChange: s,
        onBlur: d,
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
}), tx = {
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
}, Dm = Z({
  compatConfig: {
    MODE: 3
  },
  name: "SelectInput",
  inheritAttrs: !1,
  props: tx,
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
        editable: f,
        activeDescendantId: d,
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
      let E = a || v(ts, null, null);
      const R = E.props || {}, {
        onKeydown: _,
        onInput: D,
        onFocus: F,
        onBlur: H,
        onMousedown: P,
        onCompositionstart: M,
        onCompositionend: L,
        style: j
      } = R;
      return E = et(E, g(g(g(g(g({
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
        "aria-activedescendant": d
      }), I), {
        value: f ? p : "",
        readonly: !f,
        unselectable: f ? null : "on",
        style: g(g({}, j), {
          opacity: f ? null : 0
        }),
        onKeydown: (A) => {
          h(A), _ && _(A);
        },
        onMousedown: (A) => {
          m(A), P && P(A);
        },
        onInput: (A) => {
          w(A), D && D(A);
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
            H && H(z[0]), $ && $(z[0]), n == null || n.blur(z[0]);
          }, 100);
        }
      }), E.type === "textarea" ? {} : {
        type: "search"
      }), !0, !0), E;
    };
  }
}), nx = `accept acceptcharset accesskey action allowfullscreen allowtransparency
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
summary tabindex target title type usemap value width wmode wrap`, ox = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`, Nu = `${nx} ${ox}`.split(/[\s\n]+/), rx = "aria-", ix = "data-";
function Du(e, t) {
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
    (n.aria && (r === "role" || Du(r, rx)) || // Data
    n.data && Du(r, ix) || // Attr
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
}), ax = () => Ee(Lm, T(() => null));
var lx = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Dn = void 0, Nr = Z({
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
        renderItem: f,
        responsive: d,
        registerSize: p,
        itemKey: h,
        display: m,
        order: w,
        component: b = "div"
      } = e, C = lx(e, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"]), S = (l = n.default) === null || l === void 0 ? void 0 : l.call(n), x = f && u !== Dn ? f(u) : S;
      let $;
      c || ($ = {
        opacity: r.value ? 0 : 1,
        height: r.value ? 0 : Dn,
        overflowY: r.value ? "hidden" : Dn,
        order: d ? w : Dn,
        pointerEvents: r.value ? "none" : Dn,
        position: r.value ? "absolute" : Dn
      });
      const O = {};
      return r.value && (O["aria-hidden"] = !0), v(si, {
        disabled: !d,
        onResize: (y) => {
          let {
            offsetWidth: I
          } = y;
          a(I);
        }
      }, {
        default: () => v(b, N(N(N({
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
const sx = Z({
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
    const r = ax();
    return () => {
      var i;
      if (!r.value) {
        const {
          component: f = "div"
        } = e, d = da(e, ["component"]);
        return v(f, N(N({}, d), o), {
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
        default: () => [v(Nr, N(N(N({
          class: oe(l, c)
        }, s), u), e), n)]
      });
    };
  }
});
var cx = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Hm = "responsive", jm = "invalidate";
function ux(e) {
  return `+ ${e.length} ...`;
}
const dx = () => ({
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
  props: dx(),
  emits: ["visibleChange"],
  setup(e, t) {
    let {
      attrs: n,
      emit: o,
      slots: r
    } = t;
    const i = T(() => e.ssr === "full"), a = X(null), l = T(() => a.value || 0), s = X(/* @__PURE__ */ new Map()), c = X(0), u = X(0), f = X(0), d = X(null), p = X(null), h = T(() => p.value === null && i.value ? Number.MAX_SAFE_INTEGER : p.value || 0), m = X(!1), w = T(() => `${e.prefixCls}-item`), b = T(() => Math.max(c.value, u.value)), C = T(() => !!(e.data.length && e.maxCount === Hm)), S = T(() => e.maxCount === jm), x = T(() => C.value || typeof e.maxCount == "number" && e.data.length > e.maxCount), $ = T(() => {
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
    }, D = (P, M) => {
      c.value = u.value, u.value = M;
    }, F = (P, M) => {
      f.value = M;
    }, H = (P) => s.value.get(y($.value[P], P));
    return ae([l, s, u, f, () => e.itemKey, $], () => {
      if (l.value && b.value && $.value) {
        let P = f.value;
        const M = $.value.length, L = M - 1;
        if (!M) {
          E(0), d.value = null;
          return;
        }
        for (let j = 0; j < M; j += 1) {
          const A = H(j);
          if (A === void 0) {
            E(j - 1, !0);
            break;
          }
          if (P += A, // Only one means `totalWidth` is the final width
          L === 0 && P <= l.value || // Last two width will be the final width
          j === L - 1 && P + H(L) <= l.value) {
            E(L), d.value = null;
            break;
          } else if (P + b.value > l.value) {
            E(j - 1), d.value = P - A - f.value + u.value;
            break;
          }
        }
        e.suffix && H(0) + f.value > l.value && (d.value = null);
      }
    }), () => {
      const P = m.value && !!O.value.length, {
        itemComponent: M,
        renderRawItem: L,
        renderRawRest: j,
        renderRest: A,
        prefixCls: z = "rc-overflow",
        suffix: q,
        component: Y = "div",
        id: K,
        onMousedown: W
      } = e, {
        class: G,
        style: ee
      } = n, re = cx(n, ["class", "style"]);
      let ie = {};
      d.value !== null && C.value && (ie = {
        position: "absolute",
        left: `${d.value}px`,
        top: 0
      });
      const k = {
        prefixCls: w.value,
        responsive: C.value,
        component: M,
        invalidate: S.value
      }, B = L ? (le, ge) => {
        const he = y(le, ge);
        return v(rl, {
          key: he,
          value: g(g({}, k), {
            order: ge,
            item: le,
            itemKey: he,
            registerSize: _,
            display: ge <= h.value
          })
        }, {
          default: () => [L(le, ge)]
        });
      } : (le, ge) => {
        const he = y(le, ge);
        return v(Nr, N(N({}, k), {}, {
          order: ge,
          key: he,
          item: le,
          renderItem: I.value,
          itemKey: he,
          registerSize: _,
          display: ge <= h.value
        }), null);
      };
      let U = () => null;
      const ne = {
        order: P ? h.value : Number.MAX_SAFE_INTEGER,
        className: `${w.value} ${w.value}-rest`,
        registerSize: D,
        display: P
      };
      if (j)
        j && (U = () => v(rl, {
          value: g(g({}, k), ne)
        }, {
          default: () => [j(O.value)]
        }));
      else {
        const le = A || ux;
        U = () => v(Nr, N(N({}, k), ne), {
          default: () => typeof le == "function" ? le(O.value) : le
        });
      }
      const Q = () => {
        var le;
        return v(Y, N({
          id: K,
          class: oe(!S.value && z, G),
          style: ee,
          onMousedown: W,
          role: e.role
        }, re), {
          default: () => [$.value.map(B), x.value ? U() : null, q && v(Nr, N(N({}, k), {}, {
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
$i.Item = sx;
$i.RESPONSIVE = Hm;
$i.INVALIDATE = jm;
const fx = Symbol("TreeSelectLegacyContextPropsKey");
function ns() {
  return Ee(fx, {});
}
const px = {
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
}, Lu = (e) => {
  e.preventDefault(), e.stopPropagation();
}, mx = Z({
  name: "MultipleSelectSelector",
  inheritAttrs: !1,
  props: px,
  setup(e) {
    const t = X(), n = X(0), o = X(!1), r = ns(), i = T(() => `${e.prefixCls}-selection`), a = T(() => e.open || e.mode === "tags" ? e.searchValue : ""), l = T(() => e.mode === "tags" || e.showSearch && (e.open || o.value)), s = te("");
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
        onMousedown: Lu,
        onClick: C,
        customizeIcon: e.removeIcon
      }, {
        default: () => [Me("×")]
      })]);
    }
    function u(h, m, w, b, C, S) {
      var x;
      const $ = (y) => {
        Lu(y), e.onToggleOpen(!open);
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
    function f(h) {
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
    function d(h) {
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
        onInputMouseDown: D,
        onInputCompositionStart: F,
        onInputCompositionEnd: H
      } = e, P = v("div", {
        class: `${i.value}-search`,
        style: {
          width: n.value + "px"
        },
        key: "input"
      }, [v(Dm, {
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
        onMousedown: D,
        onChange: p,
        onPaste: R,
        onCompositionstart: F,
        onCompositionend: H,
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
        renderItem: f,
        renderRest: d,
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
}), gx = {
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
}, os = Z({
  name: "SingleSelector",
  setup(e) {
    const t = X(!1), n = T(() => e.mode === "combobox"), o = T(() => n.value || e.showSearch), r = T(() => {
      let u = e.searchValue || "";
      return n.value && e.activeValue && !t.value && (u = e.activeValue), u;
    }), i = ns();
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
      var u, f, d, p;
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
        onInputPaste: D,
        onInputCompositionStart: F,
        onInputCompositionEnd: H
      } = e, P = b[0];
      let M = null;
      if (P && i.customSlots) {
        const L = (u = P.key) !== null && u !== void 0 ? u : P.value, j = ((f = i.keyEntities[L]) === null || f === void 0 ? void 0 : f.node) || {};
        M = i.customSlots[(d = j.slots) === null || d === void 0 ? void 0 : d.title] || i.customSlots.title || P.label, typeof M == "function" && (M = M(j));
      } else
        M = E && P ? E(P.option) : P == null ? void 0 : P.label;
      return v(Ie, null, [v("span", {
        class: `${m}-selection-search`
      }, [v(Dm, {
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
        onPaste: D,
        onCompositionstart: F,
        onCompositionend: H,
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
os.props = gx;
os.inheritAttrs = !1;
function vx(e) {
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
const hx = Z({
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
      (C === J.UP || C === J.DOWN) && b.preventDefault(), e.onInputKeyDown && e.onInputKeyDown(b), C === J.ENTER && e.mode === "tags" && !r.value && !e.open && e.onSearchSubmit(b.target.value), vx(C) && e.onToggleOpen(!0);
    }, s = () => {
      a(!0);
    };
    let c = null;
    const u = (b) => {
      e.onSearch(b, !0, r.value) !== !1 && e.onToggleOpen(!0);
    }, f = () => {
      r.value = !0;
    }, d = (b) => {
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
        onInputCompositionStart: f,
        onInputCompositionEnd: d
      }, $ = S === "multiple" || S === "tags" ? v(mx, N(N({}, e), x), null) : v(os, N(N({}, e), x), null);
      return v("div", {
        ref: C,
        class: `${b}-selector`,
        onClick: m,
        onMousedown: w
      }, [$]);
    };
  }
});
function yx(e, t, n) {
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
function bx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  const t = X(!1);
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
function wx(e) {
  return _e(zm, e);
}
function Sx() {
  return Ee(zm, {});
}
const xx = () => {
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
var Cx = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const $x = ["value", "onChange", "removeIcon", "placeholder", "autofocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabindex", "OptionList", "notFoundContent"], Ox = () => ({
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
}), Px = () => g(g({}, Ox()), Wm());
function rs(e) {
  return e === "tags" || e === "multiple";
}
const Ix = Z({
  compatConfig: {
    MODE: 3
  },
  name: "BaseSelect",
  inheritAttrs: !1,
  props: Be(Px(), {
    showAction: [],
    notFoundContent: "Not Found"
  }),
  setup(e, t) {
    let {
      attrs: n,
      expose: o,
      slots: r
    } = t;
    const i = T(() => rs(e.mode)), a = T(() => e.showSearch !== void 0 ? e.showSearch : i.value || e.mode === "combobox"), l = X(!1);
    be(() => {
      l.value = xx();
    });
    const s = ns(), c = X(null), u = Yo(), f = X(null), d = X(null), p = X(null), h = te(!1), [m, w, b] = bx();
    o({
      focus: () => {
        var B;
        (B = d.value) === null || B === void 0 || B.focus();
      },
      blur: () => {
        var B;
        (B = d.value) === null || B === void 0 || B.blur();
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
    }), $ = e.open !== void 0 ? e.open : e.defaultOpen, O = X($), y = X($), I = (B) => {
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
    }, D = T(() => (e.tokenSeparators || []).some((B) => [`
`, `\r
`].includes(B))), F = (B, U, ne) => {
      var Q, le;
      let ge = !0, he = B;
      (Q = e.onActiveValueChange) === null || Q === void 0 || Q.call(e, null);
      const Ne = ne ? null : bb(B, e.tokenSeparators);
      return e.mode !== "combobox" && Ne && (he = "", (le = e.onSearchSplit) === null || le === void 0 || le.call(e, Ne), _(!1), ge = !1), e.onSearch && x.value !== he && e.onSearch(he, {
        source: U ? "typing" : "effect"
      }), ge;
    }, H = (B) => {
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
        const Ne = [...e.displayValues];
        let ye = null;
        for (let Xe = Ne.length - 1; Xe >= 0; Xe -= 1) {
          const qe = Ne[Xe];
          if (!qe.disabled) {
            Ne.splice(Xe, 1), ye = qe;
            break;
          }
        }
        ye && e.onDisplayValuesChange(Ne, {
          type: "remove",
          values: [ye]
        });
      }
      for (var le = arguments.length, ge = new Array(le > 1 ? le - 1 : 0), he = 1; he < le; he++)
        ge[he - 1] = arguments[he];
      y.value && p.value && p.value.onKeydown(B, ...ge), (U = e.onKeydown) === null || U === void 0 || U.call(e, B, ...ge);
    }, j = function(B) {
      for (var U = arguments.length, ne = new Array(U > 1 ? U - 1 : 0), Q = 1; Q < U; Q++)
        ne[Q - 1] = arguments[Q];
      y.value && p.value && p.value.onKeyup(B, ...ne), e.onKeyup && e.onKeyup(B, ...ne);
    }, A = (B) => {
      const U = e.displayValues.filter((ne) => ne !== B);
      e.onDisplayValuesChange(U, {
        type: "remove",
        values: [B]
      });
    }, z = X(!1), q = function() {
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
      } = B, le = (U = f.value) === null || U === void 0 ? void 0 : U.getPopupElement();
      if (le && le.contains(Q)) {
        const ye = setTimeout(() => {
          var Xe;
          const qe = ee.indexOf(ye);
          qe !== -1 && ee.splice(qe, 1), b(), !l.value && !le.contains(document.activeElement) && ((Xe = d.value) === null || Xe === void 0 || Xe.focus());
        });
        ee.push(ye);
      }
      for (var ge = arguments.length, he = new Array(ge > 1 ? ge - 1 : 0), Ne = 1; Ne < ge; Ne++)
        he[Ne - 1] = arguments[Ne];
      (ne = e.onMousedown) === null || ne === void 0 || ne.call(e, B, ...he);
    }, ie = X(null), k = () => {
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
    }), yx([c, f], R, _), wx(Vm(g(g({}, lh(e)), {
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
        mode: ge,
        // Search related
        showSearch: he,
        searchValue: Ne,
        onSearch: ye,
        // Icons
        allowClear: Xe,
        clearIcon: qe,
        showArrow: sr,
        inputIcon: Wi,
        // Others
        disabled: Fn,
        loading: Nn,
        getInputElement: uc,
        getPopupContainer: Lv,
        placement: Hv,
        // Dropdown
        animation: jv,
        transitionName: Bv,
        dropdownStyle: zv,
        dropdownClassName: Vv,
        dropdownMatchSelectWidth: Wv,
        dropdownRender: Uv,
        dropdownAlign: Gv,
        showAction: i_,
        direction: Xv,
        // Tags
        tokenSeparators: a_,
        tagRender: kv,
        optionLabelRender: qv,
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
        getRawInputElement: dc,
        displayValues: cr,
        onDisplayValuesChange: Kv,
        emptyOptions: Yv,
        activeDescendantId: Qv,
        activeValue: Zv,
        OptionList: Jv
      } = B, eh = Cx(B, ["prefixCls", "id", "open", "defaultOpen", "mode", "showSearch", "searchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "disabled", "loading", "getInputElement", "getPopupContainer", "placement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "optionLabelRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onClear", "omitDomProps", "getRawInputElement", "displayValues", "onDisplayValuesChange", "emptyOptions", "activeDescendantId", "activeValue", "OptionList"]), fc = ge === "combobox" && uc && uc() || null, yo = typeof dc == "function" && dc(), Xi = g({}, eh);
      let pc;
      yo && (pc = (dn) => {
        _(dn);
      }), $x.forEach((dn) => {
        delete Xi[dn];
      }), Gi == null || Gi.forEach((dn) => {
        delete Xi[dn];
      });
      const mc = sr !== void 0 ? sr : Nn || !i.value && ge !== "combobox";
      let gc;
      mc && (gc = v(On, {
        class: oe(`${U}-arrow`, {
          [`${U}-arrow-loading`]: Nn
        }),
        customizeIcon: Wi,
        customizeIconProps: {
          loading: Nn,
          searchValue: x.value,
          open: y.value,
          focused: m.value,
          showSearch: a.value
        }
      }, null));
      let vc;
      const th = () => {
        Ui == null || Ui(), Kv([], {
          type: "clear",
          values: cr
        }), F("", !1, !1);
      };
      !Fn && Xe && (cr.length || x.value) && (vc = v(On, {
        class: `${U}-clear`,
        onMousedown: th,
        customizeIcon: qe
      }, {
        default: () => [Me("×")]
      }));
      const nh = v(Jv, {
        ref: p
      }, g(g({}, s.customSlots), {
        option: r.option
      })), oh = oe(U, n.class, {
        [`${U}-focused`]: m.value,
        [`${U}-multiple`]: i.value,
        [`${U}-single`]: !i.value,
        [`${U}-allow-clear`]: Xe,
        [`${U}-show-arrow`]: mc,
        [`${U}-disabled`]: Fn,
        [`${U}-loading`]: Nn,
        [`${U}-open`]: y.value,
        [`${U}-customize-input`]: fc,
        [`${U}-show-search`]: a.value
      }), hc = v(YS, {
        ref: f,
        disabled: Fn,
        prefixCls: U,
        visible: R.value,
        popupElement: nh,
        containerWidth: ie.value,
        animation: jv,
        transitionName: Bv,
        dropdownStyle: zv,
        dropdownClassName: Vv,
        direction: Xv,
        dropdownMatchSelectWidth: Wv,
        dropdownRender: Uv,
        dropdownAlign: Gv,
        placement: Hv,
        getPopupContainer: Lv,
        empty: Yv,
        getTriggerDOMNode: () => u.current,
        onPopupVisibleChange: pc,
        onPopupMouseEnter: k,
        onPopupFocusin: W,
        onPopupFocusout: G
      }, {
        default: () => yo ? zt(yo) && et(yo, {
          ref: u
        }, !1, !0) : v(hx, N(N({}, e), {}, {
          domRef: u,
          prefixCls: U,
          inputElement: fc,
          ref: d,
          id: ne,
          showSearch: a.value,
          mode: ge,
          activeDescendantId: Qv,
          tagRender: kv,
          optionLabelRender: qv,
          values: cr,
          open: y.value,
          onToggleOpen: _,
          activeValue: Zv,
          searchValue: x.value,
          onSearch: F,
          onSearchSubmit: H,
          onRemove: A,
          tokenWithEnter: D.value
        }), null)
      });
      let ki;
      return yo ? ki = hc : ki = v("div", N(N({}, Xi), {}, {
        class: oh,
        ref: c,
        onMousedown: re,
        onKeydown: L,
        onKeyup: j
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
          label: yc,
          value: rh
        } = dn;
        return ["number", "string"].includes(typeof yc) ? yc : rh;
      }).join(", ")}`]), hc, gc, vc]), ki;
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
        offsetHeight: f
      } = u;
      f && i && i();
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
  const i = Ze((r = o.default) === null || r === void 0 ? void 0 : r.call(o));
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
const Tx = 20;
function Hu(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
const Ex = Z({
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
      return n = Math.max(n, Tx), n = Math.min(n, e / 2), Math.floor(n);
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
function _x(e, t, n, o) {
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
      r.forEach((f, d) => {
        if (f && f.offsetParent) {
          const {
            offsetHeight: p
          } = f;
          i.get(d) !== p && (a.value = Symbol("update"), i.set(d, f.offsetHeight));
        }
      });
    });
  }
  function u(f, d) {
    const p = t(f);
    r.get(p), d ? (r.set(p, d.$el || d), c()) : r.delete(p);
  }
  return Zo(() => {
    s();
  }), [u, c, i, a];
}
function Ax(e, t, n, o, r, i, a, l) {
  let s;
  return (c) => {
    if (c == null) {
      l();
      return;
    }
    $e.cancel(s);
    const u = t.value, f = o.itemHeight;
    if (typeof c == "number")
      a(c);
    else if (c && typeof c == "object") {
      let d;
      const {
        align: p
      } = c;
      "index" in c ? {
        index: d
      } = c : d = u.findIndex((w) => r(w) === c.key);
      const {
        offset: h = 0
      } = c, m = (w, b) => {
        if (w < 0 || !e.value) return;
        const C = e.value.clientHeight;
        let S = !1, x = b;
        if (C) {
          const $ = b || p;
          let O = 0, y = 0, I = 0;
          const E = Math.min(u.length, d);
          for (let D = 0; D <= E; D += 1) {
            const F = r(u[D]);
            y = O;
            const H = n.get(F);
            I = y + (H === void 0 ? f : H), O = I, D === d && H === void 0 && (S = !0);
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
              const D = R + C;
              y < R ? x = "top" : I > D && (x = "bottom");
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
const Mx = typeof navigator == "object" && /Firefox/i.test(navigator.userAgent), Gm = (e, t) => {
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
function Rx(e, t, n, o) {
  let r = 0, i = null, a = null, l = !1;
  const s = Gm(t, n);
  function c(f) {
    if (!e.value) return;
    $e.cancel(i);
    const {
      deltaY: d
    } = f;
    r += d, a = d, !s(d) && (Mx || f.preventDefault(), i = $e(() => {
      o(r * (l ? 10 : 1)), r = 0;
    }));
  }
  function u(f) {
    e.value && (l = f.detail === a);
  }
  return [c, u];
}
const Fx = 14 / 15;
function Nx(e, t, n) {
  let o = !1, r = 0, i = null, a = null;
  const l = () => {
    i && (i.removeEventListener("touchmove", s), i.removeEventListener("touchend", c));
  }, s = (d) => {
    if (o) {
      const p = Math.ceil(d.touches[0].pageY);
      let h = r - p;
      r = p, n(h) && d.preventDefault(), clearInterval(a), a = setInterval(() => {
        h *= Fx, (!n(h, !0) || Math.abs(h) <= 0.1) && clearInterval(a);
      }, 16);
    }
  }, c = () => {
    o = !1, l();
  }, u = (d) => {
    l(), d.touches.length === 1 && !o && (o = !0, r = Math.ceil(d.touches[0].pageY), i = d.target, i.addEventListener("touchmove", s, {
      passive: !1
    }), i.addEventListener("touchend", c));
  }, f = () => {
  };
  be(() => {
    document.addEventListener("touchmove", f, {
      passive: !1
    }), ae(e, (d) => {
      t.value.removeEventListener("touchstart", u), l(), clearInterval(a), d && t.value.addEventListener("touchstart", u, {
        passive: !1
      });
    }, {
      immediate: !0
    });
  }), Ae(() => {
    document.removeEventListener("touchmove", f);
  });
}
var Dx = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Lx = [], Hx = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function jx(e, t, n, o, r, i) {
  let {
    getKey: a
  } = i;
  return e.slice(t, n + 1).map((l, s) => {
    const c = t + s, u = r(l, c, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    }), f = a(l);
    return v(Um, {
      key: f,
      setRef: (d) => o(l, d)
    }, {
      default: () => [u]
    });
  });
}
const Bx = Z({
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
    }), a = T(() => e.data || Lx), l = X([]);
    ae(a, () => {
      l.value = rn(a.value).slice();
    }, {
      immediate: !0
    });
    const s = X((A) => {
    });
    ae(() => e.itemKey, (A) => {
      typeof A == "function" ? s.value = A : s.value = (z) => z == null ? void 0 : z[A];
    }, {
      immediate: !0
    });
    const c = X(), u = X(), f = X(), d = (A) => s.value(A), p = {
      getKey: d
    };
    function h(A) {
      let z;
      typeof A == "function" ? z = A(i.scrollTop) : z = A;
      const q = O(z);
      c.value && (c.value.scrollTop = q), i.scrollTop = q;
    }
    const [m, w, b, C] = _x(l, d), S = Le({
      scrollHeight: void 0,
      start: 0,
      end: 0,
      offset: void 0
    }), x = X(0);
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
      for (let k = 0; k < K; k += 1) {
        const B = W[k], U = d(B);
        let ne = b.get(U);
        ne === void 0 && (ne = ee);
        const Q = A + ne;
        z === void 0 && Q >= G && (z = k, q = A), Y === void 0 && Q > ie && (Y = k), A = Q;
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
    const [D, F] = Rx(o, y, I, (A) => {
      h((z) => z + A);
    });
    Nx(o, c, (A, z) => E(A, z) ? !1 : (D({
      preventDefault() {
      },
      deltaY: A
    }), !0));
    function H(A) {
      o.value && A.preventDefault();
    }
    const P = () => {
      c.value && (c.value.removeEventListener("wheel", D, Ke ? {
        passive: !1
      } : !1), c.value.removeEventListener("DOMMouseScroll", F), c.value.removeEventListener("MozMousePixelScroll", H));
    };
    Pe(() => {
      Fe(() => {
        c.value && (P(), c.value.addEventListener("wheel", D, Ke ? {
          passive: !1
        } : !1), c.value.addEventListener("DOMMouseScroll", F), c.value.addEventListener("MozMousePixelScroll", H));
      });
    }), Ae(() => {
      P();
    });
    const M = Ax(c, l, b, e, d, w, h, () => {
      var A;
      (A = f.value) === null || A === void 0 || A.delayHidden();
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
      scrollBarRef: f,
      fillerInnerRef: u,
      delayHideScrollBar: () => {
        var A;
        (A = f.value) === null || A === void 0 || A.delayHidden();
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
      style: f,
      class: d
    } = e, p = Dx(e, ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"]), h = oe(t, d), {
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
      delayHideScrollBar: D
    } = this;
    return v("div", N({
      style: g(g({}, f), {
        position: "relative"
      }),
      class: h
    }, p), [v(s, {
      class: `${t}-holder`,
      style: x,
      ref: "componentRef",
      onScroll: $,
      onMouseenter: D
    }, {
      default: () => [v(Oi, {
        prefixCls: t,
        height: w,
        offset: b,
        onInnerResize: I,
        ref: "fillerInnerRef"
      }, {
        default: () => jx(_, C, S, R, u, E)
      })]
    }), y && v(Ex, {
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
function zx(e, t, n) {
  const o = te(e());
  return ae(t, (r, i) => {
    n(r, i) && (o.value = e());
  }), o;
}
function Vx() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
const Xm = Symbol("SelectContextKey");
function Wx(e) {
  return _e(Xm, e);
}
function Ux() {
  return Ee(Xm, {});
}
var Gx = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function ju(e) {
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
    const r = Sx(), i = Ux(), a = T(() => `${r.prefixCls}-item`), l = zx(() => i.flattenOptions, [() => r.open, () => i.flattenOptions], ($) => $[0]), s = Yo(), c = ($) => {
      $.preventDefault();
    }, u = ($) => {
      s.current && s.current.scrollTo(typeof $ == "number" ? {
        index: $
      } : $);
    }, f = function($) {
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
    }, d = Le({
      activeIndex: f(0)
    }), p = function($) {
      let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      d.activeIndex = $;
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
      p(i.defaultActiveFirstOption !== !1 ? f(0) : -1);
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
      return O ? v("div", N(N({
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
            if (O === J.UP ? I = -1 : O === J.DOWN ? I = 1 : Vx() && y && (O === J.N ? I = 1 : O === J.P && (I = -1)), I !== 0) {
              const E = f(d.activeIndex + I, I);
              u(E), p(E, !0);
            }
            break;
          }
          case J.ENTER: {
            const I = l.value[d.activeIndex];
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
        listItemHeight: D
      } = i, F = o.option, {
        activeIndex: H
      } = d, P = Object.keys(E).map((M) => E[M]);
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
      }, [b(H - 1), b(H), b(H + 1)]), v(Bx, {
        itemKey: "key",
        ref: s,
        data: l.value,
        height: _,
        itemHeight: D,
        fullHeight: !1,
        onMousedown: c,
        onScroll: y,
        virtual: R
      }, {
        default: (M, L) => {
          var j;
          const {
            group: A,
            groupOption: z,
            data: q,
            value: Y
          } = M, {
            key: K
          } = q, W = typeof M.label == "function" ? M.label() : M.label;
          if (A) {
            const qe = (j = q.title) !== null && j !== void 0 ? j : ju(W) && W;
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
            class: k,
            className: B
          } = q, U = Gx(q, ["disabled", "title", "children", "style", "class", "className"]), ne = Ue(U, P), Q = h(Y), le = `${a.value}-option`, ge = oe(a.value, le, k, B, {
            [`${le}-grouped`]: z,
            [`${le}-active`]: H === L && !G,
            [`${le}-disabled`]: G,
            [`${le}-selected`]: Q
          }), he = w(M), Ne = !I || typeof I == "function" || Q, ye = typeof he == "number" ? he : he || Y;
          let Xe = ju(ye) ? ye.toString() : void 0;
          return ee !== void 0 && (Xe = ee), v("div", N(N({}, ne), {}, {
            "aria-selected": Q,
            class: ge,
            title: Xe,
            onMousemove: (qe) => {
              U.onMousemove && U.onMousemove(qe), !(H === L || G) && p(L);
            },
            onClick: (qe) => {
              G || m(Y), U.onClick && U.onClick(qe);
            },
            style: ie
          }), [v("div", {
            class: `${le}-content`
          }, [F ? F(q) : ye]), zt(I) || Q, Ne && v(On, {
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
var kx = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function qx(e) {
  const t = e, {
    key: n,
    children: o
  } = t, r = t.props, {
    value: i,
    disabled: a
  } = r, l = kx(r, ["value", "disabled"]), s = o == null ? void 0 : o.default;
  return g({
    key: n,
    value: i !== void 0 ? i : n,
    children: s,
    disabled: a || a === ""
  }, l);
}
function is(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Ze(e).map((o, r) => {
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
      return qx(o);
    const u = s && s.default ? s.default() : void 0, f = (c == null ? void 0 : c.label) || ((i = s.label) === null || i === void 0 ? void 0 : i.call(s)) || l;
    return g(g({
      key: `__RC_SELECT_GRP__${l === null ? r : String(l)}__`
    }, c), {
      label: f,
      options: is(u || [])
    });
  }).filter((o) => o);
}
function Kx(e, t, n) {
  const o = X(), r = X(), i = X(), a = X([]);
  return ae([e, t], () => {
    e.value ? a.value = rn(e.value).slice() : a.value = is(t.value);
  }, {
    immediate: !0,
    deep: !0
  }), Pe(() => {
    const l = a.value, s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = n.value;
    function f(d) {
      let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      for (let h = 0; h < d.length; h += 1) {
        const m = d[h];
        !m[u.options] || p ? (s.set(m[u.value], m), c.set(m[u.label], m)) : f(m[u.options], !0);
      }
    }
    f(l), o.value = l, r.value = s, i.value = c;
  }), {
    options: o,
    valueOptions: r,
    labelOptions: i
  };
}
let Bu = 0;
const Yx = process.env.NODE_ENV !== "test" && yt();
function Qx() {
  let e;
  return Yx ? (e = Bu, Bu += 1) : e = "TEST_OR_SSR", e;
}
function Zx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : te("");
  const t = `rc_select_${Qx()}`;
  return e.value || t;
}
function as(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
const Jx = typeof window < "u" && window.document && window.document.documentElement;
process.env.NODE_ENV;
function eC(e) {
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
    autofocus: f,
    labelInValue: d,
    value: p,
    inputValue: h,
    optionLabelProp: m
  } = e, w = rs(t), b = s !== void 0 ? s : w || t === "combobox", C = n || is(o);
  if (mt(t !== "tags" || C.every((S) => !S.disabled), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), mt(t !== "combobox" || !m, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), mt(t === "combobox" || !r, "`backfill` only works with `combobox` mode."), mt(t === "combobox" || !l, "`getInputElement` only work with `combobox` mode."), Ec(t !== "combobox" || !l || !i || !a, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), c && !b && t !== "combobox" && t !== "tags" && mt(!1, "`onSearch` should work with `showSearch` instead of use alone."), Ec(!u || f, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autofocus` if needed."), p != null) {
    const S = as(p);
    mt(!d || S.every((x) => typeof x == "object" && ("key" in x || "value" in x)), "`value` should in shape of `{ value: string | number, label?: any }` when you set `labelInValue` to `true`"), mt(!w || Array.isArray(p), "`value` should be array when `mode` is `multiple` or `tags`");
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
  return as(e).join("").toUpperCase().includes(t);
}
const tC = (e, t, n, o, r) => T(() => {
  const i = n.value, a = r == null ? void 0 : r.value, l = o == null ? void 0 : o.value;
  if (!i || l === !1)
    return e.value;
  const {
    options: s,
    label: c,
    value: u
  } = t.value, f = [], d = typeof l == "function", p = i.toUpperCase(), h = d ? l : (w, b) => a ? fa(b[a], p) : b[s] ? fa(b[c !== "children" ? c : "label"], p) : fa(b[u], p), m = d ? (w) => ka(w) : (w) => w;
  return e.value.forEach((w) => {
    if (w[s]) {
      if (h(i, m(w)))
        f.push(w);
      else {
        const C = w[s].filter((S) => h(i, m(S)));
        C.length && f.push(g(g({}, w), {
          [s]: C
        }));
      }
      return;
    }
    h(i, m(w)) && f.push(w);
  }), f;
}), nC = (e, t) => {
  const n = X({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  });
  return [T(() => {
    const {
      values: i,
      options: a
    } = n.value, l = e.value.map((u) => {
      var f;
      return u.label === void 0 ? g(g({}, u), {
        label: (f = i.get(u.value)) === null || f === void 0 ? void 0 : f.label
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
  o.value !== void 0 && (r = ve(o)), n !== void 0 && (r = typeof n == "function" ? n() : n);
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
function Ht(e) {
  const t = typeof e == "function" ? e() : e, n = te(t);
  function o(r) {
    n.value = r;
  }
  return [n, o];
}
const oC = ["inputValue"];
function km() {
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
function rC(e) {
  return !e || typeof e != "object";
}
const iC = Z({
  compatConfig: {
    MODE: 3
  },
  name: "VcSelect",
  inheritAttrs: !1,
  props: Be(km(), {
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
    const i = Zx(Ct(e, "id")), a = T(() => rs(e.mode)), l = T(() => !!(!e.options && e.children)), s = T(() => e.filterOption === void 0 && e.mode === "combobox" ? !1 : e.filterOption), c = T(() => lm(e.fieldNames, l.value)), [u, f] = Qr("", {
      value: T(() => e.searchValue !== void 0 ? e.searchValue : e.inputValue),
      postState: (k) => k || ""
    }), d = Kx(Ct(e, "options"), Ct(e, "children"), c), {
      valueOptions: p,
      labelOptions: h,
      options: m
    } = d, w = (k) => as(k).map((U) => {
      var ne, Q;
      let le, ge, he, Ne;
      rC(U) ? le = U : (he = U.key, ge = U.label, le = (ne = U.value) !== null && ne !== void 0 ? ne : he);
      const ye = p.value.get(le);
      return ye && (ge === void 0 && (ge = ye == null ? void 0 : ye[e.optionLabelProp || c.value.label]), he === void 0 && (he = (Q = ye == null ? void 0 : ye.key) !== null && Q !== void 0 ? Q : le), Ne = ye == null ? void 0 : ye.disabled), {
        label: ge,
        value: le,
        key: he,
        disabled: Ne,
        option: ye
      };
    }), [b, C] = Qr(e.defaultValue, {
      value: Ct(e, "value")
    }), S = T(() => {
      var k;
      const B = w(b.value);
      return e.mode === "combobox" && !(!((k = B[0]) === null || k === void 0) && k.value) ? [] : B;
    }), [x, $] = nC(S, p), O = T(() => {
      if (!e.mode && x.value.length === 1) {
        const k = x.value[0];
        if (k.value === null && (k.label === null || k.label === void 0))
          return [];
      }
      return x.value.map((k) => {
        var B;
        return g(g({}, k), {
          label: (B = typeof k.label == "function" ? k.label() : k.label) !== null && B !== void 0 ? B : k.value
        });
      });
    }), y = T(() => new Set(x.value.map((k) => k.value)));
    Pe(() => {
      var k;
      if (e.mode === "combobox") {
        const B = (k = x.value[0]) === null || k === void 0 ? void 0 : k.value;
        B != null && f(String(B));
      }
    }, {
      flush: "post"
    });
    const I = (k, B) => {
      const U = B ?? k;
      return {
        [c.value.value]: k,
        [c.value.label]: U
      };
    }, E = X();
    Pe(() => {
      if (e.mode !== "tags") {
        E.value = m.value;
        return;
      }
      const k = m.value.slice(), B = (U) => p.value.has(U);
      [...x.value].sort((U, ne) => U.value < ne.value ? -1 : 1).forEach((U) => {
        const ne = U.value;
        B(ne) || k.push(I(ne, U.label));
      }), E.value = k;
    });
    const R = tC(E, c, u, s, Ct(e, "optionFilterProp")), _ = T(() => e.mode !== "tags" || !u.value || R.value.some((k) => k[e.optionFilterProp || "value"] === u.value) ? R.value : [I(u.value), ...R.value]), D = T(() => e.filterSort ? [..._.value].sort((k, B) => e.filterSort(k, B)) : _.value), F = T(() => yb(D.value, {
      fieldNames: c.value,
      childrenAsData: l.value
    })), H = (k) => {
      const B = w(k);
      if (C(B), e.onChange && // Trigger event only when value changed
      (B.length !== x.value.length || B.some((U, ne) => {
        var Q;
        return ((Q = x.value[ne]) === null || Q === void 0 ? void 0 : Q.value) !== (U == null ? void 0 : U.value);
      }))) {
        const U = e.labelInValue ? B.map((Q) => g(g({}, Q), {
          originLabel: Q.label,
          label: typeof Q.label == "function" ? Q.label() : Q.label
        })) : B.map((Q) => Q.value), ne = B.map((Q) => ka($(Q.value)));
        e.onChange(
          // Value
          a.value ? U : U[0],
          // Option
          a.value ? ne : ne[0]
        );
      }
    }, [P, M] = Ht(null), [L, j] = Ht(0), A = T(() => e.defaultActiveFirstOption !== void 0 ? e.defaultActiveFirstOption : e.mode !== "combobox"), z = function(k, B) {
      let {
        source: U = "keyboard"
      } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      j(B), e.backfill && e.mode === "combobox" && k !== null && U === "keyboard" && M(String(k));
    }, q = (k, B) => {
      const U = () => {
        var ne;
        const Q = $(k), le = Q == null ? void 0 : Q[c.value.label];
        return [e.labelInValue ? {
          label: typeof le == "function" ? le() : le,
          originLabel: le,
          value: k,
          key: (ne = Q == null ? void 0 : Q.key) !== null && ne !== void 0 ? ne : k
        } : k, ka(Q)];
      };
      if (B && e.onSelect) {
        const [ne, Q] = U();
        e.onSelect(ne, Q);
      } else if (!B && e.onDeselect) {
        const [ne, Q] = U();
        e.onDeselect(ne, Q);
      }
    }, Y = (k, B) => {
      let U;
      const ne = a.value ? B.selected : !0;
      ne ? U = a.value ? [...x.value, k] : [k] : U = x.value.filter((Q) => Q.value !== k), H(U), q(k, ne), e.mode === "combobox" ? M("") : (!a.value || e.autoClearSearchValue) && (f(""), M(""));
    }, K = (k, B) => {
      H(k), (B.type === "remove" || B.type === "clear") && B.values.forEach((U) => {
        q(U.value, !1);
      });
    }, W = (k, B) => {
      var U;
      if (f(k), M(null), B.source === "submit") {
        const ne = (k || "").trim();
        if (ne) {
          const Q = Array.from(/* @__PURE__ */ new Set([...y.value, ne]));
          H(Q), q(ne, !0), f("");
        }
        return;
      }
      B.source !== "blur" && (e.mode === "combobox" && H(k), (U = e.onSearch) === null || U === void 0 || U.call(e, k));
    }, G = (k) => {
      let B = k;
      e.mode !== "tags" && (B = k.map((ne) => {
        const Q = h.value.get(ne);
        return Q == null ? void 0 : Q.value;
      }).filter((ne) => ne !== void 0));
      const U = Array.from(/* @__PURE__ */ new Set([...y.value, ...B]));
      H(U), U.forEach((ne) => {
        q(ne, !0);
      });
    }, ee = T(() => e.virtual !== !1 && e.dropdownMatchSelectWidth !== !1);
    Wx(Vm(g(g({}, d), {
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
      eC(e);
    }, {
      flush: "post"
    });
    const re = te();
    n({
      focus() {
        var k;
        (k = re.value) === null || k === void 0 || k.focus();
      },
      blur() {
        var k;
        (k = re.value) === null || k === void 0 || k.blur();
      },
      scrollTo(k) {
        var B;
        (B = re.value) === null || B === void 0 || B.scrollTo(k);
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
    return () => v(Ix, N(N(N({}, ie.value), o), {}, {
      id: i,
      prefixCls: e.prefixCls,
      ref: re,
      omitDomProps: oC,
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
}), ls = () => null;
ls.isSelectOption = !0;
ls.displayName = "ASelectOption";
const ss = () => null;
ss.isSelectOptGroup = !0;
ss.displayName = "ASelectOptGroup";
var aC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, lC = Symbol("iconContext"), qm = function() {
  return Ee(lC, {
    prefixCls: te("anticon"),
    rootClassName: te(""),
    csp: te()
  });
};
function cs() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function sC(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var zu = "data-vc-order", cC = "vc-icon-key", il = /* @__PURE__ */ new Map();
function Km() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : cC;
}
function us(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function uC(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Ym(e) {
  return Array.from((il.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Qm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!cs())
    return null;
  var n = t.csp, o = t.prepend, r = document.createElement("style");
  r.setAttribute(zu, uC(o)), n && n.nonce && (r.nonce = n.nonce), r.innerHTML = e;
  var i = us(t), a = i.firstChild;
  if (o) {
    if (o === "queue") {
      var l = Ym(i).filter(function(s) {
        return ["prepend", "prependQueue"].includes(s.getAttribute(zu));
      });
      if (l.length)
        return i.insertBefore(r, l[l.length - 1].nextSibling), r;
    }
    i.insertBefore(r, a);
  } else
    i.appendChild(r);
  return r;
}
function dC(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = us(t);
  return Ym(n).find(function(o) {
    return o.getAttribute(Km(t)) === e;
  });
}
function fC(e, t) {
  var n = il.get(e);
  if (!n || !sC(document, n)) {
    var o = Qm("", t), r = o.parentNode;
    il.set(e, r), e.removeChild(o);
  }
}
function pC(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = us(n);
  fC(o, n);
  var r = dC(t, n);
  if (r)
    return n.csp && n.csp.nonce && r.nonce !== n.csp.nonce && (r.nonce = n.csp.nonce), r.innerHTML !== e && (r.innerHTML = e), r;
  var i = Qm(e, n);
  return i.setAttribute(Km(n), t), i;
}
function Vu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      mC(e, r, n[r]);
    });
  }
  return e;
}
function mC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function gC(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function vC(e, t) {
  gC(e, "[@ant-design/icons-vue] ".concat(t));
}
function Wu(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function al(e, t, n) {
  return n ? Zn(e.tag, Vu({
    key: t
  }, n, e.attrs), (e.children || []).map(function(o, r) {
    return al(o, "".concat(t, "-").concat(e.tag, "-").concat(r));
  })) : Zn(e.tag, Vu({
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
var hC = `
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
function yC(e) {
  return cs() ? eg(e) instanceof ShadowRoot : !1;
}
function bC(e) {
  return yC(e) ? eg(e) : null;
}
var wC = function() {
  var t = qm(), n = t.prefixCls, o = t.csp, r = Ut(), i = hC;
  n && (i = i.replace(/anticon/g, n.value)), Fe(function() {
    if (cs()) {
      var a = r.vnode.el, l = bC(a);
      pC(i, "@ant-design-vue-icons", {
        prepend: !0,
        csp: o.value,
        attachTo: l
      });
    }
  });
}, SC = ["icon", "primaryColor", "secondaryColor"];
function xC(e, t) {
  if (e == null) return {};
  var n = CC(e, t), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      o = i[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
function CC(e, t) {
  if (e == null) return {};
  var n = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Dr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      $C(e, r, n[r]);
    });
  }
  return e;
}
function $C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Mo = Le({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function OC(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Mo.primaryColor = t, Mo.secondaryColor = n || Zm(t), Mo.calculated = !!n;
}
function PC() {
  return Dr({}, Mo);
}
var cn = function(t, n) {
  var o = Dr({}, t, n.attrs), r = o.icon, i = o.primaryColor, a = o.secondaryColor, l = xC(o, SC), s = Mo;
  if (i && (s = {
    primaryColor: i,
    secondaryColor: a || Zm(i)
  }), vC(Wu(r), "icon should be icon definiton, but got ".concat(r)), !Wu(r))
    return null;
  var c = r;
  return c && typeof c.icon == "function" && (c = Dr({}, c, {
    icon: c.icon(s.primaryColor, s.secondaryColor)
  })), al(c.icon, "svg-".concat(c.name), Dr({}, l, {
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
cn.getTwoToneColors = PC;
cn.setTwoToneColors = OC;
function IC(e, t) {
  return AC(e) || _C(e, t) || EC(e, t) || TC();
}
function TC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function EC(e, t) {
  if (e) {
    if (typeof e == "string") return Uu(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Uu(e, t);
  }
}
function Uu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++)
    o[n] = e[n];
  return o;
}
function _C(e, t) {
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
function AC(e) {
  if (Array.isArray(e)) return e;
}
function tg(e) {
  var t = Jm(e), n = IC(t, 2), o = n[0], r = n[1];
  return cn.setTwoToneColors({
    primaryColor: o,
    secondaryColor: r
  });
}
function MC() {
  var e = cn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var RC = Z({
  name: "InsertStyles",
  setup: function() {
    return wC(), function() {
      return null;
    };
  }
}), FC = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function NC(e, t) {
  return jC(e) || HC(e, t) || LC(e, t) || DC();
}
function DC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LC(e, t) {
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
function jC(e) {
  if (Array.isArray(e)) return e;
}
function Xu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      $o(e, r, n[r]);
    });
  }
  return e;
}
function $o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function BC(e, t) {
  if (e == null) return {};
  var n = zC(e, t), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      o = i[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
function zC(e, t) {
  if (e == null) return {};
  var n = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
tg(Sy.primary);
var de = function(t, n) {
  var o, r = Xu({}, t, n.attrs), i = r.class, a = r.icon, l = r.spin, s = r.rotate, c = r.tabindex, u = r.twoToneColor, f = r.onClick, d = BC(r, FC), p = qm(), h = p.prefixCls, m = p.rootClassName, w = (o = {}, $o(o, m.value, !!m.value), $o(o, h.value, !0), $o(o, "".concat(h.value, "-").concat(a.name), !!a.name), $o(o, "".concat(h.value, "-spin"), !!l || a.name === "loading"), o), b = c;
  b === void 0 && f && (b = -1);
  var C = s ? {
    msTransform: "rotate(".concat(s, "deg)"),
    transform: "rotate(".concat(s, "deg)")
  } : void 0, S = Jm(u), x = NC(S, 2), $ = x[0], O = x[1];
  return v("span", Xu({
    role: "img",
    "aria-label": a.name
  }, d, {
    onClick: f,
    class: [w, i],
    tabindex: b
  }), [v(cn, {
    icon: a,
    primaryColor: $,
    secondaryColor: O,
    style: C
  }, null), v(RC, null, null)]);
};
de.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
de.displayName = "AntdIcon";
de.inheritAttrs = !1;
de.getTwoToneColor = MC;
de.setTwoToneColor = tg;
function ku(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      VC(e, r, n[r]);
    });
  }
  return e;
}
function VC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ds = function(t, n) {
  var o = ku({}, t, n.attrs);
  return v(de, ku({}, o, {
    icon: aC
  }), null);
};
ds.displayName = "DownOutlined";
ds.inheritAttrs = !1;
var WC = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
function qu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      UC(e, r, n[r]);
    });
  }
  return e;
}
function UC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ot = function(t, n) {
  var o = qu({}, t, n.attrs);
  return v(de, qu({}, o, {
    icon: WC
  }), null);
};
Ot.displayName = "LoadingOutlined";
Ot.inheritAttrs = !1;
var GC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
function Ku(e) {
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
  var o = Ku({}, t, n.attrs);
  return v(de, Ku({}, o, {
    icon: GC
  }), null);
};
Pi.displayName = "CheckOutlined";
Pi.inheritAttrs = !1;
var kC = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
function Yu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      qC(e, r, n[r]);
    });
  }
  return e;
}
function qC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var un = function(t, n) {
  var o = Yu({}, t, n.attrs);
  return v(de, Yu({}, o, {
    icon: kC
  }), null);
};
un.displayName = "CloseOutlined";
un.inheritAttrs = !1;
var KC = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
function Qu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      YC(e, r, n[r]);
    });
  }
  return e;
}
function YC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var St = function(t, n) {
  var o = Qu({}, t, n.attrs);
  return v(de, Qu({}, o, {
    icon: KC
  }), null);
};
St.displayName = "CloseCircleFilled";
St.inheritAttrs = !1;
var QC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
function Zu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      ZC(e, r, n[r]);
    });
  }
  return e;
}
function ZC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ii = function(t, n) {
  var o = Zu({}, t, n.attrs);
  return v(de, Zu({}, o, {
    icon: QC
  }), null);
};
Ii.displayName = "SearchOutlined";
Ii.inheritAttrs = !1;
function JC(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    loading: n,
    multiple: o,
    prefixCls: r,
    hasFeedback: i,
    feedbackIcon: a,
    showArrow: l
  } = e, s = e.suffixIcon || t.suffixIcon && t.suffixIcon(), c = e.clearIcon || t.clearIcon && t.clearIcon(), u = e.menuItemSelectedIcon || t.menuItemSelectedIcon && t.menuItemSelectedIcon(), f = e.removeIcon || t.removeIcon && t.removeIcon(), d = c ?? v(St, null, null), p = (b) => v(Ie, null, [l !== !1 && b, i && a]);
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
      }, null) : v(ds, {
        class: b
      }, null));
    };
  }
  let m = null;
  u !== void 0 ? m = u : o ? m = v(Pi, null, null) : m = null;
  let w = null;
  return f !== void 0 ? w = f : w = v(un, null, null), {
    clearIcon: d,
    suffixIcon: h,
    itemIcon: m,
    removeIcon: w
  };
}
function fs(e) {
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
const Zr = Symbol("ContextProps"), Jr = Symbol("InternalContextProps"), e$ = function(e) {
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
}), sn = fs({}), Ju = Z({
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
function Kn(e, t, n) {
  return oe({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const Ti = (e, t) => t || e, t$ = (e) => {
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
}, n$ = (e) => {
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
}, o$ = Ge("Space", (e) => [n$(e), t$(e)]);
var r$ = "[object Symbol]";
function Ei(e) {
  return typeof e == "symbol" || Ft(e) && _n(e) == r$;
}
function ps(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var i$ = 1 / 0, ed = wt ? wt.prototype : void 0, td = ed ? ed.toString : void 0;
function ng(e) {
  if (typeof e == "string")
    return e;
  if (ut(e))
    return ps(e, ng) + "";
  if (Ei(e))
    return td ? td.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -i$ ? "-0" : t;
}
var a$ = /\s/;
function l$(e) {
  for (var t = e.length; t-- && a$.test(e.charAt(t)); )
    ;
  return t;
}
var s$ = /^\s+/;
function c$(e) {
  return e && e.slice(0, l$(e) + 1).replace(s$, "");
}
var nd = NaN, u$ = /^[-+]0x[0-9a-f]+$/i, d$ = /^0b[01]+$/i, f$ = /^0o[0-7]+$/i, p$ = parseInt;
function ul(e) {
  if (typeof e == "number")
    return e;
  if (Ei(e))
    return nd;
  if (Vt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Vt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = c$(e);
  var n = d$.test(e);
  return n || f$.test(e) ? p$(e.slice(2), n ? 2 : 8) : u$.test(e) ? nd : +e;
}
var od = 1 / 0, m$ = 17976931348623157e292;
function g$(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = ul(e), e === od || e === -od) {
    var t = e < 0 ? -1 : 1;
    return t * m$;
  }
  return e === e ? e : 0;
}
function v$(e) {
  var t = g$(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function ms(e) {
  return e;
}
var rd = Object.create, h$ = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Vt(t))
      return {};
    if (rd)
      return rd(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function y$(e, t, n) {
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
function b$(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var w$ = 800, S$ = 16, x$ = Date.now;
function C$(e) {
  var t = 0, n = 0;
  return function() {
    var o = x$(), r = S$ - (o - n);
    if (n = o, r > 0) {
      if (++t >= w$)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function $$(e) {
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
}(), O$ = ei ? function(e, t) {
  return ei(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: $$(t),
    writable: !0
  });
} : ms, og = C$(O$);
function P$(e, t) {
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
function I$(e) {
  return e !== e;
}
function T$(e, t, n) {
  for (var o = n - 1, r = e.length; ++o < r; )
    if (e[o] === t)
      return o;
  return -1;
}
function E$(e, t, n) {
  return t === t ? T$(e, t, n) : rg(e, I$, n);
}
function _$(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && E$(e, t, 0) > -1;
}
function ig(e, t, n) {
  t == "__proto__" && ei ? ei(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var A$ = Object.prototype, M$ = A$.hasOwnProperty;
function ag(e, t, n) {
  var o = e[t];
  (!(M$.call(e, t) && kl(o, n)) || n === void 0 && !(t in e)) && ig(e, t, n);
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
var id = Math.max;
function lg(e, t, n) {
  return t = id(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, i = id(o.length - t, 0), a = Array(i); ++r < i; )
      a[r] = o[t + r];
    r = -1;
    for (var l = Array(t + 1); ++r < t; )
      l[r] = o[r];
    return l[t] = n(a), y$(e, this, l);
  };
}
function R$(e, t) {
  return og(lg(e, t, ms), e + "");
}
function F$(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var N$ = Object.prototype, D$ = N$.hasOwnProperty;
function L$(e) {
  if (!Vt(e))
    return F$(e);
  var t = Si(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !D$.call(e, o)) || n.push(o);
  return n;
}
function gs(e) {
  return vo(e) ? Em(e, !0) : L$(e);
}
var H$ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, j$ = /^\w*$/;
function vs(e, t) {
  if (ut(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ei(e) ? !0 : j$.test(e) || !H$.test(e) || t != null && e in Object(t);
}
var B$ = "Expected a function";
function hs(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(B$);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], i = n.cache;
    if (i.has(r))
      return i.get(r);
    var a = e.apply(this, o);
    return n.cache = i.set(r, a) || i, a;
  };
  return n.cache = new (hs.Cache || kt)(), n;
}
hs.Cache = kt;
var z$ = 500;
function V$(e) {
  var t = hs(e, function(o) {
    return n.size === z$ && n.clear(), o;
  }), n = t.cache;
  return t;
}
var W$ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, U$ = /\\(\\)?/g, G$ = V$(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(W$, function(n, o, r, i) {
    t.push(r ? i.replace(U$, "$1") : o || n);
  }), t;
});
function X$(e) {
  return e == null ? "" : ng(e);
}
function _i(e, t) {
  return ut(e) ? e : vs(e, t) ? [e] : G$(X$(e));
}
var k$ = 1 / 0;
function ir(e) {
  if (typeof e == "string" || Ei(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -k$ ? "-0" : t;
}
function ys(e, t) {
  t = _i(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[ir(t[n++])];
  return n && n == o ? e : void 0;
}
function q$(e, t, n) {
  var o = e == null ? void 0 : ys(e, t);
  return o === void 0 ? n : o;
}
var ad = wt ? wt.isConcatSpreadable : void 0;
function K$(e) {
  return ut(e) || wi(e) || !!(ad && e && e[ad]);
}
function Y$(e, t, n, o, r) {
  var i = -1, a = e.length;
  for (n || (n = K$), r || (r = []); ++i < a; ) {
    var l = e[i];
    n(l) ? ql(r, l) : r[r.length] = l;
  }
  return r;
}
function Q$(e) {
  var t = e == null ? 0 : e.length;
  return t ? Y$(e) : [];
}
function Z$(e) {
  return og(lg(e, void 0, Q$), e + "");
}
var bs = _m(Object.getPrototypeOf, Object), J$ = "[object Object]", e2 = Function.prototype, t2 = Object.prototype, sg = e2.toString, n2 = t2.hasOwnProperty, o2 = sg.call(Object);
function cg(e) {
  if (!Ft(e) || _n(e) != J$)
    return !1;
  var t = bs(e);
  if (t === null)
    return !0;
  var n = n2.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && sg.call(n) == o2;
}
function r2(e, t, n) {
  var o = -1, r = e.length;
  t < 0 && (t = -t > r ? 0 : r + t), n = n > r ? r : n, n < 0 && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var i = Array(r); ++o < r; )
    i[o] = e[o + t];
  return i;
}
function i2(e, t) {
  return e && rr(t, ho(t), e);
}
function a2(e, t) {
  return e && rr(t, gs(t), e);
}
var ug = typeof exports == "object" && exports && !exports.nodeType && exports, ld = ug && typeof module == "object" && module && !module.nodeType && module, l2 = ld && ld.exports === ug, sd = l2 ? Pt.Buffer : void 0, cd = sd ? sd.allocUnsafe : void 0;
function s2(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = cd ? cd(n) : new e.constructor(n);
  return e.copy(o), o;
}
function c2(e, t) {
  return rr(e, Kl(e), t);
}
var u2 = Object.getOwnPropertySymbols, dg = u2 ? function(e) {
  for (var t = []; e; )
    ql(t, Kl(e)), e = bs(e);
  return t;
} : $m;
function d2(e, t) {
  return rr(e, dg(e), t);
}
function fg(e) {
  return Cm(e, gs, dg);
}
var f2 = Object.prototype, p2 = f2.hasOwnProperty;
function m2(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && p2.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
function ws(e) {
  var t = new e.constructor(e.byteLength);
  return new Yr(t).set(new Yr(e)), t;
}
function g2(e, t) {
  var n = t ? ws(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var v2 = /\w*$/;
function h2(e) {
  var t = new e.constructor(e.source, v2.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var ud = wt ? wt.prototype : void 0, dd = ud ? ud.valueOf : void 0;
function y2(e) {
  return dd ? Object(dd.call(e)) : {};
}
function b2(e, t) {
  var n = t ? ws(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var w2 = "[object Boolean]", S2 = "[object Date]", x2 = "[object Map]", C2 = "[object Number]", $2 = "[object RegExp]", O2 = "[object Set]", P2 = "[object String]", I2 = "[object Symbol]", T2 = "[object ArrayBuffer]", E2 = "[object DataView]", _2 = "[object Float32Array]", A2 = "[object Float64Array]", M2 = "[object Int8Array]", R2 = "[object Int16Array]", F2 = "[object Int32Array]", N2 = "[object Uint8Array]", D2 = "[object Uint8ClampedArray]", L2 = "[object Uint16Array]", H2 = "[object Uint32Array]";
function j2(e, t, n) {
  var o = e.constructor;
  switch (t) {
    case T2:
      return ws(e);
    case w2:
    case S2:
      return new o(+e);
    case E2:
      return g2(e, n);
    case _2:
    case A2:
    case M2:
    case R2:
    case F2:
    case N2:
    case D2:
    case L2:
    case H2:
      return b2(e, n);
    case x2:
      return new o();
    case C2:
    case P2:
      return new o(e);
    case $2:
      return h2(e);
    case O2:
      return new o();
    case I2:
      return y2(e);
  }
}
function B2(e) {
  return typeof e.constructor == "function" && !Si(e) ? h$(bs(e)) : {};
}
var z2 = "[object Map]";
function V2(e) {
  return Ft(e) && gt(e) == z2;
}
var fd = lo && lo.isMap, W2 = fd ? Ql(fd) : V2, U2 = "[object Set]";
function G2(e) {
  return Ft(e) && gt(e) == U2;
}
var pd = lo && lo.isSet, X2 = pd ? Ql(pd) : G2, k2 = 1, q2 = 2, K2 = 4, pg = "[object Arguments]", Y2 = "[object Array]", Q2 = "[object Boolean]", Z2 = "[object Date]", J2 = "[object Error]", mg = "[object Function]", eO = "[object GeneratorFunction]", tO = "[object Map]", nO = "[object Number]", gg = "[object Object]", oO = "[object RegExp]", rO = "[object Set]", iO = "[object String]", aO = "[object Symbol]", lO = "[object WeakMap]", sO = "[object ArrayBuffer]", cO = "[object DataView]", uO = "[object Float32Array]", dO = "[object Float64Array]", fO = "[object Int8Array]", pO = "[object Int16Array]", mO = "[object Int32Array]", gO = "[object Uint8Array]", vO = "[object Uint8ClampedArray]", hO = "[object Uint16Array]", yO = "[object Uint32Array]", xe = {};
xe[pg] = xe[Y2] = xe[sO] = xe[cO] = xe[Q2] = xe[Z2] = xe[uO] = xe[dO] = xe[fO] = xe[pO] = xe[mO] = xe[tO] = xe[nO] = xe[gg] = xe[oO] = xe[rO] = xe[iO] = xe[aO] = xe[gO] = xe[vO] = xe[hO] = xe[yO] = !0;
xe[J2] = xe[mg] = xe[lO] = !1;
function Ro(e, t, n, o, r, i) {
  var a, l = t & k2, s = t & q2, c = t & K2;
  if (n && (a = r ? n(e, o, r, i) : n(e)), a !== void 0)
    return a;
  if (!Vt(e))
    return e;
  var u = ut(e);
  if (u) {
    if (a = m2(e), !l)
      return b$(e, a);
  } else {
    var f = gt(e), d = f == mg || f == eO;
    if (Ko(e))
      return s2(e, l);
    if (f == gg || f == pg || d && !r) {
      if (a = s || d ? {} : B2(e), !l)
        return s ? d2(e, a2(a, e)) : c2(e, i2(a, e));
    } else {
      if (!xe[f])
        return r ? e : {};
      a = j2(e, f, l);
    }
  }
  i || (i = new At());
  var p = i.get(e);
  if (p)
    return p;
  i.set(e, a), X2(e) ? e.forEach(function(w) {
    a.add(Ro(w, t, n, w, e, i));
  }) : W2(e) && e.forEach(function(w, b) {
    a.set(b, Ro(w, t, n, b, e, i));
  });
  var h = c ? s ? fg : Ja : s ? gs : ho, m = u ? void 0 : h(e);
  return P$(m || e, function(w, b) {
    m && (b = w, w = e[b]), ag(a, b, Ro(w, t, n, b, e, i));
  }), a;
}
var bO = 1, wO = 4;
function Lr(e) {
  return Ro(e, bO | wO);
}
var SO = 1, xO = 2;
function CO(e, t, n, o) {
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
      var u = new At(), f;
      if (!(f === void 0 ? xi(c, s, SO | xO, o, u) : f))
        return !1;
    }
  }
  return !0;
}
function vg(e) {
  return e === e && !Vt(e);
}
function $O(e) {
  for (var t = ho(e), n = t.length; n--; ) {
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
function OO(e) {
  var t = $O(e);
  return t.length == 1 && t[0][2] ? hg(t[0][0], t[0][1]) : function(n) {
    return n === e || CO(n, e, t);
  };
}
function PO(e, t) {
  return e != null && t in Object(e);
}
function IO(e, t, n) {
  t = _i(t, e);
  for (var o = -1, r = t.length, i = !1; ++o < r; ) {
    var a = ir(t[o]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++o != r ? i : (r = e == null ? 0 : e.length, !!r && Yl(r) && Im(a, r) && (ut(e) || wi(e)));
}
function TO(e, t) {
  return e != null && IO(e, t, PO);
}
var EO = 1, _O = 2;
function AO(e, t) {
  return vs(e) && vg(t) ? hg(ir(e), t) : function(n) {
    var o = q$(n, e);
    return o === void 0 && o === t ? TO(n, e) : xi(t, o, EO | _O);
  };
}
function MO(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function RO(e) {
  return function(t) {
    return ys(t, e);
  };
}
function FO(e) {
  return vs(e) ? MO(ir(e)) : RO(e);
}
function Ss(e) {
  return typeof e == "function" ? e : e == null ? ms : typeof e == "object" ? ut(e) ? AO(e[0], e[1]) : OO(e) : FO(e);
}
function NO(e, t, n, o) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; ) {
    var a = e[r];
    t(o, a, n(a), e);
  }
  return o;
}
function DO(e) {
  return function(t, n, o) {
    for (var r = -1, i = Object(t), a = o(t), l = a.length; l--; ) {
      var s = a[++r];
      if (n(i[s], s, i) === !1)
        break;
    }
    return t;
  };
}
var LO = DO();
function HO(e, t) {
  return e && LO(e, t, ho);
}
function jO(e, t) {
  return function(n, o) {
    if (n == null)
      return n;
    if (!vo(n))
      return e(n, o);
    for (var r = n.length, i = -1, a = Object(n); ++i < r && o(a[i], i, a) !== !1; )
      ;
    return n;
  };
}
var BO = jO(HO);
function zO(e, t, n, o) {
  return BO(e, function(r, i, a) {
    t(o, r, n(r), a);
  }), o;
}
function VO(e, t) {
  return function(n, o) {
    var r = ut(n) ? NO : zO, i = t();
    return r(n, e, Ss(o), i);
  };
}
var pa = function() {
  return Pt.Date.now();
}, WO = "Expected a function", UO = Math.max, GO = Math.min;
function XO(e, t, n) {
  var o, r, i, a, l, s, c = 0, u = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(WO);
  t = ul(t) || 0, Vt(n) && (u = !!n.leading, f = "maxWait" in n, i = f ? UO(ul(n.maxWait) || 0, t) : i, d = "trailing" in n ? !!n.trailing : d);
  function p(O) {
    var y = o, I = r;
    return o = r = void 0, c = O, a = e.apply(I, y), a;
  }
  function h(O) {
    return c = O, l = setTimeout(b, t), u ? p(O) : a;
  }
  function m(O) {
    var y = O - s, I = O - c, E = t - y;
    return f ? GO(E, i - I) : E;
  }
  function w(O) {
    var y = O - s, I = O - c;
    return s === void 0 || y >= t || y < 0 || f && I >= i;
  }
  function b() {
    var O = pa();
    if (w(O))
      return C(O);
    l = setTimeout(b, m(O));
  }
  function C(O) {
    return l = void 0, d && o ? p(O) : (o = r = void 0, a);
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
      if (f)
        return clearTimeout(l), l = setTimeout(b, t), p(s);
    }
    return l === void 0 && (l = setTimeout(b, t)), a;
  }
  return $.cancel = S, $.flush = x, $;
}
function kO(e) {
  return Ft(e) && vo(e);
}
function qO(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function KO(e) {
  return function(t, n, o) {
    var r = Object(t);
    if (!vo(t)) {
      var i = Ss(n);
      t = ho(t), n = function(l) {
        return i(r[l], l, r);
      };
    }
    var a = e(t, n, o);
    return a > -1 ? r[i ? t[a] : a] : void 0;
  };
}
var YO = Math.max;
function QO(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = n == null ? 0 : v$(n);
  return r < 0 && (r = YO(o + r, 0)), rg(e, Ss(t), r);
}
var ZO = KO(QO), JO = Math.min;
function e4(e, t, n) {
  for (var o = _$, r = e[0].length, i = e.length, a = i, l = Array(i), s = 1 / 0, c = []; a--; ) {
    var u = e[a];
    s = JO(u.length, s), l[a] = r >= 120 && u.length >= 120 ? new qo(a && u) : void 0;
  }
  u = e[0];
  var f = -1, d = l[0];
  e:
    for (; ++f < r && c.length < s; ) {
      var p = u[f], h = p;
      if (p = p !== 0 ? p : 0, !(d ? Za(d, h) : o(c, h))) {
        for (a = i; --a; ) {
          var m = l[a];
          if (!(m ? Za(m, h) : o(e[a], h)))
            continue e;
        }
        d && d.push(h), c.push(p);
      }
    }
  return c;
}
function t4(e) {
  return kO(e) ? e : [];
}
var n4 = R$(function(e) {
  var t = ps(e, t4);
  return t.length && t[0] === e[0] ? e4(t) : [];
});
function o4(e, t) {
  return t.length < 2 ? e : ys(e, r2(t, 0, -1));
}
var r4 = "[object Map]", i4 = "[object Set]", a4 = Object.prototype, l4 = a4.hasOwnProperty;
function yg(e) {
  if (e == null)
    return !0;
  if (vo(e) && (ut(e) || typeof e == "string" || typeof e.splice == "function" || Ko(e) || Zl(e) || wi(e)))
    return !e.length;
  var t = gt(e);
  if (t == r4 || t == i4)
    return !e.size;
  if (Si(e))
    return !Am(e).length;
  for (var n in e)
    if (l4.call(e, n))
      return !1;
  return !0;
}
function s4(e, t) {
  return t = _i(t, e), e = o4(e, t), e == null || delete e[ir(qO(t))];
}
function c4(e) {
  return cg(e) ? void 0 : e;
}
var u4 = 1, d4 = 2, f4 = 4, p4 = Z$(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var o = !1;
  t = ps(t, function(i) {
    return i = _i(i, e), o || (o = i.length > 1), i;
  }), rr(e, fg(e), n), o && (n = Ro(n, u4 | d4 | f4, c4));
  for (var r = t.length; r--; )
    s4(n, t[r]);
  return n;
}), m4 = VO(function(e, t, n) {
  e[n ? 0 : 1].push(t);
}, function() {
  return [[], []];
});
const g4 = () => ({
  compactSize: String,
  compactDirection: V.oneOf(an("horizontal", "vertical")).def("horizontal"),
  isFirstItem: Ce(),
  isLastItem: Ce()
}), Ai = fs(null), xs = (e, t) => {
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
}, md = Z({
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
}), v4 = () => ({
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
}), h4 = Z({
  name: "CompactItem",
  props: g4(),
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
  props: v4(),
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const {
      prefixCls: r,
      direction: i
    } = Se("space-compact", e), a = Ai.useInject(), [l, s] = o$(r), c = T(() => oe(r.value, s.value, {
      [`${r.value}-rtl`]: i.value === "rtl",
      [`${r.value}-block`]: e.block,
      [`${r.value}-vertical`]: e.direction === "vertical"
    }));
    return () => {
      var u;
      const f = Ze(((u = o.default) === null || u === void 0 ? void 0 : u.call(o)) || []);
      return f.length === 0 ? null : l(v("div", N(N({}, n), {}, {
        class: [c.value, n.class]
      }), [f.map((d, p) => {
        var h;
        const m = d && d.key || `${r.value}-item-${p}`, w = !a || yg(a);
        return v(h4, {
          key: m,
          compactSize: (h = e.size) !== null && h !== void 0 ? h : "middle",
          compactDirection: e.direction,
          isFirstItem: p === 0 && (w || (a == null ? void 0 : a.isFirstItem)),
          isLastItem: p === f.length - 1 && (w || (a == null ? void 0 : a.isLastItem))
        }, {
          default: () => [d]
        });
      })]));
    };
  }
});
const y4 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), b4 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Mi = function(e, t, n, o) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: g(g({}, y4(o)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: g(g({}, b4(o)), {
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
}, w4 = new fe("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), S4 = new fe("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), x4 = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const {
    antCls: n
  } = e, o = `${n}-fade`, r = t ? "&" : "";
  return [Mi(o, w4, S4, e.motionDurationMid, t), {
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
}, C4 = new fe("antMoveDownIn", {
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
}), $4 = new fe("antMoveDownOut", {
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
}), O4 = new fe("antMoveLeftIn", {
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
}), P4 = new fe("antMoveLeftOut", {
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
}), I4 = new fe("antMoveRightIn", {
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
}), T4 = new fe("antMoveRightOut", {
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
}), E4 = new fe("antMoveUpIn", {
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
}), _4 = new fe("antMoveUpOut", {
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
}), A4 = {
  "move-up": {
    inKeyframes: E4,
    outKeyframes: _4
  },
  "move-down": {
    inKeyframes: C4,
    outKeyframes: $4
  },
  "move-left": {
    inKeyframes: O4,
    outKeyframes: P4
  },
  "move-right": {
    inKeyframes: I4,
    outKeyframes: T4
  }
}, gd = (e, t) => {
  const {
    antCls: n
  } = e, o = `${n}-${t}`, {
    inKeyframes: r,
    outKeyframes: i
  } = A4[t];
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
}), M4 = new fe("antSlideLeftIn", {
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
}), R4 = new fe("antSlideLeftOut", {
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
}), F4 = new fe("antSlideRightIn", {
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
}), D4 = {
  "slide-up": {
    inKeyframes: bg,
    outKeyframes: wg
  },
  "slide-down": {
    inKeyframes: Sg,
    outKeyframes: xg
  },
  "slide-left": {
    inKeyframes: M4,
    outKeyframes: R4
  },
  "slide-right": {
    inKeyframes: F4,
    outKeyframes: N4
  }
}, vd = (e, t) => {
  const {
    antCls: n
  } = e, o = `${n}-${t}`, {
    inKeyframes: r,
    outKeyframes: i
  } = D4[t];
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
}, Cs = new fe("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), L4 = new fe("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), hd = new fe("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), yd = new fe("antZoomBigOut", {
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
}), j4 = new fe("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), B4 = new fe("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), z4 = new fe("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), V4 = new fe("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), W4 = new fe("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), U4 = new fe("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), G4 = new fe("antZoomDownOut", {
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
    inKeyframes: Cs,
    outKeyframes: L4
  },
  "zoom-big": {
    inKeyframes: hd,
    outKeyframes: yd
  },
  "zoom-big-fast": {
    inKeyframes: hd,
    outKeyframes: yd
  },
  "zoom-left": {
    inKeyframes: B4,
    outKeyframes: z4
  },
  "zoom-right": {
    inKeyframes: V4,
    outKeyframes: W4
  },
  "zoom-up": {
    inKeyframes: H4,
    outKeyframes: j4
  },
  "zoom-down": {
    inKeyframes: U4,
    outKeyframes: G4
  }
}, $s = (e, t) => {
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
}), bd = (e) => {
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
}, k4 = (e) => {
  const {
    antCls: t,
    componentCls: n
  } = e, o = `${n}-item`;
  return [
    {
      [`${n}-dropdown`]: g(g({}, nt(e)), {
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
        [`${o}-empty`]: g(g({}, bd(e)), {
          color: e.colorTextDisabled
        }),
        [`${o}`]: g(g({}, bd(e)), {
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
    vd(e, "slide-up"),
    vd(e, "slide-down"),
    gd(e, "move-up"),
    gd(e, "move-down")
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
function q4(e) {
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
      [`${n}-selector`]: g(g({}, nt(e)), {
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
function K4(e) {
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
function Y4(e, t, n) {
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
function Q4(e, t, n) {
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
function Os(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, o = `${n}-compact`;
  return {
    [o]: g(g({}, Y4(e, o, t)), Q4(n, o, t))
  };
}
const Z4 = (e) => {
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
}, J4 = (e) => {
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
}, eP = (e) => {
  const {
    componentCls: t,
    inputPaddingHorizontalBase: n,
    iconCls: o
  } = e;
  return {
    [t]: g(g({}, nt(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${t}-customize-input) ${t}-selector`]: g(g({}, Z4(e)), J4(e)),
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
}, tP = (e) => {
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
    eP(e),
    // Single
    K4(e),
    // Multiple
    q4(e),
    // Dropdown
    k4(e),
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
    Os(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, nP = Ge("Select", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const o = we(e, {
    rootPrefixCls: n,
    inputPaddingHorizontalBase: e.paddingSM - 1
  });
  return [tP(o)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
})), oP = () => g(g({}, Ue(km(), ["inputIcon", "mode", "getInputElement", "getRawInputElement", "backfill"])), {
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
}), wd = "SECRET_COMBOBOX_MODE_DO_NOT_USE", Et = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ASelect",
  Option: ls,
  OptGroup: ss,
  inheritAttrs: !1,
  props: Be(oP(), {
    listHeight: 256,
    listItemHeight: 24
  }),
  SECRET_COMBOBOX_MODE_DO_NOT_USE: wd,
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
    }, f = () => {
      var Y;
      (Y = a.value) === null || Y === void 0 || Y.blur();
    }, d = (Y) => {
      var K;
      (K = a.value) === null || K === void 0 || K.scrollTo(Y);
    }, p = T(() => {
      const {
        mode: Y
      } = e;
      if (Y !== "combobox")
        return Y === wd ? "combobox" : Y;
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
    } = xs(h, m), E = T(() => y.value || C.value), R = Tn(), _ = T(() => {
      var Y;
      return (Y = $.value) !== null && Y !== void 0 ? Y : R.value;
    }), [D, F] = nP(h), H = T(() => S()), P = T(() => e.placement !== void 0 ? e.placement : m.value === "rtl" ? "bottomRight" : "bottomLeft"), M = T(() => ln(H.value, DS(P.value), e.transitionName)), L = T(() => oe({
      [`${h.value}-lg`]: E.value === "large",
      [`${h.value}-sm`]: E.value === "small",
      [`${h.value}-rtl`]: m.value === "rtl",
      [`${h.value}-borderless`]: !e.bordered,
      [`${h.value}-in-form-item`]: s.isFormItemInput
    }, Kn(h.value, c.value, s.hasFeedback), I.value, F.value)), j = function() {
      for (var Y = arguments.length, K = new Array(Y), W = 0; W < Y; W++)
        K[W] = arguments[W];
      o("update:value", K[0]), o("change", ...K), l.onFieldChange();
    }, A = (Y) => {
      o("blur", Y), l.onFieldBlur();
    };
    i({
      blur: f,
      focus: u,
      scrollTo: d
    });
    const z = T(() => p.value === "multiple" || p.value === "tags"), q = T(() => e.showArrow !== void 0 ? e.showArrow : e.loading || !(z.value || p.value === "combobox"));
    return () => {
      var Y, K, W, G;
      const {
        notFoundContent: ee,
        listHeight: re = 256,
        listItemHeight: ie = 24,
        popupClassName: k,
        dropdownClassName: B,
        virtual: U,
        dropdownMatchSelectWidth: ne,
        id: Q = l.id.value,
        placeholder: le = (Y = r.placeholder) === null || Y === void 0 ? void 0 : Y.call(r),
        showArrow: ge
      } = e, {
        hasFeedback: he,
        feedbackIcon: Ne
      } = s;
      let ye;
      ee !== void 0 ? ye = ee : r.notFoundContent ? ye = r.notFoundContent() : p.value === "combobox" ? ye = null : ye = (b == null ? void 0 : b("Select")) || v(Hl, {
        componentName: "Select"
      }, null);
      const {
        suffixIcon: Xe,
        itemIcon: qe,
        removeIcon: sr,
        clearIcon: Wi
      } = JC(g(g({}, e), {
        multiple: z.value,
        prefixCls: h.value,
        hasFeedback: he,
        feedbackIcon: Ne,
        showArrow: q.value
      }), r), Fn = Ue(e, ["prefixCls", "suffixIcon", "itemIcon", "removeIcon", "clearIcon", "size", "bordered", "status"]), Nn = oe(k || B, {
        [`${h.value}-dropdown-${m.value}`]: m.value === "rtl"
      }, F.value);
      return D(v(iC, N(N(N({
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
        inputIcon: Xe,
        menuItemSelectedIcon: qe,
        removeIcon: sr,
        clearIcon: Wi,
        notFoundContent: ye,
        class: [L.value, n.class],
        getPopupContainer: x == null ? void 0 : x.value,
        dropdownClassName: Nn,
        onChange: j,
        onBlur: A,
        id: Q,
        dropdownRender: Fn.dropdownRender || r.dropdownRender,
        transitionName: M.value,
        children: (G = r.default) === null || G === void 0 ? void 0 : G.call(r),
        tagRender: e.tagRender || r.tagRender,
        optionLabelRender: r.optionLabel,
        maxTagPlaceholder: e.maxTagPlaceholder || r.maxTagPlaceholder,
        showArrow: he || ge,
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
var rP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
function Sd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      iP(e, r, n[r]);
    });
  }
  return e;
}
function iP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ps = function(t, n) {
  var o = Sd({}, t, n.attrs);
  return v(de, Sd({}, o, {
    icon: rP
  }), null);
};
Ps.displayName = "CheckCircleOutlined";
Ps.inheritAttrs = !1;
var aP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
function xd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      lP(e, r, n[r]);
    });
  }
  return e;
}
function lP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Is = function(t, n) {
  var o = xd({}, t, n.attrs);
  return v(de, xd({}, o, {
    icon: aP
  }), null);
};
Is.displayName = "ExclamationCircleOutlined";
Is.inheritAttrs = !1;
var sP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
function Cd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      cP(e, r, n[r]);
    });
  }
  return e;
}
function cP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ts = function(t, n) {
  var o = Cd({}, t, n.attrs);
  return v(de, Cd({}, o, {
    icon: sP
  }), null);
};
Ts.displayName = "InfoCircleOutlined";
Ts.inheritAttrs = !1;
var uP = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" };
function $d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      dP(e, r, n[r]);
    });
  }
  return e;
}
function dP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Es = function(t, n) {
  var o = $d({}, t, n.attrs);
  return v(de, $d({}, o, {
    icon: uP
  }), null);
};
Es.displayName = "CloseCircleOutlined";
Es.inheritAttrs = !1;
var fP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Od(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      pP(e, r, n[r]);
    });
  }
  return e;
}
function pP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var qt = function(t, n) {
  var o = Od({}, t, n.attrs);
  return v(de, Od({}, o, {
    icon: fP
  }), null);
};
qt.displayName = "CheckCircleFilled";
qt.inheritAttrs = !1;
var mP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
function Pd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      gP(e, r, n[r]);
    });
  }
  return e;
}
function gP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Kt = function(t, n) {
  var o = Pd({}, t, n.attrs);
  return v(de, Pd({}, o, {
    icon: mP
  }), null);
};
Kt.displayName = "ExclamationCircleFilled";
Kt.inheritAttrs = !1;
var vP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
function Id(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      hP(e, r, n[r]);
    });
  }
  return e;
}
function hP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Rn = function(t, n) {
  var o = Id({}, t, n.attrs);
  return v(de, Id({}, o, {
    icon: vP
  }), null);
};
Rn.displayName = "InfoCircleFilled";
Rn.inheritAttrs = !1;
const xr = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"], yP = (e) => ({
  xs: `(max-width: ${e.screenXSMax}px)`,
  sm: `(min-width: ${e.screenSM}px)`,
  md: `(min-width: ${e.screenMD}px)`,
  lg: `(min-width: ${e.screenLG}px)`,
  xl: `(min-width: ${e.screenXL}px)`,
  xxl: `(min-width: ${e.screenXXL}px)`,
  xxxl: `{min-width: ${e.screenXXXL}px}`
});
function bP() {
  const [, e] = go();
  return T(() => {
    const t = yP(e.value), n = /* @__PURE__ */ new Map();
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
}, wP = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: V.any
}, SP = Z({
  compatConfig: {
    MODE: 3
  },
  name: "TooltipContent",
  props: wP,
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
var xP = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function Td() {
}
const CP = Z({
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
    const i = X(), a = () => {
      const {
        prefixCls: u,
        tipId: f,
        overlayInnerStyle: d
      } = e;
      return [e.arrow ? v("div", {
        class: `${u}-arrow`,
        key: "arrow"
      }, [Zh(n, e, "arrowContent")]) : null, v(SP, {
        key: "content",
        prefixCls: u,
        id: f,
        overlayInnerStyle: d
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
    const s = X(!1), c = X(!1);
    return Pe(() => {
      const {
        destroyTooltipOnHide: u
      } = e;
      if (typeof u == "boolean")
        s.value = u;
      else if (u && typeof u == "object") {
        const {
          keepParent: f
        } = u;
        s.value = f === !0, c.value = f === !1;
      }
    }), () => {
      const {
        overlayClassName: u,
        trigger: f,
        mouseEnterDelay: d,
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
      } = e, y = xP(e, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"]), I = g({}, y);
      e.visible !== void 0 && (I.popupVisible = e.visible);
      const E = g(g(g({
        popupClassName: u,
        prefixCls: m,
        action: f,
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
        mouseEnterDelay: d
      }, I), o), {
        onPopupVisibleChange: e.onVisibleChange || Td,
        onPopupAlign: e.onPopupAlign || Td,
        ref: i,
        arrow: !!e.arrow,
        popup: a()
      });
      return v(Nm, E, {
        default: n.default
      });
    };
  }
}), _s = () => ({
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
}), $P = {
  adjustX: 1,
  adjustY: 1
}, Ed = {
  adjustX: 0,
  adjustY: 0
}, OP = [0, 0];
function _d(e) {
  return typeof e == "boolean" ? e ? $P : Ed : g(g({}, Ed), e);
}
function PP(e) {
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
      overflow: _d(r),
      targetOffset: OP
    }) : g(g({}, Og[l]), {
      overflow: _d(r)
    }), a[l].ignoreShake = !0;
  }), a;
}
function IP() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  for (let t = 0, n = e.length; t < n; t++)
    if (e[t] !== void 0)
      return e[t];
}
const TP = Vo.map((e) => `${e}-inverse`);
function EP(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [...TP, ...Vo].includes(e) : Vo.includes(e);
}
function _P(e, t) {
  const n = EP(t), o = oe({
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
function AP(e) {
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
    limitVerticalRadius: f
  } = t, {
    dropdownArrowOffsetVertical: d,
    dropdownArrowOffset: p
  } = AP({
    sizePopupArrow: o,
    contentRadius: u,
    borderRadiusOuter: a,
    limitVerticalRadius: f
  }), h = o / 2 + r;
  return {
    [n]: {
      // ============================ Basic ============================
      [`${n}-arrow`]: [g(g({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, Fy(o, i, a, s, l)), {
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
        top: d
      },
      [`&-placement-leftBottom ${n}-arrow`]: {
        bottom: d
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
        top: d
      },
      [`&-placement-rightBottom ${n}-arrow`]: {
        bottom: d
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
const MP = (e) => {
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
    tooltipRadiusOuter: f
  } = e;
  return [
    {
      [t]: g(g(g(g({}, nt(e)), {
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
      }), Ny(e, (d, p) => {
        let {
          darkColor: h
        } = p;
        return {
          [`&${t}-${d}`]: {
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
      borderRadiusOuter: f
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
}, RP = (e, t) => Ge("Tooltip", (o) => {
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
  return [MP(s), $s(o, "zoom-big-fast")];
}, (o) => {
  let {
    zIndexPopupBase: r,
    colorBgSpotlight: i
  } = o;
  return {
    zIndexPopup: r + 70,
    colorBgDefault: i
  };
})(e), FP = (e, t) => {
  const n = {}, o = g({}, e);
  return t.forEach((r) => {
    e && r in e && (n[r] = e[r], delete o[r]);
  }), {
    picked: n,
    omitted: o
  };
}, NP = () => g(g({}, _s()), {
  title: V.any
}), Tg = () => ({
  trigger: "hover",
  align: {},
  placement: "top",
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: !1,
  autoAdjustOverflow: !0
}), DP = Z({
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
      let [_, D] = R;
      Je(e[_] === void 0, "Tooltip", `\`${_}\` is deprecated, please use \`${D}\` instead.`);
    });
    const {
      prefixCls: a,
      getPopupContainer: l,
      direction: s,
      rootPrefixCls: c
    } = Se("tooltip", e), u = T(() => {
      var R;
      return (R = e.open) !== null && R !== void 0 ? R : e.visible;
    }), f = te(IP([e.open, e.visible])), d = te();
    let p;
    ae(u, (R) => {
      $e.cancel(p), p = $e(() => {
        f.value = !!R;
      });
    });
    const h = () => {
      var R;
      const _ = (R = e.title) !== null && R !== void 0 ? R : n.title;
      return !_ && _ !== 0;
    }, m = (R) => {
      const _ = h();
      u.value === void 0 && (f.value = _ ? !1 : R), _ || (o("update:visible", R), o("visibleChange", R), o("update:open", R), o("openChange", R));
    };
    i({
      getPopupDomNode: () => d.value.getPopupDomNode(),
      open: f,
      forcePopupAlign: () => {
        var R;
        return (R = d.value) === null || R === void 0 ? void 0 : R.forcePopupAlign();
      }
    });
    const b = T(() => {
      var R;
      const {
        builtinPlacements: _,
        autoAdjustOverflow: D,
        arrow: F,
        arrowPointAtCenter: H
      } = e;
      let P = H;
      return typeof F == "object" && (P = (R = F.pointAtCenter) !== null && R !== void 0 ? R : H), _ || PP({
        arrowPointAtCenter: P,
        autoAdjustOverflow: D
      });
    }), C = (R) => R || R === "", S = (R) => {
      const _ = R.type;
      if (typeof _ == "object" && R.props && ((_.__ANT_BUTTON === !0 || _ === "button") && C(R.props.disabled) || _.__ANT_SWITCH === !0 && (C(R.props.disabled) || C(R.props.loading)) || _.__ANT_RADIO === !0 && C(R.props.disabled))) {
        const {
          picked: D,
          omitted: F
        } = FP(Yh(R), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), H = g(g({
          display: "inline-block"
        }, D), {
          cursor: "not-allowed",
          lineHeight: 1,
          width: R.props && R.props.block ? "100%" : void 0
        }), P = g(g({}, F), {
          pointerEvents: "none"
        }), M = et(R, {
          style: P
        }, !0);
        return v("span", {
          style: H,
          class: `${a.value}-disabled-compatible-wrapper`
        }, [M]);
      }
      return R;
    }, x = () => {
      var R, _;
      return (R = e.title) !== null && R !== void 0 ? R : (_ = n.title) === null || _ === void 0 ? void 0 : _.call(n);
    }, $ = (R, _) => {
      const D = b.value, F = Object.keys(D).find((H) => {
        var P, M;
        return D[H].points[0] === ((P = _.points) === null || P === void 0 ? void 0 : P[0]) && D[H].points[1] === ((M = _.points) === null || M === void 0 ? void 0 : M[1]);
      });
      if (F) {
        const H = R.getBoundingClientRect(), P = {
          top: "50%",
          left: "50%"
        };
        F.indexOf("top") >= 0 || F.indexOf("Bottom") >= 0 ? P.top = `${H.height - _.offset[1]}px` : (F.indexOf("Top") >= 0 || F.indexOf("bottom") >= 0) && (P.top = `${-_.offset[1]}px`), F.indexOf("left") >= 0 || F.indexOf("Right") >= 0 ? P.left = `${H.width - _.offset[0]}px` : (F.indexOf("right") >= 0 || F.indexOf("Left") >= 0) && (P.left = `${-_.offset[0]}px`), R.style.transformOrigin = `${P.left} ${P.top}`;
      }
    }, O = T(() => _P(a.value, e.color)), y = T(() => r["data-popover-inject"]), [I, E] = RP(a, T(() => !y.value));
    return () => {
      var R, _;
      const {
        openClassName: D,
        overlayClassName: F,
        overlayStyle: H,
        overlayInnerStyle: P
      } = e;
      let M = (_ = ht((R = n.default) === null || R === void 0 ? void 0 : R.call(n))) !== null && _ !== void 0 ? _ : null;
      M = M.length === 1 ? M[0] : M;
      let L = f.value;
      if (u.value === void 0 && h() && (L = !1), !M)
        return null;
      const j = S(zt(M) && !Qh(M) ? M : v("span", null, [M])), A = oe({
        [D || `${a.value}-open`]: !0,
        [j.props && j.props.class]: j.props && j.props.class
      }), z = oe(F, {
        [`${a.value}-rtl`]: s.value === "rtl"
      }, O.value.className, E.value), q = g(g({}, O.value.overlayStyle), P), Y = O.value.arrowStyle, K = g(g(g({}, r), e), {
        prefixCls: a.value,
        arrow: !!e.arrow,
        getPopupContainer: l == null ? void 0 : l.value,
        builtinPlacements: b.value,
        visible: L,
        ref: d,
        overlayClassName: z,
        overlayStyle: g(g({}, Y), H),
        overlayInnerStyle: q,
        onVisibleChange: m,
        onPopupAlign: $,
        transitionName: ln(c.value, "zoom-big-fast", e.transitionName)
      });
      return I(v(CP, K, {
        default: () => [f.value ? et(j, {
          class: A
        }) : j],
        arrowContent: () => v("span", {
          class: `${a.value}-arrow-content`
        }, null),
        overlay: x
      }));
    };
  }
}), so = In(DP), LP = (e) => {
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
    marginXS: f,
    colorBgElevated: d
  } = e;
  return [
    {
      [t]: g(g({}, nt(e)), {
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
        "--antd-arrow-background-color": d,
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
          marginBottom: f,
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
}, jP = (e) => {
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
  } = e, u = a - Math.round(l * s), f = u / 2, d = u / 2 - n, p = c;
  return {
    [t]: {
      [`${t}-inner`]: {
        padding: 0
      },
      [`${t}-title`]: {
        margin: 0,
        padding: `${f}px ${p}px ${d}px`,
        borderBottom: `${n}px ${o} ${r}`
      },
      [`${t}-inner-content`]: {
        padding: `${i}px ${p}px`
      }
    }
  };
}, BP = Ge("Popover", (e) => {
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
  return [LP(r), HP(r), o && jP(r), $s(r, "zoom-big")];
}, (e) => {
  let {
    zIndexPopupBase: t
  } = e;
  return {
    zIndexPopup: t + 30,
    width: 177
  };
}), zP = () => g(g({}, _s()), {
  content: Re(),
  title: Re()
}), VP = Z({
  compatConfig: {
    MODE: 3
  },
  name: "APopover",
  inheritAttrs: !1,
  props: Be(zP(), g(g({}, Tg()), {
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
    Je(e.visible === void 0, "popover", "`visible` will be removed in next major version, please use `open` instead."), n({
      getPopupDomNode: () => {
        var d, p;
        return (p = (d = i.value) === null || d === void 0 ? void 0 : d.getPopupDomNode) === null || p === void 0 ? void 0 : p.call(d);
      }
    });
    const {
      prefixCls: a,
      configProvider: l
    } = Se("popover", e), [s, c] = BP(a), u = T(() => l.getPrefixCls()), f = () => {
      var d, p;
      const {
        title: h = ht((d = o.title) === null || d === void 0 ? void 0 : d.call(o)),
        content: m = ht((p = o.content) === null || p === void 0 ? void 0 : p.call(o))
      } = e, w = !!(Array.isArray(h) ? h.length : h), b = !!(Array.isArray(m) ? m.length : h);
      return !w && !b ? null : v(Ie, null, [w && v("div", {
        class: `${a.value}-title`
      }, [h]), v("div", {
        class: `${a.value}-inner-content`
      }, [m])]);
    };
    return () => {
      const d = oe(e.overlayClassName, c.value);
      return s(v(so, N(N(N({}, Ue(e, ["title", "content"])), r), {}, {
        prefixCls: a.value,
        ref: i,
        overlayClassName: d,
        transitionName: ln(u.value, "zoom-big", e.transitionName),
        "data-popover-inject": !0
      }), {
        title: f,
        default: o.default
      }));
    };
  }
}), WP = In(VP), UP = (e) => {
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
}, GP = Ge("Wave", (e) => [UP(e)]);
function XP(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function ha(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && XP(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function kP(e) {
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
const qP = Z({
  props: {
    target: pe(),
    className: String
  },
  setup(e) {
    const t = X(null), [n, o] = Ht(null), [r, i] = Ht([]), [a, l] = Ht(0), [s, c] = Ht(0), [u, f] = Ht(0), [d, p] = Ht(0), [h, m] = Ht(!1);
    function w() {
      const {
        target: y
      } = e, I = getComputedStyle(y);
      o(kP(y));
      const E = I.position === "static", {
        borderLeftWidth: R,
        borderTopWidth: _
      } = I;
      l(E ? y.offsetLeft : ya(-parseFloat(R))), c(E ? y.offsetTop : ya(-parseFloat(_))), f(y.offsetWidth), p(y.offsetHeight);
      const {
        borderTopLeftRadius: D,
        borderTopRightRadius: F,
        borderBottomLeftRadius: H,
        borderBottomRightRadius: P
      } = I;
      i([D, F, P, H].map((M) => ya(parseFloat(M))));
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
        height: `${d.value}px`,
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
function KP(e, t) {
  const n = document.createElement("div");
  return n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e == null || e.insertBefore(n, e == null ? void 0 : e.firstChild), on(v(qP, {
    target: e,
    className: t
  }, null), n), () => {
    on(null, n), n.parentElement && n.parentElement.removeChild(n);
  };
}
function YP(e, t) {
  const n = Ut();
  let o;
  function r() {
    var i;
    const a = jt(n);
    o == null || o(), !(!((i = t == null ? void 0 : t.value) === null || i === void 0) && i.disabled || !a) && (o = KP(a, e.value));
  }
  return Ae(() => {
    o == null || o();
  }), r;
}
const QP = Z({
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
    } = Se("wave", e), [, a] = GP(r), l = YP(T(() => oe(r.value, a.value)), i);
    let s;
    const c = () => {
      jt(o).removeEventListener("click", s, !0);
    };
    return be(() => {
      ae(() => e.disabled, () => {
        c(), Fe(() => {
          const u = jt(o);
          u == null || u.removeEventListener("click", s, !0), !(!u || u.nodeType !== 1 || e.disabled) && (s = (f) => {
            f.target.tagName === "INPUT" || !ym(f.target) || // No need wave
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
const ZP = () => ({
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
}), Ad = (e) => {
  e && (e.style.width = "0px", e.style.opacity = "0", e.style.transform = "scale(0)");
}, Md = (e) => {
  Fe(() => {
    e && (e.style.width = `${e.scrollWidth}px`, e.style.opacity = "1", e.style.transform = "scale(1)");
  });
}, Rd = (e) => {
  e && e.style && (e.style.width = null, e.style.opacity = null, e.style.transform = null);
}, JP = Z({
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
        onBeforeEnter: Ad,
        onEnter: Md,
        onAfterEnter: Rd,
        onBeforeLeave: Md,
        onLeave: (i) => {
          setTimeout(() => {
            Ad(i);
          });
        },
        onAfterLeave: Rd
      }, {
        default: () => [r ? v("span", {
          class: `${n}-loading-icon`
        }, [v(Ot, null, null)]) : null]
      });
    };
  }
}), Fd = (e, t) => ({
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
}), eI = (e) => {
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
      Fd(`${t}-primary`, r),
      Fd(`${t}-danger`, i)
    ]
  };
};
function tI(e, t) {
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
function nI(e, t) {
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
function oI(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: g(g({}, tI(e, t)), nI(e.componentCls, t))
  };
}
const rI = (e) => {
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
}), iI = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), aI = (e) => ({
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
}), As = (e) => ({
  "&:disabled": g({}, dl(e))
}), Eg = (e) => g({}, As(e)), oi = (e) => ({
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
  })), ni(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), As(e))
}), lI = (e) => g(g(g(g(g({}, Eg(e)), {
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
  })), As(e))
}), sI = (e) => g(g({}, _g(e)), {
  borderStyle: "dashed"
}), cI = (e) => g(g(g({
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
}), uI = (e) => g(g(g({}, Wt({
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
}), dI = (e) => g(g({}, dl(e)), {
  [`&${e.componentCls}:hover`]: g({}, dl(e))
}), fI = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: _g(e),
    [`${t}-primary`]: lI(e),
    [`${t}-dashed`]: sI(e),
    [`${t}-link`]: cI(e),
    [`${t}-text`]: uI(e),
    [`${t}-disabled`]: dI(e)
  };
}, Ms = function(e) {
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
  } = e, u = Math.max(0, (r - i * a) / 2 - l), f = c - l, d = `${n}-icon-only`;
  return [
    // Size
    {
      [`${n}${t}`]: {
        fontSize: i,
        height: r,
        padding: `${u}px ${f}px`,
        borderRadius: s,
        [`&${d}`]: {
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
        [`&:not(${d}) ${n}-loading-icon > ${o}`]: {
          marginInlineEnd: e.marginXS
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: iI(e)
    },
    {
      [`${n}${n}-round${t}`]: aI(e)
    }
  ];
}, pI = (e) => Ms(e), mI = (e) => {
  const t = we(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM
  });
  return Ms(t, `${e.componentCls}-sm`);
}, gI = (e) => {
  const t = we(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG
  });
  return Ms(t, `${e.componentCls}-lg`);
}, vI = (e) => {
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
}, hI = Ge("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: n
  } = e, o = we(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: n
  });
  return [
    // Shared
    rI(o),
    // Size
    mI(o),
    pI(o),
    gI(o),
    // Block
    vI(o),
    // Group (type, ghost, danger, disabled, loading)
    fI(o),
    // Button Group
    eI(o),
    // Space Compact
    Os(e, {
      focus: !1
    }),
    oI(e)
  ];
}), yI = () => ({
  prefixCls: String,
  size: {
    type: String
  }
}), Ag = fs(), fl = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: yI(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      prefixCls: o,
      direction: r
    } = Se("btn-group", e), [, , i] = go();
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
      }, [Ze((l = n.default) === null || l === void 0 ? void 0 : l.call(n))]);
    };
  }
}), Nd = /^[\u4e00-\u9fa5]{2}$/, Dd = Nd.test.bind(Nd);
function $r(e) {
  return e === "text" || e === "link";
}
const tt = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: Be(ZP(), {
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
    } = Se("btn", e), [u, f] = hI(a), d = Ag.useInject(), p = Tn(), h = T(() => {
      var P;
      return (P = e.disabled) !== null && P !== void 0 ? P : p.value;
    }), m = X(null), w = X(void 0);
    let b = !1;
    const C = X(!1), S = X(!1), x = T(() => l.value !== !1), {
      compactSize: $,
      compactItemClassnames: O
    } = xs(a, s), y = T(() => typeof e.loading == "object" && e.loading.delay ? e.loading.delay || !0 : !!e.loading);
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
        block: j,
        danger: A
      } = e, z = a.value, q = {
        large: "lg",
        small: "sm",
        middle: void 0
      }, Y = $.value || (d == null ? void 0 : d.size) || c.value, K = Y && q[Y] || "";
      return [O.value, {
        [f.value]: !0,
        [`${z}`]: !0,
        [`${z}-${M}`]: M !== "default" && M,
        [`${z}-${P}`]: P,
        [`${z}-${K}`]: K,
        [`${z}-loading`]: C.value,
        [`${z}-background-ghost`]: L && !$r(P),
        [`${z}-two-chinese-chars`]: S.value && x.value,
        [`${z}-block`]: j,
        [`${z}-dangerous`]: !!A,
        [`${z}-rtl`]: s.value === "rtl"
      }];
    }), E = () => {
      const P = m.value;
      if (!P || l.value === !1)
        return;
      const M = P.textContent;
      b && Dd(M) ? S.value || (S.value = !0) : S.value && (S.value = !1);
    }, R = (P) => {
      if (C.value || h.value) {
        P.preventDefault();
        return;
      }
      r("click", P);
    }, _ = (P) => {
      r("mousedown", P);
    }, D = (P, M) => {
      const L = M ? " " : "";
      if (P.type === kf) {
        let j = P.children.trim();
        return Dd(j) && (j = j.split("").join(L)), v("span", null, [j]);
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
      } = e, j = Ze((M = n.default) === null || M === void 0 ? void 0 : M.call(n));
      b = j.length === 1 && !L && !$r(e.type);
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
          [`${a.value}-icon-only`]: j.length === 0 && !!W
        }],
        onClick: R,
        onMousedown: _
      });
      h.value || delete G.disabled;
      const ee = L && !C.value ? L : v(JP, {
        existIcon: !!L,
        prefixCls: a.value,
        loading: !!C.value
      }, null), re = j.map((k) => D(k, b && x.value));
      if (q !== void 0)
        return u(v("a", N(N({}, G), {}, {
          href: q,
          target: K,
          ref: m
        }), [ee, re]));
      let ie = v("button", N(N({}, G), {}, {
        ref: m,
        type: z
      }), [ee, re]);
      if (!$r(A)) {
        const k = /* @__PURE__ */ function() {
          return ie;
        }();
        ie = v(QP, {
          ref: "wave",
          disabled: !!C.value
        }, {
          default: () => [k]
        });
      }
      return u(ie);
    };
  }
});
tt.Group = fl;
tt.install = function(e) {
  return e.component(tt.name, tt), e.component(fl.name, fl), e;
};
function Mg(e, t) {
  return e.classList ? e.classList.contains(t) : ` ${e.className} `.indexOf(` ${t} `) > -1;
}
function Ld(e, t) {
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
      n.style.height = "0px", n.style.opacity = "0", Ld(n, e);
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
      Ld(n, e), n.style.height = `${n.offsetHeight}px`, n.style.opacity = null;
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
}, bI = (e) => ({
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
}), Rs = (e) => ({
  borderColor: e.inputBorderHoverColor,
  borderInlineEndWidth: e.lineWidth
}), pl = (e) => ({
  borderColor: e.inputBorderHoverColor,
  boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
  borderInlineEndWidth: e.lineWidth,
  outline: 0
}), wI = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover": g({}, Rs(we(e, {
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
}, Ng = (e) => ({
  padding: `${e.inputPaddingVerticalSM}px ${e.controlPaddingHorizontalSM - 1}px`,
  borderRadius: e.borderRadiusSM
}), Dg = (e, t) => {
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
}, bI(e.colorTextPlaceholder)), {
  "&:hover": g({}, Rs(e)),
  "&:focus, &-focused": g({}, pl(e)),
  "&-disabled, &[disabled]": g({}, wI(e)),
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
  "&-sm": g({}, Ng(e)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
}), SI = (e) => {
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
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: g({}, Ng(e)),
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
}, xI = (e) => {
  const {
    componentCls: t,
    controlHeightSM: n,
    lineWidth: o
  } = e, i = (n - o * 2 - 16) / 2;
  return {
    [t]: g(g(g(g({}, nt(e)), Lg(e)), Dg(e, t)), {
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
}, CI = (e) => {
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
}, $I = (e) => {
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
      [`&:not(${t}-affix-wrapper-disabled):hover`]: g(g({}, Rs(e)), {
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
    }), CI(e)), {
      // password
      [`${l}${t}-password-icon`]: {
        color: i,
        cursor: "pointer",
        transition: `all ${r}`,
        "&:hover": {
          color: a
        }
      }
    }), Dg(e, `${t}-affix-wrapper`))
  };
}, OI = (e) => {
  const {
    componentCls: t,
    colorError: n,
    colorSuccess: o,
    borderRadiusLG: r,
    borderRadiusSM: i
  } = e;
  return {
    [`${t}-group`]: g(g(g({}, nt(e)), SI(e)), {
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
}, PI = (e) => {
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
function II(e) {
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
const TI = (e) => {
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
}, Fs = Ge("Input", (e) => {
  const t = II(e);
  return [
    xI(t),
    TI(t),
    $I(t),
    OI(t),
    PI(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Os(t)
  ];
}), EI = () => {
  const e = te(/* @__PURE__ */ new Map()), t = (n) => (o) => {
    e.value.set(n, o);
  };
  return Zf(() => {
    e.value = /* @__PURE__ */ new Map();
  }), [t, e];
}, Hg = () => yt() && window.document.documentElement;
let Or;
const _I = () => {
  if (!Hg())
    return !1;
  if (Or !== void 0)
    return Or;
  const e = document.createElement("div");
  return e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e), Or = e.scrollHeight === 1, document.body.removeChild(e), Or;
}, AI = () => {
  const e = X(!1);
  return be(() => {
    e.value = _I();
  }), e;
}, jg = Symbol("rowContextKey"), MI = (e) => {
  _e(jg, e);
}, RI = () => Ee(jg, {
  gutter: T(() => {
  }),
  wrap: T(() => {
  }),
  supportFlexGap: T(() => {
  })
}), FI = (e) => {
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
}, DI = (e, t) => {
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
}, ml = (e, t) => DI(e, t), LI = (e, t, n) => ({
  [`@media (min-width: ${t}px)`]: g({}, ml(e, n))
}), HI = Ge("Grid", (e) => [FI(e)]), jI = Ge("Grid", (e) => {
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
  return [NI(t), ml(t, ""), ml(t, "-xs"), Object.keys(n).map((o) => LI(t, n[o], o)).reduce((o, r) => g(g({}, o), r), {})];
}), BI = () => ({
  align: Ye([String, Object]),
  justify: Ye([String, Object]),
  prefixCls: String,
  gutter: Ye([Number, Array, Object], 0),
  wrap: {
    type: Boolean,
    default: void 0
  }
}), zI = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ARow",
  inheritAttrs: !1,
  props: BI(),
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
    const c = bP(), u = te({
      xs: !0,
      sm: !0,
      md: !0,
      lg: !0,
      xl: !0,
      xxl: !0
    }), f = te({
      xs: !1,
      sm: !1,
      md: !1,
      lg: !1,
      xl: !1,
      xxl: !1
    }), d = (S) => T(() => {
      if (typeof e[S] == "string")
        return e[S];
      if (typeof e[S] != "object")
        return "";
      for (let x = 0; x < xr.length; x++) {
        const $ = xr[x];
        if (!f.value[$]) continue;
        const O = e[S][$];
        if (O !== void 0)
          return O;
      }
      return "";
    }), p = d("align"), h = d("justify"), m = AI();
    be(() => {
      s = c.value.subscribe((S) => {
        f.value = S;
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
    MI({
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
      return a(v("div", N(N({}, o), {}, {
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
function VI(e, t) {
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
function WI() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Hr(e, t, n) {
  return WI() ? Hr = Reflect.construct.bind() : Hr = function(r, i, a) {
    var l = [null];
    l.push.apply(l, i);
    var s = Function.bind.apply(r, l), c = new s();
    return a && Qo(c, a.prototype), c;
  }, Hr.apply(null, arguments);
}
function UI(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function vl(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return vl = function(o) {
    if (o === null || !UI(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(o)) return t.get(o);
      t.set(o, r);
    }
    function r() {
      return Hr(o, arguments, gl(this).constructor);
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
var GI = /%[sdj%]/g, Bg = function() {
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
    var a = e.replace(GI, function(l) {
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
function He(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || XI(t) && typeof e == "string" && !e);
}
function kI(e, t, n) {
  var o = [], r = 0, i = e.length;
  function a(l) {
    o.push.apply(o, l || []), r++, r === i && n(o);
  }
  e.forEach(function(l) {
    t(l, a);
  });
}
function jd(e, t, n) {
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
function qI(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var Bd = /* @__PURE__ */ function(e) {
  VI(t, e);
  function t(n, o) {
    var r;
    return r = e.call(this, "Async Validation Error") || this, r.errors = n, r.fields = o, r;
  }
  return t;
}(/* @__PURE__ */ vl(Error));
function KI(e, t, n, o, r) {
  if (t.first) {
    var i = new Promise(function(d, p) {
      var h = function(b) {
        return o(b), b.length ? p(new Bd(b, hl(b))) : d(r);
      }, m = qI(e);
      jd(m, n, h);
    });
    return i.catch(function(d) {
      return d;
    }), i;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), s = l.length, c = 0, u = [], f = new Promise(function(d, p) {
    var h = function(w) {
      if (u.push.apply(u, w), c++, c === s)
        return o(u), u.length ? p(new Bd(u, hl(u))) : d(r);
    };
    l.length || (o(u), d(r)), l.forEach(function(m) {
      var w = e[m];
      a.indexOf(m) !== -1 ? jd(w, n, h) : kI(w, n, h);
    });
  });
  return f.catch(function(d) {
    return d;
  }), f;
}
function YI(e) {
  return !!(e && e.message !== void 0);
}
function QI(e, t) {
  for (var n = e, o = 0; o < t.length; o++) {
    if (n == null)
      return n;
    n = n[t[o]];
  }
  return n;
}
function zd(e, t) {
  return function(n) {
    var o;
    return e.fullFields ? o = QI(t, e.fullFields) : o = t[n.field || e.fullField], YI(n) ? (n.field = n.field || e.fullField, n.fieldValue = o, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: o,
      field: n.field || e.fullField
    };
  };
}
function Vd(e, t) {
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
  t.required && (!o.hasOwnProperty(t.field) || He(n, a || t.type)) && r.push(lt(i.messages.required, t.fullField));
}, ZI = function(t, n, o, r, i) {
  (/^\s+$/.test(n) || n === "") && r.push(lt(i.messages.whitespace, t.fullField));
}, Pr, JI = function() {
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
  var c = "(?:(?:[a-z]+:)?//)", u = "(?:\\S+(?::\\S*)?@)?", f = s.v4().source, d = s.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", m = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", w = "(?::\\d{2,5})?", b = '(?:[/?#][^\\s"]*)?', C = "(?:" + c + "|www\\.)" + u + "(?:localhost|" + f + "|" + d + "|" + p + h + m + ")" + w + b;
  return Pr = new RegExp("(?:^" + C + "$)", "i"), Pr;
}, Wd = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Oo = {
  integer: function(t) {
    return Oo.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Oo.number(t) && !Oo.integer(t);
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
    return typeof t == "object" && !Oo.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Wd.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(JI());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Wd.hex);
  }
}, e6 = function(t, n, o, r, i) {
  if (t.required && n === void 0) {
    zg(t, n, o, r, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = t.type;
  a.indexOf(l) > -1 ? Oo[l](n) || r.push(lt(i.messages.types[l], t.fullField, t.type)) : l && typeof n !== t.type && r.push(lt(i.messages.types[l], t.fullField, t.type));
}, t6 = function(t, n, o, r, i) {
  var a = typeof t.len == "number", l = typeof t.min == "number", s = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = n, f = null, d = typeof n == "number", p = typeof n == "string", h = Array.isArray(n);
  if (d ? f = "number" : p ? f = "string" : h && (f = "array"), !f)
    return !1;
  h && (u = n.length), p && (u = n.replace(c, "_").length), a ? u !== t.len && r.push(lt(i.messages[f].len, t.fullField, t.len)) : l && !s && u < t.min ? r.push(lt(i.messages[f].min, t.fullField, t.min)) : s && !l && u > t.max ? r.push(lt(i.messages[f].max, t.fullField, t.max)) : l && s && (u < t.min || u > t.max) && r.push(lt(i.messages[f].range, t.fullField, t.min, t.max));
}, Hn = "enum", n6 = function(t, n, o, r, i) {
  t[Hn] = Array.isArray(t[Hn]) ? t[Hn] : [], t[Hn].indexOf(n) === -1 && r.push(lt(i.messages[Hn], t.fullField, t[Hn].join(", ")));
}, o6 = function(t, n, o, r, i) {
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
  whitespace: ZI,
  type: e6,
  range: t6,
  enum: n6,
  pattern: o6
}, r6 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (He(n, "string") && !t.required)
      return o();
    me.required(t, n, r, a, i, "string"), He(n, "string") || (me.type(t, n, r, a, i), me.range(t, n, r, a, i), me.pattern(t, n, r, a, i), t.whitespace === !0 && me.whitespace(t, n, r, a, i));
  }
  o(a);
}, i6 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (He(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), n !== void 0 && me.type(t, n, r, a, i);
  }
  o(a);
}, a6 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (n === "" && (n = void 0), He(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), n !== void 0 && (me.type(t, n, r, a, i), me.range(t, n, r, a, i));
  }
  o(a);
}, l6 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (He(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), n !== void 0 && me.type(t, n, r, a, i);
  }
  o(a);
}, s6 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (He(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), He(n) || me.type(t, n, r, a, i);
  }
  o(a);
}, c6 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (He(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), n !== void 0 && (me.type(t, n, r, a, i), me.range(t, n, r, a, i));
  }
  o(a);
}, u6 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (He(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), n !== void 0 && (me.type(t, n, r, a, i), me.range(t, n, r, a, i));
  }
  o(a);
}, d6 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (n == null && !t.required)
      return o();
    me.required(t, n, r, a, i, "array"), n != null && (me.type(t, n, r, a, i), me.range(t, n, r, a, i));
  }
  o(a);
}, f6 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (He(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), n !== void 0 && me.type(t, n, r, a, i);
  }
  o(a);
}, p6 = "enum", m6 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (He(n) && !t.required)
      return o();
    me.required(t, n, r, a, i), n !== void 0 && me[p6](t, n, r, a, i);
  }
  o(a);
}, g6 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (He(n, "string") && !t.required)
      return o();
    me.required(t, n, r, a, i), He(n, "string") || me.pattern(t, n, r, a, i);
  }
  o(a);
}, v6 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (He(n, "date") && !t.required)
      return o();
    if (me.required(t, n, r, a, i), !He(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), me.type(t, s, r, a, i), s && me.range(t, s.getTime(), r, a, i);
    }
  }
  o(a);
}, h6 = function(t, n, o, r, i) {
  var a = [], l = Array.isArray(n) ? "array" : typeof n;
  me.required(t, n, r, a, i, l), o(a);
}, ba = function(t, n, o, r, i) {
  var a = t.type, l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (He(n, a) && !t.required)
      return o();
    me.required(t, n, r, l, i, a), He(n, a) || me.type(t, n, r, l, i);
  }
  o(l);
}, y6 = function(t, n, o, r, i) {
  var a = [], l = t.required || !t.required && r.hasOwnProperty(t.field);
  if (l) {
    if (He(n) && !t.required)
      return o();
    me.required(t, n, r, a, i);
  }
  o(a);
}, Fo = {
  string: r6,
  method: i6,
  number: a6,
  boolean: l6,
  regexp: s6,
  integer: c6,
  float: u6,
  array: d6,
  object: f6,
  enum: m6,
  pattern: g6,
  date: v6,
  url: ba,
  hex: ba,
  email: ba,
  required: h6,
  any: y6
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
    return o && (this._messages = Vd(yl(), o)), this._messages;
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
      var f = this.messages();
      f === bl && (f = yl()), Vd(f, s.messages), s.messages = f;
    } else
      s.messages = this.messages();
    var d = {}, p = s.keys || Object.keys(this.rules);
    p.forEach(function(m) {
      var w = a.rules[m], b = l[m];
      w.forEach(function(C) {
        var S = C;
        typeof S.transform == "function" && (l === o && (l = hn({}, l)), b = l[m] = S.transform(b)), typeof S == "function" ? S = {
          validator: S
        } : S = hn({}, S), S.validator = a.getValidationMethod(S), S.validator && (S.field = m, S.fullField = S.fullField || m, S.type = a.getType(S), d[m] = d[m] || [], d[m].push({
          rule: S,
          value: b,
          source: l,
          field: m
        }));
      });
    });
    var h = {};
    return KI(d, s, function(m, w) {
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
        var I = y.map(zd(b, l));
        if (s.first && I.length)
          return h[b.field] = 1, w(I);
        if (!C)
          w(I);
        else {
          if (b.required && !m.value)
            return b.message !== void 0 ? I = [].concat(b.message).map(zd(b, l)) : s.error && (I = [s.error(b, lt(s.messages.required, b.field))]), w(I);
          var E = {};
          b.defaultField && Object.keys(m.value).map(function(D) {
            E[D] = b.defaultField;
          }), E = hn({}, E, m.rule.fields);
          var R = {};
          Object.keys(E).forEach(function(D) {
            var F = E[D], H = Array.isArray(F) ? F : [F];
            R[D] = H.map(S.bind(null, D));
          });
          var _ = new e(R);
          _.messages(s.messages), m.rule.options && (m.rule.options.messages = s.messages, m.rule.options.error = s.error), _.validate(m.value, m.rule.options || s, function(D) {
            var F = [];
            I && I.length && F.push.apply(F, I), D && D.length && F.push.apply(F, D), w(F.length ? F : null);
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
function b6(e, t, n) {
  let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && o && n === void 0 && !Vg(e, t.slice(0, -1)) ? e : Wg(e, t, n, o);
}
function wl(e) {
  return nn(e);
}
function w6(e, t) {
  return Vg(e, t);
}
function S6(e, t, n) {
  let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return b6(e, t, n, o);
}
function x6(e, t) {
  return e && e.some((n) => $6(n, t));
}
function Ud(e) {
  return typeof e == "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Ug(e, t) {
  const n = Array.isArray(e) ? [...e] : g({}, e);
  return t && Object.keys(t).forEach((o) => {
    const r = n[o], i = t[o], a = Ud(r) && Ud(i);
    n[o] = a ? Ug(r, i || {}) : i;
  }), n;
}
function C6(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  return n.reduce((r, i) => Ug(r, i), e);
}
function Gd(e, t) {
  let n = {};
  return t.forEach((o) => {
    const r = w6(e, o);
    n = S6(n, o, r);
  }), n;
}
function $6(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every((n, o) => t[o] === n);
}
const rt = "'${name}' is not a valid ${type}", Ri = {
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
      } catch (f) {
        a(f);
      }
    }
    function s(u) {
      try {
        c(o.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function c(u) {
      u.done ? i(u.value) : r(u.value).then(l, s);
    }
    c((o = o.apply(e, t || [])).next());
  });
};
const O6 = ar;
function P6(e, t) {
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
    const l = new O6({
      [e]: [i]
    }), s = C6({}, Ri, o.validateMessages);
    l.messages(s);
    let c = [];
    try {
      yield Promise.resolve(l.validate({
        [e]: t
      }, g({}, o)));
    } catch (d) {
      d.errors ? c = d.errors.map((p, h) => {
        let {
          message: m
        } = p;
        return (
          // Wrap VueNode with `key`
          zt(m) ? Jo(m, {
            key: `error_${h}`
          }) : m
        );
      }) : (console.error(d), c = [s.default()]);
    }
    if (!c.length && a)
      return (yield Promise.all(t.map((p, h) => Sl(`${e}.${h}`, p, a, o, r)))).reduce((p, h) => [...p, ...h], []);
    const u = g(g(g({}, n), {
      name: e,
      enum: (n.enum || []).join(", ")
    }), r);
    return c.map((d) => typeof d == "string" ? P6(d, u) : d);
  });
}
function Gg(e, t, n, o, r, i) {
  const a = e.join("."), l = n.map((c, u) => {
    const f = c.validator, d = g(g({}, c), {
      ruleIndex: u
    });
    return f && (d.validator = (p, h, m) => {
      let w = !1;
      const C = f(p, h, function() {
        for (var S = arguments.length, x = new Array(S), $ = 0; $ < S; $++)
          x[$] = arguments[$];
        Promise.resolve().then(() => {
          no(!w, "Your validator function has already return a promise. `callback` will be ignored."), w || m(...x);
        });
      });
      w = C && typeof C.then == "function" && typeof C.catch == "function", no(w, "`callback` is deprecated. Please return a promise instead."), w && C.then(() => {
        m();
      }).catch((S) => {
        m(S || " ");
      });
    }), d;
  }).sort((c, u) => {
    let {
      warningOnly: f,
      ruleIndex: d
    } = c, {
      warningOnly: p,
      ruleIndex: h
    } = u;
    return !!f == !!p ? d - h : f ? 1 : -1;
  });
  let s;
  if (r === !0)
    s = new Promise((c, u) => Fi(this, void 0, void 0, function* () {
      for (let f = 0; f < l.length; f += 1) {
        const d = l[f], p = yield Sl(a, t, d, o, i);
        if (p.length) {
          u([{
            errors: p,
            rule: d
          }]);
          return;
        }
      }
      c([]);
    }));
  else {
    const c = l.map((u) => Sl(a, t, u, o, i).then((f) => ({
      errors: f,
      rule: u
    })));
    s = (r ? T6(c) : I6(c)).then((u) => Promise.reject(u));
  }
  return s.catch((c) => c), s;
}
function I6(e) {
  return Fi(this, void 0, void 0, function* () {
    return Promise.all(e).then((t) => [].concat(...t));
  });
}
function T6(e) {
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
const Xg = Symbol("formContextKey"), kg = (e) => {
  _e(Xg, e);
}, Ns = () => Ee(Xg, {
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
}), qg = Symbol("formItemPrefixContextKey"), E6 = (e) => {
  _e(qg, e);
}, _6 = () => Ee(qg, {
  prefixCls: T(() => "")
});
function A6(e) {
  return typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
}
const M6 = () => ({
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
}), R6 = ["xs", "sm", "md", "lg", "xl", "xxl"], Kg = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ACol",
  inheritAttrs: !1,
  props: M6(),
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const {
      gutter: r,
      supportFlexGap: i,
      wrap: a
    } = RI(), {
      prefixCls: l,
      direction: s
    } = Se("col", e), [c, u] = jI(l), f = T(() => {
      const {
        span: p,
        order: h,
        offset: m,
        push: w,
        pull: b
      } = e, C = l.value;
      let S = {};
      return R6.forEach((x) => {
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
    }), d = T(() => {
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
      return p && (m.flex = A6(p), a.value === !1 && !m.minWidth && (m.minWidth = 0)), m;
    });
    return () => {
      var p;
      return c(v("div", N(N({}, o), {}, {
        class: f.value,
        style: [d.value, o.style]
      }), [(p = n.default) === null || p === void 0 ? void 0 : p.call(n)]));
    };
  }
});
var F6 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, name: "question-circle", theme: "outlined" };
function Xd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      N6(e, r, n[r]);
    });
  }
  return e;
}
function N6(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ds = function(t, n) {
  var o = Xd({}, t, n.attrs);
  return v(de, Xd({}, o, {
    icon: F6
  }), null);
};
Ds.displayName = "QuestionCircleOutlined";
Ds.inheritAttrs = !1;
const Ls = (e, t) => {
  let {
    slots: n,
    emit: o,
    attrs: r
  } = t;
  var i, a, l, s, c;
  const {
    prefixCls: u,
    htmlFor: f,
    labelCol: d,
    labelAlign: p,
    colon: h,
    required: m,
    requiredMark: w
  } = g(g({}, e), r), [b] = po("Form"), C = (i = e.label) !== null && i !== void 0 ? i : (a = n.label) === null || a === void 0 ? void 0 : a.call(n);
  if (!C) return null;
  const {
    vertical: S,
    labelAlign: x,
    labelCol: $,
    labelWrap: O,
    colon: y
  } = Ns(), I = d || ($ == null ? void 0 : $.value) || {}, E = p || (x == null ? void 0 : x.value), R = `${u}-item-label`, _ = oe(R, E === "left" && `${R}-left`, I.class, {
    [`${R}-wrap`]: !!O.value
  });
  let D = C;
  const F = h === !0 || (y == null ? void 0 : y.value) !== !1 && h !== !1;
  if (F && !S.value && typeof C == "string" && C.trim() !== "" && (D = C.replace(/[:|：]\s*$/, "")), e.tooltip || n.tooltip) {
    const M = v("span", {
      class: `${u}-item-tooltip`
    }, [v(so, {
      title: e.tooltip
    }, {
      default: () => [v(Ds, null, null)]
    })]);
    D = v(Ie, null, [D, n.tooltip ? (l = n.tooltip) === null || l === void 0 ? void 0 : l.call(n, {
      class: `${u}-item-tooltip`
    }) : M]);
  }
  w === "optional" && !m && (D = v(Ie, null, [D, v("span", {
    class: `${u}-item-optional`
  }, [((s = b.value) === null || s === void 0 ? void 0 : s.optional) || ((c = Mt.Form) === null || c === void 0 ? void 0 : c.optional)])]));
  const P = oe({
    [`${u}-item-required`]: m,
    [`${u}-item-required-mark-optional`]: w === "optional",
    [`${u}-item-no-colon`]: !F
  });
  return v(Kg, N(N({}, I), {}, {
    class: _
  }), {
    default: () => [v("label", {
      for: f,
      class: P,
      title: typeof C == "string" ? C : "",
      onClick: (M) => o("click", M)
    }, [D])]
  });
};
Ls.displayName = "FormItemLabel";
Ls.inheritAttrs = !1;
const D6 = (e) => {
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
}, L6 = (e) => ({
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
}), kd = (e, t) => {
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
}, H6 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [e.componentCls]: g(g(g({}, nt(e)), L6(e)), {
      [`${t}-text`]: {
        display: "inline-block",
        paddingInlineEnd: e.paddingSM
      },
      // ================================================================
      // =                             Size                             =
      // ================================================================
      "&-small": g({}, kd(e, e.controlHeightSM)),
      "&-large": g({}, kd(e, e.controlHeightLG))
    })
  };
}, j6 = (e) => {
  const {
    formItemCls: t,
    iconCls: n,
    componentCls: o,
    rootPrefixCls: r
  } = e;
  return {
    [t]: g(g({}, nt(e)), {
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
        animationName: Cs,
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
}, B6 = (e) => {
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
}, z6 = (e) => {
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
}), V6 = (e) => {
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
}, W6 = (e) => {
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
    [`@media (max-width: ${e.screenXSMax}px)`]: [V6(e), {
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
  return [H6(o), j6(o), D6(o), B6(o), z6(o), W6(o), Cg(o), Cs];
}), U6 = Z({
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
    } = _6(), i = T(() => `${o.value}-item-explain`), a = T(() => !!(e.errors && e.errors.length)), l = te(r.value), [, s] = Hs(o);
    return ae([a, r], () => {
      a.value && (l.value = r.value);
    }), () => {
      var c, u;
      const f = Rg(`${o.value}-show-help-item`), d = Ci(`${o.value}-show-help-item`, f);
      return d.role = "alert", d.class = [s.value, i.value, n.class, `${o.value}-show-help`], v(Gt, N(N({}, tr(`${o.value}-show-help`)), {}, {
        onAfterEnter: () => e.onErrorVisibleChanged(!0),
        onAfterLeave: () => e.onErrorVisibleChanged(!1)
      }), {
        default: () => [Bt(v(ai, N(N({}, d), {}, {
          tag: "div"
        }), {
          default: () => [(u = e.errors) === null || u === void 0 ? void 0 : u.map((p, h) => v("div", {
            key: h,
            class: l.value ? `${i.value}-${l.value}` : ""
          }, [p]))]
        }), [[fo, !!(!((c = e.errors) === null || c === void 0) && c.length)]])]
      });
    };
  }
}), G6 = Z({
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
    return delete i.labelCol, delete i.wrapperCol, kg(i), E6({
      prefixCls: T(() => e.prefixCls),
      status: T(() => e.status)
    }), () => {
      var a, l, s;
      const {
        prefixCls: c,
        wrapperCol: u,
        marginBottom: f,
        onErrorVisibleChanged: d,
        help: p = (a = n.help) === null || a === void 0 ? void 0 : a.call(n),
        errors: h = ht((l = n.errors) === null || l === void 0 ? void 0 : l.call(n)),
        // hasFeedback,
        // status,
        extra: m = (s = n.extra) === null || s === void 0 ? void 0 : s.call(n)
      } = e, w = `${c}-item`, b = u || (r == null ? void 0 : r.value) || {}, C = oe(`${w}-control`, b.class);
      return v(Kg, N(N({}, b), {}, {
        class: C
      }), {
        default: () => {
          var S;
          return v(Ie, null, [v("div", {
            class: `${w}-control-input`
          }, [v("div", {
            class: `${w}-control-input-content`
          }, [(S = n.default) === null || S === void 0 ? void 0 : S.call(n)])]), f !== null || h.length ? v("div", {
            style: {
              display: "flex",
              flexWrap: "nowrap"
            }
          }, [v(U6, {
            errors: h,
            help: p,
            class: `${w}-explain-connected`,
            onErrorVisibleChanged: d
          }, null), !!f && v("div", {
            style: {
              width: 0,
              height: `${f}px`
            }
          }, null)]) : null, m ? v("div", {
            class: `${w}-extra`
          }, [m]) : null]);
        }
      });
    };
  }
});
function X6(e) {
  const t = X(e.value.slice());
  let n = null;
  return Pe(() => {
    clearTimeout(n), n = setTimeout(() => {
      t.value = e.value;
    }, e.value.length ? 0 : 10);
  }), t;
}
an("success", "warning", "error", "validating", "");
const k6 = {
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
const q6 = () => ({
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
let K6 = 0;
const Y6 = "form_item", Yg = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItem",
  inheritAttrs: !1,
  __ANT_NEW_FORM_ITEM: !0,
  props: q6(),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      expose: r
    } = t;
    no(e.prop === void 0, "`prop` is deprecated. Please use `name` instead.");
    const i = `form-item-${++K6}`, {
      prefixCls: a
    } = Se("form", e), [l, s] = Hs(a), c = X(), u = Ns(), f = T(() => e.name || e.prop), d = X([]), p = X(!1), h = X(), m = T(() => {
      const G = f.value;
      return wl(G);
    }), w = T(() => {
      if (m.value.length) {
        const G = u.name.value, ee = m.value.join("_");
        return G ? `${G}_${ee}` : `${Y6}_${ee}`;
      } else
        return;
    }), b = () => {
      const G = u.model.value;
      if (!(!G || !f.value))
        return wa(G, m.value, !0).v;
    }, C = T(() => b()), S = X(Lr(C.value)), x = T(() => {
      let G = e.validateTrigger !== void 0 ? e.validateTrigger : u.validateTrigger.value;
      return G = G === void 0 ? "change" : G, nn(G);
    }), $ = T(() => {
      let G = u.rules.value;
      const ee = e.rules, re = e.required !== void 0 ? {
        required: !!e.required,
        trigger: x.value
      } : [], ie = wa(G, m.value);
      G = G ? ie.o[ie.k] || ie.v : [];
      const k = [].concat(ee || G || []);
      return ZO(k, (B) => B.required) ? k : k.concat(re);
    }), O = T(() => {
      const G = $.value;
      let ee = !1;
      return G && G.length && G.every((re) => re.required ? (ee = !0, !1) : !0), ee || e.required;
    }), y = X();
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
      const k = Gg(m.value, C.value, ie, g({
        validateMessages: u.validateMessages.value
      }, G), ee, I.value);
      return y.value = "validating", d.value = [], k.catch((B) => B).then(function() {
        let B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (y.value === "validating") {
          const U = B.filter((ne) => ne && ne.errors.length);
          y.value = U.length ? "error" : "success", d.value = U.map((ne) => ne.errors), u.onValidate(f.value, !d.value.length, d.value.length ? rn(d.value[0]) : null);
        }
      }), k;
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
    }, D = () => {
      y.value = e.validateStatus, p.value = !1, d.value = [];
    }, F = () => {
      var G;
      y.value = e.validateStatus, p.value = !0, d.value = [];
      const ee = u.model.value || {}, re = C.value, ie = wa(ee, m.value, !0);
      Array.isArray(re) ? ie.o[ie.k] = [].concat((G = S.value) !== null && G !== void 0 ? G : []) : ie.o[ie.k] = S.value, Fe(() => {
        p.value = !1;
      });
    }, H = T(() => e.htmlFor === void 0 ? w.value : e.htmlFor), P = () => {
      const G = H.value;
      if (!G || !h.value)
        return;
      const ee = h.value.$el.querySelector(`[id="${G}"]`);
      ee && ee.focus && ee.focus();
    };
    r({
      onFieldBlur: R,
      onFieldChange: _,
      clearValidate: D,
      resetField: F
    }), e$({
      id: w,
      onFieldBlur: () => {
        e.autoLink && R();
      },
      onFieldChange: () => {
        e.autoLink && _();
      },
      clearValidate: D
    }, T(() => !!(e.autoLink && u.model.value && f.value)));
    let M = !1;
    ae(f, (G) => {
      G ? M || (M = !0, u.addField(i, {
        fieldValue: C,
        fieldId: w,
        fieldName: f,
        resetField: F,
        clearValidate: D,
        namePath: m,
        validateRules: E,
        rules: $
      })) : (M = !1, u.removeField(i));
    }, {
      immediate: !0
    }), Ae(() => {
      u.removeField(i);
    });
    const L = X6(d), j = T(() => e.validateStatus !== void 0 ? e.validateStatus : L.value.length ? "error" : y.value), A = T(() => ({
      [`${a.value}-item`]: !0,
      [s.value]: !0,
      // Status
      [`${a.value}-item-has-feedback`]: j.value && e.hasFeedback,
      [`${a.value}-item-has-success`]: j.value === "success",
      [`${a.value}-item-has-warning`]: j.value === "warning",
      [`${a.value}-item-has-error`]: j.value === "error",
      [`${a.value}-item-is-validating`]: j.value === "validating",
      [`${a.value}-item-hidden`]: e.hidden
    })), z = Le({});
    sn.useProvide(z), Pe(() => {
      let G;
      if (e.hasFeedback) {
        const ee = j.value && k6[j.value];
        G = ee ? v("span", {
          class: oe(`${a.value}-item-feedback-icon`, `${a.value}-item-feedback-icon-${j.value}`)
        }, [v(ee, null, null)]) : null;
      }
      g(z, {
        status: j.value,
        hasFeedback: e.hasFeedback,
        feedbackIcon: G,
        isFormItemInput: !0
      });
    });
    const q = X(null), Y = X(!1), K = () => {
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
      }, [v(zI, N(N({}, o), {}, {
        class: `${a.value}-item-row`,
        key: "row"
      }), {
        default: () => {
          var k, B;
          return v(Ie, null, [v(Ls, N(N({}, e), {}, {
            htmlFor: H.value,
            required: O.value,
            requiredMark: u.requiredMark.value,
            prefixCls: a.value,
            onClick: P,
            label: e.label
          }), {
            label: n.label,
            tooltip: n.tooltip
          }), v(G6, N(N({}, e), {}, {
            errors: re != null ? nn(re) : L.value,
            marginBottom: q.value,
            prefixCls: a.value,
            status: j.value,
            ref: h,
            help: re,
            extra: (k = e.extra) !== null && k !== void 0 ? k : (B = n.extra) === null || B === void 0 ? void 0 : B.call(n),
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
function qd(e) {
  let t = !1;
  return e && e.length && e.every((n) => n.required ? (t = !0, !1) : !0), t;
}
function Kd(e) {
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
function Q6(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : te({}), n = arguments.length > 2 ? arguments[2] : void 0;
  const o = Lr(ve(e)), r = Le({}), i = X([]), a = (S) => {
    g(ve(e), g(g({}, Lr(o)), S)), Fe(() => {
      Object.keys(r).forEach((x) => {
        r[x] = {
          autoLink: !1,
          required: qd(ve(t)[x])
        };
      });
    });
  }, l = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], x = arguments.length > 1 ? arguments[1] : void 0;
    return x.length ? S.filter(($) => {
      const O = Kd($.trigger || "change");
      return n4(O, x).length;
    }) : S;
  };
  let s = null;
  const c = function(S) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, $ = arguments.length > 2 ? arguments[2] : void 0;
    const O = [], y = {};
    for (let R = 0; R < S.length; R++) {
      const _ = S[R], D = Sa(ve(e), _, $);
      if (!D.isValid) continue;
      y[_] = D.v;
      const F = l(ve(t)[_], Kd(x && x.trigger));
      F.length && O.push(u(_, D.v, F, x || {}).then(() => ({
        name: _,
        errors: [],
        warnings: []
      })).catch((H) => {
        const P = [], M = [];
        return H.forEach((L) => {
          let {
            rule: {
              warningOnly: j
            },
            errors: A
          } = L;
          j ? M.push(...A) : P.push(...A);
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
      const _ = R.filter((D) => D && D.errors.length);
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
  }, f = (S, x) => {
    let $ = [], O = !0;
    S ? Array.isArray(S) ? $ = S : $ = [S] : (O = !1, $ = i.value);
    const y = c($, x || {}, O);
    return y.catch((I) => I), y;
  }, d = (S) => {
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
      (m && (n == null ? void 0 : n.immediate) && O.isValid || !Jl(O.v, y.v)) && x.push($);
    }), f(x, {
      trigger: "change"
    }), m = !1, h = Lr(rn(S));
  }, b = n == null ? void 0 : n.debounce;
  let C = !0;
  return ae(t, () => {
    i.value = t ? Object.keys(ve(t)) : [], !C && n && n.validateOnRuleChange && f(), C = !1;
  }, {
    deep: !0,
    immediate: !0
  }), ae(i, () => {
    const S = {};
    i.value.forEach((x) => {
      S[x] = g({}, r[x], {
        autoLink: !1,
        required: qd(ve(t)[x])
      }), delete r[x];
    });
    for (const x in r)
      Object.prototype.hasOwnProperty.call(r, x) && delete r[x];
    g(r, S);
  }, {
    immediate: !0
  }), ae(e, b && b.wait ? XO(w, b.wait, p4(b, ["wait"])) : w, {
    immediate: n && !!n.immediate,
    deep: !0
  }), {
    modelRef: e,
    rulesRef: t,
    initialModel: o,
    validateInfos: r,
    resetFields: a,
    validate: f,
    validateField: u,
    mergeValidateInfo: p,
    clearValidate: d
  };
}
const Z6 = () => ({
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
function J6(e, t) {
  return Jl(nn(e), nn(t));
}
const Zt = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AForm",
  inheritAttrs: !1,
  props: Be(Z6(), {
    layout: "horizontal",
    hideRequiredMark: !1,
    colon: !0
  }),
  Item: Yg,
  useForm: Q6,
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
    } = Se("form", e), f = T(() => e.requiredMark === "" || e.requiredMark), d = T(() => {
      var L;
      return f.value !== void 0 ? f.value : s && ((L = s.value) === null || L === void 0 ? void 0 : L.requiredMark) !== void 0 ? s.value.requiredMark : !e.hideRequiredMark;
    });
    Yp(c), mp(u);
    const p = T(() => {
      var L, j;
      return (L = e.colon) !== null && L !== void 0 ? L : (j = s.value) === null || j === void 0 ? void 0 : j.colon;
    }), {
      validateMessages: h
    } = e0(), m = T(() => g(g(g({}, Ri), h.value), e.validateMessages)), [w, b] = Hs(a), C = T(() => oe(a.value, {
      [`${a.value}-${e.layout}`]: !0,
      [`${a.value}-hide-required-mark`]: d.value === !1,
      [`${a.value}-rtl`]: l.value === "rtl",
      [`${a.value}-${c.value}`]: c.value
    }, b.value)), S = te(), x = {}, $ = (L, j) => {
      x[L] = j;
    }, O = (L) => {
      delete x[L];
    }, y = (L) => {
      const j = !!L, A = j ? nn(L).map(wl) : [];
      return j ? Object.values(x).filter((z) => A.findIndex((q) => J6(q, z.fieldName.value)) > -1) : Object.values(x);
    }, I = (L) => {
      if (!e.model) {
        Je(!1, "Form", "model is required for resetFields to work.");
        return;
      }
      y(L).forEach((j) => {
        j.resetField();
      });
    }, E = (L) => {
      y(L).forEach((j) => {
        j.clearValidate();
      });
    }, R = (L) => {
      const {
        scrollToFirstError: j
      } = e;
      if (n("finishFailed", L), j && L.errorFields.length) {
        let A = {};
        typeof j == "object" && (A = j), D(L.errorFields[0].name, A);
      }
    }, _ = function() {
      return P(...arguments);
    }, D = function(L) {
      let j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const A = y(L ? [L] : void 0);
      if (A.length) {
        const z = A[0].fieldId.value, q = z ? document.getElementById(z) : null;
        q && Qy(q, g({
          scrollMode: "if-needed",
          block: "nearest"
        }, j));
      }
    }, F = function() {
      let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      if (L === !0) {
        const j = [];
        return Object.values(x).forEach((A) => {
          let {
            namePath: z
          } = A;
          j.push(z.value);
        }), Gd(e.model, j);
      } else
        return Gd(e.model, L);
    }, H = (L, j) => {
      if (Je(!(L instanceof Function), "Form", "validateFields/validateField/validate not support callback, please use promise instead"), !e.model)
        return Je(!1, "Form", "model is required for validateFields to work."), Promise.reject("Form `model` is required for validateFields to work.");
      const A = !!L, z = A ? nn(L).map(wl) : [], q = [];
      Object.values(x).forEach((W) => {
        var G;
        if (A || z.push(W.namePath.value), !(!((G = W.rules) === null || G === void 0) && G.value.length))
          return;
        const ee = W.namePath.value;
        if (!A || x6(z, ee)) {
          const re = W.validateRules(g({
            validateMessages: m.value
          }, j));
          q.push(re.then(() => ({
            name: ee,
            errors: [],
            warnings: []
          })).catch((ie) => {
            const k = [], B = [];
            return ie.forEach((U) => {
              let {
                rule: {
                  warningOnly: ne
                },
                errors: Q
              } = U;
              ne ? B.push(...Q) : k.push(...Q);
            }), k.length ? Promise.reject({
              name: ee,
              errors: k,
              warnings: B
            }) : {
              name: ee,
              errors: k,
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
      return H(...arguments);
    }, M = (L) => {
      L.preventDefault(), L.stopPropagation(), n("submit", L), e.model && H().then((A) => {
        n("finish", A);
      }).catch((A) => {
        R(A);
      });
    };
    return r({
      resetFields: I,
      clearValidate: E,
      validateFields: H,
      getFieldsValue: F,
      validate: _,
      scrollToField: D
    }), kg({
      model: T(() => e.model),
      name: T(() => e.name),
      labelAlign: T(() => e.labelAlign),
      labelCol: T(() => e.labelCol),
      labelWrap: T(() => e.labelWrap),
      wrapperCol: T(() => e.wrapperCol),
      vertical: T(() => e.layout === "vertical"),
      colon: p,
      requiredMark: d,
      validateTrigger: T(() => e.validateTrigger),
      rules: T(() => e.rules),
      addField: $,
      removeField: O,
      onValidate: (L, j, A) => {
        n("validate", L, j, A);
      },
      validateMessages: m
    }), ae(() => e.rules, () => {
      e.validateOnRuleChange && H();
    }), () => {
      var L;
      return w(v("form", N(N({}, i), {}, {
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
let jr = g({}, Mt.Modal);
function e3(e) {
  e ? jr = g(g({}, jr), e) : jr = g({}, Mt.Modal);
}
function t3() {
  return jr;
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
    Je(e.ANT_MARK__ === xl, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    const o = Le({
      antLocale: g(g({}, e.locale), {
        exist: !0
      }),
      ANT_MARK__: xl
    });
    return _e("localeData", o), ae(() => e.locale, (r) => {
      e3(r && r.Modal), o.antLocale = g(g({}, r), {
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
const n3 = In(Br), Ni = Z({
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
    }, c = (f) => {
      f && f.stopPropagation(), s();
      const {
        onClose: d,
        noticeKey: p
      } = e;
      d && d(p);
    }, u = () => {
      s(), l();
    };
    return be(() => {
      l();
    }), Zo(() => {
      i = !0, s();
    }), ae([a, () => e.updateMark, () => e.visible], (f, d) => {
      let [p, h, m] = f, [w, b, C] = d;
      (p !== w || h !== b || m !== C && C) && u();
    }, {
      flush: "post"
    }), () => {
      var f, d;
      const {
        prefixCls: p,
        closable: h,
        closeIcon: m = (f = o.closeIcon) === null || f === void 0 ? void 0 : f.call(o),
        onClick: w,
        holder: b
      } = e, {
        class: C,
        style: S
      } = n, x = `${p}-notice`, $ = Object.keys(n).reduce((y, I) => ((I.startsWith("data-") || I.startsWith("aria-") || I === "role") && (y[I] = n[I]), y), {}), O = v("div", N({
        class: oe(x, C, {
          [`${x}-closable`]: h
        }),
        style: S,
        onMouseenter: s,
        onMouseleave: l,
        onClick: w
      }, $), [v("div", {
        class: `${x}-content`
      }, [(d = o.default) === null || d === void 0 ? void 0 : d.call(o)]), h ? v("a", {
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
var o3 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
let Yd = 0;
const r3 = Date.now();
function Qd() {
  const e = Yd;
  return Yd += 1, `rcNotification_${r3}_${e}`;
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
        animation: f = "fade"
      } = e;
      let d = e.transitionName;
      return !d && f && (d = `${u}-${f}`), Ci(d);
    }), s = (u, f) => {
      const d = u.key || Qd(), p = g(g({}, u), {
        key: d
      }), {
        maxCount: h
      } = e, m = a.value.map((b) => b.notice.key).indexOf(d), w = a.value.concat();
      m !== -1 ? w.splice(m, 1, {
        notice: p,
        holderCallback: f
      }) : (h && a.value.length >= h && (p.key = w[0].notice.key, p.updateMark = Qd(), p.userPassKey = d, w.shift()), w.push({
        notice: p,
        holderCallback: f
      })), a.value = w;
    }, c = (u) => {
      a.value = rn(a.value).filter((f) => {
        let {
          notice: {
            key: d,
            userPassKey: p
          }
        } = f;
        return (p || d) !== u;
      });
    };
    return o({
      add: s,
      remove: c,
      notices: a
    }), () => {
      var u;
      const {
        prefixCls: f,
        closeIcon: d = (u = r.closeIcon) === null || u === void 0 ? void 0 : u.call(r, {
          prefixCls: f
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
          prefixCls: f,
          closeIcon: typeof d == "function" ? d({
            prefixCls: f
          }) : d
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
          class: `${f}-hook-holder`,
          ref: (I) => {
            typeof x > "u" || (I ? (i.set(x, I), C(I, y)) : i.delete(x));
          }
        }, null) : v(Ni, N(N({}, y), {}, {
          class: oe(y.class, e.hashId)
        }), {
          default: () => [typeof O == "function" ? O({
            prefixCls: f
          }) : O]
        });
      }), h = {
        [f]: 1,
        [n.class]: !!n.class,
        [e.hashId]: !0
      };
      return v("div", {
        class: h,
        style: n.style || {
          top: "65px",
          left: "50%"
        }
      }, [v(ai, N({
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
    useStyle: f
  } = o, d = o3(o, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]), p = document.createElement("div");
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
      const S = X(), x = T(() => Ve.getPrefixCls(r, l)), [, $] = f(x);
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
        return v(Qn, N(N({}, O), {}, {
          prefixCls: y
        }), {
          default: () => [v(ri, N(N({
            ref: S
          }, C), {}, {
            prefixCls: x.value,
            transitionName: I,
            hashId: $.value
          }), null)]
        });
      };
    }
  }), m = v(h, d);
  m.appContext = a || m.appContext, on(m, p);
};
let Zd = 0;
const i3 = Date.now();
function Jd() {
  const e = Zd;
  return Zd += 1, `rcNotification_${i3}_${e}`;
}
const a3 = Z({
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
      Object.keys(s.value).forEach((f) => {
        u[f] = [];
      }), e.notices.forEach((f) => {
        const {
          placement: d = "topRight"
        } = f.notice;
        d && (u[d] = u[d] || [], u[d].push(f));
      }), s.value = u;
    });
    const c = T(() => Object.keys(s.value));
    return () => {
      var u;
      const {
        prefixCls: f,
        closeIcon: d = (u = o.closeIcon) === null || u === void 0 ? void 0 : u.call(o, {
          prefixCls: f
        })
      } = e, p = c.value.map((h) => {
        var m, w;
        const b = s.value[h], C = (m = e.getClassName) === null || m === void 0 ? void 0 : m.call(e, h), S = (w = e.getStyles) === null || w === void 0 ? void 0 : w.call(e, h), x = b.map((y, I) => {
          let {
            notice: E,
            holderCallback: R
          } = y;
          const _ = I === i.value.length - 1 ? E.updateMark : void 0, {
            key: D,
            userPassKey: F
          } = E, {
            content: H
          } = E, P = g(g(g({
            prefixCls: f,
            closeIcon: typeof d == "function" ? d({
              prefixCls: f
            }) : d
          }, E), E.props), {
            key: D,
            noticeKey: F || D,
            updateMark: _,
            onClose: (M) => {
              var L;
              l(M), (L = E.onClose) === null || L === void 0 || L.call(E);
            },
            onClick: E.onClick
          });
          return R ? v("div", {
            key: D,
            class: `${f}-hook-holder`,
            ref: (M) => {
              typeof D > "u" || (M ? (r.set(D, M), R(M, P)) : r.delete(D));
            }
          }, null) : v(Ni, N(N({}, P), {}, {
            class: oe(P.class, e.hashId)
          }), {
            default: () => [typeof H == "function" ? H({
              prefixCls: f
            }) : H]
          });
        }), $ = {
          [f]: 1,
          [`${f}-${h}`]: 1,
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
        }, [v(ai, N(N({
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
var l3 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const s3 = () => document.body;
let ef = 0;
function c3() {
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
    getContainer: t = s3,
    motion: n,
    prefixCls: o,
    maxCount: r,
    getClassName: i,
    getStyles: a,
    onAllRemoved: l
  } = e, s = l3(e, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]), c = X([]), u = X(), f = (b, C) => {
    const S = b.key || Jd(), x = g(g({}, b), {
      key: S
    }), $ = c.value.map((y) => y.notice.key).indexOf(S), O = c.value.concat();
    $ !== -1 ? O.splice($, 1, {
      notice: x,
      holderCallback: C
    }) : (r && c.value.length >= r && (x.key = O[0].notice.key, x.updateMark = Jd(), x.userPassKey = S, O.shift()), O.push({
      notice: x,
      holderCallback: C
    })), c.value = O;
  }, d = (b) => {
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
  }, h = () => v(a3, {
    ref: u,
    prefixCls: o,
    maxCount: r,
    notices: c.value,
    remove: d,
    getClassName: i,
    getStyles: a,
    animation: n,
    hashId: e.hashId,
    onAllRemoved: l,
    getContainer: t
  }, null), m = X([]), w = {
    open: (b) => {
      const C = c3(s, b);
      (C.key === null || C.key === void 0) && (C.key = `vc-notification-${ef}`, ef += 1), m.value = [...m.value, {
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
          f(b.config);
          break;
        case "close":
          d(b.key);
          break;
        case "destroy":
          p();
          break;
      }
    }), m.value = []);
  }), [w, h];
}
const u3 = (e) => {
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
    motionDurationSlow: f,
    marginXS: d,
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
      [t]: g(g({}, nt(e)), {
        position: "fixed",
        top: d,
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
          animationDuration: f,
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
          animationDuration: f,
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
          marginInlineEnd: d,
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
}, js = Ge("Message", (e) => {
  const t = we(e, {
    messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
  });
  return [u3(t)];
}, (e) => ({
  height: 150,
  zIndexPopup: e.zIndexPopupBase + 10
})), d3 = {
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
      }, [e.icon || d3[e.type], v("span", null, [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)])]);
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
    } = ci(), a = T(() => e.prefixCls || i("message")), [, l] = js(a);
    return v(Ni, N(N({}, o), {}, {
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
var f3 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const p3 = 8, m3 = 3, g3 = Z({
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
    } = Se("message", e), l = T(() => i("message", e.prefixCls)), [, s] = js(l), c = () => {
      var m;
      const w = (m = e.top) !== null && m !== void 0 ? m : p3;
      return {
        left: "50%",
        transform: "translateX(-50%)",
        top: typeof w == "number" ? `${w}px` : w
      };
    }, u = () => oe(s.value, e.rtl ? `${l.value}-rtl` : ""), f = () => {
      var m;
      return zl({
        prefixCls: l.value,
        animation: (m = e.animation) !== null && m !== void 0 ? m : "move-up",
        transitionName: e.transitionName
      });
    }, d = v("span", {
      class: `${l.value}-close-x`
    }, [v(un, {
      class: `${l.value}-close-icon`
    }, null)]), [p, h] = Zg({
      //@ts-ignore
      getStyles: c,
      prefixCls: l.value,
      getClassName: u,
      motion: f,
      closable: !1,
      closeIcon: d,
      duration: (o = e.duration) !== null && o !== void 0 ? o : m3,
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
let tf = 0;
function v3(e) {
  const t = X(null), n = Symbol("messageHolderKey"), o = (s) => {
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
      hashId: f
    } = t.value, d = `${u}-notice`, {
      content: p,
      icon: h,
      type: m,
      key: w,
      class: b,
      onClose: C
    } = s, S = f3(s, ["content", "icon", "type", "key", "class", "onClose"]);
    let x = w;
    return x == null && (tf += 1, x = `antd-message-${tf}`), $h(($) => (c(g(g({}, S), {
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
      class: oe(m && `${d}-${m}`, f, b),
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
    const c = (u, f, d) => {
      let p;
      u && typeof u == "object" && "content" in u ? p = u : p = {
        content: u
      };
      let h, m;
      typeof f == "function" ? m = f : (h = f, m = d);
      const w = g(g({
        onClose: m,
        duration: h
      }, p), {
        type: s
      });
      return r(w);
    };
    a[s] = c;
  }), [a, () => v(g3, N(N({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function h3(e) {
  return v3(e);
}
let ev = 3, tv, Qe, y3 = 1, nv = "", ov = "move-up", rv = !1, iv = () => document.body, av, lv = !1;
function b3() {
  return y3++;
}
function w3(e) {
  e.top !== void 0 && (tv = e.top, Qe = null), e.duration !== void 0 && (ev = e.duration), e.prefixCls !== void 0 && (nv = e.prefixCls), e.getContainer !== void 0 && (iv = e.getContainer, Qe = null), e.transitionName !== void 0 && (ov = e.transitionName, Qe = null, rv = !0), e.maxCount !== void 0 && (av = e.maxCount, Qe = null), e.rtl !== void 0 && (lv = e.rtl);
}
function S3(e, t) {
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
    useStyle: js
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
}, x3 = Object.keys(sv);
function C3(e) {
  const t = e.duration !== void 0 ? e.duration : ev, n = e.key || b3(), o = new Promise((i) => {
    const a = () => (typeof e.onClose == "function" && e.onClose(), i(!0));
    S3(e, (l) => {
      l.notice({
        key: n,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: (s) => {
          let {
            prefixCls: c
          } = s;
          const u = sv[e.type], f = u ? v(u, null, null) : "", d = oe(`${c}-custom-content`, {
            [`${c}-${e.type}`]: e.type,
            [`${c}-rtl`]: lv === !0
          });
          return v("div", {
            class: d
          }, [typeof e.icon == "function" ? e.icon() : e.icon || f, v("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
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
function $3(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
const Nt = {
  open: C3,
  config: w3,
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
function O3(e, t) {
  e[t] = (n, o, r) => $3(n) ? e.open(g(g({}, n), {
    type: t
  })) : (typeof o == "function" && (r = o, o = void 0), e.open({
    content: n,
    duration: o,
    type: t,
    onClose: r
  }));
}
x3.forEach((e) => O3(Nt, e));
Nt.warn = Nt.warning;
Nt.useMessage = h3;
const P3 = (e) => {
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
}, I3 = (e) => {
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
    colorTextHeading: f,
    notificationBg: d,
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
      [n]: g(g(g(g({}, nt(e)), {
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
      }), P3(e)), {
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
        background: d,
        borderRadius: a,
        boxShadow: o,
        [`${n}-close-icon`]: {
          fontSize: b,
          cursor: "pointer"
        },
        [`${$}-message`]: {
          marginBottom: e.marginXS,
          color: f,
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
}, Bs = Ge("Notification", (e) => {
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
  return [I3(o)];
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
const T3 = {
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
    const s = T3[o];
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
    } = Se("notification", e), n = T(() => e.prefixCls || t("notification")), o = T(() => `${n.value}-notice`), [, r] = Bs(n);
    return () => v(Ni, N(N({}, e), {}, {
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
function E3(e) {
  return {
    name: `${e}-fade`
  };
}
var _3 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const nf = 24, A3 = 4.5, M3 = Z({
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
    } = Se("notification", e), i = T(() => e.prefixCls || o("notification")), a = (d) => {
      var p, h;
      return dv(d, (p = e.top) !== null && p !== void 0 ? p : nf, (h = e.bottom) !== null && h !== void 0 ? h : nf);
    }, [, l] = Bs(i), s = () => oe(l.value, {
      [`${i.value}-rtl`]: e.rtl
    }), c = () => E3(i.value), [u, f] = Zg({
      prefixCls: i.value,
      getStyles: a,
      getClassName: s,
      motion: c,
      closable: !0,
      closeIcon: cv(i.value),
      duration: A3,
      getContainer: () => {
        var d, p;
        return ((d = e.getPopupContainer) === null || d === void 0 ? void 0 : d.call(e)) || ((p = r.value) === null || p === void 0 ? void 0 : p.call(r)) || document.body;
      },
      maxCount: e.maxCount,
      hashId: l.value,
      onAllRemoved: e.onAllRemoved
    });
    return n(g(g({}, u), {
      prefixCls: i.value,
      hashId: l
    })), f;
  }
});
function R3(e) {
  const t = X(null), n = Symbol("notificationHolderKey"), o = (l) => {
    if (!t.value)
      return;
    const {
      open: s,
      prefixCls: c,
      hashId: u
    } = t.value, f = `${c}-notice`, {
      message: d,
      description: p,
      icon: h,
      type: m,
      btn: w,
      class: b
    } = l, C = _3(l, ["message", "description", "icon", "type", "btn", "class"]);
    return s(g(g({
      placement: "topRight"
    }, C), {
      content: () => v(uv, {
        prefixCls: f,
        icon: typeof h == "function" ? h() : h,
        type: m,
        message: typeof d == "function" ? d() : d,
        description: typeof p == "function" ? p() : p,
        btn: typeof w == "function" ? w() : w
      }, null),
      // @ts-ignore
      class: oe(m && `${f}-${m}`, u, b)
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
  }), [i, () => v(M3, N(N({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function F3(e) {
  return R3(e);
}
const gn = {};
let fv = 4.5, pv = "24px", mv = "24px", Cl = "", gv = "topRight", vv = () => document.body, hv = null, $l = !1, yv;
function N3(e) {
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
function D3(e, t) {
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
  } = q3(), u = c("notification", n || Cl), f = `${u}-${o}-${$l}`, d = gn[f];
  if (d) {
    Promise.resolve(d).then((h) => {
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
    useStyle: Bs,
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
    gn[f] = h, t(h);
  });
}
const L3 = {
  success: Ps,
  info: Ts,
  error: Es,
  warning: Is
};
function H3(e) {
  const {
    icon: t,
    type: n,
    description: o,
    message: r,
    btn: i
  } = e, a = e.duration === void 0 ? fv : e.duration;
  D3(e, (l) => {
    l.notice({
      content: (s) => {
        let {
          prefixCls: c
        } = s;
        const u = `${c}-notice`;
        let f = null;
        if (t)
          f = () => v("span", {
            class: `${u}-icon`
          }, [Wn(t)]);
        else if (n) {
          const d = L3[n];
          f = () => v(d, {
            class: `${u}-icon ${u}-icon-${n}`
          }, null);
        }
        return v("div", {
          class: f ? `${u}-with-icon` : ""
        }, [f && f(), v("div", {
          class: `${u}-message`
        }, [!o && f ? v("span", {
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
const co = {
  open: H3,
  close(e) {
    Object.keys(gn).forEach((t) => Promise.resolve(gn[t]).then((n) => {
      n.removeNotice(e);
    }));
  },
  config: N3,
  destroy() {
    Object.keys(gn).forEach((e) => {
      Promise.resolve(gn[e]).then((t) => {
        t.destroy();
      }), delete gn[e];
    });
  }
}, j3 = ["success", "info", "warning", "error"];
j3.forEach((e) => {
  co[e] = (t) => co.open(g(g({}, t), {
    type: e
  }));
});
co.warn = co.warning;
co.useNotification = F3;
const B3 = `-ant-${Date.now()}-${Math.random()}`;
function z3(e, t) {
  const n = {}, o = (a, l) => {
    let s = a.clone();
    return s = (l == null ? void 0 : l(s)) || s, s.toRgbString();
  }, r = (a, l) => {
    const s = new je(a), c = xn(s.toRgbString());
    n[`${l}-color`] = o(s), n[`${l}-color-disabled`] = c[1], n[`${l}-color-hover`] = c[4], n[`${l}-color-active`] = c[6], n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = c[0], n[`${l}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    r(t.primaryColor, "primary");
    const a = new je(t.primaryColor), l = xn(a.toRgbString());
    l.forEach((c, u) => {
      n[`primary-${u + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = o(a, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = o(a, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = o(a, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = o(a, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = o(a, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const s = new je(l[0]);
    n["primary-color-active-deprecated-f-30"] = o(s, (c) => c.setAlpha(c.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = o(s, (c) => c.darken(2));
  }
  return t.successColor && r(t.successColor, "success"), t.warningColor && r(t.warningColor, "warning"), t.errorColor && r(t.errorColor, "error"), t.infoColor && r(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim();
}
function V3(e, t) {
  const n = z3(e, t);
  yt() ? jo(n, `${B3}-dynamic-theme`) : Je(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const W3 = (e) => {
  const [t, n] = go();
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
function U3(e, t) {
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
var G3 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const X3 = "ant";
function Yn() {
  return Ve.prefixCls || X3;
}
function bv() {
  return Ve.iconPrefixCls || _l;
}
const zs = Le({}), Ve = Le({});
Pe(() => {
  g(Ve, zs), Ve.prefixCls = Yn(), Ve.iconPrefixCls = bv(), Ve.getPrefixCls = (e, t) => t || (e ? `${Ve.prefixCls}-${e}` : Ve.prefixCls), Ve.getRootPrefixCls = () => Ve.prefixCls ? Ve.prefixCls : Yn();
});
let xa;
const k3 = (e) => {
  xa && xa(), xa = Pe(() => {
    g(zs, Le(e)), g(Ve, Le(e));
  }), e.theme && V3(Yn(), e.theme);
}, q3 = () => ({
  getPrefixCls: (e, t) => t || (e ? `${Yn()}-${e}` : Yn()),
  getIconPrefixCls: bv,
  getRootPrefixCls: () => Ve.prefixCls ? Ve.prefixCls : Yn()
}), Qn = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: t0(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = ci(), r = (P, M) => {
      const {
        prefixCls: L = "ant"
      } = e;
      if (M) return M;
      const j = L || o.getPrefixCls("");
      return P ? `${j}-${P}` : j;
    }, i = T(() => e.iconPrefixCls || o.iconPrefixCls.value || _l), a = T(() => i.value !== o.iconPrefixCls.value), l = T(() => {
      var P;
      return e.csp || ((P = o.csp) === null || P === void 0 ? void 0 : P.value);
    }), s = W3(i), c = U3(T(() => e.theme), T(() => {
      var P;
      return (P = o.theme) === null || P === void 0 ? void 0 : P.value;
    })), u = (P) => (e.renderEmpty || n.renderEmpty || o.renderEmpty || qy)(P), f = T(() => {
      var P, M;
      return (P = e.autoInsertSpaceInButton) !== null && P !== void 0 ? P : (M = o.autoInsertSpaceInButton) === null || M === void 0 ? void 0 : M.value;
    }), d = T(() => {
      var P;
      return e.locale || ((P = o.locale) === null || P === void 0 ? void 0 : P.value);
    });
    ae(d, () => {
      zs.locale = d.value;
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
      autoInsertSpaceInButton: f,
      locale: d,
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
    }, D = T(() => {
      const P = c.value || {}, {
        algorithm: M,
        token: L
      } = P, j = G3(P, ["algorithm", "token"]), A = M && (!Array.isArray(M) || M.length > 0) ? Ip(M) : void 0;
      return g(g({}, j), {
        theme: A,
        token: g(g({}, mi), L)
      });
    }), F = T(() => {
      var P, M;
      let L = {};
      return d.value && (L = ((P = d.value.Form) === null || P === void 0 ? void 0 : P.defaultValidateMessages) || ((M = Mt.Form) === null || M === void 0 ? void 0 : M.defaultValidateMessages) || {}), e.form && e.form.validateMessages && (L = g(g({}, L), e.form.validateMessages)), L;
    });
    n0(_), Jh({
      validateMessages: F
    }), Yp(I), mp(E);
    const H = (P) => {
      var M, L;
      let j = a.value ? s((M = n.default) === null || M === void 0 ? void 0 : M.call(n)) : (L = n.default) === null || L === void 0 ? void 0 : L.call(n);
      if (e.theme) {
        const A = /* @__PURE__ */ function() {
          return j;
        }();
        j = v(Wy, {
          value: D.value
        }, {
          default: () => [A]
        });
      }
      return v(n3, {
        locale: d.value || P,
        ANT_MARK__: xl
      }, {
        default: () => [j]
      });
    };
    return Pe(() => {
      p.value && (Nt.config({
        rtl: p.value === "rtl"
      }), co.config({
        rtl: p.value === "rtl"
      }));
    }), () => v(vp, {
      children: (P, M, L) => H(L)
    }, null);
  }
});
Qn.config = k3;
Qn.install = function(e) {
  e.component(Qn.name, Qn);
};
const No = (e) => e != null && (Array.isArray(e) ? ht(e).length : !0);
function Vs(e) {
  return No(e.prefix) || No(e.suffix) || No(e.allowClear);
}
function zr(e) {
  return No(e.addonBefore) || No(e.addonAfter);
}
function Ol(e) {
  return typeof e > "u" || e === null ? "" : String(e);
}
function Do(e, t, n, o) {
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
const K3 = () => ({
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
}), Sv = () => g(g({}, K3()), {
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
}), Y3 = Z({
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
        readonly: f,
        handleReset: d,
        suffix: p = n.suffix,
        prefixCls: h
      } = e;
      if (!s)
        return null;
      const m = !u && !f && c, w = `${h}-clear-icon`, b = ((l = n.clearIcon) === null || l === void 0 ? void 0 : l.call(n)) || "*";
      return v("span", {
        onClick: d,
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
        disabled: f,
        allowClear: d,
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
      let I = et(x, {
        value: u,
        hidden: h
      });
      if (Vs({
        prefix: w,
        suffix: b,
        allowClear: d
      })) {
        const E = `${m}-affix-wrapper`, R = oe(E, {
          [`${E}-disabled`]: f,
          [`${E}-focused`]: c,
          [`${E}-readonly`]: p,
          [`${E}-input-with-clear-btn`]: b && d && u
        }, !zr({
          addonAfter: C,
          addonBefore: S
        }) && o.class, $), _ = (b || d) && v("span", {
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
        }, [w]), et(x, {
          style: null,
          value: u,
          hidden: null
        }), _]);
      }
      if (zr({
        addonAfter: C,
        addonBefore: S
      })) {
        const E = `${m}-group`, R = `${E}-addon`, _ = oe(`${m}-wrapper`, E, O), D = oe(`${m}-group-wrapper`, o.class, y);
        return v("span", {
          class: D,
          style: o.style,
          hidden: h
        }, [v("span", {
          class: _
        }, [S && v("span", {
          class: R
        }, [S]), et(I, {
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
var Q3 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Z3 = Z({
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
    const a = X(e.value === void 0 ? e.defaultValue : e.value), l = X(!1), s = X(), c = X();
    ae(() => e.value, () => {
      a.value = e.value;
    }), ae(() => e.disabled, () => {
      e.disabled && (l.value = !1);
    });
    const u = (y) => {
      s.value && wv(s.value.input, y);
    }, f = () => {
      var y;
      (y = s.value.input) === null || y === void 0 || y.blur();
    }, d = (y, I, E) => {
      var R;
      (R = s.value.input) === null || R === void 0 || R.setSelectionRange(y, I, E);
    }, p = () => {
      var y;
      (y = s.value.input) === null || y === void 0 || y.select();
    };
    r({
      focus: u,
      blur: f,
      input: T(() => {
        var y;
        return (y = s.value.input) === null || y === void 0 ? void 0 : y.input;
      }),
      stateValue: a,
      setSelectionRange: d,
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
      Do(s.value.input, y, h), m(E);
    }, b = (y) => {
      y.keyCode === 13 && i("pressEnter", y), i("keydown", y);
    }, C = (y) => {
      l.value = !0, i("focus", y);
    }, S = (y) => {
      l.value = !1, i("blur", y);
    }, x = (y) => {
      Do(s.value.input, y, h), m("", () => {
        u();
      });
    }, $ = () => {
      var y, I;
      const {
        addonBefore: E = n.addonBefore,
        addonAfter: R = n.addonAfter,
        disabled: _,
        valueModifiers: D = {},
        htmlSize: F,
        autocomplete: H,
        prefixCls: P,
        inputClassName: M,
        prefix: L = (y = n.prefix) === null || y === void 0 ? void 0 : y.call(n),
        suffix: j = (I = n.suffix) === null || I === void 0 ? void 0 : I.call(n),
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
        autocomplete: H,
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
        }) && !Vs({
          prefix: L,
          suffix: j,
          allowClear: A
        }) && o.class),
        ref: s,
        key: "ant-input",
        size: F,
        type: z,
        lazy: e.lazy
      });
      return D.lazy && delete Y.onInput, Y.autofocus || delete Y.autofocus, v(ts, Ue(Y, ["size"]), null);
    }, O = () => {
      var y;
      const {
        maxlength: I,
        suffix: E = (y = n.suffix) === null || y === void 0 ? void 0 : y.call(n),
        showCount: R,
        prefixCls: _
      } = e, D = Number(I) > 0;
      if (E || R) {
        const F = [...Ol(a.value)].length, H = typeof R == "object" ? R.formatter({
          count: F,
          maxlength: I
        }) : `${F}${D ? ` / ${I}` : ""}`;
        return v(Ie, null, [!!R && v("span", {
          class: oe(`${_}-show-count-suffix`, {
            [`${_}-show-count-has-suffix`]: !!E
          })
        }, [H]), E]);
      }
      return null;
    };
    return be(() => {
      process.env.NODE_ENV === "test" && e.autofocus && u();
    }), () => {
      const {
        prefixCls: y,
        disabled: I
      } = e, E = Q3(e, ["prefixCls", "disabled"]);
      return v(Y3, N(N(N({}, E), o), {}, {
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
}), Di = () => Ue(xv(), ["wrapperClassName", "groupClassName", "inputClassName", "affixWrapperClassName"]), Cv = () => g(g({}, Ue(Di(), ["prefix", "addonBefore", "addonAfter", "suffix"])), {
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
var J3 = function(e, t) {
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
  props: Di(),
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      expose: r,
      emit: i
    } = t;
    const a = te(), l = or(), s = sn.useInject(), c = T(() => Ti(s.status, e.status)), {
      direction: u,
      prefixCls: f,
      size: d,
      autocomplete: p
    } = Se("input", e), {
      compactSize: h,
      compactItemClassnames: m
    } = xs(f, u), w = T(() => h.value || d.value), [b, C] = Fs(f), S = Tn();
    r({
      focus: (F) => {
        var H;
        (H = a.value) === null || H === void 0 || H.focus(F);
      },
      blur: () => {
        var F;
        (F = a.value) === null || F === void 0 || F.blur();
      },
      input: a,
      setSelectionRange: (F, H, P) => {
        var M;
        (M = a.value) === null || M === void 0 || M.setSelectionRange(F, H, P);
      },
      select: () => {
        var F;
        (F = a.value) === null || F === void 0 || F.select();
      }
    });
    const I = te([]), E = () => {
      I.value.push(setTimeout(() => {
        var F, H, P, M;
        !((F = a.value) === null || F === void 0) && F.input && ((H = a.value) === null || H === void 0 ? void 0 : H.input.getAttribute("type")) === "password" && (!((P = a.value) === null || P === void 0) && P.input.hasAttribute("value")) && ((M = a.value) === null || M === void 0 || M.input.removeAttribute("value"));
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
    }, D = (F) => {
      i("update:value", F.target.value), i("change", F), i("input", F), l.onFieldChange();
    };
    return () => {
      var F, H, P, M, L, j;
      const {
        hasFeedback: A,
        feedbackIcon: z
      } = s, {
        allowClear: q,
        bordered: Y = !0,
        prefix: K = (F = n.prefix) === null || F === void 0 ? void 0 : F.call(n),
        suffix: W = (H = n.suffix) === null || H === void 0 ? void 0 : H.call(n),
        addonAfter: G = (P = n.addonAfter) === null || P === void 0 ? void 0 : P.call(n),
        addonBefore: ee = (M = n.addonBefore) === null || M === void 0 ? void 0 : M.call(n),
        id: re = (L = l.id) === null || L === void 0 ? void 0 : L.value
      } = e, ie = J3(e, ["allowClear", "bordered", "prefix", "suffix", "addonAfter", "addonBefore", "id"]), k = (A || W) && v(Ie, null, [W, A && z]), B = f.value, U = Vs({
        prefix: K,
        suffix: W
      }) || !!A, ne = n.clearIcon || (() => v(St, null, null));
      return b(v(Z3, N(N(N({}, o), Ue(ie, ["onUpdate:value", "onChange", "onInput"])), {}, {
        onChange: D,
        id: re,
        disabled: (j = e.disabled) !== null && j !== void 0 ? j : S.value,
        ref: a,
        prefixCls: B,
        autocomplete: p.value,
        onBlur: R,
        onFocus: _,
        prefix: K,
        suffix: k,
        allowClear: q,
        addonAfter: G && v(md, null, {
          default: () => [v(Ju, null, {
            default: () => [G]
          })]
        }),
        addonBefore: ee && v(md, null, {
          default: () => [v(Ju, null, {
            default: () => [ee]
          })]
        }),
        class: [o.class, m.value],
        inputClassName: oe({
          [`${B}-sm`]: w.value === "small",
          [`${B}-lg`]: w.value === "large",
          [`${B}-rtl`]: u.value === "rtl",
          [`${B}-borderless`]: !Y
        }, !U && Kn(B, c.value), C.value),
        affixWrapperClassName: oe({
          [`${B}-affix-wrapper-sm`]: w.value === "small",
          [`${B}-affix-wrapper-lg`]: w.value === "large",
          [`${B}-affix-wrapper-rtl`]: u.value === "rtl",
          [`${B}-affix-wrapper-borderless`]: !Y
        }, Kn(`${B}-affix-wrapper`, c.value, A), C.value),
        wrapperClassName: oe({
          [`${B}-group-rtl`]: u.value === "rtl"
        }, C.value),
        groupClassName: oe({
          [`${B}-group-wrapper-sm`]: w.value === "small",
          [`${B}-group-wrapper-lg`]: w.value === "large",
          [`${B}-group-wrapper-rtl`]: u.value === "rtl"
        }, Kn(`${B}-group-wrapper`, c.value, A), C.value)
      }), g(g({}, n), {
        clearIcon: ne
      })));
    };
  }
}), eT = Z({
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
    const s = T(() => a("input")), [c, u] = Fs(s), f = T(() => {
      const d = r.value;
      return {
        [`${d}`]: !0,
        [u.value]: !0,
        [`${d}-lg`]: e.size === "large",
        [`${d}-sm`]: e.size === "small",
        [`${d}-compact`]: e.compact,
        [`${d}-rtl`]: i.value === "rtl"
      };
    });
    return () => {
      var d;
      return c(v("span", N(N({}, o), {}, {
        class: oe(f.value, o.class)
      }), [(d = n.default) === null || d === void 0 ? void 0 : d.call(n)]));
    };
  }
});
var tT = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const nT = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AInputSearch",
  inheritAttrs: !1,
  props: g(g({}, Di()), {
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
    const a = X(), l = X(!1);
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
    }, f = ($) => {
      var O;
      document.activeElement === ((O = a.value) === null || O === void 0 ? void 0 : O.input) && $.preventDefault();
    }, d = ($) => {
      var O, y;
      i("search", (y = (O = a.value) === null || O === void 0 ? void 0 : O.input) === null || y === void 0 ? void 0 : y.stateValue, $);
    }, p = ($) => {
      l.value || e.loading || d($);
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
        suffix: D = (O = n.suffix) === null || O === void 0 ? void 0 : O.call(n)
      } = e, F = tT(e, ["disabled", "loading", "addonAfter", "suffix"]);
      let {
        enterButton: H = (I = (y = n.enterButton) === null || y === void 0 ? void 0 : y.call(n)) !== null && I !== void 0 ? I : !1
      } = e;
      H = H || H === "";
      const P = typeof H == "boolean" ? v(Ii, null, null) : null, M = `${w.value}-button`, L = Array.isArray(H) ? H[0] : H;
      let j;
      const A = L.type && cg(L.type) && L.type.__ANT_BUTTON;
      if (A || L.tagName === "button")
        j = et(L, g({
          onMousedown: f,
          onClick: d,
          key: "enterButton"
        }, A ? {
          class: M,
          size: S.value
        } : {}), !1);
      else {
        const q = P && !H;
        j = v(tt, {
          class: M,
          type: H ? "primary" : void 0,
          size: S.value,
          disabled: E,
          key: "enterButton",
          onMousedown: f,
          onClick: d,
          loading: R,
          icon: q ? P : null
        }, {
          default: () => [q ? null : P || H]
        });
      }
      _ && (j = [j, _]);
      const z = oe(w.value, {
        [`${w.value}-rtl`]: C.value === "rtl",
        [`${w.value}-${S.value}`]: !!S.value,
        [`${w.value}-with-button`]: !!H
      }, o.class);
      return v(ze, N(N(N({
        ref: a
      }, Ue(F, ["onUpdate:value", "onSearch", "enterButton"])), o), {}, {
        onPressEnter: p,
        onCompositionstart: h,
        onCompositionend: m,
        size: S.value,
        prefixCls: x.value,
        addonAfter: j,
        suffix: D,
        onChange: u,
        class: z,
        disabled: E
      }), n);
    };
  }
}), of = (e) => e != null && (Array.isArray(e) ? ht(e).length : !0);
function oT(e) {
  return of(e.addonBefore) || of(e.addonAfter);
}
const rT = ["text", "input"], iT = Z({
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
        handleReset: f,
        suffix: d = n.suffix
      } = e, p = !c && !u && s, h = `${l}-clear-icon`;
      return v(St, {
        onClick: f,
        onMousedown: (m) => m.preventDefault(),
        class: oe({
          [`${h}-hidden`]: !p,
          [`${h}-has-suffix`]: !!d
        }, h),
        role: "button"
      }, null);
    }, a = (l, s) => {
      const {
        value: c,
        allowClear: u,
        direction: f,
        bordered: d,
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
        return et(s, {
          value: c,
          disabled: e.disabled
        });
      const x = oe(`${l}-affix-wrapper`, `${l}-affix-wrapper-textarea-with-clear-btn`, Kn(`${l}-affix-wrapper`, Ti(C, h), S), {
        [`${l}-affix-wrapper-rtl`]: f === "rtl",
        [`${l}-affix-wrapper-borderless`]: !d,
        // className will go to addon wrapper
        [`${o.class}`]: !oT({
          addonAfter: m,
          addonBefore: w
        }) && o.class
      }, b);
      return v("span", {
        class: x,
        style: o.style,
        hidden: p
      }, [et(s, {
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
      return c === rT[0] ? a(s, u) : null;
    };
  }
}), aT = `
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
`, lT = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], Ca = {};
let pt;
function sT(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && Ca[n])
    return Ca[n];
  const o = window.getComputedStyle(e), r = o.getPropertyValue("box-sizing") || o.getPropertyValue("-moz-box-sizing") || o.getPropertyValue("-webkit-box-sizing"), i = parseFloat(o.getPropertyValue("padding-bottom")) + parseFloat(o.getPropertyValue("padding-top")), a = parseFloat(o.getPropertyValue("border-bottom-width")) + parseFloat(o.getPropertyValue("border-top-width")), s = {
    sizingStyle: lT.map((c) => `${c}:${o.getPropertyValue(c)}`).join(";"),
    paddingSize: i,
    borderSize: a,
    boxSizing: r
  };
  return t && n && (Ca[n] = s), s;
}
function cT(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  pt || (pt = document.createElement("textarea"), pt.setAttribute("tab-index", "-1"), pt.setAttribute("aria-hidden", "true"), document.body.appendChild(pt)), e.getAttribute("wrap") ? pt.setAttribute("wrap", e.getAttribute("wrap")) : pt.removeAttribute("wrap");
  const {
    paddingSize: r,
    borderSize: i,
    boxSizing: a,
    sizingStyle: l
  } = sT(e, t);
  pt.setAttribute("style", `${l};${aT}`), pt.value = e.value || e.placeholder || "";
  let s, c, u, f = pt.scrollHeight;
  if (a === "border-box" ? f += i : a === "content-box" && (f -= r), n !== null || o !== null) {
    pt.value = " ";
    const p = pt.scrollHeight - r;
    n !== null && (s = p * n, a === "border-box" && (s = s + r + i), f = Math.max(s, f)), o !== null && (c = p * o, a === "border-box" && (c = c + r + i), u = f > c ? "" : "hidden", f = Math.min(c, f));
  }
  const d = {
    height: `${f}px`,
    overflowY: u,
    resize: "none"
  };
  return s && (d.minHeight = `${s}px`), c && (d.maxHeight = `${c}px`), d;
}
const $a = 0, Oa = 1, Pa = 2, uT = Z({
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
    }, f = te(), d = te();
    Pe(() => {
      const O = e.autoSize || e.autosize;
      O ? (f.value = O.minRows, d.value = O.maxRows) : (f.value = void 0, d.value = void 0);
    });
    const p = T(() => !!(e.autoSize || e.autosize)), h = () => {
      c.value = $a;
    };
    ae([() => e.value, f, d, p], () => {
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
          const O = cT(l.value.input, !1, f.value, d.value);
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
    }), Je(e.autosize === void 0, "Input.TextArea", "autosize is deprecated, please use autoSize instead.");
    const $ = () => {
      const {
        prefixCls: O,
        disabled: y
      } = e, I = Ue(e, ["prefixCls", "onPressEnter", "autoSize", "autosize", "defaultValue", "allowClear", "type", "maxlength", "valueModifiers"]), E = oe(O, n.class, {
        [`${O}-disabled`]: y
      }), R = p.value ? m.value : null, _ = [n.style, s.value, R], D = g(g(g({}, I), n), {
        style: _,
        class: E
      });
      return (c.value === $a || c.value === Oa) && _.push({
        overflowX: "hidden",
        overflowY: "hidden"
      }), D.autofocus || delete D.autofocus, D.rows === 0 && delete D.rows, v(si, {
        onResize: S,
        disabled: !p.value
      }, {
        default: () => [v(ts, N(N({}, D), {}, {
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
function rf(e, t, n, o) {
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
    const a = or(), l = sn.useInject(), s = T(() => Ti(l.status, e.status)), c = X((i = e.value) !== null && i !== void 0 ? i : e.defaultValue), u = X(), f = X(""), {
      prefixCls: d,
      size: p,
      direction: h
    } = Se("input", e), [m, w] = Fs(d), b = Tn(), C = T(() => e.showCount === "" || e.showCount || !1), S = T(() => Number(e.maxlength) > 0), x = X(!1), $ = X(), O = X(0), y = (A) => {
      x.value = !0, $.value = f.value, O.value = A.currentTarget.selectionStart, r("compositionstart", A);
    }, I = (A) => {
      var z;
      x.value = !1;
      let q = A.currentTarget.value;
      if (S.value) {
        const Y = O.value >= e.maxlength + 1 || O.value === ((z = $.value) === null || z === void 0 ? void 0 : z.length);
        q = rf(Y, $.value, q, e.maxlength);
      }
      q !== f.value && (D(q), Do(A.currentTarget, A, P, q)), r("compositionend", A);
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
    }, D = (A, z) => {
      c.value !== A && (e.value === void 0 ? c.value = A : Fe(() => {
        var q, Y, K;
        u.value.textArea.value !== f.value && ((K = (q = u.value) === null || q === void 0 ? void 0 : (Y = q.instance).update) === null || K === void 0 || K.call(Y));
      }), Fe(() => {
        z && z();
      }));
    }, F = (A) => {
      A.keyCode === 13 && r("pressEnter", A), r("keydown", A);
    }, H = (A) => {
      const {
        onBlur: z
      } = e;
      z == null || z(A), a.onFieldBlur();
    }, P = (A) => {
      r("update:value", A.target.value), r("change", A), r("input", A), a.onFieldChange();
    }, M = (A) => {
      Do(u.value.textArea, A, P), D("", () => {
        R();
      });
    }, L = (A) => {
      let z = A.target.value;
      if (c.value !== z) {
        if (S.value) {
          const q = A.target, Y = q.selectionStart >= e.maxlength + 1 || q.selectionStart === z.length || !q.selectionStart;
          z = rf(Y, f.value, z, e.maxlength);
        }
        Do(A.currentTarget, A, P, z), D(z);
      }
    }, j = () => {
      var A, z;
      const {
        class: q
      } = n, {
        bordered: Y = !0
      } = e, K = g(g(g({}, Ue(e, ["allowClear"])), n), {
        class: [{
          [`${d.value}-borderless`]: !Y,
          [`${q}`]: q && !C.value,
          [`${d.value}-sm`]: p.value === "small",
          [`${d.value}-lg`]: p.value === "large"
        }, Kn(d.value, s.value), w.value],
        disabled: b.value,
        showCount: null,
        prefixCls: d.value,
        onInput: L,
        onChange: L,
        onBlur: H,
        onKeydown: F,
        onCompositionstart: y,
        onCompositionend: I
      });
      return !((A = e.valueModifiers) === null || A === void 0) && A.lazy && delete K.onInput, v(uT, N(N({}, K), {}, {
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
      !x.value && S.value && (e.value === null || e.value === void 0) && (A = $v(A, e.maxlength)), f.value = A;
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
        prefixCls: d.value,
        inputType: "text",
        handleReset: M,
        direction: h.value,
        bordered: q,
        style: C.value ? void 0 : K,
        hashId: w.value,
        disabled: (A = e.disabled) !== null && A !== void 0 ? A : b.value
      });
      let ee = v(iT, N(N({}, G), {}, {
        value: f.value,
        status: e.status
      }), {
        element: j
      });
      if (C.value || l.hasFeedback) {
        const re = [...f.value].length;
        let ie = "";
        typeof C.value == "object" ? ie = C.value.formatter({
          value: f.value,
          count: re,
          maxlength: z
        }) : ie = `${re}${S.value ? ` / ${z}` : ""}`, ee = v("div", {
          hidden: Y,
          class: oe(`${d.value}-textarea`, {
            [`${d.value}-textarea-rtl`]: h.value === "rtl",
            [`${d.value}-textarea-show-count`]: C.value,
            [`${d.value}-textarea-in-form-item`]: l.isFormItemInput
          }, `${d.value}-textarea-show-count`, W, w.value),
          style: K,
          "data-count": typeof ie != "object" ? ie : void 0
        }, [ee, l.hasFeedback && v("span", {
          class: `${d.value}-textarea-suffix`
        }, [l.feedbackIcon])]);
      }
      return m(ee);
    };
  }
});
var dT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" };
function af(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      fT(e, r, n[r]);
    });
  }
  return e;
}
function fT(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Li = function(t, n) {
  var o = af({}, t, n.attrs);
  return v(de, af({}, o, {
    icon: dT
  }), null);
};
Li.displayName = "EyeOutlined";
Li.inheritAttrs = !1;
var pT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" };
function lf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      mT(e, r, n[r]);
    });
  }
  return e;
}
function mT(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ws = function(t, n) {
  var o = lf({}, t, n.attrs);
  return v(de, lf({}, o, {
    icon: pT
  }), null);
};
Ws.displayName = "EyeInvisibleOutlined";
Ws.inheritAttrs = !1;
var gT = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const vT = {
  click: "onClick",
  hover: "onMouseover"
}, hT = (e) => e ? v(Li, null, null) : v(Ws, null, null), yT = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AInputPassword",
  inheritAttrs: !1,
  props: g(g({}, Di()), {
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
    const a = X(!1), l = () => {
      const {
        disabled: w
      } = e;
      w || (a.value = !a.value, i("update:visible", a.value));
    };
    Pe(() => {
      e.visible !== void 0 && (a.value = !!e.visible);
    });
    const s = X();
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
    const f = (w) => {
      const {
        action: b,
        iconRender: C = n.iconRender || hT
      } = e, S = vT[b] || "", x = C(a.value), $ = {
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
      return et(zt(x) ? x : v("span", null, [x]), $);
    }, {
      prefixCls: d,
      getPrefixCls: p
    } = Se("input-password", e), h = T(() => p("input", e.inputPrefixCls)), m = () => {
      const {
        size: w,
        visibilityToggle: b
      } = e, C = gT(e, ["size", "visibilityToggle"]), S = b && f(d.value), x = oe(d.value, o.class, {
        [`${d.value}-${w}`]: !!w
      }), $ = g(g(g({}, Ue(C, ["suffix", "iconRender", "action"])), o), {
        type: a.value ? "text" : "password",
        class: x,
        prefixCls: h.value,
        suffix: S
      });
      return w && ($.size = w), v(ze, N({
        ref: s
      }, $), n);
    };
    return () => m();
  }
});
ze.Group = eT;
ze.Search = nT;
ze.TextArea = Ov;
ze.Password = yT;
ze.install = function(e) {
  return e.component(ze.name, ze), e.component(ze.Group.name, ze.Group), e.component(ze.Search.name, ze.Search), e.component(ze.TextArea.name, ze.TextArea), e.component(ze.Password.name, ze.Password), e;
};
function Us() {
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
function sf(e, t, n) {
  let o = t;
  return !o && n && (o = `${e}-${n}`), o;
}
let cf = -1;
function bT() {
  return cf += 1, cf;
}
function uf(e, t) {
  let n = e[`page${t ? "Y" : "X"}Offset`];
  const o = `scroll${t ? "Top" : "Left"}`;
  if (typeof n != "number") {
    const r = e.document;
    n = r.documentElement[o], typeof n != "number" && (n = r.body[o]);
  }
  return n;
}
function wT(e) {
  const t = e.getBoundingClientRect(), n = {
    left: t.left,
    top: t.top
  }, o = e.ownerDocument, r = o.defaultView || o.parentWindow;
  return n.left += uf(r), n.top += uf(r, !0), n;
}
const ST = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, xT = {
  outline: "none"
}, CT = Z({
  compatConfig: {
    MODE: 3
  },
  name: "DialogContent",
  inheritAttrs: !1,
  props: g(g({}, Us()), {
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
        var d;
        (d = i.value) === null || d === void 0 || d.focus({
          preventScroll: !0
        });
      },
      changeActive: (d) => {
        const {
          activeElement: p
        } = document;
        d && p === a.value ? i.value.focus({
          preventScroll: !0
        }) : !d && p === i.value && a.value.focus({
          preventScroll: !0
        });
      }
    });
    const s = te(), c = T(() => {
      const {
        width: d,
        height: p
      } = e, h = {};
      return d !== void 0 && (h.width = typeof d == "number" ? `${d}px` : d), p !== void 0 && (h.height = typeof p == "number" ? `${p}px` : p), s.value && (h.transformOrigin = s.value), h;
    }), u = () => {
      Fe(() => {
        if (l.value) {
          const d = wT(l.value);
          s.value = e.mousePosition ? `${e.mousePosition.x - d.left}px ${e.mousePosition.y - d.top}px` : "";
        }
      });
    }, f = (d) => {
      e.onVisibleChanged(d);
    };
    return () => {
      var d, p, h, m;
      const {
        prefixCls: w,
        footer: b = (d = o.footer) === null || d === void 0 ? void 0 : d.call(o),
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
        modalRender: D = o.modalRender,
        destroyOnClose: F,
        motionName: H
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
      const j = v("div", {
        class: `${w}-content`
      }, [L, M, v("div", N({
        class: `${w}-body`,
        style: y
      }, I), [(m = o.default) === null || m === void 0 ? void 0 : m.call(o)]), P]), A = tr(H);
      return v(Gt, N(N({}, A), {}, {
        onBeforeEnter: u,
        onAfterEnter: () => f(!0),
        onAfterLeave: () => f(!1)
      }), {
        default: () => [_ || !F ? Bt(v("div", N(N({}, r), {}, {
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
          style: xT
        }, [D ? D({
          originVNode: j
        }) : j]), v("div", {
          tabindex: 0,
          ref: a,
          style: ST
        }, null)]), [[fo, _]]) : null]
      });
    };
  }
}), $T = Z({
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
        default: () => [Bt(v("div", N({
          class: `${n}-mask`
        }, r), null), [[fo, o]])]
      });
    };
  }
}), df = Z({
  compatConfig: {
    MODE: 3
  },
  name: "VcDialog",
  inheritAttrs: !1,
  props: Be(g(g({}, Us()), {
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
    const r = X(), i = X(), a = X(), l = X(e.visible), s = X(`vcDialogTitle${bT()}`), c = (b) => {
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
    }, f = X(!1), d = X(), p = () => {
      clearTimeout(d.value), f.value = !0;
    }, h = () => {
      d.value = setTimeout(() => {
        f.value = !1;
      });
    }, m = (b) => {
      if (!e.maskClosable) return null;
      f.value ? f.value = !1 : i.value === b.target && u(b);
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
      clearTimeout(d.value), (b = e.scrollLocker) === null || b === void 0 || b.unLock();
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
        maskStyle: D,
        transitionName: F,
        animation: H,
        wrapProps: P,
        title: M = o.title
      } = e, {
        style: L,
        class: j
      } = n;
      return v("div", N({
        class: [`${b}-root`, I]
      }, nr(e, {
        data: !0
      })), [v($T, {
        prefixCls: b,
        visible: C && S,
        motionName: sf(b, x, $),
        style: g({
          zIndex: O
        }, D),
        maskProps: _
      }, null), v("div", N({
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
      }, P), [v(CT, N(N({}, Ue(e, ["scrollLocker"])), {}, {
        style: L,
        class: j,
        onMousedown: p,
        onMouseup: h,
        ref: a,
        closable: R,
        ariaId: s.value,
        prefixCls: b,
        visible: S,
        onClose: u,
        onVisibleChanged: c,
        motionName: sf(b, F, H)
      }), o)])]);
    };
  }
}), OT = Us(), PT = Z({
  compatConfig: {
    MODE: 3
  },
  name: "DialogWrap",
  inheritAttrs: !1,
  props: Be(OT, {
    visible: !1
  }),
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const r = te(e.visible);
    return es({}, {
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
      return a === !1 ? v(df, N(N({}, u), {}, {
        getOpenCount: () => 2
      }), o) : !l && s && !r.value ? null : v(Fm, {
        autoLock: !0,
        visible: i,
        forceRender: l,
        getContainer: a
      }, {
        default: (f) => (u = g(g(g({}, u), f), {
          afterClose: () => {
            c == null || c(), r.value = !1;
          }
        }), v(df, u, o))
      });
    };
  }
});
var IT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z" } }, { tag: "path", attrs: { d: "M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z" } }] }, name: "rotate-right", theme: "outlined" };
function ff(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      TT(e, r, n[r]);
    });
  }
  return e;
}
function TT(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Gs = function(t, n) {
  var o = ff({}, t, n.attrs);
  return v(de, ff({}, o, {
    icon: IT
  }), null);
};
Gs.displayName = "RotateRightOutlined";
Gs.inheritAttrs = !1;
var ET = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-in", theme: "outlined" };
function pf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      _T(e, r, n[r]);
    });
  }
  return e;
}
function _T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Xs = function(t, n) {
  var o = pf({}, t, n.attrs);
  return v(de, pf({}, o, {
    icon: ET
  }), null);
};
Xs.displayName = "ZoomInOutlined";
Xs.inheritAttrs = !1;
var AT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-out", theme: "outlined" };
function mf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      MT(e, r, n[r]);
    });
  }
  return e;
}
function MT(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ks = function(t, n) {
  var o = mf({}, t, n.attrs);
  return v(de, mf({}, o, {
    icon: AT
  }), null);
};
ks.displayName = "ZoomOutOutlined";
ks.inheritAttrs = !1;
function gf(e) {
  return {
    position: e,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0
  };
}
const RT = (e) => {
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
      [`${t}-mask`]: g(g({}, gf("fixed")), {
        zIndex: e.zIndexPopupBase,
        height: "100%",
        backgroundColor: e.colorBgMask,
        [`${t}-hidden`]: {
          display: "none"
        }
      }),
      [`${t}-wrap`]: g(g({}, gf("fixed")), {
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${t}-root`]: x4(e)
  }];
}, FT = (e) => {
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
      [t]: g(g({}, nt(e)), {
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
}, DT = (e) => {
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
}, LT = (e) => {
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
  return [FT(r), NT(r), DT(r), RT(r), e.wireframe && LT(r), $s(r, "zoom")];
});
var jT = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
let Pl;
const BT = (e) => {
  Pl = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => Pl = null, 100);
};
Hg() && Un(document.documentElement, "click", BT, !0);
const zT = () => ({
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
  props: Be(zT(), {
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
    const [i] = po("Modal"), {
      prefixCls: a,
      rootPrefixCls: l,
      direction: s,
      getPopupContainer: c
    } = Se("modal", e), [u, f] = HT(a);
    Je(e.visible === void 0, "Modal", "`visible` will be removed in next major version, please use `open` instead.");
    const d = (m) => {
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
      return v(Ie, null, [v(tt, N({
        onClick: d
      }, e.cancelButtonProps), {
        default: () => [S || i.value.cancelText]
      }), v(tt, N(N({}, ti(C)), {}, {
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
      } = e, E = jT(e, ["prefixCls", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]), R = oe(x, {
        [`${a.value}-centered`]: !!$,
        [`${a.value}-wrap-rtl`]: s.value === "rtl"
      });
      return u(v(PT, N(N(N({}, E), r), {}, {
        rootClassName: f.value,
        class: oe(f.value, r.class),
        getContainer: O || (c == null ? void 0 : c.value),
        prefixCls: a.value,
        wrapClassName: R,
        visible: S ?? C,
        onClose: d,
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
}), VT = () => {
  const e = X(!1);
  return Ae(() => {
    e.value = !0;
  }), e;
}, WT = {
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
function vf(e) {
  return !!(e && e.then);
}
const Il = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ActionButton",
  props: WT,
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = X(!1), r = X(), i = X(!1);
    let a;
    const l = VT();
    be(() => {
      e.autofocus && (a = setTimeout(() => {
        var f, d;
        return (d = (f = jt(r.value)) === null || f === void 0 ? void 0 : f.focus) === null || d === void 0 ? void 0 : d.call(f);
      }));
    }), Ae(() => {
      clearTimeout(a);
    });
    const s = function() {
      for (var f, d = arguments.length, p = new Array(d), h = 0; h < d; h++)
        p[h] = arguments[h];
      (f = e.close) === null || f === void 0 || f.call(e, ...p);
    }, c = (f) => {
      vf(f) && (i.value = !0, f.then(function() {
        l.value || (i.value = !1), s(...arguments), o.value = !1;
      }, (d) => (l.value || (i.value = !1), o.value = !1, Promise.reject(d))));
    }, u = (f) => {
      const {
        actionFn: d
      } = e;
      if (o.value)
        return;
      if (o.value = !0, !d) {
        s();
        return;
      }
      let p;
      if (e.emitEvent) {
        if (p = d(f), e.quitOnNullishReturnValue && !vf(p)) {
          o.value = !1, s(f);
          return;
        }
      } else if (d.length)
        p = d(e.close), o.value = !1;
      else if (p = d(), !p) {
        s();
        return;
      }
      c(p);
    };
    return () => {
      const {
        type: f,
        prefixCls: d,
        buttonProps: p
      } = e;
      return v(tt, N(N(N({}, ti(f)), {}, {
        onClick: u,
        loading: i.value,
        prefixCls: d
      }, p), {}, {
        ref: r
      }), n);
    };
  }
});
function jn(e) {
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
    const [o] = po("Modal");
    return process.env.NODE_ENV !== "production" && Je(e.visible === void 0, "Modal", "`visible` is deprecated, please use `open` instead."), () => {
      const {
        icon: r,
        onCancel: i,
        onOk: a,
        close: l,
        okText: s,
        closable: c = !1,
        zIndex: u,
        afterClose: f,
        keyboard: d,
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
        modalRender: D,
        focusTriggerAfterClose: F,
        rootPrefixCls: H,
        bodyStyle: P,
        wrapClassName: M,
        footer: L
      } = e;
      let j = r;
      if (!r && r !== null)
        switch (O) {
          case "info":
            j = v(Rn, null, null);
            break;
          case "success":
            j = v(qt, null, null);
            break;
          case "error":
            j = v(St, null, null);
            break;
          default:
            j = v(Kt, null, null);
        }
      const A = e.okType || "primary", z = e.prefixCls || "ant-modal", q = `${z}-confirm`, Y = n.style || {}, K = C ?? O === "confirm", W = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok", G = `${z}-confirm`, ee = oe(G, `${G}-${e.type}`, {
        [`${G}-rtl`]: R === "rtl"
      }, n.class), re = o.value, ie = K && v(Il, {
        actionFn: i,
        close: l,
        autofocus: W === "cancel",
        buttonProps: b,
        prefixCls: `${H}-btn`
      }, {
        default: () => [jn(e.cancelText) || re.cancelText]
      });
      return v(st, {
        prefixCls: z,
        class: ee,
        wrapClassName: oe({
          [`${G}-centered`]: !!p
        }, M),
        onCancel: (k) => l == null ? void 0 : l({
          triggerCancel: !0
        }, k),
        open: y,
        title: "",
        footer: "",
        transitionName: ln(H, "zoom", e.transitionName),
        maskTransitionName: ln(H, "fade", e.maskTransitionName),
        mask: x,
        maskClosable: $,
        maskStyle: m,
        style: Y,
        bodyStyle: P,
        width: S,
        zIndex: u,
        afterClose: f,
        keyboard: d,
        centered: p,
        getContainer: h,
        closable: c,
        closeIcon: _,
        modalRender: D,
        focusTriggerAfterClose: F
      }, {
        default: () => [v("div", {
          class: `${q}-body-wrapper`
        }, [v("div", {
          class: `${q}-body`
        }, [jn(j), I === void 0 ? null : v("span", {
          class: `${q}-title`
        }, [jn(I)]), v("div", {
          class: `${q}-content`
        }, [jn(E)])]), L !== void 0 ? jn(L) : v("div", {
          class: `${q}-btns`
        }, [ie, v(Il, {
          type: A,
          actionFn: a,
          close: l,
          autofocus: W === "ok",
          buttonProps: w,
          prefixCls: `${H}-btn`
        }, {
          default: () => [jn(s) || (K ? re.okText : re.justOkText)]
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
    for (var c = arguments.length, u = new Array(c), f = 0; f < c; f++)
      u[f] = arguments[f];
    const d = u.some((p) => p && p.triggerCancel);
    e.onCancel && d && e.onCancel(() => {
    }, ...u.slice(1));
    for (let p = 0; p < yn.length; p++)
      if (yn[p] === i) {
        yn.splice(p, 1);
        break;
      }
  }
  function i() {
    for (var c = arguments.length, u = new Array(c), f = 0; f < c; f++)
      u[f] = arguments[f];
    n = g(g({}, n), {
      open: !1,
      afterClose: () => {
        typeof e.afterClose == "function" && e.afterClose(), r.apply(this, u);
      }
    }), n.visible && delete n.visible, a(n);
  }
  function a(c) {
    typeof c == "function" ? n = c(n) : n = g(g({}, n), c), o && o1(o, n, t);
  }
  const l = (c) => {
    const u = Ve, f = u.prefixCls, d = c.prefixCls || `${f}-modal`, p = u.iconPrefixCls, h = t3();
    return v(Qn, N(N({}, u), {}, {
      prefixCls: f
    }), {
      default: () => [v(Pv, N(N({}, c), {}, {
        rootPrefixCls: f,
        prefixCls: d,
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
const UT = () => ({
  config: Object,
  afterClose: Function,
  destroyAction: Function,
  open: Boolean
}), GT = Z({
  name: "HookModal",
  inheritAttrs: !1,
  props: Be(UT(), {
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
    }, f = function() {
      e.destroyAction(...arguments);
    };
    n({
      destroy: f
    });
    const d = (o = i.value.okCancel) !== null && o !== void 0 ? o : i.value.type === "confirm", [p] = po("Modal", Mt.Modal);
    return () => v(Pv, N(N({
      prefixCls: s,
      rootPrefixCls: c
    }, i.value), {}, {
      close: f,
      open: r.value,
      afterClose: u,
      okText: i.value.okText || (d ? p == null ? void 0 : p.value.okText : p == null ? void 0 : p.value.justOkText),
      direction: i.value.direction || a.value,
      cancelText: i.value.cancelText || (p == null ? void 0 : p.value.cancelText)
    }), null);
  }
});
let hf = 0;
const XT = Z({
  name: "ElementsHolder",
  inheritAttrs: !1,
  setup(e, t) {
    let {
      expose: n
    } = t;
    const o = X([]);
    return n({
      addModal: (i) => (o.value.push(i), o.value = o.value.slice(), () => {
        o.value = o.value.filter((a) => a !== i);
      })
    }), () => o.value.map((i) => i());
  }
});
function kT() {
  const e = X(null), t = X([]);
  ae(t, () => {
    t.value.length && ([...t.value].forEach((a) => {
      a();
    }), t.value = []);
  }, {
    immediate: !0
  });
  const n = (i) => function(l) {
    var s;
    hf += 1;
    const c = X(!0), u = X(null), f = X(ve(l)), d = X({});
    ae(() => l, (S) => {
      w(g(g({}, Qf(S) ? S.value : S), d.value));
    });
    const p = function() {
      c.value = !1;
      for (var S = arguments.length, x = new Array(S), $ = 0; $ < S; $++)
        x[$] = arguments[$];
      const O = x.some((y) => y && y.triggerCancel);
      f.value.onCancel && O && f.value.onCancel(() => {
      }, ...x.slice(1));
    };
    let h;
    const m = () => v(GT, {
      key: `modal-${hf}`,
      config: i(f.value),
      ref: u,
      open: c.value,
      destroyAction: p,
      afterClose: () => {
        h == null || h();
      }
    }, null);
    h = (s = e.value) === null || s === void 0 ? void 0 : s.addModal(m), h && yn.push(h);
    const w = (S) => {
      f.value = g(g({}, f.value), S);
    };
    return {
      destroy: () => {
        u.value ? p() : t.value = [...t.value, p];
      },
      update: (S) => {
        d.value = S, u.value ? w(S) : t.value = [...t.value, () => w(S)];
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
st.useModal = kT;
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
const qT = (e) => {
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
}, KT = Ge("Popconfirm", (e) => qT(e), (e) => {
  const {
    zIndexPopupBase: t
  } = e;
  return {
    zIndexPopup: t + 60
  };
});
var YT = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const QT = () => g(g({}, _s()), {
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
}), ZT = Z({
  compatConfig: {
    MODE: 3
  },
  name: "APopconfirm",
  inheritAttrs: !1,
  props: Be(QT(), g(g({}, Tg()), {
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
    Je(e.visible === void 0, "Popconfirm", "`visible` will be removed in next major version, please use `open` instead."), r({
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
    }, f = (O) => {
      var y;
      return (y = e.onConfirm) === null || y === void 0 ? void 0 : y.call(e, O);
    }, d = (O) => {
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
    } = Se("popconfirm", e), b = T(() => w()), C = T(() => w("btn")), [S] = KT(m), [x] = po("Popconfirm", Mt.Popconfirm), $ = () => {
      var O, y, I, E, R;
      const {
        okButtonProps: _,
        cancelButtonProps: D,
        title: F = (O = n.title) === null || O === void 0 ? void 0 : O.call(n),
        description: H = (y = n.description) === null || y === void 0 ? void 0 : y.call(n),
        cancelText: P = (I = n.cancel) === null || I === void 0 ? void 0 : I.call(n),
        okText: M = (E = n.okText) === null || E === void 0 ? void 0 : E.call(n),
        okType: L,
        icon: j = ((R = n.icon) === null || R === void 0 ? void 0 : R.call(n)) || v(Kt, null, null),
        showCancel: A = !0
      } = e, {
        cancelButton: z,
        okButton: q
      } = n, Y = g({
        onClick: d,
        size: "small"
      }, D), K = g(g(g({
        onClick: f
      }, ti(L)), {
        size: "small"
      }), _);
      return v("div", {
        class: `${m.value}-inner-content`
      }, [v("div", {
        class: `${m.value}-message`
      }, [j && v("span", {
        class: `${m.value}-message-icon`
      }, [j]), v("div", {
        class: [`${m.value}-message-title`, {
          [`${m.value}-message-title-only`]: !!H
        }]
      }, [F])]), H && v("div", {
        class: `${m.value}-description`
      }, [H]), v("div", {
        class: `${m.value}-buttons`
      }, [A ? z ? z(Y) : v(tt, Y, {
        default: () => [P || x.value.cancelText]
      }) : null, q ? q(K) : v(Il, {
        buttonProps: g(g({
          size: "small"
        }, ti(L)), _),
        actionFn: f,
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
      } = e, R = YT(e, ["placement", "overlayClassName", "trigger"]), _ = Ue(R, ["title", "content", "cancelText", "okText", "onUpdate:open", "onConfirm", "onCancel", "prefixCls"]), D = oe(m.value, I);
      return S(v(WP, N(N(N({}, _), i), {}, {
        trigger: E,
        placement: y,
        onOpenChange: h,
        open: l.value,
        overlayClassName: D,
        transitionName: ln(b.value, "zoom-big", e.transitionName),
        ref: a,
        "data-popover-inject": !0
      }), {
        default: () => [n1(((O = n.default) === null || O === void 0 ? void 0 : O.call(n)) || [], {
          onKeydown: (F) => {
            p(F);
          }
        }, !1)],
        content: $
      }));
    };
  }
}), JT = In(ZT), e8 = ["normal", "exception", "active", "success"], Hi = () => ({
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
function t8(e) {
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
function n8(e) {
  let {
    success: t = {},
    strokeColor: n
  } = e;
  const {
    strokeColor: o
  } = t;
  return [o || kn.green, n || null];
}
const ji = (e, t, n) => {
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
var o8 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const r8 = () => g(g({}, Hi()), {
  strokeColor: Re(),
  direction: Te()
}), i8 = (e) => {
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
}, a8 = (e, t) => {
  const {
    from: n = kn.blue,
    to: o = kn.blue,
    direction: r = t === "rtl" ? "to left" : "to right"
  } = e, i = o8(e, ["from", "to", "direction"]);
  if (Object.keys(i).length !== 0) {
    const a = i8(i);
    return {
      backgroundImage: `linear-gradient(${r}, ${a})`
    };
  }
  return {
    backgroundImage: `linear-gradient(${r}, ${n}, ${o})`
  };
}, l8 = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ProgressLine",
  inheritAttrs: !1,
  props: r8(),
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
      return p && typeof p != "string" ? a8(p, h) : {
        backgroundColor: p
      };
    }), i = T(() => e.strokeLinecap === "square" || e.strokeLinecap === "butt" ? 0 : void 0), a = T(() => e.trailColor ? {
      backgroundColor: e.trailColor
    } : void 0), l = T(() => {
      var p;
      return (p = e.size) !== null && p !== void 0 ? p : [-1, e.strokeWidth || (e.size === "small" ? 6 : 8)];
    }), s = T(() => ji(l.value, "line", {
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
    }), u = T(() => ii(e)), f = T(() => {
      const {
        success: p
      } = e;
      return {
        width: `${Sn(u.value)}%`,
        height: `${s.value.height}px`,
        borderRadius: i.value,
        backgroundColor: p == null ? void 0 : p.strokeColor
      };
    }), d = {
      width: s.value.width < 0 ? "100%" : s.value.width,
      height: `${s.value.height}px`
    };
    return () => {
      var p;
      return v(Ie, null, [v("div", N(N({}, o), {}, {
        class: [`${e.prefixCls}-outer`, o.class],
        style: [o.style, d]
      }), [v("div", {
        class: `${e.prefixCls}-inner`,
        style: a.value
      }, [v("div", {
        class: `${e.prefixCls}-bg`,
        style: c.value
      }, null), u.value !== void 0 ? v("div", {
        class: `${e.prefixCls}-success-bg`,
        style: f.value
      }, null) : null])]), (p = n.default) === null || p === void 0 ? void 0 : p.call(n)]);
    };
  }
}), s8 = {
  percent: 0,
  prefixCls: "vc-progress",
  strokeColor: "#2db7f5",
  strokeLinecap: "round",
  strokeWidth: 1,
  trailColor: "#D9D9D9",
  trailWidth: 1
}, c8 = (e) => {
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
}, u8 = {
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
var d8 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
let yf = 0;
function bf(e) {
  return +e.replace("%", "");
}
function wf(e) {
  return Array.isArray(e) ? e : [e];
}
function Sf(e, t, n, o) {
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
  const f = `M 50,50 m ${l},${s}
   a ${a},${a} 0 1 1 ${c},${-u}
   a ${a},${a} 0 1 1 ${-c},${u}`, d = Math.PI * 2 * a, p = {
    stroke: n,
    strokeDasharray: `${t / 100 * (d - r)}px ${d}px`,
    strokeDashoffset: `-${r / 2 + e / 100 * (d - r)}px`,
    transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"
    // eslint-disable-line
  };
  return {
    pathString: f,
    pathStyle: p
  };
}
const f8 = Z({
  compatConfig: {
    MODE: 3
  },
  name: "VCCircle",
  props: Be(u8, s8),
  setup(e) {
    yf += 1;
    const t = te(yf), n = T(() => wf(e.percent)), o = T(() => wf(e.strokeColor)), [r, i] = EI();
    c8(i);
    const a = () => {
      const {
        prefixCls: l,
        strokeWidth: s,
        strokeLinecap: c,
        gapDegree: u,
        gapPosition: f
      } = e;
      let d = 0;
      return n.value.map((p, h) => {
        const m = o.value[h] || o.value[o.value.length - 1], w = Object.prototype.toString.call(m) === "[object Object]" ? `url(#${l}-gradient-${t.value})` : "", {
          pathString: b,
          pathStyle: C
        } = Sf(d, p, m, s, u, f);
        d += p;
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
        return v("path", N({
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
        gapPosition: f,
        trailColor: d,
        strokeLinecap: p,
        strokeColor: h
      } = e, m = d8(e, ["prefixCls", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "strokeColor"]), {
        pathString: w,
        pathStyle: b
      } = Sf(0, 100, d, s, u, f);
      delete m.percent;
      const C = o.value.find((x) => Object.prototype.toString.call(x) === "[object Object]"), S = {
        d: w,
        stroke: d,
        "stroke-linecap": p,
        "stroke-width": c || s,
        "fill-opacity": "0",
        class: `${l}-circle-trail`,
        style: b
      };
      return v("svg", N({
        class: `${l}-circle`,
        viewBox: "0 0 100 100"
      }, m), [C && v("defs", null, [v("linearGradient", {
        id: `${l}-gradient-${t.value}`,
        x1: "100%",
        y1: "0%",
        x2: "0%",
        y2: "0%"
      }, [Object.keys(C).sort((x, $) => bf(x) - bf($)).map((x, $) => v("stop", {
        key: $,
        offset: x,
        "stop-color": C[x]
      }, null))])]), v("path", S, null), a().reverse()]);
    };
  }
}), p8 = () => g(g({}, Hi()), {
  strokeColor: Re()
}), m8 = 3, g8 = (e) => m8 / e * 100, v8 = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ProgressCircle",
  inheritAttrs: !1,
  props: Be(p8(), {
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
    }), a = T(() => ji(i.value, "circle")), l = T(() => {
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
      return (m = e.strokeWidth) !== null && m !== void 0 ? m : Math.max(g8(a.value.width), 6);
    }), u = T(() => e.gapPosition || e.type === "dashboard" && "bottom" || void 0), f = T(() => t8(e)), d = T(() => Object.prototype.toString.call(e.strokeColor) === "[object Object]"), p = T(() => n8({
      success: e.success,
      strokeColor: e.strokeColor
    })), h = T(() => ({
      [`${e.prefixCls}-inner`]: !0,
      [`${e.prefixCls}-circle-gradient`]: d.value
    }));
    return () => {
      var m;
      const w = v(f8, {
        percent: f.value,
        strokeWidth: c.value,
        trailWidth: c.value,
        strokeColor: p.value,
        strokeLinecap: e.strokeLinecap,
        trailColor: e.trailColor,
        prefixCls: e.prefixCls,
        gapDegree: l.value,
        gapPosition: u.value
      }, null);
      return v("div", N(N({}, o), {}, {
        class: [h.value, o.class],
        style: [o.style, s.value]
      }), [a.value.width <= 20 ? v(so, null, {
        default: () => [v("span", null, [w])],
        title: n.default
      }) : v(Ie, null, [w, (m = n.default) === null || m === void 0 ? void 0 : m.call(n)])]);
    };
  }
}), h8 = () => g(g({}, Hi()), {
  steps: Number,
  strokeColor: Ye(),
  trailColor: String
}), y8 = Z({
  compatConfig: {
    MODE: 3
  },
  name: "Steps",
  props: h8(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = T(() => Math.round(e.steps * ((e.percent || 0) / 100))), r = T(() => {
      var l;
      return (l = e.size) !== null && l !== void 0 ? l : [e.size === "small" ? 2 : 14, e.strokeWidth || 8];
    }), i = T(() => ji(r.value, "step", {
      steps: e.steps,
      strokeWidth: e.strokeWidth || 8
    })), a = T(() => {
      const {
        steps: l,
        strokeColor: s,
        trailColor: c,
        prefixCls: u
      } = e, f = [];
      for (let d = 0; d < l; d += 1) {
        const p = Array.isArray(s) ? s[d] : s, h = {
          [`${u}-steps-item`]: !0,
          [`${u}-steps-item-active`]: d <= o.value - 1
        };
        f.push(v("div", {
          key: d,
          class: h,
          style: {
            backgroundColor: d <= o.value - 1 ? p : c,
            width: `${i.value.width / l}px`,
            height: `${i.value.height}px`
          }
        }, null));
      }
      return f;
    });
    return () => {
      var l;
      return v("div", {
        class: `${e.prefixCls}-steps-outer`
      }, [a.value, (l = n.default) === null || l === void 0 ? void 0 : l.call(n)]);
    };
  }
}), b8 = new fe("antProgressActive", {
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
}), w8 = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: g(g({}, nt(e)), {
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
          animationName: b8,
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
}, S8 = (e) => {
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
}, x8 = (e) => {
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
}, C8 = (e) => {
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
}, $8 = Ge("Progress", (e) => {
  const t = e.marginXXS / 2, n = we(e, {
    progressLineRadius: 100,
    progressInfoTextColor: e.colorText,
    progressDefaultColor: e.colorInfo,
    progressRemainingColor: e.colorFillSecondary,
    progressStepMarginInlineEnd: t,
    progressStepMinWidth: t,
    progressActiveMotionDuration: "2.4s"
  });
  return [w8(n), S8(n), x8(n), C8(n)];
});
var O8 = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const P8 = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AProgress",
  inheritAttrs: !1,
  props: Be(Hi(), {
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
    } = Se("progress", e), [a, l] = $8(r);
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
      return !e8.includes(h) && c.value >= 100 ? "success" : h || "normal";
    }), f = T(() => {
      const {
        type: h,
        showInfo: m,
        size: w
      } = e, b = r.value;
      return {
        [b]: !0,
        [`${b}-inline-circle`]: h === "circle" && ji(w, "circle").width <= 20,
        [`${b}-${h === "dashboard" && "circle" || h}`]: !0,
        [`${b}-status-${u.value}`]: !0,
        [`${b}-show-info`]: m,
        [`${b}-${w}`]: w,
        [`${b}-rtl`]: i.value === "rtl",
        [l.value]: !0
      };
    }), d = T(() => typeof e.strokeColor == "string" || Array.isArray(e.strokeColor) ? e.strokeColor : void 0), p = () => {
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
      } = o, C = O8(o, ["class"]), S = p();
      let x;
      return h === "line" ? x = m ? v(y8, N(N({}, e), {}, {
        strokeColor: d.value,
        prefixCls: r.value,
        steps: m
      }), {
        default: () => [S]
      }) : v(l8, N(N({}, e), {}, {
        strokeColor: s.value,
        prefixCls: r.value,
        direction: i.value
      }), {
        default: () => [S]
      }) : (h === "circle" || h === "dashboard") && (x = v(v8, N(N({}, e), {}, {
        prefixCls: r.value,
        strokeColor: s.value,
        progressStatus: u.value
      }), {
        default: () => [S]
      })), a(v("div", N(N({
        role: "progressbar"
      }, C), {}, {
        class: [f.value, b],
        title: w
      }), [x]));
    };
  }
}), I8 = In(P8);
var T8 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" };
function xf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      E8(e, r, n[r]);
    });
  }
  return e;
}
function E8(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Bi = function(t, n) {
  var o = xf({}, t, n.attrs);
  return v(de, xf({}, o, {
    icon: T8
  }), null);
};
Bi.displayName = "DeleteOutlined";
Bi.inheritAttrs = !1;
function _8(e, t) {
  const n = `cannot ${e.method} ${e.action} ${t.status}'`, o = new Error(n);
  return o.status = t.status, o.method = e.method, o.url = e.action, o;
}
function Cf(e) {
  const t = e.responseText || e.response;
  if (!t)
    return t;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function A8(e) {
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
    return t.status < 200 || t.status >= 300 ? e.onError(_8(e, t), Cf(t)) : e.onSuccess(Cf(t), t);
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
const M8 = +/* @__PURE__ */ new Date();
let R8 = 0;
function Ia() {
  return `vc-upload-${M8}-${++R8}`;
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
        return (c === ".jpg" || c === ".jpeg") && (u = [".jpg", ".jpeg"]), u.some((f) => s.endsWith(f));
      }
      return /\/\*$/.test(l) ? i === l.replace(/\/.*$/, "") : r === l ? !0 : /^\w+$/.test(l) ? (no(!1, `Upload takes an invalidate 'accept' type '${l}'.Skip for check.`), !0) : !1;
    });
  }
  return !0;
};
function F8(e, t) {
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
    }) : r.isDirectory && F8(r, (a) => {
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
var D8 = function(e, t, n, o) {
  function r(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(u) {
      try {
        c(o.next(u));
      } catch (f) {
        a(f);
      }
    }
    function s(u) {
      try {
        c(o.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function c(u) {
      u.done ? i(u.value) : r(u.value).then(l, s);
    }
    c((o = o.apply(e, t || [])).next());
  });
}, L8 = function(e, t) {
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
    const c = (C, S) => D8(this, void 0, void 0, function* () {
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
      const D = _;
      return D.uid = C.uid, {
        origin: C,
        data: E,
        parsedFile: D,
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
        method: D
      } = e, {
        uid: F
      } = x, H = I || A8, P = {
        action: $,
        filename: E,
        data: S,
        file: O,
        headers: R,
        withCredentials: _,
        method: D || "post",
        onProgress: (M) => {
          const {
            onProgress: L
          } = e;
          L == null || L(M, O);
        },
        onSuccess: (M, L) => {
          const {
            onSuccess: j
          } = e;
          j == null || j(M, O, L), delete a[F];
        },
        onError: (M, L) => {
          const {
            onError: j
          } = e;
          j == null || j(M, L, O), delete a[F];
        }
      };
      y(x), a[F] = H(P);
    }, f = () => {
      i.value = Ia();
    }, d = (C) => {
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
      s = !1, d();
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
      p(O), f();
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
          const x = m4(Array.prototype.slice.call(C.dataTransfer.files), (y) => Ta(y, e.accept));
          let $ = x[0];
          const O = x[1];
          S === !1 && ($ = $.slice(0, 1)), p($), O.length && e.onReject && e.onReject(O);
        }
    };
    return r({
      abort: d
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
        onMouseenter: D,
        onMouseleave: F
      } = e, H = L8(e, ["componentTag", "prefixCls", "disabled", "id", "multiple", "accept", "capture", "directory", "openFileDialogOnClick", "onMouseenter", "onMouseleave"]), P = {
        [x]: !0,
        [`${x}-disabled`]: $,
        [o.class]: !!o.class
      }, M = R ? {
        directory: "directory",
        webkitdirectory: "webkitdirectory"
      } : {};
      return v(S, N(N({}, $ ? {} : {
        onClick: _ ? m : () => {
        },
        onKeydown: _ ? w : () => {
        },
        onMouseenter: D,
        onMouseleave: F,
        onDrop: b,
        onDragover: b,
        tabindex: "0"
      }), {}, {
        class: P,
        role: "button",
        style: o.style
      }), {
        default: () => [v("input", N(N(N({}, nr(H, {
          aria: !0,
          data: !0
        })), {}, {
          id: O,
          type: "file",
          ref: l,
          onClick: (j) => j.stopPropagation(),
          onCancel: (j) => j.stopPropagation(),
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
const $f = Z({
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
    }), () => v(H8, N(N(N({}, e), o), {}, {
      ref: i
    }), n);
  }
});
var j8 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" } }] }, name: "paper-clip", theme: "outlined" };
function Of(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      B8(e, r, n[r]);
    });
  }
  return e;
}
function B8(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var qs = function(t, n) {
  var o = Of({}, t, n.attrs);
  return v(de, Of({}, o, {
    icon: j8
  }), null);
};
qs.displayName = "PaperClipOutlined";
qs.inheritAttrs = !1;
var z8 = { icon: function(t, n) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z", fill: t } }, { tag: "path", attrs: { d: "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z", fill: n } }, { tag: "path", attrs: { d: "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z", fill: n } }, { tag: "path", attrs: { d: "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", fill: n } }, { tag: "path", attrs: { d: "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z", fill: t } }] };
}, name: "picture", theme: "twotone" };
function Pf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      V8(e, r, n[r]);
    });
  }
  return e;
}
function V8(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ks = function(t, n) {
  var o = Pf({}, t, n.attrs);
  return v(de, Pf({}, o, {
    icon: z8
  }), null);
};
Ks.displayName = "PictureTwoTone";
Ks.inheritAttrs = !1;
var W8 = { icon: function(t, n) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z", fill: n } }, { tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z", fill: t } }] };
}, name: "file", theme: "twotone" };
function If(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      U8(e, r, n[r]);
    });
  }
  return e;
}
function U8(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ys = function(t, n) {
  var o = If({}, t, n.attrs);
  return v(de, If({}, o, {
    icon: W8
  }), null);
};
Ys.displayName = "FileTwoTone";
Ys.inheritAttrs = !1;
function Fv() {
  return {
    capture: Ye([Boolean, String]),
    type: Te(),
    name: String,
    defaultFileList: eo(),
    fileList: eo(),
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
function G8() {
  return {
    listType: Te(),
    onPreview: se(),
    onDownload: se(),
    onRemove: se(),
    items: eo(),
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
const k8 = function() {
  const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").split("/"), o = t[t.length - 1].split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(o) || [""])[0];
}, Nv = (e) => e.indexOf("image/") === 0, q8 = (e) => {
  if (e.type && !e.thumbUrl)
    return Nv(e.type);
  const t = e.thumbUrl || e.url || "", n = k8(t);
  return /^data:image\//.test(t) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(n) ? !0 : !(/^data:/.test(t) || n);
}, Yt = 200;
function K8(e) {
  return new Promise((t) => {
    if (!e.type || !Nv(e.type)) {
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
      const f = n.toDataURL();
      document.body.removeChild(n), t(f);
    }, r.crossOrigin = "anonymous", e.type.startsWith("image/svg+xml")) {
      const i = new FileReader();
      i.addEventListener("load", () => {
        i.result && (r.src = i.result);
      }), i.readAsDataURL(e);
    } else
      r.src = window.URL.createObjectURL(e);
  });
}
var Y8 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "download", theme: "outlined" };
function Tf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Q8(e, r, n[r]);
    });
  }
  return e;
}
function Q8(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Qs = function(t, n) {
  var o = Tf({}, t, n.attrs);
  return v(de, Tf({}, o, {
    icon: Y8
  }), null);
};
Qs.displayName = "DownloadOutlined";
Qs.inheritAttrs = !1;
const Z8 = () => ({
  prefixCls: String,
  locale: pe(void 0),
  file: pe(),
  items: eo(),
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
}), J8 = Z({
  compatConfig: {
    MODE: 3
  },
  name: "ListItem",
  inheritAttrs: !1,
  props: Z8(),
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    var r;
    const i = X(!1), a = X();
    be(() => {
      a.value = setTimeout(() => {
        i.value = !0;
      }, 300);
    }), Ae(() => {
      clearTimeout(a.value);
    });
    const l = X((r = e.file) === null || r === void 0 ? void 0 : r.status);
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
      var u, f;
      const {
        prefixCls: d,
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
        onPreview: D,
        onDownload: F,
        onClose: H
      } = e, {
        class: P,
        style: M
      } = o, L = C({
        file: m
      });
      let j = v("div", {
        class: `${d}-text-icon`
      }, [L]);
      if (h === "picture" || h === "picture-card")
        if (l.value === "uploading" || !m.thumbUrl && !m.url) {
          const Q = {
            [`${d}-list-item-thumbnail`]: !0,
            [`${d}-list-item-file`]: l.value !== "uploading"
          };
          j = v("div", {
            class: Q
          }, [L]);
        } else {
          const Q = $ != null && $(m) ? v("img", {
            src: m.thumbUrl || m.url,
            alt: m.name,
            class: `${d}-list-item-image`,
            crossorigin: m.crossOrigin
          }, null) : L, le = {
            [`${d}-list-item-thumbnail`]: !0,
            [`${d}-list-item-file`]: $ && !$(m)
          };
          j = v("a", {
            class: le,
            onClick: (ge) => D(m, ge),
            href: m.url || m.thumbUrl,
            target: "_blank",
            rel: "noopener noreferrer"
          }, [Q]);
        }
      const A = {
        [`${d}-list-item`]: !0,
        [`${d}-list-item-${l.value}`]: !0
      }, z = typeof m.linkProps == "string" ? JSON.parse(m.linkProps) : m.linkProps, q = y ? S({
        customIcon: R ? R({
          file: m
        }) : v(Bi, null, null),
        callback: () => H(m),
        prefixCls: d,
        title: p.removeFile
      }) : null, Y = I && l.value === "done" ? S({
        customIcon: _ ? _({
          file: m
        }) : v(Qs, null, null),
        callback: () => F(m),
        prefixCls: d,
        title: p.downloadFile
      }) : null, K = h !== "picture-card" && v("span", {
        key: "download-delete",
        class: [`${d}-list-item-actions`, {
          picture: h === "picture"
        }]
      }, [Y, q]), W = `${d}-list-item-name`, G = m.url ? [v("a", N(N({
        key: "view",
        target: "_blank",
        rel: "noopener noreferrer",
        class: W,
        title: m.name
      }, z), {}, {
        href: m.url,
        onClick: (Q) => D(m, Q)
      }), [m.name]), K] : [v("span", {
        key: "view",
        class: W,
        onClick: (Q) => D(m, Q),
        title: m.name
      }, [m.name]), K], ee = {
        pointerEvents: "none",
        opacity: 0.5
      }, re = O ? v("a", {
        href: m.url || m.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        style: m.url || m.thumbUrl ? void 0 : ee,
        onClick: (Q) => D(m, Q),
        title: p.previewFile
      }, [E ? E({
        file: m
      }) : v(Li, null, null)]) : null, ie = h === "picture-card" && l.value !== "uploading" && v("span", {
        class: `${d}-list-item-actions`
      }, [re, l.value === "done" && Y, q]), k = v("div", {
        class: A
      }, [j, G, ie, i.value && v(Gt, c.value, {
        default: () => [Bt(v("div", {
          class: `${d}-list-item-progress`
        }, ["percent" in m ? v(I8, N(N({}, b), {}, {
          type: "line",
          percent: m.percent
        }), null) : null]), [[fo, l.value === "uploading"]])]
      })]), B = {
        [`${d}-list-item-container`]: !0,
        [`${P}`]: !!P
      }, U = m.response && typeof m.response == "string" ? m.response : ((u = m.error) === null || u === void 0 ? void 0 : u.statusText) || ((f = m.error) === null || f === void 0 ? void 0 : f.message) || p.uploadError, ne = l.value === "error" ? v(so, {
        title: U,
        getPopupContainer: (Q) => Q.parentNode
      }, {
        default: () => [k]
      }) : k;
      return v("div", {
        class: B,
        style: M
      }, [x ? x({
        originNode: ne,
        file: m,
        fileList: w,
        actions: {
          download: F.bind(null, m),
          preview: D.bind(null, m),
          remove: H.bind(null, m)
        }
      }) : ne]);
    };
  }
}), eE = (e, t) => {
  let {
    slots: n
  } = t;
  var o;
  return ht((o = n.default) === null || o === void 0 ? void 0 : o.call(n))[0];
}, tE = Z({
  compatConfig: {
    MODE: 3
  },
  name: "AUploadList",
  props: Be(G8(), {
    listType: "text",
    progress: {
      strokeWidth: 2,
      showInfo: !1
    },
    showRemoveIcon: !0,
    showDownloadIcon: !1,
    showPreviewIcon: !0,
    previewFile: K8,
    isImageUrl: q8,
    items: [],
    appendActionVisible: !0
  }),
  setup(e, t) {
    let {
      slots: n,
      expose: o
    } = t;
    const r = X(!1);
    be(() => {
      r.value == !0;
    });
    const i = X([]);
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
      const C = w.status === "uploading", S = e.isImageUrl && e.isImageUrl(w) ? v(Ks, null, null) : v(Ys, null, null);
      let x = C ? v(Ot, null, null) : v(qs, null, null);
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
      return zt(w) ? v(tt, x, {
        icon: () => w
      }) : v(tt, x, {
        default: () => [v("span", null, [w])]
      });
    };
    o({
      handlePreview: a,
      handleDownload: l
    });
    const {
      prefixCls: f,
      rootPrefixCls: d
    } = Se("upload", e), p = T(() => ({
      [`${f.value}-list`]: !0,
      [`${f.value}-list-${e.listType}`]: !0
    })), h = T(() => {
      const m = g({}, Rg(`${d.value}-motion-collapse`));
      delete m.onAfterAppear, delete m.onAfterEnter, delete m.onAfterLeave;
      const w = g(g({}, Ci(`${f.value}-${e.listType === "picture-card" ? "animate-inline" : "animate"}`)), {
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
      } = e, D = E == null ? void 0 : E(), F = i.value;
      return v(ai, N(N({}, h.value), {}, {
        tag: "div"
      }), {
        default: () => [F.map((H) => {
          const {
            uid: P
          } = H;
          return v(J8, {
            key: P,
            locale: w,
            prefixCls: f.value,
            file: H,
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
        }), E ? Bt(v(eE, {
          key: "__ant_upload_appendAction"
        }, {
          default: () => D
        }), [[fo, !!_]]) : null]
      });
    };
  }
}), nE = (e) => {
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
}, oE = (e) => {
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
}, Ef = new fe("uploadAnimateInlineIn", {
  from: {
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0
  }
}), _f = new fe("uploadAnimateInlineOut", {
  to: {
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0
  }
}), rE = (e) => {
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
        animationName: Ef
      },
      [`${n}-leave`]: {
        animationName: _f
      }
    }
  }, Ef, _f];
}, iE = (e) => {
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
}, aE = (e) => {
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
            color: new je(r).setAlpha(0.65).toRgbString(),
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
}, lE = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl"
    }
  };
}, sE = (e) => {
  const {
    componentCls: t,
    colorTextDisabled: n
  } = e;
  return {
    [`${t}-wrapper`]: g(g({}, nt(e)), {
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
}, cE = Ge("Upload", (e) => {
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
  return [sE(l), nE(l), iE(l), aE(l), oE(l), rE(l), lE(l), Cg(l)];
});
var uE = function(e, t, n, o) {
  function r(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(u) {
      try {
        c(o.next(u));
      } catch (f) {
        a(f);
      }
    }
    function s(u) {
      try {
        c(o.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function c(u) {
      u.done ? i(u.value) : r(u.value).then(l, s);
    }
    c((o = o.apply(e, t || [])).next());
  });
}, dE = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Po = `__LIST_IGNORE_${Date.now()}__`, Vr = Z({
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
    } = Se("upload", e), [c, u] = cE(a), f = Tn(), d = T(() => {
      var _;
      return (_ = s.value) !== null && _ !== void 0 ? _ : f.value;
    }), [p, h] = Qr(e.defaultFileList || [], {
      value: Ct(e, "fileList"),
      postState: (_) => {
        const D = Date.now();
        return (_ ?? []).map((F, H) => (!F.uid && !Object.isFrozen(F) && (F.uid = `__AUTO__${D}_${H}__`), F));
      }
    }), m = te("drop"), w = te(null);
    be(() => {
      vt(e.fileList !== void 0 || o.value === void 0, "Upload", "`value` is not a valid prop, do you mean `fileList`?"), vt(e.transformFile === void 0, "Upload", "`transformFile` is deprecated. Please use `beforeUpload` directly."), vt(e.remove === void 0, "Upload", "`remove` props is deprecated. Please use `remove` event.");
    });
    const b = (_, D, F) => {
      var H, P;
      let M = [...D];
      e.maxCount === 1 ? M = M.slice(-1) : e.maxCount && (M = M.slice(0, e.maxCount)), h(M);
      const L = {
        file: _,
        fileList: M
      };
      F && (L.event = F), (H = e["onUpdate:fileList"]) === null || H === void 0 || H.call(e, L.fileList), (P = e.onChange) === null || P === void 0 || P.call(e, L), i.onFieldChange();
    }, C = (_, D) => uE(this, void 0, void 0, function* () {
      const {
        beforeUpload: F,
        transformFile: H
      } = e;
      let P = _;
      if (F) {
        const M = yield F(_, D);
        if (M === !1)
          return !1;
        if (delete _[Po], M === Po)
          return Object.defineProperty(_, Po, {
            value: !0,
            configurable: !0
          }), !1;
        typeof M == "object" && M && (P = M);
      }
      return H && (P = yield H(P)), P;
    }), S = (_) => {
      const D = _.filter((P) => !P.file[Po]);
      if (!D.length)
        return;
      const F = D.map((P) => Ir(P.file));
      let H = [...p.value];
      F.forEach((P) => {
        H = Tr(P, H);
      }), F.forEach((P, M) => {
        let L = P;
        if (D[M].parsedFile)
          P.status = "uploading";
        else {
          const {
            originFileObj: j
          } = P;
          let A;
          try {
            A = new File([j], j.name, {
              type: j.type
            });
          } catch {
            A = new Blob([j], {
              type: j.type
            }), A.name = j.name, A.lastModifiedDate = /* @__PURE__ */ new Date(), A.lastModified = (/* @__PURE__ */ new Date()).getTime();
          }
          A.uid = P.uid, L = A;
        }
        b(L, H);
      });
    }, x = (_, D, F) => {
      try {
        typeof _ == "string" && (_ = JSON.parse(_));
      } catch {
      }
      if (!_a(D, p.value))
        return;
      const H = Ir(D);
      H.status = "done", H.percent = 100, H.response = _, H.xhr = F;
      const P = Tr(H, p.value);
      b(H, P);
    }, $ = (_, D) => {
      if (!_a(D, p.value))
        return;
      const F = Ir(D);
      F.status = "uploading", F.percent = _.percent;
      const H = Tr(F, p.value);
      b(F, H, _);
    }, O = (_, D, F) => {
      if (!_a(F, p.value))
        return;
      const H = Ir(F);
      H.error = _, H.response = D, H.status = "error";
      const P = Tr(H, p.value);
      b(H, P);
    }, y = (_) => {
      let D;
      const F = e.onRemove || e.remove;
      Promise.resolve(typeof F == "function" ? F(_) : F).then((H) => {
        var P, M;
        if (H === !1)
          return;
        const L = X8(_, p.value);
        L && (D = g(g({}, _), {
          status: "removed"
        }), (P = p.value) === null || P === void 0 || P.forEach((j) => {
          const A = D.uid !== void 0 ? "uid" : "name";
          j[A] === D[A] && !Object.isFrozen(j) && (j.status = "removed");
        }), (M = w.value) === null || M === void 0 || M.abort(D), b(D, L));
      });
    }, I = (_) => {
      var D;
      m.value = _.type, _.type === "drop" && ((D = e.onDrop) === null || D === void 0 || D.call(e, _));
    };
    r({
      onBatchStart: S,
      onSuccess: x,
      onProgress: $,
      onError: O,
      fileList: p,
      upload: w
    });
    const [E] = po("Upload", Mt.Upload, T(() => e.locale)), R = (_, D) => {
      const {
        removeIcon: F,
        previewIcon: H,
        downloadIcon: P,
        previewFile: M,
        onPreview: L,
        onDownload: j,
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
      return K ? v(tE, {
        prefixCls: a.value,
        listType: e.listType,
        items: p.value,
        previewFile: M,
        onPreview: L,
        onDownload: j,
        onRemove: y,
        showRemoveIcon: !d.value && ee,
        showPreviewIcon: G,
        showDownloadIcon: W,
        removeIcon: F,
        previewIcon: H,
        downloadIcon: P,
        iconRender: Y,
        locale: E.value,
        isImageUrl: A,
        progress: z,
        itemRender: q,
        appendActionVisible: D,
        appendAction: _
      }, g({}, n)) : _ == null ? void 0 : _();
    };
    return () => {
      var _, D, F;
      const {
        listType: H,
        type: P
      } = e, {
        class: M,
        style: L
      } = o, j = dE(o, ["class", "style"]), A = g(g(g({
        onBatchStart: S,
        onError: O,
        onProgress: $,
        onSuccess: x
      }, j), e), {
        id: (_ = e.id) !== null && _ !== void 0 ? _ : i.id.value,
        prefixCls: a.value,
        beforeUpload: C,
        onChange: void 0,
        disabled: d.value
      });
      delete A.remove, (!n.default || d.value) && delete A.id;
      const z = {
        [`${a.value}-rtl`]: l.value === "rtl"
      };
      if (P === "drag") {
        const W = oe(a.value, {
          [`${a.value}-drag`]: !0,
          [`${a.value}-drag-uploading`]: p.value.some((G) => G.status === "uploading"),
          [`${a.value}-drag-hover`]: m.value === "dragover",
          [`${a.value}-disabled`]: d.value,
          [`${a.value}-rtl`]: l.value === "rtl"
        }, o.class, u.value);
        return c(v("span", N(N({}, o), {}, {
          class: oe(`${a.value}-wrapper`, z, M, u.value)
        }), [v("div", {
          class: W,
          onDrop: I,
          onDragover: I,
          onDragleave: I,
          style: o.style
        }, [v($f, N(N({}, A), {}, {
          ref: w,
          class: `${a.value}-btn`
        }), N({
          default: () => [v("div", {
            class: `${a.value}-drag-container`
          }, [(D = n.default) === null || D === void 0 ? void 0 : D.call(n)])]
        }, n))]), R()]));
      }
      const q = oe(a.value, {
        [`${a.value}-select`]: !0,
        [`${a.value}-select-${H}`]: !0,
        [`${a.value}-disabled`]: d.value,
        [`${a.value}-rtl`]: l.value === "rtl"
      }), Y = Ze((F = n.default) === null || F === void 0 ? void 0 : F.call(n)), K = (W) => v("div", {
        class: q,
        style: W
      }, [v($f, N(N({}, A), {}, {
        ref: w
      }), n)]);
      return c(H === "picture-card" ? v("span", N(N({}, o), {}, {
        class: oe(`${a.value}-wrapper`, `${a.value}-picture-card-wrapper`, z, o.class, u.value)
      }), [R(K, !!Y.length)]) : v("span", N(N({}, o), {}, {
        class: oe(`${a.value}-wrapper`, z, o.class, u.value)
      }), [K(Y.length ? void 0 : {
        display: "none"
      }), R()]));
    };
  }
});
var Af = function(e, t) {
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
      } = e, i = Af(e, ["height"]), {
        style: a
      } = o, l = Af(o, ["style"]), s = g(g(g({}, i), l), {
        type: "drag",
        style: g(g({}, a), {
          height: typeof r == "number" ? `${r}px` : r
        })
      });
      return v(Vr, s, n);
    };
  }
}), fE = g(Vr, {
  Dragger: Aa,
  LIST_IGNORE: Po,
  install(e) {
    return e.component(Vr.name, Vr), e.component(Aa.name, Aa), e;
  }
});
var pE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "down-circle", theme: "outlined" };
function Mf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      mE(e, r, n[r]);
    });
  }
  return e;
}
function mE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Zs = function(t, n) {
  var o = Mf({}, t, n.attrs);
  return v(de, Mf({}, o, {
    icon: pE
  }), null);
};
Zs.displayName = "DownCircleOutlined";
Zs.inheritAttrs = !1;
var gE = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z" } }] }, name: "export", theme: "outlined" };
function Rf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      vE(e, r, n[r]);
    });
  }
  return e;
}
function vE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Js = function(t, n) {
  var o = Rf({}, t, n.attrs);
  return v(de, Rf({}, o, {
    icon: gE
  }), null);
};
Js.displayName = "ExportOutlined";
Js.inheritAttrs = !1;
var hE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z" } }] }, name: "file-add", theme: "outlined" };
function Ff(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      yE(e, r, n[r]);
    });
  }
  return e;
}
function yE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ec = function(t, n) {
  var o = Ff({}, t, n.attrs);
  return v(de, Ff({}, o, {
    icon: hE
  }), null);
};
ec.displayName = "FileAddOutlined";
ec.inheritAttrs = !1;
var bE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M553.1 509.1l-77.8 99.2-41.1-52.4a8 8 0 00-12.6 0l-99.8 127.2a7.98 7.98 0 006.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 00-12.7 0zM360 442a40 40 0 1080 0 40 40 0 10-80 0zm494.6-153.4L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" } }] }, name: "file-image", theme: "outlined" };
function Nf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      wE(e, r, n[r]);
    });
  }
  return e;
}
function wE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var tc = function(t, n) {
  var o = Nf({}, t, n.attrs);
  return v(de, Nf({}, o, {
    icon: bE
  }), null);
};
tc.displayName = "FileImageOutlined";
tc.inheritAttrs = !1;
var SE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zm-650.3-80h85c4.2 0 8-2.7 9.3-6.8l53.7-166h219.2l53.2 166c1.3 4 5 6.8 9.3 6.8h89.1c1.1 0 2.2-.2 3.2-.5a9.7 9.7 0 006-12.4L573.6 118.6a9.9 9.9 0 00-9.2-6.6H462.1c-4.2 0-7.9 2.6-9.2 6.6L244.5 723.1c-.4 1-.5 2.1-.5 3.2-.1 5.3 4.3 9.7 9.7 9.7zm255.9-516.1h4.1l83.8 263.8H424.9l84.7-263.8z" } }] }, name: "font-colors", theme: "outlined" };
function Df(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      xE(e, r, n[r]);
    });
  }
  return e;
}
function xE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var nc = function(t, n) {
  var o = Df({}, t, n.attrs);
  return v(de, Df({}, o, {
    icon: SE
  }), null);
};
nc.displayName = "FontColorsOutlined";
nc.inheritAttrs = !1;
var CE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z" } }, { tag: "path", attrs: { d: "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z" } }] }, name: "form", theme: "outlined" };
function Lf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      $E(e, r, n[r]);
    });
  }
  return e;
}
function $E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var oc = function(t, n) {
  var o = Lf({}, t, n.attrs);
  return v(de, Lf({}, o, {
    icon: CE
  }), null);
};
oc.displayName = "FormOutlined";
oc.inheritAttrs = !1;
var OE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M957.6 507.4L603.2 158.2a7.9 7.9 0 00-11.2 0L353.3 393.4a8.03 8.03 0 00-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 00-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0011.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0011.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2zM389.8 796.2H229.6l134.4-133 80.1 78.9-54.3 54.1zm154.8-62.1L373.2 565.2l68.6-67.6 171.4 168.9-68.6 67.6zM713.1 658L450.3 399.1 597.6 254l262.8 259-147.3 145z" } }] }, name: "highlight", theme: "outlined" };
function Hf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      PE(e, r, n[r]);
    });
  }
  return e;
}
function PE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var rc = function(t, n) {
  var o = Hf({}, t, n.attrs);
  return v(de, Hf({}, o, {
    icon: OE
  }), null);
};
rc.displayName = "HighlightOutlined";
rc.inheritAttrs = !1;
var IE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z" } }] }, name: "lock", theme: "outlined" };
function jf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      TE(e, r, n[r]);
    });
  }
  return e;
}
function TE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ic = function(t, n) {
  var o = jf({}, t, n.attrs);
  return v(de, jf({}, o, {
    icon: IE
  }), null);
};
ic.displayName = "LockOutlined";
ic.inheritAttrs = !1;
var EE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z" } }] }, name: "login", theme: "outlined" };
function Bf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      _E(e, r, n[r]);
    });
  }
  return e;
}
function _E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ac = function(t, n) {
  var o = Bf({}, t, n.attrs);
  return v(de, Bf({}, o, {
    icon: EE
  }), null);
};
ac.displayName = "LoginOutlined";
ac.inheritAttrs = !1;
var AE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z" } }] }, name: "menu-fold", theme: "outlined" };
function zf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      ME(e, r, n[r]);
    });
  }
  return e;
}
function ME(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var lc = function(t, n) {
  var o = zf({}, t, n.attrs);
  return v(de, zf({}, o, {
    icon: AE
  }), null);
};
lc.displayName = "MenuFoldOutlined";
lc.inheritAttrs = !1;
var RE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z" } }] }, name: "menu-unfold", theme: "outlined" };
function Vf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      FE(e, r, n[r]);
    });
  }
  return e;
}
function FE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var sc = function(t, n) {
  var o = Vf({}, t, n.attrs);
  return v(de, Vf({}, o, {
    icon: RE
  }), null);
};
sc.displayName = "MenuUnfoldOutlined";
sc.inheritAttrs = !1;
var NE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z" } }] }, name: "unlock", theme: "outlined" };
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
    icon: NE
  }), null);
};
cc.displayName = "UnlockOutlined";
cc.inheritAttrs = !1;
var LE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "upload", theme: "outlined" };
function Uf(e) {
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
  var o = Uf({}, t, n.attrs);
  return v(de, Uf({}, o, {
    icon: LE
  }), null);
};
zi.displayName = "UploadOutlined";
zi.inheritAttrs = !1;
const Gf = /* @__PURE__ */ Z({
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
    const n = e, o = t, r = te(n.accept), i = te(n.slotType), a = te(n.fileList), l = te(!0), s = te(n.isShowMsg), c = (d) => {
      o("handleChange", d), d.file.status !== "uploading" && console.log(d.file, d.fileList), d.file.status === "done" ? s.value && Nt.success(`${d.file.name} 文件上传成功！`) : d.file.status === "error" && s.value && Nt.error(`${d.file.name} 文件上传失败.`);
    }, u = (d, p) => (o("beforeUpload", d, p, l), l.value);
    ae(
      () => n.fileList,
      (d) => {
        a.value = d;
      },
      { deep: !0, immediate: !0 }
    );
    const f = {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068"
      },
      strokeWidth: 3,
      format: (d) => `${parseFloat(d.toFixed(2))}%`,
      class: "test"
    };
    return (d, p) => {
      const h = tt, m = fE;
      return at(), To(m, {
        "file-list": a.value,
        "onUpdate:fileList": p[0] || (p[0] = (w) => a.value = w),
        name: "file",
        accept: r.value,
        progress: f,
        maxCount: e.maxCount,
        multiple: e.multiple,
        disabled: e.disabled,
        beforeUpload: u,
        onChange: c
      }, {
        itemRender: ce(({ file: w, actions: b }) => [
          Ma(d.$slots, "fileItem", {
            file: w,
            actions: b
          }),
          Eo(` <a-space>\r
        <span :style="file.status === 'error' ? 'color: red' : ''">{{ file.name }}</span>\r
        <a href="javascript:;" @click="actions.download">下载</a>\r
        <a href="javascript:;" @click="actions.remove">删除</a>\r
      </a-space> `)
        ]),
        default: ce(() => [
          i.value === "default" ? (at(), To(h, { key: 0 }, {
            default: ce(() => [
              v(ve(zi)),
              p[1] || (p[1] = Me(" 点击上传 "))
            ]),
            _: 1
            /* STABLE */
          })) : Ma(d.$slots, "default", { key: 1 })
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
}, jE = {
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
          const f = this.canvasTxt.getImageData(...c);
          u.globalCompositeOperation = "destination-over", u.putImageData(f, 0, 0), u.fillStyle = this.myBg, u.fillRect(0, 0, s.width, s.height), l = s.toDataURL(t, n), s = null;
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
function BE(e, t, n, o, r, i) {
  return at(), tn(
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
const Tl = /* @__PURE__ */ Vi(jE, [["render", BE], ["__scopeId", "data-v-5c7dd0c2"]]);
Tl.install = function(e) {
  this.installed || (this.installed = !0, e.component("vueEsign", Tl));
};
const zE = { class: "box" }, VE = { class: "btn-box" }, WE = ["onClick"], UE = ["src"], GE = /* @__PURE__ */ Z({
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
        Nt.error("尚未完成签名！");
      });
    }, l = (c) => {
      o.value = o.value.filter((u, f) => c != u), o.value.length > 0 && (r.value = 0);
    }, s = (c) => {
      r.value = c;
    };
    return t({ images: o, signIndex: r }), (c, u) => {
      const f = tt, d = JT;
      return at(), tn("div", zE, [
        v(
          ve(Tl),
          {
            ref_key: "vueEsignRef",
            ref: n,
            style: { border: "2px solid #ccc", cursor: "grabbing" }
          },
          null,
          512
          /* NEED_PATCH */
        ),
        Xn("div", VE, [
          v(f, {
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
          v(f, {
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
        (at(!0), tn(
          Ie,
          null,
          sh(o.value, (p) => (at(), tn("div", {
            key: p,
            class: wc(["show-img", p === r.value ? "selected" : ""]),
            onClick: (h) => s(p)
          }, [
            Xn("img", {
              src: p,
              alt: ""
            }, null, 8, UE),
            v(ve(Zs), {
              class: wc(["icon select", p === r.value ? "icon-selected" : ""])
            }, null, 8, ["class"]),
            v(d, {
              placement: "top",
              "ok-text": "确认",
              "cancel-text": "取消",
              onConfirm: (h) => l(p)
            }, {
              title: ce(() => u[2] || (u[2] = [
                Xn(
                  "p",
                  null,
                  "确定要删除当前签名吗？",
                  -1
                  /* HOISTED */
                )
              ])),
              default: ce(() => [
                v(ve(Bi), { class: "icon delete" })
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["onConfirm"])
          ], 10, WE))),
          128
          /* KEYED_FRAGMENT */
        ))
      ]);
    };
  }
}), XE = /* @__PURE__ */ Vi(GE, [["__scopeId", "data-v-a2fba4f7"]]);
function kE(e, t, n) {
  var o = document.createElement("canvas");
  let r = 0;
  t <= 32 ? r = 1 : t > 32 && t <= 60 ? r = 2 : t > 60 && t <= 80 ? r = 4 : t > 80 && t <= 100 ? r = 6 : t > 100 && (r = 10), o.height = t + r;
  let i = o.getContext("2d");
  i == null || i.clearRect(0, 0, o.width, o.height), i.fillStyle = n, i.font = t + "px 黑体", i.textBaseline = "middle", i.fillText(e, 0, t / 2 + 2), o.width = i.measureText(e).width, i.fillStyle = n, i.font = t + "px 黑体", i.textBaseline = "middle", i.fillText(e, 0, t / 2 + 2);
  var a = o.toDataURL("image/png");
  return a;
}
function qE(e) {
  if (typeof e == "string") {
    for (var t = e.split(","), n = t[0].match(/:(.*?);/)[1], o = n.split("/")[1], r = atob(t[1]), i = r.length, a = new Uint8Array(i); i--; )
      a[i] = r.charCodeAt(i);
    return new File([a], "filename." + o, {
      type: n
    });
  }
}
function KE(e) {
  const t = e.split(",")[1], n = atob(t), o = [];
  for (let a = 0; a < n.length; a++) {
    const l = n.charCodeAt(a);
    o.push(l);
  }
  const r = new Blob([new Uint8Array(o)], { type: "application/pdf" });
  return URL.createObjectURL(r);
}
var Vn = /* @__PURE__ */ ((e) => (e[e.DISABLE = -1] = "DISABLE", e[e.NONE = 0] = "NONE", e[e.FREETEXT = 3] = "FREETEXT", e[e.HIGHLIGHT = 9] = "HIGHLIGHT", e[e.STAMP = 13] = "STAMP", e[e.INK = 15] = "INK", e))(Vn || {}), Dv = /* @__PURE__ */ ((e) => (e[e.RESIZE = 1] = "RESIZE", e[e.CREATE = 2] = "CREATE", e[e.FREETEXT_SIZE = 11] = "FREETEXT_SIZE", e[e.FREETEXT_COLOR = 12] = "FREETEXT_COLOR", e[e.FREETEXT_OPACITY = 13] = "FREETEXT_OPACITY", e[e.INK_COLOR = 21] = "INK_COLOR", e[e.INK_THICKNESS = 22] = "INK_THICKNESS", e[e.INK_OPACITY = 23] = "INK_OPACITY", e[e.HIGHLIGHT_COLOR = 31] = "HIGHLIGHT_COLOR", e[e.HIGHLIGHT_DEFAULT_COLOR = 32] = "HIGHLIGHT_DEFAULT_COLOR", e[e.HIGHLIGHT_THICKNESS = 33] = "HIGHLIGHT_THICKNESS", e[e.HIGHLIGHT_FREE = 34] = "HIGHLIGHT_FREE", e[e.HIGHLIGHT_SHOW_ALL = 35] = "HIGHLIGHT_SHOW_ALL", e))(Dv || {}), Io = /* @__PURE__ */ ((e) => (e.TEXT_ANNOTATION = "文字批注", e.SIGNATURE = "选择签名", e))(Io || {});
const YE = { class: "func-container" }, QE = { class: "set_func" }, ZE = {
  key: 1,
  class: "sign"
}, JE = /* @__PURE__ */ Z({
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
    const o = e, r = n, i = te(null), a = te(!1), l = te(1), s = te([]), c = te([]), u = te(!1), f = te(null), d = te(), p = te(o.pdfIframe), h = Le({
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
      q(!0), d.value = Io.TEXT_ANNOTATION;
    }
    function _() {
      d.value === Io.TEXT_ANNOTATION && D(), d.value === Io.SIGNATURE && F();
    }
    function D() {
      if (h.fontValue) {
        const K = kE(
          h.fontValue,
          h.fontSize,
          h.fontColor
        );
        P(K), w(), q(!1);
      } else
        Nt.warn("请输入批注内容！");
    }
    function F() {
      if (i.value.signIndex) {
        const { signIndex: K } = i.value;
        P(K), q(!1);
      } else
        Nt.warn("请输入选择签名图片！");
    }
    function H() {
      I(Vn.INK);
    }
    function P(K) {
      if (!K) {
        alert("设置失败！");
        return;
      }
      I(Vn.STAMP), E(
        Dv.CREATE,
        qE(K)
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
      q(!0), d.value = Io.SIGNATURE;
    }, j = (K, W, G) => {
      if (K) {
        const ee = new FileReader();
        ee.onload = function(re) {
          const ie = re.target.result;
          f.value = K.name, r("actionSwitchFile", KE(ie));
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
        ie.download = f.value || ee, ie.href = re, document.body.appendChild(ie), ie.click(), document.body.removeChild(ie), URL.revokeObjectURL(re);
      }
      return r("getSaveResult", { blob: G, filename: ee }), { blob: G, filename: ee };
    }
    function q(K) {
      u.value = K;
    }
    function Y() {
    }
    return t({ saveFile: z }), (K, W) => {
      const G = so, ee = Ov, re = Yg, ie = Et, k = Zt, B = tt, U = st, ne = Kf("drag");
      return at(), tn(
        Ie,
        null,
        [
          Bt((at(), tn("div", YE, [
            Xn("div", QE, [
              a.value ? Eo("v-if", !0) : (at(), To(ve(so), { key: 0 }, {
                title: ce(() => W[10] || (W[10] = [
                  Me("打开侧边栏")
                ])),
                default: ce(() => [
                  v(ve(sc), {
                    class: "anticon",
                    onClick: W[0] || (W[0] = (Q) => C(!0))
                  })
                ]),
                _: 1
                /* STABLE */
              })),
              a.value ? (at(), To(G, { key: 1 }, {
                title: ce(() => W[11] || (W[11] = [
                  Me("关闭侧边栏")
                ])),
                default: ce(() => [
                  v(ve(lc), {
                    class: "anticon",
                    onClick: W[1] || (W[1] = (Q) => C(!1))
                  })
                ]),
                _: 1
                /* STABLE */
              })) : Eo("v-if", !0),
              v(G, null, {
                title: ce(() => W[12] || (W[12] = [
                  Me("导入文件")
                ])),
                default: ce(() => [
                  v(Gf, {
                    isShowMsg: !1,
                    fileList: c.value,
                    maxCount: 1,
                    slotType: "self",
                    accept: "application/pdf",
                    onBeforeUpload: j
                  }, {
                    default: ce(() => [
                      v(ve(ec), {
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
                  v(ve(Xs), {
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
                  v(ve(ks), {
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
                  v(ve(ic), {
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
                  v(ve(cc), {
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
                  v(ve(Gs), {
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
                  v(ve(nc), {
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
                  v(ve(oc), {
                    class: "anticon",
                    onClick: R
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              Eo(` <a-tooltip>\r
        <FontSizeOutlined class="anticon" @click="actionSetTextAnnotation2" />\r
        <template #title>文本批注</template>\r
      </a-tooltip> `),
              v(G, null, {
                title: ce(() => W[20] || (W[20] = [
                  Me("手写批注")
                ])),
                default: ce(() => [
                  v(ve(rc), {
                    class: "anticon",
                    onClick: W[4] || (W[4] = (Q) => H())
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
                  v(ve(tc), {
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
                  v(ve(Js), {
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
                  v(ve(ac), {
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
            title: d.value,
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
              d.value == "文字批注" ? (at(), To(k, {
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
                      Bt(Xn(
                        "input",
                        {
                          type: "color",
                          "onUpdate:modelValue": W[7] || (W[7] = (Q) => h.fontColor = Q)
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [ch, h.fontColor]
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
              }, 8, ["model"])) : (at(), tn("div", ZE, [
                W[25] || (W[25] = Me(" 手写签名： ")),
                v(
                  XE,
                  {
                    ref_key: "signatureRef",
                    ref: i
                  },
                  {
                    default: ce(() => [
                      v(Gf, {
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
                              v(ve(zi)),
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
}), e_ = /* @__PURE__ */ Vi(JE, [["__scopeId", "data-v-538d12f8"]]), t_ = {
  id: "app-pdf",
  class: "pdf-box"
}, n_ = /* @__PURE__ */ Z({
  name: "ths-pdf",
  __name: "index",
  props: {
    pdfUrl: {
      type: String,
      default: "http://192.168.0.115:9080/api/file/Image/annex/658bd7a06bdc07fc5eba4d82.pdf"
    }
  },
  emits: ["getSaveResult"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n;
    let i = te(null);
    const a = te(o.pdfUrl), l = te(null);
    be(() => {
      s(a.value);
    });
    function s(d) {
      i.value && i.value.parentNode.removeChild(i.value);
      const p = document.createElement("iframe");
      p.src = `/pdfjs/web/viewer.html?file=${d}`, p.style.width = "100%", p.style.height = "100%", p.onload = () => {
        const { PDFViewerApplication: m } = c();
        console.log("iframe 加载完成", m), m.pdfSidebar.close();
      }, document.querySelector(".pdf-container").appendChild(p), i.value = p;
    }
    function c() {
      if (i.value.contentWindow.document.readyState !== "complete")
        throw new Error("页面尚未加载完成");
      const { PDFViewerApplication: d, PDFViewerApplicationOptions: p } = i.value.contentWindow;
      return { PDFViewerApplication: d, PDFViewerApplicationOptions: p };
    }
    function u(d) {
      console.log("切换文件", encodeURIComponent(d)), s(d);
    }
    function f(d) {
      if (d)
        r("getSaveResult", d);
      else
        return l.value.saveFile();
    }
    return t({ getSaveResult: f }), (d, p) => (at(), tn("div", t_, [
      p[0] || (p[0] = Xn(
        "div",
        { class: "pdf-container" },
        [
          Eo(' <iframe src="pdfjs/web/viewer.html?file=compressed.tracemonkey-pldi-09.pdf" width="100%" frameborder="0"></iframe> ')
        ],
        -1
        /* HOISTED */
      )),
      v(
        e_,
        {
          ref_key: "toolbarRef",
          ref: l,
          pdfIframe: "pdfIframe",
          onGetSaveResult: f,
          onActionSwitchFile: u,
          getViewerInstance: c
        },
        null,
        512
        /* NEED_PATCH */
      )
    ]));
  }
}), Xf = /* @__PURE__ */ Vi(n_, [["__scopeId", "data-v-d5cc723c"]]), o_ = {
  mounted: function(e, t) {
    e.style.cursor = "move", e.style.position = "absolute", e.onmousedown = function(n) {
      let o = n.pageX - e.offsetLeft, r = n.pageY - e.offsetTop;
      t.value === "father" ? (o = n.pageX - e.parentNode.offsetLeft, r = n.pageY - e.parentNode.offsetTop) : (o = n.pageX - e.offsetLeft, r = n.pageY - e.offsetTop), document.onmousemove = function(i) {
        let a = i.pageX - o, l = i.pageY - r, s, c;
        t.value === "father" ? (s = e.parentNode.parentNode.offsetWidth - e.parentNode.offsetWidth, c = e.parentNode.parentNode.offsetHeight - e.parentNode.offsetHeight) : (s = e.parentNode.offsetWidth - e.offsetWidth, c = e.parentNode.offsetHeight - e.offsetHeight), a < 0 ? a = 0 : a > s && (a = s), l < 0 ? l = 0 : l > c && (l = c), t.value === "father" ? (e.parentNode.style.left = a + "px", e.parentNode.style.top = l + "px") : (e.style.left = a + "px", e.style.top = l + "px");
      }, document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
      };
    }, e.ontouchstart = function(n) {
      let o = n.pageX - e.offsetLeft, r = n.pageY - e.offsetTop;
      t.value === "father" ? (o = n.pageX - e.parentNode.offsetLeft, r = n.pageY - e.parentNode.offsetTop) : (o = n.pageX - e.offsetLeft, r = n.pageY - e.offsetTop), document.ontouchmove = function(i) {
        let a = i.pageX - o, l = i.pageY - r, s, c;
        t.value === "father" ? (s = e.parentNode.parentNode.offsetWidth - e.parentNode.offsetWidth, c = e.parentNode.parentNode.offsetHeight - e.parentNode.offsetHeight) : (s = e.parentNode.offsetWidth - e.offsetWidth, c = e.parentNode.offsetHeight - e.offsetHeight), a < 0 ? a = 0 : a > s && (a = s), l < 0 ? l = 0 : l > c && (l = c), t.value === "father" ? (e.parentNode.style.left = a + "px", e.parentNode.style.top = l + "px") : (e.style.left = a + "px", e.style.top = l + "px");
      }, document.ontouchend = function() {
        document.ontouchmove = document.ontouchend = null;
      };
    };
  }
}, r_ = function(e) {
  e.component(Xf.name, Xf);
}, g_ = { install: r_, dragDirective: o_ };
export {
  g_ as default
};
