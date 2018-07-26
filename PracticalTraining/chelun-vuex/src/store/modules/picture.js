import { getPictureData, getPictureAllData } from '../../api/index.js'

/**静态资源
 * pictureData ==> 图片数据
 */
const state = {
    pictureData: [],
    pictureAllData: {},
    List: []
}

const mutations = {
    pictureData: (state, payload) => {
        state.pictureData = payload;
    },
    pictureAllData: (state, payload) => {
        state.pictureAllData = payload
        state.List = [...state.List, ...payload.List];
    }
}

const actions = {
    getPictureData({ commit }, payload) {
        getPictureData(payload).then(res => {
            commit('pictureData', res.data)
        })
    },
    getPictureAllData({ commit }, payload) {
        getPictureAllData(payload.all, payload.page).then(res => {
            commit('pictureAllData', res.data)
        })
    }
}


export default {
    state,
    mutations,
    actions
}