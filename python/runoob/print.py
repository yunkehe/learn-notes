# !/usr/bin/python3
import math
# 输入输出
# str()： 函数返回一个用户易读的表达形式。
# ： 产生一个解释器易读的表达形式。
a = repr(23.454645)
print(a)

# 字符串对象的 rjust() 方法, 它可以将字符串靠右, 并在左边填充空格。
# 还有类似的方法, 如 ljust() 和 center()。 这些方法并不会写任何东西, 它们仅仅返回新的字符串。
# 另一个方法 zfill(), 它会在数字的左边填充 0

# 括号及其里面的字符 (称作格式化字段) 将会被 format() 中的参数替换。
print('{}网址： "{}!"'.format('菜鸟教程', 'www.runoob.com'))
# 在括号中的数字用于指向传入对象在 format() 中的位置
print('{1} 和 {0}'.format('Google', 'Runoob'))

print('常量 PI 的值近似为 {0:.6f}。'.format(math.pi))

table = {'Google': 1, 'Runoob': 2, 'Taobao': 3}
for name, number in table.items():
    print('{0:10} ==> {1:10d}'.format(name, number))

# 读入文件
f = open("./test.txt", "w")
f.write( "Python 是一个非常好的语言。\n是的，的确非常好!!\n" )
f.close()

f2 = open("./test.txt", "r")
# s = f2.read()
s = f2.readline()
print('test.txt: ', s)
print('f2.closed: ', f2.closed)

with open('./test.txt', 'r') as f3:
    read_data = f3.read()

print('f3.closed: ', f3.closed)


# fileclose