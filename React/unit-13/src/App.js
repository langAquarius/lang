import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './components/header/Header'
import Select from './components/select/Select' 
import './App.css'

class App extends Component {
  state = {
    flag:false,
    list:[{
      tit:"全部状态",
      type_a:"1"
    },{
      tit:"待审核",
      type_a:"2"
    },{
      tit:"代办",
      type_a:"3"
    },{
      tit:"归档",
      type_a:"4"
    }]
  }
  render() {
    console.log(this.props.list)
    return (
      <div className="app">
        <Header />
        <nav>
          <div><span>全部状态</span><Select onClick={()=>{this.chooseType('all')}} list={this.state.list} flag={this.state.flag} cb={this.callback} /></div>
          <div>全部类型</div>
        </nav>
        <ul>
        {
          this.props.list.map((item,index)=>{
            console.log(item)
            return <li key={item.id}>
              <p className="title"><b>{item.tit}</b><span>{item.type}</span></p>
              <p className="time">{item.time}</p>
              <p className="text">{item.text}</p>
            </li>
          })
        }
        </ul>
      </div>
    )
  }
  chooseType=()=>{
    
  }
  componentDidMount(){
    this.props.dispatch({
      type:'get_data',
      url:'/data/data.json',
      lists:''
    })
  }
}
const mapStateToProps = (state,ownProps)=>{
  console.log(state)
  return{
    list:state.datas
  }
}

export default connect(mapStateToProps)(App)
