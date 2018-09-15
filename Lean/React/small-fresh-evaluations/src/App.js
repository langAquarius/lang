import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routerConfig from './router/router.config'
import Router from './router/router'
import Header from './components/Header'
import './App.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Header />
        </header>
        <section>
          <BrowserRouter>
            <Router routes={routerConfig.routes}></Router>
          </BrowserRouter>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
