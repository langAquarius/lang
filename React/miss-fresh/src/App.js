import React, { Component } from 'react';
import Router from './router/router'
import routerConfig from './router/router.config'
import Footer from './components/footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router routes={routerConfig.routes}></Router>
        <footer><Footer/></footer>
      </div>
    )
  }
}

export default App;
