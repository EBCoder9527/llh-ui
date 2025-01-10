import ThsPDF from './index.vue'
import dragDirective from '../directive/dragger' 

 const install = function (App) {
      App.component(ThsPDF.name, ThsPDF);
  };
  export default {install,dragDirective}