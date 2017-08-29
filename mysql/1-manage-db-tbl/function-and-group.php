<?php 
    // 聚合函数与分组
    // count sum avg max min
    "select count(*) as total from student;";

    // GROUP BY
    "select count(*) from student group by gender;";

    "select name, sum(signin) as sign_count from tbl_employee group by name with rollup;";

    // 使用HAVING子句
    // 查询考试平均分>50 or > 70
    "select name, avg(score) as average_score from student group by name having avg(score) < 50 or avg(score) > 70;";

    // sql语句的执行顺序
    'SELECT FROM WHERE GROUP BY ORDER BY HAVING';
 ?>