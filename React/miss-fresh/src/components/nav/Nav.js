import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './nav.css'

class Nav extends Component {
  state = {
    navlist:[
      {
        id:'0',
        params:'/home/hot',
        types:'hot',
        text:'热卖'
      },{
        id:'1',
        params:'/home/fruit',
        types:'fruit',
        text:'水果'
      },{
        id:'2',
        params:'/home/vegetables',
        types:'vegetables',
        text:'蔬菜'
      },{
        id:'3',
        params:'/home/light_food',
        types:'light_food',
        text:'轻食'
      },{
        id:'4',
        params:'/home/oil',
        types:'oil',
        text:'粮油'
      },{
        id:'5',
        params:'/home/dairy',
        types:'dairy',
        text:'乳品'
      },{
        id:'6',
        params:'/home/eggs',
        types:'eggs',
        text:'肉蛋'
      },{
        id:'7',
        params:'/home/dragon',
        types:'dragon',
        text:'端午节'
      },{
        id:'8',
        params:'/home/celebrity',
        types:'celebrity',
        text:'网红'
      },{
        id:'9',
        params:'/home/vip',
        types:'vip',
        text:'会员5折'
      },{
        id:'10',
        params:'/home/snacks',
        types:'snacks',
        text:'零食'
      }
    ]
  }
  render() {
    return (
      <div className="wrapper">
        <ul className="content">
        {
          this.state.navlist.map((item,index)=>{
            return <li key={item.id}><NavLink activeClassName="active" to={item.params} >{item.text}</NavLink></li>
          })
        }
        </ul>
    </div>
    )
  }
  componentDidMount(){
  }
}


export default Nav;