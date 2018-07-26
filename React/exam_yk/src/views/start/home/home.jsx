import React, { Component } from 'react'
import './style.css'
import NavBar from '../../../components/navBar'
import Choose from '../../../components/nav/choose'
import Delicate from '../../../components/nav/delicate'
import Family from '../../../components/nav/family'
import Suit from '../../../components/nav/suit'
import Welfare from '../../../components/nav/welfare'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navBar: []
        }
    }
    render() {
        return (
            <div>
                <NavBar navbar={this.state.navBar}>
                    <Choose />
                    <Delicate />
                    <Family />
                    <Suit />
                    <Welfare />
                </NavBar>
            </div>
        )
    }
    componentDidMount() {
        fetch('/data/nav.json').then(res => res.json()).then(result => {
            this.setState({
                navBar: result
            })
        })
    }
}
export default Home;