import { getPictureColorData } from '../../api/index.js'

/**静态资源
 * pictureData ==> 图片数据
 */
const state = {
    PictureColorData: {},
    colorList: [],
    year: null
}

const mutations = {
    PictureColorData: (state, payload) => {
        state.pictureData = payload;
        for (let keys in state.PictureColorData) {
            state.yearData.push(keys)
            this.year = [keys]
        }
        this.yearList.sort((a, b) => {
            return b - a
        })
    }
}

const actions = {
    getPictureColorData({ commit }, payload) {
        getPictureColorData(payload).then(res => {
            commit('PictureColorData', res.data)
        })
    }
}


export default {
    state,
    mutations,
    actions
}