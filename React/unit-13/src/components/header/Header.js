import React,{ Component } from 'react'
import './header.css'

class Header extends Component{
    render(){
        return <div className="header">
            <span>〈返回</span>
            <span>我发起的</span>
            <span></span>
        </div>
    }
}

export default Header