import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Five extends Component{
    render(){
        return(
            <div>Five</div>
        )
    }
}
Five.propTypes = {
    five:PropTypes.element.isRequired
}

export default Five