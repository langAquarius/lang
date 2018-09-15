import React, { Component } from 'react'
// import './App.css'

class Select extends Component {
    render() {
        return (
            <div className="select">
                {this.props.component}
            </div>
        )
    }
}

export default Select