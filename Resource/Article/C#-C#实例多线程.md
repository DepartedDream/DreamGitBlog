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

# 线程池

* 线程的创建和销毁很消耗性能
* 即使创建了大量的线程，线程间也不一定都同时在工作
* 有的休眠，有的等待资源释放，有的只是周期重复小工作
* 创建线程池后，线程池会用池中的线程执行你给定的方法
* 线程池中的线程执行完任务会挂起，不会销毁，节省了性能

```c#
public partial class Form1 : Form
{
    private static int num=0;
    public Form1()
    {
        InitializeComponent();
    }
    //使用5个线程完成60次5000的累加
    private void button1_Click(object sender, EventArgs e)
    {
        ThreadPool.SetMaxThreads(5, 5);
        for(int i = 0; i < 60; i++) 
        {
            ThreadPool.QueueUserWorkItem((object pNum) =>
            {
                num += Convert.ToInt32(pNum);
            }, 5000);
        }
        Thread.Sleep(1000);
        MessageBox.Show(num.ToString());
    }
}
```

# 参考

* [C# 线程池ThreadPool的用法简析](https://blog.csdn.net/smooth_tailor/article/details/52460566)