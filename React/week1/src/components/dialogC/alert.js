import React, { Component } from 'react';

class Alert extends Component {
    state = {
        flag:true
    }
    render() {
        return (
            this.state.flag&&<div className="mask">
                <div>
                    <h4>提示</h4>
                    <p>确定执行此操作</p>
                    <span onClick={this.Determine}>确定</span>
                </div>
            </div>
        )
    }
    Determine=()=>{
        this.setState({
            flag: !this.state.flag
        })
        this.props.cb(false)
    }
}

export default Alert;