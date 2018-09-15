import Home from '../view/home/Home'
import Vip from '../view/vip/Vip'
import User from '../view/user/User'

let router = {
    routes:[
        {
            id:'0',
            path:'/home',
            component:Home
        },
        {
            id:'1',
            path:'/vip',
            component:Vip
        },
        {
            id:'2',
            path:'/user',
            component:User
        }
    ]
}
export default router