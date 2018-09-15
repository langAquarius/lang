import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button'
class Dialog extends Component{
    constructor(props) {
        super(props);
        this.state={
            flags:false
        }
        this.onOk = this.onOk.bind(this)
        this.onCancel = this.onCancel.bind(this)
    }
   
    render(){
        
        let { flags } = this.state
        
        return flags&&<div className="dialog">
            <Title title={this.props.title} ></Title>
            <Content distroyMsg={this.props.distroyMsg}>{this.props.children}</Content>
            <div>{this.props.footer ? this.props.footer : [<Button key={1} onClick={this.onOk}>ok</Button>, <Button key={2} onClick={this.onCancel}>cancel</Button>]}</div>
        </div>
    }
    onOk() {
        this.setState({
            flags: false
        })
    }
    onCancel() {
        this.setState({
            flags: false
        })
    }
    componentWillReceiveProps(nextProps,b) {
        this.setState({
            flags: nextProps.flag
        })
        console.log (nextProps.flag);
        
    }
   
}
Dialog.propTypes = {
    flag: PropTypes.bool,
    footer: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
}

class Title extends Component{
    render(){
        return <h5>{this.props.title}</h5>
    }
}

class Content extends Component{
    render(){
        return <div>{this.props.children}</div>
    }
    componentWillUnmount() {
        let { distroyMsg } = this.props
        distroyMsg()
    }
}

export default Dialog;