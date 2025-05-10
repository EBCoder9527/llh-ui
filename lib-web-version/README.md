# llh-ui 组件库

## 组件库简介
llh-ui 是一个基于 Vue3 的组件库，提供了多个常用的业务组件，包括表格、表单、上传、图表等功能组件。

## 组件列表
目前包含以下 6 个组件：

1. **[ths-table](https://www.jianguoyun.com/p/DXA8Yd8QzZjOCxix-4EGIAA)** - 增强版表格组件
   - 集成可选择表格、普通表格
   - 简化插槽使用
   - 集成数据加载中效果

2. **[ths-form](https://www.jianguoyun.com/p/Dfypbq0QzZjOCxiz-4EGIAA)** - 配置化表单组件
   - 支持控制一行展示几个表单组件
   - 支持所有 input 类型
   - 支持自定义插槽

3. **[ths-upload](https://www.jianguoyun.com/p/DcjCLmsQzZjOCxi1-4EGIAA)** - 普通附件上传组件
   - 支持文件上传、删除、下载
   - 支持自定义上传样式
   - 支持文件类型限制

4. **[ths-upload-dragger](https://www.jianguoyun.com/p/DVR-fsoQzZjOCxi4-4EGIAA)** - 拖拽附件上传组件
   - 支持拖拽上传
   - 支持文件列表管理
   - 支持自定义上传样式

5. **[ths-img-upload](https://www.jianguoyun.com/p/DfbvO6gQzZjOCxi5-4EGIAA)** - 图片上传组件
   - 支持图片上传、删除、预览
   - 支持图片回显
   - 支持多图片上传

6. **[ths-echarts](https://www.jianguoyun.com/p/DdyHd0YQzZjOCxiw-4EGIAA)** - 图表组件
   - 简化 echarts 的使用
   - 自动响应页面变化
   - 自动处理图表实例

## 组件详情

### ths-table
[点击查看](https://www.jianguoyun.com/p/DXA8Yd8QzZjOCxix-4EGIAA)

### ths-form
[点击查看](https://www.jianguoyun.com/p/Dfypbq0QzZjOCxiz-4EGIAA)

### ths-search-form
[点击查看](https://www.jianguoyun.com/p/DWCCB9sQzZjOCxip-4EGIAA)

### ths-upload
[点击查看](https://www.jianguoyun.com/p/DcjCLmsQzZjOCxi1-4EGIAA)

### ths-upload-dragger
[点击查看](https://www.jianguoyun.com/p/DVR-fsoQzZjOCxi4-4EGIAA)

### ths-img-upload
[点击查看](https://www.jianguoyun.com/p/DfbvO6gQzZjOCxi5-4EGIAA)

### ths-echarts
[点击查看](https://www.jianguoyun.com/p/DdyHd0YQzZjOCxiw-4EGIAA)

## 使用说明

### 安装
```bash
npm install llh-ui
```

### 全局引入
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import LlhUI from 'llh-ui'

const app = createApp(App)
app.use(LlhUI)
app.mount('#app')
```

### 按需引入
```javascript
import { ThsTable, ThsForm, ThsUpload } from 'llh-ui'

// 在组件中使用
export default {
  components: {
    ThsTable,
    ThsForm,
    ThsUpload
  }
}
```

## 注意事项
1. 所有组件都基于 Vue3 开发，不支持 Vue2
2. 部分组件依赖 Ant Design Vue，请确保项目中已安装
3. 使用 echarts 组件需要安装 echarts 依赖
4. 上传组件需要配置相应的上传接口

## 贡献指南
欢迎提交 issue 和 PR 来帮助改进这个组件库。

## 许可证
MIT 