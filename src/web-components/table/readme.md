# ths-table 简介
- 通过配置集成可选择表格、普通表格
- 简化插槽使用
- 集成数据加载中效果，增强用户体验
# 配置参数
## columns
- 表头配置，详见：https://www.antdv.com/components/table-cn#column
- type:Array
## data
- 表格数据
- type:Array
## pagination
- 分页配置，详见：https://www.antdv.com/components/pagination-cn#api
## spinning
- 加载动效，详见：https://www.antdv.com/components/spin-cn#api
## loading
- type：Boolean||Object
- 加载动效，详见：https://www.antdv.com/components/spin-cn#api
## rowSelection
- 可选择表格配置，详见：https://www.antdv.com/components/table-cn#rowselection
## scroll
- 表格滚动参数，详见：https://www.antdv.com/components/table-cn#scroll
# 事件回调
## pageChange
- 页码变化触发父组件的相应事件，比如调接口更新对应页码数据
# 示例代码
```vue
<template>
<Table :columns="columns" :data="data" :spinning="spinning" :pagination="pagination" :rowSelection="rowSelection" @pageChange="pageChange" >
      <template v-slot:name="{record}">
        {{record.name}}
      </template>
       <template v-slot:address="{record}">
        <a >{{record.address}}</a>
      </template>
</Table>
</template>
<script>
import { ref } from "vue";
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    align:'center',
    width:120
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 180,
  },
  {
    title: '操作',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];
const data = ref([]);

const spinning = ref(false)
const pagination = ref({
     page:1,
    total:100,
    pageSize:10,
    current:1
});

const pageChange = ({current,pageSize})=>{
  console.log('触发页码变化');
  pagination.value.current = current;
  pagination.value.pageSize = pageSize;
  getData()
  // 整合查询数据 调接口更新表格数据
}
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log('selectedRows',selectedRows)
  },
};
const getData = ()=>{
  spinning.value = true;
  setTimeout(() => {

  for(let i = 0;i<pagination.value.pageSize;i++){
  data.value.push({
     key: i,
    name: 'John Brown'+i,
    address: 'aaaa'+i,
  })
}
spinning.value = false;
}, 3000);

}
getData()
</script>
```
# 注意事项
## 插槽使用
```vue
// name 是colmuns中的dataIndex字段，解构出record获取到当前行的数据
 <template v-slot:name="{record}">
        {{record.name}}
 </template>
```
## pageChange事件回调函数
```vue
<Table @pageChange="pageChange" />
// 当页码变化会触发这个方法，得到当前页码current和页数pageSize
const pageChange = ({current,pageSize})=>{
  console.log('触发页码变化');
  pagination.value.current = current;
  pagination.value.pageSize = pageSize;
  getData()
  // 整合查询数据 调接口更新表格数据
}

```
