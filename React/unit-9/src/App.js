import React, { Component, Fragment } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Form from './components/form/Form'
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <header><Header/></header>
        <section><Nav/><Form/></section>
        <footer></footer>
      </Fragment>
    );
  }
}
export default App
