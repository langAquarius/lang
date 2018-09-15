import React, { Component } from 'react';


class Release extends Component {
    render() {
        let { lists } = this.props
        return (
            <ul className="content">
                {
                    lists&&lists.map((item,index)=>{
                        return(
                            <li key={index+''}>
                                <p><span className="user">{item.user}</span>&emsp;&emsp;<span className="times">{item.time}</span></p>
                                <p>{item.val}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default Release;