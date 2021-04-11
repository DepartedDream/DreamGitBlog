# jQuery提交服务器数据的方法

## jQuery查询字符串提交参数

* 在url后添加参数即可。

```javascript
$(document).ready(function autoSubmitSelect() {//表格选择后自动刷新
    $("#table_type_select").change(function () {
        var tableType = $("select option:selected").val();
        window.location.replace(`AdminMain.aspx?tableType=${tableType}`)
    })
})
```

## jQuery窗体集合提交参数

* 通过jQuery生成一个form表单
* 将指定要传递的参数赋值给一个新的input控件，之后提交表单即可。

```javascript
$(document).ready(function () {
    $("#delete_input").click(function (value,) {
        var currentRow = $(this).parent().parent()
        var firstTrDOM = currentRow.children("td")[0];
        var tableType = $("select option:selected").val();
        form = $("<form method='post' action='AdminDelete.ashx?tableType='"+tableType+"'></form>");
        //设置第一个post值
        input1 = $("<input type='hidden' name='id'>");
        var id = $(firstTrDOM).text();
        input1.val(id);
        //添加到表单
        form.append(input1);
        form.appendTo(document.body);
        form.submit();
    })
})
```

# jquery获取服务器数据的方法

## jQuery获取查询字符串

* 只需将url字符串进行分别，并根据等号转化为数组即可获取Get方法传递的参数。

```javascript
GetQueryString:function()
{
    var getDataArrayStr = window.location.href.split("?");  //取得Get参数
    var getDataArray = new Array();
    if(getDataArrayStr.length > 1)
    {
        var getDataStrArray = getDataArrayStr[1].split("&");
        for(var i=0; i<getDataStrArray.length; i++)
        {
            var temp = getDataStrArray[i].split("=");  //分离key与Value
            getDataArray[temp[0]] = temp[1];
        }
     }
     return getDataArray;
}
```

## jQuery通过HTML元素获取数据

* 可以在让后端程序将数据写入html元素中
* 之后通过jquery获取该信息

# jQuery使用ajax提交并获取数据

```javascript
$.ajax({
    url: ddTable.handlerUrl,
    async: false,
    type: "get",
    dataType: "json",
    data:
    {
        "typeName": ddTable.typeName,
        "methodName": "SelectByGroupNum",
        "groupNum": ddTable.pageNum,
        "groupSize": ddTable.pageSize,
    },
    error: function ()
    {
        alert("表格数据初始化失败")
    },
    success: function (data)
    {
        if (data == null)
        {
            alert("表格数据初始化失败")
        }
        else
        {
            for (var y = 0; y < data.length; y++)
            {
                tBodyHtml += "<div class=\"row\">";
                for (var x in data[y])
                {
                    tBodyHtml += `<div class="cell">${data[y][x]}</div>`;
                }
                tBodyHtml += `<div class="update_btn" mode="update">修改</div  >`;
                tBodyHtml += `<div class="delete_btn">删除</div >`;
                tBodyHtml += "</div>";
            }
        }
    }
});
```