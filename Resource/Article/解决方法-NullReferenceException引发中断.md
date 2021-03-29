# 问题描述
```csharp
    class Program
    {

        static void Main(string[] args)
        {
            try
            {
                Man b = null;
                Console.WriteLine(b.Age);
                Console.ReadLine();
            }
            catch (Exception exception) 
            {
                Console.WriteLine(exception.Message);
                Console.ReadLine();
            }
        }

    }

    public class Man
    {

        public string Name { get; set; }
        public int Age { get; set; }

    }
```

* 以上代码引发了NullReferenceException错误
* 即使使用了try catch也会引发中断

# 解决方法

* try catch只负责抓取异常并使得程序正常运行不崩溃
* 是否中断是由编译器决定的，在异常设置中默认NullReferenceException错误会引发中断，可以手动设置关闭
* 一般情况下NullReferenceException错误是可以通过修改代码避免的，不建议修改异常中断设置