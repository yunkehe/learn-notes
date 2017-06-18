<?php 
    // 创建索引
    $sql = "CREATE INDEX 索引名 ON 表名 (列名1, 列名2, ...)";
    // 创建唯一索引
    $sql = "CREATE INDEX 索引名 ON 表名 (列名1, 列名2, ...)";
    // 修改表结构
    $sql = "ALTER mytable ADD INDEX [indexName] ON (username(length));";
    // 可以使以下查询更快
    $sql = "select age, gender from tb1 username like 'he%';";
    // 但是这一条不会更快，因为文本列是从左到右索引的
    $sql = "select age, gender from tb1 username like '%he';";

    // 问题1：创建表时添加索引的语句是什么？
    // 删除索引
    $sql = "";
 ?>