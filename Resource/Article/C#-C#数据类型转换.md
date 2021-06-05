# C#的数据转换方法
## 隐式转换

* 隐式转换是编译器自动进行的数据转换，只有不会引发异常的转换才能被编译器进行隐式转换。
* 隐式转换不推荐使用，隐式转换不能清楚地告知其他开发者正在执行的操作。
* 扩大转换一般可以进行隐式转换

## 显示转换/强制转换

```csharp
string a=(string)32
```

* 若要执行强制转换，请使用转换运算符()将数据类型括起来，然后将其放在要转换的变量旁边。
* 显示转换/强制类型转换：你需要将值从一种数据类型更改为另一种数据类型，并且该更改可能引发运行时异常时，应该执行显示数据转换

## 自定义转换

* 用户可以通过声明自定义转换，实现类之间的显式和隐式转换

```csharp
namespace TestConsole
{
    public class People 
    {
        public int Age { get; set; }
        public string Name { get; set; }
        public string Sex { get; set; }
        public static implicit operator People(Man man) 
        {
            return new People() {Age=man.Age,Name=man.Name,Sex=man.Sex};
        }
        public static implicit operator People(Woman woman)
        {
            return new People() { Age = woman.Age, Name = woman.Name, Sex = woman.Sex };
        }
    }

    public class Man
    {
        public int Age { get; set; }
        public string Name { get; set; }
        public string Sex { get; set; }
        public static explicit operator Man(People people)
        {
            return new Man() { Age = people.Age, Name = people.Name,Sex= "男" };
        }
    }

    public class Woman
    {
        public int Age { get; set; }
        public string Name { get; set; }
        public string Sex { get; set; }
        public static explicit operator Woman(People people)
        {
            return new Woman() { Age = people.Age, Name = people.Name, Sex ="女" };
        }
    }

    static class Program
    {
        static void Main(string[] args)
        {
            People people = new People() { Age = 18, Name = "asd" };
            Man man = (Man)people;
            Woman woman = (Woman)people;
            People manPeople = man;
            People womanPeople = woman;
        }
    }
}
```

* 声明为 implicit 的转换在需要时自动进行
* 声明为 explicit 的转换需要调用强制转换
* 所有转换都必须声明为 static

## 使用帮助程序类的转换

* Convert静态类支持大多数.net中的数据类型转换
* 内置数值类型的Parse方法和TryParse方法用于将字符串转化为当前类
* TryParse方法不会抛出异常，而是会返回布尔值来指示操作是否成功
* object类的ToString方法可以将.net的基本数据类型直接转换为字符串

# 数据转换的其它概念
## 装箱与拆箱

* 装箱指将值数据类型转换为引用数据类型
* 拆箱指将引用数据类型转换为值数据类型

# 扩大转换与收缩转换

* 扩大转换:表示你试图将将值从一种可以保留较少信息的数据类型转换为一种可保留较多信息的数据类型，例如int转decimal。在这种情况下，不会丢失信息。
* 收缩转换:表示你试图将值从一种可以保留较多信息的数据类型转换为一种可保留较少信息的数据类型。例如decimal转int。在这种情况下，可能会丢失信息。

# 数据类型转换注意事项

* char数据类型的字符转化为数字为其对应的ascii码，相反亦是如此。

# 索引

[在 C# 中使用强制转换和转换方法转换数据类型](https://docs.microsoft.com/zh-cn/learn/modules/csharp-convert-cast/)
[.NET 中的类型转换表](https://docs.microsoft.com/zh-cn/dotnet/standard/base-types/conversion-tables)
[强制转换和类型转换（C# 编程指南）](https://docs.microsoft.com/zh-cn/previous-versions/visualstudio/visual-studio-2008/ms173105(v=vs.90))