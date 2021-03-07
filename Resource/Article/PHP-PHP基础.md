# PHP介绍

php是弱类型的服务器端脚本语言

# PHP基本语法

html中写入的php
```php
<?php代码?>
```

# PHP注释

```php
<?
    //单行注释
    /*多行注释*/
?>
```

# PHP定义变量

PHP 没有声明变量的命令。变量在您第一次赋值给它的时候被创建：

```php
<?
    $x="asd";
?>
```
# PHP定义常量

>bool define ( string $name , mixed $value [, bool $case_insensitive = false ] )

该函数有三个参数:
* name：必选参数，常量名称，即标志符。
* value：必选参数，常量的值。
* case_insensitive ：可选参数，如果设置为 TRUE，该常量则大小写不敏感。默认是大小写敏感的。

# PHP定义方法

```php
<?
function functionName()
{
    // 要执行的代码
}
?>
```

# PHP定义数组
## PHP定义数值数组

```php
$cars=array("Volvo","BMW","Toyota");
```

```php
$cars[0]="Volvo";
$cars[1]="BMW";
$cars[2]="Toyota";
```

## PHP定义关联数组

```php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
```

```php
$age['Peter']="35";
$age['Ben']="37";
$age['Joe']="43";
```

# PHP定义对象

```php
<?php
class phpClass {
  var $var1;
  var $var2 = "constant string";
  
  function myfunc ($arg1, $arg2) {
  }
}
?>
```
# PHP引用外部文件

```PHP
<?include "文件名.php";?>
```

# PHP数据库语句

## php数据查询

```PHP
$conn=mysql_connect('localhost','root','Abc123');
mysql_select_db("Overwatch",$conn);//选择数据库
mysql_query("set names UTF8");//设置编码方式
$result=mysql_query("select * from Skill");
while($row=mysql_fetch_assoc($result))
{
    $skillId=$row["SkillId"];
    $skillName=$row["SkillName"];
    $skillDetail=$row["SkillDetail"];
}
```

# php数据更改

```PHP
$conn=mysql_connect('localhost','root','Abc123');
mysql_select_db("Overwatch",$conn);//选择数据库
mysql_query("set names UTF8");//设置编码方式
mysql_query("update Hero set HeroId='1'");//更新数据
if(mysql_affected_rows()>0)//确认受影响的行数
{
    $status="true";
}
else
{
    $status="false";
}
```