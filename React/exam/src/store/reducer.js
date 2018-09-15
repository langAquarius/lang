import { combineReducers } from 'redux'

function datas(state = JSON.parse(window.localStorage.getItem('user')) || [], action) {
    switch(action.type){
        case 'add_data':
            if(action.lists.user === ''|| action.lists.pws === ''){
                alert('用户名或密码不能为空')
            }else{
                window.localStorage.setItem('user',JSON.stringify([...state,action.lists]))
                if(window.localStorage.getItem('user')){
                    return [...state, action.lists]
                    break;
                }
            }
        case 'del_data':
            state.map((item, index) => {
                if (item.user === action.item) {
                    state.splice(index, 1)
                }
            })
            console.log(state)
            window.localStorage.setItem('user', JSON.stringify(state))
            return state
            break;
        default:
            return state
            break;
            
    }
   
}
let reducers = combineReducers({datas})

export default reducers