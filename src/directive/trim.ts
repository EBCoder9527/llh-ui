import { onUnmounted } from "vue";
function trimAll(e) {
  const value = e.target.value;
  e.target.value = value.replaceAll(" ", "");
}
function trim(e) {
  const value = e.target.value;
  e.target.value = value.trim();
}
export default {
  mounted: function (el, binding) {
    if (binding.arg == "all") {
      el.addEventListener("input", trimAll);
    } else {
      el.addEventListener("input", trim);
    }
  },
  onUnmounted: function (el, binding) {
    if (binding.arg == "all") {
      el.removeEventListener("input", trimAll);
    } else {
      el.removeEventListener("input", trim);
    }
  },
};
