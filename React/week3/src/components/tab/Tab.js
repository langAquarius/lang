import React, { Component } from 'react'
import { Table, Icon, Divider } from 'antd'

const columns = [{
    title: 'ID',
    dataIndex: 'key',
    key: 'key',
    render: text => <a href="javascript:;">{text}</a>,
},{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    //render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}
];

class Tab extends Component{
    render(){
        return(
            <Table columns={columns} dataSource={this.props.data} />
        )
    }
}
export default Tab