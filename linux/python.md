# python配置相关

进入到虚拟目标
`source venv/bin/activate`

启动gunicorn
`gunicorn -w 4 -b 0.0.0.0:80 app:app --daemon`

查看gunicorn进程
`pstree -ap | grep gunicorn`

重启gunicorn进程指定id
`kill -HUP 13873`

关闭gunicorn进程
`killall gunicorn`

安装python虚拟环境
`virtualenv -p python3 ~/FOLDER-PATH/venv3`