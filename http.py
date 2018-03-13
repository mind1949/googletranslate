#-*- coding:utf-8 -*-
import time
import urllib2
#import urllib
from sys import argv
 
script,zh,tk = argv

url='http://translate.google.com/translate_a/single?client=t&sl=auto&tl=zh-CN&hl=en&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&source=bh&ssel=0&tsel=0&kc=1&tk='+ tk +'&q=' + zh
def getRes():
	#print 'chinese is :'+urllib.unquote(first)
	
	null_proxy_handler = urllib2.ProxyHandler({})
	opener = urllib2.build_opener(null_proxy_handler)
	urllib2.install_opener(opener)

	req = urllib2.Request(url) 
	req.add_header('User-Agent', "Mozilla/5.0")

	response = urllib2.urlopen(req)
	content= response.read()
	content_0=content.split(',')
	content_1=content_0[0].lstrip('[').strip('"')

	f = open('save_file.txt','a+')
	f.write(content_1+'. \n')
	f.close
	# 返回翻译出的结果
	return content_1


print getRes()