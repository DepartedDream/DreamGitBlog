# 可选参数

* 通过可选参数，你可以为某些形参省略实参
* 可选参数可与方法、索引器、构造函数和委托一起使用

```csharp
public void Hello(string word = "hello wolrd",int time=1){}
```

# 命名实参

* 命名实参可以为形参指定实参
* 命名实参是将实参与该形参的名称匹配，而不是与形参在形参列表中的位置匹配。
* 命名实参可与方法、索引器、构造函数和委托一起使用

```csharp
people.Hello(word:"hello world",time:1);
```

# 实例

```csharp
namespace TestConsole
{
    public class People 
    {
        public void Hello(string word = "hello wolrd",int time=1)
        {
            for(int i = 0; i <time; i++) 
            {
                Console.WriteLine(word);
            }
        }
    }

    static class Program
    {
        static void Main(string[] args)
        {
            People people = new People();
            people.Hello();
            people.Hello(time:1);
            people.Hello("你好啊");
            people.Hello("你好", 5);
            Console.ReadLine();
        }
    }
}
```

* 每个可选形参都有一个默认值作为其定义的一部分
* 如果没有为该形参发送实参，则使用默认值
* 提供参数时，若果要跳过某个参数，后面的实参必须使用命名实参方法声明

# 参考

[命名实参和可选实参（C# 编程指南）](https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/classes-and-structs/named-and-optional-arguments)