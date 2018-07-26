import React, { Component, Fragment } from 'react'
import Router from '../../router'
import Headers from '../../components/headers'
import Footers from '../../components/footers'

class Start extends Component {
    render() {
        return (
            <Fragment>
                <Headers />
                <section>
                    <Router config={this.props.children} />
                </section>
                <Footers />
            </Fragment>
        )
    }
}
export default Start;