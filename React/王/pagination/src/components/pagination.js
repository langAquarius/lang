import { Pagination } from 'antd';
import React,{Component} from 'react'
import "antd/dist/antd.css"

function test(Table){
    return class Page extends Component{
        constructor(){
            super();
            this.state={
                defaultPageSize:5,
                page:1
            }
            this.onChange=this.onChange.bind(this)
        }
        render(){
            let {data} = this.props
            let {defaultPageSize,page} = this.state
            return (
                <div>
                    <Table data={data} page={page} defaultPageSize={defaultPageSize} />
                    <Pagination defaultPageSize={defaultPageSize} total={data.length} onChange={this.onChange} />
                </div>
            )
        }
        onChange(a,b){
            this.setState({
                page:a
            })
        }
    }
}

export default test;
