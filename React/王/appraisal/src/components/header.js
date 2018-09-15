import React, {Component} from 'react';
class Header extends Component{
    render(){
        return <div className="tit">
            <span className="span">
              <i className="icon iconfont icon-angle-left"></i>
            </span>
            <span className="mid">{this.props.children}</span>
            <i className="span"></i>
        </div>
    }
}

export default Header