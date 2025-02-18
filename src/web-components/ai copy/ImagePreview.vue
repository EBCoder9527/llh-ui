<template>
  <div class="image-zoom-container">
    <div 
      class="image-wrapper"
      :style="wrapperStyle"
      @wheel="handleWheel"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <img
        ref="image"
        :src="src"
        :style="imageStyle"
        alt="缩放图片"
        @load="handleImageLoad"
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  maxScale: {
    type: Number,
    default: 3
  },
  minScale: {
    type: Number,
    default: 0.5
  },
  scaleStep: {
    type: Number,
    default: 0.1
  }
})

const scale = ref(1)
const isHovered = ref(false)
const image = ref(null)
const naturalSize = ref({ width: 0, height: 0 })

// 图片样式
const imageStyle = computed(() => ({
  transform: `scale(${scale.value})`,
  transformOrigin: 'center center',
  transition: 'transform 0.1s ease'
}))

// 容器样式
const wrapperStyle = computed(() => ({
  width: `100%`,
  height: `100%`,
  overflow: 'hidden',
  cursor: isHovered.value ? 'zoom-in' : 'auto'
}))

// 处理图片加载
const handleImageLoad = () => {
  naturalSize.value = {
    width: image.value.naturalWidth,
    height: image.value.naturalHeight
  }
}

// 处理鼠标进入
const handleMouseEnter = () => {
  isHovered.value = true
}

// 处理鼠标离开
const handleMouseLeave = () => {
  isHovered.value = false
}

// 处理滚轮事件
const handleWheel = (e) => {
  if (!isHovered.value) return

  e.preventDefault()

  const delta = e.deltaY < 0 ? 1 : -1
  const newScale = scale.value + delta * props.scaleStep

  scale.value = Math.min(
    Math.max(newScale, props.minScale),
    props.maxScale
  )
}
</script>

<style scoped>
.image-zoom-container {
  width: 100%;
  height: 100%;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.image-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
}
</style>