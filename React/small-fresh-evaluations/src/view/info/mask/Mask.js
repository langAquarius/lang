import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import './mask.css'

class Mask extends Component{
    render(){
        return(
            <div className="mask">
                <img src="../../../../images/img/mask_bg.gif"/>
                <Link to="/start" className="close"></Link>
                <Link to="/userInfo/sex" className="nextStart"></Link>
            </div>
        )
    }
}

export default Mask