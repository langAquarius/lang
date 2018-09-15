import Form from '../view/form/Form'
import Details from '../view/details/Details'

let router = {
    routes:[
        {
            id:'0',
            path:'/form',
            component:Form
        },{
            id:'1',
            path:'/details',
            component:Details
        }
    ]
}

export default router