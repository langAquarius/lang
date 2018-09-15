import Vue from "vue"
import App from "./app.vue"


new Vue({
    el: "#app",
    data: {
        info: "123321"
    },
    render: h => h(App)
});