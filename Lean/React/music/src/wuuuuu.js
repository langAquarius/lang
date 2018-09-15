import React from 'react';
import Lyrac from './lyrac.jsx';
import '../scss/music.css';


export default class Music extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // 歌曲列表
            songs: [],
            // 播放到第几首歌曲
            current: 0,
            // 播放状态，ture表示播放，false表示暂停
            playState: false,
            // 播放时间
            currentTime: '00:00',
            // 播放毫秒数
            currentMs: 0,
            // 总时长
           
        };
        this.audio = null;
    }
    play(){
        if (this.audio){
            if (this.state.playState){
                //暂停
                this.refs.audio.pause();
            }else{
                //开始
                this.refs.audio.play();
            }
            console.log(this.refs.audio.currentTime);
            this.setState({
                playState: !this.state.playState,
                duration: this.formatTime(this.refs.audio.duration)
            })
        }
    }
    timeUpdate(e){
        // console.log('e...', e);
        this.setState({
            currentTime: this.formatTime(this.refs.audio.currentTime),
            currentMs: this.refs.audio.currentTime,
            progress: Math.floor(this.refs.audio.currentTime/this.refs.audio.duration*100)+'%'
        })

    }

    formatTime(sec){
        // 把秒数向上取整
        sec = Math.round(sec);
        let min = Math.floor(sec/60)+'';
        sec = sec%60+'';
        return min.padStart(2,'0')+':'+sec.padStart(2, '0')
    }

   
    render(){
        if (!this.state.songs.length){
            return null;
        }
        let song = this.state.songs[this.state.current];
        this.audio = <audio autoPlay="autoplay" src={song.src} loop ref="audio" onTimeUpdate={this.timeUpdate.bind(this)}></audio>

        return <div className="music">
            {this.audio}
            <p>{`${song.title} - ${song.author}` }</p>
            <img src={song.image} className={this.state.playState?'active':''}/>
            <Lyrac currentMs={this.state.currentMs}/>
            <div className="list">{
                this.state.songs.map((item,index)=>{
                    return <li key={index}>
                        <img src={item.image}/>
                        <div>
                            <p>{item.title}</p>
                            <p>{item.author}</p>
                        </div>
                    </li>
                })
            }</div>
        </div>
    }
}
