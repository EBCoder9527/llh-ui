<template>
  <a-upload
    v-model:file-list="fileList"
    name="file"
    :accept="accept"
    :progress="progress"
    :maxCount="maxCount"
    :multiple="multiple"
    :disabled="disabled"
    :beforeUpload="beforeUpload"
    @change="handleChange"
  >
    <a-button v-if="slotType === 'default'">
      <upload-outlined></upload-outlined>
      点击上传
    </a-button>
    <slot v-else></slot>

    <template #itemRender="{ file, actions }">
      <slot name="fileItem" :file="file" :actions="actions"></slot>
      <!-- <a-space>
        <span :style="file.status === 'error' ? 'color: red' : ''">{{ file.name }}</span>
        <a href="javascript:;" @click="actions.download">下载</a>
        <a href="javascript:;" @click="actions.remove">删除</a>
      </a-space> -->
    </template>
  </a-upload>
</template>
<script lang="ts" setup>
import { message } from "ant-design-vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { ref, watch } from "vue";
import type { UploadChangeParam, UploadProps } from "ant-design-vue";
defineOptions({
  name: "ths-upload", //组件名
});
const props = defineProps({
  fileList: {
    type: Array,
    default: [],
  },
  accept: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  maxCount: {
    type: Number,
    default: null,
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  slotType: {
    type: String,
    default: "default",
  },
  isShowMsg:{
    type: Boolean,
    default: true,
  }
});
const emits = defineEmits(["handleChange", "beforeUpload"]);
const accept = ref(props.accept);
const slotType = ref(props.slotType);
const fileList = ref(props.fileList);
const status = ref(true);
const isShowMsg = ref(props.isShowMsg);
const handleChange = (info: UploadChangeParam) => {
  emits("handleChange", info);
  if (info.file.status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  // 上传在beforeUpload 函数未通过
  // if (info.file.status === undefined) {
  //   message.error("上传受限！");
  //   fileList1.value.pop();
  // }
  if (info.file.status === "done") {
   isShowMsg.value && message.success(`${info.file.name} 文件上传成功！`);
  } else if (info.file.status === "error") {
    isShowMsg.value && message.error(`${info.file.name} 文件上传失败.`);
  }
};

const beforeUpload = (file, fileList2) => {
  emits("beforeUpload", file, fileList2, status);
  return status.value;
};

watch(
  () => props.fileList,
  (newval) => {
    fileList.value = newval;
  },
  { deep: true, immediate: true }
);
const progress: UploadProps["progress"] = {
  strokeColor: {
    "0%": "#108ee9",
    "100%": "#87d068",
  },
  strokeWidth: 3,
  format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
  class: "test",
};
</script>
