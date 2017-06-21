<?php 
    // 聚合函数与分组
    // count sum avg max min
    "select count(*) as total from student;";

    // GROUP BY
    "select count(*) from student group by gender;";

    "select name, sum(signin) as sign_count from tbl_employee group by name with rollup;";
    
    // 使用HAVING子句
    

 ?>