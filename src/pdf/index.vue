<template>
    <div id="app-pdf" class="pdf-box">
      <div class="pdf-container">
        <!-- <iframe src="pdfjs/web/viewer.html?file=compressed.tracemonkey-pldi-09.pdf" width="100%" frameborder="0"></iframe> -->
      </div>

      <div v-drag class="set_func">
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
          <ZoomInOutlined class="anticon" @click="actionChangeScale('add')" />
          <template #title>放大</template>
        </a-tooltip>
        <a-tooltip>
          <ZoomOutOutlined
            class="anticon"
            @click="actionChangeScale('minus')"
          />
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
        <!-- <a-tooltip [nzTitle]="'关闭'">
      <a nz-popconfirm nzTitle="是否退出PDF?" (nzOnConfirm)="showAlert('exit')"> <i a-tooltip class="anticon anticon-close" ></i></a>
    </a-tooltip> -->
        <a-tooltip>
          <LoginOutlined class="anticon" @click="back()" />
          <template #title>关闭</template>
        </a-tooltip>
       
      </div>
      <a-modal v-model:open="open" title="文字批注" @ok="handleOk" centered>
        <a-input v-model:value="textValue" placeholder="请输入文字批注" />
      </a-modal>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
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
} from "@ant-design/icons-vue";
import UploadImage from "../web-components/upload/index.vue";
import { message } from "ant-design-vue";
import {AnnotationEditorType, AnnotationEditorParamsType} from './type'
const arr = ['1']
// 是否折叠
const isFold = ref(false);
// 放大缩小值
const scaleValue = ref(1);
// pdf实例
let pdfIframe = ref(null);
// 图片批注数组
const fileList = ref([]);
// 打开模态框
const open = ref(false);
// 文字批注内容
const textValue = ref(null);
// let url = 'http://192.168.0.115:9080/api/file/Image/annex/658bd7a06bdc07fc5eba4d82.pdf'
const pdfUrl = ref("/test.pdf");
onMounted(() => {
  createPdfViewer(pdfUrl.value);
});
/** 监听加载状态 */
function actionListenInit(app: any): void {
  app.initializedPromise.then(() => {
    console.log("实例加载完成");
  });

  app.eventBus.on("documentloaded", (e) => {
    console.log("pdf 内容加载完成", e);
  });

  app.eventBus.on("pagerendered", (e) => {
    console.log(`第 ${e.pageNumber} 渲染完成`, e);
  });
}

/** 创建 pdf viewer */
function createPdfViewer(pdfUrl) {
  // alert(pdfUrl)
  if (pdfIframe.value) {
    pdfIframe.value.parentNode.removeChild(pdfIframe.value);
  }

  const iframe = document.createElement("iframe");
  iframe.src = `/pdfjs/web/viewer.html?file=${pdfUrl}`;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.onload = () => {
    const { PDFViewerApplication } = getViewerInstance();
    console.log("iframe 加载完成", PDFViewerApplication);
    // actionListenInit(PDFViewerApplication)
    PDFViewerApplication.pdfSidebar.close();
  };

  const container = document.querySelector(".pdf-container");
  container.appendChild(iframe);
  pdfIframe.value = iframe;
}

/** 获取 pdf 实例 */
function getViewerInstance() {
  // debugger;
  if (pdfIframe.value.contentWindow.document.readyState !== "complete") {
    throw new Error("页面尚未加载完成");
  }
  const { PDFViewerApplication, PDFViewerApplicationOptions } =
    pdfIframe.value.contentWindow;
  return { PDFViewerApplication, PDFViewerApplicationOptions };
}

/** 展开 / 收起 pdf 侧边栏 */
function actionToggleSidebar(visible) {
  isFold.value = visible;
  const { PDFViewerApplication } = getViewerInstance();
  if (visible) return PDFViewerApplication.pdfSidebar.open();
  else return PDFViewerApplication.pdfSidebar.close();
}

