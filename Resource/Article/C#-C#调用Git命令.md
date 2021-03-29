# 使用Csharp调用Git命令

```csharp
    public class Git
    {
        public string ExecutablePath { get; }
        public string WorkingDirectory { get; }

        public Git(string executablePath, string workingDirectory = null)
        {
            ExecutablePath = executablePath ?? throw new ArgumentNullException(nameof(executablePath));
            WorkingDirectory = workingDirectory ?? Path.GetDirectoryName(executablePath);
        }

        public string Run(string arguments)
        {
            var info = new ProcessStartInfo(ExecutablePath, arguments)
            {
                CreateNoWindow = false,
                RedirectStandardOutput = true,
                UseShellExecute = false,
                WorkingDirectory = WorkingDirectory,
            };
            var process = new Process
            {
                StartInfo = info,
            };
            process.Start();
            return process.StandardOutput.ReadToEnd();
        }
    }

    public class Program
    {
        static void Main()
        {
            Git git = new Git("git", "项目路径");
            git.Run("命令参数");
        }
    }
```

* CreateNoWindow 表示不要为这个命令单独创建一个控制台窗口
* RedirectStandardOutput 进行输出的重定向，这是一定要设置为 true 的属性，因为我们希望拿到命令的输出结果。
* WorkingDirectory 设置工作路径，本来这是一个可选设置，不过对于 git 命令来说，一般都是对一个已有的 git 仓库进行操作，所以当然要指定一个合理的 git 仓库了。
* UseShellExecute 设置为 false 表示不要使用 ShellExecute 函数创建进程

# 参考

[C#/.NET 使用 git 命令行来操作 git 仓库](https://blog.csdn.net/WPwalter/article/details/90344417)