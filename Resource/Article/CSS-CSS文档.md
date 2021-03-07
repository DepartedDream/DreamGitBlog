# css选择器

# css动画

```
@keyframes mymove
    {
    from {background-color:red;}
    to {background-color:blue;}
}
 
/*Safari 和 Chrome:*/
@-webkit-keyframes mymove
{
    from {background-color:red;}
    to {background-color:blue;}
}
```

# css函数

```
#grad {
  background-image: linear-gradient(red, yellow, blue);
}
```

# css单位

# css属性

## background

设置背景

```
background:bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
```

## background-image

设置图片背景

值|描述
--|
background|url(相对当前代码文件图片路径)

## background-color

设置背景颜色，可以与背景图片同时设置

值|描述
--|--
background|url(相对当前代码文件图片路径)

## background-

## text-shadow

```
text-shadow: x轴偏移量 y轴偏移量 blur阴影模程度 color颜色
text-shado: 2px 3px 2px #000;
```