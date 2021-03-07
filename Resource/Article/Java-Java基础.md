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

## for

```javascript
for(初始化; 布尔表达式; 更新) {
    //代码语句
}
```
## for-each

```javascript
for(type element: array)
{
    System.out.println(element);
}
```

## while

```javascript
while( 布尔表达式 ) {
  //循环内容
}
```

## do while

```javascript
do {
       //代码语句
}while(布尔表达式);
```

## if
```javascript
if(布尔表达式 1){
   //如果布尔表达式 1的值为true执行代码
}else if(布尔表达式 2){
   //如果布尔表达式 2的值为true执行代码
}else if(布尔表达式 3){
   //如果布尔表达式 3的值为true执行代码
}else {
   //如果以上布尔表达式都不为true执行代码
}
```

## switch case

```javascript
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