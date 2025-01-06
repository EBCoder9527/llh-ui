<template>
  <div class="box">
    <PDF @getSaveResult="getSaveResult" pdfUrl="/test.pdf"/>
    <!-- <Button text="121" /> -->
    <!-- <ths-form ref="formRef" :formData="formData" >
      <template #upload>
       <ths-img-upload :fileList="fileList" @delFile="delFile" />
      </template>
    </ths-form> -->
    <!-- <SearchForm ref="formRef" :formData="formData" /> -->

    <!-- <Table :columns="columns" :data="data" :spinning="spinning" :pagination="pagination" :rowSelection="rowSelection" @pageChange="pageChange" >
      <template v-slot:name="{record}">
        {{record.name}}
      </template>
       <template v-slot:address="{record}">
        <a >{{record.address}}</a>
      </template>
    </Table> -->
    <!-- <a-button @click="getFormData">提交表单</a-button>
    <a-button @click="resetFormData">清空表单</a-button> -->
    <!-- <div style="width:300px;height:160px">
        <Upload2 :fileList="fileList" @handleChange='handleChange' @beforeUpload="beforeUpload" @handleDrop="handleDrop">
      <template v-slot:fileItem="{ file,actions }">
      <a-space>
        <span :style="file.status === 'error' ? 'color: red' : ''">{{ file.name }}</span>
        <a v-if="file.status === 'done'" href="javascript:;" @click="actions.download">下载</a>
        <a href="javascript:;" @click="actions.remove">删除</a>
      </a-space>

      </template>
    </Upload2>
    </div> -->
    <!-- <div style="height:300px">
      <ths-echarts ref="charts1Ref" domId="charts1" :option="option" />
    </div> -->
     <!-- <div style="height:300px">
      <MyEacharts domId="charts2" :option="option2" />
    </div>
     <div style="height:300px">
      <MyEacharts1 domId="charts3" :option="option2" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Button from "./button/index.vue";
import Form from "./form/index.vue"
import SearchForm from "./search-form/index.vue"
import UploadImg from './upload-img/index.vue'
import Table from './table/index.vue';
import Upload from './upload/index.vue';
import Upload2 from './upload-drag/index.vue';
import MyEacharts from './echarts/index.vue'
import { message } from "ant-design-vue";
// const {ths-echarts} = components
import componentsObj from './index';
import PDF from '../pdf/index.vue';
console.log('MyEacharts---',componentsObj);
function getSaveResult(resultObj){
  console.log('getSaveResult----------',getSaveResult)
}
// // const {ThsMyEacharts} = util.components
const formRef = ref(null)
const fileList = ref([
    {
      uid: '-1',
      name: 'image1.jpg',
      status: 'done',
      url: 'https://img2.baidu.com/it/u=1906530840,3695714173&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800',
    },
    {
      uid: '-2',
      name: 'image2.jpg',
      status: 'done',
      url: 'https://img2.baidu.com/it/u=1906530840,3695714173&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800',
    },
  ]);
