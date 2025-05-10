<template>
  <div>
    <Form ref="formRef" formType='searchForm' :formData="formData" :hiddenOpenText="hiddenOpenText" @getValue="getValue" @resetValue="resetValue"/>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref, watch } from 'vue'
import Form from '../form/index.vue' 
import { FormDataType } from '../form/type';
defineOptions({
  name: "ths-search-form", //组件名
});
const emit = defineEmits(['getValue','resetValue']);
const props = defineProps({
 formData: {
    type: Array<FormDataType>,
    default: [],
  },
  hiddenOpenText:{
    type:Boolean,
    default:false,
  }
})
const formRef = ref(null);
const formData = ref(props.formData);
const hiddenOpenText = ref(props.hiddenOpenText);
const getValue = (data,status)=>{
  emit('getValue',data,status);
}
const resetValue = ()=>{
  emit('resetValue');
}
const setFormValue = (key, value) => {
  formRef.value&&formRef.value.setFormValue(key,value);
};
const getFormValue = (key?) => {
  return formRef.value&&formRef.value.getFormValue(key);
};
defineExpose({setFormValue,getFormValue})
</script>

<style lang='less' scoped>

</style>