import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

// let asyncMiddleWare = ({dispatch,getState})=>(next)=>(action)=>{
//     if(action.type === 'getdata'){
//         fetch(action.url).then(res=>res.json()).then(res=>{
//             next({
//                 type:
//             })
//         })
//     }
// }

let store = createStore(reducer,applyMiddleware(logger))
export default store