// 得到TKK
var exec = require('child_process').exec; 
var cmdStr = 'python getTKK.py';
exec(cmdStr, function(err,stdout,stderr){
    if(err) {
        console.log('get TKK is error' + stderr);
    } else {
        //console.log(stdout);
    }
}); 

// 读取TKK
var rf=require("fs");  
var tkk=rf.readFileSync("TKK","utf-8");  
//console.log(tkk);

// 根据TKK与text计算出tk,并进行翻译
var gettrans=function(text){
	//根据TKK与text计算出tk
	var gettk= require('./gettk.js')
	res=gettk.tk(text, tkk.toString())
		//console.log(res)
	var testenc = encodeURI(text)
		//console.log(encodeURI(text))

	//翻译
	var exec2 = require('child_process').exec; 
	var cmdStr2 = 'python http.py '+testenc+' '+res+' ';
	//console.log('http.py '+testenc+' '+res)
	exec2(cmdStr2, function(err,stdout,stderr){
		if(err) {
			console.log('http is error' + stderr);
		} else {
			// 输出结果
			console.log(stdout);
		}
	});
}



module.exports.gettrans=gettrans;
