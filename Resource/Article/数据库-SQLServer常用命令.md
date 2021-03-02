# 数据库命令1

```sql server
--创建一个简单的数据库
create database bb
--创建带有主数据文件和日志文件的数据库
create database cc
on primary--主文件组
(
	name=cc,--逻辑文件名
	filename='c:\cc.mdf',--物理文件名
	size=4MB,--初始大小
	maxsize=20MB,--文件最大值
	filegrowth=1mb--文件自动增长	
)
log on--日志文件
(
	name=cc_log,
	filename='c:\cc_log.ldf',
	size=1mb,
	maxsize=unlimited,
	filegrowth=10%
)
--删除数据库
drop database cc
--创建带有辅助数据文件、日志文件和文件组的数据库
create database cc
on primary--主文件组
(
	name=cc,--逻辑文件名
	filename='D:\cc.mdf',--物理文件名
	size=4MB,--初始大小
	maxsize=20MB,--文件最大值
	filegrowth=1mb--文件自动增长	
),
filegroup fg--创建文件组fg
(
	name=cc_data2,--辅助数据文件
	filename='d:\cc_data2.ndf'
)
log on--日志文件
(
	name=cc_log,
	filename='e:\cc_log.ldf',
	size=1mb,
	maxsize=unlimited,
	filegrowth=10%
),
(
	name=cc_log1,
	filename='e:\cc_log1.ldf'
)
```

# 数据库命令2

```sql server
create database mydb--创建带有主数据文件和日志文件的数据库
on primary--主文件组
(
	name=mydb,--逻辑文件名
	filename='c:\my_data.mdf',--物理文件名
	size=3MB,--初始大小
	maxsize=10MB,--文件最大值
	filegrowth=5%--文件自动增长	
)
log on--日志文件
(
	name=mydb_log,
	filename='c:\mydb_log.ldf',
	size=5mb,
	maxsize=unlimited,
	filegrowth=1mb
),
--修改数据库名
sp_renamedb 'mydb','bookmanger'
--修改数据库，添加文件组fg2
alter database bookmanger
add filegroup fg2
--修改数据库添加辅助数据文件
alter database bookmanger
add file
(
	name=bm_fzdata,
	filename='c:\bm_fzdata.ndf',
	size=3mb,
	filegrowth=10%  
)to filegroup fg2
--修改数据库，修改数据文件属性
alter database bookmanger
modify file
(
	name=bm_fzdata,
	filename='c:\bm_fzdata.ndf',
	size=4mb,
	maxsize=10mb,
	filegrowth=5% 
)
--修改数据库，删除数据文件
alter database bookmanger
remove file bm_fazdata
--修改数据库，添加日志文件
alter database bookmanger
add log file
(
	name=bm_log1,
	filename='c:\bm_log1.ldf',
	size=4mb,
	maxsize=10mb
)
--修改数据库，修改日志文件属性
alter database bookmanger
modify file
(
	name=bm_log1,
	filename='c:\bm_log1.ldf',
	size=4mb,
	maxsize=20mb,
	filegrowth=5%
)
--修改数据库,删除日志文件
alter database bookmanger
remove file bm_log1
--将数据库BookManger改为单用户模式
exec sp_dboption BookManger,single_user,true
--分离数据库
exec sp_detach_db BookManger
--附加数据库
exec sp_attach_db @dbname=BookManger,
@filename1='c:\my_data.mdf'
--删除数据库
drop database bookmanger
```

# 数据库命令3

```sql server
--切换数据库
use BookManger
--创建表
create table aa
(
	b decimal(5,3)
)
--向表aa插入值
insert into aa values(54.35)
--查询表aa全部数据
select * from aa
drop table aa
create table aa
(
	birthday datetime
)
insert into aa values('5 22 2000')
select*from aa
drop table student
create table student
(
	sno	char(10),	
	name char(6),
	birthday datetime,
	age int,
	sex char(2),
	addr varchar(40)
)
insert into student values('1831032281','李泽城','4 22 1998',22,'男','地址')
select * from student
```

# 数据库命令4

