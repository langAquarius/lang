import React,{ Component,Fragment } from 'react';

class Radio extends Component{
    constructor(){
        super();
        this.state={
            num:0
        }
    }
    render(){
        let {activeClass} = this.props
        let {num} = this.state
        return (
            <Fragment>
                {
                    this.props.children&&this.props.children.map((item,index)=>{
                        return <div key={index} className={num===index?activeClass:''} onClick={()=>{this.itemClass(index)}}>{item}</div>
                    })
                }
            </Fragment>
        )
    }
    componentDidMount(){
        this.setState({
            num:this.props.nums
        })
    }
    itemClass=(index)=>{
        let {ind} = this.props
        this.setState({
            num:index
        })
        this.props.callback(index, ind)
    }
}
export default Radio;