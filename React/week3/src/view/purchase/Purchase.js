import React, { Component } from 'react'
import Router from '../../router/router'

class Purchase extends Component{
    render(){
        return(
            <div>
                采购管理
                <Router routes={this.props.childRoutes}></Router>   
            </div>
        )
    }
}

export default Purchase