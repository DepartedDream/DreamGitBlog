# 定义枚举

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

# 作为位标志的枚举类型

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

# 转换

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