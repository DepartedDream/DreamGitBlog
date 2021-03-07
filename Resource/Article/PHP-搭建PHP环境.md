# 安装Apache

* 下载Apache，[地址](http://www.apachelounge.com/download/)
* 解压压缩包，最好放到磁盘根目录，不然配置时容易报路径错误，我这里改了文件夹名，方便以后配置

# 安装PHP

* 下载PHP压缩包，[地址](https://windows.php.net/download)

# 安装MySQL

* 我安装的MySQL55版本，这里不介绍MySQL的安装方式
* MySQL官方下载地址：[地址](https://dev.mysql.com/downloads/installer/)

# 配置MySQL

* 打卡环境变量页面 具体操作如下：我的电脑-右键-属性-高级系统设置-环境变量
* 新建MYSQL_HOME变量，值为MySQL的安装路径，如下图：
* 编辑path系统变量，将%MYSQL_HOME%\bin添加到path变量最后面
* 启动MySQL，命令行输入：start mysqld; mysql -h localhost -uroot -proot

# 配置PHP

* 打开PHP的安装目录将php.ini-development先复制一份，然后把php.ini-development改为php.ini保存
* 打开php.ini修改配置，查找; extension_dir = “ext” ，改为extension_dir = “ext的目录” ，比如 extension_dir = “D:\软件\php7\ext”

# 配置Apache

* 打开Apache的安装目录，找到conf文件夹下的httpd.conf文件并打开
* 找到“Define SRVROOT”这一项，将后面引号内的值改为Apache的安装目录

代码如下：

```
# php7 support
LoadModule php7_module "D:/软件/php7/php7apache2_4.dll"
AddType application/x-httpd-php .php .html .htm

# configure the path to php.ini
PHPIniDir "D:/软件/php7"
```

# 启动Apache服务

* 设置环境变量 右键我的电脑,属性->高级,找到最下面的环境变量按钮，选中当前用户的PATH变量,编辑新建以下条目:
D:\Apache24\bin
D:\软件\php7
D:\软件\php7\ext
* 安装apache服务
以管理员身份打开命令行,执行httpd.exe -k install
* 启动服务
找到apache的安装目录下的bin文件夹，双击ApacheMonitor.exe，双击之后apache就开启了。
可以在任务栏选择下图图标，右键打开Apache Service Monitor窗口，进行Apache服务的管理

# 环境包

如果觉得上述过程繁杂，可以直接使用以下环境包。

[PHPStudy（小皮）V8.1](https://www.xp.cn/download.html)

# 参考

[搭建PHP开发环境（Apache+PHP+MySQL）](https://blog.csdn.net/galen2016/article/details/80778662)