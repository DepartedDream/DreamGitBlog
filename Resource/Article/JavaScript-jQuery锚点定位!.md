# 
一、锚点链接

锚点其实就是可以让页面定位到某个位置上的点，在高度较高的页面中会经常见到。比如百度百科以及一些帮助文档都会使用到锚点链接。
我们最常用的就是用 id 绑定锚点，代码如下：

```html
<a href=”#jump”>点我进行跳转</a>
<br /> 
<br />
<br />
<br />
<br />  
<h2 id=”jump”>跳转到这里了</h2>
```
1
2
3
4
5
6
7
二、包含锚点链接的URL地址

# 关于 #

在页面的制作中，# 的符号很常见，并且具有通用性。基本上，其表示的含义是 id 选择符。例如：在 CSS 中 #header{} 就表示 id 为 header 的标签的样式如何；在 jQuery 中，$(“#header”) 表示选择 id 为 header 的标签为 JQuery 对象；在页面的 URL 中，# 也可以理解为 id 选择符之意，也就是页面跳转到含 URL 指向的 id 的标签处。

例如输入一个地址https://baike.baidu.com/item/小猪佩奇#3
这个地址中末尾有个 # ，这个就相当于告诉浏览器要跳转了，# 后面跟着的3表示会在https://baike.baidu.com/item/小猪佩奇的页面中寻找符合 #3 特点的标签，并且执行跳转。

# 关于空锚点指向

如果 URL 中的 # 后面跟随的字符 id 在文中找不到，就会有两种情况：如果是在当前页面，除了 URL 地址变化了，其它的不会改变，页面不会有跳转；如果是从其它页面跳转过来，则页面会在顶部显示，# 基本就是摆设。

三、jQuery下锚点的平滑跳转

例如：让页面平滑滚动到一个 id 为 content 的元素处，JQuery 只要一句就能搞定，代码如下：

$(“html,body”).animate({scrollTop:$(“#content”).offset().top},1000);
1
其中 animate 是 JQuery 的自定义动画方法，$(“#content”).offset().top 表示 id 为 content 的 JQuery 对象距离页面顶部的偏移值，1000 表示平滑动画执行的时间为 1000 毫秒，也就是 1 秒。

# 参考
[jQuery锚点定位](https://blog.csdn.net/weixin_43747105/article/details/86622283)