import React, { Component } from 'react'
// import './App.css'

class Message extends Component {
    render() {
        return (
            <div className="message">
                {this.props.component}
            </div>
        )
    }
}

export default Message