import React, { Component } from 'react';

class Header extends Component {
    state = {
        lists:[
            {
                id:"0",
                name:"豆瓣"
            },
            {
                id: "1",
                name: "电影"
            },
            {
                id: "2",
                name: "图书"
            },
            {
                id: "3",
                name: "广播"
            },
            {
                id: "4",
                name: "小组"
            }
        ]
    }
    render() {
        return (
            <header>
            {
                this.state.lists.map((item,index)=>{
                    return <p key={item.id}>{item.name}</p>
                })
            }
            </header>
        )
  }
}

export default Header;