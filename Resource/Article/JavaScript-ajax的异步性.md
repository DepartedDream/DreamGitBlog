```javascript
function initialTable(typeName, groupNum, tHeadArray) {
    var tHeadHtml="";;
    tHeadHtml +="<tHead><tr>"
    for (var i = 0; i < tHeadArray.length; i++)
    {
        tHeadHtml += `<td>${tHeadArray[i]}</td>`;
    }
    tHeadHtml += "</tHead></tr>"
    var tBodyHtml="";
    var selectRequest1 =
    {
        "methodName": "SelectByGroupNum",
        "typeName": typeName,
        "groupNum": groupNum,
        "groupSize": groupSize,
    }
    $.get(handlerHref, selectRequest1, function (data) {
        for (var y = 0; y < data.length; y++) {
            tBodyHtml += "<tr>";
            for (var x in data[y]) {
                tBodyHtml += `<td>${data[y][x]}</td>`;
            }
            tBodyHtml += `<td><div id="ddTableBtn">修改</div ></td>`;
            tBodyHtml += `<td><div id="ddTableBtn">删除</div ></td>`;
            tBodyHtml += "</tr>"
            console.log(tBodyHtml)
        }
    }, "json");
    console.log(1);
    console.log(tBodyHtml)
    $("#ddTable").html(`<table>${tHeadHtml}${tBodyHtml}<table>`);
}
```

显示结果
```
1

tBody的值
```

由于ajax默认为异步执行，ajax的方法执行时，其后面的方法不会等待该函数执行完毕，而是会立刻执行。