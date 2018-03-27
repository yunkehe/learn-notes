# -*- coding: utf-8 -*-
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options 
from selenium.webdriver.common.keys import Keys

# sedriver = "C:\Users\Administrator\AppData\Roaming\360se6\Application"
chromedriver = "C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\chromedriver.exe"

browser = webdriver.Chrome(chromedriver)
browser.maximize_window()
browser.get('http://192.168.2.103:3220/user/login?backurl=/project/index')  #需要打开的网址

user = browser.find_element_by_id("inputEmail") #审查元素username的id
user.send_keys("hk@sxw.cn")  #输入账号
password = browser.find_element_by_id("inputPassword") #审查元素password的name
password.send_keys("123456")  #输入密码
password.send_keys(Keys.RETURN) #实现自动点击登陆

browser.get('http://192.168.2.103:3220/api/list?p_id=BJeZiqk6Wf&v_id=SkbZi51pbf')

# print('btn_check: ', btn_check);

print('登陆成功')

# from selenium.webdriver.chrome.options import Options  
# from selenium import webdriver  
# from selenium.webdriver.common.keys import Keys  
# import time  
  
# __browser_url = 'C:\\Users\\Administrator\\AppData\\Roaming\\360se6\\Application\\360se.exe'  ##360浏览器的地址  
# chrome_options = Options()  
# chrome_options.binary_location = __browser_url  
  
# driver = webdriver.Chrome(chrome_options=chrome_options)  
# driver.get('http://www.baidu.com')  
# driver.find_element_by_id("kw").send_keys("seleniumhq" + Keys.RETURN)  
# time.sleep(3)  
# driver.quit()