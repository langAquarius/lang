import {
    LIST_DATA,
    TOGGLE,
    ADD,
    MINUS,
    SHOP_CAR_DATA
} from "../action/action";

function list(state = [], action) {
    switch (action.type) {
        case LIST_DATA:
            return action.payload;
        case TOGGLE:
            return [...state].map(item => {
                if (item.id === action.id) {
                    item.ischeck = true
                    item.count = item.count + 1
                }
                return item;
            })
        case ADD:
            return [...state].map(item => {
                if (item.id === action.id) {
                    item.count = ++item.count
                }
                return item;
            })
        case MINUS:
            return [...state].map(item => {
                if (item.id === action.id) {
                    item.count = --item.count
                    if (item.count < 1) {
                        item.ischeck = false
                        item.count = 0;
                    }
                }
                return item;
            })
        case SHOP_CAR_DATA:
            return [...state].filter(item => {
                return item.ischeck
            })
        default:
            return state;
    }
}

export default list;