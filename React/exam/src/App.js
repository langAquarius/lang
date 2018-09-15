import React, { Component, Fragment } from 'react'
import Router from './router/router'
import routerConfig from './router/router.config'
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
       <Router routes={routerConfig.routes}></Router>
      </Fragment>
    )
  }
}

export default App
