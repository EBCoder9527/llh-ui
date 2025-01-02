import { defineComponent as W, ref as k, watch as Y, resolveComponent as re, openBlock as ne, createBlock as ve, withCtx as ge, createTextVNode as Wt, toDisplayString as zf, Fragment as Te, Comment as Vf, Text as Wf, isVNode as kn, inject as pe, computed as _, provide as ue, unref as de, shallowRef as z, getCurrentInstance as Hr, watchEffect as Ye, onBeforeUnmount as un, triggerRef as qf, createVNode as $, h as Zt, Transition as kr, withDirectives as yi, resolveDirective as Gf, onMounted as it, cloneVNode as Vs, nextTick as rt, onUpdated as bi, onUnmounted as Ws, toRef as Uf, withModifiers as wa, vShow as qs, onBeforeMount as Xf, Teleport as Gs, reactive as He, TransitionGroup as xi, toRaw as Qt, render as Ca, createElementBlock as Ut, renderList as Yf, mergeProps as Kf, normalizeStyle as st, createCommentVNode as Ce, renderSlot as Jt, createElementVNode as Cn } from "vue";
const Zf = /* @__PURE__ */ W({
  name: "ths-button",
  __name: "index",
  props: {
    text: {
      type: String,
      default: "按钮"
    }
  },
  emits: ["clickFn"],
  setup(e, { emit: t }) {
    const n = t, r = e, o = k(r.text), i = () => {
      n("clickFn");
    };
    return Y(
      () => r.text,
      (a) => {
        o.value = a;
      }
    ), (a, l) => {
      const s = re("a-button");
      return ne(), ve(s, { onClick: i }, {
        default: ge(() => [
          Wt(
            zf(o.value),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
}), Us = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Qf = /* @__PURE__ */ Us(Zf, [["__scopeId", "data-v-ac1c19f7"]]), Jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qf
}, Symbol.toStringTag, { value: "Module" }));
function An(e) {
  "@babel/helpers - typeof";
  return An = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, An(e);
}
function ed(e, t) {
  if (An(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (An(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function td(e) {
  var t = ed(e, "string");
  return An(t) == "symbol" ? t : t + "";
}
function nd(e, t, n) {
  return (t = td(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function $a(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $a(Object(n), !0).forEach(function(r) {
      nd(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $a(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function y() {
  return y = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, y.apply(null, arguments);
}
const rd = (e) => typeof e == "function", od = Array.isArray, id = (e) => typeof e == "string", ad = (e) => e !== null && typeof e == "object", ld = /^on[^a-z]/, sd = (e) => ld.test(e), Xs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ud = /-(\w)/g, Ys = Xs((e) => e.replace(ud, (t, n) => n ? n.toUpperCase() : "")), cd = /\B([A-Z])/g, fd = Xs((e) => e.replace(cd, "-$1").toLowerCase()), dd = Object.prototype.hasOwnProperty, Sa = (e, t) => dd.call(e, t);
function pd(e, t, n, r) {
  const o = e[n];
  if (o != null) {
    const i = Sa(o, "default");
    if (i && r === void 0) {
      const a = o.default;
      r = o.type !== Function && rd(a) ? a() : a;
    }
    o.type === Boolean && (!Sa(t, n) && !i ? r = !1 : r === "" && (r = !0));
  }
  return r;
}
function qt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e ?? n;
}
function gd(e) {
  let t;
  const n = new Promise((o) => {
    t = e(() => {
      o(!0);
    });
  }), r = () => {
    t == null || t();
  };
  return r.then = (o, i) => n.then(o, i), r.promise = n, r;
}
function K() {
  const e = [];
  for (let t = 0; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (id(n))
        e.push(n);
      else if (od(n))
        for (let r = 0; r < n.length; r++) {
          const o = K(n[r]);
          o && e.push(o);
        }
      else if (ad(n))
        for (const r in n)
          n[r] && e.push(r);
    }
  }
  return e.join(" ");
}
var Ks = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(o, i) {
      return o[0] === n ? (r = i, !0) : !1;
    }), r;
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
        var r = e(this.__entries__, n), o = this.__entries__[r];
        return o && o[1];
      }, t.prototype.set = function(n, r) {
        var o = e(this.__entries__, n);
        ~o ? this.__entries__[o][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, o = e(r, n);
        ~o && r.splice(o, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var o = 0, i = this.__entries__; o < i.length; o++) {
          var a = i[o];
          n.call(r, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), Mo = typeof window < "u" && typeof document < "u" && window.document === document, Cr = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), md = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Cr) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), hd = 2;
function vd(e, t) {
  var n = !1, r = !1, o = 0;
  function i() {
    n && (n = !1, e()), r && l();
  }
  function a() {
    md(i);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - o < hd)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(a, t);
    o = s;
  }
  return l;
}
var yd = 20, bd = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], xd = typeof MutationObserver < "u", wd = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = vd(this.refresh.bind(this), yd);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
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
      !Mo || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), xd ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Mo || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, o = bd.some(function(i) {
        return !!~r.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Zs = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var o = r[n];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, en = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Cr;
}, Qs = Br(0, 0, 0, 0);
function $r(e) {
  return parseFloat(e) || 0;
}
function Oa(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, o) {
    var i = e["border-" + o + "-width"];
    return r + $r(i);
  }, 0);
}
function Cd(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
    var i = o[r], a = e["padding-" + i];
    n[i] = $r(a);
  }
  return n;
}
function $d(e) {
  var t = e.getBBox();
  return Br(0, 0, t.width, t.height);
}
function Sd(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Qs;
  var r = en(e).getComputedStyle(e), o = Cd(r), i = o.left + o.right, a = o.top + o.bottom, l = $r(r.width), s = $r(r.height);
  if (r.boxSizing === "border-box" && (Math.round(l + i) !== t && (l -= Oa(r, "left", "right") + i), Math.round(s + a) !== n && (s -= Oa(r, "top", "bottom") + a)), !_d(e)) {
    var u = Math.round(l + i) - t, f = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(f) !== 1 && (s -= f);
  }
  return Br(o.left, o.top, l, s);
}
var Od = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof en(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof en(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function _d(e) {
  return e === en(e).document.documentElement;
}
function Pd(e) {
  return Mo ? Od(e) ? $d(e) : Sd(e) : Qs;
}
function Td(e) {
  var t = e.x, n = e.y, r = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return Zs(a, {
    x: t,
    y: n,
    width: r,
    height: o,
    top: n,
    right: t + r,
    bottom: o + n,
    left: t
  }), a;
}
function Br(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var Ad = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Br(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Pd(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Ed = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var r = Td(n);
      Zs(this, { target: t, contentRect: r });
    }
    return e;
  }()
), Md = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new Ks(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof en(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new Ad(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof en(t).Element))
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
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new Ed(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Js = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ks(), eu = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = wd.getInstance(), r = new Md(t, n, this);
      Js.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  eu.prototype[e] = function() {
    var t;
    return (t = Js.get(this))[e].apply(t, arguments);
  };
});
var Id = function() {
  return typeof Cr.ResizeObserver < "u" ? Cr.ResizeObserver : eu;
}();
const jd = (e) => e != null && e !== "", tu = (e, t) => {
  const n = y({}, e);
  return Object.keys(t).forEach((r) => {
    const o = n[r];
    if (o)
      o.type || o.default ? o.default = t[r] : o.def ? o.def(t[r]) : n[r] = {
        type: o,
        default: t[r]
      };
    else
      throw new Error(`not have ${r} prop`);
  }), n;
}, Fd = (e) => {
  const t = Object.keys(e), n = {}, r = {}, o = {};
  for (let i = 0, a = t.length; i < a; i++) {
    const l = t[i];
    sd(l) ? (n[l[2].toLowerCase() + l.slice(3)] = e[l], r[l] = e[l]) : o[l] = e[l];
  }
  return {
    onEvents: r,
    events: n,
    extraAttrs: o
  };
}, Nd = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n = {}, r = /;(?![^(]*\))/g, o = /:(.+)/;
  return typeof e == "object" ? e : (e.split(r).forEach(function(i) {
    if (i) {
      const a = i.split(o);
      if (a.length > 1) {
        const l = t ? Ys(a[0].trim()) : a[0].trim();
        n[l] = a[1].trim();
      }
    }
  }), n);
}, Dd = (e, t) => e[t] !== void 0, Rd = Symbol("skipFlatten"), dt = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = Array.isArray(e) ? e : [e], r = [];
  return n.forEach((o) => {
    Array.isArray(o) ? r.push(...dt(o, t)) : o && o.type === Te ? o.key === Rd ? r.push(o) : r.push(...dt(o.children, t)) : o && kn(o) ? t && !nu(o) ? r.push(o) : t || r.push(o) : jd(o) && r.push(o);
  }), r;
}, Ld = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (kn(e))
    return e.type === Te ? t === "default" ? dt(e.children) : [] : e.children && e.children[t] ? dt(e.children[t](n)) : [];
  {
    const r = e.$slots[t] && e.$slots[t](n);
    return dt(r);
  }
}, Yn = (e) => {
  var t;
  let n = ((t = e == null ? void 0 : e.vnode) === null || t === void 0 ? void 0 : t.el) || e && (e.$el || e);
  for (; n && !n.tagName; )
    n = n.nextSibling;
  return n;
}, Hd = (e) => {
  const t = {};
  if (e.$ && e.$.vnode) {
    const n = e.$.vnode.props || {};
    Object.keys(e.$props).forEach((r) => {
      const o = e.$props[r], i = fd(r);
      (o !== void 0 || i in n) && (t[r] = o);
    });
  } else if (kn(e) && typeof e.type == "object") {
    const n = e.props || {}, r = {};
    Object.keys(n).forEach((i) => {
      r[Ys(i)] = n[i];
    });
    const o = e.type.props || {};
    Object.keys(o).forEach((i) => {
      const a = pd(o, r, i, r[i]);
      (a !== void 0 || i in r) && (t[i] = a);
    });
  }
  return t;
}, kd = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, o;
  if (e.$) {
    const i = e[t];
    if (i !== void 0)
      return typeof i == "function" && r ? i(n) : i;
    o = e.$slots[t], o = r && o ? o(n) : o;
  } else if (kn(e)) {
    const i = e.props && e.props[t];
    if (i !== void 0 && e.props !== null)
      return typeof i == "function" && r ? i(n) : i;
    e.type === Te ? o = e.children : e.children && e.children[t] && (o = e.children[t], o = r && o ? o(n) : o);
  }
  return Array.isArray(o) && (o = dt(o), o = o.length === 1 ? o[0] : o, o = o.length === 0 ? void 0 : o), o;
};
function _a() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = {};
  return e.$ ? n = y(y({}, n), e.$attrs) : n = y(y({}, n), e.props), Fd(n)[t ? "onEvents" : "events"];
}
function Bd(e, t) {
  let r = ((kn(e) ? e.props : e.$attrs) || {}).style || {};
  return typeof r == "string" && (r = Nd(r, t)), r;
}
function zd(e) {
  return e.length === 1 && e[0].type === Te;
}
function nu(e) {
  return e && (e.type === Vf || e.type === Te && e.children.length === 0 || e.type === Wf && e.children.trim() === "");
}
function Mt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const t = [];
  return e.forEach((n) => {
    Array.isArray(n) ? t.push(...n) : (n == null ? void 0 : n.type) === Te ? t.push(...Mt(n.children)) : t.push(n);
  }), t.filter((n) => !nu(n));
}
function ru(e) {
  return Array.isArray(e) && e.length === 1 && (e = e[0]), e && e.__v_isVNode && typeof e.type != "symbol";
}
function Vd(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
  var r, o;
  return (r = t[n]) !== null && r !== void 0 ? r : (o = e[n]) === null || o === void 0 ? void 0 : o.call(e);
}
let ou = (e) => setTimeout(e, 16), iu = (e) => clearTimeout(e);
typeof window < "u" && "requestAnimationFrame" in window && (ou = (e) => window.requestAnimationFrame(e), iu = (e) => window.cancelAnimationFrame(e));
let Pa = 0;
const wi = /* @__PURE__ */ new Map();
function au(e) {
  wi.delete(e);
}
function Re(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Pa += 1;
  const n = Pa;
  function r(o) {
    if (o === 0)
      au(n), e();
    else {
      const i = ou(() => {
        r(o - 1);
      });
      wi.set(n, i);
    }
  }
  return r(t), n;
}
Re.cancel = (e) => {
  const t = wi.get(e);
  return au(t), iu(t);
};
const zr = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t;
}, Vr = (e) => {
  const t = e;
  return t.install = function(n) {
    n.component(t.displayName || t.name, e);
  }, e;
};
function oe(e) {
  return {
    type: Object,
    default: e
  };
}
function tt(e) {
  return {
    type: Boolean,
    default: e
  };
}
function kt(e) {
  return {
    type: Function,
    default: e
  };
}
function Sr(e, t) {
  const n = {
    validator: () => !0,
    default: e
  };
  return n;
}
function Ta(e) {
  return {
    type: Array,
    default: e
  };
}
function Or(e) {
  return {
    type: String,
    default: e
  };
}
function Xt(e, t) {
  return e ? {
    type: e,
    default: t
  } : Sr(t);
}
let Ct = !1;
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Ct = !0;
    }
  });
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
} catch {
}
function yn(e, t, n, r) {
  if (e && e.addEventListener) {
    let o = r;
    o === void 0 && Ct && (t === "touchstart" || t === "touchmove" || t === "wheel") && (o = {
      passive: !1
    }), e.addEventListener(t, n, o);
  }
  return {
    remove: () => {
      e && e.removeEventListener && e.removeEventListener(t, n);
    }
  };
}
const Ci = "anticon", lu = Symbol("GlobalFormContextKey"), Wd = (e) => {
  ue(lu, e);
}, qd = () => pe(lu, {
  validateMessages: _(() => {
  })
}), Gd = () => ({
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
  csp: oe(),
  input: oe(),
  autoInsertSpaceInButton: {
    type: Boolean,
    default: void 0
  },
  locale: oe(),
  pageHeader: oe(),
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
  space: oe(),
  virtual: {
    type: Boolean,
    default: void 0
  },
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: !0
  },
  form: oe(),
  pagination: oe(),
  theme: oe(),
  select: oe(),
  wave: oe()
}), $i = Symbol("configProvider"), su = {
  getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
  iconPrefixCls: _(() => Ci),
  getPopupContainer: _(() => () => document.body),
  direction: _(() => "ltr")
}, Si = () => pe($i, su), Ud = (e) => ue($i, e), uu = Symbol("DisabledContextKey"), cu = () => pe(uu, k(void 0)), fu = (e) => {
  const t = cu();
  return ue(uu, _(() => {
    var n;
    return (n = e.value) !== null && n !== void 0 ? n : t.value;
  })), e;
}, Xd = {
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
}, Yd = {
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
}, du = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Aa = {
  lang: y({
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
  }, Yd),
  timePickerLocale: y({}, du)
}, Se = "${label} is not a valid ${type}", Pt = {
  locale: "en",
  Pagination: Xd,
  DatePicker: Aa,
  TimePicker: du,
  Calendar: Aa,
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
        string: Se,
        method: Se,
        array: Se,
        object: Se,
        number: Se,
        date: Se,
        boolean: Se,
        integer: Se,
        float: Se,
        regexp: Se,
        email: Se,
        url: Se,
        hex: Se
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
}, pu = W({
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
    const r = pe("localeData", {}), o = _(() => {
      const {
        componentName: a = "global",
        defaultLocale: l
      } = e, s = l || Pt[a || "global"], {
        antLocale: u
      } = r, f = a && u ? u[a] : {};
      return y(y({}, typeof s == "function" ? s() : s), f || {});
    }), i = _(() => {
      const {
        antLocale: a
      } = r, l = a && a.locale;
      return a && a.exist && !l ? Pt.locale : l;
    });
    return () => {
      const a = e.children || n.default, {
        antLocale: l
      } = r;
      return a == null ? void 0 : a(o.value, i.value, l);
    };
  }
});
function Kd(e, t, n) {
  const r = pe("localeData", {});
  return [_(() => {
    const {
      antLocale: i
    } = r, a = de(t) || Pt[e], l = i ? i[e] : {};
    return y(y(y({}, typeof a == "function" ? a() : a), l || {}), de(n) || {});
  })];
}
function Oi(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
const Ea = "%";
class Zd {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.instanceId = t;
  }
  get(t) {
    return this.cache.get(Array.isArray(t) ? t.join(Ea) : t) || null;
  }
  update(t, n) {
    const r = Array.isArray(t) ? t.join(Ea) : t, o = this.cache.get(r), i = n(o);
    i === null ? this.cache.delete(r) : this.cache.set(r, i);
  }
}
const gu = "data-token-hash", Ot = "data-css-hash", Qd = "data-cache-path", Gt = "__cssinjs_instance__";
function En() {
  const e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    const t = document.body.querySelectorAll(`style[${Ot}]`) || [], {
      firstChild: n
    } = document.head;
    Array.from(t).forEach((o) => {
      o[Gt] = o[Gt] || e, o[Gt] === e && document.head.insertBefore(o, n);
    });
    const r = {};
    Array.from(document.querySelectorAll(`style[${Ot}]`)).forEach((o) => {
      var i;
      const a = o.getAttribute(Ot);
      r[a] ? o[Gt] === e && ((i = o.parentNode) === null || i === void 0 || i.removeChild(o)) : r[a] = !0;
    });
  }
  return new Zd(e);
}
const mu = Symbol("StyleContextKey"), Jd = () => {
  var e, t, n;
  const r = Hr();
  let o;
  if (r && r.appContext) {
    const i = (n = (t = (e = r.appContext) === null || e === void 0 ? void 0 : e.config) === null || t === void 0 ? void 0 : t.globalProperties) === null || n === void 0 ? void 0 : n.__ANTDV_CSSINJS_CACHE__;
    i ? o = i : (o = En(), r.appContext.config.globalProperties && (r.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = o));
  } else
    o = En();
  return o;
}, hu = {
  cache: En(),
  defaultCache: !0,
  hashPriority: "low"
}, Wr = () => {
  const e = Jd();
  return pe(mu, z(y(y({}, hu), {
    cache: e
  })));
}, ep = (e) => {
  const t = Wr(), n = z(y(y({}, hu), {
    cache: En()
  }));
  return Y([() => de(e), t], () => {
    const r = y({}, t.value), o = de(e);
    Object.keys(o).forEach((a) => {
      const l = o[a];
      o[a] !== void 0 && (r[a] = l);
    });
    const {
      cache: i
    } = o;
    r.cache = r.cache || En(), r.defaultCache = !i && t.value.defaultCache, n.value = r;
  }, {
    immediate: !0
  }), ue(mu, n), n;
}, tp = () => ({
  autoClear: tt(),
  /** @private Test only. Not work in production. */
  mock: Or(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: oe(),
  /** Tell children that this context is default generated context */
  defaultCache: tt(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: Or(),
  /** Tell cssinjs where to inject style in */
  container: Xt(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: tt(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: Ta(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: Ta()
});
Vr(W({
  name: "AStyleProvider",
  inheritAttrs: !1,
  props: tp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ep(e), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}));
function np() {
  return !1;
}
let Io = !1;
function rp() {
  return Io;
}
const op = process.env.NODE_ENV === "production" ? np : rp;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  const e = window;
  if (typeof e.webpackHotUpdate == "function") {
    const t = e.webpackHotUpdate;
    e.webpackHotUpdate = function() {
      return Io = !0, setTimeout(() => {
        Io = !1;
      }, 0), t(...arguments);
    };
  }
}
function vu(e, t, n, r) {
  const o = Wr(), i = z(""), a = z();
  Ye(() => {
    i.value = [e, ...t.value].join("%");
  });
  const l = op(), s = (u) => {
    o.value.cache.update(u, (f) => {
      const [c = 0, d] = f || [];
      return c - 1 === 0 ? (r == null || r(d, !1), null) : [c - 1, d];
    });
  };
  return Y(i, (u, f) => {
    f && s(f), o.value.cache.update(u, (c) => {
      const [d = 0, p] = c || [];
      let m = p;
      process.env.NODE_ENV !== "production" && p && l && (r == null || r(m, l), m = null);
      const g = m || n();
      return [d + 1, g];
    }), a.value = o.value.cache.get(i.value)[1];
  }, {
    immediate: !0
  }), un(() => {
    s(i.value);
  }), a;
}
function ke() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function bt(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
const Ma = "data-vc-order", ip = "vc-util-key", jo = /* @__PURE__ */ new Map();
function yu() {
  let {
    mark: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return e ? e.startsWith("data-") ? e : `data-${e}` : ip;
}
function qr(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function ap(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function bu(e) {
  return Array.from((jo.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function xu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ke())
    return null;
  const {
    csp: n,
    prepend: r
  } = t, o = document.createElement("style");
  o.setAttribute(Ma, ap(r)), n != null && n.nonce && (o.nonce = n == null ? void 0 : n.nonce), o.innerHTML = e;
  const i = qr(t), {
    firstChild: a
  } = i;
  if (r) {
    if (r === "queue") {
      const l = bu(i).filter((s) => ["prepend", "prependQueue"].includes(s.getAttribute(Ma)));
      if (l.length)
        return i.insertBefore(o, l[l.length - 1].nextSibling), o;
    }
    i.insertBefore(o, a);
  } else
    i.appendChild(o);
  return o;
}
function wu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = qr(t);
  return bu(n).find((r) => r.getAttribute(yu(t)) === e);
}
function _r(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = wu(e, t);
  n && qr(t).removeChild(n);
}
function lp(e, t) {
  const n = jo.get(e);
  if (!n || !bt(document, n)) {
    const r = xu("", t), {
      parentNode: o
    } = r;
    jo.set(e, o), e.removeChild(r);
  }
}
function Mn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var r, o, i;
  const a = qr(n);
  lp(a, n);
  const l = wu(t, n);
  if (l)
    return !((r = n.csp) === null || r === void 0) && r.nonce && l.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce) && (l.nonce = (i = n.csp) === null || i === void 0 ? void 0 : i.nonce), l.innerHTML !== e && (l.innerHTML = e), l;
  const s = xu(e, n);
  return s.setAttribute(yu(n), t), s;
}
function sp(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
class tn {
  constructor() {
    this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = {
      map: this.cache
    };
    return t.forEach((o) => {
      var i;
      r ? r = (i = r == null ? void 0 : r.map) === null || i === void 0 ? void 0 : i.get(o) : r = void 0;
    }), r != null && r.value && n && (r.value[1] = this.cacheCallTimes++), r == null ? void 0 : r.value;
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
      if (this.size() + 1 > tn.MAX_CACHE_SIZE + tn.MAX_CACHE_OFFSET) {
        const [o] = this.keys.reduce((i, a) => {
          const [, l] = i;
          return this.internalGet(a)[1] < l ? [a, this.internalGet(a)[1]] : i;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(o);
      }
      this.keys.push(t);
    }
    let r = this.cache;
    t.forEach((o, i) => {
      if (i === t.length - 1)
        r.set(o, {
          value: [n, this.cacheCallTimes++]
        });
      else {
        const a = r.get(o);
        a ? a.map || (a.map = /* @__PURE__ */ new Map()) : r.set(o, {
          map: /* @__PURE__ */ new Map()
        }), r = r.get(o).map;
      }
    });
  }
  deleteByPath(t, n) {
    var r;
    const o = t.get(n[0]);
    if (n.length === 1)
      return o.map ? t.set(n[0], {
        map: o.map
      }) : t.delete(n[0]), (r = o.value) === null || r === void 0 ? void 0 : r[0];
    const i = this.deleteByPath(o.map, n.slice(1));
    return (!o.map || o.map.size === 0) && !o.value && t.delete(n[0]), i;
  }
  delete(t) {
    if (this.has(t))
      return this.keys = this.keys.filter((n) => !sp(n, t)), this.deleteByPath(this.cache, t);
  }
}
tn.MAX_CACHE_SIZE = 20;
tn.MAX_CACHE_OFFSET = 5;
let Fo = {};
function Pr(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error(`Warning: ${t}`);
}
function up() {
  Fo = {};
}
function cp(e, t, n) {
  !t && !Fo[n] && (e(!1, n), Fo[n] = !0);
}
function _i(e, t) {
  cp(Pr, e, t);
}
function fp() {
}
let nt = fp;
process.env.NODE_ENV !== "production" && (nt = (e, t, n) => {
  _i(e, `[ant-design-vue: ${t}] ${n}`), process.env.NODE_ENV === "test" && up();
});
let Ia = 0;
class Cu {
  constructor(t) {
    this.derivatives = Array.isArray(t) ? t : [t], this.id = Ia, t.length === 0 && nt(t.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function."), Ia += 1;
  }
  getDerivativeToken(t) {
    return this.derivatives.reduce((n, r) => r(t, n), void 0);
  }
}
const ao = new tn();
function $u(e) {
  const t = Array.isArray(e) ? e : [e];
  return ao.has(t) || ao.set(t, new Cu(t)), ao.get(t);
}
const ja = /* @__PURE__ */ new WeakMap();
function Tr(e) {
  let t = ja.get(e) || "";
  return t || (Object.keys(e).forEach((n) => {
    const r = e[n];
    t += n, r instanceof Cu ? t += r.id : r && typeof r == "object" ? t += Tr(r) : t += r;
  }), ja.set(e, t)), t;
}
function dp(e, t) {
  return Oi(`${t}_${Tr(e)}`);
}
const $n = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ""), Su = "_bAmBoO_";
function pp(e, t, n) {
  var r, o;
  if (ke()) {
    Mn(e, $n);
    const i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t == null || t(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    const a = n ? n(i) : (r = getComputedStyle(i).content) === null || r === void 0 ? void 0 : r.includes(Su);
    return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), _r($n), a;
  }
  return !1;
}
let lo;
function gp() {
  return lo === void 0 && (lo = pp(`@layer ${$n} { .${$n} { content: "${Su}"!important; } }`, (e) => {
    e.className = $n;
  })), lo;
}
const Fa = {}, mp = process.env.NODE_ENV === "production", hp = process.env.NODE_ENV === "prerender", vp = !mp && !hp ? "css-dev-only-do-not-override" : "css", xt = /* @__PURE__ */ new Map();
function yp(e) {
  xt.set(e, (xt.get(e) || 0) + 1);
}
function bp(e, t) {
  typeof document < "u" && document.querySelectorAll(`style[${gu}="${e}"]`).forEach((r) => {
    var o;
    r[Gt] === t && ((o = r.parentNode) === null || o === void 0 || o.removeChild(r));
  });
}
const xp = 0;
function wp(e, t) {
  xt.set(e, (xt.get(e) || 0) - 1);
  const n = Array.from(xt.keys()), r = n.filter((o) => (xt.get(o) || 0) <= 0);
  n.length - r.length > xp && r.forEach((o) => {
    bp(o, t), xt.delete(o);
  });
}
const Cp = (e, t, n, r) => {
  const o = n.getDerivativeToken(e);
  let i = y(y({}, o), t);
  return r && (i = r(i)), i;
};
function $p(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : k({});
  const r = Wr(), o = _(() => y({}, ...t.value)), i = _(() => Tr(o.value)), a = _(() => Tr(n.value.override || Fa));
  return vu("token", _(() => [n.value.salt || "", e.value.id, i.value, a.value]), () => {
    const {
      salt: s = "",
      override: u = Fa,
      formatToken: f,
      getComputedToken: c
    } = n.value, d = c ? c(o.value, u, e.value) : Cp(o.value, u, e.value, f), p = dp(d, s);
    d._tokenKey = p, yp(p);
    const m = `${vp}-${Oi(p)}`;
    return d._hashId = m, [d, m];
  }, (s) => {
    var u;
    wp(s[0]._tokenKey, (u = r.value) === null || u === void 0 ? void 0 : u.cache.instanceId);
  });
}
var Sp = {
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
}, Ou = "comm", _u = "rule", Pu = "decl", Op = "@import", _p = "@keyframes", Pp = "@layer", Tu = Math.abs, Pi = String.fromCharCode;
function Au(e) {
  return e.trim();
}
function dr(e, t, n) {
  return e.replace(t, n);
}
function Tp(e, t, n) {
  return e.indexOf(t, n);
}
function In(e, t) {
  return e.charCodeAt(t) | 0;
}
function nn(e, t, n) {
  return e.slice(t, n);
}
function Ge(e) {
  return e.length;
}
function Ap(e) {
  return e.length;
}
function Kn(e, t) {
  return t.push(e), e;
}
var Gr = 1, rn = 1, Eu = 0, Ie = 0, le = 0, cn = "";
function Ti(e, t, n, r, o, i, a, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Gr, column: rn, length: a, return: "", siblings: l };
}
function Ep() {
  return le;
}
function Mp() {
  return le = Ie > 0 ? In(cn, --Ie) : 0, rn--, le === 10 && (rn = 1, Gr--), le;
}
function Le() {
  return le = Ie < Eu ? In(cn, Ie++) : 0, rn++, le === 10 && (rn = 1, Gr++), le;
}
function ct() {
  return In(cn, Ie);
}
function pr() {
  return Ie;
}
function Ur(e, t) {
  return nn(cn, e, t);
}
function jn(e) {
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
function Ip(e) {
  return Gr = rn = 1, Eu = Ge(cn = e), Ie = 0, [];
}
function jp(e) {
  return cn = "", e;
}
function so(e) {
  return Au(Ur(Ie - 1, No(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Fp(e) {
  for (; (le = ct()) && le < 33; )
    Le();
  return jn(e) > 2 || jn(le) > 3 ? "" : " ";
}
function Np(e, t) {
  for (; --t && Le() && !(le < 48 || le > 102 || le > 57 && le < 65 || le > 70 && le < 97); )
    ;
  return Ur(e, pr() + (t < 6 && ct() == 32 && Le() == 32));
}
function No(e) {
  for (; Le(); )
    switch (le) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && No(le);
        break;
      case 40:
        e === 41 && No(e);
        break;
      case 92:
        Le();
        break;
    }
  return Ie;
}
function Dp(e, t) {
  for (; Le() && e + le !== 57; )
    if (e + le === 84 && ct() === 47)
      break;
  return "/*" + Ur(t, Ie - 1) + "*" + Pi(e === 47 ? e : Le());
}
function Rp(e) {
  for (; !jn(ct()); )
    Le();
  return Ur(e, Ie);
}
function Lp(e) {
  return jp(gr("", null, null, null, [""], e = Ip(e), 0, [0], e));
}
function gr(e, t, n, r, o, i, a, l, s) {
  for (var u = 0, f = 0, c = a, d = 0, p = 0, m = 0, g = 1, w = 1, h = 1, S = 0, b = "", v = o, C = i, O = r, x = b; w; )
    switch (m = S, S = Le()) {
      case 40:
        if (m != 108 && In(x, c - 1) == 58) {
          Tp(x += dr(so(S), "&", "&\f"), "&\f", Tu(u ? l[u - 1] : 0)) != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += so(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += Fp(m);
        break;
      case 92:
        x += Np(pr() - 1, 7);
        continue;
      case 47:
        switch (ct()) {
          case 42:
          case 47:
            Kn(Hp(Dp(Le(), pr()), t, n, s), s), (jn(m || 1) == 5 || jn(ct() || 1) == 5) && Ge(x) && nn(x, -1, void 0) !== " " && (x += " ");
            break;
          default:
            x += "/";
        }
        break;
      case 123 * g:
        l[u++] = Ge(x) * h;
      case 125 * g:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            w = 0;
          case 59 + f:
            h == -1 && (x = dr(x, /\f/g, "")), p > 0 && (Ge(x) - c || g === 0 && m === 47) && Kn(p > 32 ? Da(x + ";", r, n, c - 1, s) : Da(dr(x, " ", "") + ";", r, n, c - 2, s), s);
            break;
          case 59:
            x += ";";
          default:
            if (Kn(O = Na(x, t, n, u, f, o, l, b, v = [], C = [], c, i), i), S === 123)
              if (f === 0)
                gr(x, t, O, O, v, i, c, l, C);
              else
                switch (d === 99 && In(x, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    gr(e, O, O, r && Kn(Na(e, O, O, 0, 0, o, l, b, o, v = [], c, C), C), o, C, c, l, r ? v : C);
                    break;
                  default:
                    gr(x, O, O, O, [""], C, 0, l, C);
                }
        }
        u = f = p = 0, g = h = 1, b = x = "", c = a;
        break;
      case 58:
        c = 1 + Ge(x), p = m;
      default:
        if (g < 1) {
          if (S == 123)
            --g;
          else if (S == 125 && g++ == 0 && Mp() == 125)
            continue;
        }
        switch (x += Pi(S), S * g) {
          case 38:
            h = f > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            l[u++] = (Ge(x) - 1) * h, h = 1;
            break;
          case 64:
            ct() === 45 && (x += so(Le())), d = ct(), f = c = Ge(b = x += Rp(pr())), S++;
            break;
          case 45:
            m === 45 && Ge(x) == 2 && (g = 0);
        }
    }
  return i;
}
function Na(e, t, n, r, o, i, a, l, s, u, f, c) {
  for (var d = o - 1, p = o === 0 ? i : [""], m = Ap(p), g = 0, w = 0, h = 0; g < r; ++g)
    for (var S = 0, b = nn(e, d + 1, d = Tu(w = a[g])), v = e; S < m; ++S)
      (v = Au(w > 0 ? p[S] + " " + b : dr(b, /&\f/g, p[S]))) && (s[h++] = v);
  return Ti(e, t, n, o === 0 ? _u : l, s, u, f, c);
}
function Hp(e, t, n, r) {
  return Ti(e, t, n, Ou, Pi(Ep()), nn(e, 2, -2), 0, r);
}
function Da(e, t, n, r, o) {
  return Ti(e, t, n, Pu, nn(e, 0, r), nn(e, r + 1, -1), r, o);
}
function Do(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function kp(e, t, n, r) {
  switch (e.type) {
    case Pp:
      if (e.children.length) break;
    case Op:
    case Pu:
      return e.return = e.return || e.value;
    case Ou:
      return "";
    case _p:
      return e.return = e.value + "{" + Do(e.children, r) + "}";
    case _u:
      if (!Ge(e.value = e.props.join(","))) return "";
  }
  return Ge(n = Do(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Mu(e, t) {
  const {
    path: n,
    parentSelectors: r
  } = t;
  _i(!1, `[Ant Design Vue CSS-in-JS] ${n ? `Error in '${n}': ` : ""}${e}${r.length ? ` Selector info: ${r.join(" -> ")}` : ""}`);
}
const Bp = (e, t, n) => {
  if (e === "content") {
    const r = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    (typeof t != "string" || ["normal", "none", "initial", "inherit", "unset"].indexOf(t) === -1 && !r.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Mu(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${t}"'\`.`, n);
  }
}, zp = (e, t, n) => {
  e === "animation" && n.hashId && t !== "none" && Mu(`You seem to be using hashed animation '${t}', in which case 'animationName' with Keyframe as value is recommended.`, n);
}, Ra = "data-ant-cssinjs-cache-path", Vp = "_FILE_STYLE__";
let _t, Iu = !0;
function Wp() {
  var e;
  if (!_t && (_t = {}, ke())) {
    const t = document.createElement("div");
    t.className = Ra, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    let n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach((o) => {
      const [i, a] = o.split(":");
      _t[i] = a;
    });
    const r = document.querySelector(`style[${Ra}]`);
    r && (Iu = !1, (e = r.parentNode) === null || e === void 0 || e.removeChild(r)), document.body.removeChild(t);
  }
}
function qp(e) {
  return Wp(), !!_t[e];
}
function Gp(e) {
  const t = _t[e];
  let n = null;
  if (t && ke())
    if (Iu)
      n = Vp;
    else {
      const r = document.querySelector(`style[${Ot}="${_t[e]}"]`);
      r ? n = r.innerHTML : delete _t[e];
    }
  return [n, t];
}
const La = ke(), ju = "_skip_check_", Fu = "_multi_value_";
function Ha(e) {
  return Do(Lp(e), kp).replace(/\{%%%\:[^;];}/g, ";");
}
function Up(e) {
  return typeof e == "object" && e && (ju in e || Fu in e);
}
function Xp(e, t, n) {
  if (!t)
    return e;
  const r = `.${t}`, o = n === "low" ? `:where(${r})` : r;
  return e.split(",").map((a) => {
    var l;
    const s = a.trim().split(/\s+/);
    let u = s[0] || "";
    const f = ((l = u.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return u = `${f}${o}${u.slice(f.length)}`, [u, ...s.slice(1)].join(" ");
  }).join(",");
}
const Ro = /* @__PURE__ */ new Set();
process.env.NODE_ENV;
const Lo = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    root: n,
    injectHash: r,
    parentSelectors: o
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  };
  const {
    hashId: i,
    layer: a,
    path: l,
    hashPriority: s,
    transformers: u = [],
    linters: f = []
  } = t;
  let c = "", d = {};
  function p(w) {
    const h = w.getName(i);
    if (!d[h]) {
      const [S] = Lo(w.style, t, {
        root: !1,
        parentSelectors: o
      });
      d[h] = `@keyframes ${w.getName(i)}${S}`;
    }
  }
  function m(w) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return w.forEach((S) => {
      Array.isArray(S) ? m(S, h) : S && h.push(S);
    }), h;
  }
  if (m(Array.isArray(e) ? e : [e]).forEach((w) => {
    const h = typeof w == "string" && !n ? {} : w;
    if (typeof h == "string")
      c += `${h}
`;
    else if (h._keyframe)
      p(h);
    else {
      const S = u.reduce((b, v) => {
        var C;
        return ((C = v == null ? void 0 : v.visit) === null || C === void 0 ? void 0 : C.call(v, b)) || b;
      }, h);
      Object.keys(S).forEach((b) => {
        var v;
        const C = S[b];
        if (typeof C == "object" && C && (b !== "animationName" || !C._keyframe) && !Up(C)) {
          let O = !1, x = b.trim(), P = !1;
          (n || r) && i ? x.startsWith("@") ? O = !0 : x = Xp(b, i, s) : n && !i && (x === "&" || x === "") && (x = "", P = !0);
          const [E, A] = Lo(C, t, {
            root: P,
            injectHash: O,
            parentSelectors: [...o, x]
          });
          d = y(y({}, d), A), c += `${x}${E}`;
        } else {
          let O = function(P, E) {
            process.env.NODE_ENV !== "production" && (typeof C != "object" || !(C != null && C[ju])) && [Bp, zp, ...f].forEach((D) => D(P, E, {
              path: l,
              hashId: i,
              parentSelectors: o
            }));
            const A = P.replace(/[A-Z]/g, (D) => `-${D.toLowerCase()}`);
            let F = E;
            !Sp[P] && typeof F == "number" && F !== 0 && (F = `${F}px`), P === "animationName" && (E != null && E._keyframe) && (p(E), F = E.getName(i)), c += `${A}:${F};`;
          };
          const x = (v = C == null ? void 0 : C.value) !== null && v !== void 0 ? v : C;
          typeof C == "object" && (C != null && C[Fu]) && Array.isArray(x) ? x.forEach((P) => {
            O(b, P);
          }) : O(b, x);
        }
      });
    }
  }), !n)
    c = `{${c}}`;
  else if (a && gp()) {
    const w = a.split(",");
    c = `@layer ${w[w.length - 1].trim()} {${c}}`, w.length > 1 && (c = `@layer ${a}{%%%:%}${c}`);
  }
  return [c, d];
};
function Yp(e, t) {
  return Oi(`${e.join("%")}${t}`);
}
function Ho(e, t) {
  const n = Wr(), r = _(() => e.value.token._tokenKey), o = _(() => [r.value, ...e.value.path]);
  let i = La;
  return process.env.NODE_ENV !== "production" && n.value.mock !== void 0 && (i = n.value.mock === "client"), vu(
    "style",
    o,
    // Create cache if needed
    () => {
      const {
        path: a,
        hashId: l,
        layer: s,
        nonce: u,
        clientOnly: f,
        order: c = 0
      } = e.value, d = o.value.join("|");
      if (qp(d)) {
        const [x, P] = Gp(d);
        if (x)
          return [x, r.value, P, {}, f, c];
      }
      const p = t(), {
        hashPriority: m,
        container: g,
        transformers: w,
        linters: h,
        cache: S
      } = n.value, [b, v] = Lo(p, {
        hashId: l,
        hashPriority: m,
        layer: s,
        path: a.join("-"),
        transformers: w,
        linters: h
      }), C = Ha(b), O = Yp(o.value, C);
      if (i) {
        const x = {
          mark: Ot,
          prepend: "queue",
          attachTo: g,
          priority: c
        }, P = typeof u == "function" ? u() : u;
        P && (x.csp = {
          nonce: P
        });
        const E = Mn(C, O, x);
        E[Gt] = S.instanceId, E.setAttribute(gu, r.value), process.env.NODE_ENV !== "production" && E.setAttribute(Qd, o.value.join("|")), Object.keys(v).forEach((A) => {
          Ro.has(A) || (Ro.add(A), Mn(Ha(v[A]), `_effect-${A}`, {
            mark: Ot,
            prepend: "queue",
            attachTo: g
          }));
        });
      }
      return [C, r.value, O, v, f, c];
    },
    // Remove cache if no need
    (a, l) => {
      let [, , s] = a;
      (l || n.value.autoClear) && La && _r(s, {
        mark: Ot
      });
    }
  ), (a) => a;
}
class se {
  constructor(t, n) {
    this._keyframe = !0, this.name = t, this.style = n;
  }
  getName() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return t ? `${t}-${this.name}` : this.name;
  }
}
const Kp = "4.2.6", Ar = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function he(e, t) {
  Zp(e) && (e = "100%");
  var n = Qp(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Zn(e) {
  return Math.min(1, Math.max(0, e));
}
function Zp(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Qp(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Nu(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Qn(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function $t(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Jp(e, t, n) {
  return {
    r: he(e, 255) * 255,
    g: he(t, 255) * 255,
    b: he(n, 255) * 255
  };
}
function ka(e, t, n) {
  e = he(e, 255), t = he(t, 255), n = he(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), i = 0, a = 0, l = (r + o) / 2;
  if (r === o)
    a = 0, i = 0;
  else {
    var s = r - o;
    switch (a = l > 0.5 ? s / (2 - r - o) : s / (r + o), r) {
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
function uo(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function eg(e, t, n) {
  var r, o, i;
  if (e = he(e, 360), t = he(t, 100), n = he(n, 100), t === 0)
    o = n, i = n, r = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    r = uo(l, a, e + 1 / 3), o = uo(l, a, e), i = uo(l, a, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function ko(e, t, n) {
  e = he(e, 255), t = he(t, 255), n = he(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), i = 0, a = r, l = r - o, s = r === 0 ? 0 : l / r;
  if (r === o)
    i = 0;
  else {
    switch (r) {
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
function tg(e, t, n) {
  e = he(e, 360) * 6, t = he(t, 100), n = he(n, 100);
  var r = Math.floor(e), o = e - r, i = n * (1 - t), a = n * (1 - o * t), l = n * (1 - (1 - o) * t), s = r % 6, u = [n, a, i, i, l, n][s], f = [l, n, n, a, i, i][s], c = [i, i, l, n, n, a][s];
  return { r: u * 255, g: f * 255, b: c * 255 };
}
function Bo(e, t, n, r) {
  var o = [
    $t(Math.round(e).toString(16)),
    $t(Math.round(t).toString(16)),
    $t(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function ng(e, t, n, r, o) {
  var i = [
    $t(Math.round(e).toString(16)),
    $t(Math.round(t).toString(16)),
    $t(Math.round(n).toString(16)),
    $t(rg(r))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function rg(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ba(e) {
  return _e(e) / 255;
}
function _e(e) {
  return parseInt(e, 16);
}
function og(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var zo = {
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
function zt(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, i = null, a = !1, l = !1;
  return typeof e == "string" && (e = lg(e)), typeof e == "object" && (Je(e.r) && Je(e.g) && Je(e.b) ? (t = Jp(e.r, e.g, e.b), a = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Je(e.h) && Je(e.s) && Je(e.v) ? (r = Qn(e.s), o = Qn(e.v), t = tg(e.h, r, o), a = !0, l = "hsv") : Je(e.h) && Je(e.s) && Je(e.l) && (r = Qn(e.s), i = Qn(e.l), t = eg(e.h, r, i), a = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Nu(n), {
    ok: a,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var ig = "[-\\+]?\\d+%?", ag = "[-\\+]?\\d*\\.\\d+%?", ft = "(?:".concat(ag, ")|(?:").concat(ig, ")"), co = "[\\s|\\(]+(".concat(ft, ")[,|\\s]+(").concat(ft, ")[,|\\s]+(").concat(ft, ")\\s*\\)?"), fo = "[\\s|\\(]+(".concat(ft, ")[,|\\s]+(").concat(ft, ")[,|\\s]+(").concat(ft, ")[,|\\s]+(").concat(ft, ")\\s*\\)?"), Ne = {
  CSS_UNIT: new RegExp(ft),
  rgb: new RegExp("rgb" + co),
  rgba: new RegExp("rgba" + fo),
  hsl: new RegExp("hsl" + co),
  hsla: new RegExp("hsla" + fo),
  hsv: new RegExp("hsv" + co),
  hsva: new RegExp("hsva" + fo),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function lg(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (zo[e])
    e = zo[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Ne.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Ne.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Ne.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Ne.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Ne.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Ne.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Ne.hex8.exec(e), n ? {
    r: _e(n[1]),
    g: _e(n[2]),
    b: _e(n[3]),
    a: Ba(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Ne.hex6.exec(e), n ? {
    r: _e(n[1]),
    g: _e(n[2]),
    b: _e(n[3]),
    format: t ? "name" : "hex"
  } : (n = Ne.hex4.exec(e), n ? {
    r: _e(n[1] + n[1]),
    g: _e(n[2] + n[2]),
    b: _e(n[3] + n[3]),
    a: Ba(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Ne.hex3.exec(e), n ? {
    r: _e(n[1] + n[1]),
    g: _e(n[2] + n[2]),
    b: _e(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Je(e) {
  return !!Ne.CSS_UNIT.exec(String(e));
}
var me = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = og(t)), this.originalInput = t;
      var o = zt(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, o, i = t.r / 255, a = t.g / 255, l = t.b / 255;
      return i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), l <= 0.03928 ? o = l / 12.92 : o = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Nu(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ko(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ko(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = ka(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = ka(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Bo(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), ng(this.r, this.g, this.b, this.a, t);
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
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(he(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(he(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Bo(this.r, this.g, this.b, !1), n = 0, r = Object.entries(zo); n < r.length; n++) {
        var o = r[n], i = o[0], a = o[1];
        if (t === a)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, o = this.a < 1 && this.a >= 0, i = !n && o && (t.startsWith("hex") || t === "name");
      return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Zn(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Zn(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Zn(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Zn(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), o = new e(t).toRgb(), i = n / 100, a = {
        r: (o.r - r.r) * i + r.r,
        g: (o.g - r.g) * i + r.g,
        b: (o.b - r.b) * i + r.b,
        a: (o.a - r.a) * i + r.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), o = 360 / n, i = [this];
      for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + o) % 360, i.push(new e(r));
      return i;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], l = 1 / t; t--; )
        a.push(new e({ h: r, s: o, v: i })), i = (i + l) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1; a < t; a++)
        o.push(new e({ h: (r + a * i) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), Jn = 2, za = 0.16, sg = 0.05, ug = 0.05, cg = 0.15, Du = 5, Ru = 4, fg = [{
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
function Va(e) {
  var t = e.r, n = e.g, r = e.b, o = ko(t, n, r);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function er(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(Bo(t, n, r, !1));
}
function dg(e, t, n) {
  var r = n / 100, o = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return o;
}
function Wa(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Jn * t : Math.round(e.h) + Jn * t : r = n ? Math.round(e.h) + Jn * t : Math.round(e.h) - Jn * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function qa(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - za * t : t === Ru ? r = e.s + za : r = e.s + sg * t, r > 1 && (r = 1), n && t === Du && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function Ga(e, t, n) {
  var r;
  return n ? r = e.v + ug * t : r = e.v - cg * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function Tt(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = zt(e), o = Du; o > 0; o -= 1) {
    var i = Va(r), a = er(zt({
      h: Wa(i, o, !0),
      s: qa(i, o, !0),
      v: Ga(i, o, !0)
    }));
    n.push(a);
  }
  n.push(er(r));
  for (var l = 1; l <= Ru; l += 1) {
    var s = Va(r), u = er(zt({
      h: Wa(s, l),
      s: qa(s, l),
      v: Ga(s, l)
    }));
    n.push(u);
  }
  return t.theme === "dark" ? fg.map(function(f) {
    var c = f.index, d = f.opacity, p = er(dg(zt(t.backgroundColor || "#141414"), zt(n[c]), d * 100));
    return p;
  }) : n;
}
var po = {
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
}, mr = {}, go = {};
Object.keys(po).forEach(function(e) {
  mr[e] = Tt(po[e]), mr[e].primary = mr[e][5], go[e] = Tt(po[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), go[e].primary = go[e][5];
});
var pg = mr.blue;
const gg = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function mg(e) {
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
const Lu = {
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
}, Xr = y(y({}, Lu), {
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
function hg(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: a,
    colorInfo: l,
    colorPrimary: s,
    colorBgBase: u,
    colorTextBase: f
  } = e, c = n(s), d = n(o), p = n(i), m = n(a), g = n(l), w = r(u, f);
  return y(y({}, w), {
    colorPrimaryBg: c[1],
    colorPrimaryBgHover: c[2],
    colorPrimaryBorder: c[3],
    colorPrimaryBorderHover: c[4],
    colorPrimaryHover: c[5],
    colorPrimary: c[6],
    colorPrimaryActive: c[7],
    colorPrimaryTextHover: c[8],
    colorPrimaryText: c[9],
    colorPrimaryTextActive: c[10],
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
    colorErrorBg: m[1],
    colorErrorBgHover: m[2],
    colorErrorBorder: m[3],
    colorErrorBorderHover: m[4],
    colorErrorHover: m[5],
    colorError: m[6],
    colorErrorActive: m[7],
    colorErrorTextHover: m[8],
    colorErrorText: m[9],
    colorErrorTextActive: m[10],
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
    colorInfoBg: g[1],
    colorInfoBgHover: g[2],
    colorInfoBorder: g[3],
    colorInfoBorderHover: g[4],
    colorInfoHover: g[4],
    colorInfo: g[6],
    colorInfoActive: g[7],
    colorInfoTextHover: g[8],
    colorInfoText: g[9],
    colorInfoTextActive: g[10],
    colorBgMask: new me("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const vg = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function yg(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = e;
  return y({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, vg(r));
}
const et = (e, t) => new me(e).setAlpha(t).toRgbString(), gn = (e, t) => new me(e).darken(t).toHexString(), bg = (e) => {
  const t = Tt(e);
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
}, xg = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: et(r, 0.88),
    colorTextSecondary: et(r, 0.65),
    colorTextTertiary: et(r, 0.45),
    colorTextQuaternary: et(r, 0.25),
    colorFill: et(r, 0.15),
    colorFillSecondary: et(r, 0.06),
    colorFillTertiary: et(r, 0.04),
    colorFillQuaternary: et(r, 0.02),
    colorBgLayout: gn(n, 4),
    colorBgContainer: gn(n, 0),
    colorBgElevated: gn(n, 0),
    colorBgSpotlight: et(r, 0.85),
    colorBorder: gn(n, 15),
    colorBorderSecondary: gn(n, 6)
  };
};
function wg(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const o = r - 1, i = e * Math.pow(2.71828, o / 5), a = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return t[1] = e, t.map((n) => {
    const r = n + 8;
    return {
      size: n,
      lineHeight: r / n
    };
  });
}
const Cg = (e) => {
  const t = wg(e), n = t.map((o) => o.size), r = t.map((o) => o.lineHeight);
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
    lineHeight: r[1],
    lineHeightLG: r[2],
    lineHeightSM: r[0],
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function $g(e) {
  const t = Object.keys(Lu).map((n) => {
    const r = Tt(e[n]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${n}-${a + 1}`] = r[a], o), {});
  }).reduce((n, r) => (n = y(y({}, n), r), n), {});
  return y(y(y(y(y(y(y({}, e), t), hg(e, {
    generateColorPalettes: bg,
    generateNeutralColorPalettes: xg
  })), Cg(e.fontSize)), mg(e)), gg(e)), yg(e));
}
function mo(e) {
  return e >= 0 && e <= 255;
}
function tr(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new me(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: l,
    b: s
  } = new me(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const f = Math.round((n - a * (1 - u)) / u), c = Math.round((r - l * (1 - u)) / u), d = Math.round((o - s * (1 - u)) / u);
    if (mo(f) && mo(c) && mo(d))
      return new me({
        r: f,
        g: c,
        b: d,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new me({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Sg = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Og(e) {
  const {
    override: t
  } = e, n = Sg(e, ["override"]), r = y({}, t);
  Object.keys(Xr).forEach((p) => {
    delete r[p];
  });
  const o = y(y({}, n), r), i = 480, a = 576, l = 768, s = 992, u = 1200, f = 1600, c = 2e3;
  return y(y(y({}, o), {
    colorLink: o.colorInfoText,
    colorLinkHover: o.colorInfoHover,
    colorLinkActive: o.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: tr(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: tr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: tr(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: tr(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
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
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: f - 1,
    screenXXL: f,
    screenXXLMin: f,
    screenXXLMax: c - 1,
    screenXXXL: c,
    screenXXXLMin: c,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new me("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new me("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new me("rgba(0, 0, 0, 0.09)").toRgbString()}
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
  }), r);
}
const _g = (e, t, n, r, o) => {
  const i = e / 2, a = 0, l = i, s = n * 1 / Math.sqrt(2), u = i - n * (1 - 1 / Math.sqrt(2)), f = i - t * (1 / Math.sqrt(2)), c = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)), d = 2 * i - f, p = c, m = 2 * i - s, g = u, w = 2 * i - a, h = l, S = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2), b = n * (Math.sqrt(2) - 1);
  return {
    pointerEvents: "none",
    width: e,
    height: e,
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      width: S,
      height: S,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${t}px 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: o,
      zIndex: 0,
      background: "transparent"
    },
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: e,
      height: e / 2,
      background: r,
      clipPath: {
        _multi_value_: !0,
        value: [`polygon(${b}px 100%, 50% ${b}px, ${2 * i - b}px 100%, ${b}px 100%)`, `path('M ${a} ${l} A ${n} ${n} 0 0 0 ${s} ${u} L ${f} ${c} A ${t} ${t} 0 0 1 ${d} ${p} L ${m} ${g} A ${n} ${n} 0 0 0 ${w} ${h} Z')`]
      },
      content: '""'
    }
  };
};
function Pg(e, t) {
  return Ar.reduce((n, r) => {
    const o = e[`${r}-1`], i = e[`${r}-3`], a = e[`${r}-6`], l = e[`${r}-7`];
    return y(y({}, n), t(r, {
      lightColor: o,
      lightBorderColor: i,
      darkColor: a,
      textColor: l
    }));
  }, {});
}
const Bn = (e) => ({
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
}), Tg = () => ({
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
}), Ag = (e) => ({
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
}), Eg = (e, t) => {
  const {
    fontFamily: n,
    fontSize: r
  } = e, o = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [o]: {
      fontFamily: n,
      fontSize: r,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [o]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
};
function It(e, t, n) {
  return (r) => {
    const o = _(() => r == null ? void 0 : r.value), [i, a, l] = zn(), {
      getPrefixCls: s,
      iconPrefixCls: u
    } = Si(), f = _(() => s()), c = _(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: ["Shared", f.value]
    }));
    Ho(c, () => [{
      // Link
      "&": Ag(a.value)
    }]);
    const d = _(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: [e, o.value, u.value]
    }));
    return [Ho(d, () => {
      const {
        token: p,
        flush: m
      } = Ig(a.value), g = typeof n == "function" ? n(p) : n, w = y(y({}, g), a.value[e]), h = `.${o.value}`, S = mt(p, {
        componentCls: h,
        prefixCls: o.value,
        iconCls: `.${u.value}`,
        antCls: `.${f.value}`
      }, w), b = t(S, {
        hashId: l.value,
        prefixCls: o.value,
        rootPrefixCls: f.value,
        iconPrefixCls: u.value,
        overrideComponentToken: a.value[e]
      });
      return m(e, w), [Eg(a.value, o.value), b];
    }), l];
  };
}
const Hu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let Vo = !0;
function mt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Hu)
    return y({}, ...t);
  Vo = !1;
  const r = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((a) => {
      Object.defineProperty(r, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      });
    });
  }), Vo = !0, r;
}
function Mg() {
}
function Ig(e) {
  let t, n = e, r = Mg;
  return Hu && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(o, i) {
      return Vo && t.add(i), o[i];
    }
  }), r = (o, i) => {
    Array.from(t);
  }), {
    token: n,
    keys: t,
    flush: r
  };
}
const jg = $u($g), ku = {
  token: Xr,
  hashed: !0
}, Bu = Symbol("DesignTokenContext"), Wo = z(), Fg = (e) => {
  ue(Bu, e), Y(e, () => {
    Wo.value = de(e), qf(Wo);
  }, {
    immediate: !0,
    deep: !0
  });
}, Ng = W({
  props: {
    value: oe()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Fg(_(() => e.value)), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
function zn() {
  const e = pe(Bu, _(() => Wo.value || ku)), t = _(() => `${Kp}-${e.value.hashed || ""}`), n = _(() => e.value.theme || jg), r = $p(n, _(() => [Xr, e.value.token]), _(() => ({
    salt: t.value,
    override: y({
      override: e.value.token
    }, e.value.components),
    formatToken: Og
  })));
  return [n, _(() => r.value[0]), _(() => e.value.hashed ? r.value[1] : "")];
}
const Ai = W({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = zn(), t = _(() => new me(e.value.colorBgBase).toHsl().l < 0.5 ? {
      opacity: 0.65
    } : {});
    return () => $("svg", {
      style: t.value,
      width: "184",
      height: "152",
      viewBox: "0 0 184 152",
      xmlns: "http://www.w3.org/2000/svg"
    }, [$("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, [$("g", {
      transform: "translate(24 31.67)"
    }, [$("ellipse", {
      "fill-opacity": ".8",
      fill: "#F5F5F7",
      cx: "67.797",
      cy: "106.89",
      rx: "67.797",
      ry: "12.668"
    }, null), $("path", {
      d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      fill: "#AEB8C2"
    }, null), $("path", {
      d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      fill: "url(#linearGradient-1)",
      transform: "translate(13.56)"
    }, null), $("path", {
      d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      fill: "#F5F5F7"
    }, null), $("path", {
      d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      fill: "#DCE0E6"
    }, null)]), $("path", {
      d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      fill: "#DCE0E6"
    }, null), $("g", {
      transform: "translate(149.65 15.383)",
      fill: "#FFF"
    }, [$("ellipse", {
      cx: "20.654",
      cy: "3.167",
      rx: "2.849",
      ry: "2.815"
    }, null), $("path", {
      d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Ai.PRESENTED_IMAGE_DEFAULT = !0;
const zu = W({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = zn(), t = _(() => {
      const {
        colorFill: n,
        colorFillTertiary: r,
        colorFillQuaternary: o,
        colorBgContainer: i
      } = e.value;
      return {
        borderColor: new me(n).onBackground(i).toHexString(),
        shadowColor: new me(r).onBackground(i).toHexString(),
        contentColor: new me(o).onBackground(i).toHexString()
      };
    });
    return () => $("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, [$("g", {
      transform: "translate(0 1)",
      fill: "none",
      "fill-rule": "evenodd"
    }, [$("ellipse", {
      fill: t.value.shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }, null), $("g", {
      "fill-rule": "nonzero",
      stroke: t.value.borderColor
    }, [$("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), $("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: t.value.contentColor
    }, null)])])]);
  }
});
zu.PRESENTED_IMAGE_SIMPLE = !0;
const Dg = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: r,
    marginXL: o,
    fontSize: i,
    lineHeight: a
  } = e;
  return {
    [t]: {
      marginInline: r,
      fontSize: i,
      lineHeight: a,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: r,
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
        marginBlock: o,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: r,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, Rg = It("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, r = mt(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [Dg(r)];
});
var Lg = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Hg = () => ({
  prefixCls: String,
  imageStyle: oe(),
  image: Sr(),
  description: Sr()
}), Ei = W({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: Hg(),
  setup(e, t) {
    let {
      slots: n = {},
      attrs: r
    } = t;
    const {
      direction: o,
      prefixCls: i
    } = Qe("empty", e), [a, l] = Rg(i);
    return () => {
      var s, u;
      const f = i.value, c = y(y({}, e), r), {
        image: d = ((s = n.image) === null || s === void 0 ? void 0 : s.call(n)) || Zt(Ai),
        description: p = ((u = n.description) === null || u === void 0 ? void 0 : u.call(n)) || void 0,
        imageStyle: m,
        class: g = ""
      } = c, w = Lg(c, ["image", "description", "imageStyle", "class"]), h = typeof d == "function" ? d() : d, S = typeof h == "object" && "type" in h && h.type.PRESENTED_IMAGE_SIMPLE;
      return a($(pu, {
        componentName: "Empty",
        children: (b) => {
          const v = typeof p < "u" ? p : b.description, C = typeof v == "string" ? v : "empty";
          let O = null;
          return typeof h == "string" ? O = $("img", {
            alt: C,
            src: h
          }, null) : O = h, $("div", H({
            class: K(f, g, l.value, {
              [`${f}-normal`]: S,
              [`${f}-rtl`]: o.value === "rtl"
            })
          }, w), [$("div", {
            class: `${f}-image`,
            style: m
          }, [O]), v && $("p", {
            class: `${f}-description`
          }, [v]), n.default && $("div", {
            class: `${f}-footer`
          }, [Mt(n.default())])]);
        }
      }, null));
    };
  }
});
Ei.PRESENTED_IMAGE_DEFAULT = () => Zt(Ai);
Ei.PRESENTED_IMAGE_SIMPLE = () => Zt(zu);
const mn = Vr(Ei), Vu = (e) => {
  const {
    prefixCls: t
  } = Qe("empty", e);
  return ((r) => {
    switch (r) {
      case "Table":
      case "List":
        return $(mn, {
          image: mn.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return $(mn, {
          image: mn.PRESENTED_IMAGE_SIMPLE,
          class: `${t.value}-small`
        }, null);
      default:
        return $(mn, null, null);
    }
  })(e.componentName);
};
function kg(e) {
  return $(Vu, {
    componentName: e
  }, null);
}
const Wu = Symbol("SizeContextKey"), qu = () => pe(Wu, k(void 0)), Gu = (e) => {
  const t = qu();
  return ue(Wu, _(() => e.value || t.value)), e;
}, Qe = (e, t) => {
  const n = qu(), r = cu(), o = pe($i, y(y({}, su), {
    renderEmpty: (x) => Zt(Vu, {
      componentName: x
    })
  })), i = _(() => o.getPrefixCls(e, t.prefixCls)), a = _(() => {
    var x, P;
    return (x = t.direction) !== null && x !== void 0 ? x : (P = o.direction) === null || P === void 0 ? void 0 : P.value;
  }), l = _(() => {
    var x;
    return (x = t.iconPrefixCls) !== null && x !== void 0 ? x : o.iconPrefixCls.value;
  }), s = _(() => o.getPrefixCls()), u = _(() => {
    var x;
    return (x = o.autoInsertSpaceInButton) === null || x === void 0 ? void 0 : x.value;
  }), f = o.renderEmpty, c = o.space, d = o.pageHeader, p = o.form, m = _(() => {
    var x, P;
    return (x = t.getTargetContainer) !== null && x !== void 0 ? x : (P = o.getTargetContainer) === null || P === void 0 ? void 0 : P.value;
  }), g = _(() => {
    var x, P, E;
    return (P = (x = t.getContainer) !== null && x !== void 0 ? x : t.getPopupContainer) !== null && P !== void 0 ? P : (E = o.getPopupContainer) === null || E === void 0 ? void 0 : E.value;
  }), w = _(() => {
    var x, P;
    return (x = t.dropdownMatchSelectWidth) !== null && x !== void 0 ? x : (P = o.dropdownMatchSelectWidth) === null || P === void 0 ? void 0 : P.value;
  }), h = _(() => {
    var x;
    return (t.virtual === void 0 ? ((x = o.virtual) === null || x === void 0 ? void 0 : x.value) !== !1 : t.virtual !== !1) && w.value !== !1;
  }), S = _(() => t.size || n.value), b = _(() => {
    var x, P, E;
    return (x = t.autocomplete) !== null && x !== void 0 ? x : (E = (P = o.input) === null || P === void 0 ? void 0 : P.value) === null || E === void 0 ? void 0 : E.autocomplete;
  }), v = _(() => {
    var x;
    return (x = t.disabled) !== null && x !== void 0 ? x : r.value;
  }), C = _(() => {
    var x;
    return (x = t.csp) !== null && x !== void 0 ? x : o.csp;
  }), O = _(() => {
    var x, P;
    return (x = t.wave) !== null && x !== void 0 ? x : (P = o.wave) === null || P === void 0 ? void 0 : P.value;
  });
  return {
    configProvider: o,
    prefixCls: i,
    direction: a,
    size: S,
    getTargetContainer: m,
    getPopupContainer: g,
    space: c,
    pageHeader: d,
    form: p,
    autoInsertSpaceInButton: u,
    renderEmpty: f,
    virtual: h,
    dropdownMatchSelectWidth: w,
    rootPrefixCls: s,
    getPrefixCls: o.getPrefixCls,
    autocomplete: b,
    csp: C,
    iconPrefixCls: l,
    disabled: v,
    select: o.select,
    wave: O
  };
};
function Ua(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function Xa(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function ho(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return Xa(n.overflowY, t) || Xa(n.overflowX, t) || function(r) {
      var o = function(i) {
        if (!i.ownerDocument || !i.ownerDocument.defaultView) return null;
        try {
          return i.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      }(r);
      return !!o && (o.clientHeight < r.scrollHeight || o.clientWidth < r.scrollWidth);
    }(e);
  }
  return !1;
}
function nr(e, t, n, r, o, i, a, l) {
  return i < e && a > t || i > e && a < t ? 0 : i <= e && l <= n || a >= t && l >= n ? i - e - r : a > t && l < n || i < e && l > n ? a - t + o : 0;
}
var Ya = function(e, t) {
  var n = window, r = t.scrollMode, o = t.block, i = t.inline, a = t.boundary, l = t.skipOverflowHiddenElements, s = typeof a == "function" ? a : function(Bf) {
    return Bf !== a;
  };
  if (!Ua(e)) throw new TypeError("Invalid target");
  for (var u, f, c = document.scrollingElement || document.documentElement, d = [], p = e; Ua(p) && s(p); ) {
    if ((p = (f = (u = p).parentElement) == null ? u.getRootNode().host || null : f) === c) {
      d.push(p);
      break;
    }
    p != null && p === document.body && ho(p) && !ho(document.documentElement) || p != null && ho(p, l) && d.push(p);
  }
  for (var m = n.visualViewport ? n.visualViewport.width : innerWidth, g = n.visualViewport ? n.visualViewport.height : innerHeight, w = window.scrollX || pageXOffset, h = window.scrollY || pageYOffset, S = e.getBoundingClientRect(), b = S.height, v = S.width, C = S.top, O = S.right, x = S.bottom, P = S.left, E = o === "start" || o === "nearest" ? C : o === "end" ? x : C + b / 2, A = i === "center" ? P + v / 2 : i === "end" ? O : P, F = [], D = 0; D < d.length; D++) {
    var N = d[D], V = N.getBoundingClientRect(), T = V.height, I = V.width, j = V.top, R = V.right, M = V.bottom, J = V.left;
    if (r === "if-needed" && C >= 0 && P >= 0 && x <= g && O <= m && C >= j && x <= M && P >= J && O <= R) return F;
    var U = getComputedStyle(N), xe = parseInt(U.borderLeftWidth, 10), Fe = parseInt(U.borderTopWidth, 10), we = parseInt(U.borderRightWidth, 10), L = parseInt(U.borderBottomWidth, 10), G = 0, Z = 0, te = "offsetWidth" in N ? N.offsetWidth - N.clientWidth - xe - we : 0, ae = "offsetHeight" in N ? N.offsetHeight - N.clientHeight - Fe - L : 0, fe = "offsetWidth" in N ? N.offsetWidth === 0 ? 0 : I / N.offsetWidth : 0, Ve = "offsetHeight" in N ? N.offsetHeight === 0 ? 0 : T / N.offsetHeight : 0;
    if (c === N) G = o === "start" ? E : o === "end" ? E - g : o === "nearest" ? nr(h, h + g, g, Fe, L, h + E, h + E + b, b) : E - g / 2, Z = i === "start" ? A : i === "center" ? A - m / 2 : i === "end" ? A - m : nr(w, w + m, m, xe, we, w + A, w + A + v, v), G = Math.max(0, G + h), Z = Math.max(0, Z + w);
    else {
      G = o === "start" ? E - j - Fe : o === "end" ? E - M + L + ae : o === "nearest" ? nr(j, M, T, Fe, L + ae, E, E + b, b) : E - (j + T / 2) + ae / 2, Z = i === "start" ? A - J - xe : i === "center" ? A - (J + I / 2) + te / 2 : i === "end" ? A - R + we + te : nr(J, R, I, xe, we + te, A, A + v, v);
      var We = N.scrollLeft, pn = N.scrollTop;
      E += pn - (G = Math.max(0, Math.min(pn + G / Ve, N.scrollHeight - T / Ve + ae))), A += We - (Z = Math.max(0, Math.min(We + Z / fe, N.scrollWidth - I / fe + te)));
    }
    F.push({ el: N, top: G, left: Z });
  }
  return F;
};
function Uu(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function Bg(e, t) {
  t === void 0 && (t = "auto");
  var n = "scrollBehavior" in document.body.style;
  e.forEach(function(r) {
    var o = r.el, i = r.top, a = r.left;
    o.scroll && n ? o.scroll({
      top: i,
      left: a,
      behavior: t
    }) : (o.scrollTop = i, o.scrollLeft = a);
  });
}
function zg(e) {
  return e === !1 ? {
    block: "end",
    inline: "nearest"
  } : Uu(e) ? e : {
    block: "start",
    inline: "nearest"
  };
}
function Vg(e, t) {
  var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (Uu(t) && typeof t.behavior == "function")
    return t.behavior(n ? Ya(e, t) : []);
  if (n) {
    var r = zg(t);
    return Bg(Ya(e, r), r.behavior);
  }
}
function Wg(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Xu(e, t, n) {
  return n && Wg(e, n), e;
}
function hr() {
  return (hr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function Yu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Ku(e, t) {
  if (e == null) return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++) t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function Ka(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var Zu = Object.prototype, Qu = Zu.toString, qg = Zu.hasOwnProperty, Ju = /^\s*function (\w+)/;
function Za(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var r = n.toString().match(Ju);
    return r ? r[1] : "";
  }
  return "";
}
var At = function(e) {
  var t, n;
  return Ka(e) !== !1 && typeof (t = e.constructor) == "function" && Ka(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, ec = function(e) {
  return e;
}, be = ec;
if (process.env.NODE_ENV !== "production") {
  var Gg = typeof console < "u";
  be = Gg ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : ec;
}
var Fn = function(e, t) {
  return qg.call(e, t);
}, Ug = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, on = Array.isArray || function(e) {
  return Qu.call(e) === "[object Array]";
}, an = function(e) {
  return Qu.call(e) === "[object Function]";
}, Er = function(e) {
  return At(e) && Fn(e, "_vueTypes_name");
}, tc = function(e) {
  return At(e) && (Fn(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return Fn(e, t);
  }));
};
function Mi(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function jt(e, t, n) {
  var r;
  n === void 0 && (n = !1);
  var o = !0, i = "";
  r = At(e) ? e : { type: e };
  var a = Er(r) ? r._vueTypes_name + " - " : "";
  if (tc(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || !r.required && t === void 0) return o;
    on(r.type) ? (o = r.type.some(function(c) {
      return jt(c, t, !0) === !0;
    }), i = r.type.map(function(c) {
      return Za(c);
    }).join(" or ")) : o = (i = Za(r)) === "Array" ? on(t) : i === "Object" ? At(t) : i === "String" || i === "Number" || i === "Boolean" || i === "Function" ? function(c) {
      if (c == null) return "";
      var d = c.constructor.toString().match(Ju);
      return d ? d[1] : "";
    }(t) === i : t instanceof r.type;
  }
  if (!o) {
    var l = a + 'value "' + t + '" should be of type "' + i + '"';
    return n === !1 ? (be(l), !1) : l;
  }
  if (Fn(r, "validator") && an(r.validator)) {
    var s = be, u = [];
    if (be = function(c) {
      u.push(c);
    }, o = r.validator(t), be = s, !o) {
      var f = (u.length > 1 ? "* " : "") + u.join(`
* `);
      return u.length = 0, n === !1 ? (be(f), o) : f;
    }
  }
  return o;
}
function Ae(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(o) {
    return o !== void 0 || this.default ? an(o) || jt(this, o, !0) === !0 ? (this.default = on(o) ? function() {
      return [].concat(o);
    } : At(o) ? function() {
      return Object.assign({}, o);
    } : o, this) : (be(this._vueTypes_name + ' - invalid default value: "' + o + '"'), this) : this;
  } } }), r = n.validator;
  return an(r) && (n.validator = Mi(r, n)), n;
}
function Ke(e, t) {
  var n = Ae(e, t);
  return Object.defineProperty(n, "validate", { value: function(r) {
    return an(this.validator) && be(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = Mi(r, this), this;
  } });
}
function Qa(e, t, n) {
  var r, o, i = (r = t, o = {}, Object.getOwnPropertyNames(r).forEach(function(c) {
    o[c] = Object.getOwnPropertyDescriptor(r, c);
  }), Object.defineProperties({}, o));
  if (i._vueTypes_name = e, !At(n)) return i;
  var a, l, s = n.validator, u = Ku(n, ["validator"]);
  if (an(s)) {
    var f = i.validator;
    f && (f = (l = (a = f).__original) !== null && l !== void 0 ? l : a), i.validator = Mi(f ? function(c) {
      return f.call(this, c) && s.call(this, c);
    } : s, i);
  }
  return Object.assign(i, u);
}
function Yr(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var Xg = function() {
  return Ke("any", {});
}, Yg = function() {
  return Ke("function", { type: Function });
}, Kg = function() {
  return Ke("boolean", { type: Boolean });
}, Zg = function() {
  return Ke("string", { type: String });
}, Qg = function() {
  return Ke("number", { type: Number });
}, Jg = function() {
  return Ke("array", { type: Array });
}, em = function() {
  return Ke("object", { type: Object });
}, tm = function() {
  return Ae("integer", { type: Number, validator: function(e) {
    return Ug(e);
  } });
}, nm = function() {
  return Ae("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function rm(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function") throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return Ae(e.name || "<<anonymous function>>", { validator: function(n) {
    var r = e(n);
    return r || be(this._vueTypes_name + " - " + t), r;
  } });
}
function om(e) {
  if (!on(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(r, o) {
    if (o != null) {
      var i = o.constructor;
      r.indexOf(i) === -1 && r.push(i);
    }
    return r;
  }, []);
  return Ae("oneOf", { type: n.length > 0 ? n : void 0, validator: function(r) {
    var o = e.indexOf(r) !== -1;
    return o || be(t), o;
  } });
}
function im(e) {
  if (!on(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
    var o = e[r];
    if (tc(o)) {
      if (Er(o) && o._vueTypes_name === "oneOf") {
        n = n.concat(o.type);
        continue;
      }
      if (an(o.validator) && (t = !0), o.type !== !0 && o.type) {
        n = n.concat(o.type);
        continue;
      }
    }
    n.push(o);
  }
  return n = n.filter(function(i, a) {
    return n.indexOf(i) === a;
  }), Ae("oneOfType", t ? { type: n, validator: function(i) {
    var a = [], l = e.some(function(s) {
      var u = jt(Er(s) && s._vueTypes_name === "oneOf" ? s.type || null : s, i, !0);
      return typeof u == "string" && a.push(u), u === !0;
    });
    return l || be("oneOfType - provided value does not match any of the " + a.length + ` passed-in validators:
` + Yr(a.join(`
`))), l;
  } } : { type: n });
}
function am(e) {
  return Ae("arrayOf", { type: Array, validator: function(t) {
    var n, r = t.every(function(o) {
      return (n = jt(e, o, !0)) === !0;
    });
    return r || be(`arrayOf - value validation error:
` + Yr(n)), r;
  } });
}
function lm(e) {
  return Ae("instanceOf", { type: e });
}
function sm(e) {
  return Ae("objectOf", { type: Object, validator: function(t) {
    var n, r = Object.keys(t).every(function(o) {
      return (n = jt(e, t[o], !0)) === !0;
    });
    return r || be(`objectOf - value validation error:
` + Yr(n)), r;
  } });
}
function um(e) {
  var t = Object.keys(e), n = t.filter(function(o) {
    var i;
    return !!(!((i = e[o]) === null || i === void 0) && i.required);
  }), r = Ae("shape", { type: Object, validator: function(o) {
    var i = this;
    if (!At(o)) return !1;
    var a = Object.keys(o);
    if (n.length > 0 && n.some(function(s) {
      return a.indexOf(s) === -1;
    })) {
      var l = n.filter(function(s) {
        return a.indexOf(s) === -1;
      });
      return be(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
    }
    return a.every(function(s) {
      if (t.indexOf(s) === -1) return i._vueTypes_isLoose === !0 || (be('shape - shape definition does not include a "' + s + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var u = jt(e[s], o[s], !0);
      return typeof u == "string" && be('shape - "' + s + `" property validation error:
 ` + Yr(u)), u === !0;
    });
  } });
  return Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), r;
}
var qe = function() {
  function e() {
  }
  return e.extend = function(t) {
    var n = this;
    if (on(t)) return t.forEach(function(c) {
      return n.extend(c);
    }), this;
    var r = t.name, o = t.validate, i = o !== void 0 && o, a = t.getter, l = a !== void 0 && a, s = Ku(t, ["name", "validate", "getter"]);
    if (Fn(this, r)) throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
    var u, f = s.type;
    return Er(f) ? (delete s.type, Object.defineProperty(this, r, l ? { get: function() {
      return Qa(r, f, s);
    } } : { value: function() {
      var c, d = Qa(r, f, s);
      return d.validator && (d.validator = (c = d.validator).bind.apply(c, [d].concat([].slice.call(arguments)))), d;
    } })) : (u = l ? { get: function() {
      var c = Object.assign({}, s);
      return i ? Ke(r, c) : Ae(r, c);
    }, enumerable: !0 } : { value: function() {
      var c, d, p = Object.assign({}, s);
      return c = i ? Ke(r, p) : Ae(r, p), p.validator && (c.validator = (d = p.validator).bind.apply(d, [c].concat([].slice.call(arguments)))), c;
    }, enumerable: !0 }, Object.defineProperty(this, r, u));
  }, Xu(e, null, [{ key: "any", get: function() {
    return Xg();
  } }, { key: "func", get: function() {
    return Yg().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return Kg().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return Zg().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return Qg().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return Jg().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return em().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return tm().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return nm();
  } }]), e;
}();
function nc(e) {
  var t;
  return e === void 0 && (e = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (t = function(n) {
    function r() {
      return n.apply(this, arguments) || this;
    }
    return Yu(r, n), Xu(r, null, [{ key: "sensibleDefaults", get: function() {
      return hr({}, this.defaults);
    }, set: function(o) {
      this.defaults = o !== !1 ? hr({}, o !== !0 ? o : e) : {};
    } }]), r;
  }(qe)).defaults = hr({}, e), t;
}
qe.defaults = {}, qe.custom = rm, qe.oneOf = om, qe.instanceOf = lm, qe.oneOfType = im, qe.arrayOf = am, qe.objectOf = sm, qe.shape = um, qe.utils = { validate: function(e, t) {
  return jt(t, e, !0) === !0;
}, toType: function(e, t, n) {
  return n === void 0 && (n = !1), n ? Ke(e, t) : Ae(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return Yu(t, e), t;
})(nc());
const q = nc({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
q.extend([{
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
const cm = (e, t, n) => {
  _i(e, `[ant-design-vue: ${t}] ${n}`);
};
function fm() {
  return "";
}
function dm(e) {
  return e ? e.ownerDocument : window.document;
}
function rc() {
}
const pm = () => ({
  action: q.oneOfType([q.string, q.arrayOf(q.string)]).def([]),
  showAction: q.any.def([]),
  hideAction: q.any.def([]),
  getPopupClassNameFromAlign: q.any.def(fm),
  onPopupVisibleChange: Function,
  afterPopupVisibleChange: q.func.def(rc),
  popup: q.any,
  arrow: q.bool.def(!0),
  popupStyle: {
    type: Object,
    default: void 0
  },
  prefixCls: q.string.def("rc-trigger-popup"),
  popupClassName: q.string.def(""),
  popupPlacement: String,
  builtinPlacements: q.object,
  popupTransitionName: String,
  popupAnimation: q.any,
  mouseEnterDelay: q.number.def(0),
  mouseLeaveDelay: q.number.def(0.1),
  zIndex: Number,
  focusDelay: q.number.def(0),
  blurDelay: q.number.def(0.15),
  getPopupContainer: Function,
  getDocument: q.func.def(dm),
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
  popupAlign: q.object.def(() => ({})),
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
}), Ii = {
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
}, gm = y(y({}, Ii), {
  mobile: {
    type: Object
  }
}), mm = y(y({}, Ii), {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
function ji(e) {
  let {
    prefixCls: t,
    animation: n,
    transitionName: r
  } = e;
  return n ? {
    name: `${t}-${n}`
  } : r ? {
    name: r
  } : {};
}
function oc(e) {
  const {
    prefixCls: t,
    visible: n,
    zIndex: r,
    mask: o,
    maskAnimation: i,
    maskTransitionName: a
  } = e;
  if (!o)
    return null;
  let l = {};
  return (a || i) && (l = ji({
    prefixCls: t,
    transitionName: a,
    animation: i
  })), $(kr, H({
    appear: !0
  }, l), {
    default: () => [yi($("div", {
      style: {
        zIndex: r
      },
      class: `${t}-mask`
    }, null), [[Gf("if"), n]])]
  });
}
oc.displayName = "Mask";
const hm = W({
  compatConfig: {
    MODE: 3
  },
  name: "MobilePopupInner",
  inheritAttrs: !1,
  props: gm,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      slots: r
    } = t;
    const o = k();
    return n({
      forceAlign: () => {
      },
      getElement: () => o.value
    }), () => {
      var i;
      const {
        zIndex: a,
        visible: l,
        prefixCls: s,
        mobile: {
          popupClassName: u,
          popupStyle: f,
          popupMotion: c = {},
          popupRender: d
        } = {}
      } = e, p = y({
        zIndex: a
      }, f);
      let m = dt((i = r.default) === null || i === void 0 ? void 0 : i.call(r));
      m.length > 1 && (m = $("div", {
        class: `${s}-content`
      }, [m])), d && (m = d(m));
      const g = K(s, u);
      return $(kr, H({
        ref: o
      }, c), {
        default: () => [l ? $("div", {
          class: g,
          style: p
        }, [m]) : null]
      });
    };
  }
});
var vm = function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(f) {
      try {
        u(r.next(f));
      } catch (c) {
        a(c);
      }
    }
    function s(f) {
      try {
        u(r.throw(f));
      } catch (c) {
        a(c);
      }
    }
    function u(f) {
      f.done ? i(f.value) : o(f.value).then(l, s);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const Ja = ["measure", "align", null, "motion"], ym = (e, t) => {
  const n = z(null), r = z(), o = z(!1);
  function i(s) {
    o.value || (n.value = s);
  }
  function a() {
    Re.cancel(r.value);
  }
  function l(s) {
    a(), r.value = Re(() => {
      let u = n.value;
      switch (n.value) {
        case "align":
          u = "motion";
          break;
        case "motion":
          u = "stable";
          break;
      }
      i(u), s == null || s();
    });
  }
  return Y(e, () => {
    i("measure");
  }, {
    immediate: !0,
    flush: "post"
  }), it(() => {
    Y(n, () => {
      switch (n.value) {
        case "measure":
          t();
          break;
      }
      n.value && (r.value = Re(() => vm(void 0, void 0, void 0, function* () {
        const s = Ja.indexOf(n.value), u = Ja[s + 1];
        u && s !== -1 && i(u);
      })));
    }, {
      immediate: !0,
      flush: "post"
    });
  }), un(() => {
    o.value = !0, a();
  }), [n, l];
}, bm = (e) => {
  const t = z({
    width: 0,
    height: 0
  });
  function n(o) {
    t.value = {
      width: o.offsetWidth,
      height: o.offsetHeight
    };
  }
  return [_(() => {
    const o = {};
    if (e.value) {
      const {
        width: i,
        height: a
      } = t.value;
      e.value.indexOf("height") !== -1 && a ? o.height = `${a}px` : e.value.indexOf("minHeight") !== -1 && a && (o.minHeight = `${a}px`), e.value.indexOf("width") !== -1 && i ? o.width = `${i}px` : e.value.indexOf("minWidth") !== -1 && i && (o.minWidth = `${i}px`);
    }
    return o;
  }), n];
};
function el(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function tl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? el(Object(n), !0).forEach(function(r) {
      xm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : el(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function qo(e) {
  "@babel/helpers - typeof";
  return qo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qo(e);
}
function xm(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var hn, wm = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function Mr() {
  if (hn !== void 0)
    return hn;
  hn = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var n in wm)
    n + t in e && (hn = n);
  return hn;
}
function ic() {
  return Mr() ? "".concat(Mr(), "TransitionProperty") : "transitionProperty";
}
function Kr() {
  return Mr() ? "".concat(Mr(), "Transform") : "transform";
}
function nl(e, t) {
  var n = ic();
  n && (e.style[n] = t, n !== "transitionProperty" && (e.style.transitionProperty = t));
}
function vo(e, t) {
  var n = Kr();
  n && (e.style[n] = t, n !== "transform" && (e.style.transform = t));
}
function Cm(e) {
  return e.style.transitionProperty || e.style[ic()];
}
function $m(e) {
  var t = window.getComputedStyle(e, null), n = t.getPropertyValue("transform") || t.getPropertyValue(Kr());
  if (n && n !== "none") {
    var r = n.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(r[12] || r[4], 0),
      y: parseFloat(r[13] || r[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var Sm = /matrix\((.*)\)/, Om = /matrix3d\((.*)\)/;
function _m(e, t) {
  var n = window.getComputedStyle(e, null), r = n.getPropertyValue("transform") || n.getPropertyValue(Kr());
  if (r && r !== "none") {
    var o, i = r.match(Sm);
    if (i)
      i = i[1], o = i.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), o[4] = t.x, o[5] = t.y, vo(e, "matrix(".concat(o.join(","), ")"));
    else {
      var a = r.match(Om)[1];
      o = a.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), o[12] = t.x, o[13] = t.y, vo(e, "matrix3d(".concat(o.join(","), ")"));
    }
  } else
    vo(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var Pm = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, Vn;
function rl(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function Yt(e, t, n) {
  var r = n;
  if (qo(t) === "object") {
    for (var o in t)
      t.hasOwnProperty(o) && Yt(e, o, t[o]);
    return;
  }
  if (typeof r < "u") {
    typeof r == "number" && (r = "".concat(r, "px")), e.style[t] = r;
    return;
  }
  return Vn(e, t);
}
function Tm(e) {
  var t, n, r, o = e.ownerDocument, i = o.body, a = o && o.documentElement;
  return t = e.getBoundingClientRect(), n = Math.floor(t.left), r = Math.floor(t.top), n -= a.clientLeft || i.clientLeft || 0, r -= a.clientTop || i.clientTop || 0, {
    left: n,
    top: r
  };
}
function ac(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var o = e.document;
    n = o.documentElement[r], typeof n != "number" && (n = o.body[r]);
  }
  return n;
}
function lc(e) {
  return ac(e);
}
function sc(e) {
  return ac(e, !0);
}
function Nn(e) {
  var t = Tm(e), n = e.ownerDocument, r = n.defaultView || n.parentWindow;
  return t.left += lc(r), t.top += sc(r), t;
}
function Fi(e) {
  return e != null && e == e.window;
}
function uc(e) {
  return Fi(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function Am(e, t, n) {
  var r = n, o = "", i = uc(e);
  return r = r || i.defaultView.getComputedStyle(e, null), r && (o = r.getPropertyValue(t) || r[t]), o;
}
var Em = new RegExp("^(".concat(Pm, ")(?!px)[a-z%]+$"), "i"), Mm = /^(top|right|bottom|left)$/, yo = "currentStyle", bo = "runtimeStyle", vt = "left", Im = "px";
function jm(e, t) {
  var n = e[yo] && e[yo][t];
  if (Em.test(n) && !Mm.test(t)) {
    var r = e.style, o = r[vt], i = e[bo][vt];
    e[bo][vt] = e[yo][vt], r[vt] = t === "fontSize" ? "1em" : n || 0, n = r.pixelLeft + Im, r[vt] = o, e[bo][vt] = i;
  }
  return n === "" ? "auto" : n;
}
typeof window < "u" && (Vn = window.getComputedStyle ? Am : jm);
function rr(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function ol(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function il(e, t, n) {
  Yt(e, "position") === "static" && (e.style.position = "relative");
  var r = -999, o = -999, i = rr("left", n), a = rr("top", n), l = ol(i), s = ol(a);
  i !== "left" && (r = 999), a !== "top" && (o = 999);
  var u = "", f = Nn(e);
  ("left" in t || "top" in t) && (u = Cm(e) || "", nl(e, "none")), "left" in t && (e.style[l] = "", e.style[i] = "".concat(r, "px")), "top" in t && (e.style[s] = "", e.style[a] = "".concat(o, "px")), rl(e);
  var c = Nn(e), d = {};
  for (var p in t)
    if (t.hasOwnProperty(p)) {
      var m = rr(p, n), g = p === "left" ? r : o, w = f[p] - c[p];
      m === p ? d[m] = g + w : d[m] = g - w;
    }
  Yt(e, d), rl(e), ("left" in t || "top" in t) && nl(e, u);
  var h = {};
  for (var S in t)
    if (t.hasOwnProperty(S)) {
      var b = rr(S, n), v = t[S] - f[S];
      S === b ? h[b] = d[b] + v : h[b] = d[b] - v;
    }
  Yt(e, h);
}
function Fm(e, t) {
  var n = Nn(e), r = $m(e), o = {
    x: r.x,
    y: r.y
  };
  "left" in t && (o.x = r.x + t.left - n.left), "top" in t && (o.y = r.y + t.top - n.top), _m(e, o);
}
function Nm(e, t, n) {
  if (n.ignoreShake) {
    var r = Nn(e), o = r.left.toFixed(0), i = r.top.toFixed(0), a = t.left.toFixed(0), l = t.top.toFixed(0);
    if (o === a && i === l)
      return;
  }
  n.useCssRight || n.useCssBottom ? il(e, t, n) : n.useCssTransform && Kr() in document.body.style ? Fm(e, t) : il(e, t, n);
}
function Ni(e, t) {
  for (var n = 0; n < e.length; n++)
    t(e[n]);
}
function cc(e) {
  return Vn(e, "boxSizing") === "border-box";
}
var Dm = ["margin", "border", "padding"], Go = -1, Rm = 2, Uo = 1, Lm = 0;
function Hm(e, t, n) {
  var r = {}, o = e.style, i;
  for (i in t)
    t.hasOwnProperty(i) && (r[i] = o[i], o[i] = t[i]);
  n.call(e);
  for (i in t)
    t.hasOwnProperty(i) && (o[i] = r[i]);
}
function bn(e, t, n) {
  var r = 0, o, i, a;
  for (i = 0; i < t.length; i++)
    if (o = t[i], o)
      for (a = 0; a < n.length; a++) {
        var l = void 0;
        o === "border" ? l = "".concat(o).concat(n[a], "Width") : l = o + n[a], r += parseFloat(Vn(e, l)) || 0;
      }
  return r;
}
var Ue = {
  getParent: function(t) {
    var n = t;
    do
      n.nodeType === 11 && n.host ? n = n.host : n = n.parentNode;
    while (n && n.nodeType !== 1 && n.nodeType !== 9);
    return n;
  }
};
Ni(["Width", "Height"], function(e) {
  Ue["doc".concat(e)] = function(t) {
    var n = t.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      n.documentElement["scroll".concat(e)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      n.body["scroll".concat(e)],
      Ue["viewport".concat(e)](n)
    );
  }, Ue["viewport".concat(e)] = function(t) {
    var n = "client".concat(e), r = t.document, o = r.body, i = r.documentElement, a = i[n];
    return r.compatMode === "CSS1Compat" && a || o && o[n] || a;
  };
});
function al(e, t, n) {
  var r = n;
  if (Fi(e))
    return t === "width" ? Ue.viewportWidth(e) : Ue.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? Ue.docWidth(e) : Ue.docHeight(e);
  var o = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], i = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), a = cc(e), l = 0;
  (i == null || i <= 0) && (i = void 0, l = Vn(e, t), (l == null || Number(l) < 0) && (l = e.style[t] || 0), l = Math.floor(parseFloat(l)) || 0), r === void 0 && (r = a ? Uo : Go);
  var s = i !== void 0 || a, u = i || l;
  return r === Go ? s ? u - bn(e, ["border", "padding"], o) : l : s ? r === Uo ? u : u + (r === Rm ? -bn(e, ["border"], o) : bn(e, ["margin"], o)) : l + bn(e, Dm.slice(r), o);
}
var km = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function ll() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o = t[0];
  return o.offsetWidth !== 0 ? r = al.apply(void 0, t) : Hm(o, km, function() {
    r = al.apply(void 0, t);
  }), r;
}
Ni(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  Ue["outer".concat(t)] = function(r, o) {
    return r && ll(r, e, o ? Lm : Uo);
  };
  var n = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  Ue[e] = function(r, o) {
    var i = o;
    if (i !== void 0) {
      if (r) {
        var a = cc(r);
        return a && (i += bn(r, ["padding", "border"], n)), Yt(r, e, i);
      }
      return;
    }
    return r && ll(r, e, Go);
  };
});
function fc(e, t) {
  for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
var B = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var n = t.ownerDocument || t;
    return n.defaultView || n.parentWindow;
  },
  getDocument: uc,
  offset: function(t, n, r) {
    if (typeof n < "u")
      Nm(t, n, r || {});
    else
      return Nn(t);
  },
  isWindow: Fi,
  each: Ni,
  css: Yt,
  clone: function(t) {
    var n, r = {};
    for (n in t)
      t.hasOwnProperty(n) && (r[n] = t[n]);
    var o = t.overflow;
    if (o)
      for (n in t)
        t.hasOwnProperty(n) && (r.overflow[n] = t.overflow[n]);
    return r;
  },
  mix: fc,
  getWindowScrollLeft: function(t) {
    return lc(t);
  },
  getWindowScrollTop: function(t) {
    return sc(t);
  },
  merge: function() {
    for (var t = {}, n = 0; n < arguments.length; n++)
      B.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
fc(B, Ue);
var xo = B.getParent;
function Xo(e) {
  if (B.isWindow(e) || e.nodeType === 9)
    return null;
  var t = B.getDocument(e), n = t.body, r, o = B.css(e, "position"), i = o === "fixed" || o === "absolute";
  if (!i)
    return e.nodeName.toLowerCase() === "html" ? null : xo(e);
  for (r = xo(e); r && r !== n && r.nodeType !== 9; r = xo(r))
    if (o = B.css(r, "position"), o !== "static")
      return r;
  return null;
}
var sl = B.getParent;
function Bm(e) {
  if (B.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = B.getDocument(e), n = t.body, r = null;
  for (
    r = sl(e);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    r && r !== n && r !== t;
    r = sl(r)
  ) {
    var o = B.css(r, "position");
    if (o === "fixed")
      return !0;
  }
  return !1;
}
function Di(e, t) {
  for (var n = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, r = Xo(e), o = B.getDocument(e), i = o.defaultView || o.parentWindow, a = o.body, l = o.documentElement; r; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || r.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    r !== a && r !== l && B.css(r, "overflow") !== "visible") {
      var s = B.offset(r);
      s.left += r.clientLeft, s.top += r.clientTop, n.top = Math.max(n.top, s.top), n.right = Math.min(
        n.right,
        // consider area without scrollBar
        s.left + r.clientWidth
      ), n.bottom = Math.min(n.bottom, s.top + r.clientHeight), n.left = Math.max(n.left, s.left);
    } else if (r === a || r === l)
      break;
    r = Xo(r);
  }
  var u = null;
  if (!B.isWindow(e) && e.nodeType !== 9) {
    u = e.style.position;
    var f = B.css(e, "position");
    f === "absolute" && (e.style.position = "fixed");
  }
  var c = B.getWindowScrollLeft(i), d = B.getWindowScrollTop(i), p = B.viewportWidth(i), m = B.viewportHeight(i), g = l.scrollWidth, w = l.scrollHeight, h = window.getComputedStyle(a);
  if (h.overflowX === "hidden" && (g = i.innerWidth), h.overflowY === "hidden" && (w = i.innerHeight), e.style && (e.style.position = u), t || Bm(e))
    n.left = Math.max(n.left, c), n.top = Math.max(n.top, d), n.right = Math.min(n.right, c + p), n.bottom = Math.min(n.bottom, d + m);
  else {
    var S = Math.max(g, c + p);
    n.right = Math.min(n.right, S);
    var b = Math.max(w, d + m);
    n.bottom = Math.min(n.bottom, b);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function zm(e, t, n, r) {
  var o = B.clone(e), i = {
    width: t.width,
    height: t.height
  };
  return r.adjustX && o.left < n.left && (o.left = n.left), r.resizeWidth && o.left >= n.left && o.left + i.width > n.right && (i.width -= o.left + i.width - n.right), r.adjustX && o.left + i.width > n.right && (o.left = Math.max(n.right - i.width, n.left)), r.adjustY && o.top < n.top && (o.top = n.top), r.resizeHeight && o.top >= n.top && o.top + i.height > n.bottom && (i.height -= o.top + i.height - n.bottom), r.adjustY && o.top + i.height > n.bottom && (o.top = Math.max(n.bottom - i.height, n.top)), B.mix(o, i);
}
function Ri(e) {
  var t, n, r;
  if (!B.isWindow(e) && e.nodeType !== 9)
    t = B.offset(e), n = B.outerWidth(e), r = B.outerHeight(e);
  else {
    var o = B.getWindow(e);
    t = {
      left: B.getWindowScrollLeft(o),
      top: B.getWindowScrollTop(o)
    }, n = B.viewportWidth(o), r = B.viewportHeight(o);
  }
  return t.width = n, t.height = r, t;
}
function ul(e, t) {
  var n = t.charAt(0), r = t.charAt(1), o = e.width, i = e.height, a = e.left, l = e.top;
  return n === "c" ? l += i / 2 : n === "b" && (l += i), r === "c" ? a += o / 2 : r === "r" && (a += o), {
    left: a,
    top: l
  };
}
function or(e, t, n, r, o) {
  var i = ul(t, n[1]), a = ul(e, n[0]), l = [a.left - i.left, a.top - i.top];
  return {
    left: Math.round(e.left - l[0] + r[0] - o[0]),
    top: Math.round(e.top - l[1] + r[1] - o[1])
  };
}
function cl(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function fl(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function Vm(e, t, n) {
  return e.left > n.right || e.left + t.width < n.left;
}
function Wm(e, t, n) {
  return e.top > n.bottom || e.top + t.height < n.top;
}
function ir(e, t, n) {
  var r = [];
  return B.each(e, function(o) {
    r.push(o.replace(t, function(i) {
      return n[i];
    }));
  }), r;
}
function ar(e, t) {
  return e[t] = -e[t], e;
}
function dl(e, t) {
  var n;
  return /%$/.test(e) ? n = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : n = parseInt(e, 10), n || 0;
}
function pl(e, t) {
  e[0] = dl(e[0], t.width), e[1] = dl(e[1], t.height);
}
function dc(e, t, n, r) {
  var o = n.points, i = n.offset || [0, 0], a = n.targetOffset || [0, 0], l = n.overflow, s = n.source || e;
  i = [].concat(i), a = [].concat(a), l = l || {};
  var u = {}, f = 0, c = !!(l && l.alwaysByViewport), d = Di(s, c), p = Ri(s);
  pl(i, p), pl(a, t);
  var m = or(p, t, o, i, a), g = B.merge(p, m);
  if (d && (l.adjustX || l.adjustY) && r) {
    if (l.adjustX && cl(m, p, d)) {
      var w = ir(o, /[lr]/gi, {
        l: "r",
        r: "l"
      }), h = ar(i, 0), S = ar(a, 0), b = or(p, t, w, h, S);
      Vm(b, p, d) || (f = 1, o = w, i = h, a = S);
    }
    if (l.adjustY && fl(m, p, d)) {
      var v = ir(o, /[tb]/gi, {
        t: "b",
        b: "t"
      }), C = ar(i, 1), O = ar(a, 1), x = or(p, t, v, C, O);
      Wm(x, p, d) || (f = 1, o = v, i = C, a = O);
    }
    f && (m = or(p, t, o, i, a), B.mix(g, m));
    var P = cl(m, p, d), E = fl(m, p, d);
    if (P || E) {
      var A = o;
      P && (A = ir(o, /[lr]/gi, {
        l: "r",
        r: "l"
      })), E && (A = ir(o, /[tb]/gi, {
        t: "b",
        b: "t"
      })), o = A, i = n.offset || [0, 0], a = n.targetOffset || [0, 0];
    }
    u.adjustX = l.adjustX && P, u.adjustY = l.adjustY && E, (u.adjustX || u.adjustY) && (g = zm(m, p, d, u));
  }
  return g.width !== p.width && B.css(s, "width", B.width(s) + g.width - p.width), g.height !== p.height && B.css(s, "height", B.height(s) + g.height - p.height), B.offset(s, {
    left: g.left,
    top: g.top
  }, {
    useCssRight: n.useCssRight,
    useCssBottom: n.useCssBottom,
    useCssTransform: n.useCssTransform,
    ignoreShake: n.ignoreShake
  }), {
    points: o,
    offset: i,
    targetOffset: a,
    overflow: u
  };
}
function qm(e, t) {
  var n = Di(e, t), r = Ri(e);
  return !n || r.left + r.width <= n.left || r.top + r.height <= n.top || r.left >= n.right || r.top >= n.bottom;
}
function Li(e, t, n) {
  var r = n.target || t, o = Ri(r), i = !qm(r, n.overflow && n.overflow.alwaysByViewport);
  return dc(e, o, n, i);
}
Li.__getOffsetParent = Xo;
Li.__getVisibleRectForElement = Di;
function Gm(e, t, n) {
  var r, o, i = B.getDocument(e), a = i.defaultView || i.parentWindow, l = B.getWindowScrollLeft(a), s = B.getWindowScrollTop(a), u = B.viewportWidth(a), f = B.viewportHeight(a);
  "pageX" in t ? r = t.pageX : r = l + t.clientX, "pageY" in t ? o = t.pageY : o = s + t.clientY;
  var c = {
    left: r,
    top: o,
    width: 0,
    height: 0
  }, d = r >= 0 && r <= l + u && o >= 0 && o <= s + f, p = [n.points[0], "cc"];
  return dc(e, c, tl(tl({}, n), {}, {
    points: p
  }), d);
}
function Ir(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, o = e;
  if (Array.isArray(e) && (o = Mt(e)[0]), !o)
    return null;
  const i = Vs(o, t, r);
  return i.props = n ? y(y({}, i.props), t) : i.props, nt(typeof i.props.class != "object", "class must be string"), i;
}
const Um = (e) => {
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
function Xm(e, t) {
  return e === t ? !0 : !e || !t ? !1 : "pageX" in t && "pageY" in t ? e.pageX === t.pageX && e.pageY === t.pageY : "clientX" in t && "clientY" in t ? e.clientX === t.clientX && e.clientY === t.clientY : !1;
}
function Ym(e, t) {
  e !== document.activeElement && bt(t, e) && typeof e.focus == "function" && e.focus();
}
function gl(e, t) {
  let n = null, r = null;
  function o(a) {
    let [{
      target: l
    }] = a;
    if (!document.documentElement.contains(l)) return;
    const {
      width: s,
      height: u
    } = l.getBoundingClientRect(), f = Math.floor(s), c = Math.floor(u);
    (n !== f || r !== c) && Promise.resolve().then(() => {
      t({
        width: f,
        height: c
      });
    }), n = f, r = c;
  }
  const i = new Id(o);
  return e && i.observe(e), () => {
    i.disconnect();
  };
}
const Km = (e, t) => {
  let n = !1, r = null;
  function o() {
    clearTimeout(r);
  }
  function i(a) {
    if (!n || a === !0) {
      if (e() === !1)
        return;
      n = !0, o(), r = setTimeout(() => {
        n = !1;
      }, t.value);
    } else
      o(), r = setTimeout(() => {
        n = !1, i();
      }, t.value);
  }
  return [i, () => {
    n = !1, o();
  }];
};
function Zm() {
  this.__data__ = [], this.size = 0;
}
function Hi(e, t) {
  return e === t || e !== e && t !== t;
}
function Zr(e, t) {
  for (var n = e.length; n--; )
    if (Hi(e[n][0], t))
      return n;
  return -1;
}
var Qm = Array.prototype, Jm = Qm.splice;
function eh(e) {
  var t = this.__data__, n = Zr(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Jm.call(t, n, 1), --this.size, !0;
}
function th(e) {
  var t = this.__data__, n = Zr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function nh(e) {
  return Zr(this.__data__, e) > -1;
}
function rh(e, t) {
  var n = this.__data__, r = Zr(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function at(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
at.prototype.clear = Zm;
at.prototype.delete = eh;
at.prototype.get = th;
at.prototype.has = nh;
at.prototype.set = rh;
function oh() {
  this.__data__ = new at(), this.size = 0;
}
function ih(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function ah(e) {
  return this.__data__.get(e);
}
function lh(e) {
  return this.__data__.has(e);
}
var pc = typeof global == "object" && global && global.Object === Object && global, sh = typeof self == "object" && self && self.Object === Object && self, ze = pc || sh || Function("return this")(), je = ze.Symbol, gc = Object.prototype, uh = gc.hasOwnProperty, ch = gc.toString, vn = je ? je.toStringTag : void 0;
function fh(e) {
  var t = uh.call(e, vn), n = e[vn];
  try {
    e[vn] = void 0;
    var r = !0;
  } catch {
  }
  var o = ch.call(e);
  return r && (t ? e[vn] = n : delete e[vn]), o;
}
var dh = Object.prototype, ph = dh.toString;
function gh(e) {
  return ph.call(e);
}
var mh = "[object Null]", hh = "[object Undefined]", ml = je ? je.toStringTag : void 0;
function Ft(e) {
  return e == null ? e === void 0 ? hh : mh : ml && ml in Object(e) ? fh(e) : gh(e);
}
function ot(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var vh = "[object AsyncFunction]", yh = "[object Function]", bh = "[object GeneratorFunction]", xh = "[object Proxy]";
function mc(e) {
  if (!ot(e))
    return !1;
  var t = Ft(e);
  return t == yh || t == bh || t == vh || t == xh;
}
var wo = ze["__core-js_shared__"], hl = function() {
  var e = /[^.]+$/.exec(wo && wo.keys && wo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function wh(e) {
  return !!hl && hl in e;
}
var Ch = Function.prototype, $h = Ch.toString;
function Nt(e) {
  if (e != null) {
    try {
      return $h.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Sh = /[\\^$.*+?()[\]{}|]/g, Oh = /^\[object .+?Constructor\]$/, _h = Function.prototype, Ph = Object.prototype, Th = _h.toString, Ah = Ph.hasOwnProperty, Eh = RegExp(
  "^" + Th.call(Ah).replace(Sh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Mh(e) {
  if (!ot(e) || wh(e))
    return !1;
  var t = mc(e) ? Eh : Oh;
  return t.test(Nt(e));
}
function Ih(e, t) {
  return e == null ? void 0 : e[t];
}
function Dt(e, t) {
  var n = Ih(e, t);
  return Mh(n) ? n : void 0;
}
var Dn = Dt(ze, "Map"), Rn = Dt(Object, "create");
function jh() {
  this.__data__ = Rn ? Rn(null) : {}, this.size = 0;
}
function Fh(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Nh = "__lodash_hash_undefined__", Dh = Object.prototype, Rh = Dh.hasOwnProperty;
function Lh(e) {
  var t = this.__data__;
  if (Rn) {
    var n = t[e];
    return n === Nh ? void 0 : n;
  }
  return Rh.call(t, e) ? t[e] : void 0;
}
var Hh = Object.prototype, kh = Hh.hasOwnProperty;
function Bh(e) {
  var t = this.__data__;
  return Rn ? t[e] !== void 0 : kh.call(t, e);
}
var zh = "__lodash_hash_undefined__";
function Vh(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Rn && t === void 0 ? zh : t, this;
}
function Et(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Et.prototype.clear = jh;
Et.prototype.delete = Fh;
Et.prototype.get = Lh;
Et.prototype.has = Bh;
Et.prototype.set = Vh;
function Wh() {
  this.size = 0, this.__data__ = {
    hash: new Et(),
    map: new (Dn || at)(),
    string: new Et()
  };
}
function qh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Qr(e, t) {
  var n = e.__data__;
  return qh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Gh(e) {
  var t = Qr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Uh(e) {
  return Qr(this, e).get(e);
}
function Xh(e) {
  return Qr(this, e).has(e);
}
function Yh(e, t) {
  var n = Qr(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function lt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
lt.prototype.clear = Wh;
lt.prototype.delete = Gh;
lt.prototype.get = Uh;
lt.prototype.has = Xh;
lt.prototype.set = Yh;
var Kh = 200;
function Zh(e, t) {
  var n = this.__data__;
  if (n instanceof at) {
    var r = n.__data__;
    if (!Dn || r.length < Kh - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new lt(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Xe(e) {
  var t = this.__data__ = new at(e);
  this.size = t.size;
}
Xe.prototype.clear = oh;
Xe.prototype.delete = ih;
Xe.prototype.get = ah;
Xe.prototype.has = lh;
Xe.prototype.set = Zh;
var Qh = "__lodash_hash_undefined__";
function Jh(e) {
  return this.__data__.set(e, Qh), this;
}
function ev(e) {
  return this.__data__.has(e);
}
function Ln(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new lt(); ++t < n; )
    this.add(e[t]);
}
Ln.prototype.add = Ln.prototype.push = Jh;
Ln.prototype.has = ev;
function tv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Yo(e, t) {
  return e.has(t);
}
var nv = 1, rv = 2;
function hc(e, t, n, r, o, i) {
  var a = n & nv, l = e.length, s = t.length;
  if (l != s && !(a && s > l))
    return !1;
  var u = i.get(e), f = i.get(t);
  if (u && f)
    return u == t && f == e;
  var c = -1, d = !0, p = n & rv ? new Ln() : void 0;
  for (i.set(e, t), i.set(t, e); ++c < l; ) {
    var m = e[c], g = t[c];
    if (r)
      var w = a ? r(g, m, c, t, e, i) : r(m, g, c, e, t, i);
    if (w !== void 0) {
      if (w)
        continue;
      d = !1;
      break;
    }
    if (p) {
      if (!tv(t, function(h, S) {
        if (!Yo(p, S) && (m === h || o(m, h, n, r, i)))
          return p.push(S);
      })) {
        d = !1;
        break;
      }
    } else if (!(m === g || o(m, g, n, r, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), d;
}
var jr = ze.Uint8Array;
function ov(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function iv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var av = 1, lv = 2, sv = "[object Boolean]", uv = "[object Date]", cv = "[object Error]", fv = "[object Map]", dv = "[object Number]", pv = "[object RegExp]", gv = "[object Set]", mv = "[object String]", hv = "[object Symbol]", vv = "[object ArrayBuffer]", yv = "[object DataView]", vl = je ? je.prototype : void 0, Co = vl ? vl.valueOf : void 0;
function bv(e, t, n, r, o, i, a) {
  switch (n) {
    case yv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case vv:
      return !(e.byteLength != t.byteLength || !i(new jr(e), new jr(t)));
    case sv:
    case uv:
    case dv:
      return Hi(+e, +t);
    case cv:
      return e.name == t.name && e.message == t.message;
    case pv:
    case mv:
      return e == t + "";
    case fv:
      var l = ov;
    case gv:
      var s = r & av;
      if (l || (l = iv), e.size != t.size && !s)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      r |= lv, a.set(e, t);
      var f = hc(l(e), l(t), r, o, i, a);
      return a.delete(e), f;
    case hv:
      if (Co)
        return Co.call(e) == Co.call(t);
  }
  return !1;
}
function ki(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Be = Array.isArray;
function vc(e, t, n) {
  var r = t(e);
  return Be(e) ? r : ki(r, n(e));
}
function xv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function yc() {
  return [];
}
var wv = Object.prototype, Cv = wv.propertyIsEnumerable, yl = Object.getOwnPropertySymbols, Bi = yl ? function(e) {
  return e == null ? [] : (e = Object(e), xv(yl(e), function(t) {
    return Cv.call(e, t);
  }));
} : yc;
function $v(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
function Ze(e) {
  return e != null && typeof e == "object";
}
var Sv = "[object Arguments]";
function bl(e) {
  return Ze(e) && Ft(e) == Sv;
}
var bc = Object.prototype, Ov = bc.hasOwnProperty, _v = bc.propertyIsEnumerable, zi = bl(/* @__PURE__ */ function() {
  return arguments;
}()) ? bl : function(e) {
  return Ze(e) && Ov.call(e, "callee") && !_v.call(e, "callee");
};
function Pv() {
  return !1;
}
var xc = typeof exports == "object" && exports && !exports.nodeType && exports, xl = xc && typeof module == "object" && module && !module.nodeType && module, Tv = xl && xl.exports === xc, wl = Tv ? ze.Buffer : void 0, Av = wl ? wl.isBuffer : void 0, Fr = Av || Pv, Ev = 9007199254740991, Mv = /^(?:0|[1-9]\d*)$/;
function wc(e, t) {
  var n = typeof e;
  return t = t ?? Ev, !!t && (n == "number" || n != "symbol" && Mv.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Iv = 9007199254740991;
function Vi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Iv;
}
var jv = "[object Arguments]", Fv = "[object Array]", Nv = "[object Boolean]", Dv = "[object Date]", Rv = "[object Error]", Lv = "[object Function]", Hv = "[object Map]", kv = "[object Number]", Bv = "[object Object]", zv = "[object RegExp]", Vv = "[object Set]", Wv = "[object String]", qv = "[object WeakMap]", Gv = "[object ArrayBuffer]", Uv = "[object DataView]", Xv = "[object Float32Array]", Yv = "[object Float64Array]", Kv = "[object Int8Array]", Zv = "[object Int16Array]", Qv = "[object Int32Array]", Jv = "[object Uint8Array]", e0 = "[object Uint8ClampedArray]", t0 = "[object Uint16Array]", n0 = "[object Uint32Array]", ee = {};
ee[Xv] = ee[Yv] = ee[Kv] = ee[Zv] = ee[Qv] = ee[Jv] = ee[e0] = ee[t0] = ee[n0] = !0;
ee[jv] = ee[Fv] = ee[Gv] = ee[Nv] = ee[Uv] = ee[Dv] = ee[Rv] = ee[Lv] = ee[Hv] = ee[kv] = ee[Bv] = ee[zv] = ee[Vv] = ee[Wv] = ee[qv] = !1;
function r0(e) {
  return Ze(e) && Vi(e.length) && !!ee[Ft(e)];
}
function Wi(e) {
  return function(t) {
    return e(t);
  };
}
var Cc = typeof exports == "object" && exports && !exports.nodeType && exports, Sn = Cc && typeof module == "object" && module && !module.nodeType && module, o0 = Sn && Sn.exports === Cc, $o = o0 && pc.process, ln = function() {
  try {
    var e = Sn && Sn.require && Sn.require("util").types;
    return e || $o && $o.binding && $o.binding("util");
  } catch {
  }
}(), Cl = ln && ln.isTypedArray, $c = Cl ? Wi(Cl) : r0, i0 = Object.prototype, a0 = i0.hasOwnProperty;
function Sc(e, t) {
  var n = Be(e), r = !n && zi(e), o = !n && !r && Fr(e), i = !n && !r && !o && $c(e), a = n || r || o || i, l = a ? $v(e.length, String) : [], s = l.length;
  for (var u in e)
    (t || a0.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    wc(u, s))) && l.push(u);
  return l;
}
var l0 = Object.prototype;
function qi(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || l0;
  return e === n;
}
function Oc(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var s0 = Oc(Object.keys, Object), u0 = Object.prototype, c0 = u0.hasOwnProperty;
function f0(e) {
  if (!qi(e))
    return s0(e);
  var t = [];
  for (var n in Object(e))
    c0.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Jr(e) {
  return e != null && Vi(e.length) && !mc(e);
}
function Wn(e) {
  return Jr(e) ? Sc(e) : f0(e);
}
function Ko(e) {
  return vc(e, Wn, Bi);
}
var d0 = 1, p0 = Object.prototype, g0 = p0.hasOwnProperty;
function m0(e, t, n, r, o, i) {
  var a = n & d0, l = Ko(e), s = l.length, u = Ko(t), f = u.length;
  if (s != f && !a)
    return !1;
  for (var c = s; c--; ) {
    var d = l[c];
    if (!(a ? d in t : g0.call(t, d)))
      return !1;
  }
  var p = i.get(e), m = i.get(t);
  if (p && m)
    return p == t && m == e;
  var g = !0;
  i.set(e, t), i.set(t, e);
  for (var w = a; ++c < s; ) {
    d = l[c];
    var h = e[d], S = t[d];
    if (r)
      var b = a ? r(S, h, d, t, e, i) : r(h, S, d, e, t, i);
    if (!(b === void 0 ? h === S || o(h, S, n, r, i) : b)) {
      g = !1;
      break;
    }
    w || (w = d == "constructor");
  }
  if (g && !w) {
    var v = e.constructor, C = t.constructor;
    v != C && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof C == "function" && C instanceof C) && (g = !1);
  }
  return i.delete(e), i.delete(t), g;
}
var Zo = Dt(ze, "DataView"), Qo = Dt(ze, "Promise"), Jo = Dt(ze, "Set"), ei = Dt(ze, "WeakMap"), $l = "[object Map]", h0 = "[object Object]", Sl = "[object Promise]", Ol = "[object Set]", _l = "[object WeakMap]", Pl = "[object DataView]", v0 = Nt(Zo), y0 = Nt(Dn), b0 = Nt(Qo), x0 = Nt(Jo), w0 = Nt(ei), De = Ft;
(Zo && De(new Zo(new ArrayBuffer(1))) != Pl || Dn && De(new Dn()) != $l || Qo && De(Qo.resolve()) != Sl || Jo && De(new Jo()) != Ol || ei && De(new ei()) != _l) && (De = function(e) {
  var t = Ft(e), n = t == h0 ? e.constructor : void 0, r = n ? Nt(n) : "";
  if (r)
    switch (r) {
      case v0:
        return Pl;
      case y0:
        return $l;
      case b0:
        return Sl;
      case x0:
        return Ol;
      case w0:
        return _l;
    }
  return t;
});
var C0 = 1, Tl = "[object Arguments]", Al = "[object Array]", lr = "[object Object]", $0 = Object.prototype, El = $0.hasOwnProperty;
function S0(e, t, n, r, o, i) {
  var a = Be(e), l = Be(t), s = a ? Al : De(e), u = l ? Al : De(t);
  s = s == Tl ? lr : s, u = u == Tl ? lr : u;
  var f = s == lr, c = u == lr, d = s == u;
  if (d && Fr(e)) {
    if (!Fr(t))
      return !1;
    a = !0, f = !1;
  }
  if (d && !f)
    return i || (i = new Xe()), a || $c(e) ? hc(e, t, n, r, o, i) : bv(e, t, s, n, r, o, i);
  if (!(n & C0)) {
    var p = f && El.call(e, "__wrapped__"), m = c && El.call(t, "__wrapped__");
    if (p || m) {
      var g = p ? e.value() : e, w = m ? t.value() : t;
      return i || (i = new Xe()), o(g, w, n, r, i);
    }
  }
  return d ? (i || (i = new Xe()), m0(e, t, n, r, o, i)) : !1;
}
function eo(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Ze(e) && !Ze(t) ? e !== e && t !== t : S0(e, t, n, r, eo, o);
}
function Gi(e, t) {
  return eo(e, t);
}
const O0 = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function Ml(e) {
  return typeof e != "function" ? null : e();
}
function Il(e) {
  return typeof e != "object" || !e ? null : e;
}
const _0 = W({
  compatConfig: {
    MODE: 3
  },
  name: "Align",
  props: O0,
  emits: ["align"],
  setup(e, t) {
    let {
      expose: n,
      slots: r
    } = t;
    const o = k({}), i = k(), [a, l] = Km(() => {
      const {
        disabled: d,
        target: p,
        align: m,
        onAlign: g
      } = e;
      if (!d && p && i.value) {
        const w = i.value;
        let h;
        const S = Ml(p), b = Il(p);
        o.value.element = S, o.value.point = b, o.value.align = m;
        const {
          activeElement: v
        } = document;
        return S && Um(S) ? h = Li(w, S, m) : b && (h = Gm(w, b, m)), Ym(v, w), g && h && g(w, h), !0;
      }
      return !1;
    }, _(() => e.monitorBufferTime)), s = k({
      cancel: () => {
      }
    }), u = k({
      cancel: () => {
      }
    }), f = () => {
      const d = e.target, p = Ml(d), m = Il(d);
      i.value !== u.value.element && (u.value.cancel(), u.value.element = i.value, u.value.cancel = gl(i.value, a)), (o.value.element !== p || !Xm(o.value.point, m) || !Gi(o.value.align, e.align)) && (a(), s.value.element !== p && (s.value.cancel(), s.value.element = p, s.value.cancel = gl(p, a)));
    };
    it(() => {
      rt(() => {
        f();
      });
    }), bi(() => {
      rt(() => {
        f();
      });
    }), Y(() => e.disabled, (d) => {
      d ? l() : a();
    }, {
      immediate: !0,
      flush: "post"
    });
    const c = k(null);
    return Y(() => e.monitorWindowResize, (d) => {
      d ? c.value || (c.value = yn(window, "resize", a)) : c.value && (c.value.remove(), c.value = null);
    }, {
      flush: "post"
    }), Ws(() => {
      s.value.cancel(), u.value.cancel(), c.value && c.value.remove(), l();
    }), n({
      forceAlign: () => a(!0)
    }), () => {
      const d = r == null ? void 0 : r.default();
      return d ? Ir(d[0], {
        ref: i
      }, !0, !0) : null;
    };
  }
});
zr("bottomLeft", "bottomRight", "topLeft", "topRight");
const _c = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return y(e ? {
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
}, Ui = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return y(e ? {
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
}, P0 = (e, t, n) => n !== void 0 ? n : `${e}-${t}`, T0 = W({
  compatConfig: {
    MODE: 3
  },
  name: "PopupInner",
  inheritAttrs: !1,
  props: Ii,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      attrs: r,
      slots: o
    } = t;
    const i = z(), a = z(), l = z(), [s, u] = bm(Uf(e, "stretch")), f = () => {
      e.stretch && u(e.getRootDomNode());
    }, c = z(!1);
    let d;
    Y(() => e.visible, (O) => {
      clearTimeout(d), O ? d = setTimeout(() => {
        c.value = e.visible;
      }) : c.value = !1;
    }, {
      immediate: !0
    });
    const [p, m] = ym(c, f), g = z(), w = () => e.point ? e.point : e.getRootDomNode, h = () => {
      var O;
      (O = i.value) === null || O === void 0 || O.forceAlign();
    }, S = (O, x) => {
      var P;
      const E = e.getClassNameFromAlign(x), A = l.value;
      l.value !== E && (l.value = E), p.value === "align" && (A !== E ? Promise.resolve().then(() => {
        h();
      }) : m(() => {
        var F;
        (F = g.value) === null || F === void 0 || F.call(g);
      }), (P = e.onAlign) === null || P === void 0 || P.call(e, O, x));
    }, b = _(() => {
      const O = typeof e.animation == "object" ? e.animation : ji(e);
      return ["onAfterEnter", "onAfterLeave"].forEach((x) => {
        const P = O[x];
        O[x] = (E) => {
          m(), p.value = "stable", P == null || P(E);
        };
      }), O;
    }), v = () => new Promise((O) => {
      g.value = O;
    });
    Y([b, p], () => {
      !b.value && p.value === "motion" && m();
    }, {
      immediate: !0
    }), n({
      forceAlign: h,
      getElement: () => a.value.$el || a.value
    });
    const C = _(() => {
      var O;
      return !(!((O = e.align) === null || O === void 0) && O.points && (p.value === "align" || p.value === "stable"));
    });
    return () => {
      var O;
      const {
        zIndex: x,
        align: P,
        prefixCls: E,
        destroyPopupOnHide: A,
        onMouseenter: F,
        onMouseleave: D,
        onTouchstart: N = () => {
        },
        onMousedown: V
      } = e, T = p.value, I = [y(y({}, s.value), {
        zIndex: x,
        opacity: T === "motion" || T === "stable" || !c.value ? null : 0,
        // pointerEvents: statusValue === 'stable' ? null : 'none',
        pointerEvents: !c.value && T !== "stable" ? "none" : null
      }), r.style];
      let j = dt((O = o.default) === null || O === void 0 ? void 0 : O.call(o, {
        visible: e.visible
      }));
      j.length > 1 && (j = $("div", {
        class: `${E}-content`
      }, [j]));
      const R = K(E, r.class, l.value, !e.arrow && `${E}-arrow-hidden`), J = c.value || !e.visible ? _c(b.value.name, b.value) : {};
      return $(kr, H(H({
        ref: a
      }, J), {}, {
        onBeforeEnter: v
      }), {
        default: () => !A || e.visible ? yi($(_0, {
          target: w(),
          key: "popup",
          ref: i,
          monitorWindowResize: !0,
          disabled: C.value,
          align: P,
          onAlign: S
        }, {
          default: () => $("div", {
            class: R,
            onMouseenter: F,
            onMouseleave: D,
            onMousedown: wa(V, ["capture"]),
            [Ct ? "onTouchstartPassive" : "onTouchstart"]: wa(N, ["capture"]),
            style: I
          }, [j])
        }), [[qs, c.value]]) : null
      });
    };
  }
}), A0 = W({
  compatConfig: {
    MODE: 3
  },
  name: "Popup",
  inheritAttrs: !1,
  props: mm,
  setup(e, t) {
    let {
      attrs: n,
      slots: r,
      expose: o
    } = t;
    const i = z(!1), a = z(!1), l = z(), s = z();
    return Y([() => e.visible, () => e.mobile], () => {
      i.value = e.visible, e.visible && e.mobile && (a.value = !0);
    }, {
      immediate: !0,
      flush: "post"
    }), o({
      forceAlign: () => {
        var u;
        (u = l.value) === null || u === void 0 || u.forceAlign();
      },
      getElement: () => {
        var u;
        return (u = l.value) === null || u === void 0 ? void 0 : u.getElement();
      }
    }), () => {
      const u = y(y(y({}, e), n), {
        visible: i.value
      }), f = a.value ? $(hm, H(H({}, u), {}, {
        mobile: e.mobile,
        ref: l
      }), {
        default: r.default
      }) : $(T0, H(H({}, u), {}, {
        ref: l
      }), {
        default: r.default
      });
      return $("div", {
        ref: s
      }, [$(oc, u, null), f]);
    };
  }
});
function E0(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function jl(e, t, n) {
  const r = e[t] || {};
  return y(y({}, r), n);
}
function M0(e, t, n, r) {
  const {
    points: o
  } = n, i = Object.keys(e);
  for (let a = 0; a < i.length; a += 1) {
    const l = i[a];
    if (E0(e[l].points, o, r))
      return `${t}-placement-${l}`;
  }
  return "";
}
const I0 = {
  methods: {
    setState() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = typeof e == "function" ? e(this.$data, this.$props) : e;
      if (this.getDerivedStateFromProps) {
        const r = this.getDerivedStateFromProps(Hd(this), y(y({}, this.$data), n));
        if (r === null)
          return;
        n = y(y({}, n), r || {});
      }
      y(this.$data, n), this._.isMounted && this.$forceUpdate(), rt(() => {
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
          for (let r = 0, o = n.length; r < o; r++)
            n[r](...e.slice(1));
        else
          n(...e.slice(1));
    }
  }
}, Pc = Symbol("PortalContextKey"), Tc = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: !0
  };
  ue(Pc, {
    inTriggerContext: t.inTriggerContext,
    shouldRender: _(() => {
      const {
        sPopupVisible: n,
        popupRef: r,
        forceRender: o,
        autoDestroy: i
      } = e || {};
      let a = !1;
      return (n || r || o) && (a = !0), !n && i && (a = !1), a;
    })
  });
}, j0 = () => {
  Tc({}, {
    inTriggerContext: !1
  });
  const e = pe(Pc, {
    shouldRender: _(() => !1),
    inTriggerContext: !1
  });
  return {
    shouldRender: _(() => e.shouldRender.value || e.inTriggerContext === !1)
  };
}, Ac = W({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: !1,
  props: {
    getContainer: q.func.isRequired,
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t, r = !0, o;
    const {
      shouldRender: i
    } = j0();
    function a() {
      i.value && (o = e.getContainer());
    }
    Xf(() => {
      r = !1, a();
    }), it(() => {
      o || a();
    });
    const l = Y(i, () => {
      i.value && !o && (o = e.getContainer()), o && l();
    });
    return bi(() => {
      rt(() => {
        var s;
        i.value && ((s = e.didUpdate) === null || s === void 0 || s.call(e, e));
      });
    }), () => {
      var s;
      return i.value ? r ? (s = n.default) === null || s === void 0 ? void 0 : s.call(n) : o ? $(Gs, {
        to: o
      }, n) : null : null;
    };
  }
});
let So;
function F0(e) {
  if (typeof document > "u")
    return 0;
  if (So === void 0) {
    const t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    const n = document.createElement("div"), r = n.style;
    r.position = "absolute", r.top = "0", r.left = "0", r.pointerEvents = "none", r.visibility = "hidden", r.width = "200px", r.height = "150px", r.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    const o = t.offsetWidth;
    n.style.overflow = "scroll";
    let i = t.offsetWidth;
    o === i && (i = n.clientWidth), document.body.removeChild(n), So = o - i;
  }
  return So;
}
const N0 = `vc-util-locker-${Date.now()}`;
let Fl = 0;
function D0() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
function R0(e) {
  const t = _(() => !!e && !!e.value);
  Fl += 1;
  const n = `${N0}_${Fl}`;
  Ye((r) => {
    if (ke()) {
      if (t.value) {
        const o = F0(), i = D0();
        Mn(`
html body {
  overflow-y: hidden;
  ${i ? `width: calc(100% - ${o}px);` : ""}
}`, n);
      } else
        _r(n);
      r(() => {
        _r(n);
      });
    }
  }, {
    flush: "post"
  });
}
let yt = 0;
const vr = ke(), Nl = (e) => {
  if (!vr)
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
}, L0 = W({
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
    getContainer: q.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    autoLock: tt(),
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = z(), o = z(), i = z(), a = z(1), l = ke() && document.createElement("div"), s = () => {
      var p, m;
      r.value === l && ((m = (p = r.value) === null || p === void 0 ? void 0 : p.parentNode) === null || m === void 0 || m.removeChild(r.value)), r.value = null;
    };
    let u = null;
    const f = function() {
      return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) || r.value && !r.value.parentNode ? (u = Nl(e.getContainer), u ? (u.appendChild(r.value), !0) : !1) : !0;
    }, c = () => vr ? (r.value || (r.value = l, f(!0)), d(), r.value) : null, d = () => {
      const {
        wrapperClassName: p
      } = e;
      r.value && p && p !== r.value.className && (r.value.className = p);
    };
    return bi(() => {
      d(), f();
    }), R0(_(() => e.autoLock && e.visible && ke() && (r.value === document.body || r.value === l))), it(() => {
      let p = !1;
      Y([() => e.visible, () => e.getContainer], (m, g) => {
        let [w, h] = m, [S, b] = g;
        vr && (u = Nl(e.getContainer), u === document.body && (w && !S ? yt += 1 : p && (yt -= 1))), p && (typeof h == "function" && typeof b == "function" ? h.toString() !== b.toString() : h !== b) && s(), p = !0;
      }, {
        immediate: !0,
        flush: "post"
      }), rt(() => {
        f() || (i.value = Re(() => {
          a.value += 1;
        }));
      });
    }), un(() => {
      const {
        visible: p
      } = e;
      vr && u === document.body && (yt = p && yt ? yt - 1 : yt), s(), Re.cancel(i.value);
    }), () => {
      const {
        forceRender: p,
        visible: m
      } = e;
      let g = null;
      const w = {
        getOpenCount: () => yt,
        getContainer: c
      };
      return a.value && (p || m || o.value) && (g = $(Ac, {
        getContainer: c,
        ref: o,
        didUpdate: e.didUpdate
      }, {
        default: () => {
          var h;
          return (h = n.default) === null || h === void 0 ? void 0 : h.call(n, w);
        }
      })), g;
    };
  }
}), H0 = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"], k0 = W({
  compatConfig: {
    MODE: 3
  },
  name: "Trigger",
  mixins: [I0],
  inheritAttrs: !1,
  props: pm(),
  setup(e) {
    const t = _(() => {
      const {
        popupPlacement: o,
        popupAlign: i,
        builtinPlacements: a
      } = e;
      return o && a ? jl(a, o, i) : i;
    }), n = z(null), r = (o) => {
      n.value = o;
    };
    return {
      vcTriggerContext: pe("vcTriggerContext", {}),
      popupRef: n,
      setPopupRef: r,
      triggerRef: z(null),
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
    return this.popupVisible !== void 0 ? t = !!e.popupVisible : t = !!e.defaultPopupVisible, H0.forEach((n) => {
      this[`fire${n}`] = (r) => {
        this.fireEvents(n, r);
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
    ue("vcTriggerContext", {
      onPopupMouseDown: this.onPopupMouseDown,
      onPopupMouseenter: this.onPopupMouseenter,
      onPopupMouseleave: this.onPopupMouseleave
    }), Tc(this);
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
    this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), Re.cancel(this.attachId);
  },
  methods: {
    updatedCal() {
      const e = this.$props;
      if (this.$data.sPopupVisible) {
        let n;
        !this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow()) && (n = e.getDocument(this.getRootDomNode()), this.clickOutsideHandler = yn(n, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (n = n || e.getDocument(this.getRootDomNode()), this.touchOutsideHandler = yn(n, "touchstart", this.onDocumentClick, Ct ? {
          passive: !1
        } : !1)), !this.contextmenuOutsideHandler1 && this.isContextmenuToShow() && (n = n || e.getDocument(this.getRootDomNode()), this.contextmenuOutsideHandler1 = yn(n, "scroll", this.onContextmenuClose)), !this.contextmenuOutsideHandler2 && this.isContextmenuToShow() && (this.contextmenuOutsideHandler2 = yn(window, "blur", this.onContextmenuClose));
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
      if (e && e.relatedTarget && !e.relatedTarget.setTimeout && bt((t = this.popupRef) === null || t === void 0 ? void 0 : t.getElement(), e.relatedTarget))
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
      bt(e.target, e.relatedTarget || document.activeElement) || (this.fireEvents("onBlur", e), this.clearDelayTimer(), this.isBlurToHide() && this.delaySetPopupVisible(!1, this.$props.blurDelay));
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
      const t = e.target, n = this.getRootDomNode(), r = this.getPopupDomNode();
      // mousedown on the target should also close popup when action is contextMenu.
      // https://github.com/ant-design/ant-design/issues/29853
      (!bt(n, t) || this.isContextMenuOnly()) && !bt(r, t) && !this.hasPopupMouseDown && this.delaySetPopupVisible(!1, 0.1);
    },
    getPopupDomNode() {
      var e;
      return ((e = this.popupRef) === null || e === void 0 ? void 0 : e.getElement()) || null;
    },
    getRootDomNode() {
      var e, t, n, r;
      const {
        getTriggerDOMNode: o
      } = this.$props;
      if (o) {
        const i = ((t = (e = this.triggerRef) === null || e === void 0 ? void 0 : e.$el) === null || t === void 0 ? void 0 : t.nodeName) === "#comment" ? null : Yn(this.triggerRef);
        return Yn(o(i));
      }
      try {
        const i = ((r = (n = this.triggerRef) === null || n === void 0 ? void 0 : n.$el) === null || r === void 0 ? void 0 : r.nodeName) === "#comment" ? null : Yn(this.triggerRef);
        if (i)
          return i;
      } catch {
      }
      return Yn(this);
    },
    handleGetPopupClassFromAlign(e) {
      const t = [], n = this.$props, {
        popupPlacement: r,
        builtinPlacements: o,
        prefixCls: i,
        alignPoint: a,
        getPopupClassNameFromAlign: l
      } = n;
      return r && o && t.push(M0(o, i, e, a)), l && t.push(l(e)), t.join(" ");
    },
    getPopupAlign() {
      const e = this.$props, {
        popupPlacement: t,
        popupAlign: n,
        builtinPlacements: r
      } = e;
      return t && r ? jl(r, t, n) : n;
    },
    getComponent() {
      const e = {};
      this.isMouseEnterToShow() && (e.onMouseenter = this.onPopupMouseenter), this.isMouseLeaveToHide() && (e.onMouseleave = this.onPopupMouseleave), e.onMousedown = this.onPopupMouseDown, e[Ct ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
      const {
        handleGetPopupClassFromAlign: t,
        getRootDomNode: n,
        $attrs: r
      } = this, {
        prefixCls: o,
        destroyPopupOnHide: i,
        popupClassName: a,
        popupAnimation: l,
        popupTransitionName: s,
        popupStyle: u,
        mask: f,
        maskAnimation: c,
        maskTransitionName: d,
        zIndex: p,
        stretch: m,
        alignPoint: g,
        mobile: w,
        arrow: h,
        forceRender: S
      } = this.$props, {
        sPopupVisible: b,
        point: v
      } = this.$data, C = y(y({
        prefixCls: o,
        arrow: h,
        destroyPopupOnHide: i,
        visible: b,
        point: g ? v : null,
        align: this.align,
        animation: l,
        getClassNameFromAlign: t,
        stretch: m,
        getRootDomNode: n,
        mask: f,
        zIndex: p,
        transitionName: s,
        maskAnimation: c,
        maskTransitionName: d,
        class: a,
        style: u,
        onAlign: r.onPopupAlign || rc
      }, e), {
        ref: this.setPopupRef,
        mobile: w,
        forceRender: S
      });
      return $(A0, C, {
        default: this.$slots.popup || (() => kd(this, "popup"))
      });
    },
    attachParent(e) {
      Re.cancel(this.attachId);
      const {
        getPopupContainer: t,
        getDocument: n
      } = this.$props, r = this.getRootDomNode();
      let o;
      t ? (r || t.length === 0) && (o = t(r)) : o = n(this.getRootDomNode()).body, o ? o.appendChild(e) : this.attachId = Re(() => {
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
        sPopupVisible: r,
        onPopupVisibleChange: o
      } = this;
      this.clearDelayTimer(), r !== e && (Dd(this, "popupVisible") || this.setState({
        sPopupVisible: e,
        prevPopupVisible: r
      }), o && o(e)), n && t && e && this.setPoint(t);
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
      const r = t * 1e3;
      if (this.clearDelayTimer(), r) {
        const o = n ? {
          pageX: n.pageX,
          pageY: n.pageY
        } : null;
        this.delayTimer = setTimeout(() => {
          this.setPopupVisible(e, o), this.clearDelayTimer();
        }, r);
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
      const n = _a(this);
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
    } = this, t = Mt(Ld(this)), {
      alignPoint: n,
      getPopupContainer: r
    } = this.$props, o = t[0];
    this.childOriginEvents = _a(o);
    const i = {
      key: "trigger"
    };
    this.isContextmenuToShow() ? i.onContextmenu = this.onContextmenu : i.onContextmenu = this.createTwoChains("onContextmenu"), this.isClickToHide() || this.isClickToShow() ? (i.onClick = this.onClick, i.onMousedown = this.onMousedown, i[Ct ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart) : (i.onClick = this.createTwoChains("onClick"), i.onMousedown = this.createTwoChains("onMousedown"), i[Ct ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart")), this.isMouseEnterToShow() ? (i.onMouseenter = this.onMouseenter, n && (i.onMousemove = this.onMouseMove)) : i.onMouseenter = this.createTwoChains("onMouseenter"), this.isMouseLeaveToHide() ? i.onMouseleave = this.onMouseleave : i.onMouseleave = this.createTwoChains("onMouseleave"), this.isFocusToShow() || this.isBlurToHide() ? (i.onFocus = this.onFocus, i.onBlur = this.onBlur) : (i.onFocus = this.createTwoChains("onFocus"), i.onBlur = (u) => {
      u && (!u.relatedTarget || !bt(u.target, u.relatedTarget)) && this.createTwoChains("onBlur")(u);
    });
    const a = K(o && o.props && o.props.class, e.class);
    a && (i.class = a);
    const l = Ir(o, y(y({}, i), {
      ref: "triggerRef"
    }), !0, !0), s = $(L0, {
      key: "portal",
      getContainer: r && (() => r(this.getRootDomNode())),
      didUpdate: this.handlePortalUpdate,
      visible: this.$data.sPopupVisible
    }, {
      default: this.getComponent
    });
    return $(Te, null, [l, s]);
  }
});
var B0 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, z0 = Symbol("iconContext"), Ec = function() {
  return pe(z0, {
    prefixCls: k("anticon"),
    rootClassName: k(""),
    csp: k()
  });
};
function Xi() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function V0(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var Dl = "data-vc-order", W0 = "vc-icon-key", ti = /* @__PURE__ */ new Map();
function Mc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : W0;
}
function Yi(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function q0(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Ic(e) {
  return Array.from((ti.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function jc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Xi())
    return null;
  var n = t.csp, r = t.prepend, o = document.createElement("style");
  o.setAttribute(Dl, q0(r)), n && n.nonce && (o.nonce = n.nonce), o.innerHTML = e;
  var i = Yi(t), a = i.firstChild;
  if (r) {
    if (r === "queue") {
      var l = Ic(i).filter(function(s) {
        return ["prepend", "prependQueue"].includes(s.getAttribute(Dl));
      });
      if (l.length)
        return i.insertBefore(o, l[l.length - 1].nextSibling), o;
    }
    i.insertBefore(o, a);
  } else
    i.appendChild(o);
  return o;
}
function G0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Yi(t);
  return Ic(n).find(function(r) {
    return r.getAttribute(Mc(t)) === e;
  });
}
function U0(e, t) {
  var n = ti.get(e);
  if (!n || !V0(document, n)) {
    var r = jc("", t), o = r.parentNode;
    ti.set(e, o), e.removeChild(r);
  }
}
function X0(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Yi(n);
  U0(r, n);
  var o = G0(t, n);
  if (o)
    return n.csp && n.csp.nonce && o.nonce !== n.csp.nonce && (o.nonce = n.csp.nonce), o.innerHTML !== e && (o.innerHTML = e), o;
  var i = jc(e, n);
  return i.setAttribute(Mc(n), t), i;
}
function Rl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Y0(e, o, n[o]);
    });
  }
  return e;
}
function Y0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function K0(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function Z0(e, t) {
  K0(e, "[@ant-design/icons-vue] ".concat(t));
}
function Ll(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function ni(e, t, n) {
  return n ? Zt(e.tag, Rl({
    key: t
  }, n, e.attrs), (e.children || []).map(function(r, o) {
    return ni(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : Zt(e.tag, Rl({
    key: t
  }, e.attrs), (e.children || []).map(function(r, o) {
    return ni(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function Fc(e) {
  return Tt(e)[0];
}
function Nc(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Q0 = `
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
function Dc(e) {
  return e && e.getRootNode && e.getRootNode();
}
function J0(e) {
  return Xi() ? Dc(e) instanceof ShadowRoot : !1;
}
function ey(e) {
  return J0(e) ? Dc(e) : null;
}
var ty = function() {
  var t = Ec(), n = t.prefixCls, r = t.csp, o = Hr(), i = Q0;
  n && (i = i.replace(/anticon/g, n.value)), rt(function() {
    if (Xi()) {
      var a = o.vnode.el, l = ey(a);
      X0(i, "@ant-design-vue-icons", {
        prepend: !0,
        csp: r.value,
        attachTo: l
      });
    }
  });
}, ny = ["icon", "primaryColor", "secondaryColor"];
function ry(e, t) {
  if (e == null) return {};
  var n = oy(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function oy(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      iy(e, o, n[o]);
    });
  }
  return e;
}
function iy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var On = He({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function ay(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  On.primaryColor = t, On.secondaryColor = n || Fc(t), On.calculated = !!n;
}
function ly() {
  return yr({}, On);
}
var ht = function(t, n) {
  var r = yr({}, t, n.attrs), o = r.icon, i = r.primaryColor, a = r.secondaryColor, l = ry(r, ny), s = On;
  if (i && (s = {
    primaryColor: i,
    secondaryColor: a || Fc(i)
  }), Z0(Ll(o), "icon should be icon definiton, but got ".concat(o)), !Ll(o))
    return null;
  var u = o;
  return u && typeof u.icon == "function" && (u = yr({}, u, {
    icon: u.icon(s.primaryColor, s.secondaryColor)
  })), ni(u.icon, "svg-".concat(u.name), yr({}, l, {
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
ht.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
ht.inheritAttrs = !1;
ht.displayName = "IconBase";
ht.getTwoToneColors = ly;
ht.setTwoToneColors = ay;
function sy(e, t) {
  return dy(e) || fy(e, t) || cy(e, t) || uy();
}
function uy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cy(e, t) {
  if (e) {
    if (typeof e == "string") return Hl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Hl(e, t);
  }
}
function Hl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function fy(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, l;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (s) {
      i = !0, l = s;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw l;
      }
    }
    return r;
  }
}
function dy(e) {
  if (Array.isArray(e)) return e;
}
function Rc(e) {
  var t = Nc(e), n = sy(t, 2), r = n[0], o = n[1];
  return ht.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function py() {
  var e = ht.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var gy = W({
  name: "InsertStyles",
  setup: function() {
    return ty(), function() {
      return null;
    };
  }
}), my = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function hy(e, t) {
  return xy(e) || by(e, t) || yy(e, t) || vy();
}
function vy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yy(e, t) {
  if (e) {
    if (typeof e == "string") return kl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return kl(e, t);
  }
}
function kl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function by(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, l;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (s) {
      i = !0, l = s;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw l;
      }
    }
    return r;
  }
}
function xy(e) {
  if (Array.isArray(e)) return e;
}
function Bl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      xn(e, o, n[o]);
    });
  }
  return e;
}
function xn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function wy(e, t) {
  if (e == null) return {};
  var n = Cy(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Cy(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
Rc(pg.primary);
var ie = function(t, n) {
  var r, o = Bl({}, t, n.attrs), i = o.class, a = o.icon, l = o.spin, s = o.rotate, u = o.tabindex, f = o.twoToneColor, c = o.onClick, d = wy(o, my), p = Ec(), m = p.prefixCls, g = p.rootClassName, w = (r = {}, xn(r, g.value, !!g.value), xn(r, m.value, !0), xn(r, "".concat(m.value, "-").concat(a.name), !!a.name), xn(r, "".concat(m.value, "-spin"), !!l || a.name === "loading"), r), h = u;
  h === void 0 && c && (h = -1);
  var S = s ? {
    msTransform: "rotate(".concat(s, "deg)"),
    transform: "rotate(".concat(s, "deg)")
  } : void 0, b = Nc(f), v = hy(b, 2), C = v[0], O = v[1];
  return $("span", Bl({
    role: "img",
    "aria-label": a.name
  }, d, {
    onClick: c,
    class: [w, i],
    tabindex: h
  }), [$(ht, {
    icon: a,
    primaryColor: C,
    secondaryColor: O,
    style: S
  }, null), $(gy, null, null)]);
};
ie.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
ie.displayName = "AntdIcon";
ie.inheritAttrs = !1;
ie.getTwoToneColor = py;
ie.setTwoToneColor = Rc;
function zl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      $y(e, o, n[o]);
    });
  }
  return e;
}
function $y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ki = function(t, n) {
  var r = zl({}, t, n.attrs);
  return $(ie, zl({}, r, {
    icon: B0
  }), null);
};
Ki.displayName = "DownOutlined";
Ki.inheritAttrs = !1;
var Sy = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
function Vl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Oy(e, o, n[o]);
    });
  }
  return e;
}
function Oy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var fn = function(t, n) {
  var r = Vl({}, t, n.attrs);
  return $(ie, Vl({}, r, {
    icon: Sy
  }), null);
};
fn.displayName = "LoadingOutlined";
fn.inheritAttrs = !1;
var _y = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
function Wl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Py(e, o, n[o]);
    });
  }
  return e;
}
function Py(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var qn = function(t, n) {
  var r = Wl({}, t, n.attrs);
  return $(ie, Wl({}, r, {
    icon: _y
  }), null);
};
qn.displayName = "CloseOutlined";
qn.inheritAttrs = !1;
var Ty = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
function ql(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Ay(e, o, n[o]);
    });
  }
  return e;
}
function Ay(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Rt = function(t, n) {
  var r = ql({}, t, n.attrs);
  return $(ie, ql({}, r, {
    icon: Ty
  }), null);
};
Rt.displayName = "CloseCircleFilled";
Rt.inheritAttrs = !1;
function Ey(e) {
  const t = Symbol("contextKey");
  return {
    useProvide: (o, i) => {
      const a = He({});
      return ue(t, a), Ye(() => {
        y(a, o, i || {});
      }), a;
    },
    useInject: () => pe(t, e) || {}
  };
}
const Nr = Symbol("ContextProps"), Dr = Symbol("InternalContextProps"), My = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _(() => !0);
  const n = k(/* @__PURE__ */ new Map()), r = (a, l) => {
    n.value.set(a, l), n.value = new Map(n.value);
  }, o = (a) => {
    n.value.delete(a), n.value = new Map(n.value);
  }, i = Hr();
  Y([t, n], () => {
    if (process.env.NODE_ENV !== "production" && t.value && n.value.size > 1) {
      cm(!1, "Form.Item", `FormItem can only collect one field item, you haved set ${[...n.value.values()].map((l) => `\`${l.name}\``).join(", ")} ${n.value.size} field items.
        You can set not need to be collected fields into \`a-form-item-rest\``);
      let a = i;
      for (; a.parent; )
        console.warn("at", a.type), a = a.parent;
    }
  }), ue(Nr, e), ue(Dr, {
    addFormItemField: r,
    removeFormItemField: o
  });
}, ri = {
  id: _(() => {
  }),
  onFieldBlur: () => {
  },
  onFieldChange: () => {
  },
  clearValidate: () => {
  }
}, oi = {
  addFormItemField: () => {
  },
  removeFormItemField: () => {
  }
}, Iy = () => {
  const e = pe(Dr, oi), t = Symbol("FormItemFieldKey"), n = Hr();
  return e.addFormItemField(t, n.type), un(() => {
    e.removeFormItemField(t);
  }), ue(Dr, oi), ue(Nr, ri), pe(Nr, ri);
}, ii = W({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItemRest",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ue(Dr, oi), ue(Nr, ri), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}), Lc = Ey({});
W({
  name: "NoFormStatus",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Lc.useProvide({}), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
var jy = "[object Symbol]";
function to(e) {
  return typeof e == "symbol" || Ze(e) && Ft(e) == jy;
}
function Zi(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Fy = 1 / 0, Gl = je ? je.prototype : void 0, Ul = Gl ? Gl.toString : void 0;
function Hc(e) {
  if (typeof e == "string")
    return e;
  if (Be(e))
    return Zi(e, Hc) + "";
  if (to(e))
    return Ul ? Ul.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Fy ? "-0" : t;
}
var Ny = /\s/;
function Dy(e) {
  for (var t = e.length; t-- && Ny.test(e.charAt(t)); )
    ;
  return t;
}
var Ry = /^\s+/;
function Ly(e) {
  return e && e.slice(0, Dy(e) + 1).replace(Ry, "");
}
var Xl = NaN, Hy = /^[-+]0x[0-9a-f]+$/i, ky = /^0b[01]+$/i, By = /^0o[0-7]+$/i, zy = parseInt;
function ai(e) {
  if (typeof e == "number")
    return e;
  if (to(e))
    return Xl;
  if (ot(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ot(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ly(e);
  var n = ky.test(e);
  return n || By.test(e) ? zy(e.slice(2), n ? 2 : 8) : Hy.test(e) ? Xl : +e;
}
var Yl = 1 / 0, Vy = 17976931348623157e292;
function Wy(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = ai(e), e === Yl || e === -Yl) {
    var t = e < 0 ? -1 : 1;
    return t * Vy;
  }
  return e === e ? e : 0;
}
function qy(e) {
  var t = Wy(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function Qi(e) {
  return e;
}
var Kl = Object.create, Gy = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!ot(t))
      return {};
    if (Kl)
      return Kl(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function Uy(e, t, n) {
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
function Xy(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Yy = 800, Ky = 16, Zy = Date.now;
function Qy(e) {
  var t = 0, n = 0;
  return function() {
    var r = Zy(), o = Ky - (r - n);
    if (n = r, o > 0) {
      if (++t >= Yy)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Jy(e) {
  return function() {
    return e;
  };
}
var Rr = function() {
  try {
    var e = Dt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), eb = Rr ? function(e, t) {
  return Rr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Jy(t),
    writable: !0
  });
} : Qi, kc = Qy(eb);
function tb(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function Bc(e, t, n, r) {
  for (var o = e.length, i = n + -1; ++i < o; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
function nb(e) {
  return e !== e;
}
function rb(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
function ob(e, t, n) {
  return t === t ? rb(e, t, n) : Bc(e, nb, n);
}
function ib(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && ob(e, t, 0) > -1;
}
function zc(e, t, n) {
  t == "__proto__" && Rr ? Rr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var ab = Object.prototype, lb = ab.hasOwnProperty;
function Vc(e, t, n) {
  var r = e[t];
  (!(lb.call(e, t) && Hi(r, n)) || n === void 0 && !(t in e)) && zc(e, t, n);
}
function Gn(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var l = t[i], s = void 0;
    s === void 0 && (s = e[l]), o ? zc(n, l, s) : Vc(n, l, s);
  }
  return n;
}
var Zl = Math.max;
function Wc(e, t, n) {
  return t = Zl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = Zl(r.length - t, 0), a = Array(i); ++o < i; )
      a[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(a), Uy(e, this, l);
  };
}
function sb(e, t) {
  return kc(Wc(e, t, Qi), e + "");
}
function ub(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var cb = Object.prototype, fb = cb.hasOwnProperty;
function db(e) {
  if (!ot(e))
    return ub(e);
  var t = qi(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !fb.call(e, r)) || n.push(r);
  return n;
}
function Ji(e) {
  return Jr(e) ? Sc(e, !0) : db(e);
}
var pb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gb = /^\w*$/;
function ea(e, t) {
  if (Be(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || to(e) ? !0 : gb.test(e) || !pb.test(e) || t != null && e in Object(t);
}
var mb = "Expected a function";
function ta(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(mb);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (ta.Cache || lt)(), n;
}
ta.Cache = lt;
var hb = 500;
function vb(e) {
  var t = ta(e, function(r) {
    return n.size === hb && n.clear(), r;
  }), n = t.cache;
  return t;
}
var yb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bb = /\\(\\)?/g, xb = vb(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(yb, function(n, r, o, i) {
    t.push(o ? i.replace(bb, "$1") : r || n);
  }), t;
});
function wb(e) {
  return e == null ? "" : Hc(e);
}
function no(e, t) {
  return Be(e) ? e : ea(e, t) ? [e] : xb(wb(e));
}
var Cb = 1 / 0;
function Un(e) {
  if (typeof e == "string" || to(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Cb ? "-0" : t;
}
function na(e, t) {
  t = no(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Un(t[n++])];
  return n && n == r ? e : void 0;
}
function $b(e, t, n) {
  var r = e == null ? void 0 : na(e, t);
  return r === void 0 ? n : r;
}
var Ql = je ? je.isConcatSpreadable : void 0;
function Sb(e) {
  return Be(e) || zi(e) || !!(Ql && e && e[Ql]);
}
function Ob(e, t, n, r, o) {
  var i = -1, a = e.length;
  for (n || (n = Sb), o || (o = []); ++i < a; ) {
    var l = e[i];
    n(l) ? ki(o, l) : o[o.length] = l;
  }
  return o;
}
function _b(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ob(e) : [];
}
function Pb(e) {
  return kc(Wc(e, void 0, _b), e + "");
}
var ra = Oc(Object.getPrototypeOf, Object), Tb = "[object Object]", Ab = Function.prototype, Eb = Object.prototype, qc = Ab.toString, Mb = Eb.hasOwnProperty, Ib = qc.call(Object);
function jb(e) {
  if (!Ze(e) || Ft(e) != Tb)
    return !1;
  var t = ra(e);
  if (t === null)
    return !0;
  var n = Mb.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && qc.call(n) == Ib;
}
function Fb(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var i = Array(o); ++r < o; )
    i[r] = e[r + t];
  return i;
}
function Nb(e, t) {
  return e && Gn(t, Wn(t), e);
}
function Db(e, t) {
  return e && Gn(t, Ji(t), e);
}
var Gc = typeof exports == "object" && exports && !exports.nodeType && exports, Jl = Gc && typeof module == "object" && module && !module.nodeType && module, Rb = Jl && Jl.exports === Gc, es = Rb ? ze.Buffer : void 0, ts = es ? es.allocUnsafe : void 0;
function Lb(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = ts ? ts(n) : new e.constructor(n);
  return e.copy(r), r;
}
function Hb(e, t) {
  return Gn(e, Bi(e), t);
}
var kb = Object.getOwnPropertySymbols, Uc = kb ? function(e) {
  for (var t = []; e; )
    ki(t, Bi(e)), e = ra(e);
  return t;
} : yc;
function Bb(e, t) {
  return Gn(e, Uc(e), t);
}
function Xc(e) {
  return vc(e, Ji, Uc);
}
var zb = Object.prototype, Vb = zb.hasOwnProperty;
function Wb(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Vb.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
function oa(e) {
  var t = new e.constructor(e.byteLength);
  return new jr(t).set(new jr(e)), t;
}
function qb(e, t) {
  var n = t ? oa(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Gb = /\w*$/;
function Ub(e) {
  var t = new e.constructor(e.source, Gb.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var ns = je ? je.prototype : void 0, rs = ns ? ns.valueOf : void 0;
function Xb(e) {
  return rs ? Object(rs.call(e)) : {};
}
function Yb(e, t) {
  var n = t ? oa(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Kb = "[object Boolean]", Zb = "[object Date]", Qb = "[object Map]", Jb = "[object Number]", e1 = "[object RegExp]", t1 = "[object Set]", n1 = "[object String]", r1 = "[object Symbol]", o1 = "[object ArrayBuffer]", i1 = "[object DataView]", a1 = "[object Float32Array]", l1 = "[object Float64Array]", s1 = "[object Int8Array]", u1 = "[object Int16Array]", c1 = "[object Int32Array]", f1 = "[object Uint8Array]", d1 = "[object Uint8ClampedArray]", p1 = "[object Uint16Array]", g1 = "[object Uint32Array]";
function m1(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case o1:
      return oa(e);
    case Kb:
    case Zb:
      return new r(+e);
    case i1:
      return qb(e, n);
    case a1:
    case l1:
    case s1:
    case u1:
    case c1:
    case f1:
    case d1:
    case p1:
    case g1:
      return Yb(e, n);
    case Qb:
      return new r();
    case Jb:
    case n1:
      return new r(e);
    case e1:
      return Ub(e);
    case t1:
      return new r();
    case r1:
      return Xb(e);
  }
}
function h1(e) {
  return typeof e.constructor == "function" && !qi(e) ? Gy(ra(e)) : {};
}
var v1 = "[object Map]";
function y1(e) {
  return Ze(e) && De(e) == v1;
}
var os = ln && ln.isMap, b1 = os ? Wi(os) : y1, x1 = "[object Set]";
function w1(e) {
  return Ze(e) && De(e) == x1;
}
var is = ln && ln.isSet, C1 = is ? Wi(is) : w1, $1 = 1, S1 = 2, O1 = 4, Yc = "[object Arguments]", _1 = "[object Array]", P1 = "[object Boolean]", T1 = "[object Date]", A1 = "[object Error]", Kc = "[object Function]", E1 = "[object GeneratorFunction]", M1 = "[object Map]", I1 = "[object Number]", Zc = "[object Object]", j1 = "[object RegExp]", F1 = "[object Set]", N1 = "[object String]", D1 = "[object Symbol]", R1 = "[object WeakMap]", L1 = "[object ArrayBuffer]", H1 = "[object DataView]", k1 = "[object Float32Array]", B1 = "[object Float64Array]", z1 = "[object Int8Array]", V1 = "[object Int16Array]", W1 = "[object Int32Array]", q1 = "[object Uint8Array]", G1 = "[object Uint8ClampedArray]", U1 = "[object Uint16Array]", X1 = "[object Uint32Array]", Q = {};
Q[Yc] = Q[_1] = Q[L1] = Q[H1] = Q[P1] = Q[T1] = Q[k1] = Q[B1] = Q[z1] = Q[V1] = Q[W1] = Q[M1] = Q[I1] = Q[Zc] = Q[j1] = Q[F1] = Q[N1] = Q[D1] = Q[q1] = Q[G1] = Q[U1] = Q[X1] = !0;
Q[A1] = Q[Kc] = Q[R1] = !1;
function _n(e, t, n, r, o, i) {
  var a, l = t & $1, s = t & S1, u = t & O1;
  if (n && (a = o ? n(e, r, o, i) : n(e)), a !== void 0)
    return a;
  if (!ot(e))
    return e;
  var f = Be(e);
  if (f) {
    if (a = Wb(e), !l)
      return Xy(e, a);
  } else {
    var c = De(e), d = c == Kc || c == E1;
    if (Fr(e))
      return Lb(e, l);
    if (c == Zc || c == Yc || d && !o) {
      if (a = s || d ? {} : h1(e), !l)
        return s ? Bb(e, Db(a, e)) : Hb(e, Nb(a, e));
    } else {
      if (!Q[c])
        return o ? e : {};
      a = m1(e, c, l);
    }
  }
  i || (i = new Xe());
  var p = i.get(e);
  if (p)
    return p;
  i.set(e, a), C1(e) ? e.forEach(function(w) {
    a.add(_n(w, t, n, w, e, i));
  }) : b1(e) && e.forEach(function(w, h) {
    a.set(h, _n(w, t, n, h, e, i));
  });
  var m = u ? s ? Xc : Ko : s ? Ji : Wn, g = f ? void 0 : m(e);
  return tb(g || e, function(w, h) {
    g && (h = w, w = e[h]), Vc(a, h, _n(w, t, n, h, e, i));
  }), a;
}
var Y1 = 1, K1 = 4;
function br(e) {
  return _n(e, Y1 | K1);
}
var Z1 = 1, Q1 = 2;
function J1(e, t, n, r) {
  var o = n.length, i = o;
  if (e == null)
    return !i;
  for (e = Object(e); o--; ) {
    var a = n[o];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++o < i; ) {
    a = n[o];
    var l = a[0], s = e[l], u = a[1];
    if (a[2]) {
      if (s === void 0 && !(l in e))
        return !1;
    } else {
      var f = new Xe(), c;
      if (!(c === void 0 ? eo(u, s, Z1 | Q1, r, f) : c))
        return !1;
    }
  }
  return !0;
}
function Qc(e) {
  return e === e && !ot(e);
}
function ex(e) {
  for (var t = Wn(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Qc(o)];
  }
  return t;
}
function Jc(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function tx(e) {
  var t = ex(e);
  return t.length == 1 && t[0][2] ? Jc(t[0][0], t[0][1]) : function(n) {
    return n === e || J1(n, e, t);
  };
}
function nx(e, t) {
  return e != null && t in Object(e);
}
function rx(e, t, n) {
  t = no(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = Un(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && Vi(o) && wc(a, o) && (Be(e) || zi(e)));
}
function ox(e, t) {
  return e != null && rx(e, t, nx);
}
var ix = 1, ax = 2;
function lx(e, t) {
  return ea(e) && Qc(t) ? Jc(Un(e), t) : function(n) {
    var r = $b(n, e);
    return r === void 0 && r === t ? ox(n, e) : eo(t, r, ix | ax);
  };
}
function sx(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function ux(e) {
  return function(t) {
    return na(t, e);
  };
}
function cx(e) {
  return ea(e) ? sx(Un(e)) : ux(e);
}
function ef(e) {
  return typeof e == "function" ? e : e == null ? Qi : typeof e == "object" ? Be(e) ? lx(e[0], e[1]) : tx(e) : cx(e);
}
var Oo = function() {
  return ze.Date.now();
}, fx = "Expected a function", dx = Math.max, px = Math.min;
function gx(e, t, n) {
  var r, o, i, a, l, s, u = 0, f = !1, c = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(fx);
  t = ai(t) || 0, ot(n) && (f = !!n.leading, c = "maxWait" in n, i = c ? dx(ai(n.maxWait) || 0, t) : i, d = "trailing" in n ? !!n.trailing : d);
  function p(O) {
    var x = r, P = o;
    return r = o = void 0, u = O, a = e.apply(P, x), a;
  }
  function m(O) {
    return u = O, l = setTimeout(h, t), f ? p(O) : a;
  }
  function g(O) {
    var x = O - s, P = O - u, E = t - x;
    return c ? px(E, i - P) : E;
  }
  function w(O) {
    var x = O - s, P = O - u;
    return s === void 0 || x >= t || x < 0 || c && P >= i;
  }
  function h() {
    var O = Oo();
    if (w(O))
      return S(O);
    l = setTimeout(h, g(O));
  }
  function S(O) {
    return l = void 0, d && r ? p(O) : (r = o = void 0, a);
  }
  function b() {
    l !== void 0 && clearTimeout(l), u = 0, r = s = o = l = void 0;
  }
  function v() {
    return l === void 0 ? a : S(Oo());
  }
  function C() {
    var O = Oo(), x = w(O);
    if (r = arguments, o = this, s = O, x) {
      if (l === void 0)
        return m(s);
      if (c)
        return clearTimeout(l), l = setTimeout(h, t), p(s);
    }
    return l === void 0 && (l = setTimeout(h, t)), a;
  }
  return C.cancel = b, C.flush = v, C;
}
function mx(e) {
  return Ze(e) && Jr(e);
}
function hx(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function vx(e) {
  return function(t, n, r) {
    var o = Object(t);
    if (!Jr(t)) {
      var i = ef(n);
      t = Wn(t), n = function(l) {
        return i(o[l], l, o);
      };
    }
    var a = e(t, n, r);
    return a > -1 ? o[i ? t[a] : a] : void 0;
  };
}
var yx = Math.max;
function bx(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = n == null ? 0 : qy(n);
  return o < 0 && (o = yx(r + o, 0)), Bc(e, ef(t), o);
}
var xx = vx(bx), wx = Math.min;
function Cx(e, t, n) {
  for (var r = ib, o = e[0].length, i = e.length, a = i, l = Array(i), s = 1 / 0, u = []; a--; ) {
    var f = e[a];
    s = wx(f.length, s), l[a] = o >= 120 && f.length >= 120 ? new Ln(a && f) : void 0;
  }
  f = e[0];
  var c = -1, d = l[0];
  e:
    for (; ++c < o && u.length < s; ) {
      var p = f[c], m = p;
      if (p = p !== 0 ? p : 0, !(d ? Yo(d, m) : r(u, m))) {
        for (a = i; --a; ) {
          var g = l[a];
          if (!(g ? Yo(g, m) : r(e[a], m)))
            continue e;
        }
        d && d.push(m), u.push(p);
      }
    }
  return u;
}
function $x(e) {
  return mx(e) ? e : [];
}
var Sx = sb(function(e) {
  var t = Zi(e, $x);
  return t.length && t[0] === e[0] ? Cx(t) : [];
});
function Ox(e, t) {
  return t.length < 2 ? e : na(e, Fb(t, 0, -1));
}
function _x(e, t) {
  return t = no(t, e), e = Ox(e, t), e == null || delete e[Un(hx(t))];
}
function Px(e) {
  return jb(e) ? void 0 : e;
}
var Tx = 1, Ax = 2, Ex = 4, Mx = Pb(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = Zi(t, function(i) {
    return i = no(i, e), r || (r = i.length > 1), i;
  }), Gn(e, Xc(e), n), r && (n = _n(n, Tx | Ax | Ex, Px));
  for (var o = t.length; o--; )
    _x(n, t[o]);
  return n;
});
const Ix = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), jx = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Fx = function(e, t, n, r) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: y(y({}, Ix(r)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: y(y({}, jx(r)), {
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
}, ia = new se("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Nx = new se("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), as = new se("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), ls = new se("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), Dx = new se("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), Rx = new se("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), Lx = new se("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), Hx = new se("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), kx = new se("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), Bx = new se("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), zx = new se("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), Vx = new se("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Wx = {
  zoom: {
    inKeyframes: ia,
    outKeyframes: Nx
  },
  "zoom-big": {
    inKeyframes: as,
    outKeyframes: ls
  },
  "zoom-big-fast": {
    inKeyframes: as,
    outKeyframes: ls
  },
  "zoom-left": {
    inKeyframes: Lx,
    outKeyframes: Hx
  },
  "zoom-right": {
    inKeyframes: kx,
    outKeyframes: Bx
  },
  "zoom-up": {
    inKeyframes: Dx,
    outKeyframes: Rx
  },
  "zoom-down": {
    inKeyframes: zx,
    outKeyframes: Vx
  }
}, qx = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = Wx[t];
  return [Fx(r, o, i, e.motionDurationFast), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, Gx = (e) => ({
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
});
var Ux = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
function ss(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Xx(e, o, n[o]);
    });
  }
  return e;
}
function Xx(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var aa = function(t, n) {
  var r = ss({}, t, n.attrs);
  return $(ie, ss({}, r, {
    icon: Ux
  }), null);
};
aa.displayName = "CheckCircleOutlined";
aa.inheritAttrs = !1;
var Yx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
function us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Kx(e, o, n[o]);
    });
  }
  return e;
}
function Kx(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var la = function(t, n) {
  var r = us({}, t, n.attrs);
  return $(ie, us({}, r, {
    icon: Yx
  }), null);
};
la.displayName = "ExclamationCircleOutlined";
la.inheritAttrs = !1;
var Zx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
function cs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Qx(e, o, n[o]);
    });
  }
  return e;
}
function Qx(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var sa = function(t, n) {
  var r = cs({}, t, n.attrs);
  return $(ie, cs({}, r, {
    icon: Zx
  }), null);
};
sa.displayName = "InfoCircleOutlined";
sa.inheritAttrs = !1;
var Jx = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" };
function fs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      ew(e, o, n[o]);
    });
  }
  return e;
}
function ew(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ua = function(t, n) {
  var r = fs({}, t, n.attrs);
  return $(ie, fs({}, r, {
    icon: Jx
  }), null);
};
ua.displayName = "CloseCircleOutlined";
ua.inheritAttrs = !1;
var tw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      nw(e, o, n[o]);
    });
  }
  return e;
}
function nw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Lt = function(t, n) {
  var r = ds({}, t, n.attrs);
  return $(ie, ds({}, r, {
    icon: tw
  }), null);
};
Lt.displayName = "CheckCircleFilled";
Lt.inheritAttrs = !1;
var rw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
function ps(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      ow(e, o, n[o]);
    });
  }
  return e;
}
function ow(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ht = function(t, n) {
  var r = ps({}, t, n.attrs);
  return $(ie, ps({}, r, {
    icon: rw
  }), null);
};
Ht.displayName = "ExclamationCircleFilled";
Ht.inheritAttrs = !1;
var iw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
function gs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      aw(e, o, n[o]);
    });
  }
  return e;
}
function aw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dn = function(t, n) {
  var r = gs({}, t, n.attrs);
  return $(ie, gs({}, r, {
    icon: iw
  }), null);
};
dn.displayName = "InfoCircleFilled";
dn.inheritAttrs = !1;
const sr = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"], lw = (e) => ({
  xs: `(max-width: ${e.screenXSMax}px)`,
  sm: `(min-width: ${e.screenSM}px)`,
  md: `(min-width: ${e.screenMD}px)`,
  lg: `(min-width: ${e.screenLG}px)`,
  xl: `(min-width: ${e.screenXL}px)`,
  xxl: `(min-width: ${e.screenXXL}px)`,
  xxxl: `{min-width: ${e.screenXXXL}px}`
});
function sw() {
  const [, e] = zn();
  return _(() => {
    const t = lw(e.value), n = /* @__PURE__ */ new Map();
    let r = -1, o = {};
    return {
      matchHandlers: {},
      dispatch(i) {
        return o = i, n.forEach((a) => a(o)), n.size >= 1;
      },
      subscribe(i) {
        return n.size || this.register(), r += 1, n.set(r, i), i(o), r;
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
          const a = t[i], l = (u) => {
            let {
              matches: f
            } = u;
            this.dispatch(y(y({}, o), {
              [i]: f
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
const Ee = {
  adjustX: 1,
  adjustY: 1
}, Me = [0, 0], tf = {
  left: {
    points: ["cr", "cl"],
    overflow: Ee,
    offset: [-4, 0],
    targetOffset: Me
  },
  right: {
    points: ["cl", "cr"],
    overflow: Ee,
    offset: [4, 0],
    targetOffset: Me
  },
  top: {
    points: ["bc", "tc"],
    overflow: Ee,
    offset: [0, -4],
    targetOffset: Me
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Ee,
    offset: [0, 4],
    targetOffset: Me
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ee,
    offset: [0, -4],
    targetOffset: Me
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Ee,
    offset: [-4, 0],
    targetOffset: Me
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ee,
    offset: [0, -4],
    targetOffset: Me
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Ee,
    offset: [4, 0],
    targetOffset: Me
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ee,
    offset: [0, 4],
    targetOffset: Me
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Ee,
    offset: [4, 0],
    targetOffset: Me
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ee,
    offset: [0, 4],
    targetOffset: Me
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Ee,
    offset: [-4, 0],
    targetOffset: Me
  }
}, uw = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: q.any
}, cw = W({
  compatConfig: {
    MODE: 3
  },
  name: "TooltipContent",
  props: uw,
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var r;
      return $("div", {
        class: `${e.prefixCls}-inner`,
        id: e.id,
        role: "tooltip",
        style: e.overlayInnerStyle
      }, [(r = n.overlay) === null || r === void 0 ? void 0 : r.call(n)]);
    };
  }
});
var fw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function ms() {
}
const dw = W({
  compatConfig: {
    MODE: 3
  },
  name: "Tooltip",
  inheritAttrs: !1,
  props: {
    trigger: q.any.def(["hover"]),
    defaultVisible: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    placement: q.string.def("right"),
    transitionName: String,
    animation: q.any,
    afterVisibleChange: q.func.def(() => {
    }),
    overlayStyle: {
      type: Object,
      default: void 0
    },
    overlayClassName: String,
    prefixCls: q.string.def("rc-tooltip"),
    mouseEnterDelay: q.number.def(0.1),
    mouseLeaveDelay: q.number.def(0.1),
    getPopupContainer: Function,
    destroyTooltipOnHide: {
      type: Boolean,
      default: !1
    },
    align: q.object.def(() => ({})),
    arrowContent: q.any.def(null),
    tipId: String,
    builtinPlacements: q.object,
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
      attrs: r,
      expose: o
    } = t;
    const i = z(), a = () => {
      const {
        prefixCls: f,
        tipId: c,
        overlayInnerStyle: d
      } = e;
      return [e.arrow ? $("div", {
        class: `${f}-arrow`,
        key: "arrow"
      }, [Vd(n, e, "arrowContent")]) : null, $(cw, {
        key: "content",
        prefixCls: f,
        id: c,
        overlayInnerStyle: d
      }, {
        overlay: n.overlay
      })];
    };
    o({
      getPopupDomNode: () => i.value.getPopupDomNode(),
      triggerDOM: i,
      forcePopupAlign: () => {
        var f;
        return (f = i.value) === null || f === void 0 ? void 0 : f.forcePopupAlign();
      }
    });
    const s = z(!1), u = z(!1);
    return Ye(() => {
      const {
        destroyTooltipOnHide: f
      } = e;
      if (typeof f == "boolean")
        s.value = f;
      else if (f && typeof f == "object") {
        const {
          keepParent: c
        } = f;
        s.value = c === !0, u.value = c === !1;
      }
    }), () => {
      const {
        overlayClassName: f,
        trigger: c,
        mouseEnterDelay: d,
        mouseLeaveDelay: p,
        overlayStyle: m,
        prefixCls: g,
        afterVisibleChange: w,
        transitionName: h,
        animation: S,
        placement: b,
        align: v,
        destroyTooltipOnHide: C,
        defaultVisible: O
      } = e, x = fw(e, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"]), P = y({}, x);
      e.visible !== void 0 && (P.popupVisible = e.visible);
      const E = y(y(y({
        popupClassName: f,
        prefixCls: g,
        action: c,
        builtinPlacements: tf,
        popupPlacement: b,
        popupAlign: v,
        afterPopupVisibleChange: w,
        popupTransitionName: h,
        popupAnimation: S,
        defaultPopupVisible: O,
        destroyPopupOnHide: s.value,
        autoDestroy: u.value,
        mouseLeaveDelay: p,
        popupStyle: m,
        mouseEnterDelay: d
      }, P), r), {
        onPopupVisibleChange: e.onVisibleChange || ms,
        onPopupAlign: e.onPopupAlign || ms,
        ref: i,
        arrow: !!e.arrow,
        popup: a()
      });
      return $(k0, E, {
        default: n.default
      });
    };
  }
}), pw = () => ({
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
  overlayStyle: oe(),
  overlayInnerStyle: oe(),
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
  align: oe(),
  builtinPlacements: oe(),
  children: Array,
  /** @deprecated Please use `onOpenChange` instead. */
  onVisibleChange: Function,
  /** @deprecated Please use `onUpdate:open` instead. */
  "onUpdate:visible": Function,
  onOpenChange: Function,
  "onUpdate:open": Function
}), gw = {
  adjustX: 1,
  adjustY: 1
}, hs = {
  adjustX: 0,
  adjustY: 0
}, mw = [0, 0];
function vs(e) {
  return typeof e == "boolean" ? e ? gw : hs : y(y({}, hs), e);
}
function hw(e) {
  const {
    arrowWidth: t = 4,
    horizontalArrowShift: n = 16,
    verticalArrowShift: r = 8,
    autoAdjustOverflow: o,
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
      offset: [-4, -(r + t)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [n + t, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(r + t)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [n + t, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, r + t]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-(n + t), 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, r + t]
    }
  };
  return Object.keys(a).forEach((l) => {
    a[l] = i ? y(y({}, a[l]), {
      overflow: vs(o),
      targetOffset: mw
    }) : y(y({}, tf[l]), {
      overflow: vs(o)
    }), a[l].ignoreShake = !0;
  }), a;
}
function vw() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  for (let t = 0, n = e.length; t < n; t++)
    if (e[t] !== void 0)
      return e[t];
}
const yw = Ar.map((e) => `${e}-inverse`);
function bw(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [...yw, ...Ar].includes(e) : Ar.includes(e);
}
function xw(e, t) {
  const n = bw(t), r = K({
    [`${e}-${t}`]: t && n
  }), o = {}, i = {};
  return t && !n && (o.background = t, i["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: o,
    arrowStyle: i
  };
}
function ur(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return e.map((n) => `${t}${n}`).join(",");
}
const nf = 8;
function ww(e) {
  const t = nf, {
    sizePopupArrow: n,
    contentRadius: r,
    borderRadiusOuter: o,
    limitVerticalRadius: i
  } = e, a = n / 2 - Math.ceil(o * (Math.sqrt(2) - 1)), l = (r > 12 ? r + 2 : 12) - a, s = i ? t - a : l;
  return {
    dropdownArrowOffset: l,
    dropdownArrowOffsetVertical: s
  };
}
function Cw(e, t) {
  const {
    componentCls: n,
    sizePopupArrow: r,
    marginXXS: o,
    borderRadiusXS: i,
    borderRadiusOuter: a,
    boxShadowPopoverArrow: l
  } = e, {
    colorBg: s,
    showArrowCls: u,
    contentRadius: f = e.borderRadiusLG,
    limitVerticalRadius: c
  } = t, {
    dropdownArrowOffsetVertical: d,
    dropdownArrowOffset: p
  } = ww({
    sizePopupArrow: r,
    contentRadius: f,
    borderRadiusOuter: a,
    limitVerticalRadius: c
  }), m = r / 2 + o;
  return {
    [n]: {
      // ============================ Basic ============================
      [`${n}-arrow`]: [y(y({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, _g(r, i, a, s, l)), {
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
      [ur(["&-placement-topLeft", "&-placement-top", "&-placement-topRight"].map((g) => g += ":not(&-arrow-hidden)"), u)]: {
        paddingBottom: m
      },
      // >>>>> Bottom
      [ur(["&-placement-bottomLeft", "&-placement-bottom", "&-placement-bottomRight"].map((g) => g += ":not(&-arrow-hidden)"), u)]: {
        paddingTop: m
      },
      // >>>>> Left
      [ur(["&-placement-leftTop", "&-placement-left", "&-placement-leftBottom"].map((g) => g += ":not(&-arrow-hidden)"), u)]: {
        paddingRight: {
          _skip_check_: !0,
          value: m
        }
      },
      // >>>>> Right
      [ur(["&-placement-rightTop", "&-placement-right", "&-placement-rightBottom"].map((g) => g += ":not(&-arrow-hidden)"), u)]: {
        paddingLeft: {
          _skip_check_: !0,
          value: m
        }
      }
    }
  };
}
const $w = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: n,
    tooltipColor: r,
    tooltipBg: o,
    tooltipBorderRadius: i,
    zIndexPopup: a,
    controlHeight: l,
    boxShadowSecondary: s,
    paddingSM: u,
    paddingXS: f,
    tooltipRadiusOuter: c
  } = e;
  return [
    {
      [t]: y(y(y(y({}, Bn(e)), {
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
        "--antd-arrow-background-color": o,
        // Wrapper for the tooltip content
        [`${t}-inner`]: {
          minWidth: l,
          minHeight: l,
          padding: `${u / 2}px ${f}px`,
          color: r,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: o,
          borderRadius: i,
          boxShadow: s
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: Math.min(i, nf)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), Pg(e, (d, p) => {
        let {
          darkColor: m
        } = p;
        return {
          [`&${t}-${d}`]: {
            [`${t}-inner`]: {
              backgroundColor: m
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": m
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
    Cw(mt(e, {
      borderRadiusOuter: c
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
}, Sw = (e, t) => It("Tooltip", (r) => {
  if ((t == null ? void 0 : t.value) === !1)
    return [];
  const {
    borderRadius: o,
    colorTextLightSolid: i,
    colorBgDefault: a,
    borderRadiusOuter: l
  } = r, s = mt(r, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: i,
    tooltipBorderRadius: o,
    tooltipBg: a,
    tooltipRadiusOuter: l > 4 ? 4 : l
  });
  return [$w(s), qx(r, "zoom-big-fast")];
}, (r) => {
  let {
    zIndexPopupBase: o,
    colorBgSpotlight: i
  } = r;
  return {
    zIndexPopup: o + 70,
    colorBgDefault: i
  };
})(e), Ow = (e, t) => {
  const n = {}, r = y({}, e);
  return t.forEach((o) => {
    e && o in e && (n[o] = e[o], delete r[o]);
  }), {
    picked: n,
    omitted: r
  };
}, _w = () => y(y({}, pw()), {
  title: q.any
}), Pw = W({
  compatConfig: {
    MODE: 3
  },
  name: "ATooltip",
  inheritAttrs: !1,
  props: tu(_w(), {
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
      emit: r,
      attrs: o,
      expose: i
    } = t;
    process.env.NODE_ENV !== "production" && [["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((A) => {
      let [F, D] = A;
      nt(e[F] === void 0, "Tooltip", `\`${F}\` is deprecated, please use \`${D}\` instead.`);
    });
    const {
      prefixCls: a,
      getPopupContainer: l,
      direction: s,
      rootPrefixCls: u
    } = Qe("tooltip", e), f = _(() => {
      var A;
      return (A = e.open) !== null && A !== void 0 ? A : e.visible;
    }), c = k(vw([e.open, e.visible])), d = k();
    let p;
    Y(f, (A) => {
      Re.cancel(p), p = Re(() => {
        c.value = !!A;
      });
    });
    const m = () => {
      var A;
      const F = (A = e.title) !== null && A !== void 0 ? A : n.title;
      return !F && F !== 0;
    }, g = (A) => {
      const F = m();
      f.value === void 0 && (c.value = F ? !1 : A), F || (r("update:visible", A), r("visibleChange", A), r("update:open", A), r("openChange", A));
    };
    i({
      getPopupDomNode: () => d.value.getPopupDomNode(),
      open: c,
      forcePopupAlign: () => {
        var A;
        return (A = d.value) === null || A === void 0 ? void 0 : A.forcePopupAlign();
      }
    });
    const h = _(() => {
      var A;
      const {
        builtinPlacements: F,
        autoAdjustOverflow: D,
        arrow: N,
        arrowPointAtCenter: V
      } = e;
      let T = V;
      return typeof N == "object" && (T = (A = N.pointAtCenter) !== null && A !== void 0 ? A : V), F || hw({
        arrowPointAtCenter: T,
        autoAdjustOverflow: D
      });
    }), S = (A) => A || A === "", b = (A) => {
      const F = A.type;
      if (typeof F == "object" && A.props && ((F.__ANT_BUTTON === !0 || F === "button") && S(A.props.disabled) || F.__ANT_SWITCH === !0 && (S(A.props.disabled) || S(A.props.loading)) || F.__ANT_RADIO === !0 && S(A.props.disabled))) {
        const {
          picked: D,
          omitted: N
        } = Ow(Bd(A), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), V = y(y({
          display: "inline-block"
        }, D), {
          cursor: "not-allowed",
          lineHeight: 1,
          width: A.props && A.props.block ? "100%" : void 0
        }), T = y(y({}, N), {
          pointerEvents: "none"
        }), I = Ir(A, {
          style: T
        }, !0);
        return $("span", {
          style: V,
          class: `${a.value}-disabled-compatible-wrapper`
        }, [I]);
      }
      return A;
    }, v = () => {
      var A, F;
      return (A = e.title) !== null && A !== void 0 ? A : (F = n.title) === null || F === void 0 ? void 0 : F.call(n);
    }, C = (A, F) => {
      const D = h.value, N = Object.keys(D).find((V) => {
        var T, I;
        return D[V].points[0] === ((T = F.points) === null || T === void 0 ? void 0 : T[0]) && D[V].points[1] === ((I = F.points) === null || I === void 0 ? void 0 : I[1]);
      });
      if (N) {
        const V = A.getBoundingClientRect(), T = {
          top: "50%",
          left: "50%"
        };
        N.indexOf("top") >= 0 || N.indexOf("Bottom") >= 0 ? T.top = `${V.height - F.offset[1]}px` : (N.indexOf("Top") >= 0 || N.indexOf("bottom") >= 0) && (T.top = `${-F.offset[1]}px`), N.indexOf("left") >= 0 || N.indexOf("Right") >= 0 ? T.left = `${V.width - F.offset[0]}px` : (N.indexOf("right") >= 0 || N.indexOf("Left") >= 0) && (T.left = `${-F.offset[0]}px`), A.style.transformOrigin = `${T.left} ${T.top}`;
      }
    }, O = _(() => xw(a.value, e.color)), x = _(() => o["data-popover-inject"]), [P, E] = Sw(a, _(() => !x.value));
    return () => {
      var A, F;
      const {
        openClassName: D,
        overlayClassName: N,
        overlayStyle: V,
        overlayInnerStyle: T
      } = e;
      let I = (F = Mt((A = n.default) === null || A === void 0 ? void 0 : A.call(n))) !== null && F !== void 0 ? F : null;
      I = I.length === 1 ? I[0] : I;
      let j = c.value;
      if (f.value === void 0 && m() && (j = !1), !I)
        return null;
      const R = b(ru(I) && !zd(I) ? I : $("span", null, [I])), M = K({
        [D || `${a.value}-open`]: !0,
        [R.props && R.props.class]: R.props && R.props.class
      }), J = K(N, {
        [`${a.value}-rtl`]: s.value === "rtl"
      }, O.value.className, E.value), U = y(y({}, O.value.overlayStyle), T), xe = O.value.arrowStyle, Fe = y(y(y({}, o), e), {
        prefixCls: a.value,
        arrow: !!e.arrow,
        getPopupContainer: l == null ? void 0 : l.value,
        builtinPlacements: h.value,
        visible: j,
        ref: d,
        overlayClassName: J,
        overlayStyle: y(y({}, xe), V),
        overlayInnerStyle: U,
        onVisibleChange: g,
        onPopupAlign: C,
        transitionName: P0(u.value, "zoom-big-fast", e.transitionName)
      });
      return P($(dw, Fe, {
        default: () => [c.value ? Ir(R, {
          class: M
        }) : R],
        arrowContent: () => $("span", {
          class: `${a.value}-arrow-content`
        }, null),
        overlay: v
      }));
    };
  }
}), Tw = Vr(Pw);
function rf(e, t) {
  return e.classList ? e.classList.contains(t) : ` ${e.className} `.indexOf(` ${t} `) > -1;
}
function ys(e, t) {
  e.classList ? e.classList.add(t) : rf(e, t) || (e.className = `${e.className} ${t}`);
}
function bs(e, t) {
  if (e.classList)
    e.classList.remove(t);
  else if (rf(e, t)) {
    const n = e.className;
    e.className = ` ${n} `.replace(` ${t} `, " ");
  }
}
const Aw = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return {
    name: e,
    appear: t,
    css: !0,
    onBeforeEnter: (n) => {
      n.style.height = "0px", n.style.opacity = "0", ys(n, e);
    },
    onEnter: (n) => {
      rt(() => {
        n.style.height = `${n.scrollHeight}px`, n.style.opacity = "1";
      });
    },
    onAfterEnter: (n) => {
      n && (bs(n, e), n.style.height = null, n.style.opacity = null);
    },
    onBeforeLeave: (n) => {
      ys(n, e), n.style.height = `${n.offsetHeight}px`, n.style.opacity = null;
    },
    onLeave: (n) => {
      setTimeout(() => {
        n.style.height = "0px", n.style.opacity = "0";
      });
    },
    onAfterLeave: (n) => {
      n && (bs(n, e), n.style && (n.style.height = null, n.style.opacity = null));
    }
  };
};
var Ew = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" };
function xs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Mw(e, o, n[o]);
    });
  }
  return e;
}
function Mw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ca = function(t, n) {
  var r = xs({}, t, n.attrs);
  return $(ie, xs({}, r, {
    icon: Ew
  }), null);
};
ca.displayName = "PlusOutlined";
ca.inheritAttrs = !1;
const Iw = () => ke() && window.document.documentElement;
let cr;
const jw = () => {
  if (!Iw())
    return !1;
  if (cr !== void 0)
    return cr;
  const e = document.createElement("div");
  return e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e), cr = e.scrollHeight === 1, document.body.removeChild(e), cr;
}, Fw = () => {
  const e = z(!1);
  return it(() => {
    e.value = jw();
  }), e;
}, of = Symbol("rowContextKey"), Nw = (e) => {
  ue(of, e);
}, Dw = () => pe(of, {
  gutter: _(() => {
  }),
  wrap: _(() => {
  }),
  supportFlexGap: _(() => {
  })
}), Rw = (e) => {
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
}, Lw = (e) => {
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
}, Hw = (e, t) => {
  const {
    componentCls: n,
    gridColumns: r
  } = e, o = {};
  for (let i = r; i >= 0; i--)
    i === 0 ? (o[`${n}${t}-${i}`] = {
      display: "none"
    }, o[`${n}-push-${i}`] = {
      insetInlineStart: "auto"
    }, o[`${n}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, o[`${n}${t}-push-${i}`] = {
      insetInlineStart: "auto"
    }, o[`${n}${t}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, o[`${n}${t}-offset-${i}`] = {
      marginInlineEnd: 0
    }, o[`${n}${t}-order-${i}`] = {
      order: 0
    }) : (o[`${n}${t}-${i}`] = {
      display: "block",
      flex: `0 0 ${i / r * 100}%`,
      maxWidth: `${i / r * 100}%`
    }, o[`${n}${t}-push-${i}`] = {
      insetInlineStart: `${i / r * 100}%`
    }, o[`${n}${t}-pull-${i}`] = {
      insetInlineEnd: `${i / r * 100}%`
    }, o[`${n}${t}-offset-${i}`] = {
      marginInlineStart: `${i / r * 100}%`
    }, o[`${n}${t}-order-${i}`] = {
      order: i
    });
  return o;
}, li = (e, t) => Hw(e, t), kw = (e, t, n) => ({
  [`@media (min-width: ${t}px)`]: y({}, li(e, n))
}), Bw = It("Grid", (e) => [Rw(e)]), zw = It("Grid", (e) => {
  const t = mt(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), n = {
    "-sm": t.screenSMMin,
    "-md": t.screenMDMin,
    "-lg": t.screenLGMin,
    "-xl": t.screenXLMin,
    "-xxl": t.screenXXLMin
  };
  return [Lw(t), li(t, ""), li(t, "-xs"), Object.keys(n).map((r) => kw(t, n[r], r)).reduce((r, o) => y(y({}, r), o), {})];
}), Vw = () => ({
  align: Xt([String, Object]),
  justify: Xt([String, Object]),
  prefixCls: String,
  gutter: Xt([Number, Array, Object], 0),
  wrap: {
    type: Boolean,
    default: void 0
  }
}), Ww = W({
  compatConfig: {
    MODE: 3
  },
  name: "ARow",
  inheritAttrs: !1,
  props: Vw(),
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    const {
      prefixCls: o,
      direction: i
    } = Qe("row", e), [a, l] = Bw(o);
    let s;
    const u = sw(), f = k({
      xs: !0,
      sm: !0,
      md: !0,
      lg: !0,
      xl: !0,
      xxl: !0
    }), c = k({
      xs: !1,
      sm: !1,
      md: !1,
      lg: !1,
      xl: !1,
      xxl: !1
    }), d = (b) => _(() => {
      if (typeof e[b] == "string")
        return e[b];
      if (typeof e[b] != "object")
        return "";
      for (let v = 0; v < sr.length; v++) {
        const C = sr[v];
        if (!c.value[C]) continue;
        const O = e[b][C];
        if (O !== void 0)
          return O;
      }
      return "";
    }), p = d("align"), m = d("justify"), g = Fw();
    it(() => {
      s = u.value.subscribe((b) => {
        c.value = b;
        const v = e.gutter || 0;
        (!Array.isArray(v) && typeof v == "object" || Array.isArray(v) && (typeof v[0] == "object" || typeof v[1] == "object")) && (f.value = b);
      });
    }), un(() => {
      u.value.unsubscribe(s);
    });
    const w = _(() => {
      const b = [void 0, void 0], {
        gutter: v = 0
      } = e;
      return (Array.isArray(v) ? v : [v, void 0]).forEach((O, x) => {
        if (typeof O == "object")
          for (let P = 0; P < sr.length; P++) {
            const E = sr[P];
            if (f.value[E] && O[E] !== void 0) {
              b[x] = O[E];
              break;
            }
          }
        else
          b[x] = O;
      }), b;
    });
    Nw({
      gutter: w,
      supportFlexGap: g,
      wrap: _(() => e.wrap)
    });
    const h = _(() => K(o.value, {
      [`${o.value}-no-wrap`]: e.wrap === !1,
      [`${o.value}-${m.value}`]: m.value,
      [`${o.value}-${p.value}`]: p.value,
      [`${o.value}-rtl`]: i.value === "rtl"
    }, r.class, l.value)), S = _(() => {
      const b = w.value, v = {}, C = b[0] != null && b[0] > 0 ? `${b[0] / -2}px` : void 0, O = b[1] != null && b[1] > 0 ? `${b[1] / -2}px` : void 0;
      return C && (v.marginLeft = C, v.marginRight = C), g.value ? v.rowGap = `${b[1]}px` : O && (v.marginTop = O, v.marginBottom = O), v;
    });
    return () => {
      var b;
      return a($("div", H(H({}, r), {}, {
        class: h.value,
        style: y(y({}, S.value), r.style)
      }), [(b = n.default) === null || b === void 0 ? void 0 : b.call(n)]));
    };
  }
});
function St() {
  return St = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, St.apply(this, arguments);
}
function qw(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Hn(e, t);
}
function si(e) {
  return si = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, si(e);
}
function Hn(e, t) {
  return Hn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Hn(e, t);
}
function Gw() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function xr(e, t, n) {
  return Gw() ? xr = Reflect.construct.bind() : xr = function(o, i, a) {
    var l = [null];
    l.push.apply(l, i);
    var s = Function.bind.apply(o, l), u = new s();
    return a && Hn(u, a.prototype), u;
  }, xr.apply(null, arguments);
}
function Uw(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function ui(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ui = function(r) {
    if (r === null || !Uw(r)) return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r)) return t.get(r);
      t.set(r, o);
    }
    function o() {
      return xr(r, arguments, si(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Hn(o, r);
  }, ui(e);
}
var Xw = /%[sdj%]/g, af = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (af = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function ci(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function Pe(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, i = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var a = e.replace(Xw, function(l) {
      if (l === "%%")
        return "%";
      if (o >= i)
        return l;
      switch (l) {
        case "%s":
          return String(n[o++]);
        case "%d":
          return Number(n[o++]);
        case "%j":
          try {
            return JSON.stringify(n[o++]);
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
function Yw(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function ce(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Yw(t) && typeof e == "string" && !e);
}
function Kw(e, t, n) {
  var r = [], o = 0, i = e.length;
  function a(l) {
    r.push.apply(r, l || []), o++, o === i && n(r);
  }
  e.forEach(function(l) {
    t(l, a);
  });
}
function ws(e, t, n) {
  var r = 0, o = e.length;
  function i(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var l = r;
    r = r + 1, l < o ? t(e[l], i) : n([]);
  }
  i([]);
}
function Zw(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var Cs = /* @__PURE__ */ function(e) {
  qw(t, e);
  function t(n, r) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = n, o.fields = r, o;
  }
  return t;
}(/* @__PURE__ */ ui(Error));
function Qw(e, t, n, r, o) {
  if (t.first) {
    var i = new Promise(function(d, p) {
      var m = function(h) {
        return r(h), h.length ? p(new Cs(h, ci(h))) : d(o);
      }, g = Zw(e);
      ws(g, n, m);
    });
    return i.catch(function(d) {
      return d;
    }), i;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), s = l.length, u = 0, f = [], c = new Promise(function(d, p) {
    var m = function(w) {
      if (f.push.apply(f, w), u++, u === s)
        return r(f), f.length ? p(new Cs(f, ci(f))) : d(o);
    };
    l.length || (r(f), d(o)), l.forEach(function(g) {
      var w = e[g];
      a.indexOf(g) !== -1 ? ws(w, n, m) : Kw(w, n, m);
    });
  });
  return c.catch(function(d) {
    return d;
  }), c;
}
function Jw(e) {
  return !!(e && e.message !== void 0);
}
function eC(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function $s(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = eC(t, e.fullFields) : r = t[n.field || e.fullField], Jw(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function Ss(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = St({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var lf = function(t, n, r, o, i, a) {
  t.required && (!r.hasOwnProperty(t.field) || ce(n, a || t.type)) && o.push(Pe(i.messages.required, t.fullField));
}, tC = function(t, n, r, o, i) {
  (/^\s+$/.test(n) || n === "") && o.push(Pe(i.messages.whitespace, t.fullField));
}, fr, nC = function() {
  if (fr)
    return fr;
  var e = "[a-fA-F\\d:]", t = function(v) {
    return v && v.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", o = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + n + "$)|(?:^" + o + "$)"), a = new RegExp("^" + n + "$"), l = new RegExp("^" + o + "$"), s = function(v) {
    return v && v.exact ? i : new RegExp("(?:" + t(v) + n + t(v) + ")|(?:" + t(v) + o + t(v) + ")", "g");
  };
  s.v4 = function(b) {
    return b && b.exact ? a : new RegExp("" + t(b) + n + t(b), "g");
  }, s.v6 = function(b) {
    return b && b.exact ? l : new RegExp("" + t(b) + o + t(b), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", c = s.v4().source, d = s.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", w = "(?::\\d{2,5})?", h = '(?:[/?#][^\\s"]*)?', S = "(?:" + u + "|www\\.)" + f + "(?:localhost|" + c + "|" + d + "|" + p + m + g + ")" + w + h;
  return fr = new RegExp("(?:^" + S + "$)", "i"), fr;
}, Os = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, wn = {
  integer: function(t) {
    return wn.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return wn.number(t) && !wn.integer(t);
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
    return typeof t == "object" && !wn.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Os.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(nC());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Os.hex);
  }
}, rC = function(t, n, r, o, i) {
  if (t.required && n === void 0) {
    lf(t, n, r, o, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = t.type;
  a.indexOf(l) > -1 ? wn[l](n) || o.push(Pe(i.messages.types[l], t.fullField, t.type)) : l && typeof n !== t.type && o.push(Pe(i.messages.types[l], t.fullField, t.type));
}, oC = function(t, n, r, o, i) {
  var a = typeof t.len == "number", l = typeof t.min == "number", s = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, f = n, c = null, d = typeof n == "number", p = typeof n == "string", m = Array.isArray(n);
  if (d ? c = "number" : p ? c = "string" : m && (c = "array"), !c)
    return !1;
  m && (f = n.length), p && (f = n.replace(u, "_").length), a ? f !== t.len && o.push(Pe(i.messages[c].len, t.fullField, t.len)) : l && !s && f < t.min ? o.push(Pe(i.messages[c].min, t.fullField, t.min)) : s && !l && f > t.max ? o.push(Pe(i.messages[c].max, t.fullField, t.max)) : l && s && (f < t.min || f > t.max) && o.push(Pe(i.messages[c].range, t.fullField, t.min, t.max));
}, Bt = "enum", iC = function(t, n, r, o, i) {
  t[Bt] = Array.isArray(t[Bt]) ? t[Bt] : [], t[Bt].indexOf(n) === -1 && o.push(Pe(i.messages[Bt], t.fullField, t[Bt].join(", ")));
}, aC = function(t, n, r, o, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(Pe(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(n) || o.push(Pe(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, X = {
  required: lf,
  whitespace: tC,
  type: rC,
  range: oC,
  enum: iC,
  pattern: aC
}, lC = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ce(n, "string") && !t.required)
      return r();
    X.required(t, n, o, a, i, "string"), ce(n, "string") || (X.type(t, n, o, a, i), X.range(t, n, o, a, i), X.pattern(t, n, o, a, i), t.whitespace === !0 && X.whitespace(t, n, o, a, i));
  }
  r(a);
}, sC = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ce(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), n !== void 0 && X.type(t, n, o, a, i);
  }
  r(a);
}, uC = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (n === "" && (n = void 0), ce(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), n !== void 0 && (X.type(t, n, o, a, i), X.range(t, n, o, a, i));
  }
  r(a);
}, cC = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ce(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), n !== void 0 && X.type(t, n, o, a, i);
  }
  r(a);
}, fC = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ce(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), ce(n) || X.type(t, n, o, a, i);
  }
  r(a);
}, dC = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ce(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), n !== void 0 && (X.type(t, n, o, a, i), X.range(t, n, o, a, i));
  }
  r(a);
}, pC = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ce(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), n !== void 0 && (X.type(t, n, o, a, i), X.range(t, n, o, a, i));
  }
  r(a);
}, gC = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (n == null && !t.required)
      return r();
    X.required(t, n, o, a, i, "array"), n != null && (X.type(t, n, o, a, i), X.range(t, n, o, a, i));
  }
  r(a);
}, mC = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ce(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), n !== void 0 && X.type(t, n, o, a, i);
  }
  r(a);
}, hC = "enum", vC = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ce(n) && !t.required)
      return r();
    X.required(t, n, o, a, i), n !== void 0 && X[hC](t, n, o, a, i);
  }
  r(a);
}, yC = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ce(n, "string") && !t.required)
      return r();
    X.required(t, n, o, a, i), ce(n, "string") || X.pattern(t, n, o, a, i);
  }
  r(a);
}, bC = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ce(n, "date") && !t.required)
      return r();
    if (X.required(t, n, o, a, i), !ce(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), X.type(t, s, o, a, i), s && X.range(t, s.getTime(), o, a, i);
    }
  }
  r(a);
}, xC = function(t, n, r, o, i) {
  var a = [], l = Array.isArray(n) ? "array" : typeof n;
  X.required(t, n, o, a, i, l), r(a);
}, _o = function(t, n, r, o, i) {
  var a = t.type, l = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ce(n, a) && !t.required)
      return r();
    X.required(t, n, o, l, i, a), ce(n, a) || X.type(t, n, o, l, i);
  }
  r(l);
}, wC = function(t, n, r, o, i) {
  var a = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ce(n) && !t.required)
      return r();
    X.required(t, n, o, a, i);
  }
  r(a);
}, Pn = {
  string: lC,
  method: sC,
  number: uC,
  boolean: cC,
  regexp: fC,
  integer: dC,
  float: pC,
  array: gC,
  object: mC,
  enum: vC,
  pattern: yC,
  date: bC,
  url: _o,
  hex: _o,
  email: _o,
  required: xC,
  any: wC
};
function fi() {
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
var di = fi(), Xn = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = di, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var o = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(i) {
      var a = r[i];
      o.rules[i] = Array.isArray(a) ? a : [a];
    });
  }, t.messages = function(r) {
    return r && (this._messages = Ss(fi(), r)), this._messages;
  }, t.validate = function(r, o, i) {
    var a = this;
    o === void 0 && (o = {}), i === void 0 && (i = function() {
    });
    var l = r, s = o, u = i;
    if (typeof s == "function" && (u = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, l), Promise.resolve(l);
    function f(g) {
      var w = [], h = {};
      function S(v) {
        if (Array.isArray(v)) {
          var C;
          w = (C = w).concat.apply(C, v);
        } else
          w.push(v);
      }
      for (var b = 0; b < g.length; b++)
        S(g[b]);
      w.length ? (h = ci(w), u(w, h)) : u(null, l);
    }
    if (s.messages) {
      var c = this.messages();
      c === di && (c = fi()), Ss(c, s.messages), s.messages = c;
    } else
      s.messages = this.messages();
    var d = {}, p = s.keys || Object.keys(this.rules);
    p.forEach(function(g) {
      var w = a.rules[g], h = l[g];
      w.forEach(function(S) {
        var b = S;
        typeof b.transform == "function" && (l === r && (l = St({}, l)), h = l[g] = b.transform(h)), typeof b == "function" ? b = {
          validator: b
        } : b = St({}, b), b.validator = a.getValidationMethod(b), b.validator && (b.field = g, b.fullField = b.fullField || g, b.type = a.getType(b), d[g] = d[g] || [], d[g].push({
          rule: b,
          value: h,
          source: l,
          field: g
        }));
      });
    });
    var m = {};
    return Qw(d, s, function(g, w) {
      var h = g.rule, S = (h.type === "object" || h.type === "array") && (typeof h.fields == "object" || typeof h.defaultField == "object");
      S = S && (h.required || !h.required && g.value), h.field = g.field;
      function b(O, x) {
        return St({}, x, {
          fullField: h.fullField + "." + O,
          fullFields: h.fullFields ? [].concat(h.fullFields, [O]) : [O]
        });
      }
      function v(O) {
        O === void 0 && (O = []);
        var x = Array.isArray(O) ? O : [O];
        !s.suppressWarning && x.length && e.warning("async-validator:", x), x.length && h.message !== void 0 && (x = [].concat(h.message));
        var P = x.map($s(h, l));
        if (s.first && P.length)
          return m[h.field] = 1, w(P);
        if (!S)
          w(P);
        else {
          if (h.required && !g.value)
            return h.message !== void 0 ? P = [].concat(h.message).map($s(h, l)) : s.error && (P = [s.error(h, Pe(s.messages.required, h.field))]), w(P);
          var E = {};
          h.defaultField && Object.keys(g.value).map(function(D) {
            E[D] = h.defaultField;
          }), E = St({}, E, g.rule.fields);
          var A = {};
          Object.keys(E).forEach(function(D) {
            var N = E[D], V = Array.isArray(N) ? N : [N];
            A[D] = V.map(b.bind(null, D));
          });
          var F = new e(A);
          F.messages(s.messages), g.rule.options && (g.rule.options.messages = s.messages, g.rule.options.error = s.error), F.validate(g.value, g.rule.options || s, function(D) {
            var N = [];
            P && P.length && N.push.apply(N, P), D && D.length && N.push.apply(N, D), w(N.length ? N : null);
          });
        }
      }
      var C;
      if (h.asyncValidator)
        C = h.asyncValidator(h, g.value, v, g.source, s);
      else if (h.validator) {
        try {
          C = h.validator(h, g.value, v, g.source, s);
        } catch (O) {
          console.error == null || console.error(O), s.suppressValidatorError || setTimeout(function() {
            throw O;
          }, 0), v(O.message);
        }
        C === !0 ? v() : C === !1 ? v(typeof h.message == "function" ? h.message(h.fullField || h.field) : h.message || (h.fullField || h.field) + " fails") : C instanceof Array ? v(C) : C instanceof Error && v(C.message);
      }
      C && C.then && C.then(function() {
        return v();
      }, function(O) {
        return v(O);
      });
    }, function(g) {
      f(g);
    }, l);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Pn.hasOwnProperty(r.type))
      throw new Error(Pe("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var o = Object.keys(r), i = o.indexOf("message");
    return i !== -1 && o.splice(i, 1), o.length === 1 && o[0] === "required" ? Pn.required : Pn[this.getType(r)] || void 0;
  }, e;
}();
Xn.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Pn[t] = n;
};
Xn.warning = af;
Xn.messages = di;
Xn.validators = Pn;
function pt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function sf(e, t) {
  let n = e;
  for (let r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function uf(e, t, n, r) {
  if (!t.length)
    return n;
  const [o, ...i] = t;
  let a;
  return !e && typeof o == "number" ? a = [] : Array.isArray(e) ? a = [...e] : a = y({}, e), r && n === void 0 && i.length === 1 ? delete a[o][i[0]] : a[o] = uf(a[o], i, n, r), a;
}
function CC(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !sf(e, t.slice(0, -1)) ? e : uf(e, t, n, r);
}
function pi(e) {
  return pt(e);
}
function $C(e, t) {
  return sf(e, t);
}
function SC(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return CC(e, t, n, r);
}
function OC(e, t) {
  return e && e.some((n) => PC(n, t));
}
function _s(e) {
  return typeof e == "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function cf(e, t) {
  const n = Array.isArray(e) ? [...e] : y({}, e);
  return t && Object.keys(t).forEach((r) => {
    const o = n[r], i = t[r], a = _s(o) && _s(i);
    n[r] = a ? cf(o, i || {}) : i;
  }), n;
}
function _C(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return n.reduce((o, i) => cf(o, i), e);
}
function Ps(e, t) {
  let n = {};
  return t.forEach((r) => {
    const o = $C(e, r);
    n = SC(n, r, o);
  }), n;
}
function PC(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every((n, r) => t[r] === n);
}
const Oe = "'${name}' is not a valid ${type}", ro = {
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
    string: Oe,
    method: Oe,
    array: Oe,
    object: Oe,
    number: Oe,
    date: Oe,
    boolean: Oe,
    integer: Oe,
    float: Oe,
    regexp: Oe,
    email: Oe,
    url: Oe,
    hex: Oe
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
var oo = function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(f) {
      try {
        u(r.next(f));
      } catch (c) {
        a(c);
      }
    }
    function s(f) {
      try {
        u(r.throw(f));
      } catch (c) {
        a(c);
      }
    }
    function u(f) {
      f.done ? i(f.value) : o(f.value).then(l, s);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const TC = Xn;
function AC(e, t) {
  return e.replace(/\$\{\w+\}/g, (n) => {
    const r = n.slice(2, -1);
    return t[r];
  });
}
function gi(e, t, n, r, o) {
  return oo(this, void 0, void 0, function* () {
    const i = y({}, n);
    delete i.ruleIndex, delete i.trigger;
    let a = null;
    i && i.type === "array" && i.defaultField && (a = i.defaultField, delete i.defaultField);
    const l = new TC({
      [e]: [i]
    }), s = _C({}, ro, r.validateMessages);
    l.messages(s);
    let u = [];
    try {
      yield Promise.resolve(l.validate({
        [e]: t
      }, y({}, r)));
    } catch (d) {
      d.errors ? u = d.errors.map((p, m) => {
        let {
          message: g
        } = p;
        return (
          // Wrap VueNode with `key`
          ru(g) ? Vs(g, {
            key: `error_${m}`
          }) : g
        );
      }) : (console.error(d), u = [s.default()]);
    }
    if (!u.length && a)
      return (yield Promise.all(t.map((p, m) => gi(`${e}.${m}`, p, a, r, o)))).reduce((p, m) => [...p, ...m], []);
    const f = y(y(y({}, n), {
      name: e,
      enum: (n.enum || []).join(", ")
    }), o);
    return u.map((d) => typeof d == "string" ? AC(d, f) : d);
  });
}
function ff(e, t, n, r, o, i) {
  const a = e.join("."), l = n.map((u, f) => {
    const c = u.validator, d = y(y({}, u), {
      ruleIndex: f
    });
    return c && (d.validator = (p, m, g) => {
      let w = !1;
      const S = c(p, m, function() {
        for (var b = arguments.length, v = new Array(b), C = 0; C < b; C++)
          v[C] = arguments[C];
        Promise.resolve().then(() => {
          Pr(!w, "Your validator function has already return a promise. `callback` will be ignored."), w || g(...v);
        });
      });
      w = S && typeof S.then == "function" && typeof S.catch == "function", Pr(w, "`callback` is deprecated. Please return a promise instead."), w && S.then(() => {
        g();
      }).catch((b) => {
        g(b || " ");
      });
    }), d;
  }).sort((u, f) => {
    let {
      warningOnly: c,
      ruleIndex: d
    } = u, {
      warningOnly: p,
      ruleIndex: m
    } = f;
    return !!c == !!p ? d - m : c ? 1 : -1;
  });
  let s;
  if (o === !0)
    s = new Promise((u, f) => oo(this, void 0, void 0, function* () {
      for (let c = 0; c < l.length; c += 1) {
        const d = l[c], p = yield gi(a, t, d, r, i);
        if (p.length) {
          f([{
            errors: p,
            rule: d
          }]);
          return;
        }
      }
      u([]);
    }));
  else {
    const u = l.map((f) => gi(a, t, f, r, i).then((c) => ({
      errors: c,
      rule: f
    })));
    s = (o ? MC(u) : EC(u)).then((f) => Promise.reject(f));
  }
  return s.catch((u) => u), s;
}
function EC(e) {
  return oo(this, void 0, void 0, function* () {
    return Promise.all(e).then((t) => [].concat(...t));
  });
}
function MC(e) {
  return oo(this, void 0, void 0, function* () {
    let t = 0;
    return new Promise((n) => {
      e.forEach((r) => {
        r.then((o) => {
          o.errors.length && n([o]), t += 1, t === e.length && n([]);
        });
      });
    });
  });
}
const df = Symbol("formContextKey"), pf = (e) => {
  ue(df, e);
}, fa = () => pe(df, {
  name: _(() => {
  }),
  labelAlign: _(() => "right"),
  vertical: _(() => !1),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addField: (e, t) => {
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeField: (e) => {
  },
  model: _(() => {
  }),
  rules: _(() => {
  }),
  colon: _(() => {
  }),
  labelWrap: _(() => {
  }),
  labelCol: _(() => {
  }),
  requiredMark: _(() => !1),
  validateTrigger: _(() => {
  }),
  onValidate: () => {
  },
  validateMessages: _(() => ro)
}), gf = Symbol("formItemPrefixContextKey"), IC = (e) => {
  ue(gf, e);
}, jC = () => pe(gf, {
  prefixCls: _(() => "")
});
function FC(e) {
  return typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
}
const NC = () => ({
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
}), DC = ["xs", "sm", "md", "lg", "xl", "xxl"], mf = W({
  compatConfig: {
    MODE: 3
  },
  name: "ACol",
  inheritAttrs: !1,
  props: NC(),
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    const {
      gutter: o,
      supportFlexGap: i,
      wrap: a
    } = Dw(), {
      prefixCls: l,
      direction: s
    } = Qe("col", e), [u, f] = zw(l), c = _(() => {
      const {
        span: p,
        order: m,
        offset: g,
        push: w,
        pull: h
      } = e, S = l.value;
      let b = {};
      return DC.forEach((v) => {
        let C = {};
        const O = e[v];
        typeof O == "number" ? C.span = O : typeof O == "object" && (C = O || {}), b = y(y({}, b), {
          [`${S}-${v}-${C.span}`]: C.span !== void 0,
          [`${S}-${v}-order-${C.order}`]: C.order || C.order === 0,
          [`${S}-${v}-offset-${C.offset}`]: C.offset || C.offset === 0,
          [`${S}-${v}-push-${C.push}`]: C.push || C.push === 0,
          [`${S}-${v}-pull-${C.pull}`]: C.pull || C.pull === 0,
          [`${S}-rtl`]: s.value === "rtl"
        });
      }), K(S, {
        [`${S}-${p}`]: p !== void 0,
        [`${S}-order-${m}`]: m,
        [`${S}-offset-${g}`]: g,
        [`${S}-push-${w}`]: w,
        [`${S}-pull-${h}`]: h
      }, b, r.class, f.value);
    }), d = _(() => {
      const {
        flex: p
      } = e, m = o.value, g = {};
      if (m && m[0] > 0) {
        const w = `${m[0] / 2}px`;
        g.paddingLeft = w, g.paddingRight = w;
      }
      if (m && m[1] > 0 && !i.value) {
        const w = `${m[1] / 2}px`;
        g.paddingTop = w, g.paddingBottom = w;
      }
      return p && (g.flex = FC(p), a.value === !1 && !g.minWidth && (g.minWidth = 0)), g;
    });
    return () => {
      var p;
      return u($("div", H(H({}, r), {}, {
        class: c.value,
        style: [d.value, r.style]
      }), [(p = n.default) === null || p === void 0 ? void 0 : p.call(n)]));
    };
  }
});
var RC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, name: "question-circle", theme: "outlined" };
function Ts(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      LC(e, o, n[o]);
    });
  }
  return e;
}
function LC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var da = function(t, n) {
  var r = Ts({}, t, n.attrs);
  return $(ie, Ts({}, r, {
    icon: RC
  }), null);
};
da.displayName = "QuestionCircleOutlined";
da.inheritAttrs = !1;
const pa = (e, t) => {
  let {
    slots: n,
    emit: r,
    attrs: o
  } = t;
  var i, a, l, s, u;
  const {
    prefixCls: f,
    htmlFor: c,
    labelCol: d,
    labelAlign: p,
    colon: m,
    required: g,
    requiredMark: w
  } = y(y({}, e), o), [h] = Kd("Form"), S = (i = e.label) !== null && i !== void 0 ? i : (a = n.label) === null || a === void 0 ? void 0 : a.call(n);
  if (!S) return null;
  const {
    vertical: b,
    labelAlign: v,
    labelCol: C,
    labelWrap: O,
    colon: x
  } = fa(), P = d || (C == null ? void 0 : C.value) || {}, E = p || (v == null ? void 0 : v.value), A = `${f}-item-label`, F = K(A, E === "left" && `${A}-left`, P.class, {
    [`${A}-wrap`]: !!O.value
  });
  let D = S;
  const N = m === !0 || (x == null ? void 0 : x.value) !== !1 && m !== !1;
  if (N && !b.value && typeof S == "string" && S.trim() !== "" && (D = S.replace(/[:|：]\s*$/, "")), e.tooltip || n.tooltip) {
    const I = $("span", {
      class: `${f}-item-tooltip`
    }, [$(Tw, {
      title: e.tooltip
    }, {
      default: () => [$(da, null, null)]
    })]);
    D = $(Te, null, [D, n.tooltip ? (l = n.tooltip) === null || l === void 0 ? void 0 : l.call(n, {
      class: `${f}-item-tooltip`
    }) : I]);
  }
  w === "optional" && !g && (D = $(Te, null, [D, $("span", {
    class: `${f}-item-optional`
  }, [((s = h.value) === null || s === void 0 ? void 0 : s.optional) || ((u = Pt.Form) === null || u === void 0 ? void 0 : u.optional)])]));
  const T = K({
    [`${f}-item-required`]: g,
    [`${f}-item-required-mark-optional`]: w === "optional",
    [`${f}-item-no-colon`]: !N
  });
  return $(mf, H(H({}, P), {}, {
    class: F
  }), {
    default: () => [$("label", {
      for: c,
      class: T,
      title: typeof S == "string" ? S : "",
      onClick: (I) => r("click", I)
    }, [D])]
  });
};
pa.displayName = "FormItemLabel";
pa.inheritAttrs = !1;
const HC = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-show-help`, r = `${t}-show-help-item`;
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
      [r]: {
        overflow: "hidden",
        transition: `height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,
        [`&${r}-appear, &${r}-enter`]: {
          transform: "translateY(-5px)",
          opacity: 0,
          "&-active": {
            transform: "translateY(0)",
            opacity: 1
          }
        },
        [`&${r}-leave-active`]: {
          transform: "translateY(-5px)"
        }
      }
    }
  };
}, kC = (e) => ({
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
}), As = (e, t) => {
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
}, BC = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [e.componentCls]: y(y(y({}, Bn(e)), kC(e)), {
      [`${t}-text`]: {
        display: "inline-block",
        paddingInlineEnd: e.paddingSM
      },
      // ================================================================
      // =                             Size                             =
      // ================================================================
      "&-small": y({}, As(e, e.controlHeightSM)),
      "&-large": y({}, As(e, e.controlHeightLG))
    })
  };
}, zC = (e) => {
  const {
    formItemCls: t,
    iconCls: n,
    componentCls: r,
    rootPrefixCls: o
  } = e;
  return {
    [t]: y(y({}, Bn(e)), {
      marginBottom: e.marginLG,
      verticalAlign: "top",
      "&-with-help": {
        transition: "none"
      },
      [`&-hidden,
        &-hidden.${o}-row`]: {
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
            [`${r}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${t}-optional`]: {
            display: "inline-block",
            marginInlineStart: e.marginXXS,
            color: e.colorTextDescription,
            [`${r}-hide-required-mark &`]: {
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
        [`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]: {
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
        animationName: ia,
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
}, VC = (e) => {
  const {
    componentCls: t,
    formItemCls: n,
    rootPrefixCls: r
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
      [`${n}-label.${r}-col-24 + ${n}-control`]: {
        minWidth: "unset"
      }
    }
  };
}, WC = (e) => {
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
}, Vt = (e) => ({
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
}), qC = (e) => {
  const {
    componentCls: t,
    formItemCls: n
  } = e;
  return {
    [`${n} ${n}-label`]: Vt(e),
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
}, GC = (e) => {
  const {
    componentCls: t,
    formItemCls: n,
    rootPrefixCls: r
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
      .${r}-col-24${n}-label,
      .${r}-col-xl-24${n}-label`]: Vt(e),
    [`@media (max-width: ${e.screenXSMax}px)`]: [qC(e), {
      [t]: {
        [`.${r}-col-xs-24${n}-label`]: Vt(e)
      }
    }],
    [`@media (max-width: ${e.screenSMMax}px)`]: {
      [t]: {
        [`.${r}-col-sm-24${n}-label`]: Vt(e)
      }
    },
    [`@media (max-width: ${e.screenMDMax}px)`]: {
      [t]: {
        [`.${r}-col-md-24${n}-label`]: Vt(e)
      }
    },
    [`@media (max-width: ${e.screenLGMax}px)`]: {
      [t]: {
        [`.${r}-col-lg-24${n}-label`]: Vt(e)
      }
    }
  };
}, ga = It("Form", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const r = mt(e, {
    formItemCls: `${e.componentCls}-item`,
    rootPrefixCls: n
  });
  return [BC(r), zC(r), HC(r), VC(r), WC(r), GC(r), Gx(r), ia];
}), UC = W({
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
      prefixCls: r,
      status: o
    } = jC(), i = _(() => `${r.value}-item-explain`), a = _(() => !!(e.errors && e.errors.length)), l = k(o.value), [, s] = ga(r);
    return Y([a, o], () => {
      a.value && (l.value = o.value);
    }), () => {
      var u, f;
      const c = Aw(`${r.value}-show-help-item`), d = Ui(`${r.value}-show-help-item`, c);
      return d.role = "alert", d.class = [s.value, i.value, n.class, `${r.value}-show-help`], $(kr, H(H({}, _c(`${r.value}-show-help`)), {}, {
        onAfterEnter: () => e.onErrorVisibleChanged(!0),
        onAfterLeave: () => e.onErrorVisibleChanged(!1)
      }), {
        default: () => [yi($(xi, H(H({}, d), {}, {
          tag: "div"
        }), {
          default: () => [(f = e.errors) === null || f === void 0 ? void 0 : f.map((p, m) => $("div", {
            key: m,
            class: l.value ? `${i.value}-${l.value}` : ""
          }, [p]))]
        }), [[qs, !!(!((u = e.errors) === null || u === void 0) && u.length)]])]
      });
    };
  }
}), XC = W({
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
    const r = fa(), {
      wrapperCol: o
    } = r, i = y({}, r);
    return delete i.labelCol, delete i.wrapperCol, pf(i), IC({
      prefixCls: _(() => e.prefixCls),
      status: _(() => e.status)
    }), () => {
      var a, l, s;
      const {
        prefixCls: u,
        wrapperCol: f,
        marginBottom: c,
        onErrorVisibleChanged: d,
        help: p = (a = n.help) === null || a === void 0 ? void 0 : a.call(n),
        errors: m = Mt((l = n.errors) === null || l === void 0 ? void 0 : l.call(n)),
        // hasFeedback,
        // status,
        extra: g = (s = n.extra) === null || s === void 0 ? void 0 : s.call(n)
      } = e, w = `${u}-item`, h = f || (o == null ? void 0 : o.value) || {}, S = K(`${w}-control`, h.class);
      return $(mf, H(H({}, h), {}, {
        class: S
      }), {
        default: () => {
          var b;
          return $(Te, null, [$("div", {
            class: `${w}-control-input`
          }, [$("div", {
            class: `${w}-control-input-content`
          }, [(b = n.default) === null || b === void 0 ? void 0 : b.call(n)])]), c !== null || m.length ? $("div", {
            style: {
              display: "flex",
              flexWrap: "nowrap"
            }
          }, [$(UC, {
            errors: m,
            help: p,
            class: `${w}-explain-connected`,
            onErrorVisibleChanged: d
          }, null), !!c && $("div", {
            style: {
              width: 0,
              height: `${c}px`
            }
          }, null)]) : null, g ? $("div", {
            class: `${w}-extra`
          }, [g]) : null]);
        }
      });
    };
  }
});
function YC(e) {
  const t = z(e.value.slice());
  let n = null;
  return Ye(() => {
    clearTimeout(n), n = setTimeout(() => {
      t.value = e.value;
    }, e.value.length ? 0 : 10);
  }), t;
}
zr("success", "warning", "error", "validating", "");
const KC = {
  success: Lt,
  warning: Ht,
  error: Rt,
  validating: fn
};
function Po(e, t, n) {
  let r = e;
  const o = t;
  let i = 0;
  try {
    for (let a = o.length; i < a - 1 && !(!r && !n); ++i) {
      const l = o[i];
      if (l in r)
        r = r[l];
      else {
        if (n)
          throw Error("please transfer a valid name path to form item!");
        break;
      }
    }
    if (n && !r)
      throw Error("please transfer a valid name path to form item!");
  } catch {
    console.error("please transfer a valid name path to form item!");
  }
  return {
    o: r,
    k: o[i],
    v: r ? r[o[i]] : void 0
  };
}
const ZC = () => ({
  htmlFor: String,
  prefixCls: String,
  label: q.any,
  help: q.any,
  extra: q.any,
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
  validateStatus: q.oneOf(zr("", "success", "warning", "error", "validating")),
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
let QC = 0;
const JC = "form_item", e$ = W({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItem",
  inheritAttrs: !1,
  __ANT_NEW_FORM_ITEM: !0,
  props: ZC(),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      expose: o
    } = t;
    Pr(e.prop === void 0, "`prop` is deprecated. Please use `name` instead.");
    const i = `form-item-${++QC}`, {
      prefixCls: a
    } = Qe("form", e), [l, s] = ga(a), u = z(), f = fa(), c = _(() => e.name || e.prop), d = z([]), p = z(!1), m = z(), g = _(() => {
      const L = c.value;
      return pi(L);
    }), w = _(() => {
      if (g.value.length) {
        const L = f.name.value, G = g.value.join("_");
        return L ? `${L}_${G}` : `${JC}_${G}`;
      } else
        return;
    }), h = () => {
      const L = f.model.value;
      if (!(!L || !c.value))
        return Po(L, g.value, !0).v;
    }, S = _(() => h()), b = z(br(S.value)), v = _(() => {
      let L = e.validateTrigger !== void 0 ? e.validateTrigger : f.validateTrigger.value;
      return L = L === void 0 ? "change" : L, pt(L);
    }), C = _(() => {
      let L = f.rules.value;
      const G = e.rules, Z = e.required !== void 0 ? {
        required: !!e.required,
        trigger: v.value
      } : [], te = Po(L, g.value);
      L = L ? te.o[te.k] || te.v : [];
      const ae = [].concat(G || L || []);
      return xx(ae, (fe) => fe.required) ? ae : ae.concat(Z);
    }), O = _(() => {
      const L = C.value;
      let G = !1;
      return L && L.length && L.every((Z) => Z.required ? (G = !0, !1) : !0), G || e.required;
    }), x = z();
    Ye(() => {
      x.value = e.validateStatus;
    });
    const P = _(() => {
      let L = {};
      return typeof e.label == "string" ? L.label = e.label : e.name && (L.label = String(e.name)), e.messageVariables && (L = y(y({}, L), e.messageVariables)), L;
    }), E = (L) => {
      if (g.value.length === 0)
        return;
      const {
        validateFirst: G = !1
      } = e, {
        triggerName: Z
      } = L || {};
      let te = C.value;
      if (Z && (te = te.filter((fe) => {
        const {
          trigger: Ve
        } = fe;
        return !Ve && !v.value.length ? !0 : pt(Ve || v.value).includes(Z);
      })), !te.length)
        return Promise.resolve();
      const ae = ff(g.value, S.value, te, y({
        validateMessages: f.validateMessages.value
      }, L), G, P.value);
      return x.value = "validating", d.value = [], ae.catch((fe) => fe).then(function() {
        let fe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (x.value === "validating") {
          const Ve = fe.filter((We) => We && We.errors.length);
          x.value = Ve.length ? "error" : "success", d.value = Ve.map((We) => We.errors), f.onValidate(c.value, !d.value.length, d.value.length ? Qt(d.value[0]) : null);
        }
      }), ae;
    }, A = () => {
      E({
        triggerName: "blur"
      });
    }, F = () => {
      if (p.value) {
        p.value = !1;
        return;
      }
      E({
        triggerName: "change"
      });
    }, D = () => {
      x.value = e.validateStatus, p.value = !1, d.value = [];
    }, N = () => {
      var L;
      x.value = e.validateStatus, p.value = !0, d.value = [];
      const G = f.model.value || {}, Z = S.value, te = Po(G, g.value, !0);
      Array.isArray(Z) ? te.o[te.k] = [].concat((L = b.value) !== null && L !== void 0 ? L : []) : te.o[te.k] = b.value, rt(() => {
        p.value = !1;
      });
    }, V = _(() => e.htmlFor === void 0 ? w.value : e.htmlFor), T = () => {
      const L = V.value;
      if (!L || !m.value)
        return;
      const G = m.value.$el.querySelector(`[id="${L}"]`);
      G && G.focus && G.focus();
    };
    o({
      onFieldBlur: A,
      onFieldChange: F,
      clearValidate: D,
      resetField: N
    }), My({
      id: w,
      onFieldBlur: () => {
        e.autoLink && A();
      },
      onFieldChange: () => {
        e.autoLink && F();
      },
      clearValidate: D
    }, _(() => !!(e.autoLink && f.model.value && c.value)));
    let I = !1;
    Y(c, (L) => {
      L ? I || (I = !0, f.addField(i, {
        fieldValue: S,
        fieldId: w,
        fieldName: c,
        resetField: N,
        clearValidate: D,
        namePath: g,
        validateRules: E,
        rules: C
      })) : (I = !1, f.removeField(i));
    }, {
      immediate: !0
    }), un(() => {
      f.removeField(i);
    });
    const j = YC(d), R = _(() => e.validateStatus !== void 0 ? e.validateStatus : j.value.length ? "error" : x.value), M = _(() => ({
      [`${a.value}-item`]: !0,
      [s.value]: !0,
      // Status
      [`${a.value}-item-has-feedback`]: R.value && e.hasFeedback,
      [`${a.value}-item-has-success`]: R.value === "success",
      [`${a.value}-item-has-warning`]: R.value === "warning",
      [`${a.value}-item-has-error`]: R.value === "error",
      [`${a.value}-item-is-validating`]: R.value === "validating",
      [`${a.value}-item-hidden`]: e.hidden
    })), J = He({});
    Lc.useProvide(J), Ye(() => {
      let L;
      if (e.hasFeedback) {
        const G = R.value && KC[R.value];
        L = G ? $("span", {
          class: K(`${a.value}-item-feedback-icon`, `${a.value}-item-feedback-icon-${R.value}`)
        }, [$(G, null, null)]) : null;
      }
      y(J, {
        status: R.value,
        hasFeedback: e.hasFeedback,
        feedbackIcon: L,
        isFormItemInput: !0
      });
    });
    const U = z(null), xe = z(!1), Fe = () => {
      if (u.value) {
        const L = getComputedStyle(u.value);
        U.value = parseInt(L.marginBottom, 10);
      }
    };
    it(() => {
      Y(xe, () => {
        xe.value && Fe();
      }, {
        flush: "post",
        immediate: !0
      });
    });
    const we = (L) => {
      L || (U.value = null);
    };
    return () => {
      var L, G;
      if (e.noStyle) return (L = n.default) === null || L === void 0 ? void 0 : L.call(n);
      const Z = (G = e.help) !== null && G !== void 0 ? G : n.help ? Mt(n.help()) : null, te = !!(Z != null && Array.isArray(Z) && Z.length || j.value.length);
      return xe.value = te, l($("div", {
        class: [M.value, te ? `${a.value}-item-with-help` : "", r.class],
        ref: u
      }, [$(Ww, H(H({}, r), {}, {
        class: `${a.value}-item-row`,
        key: "row"
      }), {
        default: () => {
          var ae, fe;
          return $(Te, null, [$(pa, H(H({}, e), {}, {
            htmlFor: V.value,
            required: O.value,
            requiredMark: f.requiredMark.value,
            prefixCls: a.value,
            onClick: T,
            label: e.label
          }), {
            label: n.label,
            tooltip: n.tooltip
          }), $(XC, H(H({}, e), {}, {
            errors: Z != null ? pt(Z) : j.value,
            marginBottom: U.value,
            prefixCls: a.value,
            status: R.value,
            ref: m,
            help: Z,
            extra: (ae = e.extra) !== null && ae !== void 0 ? ae : (fe = n.extra) === null || fe === void 0 ? void 0 : fe.call(n),
            onErrorVisibleChanged: we
          }), {
            default: n.default
          })]);
        }
      }), !!U.value && $("div", {
        class: `${a.value}-margin-offset`,
        style: {
          marginBottom: `-${U.value}px`
        }
      }, null)]));
    };
  }
});
function hf(e) {
  let t = !1, n = e.length;
  const r = [];
  return e.length ? new Promise((o, i) => {
    e.forEach((a, l) => {
      a.catch((s) => (t = !0, s)).then((s) => {
        n -= 1, r[l] = s, !(n > 0) && (t && i(r), o(r));
      });
    });
  }) : Promise.resolve([]);
}
function Es(e) {
  let t = !1;
  return e && e.length && e.every((n) => n.required ? (t = !0, !1) : !0), t;
}
function Ms(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function To(e, t, n) {
  let r = e;
  t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, "");
  const o = t.split(".");
  let i = 0;
  for (let a = o.length; i < a - 1 && !(!r && !n); ++i) {
    const l = o[i];
    if (l in r)
      r = r[l];
    else {
      if (n)
        throw new Error("please transfer a valid name path to validate!");
      break;
    }
  }
  return {
    o: r,
    k: o[i],
    v: r ? r[o[i]] : null,
    isValid: r && o[i] in r
  };
}
function t$(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k({}), n = arguments.length > 2 ? arguments[2] : void 0;
  const r = br(de(e)), o = He({}), i = z([]), a = (b) => {
    y(de(e), y(y({}, br(r)), b)), rt(() => {
      Object.keys(o).forEach((v) => {
        o[v] = {
          autoLink: !1,
          required: Es(de(t)[v])
        };
      });
    });
  }, l = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], v = arguments.length > 1 ? arguments[1] : void 0;
    return v.length ? b.filter((C) => {
      const O = Ms(C.trigger || "change");
      return Sx(O, v).length;
    }) : b;
  };
  let s = null;
  const u = function(b) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = arguments.length > 2 ? arguments[2] : void 0;
    const O = [], x = {};
    for (let A = 0; A < b.length; A++) {
      const F = b[A], D = To(de(e), F, C);
      if (!D.isValid) continue;
      x[F] = D.v;
      const N = l(de(t)[F], Ms(v && v.trigger));
      N.length && O.push(f(F, D.v, N, v || {}).then(() => ({
        name: F,
        errors: [],
        warnings: []
      })).catch((V) => {
        const T = [], I = [];
        return V.forEach((j) => {
          let {
            rule: {
              warningOnly: R
            },
            errors: M
          } = j;
          R ? I.push(...M) : T.push(...M);
        }), T.length ? Promise.reject({
          name: F,
          errors: T,
          warnings: I
        }) : {
          name: F,
          errors: T,
          warnings: I
        };
      }));
    }
    const P = hf(O);
    s = P;
    const E = P.then(() => s === P ? Promise.resolve(x) : Promise.reject([])).catch((A) => {
      const F = A.filter((D) => D && D.errors.length);
      return F.length ? Promise.reject({
        values: x,
        errorFields: F,
        outOfDate: s !== P
      }) : Promise.resolve(x);
    });
    return E.catch((A) => A), E;
  }, f = function(b, v, C) {
    let O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const x = ff([b], v, C, y({
      validateMessages: ro
    }, O), !!O.validateFirst);
    return o[b] ? (o[b].validateStatus = "validating", x.catch((P) => P).then(function() {
      let P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var E;
      if (o[b].validateStatus === "validating") {
        const A = P.filter((F) => F && F.errors.length);
        o[b].validateStatus = A.length ? "error" : "success", o[b].help = A.length ? A.map((F) => F.errors) : null, (E = n == null ? void 0 : n.onValidate) === null || E === void 0 || E.call(n, b, !A.length, A.length ? Qt(o[b].help[0]) : null);
      }
    }), x) : x.catch((P) => P);
  }, c = (b, v) => {
    let C = [], O = !0;
    b ? Array.isArray(b) ? C = b : C = [b] : (O = !1, C = i.value);
    const x = u(C, v || {}, O);
    return x.catch((P) => P), x;
  }, d = (b) => {
    let v = [];
    b ? Array.isArray(b) ? v = b : v = [b] : v = i.value, v.forEach((C) => {
      o[C] && y(o[C], {
        validateStatus: "",
        help: null
      });
    });
  }, p = (b) => {
    const v = {
      autoLink: !1
    }, C = [], O = Array.isArray(b) ? b : [b];
    for (let x = 0; x < O.length; x++) {
      const P = O[x];
      (P == null ? void 0 : P.validateStatus) === "error" && (v.validateStatus = "error", P.help && C.push(P.help)), v.required = v.required || (P == null ? void 0 : P.required);
    }
    return v.help = C, v;
  };
  let m = r, g = !0;
  const w = (b) => {
    const v = [];
    i.value.forEach((C) => {
      const O = To(b, C, !1), x = To(m, C, !1);
      (g && (n == null ? void 0 : n.immediate) && O.isValid || !Gi(O.v, x.v)) && v.push(C);
    }), c(v, {
      trigger: "change"
    }), g = !1, m = br(Qt(b));
  }, h = n == null ? void 0 : n.debounce;
  let S = !0;
  return Y(t, () => {
    i.value = t ? Object.keys(de(t)) : [], !S && n && n.validateOnRuleChange && c(), S = !1;
  }, {
    deep: !0,
    immediate: !0
  }), Y(i, () => {
    const b = {};
    i.value.forEach((v) => {
      b[v] = y({}, o[v], {
        autoLink: !1,
        required: Es(de(t)[v])
      }), delete o[v];
    });
    for (const v in o)
      Object.prototype.hasOwnProperty.call(o, v) && delete o[v];
    y(o, b);
  }, {
    immediate: !0
  }), Y(e, h && h.wait ? gx(w, h.wait, Mx(h, ["wait"])) : w, {
    immediate: n && !!n.immediate,
    deep: !0
  }), {
    modelRef: e,
    rulesRef: t,
    initialModel: r,
    validateInfos: o,
    resetFields: a,
    validate: c,
    validateField: f,
    mergeValidateInfo: p,
    clearValidate: d
  };
}
const n$ = () => ({
  layout: q.oneOf(zr("horizontal", "inline", "vertical")),
  labelCol: oe(),
  wrapperCol: oe(),
  colon: tt(),
  labelAlign: Or(),
  labelWrap: tt(),
  prefixCls: String,
  requiredMark: Xt([String, Boolean]),
  /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
  hideRequiredMark: tt(),
  model: q.object,
  rules: oe(),
  validateMessages: oe(),
  validateOnRuleChange: tt(),
  // 提交失败自动滚动到第一个错误字段
  scrollToFirstError: Sr(),
  onSubmit: kt(),
  name: String,
  validateTrigger: Xt([String, Array]),
  size: Or(),
  disabled: tt(),
  onValuesChange: kt(),
  onFieldsChange: kt(),
  onFinish: kt(),
  onFinishFailed: kt(),
  onValidate: kt()
});
function r$(e, t) {
  return Gi(pt(e), pt(t));
}
const ut = W({
  compatConfig: {
    MODE: 3
  },
  name: "AForm",
  inheritAttrs: !1,
  props: tu(n$(), {
    layout: "horizontal",
    hideRequiredMark: !1,
    colon: !0
  }),
  Item: e$,
  useForm: t$,
  // emits: ['finishFailed', 'submit', 'finish', 'validate'],
  setup(e, t) {
    let {
      emit: n,
      slots: r,
      expose: o,
      attrs: i
    } = t;
    const {
      prefixCls: a,
      direction: l,
      form: s,
      size: u,
      disabled: f
    } = Qe("form", e), c = _(() => e.requiredMark === "" || e.requiredMark), d = _(() => {
      var j;
      return c.value !== void 0 ? c.value : s && ((j = s.value) === null || j === void 0 ? void 0 : j.requiredMark) !== void 0 ? s.value.requiredMark : !e.hideRequiredMark;
    });
    Gu(u), fu(f);
    const p = _(() => {
      var j, R;
      return (j = e.colon) !== null && j !== void 0 ? j : (R = s.value) === null || R === void 0 ? void 0 : R.colon;
    }), {
      validateMessages: m
    } = qd(), g = _(() => y(y(y({}, ro), m.value), e.validateMessages)), [w, h] = ga(a), S = _(() => K(a.value, {
      [`${a.value}-${e.layout}`]: !0,
      [`${a.value}-hide-required-mark`]: d.value === !1,
      [`${a.value}-rtl`]: l.value === "rtl",
      [`${a.value}-${u.value}`]: u.value
    }, h.value)), b = k(), v = {}, C = (j, R) => {
      v[j] = R;
    }, O = (j) => {
      delete v[j];
    }, x = (j) => {
      const R = !!j, M = R ? pt(j).map(pi) : [];
      return R ? Object.values(v).filter((J) => M.findIndex((U) => r$(U, J.fieldName.value)) > -1) : Object.values(v);
    }, P = (j) => {
      if (!e.model) {
        nt(!1, "Form", "model is required for resetFields to work.");
        return;
      }
      x(j).forEach((R) => {
        R.resetField();
      });
    }, E = (j) => {
      x(j).forEach((R) => {
        R.clearValidate();
      });
    }, A = (j) => {
      const {
        scrollToFirstError: R
      } = e;
      if (n("finishFailed", j), R && j.errorFields.length) {
        let M = {};
        typeof R == "object" && (M = R), D(j.errorFields[0].name, M);
      }
    }, F = function() {
      return T(...arguments);
    }, D = function(j) {
      let R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const M = x(j ? [j] : void 0);
      if (M.length) {
        const J = M[0].fieldId.value, U = J ? document.getElementById(J) : null;
        U && Vg(U, y({
          scrollMode: "if-needed",
          block: "nearest"
        }, R));
      }
    }, N = function() {
      let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      if (j === !0) {
        const R = [];
        return Object.values(v).forEach((M) => {
          let {
            namePath: J
          } = M;
          R.push(J.value);
        }), Ps(e.model, R);
      } else
        return Ps(e.model, j);
    }, V = (j, R) => {
      if (nt(!(j instanceof Function), "Form", "validateFields/validateField/validate not support callback, please use promise instead"), !e.model)
        return nt(!1, "Form", "model is required for validateFields to work."), Promise.reject("Form `model` is required for validateFields to work.");
      const M = !!j, J = M ? pt(j).map(pi) : [], U = [];
      Object.values(v).forEach((we) => {
        var L;
        if (M || J.push(we.namePath.value), !(!((L = we.rules) === null || L === void 0) && L.value.length))
          return;
        const G = we.namePath.value;
        if (!M || OC(J, G)) {
          const Z = we.validateRules(y({
            validateMessages: g.value
          }, R));
          U.push(Z.then(() => ({
            name: G,
            errors: [],
            warnings: []
          })).catch((te) => {
            const ae = [], fe = [];
            return te.forEach((Ve) => {
              let {
                rule: {
                  warningOnly: We
                },
                errors: pn
              } = Ve;
              We ? fe.push(...pn) : ae.push(...pn);
            }), ae.length ? Promise.reject({
              name: G,
              errors: ae,
              warnings: fe
            }) : {
              name: G,
              errors: ae,
              warnings: fe
            };
          }));
        }
      });
      const xe = hf(U);
      b.value = xe;
      const Fe = xe.then(() => b.value === xe ? Promise.resolve(N(J)) : Promise.reject([])).catch((we) => {
        const L = we.filter((G) => G && G.errors.length);
        return Promise.reject({
          values: N(J),
          errorFields: L,
          outOfDate: b.value !== xe
        });
      });
      return Fe.catch((we) => we), Fe;
    }, T = function() {
      return V(...arguments);
    }, I = (j) => {
      j.preventDefault(), j.stopPropagation(), n("submit", j), e.model && V().then((M) => {
        n("finish", M);
      }).catch((M) => {
        A(M);
      });
    };
    return o({
      resetFields: P,
      clearValidate: E,
      validateFields: V,
      getFieldsValue: N,
      validate: F,
      scrollToField: D
    }), pf({
      model: _(() => e.model),
      name: _(() => e.name),
      labelAlign: _(() => e.labelAlign),
      labelCol: _(() => e.labelCol),
      labelWrap: _(() => e.labelWrap),
      wrapperCol: _(() => e.wrapperCol),
      vertical: _(() => e.layout === "vertical"),
      colon: p,
      requiredMark: d,
      validateTrigger: _(() => e.validateTrigger),
      rules: _(() => e.rules),
      addField: C,
      removeField: O,
      onValidate: (j, R, M) => {
        n("validate", j, R, M);
      },
      validateMessages: g
    }), Y(() => e.rules, () => {
      e.validateOnRuleChange && V();
    }), () => {
      var j;
      return w($("form", H(H({}, i), {}, {
        onSubmit: I,
        class: [S.value, i.class]
      }), [(j = r.default) === null || j === void 0 ? void 0 : j.call(r)]));
    };
  }
});
ut.useInjectFormItemContext = Iy;
ut.ItemRest = ii;
ut.install = function(e) {
  return e.component(ut.name, ut), e.component(ut.Item.name, ut.Item), e.component(ii.name, ii), e;
};
let Ao = y({}, Pt.Modal);
function o$(e) {
  e ? Ao = y(y({}, Ao), e) : Ao = y({}, Pt.Modal);
}
const mi = "internalMark", wr = W({
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
    nt(e.ANT_MARK__ === mi, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    const r = He({
      antLocale: y(y({}, e.locale), {
        exist: !0
      }),
      ANT_MARK__: mi
    });
    return ue("localeData", r), Y(() => e.locale, (o) => {
      o$(o && o.Modal), r.antLocale = y(y({}, o), {
        exist: !0
      });
    }, {
      immediate: !0
    }), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
wr.install = function(e) {
  return e.component(wr.name, wr), e;
};
const i$ = Vr(wr), io = W({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t, o, i = !1;
    const a = _(() => e.duration === void 0 ? 4.5 : e.duration), l = () => {
      a.value && !i && (o = setTimeout(() => {
        u();
      }, a.value * 1e3));
    }, s = () => {
      o && (clearTimeout(o), o = null);
    }, u = (c) => {
      c && c.stopPropagation(), s();
      const {
        onClose: d,
        noticeKey: p
      } = e;
      d && d(p);
    }, f = () => {
      s(), l();
    };
    return it(() => {
      l();
    }), Ws(() => {
      i = !0, s();
    }), Y([a, () => e.updateMark, () => e.visible], (c, d) => {
      let [p, m, g] = c, [w, h, S] = d;
      (p !== w || m !== h || g !== S && S) && f();
    }, {
      flush: "post"
    }), () => {
      var c, d;
      const {
        prefixCls: p,
        closable: m,
        closeIcon: g = (c = r.closeIcon) === null || c === void 0 ? void 0 : c.call(r),
        onClick: w,
        holder: h
      } = e, {
        class: S,
        style: b
      } = n, v = `${p}-notice`, C = Object.keys(n).reduce((x, P) => ((P.startsWith("data-") || P.startsWith("aria-") || P === "role") && (x[P] = n[P]), x), {}), O = $("div", H({
        class: K(v, S, {
          [`${v}-closable`]: m
        }),
        style: b,
        onMouseenter: s,
        onMouseleave: l,
        onClick: w
      }, C), [$("div", {
        class: `${v}-content`
      }, [(d = r.default) === null || d === void 0 ? void 0 : d.call(r)]), m ? $("a", {
        tabindex: 0,
        onClick: u,
        class: `${v}-close`
      }, [g || $("span", {
        class: `${v}-close-x`
      }, null)]) : null]);
      return h ? $(Gs, {
        to: h
      }, {
        default: () => O
      }) : O;
    };
  }
});
var a$ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let Is = 0;
const l$ = Date.now();
function js() {
  const e = Is;
  return Is += 1, `rcNotification_${l$}_${e}`;
}
const Lr = W({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
  setup(e, t) {
    let {
      attrs: n,
      expose: r,
      slots: o
    } = t;
    const i = /* @__PURE__ */ new Map(), a = k([]), l = _(() => {
      const {
        prefixCls: f,
        animation: c = "fade"
      } = e;
      let d = e.transitionName;
      return !d && c && (d = `${f}-${c}`), Ui(d);
    }), s = (f, c) => {
      const d = f.key || js(), p = y(y({}, f), {
        key: d
      }), {
        maxCount: m
      } = e, g = a.value.map((h) => h.notice.key).indexOf(d), w = a.value.concat();
      g !== -1 ? w.splice(g, 1, {
        notice: p,
        holderCallback: c
      }) : (m && a.value.length >= m && (p.key = w[0].notice.key, p.updateMark = js(), p.userPassKey = d, w.shift()), w.push({
        notice: p,
        holderCallback: c
      })), a.value = w;
    }, u = (f) => {
      a.value = Qt(a.value).filter((c) => {
        let {
          notice: {
            key: d,
            userPassKey: p
          }
        } = c;
        return (p || d) !== f;
      });
    };
    return r({
      add: s,
      remove: u,
      notices: a
    }), () => {
      var f;
      const {
        prefixCls: c,
        closeIcon: d = (f = o.closeIcon) === null || f === void 0 ? void 0 : f.call(o, {
          prefixCls: c
        })
      } = e, p = a.value.map((g, w) => {
        let {
          notice: h,
          holderCallback: S
        } = g;
        const b = w === a.value.length - 1 ? h.updateMark : void 0, {
          key: v,
          userPassKey: C
        } = h, {
          content: O
        } = h, x = y(y(y({
          prefixCls: c,
          closeIcon: typeof d == "function" ? d({
            prefixCls: c
          }) : d
        }, h), h.props), {
          key: v,
          noticeKey: C || v,
          updateMark: b,
          onClose: (P) => {
            var E;
            u(P), (E = h.onClose) === null || E === void 0 || E.call(h);
          },
          onClick: h.onClick
        });
        return S ? $("div", {
          key: v,
          class: `${c}-hook-holder`,
          ref: (P) => {
            typeof v > "u" || (P ? (i.set(v, P), S(P, x)) : i.delete(v));
          }
        }, null) : $(io, H(H({}, x), {}, {
          class: K(x.class, e.hashId)
        }), {
          default: () => [typeof O == "function" ? O({
            prefixCls: c
          }) : O]
        });
      }), m = {
        [c]: 1,
        [n.class]: !!n.class,
        [e.hashId]: !0
      };
      return $("div", {
        class: m,
        style: n.style || {
          top: "65px",
          left: "50%"
        }
      }, [$(xi, H({
        tag: "div"
      }, l.value), {
        default: () => [p]
      })]);
    };
  }
});
Lr.newInstance = function(t, n) {
  const r = t || {}, {
    name: o = "notification",
    getContainer: i,
    appContext: a,
    prefixCls: l,
    rootPrefixCls: s,
    transitionName: u,
    hasTransitionName: f,
    useStyle: c
  } = r, d = a$(r, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]), p = document.createElement("div");
  i ? i().appendChild(p) : document.body.appendChild(p);
  const m = W({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup(w, h) {
      let {
        attrs: S
      } = h;
      const b = z(), v = _(() => ye.getPrefixCls(o, l)), [, C] = c(v);
      return it(() => {
        n({
          notice(O) {
            var x;
            (x = b.value) === null || x === void 0 || x.add(O);
          },
          removeNotice(O) {
            var x;
            (x = b.value) === null || x === void 0 || x.remove(O);
          },
          destroy() {
            Ca(null, p), p.parentNode && p.parentNode.removeChild(p);
          },
          component: b
        });
      }), () => {
        const O = ye, x = O.getRootPrefixCls(s, v.value), P = f ? u : `${v.value}-${u}`;
        return $(Tn, H(H({}, O), {}, {
          prefixCls: x
        }), {
          default: () => [$(Lr, H(H({
            ref: b
          }, S), {}, {
            prefixCls: v.value,
            transitionName: P,
            hashId: C.value
          }), null)]
        });
      };
    }
  }), g = $(m, d);
  g.appContext = a || g.appContext, Ca(g, p);
};
let Fs = 0;
const s$ = Date.now();
function Ns() {
  const e = Fs;
  return Fs += 1, `rcNotification_${s$}_${e}`;
}
const u$ = W({
  name: "HookNotification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const o = /* @__PURE__ */ new Map(), i = _(() => e.notices), a = _(() => {
      let f = e.transitionName;
      if (!f && e.animation)
        switch (typeof e.animation) {
          case "string":
            f = e.animation;
            break;
          case "function":
            f = e.animation().name;
            break;
          case "object":
            f = e.animation.name;
            break;
          default:
            f = `${e.prefixCls}-fade`;
            break;
        }
      return Ui(f);
    }), l = (f) => e.remove(f), s = k({});
    Y(i, () => {
      const f = {};
      Object.keys(s.value).forEach((c) => {
        f[c] = [];
      }), e.notices.forEach((c) => {
        const {
          placement: d = "topRight"
        } = c.notice;
        d && (f[d] = f[d] || [], f[d].push(c));
      }), s.value = f;
    });
    const u = _(() => Object.keys(s.value));
    return () => {
      var f;
      const {
        prefixCls: c,
        closeIcon: d = (f = r.closeIcon) === null || f === void 0 ? void 0 : f.call(r, {
          prefixCls: c
        })
      } = e, p = u.value.map((m) => {
        var g, w;
        const h = s.value[m], S = (g = e.getClassName) === null || g === void 0 ? void 0 : g.call(e, m), b = (w = e.getStyles) === null || w === void 0 ? void 0 : w.call(e, m), v = h.map((x, P) => {
          let {
            notice: E,
            holderCallback: A
          } = x;
          const F = P === i.value.length - 1 ? E.updateMark : void 0, {
            key: D,
            userPassKey: N
          } = E, {
            content: V
          } = E, T = y(y(y({
            prefixCls: c,
            closeIcon: typeof d == "function" ? d({
              prefixCls: c
            }) : d
          }, E), E.props), {
            key: D,
            noticeKey: N || D,
            updateMark: F,
            onClose: (I) => {
              var j;
              l(I), (j = E.onClose) === null || j === void 0 || j.call(E);
            },
            onClick: E.onClick
          });
          return A ? $("div", {
            key: D,
            class: `${c}-hook-holder`,
            ref: (I) => {
              typeof D > "u" || (I ? (o.set(D, I), A(I, T)) : o.delete(D));
            }
          }, null) : $(io, H(H({}, T), {}, {
            class: K(T.class, e.hashId)
          }), {
            default: () => [typeof V == "function" ? V({
              prefixCls: c
            }) : V]
          });
        }), C = {
          [c]: 1,
          [`${c}-${m}`]: 1,
          [n.class]: !!n.class,
          [e.hashId]: !0,
          [S]: !!S
        };
        function O() {
          var x;
          h.length > 0 || (Reflect.deleteProperty(s.value, m), (x = e.onAllRemoved) === null || x === void 0 || x.call(e));
        }
        return $("div", {
          key: m,
          class: C,
          style: n.style || b || {
            top: "65px",
            left: "50%"
          }
        }, [$(xi, H(H({
          tag: "div"
        }, a.value), {}, {
          onAfterLeave: O
        }), {
          default: () => [v]
        })]);
      });
      return $(Ac, {
        getContainer: e.getContainer
      }, {
        default: () => [p]
      });
    };
  }
});
var c$ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const f$ = () => document.body;
let Ds = 0;
function d$() {
  const e = {};
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach((o) => {
    o && Object.keys(o).forEach((i) => {
      const a = o[i];
      a !== void 0 && (e[i] = a);
    });
  }), e;
}
function vf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    getContainer: t = f$,
    motion: n,
    prefixCls: r,
    maxCount: o,
    getClassName: i,
    getStyles: a,
    onAllRemoved: l
  } = e, s = c$(e, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]), u = z([]), f = z(), c = (h, S) => {
    const b = h.key || Ns(), v = y(y({}, h), {
      key: b
    }), C = u.value.map((x) => x.notice.key).indexOf(b), O = u.value.concat();
    C !== -1 ? O.splice(C, 1, {
      notice: v,
      holderCallback: S
    }) : (o && u.value.length >= o && (v.key = O[0].notice.key, v.updateMark = Ns(), v.userPassKey = b, O.shift()), O.push({
      notice: v,
      holderCallback: S
    })), u.value = O;
  }, d = (h) => {
    u.value = u.value.filter((S) => {
      let {
        notice: {
          key: b,
          userPassKey: v
        }
      } = S;
      return (v || b) !== h;
    });
  }, p = () => {
    u.value = [];
  }, m = () => $(u$, {
    ref: f,
    prefixCls: r,
    maxCount: o,
    notices: u.value,
    remove: d,
    getClassName: i,
    getStyles: a,
    animation: n,
    hashId: e.hashId,
    onAllRemoved: l,
    getContainer: t
  }, null), g = z([]), w = {
    open: (h) => {
      const S = d$(s, h);
      (S.key === null || S.key === void 0) && (S.key = `vc-notification-${Ds}`, Ds += 1), g.value = [...g.value, {
        type: "open",
        config: S
      }];
    },
    close: (h) => {
      g.value = [...g.value, {
        type: "close",
        key: h
      }];
    },
    destroy: () => {
      g.value = [...g.value, {
        type: "destroy"
      }];
    }
  };
  return Y(g, () => {
    g.value.length && (g.value.forEach((h) => {
      switch (h.type) {
        case "open":
          c(h.config);
          break;
        case "close":
          d(h.key);
          break;
        case "destroy":
          p();
          break;
      }
    }), g.value = []);
  }), [w, m];
}
const p$ = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    boxShadowSecondary: r,
    colorBgElevated: o,
    colorSuccess: i,
    colorError: a,
    colorWarning: l,
    colorInfo: s,
    fontSizeLG: u,
    motionEaseInOutCirc: f,
    motionDurationSlow: c,
    marginXS: d,
    paddingXS: p,
    borderRadiusLG: m,
    zIndexPopup: g,
    // Custom token
    messageNoticeContentPadding: w
  } = e, h = new se("MessageMoveIn", {
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
  }), S = new se("MessageMoveOut", {
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
      [t]: y(y({}, Bn(e)), {
        position: "fixed",
        top: d,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        pointerEvents: "none",
        zIndex: g,
        [`${t}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
          animationName: h,
          animationDuration: c,
          animationPlayState: "paused",
          animationTimingFunction: f
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: S,
          animationDuration: c,
          animationPlayState: "paused",
          animationTimingFunction: f
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
          fontSize: u
        },
        [`${t}-notice-content`]: {
          display: "inline-block",
          padding: w,
          background: o,
          borderRadius: m,
          boxShadow: r,
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
}, ma = It("Message", (e) => {
  const t = mt(e, {
    messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
  });
  return [p$(t)];
}, (e) => ({
  height: 150,
  zIndexPopup: e.zIndexPopupBase + 10
})), g$ = {
  info: $(dn, null, null),
  success: $(Lt, null, null),
  error: $(Rt, null, null),
  warning: $(Ht, null, null),
  loading: $(fn, null, null)
}, yf = W({
  name: "PureContent",
  inheritAttrs: !1,
  props: ["prefixCls", "type", "icon"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var r;
      return $("div", {
        class: K(`${e.prefixCls}-custom-content`, `${e.prefixCls}-${e.type}`)
      }, [e.icon || g$[e.type], $("span", null, [(r = n.default) === null || r === void 0 ? void 0 : r.call(n)])]);
    };
  }
});
W({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content"],
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    var o;
    const {
      getPrefixCls: i
    } = Si(), a = _(() => e.prefixCls || i("message")), [, l] = ma(a);
    return $(io, H(H({}, r), {}, {
      prefixCls: a.value,
      class: K(l.value, `${a.value}-notice-pure-panel`),
      noticeKey: "pure",
      duration: null
    }), {
      default: () => [$(yf, {
        prefixCls: a.value,
        type: e.type,
        icon: e.icon
      }, {
        default: () => [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)]
      })]
    });
  }
});
var m$ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const h$ = 8, v$ = 3, y$ = W({
  name: "Holder",
  inheritAttrs: !1,
  props: ["top", "prefixCls", "getContainer", "maxCount", "duration", "rtl", "transitionName", "onAllRemoved", "animation", "staticGetContainer"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    var r, o;
    const {
      getPrefixCls: i,
      getPopupContainer: a
    } = Qe("message", e), l = _(() => i("message", e.prefixCls)), [, s] = ma(l), u = () => {
      var g;
      const w = (g = e.top) !== null && g !== void 0 ? g : h$;
      return {
        left: "50%",
        transform: "translateX(-50%)",
        top: typeof w == "number" ? `${w}px` : w
      };
    }, f = () => K(s.value, e.rtl ? `${l.value}-rtl` : ""), c = () => {
      var g;
      return ji({
        prefixCls: l.value,
        animation: (g = e.animation) !== null && g !== void 0 ? g : "move-up",
        transitionName: e.transitionName
      });
    }, d = $("span", {
      class: `${l.value}-close-x`
    }, [$(qn, {
      class: `${l.value}-close-icon`
    }, null)]), [p, m] = vf({
      //@ts-ignore
      getStyles: u,
      prefixCls: l.value,
      getClassName: f,
      motion: c,
      closable: !1,
      closeIcon: d,
      duration: (r = e.duration) !== null && r !== void 0 ? r : v$,
      getContainer: (o = e.staticGetContainer) !== null && o !== void 0 ? o : a.value,
      maxCount: e.maxCount,
      onAllRemoved: e.onAllRemoved
    });
    return n(y(y({}, p), {
      prefixCls: l,
      hashId: s
    })), m;
  }
});
let Rs = 0;
function b$(e) {
  const t = z(null), n = Symbol("messageHolderKey"), r = (s) => {
    var u;
    (u = t.value) === null || u === void 0 || u.close(s);
  }, o = (s) => {
    if (!t.value) {
      const C = () => {
      };
      return C.then = () => {
      }, C;
    }
    const {
      open: u,
      prefixCls: f,
      hashId: c
    } = t.value, d = `${f}-notice`, {
      content: p,
      icon: m,
      type: g,
      key: w,
      class: h,
      onClose: S
    } = s, b = m$(s, ["content", "icon", "type", "key", "class", "onClose"]);
    let v = w;
    return v == null && (Rs += 1, v = `antd-message-${Rs}`), gd((C) => (u(y(y({}, b), {
      key: v,
      content: () => $(yf, {
        prefixCls: f,
        type: g,
        icon: typeof m == "function" ? m() : m
      }, {
        default: () => [typeof p == "function" ? p() : p]
      }),
      placement: "top",
      // @ts-ignore
      class: K(g && `${d}-${g}`, c, h),
      onClose: () => {
        S == null || S(), C();
      }
    })), () => {
      r(v);
    }));
  }, a = {
    open: o,
    destroy: (s) => {
      var u;
      s !== void 0 ? r(s) : (u = t.value) === null || u === void 0 || u.destroy();
    }
  };
  return ["info", "success", "warning", "error", "loading"].forEach((s) => {
    const u = (f, c, d) => {
      let p;
      f && typeof f == "object" && "content" in f ? p = f : p = {
        content: f
      };
      let m, g;
      typeof c == "function" ? g = c : (m = c, g = d);
      const w = y(y({
        onClose: g,
        duration: m
      }, p), {
        type: s
      });
      return o(w);
    };
    a[s] = u;
  }), [a, () => $(y$, H(H({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function x$(e) {
  return b$(e);
}
let bf = 3, xf, $e, w$ = 1, wf = "", Cf = "move-up", $f = !1, Sf = () => document.body, Of, _f = !1;
function C$() {
  return w$++;
}
function $$(e) {
  e.top !== void 0 && (xf = e.top, $e = null), e.duration !== void 0 && (bf = e.duration), e.prefixCls !== void 0 && (wf = e.prefixCls), e.getContainer !== void 0 && (Sf = e.getContainer, $e = null), e.transitionName !== void 0 && (Cf = e.transitionName, $e = null, $f = !0), e.maxCount !== void 0 && (Of = e.maxCount, $e = null), e.rtl !== void 0 && (_f = e.rtl);
}
function S$(e, t) {
  if ($e) {
    t($e);
    return;
  }
  Lr.newInstance({
    appContext: e.appContext,
    prefixCls: e.prefixCls || wf,
    rootPrefixCls: e.rootPrefixCls,
    transitionName: Cf,
    hasTransitionName: $f,
    style: {
      top: xf
    },
    getContainer: Sf || e.getPopupContainer,
    maxCount: Of,
    name: "message",
    useStyle: ma
  }, (n) => {
    if ($e) {
      t($e);
      return;
    }
    $e = n, t(n);
  });
}
const Pf = {
  info: dn,
  success: Lt,
  error: Rt,
  warning: Ht,
  loading: fn
}, O$ = Object.keys(Pf);
function _$(e) {
  const t = e.duration !== void 0 ? e.duration : bf, n = e.key || C$(), r = new Promise((i) => {
    const a = () => (typeof e.onClose == "function" && e.onClose(), i(!0));
    S$(e, (l) => {
      l.notice({
        key: n,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: (s) => {
          let {
            prefixCls: u
          } = s;
          const f = Pf[e.type], c = f ? $(f, null, null) : "", d = K(`${u}-custom-content`, {
            [`${u}-${e.type}`]: e.type,
            [`${u}-rtl`]: _f === !0
          });
          return $("div", {
            class: d
          }, [typeof e.icon == "function" ? e.icon() : e.icon || c, $("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
        },
        onClose: a,
        onClick: e.onClick
      });
    });
  }), o = () => {
    $e && $e.removeNotice(n);
  };
  return o.then = (i, a) => r.then(i, a), o.promise = r, o;
}
function P$(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
const gt = {
  open: _$,
  config: $$,
  destroy(e) {
    if ($e)
      if (e) {
        const {
          removeNotice: t
        } = $e;
        t(e);
      } else {
        const {
          destroy: t
        } = $e;
        t(), $e = null;
      }
  }
};
function T$(e, t) {
  e[t] = (n, r, o) => P$(n) ? e.open(y(y({}, n), {
    type: t
  })) : (typeof r == "function" && (o = r, r = void 0), e.open({
    content: n,
    duration: r,
    type: t,
    onClose: o
  }));
}
O$.forEach((e) => T$(gt, e));
gt.warn = gt.warning;
gt.useMessage = x$;
const A$ = (e) => {
  const {
    componentCls: t,
    width: n,
    notificationMarginEdge: r
  } = e, o = new se("antNotificationTopFadeIn", {
    "0%": {
      marginTop: "-100%",
      opacity: 0
    },
    "100%": {
      marginTop: 0,
      opacity: 1
    }
  }), i = new se("antNotificationBottomFadeIn", {
    "0%": {
      marginBottom: "-100%",
      opacity: 0
    },
    "100%": {
      marginBottom: 0,
      opacity: 1
    }
  }), a = new se("antNotificationLeftFadeIn", {
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
        animationName: o
      }
    },
    [`&${t}-bottom`]: {
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: i
      }
    },
    [`&${t}-topLeft, &${t}-bottomLeft`]: {
      marginInlineEnd: 0,
      marginInlineStart: r,
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: a
      }
    }
  };
}, E$ = (e) => {
  const {
    iconCls: t,
    componentCls: n,
    // .ant-notification
    boxShadowSecondary: r,
    fontSizeLG: o,
    notificationMarginBottom: i,
    borderRadiusLG: a,
    colorSuccess: l,
    colorInfo: s,
    colorWarning: u,
    colorError: f,
    colorTextHeading: c,
    notificationBg: d,
    notificationPadding: p,
    notificationMarginEdge: m,
    motionDurationMid: g,
    motionEaseInOut: w,
    fontSize: h,
    lineHeight: S,
    width: b,
    notificationIconSize: v
  } = e, C = `${n}-notice`, O = new se("antNotificationFadeIn", {
    "0%": {
      left: {
        _skip_check_: !0,
        value: b
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
  }), x = new se("antNotificationFadeOut", {
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
      [n]: y(y(y(y({}, Bn(e)), {
        position: "fixed",
        zIndex: e.zIndexPopup,
        marginInlineEnd: m,
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
          animationDuration: g,
          animationPlayState: "paused"
        },
        [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]: {
          animationName: O,
          animationPlayState: "running"
        },
        [`${n}-fade-leave${n}-fade-leave-active`]: {
          animationName: x,
          animationPlayState: "running"
        }
      }), A$(e)), {
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
      [C]: {
        position: "relative",
        width: b,
        maxWidth: `calc(100vw - ${m * 2}px)`,
        marginBottom: i,
        marginInlineStart: "auto",
        padding: p,
        overflow: "hidden",
        lineHeight: S,
        wordWrap: "break-word",
        background: d,
        borderRadius: a,
        boxShadow: r,
        [`${n}-close-icon`]: {
          fontSize: h,
          cursor: "pointer"
        },
        [`${C}-message`]: {
          marginBottom: e.marginXS,
          color: c,
          fontSize: o,
          lineHeight: e.lineHeightLG
        },
        [`${C}-description`]: {
          fontSize: h
        },
        [`&${C}-closable ${C}-message`]: {
          paddingInlineEnd: e.paddingLG
        },
        [`${C}-with-icon ${C}-message`]: {
          marginBottom: e.marginXS,
          marginInlineStart: e.marginSM + v,
          fontSize: o
        },
        [`${C}-with-icon ${C}-description`]: {
          marginInlineStart: e.marginSM + v,
          fontSize: h
        },
        // Icon & color style in different selector level
        // https://github.com/ant-design/ant-design/issues/16503
        // https://github.com/ant-design/ant-design/issues/15512
        [`${C}-icon`]: {
          position: "absolute",
          fontSize: v,
          lineHeight: 0,
          // icon-font
          [`&-success${t}`]: {
            color: l
          },
          [`&-info${t}`]: {
            color: s
          },
          [`&-warning${t}`]: {
            color: u
          },
          [`&-error${t}`]: {
            color: f
          }
        },
        [`${C}-close`]: {
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
        [`${C}-btn`]: {
          float: "right",
          marginTop: e.marginSM
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${C}-pure-panel`]: {
        margin: 0
      }
    }
  ];
}, ha = It("Notification", (e) => {
  const t = e.paddingMD, n = e.paddingLG, r = mt(e, {
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
  return [E$(r)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50,
  width: 384
}));
function Tf(e, t) {
  return t || $("span", {
    class: `${e}-close-x`
  }, [$(qn, {
    class: `${e}-close-icon`
  }, null)]);
}
$(dn, null, null), $(Lt, null, null), $(Rt, null, null), $(Ht, null, null), $(fn, null, null);
const M$ = {
  success: Lt,
  info: dn,
  error: Rt,
  warning: Ht
};
function Af(e) {
  let {
    prefixCls: t,
    icon: n,
    type: r,
    message: o,
    description: i,
    btn: a
  } = e, l = null;
  if (n)
    l = $("span", {
      class: `${t}-icon`
    }, [qt(n)]);
  else if (r) {
    const s = M$[r];
    l = $(s, {
      class: `${t}-icon ${t}-icon-${r}`
    }, null);
  }
  return $("div", {
    class: K({
      [`${t}-with-icon`]: l
    }),
    role: "alert"
  }, [l, $("div", {
    class: `${t}-message`
  }, [o]), $("div", {
    class: `${t}-description`
  }, [i]), a && $("div", {
    class: `${t}-btn`
  }, [a])]);
}
W({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "icon", "type", "message", "description", "btn", "closeIcon"],
  setup(e) {
    const {
      getPrefixCls: t
    } = Qe("notification", e), n = _(() => e.prefixCls || t("notification")), r = _(() => `${n.value}-notice`), [, o] = ha(n);
    return () => $(io, H(H({}, e), {}, {
      prefixCls: n.value,
      class: K(o.value, `${r.value}-pure-panel`),
      noticeKey: "pure",
      duration: null,
      closable: e.closable,
      closeIcon: Tf(n.value, e.closeIcon)
    }), {
      default: () => [$(Af, {
        prefixCls: r.value,
        icon: e.icon,
        type: e.type,
        message: e.message,
        description: e.description,
        btn: e.btn
      }, null)]
    });
  }
});
function Ef(e, t, n) {
  let r;
  switch (t = typeof t == "number" ? `${t}px` : t, n = typeof n == "number" ? `${n}px` : n, e) {
    case "top":
      r = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: t,
        bottom: "auto"
      };
      break;
    case "topLeft":
      r = {
        left: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "topRight":
      r = {
        right: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "bottom":
      r = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom: n
      };
      break;
    case "bottomLeft":
      r = {
        left: 0,
        top: "auto",
        bottom: n
      };
      break;
    default:
      r = {
        right: 0,
        top: "auto",
        bottom: n
      };
      break;
  }
  return r;
}
function I$(e) {
  return {
    name: `${e}-fade`
  };
}
var j$ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ls = 24, F$ = 4.5, N$ = W({
  name: "Holder",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content", "onAllRemoved"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    const {
      getPrefixCls: r,
      getPopupContainer: o
    } = Qe("notification", e), i = _(() => e.prefixCls || r("notification")), a = (d) => {
      var p, m;
      return Ef(d, (p = e.top) !== null && p !== void 0 ? p : Ls, (m = e.bottom) !== null && m !== void 0 ? m : Ls);
    }, [, l] = ha(i), s = () => K(l.value, {
      [`${i.value}-rtl`]: e.rtl
    }), u = () => I$(i.value), [f, c] = vf({
      prefixCls: i.value,
      getStyles: a,
      getClassName: s,
      motion: u,
      closable: !0,
      closeIcon: Tf(i.value),
      duration: F$,
      getContainer: () => {
        var d, p;
        return ((d = e.getPopupContainer) === null || d === void 0 ? void 0 : d.call(e)) || ((p = o.value) === null || p === void 0 ? void 0 : p.call(o)) || document.body;
      },
      maxCount: e.maxCount,
      hashId: l.value,
      onAllRemoved: e.onAllRemoved
    });
    return n(y(y({}, f), {
      prefixCls: i.value,
      hashId: l
    })), c;
  }
});
function D$(e) {
  const t = z(null), n = Symbol("notificationHolderKey"), r = (l) => {
    if (!t.value)
      return;
    const {
      open: s,
      prefixCls: u,
      hashId: f
    } = t.value, c = `${u}-notice`, {
      message: d,
      description: p,
      icon: m,
      type: g,
      btn: w,
      class: h
    } = l, S = j$(l, ["message", "description", "icon", "type", "btn", "class"]);
    return s(y(y({
      placement: "topRight"
    }, S), {
      content: () => $(Af, {
        prefixCls: c,
        icon: typeof m == "function" ? m() : m,
        type: g,
        message: typeof d == "function" ? d() : d,
        description: typeof p == "function" ? p() : p,
        btn: typeof w == "function" ? w() : w
      }, null),
      // @ts-ignore
      class: K(g && `${c}-${g}`, f, h)
    }));
  }, i = {
    open: r,
    destroy: (l) => {
      var s, u;
      l !== void 0 ? (s = t.value) === null || s === void 0 || s.close(l) : (u = t.value) === null || u === void 0 || u.destroy();
    }
  };
  return ["success", "info", "warning", "error"].forEach((l) => {
    i[l] = (s) => r(y(y({}, s), {
      type: l
    }));
  }), [i, () => $(N$, H(H({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function R$(e) {
  return D$(e);
}
const wt = {};
let Mf = 4.5, If = "24px", jf = "24px", hi = "", Ff = "topRight", Nf = () => document.body, Df = null, vi = !1, Rf;
function L$(e) {
  const {
    duration: t,
    placement: n,
    bottom: r,
    top: o,
    getContainer: i,
    closeIcon: a,
    prefixCls: l
  } = e;
  l !== void 0 && (hi = l), t !== void 0 && (Mf = t), n !== void 0 && (Ff = n), r !== void 0 && (jf = typeof r == "number" ? `${r}px` : r), o !== void 0 && (If = typeof o == "number" ? `${o}px` : o), i !== void 0 && (Nf = i), a !== void 0 && (Df = a), e.rtl !== void 0 && (vi = e.rtl), e.maxCount !== void 0 && (Rf = e.maxCount);
}
function H$(e, t) {
  let {
    prefixCls: n,
    placement: r = Ff,
    getContainer: o = Nf,
    top: i,
    bottom: a,
    closeIcon: l = Df,
    appContext: s
  } = e;
  const {
    getPrefixCls: u
  } = Z$(), f = u("notification", n || hi), c = `${f}-${r}-${vi}`, d = wt[c];
  if (d) {
    Promise.resolve(d).then((m) => {
      t(m);
    });
    return;
  }
  const p = K(`${f}-${r}`, {
    [`${f}-rtl`]: vi === !0
  });
  Lr.newInstance({
    name: "notification",
    prefixCls: n || hi,
    useStyle: ha,
    class: p,
    style: Ef(r, i ?? If, a ?? jf),
    appContext: s,
    getContainer: o,
    closeIcon: (m) => {
      let {
        prefixCls: g
      } = m;
      return $("span", {
        class: `${g}-close-x`
      }, [qt(l, {}, $(qn, {
        class: `${g}-close-icon`
      }, null))]);
    },
    maxCount: Rf,
    hasTransitionName: !0
  }, (m) => {
    wt[c] = m, t(m);
  });
}
const k$ = {
  success: aa,
  info: sa,
  error: ua,
  warning: la
};
function B$(e) {
  const {
    icon: t,
    type: n,
    description: r,
    message: o,
    btn: i
  } = e, a = e.duration === void 0 ? Mf : e.duration;
  H$(e, (l) => {
    l.notice({
      content: (s) => {
        let {
          prefixCls: u
        } = s;
        const f = `${u}-notice`;
        let c = null;
        if (t)
          c = () => $("span", {
            class: `${f}-icon`
          }, [qt(t)]);
        else if (n) {
          const d = k$[n];
          c = () => $(d, {
            class: `${f}-icon ${f}-icon-${n}`
          }, null);
        }
        return $("div", {
          class: c ? `${f}-with-icon` : ""
        }, [c && c(), $("div", {
          class: `${f}-message`
        }, [!r && c ? $("span", {
          class: `${f}-message-single-line-auto-margin`
        }, null) : null, qt(o)]), $("div", {
          class: `${f}-description`
        }, [qt(r)]), i ? $("span", {
          class: `${f}-btn`
        }, [qt(i)]) : null]);
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
const sn = {
  open: B$,
  close(e) {
    Object.keys(wt).forEach((t) => Promise.resolve(wt[t]).then((n) => {
      n.removeNotice(e);
    }));
  },
  config: L$,
  destroy() {
    Object.keys(wt).forEach((e) => {
      Promise.resolve(wt[e]).then((t) => {
        t.destroy();
      }), delete wt[e];
    });
  }
}, z$ = ["success", "info", "warning", "error"];
z$.forEach((e) => {
  sn[e] = (t) => sn.open(y(y({}, t), {
    type: e
  }));
});
sn.warn = sn.warning;
sn.useNotification = R$;
const V$ = `-ant-${Date.now()}-${Math.random()}`;
function W$(e, t) {
  const n = {}, r = (a, l) => {
    let s = a.clone();
    return s = (l == null ? void 0 : l(s)) || s, s.toRgbString();
  }, o = (a, l) => {
    const s = new me(a), u = Tt(s.toRgbString());
    n[`${l}-color`] = r(s), n[`${l}-color-disabled`] = u[1], n[`${l}-color-hover`] = u[4], n[`${l}-color-active`] = u[6], n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = u[0], n[`${l}-color-deprecated-border`] = u[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new me(t.primaryColor), l = Tt(a.toRgbString());
    l.forEach((u, f) => {
      n[`primary-${f + 1}`] = u;
    }), n["primary-color-deprecated-l-35"] = r(a, (u) => u.lighten(35)), n["primary-color-deprecated-l-20"] = r(a, (u) => u.lighten(20)), n["primary-color-deprecated-t-20"] = r(a, (u) => u.tint(20)), n["primary-color-deprecated-t-50"] = r(a, (u) => u.tint(50)), n["primary-color-deprecated-f-12"] = r(a, (u) => u.setAlpha(u.getAlpha() * 0.12));
    const s = new me(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(s, (u) => u.setAlpha(u.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(s, (u) => u.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim();
}
function q$(e, t) {
  const n = W$(e, t);
  ke() ? Mn(n, `${V$}-dynamic-theme`) : nt(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const G$ = (e) => {
  const [t, n] = zn();
  return Ho(_(() => ({
    theme: t.value,
    token: n.value,
    hashId: "",
    path: ["ant-design-icons", e.value]
  })), () => [{
    [`.${e.value}`]: y(y({}, Tg()), {
      [`.${e.value} .${e.value}-icon`]: {
        display: "block"
      }
    })
  }]);
};
function U$(e, t) {
  const n = _(() => (e == null ? void 0 : e.value) || {}), r = _(() => n.value.inherit === !1 || !(t != null && t.value) ? ku : t.value);
  return _(() => {
    if (!(e != null && e.value))
      return t == null ? void 0 : t.value;
    const i = y({}, r.value.components);
    return Object.keys(e.value.components || {}).forEach((a) => {
      i[a] = y(y({}, i[a]), e.value.components[a]);
    }), y(y(y({}, r.value), n.value), {
      token: y(y({}, r.value.token), n.value.token),
      components: i
    });
  });
}
var X$ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Y$ = "ant";
function Kt() {
  return ye.prefixCls || Y$;
}
function Lf() {
  return ye.iconPrefixCls || Ci;
}
const va = He({}), ye = He({});
Ye(() => {
  y(ye, va), ye.prefixCls = Kt(), ye.iconPrefixCls = Lf(), ye.getPrefixCls = (e, t) => t || (e ? `${ye.prefixCls}-${e}` : ye.prefixCls), ye.getRootPrefixCls = () => ye.prefixCls ? ye.prefixCls : Kt();
});
let Eo;
const K$ = (e) => {
  Eo && Eo(), Eo = Ye(() => {
    y(va, He(e)), y(ye, He(e));
  }), e.theme && q$(Kt(), e.theme);
}, Z$ = () => ({
  getPrefixCls: (e, t) => t || (e ? `${Kt()}-${e}` : Kt()),
  getIconPrefixCls: Lf,
  getRootPrefixCls: () => ye.prefixCls ? ye.prefixCls : Kt()
}), Tn = W({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: Gd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = Si(), o = (T, I) => {
      const {
        prefixCls: j = "ant"
      } = e;
      if (I) return I;
      const R = j || r.getPrefixCls("");
      return T ? `${R}-${T}` : R;
    }, i = _(() => e.iconPrefixCls || r.iconPrefixCls.value || Ci), a = _(() => i.value !== r.iconPrefixCls.value), l = _(() => {
      var T;
      return e.csp || ((T = r.csp) === null || T === void 0 ? void 0 : T.value);
    }), s = G$(i), u = U$(_(() => e.theme), _(() => {
      var T;
      return (T = r.theme) === null || T === void 0 ? void 0 : T.value;
    })), f = (T) => (e.renderEmpty || n.renderEmpty || r.renderEmpty || kg)(T), c = _(() => {
      var T, I;
      return (T = e.autoInsertSpaceInButton) !== null && T !== void 0 ? T : (I = r.autoInsertSpaceInButton) === null || I === void 0 ? void 0 : I.value;
    }), d = _(() => {
      var T;
      return e.locale || ((T = r.locale) === null || T === void 0 ? void 0 : T.value);
    });
    Y(d, () => {
      va.locale = d.value;
    }, {
      immediate: !0
    });
    const p = _(() => {
      var T;
      return e.direction || ((T = r.direction) === null || T === void 0 ? void 0 : T.value);
    }), m = _(() => {
      var T, I;
      return (T = e.space) !== null && T !== void 0 ? T : (I = r.space) === null || I === void 0 ? void 0 : I.value;
    }), g = _(() => {
      var T, I;
      return (T = e.virtual) !== null && T !== void 0 ? T : (I = r.virtual) === null || I === void 0 ? void 0 : I.value;
    }), w = _(() => {
      var T, I;
      return (T = e.dropdownMatchSelectWidth) !== null && T !== void 0 ? T : (I = r.dropdownMatchSelectWidth) === null || I === void 0 ? void 0 : I.value;
    }), h = _(() => {
      var T;
      return e.getTargetContainer !== void 0 ? e.getTargetContainer : (T = r.getTargetContainer) === null || T === void 0 ? void 0 : T.value;
    }), S = _(() => {
      var T;
      return e.getPopupContainer !== void 0 ? e.getPopupContainer : (T = r.getPopupContainer) === null || T === void 0 ? void 0 : T.value;
    }), b = _(() => {
      var T;
      return e.pageHeader !== void 0 ? e.pageHeader : (T = r.pageHeader) === null || T === void 0 ? void 0 : T.value;
    }), v = _(() => {
      var T;
      return e.input !== void 0 ? e.input : (T = r.input) === null || T === void 0 ? void 0 : T.value;
    }), C = _(() => {
      var T;
      return e.pagination !== void 0 ? e.pagination : (T = r.pagination) === null || T === void 0 ? void 0 : T.value;
    }), O = _(() => {
      var T;
      return e.form !== void 0 ? e.form : (T = r.form) === null || T === void 0 ? void 0 : T.value;
    }), x = _(() => {
      var T;
      return e.select !== void 0 ? e.select : (T = r.select) === null || T === void 0 ? void 0 : T.value;
    }), P = _(() => e.componentSize), E = _(() => e.componentDisabled), A = _(() => {
      var T, I;
      return (T = e.wave) !== null && T !== void 0 ? T : (I = r.wave) === null || I === void 0 ? void 0 : I.value;
    }), F = {
      csp: l,
      autoInsertSpaceInButton: c,
      locale: d,
      direction: p,
      space: m,
      virtual: g,
      dropdownMatchSelectWidth: w,
      getPrefixCls: o,
      iconPrefixCls: i,
      theme: _(() => {
        var T, I;
        return (T = u.value) !== null && T !== void 0 ? T : (I = r.theme) === null || I === void 0 ? void 0 : I.value;
      }),
      renderEmpty: f,
      getTargetContainer: h,
      getPopupContainer: S,
      pageHeader: b,
      input: v,
      pagination: C,
      form: O,
      select: x,
      componentSize: P,
      componentDisabled: E,
      transformCellText: _(() => e.transformCellText),
      wave: A
    }, D = _(() => {
      const T = u.value || {}, {
        algorithm: I,
        token: j
      } = T, R = X$(T, ["algorithm", "token"]), M = I && (!Array.isArray(I) || I.length > 0) ? $u(I) : void 0;
      return y(y({}, R), {
        theme: M,
        token: y(y({}, Xr), j)
      });
    }), N = _(() => {
      var T, I;
      let j = {};
      return d.value && (j = ((T = d.value.Form) === null || T === void 0 ? void 0 : T.defaultValidateMessages) || ((I = Pt.Form) === null || I === void 0 ? void 0 : I.defaultValidateMessages) || {}), e.form && e.form.validateMessages && (j = y(y({}, j), e.form.validateMessages)), j;
    });
    Ud(F), Wd({
      validateMessages: N
    }), Gu(P), fu(E);
    const V = (T) => {
      var I, j;
      let R = a.value ? s((I = n.default) === null || I === void 0 ? void 0 : I.call(n)) : (j = n.default) === null || j === void 0 ? void 0 : j.call(n);
      if (e.theme) {
        const M = /* @__PURE__ */ function() {
          return R;
        }();
        R = $(Ng, {
          value: D.value
        }, {
          default: () => [M]
        });
      }
      return $(i$, {
        locale: d.value || T,
        ANT_MARK__: mi
      }, {
        default: () => [R]
      });
    };
    return Ye(() => {
      p.value && (gt.config({
        rtl: p.value === "rtl"
      }), sn.config({
        rtl: p.value === "rtl"
      }));
    }), () => $(pu, {
      children: (T, I, j) => V(j)
    }, null);
  }
});
Tn.config = K$;
Tn.install = function(e) {
  e.component(Tn.name, Tn);
};
var Q$ = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, name: "up", theme: "outlined" };
function Hs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      J$(e, o, n[o]);
    });
  }
  return e;
}
function J$(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ya = function(t, n) {
  var r = Hs({}, t, n.attrs);
  return $(ie, Hs({}, r, {
    icon: Q$
  }), null);
};
ya.displayName = "UpOutlined";
ya.inheritAttrs = !1;
var e2 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z" } }] }, name: "inbox", theme: "outlined" };
function ks(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      t2(e, o, n[o]);
    });
  }
  return e;
}
function t2(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ba = function(t, n) {
  var r = ks({}, t, n.attrs);
  return $(ie, ks({}, r, {
    icon: e2
  }), null);
};
ba.displayName = "InboxOutlined";
ba.inheritAttrs = !1;
var n2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "upload", theme: "outlined" };
function Bs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      r2(e, o, n[o]);
    });
  }
  return e;
}
function r2(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var xa = function(t, n) {
  var r = Bs({}, t, n.attrs);
  return $(ie, Bs({}, r, {
    icon: n2
  }), null);
};
xa.displayName = "UploadOutlined";
xa.inheritAttrs = !1;
function Hf(e) {
  if (e instanceof Date) return new Date(e);
  if (e instanceof RegExp) return new RegExp(e);
  if (e === null || typeof e != "object") return e;
  let t = new e.constructor();
  for (let n in e)
    e.hasOwnProperty(n) && (t[n] = Hf(e[n]));
  return t;
}
const kf = /* @__PURE__ */ W({
  name: "ths-form",
  __name: "index",
  props: {
    formData: {
      type: Array,
      default: []
    },
    formType: {
      type: String,
      default: "form"
    }
  },
  emits: ["getValue", "resetValue"],
  setup(e, { expose: t, emit: n }) {
    const r = ut.useForm, o = e, i = k(o.formData), a = Hf(o.formData), l = k(o.formType), s = He({}), u = He({}), f = k(!1);
    i.value.map((v) => {
      v.type !== "slot" && (s[v.filedName] = v.value), v.rule && (u[v.filedName] = v.rule);
    });
    const { resetFields: c, validate: d, validateInfos: p } = r(s, u), m = () => d().then((v) => (console.log(v, Qt(s)), Qt(s))).catch((v) => (console.log("error", v), v)), g = () => {
      for (let v in s)
        s[v] = null;
      c();
    }, w = () => {
      f.value = !1, console.log("open", o.formData), a.length > 3 && (i.value = a);
    }, h = () => {
      f.value = !0, a.length > 3 ? i.value = a.slice(0, 3) : i.value = a, console.log("close", o.formData, i.value);
    };
    t({ onSubmit: m, reset: g });
    const S = { style: { width: "150px" } }, b = { span: 24 };
    return (v, C) => {
      const O = re("a-input"), x = re("a-switch"), P = re("a-textarea"), E = re("a-select"), A = re("a-radio-group"), F = re("a-checkbox-group"), D = re("a-date-picker"), N = re("a-range-picker"), V = re("a-form-item"), T = re("a-col"), I = re("a-button"), j = re("a-row"), R = re("a-form");
      return ne(), ve(R, {
        model: s,
        "label-col": S,
        "wrapper-col": b
      }, {
        default: ge(() => [
          $(j, { warp: !0 }, {
            default: ge(() => [
              (ne(!0), Ut(
                Te,
                null,
                Yf(i.value, (M, J) => (ne(), ve(T, {
                  key: J,
                  span: M.span || 12
                }, {
                  default: ge(() => [
                    $(V, Kf({
                      label: M.label,
                      rules: M.rule,
                      ref_for: !0
                    }, de(p)[M.filedName]), {
                      default: ge(() => [
                        M.type === "input" ? (ne(), ve(O, {
                          key: 0,
                          value: s[M.filedName],
                          "onUpdate:value": (U) => s[M.filedName] = U,
                          placeholder: M.placeholder,
                          disabled: M.disabled || !1,
                          style: st(M.style)
                        }, null, 8, ["value", "onUpdate:value", "placeholder", "disabled", "style"])) : Ce("v-if", !0),
                        M.type === "switch" ? (ne(), ve(x, {
                          key: 1,
                          checked: s[M.filedName],
                          "onUpdate:checked": (U) => s[M.filedName] = U,
                          placeholder: M.placeholder,
                          disabled: M.disabled || !1,
                          style: st(M.style)
                        }, null, 8, ["checked", "onUpdate:checked", "placeholder", "disabled", "style"])) : Ce("v-if", !0),
                        M.type === "textarea" ? (ne(), ve(P, {
                          key: 2,
                          rows: M.rows,
                          value: s[M.filedName],
                          "onUpdate:value": (U) => s[M.filedName] = U,
                          placeholder: M.placeholder,
                          maxlength: M.maxLength,
                          disabled: M.disabled || !1,
                          style: st(M.style),
                          showCount: M.showCount
                        }, null, 8, ["rows", "value", "onUpdate:value", "placeholder", "maxlength", "disabled", "style", "showCount"])) : Ce("v-if", !0),
                        M.type === "select" ? (ne(), ve(E, {
                          key: 3,
                          value: s[M.filedName],
                          "onUpdate:value": (U) => s[M.filedName] = U,
                          placeholder: M.placeholder,
                          options: M.selectValue,
                          disabled: M.disabled || !1,
                          style: st(M.style)
                        }, null, 8, ["value", "onUpdate:value", "placeholder", "options", "disabled", "style"])) : Ce("v-if", !0),
                        M.type === "radio" ? (ne(), ve(A, {
                          key: 4,
                          value: s[M.filedName],
                          "onUpdate:value": (U) => s[M.filedName] = U,
                          options: M.radioValue,
                          disabled: M.disabled || !1,
                          style: st(M.style)
                        }, null, 8, ["value", "onUpdate:value", "options", "disabled", "style"])) : Ce("v-if", !0),
                        M.type === "checkbox" ? (ne(), ve(F, {
                          key: 5,
                          value: s[M.filedName],
                          "onUpdate:value": (U) => s[M.filedName] = U,
                          options: M.checkboxValue,
                          style: st(M.style)
                        }, null, 8, ["value", "onUpdate:value", "options", "style"])) : Ce("v-if", !0),
                        M.type === "singleDate" ? (ne(), ve(D, {
                          key: 6,
                          value: s[M.filedName],
                          "onUpdate:value": (U) => s[M.filedName] = U,
                          placeholder: "请选择日期",
                          style: st(M.style)
                        }, null, 8, ["value", "onUpdate:value", "style"])) : Ce("v-if", !0),
                        M.type === "rangeDate" ? (ne(), ve(N, {
                          key: 7,
                          value: s[M.filedName],
                          "onUpdate:value": (U) => s[M.filedName] = U,
                          style: st([{ "min-width": "200px" }, M.style])
                        }, null, 8, ["value", "onUpdate:value", "style"])) : Ce("v-if", !0),
                        M.type === "slot" ? Jt(v.$slots, M.filedName, { key: 8 }) : Ce("v-if", !0)
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["label", "rules"])
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["span"]))),
                128
                /* KEYED_FRAGMENT */
              )),
              l.value === "searchForm" ? (ne(), ve(T, {
                key: 0,
                span: "6"
              }, {
                default: ge(() => [
                  $(V, { "wrapper-col": { span: 24, offset: 4 } }, {
                    default: ge(() => [
                      f.value ? (ne(), Ut("a", {
                        key: 0,
                        style: { "margin-right": "16px", color: "#1677ff" },
                        onClick: w
                      }, [
                        C[0] || (C[0] = Wt("展开 ")),
                        $(de(Ki))
                      ])) : (ne(), Ut("a", {
                        key: 1,
                        onClick: h,
                        style: { "margin-right": "16px", color: "#1677ff" }
                      }, [
                        C[1] || (C[1] = Wt("收起 ")),
                        $(de(ya))
                      ])),
                      $(I, {
                        type: "primary",
                        onClick: m
                      }, {
                        default: ge(() => C[2] || (C[2] = [
                          Wt("搜索")
                        ])),
                        _: 1
                        /* STABLE */
                      }),
                      $(I, {
                        style: { "margin-left": "10px" },
                        onClick: g
                      }, {
                        default: ge(() => C[3] || (C[3] = [
                          Wt("重置")
                        ])),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })) : Ce("v-if", !0)
            ]),
            _: 3
            /* FORWARDED */
          })
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["model"]);
    };
  }
}), o2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kf
}, Symbol.toStringTag, { value: "Module" })), i2 = /* @__PURE__ */ W({
  name: "ths-search-form",
  __name: "index",
  props: {
    formData: {
      type: Array,
      default: []
    }
  },
  setup(e) {
    const n = k(e.formData);
    return (r, o) => (ne(), Ut("div", null, [
      $(kf, {
        formType: "searchForm",
        formData: n.value
      }, null, 8, ["formData"])
    ]));
  }
}), a2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: i2
}, Symbol.toStringTag, { value: "Module" })), l2 = /* @__PURE__ */ W({
  name: "ths-table",
  __name: "index",
  props: {
    columns: {
      type: Array,
      default: []
    },
    data: {
      type: Array,
      default: []
    },
    pagination: {
      type: Object,
      default: {
        pageSize: 10,
        current: 1,
        total: 10,
        showTotal: (e, t) => "一共 " + e + " 条数据"
      }
    },
    spinning: {
      type: Boolean,
      default: !1
    },
    rowSelection: {
      type: Object,
      default: {}
    },
    loading: {
      type: Object || Boolean,
      default: !1
    }
  },
  emits: ["pageChange"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = k(n.data), i = {
      pageSize: 10,
      current: 1,
      total: 10,
      showTotal: (c, d) => "一共 " + c + " 条数据"
    }, a = k(n.pagination), l = k(n.spinning), s = k(n.loading), u = ({ current: c, pageSize: d }) => {
      a.value.current = c, a.value.pageSize = d, r("pageChange", a.value);
    }, f = k(n.rowSelection);
    return Y(n.data, (c) => {
      o.value = c;
    }), Y(n.pagination, (c) => {
      a.value = c;
    }), Y(
      () => n.spinning,
      (c) => {
        l.value = c;
      },
      { deep: !0, immediate: !0 }
    ), Y(
      () => n.loading,
      (c) => {
        s.value = c;
      },
      { deep: !0, immediate: !0 }
    ), (c, d) => {
      const p = re("a-table"), m = re("a-spin");
      return ne(), ve(m, {
        spinning: l.value,
        tip: "数据加载中..."
      }, {
        default: ge(() => [
          $(p, {
            columns: e.columns,
            "data-source": o.value,
            pagination: { showTotal: i.showTotal, ...a.value },
            onChange: u,
            rowSelection: f.value,
            loading: s.value
          }, {
            bodyCell: ge(({ column: g, record: w }) => [
              Ce(" <template> "),
              Jt(c.$slots, g.dataIndex, { record: w }),
              Ce(" </template> ")
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["columns", "data-source", "pagination", "rowSelection", "loading"])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["spinning"]);
    };
  }
}), s2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: l2
}, Symbol.toStringTag, { value: "Module" })), u2 = { key: 0 }, c2 = { class: "ant-upload-drag-icon" }, f2 = /* @__PURE__ */ W({
  name: "ths-upload-dragger",
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
    }
  },
  emits: ["handleChange", "beforeUpload", "handleDrop"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = k(n.accept), i = k(n.slotType), a = k(n.fileList), l = k(!0), s = (f, c) => (r("beforeUpload", f, c, l), l.value);
    Y(
      () => n.fileList,
      (f) => {
        a.value = f;
      },
      { deep: !0, immediate: !0 }
    );
    function u(f) {
      console.log("drag----", f), r("handleDrop", f);
    }
    return (f, c) => {
      const d = re("a-upload-dragger");
      return ne(), ve(d, {
        fileList: a.value,
        "onUpdate:fileList": c[0] || (c[0] = (p) => a.value = p),
        name: "file",
        accept: o.value,
        progress: f.progress,
        maxCount: e.maxCount,
        multiple: e.multiple,
        disabled: e.disabled,
        beforeUpload: s,
        onDrop: u
      }, {
        itemRender: ge(({ file: p, actions: m }) => [
          Jt(f.$slots, "fileItem", {
            file: p,
            actions: m
          }),
          Ce(` <a-space>\r
        <span :style="file.status === 'error' ? 'color: red' : ''">{{ file.name }}</span>\r
        <a href="javascript:;" @click="actions.download">下载</a>\r
        <a href="javascript:;" @click="actions.remove">删除</a>\r
      </a-space> `)
        ]),
        default: ge(() => [
          i.value === "default" ? (ne(), Ut("div", u2, [
            Cn("p", c2, [
              $(de(ba))
            ]),
            c[1] || (c[1] = Cn(
              "p",
              { class: "ant-upload-text" },
              "点击或者拖拽文件到此区域进行上传",
              -1
              /* HOISTED */
            )),
            c[2] || (c[2] = Cn(
              "p",
              { class: "ant-upload-hint" },
              " 支持单个或多个文件上传 ",
              -1
              /* HOISTED */
            ))
          ])) : Jt(f.$slots, "default", { key: 1 })
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["fileList", "accept", "progress", "maxCount", "multiple", "disabled"]);
    };
  }
}), d2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: f2
}, Symbol.toStringTag, { value: "Module" })), p2 = /* @__PURE__ */ W({
  name: "ths-img-upload",
  __name: "index",
  props: {
    fileList: {
      type: Array,
      default: []
    },
    maxCount: {
      type: Number,
      default: 1
    },
    multiple: {
      type: Boolean,
      defalut: !0
    },
    disabled: {
      type: Boolean,
      defalut: !1
    }
  },
  emits: ["delFile", "uploadFn"],
  setup(e, { emit: t }) {
    const n = e, r = k(n.fileList), o = k(n.maxCount), i = k(n.multiple), a = k(n.disabled), l = k(""), s = k(!1), u = (m) => {
      s.value = m;
    };
    Y(
      () => n.fileList,
      (m) => {
        r.value = m;
      },
      { immediate: !0, deep: !0 }
    ), Y(
      () => n.maxCount,
      (m) => {
        o.value = m;
      },
      { immediate: !0, deep: !0 }
    );
    const f = t, c = (m) => {
      const { file: g, onError: w } = m;
      if (r.value.length >= o.value) {
        w(`只能上传${o.value}张图片！`, g), gt.warn(`只能上传${o.value}张图片！`);
        return;
      }
      f("uploadFn", m);
    }, d = (m) => {
      l.value = m.url, u(!0);
    }, p = (m) => {
      console.log("删除文件:", m), f("delFile", r.value.indexOf(m));
    };
    return (m, g) => {
      const w = re("a-upload"), h = re("a-image");
      return ne(), Ut(
        Te,
        null,
        [
          $(w, {
            "list-type": "picture-card",
            "file-list": r.value,
            "custom-request": c,
            "on-preview": d,
            "on-remove": p,
            maxCount: o.value,
            disabled: a.value,
            accept: "image/*",
            multiple: i.value
          }, {
            default: ge(() => [
              Cn("div", null, [
                $(de(ca)),
                g[0] || (g[0] = Cn(
                  "div",
                  { style: { "margin-top": "8px" } },
                  "上传",
                  -1
                  /* HOISTED */
                ))
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["file-list", "maxCount", "disabled", "multiple"]),
          Ce(" 弹出预览图片 "),
          $(h, {
            width: 200,
            style: { display: "none" },
            preview: {
              visible: s.value,
              onVisibleChange: u
            },
            src: l.value
          }, null, 8, ["preview", "src"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
}), g2 = /* @__PURE__ */ Us(p2, [["__scopeId", "data-v-caa62912"]]), m2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: g2
}, Symbol.toStringTag, { value: "Module" })), h2 = /* @__PURE__ */ W({
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
    }
  },
  emits: ["handleChange", "beforeUpload"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = k(n.accept), i = k(n.slotType), a = k(n.fileList), l = k(!0), s = (c) => {
      r("handleChange", c), c.file.status !== "uploading" && console.log(c.file, c.fileList), c.file.status === "done" ? gt.success(`${c.file.name} 文件上传成功！`) : c.file.status === "error" && gt.error(`${c.file.name} 文件上传失败.`);
    }, u = (c, d) => (r("beforeUpload", c, d, l), l.value);
    Y(
      () => n.fileList,
      (c) => {
        a.value = c;
      },
      { deep: !0, immediate: !0 }
    );
    const f = {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068"
      },
      strokeWidth: 3,
      format: (c) => `${parseFloat(c.toFixed(2))}%`,
      class: "test"
    };
    return (c, d) => {
      const p = re("a-button"), m = re("a-upload");
      return ne(), ve(m, {
        "file-list": a.value,
        "onUpdate:fileList": d[0] || (d[0] = (g) => a.value = g),
        name: "file",
        accept: o.value,
        progress: f,
        maxCount: e.maxCount,
        multiple: e.multiple,
        disabled: e.disabled,
        beforeUpload: u,
        onChange: s
      }, {
        itemRender: ge(({ file: g, actions: w }) => [
          Jt(c.$slots, "fileItem", {
            file: g,
            actions: w
          }),
          Ce(` <a-space>\r
        <span :style="file.status === 'error' ? 'color: red' : ''">{{ file.name }}</span>\r
        <a href="javascript:;" @click="actions.download">下载</a>\r
        <a href="javascript:;" @click="actions.remove">删除</a>\r
      </a-space> `)
        ]),
        default: ge(() => [
          i.value === "default" ? (ne(), ve(p, { key: 0 }, {
            default: ge(() => [
              $(de(xa)),
              d[1] || (d[1] = Wt(" 点击上传 "))
            ]),
            _: 1
            /* STABLE */
          })) : Jt(c.$slots, "default", { key: 1 })
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["file-list", "accept", "maxCount", "multiple", "disabled"]);
    };
  }
}), v2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: h2
}, Symbol.toStringTag, { value: "Module" })), zs = /* @__PURE__ */ Object.assign({ "./button/index.vue": Jf, "./form/index.vue": o2, "./search-form/index.vue": a2, "./table/index.vue": s2, "./upload-drag/index.vue": d2, "./upload-img/index.vue": m2, "./upload/index.vue": v2 }), y2 = function(e) {
  for (let t in zs) {
    let n = zs[t].default;
    e.component(n.name, n);
  }
}, x2 = { install: y2 };
export {
  x2 as default
};
