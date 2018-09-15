import React, { Component } from 'react';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import './swiper.css'

class Banner extends Component {
    render() {
        return (
            <div className='banner'>
                <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                        <div className='swiper-slide'><img src={this.props.url} alt="" /></div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        new Swiper('.swiper-container', {
            direction: 'horizontal',
            autoplay: true,
            autoplayDisableOnInteraction:false,
            //slidesPerView :1.05,
            //loop : true,
            pagination: {
            el: '.swiper-pagination',
                //type: 'bullets',
                type: 'fraction',
                //type : 'progressbar',
                //type : 'custom',
            },
            paginationClickable: true
        })
    }
}

export default Banner;