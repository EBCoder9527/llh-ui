<template>
  <van-search
    v-model="searchValue"
    show-action
    :placeholder="placeholder"
    background="transparent"
    style="padding-left: 0; padding-right: 0"
  >
    <template #action>
      <div class="icon-box">
        <van-icon class="icon" name="search" @click="search" />
        <van-icon :class="refreshRef" class="icon" name="replay" @click="refresh"
      /></div>
    </template>
  </van-search>
</template>

<script setup lang="ts">
  import { showNotify } from 'vant';
  import { ref, watch } from 'vue';
  const emits = defineEmits(['search', 'refresh']);
  const props = defineProps({
    placeholder: {
      type: String,
      default: '请输入搜索关键词',
    },
    searchValue: {
      type: String,
      default: null
    }
  });
  const searchValue = ref();
  const refreshRef = ref();
  const searchRef = ref();
  
  watch(
    () => props.searchValue,
    () => {
      searchValue.value = props.searchValue
    },
  );

  // 刷新数据
  const refresh = () => {
    // 动画效果
    refreshRef.value = 'refresh-animation';
    const timer = setTimeout(() => {
      refreshRef.value = '';
      clearTimeout(timer);
    }, 1000);
    // 通知父组件
    emits('refresh');
    showNotify({ type: 'success', message: '刷新成功', duration: 1000 });
  };
  const search = () => {
    // 通知父组件
    emits('search', searchValue.value);
  };
</script>

<style lang="less" scoped>
  .icon-box {
    display: flex;
    align-items: center;
    background: transparent;
    .icon {
      font-size: 20px;
      margin: 0 4px;
      font-weight: 800;
      color: #0091ff;
    }
  }
  ::v-deep .van-search__content {
    border-radius: 12px;
    margin-left: 4px;
  }
  ::v-deep .van-search__action {
    background: transparent;
  }
  .refresh-animation {
    animation: rotate 1s linear;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>
