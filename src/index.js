// let a = () => {
// 	console.log(111);
// };

// a();

// 总结:
// 1. webpack 模块打包工具
// 2. babel 把es6转成es5的代码

// 模块化, 一个文件就是一个模块
// 写了一个模块以后,需要把相应的内容导出
// 如果要使用一个模块需要导入
// import { A } from './module1.js';
// console.log(A);

// 1. 导入变量
import { username, password, fn1, fn2, Hello } from './module1.js';
console.log(username, password);
fn1();
fn2();

let obj = new Hello();
obj.fn3();

// export 导出 变量,函数,类
// import 导入 变量,函数,类
