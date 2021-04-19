# 委托

* 委托定义一般与类同级，它对指定的一类方法进行了规范
* 通过调用委托，可以使得方法内调用符合委托的所有方法

# 委托的使用

```csharp
public delegate void MyDelegate(string a);//定义委托
public static class Program
{
    public static MyDelegate myDelegate;//实例化委托
    public static void Main(string[] args)
    {
        myDelegate += test;
        myDelegate -= test;
        myDelegate += (a) => Console.WriteLine(a);
        myDelegate -= (a) => Console.WriteLine(a);
    }
    public static void test(string a) { Console.WriteLine(); }
}
```

# 事件

* 事件实际为一个实例化的委托
* 事件一般定义在一个类内部

```csharp
public delegate void HelloDelegate();
class Program
{
    public static event HelloDelegate HelloEvent;
    static void Main(string[] args)
    {
        HelloEvent += () => Console.WriteLine("HelloWorld");
        Hello();
    }
    public static void Hello() 
    {
        HelloEvent();
    }
}
```