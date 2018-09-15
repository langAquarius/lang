import { createStore,applyMiddleware } from 'redux'
import reducers from './reducer'
import logger from 'redux-logger'

let asyncMiddleWare = ({dispatch,getState})=>(next)=>(action)=>{
    if(action.type==='GETDATA_D'){
        fetch(action.url).then(res=>res.json()).then(res=>{
            next({
                type:'GETDATA_D',
                payload:res
            })
        })
    }else{
        next(action)
    }
}
let middleWares = [applyMiddleware(logger), applyMiddleware(asyncMiddleWare)];
let store = createStore(reducers,...middleWares)
export default store