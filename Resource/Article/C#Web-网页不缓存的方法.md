# 方法一：在标签里增加如下meta标签。

```html
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
<meta http-equiv="expires" content="0">
```

# 方法二：在java代码中增加如下代码。

```javascript
response.setHeader("Cache-Control","no-cache"); 
response.setHeader("Pragma","no-cache"); 
response.setDateHeader("Expires",0); 
```

# 参考

[让网页不被缓存的解决办法](https://www.cnblogs.com/firstdream/p/6650042.html)
[关于HTML页面不缓存的几种方法](https://blog.csdn.net/qq_33949023/article/details/111070365)