```sql server
create table person
(
	name char(20),
	sex char(2),
	age int,
	birthday datetime
)
alter table person
alter column name char(6)
alter table person
alter column age tinyint
alter table person
add id char(18)
alter table person
drop column id
insert into person values('张三','男',20,'1999-9-12')
insert into person(name,age) values('李四','18')
insert into person(name,sex,age) values('null','','0')
update person set age=18
update person set age=16 where name='李四'
delete from person
where sex='男'
drop table person
drop 
select *from person
```
# 数据库命令5

```sql server
--域完整性
--default约束：设置默认值
select * from reg
create table reg
(
	id char(10),
	sex char(2),
	regdate datetime constraint reg_df default getdate()
)
--不插设置了默认值的列值时，该列值为默认值
insert into reg(id,sex)values ('1232154333','女')
--插入了设置默认值的列值时，该列值为插入值
insert into reg values('1234567890','女','2018-9-2')
select *from reg
--修改表为sex列设置默认值
alter table reg add constraint sex_df default('男')for sex
insert into reg (id,regdate)values('1234111190','2012-9-2')
--check约束：设定列值的指定有效范围
select *from grade
create table grade
(
	id char(2),
	name char(6),
	cname char(8),
	score int check(score>=0 and score<=100)
)
insert into grade values('12','aa','sql',100)
delete from grade where values=12
--修改指定cname列的值只能为‘数据库’或者‘网络’
alter table grade add check (cname='数据库'or cname='网络')
--非空Not null
--设置列值自增长Identity(seed,increment)
--seed:种子值，初始值
--increment:步长，每次增长值
select * from spend
create table spend
(
	no int identity(1,1),
	name char(20),
	cost money not null
)
insert into spend values('吃早饭','10')
insert into spend values('吃中饭','11')
insert into spend values('吃晚饭','10')
delete from spend where cost=10
--实体完整性
--主键primary key:区分不同行
--唯一、非空、一个表只能有一个主键
---主键可以是一列也可以是多列
select *from stu
create table stu
(
	sno char(2) primary key,
	name char(6),
	phone char(11)
)
insert into stu values('11','李榆成','17640078212')
insert into stu(name,phone) values('李成','17640071212')
--创建复合主键
drop table stu
create table stu
(
	sno char(2),
	name char(6),
	phone char(11),
	primary key(name,phone)
)
--唯一约束unique:列值唯一
create table stu
(
	sno char(2) primary key,
	name char(6),
	phone char(11) unique
)
--修改表添加唯一约束
alter table stu add unique(phone)
--参照完整性
--外键约束foreign key
drop table stu
create table stu
(
	sno char(2)primary key,
	name char(6)
)
select *from grade
drop table grade
create table grade
(
	id char(2)foreign key references stu(sno),
	score int 
)
insert into stu values('11','aa')
insert into grade values('11',89)
select *from stu
select *from grade
insert into stu values('11','aa')
insert into grade values('21',89)
```

# 数据库命令6

```sql server
select *from stu
select *from grade
insert into grade values('12','90')
delete from stu where sno='11'
--删除原有外键约束(no action)
alter table grade 
drop constraint FK__grade__id__1FCDBCEB
--创建带有级联删除的外键约束
alter table grade 
add constraint delfk_grade_id
foreign key (id) references stu(sno)
on delete cascade

insert into stu values('11','aa')
insert into grade values('11',80)
--修改学生aa,学号
update stu set sno='22' where name='aa'
--删除级联删除外键约束,重新创建级联更新外键
alter table grade
drop constraint delfk_grade_id

alter table grade 
add constraint updfk_grade_id
foreign key (id) references stu(sno)
on update cascade
--创建默认值对象，设置成绩默认值为60
create default scoredef as 60
insert into grade(id) values ('22')
--绑定默认值对象
sp_bindefault scoredef,'grade.score'
--解除默认值对象
sp_unbindefault 'grade.score'
--创建规则rule，指定范围
create rule scorerule
as @score>=0 and @score<=100
insert into grade(id) values ('102')
--绑定规则
sp_bindrule scorerule,'grade.score'
sp_unbindrule 'grade.score'
```

# 数据库命令7

