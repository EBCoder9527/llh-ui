//package/index.js
import { App } from 'vue'
const components = import.meta.glob('./**/*.vue', { eager: true })
// 批量组件注册
const EBH5UI = function (App) {
  for(let i in components) {
    let component = components[i].default;
    App.component(component.name, component);
}
};

export default EBH5UI; 

