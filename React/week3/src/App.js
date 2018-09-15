import React, { Component, Fragment } from 'react'
import Router from './router/router'
import routerConfig from './router/router.config'
import Left from './components/left/Left'
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Left />
        <div className="right">
          <Router routes={routerConfig.routes}></Router>
        </div>
      </Fragment>
    )
  }
}

export default App
