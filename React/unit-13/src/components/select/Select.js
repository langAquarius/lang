import React, { Component } from 'react'

class Select extends Component {
    state = {
        flag:false
    }
    render() {
        let { list, flag } = this.props
        return (
            flag&&<ul className="select">
                {
                    list.map((item,index)=>{
                        return <li onClick={()=>{this.Choose(item.text)}} key={item.id}>{item.tit}</li>
                    })
                }
            </ul>
        )
    }
    Choose=(text)=>{
        this.props.cb(text,this.state.flag)
    }
}

export default Select;
