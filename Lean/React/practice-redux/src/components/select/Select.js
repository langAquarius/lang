import React, { Component, Fragment } from 'react'

class Select extends Component {
    state = {
        flag:false,
        tit:'全部',
        list:[
            {
                id:'0',
                text:'全部',
                type:'all'
            },
            {
                id: '1',
                text: '完成',
                type:'finish'
            },
            {
                id: '2',
                text: '待办',
                type:'unfinish'
            }
        ]
    }
    render() { 
        return <Fragment>
            <h4 onClick={this.click}>{this.state.tit}</h4>
            {this.state.flag&&<ul>
                {
                    this.state.list.map((item,index)=>{
                        return <li key={item.id} onClick={(e)=>{this.choose(e,item.type)}}>{item.text}</li>
                    })
                }
            </ul>}
        </Fragment>
    }
    click=()=>{
        this.setState({
            flag:!this.state.flag
        })
    }
    choose=(e,types)=>{
        this.setState({
            flag:!this.state.flag,
            tit:e.target.innerText
        })
        this.props.cb(types)    
    }
}
 
export default Select;
