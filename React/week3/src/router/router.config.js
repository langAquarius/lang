import Consoles from '../view/consoles/Consoles'
import Unused from '../view/unused/Unused'
import Purchase from '../view/purchase/Purchase'

import Prepurchase from '../view/purchase/prepurchase/Prepurchase'
import Appointment from '../view/purchase/appointment/Appointment'
import Substitute from '../view/purchase/substitute/Substitute'

let router = {
    routes:[
        {
            id:'0',
            path:'/consoles',
            component:Consoles
        },{
            id:'1',
            path:'/unused',
            component:Unused
        },{
            id:'2',
            path:'/purchase',
            component:Purchase,
            children:[
                {
                    id:'0',
                    path:'/purchase/prepurchase',
                    component:Prepurchase 
                },{
                    id:'1',
                    path:'/purchase/appointment',
                    component:Appointment 
                },{
                    id:'2',
                    path:'/purchase/substitute',
                    component:Substitute 
                }
            ] 
        }
    ]
}

export default router