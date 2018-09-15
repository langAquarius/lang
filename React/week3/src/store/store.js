import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from './reducer'

// let asyncMiddleWare = ({dispatch, getState})=>(next)=>(action)=>{
//     if(action.type === 'get_data'){
//         fetch(action.url).then(res=>res.json()).then(res=>{
//             console.log(res)
//             next({
//                 type:'get_data',
//                 lists:res
//             })
//         })
//     }else{
//         next(action)
//     }
// }

let store = createStore(reducers,applyMiddleware(logger))

export default store