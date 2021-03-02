# 安装apache

yum install httpd #根据提示，输入Y安装即可成功安装

systemctl start httpd.service #启动apache

systemctl stop httpd.service #停止apache

systemctl restart httpd.service #重启apache

systemctl enable httpd.service #设置apache开机启动

# 启动http服务

httpd -version #检查是否安装 

yum install httpd #安装http服务

service httpd start #启动http服务

service httpd status #检查http服务状态（会显示绿色的active(running)表示启动成功）

service httpd restart #重启http服务

# 配置文件

httpd相关配置文件：

主配置文件：/etc/httpd/conf/httd.conf ，这个是httpd最主要的配置文档

扩展配置文件：/etc/httpd/conf.d/*.conf ，这个是httpd的额外配置文档

文档根目录： /var/www/html ，这个是apache 首页的文档目录 ，即输入http://127.0.0.1  显示页面所在的目录

服务脚本：/etc/rc.d/init.d/httpd 

错误目录：/var/www/error  ，服务器设定错误，请求的资源错误或浏览器访问出现错误等错误文件的存储目录

CGI目录： /var/www/cgi-bin/   ，预设为CGI运行脚本的存储目录

日志目录：/var/log/httpd  ，client端登录httpd时，记录的登录日志等信息存储目录

脚本配置文件： /etc/sysconfig/httpd

Listen端口：80/tcp  ,443/tcp

命令执行文件：/usr/sbin/apachectl ，/usr/sbin/httpd，/usr/bin/htpasswd

PID文件：/var/run/httpd/httpd.pid

# 开放80端口 打开防火墙

查看指定区域所有开启的端口号

firewall-cmd --zone=public --list-ports

在指定区域开启端口(如80端口号，命令方式)

firewall-cmd --zone=public --add-port=80/tcp --permanent

重新启动防火墙

firewall-cmd --reload

参考网址：https://blog.csdn.net/u014079773/article/details/79745819

# 测试网页

echo “This is my first web page.”>/var/www/html/index.html

打开http://127.0.0.1 查看是否正常启动