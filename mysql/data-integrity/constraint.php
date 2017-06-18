<?php 
    // 约束
    // 非空约束
    "NOT NULL";
    "create table friend (name varchar(50) not null, phone_number varchar(15) not null);";
    // 主键约束
    // 创建主键的三种方式
    "CREATE TABLE t_friend (name VARCHAR(50) NOT NULL, 
    phone_num VARCHAR(15) DEFAULT 'no phone number' NOT NULL,
    CONSTRAINT myPrimaryKey PRIMARY KEY (name));"

    // 唯一约束
    // 指定默认值
    "DEFAULT NOW()";

    // 检查约束
    "CONSTRAINT checkAge CHECK (age between 10 and 100)";
    "CHECK post_code LIKE '[0-9][0-9][0-9][0-9][0-9][0-9]'";
    "CHECK gender in ('male', 'female')";
    "CHECK (col1 <= col2)";

    // 外键约束
    "CONSTRAINT fid_fk FOREIGN KEY(friend_id) REFERENCES t_friend(friend_id)";

    // 对已经存在的表修改数据完整性 需要使用名字
    // 
 ?>