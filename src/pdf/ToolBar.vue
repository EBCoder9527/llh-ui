<template>
  <div v-drag class="func-container">
    <div class="set_func">
    
      <a-tooltip v-if="!isFold">
        <menu-unfold-outlined
          class="anticon"
          @click="actionToggleSidebar(true)"
        />
        <template #title>打开侧边栏</template>
      </a-tooltip>
      <a-tooltip v-if="isFold">
        <menu-fold-outlined
          class="anticon"
          @click="actionToggleSidebar(false)"
        />
        <template #title>关闭侧边栏</template>
      </a-tooltip>
        <a-tooltip>
        <UploadImage
          :isShowMsg="false"
          :fileList="fileList2"
          :maxCount="1"
          slotType="self"
          accept="application/pdf"
          @beforeUpload="beforeUploadPDF"
        >
        <FileAddOutlined style="font-size:16px" class="anticon" @click="importPdf" />
        </UploadImage>
        <template #title>导入文件</template>
      </a-tooltip>
      <a-tooltip>
        <ZoomInOutlined class="anticon" @click="actionChangeScale('add')" />
        <template #title>放大</template>
      </a-tooltip>
      <a-tooltip>
        <ZoomOutOutlined class="anticon" @click="actionChangeScale('minus')" />
        <template #title>缩小</template>
      </a-tooltip>
      <a-tooltip>
        <FormOutlined class="anticon" @click="actionSetTextAnnotation" />
        <template #title>输入文本批注</template>
      </a-tooltip>
      <a-tooltip>
        <HighlightOutlined
          class="anticon"
          @click="actionSetHandWriteAnnotation()"
        />
        <template #title>手写批注</template>
      </a-tooltip>
      <a-tooltip>
        <UploadImage
          :isShowMsg="false"
          :fileList="fileList"
          :maxCount="1"
          slotType="self"
          accept="image/*"
          @beforeUpload="beforeUpload"
        >
          <FileImageOutlined class="anticon" />
        </UploadImage>
        <template #title>插入图片</template>
      </a-tooltip>
      <a-tooltip>
        <MergeCellsOutlined class="anticon" @click="actionCancelAnnotation" />
        <template #title>退出编辑模式</template>
      </a-tooltip>
      <a-tooltip>
        <ExportOutlined class="anticon" @click="saveFile" />
        <template #title>导出PDF文件</template>
      </a-tooltip>
      <a-tooltip>
        <LoginOutlined class="anticon" @click="back()" />
        <template #title>关闭</template>
      </a-tooltip>
    </div>
  </div>

  <a-modal v-model:open="open" title="文字批注" @ok="handleOk" centered>
    <a-input v-model:value="textValue" placeholder="请输入文字批注" />
  </a-modal>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  HighlightOutlined,
  FileImageOutlined,
  LoginOutlined,
  ExportOutlined,
  MergeCellsOutlined,
  FormOutlined,
  FileAddOutlined
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import UploadImage from "../web-components/upload/index.vue";
import { textBecomeImg, base64ConvertFile, base64ConvertBlobUrl } from "./util";
import { AnnotationEditorType, AnnotationEditorParamsType } from "./type";
const props = defineProps({
  pdfIframe: {
    type: Object,
  },
  getViewerInstance: {
    type: Function,
  },
});
const emits =  defineEmits(['getSaveResult','actionSwitchFile'])
// 是否折叠
const isFold = ref(false);
// 放大缩小值
const scaleValue = ref(1);
// 文字批注内容
const textValue = ref(null);
// 图片批注数组
const fileList = ref([]);
const fileList2 = ref([]);
// 打开模态框
const open = ref(false);
const pdfIframe = ref(props.pdfIframe);
watch(
  () => props.pdfIframe,
  (newval) => {
    pdfIframe.value = newval;
    console.log("pdfIframe.value--1", pdfIframe.value);
  },
  { deep: true, immediate: true }
);
/** 获取 pdf 实例 */
function getViewerInstance() {
  return props.getViewerInstance();
}
/** 展开 / 收起 pdf 侧边栏 */
function actionToggleSidebar(visible) {
  isFold.value = visible;
  const { PDFViewerApplication } = getViewerInstance();
  if (visible) return PDFViewerApplication.pdfSidebar.open();
  else return PDFViewerApplication.pdfSidebar.close();
}

