import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Router from '../../router/router'
import './hot.css'

class Hot extends Component {
  render() {
    return (
      <Fragment>
        <div className="hot-page">
          <h4>热歌榜</h4>
          {
            this.props.lists.map((item,index)=>{
              return(
                <dl key={item.id} onClick={()=>{this.playMusic(item.id)}}>
                  <dt><img src={item.img_url} alt="" /></dt>
                  <dd>
                    <h4>{item.Song}</h4>
                    <p>{item.singer}</p>
                    <img src="/images/icon/start.png" alt="" className="start"/>
                  </dd>
                </dl>
              )
            })
          }
        </div>
        <Router routes={this.props.childRoutes}></Router>
    </Fragment>
    )
  }
  componentDidMount(){
    this.props.dispatch({
        type:'get_data',
        url:'/data/lyricList.json',
        dataList:''
    })
  }
  playMusic=(id)=>{
    //console.log(id)
    this.props.dispatch({
        type:'choose_music',
        id
    })
    this.props.history.push('/hot/detailed')
  }
}
function mapStateToProps(state){
    return{
        lists:state.datas
    }
}
export default connect(mapStateToProps)(Hot);