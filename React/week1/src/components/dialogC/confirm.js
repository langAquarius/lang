import React, { Component } from 'react';

class Confirm extends Component {
    state = {
        flag: true
    }
    render() {
        return (
            this.state.flag && <div className="mask">
                <div>
                    <h4>提示</h4>
                    <p>操作成功</p>
                    <p>
                        <span onClick={this.DetermineOrCancel}>取消</span>&emsp;&emsp;
                        <span onClick={this.DetermineOrCancel}>确定</span>
                    </p>
                </div>
            </div>
        )
    }
    DetermineOrCancel = () => {
        this.setState({
            flag: !this.state.flag
        })
        this.props.cb(false)
    }
}

export default Confirm;