# js作用域

```csharp
int a=0;
if(a==0)
{
    int b=0;
}
Console.WriteLine(b);
```

```javascript
var a=0;
if(a==0)
{
    var b=0;
}
console.log(b);
```

* 由于C#存在块级作用域的概念，所以b变量只能在if语句块内存在定义
* js没有块级作用域的概念，所以b变量的作用域覆盖整个函数