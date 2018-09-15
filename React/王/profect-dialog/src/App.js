import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Dialog from './components/dialog';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      flag:false
    }
    this.toggle=this.toggle.bind(this)
    this.onOk = this.onOk.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  getChildContext(){
    return {color:"purple"};
  }
  onOk(){
    this.setState({
      flag:false
    })
  }
  onCancel(){
    this.setState({
      flag: false
    },function(){
      console.log('关闭')
    })
  }
  toggle() {
    let { flag } = this.state
    this.setState({
      flag: true
    })
  }
  distroyMsg(){
    console.log("close")
  }
  render() {
    let {flag}=this.state;
    return (
      <div className="App">
        <h4 onClick={this.toggle} >开关</h4>
        <Button>1111111111111111111111111</Button>
        <Dialog title="提示信息!" 
        flag={this.state.flag}
          distroyMsg={this.distroyMsg}
          footer={ [<Button key={1} onClick={this.onOk}>确定</Button>, <Button key={2} onClick={this.onCancel}>取消</Button>]}         
                 >
          骑三崩,狼四崩!!!
        </Dialog>
      </div>
    );
  }
}
App.childContextTypes={
  color:PropTypes.string
}
App.defaultProps={
  flag: false
}
export default App;
