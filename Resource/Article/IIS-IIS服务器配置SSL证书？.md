# 免费的SSL证书

* SSL证书能够加密从客户端输入的数据
* 防止数据在到达服务器前被截取和解密

## 安装证书步骤

* 下载WACS [wacs链接](https://github.com/win-acme/win-acme),并打开WACS
* 输入N --> Create new Certificate
* 输入1 --> Single binding of an IIS site
* 此时Let's Encrypt会自动查找你的IIS中的有域名信息的站点，选择你的站点

## 实践中的错误
### wacs错误信息

No sites with host bindings have been configured in IIS. Add one in the IIS Manager or choose the plugin 'Manual input' instead.
Target plugin IIS aborted or failed

### 解决方法

进入IIS服务器，选择你创建的网站，选择绑定，启动http协议，端口号80，ip地址本地地址，主机名为网址，选择确定，之后启用该网站即可。

# 收费的SSL证书