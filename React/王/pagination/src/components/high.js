import React,{Component} from 'react'

function test(Table){
    return class Page extends Component{
        render(){
            return (
                <div>
                    <Table></Table>
                    <h1>HIGH</h1>
                </div>
            )
        }
    }
}

export default test;
