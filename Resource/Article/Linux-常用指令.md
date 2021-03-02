# 系统信息
命令|作用|备注
--|--|--
uname -a|显示所有信息
date |显示系统当前日期
cal |显示日历
# 用户管理
命令|作用|备注
--|--|--
useradd 用户名|添加用户|
userdel 用户名|删除用户| 
su - 用户名|切换到指定用户|
su - |切换到管理员|
passwd|更改当前用户密码|
# 安全管理
命令|作用|备注
--|--|--
# 文件管理
命令|作用|备注
--|--|--
ls|显示当前目录下的文件|
cd 文件夹名|打开该文件夹|
cd 路径|切换到该路径|
cd ~|切换到当前用户的家目录|
mkdir 文件夹|在当前路径创建文件夹|
df |查看磁盘占用情况
rm -rf|强制删除文件夹
# 进程管理
命令|作用|备注
--|--|--
ps -ef|显示所有进程及IUD,PPIP,C与STIME栏位
ps aux ps -aux|显示
ps auxc ps -auxc|
ps axjf ps -axjf|
ps axjfc ps -axjfc|
kill PID|关闭该进程号的进程
# 服务管理
systemctl status 进程名|显示当前服务状态|
systemctl enable 进程名|开机自动启动服务
systemctl start 进程名|开始服务|
service 服务名 start|开启该服务|
service 服务名 stop|停止该服务|
service 服务名 restart|重启该服务|
service 服务名 reload||
service 服务名 status||
systemctl|
# 软件包管理
命令|作用|备注
--|--|--
weget url|从指定url下载文件|
rpm -i/--install|安装软件|
rpm-U/--upgrade|更新|
rpm -F/--freshen|更新已安装软件|
rpm -e/--erase|删除软件|
rpm-qa|查看全部软件包|q-query(查询) a-all(全部)
rpm-qf 文件名|显示该文件由哪个软件包安装|q-query(查询) f-file(文件)
rpm-qi 软件包名|显示该软件包的信息|q-query(查询) i-information(信息)
rpm -ql 软件包名|列出该软件包的全部文件|q-query(查询) l-list(列表)
yum install 软件包名 -y||安装该软件|-y 默认对问题回答Yes
yum update 软件包名|升级该软件|
yum list installed|显示已经安装的软件包|
yum remove 软件包名 -y|卸载该软件|-y 默认对问题回答Yes
yum clean all|清除yum缓存
# 帮助工具
命令|作用|备注
--|--|--
whatis 命令|显示该指令的摘要|
命令 --help|显示该指令的摘要和选项列表|
# 系统管理
命令|作用|备注
--|--|--
reboot|重启|
grep|查找|
# 软件使用
## mysql
rpm包URL(http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm)
命令|作用|备注
--|--|--
mysql-u root -p|进入mysql管理员|
exit|退出数据库

cat
ping url 
ctrl+z 停止