import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/children/Home'
import Address from '@/components/children/Address'
import Find from '@/components/children/Find'
import Play from '@/components/children/Play'
import Me from '@/components/children/Me'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home

    }, {
        path: '/Home',
        name: 'Home',
        component: Home

    }, {
        path: '/Address',
        name: 'Address',
        component: Address
    }, {
        path: '/Find',
        name: 'Find',
        component: Find
    }, {
        path: '/Play',
        name: 'Play',
        component: Play
    }, {
        path: '/Me',
        name: 'Me',
        component: Me
    }]
})