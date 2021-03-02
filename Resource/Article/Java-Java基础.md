# Java基本数据类型
数据类型|默认值
--|--
byte|	0
short|	0
int	|0|
long|	0L
float|	0.0f
double|	0.0d
char|	'u0000'
boolean	|false
# Java数组
* 声明一位数组
```
数组名 = new 数据类型[数组大小];
```
* 声明多维数组
```
type[][] typeName = new type[typeLength1][typeLength2];
```
* 引用数组
```
数组名[索引]
```
# Java修饰符
## 访问控制修饰符
## 非访问控制修饰符
修饰符	当前类	同一包内	子孙类(同一包)	子孙类(不同包)	其他包
public	Y	Y	Y	Y	Y
protected	Y	Y	Y	Y/N（说明）	N
default	Y	Y	Y	N	N
private	Y	N	N	N	N
# Java程序结构
## 顺序
## 循环
### for
for(初始化; 布尔表达式; 更新) {
    //代码语句
}
### for-each
```
for(type element: array)
{
    System.out.println(element);
}
```
### while
```
while( 布尔表达式 ) {
  //循环内容
}
```
### do while
```
do {
       //代码语句
}while(布尔表达式);
```
## 选择
### if
if(布尔表达式 1){
   //如果布尔表达式 1的值为true执行代码
}else if(布尔表达式 2){
   //如果布尔表达式 2的值为true执行代码
}else if(布尔表达式 3){
   //如果布尔表达式 3的值为true执行代码
}else {
   //如果以上布尔表达式都不为true执行代码
}
### switch case
```
switch(expression){
    case value :
       //语句
       break; //可选
    case value :
       //语句
       break; //可选
    //你可以有任意数量的case语句
    default : //可选
       //语句
}
```

# Java方法
# Java面向对象
* 继承关键字 extends
* 接口声明 
```
[可见度] interface 接口名称 [extends 其他的接口名] {
        // 声明变量
        // 抽象方法
}
```
# Java Stream,File,IO类

# java.util.Scanner
1. 创建 Scanner 对象的基本语法：
```Java
Scanner s = new Scanner(System.in);
```
方法|作用
--|--
void next()|读取字符后任意分隔符结束
void nextLine()|读取字符回车结束
## next()
1、读取到有效字符后才可以结束输入。
2、不读取空格.
3、将空格键、Tab键或Enter键等视为分隔符或结束符.
## neatLine()
1、以Enter为结束符,也就是说 nextLine()方法返回的是输入回车之前的所有字符。
2、可以获得空白。
# Java.util.Data
方法|作用
--|--
boolean after(Date date)|若当调用此方法的Date对象在指定日期之后返回true,否则返回false。
boolean before(Date date)|若当调用此方法的Date对象在指定日期之前返回true,否则返回false。
Object clone( )|返回此对象的副本。
int compareTo(Date date)|比较当调用此方法的Date对象和指定日期。两者相等时候返回0。调用对象在指定日期之前则返回负数。调用对象在指定日期之后则返回正数。
int compareTo(Object obj)|若obj是Date类型则操作等同于compareTo(Date) 。否则它抛出ClassCastException。
boolean equals(Object date)|当调用此方法的Date对象和指定日期相等时候返回true,否则返回false。
long getTime( )|返回自 1970 年 1 月 1 日 00:00:00 GMT 以来此 Date 对象表示的毫秒数。
int hashCode( )| 返回此对象的哈希码值。
void setTime(long time)|用自1970年1月1日00:00:00 GMT以后time毫秒数设置时间和日期。
String toString( )|把此 Date 对象转换为以下形式的 String： dow mon dd hh:mm:ss zzz yyyy 其中： dow 是一周中的某一天 (Sun, Mon, Tue, Wed, Thu, Fri, Sat)。

## final修饰符
final 常量字段必须在**声明时**或**在类的构造方法内**或**初始化代码块**赋值一次
常量字段的值无法修改
## 
java工作空间等于C#的解决方案
## 标识符的命名规则
* 标识符以由大小写字母、数字、下划线(_)和美元符号($)组成，但是不能以数字开头。
* 大小写敏感
* 不能与Java语言的关键字重名
* 不能和Java类库的类名重名

# 可变形参
# 静态初始化代码块
# 初始化代码块
# 重载
方法名相同
返回值相同

# 重写
派生类对基类的同名方法进行重写
# 值类型
1，整型3种 byte，short，int，long
2，浮点型2种 float，double
3，字符型1种 char
4，逻辑型1种 boolean
# 方法语法
[修饰符] 返回值类型 方法名 (参数) {方法体}