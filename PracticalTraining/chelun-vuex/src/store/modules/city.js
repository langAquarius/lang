import { getProvinceData, getCityData } from '../../api/index.js'

/**静态资源
 * getProvinceData ==> 省市数据
 * getCityData ==> 城市数据
 */
const state = {
    provinceData: [],
    cityData: []
}

const mutations = {
    provinceData: (state, payload) => {
        state.provinceData = payload;
    },
    cityData: (state, payload) => {
        state.cityData = payload;
    }
}

const actions = {
    getProvinceData({ commit }, payload) {
        getProvinceData().then(res => {
            console.log(res)
            commit('provinceData', res.data)
        })
    },
    getCityData({ commit }, payload) {
        getCityData(payload).then(res => {
            commit('cityData', res.data)
        })
    }
}

export default {
    state,
    mutations,
    actions
}