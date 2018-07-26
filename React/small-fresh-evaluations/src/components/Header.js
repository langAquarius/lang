import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import '../fonts(1)/iconfont.css';

class Header extends Component{
    render(){
        return(
            <div className="headerPage">
                <span><i className="icon iconfont icon-angle-left"></i>返回</span>
                <span>新鲜智造</span>
                <span><i className="icon iconfont icon-gengduo"></i></span>
            </div>
        )
    }
}

export default Header