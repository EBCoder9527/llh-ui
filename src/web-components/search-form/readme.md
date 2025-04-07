# 基于ths-form组件，传入formType：searchForm
- 这是用于表格查询条件的搜索表单
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
```
## hiddenOpenText
- 隐藏‘收起’｜‘展开’文字，搜索条件少的时候没必要 收起展开功能
- type:Boolean
- default:false
# 事件（抛出的方法）
## getValue(data,type)
- 获取当前表单的值的回调函数，并校验相应规则字段
- data:表单数据（type=’success‘）或者错误信息（type=’error‘）
- type:'success'|'error'
## resetValue()
- 重置当前表单所有字段的值的回调函数
# 示例代码
```vue
<template>
    <ths-search-form ref="formRef" :formData="formData" @getValue="getFormData" @resetValue="resetFormData"/>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
const formRef = ref(null)
// 表单配置
const formData = reactive([
  {
    type: "input", // 表单类型 input
    value: null,
    label: "送审工程/项目名称",
    placeholder: "请输入名称",
    filedName: "name",
    span: 6,
  },
  {
    type: "select", // 表单类型 select
    value: undefined,
    span: 6,
    label: "评审类别",
    placeholder: "请选择",
    filedName: "type",
    selectValue: [
      { label: "一", value: "1" },
      { label: "二", value: "2" },
      { label: "三", value: "3" },
    ],
  },
  {
    type: "select", // 表单类型 select
    value: undefined,
    span: 6,
    placeholder: "请选择",
    label: "审核状态",
    filedName: "status",
    selectValue: [
      { label: "一", value: "1" },
      { label: "二", value: "2" },
      { label: "三", value: "3" },
    ],
  },
]);
const getFormData = async (data,status) => {
  console.log("formRef.value----", data,status);
  
};
// 重置表单
const resetFormData = () => {
  alert('reset')
};
</script>
```
# 注意
- type=slot 时，校验、数据由用户自行管控处理数据