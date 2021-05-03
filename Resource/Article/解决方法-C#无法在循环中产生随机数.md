# 问题描述

* C#无法在循环中产生随机数

```csharp
namespace TestConsole
{
    static class Program
    {
        static void Main(string[] args)
        {
            Console.Write("产生随机数");
            for(int i=0; i<= 20;i++) 
            {
                Random random = new Random();
                Console.Write($"--{random.Next(1, 100)}");
            }
            Console.ReadLine();
        }
    }
}
```

# 解决方法

* random相关的函数默认将机器时间转为int作为随机数种子，并以此产生随机数
* 这种做法存在一个问题,在循环内部使用random操作时，循环周期很短
* 就会造成短时间内随机数种子相同，随机数相同，无法产生随机数
* 解决方法即通过random的构造函数将循环变量作为随机数种子即可

```csharp
namespace TestConsole
{
    static class Program
    {
        static void Main(string[] args)
        {
            Console.Write("改进产生随机数");
            for (int i = 0; i <= 20; i++)
            {
                Random random = new Random(i);
                Console.Write($"--{ random.Next(1, 100)}");
            }
            Console.ReadLine();
        }
    }
}
```