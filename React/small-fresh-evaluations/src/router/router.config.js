import Start from '../view/start/Start'
import Info from '../view/info/Info'
import Feel from '../view/feel/Feel'

import Mask from '../view/info/mask/Mask'
import Sex from '../view/info/sex/Sex'
import MedicalHistory from '../view/info/medicalHistory/MedicalHistory'
import Allergy from '../view/info/allergy/Allergy'
import DislikeFood from '../view/info/dislikeFood/DislikeFood'

let router = {
    routes:[
        {
            path:'/start',
            component:Start
        },{
            path:'/userInfo',
            component:Info,
            children:[
                {
                    path:'/userInfo/mask',
                    component:Mask
                },{
                    path:'/userInfo/sex',
                    component:Sex
                },{
                    path:'/userInfo/medicalHistory',
                    component:MedicalHistory
                },{
                    path:'/userInfo/allergy',
                    component:Allergy
                },{
                    path:'/userInfo/dislikeFood',
                    component:DislikeFood
                }
                
            ]
        },{
            path:'/feeling',
            component:Feel
        }
    ]
}

export default router