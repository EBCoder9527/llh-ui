<template>
  <a-spin :spinning="spinning" tip="数据加载中...">
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="{ showTotal: defaultPagination.showTotal, ...pagination }"
      @change="pageChange"
      :rowSelection="rowSelection"
      :loading="loading"
    >
      <template #bodyCell="{ column, record }">
        <!-- <template> -->
        <slot :name="column.dataIndex" :record="record"></slot>
        <!-- </template> -->
      </template>
    </a-table>
  </a-spin>
</template>
<script lang="ts" setup>
import { reactive, ref, watch } from "vue";

defineOptions({
  name: "ths-table", //组件名
});

const props = defineProps({
  columns: {
    type: Array,
    default: [],
  },
  data: {
    type: Array,
    default: [],
  },
  pagination: {
    type: Object,
    default: {
      pageSize: 10,
      current: 1,
      total: 10,
      showTotal: (total, range) => {
        return "一共 " + total + " 条数据";
      },
    },
  },
  spinning: {
    type: Boolean,
    default: false,
  },
  rowSelection: {
    type: Object,
    default: {},
  },
  loading:{
    type:Object||Boolean,
    default:false
  }
});
const emits = defineEmits(["pageChange"]);
const data = ref(props.data);
const defaultPagination = {
  pageSize: 10,
  current: 1,
  total: 10,
  showTotal: (total, range) => {
    return "一共 " + total + " 条数据";
  },
};
const pagination = ref(props.pagination);
const spinning = ref(props.spinning);
const loading = ref(props.loading)
const pageChange = ({ current, pageSize }) => {
  pagination.value.current = current;
  pagination.value.pageSize = pageSize;
  // console.log('page-------',pagination)
  emits("pageChange", pagination.value);
};
const selectedRowKeys = ["0", "1"];
const rowSelection = ref(props.rowSelection);
watch(props.data, (newval) => {
  data.value = newval;
});
watch(props.pagination, (newval) => {
  pagination.value = newval;
});
watch(
  () => props.spinning,
  (newval) => {
    spinning.value = newval;
  },
  { deep: true, immediate: true }
);
watch(
  () => props.loading,
  (newval) => {
    loading.value = newval;
  },
  { deep: true, immediate: true }
);
</script>
