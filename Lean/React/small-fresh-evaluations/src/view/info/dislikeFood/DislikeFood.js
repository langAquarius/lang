import React,{ Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import SingleSelection from '../../../components/singleSelection/SingleSelection'
import MultiSelection from '../../../components/MultiSelection'
import './dislikeFood.css'

class DislikeFood extends Component{
    state={
        dislike:[{
                text:'羊肉',
                id:0
            },
            {
                text:'洋葱',
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
                text:'西瓜',
                id:5
            },
            {
                text:'西红柿',
                id:6
            },{
                text:'苹果',
                id:7
            },{
                text:'香蕉',
                id:8
            },{
                text:'水蜜桃',
                id:9
            }]
    }
    render(){
        let { dislike } = this.state
        return(
            <div className="dislikeBox">
                <h2>不喜欢吃的食物</h2>
                {
                <ul className="dislikeFood">
                    <MultiSelection dataM={ dislike } chooseBg={ 'chooseBg' } ><span>111</span></MultiSelection>
                </ul>
                }
                <Link to="/feeling" className="nextStart">继续</Link>
            </div>
        )
    }
}

export default DislikeFood