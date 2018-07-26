import { getCarDetailData } from '../../api/index.js'

/**静态资源
 * carDatailData ==> 汽车详情总数据
 * yearData ==> 年份降序排序后的数据
 * carData ==>  汽车list
 */
const state = {
    carDatailData: [],
    yearData: [],
    carData: {}
}

const mutations = {
    carDatailData: (state, payload) => {
        state.carDatailData = payload;
        /**
         * 按照年份筛选数据
         */
        let yearArr = [] //年份数据
        let carArr = { 'all': [] } //分类后的汽车信息
        payload.list.forEach((item, index) => {
            let year = item.market_attribute.year
            if (yearArr.indexOf(year) === -1) {
                yearArr.push(year)
                carArr[year] = [item]
            } else {
                carArr[year].push(item)
            }
            carArr['all'].push(item)
        });
        //年份列表
        state.yearData = yearArr;
        //降序排序
        let sortCar = (arr) => {
            return arr.sort((a, b) => {
                if (a.exhaust < b.exhaust) {
                    return -1;
                } else if (a.exhaust > b.exhaust) {
                    return 1;
                } else {
                    if (a.max_power < b.max_power) {
                        return -1;
                    } else if (a.max_power > b.max_power) {
                        return 1;
                    } else {
                        return b.inhale_type - a.inhale_type;
                    }
                }
            })
        }
        for (let i in carArr) {
            carArr[i] = sortCar(carArr[i]);
        }
        //汽车列表
        state.carData = carArr
        console.log(state.carData)
    },
}

const actions = {
    getCarDetailData({ commit }, payload) {
        getCarDetailData(payload).then(res => {
            commit('carDatailData', res.data)
        })
    }
}

export default {
    state,
    mutations,
    actions
}