import React,{ Component, Fragment } from 'react'
import './singleSelection.css'

class SingleSelection extends Component{
    state={
        index:0
    }
    render(){
        let { dataS, active } = this.props
        let { index } = this.state
        return(
            <Fragment>
            {
                dataS.map((item,idx)=>{
                    return <p key={idx} onClick={()=>{this.onChoose(idx)}} className={index===idx?'active':''} >{ item.text }<span className="choose"></span></p>
                })
            }
            </Fragment>
        )
    }
    onChoose=(idx)=>{
        let { callback } = this.props
        this.setState({
            index:idx
        })
        callback(idx)
    }
}

export default SingleSelection