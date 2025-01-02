import ThsEcharts from './echarts/index.vue'

 const install = function (App) {
      App.component(ThsEcharts.name, ThsEcharts);
  };
  export default {install}