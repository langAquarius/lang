import Vue from "vue/dist/vue.js"
import "./src/js/echarts.min.js"
import "./src/css/style.css";


new Vue({
    el: '#app',
    data: {
        lists: [
            '事件台态势', '传播途径'
        ],
        index: 0
    },
    // mounted() {
    //     let myChart = echarts.init(document.getElementById('main'))
    //     option = {
    //         xAxis: {
    //             type: 'category',
    //             data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //         },
    //         yAxis: {
    //             type: 'value'
    //         },
    //         series: [{
    //             data: [820, 932, 901, 934, 1290, 1330, 1320],
    //             type: 'line'
    //         }]
    //     }
    //     myChart.setOption(option);
    // },
    methods: {
        tab(idx) {
            this.index = idx;

            this.$refs.contentBox.style.left = -idx * 100 + '%';

        }
    }
})