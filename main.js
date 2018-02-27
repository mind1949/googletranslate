
// 制作数组
var s1="What makes Rails so great?"
var s2 = "The tube was heated in boiling water for 15 min."
var s3 = "The Ruby on Rails Tutorial is designed to give you a thorough introduction to web application developmentntrepreneur."
var s4 = "Analysis of variance was conducted to detect significant differences in the EC level of the twenty Chinese yellow rice wine samples depending on the production characteristics and origins employed.Linear regression was carried out in the calibration procedure and the recovery experiment was examined."
var s5 = "Two reagents were prepared in advance as follows:reagent I contains 50 mL phosphate, 120 mL sulphate, 0.05 g FeCl3 and 330 mL water.reagent II is a solution  of diacetylmonoxime and of thiosemicarbaz- ide in water."
var contents=[s1,s2,s3,s4,s5]

// 导入translate
var trans= require('./translate.js');

//	循环翻译数组中的元素,并返回为顺序数组
Promise.all(contents.map(value => trans.gettrans(value)) ).then(function(datas) {
	console.log(datas)
	//将上述翻译的结果保存为本地文件
	var exec = require("child_process").exec
	exec('python savefile.py "'+datas+'" ')
} )




