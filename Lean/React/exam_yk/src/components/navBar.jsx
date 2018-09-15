import React, { Component } from 'react'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0
        }
    }
    render() {
        let { currentIndex } = this.state;
        return (
            <ul className='navBar'>
                {
                    this.props.navbar.map(item => {
                        return <li className={currentIndex === item.id ? 'bg' : ''} onClick={() => this.HandleChange(item.id)} key={item.id}>{item.name}</li>
                    })
                }
                {
                    this.props.children.map((item, index) => {
                        return <div className='box' key={index} style={{display: currentIndex === index ? 'block' : 'none'}}>{item}</div>
                    })
                }
            </ul>
        )
    }
    HandleChange(id) {
        this.setState({
            currentIndex: id
        })
    }
}

export default NavBar;