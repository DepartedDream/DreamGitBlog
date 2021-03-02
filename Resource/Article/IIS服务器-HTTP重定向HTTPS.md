# 操作步骤

* 安装iis服务器的url插件

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