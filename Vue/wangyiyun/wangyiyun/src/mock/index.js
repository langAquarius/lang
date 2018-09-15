import MusicList from './data/music' //引入数据
import axios from 'axios'
import mockAdapter from 'axios-mock-adapter' //ajax请求数据


let mock = new mockAdapter(axios) //实例化对象

mock.onGet("/resoected").reply(200, MusicList) //通过mocks.onGet发送请求  通过reply返回成功回调函数s