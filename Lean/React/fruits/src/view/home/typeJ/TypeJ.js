import React, { Component } from 'react'
import Category from '../../../components/category/Category'
//import './typeH.css'

class TypeJ extends Component {
    state = {
        list:[]
    }
    render() {
        return (
            <div className="typeJ">
                <Category list={this.state.list}/>
            </div>
        )
    }
    componentDidMount(){
        fetch('/data/data.json').then(res=>res.json()).then(res=>{
            res.map((item,index)=>{
                if(item.type === "typeJ"){
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

export default TypeJ