/** 切换文件 */
function actionSwitchFile(src) {
  console.log("切换文件", encodeURIComponent(src));
  // pdfIframe.value.src = `./public/pdfjs/web/viewer.html?file=${encodeURIComponent(src)}`
  pdfIframe.value.src = `./public/pdfjs/web/viewer.html?file=http://192.168.0.115:9080/api/file/Image/annex/658bd7a06bdc07fc5eba4d82.pdf`;
}

/**跳转页码：注意！页码是从 1 开始的*/

function actionChangePage(pageNumber) {
  const { PDFViewerApplication } = getViewerInstance();
  PDFViewerApplication.eventBus.dispatch("pagenumberchanged", {
    value: pageNumber,
  });
}

/** 搜索指定内容 */
function actionSearch(query) {
  const { PDFViewerApplication } = getViewerInstance();
  PDFViewerApplication.eventBus.dispatch("find", {
    type: "",
    query,
    highlightAll: true,
  });
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

/** 修改国际化，要先把 pdfBugEnabled 值改为 true */
function actionChangeLocale(langCode) {
  localStorage.setItem("langCache", langCode);
  location.reload();
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
  open.value = true;
}
/**设置手写批注  */
function handleOk() {
  if (textValue.value) {
    const res = textBecomeImg(textValue.value, 20, "#000");
    actionSetImgAnnotation(res);
    textValue.value = null;
    open.value = false;
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
/**退出批注模式 */
function actionCancelAnnotation() {
  actionChangeAnnotation(AnnotationEditorType.NONE);
}

// 保存文件
async function saveFile() {
  const result = getViewerInstance();
  console.log("下载文件-----", result);
  let { blob, filename } = await result.PDFViewerApplication.save();
  console.log("----->二进制流-->", blob);
  // const formData = new FormData();
  // formData.append('pdfFile', blob, filename);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.download = filename;
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  console.log("blob------url", blob, filename, url);
}

// 关闭
function back() {}
// 文字转图片
function textBecomeImg(text, fontsize, fontcolor) {
  var canvas = document.createElement("canvas");
  //小于32字加1  小于60字加2  小于80字加4    小于100字加6
  let $buHeight = 0;
  if (fontsize <= 32) {
    $buHeight = 1;
  } else if (fontsize > 32 && fontsize <= 60) {
    $buHeight = 2;
  } else if (fontsize > 60 && fontsize <= 80) {
    $buHeight = 4;
  } else if (fontsize > 80 && fontsize <= 100) {
    $buHeight = 6;
  } else if (fontsize > 100) {
    $buHeight = 10;
  }
  //对于g j 等有时会有遮挡，这里增加一些高度
  canvas.height = fontsize + $buHeight;
  var context = canvas.getContext("2d");
  // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = fontcolor;
  context.font = fontsize + "px 黑体";
  //top（顶部对齐） hanging（悬挂） middle（中间对齐） bottom（底部对齐） alphabetic是默认值
  context.textBaseline = "middle";
  context.fillText(text, 0, fontsize / 2 + 2);

  //如果在这里直接设置宽度和高度会造成内容丢失 , 暂时未找到原因 , 可以用以下方案临时解决
  //canvas.width = context.measureText(text).width;

  canvas.width = context.measureText(text).width;
  context.fillStyle = fontcolor;
  context.font = fontsize + "px 黑体";
  context.textBaseline = "middle";
  context.fillText(text, 0, fontsize / 2 + 2);

  var dataUrl = canvas.toDataURL("image/png"); //注意这里背景透明的话，需要使用png
  return dataUrl;
}
// base64转file对象
function base64ConvertFile(urlData) {
  if (typeof urlData != "string") {
    return;
  }
  var arr = urlData.split(",");
  var type = arr[0].match(/:(.*?);/)[1];
  var fileExt = type.split("/")[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], "filename." + fileExt, {
    type: type,
  });
}
</script>

<style lang="less" scoped>
#app-pdf {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  color: black;
  display: flex;
  position: relative;
}

.pdf-container {
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: #eee;
}

.pdf-container iframe {
  border: none;
  width: 100%;
  height: 100%;
}

.set_func {
  position: fixed;
  right: 40%;
  bottom: 6%;
  background-color: #56a8fe;
  width: 250px;
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
