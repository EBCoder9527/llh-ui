<template>
  <div
    class="review-system-outer-box"
    style="background-color: #fff; height: 100%; overflow: hidden"
  >
    <ThsSearchForm ref="formRef" :formData="formData"/>
    <button @click="getFormData">get data</button>
    <!-- <ths-table
      :columns="myProjectColumns"
      :data="data"
      :spinning="spinning"
      :pagination="pagination"
      :rowSelection="rowSelection"
      @pageChange="pageChange"
      :scroll="{x:'120%'}"
    >
      <template v-slot:name="{ record }">
        
      </template>
      <template v-slot:address="{ record }">
        <a>{{ record.address }}</a>
      </template>
    </ths-table> -->
    <!-- <ths-pdf pdfUrl="/test2.pdf" @getSaveResult="handleSaveResult" showTool  /> -->
    <!-- <ThsPdf1 pdfUrl="/test2.pdf" @getSaveResult="handleSaveResult" /> -->
 </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { myProjectColumns } from './columns';
import ThsTable from './web-components/table/index.vue';
import ThsPdf1 from './pdf/index.vue'
// import ThsSearchForm from './w';
import ThsSearchForm from './web-components/search-form/index.vue';
import ThsForm from './web-components/form/index.vue';
const formRef = ref(null);
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    align: "center",
    width: 120,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 180,
  },
  {
    title: "操作",
    dataIndex: "address",
    key: "address 4",
    ellipsis: true,
  },
];
const data = ref([]);

const spinning = ref(false);
const pagination = ref({
  page: 1,
  total: 100,
  pageSize: 10,
  current: 1,
});

const pageChange = ({ current, pageSize }) => {
  console.log("触发页码变化");
  pagination.value.current = current;
  pagination.value.pageSize = pageSize;
  getData();
  // 整合查询数据 调接口更新表格数据
};
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log("selectedRows", selectedRows);
  },
};
const getData = () => {
  spinning.value = true;
  setTimeout(() => {
    for (let i = 0; i < pagination.value.pageSize; i++) {
      data.value.push({
        key: i,
        name: "John Brown" + i,
        address: "aaaa" + i,
      });
    }
    spinning.value = false;
  }, 3000);
};
getData();

// 表单配置
const formData1 = reactive([
  // {
  //   type: "input", // 表单类型 input
  //   value: null,
  //   label: "送审工程/项目名称",
  //   placeholder: "请输入名称",
  //   filedName: "name",
  //   span: 6,
  // },
  // {
  //   type: "select", // 表单类型 select
  //   value: undefined,
  //   span: 6,
  //   label: "评审类别",
  //   placeholder: "请选择",
  //   filedName: "type",
  //   selectValue: [
  //     { label: "一", value: "1" },
  //     { label: "二", value: "2" },
  //     { label: "三", value: "3" },
  //   ],
  // },
  // {
  //   type: "select", // 表单类型 select
  //   value: undefined,
  //   span: 6,
  //   placeholder: "请选择",
  //   label: "审核状态",
  //   filedName: "status",
  //   selectValue: [
  //     { label: "一", value: "1" },
  //     { label: "二", value: "2" },
  //     { label: "三", value: "3" },
  //   ],
  // },
  
]);
const formData = ref([
  {
    type: "input", // 表单类型 input
    value: null,
    label: "送审工程/项目名称",
    placeholder: "请输入名称",
    filedName: "name",
    span: 6,
  },
  {
    type: "select", // 表单类型 select
    value: undefined,
    span: 6,
    label: "评审类别",
    placeholder: "请选择",
    filedName: "type",
    selectValue: [
      { label: "一", value: "1" },
      { label: "二", value: "2" },
      { label: "三", value: "3" },
    ],
    change:(e)=>{
      console.log(e);
    }
  },
  {
    type: "select", // 表单类型 select
    value: undefined,
    span: 6,
    placeholder: "请选择",
    label: "审核状态",
    filedName: "status",
    selectValue: [
      { label: "一", value: "1" },
      { label: "二", value: "2" },
      { label: "三", value: "3" },
    ],
  },
]);

const getFormData = async () => {
  console.log('formref---',formRef.value.getFormValue())
  formRef.value.setFormValue('name','ceshi');
  formRef.value.setFormValue('type2','3');
  console.log('formref---',formRef.value.getFormValue('type'))
  console.log('formref---',formRef.value.getFormValue())
};
// 重置表单
const resetFormData = () => {
  alert('reset')
};
</script>
<style lang="less" scoped>
:deep(.ant-picker) {
  width: 100%;
}
</style>
