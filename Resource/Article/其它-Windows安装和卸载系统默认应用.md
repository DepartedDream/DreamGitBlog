# 安装系统应用程序

* 以管理员权限启动windows powershell

```
Get-AppxPackage -allusers | Select Name, PackageFullName
```

* 在显示的包列表中，查找你要删除的应用程序的完整包名，替换下面命令中完整包名的位置，即可安装该应用

```
Add-appxpackage -register "C:\Program Files\WindowsApps\完整包名\appxmanifest.xml" -disabledevelopmentmode
```

# 卸载系统应用程序

```
Remove-AppxPackage 完整包名
```