<template>
    <div id="app-pdf" class="pdf-box">
      <div class="pdf-container">
        <!-- <iframe src="pdfjs/web/viewer.html?file=compressed.tracemonkey-pldi-09.pdf" width="100%" frameborder="0"></iframe> -->
      </div>
      <ToolBar ref="toolbarRef" pdfIframe="pdfIframe" @getSaveResult="getSaveResult" @actionSwitchFile="actionSwitchFile" :getViewerInstance="getViewerInstance"/>

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ToolBar from './ToolBar.vue';
defineOptions({
  name: "ths-pdf", //组件名
});
const props = defineProps({
  pdfUrl:{
    type:String,
    default:'http://192.168.0.115:9080/api/file/Image/annex/658bd7a06bdc07fc5eba4d82.pdf'
  }
})
const emits = defineEmits(['getSaveResult'])
// pdf实例
let pdfIframe = ref(null);
// let url = 'http://192.168.0.115:9080/api/file/Image/annex/658bd7a06bdc07fc5eba4d82.pdf'
// const pdfUrl = ref("/test.pdf");
const pdfUrl = ref(props.pdfUrl);
const toolbarRef = ref(null);
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

/** 切换文件 */
function actionSwitchFile(src) {
  console.log("切换文件", encodeURIComponent(src));
  // pdfIframe.value.src = `./public/pdfjs/web/viewer.html?file=${encodeURIComponent(src)}`
  createPdfViewer(src)
  // pdfIframe.value.src = src;
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

/** 修改国际化，要先把 pdfBugEnabled 值改为 true */
function actionChangeLocale(langCode) {
  localStorage.setItem("langCache", langCode);
  location.reload();
}

function getSaveResult(resultObj){
  if(resultObj){
    emits('getSaveResult',resultObj)
  }else{
    return toolbarRef.value.saveFile();
  }
  
}
defineExpose({ getSaveResult });
</script>

<style lang="less" scoped>

html,
body {
  margin: 0;
  height: 100%;
  width: 375px;
  touch-action: pan-x pan-y;
  /* 禁止双指缩放 */
  -webkit-user-drag: none;
  /* 禁止双指拖曳 */
}
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

</style>
