# 母版页介绍

当多个页面有重复的内容时，可以通过母版页，将相同的内容置于母版页中，令其它页面继承该界面即可减少代码量。

# 母版页的创建方法

* 右键项目->添加->Web Forms母版页

# 创建继承母版页的页面

* 右键项目->添加->包含母版页的Web窗体

# 使现有的页面继承母版页

* 在webform页面的头注释上加MasterPageFile属性

```
<%@ Page Title="" Language="C#" MasterPageFile="母版页路径" AutoEventWireup="true" CodeBehind="AdminInfoManage.aspx.cs" Inherits="UI.Role.Admin.AdminInfoManage" %>
```

* 在标记页面插入与母版页对应的asp:Content元素并添加id

```
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
```