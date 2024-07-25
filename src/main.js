import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { router } from "./router"
// 引入组件
import MyComponents from '../lib/llh-ui.js'
import ElementPlus from "element-plus"
// 注意一定要引入样式
import '../lib/style.css'
import "element-plus/dist/index.css"
//路由钩子权限
import "@/permission.js"
const pinia = createPinia()
createApp(App)
.use(router)
.use(pinia)
.use(ElementPlus)
.use(MyComponents.install)
.mount('#app')
