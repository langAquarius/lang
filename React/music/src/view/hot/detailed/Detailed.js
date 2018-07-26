import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Lyric from '../../../components/lyric/Lyric'
import './detailed.css'

class Detailed extends Component {
    state = {
        list:[],
        // 播放时间
        currentTime: '00:00',
        // 播放毫秒数
        currentMs: 0,
        // 总时长
        duration: '0'
    }
    render() {
        let { list } = this.state
        //console.log(this.state.list)
        return (
            <div className="detailed-page">
                <div className="header"><Link to="/hot" onClick={this.remove}>返回</Link><h4>歌曲详情</h4><h4></h4></div>
                {
                    list.map((val,k)=>{
                        //console.log(val.music_url)
                        return <div className="detailed-box" key={val.id}>
                            <div className="play_pause" >
                                <img src={val.img_url} alt=""/>
                            </div>
                            <audio controls autoPlay loop>
                                <source src={val.music_url}/>
                            </audio>
                            <h3>{val.Song}</h3>
                            <p>{val.singer}</p>
                        </div>         
                    }) 
                }
                <Lyric list={list} cbT={this.Duration}/>
            </div>
        )
    }
    componentDidMount(){
        let { list } = this.state
        if (sessionStorage.getItem('list')){
            this.setState({
                list: [...list, JSON.parse(sessionStorage.getItem('list'))]
            })
        }else{
            this.setState({
                list: this.props.list
            })
        }
        
    }
    Duration=(times)=>{
        this.setState({
            duration: times
        })
    }
    remove=()=>{
        sessionStorage.removeItem('list')
    }
}
function mapStateToProps(state) {
    let playMusic = []
    state.datas.map((items,index)=>{
        //console.log(items.play)
        if(items.play){
            playMusic = [...playMusic,items] 
        }
    })
    return {
        list: playMusic
    }
}
export default connect(mapStateToProps)(Detailed)