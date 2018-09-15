import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { LOGIN } from '../../store/action/action'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tel: '',
            yzm: ''
        }
    }
    render() {
        let { tel, yzm } = this.state
        return (
            <div className='login'>
                <img src="images/img8.png" alt="" />
                <p>
                    <label>手机号码</label>
                    <input type="text" name='tel' value={tel} onChange={this.HandleChange} />
                </p>
                <p>
                    <label>短信验证码</label>
                    <input type="text" name='yzm' value={yzm} onChange={this.HandleChange} />
                </p>
                <button onClick={this.login}>登录</button>
            </div>
        )
    }
    HandleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }
    login = () => {
        let { tel, yzm } = this.state
        if (tel !== '' && yzm !== '') {
            let obj = {
                tel: tel,
                yzm: yzm
            }
            this.props.dispatchLogin(obj)
            this.props.history.push('/start/mine')
        } else {
            alert('手机号或者验证码不能为空！')
        }
    }
}
function mapStateToProps(state) {
    return {
        login: state.login
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatchLogin(obj) {
            dispatch({
                type: LOGIN,
                payload: obj
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);