/** 切换缩放 */
function actionChangeScale(scaleType) {
  // 注意！scaleType 是一个字符串，比如 'page-width'
  validateScaleValue(scaleType);
  const { PDFViewerApplication } = getViewerInstance();
  PDFViewerApplication.eventBus.dispatch("scalechanged", {
    value: scaleValue.value,
  });
}
// 放大缩小值控制
function validateScaleValue(scaleType) {
  if (scaleType === "add") {
    scaleValue.value += 0.25;
  } else {
    scaleValue.value -= 0.25;
  }
  if (scaleValue.value < 0.25) {
    scaleValue.value = 0.25;
  }
  if (scaleValue.value > 2) {
    scaleValue.value = 2;
  }
}

// 设置批注模式
function actionChangeAnnotation(annotationType) {
  const { PDFViewerApplication } = getViewerInstance();
  PDFViewerApplication.eventBus.dispatch("switchannotationeditormode", {
    mode: annotationType,
  });
}

/** 设置批注模式参数 */
function actionChangeAnnotationParam(paramType, paramValue) {
  const { PDFViewerApplication } = getViewerInstance();
  PDFViewerApplication.eventBus.dispatch("switchannotationeditorparams", {
    type: paramType,
    value: paramValue,
  });
}

/**设置文字批注  */
function actionSetTextAnnotation() {
  // actionChangeAnnotation(AnnotationEditorType['FREETEXT']);
  openModal(true);
}
/**设置手写批注  */
function handleOk() {
  if (textValue.value) {
    const res = textBecomeImg(textValue.value, 20, "#000");
    actionSetImgAnnotation(res);
    textValue.value = null;
    openModal(false);
  } else {
    message.warn("请输入批注内容！");
  }
}

// 手写批注
function actionSetHandWriteAnnotation() {
  actionChangeAnnotation(AnnotationEditorType.INK);
}

/**设置图片批注 */
function actionSetImgAnnotation(base64) {
  if (!base64) {
    alert("设置失败！");
    return;
  }
  // 处理图片选择
  // handleSelectImg();
  // 选择完成插入图片
  actionChangeAnnotation(AnnotationEditorType.STAMP);
  actionChangeAnnotationParam(
    AnnotationEditorParamsType.CREATE,
    base64ConvertFile(base64)
  );
}
// 上传文件批注回调函数
const beforeUpload = (file, fileList1, isPass) => {
  // isPass 来决定是否通过上传预处理
  // if (fileList.value.length > 3) {
  //   // return false;
  //   isPass.value = false
  // }
  if (file) {
    const reader = new FileReader();
    // 当文件读取完成后触发 onload 事件
    reader.onload = function (e) {
      const base64String = e.target.result;
      // 可以在这里处理 base64String，如保存、上传等操作
      actionSetImgAnnotation(base64String);
    };
    // 以 Data URL 的形式读取文件（这会将文件转换为 Base64）
    reader.readAsDataURL(file);
  }
  // 返回true 则走到handleChange，上传文件；返回false则挂起
};

const beforeUploadPDF = (file, fileList1, isPass) => {
  // isPass 来决定是否通过上传预处理
  // if (fileList.value.length > 3) {
  //   // return false;
  //   isPass.value = false
  // }
  if (file) {
    const reader = new FileReader();
    // 当文件读取完成后触发 onload 事件
    reader.onload = function (e) {
      const base64String = e.target.result;
      // 可以在这里处理 base64String，如保存、上传等操作
      // actionSetImgAnnotation(base64String);
      emits('actionSwitchFile',base64ConvertBlobUrl(base64String))
    };
    // 以 Data URL 的形式读取文件（这会将文件转换为 Base64）
    reader.readAsDataURL(file);
  }
  // 返回true 则走到handleChange，上传文件；返回false则挂起
};
/**退出批注模式 */
function actionCancelAnnotation() {
  actionChangeAnnotation(AnnotationEditorType.NONE);
}
// 保存文件
async function saveFile(isDownload = true) {
  const result = getViewerInstance();
  console.log("下载文件-----", result);
  let { blob, filename } = await result.PDFViewerApplication.save();
  console.log("----->二进制流-->", blob);
  // const formData = new FormData();
  // formData.append('pdfFile', blob, filename);
  if (isDownload) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.download = filename;
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  emits('getSaveResult',{ blob, filename })
  return { blob, filename };
}
function openModal(type) {
  open.value = type;
}
// 关闭
function back() {}

defineExpose({ saveFile });
</script>

<style lang="less" scoped>
.func-container {
  width: 300px;
  height: 100px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: calc(50% - 150px);
  bottom: 4%;
  opacity: 0.9;
  cursor: move;
}
.set_func {
  background-color: #56a8fe;
  width: 280px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  opacity: 0.9;
  .anticon {
    color: #fff;
    cursor: pointer;
    &:hover {
      color: aquamarine;
    }
  }
}
</style>
