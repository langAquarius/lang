//es5常规写法

// var password = 123456;
// var hobby = ["eat", "drink", "play_games", "have_fun"];
// var classes = {
//     classRoom: "34410",
//     teacher: "haonan"
// }

// function whats() {
//     console.log(username);
//     console.log(password);
//     console.log(hobby);
//     console.log(classes);
// }

// whats();

//var  es5中声明变量的一种方式
//es6之前 javacript 是一门弱类型的语法
//弱类型？  声明变量并赋值，并且可以改变赋值的值类型
// var username;
// username=123;
// username="123";
//强类型
//一旦定义变量的值类型，不得修改，强制类型转换

//es6变量重复被定义,报错
// var username = "heinan";
// let username = 123;

// console.log(username);



//es5
// console.log(num);
// var num = 123;
//变量提升，上面代码的编译过程
// var num;
// console.log(num);
// num = 123;
// console.log(num);

//es6
//let变量在声明之前调用，报错,变量未定义
//暂时性死区
// console.log(num);
// let num;

// let num = 123;
// let flag = true;

// if (flag == true) {
// 	//es6
// 	//暂时性死区
// 	console.log(num);
//     let num = 456;

// }

// if (flag == true) {
// 	// 1、
// 	//let num私有变量,并且{}形成封闭的作用域
//     // let num = 456;

//     // 2、
//     //{}不会形成封闭的作用域，而且变量提升，出现重复定义变量，let var -- 报错
//     // console.log(num);
//     // var num = 123;
//     //------------------------------------------
//  	//变量提升
//  	//重复声明变量报错
//     // var num;
//     // console.log(num);
//     // num=123;
// } else {
//     let num = "456"
// }
// console.log(num);


//var 有变量提升，for循环的里面的i 会变局的I
//let 没有变量提升,所以变量未定义报错

// for (let i = 0; i < 5; i++) {
// 	//es6 封闭作用域
// 	console.log(i);
//     let i = 0;
// }

//常量的值不得被修改
// const PI = 3.1415926587;
// PI = 3;
// console.log(PI);


// let str = "12345";
//includes 返回一个布尔值，判卷字符串是否包含某个字符
// console.log(str.includes("a"));

//startsWith 返回一个布尔值判断字符串是不是以某一个字符开头
//endsWith 返回一个布尔值判断字符串是不是以某一个字符结尾
// console.log(str.startsWith("6"));
// console.log(str.endsWith("5"));

//repeat 返回一个新字符串，用来重复、复制某一个字符串多少次
// let str = "*";
// console.log(str);
// console.log(str.repeat(5));

//padStart|padEnd(number,string)
//number 新字符串的长度, 0 返回原字符串
//string 需要补全插入的字符串

let str = "345"; // 12345
console.log(str.padStart(10,"12"));
console.log(str.padEnd(100,"6789"));
