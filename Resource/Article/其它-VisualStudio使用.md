# 修改项目路径的方法 

* 卸载项目
* 修改项目路径
* 重新加载项目

# Net Core和Net Framework解决方案资源管理器的区别

* Net Core的项目文件是实时同步的
* Net Framework项目文件改动需要手动处理  
    Ctrl + M + O: 折叠所有方法
    Ctrl + M + M: 折叠或者展开当前方法
    Ctrl + M + L: 展开所有方法

# Visual Studio nuget简介

NuGet（读作New Get）是用于微软.NET开发平台的软件包管理器，是一个Visual Studio的扩展。在使用Visual Studio开发基于.NET Framework的应用时，NuGet能够令你在项目中添加、移除和更新引用的工作变得更加快捷方便。
通过NuGet你可以很容易的访问到其他开发者发布的软件包，你也可以创建、分享或者发布自己的包到NuGet。微软的EntityFramework、ASP.NET MVC等或者一些常用到的第三方软件包：Json.NET、NUnit等都托管到NuGet上。

# VisualStudio导入其它项目的方法

* 将项目文件导入解决方案文件夹
* 右键解决方案->添加->现有项->选择项目中的csproject文件
* 注意VisualStudio中将其它项目直接导入解决方案不会复制原项目，该项目的路径依然为原路径，推荐将项目移动到解决方案文件夹后，在进行导入

# VisualStudio括号格式设置

* visual studio 格式设置 括号位置 已扩展(大括号另起一行) 已半扩展(前大括号不换行) 压缩(全部写在一行) 

VisualStduio向解决方案管理器中拖拽文件是复制文件

# Visual Studio多个项目共享资源文件

* 在工程里添加现有项文件，弹出选择文件时，注意文件路径连上有个小选项（向下拉）设为链接方式就行了。

# Visual Studio快速将多行合并一行

* 编辑->高级->联接行