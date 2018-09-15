import React,{Component} from 'react';
import PropTypes from 'prop-types';
class Arr extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>arr:{this.props.arr}</div>
        )
    }
}

Arr.propTypes = {
    arr:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Arr;