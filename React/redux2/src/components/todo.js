import React,{ Component } from 'react';
import { connect } from "react-redux";

class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            todo:'',
            i:0
        }
    }   
    render(){
        let { todo , name } = this.props
        let { i } = this.state
        return(
            <div>
                <p className="header">
                    <input type="text" placeholder="输入一段话" value={this.state.todo} onChange={this.onChange} />&nbsp;
                    <button type="button" onClick={this.addText}>添加</button>
                </p>
                <ul className="lists">
                    {
                        todo&&todo.map((item,k)=>{
                            //console.log(item)
                            return(
                                <li key={k} className={item.isCompleted?'checked':''}>
                                    <span className="check" onClick={()=>{this.onChecked(k)}}></span>
                                    <span className="Text">{item.todos}</span>
                                    <span className="del" onClick={()=>{this.onDelete(k)}}>x</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="Filter">
                    筛选：
                    <b className="all" onClick={()=>{this.onFilter(0,'all')}} className={0===i?'act':''}>全部</b>
                    <b className="finish" onClick={() => { this.onFilter(1,'finish')}} className={1===i?'act':''}>已完成</b>
                    <b className="nFinish" onClick={() => { this.onFilter(2,'nFinish')}} className={2===i?'act':''}>未完成</b>
                </div>
            </div>
        )
    }
    addText=()=>{
        let { dispatch } = this.props
        dispatch({
            type:'addText',
            data:{
                todos:this.state.todo,
                isCompleted:false
            }
        })
        this.setState({
            todo:''
        })
    }
    onChange=(e)=>{
        this.setState({
            todo:e.target.value
        })
    }
    onChecked=(k)=>{
        //console.log(k)
        let { dispatch } = this.props
        dispatch({
            type:'onChecked', 
            k
        })
    }
    onDelete=(k)=>{
        //console.log(k)
        let { dispatch } = this.props
        dispatch({
            type: 'onDelete',
            k
        })
    }
    onFilter=(j,name)=>{
        this.setState({
            i:j
        })
        let { dispatch } = this.props
        dispatch({
            type: 'onFilter',
            name
        })
    }
    
}
let HigherComponent = connect(function(state){
    //console.log(state)
    let list = state.todos
    if (state.filter === 'finish'){
        //console.log(list)
        //这里的filter原生的过滤方法
        list = list.filter((item , i)=>{
            //console.log(item)
            //console.log(!item.isCompleted)
            return item.isCompleted
        })
    } else if (state.filter === 'nFinish'){
        list = list.filter((item, i) => {
            //console.log(item)
            return !item.isCompleted
        })
    }
    console.log(list)
    return{
        todo: list
    }
}
//加function参数后  dispatch 就不见了
// ,function(){
//     return {}
// }
)
export default HigherComponent(Todo)