// 导入translate
var trans= require('./translate.js');

// 调用翻译结果
var s1="What makes Rails so great?"
var s2 = "do you love me still ?"
var s3 = "The Ruby on Rails Tutorial is designed to give you a thorough introduction to web application developmentntrepreneur."
var s4 = "of course i still love you . "
var contents=[s1,s2,s3,s4]

var result = contents[1]

//console.log(contents[0])
//console.log(contents[1])
//console.log(contents[2])
//console.log(typeof contents[2]) //结果是str
//trans.gettrans(result)

if(typeof result == "string"){
//	trans.gettrans(s1)
}

for(i in contents)
{
	trans.gettrans(contents[i])
}


