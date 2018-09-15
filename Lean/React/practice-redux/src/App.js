import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchDatas} from './store/action'
import Select from './components/select/Select'
import './App.css'

class App extends Component {
  state = {
    filter:'all'
  }
  render() {
    return (
      <div className="App">
        <Select cb={this.callback}/>
        <ul>
        {
          this.props.lists.map((item,index)=>{
            return <li key={item.id}>
              <h4>{item.tit}</h4>
              <p>{item.text}</p>
            </li>
          })
        }
        </ul>
        <p onClick={() => { this.asd()}}></p>
      </div>
    )
  }
  componentDidMount(){
    this.props.getData()
  }

  callback=(tit_type)=>{
    this.props.filter()
  }
}
const mapStateToProps=(state)=>{
  //console.log(state)
  // state.datas.map((item.index)=>{
    
  // })
  return{
    lists:state.datas
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    getData(){
      dispatch(fetchDatas({url:'/data/data.json'}))
    }
    // ,
    // filter(tit_type){
    //   dispatch(filter(tit_type))
    // }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
