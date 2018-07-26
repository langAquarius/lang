import Start from '../views/start'
import Home from '../views/start/home'
import Shopcar from '../views/start/shopcar'
import Mine from '../views/start/mine'
import Login from '../views/login'

let router = {
    routes: [
        {
            path: '/start',
            component: Start,
            children: [
                {
                    path: '/start/home',
                    component: Home,
                },
                {
                    path: '/start/shopcar',
                    component: Shopcar,
                },
                {
                    path: '/start/mine',
                    component: Mine,
                }
            ]
        },
        {
            path: '/login',
            component: Login
        }
    ]
}

export default router;