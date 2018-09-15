import React, { Component } from 'react'
import Category from '../../../components/category/Category'
import './typeH.css'

class TypeH extends Component {
    state = {
        list:[]
    }
    render() {
        console.log(this.props)
        return (
            <div className="typeH">
                <Category list={this.state.list}/>
            </div>
        )
    }
    componentDidMount(){
        fetch('/data/data.json').then(res=>res.json()).then(res=>{
            res.map((item,index)=>{
                if(item.type === "typeH"){
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

export default TypeH