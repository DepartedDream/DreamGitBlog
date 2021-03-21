# ASP.NET的Page类

## 属性

* HttpRequest.QueryString属性是写在Url中通过Get方法提交的变量集合
* HttpRequest.Cookies属性即客户端发送的 cookie 的集合
* HttpRequest.ServerVariables属性Web服务器变量的集合
* HttpRequest.Form属性通过Post方法提交所有表单变量的集合
* HttpRequest.Item属性从QueryString、Form、Cookies 或 ServerVariables集合获取指定的对象
* HttpRequest.Application属性ASP.NET应用程序全局变量的集合。