# 问题描述

以下代码无法边设置html内容边为其中的内容添加事件

```javascript
var typeArray =
    {
        Admin: "管理员信息管理",
        Class: "班级信息管理",
        Course: "课程信息管理",
        Notice: "通知信息管理",
        SelectCourse: "选课信息管理",
        Student: "学生信息管理",
        Teacher:"教师信息管理"
    }
    var i = 0;
    for (var x in typeArray)
    {
        $("#function_area").html($("#function_area").html() + `<div class="function_item">${typeArray[x]}</div>`);
        console.log($(".function_item")[i]);
        $($(".function_item")[i]).on("click", function ()
        {
            window.location = `AdminManage.aspx?type=${x}`;
        })
        i += 1;
    }
```
# 解决方法

先设置html内容，再为其中的元素设置事件，html方法会重置内部元素的事件。