# <% %>

* <% %>用来绑定后台代码

```xml
<%
for(int i=0;i<100;i++)
{
    Reaponse.Write(i.ToString());
}
%>
```

# <%# %>

* <%# %>是在绑定控件DataBind()方法执行时被执行，用于数据绑定

```xml
<%# Container.DataItem("title") %>
```

# <%= %>

* <%= %>用来绑定后台的变量或方法且有返回值的，
* 此时的变量名或方法的访问修饰符为protected或public

```xml
<%=name%> <%=getstr()%>
```

# <%@ %>

* <%@ %>用来导入后台命名空间

```xml
<%@ import namespace="system.data" %>
```

# <%$ %>用来绑定web.config里的字符串(键值对)

```xml
<asp:TextBox runat="server" ID="cc" Text="<%$ ConnectionStrings:pubs%>"></asp:TextBox>
```

# 参考

[asp.net <%%>&<%#%>&<%=%>&<%@%>&<%$%>用法区别](https://blog.csdn.net/mascf/article/details/47215871)
[CodeBlockType 枚举](https://docs.microsoft.com/zh-cn/dotnet/api/system.web.ui.codeblocktype?view=netframework-4.8)