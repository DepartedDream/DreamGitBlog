# System.Web.HttpRequest类
## 概述

* 该类封装了与http请求相关的操作
* Web窗体类自动继承Page类该类存在Response属性为该页面的响应流
* 获取Cookie,Session,Get,Post数据均需要该类

## 成员
### QueryString[]--获取Get方法提交的数据

```html
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form method="get">
        <div><input type="text" name="username"/></div>
        <div><input type="text" name="password" /></div>
        <div><input type="submit" name="登录"/></div>
    </form>
</body>
</html>
```

```csharp
using System;
using System.Web;

namespace Test
{
    public partial class Test : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Redirect("www.baidu.com");
        }
    }
}
```