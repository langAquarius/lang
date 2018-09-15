// es6面向对象动态创建分页器
// 用的知识：
// class  return 字符串模板语言  数组方法
class Pagination {
    constructor(id) {
        this.wrap = this.$(id);
        this.nodes = [];
        this.init();
        this.size = 0;
        this.flag = 0;
    }
    $(id) {
        return document.getElementById(id);
    }
    init() {
        //创建数据条数
        this.cInformation(400);
        //创建下拉菜单
        this.cSelect();
        //创建分页器
        this.cPagination();
        //将创建的节点绑定到挂载元素
        this.nodes.map((item) => {
            this.wrap.append(item);
        });
        this.addEvent();

    }
    addEvent() {
        let oLeft = document.body.querySelectorAll("em")[0];
        let oRight = document.body.querySelectorAll("em")[1];
        let oLis = document.body.querySelectorAll("li");

        //addEventLinsenter 存在作用域  function中 this 指代的是 oLeft 
        oRight.addEventListener("click", () => {
            ++this.flag;
            if (this.flag > 4) return;
            [...oLis].map((item, index) => {
                item.className = "";

                if (index == this.flag) {
                    item.className = "act"
                }
            });
        });
        oLeft.addEventListener("click", () => {
            --this.flag;
            if (this.flag < 0) return;
            [...oLis].map((item, index) => {
                item.className = "";

                if (index == this.flag) {
                    item.className = "act"
                }
            });
        });
    }
    //创建数据条数
    cInformation(count) {
        let oDiv = document.createElement("div");
        let oSpan = document.createElement("span");
        let str = `共${count}条`;
        oSpan.innerHTML = str;
        oDiv.className = "col-xs-2 page-info";
        oDiv.append(oSpan);
        this.nodes.push(oDiv);
    }
    //创建下拉菜单
    cSelect() {
        let oDiv = document.createElement("div");
        let oSelect = document.createElement("select");
        let oPtions = this.getOptions();
        oPtions.map((item, index) => {
            oSelect.options.add(item);
        });
        oDiv.className = "col-xs-2 page-select";
        oDiv.append(oSelect);
        this.nodes.push(oDiv);
    }
    //创建分页器
    //size  分页器显示数字的个数
    cPagination(size = 5) {
        let oDiv = document.createElement("div");
        let oLeft = document.createElement("em");
        let oRight = document.createElement("em");
        let oul = document.createElement("ul");
        let olis = this.cPageSize(size);
        //循环li插入到ul当中去
        olis.map(item => {
            oul.append(item);
        });
        olis[0].className = "act";
        oLeft.className = "col-xs-1 bd1 text-center pl5 pr5";
        oRight.className = "col-xs-1 bd1 text-center pl5 pr5";
        oul.className = "col-xs-10 text-center";
        oDiv.className = "col-xs-8 clearfix page";

        //插入图标
        oLeft.append(this.cPageIcon("left"));
        oRight.append(this.cPageIcon("right"));

        oDiv.append(oLeft);
        oDiv.append(oul);
        oDiv.append(oRight);

        this.nodes.push(oDiv);
    }
    //动态创建分页器按钮
    cPageSize(size) {
        this.size = size;
        let temp = [];
        for (let i = 0; i < size; i++) {
            let oli = document.createElement("li");
            oli.innerHTML = i + 1;
            temp.push(oli);
        }
        return temp;
    }
    //动态创建分页器按钮
    //dir 代表 directive 方向
    //三元表达式 判断方向，设置矢量字体图标的按钮的样式
    cPageIcon(dir) {
        let i = document.createElement("i");
        i.className = dir == "left" ? "fa f18 fa-angle-left" : "fa f18 fa-angle-right";
        return i;
    }
    //创建下拉菜单option
    getOptions() {
        let temp = [];
        for (let i = 0; i < 5; i++) {
            let j = i + 1;
            let option = new Option(`${j*100}条/页`, j);
            temp.push(option);
        }
        return temp;
    }
}