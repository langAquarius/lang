
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Redio from '../../components/redio'

import './sex.css'

class Sex extends Component {
    constructor() {
        super();
        this.state = {
            flag: true,
            data: [{ msg: '我是男神' }, { msg: '我是女神' },{msg:'你是神经病'}]
        }
    }
    render() {
        let { flag, data } = this.state
        return <div className="info">
            {
                flag && <div className="mark">
                    <div className="dialog">
                        <span onClick={this.close.bind(this)} ></span>
                    </div>
                </div>
            }
            <h2>请选择您的性别</h2>
            <Redio activeClass={'activeClass'} nums={this.props.nums} callback={this.callback} >
                {
                    data.map((item, index) => {
                        return <div key={index} >
                            <p>{item.msg}</p>
                        </div>
                    })
                }
            </Redio>
            <Link className="sure" to="/info/illness">继续</Link>
        </div>
    }
    callback=(index)=>{
        this.props.dispatch({
            type:'SELECT_D',
            payload: index
        })
    }
    close() {
        this.setState({
            flag: false
        })
    }
}
function mapStateToProps(state){
    console.log(state)
    return {
        nums:state.num
    }
}
export default connect(mapStateToProps,null)(Sex);
