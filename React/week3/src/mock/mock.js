import Mock from 'mockjs'
//const Mock = require('mockjs')

let data = []
for (let i=0; i<=100; i++){
    let lists = Mock.mock({
        'key':i,
        'name':'@cname',
        'age':'@natural(18, 58)',
        'address':'@county(true)'
    })
    data = [...data,lists]
}
// 输出结果
// console.log(data)
export default data