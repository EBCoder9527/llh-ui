# llh-pdf

一个基于 Vue3 的 PDF 预览组件，集成了 PDF.js，提供了丰富的 PDF 预览功能。

## 特点

- 🚀 轻量级：基于 PDF.js，无需额外依赖
- 💪 功能丰富：支持文件切换、页面跳转、搜索等功能
- 🎨 界面美观：内置工具栏，操作便捷
- 📱 响应式：自适应容器大小
- ⚡️ 性能优秀：按需加载，渲染迅速

## 安装

```bash
npm install llh-pdf
```

## 快速使用

```vue
<template>
  <llh-pdf 
    :pdf-url="pdfUrl"
    :show-tool="true"
  />
</template>

<script setup>
import { ref } from 'vue'
import LlhPdf from 'llh-pdf'

const pdfUrl = ref('/path/to/your.pdf')
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| pdfUrl | PDF 文件的 URL 地址 | String | '/test3.pdf' |
| showTool | 是否显示工具栏 | Boolean | false |
| pdfjsPath | PDF.js viewer 的路径 | String | '/pdfjs/web/viewer.html' |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| getSaveResult | 保存操作的回调 | (resultObj: Object) |
| actionSearch | 搜索操作的回调 | (query: String) |

## 方法

通过 ref 可以调用组件的以下方法：

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| getSaveResult | 获取保存结果 | - |
| actionSearch | 执行搜索操作 | (query: String) |

## 示例

### 基础使用

```vue
<template>
  <llh-pdf :pdf-url="'/example.pdf'" />
</template>
```

### 显示工具栏

```vue
<template>
  <llh-pdf 
    :pdf-url="pdfUrl"
    :show-tool="true"
    @getSaveResult="handleSave"
  />
</template>

<script setup>
const handleSave = (result) => {
  console.log('保存结果：', result)
}
</script>
```

### 自定义 PDF.js 路径

```vue
<template>
  <llh-pdf 
    :pdf-url="pdfUrl"
    :pdfjs-path="'/custom/path/to/viewer.html'"
  />
</template>
```

## 注意事项

1. 确保 PDF.js 文件夹在正确的位置（建议copy node_module/llh-pdf/pdfjs 到public目录下）
2. PDF URL 需要是可访问的地址
3. 如果遇到跨域问题，需要配置相应的 CORS 策略

## 内置指令

组件内置了 `v-drag` 指令，用于实现元素的拖拽功能。使用时无需额外配置，已随组件一起安装。

### 示例：

```vue
<template>
  <div v-drag class="draggable-element">
    可拖拽的元素
  </div>
</template>
```
```

5. 确保 vite.config.js 的配置正确：

```javascript:vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/pdf/index.js'),
      name: 'llh-pdf',
      fileName: 'llh-pdf'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()]
})
```

这样做的好处是：

1. 用户不需要单独引入和注册指令
2. 组件和指令作为一个整体发布
3. 避免了依赖缺失的问题
4. 更容易维护和更新

使用时只需要：

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import LlhPdf from 'llh-pdf'

const app = createApp(App)
app.use(LlhPdf)
app.mount('#app')
```

所有的功能（包括自定义指令）都会自动注册到应用中。这样可以确保组件的完整功能在任何项目中都能正常使用。

## 浏览器支持

- Chrome
- Firefox
- Safari
- Edge

## 贡献

欢迎提交 issue 和 PR 来帮助改进这个组件。

## 许可证

MIT

## 更新日志

### 1.0.0
- 初始版本发布
- 支持基础 PDF 预览功能
- 添加工具栏支持