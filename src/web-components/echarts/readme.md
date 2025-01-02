# ths-echarts 简介
- 简化echarts的使用，页面加载完成自动渲染图表
- 页面变化时，图表会自适应变化
- 页面卸载时，清除图表实例等副作用

# 参数配置
## domId
- 提供一个唯一的元素id，用于图表渲染
- type：String
## option
- echarts配置项，详见 https://echarts.apache.org/zh/option.html#title
# 事件回调
## renderCharts
- 暴露出这个方法用于重新渲染图表
# 示例代码
```vue
<template>
 <div style="height:300px">
      <MyEacharts ref="charts1Ref" domId="charts1" :option="option" />
</div> 
</template>
<script lang="ts" setup>
const option = ref({
  xAxis: {
    type: 'category',
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '30%']
  },
  visualMap: {
    type: 'piecewise',
    show: false,
    dimension: 0,
    seriesIndex: 0,
    pieces: [
      {
        gt: 1,
        lt: 3,
        color: 'rgba(0, 0, 180, 0.4)'
      },
      {
        gt: 5,
        lt: 7,
        color: 'rgba(0, 0, 180, 0.4)'
      }
    ]
  },
  series: [
    {
      type: 'line',
      smooth: 0.6,
      symbol: 'none',
      lineStyle: {
        color: '#5470C6',
        width: 5
      },
      markLine: {
        symbol: ['none', 'none'],
        label: { show: false },
        data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
      },
      areaStyle: {},
      data: [
        ['2019-10-10', 200],
        ['2019-10-11', 560],
        ['2019-10-12', 750],
        ['2019-10-13', 580],
        ['2019-10-14', 250],
        ['2019-10-15', 300],
        ['2019-10-16', 450],
        ['2019-10-17', 300],
        ['2019-10-18', 100]
      ]
    }
  ]
})
const charts1Ref = ref(null);
// 模拟网络请求新数据
setTimeout(() => {
  option.value.series[0].data =  [['2019-10-10', 200],
        ['2019-10-11', 56],
        ['2019-10-12', 75],
        ['2019-10-13', 58],
        ['2019-10-14', 25],
        ['2019-10-15', 30],
        ['2019-10-16', 45],
        ['2019-10-17', 30],
        ['2019-10-18', 100]]
  // charts1Ref.value.renderCharts()
}, 2000);
</script>
```
# 注意事项