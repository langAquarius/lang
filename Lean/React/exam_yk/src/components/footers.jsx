import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Headers extends Component{
    render() {
        return (
            <footer>
                <NavLink to='/start/home'><i className='iconfont'>&#xe6cd;</i><span>主页</span></NavLink>
                <NavLink to='/start/shopcar'><i className='iconfont'>&#xe638;</i><span>购物袋</span><span className='sum' style={{display: this.props.count < 1 ? 'none' : 'block'}}>{this.props.count}</span></NavLink>
                <NavLink to='/start/mine'><i className='iconfont'>&#xe63b;</i><span>我的乐纯</span></NavLink>
            </footer>
        )
    }
}
function mapStateToProps(state) {
    let data = state.list;
    let count = 0;
    data.map(item => {
        return count += item.count;
    })
    return {
        list: state.list,
        count
    }
}
export default connect(mapStateToProps)(Headers);