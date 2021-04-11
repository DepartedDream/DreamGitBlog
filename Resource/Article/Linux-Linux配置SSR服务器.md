# Linux安装SS脚本

```
wget –no-check-certificate  https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks.sh
chmod +x shadowsocks.sh
./shadowsocks.sh 2>&1 | tee shadowsocks.log
```

# Linux锐速安装
## 检查系统类型

```
uname -r检查系统版本
```

* 结果以 2 开头，例如 2.6.32-696.18.7.el6.x86_64。
这种输出结果说明我们的服务器为 CentOS6 x64 系统，可以安装锐速
* 结果以 3 开头，例如 3.10.0-693.11.6.el7.x86_64。
这种输出结果说明我们的服务器为 CentOS7 x64 系统，可以安装锐速。
* 结果以 4 开头，例如 4.12.10-1.el7.elrepo.x86_64。
这种输出结果说明我们的服务器已经安装 Google BBR 拥塞控制算法，此时已经无法继续安装锐速。

## CentOS6 x64 系统安装锐速

```
wget --no-check-certificate -O appex.sh https://raw.githubusercontent.com/0oVicero0/serverSpeeder_Install/master/appex.sh && bash appex.sh install '2.6.32-642.el6.x86_64'
```

## CentOS7 x64 系统安装锐速

```
wget --no-check-certificate -O rskernel.sh https://raw.githubusercontent.com/uxh/shadowsocks_bash/master/rskernel.sh && bash rskernel.sh
wget --no-check-certificate -O rskernel.sh https://raw.githubusercontent.com/uxh/shadowsocks_bash/master/rskernel.sh && bash rskernel.sh
```