import { combineReducers } from 'redux'

let datas=(state = [], action)=>{
    switch(action.type){
        case 'get_data':
            return action.lists
            break;
        default:
            return state
            break;

    }
    
}

let reducers = combineReducers({datas})
export default reducers