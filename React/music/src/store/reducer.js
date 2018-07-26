import { combineReducers } from 'redux'

function datas(state = [], action){
    switch(action.type){
        case 'get_data':
            return action.dataList
        case 'choose_music':
            state.map((item,index)=>{
                if(item.id === action.id){
                    item.play=true
                    sessionStorage.setItem('list', JSON.stringify(item))
                }else{
                    item.play = false
                }
            })
            return state
        default: 
            return state
    }
}

let reducers = combineReducers({datas})
export default reducers