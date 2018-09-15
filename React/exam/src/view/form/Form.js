import React, { Component } from 'react'
import { connect } from 'react-redux'
import './form.css'

class Form extends Component {
    state = {
        user:'',
        psw:''
    }
    render() { 
        return ( 
            <div className="form">
                <p><input type="text" name="user" placeholder="Username" value={this.state.user} onChange={this.HandheldChange} /></p>
                <p><input type="password" name="psw" placeholder="Password" value={this.state.psw} onChange={this.HandheldChange} /></p>
                <button onClick={this.Click}>add</button>
            </div>
         )
    }
    HandheldChange=(e)=>{
        let key = e.target.name
        let val = e.target.value
        this.setState({
            [key]:val
        })
    }
    Click=()=>{
        this.props.dispatch({
            type:'add_data',
            lists:this.state
        })
        this.props.history.push('/details')
    }
}
const mapStateToProps = (state)=>{
    return{}
}

export default connect(mapStateToProps,null,null,{pure:false})(Form)
