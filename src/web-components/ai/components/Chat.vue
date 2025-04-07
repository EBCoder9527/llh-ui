<template>
  <div class="chat-container">
    <!-- 消息列表 -->
    <div ref="msgListRef" class="message-list">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message-item', message.role]"
      >
        <div class="avatar">
          <img
            v-if="message.role === 'user'"
            src="../../../assets/ai/user.png"
            alt="用户头像" 
          />
          <img v-else src="../../../assets/ai/ai.png" alt="AI头像" />
        </div>

        <div
          class="content"
          :class="message.type === 'file' ? 'file-style' : ''"
        >
          <div v-if="message.type === 'text'">
            <!-- {{ message.content }} -->
            <!-- <p v-for="(line, index) in message.content.split('\n')" :key="index">{{ line }}</p> -->
            <MarkdownRenderer :textStr="message.content" />
            <!-- <p  v-html="message.content"></p> -->
            <!-- <MarkdownRenderer :content="message.content" /> -->
          </div>

          <div v-else-if="message.type === 'loading'">
            <LoadingIndicator />
          </div>

          <div v-else-if="message.type === 'error'">
            <ErrorDisplay :message="message.content" />
          </div>
          <div v-else-if="message.type === 'file'">
            <div class="file-box" @click="previewFile(message.content)">
              <img
                style="width: 20px; height: 20px"
                src="../../../assets/ai/file.png"
                alt=""
              />
              <p>
                <span class="filename">{{ message.content.fileName }}</span>
                <span>
                  {{ message.content.fileType }}&nbsp;&nbsp;
                  {{ message.content.fileSize }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 输入区域 -->
    <div class="input-area">
      <textarea
        v-model="inputText"
        @keydown.enter.exact.prevent="sendMessage"
        placeholder="输入你的消息..."
      ></textarea>

      <button
        :disabled="isSending"
        @click="triggerUpload"
        style="background: transparent"
      >
        <img
          style="width: 30px; height: 30px"
          src="../../../assets/ai/file.png"
          alt=""
        />
        <input
          ref="uploadRef"
          type="file"
          @change="handleFileUpload"
          accept=".pdf,.png,.jpg,.jpeg"
          class="upload"
        />
      </button>

      <button
        :disabled="isSending"
        @click="sendMessage"
        style="background: transparent"
      >
        <img
          v-if="isSending || inputText.length === 0"
          style="width: 30px; height: 30px"
          src="../../../assets/ai/send-2.png"
          alt=""
        />
        <img
          v-else
          style="width: 30px; height: 30px"
          src="../../../assets/ai/send.png"
          alt=""
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
// import MarkdownRenderer from './MarkdownRenderer.vue'
import LoadingIndicator from "./LoadingIndicator.vue";
import ErrorDisplay from "./ErrorDisplay.vue";
import MarkdownRenderer from "./MarkdownRenderer.vue";
// import { sendMessageApi, uploadfileApi, ChatWithFileApi } from '@/api/ai/chat';
// import { convertPdfBase64ToImageBase64 } from '@/utils/convertPdfBase64ToImageBase64';
const emits = defineEmits(["showDialogFn", "setPreviewData", "setFileType"]);
const previewData = ref(null);
const msgListRef = ref(null);
const fileType = ref("");
const fileSize = ref("");
const fileName = ref("");
const fileId = ref(null);
const file = ref("");
const currentFile = ref(null);
const uploadRef = ref(null);
const isUpload = ref(false);
const defaultMsg = ref(null);
// 消息数据
const messages = ref([
  {
    role: "assistant",
    type: "text",
    content: "你好！我是AI助手，有什么可以帮你的吗？",
  },
]);

// 输入文本
const inputText = ref("");
const isSending = ref(false);

// 发送消息
const sendMessage = async () => {
  if ((!inputText.value.trim() && !defaultMsg.value) || isSending.value) return;

  const userMessage = {
    role: "user",
    type: "text",
    content: inputText.value,
    base64: previewData.value,
  };

  defaultMsg.value || messages.value.push(userMessage);
  messages.value.push({
    role: "assistant",
    type: "loading",
    content: "",
  });
  // 消息滚动到最底部
  msgListRef.value.lastElementChild.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
  isSending.value = true;

  try {
    let res2;
    // const res = await sendMessageApi(params);
    -a; // 手动抛错
    return;
    console.log("isUpload---", isUpload.value);
    if (isUpload.value) {
      // if(!fileId.value){
      //    const formdata = new FormData();
      // formdata.append('name', currentFile.value.name);
      // formdata.append('mutipartFile', currentFile.value);
      // const res = await uploadfileApi(formdata);
      //  if (res.data) {
      //   fileId.value = res.data
      //  }
      // }
      console.log("fileId---", fileId.value);
      const parmas = {
        question: defaultMsg.value || inputText.value,
        fileId: fileId.value,
      };
      res2 = await ChatWithFileApi(parmas);
      defaultMsg.value = "";
    } else {
      const parmas = {
        question: inputText.value,
      };
      res2 = await sendMessageApi(parmas);
    }
    if (res2.data) {
      // 移除loading状态
      messages.value.pop();

      // 添加AI回复
      messages.value.push({
        role: "assistant",
        type: "text",
        content: res2.data[0],
      });
      // 消息滚动到最底部
      msgListRef.value.lastElementChild.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  } catch (error) {
    // 移除loading状态
    messages.value.pop();

    // 添加错误提示
    messages.value.push({
      role: "assistant",
      type: "error",
      content: "请求失败，请稍后重试",
    });
  } finally {
    inputText.value = "";
    isSending.value = false;
    defaultMsg.value = "";
  }

  // convertPdfBase64ToImageBase64(pdfBase64).then(imageBase64 => {
  //   console.log('图片的 Base64 编码：', imageBase64);
  // });
};
const triggerUpload = () => {
  uploadRef.value.click();
  isUpload.value = true;
};
const handleFileUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async (e) => {
    const result = e.target.result;
    previewData.value = result;
    fileType.value = file.type.includes("pdf") ? "pdf" : "image";
    fileName.value = file.name;
    fileSize.value = formatFileSize(file.size);
    currentFile.value = file;
    emits("showDialogFn", true, file.name);
    emits("setFileType", fileType.value);
    emits("setPreviewData", previewData.value);
    messages.value.push({
      role: "user",
      type: "file",
      content: {
        fileName: file.name,
        fileType: file.type.includes("pdf") ? "pdf" : "image",
        fileSize: formatFileSize(file.size),
        base64Str: previewData.value,
      },
    });
    try {
      const formdata = new FormData();
      formdata.append("name", currentFile.value.name);
      formdata.append("mutipartFile", currentFile.value);
      const res = await uploadfileApi(formdata);
      if (res.data) {
        fileId.value = res.data;
        defaultMsg.value = "提取审核结果的核心信息";
        sendMessage();
      }
    } catch (error) {
      console.log(error);
    }
  };
  reader.readAsDataURL(file);
};
const previewFile = (data) => {
  emits("showDialogFn", true, data.fileName);
  emits("setFileType", data.fileType);
  emits("setPreviewData", data.base64Str);
};
// 文件大小格式化函数
const formatFileSize = (bytes) => {
  if (bytes < 1024) {
    return bytes + " B";
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + " KB";
  } else {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  }
};
</script>

<style lang="less" scoped>
.chat-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  max-height: 700px;
  // max-width: 800px;
  margin: 0 auto;
  // padding: 20px;
}

