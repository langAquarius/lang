import * as types from './types'
export const fetchDatas=(obj)=>{
    return (dispatch, getState)=>{
        fetch(obj.url).then(res=>res.json()).then(res=>{
            dispatch({
                type:types.FECTHDATAS,
                data_list:res
            })
        })
    }
}
// export const filter = (tit_type)=>{
//     return (dispatch, getState)=>[
//         dispatch({
//             type:types.FILTER,
//             filter_show:tit_type
//         })
//     ]
// }