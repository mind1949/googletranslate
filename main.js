
// 制作数组
var s1="1 What makes Rails so great?"
var s2 = "2 do you love me still ?"
var s3 = "3 The Ruby on Rails Tutorial is designed to give you a thorough introduction to web application developmentntrepreneur."
var s4 = "4 of course i still love you . "
var contents=[s1,s2,s3,s4]

// 导入translate
var trans= require('./translate.js');

//	循环翻译数组中的元素

let iterable = contents

for(let value of iterable)
{
	trans.gettrans(value)
}
