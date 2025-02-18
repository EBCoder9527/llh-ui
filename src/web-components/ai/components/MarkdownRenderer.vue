<template>
  <div class="markdown-content" v-html="renderedContent">
  </div>
  </template>

<script setup>
import { computed } from 'vue'
import marked from 'marked'
import DOMPurify from 'dompurify'

const props = defineProps({
  content: String
})

const renderedContent = computed(() => {
  return DOMPurify.sanitize(marked(props.content))
})
</script>


<style scoped>
.markdown-content {
  /* 添加Markdown样式 */
}
</style>