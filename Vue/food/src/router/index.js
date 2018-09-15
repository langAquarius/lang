import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import GI from '@/components/Gi'
import foodExchange from '@/components/FoodExchange'
import foodComponent from '@/components/FoodComponent'
import energyConsumption from '@/components/EnergyConsumption'
import BIM from '@/components/BIM'
import Grain from '@/components/childrens/Cgi'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/GI',
        name: 'GI',
        component: GI,
        children: [{
            path: '/Grain/:id',
            name: 'Grain',
            component: Grain,
        }, {
            path: '/GI',
            redirect: '/Grain/Grain'
        }]
    }, {
        path: '/foodExchange',
        name: 'foodExchange',
        component: foodExchange
    }, {
        path: '/foodComponent',
        name: 'foodComponent',
        component: foodComponent
    }, {
        path: '/energyConsumption',
        name: 'energyConsumption',
        component: energyConsumption
    }, {
        path: '/BIM',
        name: 'BIM',
        component: BIM
    }]
})