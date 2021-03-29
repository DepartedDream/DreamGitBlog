# 线程基本方法

```csharp
using System;
using System.Threading;
namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            Thread thread1 = new Thread((word) =>//有参线程用于显示指定的文字
            {
                while (true) 
                {
                    Thread.Sleep(1000);
                    Console.Write(word);
                }
            });
            Thread thread2 = new Thread(() =>//无参线程用于显示已经过去多少时间
            {
                int totalTime = 0;
                while (true)
                {
                    Thread.Sleep(1000);
                    totalTime += 1;
                    Console.Write($"已经过去了{totalTime}秒\n");
                }
            });
            thread1.Start("时间");//初始化有参线程
            thread2.Start();//初始化无参线程
            thread1.Join(3500);//使主线程等待线程1运行3.5秒
            thread1.Abort();//结束线程1
            thread2.Abort();//结束线程2
            Console.ReadKey();
        }
    }
}
```

```
时间已经过去了1秒
时间已经过去了2秒
时间已经过去了3秒
```