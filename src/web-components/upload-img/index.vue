<template>
  <a-upload
    list-type="picture-card"
    :file-list="fileList"
    :custom-request="customRequest"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :maxCount="maxCount"
    accept="image/*"
  >
    <div>
      <PlusOutlined />
      <div style="margin-top: 8px">上传</div>
    </div>
  </a-upload>

  <!-- 弹出预览图片 -->
  <a-modal
    style="width: 700px; height: 500px"
    v-model:visible="previewVisible"
    :footer="null"
    width="auto"
  >
    <img
      alt="example"
      style="width: 100%; margin: 30px 10px 0px 10px"
      :src="previewImage"
    />
  </a-modal>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
const props = defineProps({
  fileList: {
    type: Array,
    default: [],
  },
  maxCount: {
    type: Number,
    default: 1,
  },
});
const fileList: any = ref(props.fileList); // 用于存储上传的文件列表
const maxCount = ref(props.maxCount);
const previewImage = ref(""); // 预览图片的 URL
const previewVisible = ref(false); // 控制预览图片的显示

watch(
  () => props.fileList,
  (newval) => {
    fileList.value = newval;
  },
  { immediate: true, deep: true }
);
watch(
  () => props.maxCount,
  (newVal) => {
    maxCount.value = newVal;
  },
  { immediate: true, deep: true }
);
const emits = defineEmits(["delFile", "uploadFn"]);
// 处理图片上传
const customRequest = (options) => {
  const { file, onError } = options;
  // 图片限制
  if (fileList.value.length >= maxCount.value) {
    onError(`只能上传${maxCount.value}张图片！`, file);
    message.warn(`只能上传${maxCount.value}张图片！`);
    return;
  }
  emits("uploadFn", options);
};

// 获取已上传的图片列表（假设从后端获取）
// const fetchUploadedImages = () => {
//   // 假设从后端获取已上传的图片数据
//   const uploadedImages = [
//     {
//       uid: '-1',
//       name: 'image1.jpg',
//       status: 'done',
//       url: 'https://img2.baidu.com/it/u=1906530840,3695714173&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800',
//     },
//     {
//       uid: '-2',
//       name: 'image2.jpg',
//       status: 'done',
//       url: 'https://img2.baidu.com/it/u=1906530840,3695714173&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800',
//     },
//   ];

//   // 更新文件列表
//   //   fileList.value = uploadedImages;
//   emits('addFileList', uploadedImages[0]);
// };

// 处理图片预览
const handlePreview = (file) => {
  previewImage.value = file.url; // 设置预览图片的 URL
  previewVisible.value = true; // 打开预览弹窗
};

// 处理图片删除
const handleRemove = (file) => {
  // 删除文件时，执行相应的操作
  console.log("删除文件:", file);
  emits("delFile", fileList.value.indexOf(file));
};

// 初始化，加载已上传的图片
// onMounted(() => {
//   fetchUploadedImages();
// });
</script>

<style scoped>
/* 这里可以添加自定义样式 */
</style>
