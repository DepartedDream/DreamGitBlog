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

* object-fit使得视频能够自动拉伸并覆盖全部窗体
* object-position使得视频中心位置始终在窗体中心

```css
#background
{
    position: fixed;
    display: block;
    z-index: -100;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: center;
}
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

# 隐藏标签

```css
    div
    {
        display:none;
    }
```

# 标签发光/阴影效果

```css
    div
    {
        box-shadow: box-shadow: offset-x offset-y blur spread color inset;
    }
```

* offset-x：必需，取值正负都可。offset-x水平阴影的位置。
* offset-y：必需，取值正负都可。offset-y垂直阴影的位置。
* blur:可选，只能取正值。blur-radius阴影模糊半径，0即无模糊效果，值越大阴影边缘越模糊。
* spread：可选，取值正负都可。spread代表阴影的周长向四周扩展的尺寸，正值，阴影扩大，负值阴影缩小。
* color:可选。阴影的颜色。如果不设置，浏览器会取默认颜色，通常是黑色，但各浏览器默认颜色有差异，建议不要省略。可以是rgb(250,0,0)，也可以是有透明值的rgba(250,0,0,0.5)。
* inset:可选。关键字，将外部投影(默认outset)改为内部投影。inset 阴影在背景之上，内容之下。

```css
    div
    {
        filter:drop-shadow(offset-x offset-y blur color)
    }
```

# 文字发光/阴影效果

```css
    div
    {
        text-shadow: box-shadow: offset-x offset-y blur spread color inset;
    }
```

# CSS平行四边形的实现方法

```css
    .button 
    {
        position: relative;
    }

    .button::before 
    {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0; 
    }
```