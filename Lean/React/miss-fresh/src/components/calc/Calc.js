import React, { Component } from 'react'
import { connect } from 'react-redux'

class Calc extends Component {
    render() { 
        let { buy_permission, stock } = this.props
        return <div className="Calculation">
            <span onClick={() => { this.Minus(stock) }}>-</span>
            <span>{buy_permission}</span>
            <span onClick={() => { this.Add(stock)}}>+</span>
        </div>
    }
    function(id,num){
        return this.props.dispatch({
            type: 'calc_num',
            id,
            num
        })
    }
    Minus=(id)=>{
        let num = -1
        this.function(id, num)
    }
    Add=(id)=>{
        let num = 1
        this.function(id, num)
    }
}

function mapStateToProps(state){
    return {}
}
export default connect(mapStateToProps,null,null,{pure:false})(Calc)