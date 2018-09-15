import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Three extends Component{
    render(){
        return (
            <div>Three</div>
        )
    }
}

Three.propTypes = {
    three:PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object,
    ]),
}

export default Three


