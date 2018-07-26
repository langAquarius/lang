import React, { Component, Fragment } from 'react';
import Release from './Release '
import './board.css'

class Board extends Component {
    state = {
        lists:[
            {
                val:'你想对我说的话....',
                user:'丑小鸭',
                time:'2018-06-07 12:12:12'
            }
        ]
    }
    formatTime(){
        let data = new Date();
        let Y = data.getFullYear()+'';
        let M = data.getMonth()+1+'';
        //let D = data.getDay()+'';
        let D = data.getDate()+'';
        let h = data.getHours()+'';
        let m = data.getMinutes()+'';
        let s = data.getSeconds()+'';
        return `${Y}-${M.padStart(2, '0')}-${D.padStart(2, '0')}  ${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`
    }
    render() {
        let { lists } = this.state
        return (
            <Fragment>
                <div className="board">
                    <Release lists={lists}/>
                    <textarea type="text" name="val" value={lists.val} onChange={this.onChange} placeholder="你想对我说..." onFocus={this.clear} onKeyDown={this.submit} ></textarea><br/>
                    <p>
                        <input type="text" name="user" value={lists.user} onChange={this.onChange} placeholder="Who?" onFocus={this.clear} onKeyDown={this.submit} />
                        <button type="button" onClick={()=>{this.onClick()}} >发布</button>
                    </p>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        let list = localStorage.getItem('Lists') ? JSON.parse(localStorage.getItem('Lists')) : this.state.lists;
        this.setState({
            lists: list
        })
    }
    clear=(e)=>{
        e.target.value=''
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit=(e)=>{
       if(e.keyCode === 13){
           this.onClick()
       }
    }
    onClick=(e)=>{
        let { lists } = this.state
        this.setState({
            lists: [...lists, { val: this.state.val, user: this.state.user, time: this.formatTime()}]
        },()=>{
            localStorage.setItem('Lists', JSON.stringify(this.state.lists));
        })
    }
    
}

export default Board;