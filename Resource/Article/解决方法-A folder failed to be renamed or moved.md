该错误为安装安装Android的SDK时产生。以下为错误信息:

```
-=Warning !=-
A folder failed to be renamed or moved.On Windows this typically means
that  a program is using that folder (for example Windows Explorer or your anti-virus software.)
Please momentarily deactivate your anti-virus software
Please also close any running,programs that may be accessing the directory
'G:\software\android-sdk-windows\tools'.
When ready,press Yes to try again.
```

 
 1. 进入sdk的temp文件夹，下载好后会有一个tools_r10-windows.zip(版本号可能会不一样，如r09)
 2. 解压此文件，如解压到tools_r10-windows目录
 3. 进入tools_r10-windows文件夹，将tools_r1006-windows里的文件复制
 4. 覆盖掉sdk根目录的tools文件夹中的文件