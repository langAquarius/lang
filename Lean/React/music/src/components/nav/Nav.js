import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

class Nav extends Component {
  render() {
    return (
        <div className="nav">
            <NavLink activeClassName="active" to="/home">推荐音乐</NavLink>
            <NavLink activeClassName="active" to="/hot">热歌榜</NavLink>
            <NavLink activeClassName="active" to="/find">搜索</NavLink>
        </div>
    );
  }
}

export default Nav;