# !/usr/bin/python3
# Filename: support.py

def say(s):
    print('Hello: ', s)
    return s

if __name__ == '__main__':
   print('程序自身在运行')
else:
   print('我来自另一模块')
