<template>
  <div class="box">
    <vueEsign ref="vueEsignRef" style="border: 2px solid #ccc;cursor: grabbing;" />
    <div class="btn-box">
      <a-button size="small" type="primary" danger @click="handleReset"
        >清空</a-button
      >
      <a-button
        style="margin: 0 10px"
        size="small"
        type="primary"
        @click="handleGenerate"
        >保存</a-button
      >
      <slot />
    </div>

    <div
      v-for="item in images"
      :key="item"
      class="show-img"
      :class="item === signIndex ? 'selected' : ''"
      @click="selectFn(item)"
    >
      <img :src="item" alt="" />
      <DownCircleOutlined
        class="icon select"
        :class="item === signIndex ? 'icon-selected' : ''"
      />
      <a-popconfirm
        placement="top"
        ok-text="确认"
        cancel-text="取消"
        @confirm="confirm(item)"
      >
        <template #title>
          <p>确定要删除当前签名吗？</p>
        </template>
        <DeleteOutlined class="icon delete" />
      </a-popconfirm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { message } from "ant-design-vue";
import { reactive, ref } from "vue";
import vueEsign from "vue-esign";
import { DownCircleOutlined, DeleteOutlined } from "@ant-design/icons-vue";
import {Button,Popconfirm} from 'ant-design-vue'
const vueEsignRef = ref(null);
const images = ref([]);
// 签名操作类型
const optionType = ref<number>(1);
// 选择签名索引
const signIndex = ref(null);
const radioStyle = reactive({
  display: "flex",
  height: "30px",
  lineHeight: "30px",
});
// 清除画布
const handleReset = () => {
  console.log("vueEsignRef.value=======", vueEsignRef.value);
  vueEsignRef.value.reset();
};
// 保存图片
const handleGenerate = () => {
  vueEsignRef.value
    .generate()
    .then((res) => {
      images.value.push(res);
    })
    .catch((err) => {
      //   alert(err); // 画布没有签字时会执行这里 'Not Signned'
      message.error("尚未完成签名！");
    });
};
// 删除签名
const confirm = (data) => {
  images.value = images.value.filter((item, idx) => data != item);
  if(images.value.length>0){
    signIndex.value = 0;
  }
};
// 选择签名
const selectFn = (data) => {
  signIndex.value = data;
};
defineExpose({images,signIndex})
</script>

<style lang="less" scoped>
.box {
  // background: #ccc;
  // padding: 10px;
  .btn-box {
    margin: 10px 0;
  }
  .show-img {
    position: relative;
    width: 100%;
    height: 100px;
    border-radius: 10px;
    // padding: 4px;
    margin: 14px 0;
    border: 1px solid #ccc;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      border: 2px solid #1677ff;
    }
    img {
      width: 60%;
      height: 90px;
    //   border:1px dashed #ccc;
    }
    .icon {
      position: absolute;
      font-size: 20px;
    }
    .select {
      left: 10px;
      top: 10px;
      color: #ccc;
    }
    .delete {
      right: 10px;
      top: 10px;
      color: red;
    }
  }
  .selected {
    border: 2px solid #1677ff;
  }
  .icon-selected {
    color: green !important;
  }
}
</style>
