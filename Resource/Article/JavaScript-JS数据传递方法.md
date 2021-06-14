# jQuery通过get方法提交数据

```javascript
//方法1url末端添加查询字符串
$(document).ready(function autoSubmitSelect() {//表格选择后自动刷新
    $("#table_type_select").change(function () {
        var tableType = $("select option:selected").val();
        window.location.replace(`AdminMain.aspx?tableType=${tableType}`)
    })
})

//方法2 通过XMLHttpRequest对象提交数据
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);
xhr.onload = function () {// 请求结束后,在此处写处理代码
};
xhr.send(null);
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send({ form: 'data' });
// xhr.send(document);

//方法3通过jquery的ajax方法
$.ajax({
    url: ddTable.handlerUrl,
    async: false,//是否异步
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

# 通过post方法提交数据
```javascript

//方法1构造一个form表单提交方法为post
$(document).ready(function () {
    $("#delete_input").click(function (value,) {
        var currentRow = $(this).parent().parent()
        var firstTrDOM = currentRow.children("td")[0];
        var tableType = $("select option:selected").val();
        form = $("<form method='post' action='AdminDelete.ashx?tableType='"+tableType+"'></form>");
        input1 = $("<input type='hidden' name='id'>");//设置第一个post值
        var id = $(firstTrDOM).text();
        input1.val(id);
        form.append(input1); //添加到表单
        form.appendTo(document.body);
        form.submit();
    })
})

//方法2 通过XMLHttpRequest对象提交数据
var xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

//发送合适的请求头信息
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.onload = function () {// 请求结束后,在此处写处理代码
};
xhr.send("foo=bar&lorem=ipsum");
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send({ form: 'data' });
// xhr.send(document);


//方法3通过jquery的ajax方法
$.ajax({
    url: ddTable.handlerUrl,
    async: false,//是否异步
    type: "post",
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

# jQuery获取get方法参数

```javascript
//方法1拆分查询字符串
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

//方法2使用URLSearchParams对象
$(document).ready(function ()
{
    var url = new URL(window.location);
    var params = new URLSearchParams(url.search);
    for (var pair of params.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }
})
```