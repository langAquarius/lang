import React, { Component, } from 'react'

class ShowDown extends Component {
    render() {
        let {list} = this.props
        return (
            <ol>
                {
                    list.map((item, index) => {
                        return this.props.flag&&<li className="two" onClick={()=>{this.show(item.id)}} key={item.id}>
                            {item.text}
                        </li>
                    })
                }
            </ol>
        )
    }
}

export default ShowDown