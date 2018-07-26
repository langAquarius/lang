import { combineReducers } from 'redux'

function datas(state = [], action){
    switch(action.type){
        case 'get_data':
            return action.dataList
            break;
        case 'add_shop':
            state.product_list.products.map((item,index)=>{
                if (item.stock === action.id) {
                    item.sell_out=true
                    item.buy_permission=1
                }
            })
            return state
            break;
        case 'calc_num':
            state.product_list.products.map((item, index) => {
                if (item.sell_out&&item.stock === action.id) {
                    item.buy_permission += action.num
                    item.buy_permission <= 1 ? item.buy_permission = 1 : item.buy_permission  
                }
            })
            return state
            break;
        case 'ckecked_all':
            state.product_list.products.map((item, index) => {
                if (item.stock) {
                    
                }
            })
            return state
            break;
        case 'ckecked':
            state.product_list.products.map((item, index) => {
                if (item.stock) {
                    item={...item,checked:action.flag}
                }
            })
            return state
            break;
        default: 
            return state
            break;
    }
}

let reducers = combineReducers({datas})
export default reducers