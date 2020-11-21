// let A = 10;

// export { A };

let username = 'xiaoqiang';
let password = '123456';
let fn1 = () => {
	console.log('fn1');
};

// 1. 导出变量
export { username, password, fn1 };
// 2. 导出函数(简写)
export function fn2() {
	console.log('fn2');
}
// 3. 导出一个类
export class Hello {
	fn3() {
		console.log('hello world');
	}
}

// 不要直接导出一个值
