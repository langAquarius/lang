import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import Mask from './mask/Mask'
import Router from '../../router/router'

class Info extends Component{
    render(){
        return(
            <div className="infoPage">
                <Nav>基本信息</Nav>
                <Router routes={this.props.childRoutes}></Router>
            </div>
        )
    }
}

export default Info