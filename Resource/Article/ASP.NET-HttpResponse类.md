# System.Web.HttpResponse类

## 概述

* 该类封装了与http响应相关的操作
* Web窗体类自动继承Page类，该类的Response属性为该页面的响应流

## 成员

### Write()--将对象写入http响应流

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

### Redirect()--重定向到指定的URL

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