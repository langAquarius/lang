import Mock from 'mockjs';
export default Mock.mock({
    'sliderMenu': [{
        label: '主页',
        path: 'home',
        children: [{
                label: 'details',
                path: "details"
            },
            {
                label: 'operating',
                path: "operating"
            },
            {
                label: 'form',
                path: "form"
            }
        ]
    }, {
        label: '一级 2',
        children: [{
            label: '二级 2-1',
            children: [{
                label: '三级 2-1-1'
            }]
        }, {
            label: '二级 2-2',
            children: [{
                label: '三级 2-2-1'
            }]
        }]
    }, {
        label: '一级 3',
        children: [{
            label: '二级 3-1',
            children: [{
                label: '三级 3-1-1'
            }]
        }, {
            label: '二级 3-2',
            children: [{
                label: '三级 3-2-1'
            }]
        }]
    }]
});