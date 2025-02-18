<!-- PDFViewer.vue -->
<template>
  <!-- <div ref="pdfContainer"></div> -->
  <iframe ref="pdfContainer" class="iframe" :src="base64"></iframe>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import * as pdfjsLib from 'pdfjs-dist/build/pdf'
import 'pdfjs-dist/web/pdf_viewer.css'

const props = defineProps(['base64'])
const pdfContainer = ref(null)
const base64 = ref(props.base64)
const loadPDF = async () => {
//   const pdfData = atob(props.base64.split(',')[1])
  base64.value = props.base64;
  console.log('data---',props.base64)
//   const loadingTask = pdfjsLib.getDocument({ data: pdfData })
  
//   try {
//     const pdf = await loadingTask.promise
//     for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
//       const page = await pdf.getPage(pageNum)
//       const viewport = page.getViewport({ scale: 1.5 })
      
//       const canvas = document.createElement('canvas')
//       const context = canvas.getContext('2d')
//       canvas.height = viewport.height
//       canvas.width = viewport.width
      
//       await page.render({
//         canvasContext: context,
//         viewport: viewport
//       }).promise
      
//       pdfContainer.value.appendChild(canvas)
//     }
//   } catch (err) {
//     console.error('PDF加载失败:', err)
//   }
}

watch(() => props.base64, () => {
  if (props.base64) {
    pdfContainer.value.src = props.base64
    // loadPDF()
  }
})
</script>

<style>
.pdf-viewer canvas {
  display: block;
  margin: 10px auto;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.iframe{
    width: 100%;
    height: calc(100% - 50px);
    margin-top: -40px;
}
</style>