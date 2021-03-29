# 什么是favicon.ico

* 所谓favicon，即Favorites Icon的缩写，
* favicon是网站标题左侧的图标。

# favicon.ico是一个网站必要的吗

* 不是必要的，但是web服务器在网站加载时都会请求favicon.ico这个文件
* 如果不存在就会报404错误，并且会记录到错误日志中，所以最好的设置

# 如何设置favicon.ico

## 放在根目录

* 在服务器根目录下放一个 favicon.ico 的文件，浏览器发现后就会使用。


## link标签

```
<link rel="icon" href="../favicon.ico">
```

## favicon的格式

* favicon的格式有ico，png，jpg，gif
* favicon的尺寸有16×16、32×32、48×48，可以不同尺寸兼容多种设备

# favicon.icon文件制作网站

[favicon.ico在线制作](http://www.faviconico.org/)

# 参考

[用HTML创建网页，标题栏处怎么设置logo标志。？](https://www.zhihu.com/question/353468007/answer/1607018500)