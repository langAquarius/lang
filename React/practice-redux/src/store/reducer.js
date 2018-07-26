import { combineReducers } from 'redux'
import * as types from './types'
const datas = (state=[], action)=>{
    switch(action.type){
        case types.FECTHDATAS :
            return action.data_list
            break;
        default:
            return state
            break;
    }
}
let reducers = combineReducers({datas})
export default reducers