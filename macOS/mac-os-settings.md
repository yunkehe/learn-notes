## macOS 系统设置
Finder中显示隐藏文件
`defaults write com.apple.finder AppleShowAllFiles -bool true`

## 常用命令
### 查看端口占用情况命令
`sudo lsof -i :9000`
冒号后面就是你需要查看的端口号。

### 杀掉占用当前端口号的进程
`sudo kill -9 716`
-9后面加一个空格，然后加上占用端口的进程PID，就可以杀掉占用端口的进程。

### 最小化所有应用程序/窗口
Fn + F11