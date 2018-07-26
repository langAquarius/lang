import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/vip">会员</NavLink>
        <NavLink to="/user">我的</NavLink>
      </div>
    )
  }
}

export default Footer;
