import React, { Component, Fragment } from 'react';
import Dialog from './components/dialog'
import './App.css';

class App extends Component {
  state = {
    list: [
      {
        id: '0',
        text: '打开alert提示框',
        type: 'alert'
      }, {
        id: '1',
        text: '打开confirm提示框',
        type: 'confirm'
      }, {
        id: '2',
        text: '打开prompt提示框',
        type: 'prompt'
      }
    ],
    flag: false,
    i: -1
  } 
  render() {
    let { list, flag, i } = this.state
    return (
      <div className="dialog">
        {
          list.map((item, index) => {
            return (
              <div className="box" key={item.id}>
                <span onClick={() => { this.onClick(index, item.id) }}>{item.text}</span>
              </div>
            )
          })
        }
        <Fragment>{flag && <Dialog type={list[i].type} cb={this.callBack}/>}</Fragment>
      </div>
    )
  }
  onClick = (idx,k) => {
    this.setState({
      flag: true,
      i: idx
    })
  }
  callBack=(flag)=>{
    this.setState({
      flag
    })
  }
}

export default App;
