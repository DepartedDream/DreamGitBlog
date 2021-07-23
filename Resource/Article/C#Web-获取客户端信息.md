# 获取客户端的端口号 

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

# 获取客户端的IP地址 

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

# 获取客户端上次请求的url

```csharp
using System;
namespace Test
{
    public partial class Main : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Write(Request.UrlReferrer.AbsoluteUri);
        }
    }
}
```