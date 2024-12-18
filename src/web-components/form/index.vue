<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-row>
      <a-col
        v-for="(data, index) in formData"
        :key="index"
        :span="data.span || 12"
      >
        <a-form-item
          :label="data.label"
          :rules="data.rule"
          v-bind="validateInfos[data.filedName]"
        >
          <a-input
            v-if="data.type === 'input'"
            v-model:value="formState[data.filedName]"
            :placeholder="data.placeholder"
            :disabled="data.disabled || false"
            :style="data.style"
          />
          <a-switch
            v-if="data.type === 'switch'"
            v-model:checked="formState[data.filedName]"
            :placeholder="data.placeholder"
            :disabled="data.disabled || false"
            :style="data.style"
          />
          <a-textarea
            v-if="data.type === 'textarea'"
            :rows="data.rows"
            v-model:value="formState[data.filedName]"
            :placeholder="data.placeholder"
            :maxlength="data.maxLength"
            :disabled="data.disabled || false"
            :style="data.style"
            :showCount="data.showCount"
          />
          <a-select
            v-if="data.type === 'select'"
            v-model:value="formState[data.filedName]"
            :placeholder="data.placeholder"
            :options="data.selectValue"
            :disabled="data.disabled || false"
            :style="data.style"
          ></a-select>
          <a-radio-group
            v-if="data.type === 'radio'"
            v-model:value="formState[data.filedName]"
            :options="data.radioValue"
            :disabled="data.disabled || false"
            :style="data.style"
          ></a-radio-group>
          <a-checkbox-group
            v-if="data.type === 'checkbox'"
            v-model:value="formState[data.filedName]"
            :options="data.checkboxValue"
            :style="data.style"
          />
          <a-date-picker
            v-if="data.type === 'singleDate'"
            v-model:value="formState[data.filedName]"
            placeholder="请选择日期"
            :style="data.style"
          />
         
          <a-range-picker
            v-if="data.type === 'rangeDate'"
            v-model:value="formState[data.filedName]"
            :style="data.style"
          />
          <slot v-if="data.type==='slot'" :name='data.filedName' ></slot>
        </a-form-item>
      </a-col>
    </a-row>
    <!-- <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">提交</a-button>
      <a-button style="margin-left: 10px" @click="reset">清空</a-button>
    </a-form-item> -->
  </a-form>
</template>

<script setup lang="ts">
import { reactive, toRaw } from "vue";
import type { UnwrapRef } from "vue";
import { Form } from "ant-design-vue";
import dayjs from 'dayjs';

const useForm = Form.useForm;

defineOptions({
  name: "ths-form", //组件名
});
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
  span?: number; // 一行占比，总共 24
  style?:Object; // 内联样式
  selectValue?: Array<SelectType>; // 下拉选择框options数据
  radioValue?: Array<SelectType>; // radio 数据
  checkboxValue?: Array<SelectType>; // checkbox 数据
};
type SelectType = {
  label: string;
  value: string | number | boolean;
};
const props = defineProps({
  formData: {
    type: Array<FormDataType>,
    default: [],
  },
});
const emits = defineEmits(["getValue", "resetValue"]);
const formData: Array<FormDataType> = reactive(props.formData)

const formState = reactive({});
const rulesState = reactive({});

formData.map((item) => {
  // 获取表单字段
  if (item.type !== "slot") {
    formState[item.filedName] = item.value;
  }
  // 获取校验字段
  if (item.rule) {
    rulesState[item.filedName] = item.rule;
  }
});
const { resetFields, validate, validateInfos } = useForm(formState, rulesState);
// 提交表单
const onSubmit = () => {
  //   console.log("submit!", toRaw(formState));
 return validate()
    .then((res) => {
      console.log(res, toRaw(formState));
    //   emits("getValue", toRaw(formState));
      return toRaw(formState);
    })
    .catch((err) => {
      console.log("error", err);
      return err;
    });
};
// 重置字段
const reset = () => {
 // 字段置空
  for (let key in formState) {
    formState[key] = null;
  }
  // 清除掉错误提示
  resetFields()
};

defineExpose({onSubmit,reset})
const labelCol = { style: { width: "150px" } };
const wrapperCol = { span: 24 };
</script>

<style lang="less" scoped></style>
