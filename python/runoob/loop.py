#!/usr/local/bin/python3

sum = 0;
counter = 1;

while counter <= 100:
    sum = sum + counter
    counter += 1
else:
	print ('game over')

print('sum is: ', sum)
print('counter is: ', counter)

# 无限循环

var1 = 1;
while var1 == 2:
	num = int(input('请输入一个数字: '))
	print ('你输入的数字是： ', num)

print ('Good bye')

# for循环
languages = ['C', 'Javascript', 'PHP', 'Python'];

# for x in languages:
# 	if x == 'Javascript':
# 		print ('跳出循环', x);
# 		break;

for i in range(len(languages)):
	print(i, languages[i])

# 用range创建一个列表
print(list(range(9)))