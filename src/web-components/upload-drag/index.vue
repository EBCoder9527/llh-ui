<template>
  <a-upload-dragger
    v-model:fileList="fileList"
    name="file"
    :accept="accept"
    :progress="progress"
    :maxCount="maxCount"
    :multiple="multiple"
    :disabled="disabled"
    :beforeUpload="beforeUpload"
    @drop="handleDrop"
  >
   <div v-if="slotType === 'default'">
     <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p>
    <p class="ant-upload-text">点击或者拖拽文件到此区域进行上传</p>
    <p class="ant-upload-hint">
      支持单个或多个文件上传
    </p>
   </div>
   <slot v-else></slot>
   <template #itemRender="{ file, actions }">
      <slot name="fileItem" :file="file" :actions="actions"></slot>
      <!-- <a-space>
        <span :style="file.status === 'error' ? 'color: red' : ''">{{ file.name }}</span>
        <a href="javascript:;" @click="actions.download">下载</a>
        <a href="javascript:;" @click="actions.remove">删除</a>
      </a-space> -->
    </template>
  </a-upload-dragger>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import { InboxOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import type { UploadChangeParam } from 'ant-design-vue';
defineOptions({
  name: "ths-upload-dragger", //组件名
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
});
const emits = defineEmits(["handleChange", "beforeUpload","handleDrop"]);
const accept = ref(props.accept);
const slotType = ref(props.slotType);
const fileList = ref(props.fileList);
const status = ref(true);
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
    message.success(`${info.file.name} 文件上传成功！`);
  } else if (info.file.status === "error") {
    message.error(`${info.file.name} 文件上传失败.`);
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

function handleDrop(e: DragEvent) {
  console.log('drag----',e);
  emits('handleDrop',e)
}
</script>

