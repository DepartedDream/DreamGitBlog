# Form表单的默认状态

* Form表单默认使用Get提交，即method属性默认值为get
* Form表单默认自动提交数据到当前页，即action属性默认值为当前页面路径

# 测试用例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <input type="text" name="username">
        <input type="submit" value="提交">
    </form>
</body>
</html>
```