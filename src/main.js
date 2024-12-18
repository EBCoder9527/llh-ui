import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
// 引入组件
import MyComponents from "../lib/llh-ui.js";
import MyWebComponents from "../lib-web/llh-web-ui.js";
import ElementPlus from "element-plus";
import Antd from "ant-design-vue";
import { ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN'; 
// 注意一定要引入样式
import "../lib/style.css";
import "../lib-web/style.css";
import "element-plus/dist/index.css";
import "ant-design-vue/dist/reset.css";
//路由钩子权限
import "@/permission.js";
console.log("web-----", MyWebComponents);
const pinia = createPinia();
createApp(App)
  .use(router)
  .use(pinia)
  .use(ElementPlus)
  .use(Antd)
  .use(ConfigProvider, { locale: zhCN })
  .use(MyComponents.install)
  .use(MyWebComponents.install)
  .mount("#app");
