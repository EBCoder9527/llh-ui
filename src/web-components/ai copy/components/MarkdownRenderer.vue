<template>
  <div v-html="renderedMarkdown"></div>
</template>

<script setup>
import {computed,ref} from 'vue'
import {marked} from 'marked';
const props = defineProps({
  textStr:{
    type:String,
  }
})

const renderedMarkdown = computed(() => {
      return marked(props.textStr);
    });
</script>
