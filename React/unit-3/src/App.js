import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    num:0,
    flag:true
  }
  componentWillMount(){
    console.log('实例化...')  
  }
  render() {
    console.log('渲染中...')
    console.log(this.state.flag)
    return (
      this.state.flag&&<div className="App">
        <button type="button" onClick={()=>{this.click()}}>赞<span className="num">{this.state.num}</span></button>
      </div>
    )
  }
  componentDidMount() {
    console.log('创建完成...')
  }
  click=()=>{
    let {num,flag} = this.state
    ++num
    if(num>5){
      flag=false
    }
    this.setState({
      num,
      flag
    })
  }
  shouldComponentUpdate(nextProps,nextState) {
    console.log('是否更新？？？...')
    if(nextState === this.state.num){
      console.log('否')
      return false
    }
    console.log('是')
    return true
  }
  componentWillUpdate(){
    console.log('即将更新...')
  }
  componentDidUpdate() {
    console.log('更新完成...')
  }
  componentWillUnmount(){
    console.log('即将销毁...')
  }
  
}

export default App;
