// 注意: 在nodejs环境下去执行
let fs = require('fs');

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

async function gen() {
	// async 函数中内置了自动执行的功能
	let a = await readFile('./a.txt');
	console.log(a);
	let b = await readFile('./b.txt');
	console.log(b);
	let c = await readFile('./c.txt');
	console.log(c);
}

gen();
