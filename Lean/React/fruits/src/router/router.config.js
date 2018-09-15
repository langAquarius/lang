import Home from '../view/home/Home'
import Classify from '../view/classify/Classify'
import ShopCar from '../view/shopCar/ShopCar'
import Me from '../view/me/Me'

import TypeH from '../view/home/typeH/TypeH'
import TypeJ from '../view/home/typeJ/TypeJ'
import TypeG from '../view/home/typeG/TypeG'
import TypeR from '../view/home/typeR/TypeR'

let router = {
    routes:[
        {
            id:'0',
            path:'/home',
            component:Home,
            children:[
                {
                    id:'0',
                    path:'/home/typeH',
                    component:TypeH
                },{
                    id:'1',
                    path:'/home/typeJ',
                    component:TypeJ
                },{
                    id:'2',
                    path:'/home/typeG',
                    component:TypeG
                },{
                    id:'3',
                    path:'/home/typeR',
                    component:TypeR
                }
            ]
        },{
            id:'1',
            path:'/classify',
            component:Classify
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