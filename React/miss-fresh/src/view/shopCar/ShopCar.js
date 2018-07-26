import React, { Component } from 'react'
import {connect} from 'react-redux'
import Calc from '../../components/calc/Calc'
import './shopCar.css'

class ShopCar extends Component {
  state = {
    flag:true
  }
  render() {
    let {lists} = this.props
    return (
      <section>
        <div className="shopCar-page">我的购物车</div>
        {
          lists&&lists.map((item,index)=>{
            return <dl className="products" key={item.stock+''}>
              <dt>
                <span className={this.state.flag ? "checked" : "check"} onClick={this.Check}></span>
                <img src={item.image} alt=""/>
              </dt>
              <dd>
                <p className="tit">{item.name}</p>
                <p className="subtitle">{item.subtitle}</p>
                <p><span className="vip-price">{item.vip_price_pro.price_down.price / 100}</span></p>
                <div className="addShopCar">
                  <Calc stock={item.stock} buy_permission={item.buy_permission} />
                </div>
              </dd>
            </dl>
          })
        }
        <div className="choose">
          <p><span className={this.state.flag?"checked-all":"check-all"} onClick={this.ckeckAll}>全选</span><span>合计：<b>¥{this.props.sum}</b></span></p>
          <p>去结算</p>
        </div>
      </section>
    )
  }
  Check=()=>{
    // this.setState({
    //   flag: !this.state.flag
    // })
    this.props.dispatch({
      type: 'checked',
      flag: true
    })
  }
  ckeckAll=()=>{
    // this.setState({
    //   flag:!this.state.flag
    // })
    this.props.dispatch({
      type:'checked_all',
      flag:true
    })
  }
}

function mapStateToProps(state){
  let arr = [],
      sum = 0
  state.datas.product_list&&state.datas.product_list.products.map((item,ndex)=>{
    if(item.sell_out){
      arr = [...arr,item]
      sum += item.buy_permission * item.vip_price_pro.price_down.price / 100
    }
  })
  sum = (sum+'').split('')
  if(sum.length>5){
    sum=sum.splice(0,5)
  }
  return {
    lists:arr,
    sum
  }
}
export default connect(mapStateToProps,null,null,{pure:false})(ShopCar);