```sql server
--查询指定列
select sno,sname from student
--查询李丹妮的学号
select sno,sname from student  where sname='李丹妮'
--查询年龄小于20的所有学生信息
select * from student where 2019-year(borndate)<20
--字符串比较符like
--检索所有姓刘的学生信息
select *from student where sname like '刘%'
--检索姓名第二个字是富
select *from student where sname like'_富%'
--检索姓名最后一个字是迪
select *from student where sname like'%迪'
--检索姓名中含有国
select *from student where sname like'%国%'
--检索电话号码4-7位为3597
select *from student where telephone like'___3597%'
--检索电话号码4-6位为442,第7位为0-7之间任意值的学生信息
select *from student where telephone like'___412[0-7]%'
--检索电话号码4-6位为442,第7位为8-9之间任意值的学生信息
select *from student where telephone like'___412[8-9]%'
--检索性别为女且2000年出生的学生信息
select *from student where ssex='女'and YEAR(borndate)=2000
--检索性别为女或2000年出生的学生信息
select *from student where ssex='女'or YEAR(borndate)=2000
--检索不姓刘的学生
select *from student where sname not like'刘%'
--检索出生日期在2000-7-7和2000-10-13之间的学生信息
select *from student where borndate between '2000-07-07'and'2000-10-13'
--查询三个学生的信息
--in多个值点等值比较
select *from student where sname in ('金鹏','吴伟娜','孙典')
select *from student where sname='金鹏'or sname='吴伟娜'or sname='孙典'
--向dept表中插入duty列为空值的记录
insert into dept(dno,deptname) values('0037','信息部')
select *from dept where duty is null
select *from student where comment is null
--按照价格升序显示图书信息
--asc|默认——升序；desc——降序
select *from book order by bprice desc
--distinct 去掉重复值
select distinct bpress from book
--as 为列起别名
select bpress as 出版社 from book
```
# 数据库命令8

```sql server
--1查询年龄在19到21岁的同学
select *from student where 2019-year(borndate) between 19 and 21
--2查询近三届学生
select *from student where 2018-year(enrolldate)<=2
--3查询计算机九班的学生
select *from student where classname='计算机九班'
--4查询地址为沈阳的学生
select *from student where address like '%沈阳%'
--5查询电话
select *from student where telephone like '1[^7-9]%'
--6
select *from student where address is null
--7
select *from student where sname like '[张,王,李]%'
select *from book order by bprice desc
--按价格降序排列,查询前6本图书信息
select top 6* from book order by bprice desc
--查询前6%图书信息
select top 6 percent* from book order by bprice desc
--按照价格降序排列,查询前6本图书信息
--同时,显示并列数据
select top 6 with ties *from book order by bprice desc
--查询book表中记录总数
select COUNT(*) from book
select AVG(bprice) from book
select SUM(bprice)/COUNT(*) from book
select MAX(bprice) from book
select MIN(bprice) from book
select SUM(bprice) from book

insert into book(bno,bname) values('1234554321','sql')
select *from book where bprice is null
select COUNT(bprice) from book
select *from book
select bpress,AVG(bprice) from book group by bpress
select bpress,AVG(bprice) from book group by bpress having AVG(bprice)<30
```

# 数据库命令9

