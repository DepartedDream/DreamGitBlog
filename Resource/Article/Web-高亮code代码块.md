# 添加网络引用

在head中加入css和js的引用

## 添加网络引用

```html
<head>
	<title>highlight</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8">
    <link href="http://cdn.bootcss.com/highlight.js/8.0/styles/monokai_sublime.min.css" rel="stylesheet">  
    <script src="http://cdn.bootcss.com/highlight.js/8.0/highlight.min.js"></script>  
	<script>hljs.initHighlightingOnLoad();</script>
</head>
```

## 添加本地引用

[hightlight.js下载位置](https://highlightjs.org/usage/) 

* 进入下载页面后，选择需要语言的样式，之后点击下载
* 下载完成后，将文件highlight.pack.js导入项目中
* 在styles文件中挑选一个喜欢的样式[样式参考](https://highlightjs.org/static/demo/)导入项目

# 应用

由于项目使用过程中页面内容是由ajax加载出来，无法使用initHighlightingOnLoad()方法进行渲染，查询api文档后通过使用highlightBlock(block)应用高亮到一个包含代码的DOM节点上，即可解决问题。

[highlightjs 英文api文档](http://highlightjs.readthedocs.org/en/latest/api.html)

# 参考

[highlight.js的简单使用方法](https://blog.csdn.net/u012906135/article/details/51605365)
[Getting highlight.js](https://highlightjs.org/download/)
[使用highlight.js高亮你的代码](https://www.cnblogs.com/ermu-learn/p/5993025.html)
[代码高亮 highlightjs 使用文档](https://blog.csdn.net/spy19881201/article/details/38866033)
[highlightjs 英文api文档](http://highlightjs.readthedocs.org/en/latest/api.html)