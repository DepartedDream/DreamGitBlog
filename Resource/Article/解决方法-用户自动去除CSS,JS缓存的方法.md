# 问题描述

网站更新后，由于客户端存在js或css文件的缓存无法及时的显示更新后的内容，只能强制刷新后才能显示，由于不能强制用户清除缓存故发现此问题。

# 解决方法

* 在引用js文件或css文件时在后面添加版本号
* 当文件版本号修改时，客户端即可重新获取该文件

```html
<link rel="stylesheet" href="/css/style.css?v=1.0">
<script src="/script/main.js?v=1.0"><\/script>
```