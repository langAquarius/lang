import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './config';
import routers from './config/router.config'
import './static/font/iconfont.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <span className="span"><i className="icon iconfont icon-angle-left" />返回</span>
          <span className="mid">新鲜智造</span>
          <i className="icon iconfont icon-gengduo span" />
        </header>
        <BrowserRouter>
          <Router routes={routers.routes} ></Router>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
