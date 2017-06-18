<?php 
    // 查询基础
    "select concat(name, '_f') as n from friend;";

    // 排除重复数据
    // DISTINCT 是查询列的组合的唯一值
    "select distinct name from student;";

    // 条件查询
    "select * from student where age>30 and not name='heke';";

    // 范围
    "select * from student where name not in('heke', 'hecong');";
    "select * from student where name not in(select name from another_table);";

    // 模糊查询
    "select * from student where name like 'he%';";
    // 第二个%不是通配符 SQL-server中也可以直接使用 [%
    "select * from student where name like '%p%' escape 'p';";

    // 处理空值数据 NULL=NULL 结果也是false
    "select * from student where age is not null;";

    // 排序    可以给每个列指定排序方向
    "select * from student order by name ASC, age DESC;";
 ?>