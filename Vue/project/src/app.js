import Vue from "vue"

import App from "@/app.vue"
import Router from "@/router"
import Mock from "@/mock"

let eventHub = new Vue();
Vue.prototype.bus = eventHub;
window.bus = eventHub;

let vm = new Vue({
    el: "#app",
    router: Router,
    components: {
        App
    },
    template: "<App/>"
});

