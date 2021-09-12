# DateTime()--构造方法生成DateTime类实例
```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime dateTime = new DateTime(2012,12,12,22,22,22);
            Console.WriteLine($"当前时间为{dateTime.ToString()}");
            Console.ReadKey();
        }
    }
}
```

```
时间为2012/12/12 22:22:22
```

# DateTime.MinValue--DateTime类时间的最小值

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(DateTime.MinValue);
            Console.ReadKey();
        }
    }
}
```

```
0001/1/1 0:00:00
```

# DateTime.MaxValue--DateTime类时间的最大值

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(DateTime.MaxValue);
            Console.ReadKey();
        }
    }
}
```

```
9999/12/31 23:59:59
```

# DateTime.Today--返回本地当前日期

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"北京日期:{DateTime.Today}");
            Console.ReadLine();
        }
    }
}
```

```
北京日期:2020/12/23 0:00:00
```

# DateTime.Now--获取本地当前日期和时间

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"北京时间:{DateTime.Now}");
            Console.ReadLine();
        }
    }
}
```

```
北京时间:2020/12/23 14:54:39
```

# DateTime.UTC--返回当前的协调通用时间


```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"北京时间:{DateTime.Now}");
            Console.WriteLine($"协调世界时:{DateTime.UtcNow}");
            Console.ReadLine();
        }
    }
}

```

```
北京时间:2020/12/23 14:54:25
协调世界时:2020/12/23 6:54:25
```

# DateTime.DaysInMonth()--返回指定年份指定月有多少天

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(DateTime.DaysInMonth(2010, 1));
            Console.ReadLine();
        }
    }
}
```

```
31
```

# DateTime.IsLeapYear()--判断指定的年份是否闰年

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime dateTime = new DateTime(2008, 12, 20);
            if (DateTime.IsLeapYear(dateTime.Year))
            {
                Console.WriteLine($"{dateTime.Year}年是闰年");
            }
            else
            {
                Console.WriteLine($"{dateTime.Year}年不是闰年");
            }
            Console.ReadKey();
        }
    }
}
```

```
2008年是闰年
```

# dateTime.Add()--将指定的时间间隔类添加到日期类

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime dateTime = new DateTime(2012,12,12,22,22,22);
            Console.WriteLine($"当前时间为{dateTime.ToString()}");
            Console.WriteLine($"2小时后时间为{dateTime.Add(new TimeSpan(2, 0, 0))}");
            Console.ReadKey();
        }
    }
}
```

```
时间为2012/12/12 22:22:22
2小时后时间为2012/12/13 0:22:22
```

# dateTime.DayOfWeek--返回实例日期为星期几

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(new DateTime(2020,10,10).DayOfWeek);
            Console.ReadKey();
        }
    }
}
```
```
Saturday
```

# dateTime.DayofYear--返回当前日期实例为该年的第几天

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(new DateTime(2020,1,1).DayOfYear);
            Console.ReadKey();
        }
    }
}
```

```
1
```

# TimeSpan()--构造方法生成TimeSpan类实例

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime startDateTime = new DateTime(2012, 7, 1);
            DateTime endDateTime = new DateTime(2002, 12, 1);
            Console.WriteLine(startDateTime- endDateTime);//使用DateTime类相减也可以生成timeSpan类
            TimeSpan timeSpan = new TimeSpan(12, 22, 22);
            Console.WriteLine(timeSpan);
            Console.ReadKey();
        }
    }
}
```

```
3500.00:00:00
12:22:22
```

# timeSpan.Duration()--返回当前时间间隔的绝对值

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            TimeSpan timeSpan = new TimeSpan(-24,00,00);
            Console.WriteLine(timeSpan);
            Console.WriteLine(timeSpan.Duration());
            Console.ReadLine();
        }
    }
}
```
```
-1.00:00:00
1.00:00:00
```