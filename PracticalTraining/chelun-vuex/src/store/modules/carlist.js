import { getCarBrandData, getMasterBrandData } from '../../api/index.js'
// import * as common from '../../api/index.js'

// let getCarBrandData = common.getCarBrandData
// let getMasterBrandList = common.getMasterBrandList

/**静态资源
 * carBrandData ==> 整体列表数据
 * masterBrandeData ==> 品牌列表数据
 * letterData ==>  首字母
 * showMaster ==> 添加显示品牌列表类名
 */
const state = {
    carBrandData: [],
    masterBrandeData: [],
    letterData: []
}

/**
 * Vuex 更改state的唯一方法（同步与commit为一套机制）
 * 通过提交 mutation 的方式，而非直接改变 store.state
 * 每个mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)
 */
const mutations = {
    carBrandData: (state, payload) => {
        state.carBrandData = payload
        state.carBrandData.map(item => {
            let N = item.Spelling.slice(0, 1)
            if (state.letterData.indexOf(N) === -1) {
                state.letterData.push(N)
            }
        })
    },
    masterBrandeData: (state, payload) => {
        state.masterBrandeData = payload
    },
}

/**
 * action与dispatch一套机制
 * Vuex(相当与redux的redux-thunk中间件)（异步）
 * 可以异步请求数据
 * Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
 *        因此你可以调用 context.commit 提交一个 mutation，
 *        或者通过 context.state 和 context.getters 来获取 state 和 getters。
 *        Action 通过 store.dispatch 方法触发：
 */
const actions = {
    getCarBrandData({ commit }, payload) {
        getCarBrandData().then(res => {
            commit('carBrandData', res.data)
        })
    },
    getMasterBrandData({ commit }, payload) {
        getMasterBrandData(payload).then(res => {
            commit('masterBrandeData', res.data)
        })
    }
}

export default {
    state,
    mutations,
    actions
}