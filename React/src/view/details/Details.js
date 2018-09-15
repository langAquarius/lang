import React, { Component } from 'react'
import { connect } from 'react-redux'
import './details.css'

class Details extends Component {
    render() {
        return (
            <div className="details">
                <ul>
                {
                    this.props.list&&JSON.parse(window.localStorage.getItem('user')).map((item,index)=>{
                        return <li key={index}><span>姓名：{item.user}&emsp;密码：{item.psw}</span><span onClick={()=>{this.Delete(item.user,index)}}>X</span></li>
                    })
                }
                </ul>
                <span className="back" onClick={this.Back}>返回添加页面</span>
            </div>
        )
    }
    Delete=(item,id)=>{
        this.props.dispatch({
            type:'del_data',
            item,
            id
        })
        console.log('del')
    }
    Back=()=>{
        this.props.history.push('/form')
    }
}
const mapStateToProps = (state)=>{
    return{
        list:state.datas
    }
}
export default connect(mapStateToProps,null,null,{pure:false})(Details)
