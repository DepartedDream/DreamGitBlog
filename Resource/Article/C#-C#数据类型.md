# 内置类型

内置类型：在C#中可以直接通过关键字声明的类型为内置类型，这些内置类型关键字都有一个与映射的类。

# 值类型与引用类型

* [值类型微软文档](https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/value-types)
* 所有值类型都隐式继承自类 System.ValueType类

## 简单值类型

* 简单值类型包括char和bool类型

## 整形值类型

* 有符号整形值类型取值范围排序:sbyte < int < short < long
* 无符号整形值类型取值范围排序:byte < uint < ushort < ulong

## 枚举类型

* [枚举类型微软文档](https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/enum)
* 枚举类型是由一组命名的值类型常量定义的值类型。
* 枚举常用于定义一组常用的常量，例如星期，季节等

### 定义枚举

* 枚举类型本质上是值类型
* 枚举类型的成员可以显示赋值
* 枚举类型的成员不显示赋值的情况下从0开始按1递增

```csharp
public enum Days()
{
    None      = 0
    Monday    = 1
    Tuesday   = 2
    Wednesday = 3
    Thursday  = 4
    Friday    = 5
    Saturday  = 6
    Sunday    = 7
}
```

### 作为位标志的枚举类型

* 如果希望枚举类型表示选项组合，请将成员定义为位字段
* 位字段即2的幂所得数
* 可以使用按位逻辑运算符|或 & 分别合并选项或交叉组合选项
* 若要指示枚举类型声明位字段，请对其应用 Flags 属性

```csharp
[Flags]
public enum Days()
{
    None      = 0b_0000_0000,  // 0
    Monday    = 0b_0000_0001,  // 1
    Tuesday   = 0b_0000_0010,  // 2
    Wednesday = 0b_0000_0100,  // 4
    Thursday  = 0b_0000_1000,  // 8
    Friday    = 0b_0001_0000,  // 16
    Saturday  = 0b_0010_0000,  // 32
    Sunday    = 0b_0100_0000,  // 64
    Weekend   = Saturday | Sunday
}
public class FlagsEnumExample
{
    public static void Main()
    {
        Days a = Days.Monday|Days.Wednesday|Days.Saturday;
        Days b= (Days)37;
        Console.WriteLine(a);
        Console.WriteLine(b);
        Console.ReadLine();
        //Output:
        //Monday, Wednesday, Saturday
        //Monday, Wednesday, Saturday三个数值分别为1 100 100000
        //1,100,100000分别进行或运算后为100101
        //37的二进制值为100101
        //分别对应Monday, Wednesday, Saturday的二进制位
    }
}
```

### 转换

* 枚举类型与其基础整型类型之间存在显式转换

```csharp
Days a = (Days)2;
Console.WriteLine(c);
//output:Tuesday
Days b = (Days)22;
Console.WriteLine(c);
//output:22
Console.WriteLine(Days.Monday);
//output:Monday
Console.WriteLine(Days.Monday.ToString());
//output:Monday
Console.WriteLine((int)Days.Monday);
//output:1
```

## 浮点型值类型

* 浮点型值类型型取值范围排序float < double < decimal
* float和double采用二进制进行存储，在计算时可能出现较小的误差
* decimal采用十进制存储，计算精准，但会占用较多内存
* float定义时数字后要加f,double加d,decimal加m
* 整数不加后缀默认数据类型为int
* 小数不加后缀默认数据类型为double
* 在进行数值计算时，计算结果的数据类型与精度高的变量相同

## 结构类型/自定义值类型

* [结构类型微软文档](https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/struct)
* 结构类型类似于一个值类型的类，或者说一个可以自定义的值类型
* 结构类型是一种可封装数据和相关功能的值类型

# 引用类型

* [引用类型微软文档](https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/reference-types)
* 引用类型都继承于object类
* 引用类型包括数组、类、接口和字符串
* 引用类型变量存储的是对象的引用
* 引用类型的引用存储在栈中，对象存储在堆中
* 引用类型，两种变量可引用同一对象；因此，对一个变量执行的操作会影响另一个变量所引用的对象
* String类型在进行修改时创建的是新的String对象，固不会影响之前的变量

# 参考

[在 C# 代码中选择正确的数据类型](https://docs.microsoft.com/zh-cn/learn/modules/csharp-choose-data-type/)