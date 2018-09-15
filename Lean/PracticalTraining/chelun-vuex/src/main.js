import Vue from 'vue';
import VueLazyload from "vue-lazyload";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false
Vue.use(VueLazyload, {
    error: '../static/images/loading/haha.gif',
    loading: '../static/images/loading/car3.gif'
});
Vue.use(VueAwesomeSwiper);

new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})