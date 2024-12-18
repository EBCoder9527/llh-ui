<template>
  <div class="box">
    <!-- <Button text="121" /> -->
    <Form ref="formRef" :formData="formData" >
      <template #upload>
       <UploadImg :fileList="fileList" @delFile="delFile" />
      </template>
    </Form>
    <a-button @click="getFormData">提交表单</a-button>
    <a-button @click="resetFormData">清空表单</a-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Button from "./button/index.vue";
import Form from "./form/index.vue"
import UploadImg from './upload-img/index.vue'
const formRef = ref(null)
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
    type: "textarea", // 表单类型 input
    value: null,
    label: "个人简介",
    filedName: "self",
    rows:4,
    showCount:true,
    maxLength:10,
    span:24
  },
  {
    type: "switch", // 表单类型 input
    value: null,
    label: "是否开启",
    filedName: "isOpen",
    // span: 8,
  },
  {
    type: "select", // 表单类型 input
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
    type: "radio", // 表单类型 input
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
    // span: 8,
  },
  {
    type: "rangeDate", // 表单类型 input
    value: [],
    label: "日期范围",
    filedName: "rangeDate",
    // span: 8,
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
  fileList.splice(index,1)
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 0;
  background: #ccc;
}
</style>
