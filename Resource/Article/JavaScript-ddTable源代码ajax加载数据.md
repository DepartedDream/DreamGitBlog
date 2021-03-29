```javascript

function DdTable(typeName,handlerUrl, pageSize,tHeadArray)
{
    this.handlerUrl = handlerUrl;//数据操作文件路径 
    this.typeName = typeName;//类名
    this.tHeadArray = tHeadArray;//表头名称数组
    this.pageSize = pageSize;//分组大小
    this.pageNum = 1//当前页码，默认为1
    this.initialDdTable = function ()
    {
        this.initialTableHtml(this);
        this.loadInsertBtnEvent(this);
        this.loadDeleteBtnEvent(this);
        this.loadUpdateBtnEvent(this);
        this.loadSearchBtnEvent(this);
        this.loadPageBtnEvent(this);
    };
    this.initialTableHtml = function (ddTable)
    {
        var tHeadHtml = "<div class=\"head\">"
        for (var i = 0; i < ddTable.tHeadArray.length; i++)
        {
            tHeadHtml += `<div class="head_cell">${ddTable.tHeadArray[i]}</div>`;
        }
        tHeadHtml += `<div class="operation_name">数据操作</div>`;
        tHeadHtml += "</div>";

        var searchRowHtml = "<div class=\"search_row\">"
        for (var i = 0; i < ddTable.tHeadArray.length; i++)
        {
            searchRowHtml += `<div class="textbox" contenteditable="true"></div>`;
        }
        searchRowHtml += `<div class="search_btn">查询</div>`;
        searchRowHtml += "</div>"

        var insertRowHtml = "<div class=\"insert_row\">"
        for (var i = 0; i < ddTable.tHeadArray.length; i++)
        {
            insertRowHtml += `<div class="textbox" contenteditable="true"></div>`;
        }
        insertRowHtml += `<div class="insert_btn">添加</div>`;
        insertRowHtml += "</div>"

        var tBodyHtml = "";
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

        var pageListHtml = "";
        $.ajax({
            url: ddTable.handlerUrl,
            async: false,
            type: "get",
            dataType: "json",
            data:
            {
                "typeName": ddTable.typeName,
                "methodName": "SelectMaxGroupNum",
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
                    pageListHtml += "<div class=\"page_list\">";
                    for (var i = 1; i <= parseInt(data); i++)
                    {
                        pageListHtml += `<span class="page_btn">${i}</span>`;
                    }
                    pageListHtml += "</div>";
                }
            }
        });
        $(".ddTable").html(tHeadHtml + searchRowHtml + insertRowHtml + tBodyHtml + pageListHtml);
    };
    this.loadInsertBtnEvent = function (ddTable)
    {
        $(".insert_btn").on("click", function ()
        {
            var textBoxCollection = $(this).parent().children(".textbox");
            var typeArray = new Array();
            for (var i = 0; i < textBoxCollection.length; i++)
            {
                typeArray.push($(textBoxCollection[i]).text());
            }
            $.ajax({
                url: ddTable.handlerUrl,
                async: false,
                type: "get",
                contentType: 'application/json',
                dataType: "json",
                data:
                {
                    "typeName": ddTable.typeName,
                    "methodName": "Insert",
                    "type": encodeURIComponent(typeArray)
                },
                success: function (data)
                {
                    if (data == false)
                    {
                        alert("添加失败");
                    }
                }
            });
            ddTable.initialDdTable();
        })
    };
    this.loadDeleteBtnEvent = function (ddTable)
    {
        $(".delete_btn").on("click", function ()
        {
            var id = $($(this).parent().children()[0]).text();
            $.ajax({
                url: ddTable.handlerUrl,
                async: false,
                type: "get",
                dataType: "json",
                data:
                {
                    "typeName": ddTable.typeName,
                    "methodName": "Delete",
                    "id": id,
                },
                error: function ()
                {
                    alert("删除失败");
                },
                success: function (data)
                {
                    if (data == false)
                    {
                        alert("删除失败");
                    }
                }
            });
            ddTable.initialDdTable();
        })
    };
    this.loadUpdateBtnEvent = function (ddTable)
    {
        $(".update_btn").on("click", function ()
        {
            if ($(this).attr("mode") == "update")
            {
                var rowCellCollection = $(this).prevAll(".cell");
                rowCellCollection.attr("class", "textbox");
                rowCellCollection.attr("contenteditable", "true");
                $(this).attr("mode", "confirm");
                $(this).attr("pastId", $($(this).parent().children()[0]).text());
                $(this).text("确认修改");
            }
            else if ($(this).attr("mode") == "confirm")
            {
                var rowCellCollection = $(this).parent().children(".textbox");
                var typeArray = new Array();
                for (var i = 0; i < rowCellCollection.length; i++)
                {
                    typeArray.push($(rowCellCollection[i]).text());
                }
                var pastId = $(this).attr("pastId");
                $.ajax({
                    url: ddTable.handlerUrl,
                    async: false,
                    type: "get",
                    contentType: 'application/json',
                    dataType: "json",
                    data:
                    {
                        "typeName": ddTable.typeName,
                        "methodName": "Update",
                        "pastId": pastId,
                        "type": encodeURIComponent(typeArray)
                    },
                    error: function ()
                    {
                        alert("修改失败");
                    },
                    success: function (data)
                    {
                        if (data == false)
                        {
                            alert("修改失败");
                        }
                    }
                });
                ddTable.initialDdTable();
            }
        })
    };
    this.loadSearchBtnEvent = function (ddTable)
    {
        $(".search_btn").on("click", function ()
        {
            var rowCellCollection = $(this).parent().children(".textbox");
            var typeArray = new Array();
            for (var i = 0; i < rowCellCollection.length; i++)
            {
                typeArray.push($(rowCellCollection[i]).text());
            }
            var pastId = $(this).attr("pastId");
            $.ajax({
                url: ddTable.handlerUrl,
                async: false,
                type: "get",
                contentType: 'application/json',
                dataType: "json",
                data:
                {
                    "typeName": ddTable.typeName,
                    "methodName": "SelectByAttr",
                    "type": encodeURIComponent(typeArray)
                },
                error: function () { alert("修改失败"); },
                success: function (data) { if (data == false) alert("查询失败");}
            });
            ddTable.initialDdTable();
        })
    };
    this.loadPageBtnEvent = function (ddTable)
    {
        $(".page_btn").on("click", function ()
        {
            ddTable.pageNum = parseInt($(this).text());
            ddTable.initialDdTable();
        })
    };
}
```