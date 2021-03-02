SQL语句|作用
--|--
SET SQL_SAFE_UPDATES = 0|关闭安全模式
SET SQL_SAFE_UPDATES = 1|开启安全模式
set global log_bin_trust_function_creators=TRUE;
# 数据库
SQL语句|作用
--|--
use 数据库|切换数据库
show databases|查看数据库
create database 数据库|创建数据库
drop database 数据库|删除数据库
# 数据表
SQL语句|作用
--|--
show tables|查看表
desc 表|查看表结构
create table 表 (属性 值,...,属性 值)|创建表
drop table 表|删除表
alter table 旧表名 rename to 新表名|修改表名
CREATE TABLE 新表 LIKE 旧表|复制表结构
create table 新表 select * from 旧表|复制表结构及数据
# 字段
SQL语句|作用
--|--
insert into 表[属性,...]VALUES (值...)|插入字段
update 表 set 属性=值,...,属性=值 where子句|修改字段
delete from 表 where子句|删除字段
select 属性/* from 表|查询字段|查询字段
select 属性/* from 表 where子句|条件查询字段
select 属性/* from 表 where 属性 in 查询语句|子查询字段
select * from 表 order by 属性 ASC/DESC|排序查询(升序/降序)字段
select 函数(属性) from 表 group by 属性|分组查询字段
# 属性
SQL语句|作用
--|--
alter table 表 add 属性 数据类型 约束|添加属性|MySQL
alter table 表 modify 属性 数据类型 约束|修改属性|MySQL
alter table 表 drop 属性|删除属性|MySQL
alter table 表 change 旧属性 新属性 数据类型|修改属性
alter table 表 modify 属性 数据类型|修改属性数据类型
# 索引
* 索引类型:unique,fulltext,spatial

SQL语句|作用
--|--
create index 索引 on 表(属性)|添加索引
drop index 索引 on 表|删除索引
# 视图
SQL语句|作用
--|--
show table status like 视图|查看视图信息
desc 视图|查看视图结构
show create view 视图|查看视图定义
create view 视图 as 查询语句|创建视图
alter view 视图 as 查询语句|修改视图
drop view 视图|删除视图

# 触发器
* 触发时间 before\after
* 触发事件 insert\update\delete
* 两个逻辑表 NEW表和OLD表 new.属性 调用new表的数据

SQL语句|作用
--|--
show triggers|查看触发器定义
create trigger 触发器 触发时间 触发事件 on 表 for each row SQL语句|创建触发器
drop trigger 触发器|删除触发器
# 事务
```
CREATE PROCEDURE upAddOrders(id INT)
BEGIN
	DECLARE odtotal INT;
	DECLARE odid INT;
	-- 指定事务的起始位置
Loop_label:LOOP
	-- 启动事务
	START TRANSACTION;
	-- 获取当前用户购物车中商品的数量
	SELECT SUM(scNum) INTO odtotal FROM scar WHERE uID = id;
-- 创建订单
	INSERT INTO orders(uID, oTime, oTotal) VALUES(id, NOW(), odtotal);
-- 如果创建失败，回滚
	IF ROW_COUNT() < 1 THEN
		ROLLBACK;
		LEAVE loop_label;
	END IF;
-- 获取订单ID
	SET odid = LAST_INSERT_ID();
-- 将购物车中的商品添加到订单详细表中
	INSERT INTO orderdetail(oID, gdID, odNum)
	SELECT odid, gdID, scNum   FROM scar  WHERE uID = id;
-- 如果添加失败，回滚
	IF ROW_COUNT() <1 THEN
		ROLLBACK;
		LEAVE loop_label;
	END IF;
	DELETE FROM scar WHERE uID = id;   -- 删除购物车中的商品
	-- 如果删除失败回滚，否则提交
	IF ROW_COUNT() < 1 THEN 
		ROLLBACK;
		LEAVE loop_label;
	ELSE
		COMMIT;
	END IF:
	END LOOP;
END

```
# 用户
* 权限 ALTER,DELETE,INDEX,INSERT,SELECT,UPDATE,CREATE,ALL

SQL语句|作用
--|--
create user '用户名'@'IP地址' identified by '密码'|创建用户
show grants for '用户'@'IP地址'|查看权限
rename user '用户名'@'IP地址' to '新用户名'@'IP地址'|修改用户
set password for '用户名'@'IP地址' = Password('新密码')|修改密码
drop user '用户名'@'IP地址'|删除用户
grant  权限 on 数据库.表 to   '用户'@'IP地址'|授权
revoke 权限 on 数据库.表 from '用户'@'IP地址'|取消权限
select * from mysql.user|查询全部用户
# SQL编程基础
## 基础
* 声明语句结束符，可以自定义
```
DELIMITER //
//
```
## SQL变量
SQL语句|作用
--|--
set @变量名 = 值|声明全局变量
declare 变量名 数据类型 default 默认值|声明局部变量
set 变量名 =值/(查询语句)|局部变量赋值
查询语句 into 变量|将查询值赋值给变量
select 变量|显示变量值
## 循环
### loop循环
```sql
delimiter // 	                   	    #定义标识符为双斜杠
drop procedure if exists test;          #如果存在test存储过程则删除
create procedure test()                 #创建无参存储过程,名称为test
begin
    declare i int;                      #申明变量
    set i = 0;                          #变量赋值
    lp : loop                           #lp为循环体名,可随意 loop为关键字
        insert into test values (i);    #往test表添加数据
        set i = i + 1;                  #循环一次,i加一
        if i > 10 then                  #结束循环的条件: 当i大于10时跳出loop循环
            leave lp;
        end if; 
    end loop;
    select * from test;                 #查看test表数据
end
//                                      #结束定义语句
call test();                            #调用存储过程
```
### repeat循环
```
delimiter //                            #定义标识符为双斜杠
drop procedure if exists test;          #如果存在test存储过程则删除
create procedure test()                 #创建无参存储过程,名称为test
begin
    declare i int;                      #申明变量
    set i = 0;                          #变量赋值
    repeat
        insert into test values (i);    #往test表添加数据
        set i = i + 1;                  #循环一次,i加一
    until i > 10 end repeat;            #结束循环的条件: 当i大于10时跳出repeat循环
    select * from test;                 #查看test表数据
end
//                                      #结束定义语句
call test();                            #调用存储过程
```
### while循环
```
delimiter //                            #定义标识符为双斜杠
drop procedure if exists test;          #如果存在test存储过程则删除
create procedure test()                 #创建无参存储过程,名称为test
begin
    declare i int;                      #申明变量
    set i = 0;                          #变量赋值
    while i < 10 do                     #结束循环的条件: 当i大于10时跳出while循环
        insert into test values (i);    #往test表添加数据
        set i = i + 1;                  #循环一次,i加一
    end while;                          #结束while循环
    select * from test;                 #查看test表数据
end
//                                      #结束定义语句
call test();                            #调用存储过程
```
## 判断
### CASE函数
SELECT username,(CASE sex  WHEN 1 THEN '男'  WHEN 2 THEN  '女'  ELSE '未知' END) as sex FROM user;
### ELT()函数
SELECT username,ELT(sex,'男','女','未知') as sex FROM user
### IF()函数
select username,if(sex=1,'男','女') as sex from user;
## 游标
SQL语句|作用
--|--
declare 游标 cursor for 查询语句|定义游标 
declare continue handler for not found set 变量 =1|指定游标结束时的变量值
fetch 游标 into 变量|将游标值取回给变量
open 游标|打开游标
close 游标|关闭游标
```
BEGIN
--定义变量  
declare testrangeid BIGINT;  
declare versionid BIGINT;   
declare done int;  
--创建游标，并存储数据
declare cur_test CURSOR for   
   select id as testrangeid,version_id as versionid from tp_testrange;  
--游标中的内容执行完后将done设置为1  
 DECLARE CONTINUE HANDLER FOR NOT FOUND SET done=1;   
--打开游标  
open cur_test;  
--执行循环  
  posLoop:LOOP  
--判断是否结束循环  
        IF done=1 THEN    
      LEAVE posLoop;  
    END IF;   
--取游标中的值  
    FETCH  cur_test into testrangeid,versionid;  
--执行更新操作  
    update tp_data_execute set version_id=versionid where testrange_id = testrangeid;  
  END LOOP posLoop;  
--释放游标  
CLOSE cur_test;  
END
```
## 存储过程
* 开始和结束符号
```
BEGIN .... END    
```
* 形式参数
```
[IN|OUT|INOUT] 参数名 参数数据类型
```
SQL语句|作用
--|--
show create procedure 存储过程|查看存储过程定义
create procedure 存储过程([参数]) |创建存储进程
call 存储过程([参数]) Begin SQL语句 End|调用存储过程
alter procedure 存储过程|修改存储过程
drop procedure 存储过程|删除存储过程
## 自定义函数
* 开始和结束符号
```
BEGIN .... END    
```
* 形式参数
```
[IN|OUT|INOUT] 参数名 参数数据类型
```
SQL语句|作用
--|--
show create function 函数|查看函数定义
create function 函数([参数]) 方法体|创建函数
select 函数([参数])|调用函数
drop function 函数|删除函数
```SQL
create function f1() 
returns int
begin
	declare totalAmount int default 0;
    declare q int default 0;
    declare done int default true;
	declare cursor1 cursor for select amount from medicine;
    declare continue handler for not found set done =false;
	open cursor1;
    while done do
		fetch cursor1 into q;
        set totalAmount=totalAmount+q;
    end while;
    close cursor1;
    return totalAmount;
end
```
## 系统函数
函数|作用
--|--
concat(str1,str2..)|将多个字符串首位相连
GROUP_CONCAT(要连接的字段)|将group by产生的同一个分组中的值连接起来，返回一个字符串结果
# cmd命令
cmd命令|作用
--|--
mysqldump -u用户名 -p密码 -数据库名 [表名]>备份文件路径|备份数据库[表]
msysql  -P端口号  -h主机名/ip -u用户名 -p密码|登录MySql
net start mysql服务名|启动mysql服务
net stop mysql服务名|关闭mysql服务
# 注意
* 视图也是表,对视图进行增删改查操作会同步影响相关的表数据
* `这个符号在mysql作为转义符,通常用来说明其中的内容是数据库名、表名、字段名，不是关键字。