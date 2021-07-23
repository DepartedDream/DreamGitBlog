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
.div
{
　  position:fixed;
    bottom:0;
}
```

# 设置背景图片

```css
#background/*图片背景*/
{
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -100;
    background-image: url(../../images/background.jpg);
    background-size: cover;
    background-position: center;
}
#background/*视频背景*/
{
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -100;
    object-fit: cover;
    object-position: center;
}
```

* url路径使用正斜杠/
* 背景图片的路径值是相对该css文件的相对路径
* object-fit使得视频能够自动拉伸并覆盖全部窗体
* object-position使得视频中心位置始终在窗体中心

# 3D按钮

* 要使按钮具有3D效果，只要将它的左上部边框设为浅色，右下部边框设为深色即可。

```css
　　button{
　　　　background: #888;
　　　　border: 1px solid;
　　　　border-color: #999 #777 #777 #999;
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
        box-shadow: offset-x offset-y blur spread color inset;
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

# 透明背景模糊

```css
    .button
    {
        border-radius: 50px;
        background-color: rgba(255, 255, 255, 0.25);
    }
```

# 表单元素的占位文本样式设置

···css
    .textbox::-webkit-input-placeholder
    {
        color:white;
    }
···

# CSS英语单词换行

* 默认状态html标记内的整串英语单词是不会换行的
* 设置css属性word-break:break-all即可

以下为CSS属性word-break的说明

值|描述
normal|使用浏览器默认的换行规则。
break-all|允许在单词内换行。
keep-all|只能在半角空格或连字符处换行。

# CSS的Button样式

* CSS按钮在线生成工具

[best css button generator](https://www.bestcssbuttongenerator.com/)
[CSS Button Generator](https://css3buttongenerator.com/)
[CSS-Tricks Example](https://css-tricks.com/examples/ButtonMaker/)
[CSS Settings](http://www.cssdrive.com/css3button/)
[Button Generator](https://www.cssbuttongenerator.com/)
[CSS Portal](https://www.cssportal.com/css3-button-generator/)
[Buttons](https://unicorn-ui.com/buttons/builder/)
[Sassy Buttons](http://jaredhardy.com/sassy-buttons/)