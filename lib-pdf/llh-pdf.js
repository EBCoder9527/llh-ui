import { inject as fe, ref as N, h as Ae, getCurrentInstance as ao, nextTick as io, reactive as je, defineComponent as L, createVNode as p, Fragment as Cn, Comment as Ba, Text as Va, computed as x, provide as me, shallowRef as re, watch as ae, unref as X, watchEffect as Tt, onBeforeUnmount as Ga, triggerRef as Ua, onBeforeMount as Wa, onMounted as It, onUpdated as Xa, Teleport as lo, onUnmounted as qa, TransitionGroup as co, render as Zn, toRaw as Ya, resolveComponent as Ye, openBlock as Ce, createBlock as St, withCtx as k, renderSlot as Jn, createCommentVNode as Ot, createTextVNode as te, resolveDirective as Ka, createElementBlock as Jt, withDirectives as Qa, createElementVNode as so } from "vue";
function B(e, t) {
  Za(e) && (e = "100%");
  var n = Ja(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function ct(e) {
  return Math.min(1, Math.max(0, e));
}
function Za(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Ja(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function uo(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function st(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function xe(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function ei(e, t, n) {
  return {
    r: B(e, 255) * 255,
    g: B(t, 255) * 255,
    b: B(n, 255) * 255
  };
}
function er(e, t, n) {
  e = B(e, 255), t = B(t, 255), n = B(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = 0, l = (r + o) / 2;
  if (r === o)
    i = 0, a = 0;
  else {
    var c = r - o;
    switch (i = l > 0.5 ? c / (2 - r - o) : c / (r + o), r) {
      case e:
        a = (t - n) / c + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / c + 2;
        break;
      case n:
        a = (e - t) / c + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: i, l };
}
function Dt(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function ti(e, t, n) {
  var r, o, a;
  if (e = B(e, 360), t = B(t, 100), n = B(n, 100), t === 0)
    o = n, a = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - i;
    r = Dt(l, i, e + 1 / 3), o = Dt(l, i, e), a = Dt(l, i, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: a * 255 };
}
function en(e, t, n) {
  e = B(e, 255), t = B(t, 255), n = B(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = r, l = r - o, c = r === 0 ? 0 : l / r;
  if (r === o)
    a = 0;
  else {
    switch (r) {
      case e:
        a = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / l + 2;
        break;
      case n:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: c, v: i };
}
function ni(e, t, n) {
  e = B(e, 360) * 6, t = B(t, 100), n = B(n, 100);
  var r = Math.floor(e), o = e - r, a = n * (1 - t), i = n * (1 - o * t), l = n * (1 - (1 - o) * t), c = r % 6, u = [n, i, a, a, l, n][c], d = [l, n, n, i, a, a][c], s = [a, a, l, n, n, i][c];
  return { r: u * 255, g: d * 255, b: s * 255 };
}
function tn(e, t, n, r) {
  var o = [
    xe(Math.round(e).toString(16)),
    xe(Math.round(t).toString(16)),
    xe(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function ri(e, t, n, r, o) {
  var a = [
    xe(Math.round(e).toString(16)),
    xe(Math.round(t).toString(16)),
    xe(Math.round(n).toString(16)),
    xe(oi(r))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function oi(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function tr(e) {
  return Y(e) / 255;
}
function Y(e) {
  return parseInt(e, 16);
}
function ai(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var nn = {
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
function Te(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, a = null, i = !1, l = !1;
  return typeof e == "string" && (e = ci(e)), typeof e == "object" && (se(e.r) && se(e.g) && se(e.b) ? (t = ei(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : se(e.h) && se(e.s) && se(e.v) ? (r = st(e.s), o = st(e.v), t = ni(e.h, r, o), i = !0, l = "hsv") : se(e.h) && se(e.s) && se(e.l) && (r = st(e.s), a = st(e.l), t = ti(e.h, r, a), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = uo(n), {
    ok: i,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var ii = "[-\\+]?\\d+%?", li = "[-\\+]?\\d*\\.\\d+%?", pe = "(?:".concat(li, ")|(?:").concat(ii, ")"), Bt = "[\\s|\\(]+(".concat(pe, ")[,|\\s]+(").concat(pe, ")[,|\\s]+(").concat(pe, ")\\s*\\)?"), Vt = "[\\s|\\(]+(".concat(pe, ")[,|\\s]+(").concat(pe, ")[,|\\s]+(").concat(pe, ")[,|\\s]+(").concat(pe, ")\\s*\\)?"), ne = {
  CSS_UNIT: new RegExp(pe),
  rgb: new RegExp("rgb" + Bt),
  rgba: new RegExp("rgba" + Vt),
  hsl: new RegExp("hsl" + Bt),
  hsla: new RegExp("hsla" + Vt),
  hsv: new RegExp("hsv" + Bt),
  hsva: new RegExp("hsva" + Vt),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function ci(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (nn[e])
    e = nn[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = ne.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = ne.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = ne.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = ne.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = ne.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = ne.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = ne.hex8.exec(e), n ? {
    r: Y(n[1]),
    g: Y(n[2]),
    b: Y(n[3]),
    a: tr(n[4]),
    format: t ? "name" : "hex8"
  } : (n = ne.hex6.exec(e), n ? {
    r: Y(n[1]),
    g: Y(n[2]),
    b: Y(n[3]),
    format: t ? "name" : "hex"
  } : (n = ne.hex4.exec(e), n ? {
    r: Y(n[1] + n[1]),
    g: Y(n[2] + n[2]),
    b: Y(n[3] + n[3]),
    a: tr(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = ne.hex3.exec(e), n ? {
    r: Y(n[1] + n[1]),
    g: Y(n[2] + n[2]),
    b: Y(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function se(e) {
  return !!ne.CSS_UNIT.exec(String(e));
}
var D = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = ai(t)), this.originalInput = t;
      var o = Te(t);
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
      var t = this.toRgb(), n, r, o, a = t.r / 255, i = t.g / 255, l = t.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), l <= 0.03928 ? o = l / 12.92 : o = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = uo(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = en(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = en(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = er(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = er(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), tn(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), ri(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(B(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(B(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + tn(this.r, this.g, this.b, !1), n = 0, r = Object.entries(nn); n < r.length; n++) {
        var o = r[n], a = o[0], i = o[1];
        if (t === i)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, o = this.a < 1 && this.a >= 0, a = !n && o && (t.startsWith("hex") || t === "name");
      return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = ct(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = ct(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = ct(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = ct(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), o = new e(t).toRgb(), a = n / 100, i = {
        r: (o.r - r.r) * a + r.r,
        g: (o.g - r.g) * a + r.g,
        b: (o.b - r.b) * a + r.b,
        a: (o.a - r.a) * a + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), o = 360 / n, a = [this];
      for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + o) % 360, a.push(new e(r));
      return a;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, a = n.v, i = [], l = 1 / t; t--; )
        i.push(new e({ h: r, s: o, v: a })), a = (a + l) % 1;
      return i;
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
      for (var n = this.toHsl(), r = n.h, o = [this], a = 360 / t, i = 1; i < t; i++)
        o.push(new e({ h: (r + i * a) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), ut = 2, nr = 0.16, si = 0.05, ui = 0.05, fi = 0.15, fo = 5, po = 4, di = [{
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
function rr(e) {
  var t = e.r, n = e.g, r = e.b, o = en(t, n, r);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function ft(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(tn(t, n, r, !1));
}
function pi(e, t, n) {
  var r = n / 100, o = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return o;
}
function or(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - ut * t : Math.round(e.h) + ut * t : r = n ? Math.round(e.h) + ut * t : Math.round(e.h) - ut * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function ar(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - nr * t : t === po ? r = e.s + nr : r = e.s + si * t, r > 1 && (r = 1), n && t === fo && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function ir(e, t, n) {
  var r;
  return n ? r = e.v + ui * t : r = e.v - fi * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function $e(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = Te(e), o = fo; o > 0; o -= 1) {
    var a = rr(r), i = ft(Te({
      h: or(a, o, !0),
      s: ar(a, o, !0),
      v: ir(a, o, !0)
    }));
    n.push(i);
  }
  n.push(ft(r));
  for (var l = 1; l <= po; l += 1) {
    var c = rr(r), u = ft(Te({
      h: or(c, l),
      s: ar(c, l),
      v: ir(c, l)
    }));
    n.push(u);
  }
  return t.theme === "dark" ? di.map(function(d) {
    var s = d.index, f = d.opacity, g = ft(pi(Te(t.backgroundColor || "#141414"), Te(n[s]), f * 100));
    return g;
  }) : n;
}
var Gt = {
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
}, gt = {}, Ut = {};
Object.keys(Gt).forEach(function(e) {
  gt[e] = $e(Gt[e]), gt[e].primary = gt[e][5], Ut[e] = $e(Gt[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Ut[e].primary = Ut[e][5];
});
var gi = gt.blue, vi = Symbol("iconContext"), go = function() {
  return fe(vi, {
    prefixCls: N("anticon"),
    rootClassName: N(""),
    csp: N()
  });
};
function xn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function mi(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var lr = "data-vc-order", hi = "vc-icon-key", rn = /* @__PURE__ */ new Map();
function vo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : hi;
}
function Sn(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function yi(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function mo(e) {
  return Array.from((rn.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ho(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!xn())
    return null;
  var n = t.csp, r = t.prepend, o = document.createElement("style");
  o.setAttribute(lr, yi(r)), n && n.nonce && (o.nonce = n.nonce), o.innerHTML = e;
  var a = Sn(t), i = a.firstChild;
  if (r) {
    if (r === "queue") {
      var l = mo(a).filter(function(c) {
        return ["prepend", "prependQueue"].includes(c.getAttribute(lr));
      });
      if (l.length)
        return a.insertBefore(o, l[l.length - 1].nextSibling), o;
    }
    a.insertBefore(o, i);
  } else
    a.appendChild(o);
  return o;
}
function bi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Sn(t);
  return mo(n).find(function(r) {
    return r.getAttribute(vo(t)) === e;
  });
}
function Ci(e, t) {
  var n = rn.get(e);
  if (!n || !mi(document, n)) {
    var r = ho("", t), o = r.parentNode;
    rn.set(e, o), e.removeChild(r);
  }
}
function xi(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Sn(n);
  Ci(r, n);
  var o = bi(t, n);
  if (o)
    return n.csp && n.csp.nonce && o.nonce !== n.csp.nonce && (o.nonce = n.csp.nonce), o.innerHTML !== e && (o.innerHTML = e), o;
  var a = ho(e, n);
  return a.setAttribute(vo(n), t), a;
}
function cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Si(e, o, n[o]);
    });
  }
  return e;
}
function Si(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Oi(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function wi(e, t) {
  Oi(e, "[@ant-design/icons-vue] ".concat(t));
}
function sr(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function on(e, t, n) {
  return n ? Ae(e.tag, cr({
    key: t
  }, n, e.attrs), (e.children || []).map(function(r, o) {
    return on(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : Ae(e.tag, cr({
    key: t
  }, e.attrs), (e.children || []).map(function(r, o) {
    return on(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function yo(e) {
  return $e(e)[0];
}
function bo(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var $i = `
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
function Co(e) {
  return e && e.getRootNode && e.getRootNode();
}
function Pi(e) {
  return xn() ? Co(e) instanceof ShadowRoot : !1;
}
function _i(e) {
  return Pi(e) ? Co(e) : null;
}
var Ti = function() {
  var t = go(), n = t.prefixCls, r = t.csp, o = ao(), a = $i;
  n && (a = a.replace(/anticon/g, n.value)), io(function() {
    if (xn()) {
      var i = o.vnode.el, l = _i(i);
      xi(a, "@ant-design-vue-icons", {
        prepend: !0,
        csp: r.value,
        attachTo: l
      });
    }
  });
}, Ii = ["icon", "primaryColor", "secondaryColor"];
function Mi(e, t) {
  if (e == null) return {};
  var n = Ei(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ei(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Ai(e, o, n[o]);
    });
  }
  return e;
}
function Ai(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ke = je({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function ji(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Ke.primaryColor = t, Ke.secondaryColor = n || yo(t), Ke.calculated = !!n;
}
function Hi() {
  return vt({}, Ke);
}
var he = function(t, n) {
  var r = vt({}, t, n.attrs), o = r.icon, a = r.primaryColor, i = r.secondaryColor, l = Mi(r, Ii), c = Ke;
  if (a && (c = {
    primaryColor: a,
    secondaryColor: i || yo(a)
  }), wi(sr(o), "icon should be icon definiton, but got ".concat(o)), !sr(o))
    return null;
  var u = o;
  return u && typeof u.icon == "function" && (u = vt({}, u, {
    icon: u.icon(c.primaryColor, c.secondaryColor)
  })), on(u.icon, "svg-".concat(u.name), vt({}, l, {
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
he.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
he.inheritAttrs = !1;
he.displayName = "IconBase";
he.getTwoToneColors = Hi;
he.setTwoToneColors = ji;
function ki(e, t) {
  return Fi(e) || Ri(e, t) || Li(e, t) || Ni();
}
function Ni() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Li(e, t) {
  if (e) {
    if (typeof e == "string") return ur(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ur(e, t);
  }
}
function ur(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Ri(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, a = !1, i, l;
    try {
      for (n = n.call(e); !(o = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t)); o = !0)
        ;
    } catch (c) {
      a = !0, l = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (a) throw l;
      }
    }
    return r;
  }
}
function Fi(e) {
  if (Array.isArray(e)) return e;
}
function xo(e) {
  var t = bo(e), n = ki(t, 2), r = n[0], o = n[1];
  return he.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function zi() {
  var e = he.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Di = L({
  name: "InsertStyles",
  setup: function() {
    return Ti(), function() {
      return null;
    };
  }
}), Bi = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Vi(e, t) {
  return Xi(e) || Wi(e, t) || Ui(e, t) || Gi();
}
function Gi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ui(e, t) {
  if (e) {
    if (typeof e == "string") return fr(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fr(e, t);
  }
}
function fr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Wi(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, a = !1, i, l;
    try {
      for (n = n.call(e); !(o = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t)); o = !0)
        ;
    } catch (c) {
      a = !0, l = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (a) throw l;
      }
    }
    return r;
  }
}
function Xi(e) {
  if (Array.isArray(e)) return e;
}
function dr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      qe(e, o, n[o]);
    });
  }
  return e;
}
function qe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function qi(e, t) {
  if (e == null) return {};
  var n = Yi(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Yi(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
xo(gi.primary);
var H = function(t, n) {
  var r, o = dr({}, t, n.attrs), a = o.class, i = o.icon, l = o.spin, c = o.rotate, u = o.tabindex, d = o.twoToneColor, s = o.onClick, f = qi(o, Bi), g = go(), h = g.prefixCls, y = g.rootClassName, S = (r = {}, qe(r, y.value, !!y.value), qe(r, h.value, !0), qe(r, "".concat(h.value, "-").concat(i.name), !!i.name), qe(r, "".concat(h.value, "-spin"), !!l || i.name === "loading"), r), C = u;
  C === void 0 && s && (C = -1);
  var w = c ? {
    msTransform: "rotate(".concat(c, "deg)"),
    transform: "rotate(".concat(c, "deg)")
  } : void 0, M = bo(d), $ = Vi(M, 2), O = $[0], I = $[1];
  return p("span", dr({
    role: "img",
    "aria-label": i.name
  }, f, {
    onClick: s,
    class: [S, a],
    tabindex: C
  }), [p(he, {
    icon: i,
    primaryColor: O,
    secondaryColor: I,
    style: w
  }, null), p(Di, null, null)]);
};
H.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
H.displayName = "AntdIcon";
H.inheritAttrs = !1;
H.getTwoToneColor = zi;
H.setTwoToneColor = xo;
var Ki = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function pr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Qi(e, o, n[o]);
    });
  }
  return e;
}
function Qi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ze = function(t, n) {
  var r = pr({}, t, n.attrs);
  return p(H, pr({}, r, {
    icon: Ki
  }), null);
};
ze.displayName = "CheckCircleFilled";
ze.inheritAttrs = !1;
var Zi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
function gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Ji(e, o, n[o]);
    });
  }
  return e;
}
function Ji(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var On = function(t, n) {
  var r = gr({}, t, n.attrs);
  return p(H, gr({}, r, {
    icon: Zi
  }), null);
};
On.displayName = "CheckCircleOutlined";
On.inheritAttrs = !1;
var el = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
function vr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      tl(e, o, n[o]);
    });
  }
  return e;
}
function tl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var De = function(t, n) {
  var r = vr({}, t, n.attrs);
  return p(H, vr({}, r, {
    icon: el
  }), null);
};
De.displayName = "CloseCircleFilled";
De.inheritAttrs = !1;
var nl = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" };
function mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      rl(e, o, n[o]);
    });
  }
  return e;
}
function rl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var wn = function(t, n) {
  var r = mr({}, t, n.attrs);
  return p(H, mr({}, r, {
    icon: nl
  }), null);
};
wn.displayName = "CloseCircleOutlined";
wn.inheritAttrs = !1;
var ol = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
function hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      al(e, o, n[o]);
    });
  }
  return e;
}
function al(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var at = function(t, n) {
  var r = hr({}, t, n.attrs);
  return p(H, hr({}, r, {
    icon: ol
  }), null);
};
at.displayName = "CloseOutlined";
at.inheritAttrs = !1;
var il = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
function yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      ll(e, o, n[o]);
    });
  }
  return e;
}
function ll(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Be = function(t, n) {
  var r = yr({}, t, n.attrs);
  return p(H, yr({}, r, {
    icon: il
  }), null);
};
Be.displayName = "ExclamationCircleFilled";
Be.inheritAttrs = !1;
var cl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
function br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      sl(e, o, n[o]);
    });
  }
  return e;
}
function sl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $n = function(t, n) {
  var r = br({}, t, n.attrs);
  return p(H, br({}, r, {
    icon: cl
  }), null);
};
$n.displayName = "ExclamationCircleOutlined";
$n.inheritAttrs = !1;
var ul = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z" } }] }, name: "export", theme: "outlined" };
function Cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      fl(e, o, n[o]);
    });
  }
  return e;
}
function fl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Pn = function(t, n) {
  var r = Cr({}, t, n.attrs);
  return p(H, Cr({}, r, {
    icon: ul
  }), null);
};
Pn.displayName = "ExportOutlined";
Pn.inheritAttrs = !1;
var dl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M553.1 509.1l-77.8 99.2-41.1-52.4a8 8 0 00-12.6 0l-99.8 127.2a7.98 7.98 0 006.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 00-12.7 0zM360 442a40 40 0 1080 0 40 40 0 10-80 0zm494.6-153.4L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" } }] }, name: "file-image", theme: "outlined" };
function xr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      pl(e, o, n[o]);
    });
  }
  return e;
}
function pl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _n = function(t, n) {
  var r = xr({}, t, n.attrs);
  return p(H, xr({}, r, {
    icon: dl
  }), null);
};
_n.displayName = "FileImageOutlined";
_n.inheritAttrs = !1;
var gl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z" } }, { tag: "path", attrs: { d: "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z" } }] }, name: "form", theme: "outlined" };
function Sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      vl(e, o, n[o]);
    });
  }
  return e;
}
function vl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Tn = function(t, n) {
  var r = Sr({}, t, n.attrs);
  return p(H, Sr({}, r, {
    icon: gl
  }), null);
};
Tn.displayName = "FormOutlined";
Tn.inheritAttrs = !1;
var ml = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M957.6 507.4L603.2 158.2a7.9 7.9 0 00-11.2 0L353.3 393.4a8.03 8.03 0 00-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 00-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0011.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0011.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2zM389.8 796.2H229.6l134.4-133 80.1 78.9-54.3 54.1zm154.8-62.1L373.2 565.2l68.6-67.6 171.4 168.9-68.6 67.6zM713.1 658L450.3 399.1 597.6 254l262.8 259-147.3 145z" } }] }, name: "highlight", theme: "outlined" };
function Or(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      hl(e, o, n[o]);
    });
  }
  return e;
}
function hl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var In = function(t, n) {
  var r = Or({}, t, n.attrs);
  return p(H, Or({}, r, {
    icon: ml
  }), null);
};
In.displayName = "HighlightOutlined";
In.inheritAttrs = !1;
var yl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
function wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      bl(e, o, n[o]);
    });
  }
  return e;
}
function bl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ve = function(t, n) {
  var r = wr({}, t, n.attrs);
  return p(H, wr({}, r, {
    icon: yl
  }), null);
};
Ve.displayName = "InfoCircleFilled";
Ve.inheritAttrs = !1;
var Cl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
function $r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      xl(e, o, n[o]);
    });
  }
  return e;
}
function xl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Mn = function(t, n) {
  var r = $r({}, t, n.attrs);
  return p(H, $r({}, r, {
    icon: Cl
  }), null);
};
Mn.displayName = "InfoCircleOutlined";
Mn.inheritAttrs = !1;
var Sl = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
function Pr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Ol(e, o, n[o]);
    });
  }
  return e;
}
function Ol(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var it = function(t, n) {
  var r = Pr({}, t, n.attrs);
  return p(H, Pr({}, r, {
    icon: Sl
  }), null);
};
it.displayName = "LoadingOutlined";
it.inheritAttrs = !1;
var wl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z" } }] }, name: "login", theme: "outlined" };
function _r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      $l(e, o, n[o]);
    });
  }
  return e;
}
function $l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var En = function(t, n) {
  var r = _r({}, t, n.attrs);
  return p(H, _r({}, r, {
    icon: wl
  }), null);
};
En.displayName = "LoginOutlined";
En.inheritAttrs = !1;
var Pl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z" } }] }, name: "menu-fold", theme: "outlined" };
function Tr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      _l(e, o, n[o]);
    });
  }
  return e;
}
function _l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var An = function(t, n) {
  var r = Tr({}, t, n.attrs);
  return p(H, Tr({}, r, {
    icon: Pl
  }), null);
};
An.displayName = "MenuFoldOutlined";
An.inheritAttrs = !1;
var Tl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z" } }] }, name: "menu-unfold", theme: "outlined" };
function Ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Il(e, o, n[o]);
    });
  }
  return e;
}
function Il(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var jn = function(t, n) {
  var r = Ir({}, t, n.attrs);
  return p(H, Ir({}, r, {
    icon: Tl
  }), null);
};
jn.displayName = "MenuUnfoldOutlined";
jn.inheritAttrs = !1;
var Ml = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M482.2 508.4L331.3 389c-3-2.4-7.3-.2-7.3 3.6V478H184V184h204v128c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V144c0-15.5-12.5-28-28-28H144c-15.5 0-28 12.5-28 28v736c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v128H184V546h140v85.4c0 3.8 4.4 6 7.3 3.6l150.9-119.4a4.5 4.5 0 000-7.2zM880 116H596c-15.5 0-28 12.5-28 28v168c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V184h204v294H700v-85.4c0-3.8-4.3-6-7.3-3.6l-151 119.4a4.52 4.52 0 000 7.1l151 119.5c2.9 2.3 7.3.2 7.3-3.6V546h140v294H636V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v168c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V144c0-15.5-12.5-28-28-28z" } }] }, name: "merge-cells", theme: "outlined" };
function Mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      El(e, o, n[o]);
    });
  }
  return e;
}
function El(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Hn = function(t, n) {
  var r = Mr({}, t, n.attrs);
  return p(H, Mr({}, r, {
    icon: Ml
  }), null);
};
Hn.displayName = "MergeCellsOutlined";
Hn.inheritAttrs = !1;
var Al = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "upload", theme: "outlined" };
function Er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      jl(e, o, n[o]);
    });
  }
  return e;
}
function jl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var kn = function(t, n) {
  var r = Er({}, t, n.attrs);
  return p(H, Er({}, r, {
    icon: Al
  }), null);
};
kn.displayName = "UploadOutlined";
kn.inheritAttrs = !1;
var Hl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-in", theme: "outlined" };
function Ar(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      kl(e, o, n[o]);
    });
  }
  return e;
}
function kl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Nn = function(t, n) {
  var r = Ar({}, t, n.attrs);
  return p(H, Ar({}, r, {
    icon: Hl
  }), null);
};
Nn.displayName = "ZoomInOutlined";
Nn.inheritAttrs = !1;
var Nl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-out", theme: "outlined" };
function jr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Ll(e, o, n[o]);
    });
  }
  return e;
}
function Ll(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ln = function(t, n) {
  var r = jr({}, t, n.attrs);
  return p(H, jr({}, r, {
    icon: Nl
  }), null);
};
Ln.displayName = "ZoomOutOutlined";
Ln.inheritAttrs = !1;
function Je(e) {
  "@babel/helpers - typeof";
  return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Je(e);
}
function Rl(e, t) {
  if (Je(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Je(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fl(e) {
  var t = Rl(e, "string");
  return Je(t) == "symbol" ? t : t + "";
}
function zl(e, t, n) {
  return (t = Fl(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Hr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hr(Object(n), !0).forEach(function(r) {
      zl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function m() {
  return m = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, m.apply(null, arguments);
}
const Dl = Array.isArray, Bl = (e) => typeof e == "string", Vl = (e) => e !== null && typeof e == "object";
function Ie(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e ?? n;
}
function Gl(e) {
  let t;
  const n = new Promise((o) => {
    t = e(() => {
      o(!0);
    });
  }), r = () => {
    t == null || t();
  };
  return r.then = (o, a) => n.then(o, a), r.promise = n, r;
}
function W() {
  const e = [];
  for (let t = 0; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (Bl(n))
        e.push(n);
      else if (Dl(n))
        for (let r = 0; r < n.length; r++) {
          const o = W(n[r]);
          o && e.push(o);
        }
      else if (Vl(n))
        for (const r in n)
          n[r] && e.push(r);
    }
  }
  return e.join(" ");
}
function Ul(e) {
  return e && (e.type === Ba || e.type === Cn && e.children.length === 0 || e.type === Va && e.children.trim() === "");
}
function So() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const t = [];
  return e.forEach((n) => {
    Array.isArray(n) ? t.push(...n) : (n == null ? void 0 : n.type) === Cn ? t.push(...So(n.children)) : t.push(n);
  }), t.filter((n) => !Ul(n));
}
const Wl = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t;
}, Rn = (e) => {
  const t = e;
  return t.install = function(n) {
    n.component(t.displayName || t.name, e);
  }, e;
};
function K(e) {
  return {
    type: Object,
    default: e
  };
}
function Wt(e) {
  return {
    type: Boolean,
    default: e
  };
}
function an(e, t) {
  const n = {
    validator: () => !0,
    default: e
  };
  return n;
}
function kr(e) {
  return {
    type: Array,
    default: e
  };
}
function Nr(e) {
  return {
    type: String,
    default: e
  };
}
function Xl(e, t) {
  return e ? {
    type: e,
    default: t
  } : an(t);
}
const Fn = "anticon", ql = Symbol("GlobalFormContextKey"), Yl = (e) => {
  me(ql, e);
}, Kl = () => ({
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
  csp: K(),
  input: K(),
  autoInsertSpaceInButton: {
    type: Boolean,
    default: void 0
  },
  locale: K(),
  pageHeader: K(),
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
  space: K(),
  virtual: {
    type: Boolean,
    default: void 0
  },
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: !0
  },
  form: K(),
  pagination: K(),
  theme: K(),
  select: K(),
  wave: K()
}), zn = Symbol("configProvider"), Oo = {
  getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
  iconPrefixCls: x(() => Fn),
  getPopupContainer: x(() => () => document.body),
  direction: x(() => "ltr")
}, Dn = () => fe(zn, Oo), Ql = (e) => me(zn, e), wo = Symbol("DisabledContextKey"), $o = () => fe(wo, N(void 0)), Zl = (e) => {
  const t = $o();
  return me(wo, x(() => {
    var n;
    return (n = e.value) !== null && n !== void 0 ? n : t.value;
  })), e;
}, Jl = {
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
}, ec = {
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
}, Po = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Lr = {
  lang: m({
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
  }, ec),
  timePickerLocale: m({}, Po)
}, q = "${label} is not a valid ${type}", et = {
  locale: "en",
  Pagination: Jl,
  DatePicker: Lr,
  TimePicker: Po,
  Calendar: Lr,
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
        string: q,
        method: q,
        array: q,
        object: q,
        number: q,
        date: q,
        boolean: q,
        integer: q,
        float: q,
        regexp: q,
        email: q,
        url: q,
        hex: q
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
}, _o = L({
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
    const r = fe("localeData", {}), o = x(() => {
      const {
        componentName: i = "global",
        defaultLocale: l
      } = e, c = l || et[i || "global"], {
        antLocale: u
      } = r, d = i && u ? u[i] : {};
      return m(m({}, typeof c == "function" ? c() : c), d || {});
    }), a = x(() => {
      const {
        antLocale: i
      } = r, l = i && i.locale;
      return i && i.exist && !l ? et.locale : l;
    });
    return () => {
      const i = e.children || n.default, {
        antLocale: l
      } = r;
      return i == null ? void 0 : i(o.value, a.value, l);
    };
  }
});
function Bn(e) {
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
const Rr = "%";
class tc {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.instanceId = t;
  }
  get(t) {
    return this.cache.get(Array.isArray(t) ? t.join(Rr) : t) || null;
  }
  update(t, n) {
    const r = Array.isArray(t) ? t.join(Rr) : t, o = this.cache.get(r), a = n(o);
    a === null ? this.cache.delete(r) : this.cache.set(r, a);
  }
}
const To = "data-token-hash", Se = "data-css-hash", nc = "data-cache-path", Me = "__cssinjs_instance__";
function tt() {
  const e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    const t = document.body.querySelectorAll(`style[${Se}]`) || [], {
      firstChild: n
    } = document.head;
    Array.from(t).forEach((o) => {
      o[Me] = o[Me] || e, o[Me] === e && document.head.insertBefore(o, n);
    });
    const r = {};
    Array.from(document.querySelectorAll(`style[${Se}]`)).forEach((o) => {
      var a;
      const i = o.getAttribute(Se);
      r[i] ? o[Me] === e && ((a = o.parentNode) === null || a === void 0 || a.removeChild(o)) : r[i] = !0;
    });
  }
  return new tc(e);
}
const Io = Symbol("StyleContextKey"), rc = () => {
  var e, t, n;
  const r = ao();
  let o;
  if (r && r.appContext) {
    const a = (n = (t = (e = r.appContext) === null || e === void 0 ? void 0 : e.config) === null || t === void 0 ? void 0 : t.globalProperties) === null || n === void 0 ? void 0 : n.__ANTDV_CSSINJS_CACHE__;
    a ? o = a : (o = tt(), r.appContext.config.globalProperties && (r.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = o));
  } else
    o = tt();
  return o;
}, Mo = {
  cache: tt(),
  defaultCache: !0,
  hashPriority: "low"
}, Mt = () => {
  const e = rc();
  return fe(Io, re(m(m({}, Mo), {
    cache: e
  })));
}, oc = (e) => {
  const t = Mt(), n = re(m(m({}, Mo), {
    cache: tt()
  }));
  return ae([() => X(e), t], () => {
    const r = m({}, t.value), o = X(e);
    Object.keys(o).forEach((i) => {
      const l = o[i];
      o[i] !== void 0 && (r[i] = l);
    });
    const {
      cache: a
    } = o;
    r.cache = r.cache || tt(), r.defaultCache = !a && t.value.defaultCache, n.value = r;
  }, {
    immediate: !0
  }), me(Io, n), n;
}, ac = () => ({
  autoClear: Wt(),
  /** @private Test only. Not work in production. */
  mock: Nr(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: K(),
  /** Tell children that this context is default generated context */
  defaultCache: Wt(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: Nr(),
  /** Tell cssinjs where to inject style in */
  container: Xl(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: Wt(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: kr(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: kr()
});
Rn(L({
  name: "AStyleProvider",
  inheritAttrs: !1,
  props: ac(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return oc(e), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}));
function ic() {
  return !1;
}
let ln = !1;
function lc() {
  return ln;
}
const cc = process.env.NODE_ENV === "production" ? ic : lc;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  const e = window;
  if (typeof e.webpackHotUpdate == "function") {
    const t = e.webpackHotUpdate;
    e.webpackHotUpdate = function() {
      return ln = !0, setTimeout(() => {
        ln = !1;
      }, 0), t(...arguments);
    };
  }
}
function Eo(e, t, n, r) {
  const o = Mt(), a = re(""), i = re();
  Tt(() => {
    a.value = [e, ...t.value].join("%");
  });
  const l = cc(), c = (u) => {
    o.value.cache.update(u, (d) => {
      const [s = 0, f] = d || [];
      return s - 1 === 0 ? (r == null || r(f, !1), null) : [s - 1, f];
    });
  };
  return ae(a, (u, d) => {
    d && c(d), o.value.cache.update(u, (s) => {
      const [f = 0, g] = s || [];
      let h = g;
      process.env.NODE_ENV !== "production" && g && l && (r == null || r(h, l), h = null);
      const y = h || n();
      return [f + 1, y];
    }), i.value = o.value.cache.get(a.value)[1];
  }, {
    immediate: !0
  }), Ga(() => {
    c(a.value);
  }), i;
}
function Ge() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function sc(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
const Fr = "data-vc-order", uc = "vc-util-key", cn = /* @__PURE__ */ new Map();
function Ao() {
  let {
    mark: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return e ? e.startsWith("data-") ? e : `data-${e}` : uc;
}
function Et(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function fc(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function jo(e) {
  return Array.from((cn.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function Ho(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ge())
    return null;
  const {
    csp: n,
    prepend: r
  } = t, o = document.createElement("style");
  o.setAttribute(Fr, fc(r)), n != null && n.nonce && (o.nonce = n == null ? void 0 : n.nonce), o.innerHTML = e;
  const a = Et(t), {
    firstChild: i
  } = a;
  if (r) {
    if (r === "queue") {
      const l = jo(a).filter((c) => ["prepend", "prependQueue"].includes(c.getAttribute(Fr)));
      if (l.length)
        return a.insertBefore(o, l[l.length - 1].nextSibling), o;
    }
    a.insertBefore(o, i);
  } else
    a.appendChild(o);
  return o;
}
function ko(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = Et(t);
  return jo(n).find((r) => r.getAttribute(Ao(t)) === e);
}
function No(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = ko(e, t);
  n && Et(t).removeChild(n);
}
function dc(e, t) {
  const n = cn.get(e);
  if (!n || !sc(document, n)) {
    const r = Ho("", t), {
      parentNode: o
    } = r;
    cn.set(e, o), e.removeChild(r);
  }
}
function wt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var r, o, a;
  const i = Et(n);
  dc(i, n);
  const l = ko(t, n);
  if (l)
    return !((r = n.csp) === null || r === void 0) && r.nonce && l.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce) && (l.nonce = (a = n.csp) === null || a === void 0 ? void 0 : a.nonce), l.innerHTML !== e && (l.innerHTML = e), l;
  const c = Ho(e, n);
  return c.setAttribute(Ao(n), t), c;
}
function pc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
class He {
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
      var a;
      r ? r = (a = r == null ? void 0 : r.map) === null || a === void 0 ? void 0 : a.get(o) : r = void 0;
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
      if (this.size() + 1 > He.MAX_CACHE_SIZE + He.MAX_CACHE_OFFSET) {
        const [o] = this.keys.reduce((a, i) => {
          const [, l] = a;
          return this.internalGet(i)[1] < l ? [i, this.internalGet(i)[1]] : a;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(o);
      }
      this.keys.push(t);
    }
    let r = this.cache;
    t.forEach((o, a) => {
      if (a === t.length - 1)
        r.set(o, {
          value: [n, this.cacheCallTimes++]
        });
      else {
        const i = r.get(o);
        i ? i.map || (i.map = /* @__PURE__ */ new Map()) : r.set(o, {
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
    const a = this.deleteByPath(o.map, n.slice(1));
    return (!o.map || o.map.size === 0) && !o.value && t.delete(n[0]), a;
  }
  delete(t) {
    if (this.has(t))
      return this.keys = this.keys.filter((n) => !pc(n, t)), this.deleteByPath(this.cache, t);
  }
}
He.MAX_CACHE_SIZE = 20;
He.MAX_CACHE_OFFSET = 5;
let sn = {};
function gc(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error(`Warning: ${t}`);
}
function vc() {
  sn = {};
}
function mc(e, t, n) {
  !t && !sn[n] && (e(!1, n), sn[n] = !0);
}
function Lo(e, t) {
  mc(gc, e, t);
}
function hc() {
}
let At = hc;
process.env.NODE_ENV !== "production" && (At = (e, t, n) => {
  Lo(e, `[ant-design-vue: ${t}] ${n}`), process.env.NODE_ENV === "test" && vc();
});
let zr = 0;
class Ro {
  constructor(t) {
    this.derivatives = Array.isArray(t) ? t : [t], this.id = zr, t.length === 0 && At(t.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function."), zr += 1;
  }
  getDerivativeToken(t) {
    return this.derivatives.reduce((n, r) => r(t, n), void 0);
  }
}
const Xt = new He();
function Fo(e) {
  const t = Array.isArray(e) ? e : [e];
  return Xt.has(t) || Xt.set(t, new Ro(t)), Xt.get(t);
}
const Dr = /* @__PURE__ */ new WeakMap();
function $t(e) {
  let t = Dr.get(e) || "";
  return t || (Object.keys(e).forEach((n) => {
    const r = e[n];
    t += n, r instanceof Ro ? t += r.id : r && typeof r == "object" ? t += $t(r) : t += r;
  }), Dr.set(e, t)), t;
}
function yc(e, t) {
  return Bn(`${t}_${$t(e)}`);
}
const Qe = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ""), zo = "_bAmBoO_";
function bc(e, t, n) {
  var r, o;
  if (Ge()) {
    wt(e, Qe);
    const a = document.createElement("div");
    a.style.position = "fixed", a.style.left = "0", a.style.top = "0", t == null || t(a), document.body.appendChild(a), process.env.NODE_ENV !== "production" && (a.innerHTML = "Test", a.style.zIndex = "9999999");
    const i = n ? n(a) : (r = getComputedStyle(a).content) === null || r === void 0 ? void 0 : r.includes(zo);
    return (o = a.parentNode) === null || o === void 0 || o.removeChild(a), No(Qe), i;
  }
  return !1;
}
let qt;
function Cc() {
  return qt === void 0 && (qt = bc(`@layer ${Qe} { .${Qe} { content: "${zo}"!important; } }`, (e) => {
    e.className = Qe;
  })), qt;
}
const Br = {}, xc = process.env.NODE_ENV === "production", Sc = process.env.NODE_ENV === "prerender", Oc = !xc && !Sc ? "css-dev-only-do-not-override" : "css", ye = /* @__PURE__ */ new Map();
function wc(e) {
  ye.set(e, (ye.get(e) || 0) + 1);
}
function $c(e, t) {
  typeof document < "u" && document.querySelectorAll(`style[${To}="${e}"]`).forEach((r) => {
    var o;
    r[Me] === t && ((o = r.parentNode) === null || o === void 0 || o.removeChild(r));
  });
}
const Pc = 0;
function _c(e, t) {
  ye.set(e, (ye.get(e) || 0) - 1);
  const n = Array.from(ye.keys()), r = n.filter((o) => (ye.get(o) || 0) <= 0);
  n.length - r.length > Pc && r.forEach((o) => {
    $c(o, t), ye.delete(o);
  });
}
const Tc = (e, t, n, r) => {
  const o = n.getDerivativeToken(e);
  let a = m(m({}, o), t);
  return r && (a = r(a)), a;
};
function Ic(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : N({});
  const r = Mt(), o = x(() => m({}, ...t.value)), a = x(() => $t(o.value)), i = x(() => $t(n.value.override || Br));
  return Eo("token", x(() => [n.value.salt || "", e.value.id, a.value, i.value]), () => {
    const {
      salt: c = "",
      override: u = Br,
      formatToken: d,
      getComputedToken: s
    } = n.value, f = s ? s(o.value, u, e.value) : Tc(o.value, u, e.value, d), g = yc(f, c);
    f._tokenKey = g, wc(g);
    const h = `${Oc}-${Bn(g)}`;
    return f._hashId = h, [f, h];
  }, (c) => {
    var u;
    _c(c[0]._tokenKey, (u = r.value) === null || u === void 0 ? void 0 : u.cache.instanceId);
  });
}
var Mc = {
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
}, Do = "comm", Bo = "rule", Vo = "decl", Ec = "@import", Ac = "@keyframes", jc = "@layer", Go = Math.abs, Vn = String.fromCharCode;
function Uo(e) {
  return e.trim();
}
function mt(e, t, n) {
  return e.replace(t, n);
}
function Hc(e, t, n) {
  return e.indexOf(t, n);
}
function nt(e, t) {
  return e.charCodeAt(t) | 0;
}
function ke(e, t, n) {
  return e.slice(t, n);
}
function le(e) {
  return e.length;
}
function kc(e) {
  return e.length;
}
function dt(e, t) {
  return t.push(e), e;
}
var jt = 1, Ne = 1, Wo = 0, ee = 0, F = 0, Ue = "";
function Gn(e, t, n, r, o, a, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: a, line: jt, column: Ne, length: i, return: "", siblings: l };
}
function Nc() {
  return F;
}
function Lc() {
  return F = ee > 0 ? nt(Ue, --ee) : 0, Ne--, F === 10 && (Ne = 1, jt--), F;
}
function oe() {
  return F = ee < Wo ? nt(Ue, ee++) : 0, Ne++, F === 10 && (Ne = 1, jt++), F;
}
function ge() {
  return nt(Ue, ee);
}
function ht() {
  return ee;
}
function Ht(e, t) {
  return ke(Ue, e, t);
}
function rt(e) {
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
function Rc(e) {
  return jt = Ne = 1, Wo = le(Ue = e), ee = 0, [];
}
function Fc(e) {
  return Ue = "", e;
}
function Yt(e) {
  return Uo(Ht(ee - 1, un(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function zc(e) {
  for (; (F = ge()) && F < 33; )
    oe();
  return rt(e) > 2 || rt(F) > 3 ? "" : " ";
}
function Dc(e, t) {
  for (; --t && oe() && !(F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97); )
    ;
  return Ht(e, ht() + (t < 6 && ge() == 32 && oe() == 32));
}
function un(e) {
  for (; oe(); )
    switch (F) {
      case e:
        return ee;
      case 34:
      case 39:
        e !== 34 && e !== 39 && un(F);
        break;
      case 40:
        e === 41 && un(e);
        break;
      case 92:
        oe();
        break;
    }
  return ee;
}
function Bc(e, t) {
  for (; oe() && e + F !== 57; )
    if (e + F === 84 && ge() === 47)
      break;
  return "/*" + Ht(t, ee - 1) + "*" + Vn(e === 47 ? e : oe());
}
function Vc(e) {
  for (; !rt(ge()); )
    oe();
  return Ht(e, ee);
}
function Gc(e) {
  return Fc(yt("", null, null, null, [""], e = Rc(e), 0, [0], e));
}
function yt(e, t, n, r, o, a, i, l, c) {
  for (var u = 0, d = 0, s = i, f = 0, g = 0, h = 0, y = 1, S = 1, C = 1, w = 0, M = "", $ = o, O = a, I = r, v = M; S; )
    switch (h = w, w = oe()) {
      case 40:
        if (h != 108 && nt(v, s - 1) == 58) {
          Hc(v += mt(Yt(w), "&", "&\f"), "&\f", Go(u ? l[u - 1] : 0)) != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        v += Yt(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        v += zc(h);
        break;
      case 92:
        v += Dc(ht() - 1, 7);
        continue;
      case 47:
        switch (ge()) {
          case 42:
          case 47:
            dt(Uc(Bc(oe(), ht()), t, n, c), c), (rt(h || 1) == 5 || rt(ge() || 1) == 5) && le(v) && ke(v, -1, void 0) !== " " && (v += " ");
            break;
          default:
            v += "/";
        }
        break;
      case 123 * y:
        l[u++] = le(v) * C;
      case 125 * y:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            S = 0;
          case 59 + d:
            C == -1 && (v = mt(v, /\f/g, "")), g > 0 && (le(v) - s || y === 0 && h === 47) && dt(g > 32 ? Gr(v + ";", r, n, s - 1, c) : Gr(mt(v, " ", "") + ";", r, n, s - 2, c), c);
            break;
          case 59:
            v += ";";
          default:
            if (dt(I = Vr(v, t, n, u, d, o, l, M, $ = [], O = [], s, a), a), w === 123)
              if (d === 0)
                yt(v, t, I, I, $, a, s, l, O);
              else
                switch (f === 99 && nt(v, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    yt(e, I, I, r && dt(Vr(e, I, I, 0, 0, o, l, M, o, $ = [], s, O), O), o, O, s, l, r ? $ : O);
                    break;
                  default:
                    yt(v, I, I, I, [""], O, 0, l, O);
                }
        }
        u = d = g = 0, y = C = 1, M = v = "", s = i;
        break;
      case 58:
        s = 1 + le(v), g = h;
      default:
        if (y < 1) {
          if (w == 123)
            --y;
          else if (w == 125 && y++ == 0 && Lc() == 125)
            continue;
        }
        switch (v += Vn(w), w * y) {
          case 38:
            C = d > 0 ? 1 : (v += "\f", -1);
            break;
          case 44:
            l[u++] = (le(v) - 1) * C, C = 1;
            break;
          case 64:
            ge() === 45 && (v += Yt(oe())), f = ge(), d = s = le(M = v += Vc(ht())), w++;
            break;
          case 45:
            h === 45 && le(v) == 2 && (y = 0);
        }
    }
  return a;
}
function Vr(e, t, n, r, o, a, i, l, c, u, d, s) {
  for (var f = o - 1, g = o === 0 ? a : [""], h = kc(g), y = 0, S = 0, C = 0; y < r; ++y)
    for (var w = 0, M = ke(e, f + 1, f = Go(S = i[y])), $ = e; w < h; ++w)
      ($ = Uo(S > 0 ? g[w] + " " + M : mt(M, /&\f/g, g[w]))) && (c[C++] = $);
  return Gn(e, t, n, o === 0 ? Bo : l, c, u, d, s);
}
function Uc(e, t, n, r) {
  return Gn(e, t, n, Do, Vn(Nc()), ke(e, 2, -2), 0, r);
}
function Gr(e, t, n, r, o) {
  return Gn(e, t, n, Vo, ke(e, 0, r), ke(e, r + 1, -1), r, o);
}
function fn(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Wc(e, t, n, r) {
  switch (e.type) {
    case jc:
      if (e.children.length) break;
    case Ec:
    case Vo:
      return e.return = e.return || e.value;
    case Do:
      return "";
    case Ac:
      return e.return = e.value + "{" + fn(e.children, r) + "}";
    case Bo:
      if (!le(e.value = e.props.join(","))) return "";
  }
  return le(n = fn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Xo(e, t) {
  const {
    path: n,
    parentSelectors: r
  } = t;
  Lo(!1, `[Ant Design Vue CSS-in-JS] ${n ? `Error in '${n}': ` : ""}${e}${r.length ? ` Selector info: ${r.join(" -> ")}` : ""}`);
}
const Xc = (e, t, n) => {
  if (e === "content") {
    const r = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    (typeof t != "string" || ["normal", "none", "initial", "inherit", "unset"].indexOf(t) === -1 && !r.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Xo(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${t}"'\`.`, n);
  }
}, qc = (e, t, n) => {
  e === "animation" && n.hashId && t !== "none" && Xo(`You seem to be using hashed animation '${t}', in which case 'animationName' with Keyframe as value is recommended.`, n);
}, Ur = "data-ant-cssinjs-cache-path", Yc = "_FILE_STYLE__";
let Oe, qo = !0;
function Kc() {
  var e;
  if (!Oe && (Oe = {}, Ge())) {
    const t = document.createElement("div");
    t.className = Ur, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    let n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach((o) => {
      const [a, i] = o.split(":");
      Oe[a] = i;
    });
    const r = document.querySelector(`style[${Ur}]`);
    r && (qo = !1, (e = r.parentNode) === null || e === void 0 || e.removeChild(r)), document.body.removeChild(t);
  }
}
function Qc(e) {
  return Kc(), !!Oe[e];
}
function Zc(e) {
  const t = Oe[e];
  let n = null;
  if (t && Ge())
    if (qo)
      n = Yc;
    else {
      const r = document.querySelector(`style[${Se}="${Oe[e]}"]`);
      r ? n = r.innerHTML : delete Oe[e];
    }
  return [n, t];
}
const Wr = Ge(), Yo = "_skip_check_", Ko = "_multi_value_";
function Xr(e) {
  return fn(Gc(e), Wc).replace(/\{%%%\:[^;];}/g, ";");
}
function Jc(e) {
  return typeof e == "object" && e && (Yo in e || Ko in e);
}
function es(e, t, n) {
  if (!t)
    return e;
  const r = `.${t}`, o = n === "low" ? `:where(${r})` : r;
  return e.split(",").map((i) => {
    var l;
    const c = i.trim().split(/\s+/);
    let u = c[0] || "";
    const d = ((l = u.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return u = `${d}${o}${u.slice(d.length)}`, [u, ...c.slice(1)].join(" ");
  }).join(",");
}
const dn = /* @__PURE__ */ new Set();
process.env.NODE_ENV;
const pn = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    root: n,
    injectHash: r,
    parentSelectors: o
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  };
  const {
    hashId: a,
    layer: i,
    path: l,
    hashPriority: c,
    transformers: u = [],
    linters: d = []
  } = t;
  let s = "", f = {};
  function g(S) {
    const C = S.getName(a);
    if (!f[C]) {
      const [w] = pn(S.style, t, {
        root: !1,
        parentSelectors: o
      });
      f[C] = `@keyframes ${S.getName(a)}${w}`;
    }
  }
  function h(S) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return S.forEach((w) => {
      Array.isArray(w) ? h(w, C) : w && C.push(w);
    }), C;
  }
  if (h(Array.isArray(e) ? e : [e]).forEach((S) => {
    const C = typeof S == "string" && !n ? {} : S;
    if (typeof C == "string")
      s += `${C}
`;
    else if (C._keyframe)
      g(C);
    else {
      const w = u.reduce((M, $) => {
        var O;
        return ((O = $ == null ? void 0 : $.visit) === null || O === void 0 ? void 0 : O.call($, M)) || M;
      }, C);
      Object.keys(w).forEach((M) => {
        var $;
        const O = w[M];
        if (typeof O == "object" && O && (M !== "animationName" || !O._keyframe) && !Jc(O)) {
          let I = !1, v = M.trim(), P = !1;
          (n || r) && a ? v.startsWith("@") ? I = !0 : v = es(M, a, c) : n && !a && (v === "&" || v === "") && (v = "", P = !0);
          const [A, E] = pn(O, t, {
            root: P,
            injectHash: I,
            parentSelectors: [...o, v]
          });
          f = m(m({}, f), E), s += `${v}${A}`;
        } else {
          let I = function(P, A) {
            process.env.NODE_ENV !== "production" && (typeof O != "object" || !(O != null && O[Yo])) && [Xc, qc, ...d].forEach((j) => j(P, A, {
              path: l,
              hashId: a,
              parentSelectors: o
            }));
            const E = P.replace(/[A-Z]/g, (j) => `-${j.toLowerCase()}`);
            let _ = A;
            !Mc[P] && typeof _ == "number" && _ !== 0 && (_ = `${_}px`), P === "animationName" && (A != null && A._keyframe) && (g(A), _ = A.getName(a)), s += `${E}:${_};`;
          };
          const v = ($ = O == null ? void 0 : O.value) !== null && $ !== void 0 ? $ : O;
          typeof O == "object" && (O != null && O[Ko]) && Array.isArray(v) ? v.forEach((P) => {
            I(M, P);
          }) : I(M, v);
        }
      });
    }
  }), !n)
    s = `{${s}}`;
  else if (i && Cc()) {
    const S = i.split(",");
    s = `@layer ${S[S.length - 1].trim()} {${s}}`, S.length > 1 && (s = `@layer ${i}{%%%:%}${s}`);
  }
  return [s, f];
};
function ts(e, t) {
  return Bn(`${e.join("%")}${t}`);
}
function gn(e, t) {
  const n = Mt(), r = x(() => e.value.token._tokenKey), o = x(() => [r.value, ...e.value.path]);
  let a = Wr;
  return process.env.NODE_ENV !== "production" && n.value.mock !== void 0 && (a = n.value.mock === "client"), Eo(
    "style",
    o,
    // Create cache if needed
    () => {
      const {
        path: i,
        hashId: l,
        layer: c,
        nonce: u,
        clientOnly: d,
        order: s = 0
      } = e.value, f = o.value.join("|");
      if (Qc(f)) {
        const [v, P] = Zc(f);
        if (v)
          return [v, r.value, P, {}, d, s];
      }
      const g = t(), {
        hashPriority: h,
        container: y,
        transformers: S,
        linters: C,
        cache: w
      } = n.value, [M, $] = pn(g, {
        hashId: l,
        hashPriority: h,
        layer: c,
        path: i.join("-"),
        transformers: S,
        linters: C
      }), O = Xr(M), I = ts(o.value, O);
      if (a) {
        const v = {
          mark: Se,
          prepend: "queue",
          attachTo: y,
          priority: s
        }, P = typeof u == "function" ? u() : u;
        P && (v.csp = {
          nonce: P
        });
        const A = wt(O, I, v);
        A[Me] = w.instanceId, A.setAttribute(To, r.value), process.env.NODE_ENV !== "production" && A.setAttribute(nc, o.value.join("|")), Object.keys($).forEach((E) => {
          dn.has(E) || (dn.add(E), wt(Xr($[E]), `_effect-${E}`, {
            mark: Se,
            prepend: "queue",
            attachTo: y
          }));
        });
      }
      return [O, r.value, I, $, d, s];
    },
    // Remove cache if no need
    (i, l) => {
      let [, , c] = i;
      (l || n.value.autoClear) && Wr && No(c, {
        mark: Se
      });
    }
  ), (i) => i;
}
class we {
  constructor(t, n) {
    this._keyframe = !0, this.name = t, this.style = n;
  }
  getName() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return t ? `${t}-${this.name}` : this.name;
  }
}
const ns = "4.2.6", rs = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function os(e) {
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
const Qo = {
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
}, kt = m(m({}, Qo), {
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
function as(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: o,
    colorWarning: a,
    colorError: i,
    colorInfo: l,
    colorPrimary: c,
    colorBgBase: u,
    colorTextBase: d
  } = e, s = n(c), f = n(o), g = n(a), h = n(i), y = n(l), S = r(u, d);
  return m(m({}, S), {
    colorPrimaryBg: s[1],
    colorPrimaryBgHover: s[2],
    colorPrimaryBorder: s[3],
    colorPrimaryBorderHover: s[4],
    colorPrimaryHover: s[5],
    colorPrimary: s[6],
    colorPrimaryActive: s[7],
    colorPrimaryTextHover: s[8],
    colorPrimaryText: s[9],
    colorPrimaryTextActive: s[10],
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
    colorWarningBg: g[1],
    colorWarningBgHover: g[2],
    colorWarningBorder: g[3],
    colorWarningBorderHover: g[4],
    colorWarningHover: g[4],
    colorWarning: g[6],
    colorWarningActive: g[7],
    colorWarningTextHover: g[8],
    colorWarningText: g[9],
    colorWarningTextActive: g[10],
    colorInfoBg: y[1],
    colorInfoBgHover: y[2],
    colorInfoBorder: y[3],
    colorInfoBorderHover: y[4],
    colorInfoHover: y[4],
    colorInfo: y[6],
    colorInfoActive: y[7],
    colorInfoTextHover: y[8],
    colorInfoText: y[9],
    colorInfoTextActive: y[10],
    colorBgMask: new D("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const is = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function ls(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = e;
  return m({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, is(r));
}
const ue = (e, t) => new D(e).setAlpha(t).toRgbString(), We = (e, t) => new D(e).darken(t).toHexString(), cs = (e) => {
  const t = $e(e);
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
}, ss = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: ue(r, 0.88),
    colorTextSecondary: ue(r, 0.65),
    colorTextTertiary: ue(r, 0.45),
    colorTextQuaternary: ue(r, 0.25),
    colorFill: ue(r, 0.15),
    colorFillSecondary: ue(r, 0.06),
    colorFillTertiary: ue(r, 0.04),
    colorFillQuaternary: ue(r, 0.02),
    colorBgLayout: We(n, 4),
    colorBgContainer: We(n, 0),
    colorBgElevated: We(n, 0),
    colorBgSpotlight: ue(r, 0.85),
    colorBorder: We(n, 15),
    colorBorderSecondary: We(n, 6)
  };
};
function us(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const o = r - 1, a = e * Math.pow(2.71828, o / 5), i = r > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => {
    const r = n + 8;
    return {
      size: n,
      lineHeight: r / n
    };
  });
}
const fs = (e) => {
  const t = us(e), n = t.map((o) => o.size), r = t.map((o) => o.lineHeight);
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
function ds(e) {
  const t = Object.keys(Qo).map((n) => {
    const r = $e(e[n]);
    return new Array(10).fill(1).reduce((o, a, i) => (o[`${n}-${i + 1}`] = r[i], o), {});
  }).reduce((n, r) => (n = m(m({}, n), r), n), {});
  return m(m(m(m(m(m(m({}, e), t), as(e, {
    generateColorPalettes: cs,
    generateNeutralColorPalettes: ss
  })), fs(e.fontSize)), os(e)), rs(e)), ls(e));
}
function Kt(e) {
  return e >= 0 && e <= 255;
}
function pt(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a
  } = new D(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: l,
    b: c
  } = new D(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const d = Math.round((n - i * (1 - u)) / u), s = Math.round((r - l * (1 - u)) / u), f = Math.round((o - c * (1 - u)) / u);
    if (Kt(d) && Kt(s) && Kt(f))
      return new D({
        r: d,
        g: s,
        b: f,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new D({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var ps = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function gs(e) {
  const {
    override: t
  } = e, n = ps(e, ["override"]), r = m({}, t);
  Object.keys(kt).forEach((g) => {
    delete r[g];
  });
  const o = m(m({}, n), r), a = 480, i = 576, l = 768, c = 992, u = 1200, d = 1600, s = 2e3;
  return m(m(m({}, o), {
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
    colorSplit: pt(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: pt(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: pt(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: pt(o.colorPrimaryBg, o.colorBgContainer),
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
    screenXS: a,
    screenXSMin: a,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: d - 1,
    screenXXL: d,
    screenXXLMin: d,
    screenXXLMax: s - 1,
    screenXXXL: s,
    screenXXXLMin: s,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new D("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new D("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new D("rgba(0, 0, 0, 0.09)").toRgbString()}
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
const Zo = (e) => ({
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
}), vs = () => ({
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
}), ms = (e) => ({
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
}), hs = (e, t) => {
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
function Un(e, t, n) {
  return (r) => {
    const o = x(() => r == null ? void 0 : r.value), [a, i, l] = Lt(), {
      getPrefixCls: c,
      iconPrefixCls: u
    } = Dn(), d = x(() => c()), s = x(() => ({
      theme: a.value,
      token: i.value,
      hashId: l.value,
      path: ["Shared", d.value]
    }));
    gn(s, () => [{
      // Link
      "&": ms(i.value)
    }]);
    const f = x(() => ({
      theme: a.value,
      token: i.value,
      hashId: l.value,
      path: [e, o.value, u.value]
    }));
    return [gn(f, () => {
      const {
        token: g,
        flush: h
      } = bs(i.value), y = typeof n == "function" ? n(g) : n, S = m(m({}, y), i.value[e]), C = `.${o.value}`, w = Nt(g, {
        componentCls: C,
        prefixCls: o.value,
        iconCls: `.${u.value}`,
        antCls: `.${d.value}`
      }, S), M = t(w, {
        hashId: l.value,
        prefixCls: o.value,
        rootPrefixCls: d.value,
        iconPrefixCls: u.value,
        overrideComponentToken: i.value[e]
      });
      return h(e, S), [hs(i.value, o.value), M];
    }), l];
  };
}
const Jo = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let vn = !0;
function Nt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Jo)
    return m({}, ...t);
  vn = !1;
  const r = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((i) => {
      Object.defineProperty(r, i, {
        configurable: !0,
        enumerable: !0,
        get: () => o[i]
      });
    });
  }), vn = !0, r;
}
function ys() {
}
function bs(e) {
  let t, n = e, r = ys;
  return Jo && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(o, a) {
      return vn && t.add(a), o[a];
    }
  }), r = (o, a) => {
    Array.from(t);
  }), {
    token: n,
    keys: t,
    flush: r
  };
}
const Cs = Fo(ds), ea = {
  token: kt,
  hashed: !0
}, ta = Symbol("DesignTokenContext"), mn = re(), xs = (e) => {
  me(ta, e), ae(e, () => {
    mn.value = X(e), Ua(mn);
  }, {
    immediate: !0,
    deep: !0
  });
}, Ss = L({
  props: {
    value: K()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return xs(x(() => e.value)), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
function Lt() {
  const e = fe(ta, x(() => mn.value || ea)), t = x(() => `${ns}-${e.value.hashed || ""}`), n = x(() => e.value.theme || Cs), r = Ic(n, x(() => [kt, e.value.token]), x(() => ({
    salt: t.value,
    override: m({
      override: e.value.token
    }, e.value.components),
    formatToken: gs
  })));
  return [n, x(() => r.value[0]), x(() => e.value.hashed ? r.value[1] : "")];
}
const Wn = L({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = Lt(), t = x(() => new D(e.value.colorBgBase).toHsl().l < 0.5 ? {
      opacity: 0.65
    } : {});
    return () => p("svg", {
      style: t.value,
      width: "184",
      height: "152",
      viewBox: "0 0 184 152",
      xmlns: "http://www.w3.org/2000/svg"
    }, [p("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, [p("g", {
      transform: "translate(24 31.67)"
    }, [p("ellipse", {
      "fill-opacity": ".8",
      fill: "#F5F5F7",
      cx: "67.797",
      cy: "106.89",
      rx: "67.797",
      ry: "12.668"
    }, null), p("path", {
      d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      fill: "#AEB8C2"
    }, null), p("path", {
      d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      fill: "url(#linearGradient-1)",
      transform: "translate(13.56)"
    }, null), p("path", {
      d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      fill: "#F5F5F7"
    }, null), p("path", {
      d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      fill: "#DCE0E6"
    }, null)]), p("path", {
      d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      fill: "#DCE0E6"
    }, null), p("g", {
      transform: "translate(149.65 15.383)",
      fill: "#FFF"
    }, [p("ellipse", {
      cx: "20.654",
      cy: "3.167",
      rx: "2.849",
      ry: "2.815"
    }, null), p("path", {
      d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Wn.PRESENTED_IMAGE_DEFAULT = !0;
const na = L({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = Lt(), t = x(() => {
      const {
        colorFill: n,
        colorFillTertiary: r,
        colorFillQuaternary: o,
        colorBgContainer: a
      } = e.value;
      return {
        borderColor: new D(n).onBackground(a).toHexString(),
        shadowColor: new D(r).onBackground(a).toHexString(),
        contentColor: new D(o).onBackground(a).toHexString()
      };
    });
    return () => p("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, [p("g", {
      transform: "translate(0 1)",
      fill: "none",
      "fill-rule": "evenodd"
    }, [p("ellipse", {
      fill: t.value.shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }, null), p("g", {
      "fill-rule": "nonzero",
      stroke: t.value.borderColor
    }, [p("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), p("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: t.value.contentColor
    }, null)])])]);
  }
});
na.PRESENTED_IMAGE_SIMPLE = !0;
const Os = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: r,
    marginXL: o,
    fontSize: a,
    lineHeight: i
  } = e;
  return {
    [t]: {
      marginInline: r,
      fontSize: a,
      lineHeight: i,
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
}, ws = Un("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, r = Nt(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [Os(r)];
});
var $s = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ps = () => ({
  prefixCls: String,
  imageStyle: K(),
  image: an(),
  description: an()
}), Xn = L({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: Ps(),
  setup(e, t) {
    let {
      slots: n = {},
      attrs: r
    } = t;
    const {
      direction: o,
      prefixCls: a
    } = lt("empty", e), [i, l] = ws(a);
    return () => {
      var c, u;
      const d = a.value, s = m(m({}, e), r), {
        image: f = ((c = n.image) === null || c === void 0 ? void 0 : c.call(n)) || Ae(Wn),
        description: g = ((u = n.description) === null || u === void 0 ? void 0 : u.call(n)) || void 0,
        imageStyle: h,
        class: y = ""
      } = s, S = $s(s, ["image", "description", "imageStyle", "class"]), C = typeof f == "function" ? f() : f, w = typeof C == "object" && "type" in C && C.type.PRESENTED_IMAGE_SIMPLE;
      return i(p(_o, {
        componentName: "Empty",
        children: (M) => {
          const $ = typeof g < "u" ? g : M.description, O = typeof $ == "string" ? $ : "empty";
          let I = null;
          return typeof C == "string" ? I = p("img", {
            alt: O,
            src: C
          }, null) : I = C, p("div", R({
            class: W(d, y, l.value, {
              [`${d}-normal`]: w,
              [`${d}-rtl`]: o.value === "rtl"
            })
          }, S), [p("div", {
            class: `${d}-image`,
            style: h
          }, [I]), $ && p("p", {
            class: `${d}-description`
          }, [$]), n.default && p("div", {
            class: `${d}-footer`
          }, [So(n.default())])]);
        }
      }, null));
    };
  }
});
Xn.PRESENTED_IMAGE_DEFAULT = () => Ae(Wn);
Xn.PRESENTED_IMAGE_SIMPLE = () => Ae(na);
const Xe = Rn(Xn), ra = (e) => {
  const {
    prefixCls: t
  } = lt("empty", e);
  return ((r) => {
    switch (r) {
      case "Table":
      case "List":
        return p(Xe, {
          image: Xe.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return p(Xe, {
          image: Xe.PRESENTED_IMAGE_SIMPLE,
          class: `${t.value}-small`
        }, null);
      default:
        return p(Xe, null, null);
    }
  })(e.componentName);
};
function _s(e) {
  return p(ra, {
    componentName: e
  }, null);
}
const oa = Symbol("SizeContextKey"), aa = () => fe(oa, N(void 0)), Ts = (e) => {
  const t = aa();
  return me(oa, x(() => e.value || t.value)), e;
}, lt = (e, t) => {
  const n = aa(), r = $o(), o = fe(zn, m(m({}, Oo), {
    renderEmpty: (v) => Ae(ra, {
      componentName: v
    })
  })), a = x(() => o.getPrefixCls(e, t.prefixCls)), i = x(() => {
    var v, P;
    return (v = t.direction) !== null && v !== void 0 ? v : (P = o.direction) === null || P === void 0 ? void 0 : P.value;
  }), l = x(() => {
    var v;
    return (v = t.iconPrefixCls) !== null && v !== void 0 ? v : o.iconPrefixCls.value;
  }), c = x(() => o.getPrefixCls()), u = x(() => {
    var v;
    return (v = o.autoInsertSpaceInButton) === null || v === void 0 ? void 0 : v.value;
  }), d = o.renderEmpty, s = o.space, f = o.pageHeader, g = o.form, h = x(() => {
    var v, P;
    return (v = t.getTargetContainer) !== null && v !== void 0 ? v : (P = o.getTargetContainer) === null || P === void 0 ? void 0 : P.value;
  }), y = x(() => {
    var v, P, A;
    return (P = (v = t.getContainer) !== null && v !== void 0 ? v : t.getPopupContainer) !== null && P !== void 0 ? P : (A = o.getPopupContainer) === null || A === void 0 ? void 0 : A.value;
  }), S = x(() => {
    var v, P;
    return (v = t.dropdownMatchSelectWidth) !== null && v !== void 0 ? v : (P = o.dropdownMatchSelectWidth) === null || P === void 0 ? void 0 : P.value;
  }), C = x(() => {
    var v;
    return (t.virtual === void 0 ? ((v = o.virtual) === null || v === void 0 ? void 0 : v.value) !== !1 : t.virtual !== !1) && S.value !== !1;
  }), w = x(() => t.size || n.value), M = x(() => {
    var v, P, A;
    return (v = t.autocomplete) !== null && v !== void 0 ? v : (A = (P = o.input) === null || P === void 0 ? void 0 : P.value) === null || A === void 0 ? void 0 : A.autocomplete;
  }), $ = x(() => {
    var v;
    return (v = t.disabled) !== null && v !== void 0 ? v : r.value;
  }), O = x(() => {
    var v;
    return (v = t.csp) !== null && v !== void 0 ? v : o.csp;
  }), I = x(() => {
    var v, P;
    return (v = t.wave) !== null && v !== void 0 ? v : (P = o.wave) === null || P === void 0 ? void 0 : P.value;
  });
  return {
    configProvider: o,
    prefixCls: a,
    direction: i,
    size: w,
    getTargetContainer: h,
    getPopupContainer: y,
    space: s,
    pageHeader: f,
    form: g,
    autoInsertSpaceInButton: u,
    renderEmpty: d,
    virtual: C,
    dropdownMatchSelectWidth: S,
    rootPrefixCls: c,
    getPrefixCls: o.getPrefixCls,
    autocomplete: M,
    csp: O,
    iconPrefixCls: l,
    disabled: $,
    select: o.select,
    wave: I
  };
};
function Is(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ia(e, t, n) {
  return n && Is(e, n), e;
}
function bt() {
  return (bt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function la(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function ca(e, t) {
  if (e == null) return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function qr(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var sa = Object.prototype, ua = sa.toString, Ms = sa.hasOwnProperty, fa = /^\s*function (\w+)/;
function Yr(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var r = n.toString().match(fa);
    return r ? r[1] : "";
  }
  return "";
}
var Pe = function(e) {
  var t, n;
  return qr(e) !== !1 && typeof (t = e.constructor) == "function" && qr(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, da = function(e) {
  return e;
}, G = da;
if (process.env.NODE_ENV !== "production") {
  var Es = typeof console < "u";
  G = Es ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : da;
}
var ot = function(e, t) {
  return Ms.call(e, t);
}, As = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, Le = Array.isArray || function(e) {
  return ua.call(e) === "[object Array]";
}, Re = function(e) {
  return ua.call(e) === "[object Function]";
}, Pt = function(e) {
  return Pe(e) && ot(e, "_vueTypes_name");
}, pa = function(e) {
  return Pe(e) && (ot(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return ot(e, t);
  }));
};
function qn(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function _e(e, t, n) {
  var r;
  n === void 0 && (n = !1);
  var o = !0, a = "";
  r = Pe(e) ? e : { type: e };
  var i = Pt(r) ? r._vueTypes_name + " - " : "";
  if (pa(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || !r.required && t === void 0) return o;
    Le(r.type) ? (o = r.type.some(function(s) {
      return _e(s, t, !0) === !0;
    }), a = r.type.map(function(s) {
      return Yr(s);
    }).join(" or ")) : o = (a = Yr(r)) === "Array" ? Le(t) : a === "Object" ? Pe(t) : a === "String" || a === "Number" || a === "Boolean" || a === "Function" ? function(s) {
      if (s == null) return "";
      var f = s.constructor.toString().match(fa);
      return f ? f[1] : "";
    }(t) === a : t instanceof r.type;
  }
  if (!o) {
    var l = i + 'value "' + t + '" should be of type "' + a + '"';
    return n === !1 ? (G(l), !1) : l;
  }
  if (ot(r, "validator") && Re(r.validator)) {
    var c = G, u = [];
    if (G = function(s) {
      u.push(s);
    }, o = r.validator(t), G = c, !o) {
      var d = (u.length > 1 ? "* " : "") + u.join(`
* `);
      return u.length = 0, n === !1 ? (G(d), o) : d;
    }
  }
  return o;
}
function Q(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(o) {
    return o !== void 0 || this.default ? Re(o) || _e(this, o, !0) === !0 ? (this.default = Le(o) ? function() {
      return [].concat(o);
    } : Pe(o) ? function() {
      return Object.assign({}, o);
    } : o, this) : (G(this._vueTypes_name + ' - invalid default value: "' + o + '"'), this) : this;
  } } }), r = n.validator;
  return Re(r) && (n.validator = qn(r, n)), n;
}
function ce(e, t) {
  var n = Q(e, t);
  return Object.defineProperty(n, "validate", { value: function(r) {
    return Re(this.validator) && G(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = qn(r, this), this;
  } });
}
function Kr(e, t, n) {
  var r, o, a = (r = t, o = {}, Object.getOwnPropertyNames(r).forEach(function(s) {
    o[s] = Object.getOwnPropertyDescriptor(r, s);
  }), Object.defineProperties({}, o));
  if (a._vueTypes_name = e, !Pe(n)) return a;
  var i, l, c = n.validator, u = ca(n, ["validator"]);
  if (Re(c)) {
    var d = a.validator;
    d && (d = (l = (i = d).__original) !== null && l !== void 0 ? l : i), a.validator = qn(d ? function(s) {
      return d.call(this, s) && c.call(this, s);
    } : c, a);
  }
  return Object.assign(a, u);
}
function Rt(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var js = function() {
  return ce("any", {});
}, Hs = function() {
  return ce("function", { type: Function });
}, ks = function() {
  return ce("boolean", { type: Boolean });
}, Ns = function() {
  return ce("string", { type: String });
}, Ls = function() {
  return ce("number", { type: Number });
}, Rs = function() {
  return ce("array", { type: Array });
}, Fs = function() {
  return ce("object", { type: Object });
}, zs = function() {
  return Q("integer", { type: Number, validator: function(e) {
    return As(e);
  } });
}, Ds = function() {
  return Q("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function Bs(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function") throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return Q(e.name || "<<anonymous function>>", { validator: function(n) {
    var r = e(n);
    return r || G(this._vueTypes_name + " - " + t), r;
  } });
}
function Vs(e) {
  if (!Le(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(r, o) {
    if (o != null) {
      var a = o.constructor;
      r.indexOf(a) === -1 && r.push(a);
    }
    return r;
  }, []);
  return Q("oneOf", { type: n.length > 0 ? n : void 0, validator: function(r) {
    var o = e.indexOf(r) !== -1;
    return o || G(t), o;
  } });
}
function Gs(e) {
  if (!Le(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
    var o = e[r];
    if (pa(o)) {
      if (Pt(o) && o._vueTypes_name === "oneOf") {
        n = n.concat(o.type);
        continue;
      }
      if (Re(o.validator) && (t = !0), o.type !== !0 && o.type) {
        n = n.concat(o.type);
        continue;
      }
    }
    n.push(o);
  }
  return n = n.filter(function(a, i) {
    return n.indexOf(a) === i;
  }), Q("oneOfType", t ? { type: n, validator: function(a) {
    var i = [], l = e.some(function(c) {
      var u = _e(Pt(c) && c._vueTypes_name === "oneOf" ? c.type || null : c, a, !0);
      return typeof u == "string" && i.push(u), u === !0;
    });
    return l || G("oneOfType - provided value does not match any of the " + i.length + ` passed-in validators:
` + Rt(i.join(`
`))), l;
  } } : { type: n });
}
function Us(e) {
  return Q("arrayOf", { type: Array, validator: function(t) {
    var n, r = t.every(function(o) {
      return (n = _e(e, o, !0)) === !0;
    });
    return r || G(`arrayOf - value validation error:
` + Rt(n)), r;
  } });
}
function Ws(e) {
  return Q("instanceOf", { type: e });
}
function Xs(e) {
  return Q("objectOf", { type: Object, validator: function(t) {
    var n, r = Object.keys(t).every(function(o) {
      return (n = _e(e, t[o], !0)) === !0;
    });
    return r || G(`objectOf - value validation error:
` + Rt(n)), r;
  } });
}
function qs(e) {
  var t = Object.keys(e), n = t.filter(function(o) {
    var a;
    return !!(!((a = e[o]) === null || a === void 0) && a.required);
  }), r = Q("shape", { type: Object, validator: function(o) {
    var a = this;
    if (!Pe(o)) return !1;
    var i = Object.keys(o);
    if (n.length > 0 && n.some(function(c) {
      return i.indexOf(c) === -1;
    })) {
      var l = n.filter(function(c) {
        return i.indexOf(c) === -1;
      });
      return G(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
    }
    return i.every(function(c) {
      if (t.indexOf(c) === -1) return a._vueTypes_isLoose === !0 || (G('shape - shape definition does not include a "' + c + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var u = _e(e[c], o[c], !0);
      return typeof u == "string" && G('shape - "' + c + `" property validation error:
 ` + Rt(u)), u === !0;
    });
  } });
  return Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), r;
}
var ie = function() {
  function e() {
  }
  return e.extend = function(t) {
    var n = this;
    if (Le(t)) return t.forEach(function(s) {
      return n.extend(s);
    }), this;
    var r = t.name, o = t.validate, a = o !== void 0 && o, i = t.getter, l = i !== void 0 && i, c = ca(t, ["name", "validate", "getter"]);
    if (ot(this, r)) throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
    var u, d = c.type;
    return Pt(d) ? (delete c.type, Object.defineProperty(this, r, l ? { get: function() {
      return Kr(r, d, c);
    } } : { value: function() {
      var s, f = Kr(r, d, c);
      return f.validator && (f.validator = (s = f.validator).bind.apply(s, [f].concat([].slice.call(arguments)))), f;
    } })) : (u = l ? { get: function() {
      var s = Object.assign({}, c);
      return a ? ce(r, s) : Q(r, s);
    }, enumerable: !0 } : { value: function() {
      var s, f, g = Object.assign({}, c);
      return s = a ? ce(r, g) : Q(r, g), g.validator && (s.validator = (f = g.validator).bind.apply(f, [s].concat([].slice.call(arguments)))), s;
    }, enumerable: !0 }, Object.defineProperty(this, r, u));
  }, ia(e, null, [{ key: "any", get: function() {
    return js();
  } }, { key: "func", get: function() {
    return Hs().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return ks().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return Ns().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return Ls().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return Rs().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return Fs().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return zs().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return Ds();
  } }]), e;
}();
function ga(e) {
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
    return la(r, n), ia(r, null, [{ key: "sensibleDefaults", get: function() {
      return bt({}, this.defaults);
    }, set: function(o) {
      this.defaults = o !== !1 ? bt({}, o !== !0 ? o : e) : {};
    } }]), r;
  }(ie)).defaults = bt({}, e), t;
}
ie.defaults = {}, ie.custom = Bs, ie.oneOf = Vs, ie.instanceOf = Ws, ie.oneOfType = Gs, ie.arrayOf = Us, ie.objectOf = Xs, ie.shape = qs, ie.utils = { validate: function(e, t) {
  return _e(t, e, !0) === !0;
}, toType: function(e, t, n) {
  return n === void 0 && (n = !1), n ? ce(e, t) : Q(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return la(t, e), t;
})(ga());
const va = ga({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
va.extend([{
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
function Ys(e) {
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
Wl("bottomLeft", "bottomRight", "topLeft", "topRight");
const ma = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return m(e ? {
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
}, ha = Symbol("PortalContextKey"), Ks = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: !0
  };
  me(ha, {
    inTriggerContext: t.inTriggerContext,
    shouldRender: x(() => {
      const {
        sPopupVisible: n,
        popupRef: r,
        forceRender: o,
        autoDestroy: a
      } = e;
      let i = !1;
      return (n || r || o) && (i = !0), !n && a && (i = !1), i;
    })
  });
}, Qs = () => {
  Ks({}, {
    inTriggerContext: !1
  });
  const e = fe(ha, {
    shouldRender: x(() => !1),
    inTriggerContext: !1
  });
  return {
    shouldRender: x(() => e.shouldRender.value || e.inTriggerContext === !1)
  };
}, Zs = L({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: !1,
  props: {
    getContainer: va.func.isRequired,
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t, r = !0, o;
    const {
      shouldRender: a
    } = Qs();
    function i() {
      a.value && (o = e.getContainer());
    }
    Wa(() => {
      r = !1, i();
    }), It(() => {
      o || i();
    });
    const l = ae(a, () => {
      a.value && !o && (o = e.getContainer()), o && l();
    });
    return Xa(() => {
      io(() => {
        var c;
        a.value && ((c = e.didUpdate) === null || c === void 0 || c.call(e, e));
      });
    }), () => {
      var c;
      return a.value ? r ? (c = n.default) === null || c === void 0 ? void 0 : c.call(n) : o ? p(lo, {
        to: o
      }, n) : null : null;
    };
  }
});
let Qt = m({}, et.Modal);
function Js(e) {
  e ? Qt = m(m({}, Qt), e) : Qt = m({}, et.Modal);
}
const hn = "internalMark", Ct = L({
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
    At(e.ANT_MARK__ === hn, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    const r = je({
      antLocale: m(m({}, e.locale), {
        exist: !0
      }),
      ANT_MARK__: hn
    });
    return me("localeData", r), ae(() => e.locale, (o) => {
      Js(o && o.Modal), r.antLocale = m(m({}, o), {
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
Ct.install = function(e) {
  return e.component(Ct.name, Ct), e;
};
const eu = Rn(Ct), Ft = L({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t, o, a = !1;
    const i = x(() => e.duration === void 0 ? 4.5 : e.duration), l = () => {
      i.value && !a && (o = setTimeout(() => {
        u();
      }, i.value * 1e3));
    }, c = () => {
      o && (clearTimeout(o), o = null);
    }, u = (s) => {
      s && s.stopPropagation(), c();
      const {
        onClose: f,
        noticeKey: g
      } = e;
      f && f(g);
    }, d = () => {
      c(), l();
    };
    return It(() => {
      l();
    }), qa(() => {
      a = !0, c();
    }), ae([i, () => e.updateMark, () => e.visible], (s, f) => {
      let [g, h, y] = s, [S, C, w] = f;
      (g !== S || h !== C || y !== w && w) && d();
    }, {
      flush: "post"
    }), () => {
      var s, f;
      const {
        prefixCls: g,
        closable: h,
        closeIcon: y = (s = r.closeIcon) === null || s === void 0 ? void 0 : s.call(r),
        onClick: S,
        holder: C
      } = e, {
        class: w,
        style: M
      } = n, $ = `${g}-notice`, O = Object.keys(n).reduce((v, P) => ((P.startsWith("data-") || P.startsWith("aria-") || P === "role") && (v[P] = n[P]), v), {}), I = p("div", R({
        class: W($, w, {
          [`${$}-closable`]: h
        }),
        style: M,
        onMouseenter: c,
        onMouseleave: l,
        onClick: S
      }, O), [p("div", {
        class: `${$}-content`
      }, [(f = r.default) === null || f === void 0 ? void 0 : f.call(r)]), h ? p("a", {
        tabindex: 0,
        onClick: u,
        class: `${$}-close`
      }, [y || p("span", {
        class: `${$}-close-x`
      }, null)]) : null]);
      return C ? p(lo, {
        to: C
      }, {
        default: () => I
      }) : I;
    };
  }
});
var tu = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let Qr = 0;
const nu = Date.now();
function Zr() {
  const e = Qr;
  return Qr += 1, `rcNotification_${nu}_${e}`;
}
const _t = L({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
  setup(e, t) {
    let {
      attrs: n,
      expose: r,
      slots: o
    } = t;
    const a = /* @__PURE__ */ new Map(), i = N([]), l = x(() => {
      const {
        prefixCls: d,
        animation: s = "fade"
      } = e;
      let f = e.transitionName;
      return !f && s && (f = `${d}-${s}`), ma(f);
    }), c = (d, s) => {
      const f = d.key || Zr(), g = m(m({}, d), {
        key: f
      }), {
        maxCount: h
      } = e, y = i.value.map((C) => C.notice.key).indexOf(f), S = i.value.concat();
      y !== -1 ? S.splice(y, 1, {
        notice: g,
        holderCallback: s
      }) : (h && i.value.length >= h && (g.key = S[0].notice.key, g.updateMark = Zr(), g.userPassKey = f, S.shift()), S.push({
        notice: g,
        holderCallback: s
      })), i.value = S;
    }, u = (d) => {
      i.value = Ya(i.value).filter((s) => {
        let {
          notice: {
            key: f,
            userPassKey: g
          }
        } = s;
        return (g || f) !== d;
      });
    };
    return r({
      add: c,
      remove: u,
      notices: i
    }), () => {
      var d;
      const {
        prefixCls: s,
        closeIcon: f = (d = o.closeIcon) === null || d === void 0 ? void 0 : d.call(o, {
          prefixCls: s
        })
      } = e, g = i.value.map((y, S) => {
        let {
          notice: C,
          holderCallback: w
        } = y;
        const M = S === i.value.length - 1 ? C.updateMark : void 0, {
          key: $,
          userPassKey: O
        } = C, {
          content: I
        } = C, v = m(m(m({
          prefixCls: s,
          closeIcon: typeof f == "function" ? f({
            prefixCls: s
          }) : f
        }, C), C.props), {
          key: $,
          noticeKey: O || $,
          updateMark: M,
          onClose: (P) => {
            var A;
            u(P), (A = C.onClose) === null || A === void 0 || A.call(C);
          },
          onClick: C.onClick
        });
        return w ? p("div", {
          key: $,
          class: `${s}-hook-holder`,
          ref: (P) => {
            typeof $ > "u" || (P ? (a.set($, P), w(P, v)) : a.delete($));
          }
        }, null) : p(Ft, R(R({}, v), {}, {
          class: W(v.class, e.hashId)
        }), {
          default: () => [typeof I == "function" ? I({
            prefixCls: s
          }) : I]
        });
      }), h = {
        [s]: 1,
        [n.class]: !!n.class,
        [e.hashId]: !0
      };
      return p("div", {
        class: h,
        style: n.style || {
          top: "65px",
          left: "50%"
        }
      }, [p(co, R({
        tag: "div"
      }, l.value), {
        default: () => [g]
      })]);
    };
  }
});
_t.newInstance = function(t, n) {
  const r = t || {}, {
    name: o = "notification",
    getContainer: a,
    appContext: i,
    prefixCls: l,
    rootPrefixCls: c,
    transitionName: u,
    hasTransitionName: d,
    useStyle: s
  } = r, f = tu(r, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]), g = document.createElement("div");
  a ? a().appendChild(g) : document.body.appendChild(g);
  const h = L({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup(S, C) {
      let {
        attrs: w
      } = C;
      const M = re(), $ = x(() => V.getPrefixCls(o, l)), [, O] = s($);
      return It(() => {
        n({
          notice(I) {
            var v;
            (v = M.value) === null || v === void 0 || v.add(I);
          },
          removeNotice(I) {
            var v;
            (v = M.value) === null || v === void 0 || v.remove(I);
          },
          destroy() {
            Zn(null, g), g.parentNode && g.parentNode.removeChild(g);
          },
          component: M
        });
      }), () => {
        const I = V, v = I.getRootPrefixCls(c, $.value), P = d ? u : `${$.value}-${u}`;
        return p(Ze, R(R({}, I), {}, {
          prefixCls: v
        }), {
          default: () => [p(_t, R(R({
            ref: M
          }, w), {}, {
            prefixCls: $.value,
            transitionName: P,
            hashId: O.value
          }), null)]
        });
      };
    }
  }), y = p(h, f);
  y.appContext = i || y.appContext, Zn(y, g);
};
let Jr = 0;
const ru = Date.now();
function eo() {
  const e = Jr;
  return Jr += 1, `rcNotification_${ru}_${e}`;
}
const ou = L({
  name: "HookNotification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const o = /* @__PURE__ */ new Map(), a = x(() => e.notices), i = x(() => {
      let d = e.transitionName;
      if (!d && e.animation)
        switch (typeof e.animation) {
          case "string":
            d = e.animation;
            break;
          case "function":
            d = e.animation().name;
            break;
          case "object":
            d = e.animation.name;
            break;
          default:
            d = `${e.prefixCls}-fade`;
            break;
        }
      return ma(d);
    }), l = (d) => e.remove(d), c = N({});
    ae(a, () => {
      const d = {};
      Object.keys(c.value).forEach((s) => {
        d[s] = [];
      }), e.notices.forEach((s) => {
        const {
          placement: f = "topRight"
        } = s.notice;
        f && (d[f] = d[f] || [], d[f].push(s));
      }), c.value = d;
    });
    const u = x(() => Object.keys(c.value));
    return () => {
      var d;
      const {
        prefixCls: s,
        closeIcon: f = (d = r.closeIcon) === null || d === void 0 ? void 0 : d.call(r, {
          prefixCls: s
        })
      } = e, g = u.value.map((h) => {
        var y, S;
        const C = c.value[h], w = (y = e.getClassName) === null || y === void 0 ? void 0 : y.call(e, h), M = (S = e.getStyles) === null || S === void 0 ? void 0 : S.call(e, h), $ = C.map((v, P) => {
          let {
            notice: A,
            holderCallback: E
          } = v;
          const _ = P === a.value.length - 1 ? A.updateMark : void 0, {
            key: j,
            userPassKey: Z
          } = A, {
            content: J
          } = A, b = m(m(m({
            prefixCls: s,
            closeIcon: typeof f == "function" ? f({
              prefixCls: s
            }) : f
          }, A), A.props), {
            key: j,
            noticeKey: Z || j,
            updateMark: _,
            onClose: (T) => {
              var z;
              l(T), (z = A.onClose) === null || z === void 0 || z.call(A);
            },
            onClick: A.onClick
          });
          return E ? p("div", {
            key: j,
            class: `${s}-hook-holder`,
            ref: (T) => {
              typeof j > "u" || (T ? (o.set(j, T), E(T, b)) : o.delete(j));
            }
          }, null) : p(Ft, R(R({}, b), {}, {
            class: W(b.class, e.hashId)
          }), {
            default: () => [typeof J == "function" ? J({
              prefixCls: s
            }) : J]
          });
        }), O = {
          [s]: 1,
          [`${s}-${h}`]: 1,
          [n.class]: !!n.class,
          [e.hashId]: !0,
          [w]: !!w
        };
        function I() {
          var v;
          C.length > 0 || (Reflect.deleteProperty(c.value, h), (v = e.onAllRemoved) === null || v === void 0 || v.call(e));
        }
        return p("div", {
          key: h,
          class: O,
          style: n.style || M || {
            top: "65px",
            left: "50%"
          }
        }, [p(co, R(R({
          tag: "div"
        }, i.value), {}, {
          onAfterLeave: I
        }), {
          default: () => [$]
        })]);
      });
      return p(Zs, {
        getContainer: e.getContainer
      }, {
        default: () => [g]
      });
    };
  }
});
var au = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const iu = () => document.body;
let to = 0;
function lu() {
  const e = {};
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach((o) => {
    o && Object.keys(o).forEach((a) => {
      const i = o[a];
      i !== void 0 && (e[a] = i);
    });
  }), e;
}
function ya() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    getContainer: t = iu,
    motion: n,
    prefixCls: r,
    maxCount: o,
    getClassName: a,
    getStyles: i,
    onAllRemoved: l
  } = e, c = au(e, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]), u = re([]), d = re(), s = (C, w) => {
    const M = C.key || eo(), $ = m(m({}, C), {
      key: M
    }), O = u.value.map((v) => v.notice.key).indexOf(M), I = u.value.concat();
    O !== -1 ? I.splice(O, 1, {
      notice: $,
      holderCallback: w
    }) : (o && u.value.length >= o && ($.key = I[0].notice.key, $.updateMark = eo(), $.userPassKey = M, I.shift()), I.push({
      notice: $,
      holderCallback: w
    })), u.value = I;
  }, f = (C) => {
    u.value = u.value.filter((w) => {
      let {
        notice: {
          key: M,
          userPassKey: $
        }
      } = w;
      return ($ || M) !== C;
    });
  }, g = () => {
    u.value = [];
  }, h = () => p(ou, {
    ref: d,
    prefixCls: r,
    maxCount: o,
    notices: u.value,
    remove: f,
    getClassName: a,
    getStyles: i,
    animation: n,
    hashId: e.hashId,
    onAllRemoved: l,
    getContainer: t
  }, null), y = re([]), S = {
    open: (C) => {
      const w = lu(c, C);
      (w.key === null || w.key === void 0) && (w.key = `vc-notification-${to}`, to += 1), y.value = [...y.value, {
        type: "open",
        config: w
      }];
    },
    close: (C) => {
      y.value = [...y.value, {
        type: "close",
        key: C
      }];
    },
    destroy: () => {
      y.value = [...y.value, {
        type: "destroy"
      }];
    }
  };
  return ae(y, () => {
    y.value.length && (y.value.forEach((C) => {
      switch (C.type) {
        case "open":
          s(C.config);
          break;
        case "close":
          f(C.key);
          break;
        case "destroy":
          g();
          break;
      }
    }), y.value = []);
  }), [S, h];
}
const cu = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    boxShadowSecondary: r,
    colorBgElevated: o,
    colorSuccess: a,
    colorError: i,
    colorWarning: l,
    colorInfo: c,
    fontSizeLG: u,
    motionEaseInOutCirc: d,
    motionDurationSlow: s,
    marginXS: f,
    paddingXS: g,
    borderRadiusLG: h,
    zIndexPopup: y,
    // Custom token
    messageNoticeContentPadding: S
  } = e, C = new we("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: g,
      transform: "translateY(0)",
      opacity: 1
    }
  }), w = new we("MessageMoveOut", {
    "0%": {
      maxHeight: e.height,
      padding: g,
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
      [t]: m(m({}, Zo(e)), {
        position: "fixed",
        top: f,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        pointerEvents: "none",
        zIndex: y,
        [`${t}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
          animationName: C,
          animationDuration: s,
          animationPlayState: "paused",
          animationTimingFunction: d
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: w,
          animationDuration: s,
          animationPlayState: "paused",
          animationTimingFunction: d
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
        padding: g,
        textAlign: "center",
        [n]: {
          verticalAlign: "text-bottom",
          marginInlineEnd: f,
          fontSize: u
        },
        [`${t}-notice-content`]: {
          display: "inline-block",
          padding: S,
          background: o,
          borderRadius: h,
          boxShadow: r,
          pointerEvents: "all"
        },
        [`${t}-success ${n}`]: {
          color: a
        },
        [`${t}-error ${n}`]: {
          color: i
        },
        [`${t}-warning ${n}`]: {
          color: l
        },
        [`
        ${t}-info ${n},
        ${t}-loading ${n}`]: {
          color: c
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
}, Yn = Un("Message", (e) => {
  const t = Nt(e, {
    messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
  });
  return [cu(t)];
}, (e) => ({
  height: 150,
  zIndexPopup: e.zIndexPopupBase + 10
})), su = {
  info: p(Ve, null, null),
  success: p(ze, null, null),
  error: p(De, null, null),
  warning: p(Be, null, null),
  loading: p(it, null, null)
}, ba = L({
  name: "PureContent",
  inheritAttrs: !1,
  props: ["prefixCls", "type", "icon"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var r;
      return p("div", {
        class: W(`${e.prefixCls}-custom-content`, `${e.prefixCls}-${e.type}`)
      }, [e.icon || su[e.type], p("span", null, [(r = n.default) === null || r === void 0 ? void 0 : r.call(n)])]);
    };
  }
});
L({
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
      getPrefixCls: a
    } = Dn(), i = x(() => e.prefixCls || a("message")), [, l] = Yn(i);
    return p(Ft, R(R({}, r), {}, {
      prefixCls: i.value,
      class: W(l.value, `${i.value}-notice-pure-panel`),
      noticeKey: "pure",
      duration: null
    }), {
      default: () => [p(ba, {
        prefixCls: i.value,
        type: e.type,
        icon: e.icon
      }, {
        default: () => [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)]
      })]
    });
  }
});
var uu = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const fu = 8, du = 3, pu = L({
  name: "Holder",
  inheritAttrs: !1,
  props: ["top", "prefixCls", "getContainer", "maxCount", "duration", "rtl", "transitionName", "onAllRemoved", "animation", "staticGetContainer"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    var r, o;
    const {
      getPrefixCls: a,
      getPopupContainer: i
    } = lt("message", e), l = x(() => a("message", e.prefixCls)), [, c] = Yn(l), u = () => {
      var y;
      const S = (y = e.top) !== null && y !== void 0 ? y : fu;
      return {
        left: "50%",
        transform: "translateX(-50%)",
        top: typeof S == "number" ? `${S}px` : S
      };
    }, d = () => W(c.value, e.rtl ? `${l.value}-rtl` : ""), s = () => {
      var y;
      return Ys({
        prefixCls: l.value,
        animation: (y = e.animation) !== null && y !== void 0 ? y : "move-up",
        transitionName: e.transitionName
      });
    }, f = p("span", {
      class: `${l.value}-close-x`
    }, [p(at, {
      class: `${l.value}-close-icon`
    }, null)]), [g, h] = ya({
      //@ts-ignore
      getStyles: u,
      prefixCls: l.value,
      getClassName: d,
      motion: s,
      closable: !1,
      closeIcon: f,
      duration: (r = e.duration) !== null && r !== void 0 ? r : du,
      getContainer: (o = e.staticGetContainer) !== null && o !== void 0 ? o : i.value,
      maxCount: e.maxCount,
      onAllRemoved: e.onAllRemoved
    });
    return n(m(m({}, g), {
      prefixCls: l,
      hashId: c
    })), h;
  }
});
let no = 0;
function gu(e) {
  const t = re(null), n = Symbol("messageHolderKey"), r = (c) => {
    var u;
    (u = t.value) === null || u === void 0 || u.close(c);
  }, o = (c) => {
    if (!t.value) {
      const O = () => {
      };
      return O.then = () => {
      }, O;
    }
    const {
      open: u,
      prefixCls: d,
      hashId: s
    } = t.value, f = `${d}-notice`, {
      content: g,
      icon: h,
      type: y,
      key: S,
      class: C,
      onClose: w
    } = c, M = uu(c, ["content", "icon", "type", "key", "class", "onClose"]);
    let $ = S;
    return $ == null && (no += 1, $ = `antd-message-${no}`), Gl((O) => (u(m(m({}, M), {
      key: $,
      content: () => p(ba, {
        prefixCls: d,
        type: y,
        icon: typeof h == "function" ? h() : h
      }, {
        default: () => [typeof g == "function" ? g() : g]
      }),
      placement: "top",
      // @ts-ignore
      class: W(y && `${f}-${y}`, s, C),
      onClose: () => {
        w == null || w(), O();
      }
    })), () => {
      r($);
    }));
  }, i = {
    open: o,
    destroy: (c) => {
      var u;
      c !== void 0 ? r(c) : (u = t.value) === null || u === void 0 || u.destroy();
    }
  };
  return ["info", "success", "warning", "error", "loading"].forEach((c) => {
    const u = (d, s, f) => {
      let g;
      d && typeof d == "object" && "content" in d ? g = d : g = {
        content: d
      };
      let h, y;
      typeof s == "function" ? y = s : (h = s, y = f);
      const S = m(m({
        onClose: y,
        duration: h
      }, g), {
        type: c
      });
      return o(S);
    };
    i[c] = u;
  }), [i, () => p(pu, R(R({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function vu(e) {
  return gu(e);
}
let Ca = 3, xa, U, mu = 1, Sa = "", Oa = "move-up", wa = !1, $a = () => document.body, Pa, _a = !1;
function hu() {
  return mu++;
}
function yu(e) {
  e.top !== void 0 && (xa = e.top, U = null), e.duration !== void 0 && (Ca = e.duration), e.prefixCls !== void 0 && (Sa = e.prefixCls), e.getContainer !== void 0 && ($a = e.getContainer, U = null), e.transitionName !== void 0 && (Oa = e.transitionName, U = null, wa = !0), e.maxCount !== void 0 && (Pa = e.maxCount, U = null), e.rtl !== void 0 && (_a = e.rtl);
}
function bu(e, t) {
  if (U) {
    t(U);
    return;
  }
  _t.newInstance({
    appContext: e.appContext,
    prefixCls: e.prefixCls || Sa,
    rootPrefixCls: e.rootPrefixCls,
    transitionName: Oa,
    hasTransitionName: wa,
    style: {
      top: xa
    },
    getContainer: $a || e.getPopupContainer,
    maxCount: Pa,
    name: "message",
    useStyle: Yn
  }, (n) => {
    if (U) {
      t(U);
      return;
    }
    U = n, t(n);
  });
}
const Ta = {
  info: Ve,
  success: ze,
  error: De,
  warning: Be,
  loading: it
}, Cu = Object.keys(Ta);
function xu(e) {
  const t = e.duration !== void 0 ? e.duration : Ca, n = e.key || hu(), r = new Promise((a) => {
    const i = () => (typeof e.onClose == "function" && e.onClose(), a(!0));
    bu(e, (l) => {
      l.notice({
        key: n,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: (c) => {
          let {
            prefixCls: u
          } = c;
          const d = Ta[e.type], s = d ? p(d, null, null) : "", f = W(`${u}-custom-content`, {
            [`${u}-${e.type}`]: e.type,
            [`${u}-rtl`]: _a === !0
          });
          return p("div", {
            class: f
          }, [typeof e.icon == "function" ? e.icon() : e.icon || s, p("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
        },
        onClose: i,
        onClick: e.onClick
      });
    });
  }), o = () => {
    U && U.removeNotice(n);
  };
  return o.then = (a, i) => r.then(a, i), o.promise = r, o;
}
function Su(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
const ve = {
  open: xu,
  config: yu,
  destroy(e) {
    if (U)
      if (e) {
        const {
          removeNotice: t
        } = U;
        t(e);
      } else {
        const {
          destroy: t
        } = U;
        t(), U = null;
      }
  }
};
function Ou(e, t) {
  e[t] = (n, r, o) => Su(n) ? e.open(m(m({}, n), {
    type: t
  })) : (typeof r == "function" && (o = r, r = void 0), e.open({
    content: n,
    duration: r,
    type: t,
    onClose: o
  }));
}
Cu.forEach((e) => Ou(ve, e));
ve.warn = ve.warning;
ve.useMessage = vu;
const wu = (e) => {
  const {
    componentCls: t,
    width: n,
    notificationMarginEdge: r
  } = e, o = new we("antNotificationTopFadeIn", {
    "0%": {
      marginTop: "-100%",
      opacity: 0
    },
    "100%": {
      marginTop: 0,
      opacity: 1
    }
  }), a = new we("antNotificationBottomFadeIn", {
    "0%": {
      marginBottom: "-100%",
      opacity: 0
    },
    "100%": {
      marginBottom: 0,
      opacity: 1
    }
  }), i = new we("antNotificationLeftFadeIn", {
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
        animationName: a
      }
    },
    [`&${t}-topLeft, &${t}-bottomLeft`]: {
      marginInlineEnd: 0,
      marginInlineStart: r,
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: i
      }
    }
  };
}, $u = (e) => {
  const {
    iconCls: t,
    componentCls: n,
    // .ant-notification
    boxShadowSecondary: r,
    fontSizeLG: o,
    notificationMarginBottom: a,
    borderRadiusLG: i,
    colorSuccess: l,
    colorInfo: c,
    colorWarning: u,
    colorError: d,
    colorTextHeading: s,
    notificationBg: f,
    notificationPadding: g,
    notificationMarginEdge: h,
    motionDurationMid: y,
    motionEaseInOut: S,
    fontSize: C,
    lineHeight: w,
    width: M,
    notificationIconSize: $
  } = e, O = `${n}-notice`, I = new we("antNotificationFadeIn", {
    "0%": {
      left: {
        _skip_check_: !0,
        value: M
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
  }), v = new we("antNotificationFadeOut", {
    "0%": {
      maxHeight: e.animationMaxHeight,
      marginBottom: a,
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
      [n]: m(m(m(m({}, Zo(e)), {
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
          animationTimingFunction: S,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${n}-fade-leave`]: {
          animationTimingFunction: S,
          animationFillMode: "both",
          animationDuration: y,
          animationPlayState: "paused"
        },
        [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]: {
          animationName: I,
          animationPlayState: "running"
        },
        [`${n}-fade-leave${n}-fade-leave-active`]: {
          animationName: v,
          animationPlayState: "running"
        }
      }), wu(e)), {
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
      [O]: {
        position: "relative",
        width: M,
        maxWidth: `calc(100vw - ${h * 2}px)`,
        marginBottom: a,
        marginInlineStart: "auto",
        padding: g,
        overflow: "hidden",
        lineHeight: w,
        wordWrap: "break-word",
        background: f,
        borderRadius: i,
        boxShadow: r,
        [`${n}-close-icon`]: {
          fontSize: C,
          cursor: "pointer"
        },
        [`${O}-message`]: {
          marginBottom: e.marginXS,
          color: s,
          fontSize: o,
          lineHeight: e.lineHeightLG
        },
        [`${O}-description`]: {
          fontSize: C
        },
        [`&${O}-closable ${O}-message`]: {
          paddingInlineEnd: e.paddingLG
        },
        [`${O}-with-icon ${O}-message`]: {
          marginBottom: e.marginXS,
          marginInlineStart: e.marginSM + $,
          fontSize: o
        },
        [`${O}-with-icon ${O}-description`]: {
          marginInlineStart: e.marginSM + $,
          fontSize: C
        },
        // Icon & color style in different selector level
        // https://github.com/ant-design/ant-design/issues/16503
        // https://github.com/ant-design/ant-design/issues/15512
        [`${O}-icon`]: {
          position: "absolute",
          fontSize: $,
          lineHeight: 0,
          // icon-font
          [`&-success${t}`]: {
            color: l
          },
          [`&-info${t}`]: {
            color: c
          },
          [`&-warning${t}`]: {
            color: u
          },
          [`&-error${t}`]: {
            color: d
          }
        },
        [`${O}-close`]: {
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
        [`${O}-btn`]: {
          float: "right",
          marginTop: e.marginSM
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${O}-pure-panel`]: {
        margin: 0
      }
    }
  ];
}, Kn = Un("Notification", (e) => {
  const t = e.paddingMD, n = e.paddingLG, r = Nt(e, {
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
  return [$u(r)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50,
  width: 384
}));
function Ia(e, t) {
  return t || p("span", {
    class: `${e}-close-x`
  }, [p(at, {
    class: `${e}-close-icon`
  }, null)]);
}
p(Ve, null, null), p(ze, null, null), p(De, null, null), p(Be, null, null), p(it, null, null);
const Pu = {
  success: ze,
  info: Ve,
  error: De,
  warning: Be
};
function Ma(e) {
  let {
    prefixCls: t,
    icon: n,
    type: r,
    message: o,
    description: a,
    btn: i
  } = e, l = null;
  if (n)
    l = p("span", {
      class: `${t}-icon`
    }, [Ie(n)]);
  else if (r) {
    const c = Pu[r];
    l = p(c, {
      class: `${t}-icon ${t}-icon-${r}`
    }, null);
  }
  return p("div", {
    class: W({
      [`${t}-with-icon`]: l
    }),
    role: "alert"
  }, [l, p("div", {
    class: `${t}-message`
  }, [o]), p("div", {
    class: `${t}-description`
  }, [a]), i && p("div", {
    class: `${t}-btn`
  }, [i])]);
}
L({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "icon", "type", "message", "description", "btn", "closeIcon"],
  setup(e) {
    const {
      getPrefixCls: t
    } = lt("notification", e), n = x(() => e.prefixCls || t("notification")), r = x(() => `${n.value}-notice`), [, o] = Kn(n);
    return () => p(Ft, R(R({}, e), {}, {
      prefixCls: n.value,
      class: W(o.value, `${r.value}-pure-panel`),
      noticeKey: "pure",
      duration: null,
      closable: e.closable,
      closeIcon: Ia(n.value, e.closeIcon)
    }), {
      default: () => [p(Ma, {
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
function Ea(e, t, n) {
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
function _u(e) {
  return {
    name: `${e}-fade`
  };
}
var Tu = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const ro = 24, Iu = 4.5, Mu = L({
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
    } = lt("notification", e), a = x(() => e.prefixCls || r("notification")), i = (f) => {
      var g, h;
      return Ea(f, (g = e.top) !== null && g !== void 0 ? g : ro, (h = e.bottom) !== null && h !== void 0 ? h : ro);
    }, [, l] = Kn(a), c = () => W(l.value, {
      [`${a.value}-rtl`]: e.rtl
    }), u = () => _u(a.value), [d, s] = ya({
      prefixCls: a.value,
      getStyles: i,
      getClassName: c,
      motion: u,
      closable: !0,
      closeIcon: Ia(a.value),
      duration: Iu,
      getContainer: () => {
        var f, g;
        return ((f = e.getPopupContainer) === null || f === void 0 ? void 0 : f.call(e)) || ((g = o.value) === null || g === void 0 ? void 0 : g.call(o)) || document.body;
      },
      maxCount: e.maxCount,
      hashId: l.value,
      onAllRemoved: e.onAllRemoved
    });
    return n(m(m({}, d), {
      prefixCls: a.value,
      hashId: l
    })), s;
  }
});
function Eu(e) {
  const t = re(null), n = Symbol("notificationHolderKey"), r = (l) => {
    if (!t.value)
      return;
    const {
      open: c,
      prefixCls: u,
      hashId: d
    } = t.value, s = `${u}-notice`, {
      message: f,
      description: g,
      icon: h,
      type: y,
      btn: S,
      class: C
    } = l, w = Tu(l, ["message", "description", "icon", "type", "btn", "class"]);
    return c(m(m({
      placement: "topRight"
    }, w), {
      content: () => p(Ma, {
        prefixCls: s,
        icon: typeof h == "function" ? h() : h,
        type: y,
        message: typeof f == "function" ? f() : f,
        description: typeof g == "function" ? g() : g,
        btn: typeof S == "function" ? S() : S
      }, null),
      // @ts-ignore
      class: W(y && `${s}-${y}`, d, C)
    }));
  }, a = {
    open: r,
    destroy: (l) => {
      var c, u;
      l !== void 0 ? (c = t.value) === null || c === void 0 || c.close(l) : (u = t.value) === null || u === void 0 || u.destroy();
    }
  };
  return ["success", "info", "warning", "error"].forEach((l) => {
    a[l] = (c) => r(m(m({}, c), {
      type: l
    }));
  }), [a, () => p(Mu, R(R({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function Au(e) {
  return Eu(e);
}
const be = {};
let Aa = 4.5, ja = "24px", Ha = "24px", yn = "", ka = "topRight", Na = () => document.body, La = null, bn = !1, Ra;
function ju(e) {
  const {
    duration: t,
    placement: n,
    bottom: r,
    top: o,
    getContainer: a,
    closeIcon: i,
    prefixCls: l
  } = e;
  l !== void 0 && (yn = l), t !== void 0 && (Aa = t), n !== void 0 && (ka = n), r !== void 0 && (Ha = typeof r == "number" ? `${r}px` : r), o !== void 0 && (ja = typeof o == "number" ? `${o}px` : o), a !== void 0 && (Na = a), i !== void 0 && (La = i), e.rtl !== void 0 && (bn = e.rtl), e.maxCount !== void 0 && (Ra = e.maxCount);
}
function Hu(e, t) {
  let {
    prefixCls: n,
    placement: r = ka,
    getContainer: o = Na,
    top: a,
    bottom: i,
    closeIcon: l = La,
    appContext: c
  } = e;
  const {
    getPrefixCls: u
  } = Wu(), d = u("notification", n || yn), s = `${d}-${r}-${bn}`, f = be[s];
  if (f) {
    Promise.resolve(f).then((h) => {
      t(h);
    });
    return;
  }
  const g = W(`${d}-${r}`, {
    [`${d}-rtl`]: bn === !0
  });
  _t.newInstance({
    name: "notification",
    prefixCls: n || yn,
    useStyle: Kn,
    class: g,
    style: Ea(r, a ?? ja, i ?? Ha),
    appContext: c,
    getContainer: o,
    closeIcon: (h) => {
      let {
        prefixCls: y
      } = h;
      return p("span", {
        class: `${y}-close-x`
      }, [Ie(l, {}, p(at, {
        class: `${y}-close-icon`
      }, null))]);
    },
    maxCount: Ra,
    hasTransitionName: !0
  }, (h) => {
    be[s] = h, t(h);
  });
}
const ku = {
  success: On,
  info: Mn,
  error: wn,
  warning: $n
};
function Nu(e) {
  const {
    icon: t,
    type: n,
    description: r,
    message: o,
    btn: a
  } = e, i = e.duration === void 0 ? Aa : e.duration;
  Hu(e, (l) => {
    l.notice({
      content: (c) => {
        let {
          prefixCls: u
        } = c;
        const d = `${u}-notice`;
        let s = null;
        if (t)
          s = () => p("span", {
            class: `${d}-icon`
          }, [Ie(t)]);
        else if (n) {
          const f = ku[n];
          s = () => p(f, {
            class: `${d}-icon ${d}-icon-${n}`
          }, null);
        }
        return p("div", {
          class: s ? `${d}-with-icon` : ""
        }, [s && s(), p("div", {
          class: `${d}-message`
        }, [!r && s ? p("span", {
          class: `${d}-message-single-line-auto-margin`
        }, null) : null, Ie(o)]), p("div", {
          class: `${d}-description`
        }, [Ie(r)]), a ? p("span", {
          class: `${d}-btn`
        }, [Ie(a)]) : null]);
      },
      duration: i,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class
    });
  });
}
const Fe = {
  open: Nu,
  close(e) {
    Object.keys(be).forEach((t) => Promise.resolve(be[t]).then((n) => {
      n.removeNotice(e);
    }));
  },
  config: ju,
  destroy() {
    Object.keys(be).forEach((e) => {
      Promise.resolve(be[e]).then((t) => {
        t.destroy();
      }), delete be[e];
    });
  }
}, Lu = ["success", "info", "warning", "error"];
Lu.forEach((e) => {
  Fe[e] = (t) => Fe.open(m(m({}, t), {
    type: e
  }));
});
Fe.warn = Fe.warning;
Fe.useNotification = Au;
const Ru = `-ant-${Date.now()}-${Math.random()}`;
function Fu(e, t) {
  const n = {}, r = (i, l) => {
    let c = i.clone();
    return c = (l == null ? void 0 : l(c)) || c, c.toRgbString();
  }, o = (i, l) => {
    const c = new D(i), u = $e(c.toRgbString());
    n[`${l}-color`] = r(c), n[`${l}-color-disabled`] = u[1], n[`${l}-color-hover`] = u[4], n[`${l}-color-active`] = u[6], n[`${l}-color-outline`] = c.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = u[0], n[`${l}-color-deprecated-border`] = u[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new D(t.primaryColor), l = $e(i.toRgbString());
    l.forEach((u, d) => {
      n[`primary-${d + 1}`] = u;
    }), n["primary-color-deprecated-l-35"] = r(i, (u) => u.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (u) => u.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (u) => u.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (u) => u.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (u) => u.setAlpha(u.getAlpha() * 0.12));
    const c = new D(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (u) => u.setAlpha(u.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (u) => u.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function zu(e, t) {
  const n = Fu(e, t);
  Ge() ? wt(n, `${Ru}-dynamic-theme`) : At(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Du = (e) => {
  const [t, n] = Lt();
  return gn(x(() => ({
    theme: t.value,
    token: n.value,
    hashId: "",
    path: ["ant-design-icons", e.value]
  })), () => [{
    [`.${e.value}`]: m(m({}, vs()), {
      [`.${e.value} .${e.value}-icon`]: {
        display: "block"
      }
    })
  }]);
};
function Bu(e, t) {
  const n = x(() => (e == null ? void 0 : e.value) || {}), r = x(() => n.value.inherit === !1 || !(t != null && t.value) ? ea : t.value);
  return x(() => {
    if (!(e != null && e.value))
      return t == null ? void 0 : t.value;
    const a = m({}, r.value.components);
    return Object.keys(e.value.components || {}).forEach((i) => {
      a[i] = m(m({}, a[i]), e.value.components[i]);
    }), m(m(m({}, r.value), n.value), {
      token: m(m({}, r.value.token), n.value.token),
      components: a
    });
  });
}
var Vu = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Gu = "ant";
function Ee() {
  return V.prefixCls || Gu;
}
function Fa() {
  return V.iconPrefixCls || Fn;
}
const Qn = je({}), V = je({});
Tt(() => {
  m(V, Qn), V.prefixCls = Ee(), V.iconPrefixCls = Fa(), V.getPrefixCls = (e, t) => t || (e ? `${V.prefixCls}-${e}` : V.prefixCls), V.getRootPrefixCls = () => V.prefixCls ? V.prefixCls : Ee();
});
let Zt;
const Uu = (e) => {
  Zt && Zt(), Zt = Tt(() => {
    m(Qn, je(e)), m(V, je(e));
  }), e.theme && zu(Ee(), e.theme);
}, Wu = () => ({
  getPrefixCls: (e, t) => t || (e ? `${Ee()}-${e}` : Ee()),
  getIconPrefixCls: Fa,
  getRootPrefixCls: () => V.prefixCls ? V.prefixCls : Ee()
}), Ze = L({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: Kl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = Dn(), o = (b, T) => {
      const {
        prefixCls: z = "ant"
      } = e;
      if (T) return T;
      const de = z || r.getPrefixCls("");
      return b ? `${de}-${b}` : de;
    }, a = x(() => e.iconPrefixCls || r.iconPrefixCls.value || Fn), i = x(() => a.value !== r.iconPrefixCls.value), l = x(() => {
      var b;
      return e.csp || ((b = r.csp) === null || b === void 0 ? void 0 : b.value);
    }), c = Du(a), u = Bu(x(() => e.theme), x(() => {
      var b;
      return (b = r.theme) === null || b === void 0 ? void 0 : b.value;
    })), d = (b) => (e.renderEmpty || n.renderEmpty || r.renderEmpty || _s)(b), s = x(() => {
      var b, T;
      return (b = e.autoInsertSpaceInButton) !== null && b !== void 0 ? b : (T = r.autoInsertSpaceInButton) === null || T === void 0 ? void 0 : T.value;
    }), f = x(() => {
      var b;
      return e.locale || ((b = r.locale) === null || b === void 0 ? void 0 : b.value);
    });
    ae(f, () => {
      Qn.locale = f.value;
    }, {
      immediate: !0
    });
    const g = x(() => {
      var b;
      return e.direction || ((b = r.direction) === null || b === void 0 ? void 0 : b.value);
    }), h = x(() => {
      var b, T;
      return (b = e.space) !== null && b !== void 0 ? b : (T = r.space) === null || T === void 0 ? void 0 : T.value;
    }), y = x(() => {
      var b, T;
      return (b = e.virtual) !== null && b !== void 0 ? b : (T = r.virtual) === null || T === void 0 ? void 0 : T.value;
    }), S = x(() => {
      var b, T;
      return (b = e.dropdownMatchSelectWidth) !== null && b !== void 0 ? b : (T = r.dropdownMatchSelectWidth) === null || T === void 0 ? void 0 : T.value;
    }), C = x(() => {
      var b;
      return e.getTargetContainer !== void 0 ? e.getTargetContainer : (b = r.getTargetContainer) === null || b === void 0 ? void 0 : b.value;
    }), w = x(() => {
      var b;
      return e.getPopupContainer !== void 0 ? e.getPopupContainer : (b = r.getPopupContainer) === null || b === void 0 ? void 0 : b.value;
    }), M = x(() => {
      var b;
      return e.pageHeader !== void 0 ? e.pageHeader : (b = r.pageHeader) === null || b === void 0 ? void 0 : b.value;
    }), $ = x(() => {
      var b;
      return e.input !== void 0 ? e.input : (b = r.input) === null || b === void 0 ? void 0 : b.value;
    }), O = x(() => {
      var b;
      return e.pagination !== void 0 ? e.pagination : (b = r.pagination) === null || b === void 0 ? void 0 : b.value;
    }), I = x(() => {
      var b;
      return e.form !== void 0 ? e.form : (b = r.form) === null || b === void 0 ? void 0 : b.value;
    }), v = x(() => {
      var b;
      return e.select !== void 0 ? e.select : (b = r.select) === null || b === void 0 ? void 0 : b.value;
    }), P = x(() => e.componentSize), A = x(() => e.componentDisabled), E = x(() => {
      var b, T;
      return (b = e.wave) !== null && b !== void 0 ? b : (T = r.wave) === null || T === void 0 ? void 0 : T.value;
    }), _ = {
      csp: l,
      autoInsertSpaceInButton: s,
      locale: f,
      direction: g,
      space: h,
      virtual: y,
      dropdownMatchSelectWidth: S,
      getPrefixCls: o,
      iconPrefixCls: a,
      theme: x(() => {
        var b, T;
        return (b = u.value) !== null && b !== void 0 ? b : (T = r.theme) === null || T === void 0 ? void 0 : T.value;
      }),
      renderEmpty: d,
      getTargetContainer: C,
      getPopupContainer: w,
      pageHeader: M,
      input: $,
      pagination: O,
      form: I,
      select: v,
      componentSize: P,
      componentDisabled: A,
      transformCellText: x(() => e.transformCellText),
      wave: E
    }, j = x(() => {
      const b = u.value || {}, {
        algorithm: T,
        token: z
      } = b, de = Vu(b, ["algorithm", "token"]), zt = T && (!Array.isArray(T) || T.length > 0) ? Fo(T) : void 0;
      return m(m({}, de), {
        theme: zt,
        token: m(m({}, kt), z)
      });
    }), Z = x(() => {
      var b, T;
      let z = {};
      return f.value && (z = ((b = f.value.Form) === null || b === void 0 ? void 0 : b.defaultValidateMessages) || ((T = et.Form) === null || T === void 0 ? void 0 : T.defaultValidateMessages) || {}), e.form && e.form.validateMessages && (z = m(m({}, z), e.form.validateMessages)), z;
    });
    Ql(_), Yl({
      validateMessages: Z
    }), Ts(P), Zl(A);
    const J = (b) => {
      var T, z;
      let de = i.value ? c((T = n.default) === null || T === void 0 ? void 0 : T.call(n)) : (z = n.default) === null || z === void 0 ? void 0 : z.call(n);
      if (e.theme) {
        const zt = /* @__PURE__ */ function() {
          return de;
        }();
        de = p(Ss, {
          value: j.value
        }, {
          default: () => [zt]
        });
      }
      return p(eu, {
        locale: f.value || b,
        ANT_MARK__: hn
      }, {
        default: () => [de]
      });
    };
    return Tt(() => {
      g.value && (ve.config({
        rtl: g.value === "rtl"
      }), Fe.config({
        rtl: g.value === "rtl"
      }));
    }), () => p(_o, {
      children: (b, T, z) => J(z)
    }, null);
  }
});
Ze.config = Uu;
Ze.install = function(e) {
  e.component(Ze.name, Ze);
};
const Xu = /* @__PURE__ */ L({
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
    const n = e, r = t, o = N(n.accept), a = N(n.slotType), i = N(n.fileList), l = N(!0), c = N(n.isShowMsg), u = (f) => {
      r("handleChange", f), f.file.status !== "uploading" && console.log(f.file, f.fileList), f.file.status === "done" ? c.value && ve.success(`${f.file.name} 文件上传成功！`) : f.file.status === "error" && c.value && ve.error(`${f.file.name} 文件上传失败.`);
    }, d = (f, g) => (r("beforeUpload", f, g, l), l.value);
    ae(
      () => n.fileList,
      (f) => {
        i.value = f;
      },
      { deep: !0, immediate: !0 }
    );
    const s = {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068"
      },
      strokeWidth: 3,
      format: (f) => `${parseFloat(f.toFixed(2))}%`,
      class: "test"
    };
    return (f, g) => {
      const h = Ye("a-button"), y = Ye("a-upload");
      return Ce(), St(y, {
        "file-list": i.value,
        "onUpdate:fileList": g[0] || (g[0] = (S) => i.value = S),
        name: "file",
        accept: o.value,
        progress: s,
        maxCount: e.maxCount,
        multiple: e.multiple,
        disabled: e.disabled,
        beforeUpload: d,
        onChange: u
      }, {
        itemRender: k(({ file: S, actions: C }) => [
          Jn(f.$slots, "fileItem", {
            file: S,
            actions: C
          }),
          Ot(` <a-space>\r
        <span :style="file.status === 'error' ? 'color: red' : ''">{{ file.name }}</span>\r
        <a href="javascript:;" @click="actions.download">下载</a>\r
        <a href="javascript:;" @click="actions.remove">删除</a>\r
      </a-space> `)
        ]),
        default: k(() => [
          a.value === "default" ? (Ce(), St(h, { key: 0 }, {
            default: k(() => [
              p(X(kn)),
              g[1] || (g[1] = te(" 点击上传 "))
            ]),
            _: 1
            /* STABLE */
          })) : Jn(f.$slots, "default", { key: 1 })
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["file-list", "accept", "maxCount", "multiple", "disabled"]);
    };
  }
});
function qu(e, t, n) {
  var r = document.createElement("canvas");
  let o = 0;
  o = 1, r.height = t + o;
  let a = r.getContext("2d");
  a == null || a.clearRect(0, 0, r.width, r.height), a.fillStyle = n, a.font = t + "px 黑体", a.textBaseline = "middle", a.fillText(e, 0, t / 2 + 2), r.width = a.measureText(e).width, a.fillStyle = n, a.font = t + "px 黑体", a.textBaseline = "middle", a.fillText(e, 0, t / 2 + 2);
  var i = r.toDataURL("image/png");
  return i;
}
function Yu(e) {
  if (typeof e == "string") {
    for (var t = e.split(","), n = t[0].match(/:(.*?);/)[1], r = n.split("/")[1], o = atob(t[1]), a = o.length, i = new Uint8Array(a); a--; )
      i[a] = o.charCodeAt(a);
    return new File([i], "filename." + r, {
      type: n
    });
  }
}
var xt = /* @__PURE__ */ ((e) => (e[e.DISABLE = -1] = "DISABLE", e[e.NONE = 0] = "NONE", e[e.FREETEXT = 3] = "FREETEXT", e[e.HIGHLIGHT = 9] = "HIGHLIGHT", e[e.STAMP = 13] = "STAMP", e[e.INK = 15] = "INK", e))(xt || {}), za = /* @__PURE__ */ ((e) => (e[e.RESIZE = 1] = "RESIZE", e[e.CREATE = 2] = "CREATE", e[e.FREETEXT_SIZE = 11] = "FREETEXT_SIZE", e[e.FREETEXT_COLOR = 12] = "FREETEXT_COLOR", e[e.FREETEXT_OPACITY = 13] = "FREETEXT_OPACITY", e[e.INK_COLOR = 21] = "INK_COLOR", e[e.INK_THICKNESS = 22] = "INK_THICKNESS", e[e.INK_OPACITY = 23] = "INK_OPACITY", e[e.HIGHLIGHT_COLOR = 31] = "HIGHLIGHT_COLOR", e[e.HIGHLIGHT_DEFAULT_COLOR = 32] = "HIGHLIGHT_DEFAULT_COLOR", e[e.HIGHLIGHT_THICKNESS = 33] = "HIGHLIGHT_THICKNESS", e[e.HIGHLIGHT_FREE = 34] = "HIGHLIGHT_FREE", e[e.HIGHLIGHT_SHOW_ALL = 35] = "HIGHLIGHT_SHOW_ALL", e))(za || {});
const Ku = { class: "func-container" }, Qu = { class: "set_func" }, Zu = /* @__PURE__ */ L({
  __name: "ToolBar",
  props: {
    pdfIframe: {
      type: Object
    },
    getViewerInstance: {
      type: Function
    }
  },
  emits: ["getSaveResult"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, a = N(!1), i = N(1), l = N(null), c = N([]), u = N(!1), d = N(r.pdfIframe);
    ae(
      () => r.pdfIframe,
      (E) => {
        d.value = E, console.log("pdfIframe.value--1", d.value);
      },
      { deep: !0, immediate: !0 }
    );
    function s() {
      return r.getViewerInstance();
    }
    function f(E) {
      a.value = E;
      const { PDFViewerApplication: _ } = s();
      return E ? _.pdfSidebar.open() : _.pdfSidebar.close();
    }
    function g(E) {
      h(E);
      const { PDFViewerApplication: _ } = s();
      _.eventBus.dispatch("scalechanged", {
        value: i.value
      });
    }
    function h(E) {
      E === "add" ? i.value += 0.25 : i.value -= 0.25, i.value < 0.25 && (i.value = 0.25), i.value > 2 && (i.value = 2);
    }
    function y(E) {
      const { PDFViewerApplication: _ } = s();
      _.eventBus.dispatch("switchannotationeditormode", {
        mode: E
      });
    }
    function S(E, _) {
      const { PDFViewerApplication: j } = s();
      j.eventBus.dispatch("switchannotationeditorparams", {
        type: E,
        value: _
      });
    }
    function C() {
      P(!0);
    }
    function w() {
      if (l.value) {
        const E = qu(l.value, 20, "#000");
        $(E), l.value = null, P(!1);
      } else
        ve.warn("请输入批注内容！");
    }
    function M() {
      y(xt.INK);
    }
    function $(E) {
      if (!E) {
        alert("设置失败！");
        return;
      }
      y(xt.STAMP), S(
        za.CREATE,
        Yu(E)
      );
    }
    const O = (E, _, j) => {
      if (E) {
        const Z = new FileReader();
        Z.onload = function(J) {
          const b = J.target.result;
          $(b);
        }, Z.readAsDataURL(E);
      }
    };
    function I() {
      y(xt.NONE);
    }
    async function v(E = !0) {
      const _ = s();
      console.log("下载文件-----", _);
      let { blob: j, filename: Z } = await _.PDFViewerApplication.save();
      if (console.log("----->二进制流-->", j), E) {
        const J = URL.createObjectURL(j), b = document.createElement("a");
        b.download = Z, b.href = J, document.body.appendChild(b), b.click(), document.body.removeChild(b), URL.revokeObjectURL(J);
      }
      return o("getSaveResult", { blob: j, filename: Z }), { blob: j, filename: Z };
    }
    function P(E) {
      u.value = E;
    }
    function A() {
    }
    return t({ saveFile: v }), (E, _) => {
      const j = Ye("a-tooltip"), Z = Ye("a-input"), J = Ye("a-modal"), b = Ka("drag");
      return Ce(), Jt(
        Cn,
        null,
        [
          Qa((Ce(), Jt("div", Ku, [
            so("div", Qu, [
              a.value ? Ot("v-if", !0) : (Ce(), St(j, { key: 0 }, {
                title: k(() => _[8] || (_[8] = [
                  te("打开侧边栏")
                ])),
                default: k(() => [
                  p(X(jn), {
                    class: "anticon",
                    onClick: _[0] || (_[0] = (T) => f(!0))
                  })
                ]),
                _: 1
                /* STABLE */
              })),
              a.value ? (Ce(), St(j, { key: 1 }, {
                title: k(() => _[9] || (_[9] = [
                  te("关闭侧边栏")
                ])),
                default: k(() => [
                  p(X(An), {
                    class: "anticon",
                    onClick: _[1] || (_[1] = (T) => f(!1))
                  })
                ]),
                _: 1
                /* STABLE */
              })) : Ot("v-if", !0),
              p(j, null, {
                title: k(() => _[10] || (_[10] = [
                  te("放大")
                ])),
                default: k(() => [
                  p(X(Nn), {
                    class: "anticon",
                    onClick: _[2] || (_[2] = (T) => g("add"))
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              p(j, null, {
                title: k(() => _[11] || (_[11] = [
                  te("缩小")
                ])),
                default: k(() => [
                  p(X(Ln), {
                    class: "anticon",
                    onClick: _[3] || (_[3] = (T) => g("minus"))
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              p(j, null, {
                title: k(() => _[12] || (_[12] = [
                  te("输入文本批注")
                ])),
                default: k(() => [
                  p(X(Tn), {
                    class: "anticon",
                    onClick: C
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              p(j, null, {
                title: k(() => _[13] || (_[13] = [
                  te("手写批注")
                ])),
                default: k(() => [
                  p(X(In), {
                    class: "anticon",
                    onClick: _[4] || (_[4] = (T) => M())
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              p(j, null, {
                title: k(() => _[14] || (_[14] = [
                  te("插入图片")
                ])),
                default: k(() => [
                  p(Xu, {
                    isShowMsg: !1,
                    fileList: c.value,
                    maxCount: 1,
                    slotType: "self",
                    accept: "image/*",
                    onBeforeUpload: O
                  }, {
                    default: k(() => [
                      p(X(_n), { class: "anticon" })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["fileList"])
                ]),
                _: 1
                /* STABLE */
              }),
              p(j, null, {
                title: k(() => _[15] || (_[15] = [
                  te("退出编辑模式")
                ])),
                default: k(() => [
                  p(X(Hn), {
                    class: "anticon",
                    onClick: I
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              p(j, null, {
                title: k(() => _[16] || (_[16] = [
                  te("导出PDF文件")
                ])),
                default: k(() => [
                  p(X(Pn), {
                    class: "anticon",
                    onClick: v
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              p(j, null, {
                title: k(() => _[17] || (_[17] = [
                  te("关闭")
                ])),
                default: k(() => [
                  p(X(En), {
                    class: "anticon",
                    onClick: _[5] || (_[5] = (T) => void 0)
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ])), [
            [b]
          ]),
          p(J, {
            open: u.value,
            "onUpdate:open": _[7] || (_[7] = (T) => u.value = T),
            title: "文字批注",
            onOk: w,
            centered: ""
          }, {
            default: k(() => [
              p(Z, {
                value: l.value,
                "onUpdate:value": _[6] || (_[6] = (T) => l.value = T),
                placeholder: "请输入文字批注"
              }, null, 8, ["value"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["open"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
}), Da = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Ju = /* @__PURE__ */ Da(Zu, [["__scopeId", "data-v-e362a238"]]), ef = {
  id: "app-pdf",
  class: "pdf-box"
}, tf = /* @__PURE__ */ L({
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
    const r = e, o = n;
    let a = N(null);
    const i = N(r.pdfUrl), l = N(null);
    It(() => {
      c(i.value);
    });
    function c(s) {
      a.value && a.value.parentNode.removeChild(a.value);
      const f = document.createElement("iframe");
      f.src = `./pdfjs/web/viewer.html?file=${s}`, f.style.width = "100%", f.style.height = "100%", f.onload = () => {
        const { PDFViewerApplication: h } = u();
        console.log("iframe 加载完成", h), h.pdfSidebar.close();
      }, document.querySelector(".pdf-container").appendChild(f), a.value = f;
    }
    function u() {
      if (a.value.contentWindow.document.readyState !== "complete")
        throw new Error("页面尚未加载完成");
      const { PDFViewerApplication: s, PDFViewerApplicationOptions: f } = a.value.contentWindow;
      return { PDFViewerApplication: s, PDFViewerApplicationOptions: f };
    }
    function d(s) {
      if (s)
        o("getSaveResult", s);
      else
        return l.value.saveFile();
    }
    return t({ getSaveResult: d }), (s, f) => (Ce(), Jt("div", ef, [
      f[0] || (f[0] = so(
        "div",
        { class: "pdf-container" },
        [
          Ot(' <iframe src="pdfjs/web/viewer.html?file=compressed.tracemonkey-pldi-09.pdf" width="100%" frameborder="0"></iframe> ')
        ],
        -1
        /* HOISTED */
      )),
      p(
        Ju,
        {
          ref_key: "toolbarRef",
          ref: l,
          pdfIframe: "pdfIframe",
          onGetSaveResult: d,
          getViewerInstance: u
        },
        null,
        512
        /* NEED_PATCH */
      )
    ]));
  }
}), oo = /* @__PURE__ */ Da(tf, [["__scopeId", "data-v-6b67856a"]]), nf = function(e) {
  e.component(oo.name, oo);
}, of = { install: nf };
export {
  of as default
};
