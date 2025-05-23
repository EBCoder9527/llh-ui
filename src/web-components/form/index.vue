<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-row :warp="true">
      <a-col
        v-for="(data, index) in formData"
        :key="index"
        :span="data.span ?? 12"
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
            @change="data.change"
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
            style="min-width: 200px"
            :style="data.style"
          />
          <slot v-if="data.type === 'slot'" :name="data.filedName"></slot>
        </a-form-item>
      </a-col>
      <a-col v-if="formType === 'searchForm'" span="6">
        <a-form-item :wrapper-col="{ span: 24, offset: 4 }">
          <a
            v-if="isOpen"
            style="margin-right: 16px; color: #1677ff"
            @click="open"
            v-show="!hiddenOpenText"
            >展开 <DownOutlined
          /></a>
          <a
            v-else
            v-show="!hiddenOpenText"
            @click="close"
            style="margin-right: 16px; color: #1677ff"
            >收起 <UpOutlined
          /></a>
          <a-button type="primary" @click="onSubmit"
            > <template #icon
              ><SearchOutlined style="font-size: 14px"
            /></template>
            搜索</a-button
          >
          <a-button style="margin-left: 10px" @click="reset"
            > <template #icon
              ><ReloadOutlined style="font-size: 12px"
            /></template>
            重置</a-button
          >
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script setup lang="ts">
import { reactive, ref, toRaw } from "vue";
import type { UnwrapRef } from "vue";
import { Form } from "ant-design-vue";
import {
  DownOutlined,
  UpOutlined,
  SearchOutlined,
  ReloadOutlined,
} from "@ant-design/icons-vue";
import dayjs from "dayjs";
import { FormDataType, SelectType } from "./type";
import { deepClone } from "../utils/deepClone";
const useForm = Form.useForm;

defineOptions({
  name: "ths-form", //组件名
});
const props = defineProps({
  formData: {
    type: Array<FormDataType>,
    default: [],
  },
  formType: {
    type: String,
    default: "form",
  },
  hiddenOpenText: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["getValue", "resetValue"]);
const formData = ref<Array<FormDataType>>(props.formData);
const formDataCopy = deepClone(props.formData);
const hiddenOpenText = deepClone(props.hiddenOpenText);
const formType = ref(props.formType);
const formState = reactive({});
const rulesState = reactive({});
const isOpen = ref(false);
formData.value.map((item) => {
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
      emits("getValue", toRaw(formState), "success");
      return toRaw(formState);
    })
    .catch((err) => {
      console.error("error", err);
      emits("getValue", err, "error");
      return err;
    });
};
// 重置字段
const reset = () => {
  // 字段置空
  for (let key in formState) {
    formState[key] = null;
  }
  console.log("reset 1");
  emits("resetValue");
  // 清除掉错误提示
  resetFields();
};
const open = () => {
  isOpen.value = false;
  if (formDataCopy.length > 3) {
    formData.value = formDataCopy;
  }
};
const close = () => {
  isOpen.value = true;
  if (formDataCopy.length > 3) {
    formData.value = formDataCopy.slice(0, 3);
  } else {
    formData.value = formDataCopy;
  }
  console.log("close", props.formData, formData.value);
};
const setFormValue = (key, value) => {
  if (!(key in formState)) {
    console.error(`该表单没有 ${key} 属性！`);
    return;
  }
  formState[key] = value;
};
const getFormValue = (key?) => {
  if (key) {
    if (!(key in formState)) {
      console.error(`该表单没有 ${key} 属性！`);
      return;
    }
    return formState[key];
  } else {
    return formState;
  }
};
defineExpose({ onSubmit, reset, setFormValue, getFormValue });
const labelCol = { style: { width: "150px" } };
const wrapperCol = { span: 24 };
</script>

<style lang="less" scoped></style>
