import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux'
import Header from '../../components/header'
import Redio from '../../components/redio'
import './feel.css'
class Feel extends Component {
    render() {
        let {data} = this.props
        return <div className="feel">
            <Header>你感觉?</Header>
            <div className="questions">
                {
                    data&&data.map((item,index)=>{
                        return <Fragment key={index}>
                            <div className="tit">
                              {item.question}
                            </div>
                            <div className="list">
                                <Redio activeClass={'activeClass'} ind={index} callback={this.callback}>
                                {item.select.map((item, ind) => {
                                    return <Fragment key={ind} >{item}</Fragment>
                                  }
                                )}
                              </Redio>
                            </div>
                          </Fragment>;
                    })
                }
            </div>
        </div>
    }
    callback=(a,b)=>{
        this.props.dispatch({
            type:"REDIO_SS",
            payload:a,
            parentInd:b
        })
    }
    componentWillMount(){
        this.props.dispatch({
            type:'GETDATA_D',
            payload:'',
            url:'data/data.json'
        })
    }
}
function mapStateToProps(state){
    return {
        data:state.data
    }
}
export default connect(mapStateToProps)(Feel);
