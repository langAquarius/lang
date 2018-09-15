import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

class Lyric extends Component {
    state = {
        listText:[],
        listTime:[]
    }
    render() {
        //console.log(this.props.list)
        let { listText } = this.state
        //console.log(listText)
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                {
                    listText.map((lyric1,idx)=>{
                        return <div className="swiper-slide" key={idx + ''}>{lyric1.text}</div>
                    })
                }
                </div>
            </div>
        )
    }
    componentDidMount(){
        let list = [JSON.parse(sessionStorage.getItem('list'))]
        let msT = 0
        let textArr = []
        let timeArr = []
        list.map((item,index)=>{
            let arrtimes = []
            let arrtext = []
            let lyric = item.lyric.split('↵')
            lyric.map((val,k)=>{
                // 把每一行歌词通过]转化为数组
                let arr = val.trim().split(']');
                // console.log(item, arr.length, arr[0]);
                if (!arr[1]){
                    let preTime = arr[0];
                    // console.log(lyric[k+1])
                    if (lyric[k+1]){
                        arr = lyric[k + 1].trim().split(']');
                        arr[0] = preTime;
                    }else{
                        return;
                    }
                }
                console.log('arr...', arr);
                // 通过arr[2]过滤掉不合理的歌词
                if (arr.length ===2){
                    //把时间追加到数组中
                    arr[0] = arr[0].replace('[', '').replace('.', ':')
                    let time = arr[0].split(':')
                    // console.log(nums);
                    // 计算歌词开始时间节点
                    let ms = time[0]*60000+time[1]*1000+time[2]*10
                    //将时间追加到时间数组中
                    arrtimes = [...arrtimes,ms]
                    //把歌词追加到歌词文本数组中
                    arrtext = [...arrtext,{time:ms, text:arr[1]}]
                    //歌曲总时长
                    msT = ms
                }
            })  
            textArr = [...arrtext]
            timeArr = [...arrtimes]
        })
        timeArr.sort((a, b)=>{
            return a-b;
        })
        textArr.sort((a, b)=>{
            return a.time-b.time
        })
        //console.log(msT)
        this.props.cbT(msT)
        this.setState({
            listText:textArr,
            listTime:timeArr
        }, ()=>{
            //console.log(this.state);
            new Swiper('.swiper-container', {
                direction: 'vertical',
                autoplay: true
            })
        })
    }
}
function mapStateToProps(state){
    return{}
}
export default connect(mapStateToProps,null,null,{pure:false})(Lyric);
