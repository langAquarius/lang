import React,{ Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import SingleSelection from '../../../components/singleSelection/SingleSelection'
import MultiSelection from '../../../components/MultiSelection'
import './allergy.css'

class Allergy extends Component{
     state={
        have:[{
                text:'无',
                id:0
            },{
                text:'有',
                id:1
            }],
        disease:[{
                text:'羊肉',
                id:0
            },
            {
                text:'海鲜',
                id:1
            },
            {
                text:'西芹',
                id:2
            },
            {
                text:'胡萝卜',
                id:3
            },
            {
                text:'香菜',
                id:4
            },
            {
                text:'韭菜',
                id:5
            }],
            index:0
    }
    render(){
        let { have, disease } = this.state
        return(
            <div className="allergyBox">
                <h2>有无过敏食物</h2>
                <div className="allergy">
                    <SingleSelection dataS={ have } active={'active'} callback={this.callback}/>
                </div>
                {
                !!this.state.index&&<ul className="food">
                    <MultiSelection dataM={ disease } chooseBg={ 'chooseBg' } ></MultiSelection>
                </ul>
                }
                <Link to="/userInfo/dislikeFood" className="nextStart">继续</Link>
            </div>
        )
    }
    callback=(index)=>{
        this.setState({
            index:index
        })
    }
}

export default Allergy