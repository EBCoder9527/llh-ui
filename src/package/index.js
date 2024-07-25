//package/index.js
import { App } from 'vue'
import ZSLButton from "../package/zsl-button/index.vue"; // 引入封装好的组件
import publicjs from "../package/public-js/index.js"; // 引入封装好的方法
// import VoiceButton from "../package/voice-button/index.vue"
const components = import.meta.glob('./**/*.vue', { eager: true })
// const coms = [ZSLButton,VoiceButton]; // 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
const install = function (App) {
  for(let i in components) {
    let component = components[i].default;
    App.component(component.name, component);
}
};

export default { install, publicjs }; // 这个方法以后再使用的时候可以被use调用

