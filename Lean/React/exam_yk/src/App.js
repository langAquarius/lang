import React, { Component } from 'react';
import './App.css';
import './icon/iconfont.css'
import config from './router/router.config'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router config={config.routes} />
      </BrowserRouter>
    );
  }
}

export default App;
