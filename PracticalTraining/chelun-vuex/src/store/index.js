import Vue from 'vue'
import Vuex from 'vuex'
import carlist from './modules/carlist.js'
import detail from './modules/detail.js'
import picture from './modules/picture.js'
import price from './modules/price.js'
import city from './modules/city.js'
import color from './modules/color.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        carlist,
        detail,
        picture,
        color,
        price,
        city
    }
})