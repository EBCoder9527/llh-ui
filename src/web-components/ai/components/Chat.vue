<template>
  <div class="chat-container">
    <!-- 消息列表 -->
    <div class="message-list">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message-item', message.role]"
      >
        <div class="avatar">
          <img
            v-if="message.role === 'user'"
            src="@/assets/user.png"
            alt="用户头像"
          />
          <img v-else src="@/assets/ai.png" alt="AI头像" />
        </div>

        <div class="content" :class="message.type === 'file'?'file-style':''">
          <div v-if="message.type === 'text'">
            {{ message.content }}
            <!-- <MarkdownRenderer :content="message.content" /> -->
          </div>

          <div v-else-if="message.type === 'loading'">
            <LoadingIndicator />
          </div>

          <div v-else-if="message.type === 'error'">
            <ErrorDisplay :message="message.content" />
          </div>
          <div v-else-if="message.type === 'file'">
            <div class="file-box">
                <img style="width: 20px; height: 20px" src="@/assets/file.png" alt="" />
               <p><span class="filename">{{message.content.fileName}}</span>
               <span>{{message.content.fileType}}&nbsp;&nbsp; {{message.content.fileSize}}</span>
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
        <img style="width: 30px; height: 30px" src="@/assets/file.png" alt="" />
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
          src="@/assets/send-2.png"
          alt=""
        />
        <img
          v-else
          style="width: 30px; height: 30px"
          src="@/assets/send.png"
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
const emits = defineEmits(['showDialogFn','setPreviewData','setFileType'])
const previewData = ref(null);
const fileType = ref("");
const fileSize = ref("");
const fileName = ref("");
const file = ref("");
const uploadRef = ref(null);
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
  if (!inputText.value.trim() || isSending.value) return;

  const userMessage = {
    role: "user",
    type: "text",
    content: inputText.value,
    base64:previewData.value
  };

  messages.value.push(userMessage);
  messages.value.push({
    role: "assistant",
    type: "loading",
    content: "",
  });

  isSending.value = true;
  inputText.value = "";

  try {
    console.log('content:',userMessage)
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: messages.value
          .filter((m) => m.type === "text")
          .map((m) => ({
            role: m.role,
            content: m.content,
          })),
      }),
    });

    const data = await response.json();

    // 移除loading状态
    messages.value.pop();

    // 添加AI回复
    messages.value.push({
      role: "assistant",
      type: "text",
      content: data.message,
    });
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
    isSending.value = false;
  }
};
const triggerUpload = () => {
  uploadRef.value.click();
};
const handleFileUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const result = e.target.result;
    previewData.value = result;
    fileType.value = file.type.includes("pdf") ? "pdf" : "image";
    fileName.value = file.name;
    fileSize.value = formatFileSize(file.size)
    emits('showDialogFn',true,file.name);
    emits('setFileType',fileType.value);
    emits('setPreviewData',previewData.value);
    messages.value.push({
        role:'user',
        type:'file',
        content:{
            fileName:file.name,
            fileType:file.type.includes("pdf") ? "pdf" : "image",
            fileSize:formatFileSize(file.size)
        }
    })
  };
  reader.readAsDataURL(file);
};
// 文件大小格式化函数
const formatFileSize = (bytes) => {
  if (bytes < 1024) {
    return bytes + ' B'
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + ' KB'
  } else {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
  }
}
</script>

<style lang="less" scoped>
.chat-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
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
.file-style{
    background-color: rgb(243, 244, 246)!important;
    padding: 6px 14px!important;
    .file-box{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        img{
            margin-right: 10px;
        }
        p{
            display: flex;
            flex-direction: column;
            margin-bottom: 0;
            span{
                color: #BBB;
                font-size: 12px;
            }
            .filename{
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
  height: 60px;
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
