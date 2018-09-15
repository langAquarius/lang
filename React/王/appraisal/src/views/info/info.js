import React, { Component,Fragment } from 'react';
import Header from '../../components/header'
import Router from '../../config/router';
class Info extends Component{
    render(){
        return <Fragment>
            <Header>基本信息</Header>
            <Router routes={this.props.child}></Router>
        </Fragment>
    }
}

export default Info