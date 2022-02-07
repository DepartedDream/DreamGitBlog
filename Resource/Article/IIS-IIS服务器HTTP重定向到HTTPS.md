# 操作步骤

* 下载IIS服务器的URl重写模块
* 打开IIS服务器主界面，点击URL重写

* 将以下配置信息添加到web.config文件中

```xml
    <rewrite>
      <rules>
        <rule name="http转https" stopProcessing="true">
          <match url="(.*)" />
          <conditions>
            <add input="{HTTPS}" pattern="off" />
          </conditions>
          <action type="Redirect" url="https://{HTTP_HOST}/{R:1}" />
        </rule>
      </rules>
    </rewrite>
```

# 引用
[IIS设置网站为HTTPS并且将HTTP重定向到HTTPS](https://www.cnblogs.com/baocaige/p/11346339.html)