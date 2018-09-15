import Vue from "vue"
import App from "./app.vue"

import "./mock"
import router from "./router"


new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
})
