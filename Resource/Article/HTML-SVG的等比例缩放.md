# 如何将svg进行缩放
```
<svg width="200" height="200" viewbox="0 0 100 100"></svg>
```
* viewbox 前两个坐标表示画布的左上角定点的横坐标和纵坐标
* 后两个坐标表示显示你画布的范围

例:假如你从左上角画一条path d="M 0 0 L 200 0"的线,向上的viewbox只能显示这条线的一半

* width,height会将画布放大到你指定的大小