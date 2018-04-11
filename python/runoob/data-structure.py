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

vec = [2, 4, 6];
vec2 = [x*2 for x in vec];
print('vec2: ', vec2);