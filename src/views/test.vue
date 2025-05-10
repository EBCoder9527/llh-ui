<template>
  <div @click="actionSearch">test page</div>
  <!-- <ths-pdf style="height: 500px;" pdfUrl="/test.pdf" showTool /> -->
  <PDF ref="PDFRef" pdfUrl="/test3.pdf" :showTool="true" />
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
