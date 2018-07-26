import Index from '@/components/Index'
import CarDetail from '@/components/carlist/detail/CarDetail'
import Picture from '@/components/carlist/picture/Picture'
import PictureAll from '@/components/carlist/picture/PictureAll'
import Color from '@/components/carlist/picture/color/Color'
import Price from '@/components/carlist/price/Price'
import EnquirePrice from '@/components/carlist/price/detail/EnquirePrice'
import Province from '@/components/carlist/city/Province'

let routes = [{
    path: '/',
    name: 'Index',
    component: Index
}, {
    path: '/masterBrand/detail',
    name: 'CarDetail',
    component: CarDetail
}, {
    path: '/picture',
    name: 'Picture',
    component: Picture
}, {
    path: '/picture/all',
    name: 'PictureAll',
    component: PictureAll
}, {
    path: '/picture/color',
    name: 'Color',
    component: Color
}, {
    path: '/detail/price',
    name: 'Price',
    component: Price
}, {
    path: '/detail/EnquirePrice',
    name: 'EnquirePrice',
    component: EnquirePrice
}, {
    path: '/enquirePrice/city',
    name: 'Province',
    component: Province
}]

export default routes