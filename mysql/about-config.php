<?php 
    // 解决中文乱码
    // my.ini里面添加一句
    // [mysql]
    // default-character-set=utf8
    
    // 控制台设置
    "set character_set_results=gb2312;";
    // 查看设置
    " show variables like '%char%';";
 ?>