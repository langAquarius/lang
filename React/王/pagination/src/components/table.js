import React,{Component} from 'react'

class Table extends Component{
    render(){
       let {data,defaultPageSize,page}=this.props;
       let pageList =  data.slice(defaultPageSize*(page-1),defaultPageSize*page)
        return (
            <table>
                <thead><tr><td>name</td><td>address</td><td>sex</td></tr></thead>
                <tbody>
                    {
                        pageList.map(item=>{
                            return (
                                <tr key={item.id} >
                                    <td>{item.txt}</td>
                                    <td>{item.con}</td>
                                    <td>{item.con1}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}
export default Table;