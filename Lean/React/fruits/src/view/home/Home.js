import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Router from '../../router/router'
import TypeH from './typeH/TypeH'
import './home.css'

class Home extends Component {
  state = {
    lists:[],
    item1:[]
  }
  render() {
    let { lists } = this.state
    return (
      <div className="home-page">
        <nav>
        {
          lists.map((item,index)=>{
            return <NavLink to={item.path} key={item.id}>{item.name}</NavLink>
          })
        }
        </nav>
        <Router routes={this.props.childRoutes}/>
      </div>
    )
  }
  componentDidMount(){
    fetch('/data/data.json').then(res=>res.json()).then(res=>{
      this.setState({
        lists:res
      })
    })
  }
}

export default Home