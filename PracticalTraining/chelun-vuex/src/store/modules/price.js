import { getPriceData } from '../../api/index.js'

/**静态资源
 * priceData ==> 询问底价数据
 */
const state = {
    priceData: []
}

const mutations = {
    priceData: (state, payload) => {
        console.log(payload)
        state.priceData = payload;
    }
}

const actions = {
    getPriceData({ commit }, payload) {
        getPriceData(payload).then(res => {
            commit('priceData', res.data)
        })
    }
}

export default {
    state,
    mutations,
    actions
}