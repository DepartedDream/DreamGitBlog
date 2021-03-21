# runat="server"属性

* runat="server"将元素变为服务器控件

# ClientIDMode属性的四个值

* AutoID(默认)：该控件的ClientID 值是通过串联每个祖先容器控件的ID和父容器控件的ID和其本身的ID 值生成的
* Static：该控件的ClientID 值就是其本身设置的 ID 属性值
* Inherit：果控件的ClientIDMode选中为Inherit，那么表示该控件的ClientIDMode会使用父级容器控件的ClientIDMode值
* Predictable：Inherit[+"_"+ClientIDRowSuffix]

# 参考
[ASP.NET 4.0的ClientIDMode属性](https://www.cnblogs.com/OpenCoder/archive/2010/11/23/1885347.html)