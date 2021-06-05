# 问题描述

* OpenSSL SSL_read: Connection was reset?

# 解决方法

* 经测试是由于push速度太慢导致超时，通过代理服务器重新上传即可