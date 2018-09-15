import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { LIST_DATA, TOGGLE, ADD, MINUS } from '../../store/action/action'

class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <div className="banner">
                    <img src="/images/img1.png" alt="" />
                </div>
                <p className='milk'>
                    <b>乐纯三三三倍酸奶·经典 135g</b>
                    <span>三倍鲜牛奶·三倍乳酸菌·三倍优质蛋白</span>
                </p>
                <div className='list-wrap'>
                    {
                        this.props.list.map(item => {
                            return (
                                <dl key={item.id}>
                                    <dt><img src={item.url} alt="" /></dt>
                                    <dd>
                                        <b>{item.title}</b>
                                        <span>{item.describe}</span>
                                        <span className='price'>￥{item.price}/盒</span>
                                        <img style={{ display: item.ischeck ? 'none' : 'block' }} onClick={() => this.toggle(item.id)} src="/images/img6.png" alt="" />
                                        {
                                            item.ischeck && <p className='bar'>
                                                <span onClick={() => this.minus(item.id)} className='minus'>-</span>
                                                <span className='count'>{item.count}</span>
                                                <span onClick={() => this.add(item.id)} className='add'>+</span>
                                            </p>
                                        }
                                    </dd>
                                </dl>
                            )
                        })
                    }
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.dispatchListData()
    }
    toggle(id) {
        this.props.dispatchToggle(id)
    }
    add(id) {
        this.props.dispatchAdd(id)
    }
    minus(id) {
        this.props.dispatchMinus(id)
    }
}
function mapStateToProps(state) {
    return {
        list: state.list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatchListData() {
            fetch('/data/data.json').then(res => res.json()).then(result => {
                dispatch({
                    type: LIST_DATA,
                    payload: result
                })
            })
        },
        dispatchToggle(id) {
            dispatch({
                type: TOGGLE,
                id
            })
        },
        dispatchAdd(id) {
            dispatch({
                type: ADD,
                id
            })
        },
        dispatchMinus(id) {
            dispatch({
                type: MINUS,
                id
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);