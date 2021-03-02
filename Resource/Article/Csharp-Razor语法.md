# Razor简介

* Razor 是一种基于服务器端代码的可以转换为网页的标记语法。
* Razor 语法包括 Razor 标记、C# 和 HTML 组成。
* 包含 Razor 的文件通常后缀名为 .cshtml 。
* Razor 的默认语言是 HTML。

# 隐式 Razor 表达式

<p>@DateTime.Now</p>

# 显式 Razor 表达式

<p>Last week this time: @(DateTime.Now - TimeSpan.FromDays(7))</p>

# Razor 代码块

* Razor代码块起于 @ 并用 {} 包围起来。
* Razor代码块内的 C# 代码不会被渲染到页面中。
* Razor页面中的代码块和表达式将共享同一个作用域，并按顺序定义
* Razor代码块中的C#代码想要输出到页面中需要显示转化
* Razor代码块中的Html代码块会自动输出到页面中

```csharp
@{
    var output = "Hello World";
}
```

## Razor代码块隐式转换

代码块的默认语言是 C#，但你可以随时切换到 HTML。代码块内的 HTML 可以正确渲染。

```csharp
@{
    var inCSharp = true;
    <p>Now in HTML, was in C# @inCSharp</p>
}
```

## Razor代码块显式分隔转换

为了在代码块中定义可渲染 HTML 的子区域，应在需要渲染的字符周围用 Razor text标签环绕：

```csharp
@for (var i = 0; i < people.Length; i++)
{
    var person = people[i];
    <text>Name: @person.Name</text>
}
```

# @using 复合

在 C# 中 using 语句用于确保对象被正确释放。在 Razor 中这一相同机制被用于创建包含额外内容的 HTML helpers 。比如我们可以利用 HTML helpers ，通过 @using 语句渲染 form 标签：

```csharp
@using (Html.BeginForm())
{
    <div>
        email:
        <input type="email" id="Email" name="Email" value="" />
        <button type="submit"> Register </button>
    </div>
}
```

你也可以在作用级别上执行一些类似上面这样的带Tag Helpers的操作。

# 参考

[Razor语法总结。](https://www.cnblogs.com/wangjinya/p/11696731.html)