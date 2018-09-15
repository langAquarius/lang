import Home from '../view/home/Home'
import Vip from '../view/vip/Vip'
import ShopCar from '../view/shopCar/ShopCar'
import Me from '../view/me/Me'

let router = {
    routes:[
        {
            id:'0',
            path:'/home/:id?',
            component:Home
        },{
            id:'1',
            path:'/vip',
            component:Vip
        },{
            id:'2',
            path:'/shopCar',
            component:ShopCar
        },{
            id:'3',
            path:'/me',
            component:Me
        }
    ]
}

export default router