import React,{ Component, Fragment } from 'react'
import '../App.css'

class MultiSelection extends Component{
    state={
        index:0,
        arrIndex:[]
    }
    render(){
        let { dataM, chooseBg } = this.props
        let { index, arrIndex } = this.state
        return(
            <Fragment>
            {
                dataM.map((item,idx)=>{
                    return <li key={idx} onClick={()=>{this.onChoose(idx)}} className={arrIndex.indexOf(idx)>-1?chooseBg:''} >{ item.text }<span className="choose"></span></li>
                })
            }
            </Fragment>
        )
    }
    onChoose=(idx)=>{
        let { arrIndex } = this.state
        let arr = []
        if(arrIndex.indexOf(idx)===-1){
            arr = [...arrIndex, idx]
        }else{
            arr = [...arrIndex]
            arr.splice(arrIndex.indexOf(idx),1)
        }
        this.setState({
            arrIndex:arr
        })
        this.props.callbackM&&this.props.callbackM(arr)
    }
}

export default MultiSelection