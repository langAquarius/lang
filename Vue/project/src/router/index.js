import Vue from "vue"
import VueRouter from "vue-router"

import Index from "@/components/index.vue"
import Login from "@/components/login.vue"

Vue.use(VueRouter);

let Router = new VueRouter({
    routes: [{
        path: "/login",
        component: Login
    }, {
        path: "/index",
        component: Index
    }]
})
export default Router;