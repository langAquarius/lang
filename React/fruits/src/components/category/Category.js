import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
//import './typeH.css'

class Category extends Component {
    render() {
        // console.log(this.props.list.list)
        return (
            <div className="typeH">
                <nav>
                <NavLink to={{pathname:'/home/typeH/all'}}>全部</NavLink>
                {
                    this.props.list.list&&this.props.list.list.map((item,index)=>{
                        let names = {pathname:'/home'+item.path}
                        //console.log(name)
                        return <NavLink to={{pathname:'/home'+item.path,query:{id:"12323232"}}} key={item.id}>{item.type}</NavLink>
                    })
                }
                </nav>
            </div>
        )
    }
   
}

export default Category