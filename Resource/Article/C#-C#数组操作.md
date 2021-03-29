# 数组的定义

```csharp
int[] numbers = new int[5];//一维数组
string[,] names = new string[5, 4];// 多维数组2维长度为5，1维长度为4
byte[][] scores = new byte[5][];// 数组的数组（交错数组）
```

# array.Rank--获取数组的维度

```csharp
namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] numberArray = new int[2,3];
            Console.WriteLine($"数组的维度为{numberArray.Rank}");
            Console.ReadKey();
        }
    }
}
```

```
数组的维度为2
```

# array.Length--数组的长度

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] numberArray = new int[2,3];
            Console.WriteLine($"数组的元素总数为{numberArray.Length}");
            Console.ReadKey();
        }
    }
}
```

```
数组的元素总数为6
```

# Array.Clear()--将数组某个范围的元素设置为其默认值

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numberArray = { 0, 1, 2, 3, 4, 5, 6,7, 8, 9 };
            Array.Clear(numberArray, 0, 3);
            foreach (int numer in numberArray)
            {
                Console.Write(numer);
            }
            Console.Write("\n");
            Console.ReadKey();
        }
    }
}
```

```
0003456789
```

# Array.Resize()--将一维数组转化为指定长度

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numberArray = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            Array.Resize(ref numberArray, 5);
            foreach (int number in numberArray) 
            {
                Console.Write(number);
            }
            Console.Write("\n");
            Console.ReadKey();
        }
    }
}
```

```
01234
```

# Array.Reverse()--将数组的顺序反转


```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numberArray = { 0, 1, 2, 3, 4, 5, 6,7, 8, 9};
            Array.Reverse(numberArray);
            foreach (int nubmer in numberArray)
            {
                Console.Write(number);
            }
            Console.Write("\n");
            Console.ReadKey();
        }
    }
}
```

```
9876543210
```

# Array.Sort()--将数组进行排序

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numberArray = { 0, 1, 2, 3, 4, 5, 6,7, 8, 9};
            Array.Reverse(numberArray);
            foreach (int number in numberArray)
            {
                Console.Write(number);
            }
            Console.Write("\n");
            Console.ReadKey();
        }
    }
}
```

```
0123456789
```

# array.GetLength()--返回数组指定维度的长度

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] numberArray = new int[2,3];
            Console.WriteLine($"数组的2维的长度为{numberArray.GetLength(1)}");
            Console.ReadKey();
        }
    }
}
```

```
数组的2维的长度为3
```