# JavaScript介绍

JavaScript是弱类型的客户端端脚本语言

# JavaScript基本语法

html中写入JavaScript脚本
```javascript
<script/>JavaScript代码</script>
```

引入外部js文件
```javascript
<script src="myScript.js"></script>
```

* 注意:那些老旧的实例可能会在script标签中使用 type="text/javascript"。现在已经不必这样做了。JavaScript 是所有现代浏览器以及 HTML5 中的默认脚本语言。
* script标签可以写在html文件的任何地方

# JavaScript注释

```javascript
//单行注释

/*多行注释
多行注释
多行注释*/
```

# JavaScript定义变量

```
var a;
```

# JavaScript定义方法

```javascript
function functionname(x,y)
{
    // 执行代码
}
```

* 注意JavaScript对大小写敏感。
* javaScript是弱类型语言，不用定义数据类型

# JavaScript对象

## JavaScript定义对象

```javascript
var person = {
    firstName: "John",
    lastName : "Doe",
    id : 5566,
    fullName : function() 
	{
       return this.firstName + " " + this.lastName;
    }
}
```
## JavaScript定义数组

```javascript
var myCars=new Array();
myCars[0]="Saab";      
myCars[1]="Volvo";
myCars[2]="BMW";
```
```javascript
var myCars=new Array("Saab","Volvo","BMW");
```
```javascript
var myCars=["Saab","Volvo","BMW"];
```

## JavaScript访问对像属性

```javascript
person["lastName"];
```

## JavaScript访问对象方法

```javascript
person.fullName();
```

# JavaScript流程控制语句

## switch判断语句

```javascript
switch(n)
{
    case 1:
        执行代码块 1
        break;
    case 2:
        执行代码块 2
        break;
    default:
        与 case 1 和 case 2 不同时执行的代码
}
```

## if-else判断语句

```javascript
if (time<20)
{
    x="Good day";
}
else if(time>20)
{
    x="asd";
}
else
{
    x="Good evening";
}
```

## for循环语句

```javascript
for (var i=0;i<cars.length;i++)
{ 
    document.write(cars[i] + "<br>");
}
```

## while循环语句

```javascript
while (i<5)
{
    x=x + "The number is " + i + "<br>";
    i++;
}
```

# JavaScript特点

* 区分大小写
* 函数内的变量没有作用域