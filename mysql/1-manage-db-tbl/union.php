<?php 
    // 组合查询
    // 子查询作为计算列
    "select name, student_id, (select count(*) from student_exam where student_exam.student_id=student.student_id) as exam_taken from student order by exam_taken desc;";

    // where子句中的子查询
    // 知道某门课程举行时间 查询该课程名称
    'select name from t_course where course_id = (select course_id from t_exam where sustained_on='2003-03-10');';

    // 返回多个结果的子查询
    'select name from t_course where course_id in (select course_id from t_exam where sustained_on='2003-03-10');'

    // 在子查询中使用运算符
    // 使用EXISTS运算符
    // 使用ALL 运算符
    "select columnA from tableA where columnA > ALL (select columnB from tableB);";
    //从 tableA中 返回 columnA 列值 大于 tableB 中的每个 columnB列值的所有行

    // 使用ANY 运算符
    "select columnA from tableA where columnA > ANY (select columnB from tableB);";
    
    // 使用 UNION 运算符
    
 ?>