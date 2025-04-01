<template>
  <div @click="actionSearch">test page</div>
  <PDF ref="PDFRef" pdfUrl="/test3.pdf" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import PDF from '@/pdf/index.vue'
const PDFRef = ref(null)
const actionSearch = () =>{
  console.log(PDFRef.value)
  PDFRef.value.actionSearch('费用事项承担')
}
</script>

<style lang="less" scoped></style>
