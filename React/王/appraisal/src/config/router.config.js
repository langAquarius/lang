import Start from '../views/start/start'
import Info from '../views/info/info'
import Sex from '../views/sex/sex'
import Illness from '../views/illness/illness'
import Food from '../views/food/food'
import Feel from '../views/feel/feel'
let router = {
    routes:[
        {
            path:'/start',
            component:Start
        },
        {
            path:'/info',
            component:Info,
            children:[
                {
                    path:'/info/sex',
                    component:Sex
                },
                {
                    path: '/info/illness',
                    component: Illness
                },
                {
                    path: '/info/food',
                    component: Food
                }
            ]
        },
        {
            path: '/feel',
            component: Feel
        }
    ]
}
export default router