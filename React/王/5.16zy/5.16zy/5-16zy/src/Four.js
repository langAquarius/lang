import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Four extends Component{
    render(){
        return (
            <div>{this.props.four}</div>
        )
    }
}

Four.propTypes={
    four: PropTypes.oneOf(['Hello','1601E','JavaScript','React','998']).isRequired
}

export default Four