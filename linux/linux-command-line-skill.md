linux常用命令

## 管理用户
添加新用户 同时在home中添加用户家目录
```
adduser 
```
创建一个新文件(利用重定向)
```
> newfile
touch dir/file-{A..Z}
```
创建文件夹
```
mkdir -p dir/dir-{001..100}
```

连接多个文件file01.js,file02.js,file03.js...
`cat file0*.js > file.js`

grep命令的用法(正则匹配)
`ls l /usr/bin | sort | uniq | grep zip`

输出当前工作目录的所有文件名
`echo *`

查找历史输入命令，
`history`
利用行号再次执行
`!23`
查找历史输入命令
`Ctrl + r`
复制找到的历史命令到当前命令
`Ctrl + j`

文件属性
|用户   |组   |     |    
- | :-: | -:|
|owner |group |world|
|rwx   |rwx   |r-x  |
文件权限代号
```
0 000 ---
1 001 --x
2 010 -w-
3 011 -wx
4 100 r--
5 101 r-x
6 110 rw-
7 111 rwx
```


查看系统进程
```
ps aux
Process States
```

查看进程状态
top

## vi編輯快捷鍵
### 命令模式下：
```
b 上一個單詞
w 下一個單詞
^ 跳轉到一行開始
0 跳轉到一行開始
$ 跳轉到一行結束
A 跳轉到一行結束並且進入編輯模式
Ctrl + f === Page down
Ctrl + b === Page up
數字 + G 跳轉到指定行
G 跳轉到最後一行
gg  move to
數字 + j 往下移動指定行
u 撤銷上一次的操作(undo)
a 在光標位置添加文本

o  ]open a line below the current line.
o  ]open a line above the current line.

x     刪除當前字符
2x    刪除當前字母和後面的兩個字符
dd    刪除當前行
3dd   刪除當前行和後面的3行

y    等價于複製
d    等價于剪切
p    等價于粘貼

/ + 要搜索的字符
n 跳轉到下一個搜索匹配項

:buffers 查看打開的多個文檔
:e 再打開一個文件
:buffer 數字    通過buffer number打開新文件
:r test.txt     讀取test.txt文檔到當前光標
```

查看内存使用详情
`free` 

查看系统正在干嘛
`tail - f /var/log/messages`

## 磁盘操作
```
磁盘分区工具 
fdisk  
开始分配/dev/vda1
fdisk /dev/vda1  
帮助
h    
菜单
m    
打印分区表
p    
文件系统检测
fsck    
```

## 网络
```
traceroute 追踪路由
ip 代替ifconfig使用 
netstat 网络状态
netstat -ie 检测本机ifconfig
ftp 
lftp  (a better ftp)
wget 下载文件/网站的工具
ssh  (Secure Shell)
ssh fanliang@localhost    使用用户名fanliang连接localhost
ssh localhost free    利用ssh远程执行命令
```

## 查找文件
```
locate bin    查找文件，文件名包含bin
locate bin | grep zip    查找文件，文件名包含bin，从结果中筛选文件，文件名包含zip
locate查找不到最近创建的文件，可以用updatedb更新一下
find ~ | wc -l    查找用户目录下的文件，wc统计有多少个
find ~ -type f -name "*.txt" -size -1M | wc -l  
find -cmin -10    10分钟之内改动过的文件
find ~ \( -type f -not -perm 0600 \) -or \( -type d -not -perm 0700 \)

find ~ -type -name "*.txt" -delete
删除所有找到的*.txt文件
find ~ -type f -name "*.txtt" -ok ls -l '{}' ';'
找到文件后执行命令，执行前提示确认操作

gunzip -c foo.txt.gz | less

tar    文档归类
tar cf playground.tar playground
归类   自定义命名     源文件
tar tf playground.tar
列出归类文档

find playground -name 'file-a' -exec tar tf playground.tar '{}' '+'
在playground文件夹中找到文件名为file-a的文件 然后执行归档

zip
zip -r playground.zip playground/
递归压缩playground/(包含内部文件)成一个playground.zip的压缩包

unzip -l ../playground.zip playground/dir-087/file-z

rsync options source destination
同步文件和文件夹

rsync -av playground/ foo
复制playground/到foo/

sudo rsync -av --delete /etc /home /usr/local /media/bigStock/backup
拷贝/etc /home /usr /local下的文件到 /media/bigStock/backup文件夹下，如果目标文件夹已经存在相同文件则删除
```

## regular expressions
```
grep -l bzip dirlist*.txt    匹配dirlist*.txt这几个文件中满足 bzip 表达式的文件
grep -L bzip dirlist*.txt    匹配dirlist*.txt这几个文件中不满足 bzip 表达式的文件

grep -h '.zip' dirlist*.txt    
结果不显示文件名字

/usr/share/dict/words
linux 系统自带的字典有98500个单词

grep -i '^..j.r$' /usr/share/dict/words
第三个字母是j最后一个字母是r，玩填字游戏可以用这个来匹配
```

## extended regular expressions 正则表达式扩展
```
echo "BBB" | grep -E 'AAA|BBB'
match AAA or BBB

echo "This is" | grep -E '([[:alpha:]]+ ?)+'
match alphat one or more times and space zero or one time.

locate --regex 'bin/(bz|gz|zip)'

zgrep -El 'regex|regular expression' *.gz
read compressed files

## Text Processing
cat -ns foo.txt
压缩多个空行

sort > foo.txt
每行依次输入 b a c 会被保存为 a b c 

ll | sort -nr -k 5 | head
指定按第五列来排序

sort --key=1,1 --key=2n distros.txt
指定第一列和第二列排序范围

du -s /usr/share/* | sort -nr | head
列出前十个使用量最大的文件

    SUSE    10.2    12/07/2007
sort -k 3.7nb
按年排序范围

sort -t ':'  /etc/passwd | head
自定义排序分界符

sort abc.txt | uniq
sort -u abc.txt
remove the dumplicated

sort abc.txt | uniq -c 
显示重复了多少次

cut -f 3 distros.txt
只输出显示文档第三列

cut -f 3 distros.txt | cut -c 7-10
截取第一次输出的 12/02/2008  第7-10个字符

du -sh ../playground
只显示playground文件夹的大小，不显示子文件夹

expand distros.txt | cut -c 23-
显示每一行第23个字符以及之后的字符

cut -d ':' -f 1 /etc/passwd | head
指定冒号作为分隔符

echo 'hello world' | tr [:lower:] A-Z
输出HELLO WORLD

sed -n '1,3p' distros.txt
输出第一到三行的内容

添加root权限方法
修改 /etc/sudoers 文件，找到下面一行，在root下面添加一行，如下所示：
```

## Allow root to run any commands anywhere
```
管理员权限修改 /etc/sudoers 增加一行
root    ALL=(ALL)     ALL
yunkehe   ALL=(ALL)     ALL
```

## 系统相关
```
查看内核
uname -a

查看发行版本
cat /etc/issue

重启服务
service mysql restart

查看端口
netstat -an | grep 3306
```

## 软件包管理工具
```
查看将要安装的软件源信息
apt-cache madison mysql
```