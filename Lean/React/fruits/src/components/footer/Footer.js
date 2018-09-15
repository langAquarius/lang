import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'

class Footer extends Component {
  render() {
    return (
        <div className="footer">
            <NavLink to="/home">首页</NavLink>
            <NavLink to="/classify">分类</NavLink>
            <NavLink to="/shopCar">购物车</NavLink>
            <NavLink to="/me">我的</NavLink>
        </div>
    )
  }
}

export default Footer