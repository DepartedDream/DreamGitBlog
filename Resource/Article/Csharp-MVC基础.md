# BundleConfig.cs
# FilterConfig.cs
# RouteConfig.cs

# MVC中如何引入js和css

App_Start文件夹中的BundleConfig.cs文件
```csharp
using System.Web;  
using System.Web.Optimization;  
namespace WebApp  
{  
    public class BundleConfig  
    {
        public static void RegisterBundles(BundleCollection bundles)  
        {  
            //创建一个虚拟目录“~/bundles/jquery” 这个虚拟目录的名字可以随便你取（用一个虚拟路径来初始化Bundle的实例，这个路径并不真实存在）  
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(  
                        //在虚拟目录中添加了2个绝对路径的js文件  
                        "~/Scripts/jquery-{version}.js",  
                        "~/Scripts/jquery.validate.min.js"));  
            //创建一个虚拟目录“~/Content/css” 这个虚拟目录的名字是可以随便你取（用一个虚拟路径来初始化Bundle的实例，这个路径并不真实存在）  
            bundles.Add(new StyleBundle("~/Content/css").Include(  
                      //在虚拟目录中添加了2个css文件  
                      "~/Content/bootstrap.css",  
                      "~/Content/site.css"));
        }  
    }
}
```

最后在Global.asax文件中调用该方法文件即可添加css和js文件
然后在对应的视图中分别使用以下方法

```csharp
@Styles.Render("虚路径")
@Scripts.Render("虚路径")
```

# 布局页和分布视图

## 布局页

布局也默认为Views/Shared/LayoutPage.cshtml，布局页中包含多个占位符，用于在分布视图中进行替换。
分布式图通过Razor语法声明Layout属性即可指定其布局页。

### 布局页的占位符

* @RenderBody占位符，使用该占位符，分布式图的内容会自动替换该占位符。
* @RenderSection占位符，该占位符需要在布局页声明占位符的名称和是否必须，在分布视图中要通过section+占位符名的方法指定要替换的占位符，具体操作如下。

```csharp
/*布局页*/
@RenderSection("Body1", false)//bool值表示是否必须
```

```csharp
/*分布视图*/
@section Body1{
    <div id="bg_title"></div>
}
```

# _ViewStart.cshtml文件的作用

* MVC中执行任何一个视图之前都要先执行Views文件夹下的 _ViewStart.cshtml视图的内容
* Controller中方法必须以return View()来返回视图才先执行_ViewStart.cshtml

基于以上特性，_ViewStart.cshtml 文件一般是用于存放MVC网站中所有视图公用的js,css等文件,或者为所有分布视图设置布局页，这样就不用每个文件都进行单独的设置。

# Html辅助方法

## Html.BeginForm--form标签

```csharp
@using (Html.BeginForm("search", "home", FormMethod.Get),new { target="_black",@class="form1" })
{ 
    <input type="text" value="" />
}
```
```html
<form action="/home/search" class="form1" method="get" target="_black">
　　<input type="text" value="" />
</form>
```

## Html.TextBox--text标签

```csharp
@Html.TextBox("Age", "23", new { @class="text1" })
```

```html
<input class="text1" id="Age" name="Age" type="text" value="23" />
```

## Html.TextArea--textarea标签

```csharp
@Html.TextArea("textarea1", "我是一个textarea", new { @class="text_style" })
```
```html
<textarea class="text_style" cols="20" id="textarea1" name="textarea1" rows="2">
    我是一个textarea
</textarea>
```

## Html.Label--label标签

```csharp
@Html.Label("label1","你好")
```

```html
<label for="label1">你好</label>
```

## Html.DropDownList--仅允许单选<select>

```csharp
@{ 
    List<SelectListItem> list = new List<SelectListItem> 
    {
        new SelectListItem { Text = "启用", Value = "0",Selected = true},
        new SelectListItem { Text = "禁用", Value = "1" } 
    };
}
 @Html.DropDownList("state",list,null,new{})
```

```html
　　<select id="state" name="state">
　　　　<option selected="selected" value="0">启用</option> 
　　　　<option value="1">禁用</option> 
　　</select>
```

## Html.ListBox--允许多选的<select>

```csharp
 @{ 
        List<SelectListItem> list = new List<SelectListItem> {
            new SelectListItem { Text = "启用", Value = "0",Selected = true},
            new SelectListItem { Text = "禁用", Value = "1" } 
        };
 }
 @Html.ListBox("state",list)
```

```html
<select id="state" multiple="multiple" name="state">
    <option selected="selected" value="0">启用</option>
    <option value="1">禁用</option>
</select>
```

## Html.Hidden--input隐藏域标签

//视图代码
@Html.Hidden("hidden1","我是一个隐藏域",new{});
//输出到浏览器的HTML代码
<input id="hidden1" name="hidden1" type="hidden" value="我是一个隐藏域" />;

## Html.Password--input密码标签

//视图代码
@Html.Password("password1", 123321, new { @class="class1" })
//生成的HTML代码为
<input class="class1" id="password1" name="password1" type="password" value="123321" />

## Html.RadioButton--input单选按钮标签

//视图代码
@Html.RadioButton("radio1",1,false)
@Html.RadioButton("radio1",2,false)
@Html.RadioButton("radio1",3,true)
//生成的HTML代码为
<input id="radio1" name="radio1" type="radio" value="1" />
<input id="radio1" name="radio1" type="radio" value="2" />
<input checked="checked" id="radio1" name="radio1" type="radio" value="3" />

## Html.CheckBox--<input type="checkbox" />

//视图代码
男人：@Html.CheckBox("check1", true, new { });
女人：@Html.CheckBox("check1", false, new { });
其它：@Html.CheckBox("check1", false, new { });
//生成的HTML代码为：
男人：<input checked="checked" id="check1" name="check1" type="checkbox" value="true" /><input name="check1" type="hidden" value="false" />;
女人：<input id="check1" name="check1" type="checkbox" value="true" /><input name="check1" type="hidden" value="false" />;
其它：<input id="check1" name="check1" type="checkbox" value="true" /><input name="check1" type="hidden" value="false" />;

## Html.ActionLink--<a>

@Html.ActionLink("列表页", "list")
//生成的HTML代码
<a href="/Home/list">列表页</a>