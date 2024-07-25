<template>
    <div class="view-more" @click="showMore">
        <p v-if="!isViewMore">查看全部 <van-icon name="arrow-down" /></p>
        <p v-else>收起 <van-icon name="arrow-up" /></p>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const isViewMore = ref(false)
const emits = defineEmits(['showMore'])
const showMore = () => {
    isViewMore.value = !isViewMore.value
    emits('showMore',isViewMore.value)
}
</script>

<style lang='less' scoped>
.view-more{
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>