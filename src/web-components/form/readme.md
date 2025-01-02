# ths-form 简介
- 这是一个可控制一行展示几个表单组件、配置化的表单组件
- 支持所有input类型
- 支持自义定插槽

# 配置参数
## formData
- 表单配置项数组
```ts
type FormDataType = {
  type:
    | "input"
    | "textarea"
    | "select"
    | "radio"
    | "switch"
    | "checkbox"
    | "upload"
    | "singleDate"
    | "rangeDate"
    | "slot"; // 表单类型
  value: any; // 该字段的值
  label: string; // 名称
  filedName: string; //字段名称
  disabled?: boolean; // 是否禁用
  maxLength?:number; // textarea 最大字数
  rows?:number; // textarea 行数
  showCount?:boolean;// textarea 是否显示字数
  rule?: Object | Array<any>; // 校验规则
  placeholder?: string; // 提示语
  style?:Object; // 内联样式
  span?: number; // 一行占比，总共 24
  selectValue?: Array<SelectType>; // 下拉选择框options数据
  radioValue?: Array<SelectType>; // radio 数据
  checkboxValue?: Array<SelectType>; // checkbox 数据
};
type SelectType = {
  label: string;
  value: string | number | boolean;
};
```
# 事件（抛出的方法）
## getValue
- 获取当前表单的值，并校验相应规则字段
## resetValue
- 重置当前表单所有字段的值
# 示例代码
```vue
<template>
<Form ref="formRef" :formData="formData" >
      <template #upload>
       <UploadImg :fileList="fileList" @delFile="delFile" />
      </template>
</Form>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import Button from "./button/index.vue";
import Form from "./form/index.vue"
import UploadImg from './upload-img/index.vue'
const formRef = ref(null)
// 文件清单信息
const fileList = reactive([
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
// 表单配置
const formData = reactive(
  [
  {
    type: "input", // 表单类型 input
    value: null,
    label: "姓名",
    filedName: "name",
    span:24,
    rule: [{ required: true, message: "请输入名称!" }],
  },
  {
    type: "textarea", // 表单类型 textarea
    value: null,
    label: "个人简介",
    filedName: "self",
    rows:4,
    showCount:true,
    maxLength:10,
    span:24
  },
  {
    type: "switch", // 表单类型 switch
    value: null,
    label: "是否开启",
    filedName: "isOpen",
    // span: 8,
  },
  {
    type: "select", // 表单类型 select
    value: 2,
    label: "选择部门",
    filedName: "department",
    disabled: true,
    selectValue: [
      { label: "一", value: "1" },
      { label: "二", value: "2" },
      { label: "三", value: "3" },
    ],
  },
  {
    type: "radio", // 表单类型 radio
    value: null,
    label: "选择类型",
    filedName: "radioType",
    radioValue: [
      { label: "一", value: "1" },
      { label: "二", value: "2" },
      { label: "三", value: "3" },
    ],
  },
  {
    type: "checkbox", // 表单类型 checkbox
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
    type: "singleDate", // 表单类型 Date
    value: null,
    label: "单个日期",
    filedName: "singleDate",
    // span: 8,
  },
  {
    type: "rangeDate", // 表单类型 rangeDate
    value: [],
    label: "日期范围",
    filedName: "rangeDate",
    // span: 8,
  },
   {
    type: "slot", // 表单类型 插槽
    value: null,
    label: "文件上传",
    filedName: "upload",
    rule: [{ required: true, message: "请输入名称!" }]
    // span: 8,
  },
]
)

// 获取表单信息
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
// 重置表单
const resetFormData = ()=>{
  formRef.value.reset();
}
// 删除文件
const delFile = (index)=>{
  fileList.splice(index,1)
}
</script>
```
# 注意
- type=slot 时，校验、数据由用户自行管控处理数据