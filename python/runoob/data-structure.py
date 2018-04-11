# !/usr/bin/python3
# 数据结构

# 列表可以修改，而字符串和元组不能

# list.append(x)  把一个元素添加到列表的结尾，相当于 a[len(a):] = [x]。
# list.extend(L)  通过添加指定列表的所有元素来扩充列表，相当于 a[len(a):] = L。
# list.insert(i, x)   在指定位置插入一个元素。第一个参数是准备插入到其前面的那个元素的索引，例如 a.insert(0, x) 会插入到整个列表之前，而 a.insert(len(a), x) 相当于 a.append(x) 。
# list.remove(x)  删除列表中值为 x 的第一个元素。如果没有这样的元素，就会返回一个错误。
# list.pop([i])   从列表的指定位置删除元素，并将其返回。如果没有指定索引，a.pop()返回最后一个元素。元素随即从列表中被删除。（方法中 i 两边的方括号表示这个参数是可选的，而不是要求你输入一对方括号，你会经常在 Python 库参考手册中遇到这样的标记。）
# list.clear()    移除列表中的所有项，等于del a[:]。
# list.index(x)   返回列表中第一个值为 x 的元素的索引。如果没有匹配的元素就会返回一个错误。
# list.count(x)   返回 x 在列表中出现的次数。
# list.sort() 对列表中的元素进行排序。
# list.reverse()  倒排列表中的元素。
# list.copy() 返回列表的浅复制，等于a[:]。

vec1 = [2, 4, 6];
vec2 = [4, 3, -9];
# vec2 = [x*2 for x in vec];
# vec = [x*2 for x in vec1 if x > 3];
vec = [x*y for x in vec1 for y in vec2];

print('vec: ', vec);

matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

matrix2 = [[row[i] for row in matrix] for i in range(4)];
print('matrix2: ', matrix2);

# 集合是一个无序不重复元素的集。基本功能包括关系测试和消除重复元素。
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'};
print('basket: ', basket);
print('basket: ', 'orange' in basket);
print('basket: ', 'heke' in basket);

a = set('abracadabra')
b = set('alacazam')
a                                  # a 中唯一的字母
# {'a', 'r', 'b', 'c', 'd'}
a - b                              # 在 a 中的字母，但不在 b 中
# {'r', 'd', 'b'}
a | b                              # 在 a 或 b 中的字母
# {'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}
a & b                              # 在 a 和 b 中都有的字母
# {'a', 'c'}
a ^ b                              # 在 a 或 b 中的字母，但不同时在 a 和 b 中
# {'r', 'd', 'b', 'm', 'z', 'l'}

# 构造函数 dict() 直接从键值对元组列表中构建字典。如果有固定的模式，列表推导式指定特定的键值对：

dictinary = dict([('sape', 4139), ('guido', 4127), ('jack', 4098)]);
print('dictinary: ', dictinary);

# 遍历技巧
# http://www.runoob.com/python3/python3-data-structure.html