const handleChange = (info)=>{
  // 未通过上传预处理
   if (info.file.status === undefined) {
    message.error("上传受限！");
    fileList.value.pop();
  }
}
const beforeUpload = (file,fileList1,isPass)=>{
  // isPass 来决定是否通过上传预处理
  if (fileList.value.length > 3) {
    // return false;
    isPass.value = false
  }
  // 返回true 则走到handleChange，上传文件；返回false则挂起
}
const handleDrop = (e)=>{
  console.log('拖拽上传---',e)
}
// 表单组件测试数据
const formData = reactive(
  [
  {
    type: "input", // 表单类型 input
    value: null,
    label: "姓名",
    filedName: "name",
    span:6,
    rule: [{ required: true, message: "请输入名称!" }],
  },
  {
    type: "input", // 表单类型 input
    value: null,
    label: "姓名2",
    filedName: "name2",
    span:6,
    rule: [{ required: true, message: "请输入名称!" }],
  },
  // {
  //   type: "textarea", // 表单类型 input
  //   value: null,
  //   label: "个人简介",
  //   filedName: "self",
  //   rows:4,
  //   showCount:true,
  //   maxLength:10,
  //   span:6
  // },
  // {
  //   type: "switch", // 表单类型 input
  //   value: null,
  //   label: "是否开启",
  //   filedName: "isOpen",
  //   span: 4,
   
  // },
  {
    type: "select", // 表单类型 input
    value: 2,
    label: "选择部门",
    filedName: "department",
    disabled: true,
    span:5,
    selectValue: [
      { label: "一", value: "1" },
      { label: "二", value: "2" },
      { label: "三", value: "3" },
    ],
  },
  {
    type: "radio", // 表单类型 input
    value: null,
    label: "选择类型",
    filedName: "radioType",
    radioValue: [
      { label: "一", value: "1" },
      { label: "二", value: "2" },
      { label: "三", value: "3" },
    ],
    span:6,
  },
  {
    type: "checkbox", // 表单类型 input
    value: null,
    label: "选择组合",
    filedName: "checkboxType",
    checkboxValue: [
      { label: "一", value: "1" },
      { label: "二", value: "2" },
      { label: "三", value: "3" },
    ],
  },
  {
    type: "singleDate", // 表单类型 input
    value: null,
    label: "单个日期",
    filedName: "singleDate",
    style:{width:'100%'},
    span: 6,
  },
  {
    type: "rangeDate", // 表单类型 input
    value: [],
    label: "日期范围",
    filedName: "rangeDate",
    style:{width:'100%'},
    span: 7,
  },
   {
    type: "slot", // 表单类型 input
    value: null,
    label: "文件上传",
    filedName: "upload",
    rule: [{ required: true, message: "请输入名称!" }]
    // span: 8,
  },
]
)
const getFormData = async(data)=>{
  console.log('formRef.value----',formRef.value)
 const res =  await formRef.value.onSubmit();
 // 校验到有字段不符合校验规则
 if(res.errorFields?.length){
    alert('请检查字段信息！')
 }else{
   console.log('提交表单---',res)
 }
}
const resetFormData = ()=>{
  formRef.value.reset();
}
const delFile = (index)=>{
  fileList.value.splice(index,1)
}

// 表格测试数据
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    align:'center',
    width:120
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 180,
  },
  {
    title: '操作',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];
const data = ref([]);

const spinning = ref(false)
const pagination = ref({
     page:1,
    total:100,
    pageSize:10,
    current:1
});

const pageChange = ({current,pageSize})=>{
  console.log('触发页码变化');
  pagination.value.current = current;
  pagination.value.pageSize = pageSize;
  getData()
  // 整合查询数据 调接口更新表格数据
}
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log('selectedRows',selectedRows)
  },
};
const getData = ()=>{
  spinning.value = true;
  setTimeout(() => {

  for(let i = 0;i<pagination.value.pageSize;i++){
  data.value.push({
     key: i,
    name: 'John Brown'+i,
    address: 'aaaa'+i,
  })
  //   pagination.value = {
  //   page:1,
  //   total:data.value.length,
  //   pageSize:15,
  //   current:1
  // }
  
}
spinning.value = false;
}, 3000);

}
getData()

// echarts 测试数据
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
const option2 = ref({
  title: [
    {
      text: 'Tangential Polar Bar Label Position (middle)'
    }
  ],
  polar: {
    radius: [30, '80%']
  },
  angleAxis: {
    max: 4,
    startAngle: 75
  },
  radiusAxis: {
    type: 'category',
    data: ['a', 'b', 'c', 'd']
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [2, 1.2, 2.4, 3.6],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle',
      formatter: '{b}: {c}'
    }
  }
});

const charts1Ref = ref(null)
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

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  // padding: 20px;
  margin: 0;
  background: #ccc;
}
</style>
