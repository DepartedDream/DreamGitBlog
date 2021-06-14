# JavaScript介绍

JavaScript是弱类型的客户端端脚本语言

# JavaScript引入JS

```html
<!--html中写入JavaScript脚本-->
<script>JavaScript代码</script>
<!-- 引入外部js文件 -->
<script src="myScript.js" type="text/javascript"></script>
```

* script标签可以写在html文件的任何地方

# JavaScript注释

```javascript
//单行注释
/*多行注释
多行注释*/
```

# JavaScript定义变量

```javascript
var a;
```

# JavaScript定义方法

```javascript
function functionname(x,y)
{
    //执行代码
}
```

* 注意JavaScript对大小写敏感。
* javaScript是弱类型语言，不用定义数据类型

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