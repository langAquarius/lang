import React,{ Component } from 'react';
import { Link } from 'react-router-dom'
import './start.css'
import Header from '../../components/header'

class Start extends Component{
    render(){
        return <div className="start">
            <Header>小鲜测评</Header>
            <p>
                <img src="./img/1.gif" alt=""/>
                <Link to="/info"></Link>
            </p>  
        </div>
    }
}

export default Start;
