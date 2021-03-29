# ascx控件的使用方法

* 将如下代码加入目标页面的page标签下一行

```html
<%@ Register Src="~/MyMenu.ascx"  TagName="netMenu" TagPrefix="hbsi" %>
```

* 属性TagPrefix:定义控件的标签前缀。有了标签前缀，就可以在同一个网页里使用不同功能的同名控件。
* 属性TagName:指向所使用控件的名字。在同一个命名空间里的控件名是唯一的。控件名一般都表明控件的功能。
* 属性Src:指向控件的资源文件。资源文件使用虚路径("control.ascx" 或 "/path/control.ascx")，不能使用物理路径("C:\path\control.ascx.")。
* 在需要插入控件的位置声明以下标记

```html
<命名空间:标签名 id="MyMeu1" runat="server"></命名空间:标签名>
```