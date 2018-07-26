import React, { Component } from 'react'
import Category from '../../../components/category/Category'
//import './TypeR.css'

class TypeR extends Component {
    state = {
        list:[]
    }
    render() {
        return (
            <div className="typeR">
                <Category list={this.state.list}/>
            </div>
        )
    }
    componentDidMount(){
        fetch('/data/data.json').then(res=>res.json()).then(res=>{
            res.map((item,index)=>{
                if(item.type === "typeR"){
                    this.setState({
                        list:item
                    })
                }else{
                    return
                }
            })
        })
    }
}

export default TypeR