// let account = {
//     username: null,
//     passsword: null
// }

// for (let i = 0; i < 10; i++) {
// 	let account = {}
//     account.username = "user" + i;
//     account.passsword = "pswd" + i;
//     console.log(account);
// };

// es5
// var test = function(){

// }
// function test(){

// }
// es6 箭头函数来声明变量
//箭头函数的默认值
// var test = (val)=>{
// 	var val =  val||666;
// 	console.log(val);
// }
// test(888);


// function test(val1=666,val2=888){
// 	console.log(val1);
// 	console.log(val2);
// }
// test();
// 
// function test(val1=123,val2=val1){
// 	console.log(val1);
// 	console.log(val2);
// }
// test();

// 1 函数默认值的优先级低于传值
// 2 形参不够能先调用，存在暂时性死区
// 3 函数内声明的私有变量，不能与形参相同(es6),报错，重复定义变量了

// let test = (val1 = val2, val2 = 123) => {
//     console.log(val1);
//     console.log(val2);
// }
// test();

// 456，123
// 123，123
// 456，456
// 报错

// let test = (val1, val2) => {
// 	//函数体中的变量与形参不能够同名，同名会存在重复定义变量-报错

// 	let  val3 = 123;
//     if (val1=="hello") {
//     	// {}遇到es6语法，存在封闭作用域
//     	//   私有变量特性，可以访问外部，外部不能内部
//     	//  当前if{}里面的 val1 是一个私有变量
//         let val1 = 123;
//     }
//     console.log(val1);
//     console.log(val2);
// }
// test("hello", "world");


// let  test = (val1=111,val2=3)=>{
// 	//1,undefined
// 	//1,3
// 	//6,3
// 	console.log(val1,val2);
// }
// // test(1,2);
// // test(1);
// test(56,78);


// es5
// var a = 1;
// var b = 2;
// var c = 3;
// var c = 3;
// var c = 3;
// var c = 3;

//es6
//数组的模式进行解构赋值
// let [a, b, c, d, e] = [1, 3, 5, 4, 3];
// console.log(a, b, c, d, e);


// let [user, pswd] = ["heinan"];

// var  user = "heinan";
// var  pswd;

// console.log(user);
// console.log(pswd);


// let [className,classRoom,teacher]=["1601",,"heinan"]
// console.log(className);
// console.log(classRoom);
// console.log(teacher);

// let test=([val1,val2])=>{
// 	console.log(val1);
// 	console.log(val2);
// }

// test([1,2])
// reset 类似于arguments
// let test=(...reset)=>{
// 	console.log(reset[0]);
// 	console.log(reset[1]);
// 	console.log(reset[2]);
// }

// test(1,2,3)
// let [a=1]=[]
// console.log(a)


// let {a,b}={a:"hei",b:"nan"}
// console.log(a,b);

//错误情况，baz 没有赋值
// let { baz } = { foo: "aaa", bar: "bbb" };
// console.log(baz);

//当前定义了变量A,有一个变量B的值和A一样

// let { a, a:b } = { a: 1}
// console.log(a);
// console.log(b);

// a 已经存在的值
// b 新定义的值，想复制a 的值
// 模式: B 想使用哪个参数的值
// 模式：变量名
// a  : b

// let {c:b}={c:123};
// //c 是一个模式
// //b 才是变量
// console.log(b);
// console.log(c);

// 对象解构赋值，使用模式，嵌套数组解构赋值，数组解构赋值嵌套{}解构赋值
// let { p: [x, { y }] } = {
//     p: [
//         123,
//         { y:"heinan" }
//     ]
// }
// //p是一种模式，不是变量名
// console.log(x);
// console.log(y);

//复杂类型嵌套的解构赋值
// let { a:[x,{y}]}= {
// 	a:["hei",{y:"nan"}]
// }
// console.log(x,y);


// let test = (val1=1,val2=2) => {
//     console.log(666);
// }
// console.log(test.name);
// //取得函数形参不包含默认值的个数,
// console.log(test.length);


// let x = 1;

// function f(y = x) {

//     //封闭作用域，私有变量的值不会影响外部变量
//     let x = 2;
//     let y = x;

// }
// f()


// let test = x => x + 1;
// let test = (x) => {
//     return x + 1;
// }

// let getName = (val1, val2) => val1 + val2;

// let getName = (val1, val2) => {
//     return val1 + val2;
// }

// console.log(getName("欢迎", "heinan"));

// let test=(...reset)=>{
// 	console.log(reset);
// }
// test(1,2,3,4,5)
// 


//扩展运算符  得到数组的每一项
// console.log(...[1, 2, 3])  //1  2  3
//document.querySelectorAll('div') 得到页面中所有的div node节点 ----类数组


//将类数组转换为数组

// let nodes = document.querySelectorAll('div');
// //报错， nodes节点集合不是真实的数组，不具备数组方法
// // nodes.map((item,index,arr)=>{
// [...nodes].map((item,index,arr)=>{
// 	console.log(item);
// });






// // es5 合并数组？
// // var  arr3 = arr1.concat(arr2);

// //es6通过扩展运算符合并数组
// var arr3= [...arr1,...arr2]

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)


//复制数组
//es5 concat 复制方式是 深度拷贝
// var  arr1 = [1,2,3];
// var  arr2 = arr1.concat();
// console.log(arr1)
// console.log(arr2)
// console.log(arr1==arr2)
// arr2.push(666)
// console.log(arr1)
// console.log(arr2)


// let arr = [1,2,3,4,5]

// arr.forEach((item,index,arr)=>{
// 	console.log(item)
// });
// arr.map((item,index,arr)=>{
// 	console.log(item)
// });
// let result = arr.find((item,index,arr)=>{
// 	console.log(item);
// 	return item>3
// });
// console.log(result);
// 


let obj1 = {
    name: "heinan"
}
let obj2 = {
    age: 13
}

//Object.assign(target,source)
//target 目标对象
//source 资源对象
//返回target
// let obj = Object.assign(obj1,obj2);
// let obj3= obj1;
// console.log(obj1);  //{ name: 'heinan', age: 13 }
// console.log(obj2); //{ age: 13 }
// console.log(obj);  //{ name: 'heinan', age: 13 }
// //指针指向，浅拷贝
// console.log(obj==obj1); //true
// console.log(obj1==obj3); //true
// obj1.name = "haonan";
// console.log(obj1); //{ name: 'haonan', age: 13 }
// console.log(obj); //{ name: 'haonan', age: 13 }

//模拟深拷贝
// let obj = Object.assign({},obj1,obj2);

// console.log(obj)  //{ name: 'heinan', age: 13 }
// console.log(obj1)  //{ name: 'heinan' }
// console.log(obj2)  //{ age: 13 }
// obj.name="haonan";
// console.log(obj)  //{ name: 'haonan', age: 13 }
// console.log(obj1)  //{ name: 'heinan' }
// console.log(obj2)  //{ age: 13 }