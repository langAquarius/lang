import { combineReducers } from 'redux'

function sex(state = 0, action){
    if(action.type === 'obtain_index'){
        return action.index
    }
    return state
}

function medical(state = [], action){
    if(action.type === 'collect_index'){
        return [...state, action.arr]
    }
    return state
}
let reducer = combineReducers({sex})
export default reducer