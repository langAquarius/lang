import Vue from "vue"

import App from "@/app.vue"
import Router from "@/router"
import Mock from "@/mock"
import Bus from "@/util"

Vue.prototype.bus = Bus;
window.bus = Bus;

new Vue({
    el: "#app",
    router: Router,
    components: { App },
    template: "<App/>"
});