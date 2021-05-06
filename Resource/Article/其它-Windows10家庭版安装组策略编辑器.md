# Windows10家庭版安装组策略编辑器

* 在桌面新建一个txt文件
* 将下面的代码复制到txt中, 并且更改后缀为cmd

```bat
@echo off
pushd "%~dp0"
dir /b C:\Windows\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~3*.mum >List.txt
dir /b C:\Windows\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientTools-Package~3*.mum >>List.txt
for /f %%i in ('findstr /i . List.txt 2^>nul') do dism /online /norestart /add-package:"C:\Windows\servicing\Packages\%%i"
pause
```

* 右键该脚本, 点击以管理员方式运行

# 参考

[Win10家庭版没有组策略怎么办? 教你如何启用组策略gpedit.msc](https://blog.csdn.net/qq_43442524/article/details/105123586)