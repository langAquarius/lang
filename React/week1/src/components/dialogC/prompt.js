import React, { Component } from 'react';

class Prompt extends Component {
    state = {
        flag: true
    }
    render() {
        return (
            this.state.flag && <div className="mask">
                <div>
                    <h4>请输入姓名</h4>
                    <input type="text" placeholder="请输入姓名"/>
                    <p>
                        <span onClick={this.DetermineOrCancel}>取消</span>&emsp;&emsp;
                        <span onClick={this.DetermineOrCancel}>确定</span>
                    </p>
                </div>
            </div>
        )
    }
    DetermineOrCancel=()=>{
        this.setState({
            flag: !this.state.flag
        })
        this.props.cb(false)
    }
}

export default Prompt;