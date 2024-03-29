# C#字符编码

* 将中文字符转化为Unicode字节序列

```csharp
using System;
using System.Text;

namespace TestConsole
{
    public class Program 
    {
        public class Example
        {
            public static void Main()
            {
                string word = "你好";
                byte[] byteArray=Encoding.GetEncoding("UTF-8").GetBytes(word);
                foreach (byte a in byteArray) 
                {
                    Console.Write(a);
                }
                Console.WriteLine();
                Console.ReadLine();
            }
        }
    }
}
```

# C#字符解码

* 将Unicode字节序列转化为中文字符，

```csharp
namespace TestConsole
{
    public class Program
    {
        public class Example
        {
            public static void Main()
            {
                byte[] byteArray = new byte[] { 228, 189, 160, 229, 165, 189 };
                string word = Encoding.GetEncoding("utf-8").GetString(byteArray);
                Console.WriteLine(word);
                Console.ReadLine();
            }
        }
    }
}
```

# 参考

[.NET 支持的编码](https://docs.microsoft.com/zh-cn/dotnet/api/system.text.encoding?view=net-5.0#list-of-encodings)
[如何在 .NET 中使用字符编码类](https://docs.microsoft.com/zh-cn/dotnet/standard/base-types/character-encoding)