# !/usr/bin/python3
# Filename: module.py

# 模块
import support
import sys

print('命令行参数如下：')
for i in sys.argv:
    print(i)

print('\n\nPython 路径为：', sys.path, '\n')

print('sayHello: ', support.say('heke'))
print('dir(sys): ', dir(sys))