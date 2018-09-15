import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tab from '../../../components/tab/Tab'
import 'antd/dist/antd.css'
import data from '../../../mock/mock'

class Prepurchase extends Component{
    render(){
        console.log(this.props.list)
        return(
            <div>
            <Tab data={this.props.lists}/>    
            </div>
        )
    }
    componentDidMount(){
        this.props.dispatch({
            type:'get_data',
            lists:data
        })
    }
}
function mapStateToProps(state){
    console.log(state)
    return {
        lists:state.datas
    }
}
export default connect(mapStateToProps)(Prepurchase)