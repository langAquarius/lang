import React, { Component } from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

class Router extends Component {
    render() {
        return (
            <Switch>
                {
                    this.props.config.map((item, index) => {
                        if (item.path === '/start/mine') {
                            let tel = localStorage.getItem("tel")
                            if (!tel) {
                                return <Redirect key={index} to='/login' />
                            } else {
                                return <item.component key={index} />
                            }
                        } else {
                            return <Route key={index} path={item.path} render={(location) => {
                                if (item.children) {
                                    return <item.component {...location} children={item.children} />
                                } else {
                                    return <item.component {...location} />
                                }
                            }} />
                        }
                    })
                }
                <Redirect from='/' to='/start/mine' />
            </Switch>
        )
    }
}

export default Router;