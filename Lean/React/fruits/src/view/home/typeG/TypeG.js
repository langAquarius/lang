import React, { Component } from 'react'
import Category from '../../../components/category/Category'
//import './typeH.css'

class TypeG extends Component {
    state = {
        list:[]
    }
    render() {
        return (
            <div className="typeG">
                <Category list={this.state.list}/>
            </div>
        )
    }
    componentDidMount(){
        fetch('/data/data.json').then(res=>res.json()).then(res=>{
            res.map((item,index)=>{
                if(item.type === "typeG"){
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

export default TypeG