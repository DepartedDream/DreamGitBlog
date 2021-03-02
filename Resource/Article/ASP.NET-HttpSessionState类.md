# System.Web.SessionState.HttpSessionState
## 概述

* 该类封装了与Session数据相关的操作
* Session数据包含两个值，分别为Name和Value
* Web窗体类自动继承Page类该类存在Response属性为该页面的响应流

## 成员

### this[string name]{get;set;}--通过Name值获取对应的Session数据
### Add()--添加Session数据

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
        }
    }
}
```

### Remove()--删除Session数据

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
            Session.Remove("AdminName");
        }
    }
}
```

### Clear()--删除所有Session数据

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
            Session.RemoveAll();
        }
    }
}
```