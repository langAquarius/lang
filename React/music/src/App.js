import React, { Component } from 'react';
import Router from './router/router';
import routerConfig from './router/router.config';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><Header/><Nav/></header>
        <section>
          <Router routes={routerConfig.routes}></Router>
        </section>
      </div>
    )
  }
}

export default App;
