import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from  'react-redux'
import './footer.css'

class Footer extends Component {
  render() {
    return (
        <div className="footer">
            <NavLink to="/home"><img src="/images/icon/img_index.png" alt="" /><p>首页</p></NavLink>
            <NavLink to="/vip"><img src="/images/icon/img_vip.png" alt="" /><p>会员</p></NavLink>
            <NavLink to="/shopCar"><img src="/images/icon/img_shopping.png" alt="" />
              <p>购物车
                {!!this.props.sums&&<span className="sum">{this.props.sums}</span>}
              </p>
            </NavLink>
            <NavLink to="/me"><img src="/images/icon/img_my.png" alt="" /><p>我的</p></NavLink>
        </div>
    )
  }
}
function mapStateToProps(state){
  let sum = 0
  state.datas.product_list&&state.datas.product_list.products.map((item,ndex)=>{
    if(item.sell_out){
      sum += item.buy_permission   
    }
  })
  return {
    sums:sum
  }
}
export default connect(mapStateToProps,null,null,{pure:false})(Footer)