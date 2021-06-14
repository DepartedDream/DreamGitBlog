# CSS同时选择伪类和伪元素
```html
<!DOCTYPE html>
<head>
    <title></title>
    <link href="Main.css" rel="stylesheet" />
</head>
<body>
    <div id="button1">asd</div>
</body>
</html>
```

```css
#button1::after
{
    width: 200px;
    height: 200px;
}

#button1::before
{
    position: absolute;
    content: "button1before";
    width: 200px;
    height: 200px;
    top: 200px;
    left: 0;
    background-color: red;
}

#button1
{
    position: relative;
    width: 200px;
    height: 200px;
    top: 200px;
    background-color: green;
}

#button1::after
{
    position: absolute;
    content: "button1after";
    width: 200px;
    height: 200px;
    bottom: 200px;
    left:0;
    background-color: yellow;
}

#button1:hover::before
{
   width:100px;
   height:100px;
}

#button1:hover::after
{
    width: 100px;
    height: 100px;
}
```

* 当鼠标悬浮于button1时，伪元素after和before将缩小