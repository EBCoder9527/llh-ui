<template>
  <div class="echarts-box">
    <div :id="domId" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import * as echarts from 'echarts';
defineOptions({
  name: "ths-echarts", //组件名
});
const props = defineProps({
  domId: {
    type: String,
    default: "",
  },
  option: {
    type: Array,
    default: [],
  },
});
const domId = props.domId;
let chartDom = null;
let myChart = null;
const option = ref(props.option);
let timer = null;
watch(
  () => props.option,
  (newval) => {
    option.value = newval;
    // 配置项变化，重新渲染图表
    renderCharts();
  },
  { deep: true, immediate: false }
);
onMounted(() => {
  renderCharts();
  timer = setTimeout(() => {
    // 页面初始化调整图表适配
    resizeFn();
  }, 1000);
});
onUnmounted(() => {
  // 组件卸载时清除副作用
  echarts.dispose(chartDom);
  clearTimeout(timer);
  window.removeEventListener("resize", resizeFn);
});
// 首次加载渲染所有图表
function renderCharts() {
  if (!domId) return;
  if (myChart) {
    myChart.dispose();
  }
  chartDom = document.getElementById(domId);
  myChart = echarts.init(chartDom);
  option.value && myChart.setOption(option.value);
}
// 监听窗口缩放事件 防止用户调整窗口图表样式异常
window.addEventListener("resize", resizeFn);
function resizeFn() {
  myChart.resize();
}
defineExpose({ renderCharts });
</script>

<style lang="less" scoped>
.echarts-box {
  width: 100%;
  height: 100%;
  // border: 10px solid red;
}
</style>