.message-list {
  flex: 1;
  overflow-y: auto;
  padding: 20px 0;
}

.message-item {
  display: flex;
  margin-bottom: 20px;
}

.message-item.user {
  flex-direction: row-reverse;
}

.avatar {
  width: 40px;
  height: 40px;
  margin: 0 10px;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.file-style {
  background-color: rgb(243, 244, 246) !important;
  padding: 6px 14px !important;
  .file-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
    p {
      display: flex;
      flex-direction: column;
      margin-bottom: 0;
      span {
        color: #bbb;
        font-size: 12px;
      }
      .filename {
        font-size: 14px;
        color: #000;
      }
    }
  }
}
.content {
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 8px;
  background: #f0f0f0;
}

.message-item.user .content {
  background: #007bff;
  color: white;
}

.input-area {
  display: flex;
  align-items: center;
  height: 100px;
  gap: 10px;
  padding: 10px;
  margin-top: 20px;
  border-top: 1px solid #ddd;

  button {
    position: relative;
    img {
      z-index: 9;
    }
    .upload {
      width: 30px;
      height: 30px;
      position: absolute;
      visibility: hidden;
      left: 0;
      z-index: 999;
    }
  }
}

textarea {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: none;
  height: 80px;
}

button {
  padding: 0 4px;
  border: none;
  border-radius: 8px;
  /* background: #007bff; */
  color: white;
  cursor: pointer;
}

button:disabled {
  /* background: #ccc; */
  cursor: not-allowed;
}
</style>
