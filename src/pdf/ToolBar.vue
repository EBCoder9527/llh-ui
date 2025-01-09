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
          <FileAddOutlined
            style="font-size: 16px"
            class="anticon"
            @click="importPdf"
          />
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
        <LockOutlined class="anticon" @click="actionCancelAnnotation" />
        <template #title>退出编辑模式</template>
      </a-tooltip>
      <a-tooltip>
        <UnlockOutlined class="anticon" @click="selectMode" />
        <template #title>选择模式</template>
      </a-tooltip>
      <a-tooltip>
        <RotateRightOutlined class="anticon" @click="rotatecw" />
        <template #title>旋转</template>
      </a-tooltip>
      <a-tooltip>
        <FontColorsOutlined class="anticon" @click="heighLight" />
        <template #title>高亮</template>
      </a-tooltip>
      <a-tooltip>
        <FormOutlined class="anticon" @click="actionSetTextAnnotation" />
        <template #title>输入文本批注</template>
      </a-tooltip>
      <!-- <a-tooltip>
        <FontSizeOutlined class="anticon" @click="actionSetTextAnnotation2" />
        <template #title>文本批注</template>
      </a-tooltip> -->
      <a-tooltip>
        <HighlightOutlined
          class="anticon"
          @click="actionSetHandWriteAnnotation()"
        />
        <template #title>手写批注</template>
      </a-tooltip>
      <a-tooltip>
        <!-- <UploadImage
          :isShowMsg="false"
          :fileList="fileList"
          :maxCount="1"
          slotType="self"
          accept="image/*"
          @beforeUpload="beforeUpload"
        > -->
        <FileImageOutlined class="anticon" @click="addSignature" />
        <!-- </UploadImage> -->
        <template #title>选择签名</template>
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

  <a-modal
    :width="600"
    v-model:open="open"
    :title="modalTitle"
    @ok="handleOk"
    centered
    :bodyStyle="{
      overflowY: 'auto',
      overflowX: 'hidden',
      maxHeight: '500px',
      padding: '10px',
    }"
  >
    <a-form
      v-if="modalTitle == '文字批注'"
      :model="formState"
      name="basic"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <a-form-item
        label="批注内容"
        name="fontValue"
        :rules="[{ required: true, message: '请输入批注内容!' }]"
      >
        <a-textarea
          v-model:value="formState.fontValue"
          placeholder="请输入文字批注"
        />
      </a-form-item>
      <a-form-item label="字体颜色" name="fontColor">
        <input type="color" v-model="formState.fontColor" />
      </a-form-item>
      <a-form-item label="字体大小" name="fontSize">
        <a-select
          ref="select"
          v-model:value="formState.fontSize"
          style="width: 120px"
          :options="fontOptions"
          placeholder="请选择字号"
        />
      </a-form-item>
    </a-form>
    <div v-else class="sign">
      手写签名：
      <Signature ref="signatureRef">
        <UploadImage
          :isShowMsg="false"
          :fileList="fileList"
          :maxCount="1"
          slotType="self"
          accept="image/*"
          @beforeUpload="beforeUpload"
        >
          <a-button size="small"><UploadOutlined /> 上传签名</a-button>
        </UploadImage>
      </Signature>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  HighlightOutlined,
  FileImageOutlined,
  LoginOutlined,
  ExportOutlined,
  FormOutlined,
  FileAddOutlined,
  FontSizeOutlined,
  RotateRightOutlined,
  UploadOutlined,
  UnlockOutlined,
  LockOutlined,
  FontColorsOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import UploadImage from "../web-components/upload/index.vue";
