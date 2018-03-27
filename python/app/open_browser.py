#!/usr/local/bin/python3

# 打开浏览器的方法
import os

urls = ['http://login.dev.sxw.cn/?test=1', 'http://www.baidu.com', 'https://app.yinxiang.com/Home.action?login=true']
se_urls = ['http://192.168.2.103:32200/api/list?p_id=SklRa0r$qg&v_id=Syed_ES2r$']

Se = r'C:\Users\Administrator\AppData\Roaming\360se6\Application\360se.exe'
Chrome = r"C:\Users\Administrator\AppData\Local\Google\Chrome\Application\chrome.exe"

for i in range(len(urls)):
    os.system(Se + ' ' + urls[i])


# 模拟登录操作
url_api = 'http://192.168.2.103:3220/user/login'