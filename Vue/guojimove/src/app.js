import './css/style.css'
import Swiper from './js/swiper.min.js'
import './css/swiper.min.css'


let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 2.5,
    spaceBetween: 5 //按container的百分比
})