from sys import argv

script,content_list=argv

f= open("save_file.txt","a+")
f.write(content_list)
#for i in content_list:
#	f.write(i)

f.close