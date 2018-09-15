import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './sex.css'
import SingleSelection from '../../../components/singleSelection/SingleSelection'

class Sex extends Component{
     state={
        sex:[
            {
                text:'我是男神',
                id:0
            },
            {
                text:'我是女神',
                id:1
            }
        ]
    }
    render(){
        //console.log(this.props)
        let { sex } = this.state
        return(
            <div className="sexBox">
                <img src="../../../../images/img/sex_bg.gif"/>
                <SingleSelection dataS={sex} active={'active'} callback={this.callback}/>
                <Link to="/userInfo/medicalHistory" className="nextStart"></Link>
            </div>
        )
    }
    callback=(index)=>{
        //console.log(index)
        this.props.dispatch({
            type:'obtain_index',
            index
        })
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        index:state.sex
    }
}
export default connect(mapStateToProps,null)(Sex)