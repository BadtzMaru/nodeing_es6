// 注意: 在nodejs环境下去执行
let fs = require('fs');
let co = require('co');

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

// 解决方案2: Generator

function* gen() {
	let a = yield readFile('./a.txt');
	console.log(a);
	let b = yield readFile('./b.txt');
	console.log(b);
	let c = yield readFile('./c.txt');
	console.log(c);
}

co(gen());
