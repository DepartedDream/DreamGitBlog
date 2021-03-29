# 介绍
Lambda表达式是一种特殊的C#写法，可以简单的定义方法体。

# Lambda表达式的表现形式

```
表达式形式：Input Param=>Expression
```

当表达式为多行时

```
表达式形式：Input Param=>{Expression1,Expression2}
```

# Lambda表达式的应用

## 给委托赋值

```csharp
public static MyDelegate myDelegate;
static void Main(string[] args)
{
    myDelegate += (a) => { Console.WriteLine(a); Console.WriteLine("b"); };
    Console.ReadKey();
}
```