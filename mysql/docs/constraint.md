
###约束
外键约束(foreign keyp)
查看表的存储引擎
> show create table tb1;
查看索引
> show indexex from tb1;
创建表时添加外键约束
> foreign key(pid) references tb1(id);

##### 外键约束的参照
删除shuj
delete from tb1 where id = 1;

##### 表级约束与列级约束
##### 修改数据表
* 添加单列2
alter table tbl_name add column_name column_definition [first|last];
* 添加多列
alter table tbl_name add (column_name column_definition, ...);
* 删除多列列
alter table tbl_name drop column_name, drop column_name;
##
task 
1. 添加一列
2. 删除一列

##### 添加主键约束
alter table table_name add constraint 自定义名 primary key(列名);
##### 添加唯一约束
alter table table_name add unique (列名);
##### 添加外键约束
alter table table_name add foreign key(pid) references tb1(id);
##### 添加默认约束
alter table table_name alter 列名 set default 值;
##### 删除默认约束
alter table table_name alter 列名 drop default;