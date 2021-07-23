# 设置背景图片

```css
#background/*图片背景1*/
/*直接使用一整张图片作为背景*/
{
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -100;
    background-image: url(../../images/background.jpg);
    background-size: cover;
    background-position: center;
}
#background/*图片背景*/
/*使用宽1像素的图片在x轴重复形成背景*/
{
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -100;
    background-image: url(../../images/background.jpg);
    background-position: center;
    background-repeat: repeat-x;
}

#background/*视频背景*/
/*background标记为必须为video标记并设置视频源*/
{
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -100;
    object-fit: cover;
    object-position: center;
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