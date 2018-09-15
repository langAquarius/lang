import React, { Component } from 'react'
import ShowDown from './ShowDown'

class Select extends Component {
    state = {
        lists:[
            {   
                id:'0',
                tit:'select1',
                flag:false,
                list:[
                    {
                        id:'0',
                        text:'11111'
                    }, {
                        id: '1',
                        text: '22222'
                    }, {
                        id: '2',
                        text: '33333'
                    }
                ]
            }, {
                id: '1',
                tit: 'select2',
                flag:false,
                list: [
                    {
                        id: '0',
                        text: '11111'
                    }, {
                        id: '1',
                        text: '22222'
                    }, {
                        id: '2',
                        text: '33333'
                    }
                ]
            }, {
                id: '2',
                tit: 'select3',
                flag:false,
                list: [
                    {
                        id: '0',
                        text: '11111'
                    }, {
                        id: '1',
                        text: '22222'
                    }, {
                        id: '2',
                        text: '33333'
                    }
                ]
            }
        ]
    }
    render() {
        let {lists} = this.state
        console.log(lists)
        return (
            <div className="select">
                {
                    lists.map((item,index)=>{
                        return(
                            <ul className="one"  key={item.id}>
                                <h3 onClick={()=>{this.show(item.id)}}>{item.tit}</h3>
                                <ShowDown list={item.list} flag={item.flag} />
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
    show=(id)=>{
        let { lists } = this.state
        let lists1 = []
        lists1 = [...lists]
        lists1.map((val1,k)=>{
            if((id*1)===k){
                val1.flag = !val1.flag
            }else{
                val1.flag = false
            }
        })
        this.setState({
           lists:lists1
        })
    }
}

export default Select