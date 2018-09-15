import React, { Component } from 'react'
import Select from './components/select/Select'
import './App.css'

class App extends Component {
  state = {
    title:'选择你要的数据︾',
    list:[
      {
        id:'0',
        text:'第一条数据'
      },
      {
        id: '1',
        text: '第二条数据'
      },
      {
        id: '2',
        text: '第三条数据'
      },
      {
        id: '3',
        text: '第四条数据'
      },
      {
        id: '4',
        text: '第五条数据'
      },
      {
        id: '5',
        text: '第六条数据'
      }
    ],
    flag:false
  }
  render() {
    let { title, list, flag } = this.state
    return (
      <div className="App">
        <h4 onClick={this.Show}>{title}</h4>
        <Select list={list} flag={flag} cb={this.callBack}/>
      </div>
    )
  }
  Show=()=>{
    this.setState({
      flag:!this.state.flag
    })
  }
  callBack=(tit,falg1)=>{
    this.setState({
      title:tit,
      flag:falg1
    })
  }
}

export default App;
