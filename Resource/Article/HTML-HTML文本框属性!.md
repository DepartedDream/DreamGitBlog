# 关闭文本框自动完成功能

```html
<!DOCTYPE HTML>
<html>
<body>

<form action="/example/html5/demo_form.asp" method="get" autocomplete="on">
First name:<input type="text" name="fname" /><br />
Last name: <input type="text" name="lname" /><br />
E-mail: <input type="email" name="email" autocomplete="off" /><br />
<input type="submit" />
</form>

<p>填写并提交表单，然后重新加载该页面，看看自动完成功能是如何工作的。</p>
<p>注意，表单的自动完成功能是打开的，但是 e-mail 字段的自动完成功能是关闭的。</p>

</body>
</html>
```

* 通过为html标签添加属性autocomplete就会关闭文本框自动完成功能

# 关闭文本框拼写检查功能

spellcheck="false"