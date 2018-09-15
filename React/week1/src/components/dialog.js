import React, { Component } from 'react';
import Alert from './dialogC/alert'
import Confirm from './dialogC/confirm'
import Prompt from './dialogC/prompt'

class Dialog extends Component {
    render() {
        if (this.props.type === 'alert'){
            return <Alert cb={this.props.cb}/>
        } else if (this.props.type === 'confirm'){
            return <Confirm cb={this.props.cb}/>
        } else if (this.props.type === 'prompt') {
            return <Prompt cb={this.props.cb}/>
        }
    }
}

export default Dialog;