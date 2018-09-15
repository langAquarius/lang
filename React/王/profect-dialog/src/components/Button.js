import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component{
    render(){
        console.log(this.context)
        return <button onClick={this.props.onClick}>{this.props.children}</button>
    }
}
Button.contextTypes = {
    color: PropTypes.string
};

export default Button;