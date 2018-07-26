import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { SHOP_CAR_DATA, ADD, MINUS } from '../../../store/action/action'

class Shopcar extends Component {
    render() {
        return (
            <div className='mask'>
                <div className='shopcar'>
                    <p><Link to='/start/home'><img src="/images/img7.png" alt=""/></Link> 小伙伴，选购商品满90元起送噢</p>
                    <ul>
                        {
                            this.props.list.map(item => {
                                return (
                                    <li key={item.id}>
                                        <p>{item.title}</p>
                                        <p>
                                            <span onClick={() => this.minus(item.id)} className='minus'>-</span>
                                            <span className='count'>{item.count}</span>
                                            <span onClick={() => this.add(item.id)} className='add'>+</span>
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='shopbox'>
                        <p><span>{this.props.count}盒商品</span><span className='pri'>合计：￥{this.props.total}</span></p>
                        <button>结算</button>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.dispatchShopcar()
    }
    add(id) {
        this.props.dispatchAdd(id)
    }
    minus(id) {
        this.props.dispatchMinus(id)
    }
}
function mapStateToProps(state) {
    let data = state.list;
    let count = 0;
    let total = 0;
    data.map(item => {
        count += item.count;
        total += item.count * item.price
    })
    return {
        list: state.list,
        count,
        total
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatchShopcar() {
            dispatch({
                type: SHOP_CAR_DATA
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
export default connect(mapStateToProps, mapDispatchToProps)(Shopcar);