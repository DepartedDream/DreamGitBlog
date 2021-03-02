# System.Web.HttpCookieCollection类

## 概述

* 该类表示一个网站的Cookie集合

## 成员

### this[] - 获取指定的Cookie对象

```csharp
using System.Web;

namespace Test
{
    public partial class Test : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //定义单值Cookie
            HttpCookie adminNameCookie = new HttpCookie("adminPwd");
            adminNameCookie.Value = "123";
            adminNameCookie.Expires = DateTime.Now.AddDays(10);
            //定义多值Cookie
            HttpCookie adminCookie = new HttpCookie("admin");
            adminCookie["adminName"] = "123";
            adminCookie["adminPwd"] = "123";
            adminCookie.Expires = DateTime.Now.AddDays(10);
            Response.Write(Response.Cookies["adminName"].Value);//获取单值Cookie
            Response.Write(Response.Cookies["adminName"]["adminPwd"].Value);//获取多值Cookie
        }
    }
}
```

Name|Value
--|--
admin|adminName=123&adminPwd=123
admiName|123