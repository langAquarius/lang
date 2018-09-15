import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Radio from '../../components/redio'
class Illness extends Component {
    constructor(){
        super();
        this.state={
            data: ['心脏病', '冠心病', '肺癌', '冠心病', '肺癌', '冠心病', '肺癌']
        }
    }
    render() {
        let {data} = this.state;
        return <div className="illness">
            <h2>有无病史</h2>
            <Radio activeClass={'activeClass'} callback={this.callback} >
                {
                    data.map((item,index)=>{
                        return <span key={index}>{item}</span>
                    })
                }
            </Radio>
            <Link className="sure" to="/info/food">继续</Link>
            <Link className="sure" to="/info/sex">返回</Link>
        </div>
    }
    callback=(num)=>{
        // console.log(num)
    }
}

export default Illness;
