import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from './reducer'

let asyncMiddleWare = ({dispatch,getState})=>(next)=>(action)=>{
    if(action.type === 'get_data'){
        fetch(action.url).then(res=>res.json()).then(res=>{
            next({
                type:'get_data',
                dataList:res
            })
        })
    }else{
        next(action)
    }
    
}
let store = createStore(reducers,applyMiddleware(asyncMiddleWare))

export default store