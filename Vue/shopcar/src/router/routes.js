import Index from "@/components/index.vue"
import Login from "@/components/login.vue"
import Shopcar from "@/components/shopcar.vue"

let routes = [{
        path: "/",
        redirect: '/login',
        component: Login,
        meta: { keepAlive: true }
    },
    {
        path: "/login",
        component: Login
    }, {
        path: "/index",
        component: Index
    },
    {
        path: "/shopcar",
        component: Shopcar
    }
]
export default routes;