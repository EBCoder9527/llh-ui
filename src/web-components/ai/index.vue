<template>
  <!-- <button @click="showDialog = true">打开上传对话框</button> -->

  <teleport to="body">
    <div class="dialog-container">
      <div class="dialog-wrapper">
        <div class="left-pane">
          <Chat @showDialogFn="showDialogFn" @setPreviewData="setPreviewData" @setFileType="setFileType"/>
        </div>

        <div class="right-pane" :style="{flex:showDialog?'1':'0',display:showDialog?'block':'none'}">
            <h3 style="text-align:center">{{fileName}}</h3>
          <div v-if="previewData" class="preview-container">
            <!-- 图片预览 -->
            <ImageScroll class="image-preview" v-if="fileType === 'image'" :src="previewData" />
            <PDFViewer 
              v-else-if="fileType === 'pdf'"
              :base64="previewData"
              class="pdf-viewer"
            />
          </div>
          
          <div v-else class="empty-prompt">
            请选择要预览的文件
          </div>
        </div>

        <button v-if="previewData&&showDialog" class="close-btn" @click="showDialog = false">×</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref } from 'vue'
import PDFViewer from './PDFViewer.vue'
import Chat from './components/Chat.vue'
import ImageScroll from './ImagePreview.vue';
const showDialog = ref(false)
const previewData = ref(null)
const fileType = ref('')
const fileName = ref('')

const handleFileUpload = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    const result = e.target.result
    previewData.value = result
    fileType.value = file.type.includes('pdf') ? 'pdf' : 'image'
  }
  reader.readAsDataURL(file)
}
const showDialogFn = (type,name)=>{
    fileName.value = name;
    showDialog.value = type;
}
const setPreviewData = data=>{
    previewData.value = data;
}
const setFileType = type=>{
    fileType.value = type;
}
</script>

<style scoped>
.dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-wrapper {
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  border-radius: 8px;
  position: relative;
}

.left-pane, .right-pane {
  flex: 1;
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
}

.left-pane {
  border-right: 1px solid #ddd;
}

.upload-area {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
}

.preview-container {
  height: 100%;
  display: flex;
  align-items: center;
  overflow: auto;
  cursor: grab;
}

.image-preview {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
}

.empty-prompt {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.close-btn {
  position: absolute;
  right: -30px;
  top: -20px;
  font-size: 34px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>