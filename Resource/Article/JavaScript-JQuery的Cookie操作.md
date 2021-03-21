# 引用js文件

* 想要使用jquery操作cookie需要额外导入jquery.cookie文件

```html
<script src="/path/to/jquery.min.js"></script>
<script src="/path/to/jquery.cookie.js"></script>
```
# jQuery的Cookie操作

```javascript
//创建 cookie
$.cookie('name', 'value');
//创建 cookie，并设置 7 天后过期
$.cookie('name', 'value', { expires: 7 });
//创建 cookie，并设置 cookie 的有效路径，路径为网站的根目录：
$.cookie('name', 'value', { expires: 7, path: '/' });
//读取 cookie
$.cookie('name'); // => "value"
$.cookie('nothing'); // => undefined
//读取所有的 cookie 信息：
$.cookie(); // => { "name": "value" }
// cookie 删除成功返回 true，否则返回 false
$.removeCookie('name'); // => true
$.removeCookie('nothing'); // => false 
// 写入使用了 path时，读取也需要使用相同的属性 (path, domain) 
$.cookie('name', 'value', { path: '/' });
// 以下代码【删除失败】
$.removeCookie('name'); // => false
// 以下代码【删除成功】
$.removeCookie('name', { path: '/' }); // => true
```

# 参考

[jQuery Cookie 插件](https://www.runoob.com/jquery/jquery-cookie-plugin.html)