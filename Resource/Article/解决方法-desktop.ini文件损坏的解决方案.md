# 第一步

在对应的文件夹中建立desktop.ini文件，并设置隐藏。

# 第二步

添加对应的desktop.ini文件的文本内容。
* Contacts 联系人
```
[.ShellClassInfo]
LocalizedResourceName=@%CommonProgramFiles%\system\wab32res.dll,-10100
InfoTip=@%CommonProgramFiles%\system\wab32res.dll,-10200
IconResource=%SystemRoot%\system32\imageres.dll,-181
```
* Desktop 桌面
```
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21769
IconResource=%SystemRoot%\system32\imageres.dll,-183
```
* Documents 文档
```
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21770
IconResource=%SystemRoot%\system32\imageres.dll,-112
IconFile=%SystemRoot%\system32\shell32.dll
IconIndex=-235
```
* Download 下载
```
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21798
IconResource=%SystemRoot%\system32\imageres.dll,-184
```
* Favorites 收藏夹
```
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21796
IconResource=%SystemRoot%\system32\imageres.dll,-115
IconFile=%SystemRoot%\system32\shell32.dll
IconIndex=-173
```
* Links 链接
```
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21810
IconResource=%SystemRoot%\system32\imageres.dll,-185
DefaultDropEffect=4
[LocalizedFileNames]
RecentPlaces.lnk=@shell32.dll,-37217
Desktop.lnk=@shell32.dll,-21769
Downloads.lnk=@shell32.dll,-21798
```
* Music 音乐
```
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21790
InfoTip=@%SystemRoot%\system32\shell32.dll,-12689
IconResource=%SystemRoot%\system32\imageres.dll,-108
IconFile=%SystemRoot%\system32\shell32.dll
IconIndex=-237
```
* OneDrive
```
[.ShellClassInfo]
IconResource=C:\Users\ZHCS\AppData\Local\Microsoft\OneDrive\OneDrive.exe,1
```
* Pictures 图片
```
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21779
InfoTip=@%SystemRoot%\system32\shell32.dll,-12688
IconResource=%SystemRoot%\system32\imageres.dll,-113
IconFile=%SystemRoot%\system32\shell32.dll
IconIndex=-236
```
* Save Games 保存的游戏
```
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21814
IconResource=%SystemRoot%\system32\imageres.dll,-186
```
* Searches 搜索
```
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-9031
IconResource=%SystemRoot%\system32\imageres.dll,-18
[LocalizedFileNames]
Indexed Locations.search-ms=@searchfolder.dll,-32820
Everywhere.search-ms=@searchfolder.dll,-32822
```
* Videos 视频
```
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21791
InfoTip=@%SystemRoot%\system32\shell32.dll,-12690
IconResource=%SystemRoot%\system32\imageres.dll,-189
IconFile=%SystemRoot%\system32\shell32.dll
IconIndex=-238
```

# 第三步

进入cmd界面，切换到对应desktop.ini文件的路径，使用命令**attrib +h +r +s +a desktop.ini**