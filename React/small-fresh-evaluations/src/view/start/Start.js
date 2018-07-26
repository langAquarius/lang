import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import './start.css';

class Start extends Component{
    render(){
        return(
            <div className="startPage">
                <Nav>小鲜测评</Nav>
                <div className="bg">
                    <img src="../../../images/img/start_bg.gif"/>
                    <Link to="/userInfo/mask" className="buttonStart"></Link>
                </div>
            </div>
        )
    }
}

export default Start