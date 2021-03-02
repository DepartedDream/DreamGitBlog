在写程序时, 可以把用到的 图标,图片,声音等外部资源,放在一个  .resx (资源文件)中. 这样的好处是不用考虑什么路径的问题.而且还对资源有保护的做用.

1.创建一个 ResourceFile.resx 文件. (ResourceFile 可以为自定义的任意名称)

2.向ResourceFile.resx 里添加资源文件 .

3.可以直接在C# 文件中这样使用: 

　　比如:主窗体的图标:

　　　　this.Icon = (Icon)(ResouceFile.ResourceManager.GetObject("资料的名称无后缀"));
[转载](https://blog.csdn.net/qq_14844633/article/details/78687010)