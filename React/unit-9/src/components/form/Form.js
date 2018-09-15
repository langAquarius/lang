import React, { Component } from 'react'
import './form.css'

class Form extends Component {
    state = {
        names:'请填写本人真实姓名',
        shenf: '请填写本人身份证号',
        sheb: '社保卡条形码下的12 位数字',
        phone: '请填写本人手机号',
        education: '请选择',
        salary: '请选择',
        company: '请填写',
        seatMachine: '请填写',
        choose:0
    }
    render() {
        return (
            <div className="froms">
                <p>真实姓名<input type="text" name="names" value={this.state.names}  onChange={this.onChange}/></p>
                <p>身份证号<input type="text" name="shenf" value={this.state.shenf}  onChange={this.onChange}/></p>
                <p>社保卡号<input type="text" name="sheb" value={this.state.sheb}  onChange={this.onChange}/></p>
                <p>手机号码<input type="text" name="phone" value={this.state.phone}  onChange={this.onChange}/></p>
                <p>最高学历<select type="text" name="education" value={this.state.education} onChange={this.onChange}><option>博士</option><option>研究生</option><option>本科</option><option>大专</option><option>中专</option><option>高中</option></select></p>
                <p>税后月薪<select type="text" name="salary" value={this.state.salary} onChange={this.onChange}><option>清华</option><option>211</option><option>985</option><option>传媒</option><option>体育</option><option>石油</option></select></p>
                <p>单位全称<input type="text" name="company" value={this.state.company}  onChange={this.onChange}/></p>
                <p>单位座机<input type="text" name="seatMachine" value={this.state.seatMachine}  onChange={this.onChange}/></p>
                <div className="whetherOrOverdue">最近24个月内是否有逾期记录<span className={this.state.choose === 0 ? 'active' : ''} onClick={() => { this.Choose(0) }}>无</span><span className={this.state.choose===1 ? 'active' : ''} onClick={() => { this.Choose(1) }}>有</span></div>
            </div>
        )
    }
    onChange=(e)=>{
        let val = e.target.value
        let name1 = e.target.name
        this.setState({
            [name1]:val
        })
    }
    Choose=(i)=>{
        this.setState({
            choose:i
        })
    }
}
export default Form