<template>
  <div>
    <Form formType='searchForm' :formData="formData" />
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref, watch } from 'vue'
import Form from '../form/index.vue' 
import { FormDataType } from '../form/type';
defineOptions({
  name: "ths-search-form", //组件名
});
const props = defineProps({
 formData: {
    type: Array<FormDataType>,
    default: [],
  },
})
const formData = ref(props.formData)
</script>

<style lang='less' scoped>

</style>