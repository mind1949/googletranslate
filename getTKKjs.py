#-*- coding:utf-8 -*-
import urllib2
from bs4 import BeautifulSoup

 
# Ҫ��ȡ����url
weburl='http://translate.google.cn/'

class Climbing():    
    # ���ô�����
    enable_proxy = False
    
    # ��url
    url = ''
    
    # ��ʼ��
    def __init__(self, url):
        self.url = url
        proxy_handler = urllib2.ProxyHandler({"http" : 'web-proxy.oa.com:8080'})
        null_proxy_handler = urllib2.ProxyHandler({})
        if self.enable_proxy:
            opener = urllib2.build_opener(proxy_handler)
        else:
            opener = urllib2.build_opener(null_proxy_handler)
        urllib2.install_opener(opener)
    
    # ����url���õ����󷵻����ݵ�soup����
    def __getResponseSoup(self, url):
        request = urllib2.Request(url)
        request.add_header('User-Agent', "Mozilla/5.0")
        #request.add_header('Accept-Language', 'zh-ch,zh;q=0.5')
        response = urllib2.urlopen(request)
        resault = response.read()
        soup = BeautifulSoup(resault, "html.parser")
        return soup
    
    # ��ȡTKK
    def getTKK(self):    
		soup = self.__getResponseSoup(self.url)
		allinfo = soup.find_all('script')
		for info in allinfo:
			chinese = info.get_text().encode('utf-8')
			#print chinese
			if chinese.find("TKK") > 0:    
				#print chinese
				res = chinese.split("TKK")[1]
				res = res.split(");")[0]
				print "TKK"+res+");"
				print "console.log(TKK);"

        
c = Climbing(weburl)
c.getTKK()