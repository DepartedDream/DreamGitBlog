```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Main.aspx.cs" Inherits="Test.Main" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link href="Main.css" rel="stylesheet" />
    <script src="jquery-3.5.1.min.js"></script>
    <script src="Main.js"></script>
</head>
<body>
    <div id="pic_show_area" runat="server"></div>
    <input type="file" onchange="uploadFile()" class="file_btn" name="上传文件" multiple="true"/><br />
</body>
</html>
```

```csharp
namespace Test
{
    public partial class Main : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.Files.Count!= 0)
            {
                for(int i = 0; i < Request.Files.Count; i++) 
                {
                    Request.Files[i].SaveAs($"{AppDomain.CurrentDomain.BaseDirectory}Resource\\{Request.Files[i].FileName}");
                }
                Response.Redirect(Request.FilePath);
            }
        }
    }
}
```

```js
function uploadFile() {
    var formData = new FormData();
    for (var i = 0; i <$(".file_btn")[0].files.length; i++)
    {
        formData.append("photo", $(".file_btn")[0].files[i]);
    }
    $.ajax({
        url: "Main.aspx",
        type: 'post',
        data: formData,
        contentType: false,
        processData: false,
        success: function (res) {
            console.log(res.data);
        }
    })
}
```

* 通过input的type属性生成一个文件上传控件
* 选择文件后，通过ajax上传
* 使用Asp.Net的Request.Files属性保存到服务器的指定位置
* 服务器的输出的html需要刷新该页面才能重新显示
* 如果上传显示超过了最大请求长度，参考web.config配置
* 为httpRuntime标记添加maxRequestLength=""(单位kb),设置上传大小限制
* input的multiple属性用于多选
* input的accept用于设置上传文件的类型

# 参考
[<input type="file">](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file)