import React,{ Component } from 'react'
import '../fonts(1)/iconfont.css';

class Header extends Component{
    render(){
        return(
            <div className="nav">
                <span><i className="icon iconfont icon-angle-left"></i></span>
                <span>{this.props.children}</span>
                <span></span>
            </div>
        )
    }
}

export default Header