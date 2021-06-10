# 问题描述

* Asp.net上传出现“超过了最大请求长度”的问题解决方法

# 解决方法

```xml
 <configuration>
<system.web>
<httpRuntime executionTimeout="9000" maxRequestLength="502400" useFullyQualifiedRedirectUrl="false" minFreeThreads="8" minLocalRequestFreeThreads="4" appRequestQueueLimit="100"/>
</system.web>
</configuration>
```

# 参考
[Asp.net上传出现“超过了最大请求长度”的问题解决方法](https://www.cnblogs.com/biye/p/3298471.html)