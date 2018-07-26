import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI, { Loading, MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})