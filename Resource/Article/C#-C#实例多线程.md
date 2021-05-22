# 初始化无参线程与有参线程

```csharp
namespace TestConsole
{
    static class Program
    {
        private static Thread thread1;
        private static Thread thread2;
        static void Main(string[] args)
        {
            thread1 = new Thread((object time) =>//有参线程用于显示指定的文字
            {
                thread2.Start();//初始化无参线程
                thread2.Join();//使线程1等待线程2执行
                for (int i = 1; i <=(int)time; i++)
                {
                    Thread.Sleep(100);
                    Console.WriteLine($"线程1执行{i}次");
                }
            });
            thread2 = new Thread(() =>//无参线程用于显示已经过去多少时间
            {
                for (int i=1;i<=3;i++)
                {
                    Thread.Sleep(100);
                    Console.WriteLine($"线程2执行{i}次");
                }
            });
            thread1.Start(3);//初始化有参线程
            thread1.Join();//使主线程等待线程1执行
            thread1.Abort();//结束线程1
            Console.WriteLine("全部执行结束");
            Console.ReadKey();
        }
    }
}
```