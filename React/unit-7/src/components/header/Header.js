import React, { Component, Fragment } from 'react'
import User from './user/User'
import Select from './select/Select'
import Message from './message/Message'
// import './App.css'

class Header extends Component {
    // state = {
    //     headerList:[
    //         {
    //             id:'0',
    //             num:1,
    //             type:'component',
    //             tag:'User',
    //             content:'我的'
    //         },
    //         {
    //             id: '1',
    //             num: 1,
    //             type: 'component',
    //             tag: 'Select',
    //             content: '北京市'
    //         }, {
    //             id: '2',
    //             num: 1,
    //             type: 'component',
    //             tag: 'Message',
    //             content: '消息'
    //         }
    //     ]
    // }
    render() {
        return (
            <Fragment>
                <User component={'我的'}/>
                <Select component={'北京市'}/>
                <Message component={'消息'}/>
            </Fragment>
        )
    }
}

export default Header