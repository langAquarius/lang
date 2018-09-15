import Shopcar from "../components/shopcar.vue"
import Login from "../components/login.vue"

let routes = [{
    path: "/shopcar",
    name: "shopcar",
    component: Shopcar
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];
export default routes;
