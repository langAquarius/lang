import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../static/fonts(1)/iconfont.css'
import './header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p></p>
        <Link to="/address"><span>次日到达&ensp;</span>北京<i className="icon iconfont icon-angle-down"></i></Link>
        <Link to="/address">&ensp;<i className="icon iconfont icon-fangdajing"></i><p>搜索</p></Link>
      </div>
    )
  }
}

export default Header;