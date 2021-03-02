# 操作步骤

* 首先进入服务器主界面，选择FTP防火墙支持
* 在数据通道端口范围中输入被动模式中开放的高位端口
* 如果无法修改在powershell中输入如下代码

```
netsh advfirewall firewall  add rule name="FTP Service" action=allow service=ftpsvc protocol=TCP dir=in

netsh advfirewall set global StatefulFTP disable
```

* 在防火墙的外部ip地址中输入服务器的公网ip地址
* 重启服务器中的Microsoft FTP Service服务
* 在云服务器控制台中修改安全组规则，开放对应的高位端口


# 引用
[winServer FTP被动模式设置](https://blog.csdn.net/wuxingpu5/article/details/52457544)