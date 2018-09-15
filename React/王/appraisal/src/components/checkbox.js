import React,{ Component,Fragment } from 'react';
import PropTypes from 'prop-types'
class Checkbox extends Component{
    constructor(){
        super();
        this.state={
            arrIndex:[]
        }
    }
    render(){
        let {arrIndex} = this.state;
        let {activeClass} = this.props
        return (
            <Fragment>
                {
                    this.props.children.map((item,index)=>{
                        return <span key={index} className={arrIndex.indexOf(index)>-1?activeClass:''} onClick={()=>{this.itemClass(index)}}>{item}</span>
                    })
                }
            </Fragment>
        )
    }
    itemClass=(index)=>{
        let {arrIndex} = this.state;
        let arr = [];
        if (arrIndex.indexOf(index)>-1){
            arr = [...arrIndex]
            arr.splice(arrIndex.indexOf(index),1)
        }else{
            arr = [...arrIndex, index];
        }
        this.setState({
            arrIndex: arr
        })
        this.props.callback(arr)
    }
}
Checkbox.propTypes={
    callback: PropTypes.func.isRequired
}
export default Checkbox;