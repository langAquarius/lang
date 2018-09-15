import React, { Component } from 'react'
// import './App.css'

class User extends Component {
    render() {
        return (
            <div className="user">
                {this.props.component}
            </div>
        )
    }
}

export default User