#!/usr/local/bin/python3
#! /usr/bin/env python3

a, b = 0, 1;

# 关键字end可以用于将结果输出到同一行，或者在输出的末尾添加不同的字符，实例如下：
while b < 10:
	print(a, end=' ')
	a, b = b, a + b;
