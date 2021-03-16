# 委托

* 委托可以理解为参数化的方法，委托的能够使得方法能通过参数进行传递

# 委托的使用

```csharp
class Program
{
    public delegate void MyDelegate(string a);//定义委托
    public static MyDelegate myDelegate;//实例化委托

    static void Main(string[] args)
    {
        void test(string a) { Console.WriteLine(); };
        myDelegate += test;
        myDelegate -= test;
        myDelegate += (a) => Console.WriteLine(a);
        myDelegate -= (a) => Console.WriteLine(a);
    }
}
```

# 事件

* 事件可以理解为实例化的委托
* 通过事件可以让一个方法在执行时触发另一个方法

```csharp
class Program
{
    public delegate void HelloDelegate();
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