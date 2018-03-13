
// 制作数组
var lines= require('fs').readFileSync('tobetranslate.txt','utf-8').replace(/[\r\n]/g,"")
	.split('. ').filter(Boolean);

console.log(lines)

//导入translate

var trans= require('./translate.js');

//	循环翻译数组中的元素,并返回为顺序数组
Promise.all(lines.map(value => trans.gettrans(value)) ).then(function(datas) {
	console.log(datas)
	//将上述翻译的结果保存为本地文件
	var exec = require("child_process").exec
	exec('python savefile.py "'+datas+'" ')
} )