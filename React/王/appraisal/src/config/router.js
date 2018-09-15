import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

class Router extends Component{
    render(){
        return (
                <Switch>
                    <Route exact path="/" render={()=>{
                        return <Redirect to="/start"></Redirect>
                    }}></Route>
                    <Route exact path="/info" render={()=> {
                        return <Redirect to="/info/sex"></Redirect>
                    }}></Route>
                    {
                        this.props.routes.map((item, index) => {
                            return <Route path={item.path} key={index} render={(a) => {
                                if (item.children) {
                                    return <item.component {...a} child={item.children} />
                                } else {
                                    return <item.component {...a} />
                                }
                            }} ></Route>
                        })
                    }
                </Switch>
        )
    }
}

export default Router