import { createApp } from "vue";
// import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
// 引入组件
import MyComponents from "../lib/llh-ui.js";
import ThsWebComponnets from "../lib-web/llh-web-ui.js";
// import ThsWebComponnets from "llh-web-components";
// import ThsEchartsComponnets from "../lib-echarts/llh-echarts-ui.js";
import ThsEchartsComponnets from "llh-echarts";
import PdfComponnets from "llh-pdf";
// import ElementPlus from "element-plus";
// import Antd from "ant-design-vue";
import { ConfigProvider,Button,Image,Upload,UploadDragger,Table,Form,FormItem,Input,Select,Switch,Textarea,Radio,Checkbox,DatePicker,RangePicker,Spin,Col,Row,Tooltip,Modal} from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN'; 
// 注意一定要引入样式
// import "../lib/style.css";
// import "../lib-web/style.css";
import "element-plus/dist/index.css";
import "ant-design-vue/dist/reset.css";
//路由钩子权限
import "@/permission.js";
import dragDirective from './directive/dragger'
console.log(';;;;;;;;;;;;;',dragDirective)
// const pinia = createPinia();
createApp(App)
.use(router)
  // .use(pinia)
  // .use(ElementPlus)
  .directive('drag',dragDirective)
  .use(Button)
  .use(Image)
  .use(Upload)
  .use(UploadDragger)
  .use(Table)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Select)
  .use(Switch)
  .use(Textarea)
  .use(Radio)
  .use(Checkbox)
  .use(DatePicker)
  .use(RangePicker)
  .use(Spin)
  .use(Col)
  .use(Row)
  .use(Tooltip)
  .use(Modal)
  .use(ConfigProvider, { locale: zhCN })
  // .use(Antd)
  .use(MyComponents.install)
  .use(ThsWebComponnets.install)
  .use(PdfComponnets.install)
  
  // .use(ThsEchartsComponnets.install)
  // .use(install)

  .mount("#app");