import { combineReducers } from 'redux'

function data(state = [], action){
    switch(action.type){
        case 'get_data':
            return action.lists
            break;
        case 'data_filter':
            state.map((items,index)=>{
                if(items.type === action.choose){
                    items.choose = true
                }else{
                    items.choose = false
                }
            })
            return state
            break;
        default:
            return state
            break;
    }
}
let reducers = combineReducers({data})

export default reducers