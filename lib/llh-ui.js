import { ref as w, onMounted as F, openBlock as x, createElementBlock as P, createCommentVNode as b, createElementVNode as m, normalizeClass as B, createTextVNode as N, toDisplayString as I, pushScopeId as z, popScopeId as U, Fragment as R } from "vue";
const E = "data:image/png;base64,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";
var j = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function q(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var C = { exports: {} };
/*!
 * 
 * js-audio-recorder - js audio recorder plugin
 * 
 * @version v1.0.7
 * @homepage https://github.com/2fps/recorder
 * @author 2fps <echoweb@126.com> (https://www.zhuyuntao.cn)
 * @license MIT
 *         
 */
(function(d, v) {
  (function(g, l) {
    d.exports = l();
  })(j, function() {
    return function(g) {
      var l = {};
      function u(a) {
        if (l[a]) return l[a].exports;
        var o = l[a] = { i: a, l: !1, exports: {} };
        return g[a].call(o.exports, o, o.exports, u), o.l = !0, o.exports;
      }
      return u.m = g, u.c = l, u.d = function(a, o, i) {
        u.o(a, o) || Object.defineProperty(a, o, { enumerable: !0, get: i });
      }, u.r = function(a) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
      }, u.t = function(a, o) {
        if (1 & o && (a = u(a)), 8 & o || 4 & o && typeof a == "object" && a && a.__esModule) return a;
        var i = /* @__PURE__ */ Object.create(null);
        if (u.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: a }), 2 & o && typeof a != "string") for (var t in a) u.d(i, t, (function(r) {
          return a[r];
        }).bind(null, t));
        return i;
      }, u.n = function(a) {
        var o = a && a.__esModule ? function() {
          return a.default;
        } : function() {
          return a;
        };
        return u.d(o, "a", o), o;
      }, u.o = function(a, o) {
        return Object.prototype.hasOwnProperty.call(a, o);
      }, u.p = "", u(u.s = 1);
    }([function(g, l, u) {
      function a(o, i, t) {
        for (var r = 0; r < t.length; r++) o.setUint8(i + r, t.charCodeAt(r));
      }
      Object.defineProperty(l, "__esModule", { value: !0 }), l.compress = function(o, i, t) {
        for (var r = i / t, f = Math.max(r, 1), s = o.left, n = o.right, e = Math.floor((s.length + n.length) / r), c = new Float32Array(e), A = 0, y = 0; A < e; ) {
          var p = Math.floor(y);
          c[A] = s[p], A++, n.length && (c[A] = n[p], A++), y += f;
        }
        return c;
      }, l.encodePCM = function(o, i, t) {
        t === void 0 && (t = !0);
        var r = 0, f = o.length * (i / 8), s = new ArrayBuffer(f), n = new DataView(s);
        if (i === 8) for (var e = 0; e < o.length; e++, r++) {
          var c = (A = Math.max(-1, Math.min(1, o[e]))) < 0 ? 128 * A : 127 * A;
          c = +c + 128, n.setInt8(r, c);
        }
        else for (e = 0; e < o.length; e++, r += 2) {
          var A = Math.max(-1, Math.min(1, o[e]));
          n.setInt16(r, A < 0 ? 32768 * A : 32767 * A, t);
        }
        return n;
      }, l.encodeWAV = function(o, i, t, r, f, s) {
        s === void 0 && (s = !0);
        var n = t > i ? i : t, e = f, c = new ArrayBuffer(44 + o.byteLength), A = new DataView(c), y = r, p = 0;
        a(A, p, "RIFF"), p += 4, A.setUint32(p, 36 + o.byteLength, s), a(A, p += 4, "WAVE"), a(A, p += 4, "fmt "), p += 4, A.setUint32(p, 16, s), p += 4, A.setUint16(p, 1, s), p += 2, A.setUint16(p, y, s), p += 2, A.setUint32(p, n, s), p += 4, A.setUint32(p, y * n * (e / 8), s), p += 4, A.setUint16(p, y * (e / 8), s), p += 2, A.setUint16(p, e, s), a(A, p += 2, "data"), p += 4, A.setUint32(p, o.byteLength, s), p += 4;
        for (var M = 0; M < o.byteLength; ) A.setUint8(p, o.getUint8(M)), p++, M++;
        return A;
      };
    }, function(g, l, u) {
      var a, o = this && this.__extends || (a = function(s, n) {
        return (a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, c) {
          e.__proto__ = c;
        } || function(e, c) {
          for (var A in c) c.hasOwnProperty(A) && (e[A] = c[A]);
        })(s, n);
      }, function(s, n) {
        function e() {
          this.constructor = s;
        }
        a(s, n), s.prototype = n === null ? Object.create(n) : (e.prototype = n.prototype, new e());
      });
      Object.defineProperty(l, "__esModule", { value: !0 });
      var i = u(2), t = u(0), r = u(3), f = function(s) {
        function n(e) {
          e === void 0 && (e = {});
          var c = s.call(this, e) || this;
          return c.isrecording = !1, c.ispause = !1, c.isplaying = !1, c;
        }
        return o(n, s), n.prototype.setOption = function(e) {
          e === void 0 && (e = {}), this.setNewOption(e);
        }, n.prototype.start = function() {
          return this.isrecording ? Promise.reject() : (this.isrecording = !0, this.startRecord());
        }, n.prototype.pause = function() {
          this.isrecording && !this.ispause && (this.ispause = !0, this.pauseRecord());
        }, n.prototype.resume = function() {
          this.isrecording && this.ispause && (this.ispause = !1, this.resumeRecord());
        }, n.prototype.stop = function() {
          this.isrecording && (this.isrecording = !1, this.ispause = !1, this.stopRecord());
        }, n.prototype.play = function() {
          this.stop(), this.isplaying = !0, this.onplay && this.onplay(), r.default.addPlayEnd(this.onplayend);
          var e = this.getWAV();
          e.byteLength > 44 && r.default.play(e.buffer);
        }, n.prototype.getPlayTime = function() {
          return r.default.getPlayTime();
        }, n.prototype.pausePlay = function() {
          !this.isrecording && this.isplaying && (this.isplaying = !1, this.onpauseplay && this.onpauseplay(), r.default.pausePlay());
        }, n.prototype.resumePlay = function() {
          this.isrecording || this.isplaying || (this.isplaying = !0, this.onresumeplay && this.onresumeplay(), r.default.resumePlay());
        }, n.prototype.stopPlay = function() {
          this.isrecording || (this.isplaying = !1, this.onstopplay && this.onstopplay(), r.default.stopPlay());
        }, n.prototype.destroy = function() {
          return r.default.destroyPlay(), this.destroyRecord();
        }, n.prototype.getRecordAnalyseData = function() {
          return this.getAnalyseData();
        }, n.prototype.getPlayAnalyseData = function() {
          return r.default.getAnalyseData();
        }, n.prototype.getPCM = function() {
          this.stop();
          var e = this.getData();
          return e = t.compress(e, this.inputSampleRate, this.outputSampleRate), t.encodePCM(e, this.oututSampleBits, this.littleEdian);
        }, n.prototype.getPCMBlob = function() {
          return new Blob([this.getPCM()]);
        }, n.prototype.downloadPCM = function(e) {
          e === void 0 && (e = "recorder");
          var c = this.getPCMBlob();
          i.downloadPCM(c, e);
        }, n.prototype.getWAV = function() {
          var e = this.getPCM();
          return t.encodeWAV(e, this.inputSampleRate, this.outputSampleRate, this.config.numChannels, this.oututSampleBits, this.littleEdian);
        }, n.prototype.getWAVBlob = function() {
          return new Blob([this.getWAV()], { type: "audio/wav" });
        }, n.prototype.downloadWAV = function(e) {
          e === void 0 && (e = "recorder");
          var c = this.getWAVBlob();
          i.downloadWAV(c, e);
        }, n.prototype.download = function(e, c, A) {
          i.download(e, c, A);
        }, n.prototype.getChannelData = function() {
          var e = this.getPCM(), c = e.byteLength, A = this.littleEdian, y = { left: null, right: null };
          if (this.config.numChannels === 2) {
            var p = new DataView(new ArrayBuffer(c / 2)), M = new DataView(new ArrayBuffer(c / 2));
            if (this.config.sampleBits === 16) for (var h = 0; h < c / 2; h += 2) p.setInt16(h, e.getInt16(2 * h, A), A), M.setInt16(h, e.getInt16(2 * h + 2, A), A);
            else for (h = 0; h < c / 2; h += 2) p.setInt8(h, e.getInt8(2 * h)), M.setInt8(h, e.getInt8(2 * h + 1));
            y.left = p, y.right = M;
          } else y.left = e;
          return y;
        }, n;
      }(u(5).default);
      l.default = f;
    }, function(g, l, u) {
      function a(o, i, t) {
        var r = document.createElement("a");
        r.href = window.URL.createObjectURL(o), r.download = i + "." + t, r.click();
      }
      Object.defineProperty(l, "__esModule", { value: !0 }), l.downloadWAV = function(o, i) {
        i === void 0 && (i = "recorder"), a(o, i, "wav");
      }, l.downloadPCM = function(o, i) {
        i === void 0 && (i = "recorder"), a(o, i, "pcm");
      }, l.download = function(o, i, t) {
        return a(o, i, t);
      };
    }, function(g, l, u) {
      Object.defineProperty(l, "__esModule", { value: !0 });
      var a = u(4), o = null, i = 0, t = 0, r = null, f = null, s = null, n = !1, e = 0, c = function() {
      };
      function A() {
        return n = !1, r.decodeAudioData(s.slice(0), function(M) {
          (o = r.createBufferSource()).onended = function() {
            n || (e = r.currentTime - t + i, c());
          }, o.buffer = M, o.connect(f), f.connect(r.destination), o.start(0, i), t = r.currentTime;
        }, function(M) {
          a.throwError(M);
        });
      }
      function y() {
        o && (o.stop(), o = null);
      }
      var p = function() {
        function M() {
        }
        return M.play = function(h) {
          return r || (r = new (window.AudioContext || window.webkitAudioContext)(), (f = r.createAnalyser()).fftSize = 2048), this.stopPlay(), s = h, e = 0, A();
        }, M.pausePlay = function() {
          y(), i += r.currentTime - t, n = !0;
        }, M.resumePlay = function() {
          return A();
        }, M.stopPlay = function() {
          i = 0, s = null, y();
        }, M.destroyPlay = function() {
          this.stopPlay();
        }, M.getAnalyseData = function() {
          var h = new Uint8Array(f.frequencyBinCount);
          return f.getByteTimeDomainData(h), h;
        }, M.addPlayEnd = function(h) {
          h === void 0 && (h = function() {
          }), c = h;
        }, M.getPlayTime = function() {
          var h = n ? i : r.currentTime - t + i;
          return e || h;
        }, M;
      }();
      l.default = p;
    }, function(g, l, u) {
      Object.defineProperty(l, "__esModule", { value: !0 }), l.throwError = function(a) {
        throw new Error(a);
      };
    }, function(g, l, u) {
      Object.defineProperty(l, "__esModule", { value: !0 });
      var a = u(0), o = function() {
        function i(t) {
          t === void 0 && (t = {}), this.size = 0, this.lBuffer = [], this.rBuffer = [], this.tempPCM = [], this.inputSampleBits = 16, this.fileSize = 0, this.duration = 0, this.needRecord = !0;
          var r, f = new (window.AudioContext || window.webkitAudioContext)();
          this.inputSampleRate = f.sampleRate, this.setNewOption(t), this.littleEdian = (r = new ArrayBuffer(2), new DataView(r).setInt16(0, 256, !0), new Int16Array(r)[0] === 256), i.initUserMedia();
        }
        return i.prototype.setNewOption = function(t) {
          t === void 0 && (t = {}), this.config = { sampleBits: ~[8, 16].indexOf(t.sampleBits) ? t.sampleBits : 16, sampleRate: ~[8e3, 11025, 16e3, 22050, 24e3, 44100, 48e3].indexOf(t.sampleRate) ? t.sampleRate : this.inputSampleRate, numChannels: ~[1, 2].indexOf(t.numChannels) ? t.numChannels : 1 }, this.outputSampleRate = this.config.sampleRate, this.oututSampleBits = this.config.sampleBits;
        }, i.prototype.startRecord = function() {
          var t = this;
          return this.context && this.destroyRecord(), this.initRecorder(), navigator.mediaDevices.getUserMedia({ audio: !0 }).then(function(r) {
            t.audioInput = t.context.createMediaStreamSource(r), t.stream = r;
          }).then(function() {
            t.audioInput.connect(t.analyser), t.analyser.connect(t.recorder), t.recorder.connect(t.context.destination);
          });
        }, i.prototype.pauseRecord = function() {
          this.needRecord = !1;
        }, i.prototype.resumeRecord = function() {
          this.needRecord = !0;
        }, i.prototype.stopRecord = function() {
          this.audioInput && this.audioInput.disconnect(), this.source && this.source.stop(), this.recorder.disconnect(), this.analyser.disconnect(), this.needRecord = !0;
        }, i.prototype.destroyRecord = function() {
          return this.clearRecordStatus(), this.stopStream(), this.closeAudioContext();
        }, i.prototype.getAnalyseData = function() {
          var t = new Uint8Array(this.analyser.frequencyBinCount);
          return this.analyser.getByteTimeDomainData(t), t;
        }, i.prototype.getData = function() {
          return this.flat();
        }, i.prototype.clearRecordStatus = function() {
          this.lBuffer.length = 0, this.rBuffer.length = 0, this.size = 0, this.fileSize = 0, this.PCM = null, this.audioInput = null, this.duration = 0;
        }, i.prototype.flat = function() {
          var t = null, r = new Float32Array(0);
          this.config.numChannels === 1 ? t = new Float32Array(this.size) : (t = new Float32Array(this.size / 2), r = new Float32Array(this.size / 2));
          for (var f = 0, s = 0; s < this.lBuffer.length; s++) t.set(this.lBuffer[s], f), f += this.lBuffer[s].length;
          for (f = 0, s = 0; s < this.rBuffer.length; s++) r.set(this.rBuffer[s], f), f += this.rBuffer[s].length;
          return { left: t, right: r };
        }, i.prototype.initRecorder = function() {
          var t = this;
          this.clearRecordStatus(), this.context = new (window.AudioContext || window.webkitAudioContext)(), this.analyser = this.context.createAnalyser(), this.analyser.fftSize = 2048;
          var r = this.context.createScriptProcessor || this.context.createJavaScriptNode;
          this.recorder = r.apply(this.context, [4096, this.config.numChannels, this.config.numChannels]), this.recorder.onaudioprocess = function(f) {
            if (t.needRecord) {
              var s, n = f.inputBuffer.getChannelData(0), e = null;
              t.lBuffer.push(new Float32Array(n)), t.size += n.length, t.config.numChannels === 2 && (e = f.inputBuffer.getChannelData(1), t.rBuffer.push(new Float32Array(e)), t.size += e.length), t.fileSize = Math.floor(t.size / Math.max(t.inputSampleRate / t.outputSampleRate, 1)) * (t.oututSampleBits / 8), s = 100 * Math.max.apply(Math, n), t.duration += 4096 / t.inputSampleRate, t.onprocess && t.onprocess(t.duration), t.onprogress && t.onprogress({ duration: t.duration, fileSize: t.fileSize, vol: s });
            }
          };
        }, i.prototype.stopStream = function() {
          this.stream && this.stream.getTracks && (this.stream.getTracks().forEach(function(t) {
            return t.stop();
          }), this.stream = null);
        }, i.prototype.closeAudioContext = function() {
          return this.context && this.context.close && this.context.state !== "closed" ? this.context.close() : new Promise(function(t) {
            t();
          });
        }, i.initUserMedia = function() {
          navigator.mediaDevices === void 0 && (navigator.mediaDevices = {}), navigator.mediaDevices.getUserMedia === void 0 && (navigator.mediaDevices.getUserMedia = function(t) {
            var r = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            return r ? new Promise(function(f, s) {
              r.call(navigator, t, f, s);
            }) : Promise.reject(new Error("浏览器不支持 getUserMedia !"));
          });
        }, i.prototype.transformIntoPCM = function(t, r) {
          var f = new Float32Array(t), s = new Float32Array(r), n = a.compress({ left: f, right: s }, this.inputSampleRate, this.outputSampleRate);
          return a.encodePCM(n, this.oututSampleBits, this.littleEdian);
        }, i.getPermission = function() {
          return this.initUserMedia(), navigator.mediaDevices.getUserMedia({ audio: !0 }).then(function(t) {
            t && t.getTracks().forEach(function(r) {
              return r.stop();
            });
          });
        }, i;
      }();
      l.default = o;
    }]).default;
  });
})(C);
var T = C.exports, G = T;
const D = /* @__PURE__ */ q(G), V = (d, v) => {
  const g = d.__vccOpts || d;
  for (const [l, u] of v)
    g[l] = u;
  return g;
}, X = (d) => (z("data-v-c860af31"), d = d(), U(), d), H = { class: "container" }, O = /* @__PURE__ */ X(() => /* @__PURE__ */ m(
  "img",
  {
    src: E,
    alt: ""
  },
  null,
  -1
  /* HOISTED */
)), S = {
  name: "VoiceButton"
}, W = /* @__PURE__ */ Object.assign(S, {
  emits: ["getFormDataFn"],
  setup(d, { emit: v }) {
    let g = null, l = "", u = "";
    const a = w(null), o = w("长按我录音"), i = w(0), t = w(new D()), r = v;
    F(() => {
      const n = document.querySelector(".label");
      n.addEventListener("touchstart", function() {
        console.log("开始录音。。。。"), o.value = "录音中", l = +/* @__PURE__ */ new Date(), f();
      }), n.addEventListener("touchend", function() {
        u = +/* @__PURE__ */ new Date(), clearInterval(g), g = null, u - l < 700 && n.classList.add("selected"), t.value.stop(), console.log("结束录音。。。。"), o.value = "长按我录音", s();
      });
    });
    const f = () => {
      D == null || D.getPermission().then(
        () => {
          console.log("开始录音"), t.value.start(), g = setInterval(() => {
            try {
              i.value = t.value.getPlayTime(), console.log(i.value);
            } catch {
              g = null;
            }
          }, 100);
        },
        (n) => {
          alert("请先允许该网页使用麦克风"), clearInterval(g), t.value.destroy(), g = null, o.value = "长按我录音", console.log(`${n.name} : ${n.message}`);
        }
      );
    }, s = () => {
      console.log("上传录音");
      const n = new FormData(), e = t.value.getWAVBlob(), c = new Blob([e], { type: "audio/wav" }), A = new File([c], (/* @__PURE__ */ new Date()).getTime() + ".wav");
      n.append("file", A), r("getFormDataFn", n), console.log("录音数据", n.get("file"));
    };
    return (n, e) => (x(), P("div", H, [
      b(" <h3>录音时长：{{ recorder && recorder.duration.toFixed(0) }}'s</h3> "),
      m(
        "div",
        {
          ref_key: "btnRef",
          ref: a,
          class: B(["label", o.value == "录音中" ? "gif" : ""]),
          id: "label"
        },
        [
          O,
          N(
            I(o.value),
            1
            /* TEXT */
          )
        ],
        2
        /* CLASS */
      )
    ]));
  }
}), K = /* @__PURE__ */ V(W, [["__scopeId", "data-v-c860af31"]]), k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: K
}, Symbol.toStringTag, { value: "Module" })), Y = {
  name: "zsl-button"
  //组件名
}, L = (d) => (z("data-v-eef3c236"), d = d(), U(), d), J = /* @__PURE__ */ L(() => /* @__PURE__ */ m(
  "div",
  null,
  [
    /* @__PURE__ */ m("button", null, "test按钮")
  ],
  -1
  /* HOISTED */
));
function Z(d, v, g, l, u, a) {
  return x(), P(
    R,
    null,
    [
      b(" package/zsl-button/index.vue "),
      J
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
const _ = /* @__PURE__ */ V(Y, [["render", Z], ["__scopeId", "data-v-eef3c236"]]), $ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _
}, Symbol.toStringTag, { value: "Module" }));
function tt(d) {
  return d.replace(/( |^)[a-z]/g, (v) => v.toUpperCase());
}
function et(d) {
  return d && Math.round(d);
}
const nt = { handleFirstUpperCase: tt, handleRoundOff: et }, Q = /* @__PURE__ */ Object.assign({ "./voice-button/index.vue": k, "./zsl-button/index.vue": $ }), ot = function(d) {
  for (let v in Q) {
    let g = Q[v].default;
    d.component(g.name, g);
  }
}, it = { install: ot, publicjs: nt };
export {
  it as default
};
