import Home from '../view/home/Home'
import Hot from '../view/hot/Hot'
import Find from '../view/find/Find'

import Detailed from '../view/hot/detailed/Detailed'

let router = {
    routes:[
        {
            id:'0',
            path:'/home',
            component:Home
        },{
            id:'1',
            path:'/hot',
            component:Hot,
            children:[
                {
                    id:'0',
                    path:'/hot/detailed',
                    component:Detailed
                }
            ]
        },{
            id:'2',
            path:'/find',
            component:Find
        }
    ]
}

export default router