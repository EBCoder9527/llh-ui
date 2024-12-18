import { defineComponent as s, ref as d, watch as f, resolveComponent as m, openBlock as l, createBlock as x, withCtx as b, createTextVNode as v, toDisplayString as g, createElementBlock as k, createVNode as y } from "vue";
const h = /* @__PURE__ */ s({
  name: "ths-button",
  __name: "index",
  props: {
    text: {
      type: String,
      default: "按钮"
    }
  },
  emits: ["clickFn"],
  setup(e, { emit: o }) {
    const t = o, n = e, c = d(n.text), u = () => {
      t("clickFn");
    };
    return f(
      () => n.text,
      (_) => {
        c.value = _;
      }
    ), (_, w) => {
      const p = m("a-button");
      return l(), x(p, { onClick: u }, {
        default: b(() => [
          v(
            g(c.value),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
}), r = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, c] of o)
    t[n] = c;
  return t;
}, i = /* @__PURE__ */ r(h, [["__scopeId", "data-v-ac1c19f7"]]), O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: i
}, Symbol.toStringTag, { value: "Module" })), S = { class: "box" }, j = /* @__PURE__ */ s({
  __name: "index",
  setup(e) {
    return (o, t) => (l(), k("div", S, [
      y(i, { text: "121" })
    ]));
  }
}), C = /* @__PURE__ */ r(j, [["__scopeId", "data-v-0ac8c276"]]), B = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: C
}, Symbol.toStringTag, { value: "Module" })), a = /* @__PURE__ */ Object.assign({ "./button/index.vue": O, "./index.vue": B }), T = function(e) {
  for (let o in a) {
    let t = a[o].default;
    e.component(t.name, t);
  }
}, F = { install: T };
export {
  F as default
};
