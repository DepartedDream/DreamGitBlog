* Linux 则是一直区分大小写的。
* Mac 则可以在制作分区时选择此分区是否要区分大小写。
* Win10 引入了 WSL，如上所述 Linux 是需要区分大小写的，为此微软给 NTFS 文件系统加了个 SetCaseSensitiveInfo 标志，可以支持在文件夹级别启用或禁用。启用之后，Windows 程序也可以对这个文件夹下的文件区分大小写了。