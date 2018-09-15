import React, { Component, Fragment } from 'react'
import Router from './router/router'
import routerConfig from './router/router.config'
import Footer from './components/footer/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <header></header>
        <section><Router routes={routerConfig.routes}></Router></section>
        <footer><Footer/></footer>
      </Fragment>
    )
  }
}

export default App
