import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Checkbox from '../../components/checkbox'
import './food.css'
class Food extends Component {
    constructor() {
        super();
        this.state={
            data: ['海鲜', '羊肉', '青菜', '胡萝卜', '青菜', '青菜', '青菜']
        }
    }
    render() {
        let {data} = this.state;
        return <div className="food">
            <Checkbox activeClass={'activeClass'} callback={this.callback} >
               {
                   data.map((item,index)=>{
                       return <Fragment key={index}>{item}</Fragment>
                   })
               } 
            </Checkbox>
            <Link className="sure" to="/feel">继续</Link>
        </div>
    }
    callback=(a)=>{
        this.props.dispatch({
            type:'CHECK_D',
            payload:a
        })
    }
}
export default connect(null,null)(Food)