```sql server
--1
select COUNT(sname) from student
--2
select deptno,COUNT(*) from teacher group by deptno
--3
select 2019-year(borndate) as age,COUNT(*) as number from student group by 2019- YEAR(borndate)
--4
select bpress,AVG(bprice) as 平均值 from book group by bpress having AVG(bprice)>30

select *from teacher
select *from dept
--内连接
--查询老师所在部门信息，显示老师名和部门名
select tname,deptname from teacher t join dept d on t.deptno=d.dno
--修改部门表部门编号为0001的部门编号改成100
update dept set dno='100' where dno='0001'
--外连接
--左外连接 显示左
--查询所有老师所在部门信息，显示老师名和部门名
select tname,deptname from teacher t left join dept d on t.deptno=d.dno
--外连接
--右外连接 显示右
--查询所有老师所在部门信息，显示老师名和部门名
select tname,deptname from teacher t right join dept d on t.deptno=d.dno
--全连接 全显示
--查询所有老师所在部门信息，显示老师名和部门名
select tname,deptname from teacher t full join dept d on t.deptno=d.dno
--交叉连接 两个表记录乘积
select COUNT(*) from teacher
select COUNT(*) from dept
select * from teacher cross join dept
自连接
--创建表
create table emp
(
	id int,
	name char(6),
	leaderid int
)
insert into emp(id,name) values(1,'aa')
insert into emp values(2,'bb',1)
--查看bb员工领导是谁
select e1.name,e2.name from emp e1 join emp e2 on e1.leaderid=e2.id
--子查询 将查询包含在其他语句里
/*
非相关子查询 子查询的执行不依赖于外部查询不显示传递给外部查询作为外部查询的条件
单值子查询 子查询返回一个值
多值子查询	子查询返回多个值
可以先写子查询 再写外部查询
*/
--非相关子查询
--单值子查询
--查询最高价格的书名和出版社
select bname,bpress from book where bprice=(select MAX(bprice) from book)
/*
多值子查询
any表示一次为真即为真
all 一次为假即为假
*/
--查询价格比所有清华大学出版社出版图书价格都高的图书书名及出版社
select bname,bpress,bprice from book where bprice>all(select bprice from book where bpress='清华大学出版社')
/*
相关子查询子查询依赖于外部查询
*/
--非相关子查询
--查询价格大于每个出版社平均价格的图书信息
select bno,bname,bprice,bpress from book as b1 where bprice >(select AVG(bprice) from book as b2 where b1.bpress=b2.bpress)
--带有exists的测试子查询
--查询没有借过任何图书的学生信息
select *from student where not exists(select *from ST_B where student.sno=ST_B.sno)
select *from student where sno not in(select sno from ST_B where student.sno=ST_B.sno)
--查询借过图书的学生信息
select *from student where exists(select *from ST_B where student.sno=ST_B.sno)

--查询借阅了摆渡人相关书籍的所有学生姓名
--子查询
select sname from student where sno in(select sno from ST_B where bno in(select bno from book where bname like '巴黎圣母院'))
--连接查询
select sname,bname from ST_B join book on ST_B.bno=book.bno join student on ST_B.sno=student.sno and bname='巴黎圣母院'
```
# 数据库命令10

```sql server
/*视图是一个虚拟表,不存储任何物理数据,数据库只存储视图的定义,视图由视图名和视图定义*/
/*集合操作符的视图,分组子句的视图,有集合函数的,连接表的视图没法更新*/
--创建视图V1
create view v1 as select t.tname,deptname from teacher t join dept d on t.deptno=d.dno
--查看视图数据
select *from v1
--创建视图V2
create view v2 as select student.sno,sname,bname from st_b join student on	(student.sno=st_b.sno) join book on(book.bno=st_b.bno)
select *from v2
--查看视图的定义
sp_helptext v2
--修改视图v2,制定列名为学号,姓名,借阅书名
alter view v2(学号,姓名,借阅书名)as select student.sno,sname,bname from st_b join student on (student.sno=st_b.sno) join book on(book.bno=st_b.bno)
select *from v2
--创建图书价格大于20的图书视图,并给视图加密
create view v3 with encryption as select * from book where bprice>70
select *from v3
sp_helptext v3
--向视图添加数据
insert into v3 values ('110','sql','教材','join','清华',50,'3324','21')
insert into v3(bname,bprice) values ('sqll',80)
select *from book
--修改视图v3添加约束
alter view v3 with encryption as select * from book where bprice>70 with check option
--删除视图
drop view v3
```

# 数据库命令11

