# 概述　

web.config文件是一个XML文件,负责Web应用程序的配置设置。

# configuration(根节点)

## system.web

### appSettings

appSettings节点主要用来存储asp.net应用程序的一些配置信息，比如上传文件的保存路径等

```xml
<appSettings> 
    <!--允许上传的图片格式类型--> 
    <add key="ImageType" value=".jpg;.bmp;.gif;.png;.jpeg"/> 
    <!--允许上传的文件类型--> 
    <add key="FileType" value=".jpg;.bmp;.gif;.png;.jpeg;.pdf;.zip;.rar;.xls;.doc"/> 
</appSettings>
```

对于appSettings节点中的值可以按照key来进行访问，以下就是C#一个读取key值为“FileType”节点值的例子：

```csharp
string fileType=ConfigurationManager.AppSettings["FileType"];
```

### connectionStrings

connectionStrings节点主要用于配置数据库连接的，我们可以connectionStrings节点中增加任意个节点来保存数据库连接字符串，将来在代码中通过代码的方式动态获取节点的值来实例化数据库连接对象，这样一旦部署的时候数据库连接信息发生变化我们仅需要更改此处的配置即可，而不必因为数据库连接信息的变化而需要改动程序代码和重新部署。

```xml
<connectionStrings> 
    <!--SQL Server数据库配置--> 
    <add name="AspNetStudyConnectionString1"  providerName="System.Data.Sqlclient" connectionString="Data Source=(local);Initial Catalog=AspNetStudy;User ID=sa;Password=sa;Integrated Security=False"/> 
</connectionStrings>
```

```csharp
//读取web.config节点配置    
string connectionString = ConfigurationManager.ConnectionStrings
["AspNetStudyConnectionString1"].ConnectionString;
//实例化SqlConnection对象
SqlConnection connection = new SqlConnection(connectionString);
```

### compilation

配置 ASP.NET 使用的所有编译设置。默认的debug属性为“true”，即允许调试，在这种情况下会影响网站的性能，所以在程序编译完成交付使用之后应将其设为“false”。

```xml
<compilation debug="true">
......
</compilation>
```

### authentication

authentication节点设置asp.net身份验证模式，有四种身份验证模式，它们的值分别如下:
Mode 验证模式说明
1. Windows 使用Windows身份验证，适用于域用户或者局域网用户。
2. Forms 使用表单验证，依靠网站开发人员进行身份验证。
3. Passport 使用微软提供的身份验证服务进行身份验证。
4. None 不进行任何身份验证。

### customErrors

customErrors节点用于定义一些自定义错误信息的信息。此节点有Mode和defaultRedirect两个属性，其中defaultRedirect属性是一个可选属性，表示应用程序发生错误时重定向到的默认URL，如果没有指定该属性则显示一般性错误。Mode属性是一个必选属性，它有三个可能值，它们所代表的意义分别如下：
Mode值说明

1. On 表示在本地和远程用户都会看到自定义错误信息。
2. Off 禁用自定义错误信息，本地和远程用户都会看到详细的错误信息。
3. RemoteOnly 表示本地用户将看到详细错误信息，而远程用户将会看到自定义错误信息。
这里有必要说明一下本地用户和远程用户的概念。当我们访问asp.net应用程时所使用的机器和发布asp.net应用程序所使用的机器为同一台机器时成为本地用户，反之则称之为远程用户。在开发调试阶段为了便于查找错误Mode属性建议设置为Off，而在部署阶段应将Mode属性设置为On或者RemoteOnly，以避免这些详细的错误信息暴露了程序代码细节从而引来黑客的入侵。

例子：

```xml
<customErrors mode="On" defaultRedirect="GenericErrorPage.htm"> 
    <error statusCode="403" redirect="403.htm" /> 
    <error statusCode="404" redirect="404.htm" /> 
</customErrors>
```

在上面的配置中如果用户访问的页面不存在就会跳转到404.htm页面，如果用户没有权限访问请求的页面则会跳转到403.htm页面，403.htm和404.htm页面都是我们自己添加的页面，我们可以在页面中给出友好的错误提示。

## system.webServer

### staticContent

添加服务器mime类型的支持，使得IIS服务器能够识别其它格式的文件
```xml
<staticContent>
  <mimeMap fileExtension=".lrc" mimeType="text/xml" />
  <mimeMap fileExtension=".md" mimeType="text/xml" />
</staticContent>
```

### defaultDocument

设置网站主页
```xml     
<defaultDocument>
    <files>
        <clear />
        <add value="test1.aspx" />
    </files>
</defaultDocument>
```

# 参考

[Asp.Net 之 Web.config 配置文件详解](https://blog.csdn.net/mystonelxj/article/details/82710025)