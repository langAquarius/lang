import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Two extends Component{
    render(){
        console.log(this.props.two)
        return (
            <div>object</div>
        )
    }
}
Two.propTypes = {
    two: PropTypes.shape({
            name:PropTypes.string,
            age: PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.number
            ]),
            hobby: PropTypes.arrayOf(PropTypes.string),
            other: PropTypes.shape({
                goodAt: PropTypes.arrayOf(PropTypes.string)
            })
    }).isRequired
}

export default Two