```sql server
--存储过程
--只在创造时编译--可进行复杂操作--可重复使用--安全性高
--存储过程分类		系统存储过程前缀sp_  临时存储过程局部#全局##退出消失 远程存储过程
use bookmanager
--创建无参存储过程
--查询全部学生的学号和姓名
create procedure p1 as begin select sno,sname from student end
--执行/调用批处理过程
execute p1
--修改存储过程p1 查询男生的学号和姓名
alter procedure p1 as begin select sno,sname from student where ssex='男' end
--删除存储过程
drop procedure p1
--插入垃圾学生
insert into student(sname,sno) values('垃圾','1')
insert into ST_B(sno) values('1')
delete from ST_B where sno='1'
--根据学生的学号,删除这个学生的基本信息和借阅信息
--如果没有这个学号的学生,给出提示'无此学生'
create procedure p2 as 
begin 
			if exists(select * from student where sname='垃圾') 
			begin	
					delete from student where sno='1' 
					delete from ST_B where sno='1'
			end
			else print '无此学生'
end
execute p2
--查询某一学号学生的借阅信息
--如果借阅了图书，显示学号姓名借阅书名
--如果没借阅，提示'该生没有借书'
--查询学号为1
create procedure p3a as 
begin 
			if exists(select * from ST_B where sno='1') 
			begin	
					select student.sno,student.sname,book.bname from ST_B join student on ST_B.sno=student.sno join book on book.bno=ST_B.bno where ST_B.sno='1'
			end
			else print '该生没有借书'
end
execute p3a
--查询学号为1831030071
create procedure p3b as 
begin 
			if exists(select * from ST_B where sno='1831030071') 
			begin	
					select student.sno,student.sname,book.bname from ST_B join student on ST_B.sno=student.sno join book on book.bno=ST_B.bno where ST_B.sno='1831030071'
			end
			else print '该生没有借书'
end
execute p3b
--创建带有输入参数的存储过程
--查询指定学号学生的基本信息
create procedure p4 
	@no char(10)
as
begin 
		select * from student where sno=@no
end
--执行存储过程p4
execute p4 '1831030071'
```
# 数据库命令12

```sql server
use bookmanager
--创建存储进程检查某一个学号的学生的借书数量
create procedure bnum_of_student
	@sno char(10)
as
begin 
		if  exists(select ST_B.bno from ST_B where ST_B.sno=@sno) 
		begin 
				select COUNT(ST_B.bno) as num from ST_B where ST_B.sno=@sno group by ST_B.sno 
		end
		else print '0'
end
--查询朴城泽的借书数量
execute bnum_of_student '1831030071'
--查询未知学号的借书数量
execute bnum_of_student '1831030021'
--删除存储进程
drop procedure bnum_of_student
--创建存储进程检查老师信息

create procedure teacher_insert
	@tno char(10),
	@tname nchar(10),
	@tsex char(2),
	@borndate datetime,
	@deptno char(10)
as
begin 
		if  exists(select * from teacher where teacher.tno=@tno) 
		begin 
				select * from teacher where teacher.tno=@tno
		end
		else insert into teacher values (@tno,@tname,@tsex,@borndate,@deptno)
end
--检查王五老师的信息
execute teacher_insert '37','王五','男','1990-1-1','101'
--删除37号老师的信息
delete from teacher where teacher.tno='37'
--检查编号为01的老师的信息
execute teacher_insert '01','','','',''
--删除存储进程teacher_insert
drop procedure teacher_insert

--创建带有输入,输出参数的存储过称
--根据用户输入的学生编号，输出该生的姓名
create procedure p_stu
	@sno char(10),
	@sname char(10) output
as
begin 
		select @sname=student.sname from student where student.sno=@sno
end
declare @sname char(10)
execute p_stu '1831030071',@sname output
print @sname

--根据用户输入的书号和教师编号
--查询该教师的借书信息
--并自动修改应还书日期
--并将修改后的应还书日期输出
create procedure p_t
	@bno char(10),
	@tno char(10),
	@ybkdate datetime output
as
begin 
		if  exists(select * from  T_B where T_B.tno=@tno and T_B.bno=@bno)
		begin 
			update T_B set T_B.ybkdate=dateadd(dd,90,T_B.bdate) where T_B.tno=@tno and T_B.bno=@bno
			select @ybkdate=ybkdate from T_B where T_B.tno=@tno and T_B.bno=@bno
			print	@tno+@bno+'应还书日期'+left(convert(varchar(30),@ybkdate),10)
		end
		else 
				print('该教师未借此书')
end
declare @date datetime
execute p_t '1001','01',@date output
drop procedure p_t
```

# 数据库命令13

