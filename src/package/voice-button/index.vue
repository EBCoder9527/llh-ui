<template>
  <div class="container">
    <!-- <h3>录音时长：{{ recorder && recorder.duration.toFixed(0) }}'s</h3> -->
    <div ref="btnRef" class="label" :class="text == '录音中'?'gif':''" id="label">
      <img src="../assets/mkf.png" alt="">{{ text }}
    </div>
  </div>
</template>
<script>
export default {
    name: 'VoiceButton'
}
</script>

<script setup>

import { onMounted, ref } from "vue";
import Recorder from "js-audio-recorder";
let timer = null;
let startTime = "";
let endTime = "";

const btnRef = ref(null);
const text = ref("长按我录音");
const playTime = ref(0)
const recorder = ref(new Recorder());
const emit  = defineEmits(['getFormDataFn']) // eslint-disable-line no-undef
onMounted(() => {
  const label = document.querySelector(".label");
  label.addEventListener("touchstart", function () {
    console.log("开始录音。。。。");
    text.value = "录音中";
    startTime = +new Date();
    handleStart()
    // timer = setTimeout(function () {
    //     handleStart()
    // }, 700);
  });
  label.addEventListener("touchend", function () {
    endTime = +new Date();
    clearInterval(timer);
    timer = null;
    if (endTime - startTime < 700) {
      // 处理点击事件
      label.classList.add("selected");
    }
    recorder.value.stop(); // 停止录音
    console.log("结束录音。。。。");
    text.value = "长按我录音";
    uploadRecord();
  });
});

const handleStart = () => {
  Recorder?.getPermission().then(
    () => {
      console.log("开始录音");
      recorder.value.start(); // 开始录音
      // 播放时长
      timer = setInterval(() => {
        try {
          playTime.value = recorder.value.getPlayTime();
          console.log(playTime.value)
        } catch (error) {
          timer = null
        }
      }, 100)
    },
    (error) => {
      alert("请先允许该网页使用麦克风");
      clearInterval(timer);
      recorder.value.destroy();
      timer = null;
      text.value = "长按我录音";
      console.log(`${error.name} : ${error.message}`);
    }
  );
};
const uploadRecord = () => {
  console.log("上传录音"); // 上传录音

  const formData = new FormData();
  const blob = recorder.value.getWAVBlob(); // 获取wav格式音频数据
  // 此处获取到blob对象后需要设置fileName满足当前项目上传需求，其它项目可直接传把blob作为file塞入formData
  const newbolb = new Blob([blob], { type: "audio/wav" });
  const fileOfBlob = new File([newbolb], new Date().getTime() + ".wav");
  formData.append("file", fileOfBlob);
  emit('getFormDataFn',formData);
  console.log("录音数据", formData.get('file'));
};
</script>

<style scoped>
.container {
  position: relative;
  display: inline-block;
  margin-top: 50px;
  
}
.gif{
    background-image: url('../assets/voice.gif');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    color: aqua !important;
    background-color: rgba(255, 255, 255, 1)!important;
}
.label {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 105px;
  height: 32px;
  line-height: 32px;
  background-color: #4dbb7b;
  color: #fff;
  text-align: center;
  border-radius: 3px;
  font-size: 14px;
}
.label>img{
    width: 20px;

}
.label.selected {
  background-color: #4180cc;
  color: white;
}

.delete_btn {
  display: none;
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
  color: white;
  padding: 10px 16px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 6px;
  line-height: 1;
  white-space: nowrap;
  font-size: 12px;
}

.delete_btn::after {
  content: "";
  width: 0;
  height: 0;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
