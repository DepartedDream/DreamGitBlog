# 文件流操作相关类

* System.IO.File类(静态类)用于创建，移动，复制和删除文件
* System.IO.FileInfo类似File类需要实例化，对单个文件的操作跟方便，并且可以获取到文件的更多信息
* System.IO.Directory类(静态类)用于创建，移动，复制和删除文件夹
* System.IO.DirectoryInfo类需要实例化，对单个文件夹的操作跟方便，并且可以获取到文件的更多信息
* System.IO.StreamWriter类专用于特定编码的字符输出
* System.IO.StreamReader类专用于特定编码的字符读取
* System.IO.FileStream类设计用于向文件以字节形式的输入和输出

# 注意事项

* 对文件流进行操作时，需要对操作的文件流进行手动释放，否则会报错

# 文件夹操作
## 查看文件夹

```csharp
namespace TestConsole
{

    static class Program
    {
        static void Main(string[] args)
        {
            DirectoryInfo directoryInfo = new DirectoryInfo("D:\\");
            foreach(DirectoryInfo dir in directoryInfo.GetDirectories()) 
            {
                if(((dir.Attributes & FileAttributes.Hidden) != FileAttributes.Hidden) & ((dir.Attributes & FileAttributes.System) != FileAttributes.System))
                {
                    Console.WriteLine($"文件夹名{dir.Name}");
                }
                Console.WriteLine($"文件名{dir.Name}");
            }
            foreach (FileInfo file in directoryInfo.GetFiles())
            {
                if(((file.Attributes & FileAttributes.Hidden) != FileAttributes.Hidden) & ((file.Attributes & FileAttributes.System) != FileAttributes.System)) 
                {
                    Console.WriteLine($"文件夹名{file.Name}");
                }
            }
            Console.ReadLine();
        }
    }
}
```

* FileAttributes枚举类型用于表示文件的状态
* 程序中使用FileAttributes目的是不显示隐藏文件和系统文件
* FileAttributes枚举使用一个二进制位有无表示文件的一种状态，例如只读是1，隐藏是2，系统文件是4...

## 创建文件夹

```csharp
namespace TestConsole
{

    static class Program
    {
        static void Main(string[] args)
        {
            string parentDirPath = "D:\\新建文件夹";
            if (!Directory.Exists(parentDirPath)) 
            {
                Directory.CreateDirectory(parentDirPath);
            }
        }
    }
}
```

## 删除文件夹

```csharp
namespace TestConsole
{

    static class Program
    {
        static void Main(string[] args)
        {
            string parentDirPath = "D:\\新建文件夹";
            if (!Directory.Exists(parentDirPath)) 
            {
                Directory.CreateDirectory(parentDirPath);
            }
            Directory.Delete(parentDirPath);
        }
    }
}
```

## 移动文件夹/重命名文件夹

```csharp
namespace TestConsole
{

    static class Program
    {
        static void Main(string[] args)
        {
            string dirPath = "D:\\新建文件夹";
            string dirNewPath = "D:\\新建文件夹(2)";
            if (!Directory.Exists(dirPath)) 
            {
                Directory.CreateDirectory(dirPath);
            }
            Directory.Move(dirPath, dirNewPath);
        }
    }
}
```

# 文件操作
## 创建文件并写入内容

```csharp
namespace TestConsole
{

    static class Program
    {
        static void Main(string[] args)
        {
            string filePath = "D:\\新建文本文件.txt";
            if (!File.Exists(filePath)) 
            {
                File.Create(filePath).Close();
            }
            FileInfo fileInfo = new FileInfo(filePath);
            StreamWriter sw= fileInfo.CreateText();
            for(int i = 1; i <= 10; i++) 
            {
                sw.WriteLine("123");
            }
            sw.Dispose();
        }
    }
}
```
* File.Create(filePath)这句代码会返回一个FileStream流与该文件链接，导致创建的文件被占用。
* 创建的文件被占用将导致之后文本写入失败
* 故要将File.Create(filePath)返回的FileStream流关闭

## 删除文件

```csharp
namespace TestConsole
{
    static class Program
    {
        static void Main(string[] args)
        {
            string filePath = "D:\\新建文本文件.txt";
            if (!File.Exists(filePath)) 
            {
                File.Create(filePath).Close();
            }
            File.Delete(filePath);
        }
    }
}
```

## 移动文件/重命名文件

```csharp
namespace TestConsole
{
    static class Program
    {
        static void Main(string[] args)
        {
            string filePath = "D:\\新建文本文件.txt";
            string fileNewPath= "D:\\新建文本文件(2).txt";
            if (!File.Exists(filePath))
            {
                File.Create(filePath).Close();
            }
            File.Move(filePath, fileNewPath);
        }
    }
}
```

## 查看文件内容

```csharp
namespace TestConsole
{

    static class Program
    {
        static void Main(string[] args)
        {
            string filePath = "D:\\新建文本文件.txt";
            if (!File.Exists(filePath))
            {
                File.Create(filePath).Close();
            }
            FileInfo fileInfo = new FileInfo(filePath);
            StreamWriter sw = fileInfo.CreateText();
            for (int i = 1; i <= 10; i++)
            {
                sw.WriteLine("123");
            }
            sw.Dispose();
            StreamReader sr = fileInfo.OpenText();
            while (sr.Peek()!= -1) 
            {
                Console.WriteLine(sr.ReadLine()); 
            }
            Console.ReadLine();
        }
    }
}
```

# 参考
[文件流详解](https://www.cnblogs.com/yaoteng00/p/12550939.html)