```sql server
use bookmanager
--触发器是一种特殊的存储过程
--区别触发器自动执行
--触发器分类
--按照触发事件不同
--DML触发器	DML数据操纵语	言 insert update delete select
--DDL触发器		DDL数据定义语言	create alter drop 
--按照被激活的时机不同
--after(for)触发器	在触发事件后执行
--instead of触发器	触发器体代替触发事件本身执行(用于修改视图)
--两个临时表		inserted表	(插入或修改的新值)	deleted表(删除或修改的原值)   (触发器执行完毕后自动删除)

--DMl触发器
--创建insert触发器
--当向学生表插入记录的同时，提示当前执行的是插入操作

drop trigger tr1
create trigger tr1
on student 
for insert
as
begin
	print		'当前执行的是插入操作'
end
--执行insert
insert into student (sno,sname) values('0001','aa')

--当向学生表插入记录的同时,显示出插入信息
drop trigger tr2
create trigger tr2
on student
for insert
as
begin
	select sno,sname from inserted
end
insert into student (sno,sname) values('0002','bb')

create trigger tr3
on teacher
for delete
as
begin
	select tno,tname from deleted
end
drop trigger tr3
delete from teacher where tno='02'

--当修改学生借阅表时，将修改之前的数据显示出来，同时显示修改之后的数据
drop trigger tr4
create trigger tr4
on ST_B
for update
as
begin
	print('原值为')
	select * from deleted
	print('新值为')
	select * from inserted
end
update ST_B set sno='01' where sno='1831030071'
update ST_B set sno='1831030071' where sno='01'

--删除一个学生信息的同时删除该生的所有借阅信息
create trigger tr5
on student
for delete
as
begin
		delete from ST_B where ST_B.sno=(select sno from deleted)
end
insert into student(sno) values('垃圾')
insert into ST_B values ('垃圾','垃圾','2012-12-30','2012-12-30','2012-12-30')

delete from student where (sno='垃圾')
drop trigger tr5

--在更新某个学生学号的同时，更新该生借阅表中的信心
create trigger tr6
on student
for update
as
begin
		update ST_B set ST_B.sno=(select sno from inserted) where ST_B.sno=(select sno from deleted)
end
insert into student(sno) values('垃圾')
insert into ST_B values ('垃圾','垃圾','2012-12-30','2012-12-30','2012-12-30')
update student set sno='垃圾垃圾' where sno='垃圾'

delete from student where (sno='垃圾垃圾')
delete from ST_B where (sno='垃圾垃圾')
drop trigger tr6

--当学生借书的同时，生成对应的应还书日期
create trigger tr7
on ST_B
for insert
as
begin
		update ST_B set ybkdate=DATEADD(DD,30,bdate) 
		where sno=(select sno from inserted )
		and bno=(select bno from inserted) 
		and bdate=(select bdate from inserted)
end
insert ST_B(sno,bno,bdate) values('垃圾','垃圾','2012-12-30')
delete from ST_B where (sno='垃圾')
drop trigger tr7

--DDL触发器
--禁止对bookmanger数据库中的任何表进行删除
create trigger ddltr
on database 
for  drop_table--/alter_table
as
begin
		rollback--回滚
		print('不能删除数据库中的表')
end
create table  stu
(
	sno char(10) primary key,
	name char(8) not null,
	age int check(age between 20 and 24),
	school char(10) default '沈阳工学院'
)
drop table stu
drop trigger ddiltr
--禁用触发器
disable trigger tr1 on student
--启用触发器
enable trigger tr1 on student
--删除触发器
drop trigger tr1
```
# 数据库命令14
```sql server
--创建登录名s1
create login s1 with password='sql server2008',default_database=master
--创建Windows模式登录名
--1	创建windows账户
--2	创建windows登录名
create login [PC\t1] from windows
--修改登陆名
--1	修改密码
alter login s1 with password='sqlserver'
--2	修改登陆名的状态,启用|禁用
alter login s1 disable 
alter login s1 enable
--创建用户
use bookmanager
create user s01 for login s1
--创建角色(权限的集合)
create role r1 
--分配用户角色(将角色r1分配给s01)(为角色添加一个用户成员)
execute sp_addrolemember 'r1','s01'
--分配权限给角色
--给r1角色能够查询student表的权限
grant select on student to r1

create login t1 with password='sql server2008',default_database=master
create user t01 for login t1
create role r2 
execute sp_addrolemember 't1','t01'
SELECT TOP 10* FROM T_STUDENT_INFO WHERE STUDENT_ID NOT IN(SELECT TOP 40 STUDENT_ID FROM T_STUDENT_INFO);//查询第10行到20行数据
```