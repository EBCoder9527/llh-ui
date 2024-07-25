<template>
  <van-nav-bar left-arrow>
    <template #left>
      <div class="title" @click="jump">
        <van-icon style="color: #434956" name="arrow-left" /><span>{{
          title
        }}</span>
      </div>
    </template>
  </van-nav-bar>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "标题",
  },
});
const emit = defineEmits(["clickCallback"]);
const jump = () => {
  emit("clickCallback");
};
</script>

<style lang="less" scoped>
.title {
  font-size: 18px;
  color: #434956;
  font-weight: 600;
  span {
    margin-left: 4px;
  }
}
.van-nav-bar {
  background-color: transparent !important;
}
.van-hairline--bottom:after {
  border: none;
}
</style>
