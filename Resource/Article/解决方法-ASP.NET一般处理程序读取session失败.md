# 问题描述

* 一般处理程序无法调用session数据

# 解决方法

* 导入命名空间using System.Web.SessionState
* 一般处理程序引用接口IRequiresSessionState