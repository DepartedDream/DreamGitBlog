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

# 参考
[文件流详解](https://www.cnblogs.com/yaoteng00/p/12550939.html)