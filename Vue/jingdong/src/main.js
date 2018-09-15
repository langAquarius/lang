// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from "vue-lazyload"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './mock'


Vue.config.productionTip = false
Vue.use(VueLazyload, {
    error: '../static/images/loading/haha.gif',
    loading: '../static/images/loading/jd.gif'
});
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})