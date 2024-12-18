<template>
  <a-button @click="clickCallback">{{ text }}</a-button>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
defineOptions({
  name: "ths-button", //组件名
});
const emits = defineEmits(["clickFn"]);
const props = defineProps({
  text: {
    type: String,
    default: "按钮",
  },
});
const text = ref(props.text);
const clickCallback = () => {
  emits("clickFn");
};
watch(
  () => props.text,
  (newVal) => {
    text.value = newVal;
  }
);
</script>

<style lang="less" scoped>
button {
  background: red;
  color: #fff;
}
</style>
