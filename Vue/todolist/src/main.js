// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

console.log(Vuex)
let store = new Vuex.Store({
        state: { list: [123] },
        mutations: {
            sumbit(state, data) {
                console.log(state)
                console.log(data)
                state.list.push(data)
            }
        },
        getters: {},
        actions: {},
        modules: {}
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})