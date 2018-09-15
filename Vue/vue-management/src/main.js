import Vue from 'vue';
import App from './App';
import router from './router';
import bus from './utils/eventBus';
import '@/mock';
import '@/mock/intercepte.js'
import ElementUI from "element-ui"
import '../node_modules/element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);
Vue.use(bus);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});