import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Swiper from '../../../components/swiper/Swiper'
import Calc from '../../../components/calc/Calc'
import './homeDetail.css'

class HomeDetail extends Component {
    state = {
        img_url:'/images/banner/bg_1.gif'
    }
    render() {
        let { list } = this.props
        let products =  list.product_list&&list.product_list.products
        //console.log(products)
        return (
            <Fragment>
                <div className="hot-page">
                    <Swiper url={this.state.img_url}/>
                </div>
                <div className="product-list">
                {
                products&&products.map((item,index)=>{
                    if (item.type === 'group'){  
                        return <div className="titimg" key={index+''}><img src={item.banner&&item.banner[0].path}/></div>
                    }else{
                        return <dl className="products" key={item.stock+''}>
                            <dt><img src={item.image} alt=""/></dt>
                            <dd>
                                <p className="tit">{item.name}</p>
                                <p className="subtitle">{item.subtitle}</p>
                                <p><span className="vip-price">{item.vip_price_pro.price_down.price / 100}</span></p>
                                <div className="addShopCar">
                                    <img src="/images/icon/img_shopCar.png" alt="" onClick={() => { this.AddShop(item.stock) }} className={item.sell_out?'hidden':''}/>
                                    {item.sell_out && <Calc stock={item.stock} buy_permission={item.buy_permission}/>}
                                </div>
                            </dd>
                        </dl>
                    }
                })
                }
                </div>
            </Fragment>
        )
    }
    AddShop=(id)=>{
        this.props.dispatch({
            type:'add_shop',
            id
        })
    }
}

function mapStateToProps(state){
    return{
        list: state.datas
    }
}
export default connect(mapStateToProps,null,null,{pure:false})(HomeDetail);