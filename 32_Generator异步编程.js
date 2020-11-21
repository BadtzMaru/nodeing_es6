// 注意: 在nodejs环境下去执行
let fs = require('fs');
const { resolve } = require('path');

// 下面的这些代码是异步读取的 a -> b -> c
// fs.readFile('./a.txt', (err, data) => {
// 	console.log(data.toString());
// 	fs.readFile('./b.txt', (err, data) => {
// 		console.log(data.toString());
// 		fs.readFile('./c.txt', (err, data) => {
// 			console.log(data.toString());
// 		});
// 	});
// });

// 解决方案1 : Promise
function readFile(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data.toString());
			}
		});
	});
}

// readFile('./a.txt')
// 	.then((data) => {
// 		console.log(data);
// 		return readFile('./b.txt');
// 	})
// 	.then((data) => {
// 		console.log(data);
// 		return readFile('./c.txt');
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	});

// 解决方案2: Generator

function* gen() {
	yield readFile('./a.txt');
	yield readFile('./b.txt');
	yield readFile('./c.txt');
}
// 返回一个可迭代对象,这个对象里面有next方法
let it = gen();
it.next()
	.value.then((data) => {
		console.log(data);
		return it.next().value;
	})
	.then((data) => {
		console.log(data);
		return it.next().value;
	})
	.then((data) => {
		console.log(data);
	});
