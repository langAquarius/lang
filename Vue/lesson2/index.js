// 1、Number.isInfinte();
//判断一个数是否是有限的，并且只能接受数值类型，其他类型一律返回false

// 2、Number.isNaN()
//判断一个数是否是非数值(NaN)

// console.log(Number.isNaN("123"));
// 3、Number.isInteger()用来判断一个值是否为整数
// 坑: 所有的整数保存形式都是以小数形式保存的。
// 1.1
// 1.2
// 1.9
// 2.0
// console.log(Number.isInteger(2.0)); //true

//es6设置形参默认值
// function test(val="hello1"){
// 	//es5 形参设置默认值
// 	// var val = val||"hello1"
// 	console.log(val);
// }

// test();


// let val1 =  val2;
// var val2 = 123;
// console.log(val1);

//传参的优先级大于默认值！
// function test(val1=val2,val2="123"){
// 	console.log(val1);
// 	console.log(val2);
// }
// test("12332132");

//javascript 弱类型的语言
//js中 function  函数
//后端语言中 function  方法

// //函数
// function test1(){

// }
// //构造函数
// function Test2(){

// }

// let [a,b,c] = [1,2,4]
// let {x,y} = {x:1,y:2}
// console.log(x);
// console.log(y);
// es6 let {}  let[] 这种解构赋值的写法，它叫做模式
// let [a,b] = [,]
// console.log(a);
// console.log(b);

// let {x,y} = {};
// console.log(x);
// console.log(y);

// //es5
// let x;
// let y；
// console.log(x);
// console.log(y);


class Test {
	//是类的构造函数
    constructor({ name, age, address, tel }) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.tel = tel;
    }
    init() {
        // console.log(this.name);
        // console.log(this.age);
        // console.log(this.address);
        // console.log(this.tel);
    }
}
let test = new Test({
    name: "1512",
    age: 1,
    address: "beijing bawei",
    tel: "010-7622400"
});
test.init();

// 构造函数为了模拟类的功能
// function Test({ name, age, address, tel }) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.tel = tel;

// }
// Test.prototype.init = function() {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.address);
//     console.log(this.tel);
// }


// es6
// 箭头函数一个形参可以不加括号，一个以上的形参必须加括号
// 箭头函数只有返回结果可以省略{}
// 简写
// let test = val=>1;
// //标准写法
// let test = (val)=>{
// 	return 1;
// }
// //es5写法
// var test = function(val){
// 	return 1;
// }
// es5 arguments
// let test1 = function(){
// 	console.log(arguments[2]);
// }
// test1(1,2,3);
// es6 reset参数来替代 arguments
// let test1 = (...arg)=>{
// 	console.log(arg);
// }
// test1(1,2,3);
// a 报错
// b undefined
// c 1
// console.log(test());
// let test = (val1,val2)=>{
// }

//nodejs中顶层对象是 global
//浏览器中顶层对象是 window
// var a = 1;
// console.log(window.a);

//扩展运算符 ...
//概念: 将 nodelist这类的伪数组或者类数组，及可以遍历对象包括es6里面的 set、map 数据类型的对象转换为数组
//伪数组不能使用数组的方法！！！！！！！！！！！
// let divs = document.getElementsByTagName("div");


// [...divs].forEach(function(item,index,arr){
// 	console.log(item);
// });

// for(var i=0;i<divs.length;i++){
// 	console.log(divs[i]);
// };
// es6 合并数组

//扩展运算符合并数组，合并字符串,不能合并对象
let txt1 = "123";
let txt2 = "345";
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let obj1 = {name:"haonan"};
let obj2 = {age:15};
// let arr3 = arr1.push(...arr2);
let arr4 = [...obj1,...obj2];
console.log(arr4);
//原数组被修改
// console.log(arr1);
//没有变化
// console.log(arr2);
//返回新数组的长度
// console.log(arr3);
