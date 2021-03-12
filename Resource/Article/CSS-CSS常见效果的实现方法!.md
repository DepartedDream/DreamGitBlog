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

* postion的fiexed值表示固定窗体定位
* bottom表示该元素距离窗体底部的距离

```css
　　.div{
　　　  position:fixed;
        bottom:0;
　　}
```

# 图片宽度的自适应

```css

```

# 视频作为背景图片的方法

```css

```

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

* 通过将元素的背景颜色使用rgba定义即可实现

```css
    div
    {
        background-color: rgba(255, 255, 255, 0.1);
    }
```

# 