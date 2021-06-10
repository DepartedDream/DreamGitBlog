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