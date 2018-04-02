#!/usr/local/bin/python3

# 计算面积函数
def area(w, h):
    # 文档字符串
    return w * h

print('计算面积: ', area(30, 5));

# 参数位置可以变
def printinfo(name, age):
    print('name: ', name);
    print('age: ', age);

printinfo(age = 27, name = 'heke');

# 不定长参数
def printargs(arg1, *varible):
    "打印任何传入的参数";
    print('arg1: ', arg1);
    print('varible: ', varible);
    for var in varible:
        print('var: ', var);
    return;

printargs('hello', 'I', 'like', 'python');

# lambda表达式
sum = lambda arg1, arg2: arg1 + arg2;

print('(lambda)sum: ', sum(4, 6));

# global和nonlocal
gl = 'global';
def fun1():
    # 修改全局gl需要先用global声明
    # global gl;
    gl = 'noglobal';
    print('gl: ', gl);
    # global  gl;

fun1();
print('global: ', gl);


# 局部作用域中的变量不会影响全局作用域和闭包
# a = 10
# def test():
#     a = a + 1
#     print(a)
# test()