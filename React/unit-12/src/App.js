import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment >
        <header><span>×</span><input type="text" placeholder="搜索城市" /></header>
        <nav><span onClick={()=>{this.tab('domestic')}}>国内</span><span onClick={()=>{this.tab('international')}}>国际</span></nav>
        <section>
        {
          this.props.dataList.map((item,index)=>{
            return <p key={index}>{item.name}</p>
          })
        }
        </section>
      </Fragment>
    )
  }
  componentDidMount(){
    this.props.dispatch({
      type:'get_data',
      url:'/data/data.json',
      lists:''
    })
  }
  tab=(types)=>{
    this.props.dispatch({
      type:'data_filter',
      choose:types
    })
  }
}

function mapStateToProps(state){
  let list = []
  state.data.map((item,idx)=>{
    if(item.choose){
      list = [...item.list]
    }
  })
  return {
    dataList:list
  }
}
export default connect(mapStateToProps,null,null,{pure:false})(App)
 