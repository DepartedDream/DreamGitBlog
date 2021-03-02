经典CSS缺陷
# margin塌陷问题

在文档流中，父元素的高度默认是被子元素撑开的
如果子元素设置浮动之后，子元素会完全脱离文档流
此时将会导致子元素无法撑开父元素的高度，导致父元素高度塌陷
```
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>margin塌陷</title>
    <style type="text/css">     
        .parent{
            border: 10px red solid;
        }
 
        .child{
            background-color: yellow;
            width: 100px;
            height: 100px;
            float: left;
        }
    </style>
</head>
<body>
    <div class="parent">
        <div class="child"></div>
    </div>
</body>
</html>
```
# margin合并问题
问题描述：
处于上下位置关系的两个div容器，在通过margin-top、margin-bottom改变间距时，如果两个属性的值相同时，则两容器间的距离就是这个值；如果两个属性的值不同，则取较大值作为两容器间的距离；
如下图所示，两容器间距本来应该是上容器的margin-bottom值+下容器的margin-top值
但现实是两容器间距等于margin-bottom和margin-top两者中的最大值
这类bug不必解决，只需要调节最大值达到要求即可。
但也存在着解决方法，那就是在两容器外都套上相同容器（class/id相同的），并在容器中设定overflow：hidden。
