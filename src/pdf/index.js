import ThsPDF from './index.vue'
import dragDirective from './directive'

const install = function(App) {
    // 注册组件
    App.component(ThsPDF.name, ThsPDF);
    // 注册自定义指令
    App.directive('drag', dragDirective);
};

// 导出组件和指令
export default {
    install,
    ThsPDF,
    dragDirective
}