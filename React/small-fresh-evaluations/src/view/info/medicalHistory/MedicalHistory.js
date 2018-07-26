import React,{ Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SingleSelection from '../../../components/singleSelection/SingleSelection'
import MultiSelection from '../../../components/MultiSelection'
import './medicalHistory.css'

class MedicalHistory extends Component{
     state={
        have:[{
                text:'无',
                id:0
            },{
                text:'有',
                id:1
            }],
        disease:[{
                text:'心脏病',
                id:0
            },
            {
                text:'冠心病',
                id:1
            },
            {
                text:'高血压',
                id:2
            },
            {
                text:'肩周炎',
                id:3
            },
            {
                text:'颈椎病',
                id:4
            },
            {
                text:'不知道',
                id:5
            }],
            index:0
    }
    render(){
        //console.log(this.props)
        let { have, disease } = this.state
        return(
            <div className="medixalBox"> 
                <h2>有无病史</h2>
                <div className="judge">
                    <SingleSelection dataS={ have } active={'active'} callback={this.callback}  />
                </div>
                {
                !!this.state.index&&<ul className="medical">
                    <MultiSelection dataM={ disease } chooseBg={ 'chooseBg' } callbackM={this.callbackM}></MultiSelection>
                </ul>
                }
                <Link to="/userInfo/allergy" className="nextStart">继续</Link>
            </div>
        )
    }
    callback=(index)=>{
        this.setState({
            index:index
        })
    }
    callbackM=(index)=>{
        this.props.dispatch({
            type:'collect_index',
            index
        })
    }
}
function mapStateToProps(state){
    console.log(state)
    return{
        index:state.medical
    }
}
export default connect(mapStateToProps,null)(MedicalHistory)