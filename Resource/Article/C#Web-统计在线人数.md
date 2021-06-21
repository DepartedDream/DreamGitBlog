# 统计在线人数

## 第一步

* 在项目中新建全局应用程序类

## 第二步

* 打开Global.asax页面，在Application_start()方法下写入以下代码

```csharp
protected void Application_Start(object sender, EventArgs e)
{
    Application.Lock();
    Application["count"] = 0;
    Application["online"] = 0;
    Application.UnLock();
}

protected void Session_Start(object sender, EventArgs e)
{
    Application.Lock();
    Session.Timeout = 1;
    Application["count"] = (int)Application["count"] + 1;
    Application["online"] = (int)Application["online"] + 1;
    Application.UnLock();
}

protected void Session_End(object sender, EventArgs e)
{
    Application.Lock();
    Session.Abandon();
    Application["online"] = (int)Application["online"] - 1;
    Application.UnLock();
}
```

## 第三步

* 在需要显示在线人数的页面调用Application["online"]
* 在需要显示总人数的页面调用Application["count"]

```csharp
public partial class AdminMaster : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        all_people_count.InnerText = $"总访问人数:{Application["count"]}";
        now_people_count.InnerText = $"当前访问人数:{Application["online"]}";
    }
}
```

# 参考
[C#统计网站访问总人数和当前在线人数](https://www.cnblogs.com/xuxiaoshuan/p/3613340.html)