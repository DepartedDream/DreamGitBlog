# 获取get提交的数据

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

namespace Test
{
    public partial class Main : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Write(Request.QueryString["username"]);
            Response.Write(Request.QueryString["password"]);
        }
    }
}
```

# 获取post提交的数据

```html
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form method="post">
        <div><input type="text" name="username"/></div>
        <div><input type="text" name="password" /></div>
        <div><input type="submit" name="登录"/></div>
    </form>
</body>
</html>
```

```csharp
using System;

namespace Test
{
    public partial class Main : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Write(Request.Form["username"]);
            Response.Write(Request.Form["password"]);
        }
    }
}
```
# ViewState对象操作示例

* ViewState数据只能保存在当前页面

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Main.aspx.cs" Inherits="Test.Main" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form method="post" action="Main.aspx" runat="server">
        <div><input type="submit" name="点击"/></div>
    </form>
</body>
</html>
```

```csharp
using System;

namespace Test
{
    public partial class Main : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                ViewState["clickTime"] = 0;
            }
            else 
            {
                ViewState["clickTime"] = Convert.ToInt32(ViewState["clickTime"]) + 1;
            }
            Response.Write($"点击了{ViewState["clickTime"] }");
        }
    }
}
```

# Cookie对象操作示例

* 一个Cookie数据包含一个name值和一个键值对值。
* Cookie数据具有有效期，默认效期为0，即存储在内存中关闭后消失。
* Cookie数据如果设置有效期，即可在有效期内存储在客户端的硬盘中
* Cookie数据通过设置超时有效期进行删除操作

```csharp
using System;
using System.Web;

namespace Test
{
    public partial class Test : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //定义单值Cookie
            HttpCookie adminCookie1 = new HttpCookie("adminPwd", "123");
            adminCookie1.Expires = DateTime.Now.AddDays(10);
            Response.Cookies.Add(adminCookie1);
            //显示单值Cookie
            Response.Write($"单值{Request.Cookies["adminPwd"].Value}<br>");
            //定义多值Cookie
            HttpCookie adminCookie2 = new HttpCookie("admin");
            adminCookie2["adminName"] = "Admin";
            adminCookie2["adminPwd"] = "123456";
            adminCookie2.Expires = DateTime.Now.AddDays(10);
            Response.Cookies.Add(adminCookie2);
            //显示多值Cookie
            Response.Write("多值");
            HttpCookie httpCookie = Request.Cookies["admin"];
            foreach (string subKey in httpCookie.Values.AllKeys)
            {
                Response.Write(httpCookie.Values[subKey]);
            }
        }
    }
}
```

# Session对象操作示例

* session数据存储在在服务器内存
* session数据的范围是整个应用程序
* session数据与用户相对应，每个用户的值并不相同

```csharp
using System;
using System.Web;
using System.Web.SessionState;

namespace Test
{
    public partial class Test : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Session.Add("AdminName", "asd");
            Response.Write(Session["AdminName"].ToString());
            Session.Remove("AdminName");//删除Session数据
            Session.RemoveAll();//删除所有Session数据
        }
    }
}
```

# Application操作示例

* Application存储服务器内存。
* 可能存在多个用户同时存取同一个Application对象的情况
* HttpApplicationState类提供两种方法Lock和Unlock，以解决对Application对象的访问同步问题
* Lock方法和UnLock方法应该成对使用。
* Application数据的范围是整个应用程序。
* Application数据没有存储的大小限制

```csharp
using System;
using System.Web;

namespace Test
{
    public partial class Main : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Application.Unlock()
            Application["UserVisit"] = 12;//保存数据
            Response.Write(Application["UserVisit"]);
            Application.Remove("UserVisit");//删除数据
            Application.RemoveAll();//删除全部数据
            Application.Lock()
        }
    }
}
```


# 将对象写入http响应流

```csharp
using System;
using System.Web;

namespace Test
{
    public partial class Test : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Write("HelloWorld");
        }
    }
}
```

# 重定向到指定的URL

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


# Server.Tranfer传值

* Server.Tranfer通过属性设置会保存当前页面的提交的表单值和查询字符串值

main.aspx

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Main.aspx.cs" Inherits="Test.Main" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form method="post" action="Main.aspx" runat="server">
        <div><input type="text" name="name" /></div>
        <div><input type="submit" name="点击"/></div>
    </form>
</body>
</html>
```

```csharp
using System;

namespace Test
{
    public partial class Main : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack) 
            {
                Server.Transfer("Page1.aspx", true);
            }
        }
    }
}
```

page1.aspx

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Page1.aspx.cs" Inherits="Test.Page1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>这是page1</div>
    </form>
</body>
</html>
```

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Test
{
    public partial class Page1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Write(Request.Form["name"]);
        }
    }
}
```

# 查看客户端的IP地址 

```csharp
using System;
using System.Web;

namespace Test
{
    public partial class Main : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Write(Request.ServerVariables["REMOTE_ADDR"].ToString())
        }
    }
}
```
         
# 查看客户端的端口号 

```csharp
using System;
using System.Web;

namespace Test
{
    public partial class Main : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Write(Request.ServerVariables["REMOTE_PORT"].ToString())
        }
    }
}
```

# 获取Web程序的根目录

```csharp
using System;
using System.Web;

namespace Test
{
    public partial class Main : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Write(HttpRuntime.AppDomainAppPath);
        }
    }
}
```

# 判断页面是否是首次加载

* IsPostBack属性只有标有runat=“server”的标签回传才会为True

```csharp
using System;
namespace Test
{
    public partial class Main : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                Response.Write("首次加载");
            }
            else 
            {
                Response.Write("回发");
            }
        }
    }
}
```