import Signature from "../signature/index.vue";
import { textBecomeImg, base64ConvertFile, base64ConvertBlobUrl } from "./util";
import {
  AnnotationEditorType,
  AnnotationEditorParamsType,
  ModalTilte,
  AnnotationType,
} from "./type";
const props = defineProps({
  pdfIframe: {
    type: Object,
  },
  getViewerInstance: {
    type: Function,
  },
});
const emits = defineEmits(["getSaveResult", "actionSwitchFile"]);
const signatureRef = ref(null);
// 是否折叠
const isFold = ref(false);
// 放大缩小值
const scaleValue = ref(1);
// 图片批注数组
const fileList = ref([]);
const fileList2 = ref([]);
// 打开模态框
const open = ref(false);
const fileName = ref(null);
// modal title
const modalTitle = ref<ModalTilte>();
const pdfIframe = ref(props.pdfIframe);
// 批注内容表单
const formState = reactive({
  fontValue: null,
  fontSize: 16,
  fontColor: "#000000",
});
// 字号
const fontOptions = [];
for (let i = 1; i < 51; i++) {
  fontOptions.push({
    label: i,
    value: i,
  });
}
function resetFormData() {
  formState.fontSize = 16;
  formState.fontValue = null;
  formState.fontColor = "#000000";
}
watch(
  () => props.pdfIframe,
  (newval) => {
    pdfIframe.value = newval;
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
// eventBus._on("rotatecw", webViewerRotateCw);
//     eventBus._on("rotateccw", webViewerRotateCcw);

// pdf顺时针旋转
function rotatecw() {
  const { PDFViewerApplication } = getViewerInstance();
  PDFViewerApplication.eventBus.dispatch("rotatecw");
}

// 选择模式
function selectMode() {
  actionChangeAnnotation(AnnotationEditorType.STAMP);
}
// 增加高亮
function heighLight() {
  actionChangeAnnotation(AnnotationEditorType.HIGHLIGHT);
}
// 设置批注模式
function actionChangeAnnotation(annotationType) {
  const { PDFViewerApplication } = getViewerInstance();
  console.log("-------------------test--------", PDFViewerApplication);
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
  modalTitle.value = ModalTilte.TEXT_ANNOTATION;
}

/**设置文本批注  */
function actionSetTextAnnotation2() {
  actionChangeAnnotation(AnnotationEditorType["FREETEXT"]);
  // openModal(true);
}
/**设置手写批注  */
function handleOk() {
  // 处理添加 文本批注
  if (modalTitle.value === ModalTilte.TEXT_ANNOTATION) {
    submitText();
  }
  // 处理添加 签名批注
  if (modalTitle.value === ModalTilte.SIGNATURE) {
    submitSign();
  }
}
function submitText() {
  if (formState.fontValue) {
    const res = textBecomeImg(
      formState.fontValue,
      formState.fontSize,
      formState.fontColor
    );
    actionSetImgAnnotation(res);
    resetFormData();
    openModal(false);
  } else {
    message.warn("请输入批注内容！");
  }
}
function submitSign() {
  if (signatureRef.value.signIndex) {
    const { signIndex } = signatureRef.value;
    actionSetImgAnnotation(signIndex);
    openModal(false);
  } else {
    message.warn("请输入选择签名图片！");
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
      // actionSetImgAnnotation(base64String);
      signatureRef.value.images.push(base64String);
    };
    // 以 Data URL 的形式读取文件（这会将文件转换为 Base64）
    reader.readAsDataURL(file);
  }
  // 返回true 则走到handleChange，上传文件；返回false则挂起
};

// 插入签名
const addSignature = () => {
  openModal(true);
  modalTitle.value = ModalTilte.SIGNATURE;
};

const beforeUploadPDF = (file, fileList1, isPass) => {
  if (file) {
    const reader = new FileReader();
    // 当文件读取完成后触发 onload 事件
    reader.onload = function (e) {
      const base64String = e.target.result;
      fileName.value = file.name;
      // 可以在这里处理 base64String，如保存、上传等操作
      // actionSetImgAnnotation(base64String);
      emits("actionSwitchFile", base64ConvertBlobUrl(base64String));
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
  console.log("----->二进制流-->", blob, filename);
  // const formData = new FormData();
  // formData.append('pdfFile', blob, filename);
  if (isDownload) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.download = fileName.value || filename;
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  emits("getSaveResult", { blob, filename });
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
  width: 320px;
  height: 100px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: calc(50% - 160px);
  bottom: 4%;
  opacity: 0.9;
  cursor: move;
}
.set_func {
  background-color: #56a8fe;
  width: 300px;
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
