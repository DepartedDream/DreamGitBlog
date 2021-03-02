# System.Web.HttpCookie类

## 概述

* 一个Cookie数据包含一个name值和一个value值。
* Cookie的value值是以键值对的方式存储的。
* Cookie数据具有有效期，默认存储在内存中，即关闭后消失
* Cookie数据如果设置有效期，即可在有效期内存储在客户端的硬盘中
* Cookie数据通过设置超时有效期进行删除操作

## 成员
### Value{get;set;}--获取或设置Value值
### Expires{get;set;}--获取或设置的过期日期和时间
### HttpCookie()--生成一个Cookie对象

```csharp
using System;
using System.Web;

namespace Test
{
    public partial class Test : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //定义临时Cookie
            HttpCookie adminNameCookie = new HttpCook("adminName");
            adminNameCookie.Value = "123";
            //定义单值Cookie
            HttpCookie adminNameCookie = new HttpCookie("adminPwd");
            adminNameCookie.Value = "123";
            adminNameCookie.Expires = DateTime.Now.AddDays(10);
            //定义多值Cookie
            HttpCookie adminCookie = new HttpCookie("admin");
            adminCookie["adminName"] = "123";
            adminCookie["adminPwd"] = "123";
            adminCookie.Expires = DateTime.Now.AddDays(10);
        }
    }
}
```

| Name     | Value                      |
| -------- | -------------------------- |
| admin    | adminName=123&adminPwd=123 |
| admiName | 123                        |