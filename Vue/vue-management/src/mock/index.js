// 1.拦截数据请求
// 2.数据生成
// 3.将mock数据返回给拦截到的那个数据请求

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import loginmock from './data/login';
const mock = new MockAdapter(axios);

mock.onPost('/login').reply((config) => {
    let username = config.parmas.username;
    let password = config.parmas.password;

    return new Promise((resolve, reject) => {
        loginmock.User.find((v) => {
            if (v.UserName === username && v.PassWord === password) {
                resolve([200, v]);
            } else {
                const err = '用户信息输入错误';
                reject([404, err]);
            }
        });
    });
});