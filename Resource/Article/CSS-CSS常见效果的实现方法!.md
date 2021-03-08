# 文字的水平居中

```css
　　.div
    {
        text-align:center;
    }
```

# 文字的垂直居中

* 将行间距和height设置相同的值即可

```css
　　.div{
　　　　height:100px;
       line-height:100px;
　　　　margin:0 auto;
　　}
```

# 侧边栏随窗体移动

# 图片宽度的自适应


# 3D按钮

* 要使按钮具有3D效果，只要将它的左上部边框设为浅色，右下部边框设为深色即可。

```css
　　button{
　　　　background: #888;
　　　　border: 1px solid;
　　　　border-color: #999 #777 #777 #999;
　　}
```

# 背景颜色透明

```css
    div
    {
        background-color: rgba(255, 255, 255, 0.1);
    }
```

# font属性的快捷写法


14. font-size基准

浏览器的缺省字体大小是16px，你可以先将基准字体大小设为10px：

　　body {font-size:62.5%;}

后面统一采用em作为字体单位，2.4em就表示24px。

　　h1 {font-size: 2.4 em}

15. Text-transform和Font Variant

Text-transform用于将所有字母变成小写字母、大写字母或首字母大写：

　　p {text-transform: uppercase}
　　p {text-transform: lowercase}
　　p {text-transform: capitalize}

Font Variant用于将字体变成小型的大写字母（即与小写字母等高的大写字母）。

　　p {font-variant: small-caps}



18. 透明

将一个容器设为透明，可以使用下面的代码：

　　.element {
　　　　filter:alpha(opacity=50);
　　　　-moz-opacity:0.5;
　　　　-khtml-opacity: 0.5;
　　　　opacity: 0.5;
　　}

在这四行CSS语句中，第一行是IE专用的，第二行用于Firefox，第三行用于webkit核心的浏览器，第四行用于Opera。

19. CSS三角形

如何使用CSS生成一个三角形？

先编写一个空元素

　　<div class="triangle"></div>

然后，将它四个边框中的三个边框设为透明，剩下一个设为可见，就可以生成三角形效果：

　　.triangle {
　　　　border-color: transparent transparent green transparent;
　　　　border-style: solid;
　　　　border-width: 0px 300px 300px 300px;
　　　　height: 0px;
　　　　width: 0px;
　　}

20. 禁止自动换行

如果你希望文字在一行中显示完成，不要自动换行，CSS命令如下：

　　h1 { white-space:nowrap; }

21. 用图片替换文字

有时我们需要在标题栏中使用图片，但是又必须保证搜索引擎能够读到标题，CSS语句可以这样写：

　　h1 {
　　　　text-indent:-9999px;
　　　　background:url("h1-image.jpg") no-repeat;
　　　　width:200px;
　　　　height:50px;
　　}

22. 获得焦点的表单元素

当一个表单元素获得焦点时，可以将其突出显示：

　　input:focus { border: 2px solid green; }

23. !important规则

多条CSS语句互相冲突时，具有!important的语句将覆盖其他语句。由于IE不支持!important，所以也可以利用它区分不同的浏览器。

　　h1 {
　　　　color: red !important;
　　　　color: blue;
　　}

上面这段语句的结果是，其他浏览器都显示红色标题，只有IE显示蓝色标题。

24. CSS提示框

当鼠标移动到链接上方，会自动出现一个提示框。

　　<a class="tooltip" href="#">链接文字 <span>提示文字</span></a>

CSS这样写：

　　a.tooltip {position: relative}
　　a.tooltip span {display:none; padding:5px; width:200px;}
　　a:hover {background:#fff;} /*background-color is a must for IE6*/
　　a.tooltip:hover span{display:inline; position:absolute;}

25. 固定位置的页首

当页面滚动时，有时需要页首在位置固定不变，CSS语句可以这样写，效果参见http://limpid.nl/lab/css/fixed/header：

　　body{ margin:0;padding:100px 0 0 0;}

　　div#header{
　　　　position:absolute;
　　　　top:0;
　　　　left:0;
　　　　width:100%;
　　　　height:<length>;
　　}

　　@media screen{
　　　　body>div#header{position: fixed;}
　　}

　　* html body{overflow:hidden;}

　　* html div#content{height:100%;overflow:auto;}

