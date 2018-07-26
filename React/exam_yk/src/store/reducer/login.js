import {
    LOGIN
} from '../action/action'

function login(state = {}, action) {
    if (action.type === LOGIN) {
        if (action.payload.tel === '18201084548' && action.payload.yzm) {
            localStorage.setItem("tel", action.payload.tel)
            localStorage.setItem("yzm", action.payload.yzm)
        } else {
            alert('您输入的手机号或验证码有误，请您重新输入！')
        }
        return action.payload
    }
    return state;
}

export default login;