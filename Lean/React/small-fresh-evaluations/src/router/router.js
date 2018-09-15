import React,{ Component } from 'react'
import { Switch , Route, Redirect } from 'react-router-dom';

class Router extends Component{
    render(){
        //console.log(this.props)
        //let {routes} = this.props
        return( 
            <Switch>
            {
            this.props.routes.map((item, index) => {
                //console.log(item)
                return <Route path={item.path} render={(location) => {
                    if (item.children) {
                        return <item.component {...location} childRoutes={item.children} />
                    } else {
                        return <item.component {...location} />
                    }
                }} key={index}></Route>
            })    
            }
            <Redirect to="/start" />
            </Switch>
        )
    }
}
export default Router