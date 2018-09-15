import { combineReducers } from 'redux'

function num(state=0,action){
    if(action.type === 'SELECT_D'){
        return action.payload
    }else{
        return state
    }
}
function checks(state=[],action){
   if(action.type==='CHECK_D'){
        return action.payload
   }else{
       return state;
   }
}
function data(state='',action){
    if(action.type==='GETDATA_D'){
        return action.payload
    }else{
        return state
    }
}
function redios(state=[],action){
    if (action.type === 'REDIO_SS') {
        [...state][action.parentInd] = action.payload
        console.log([...state])
        return [state]
    }else{
        return state
    }
}
export default combineReducers({
    num, checks, data, redios
})