IE6的另一种写法（用于固定位置的页脚）：

　　* html #footer {
　　　　position:absolute;
　　　　top:expression((0-(footer.offsetHeight)+(document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight)+(ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop))+'px');
}

26. 在IE6中设置PNG图片的透明效果

　　.classname {

　　　　background: url(image.png);

　　　　_background: none;

　　　　_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader
　　　　　　　　(src='image.png', sizingMethod='crop');

　　}

27. 各类浏览器的专用语句

　　/* IE6 and below */
　　* html #uno { color: red }

　　/* IE7 */
　　*:first-child+html #dos { color: red }

　　/* IE7, FF, Saf, Opera */
　　html>body #tres { color: red }

　　/* IE8, FF, Saf, Opera (Everything but IE 6,7) */
　　html>/**/body #cuatro { color: red }

　　/* Opera 9.27 and below, safari 2 */
　　html:first-child #cinco { color: red }

　　/* Safari 2-3 */
　　html[xmlns*=""] body:last-child #seis { color: red }

　　/* safari 3+, chrome 1+, opera9+, ff 3.5+ */
　　body:nth-of-type(1) #siete { color: red }

　　/* safari 3+, chrome 1+, opera9+, ff 3.5+ */
　　body:first-of-type #ocho { color: red }

　　/* saf3+, chrome1+ */
　　@media screen and (-webkit-min-device-pixel-ratio:0) {
　　　　#diez { color: red }
　　}

　　/* iPhone / mobile webkit */
　　@media screen and (max-device-width: 480px) {
　　　　#veintiseis { color: red }
　　}

　　/* Safari 2 - 3.1 */
　　html[xmlns*=""]:root #trece { color: red }

　　/* Safari 2 - 3.1, Opera 9.25 */
　　*|html[xmlns*=""] #catorce { color: red }

　　/* Everything but IE6-8 */
　　:root *> #quince { color: red }

　　/* IE7 */
　　*+html #dieciocho { color: red }

　　/* Firefox only. 1+ */
　　#veinticuatro, x:-moz-any-link { color: red }

　　/* Firefox 3.0+ */
　　#veinticinco, x:-moz-any-link, x:default { color: red }

　　/***** Attribute Hacks ******/

　　/* IE6 */
　　#once { _color: blue }

　　/* IE6, IE7 */
　　#doce { *color: blue; /* or #color: blue */ }

　　/* Everything but IE6 */
　　#diecisiete { color/**/: blue }

　　/* IE6, IE7, IE8 */
　　#diecinueve { color: blue\9; }

　　/* IE7, IE8 */
　　#veinte { color/*\**/: blue\9; }

　　/* IE6, IE7 -- acts as an !important */
　　#veintesiete { color: blue !ie; } /* string after ! can be anything */

28. 容器的水平和垂直居中

HTML代码如下：

　　<figure class='logo'>

　　　　<span></span>

　　　　<img class='photo'/>

　　</figure>

CSS代码如下：

　　.logo {
　　　　display: block;
　　　　text-align: center;
　　　　display: block;
　　　　text-align: center;
　　　　vertical-align: middle;
　　　　border: 4px solid #dddddd;
　　　　padding: 4px;
　　　　height: 74px;
　　　　width: 74px; }

　　.logo * {
　　　　display: inline-block;
　　　　height: 100%;
　　　　vertical-align: middle; }

　　.logo .photo {
　　　　height: auto;
　　　　width: auto;
　　　　max-width: 100%;
　　　　max-height: 100%; }

29. CSS阴影

外阴影：

　　.shadow {
　　　　-moz-box-shadow: 5px 5px 5px #ccc;
　　　　-webkit-box-shadow: 5px 5px 5px #ccc;
　　　　box-shadow: 5px 5px 5px #ccc;
　　}

内阴影：

　　.shadow {
　　　　-moz-box-shadow:inset 0 0 10px #000000;
　　　　-webkit-box-shadow:inset 0 0 10px #000000;
　　　　box-shadow:inset 0 0 10px #000000;
　　}

30. 取消IE文本框的滚动条

　　textarea { overflow: auto; }

31. 图片预加载

请参考3 Ways to Preload Images with CSS, JavaScript, or Ajax。

# CSS重置
