# 委托
委托可以理解为参数化的方法，委托的能够使得方法能通过参数进行传递

# 委托的声明
委托可以声明在命名空间内/外，也可以声明在其它的类内部，通过delegate关键字声明,声明后要声明委托的参数和返回值，之后绑定的方法要符合委托的参数和返回值。

```csharp
namespace ConsoleApp1
{
    public delegate void MyDelegate (string a)   
}
```

# 委托的使用

声明委托后，要对委托进行实例化

```csharp
namespace ConsoleApp1
{
    class Program
    {
        public delegate void MyDelegate(string a);
        public static MyDelegate myDelegate;
    }
}
```

# 委托绑定和解绑方法

使用+=方法名
使用-=方法名

## 定义方法后为委托赋值

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
    }
}
```

## 使用lambda表达式赋值

```csharp
class Program
{
    public delegate void MyDelegate(string a);//定义委托
    public static MyDelegate myDelegate;//实例化委托

    static void Main(string[] args)
    {
        myDelegate += (a) => Console.WriteLine(a);
        myDelegate -= (a) => Console.WriteLine(a);
    }
}
```

# 委托的应用
winform框架中的事件就是一种的特殊的委托，只要想要绑定在事件上的方法与该事件委托的参数和返回值相同，方法就能够被绑定在事件的委托上。