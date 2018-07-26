import Index from '@/components/index.vue'
import Detail from '@/components/detail/Detail'
import EnquirePrice from '@/components/detail/enquirePrice/EnquirePrice'
import Picture from '@/components/picture/Picture'
import AllPicture from '@/components/picture/allP/AllP'
import Color from '@/components/picture/color/Color'
import Filters from '@/components/filter/Filter'
import City from '@/components/city/City'

//let Detail = () => { import ('@/components/detail/Detail') }
let routes = [{
    path: '/',
    name: 'Index',
    component: Index
}, {
    path: '/detail',
    name: 'Detail',
    component: Detail
}, {
    path: '/detail/price',
    name: 'EnquirePrice',
    component: EnquirePrice
}, {
    path: '/picture',
    name: 'Picture',
    component: Picture
}, {
    path: '/picture/color',
    name: 'Color',
    component: Color
}, {
    path: '/picture/all',
    name: 'AllPicture',
    component: AllPicture
}, {
    path: '/enquirePrice/filters',
    name: 'Filters',
    component: Filters
}, {
    path: '/enquirePrice/city',
    name: 'City',
    component: City
}];




export default routes