<?php 
    // 添加新数据
    // 从friend表中查找姓名 插入t_2表中
    "insert into t_2 (name) select name from friend;";

    // 拷贝表
    "create table t_new_admin like admin;";

    // 表数据的复制
    "insert into t_new_admin select * from friend;";

    // 更新单列数据
    "update t_new_friend set phone_num=110 where name='hke';";

    // 更新多列数据
    "update student set grade=1 where age<=10;";

    // 删除数据
    "delete from student where name='heke';";
 ?>