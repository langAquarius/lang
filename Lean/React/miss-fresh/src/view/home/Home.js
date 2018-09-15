import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/header/Header'
import Nav from '../../components/nav/Nav'
import HomeDetail from './homeDetail/HomeDetail'
import './home.css'

class Home extends Component {
  render() {
    return (
        <Fragment>
            <header>
                <Header/>
                <Nav/>
            </header>
            <section>
                <HomeDetail/>
            </section>
        </Fragment>
    )
  }
  componentDidMount(){
      this.props.dispatch({
          type:'get_data',
          url:'/data/index.json',
          dataList:''
      })
  }
}
function mapStateToProps(state){
    return{
        datalist:state.data
    }
}
export default connect(mapStateToProps,null,null,{pure:false})(Home);