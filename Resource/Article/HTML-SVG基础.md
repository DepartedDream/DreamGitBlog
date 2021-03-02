# 介绍
* SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
* SVG 用来定义用于网络的基于矢量的图形
* SVG 使用 XML 格式定义图形
* SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失
* SVG 是万维网联盟的标准
* SVG 与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体lable Vector Graphics）
# 使用SVG的方法
## HTML内部引用
```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>
```
## HTML外部引用
```
<embed src="circle1.svg" type="image/svg+xml" />
```
## SVG文件示例
```
<svg width="640" height="400" xmlns="http://www.w3.org/2000/svg" id="svgColumn">
  <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>
```
# SVG的形状元素
## SVG矩形
```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect width="300" height="100"
  style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/>
</svg>
```

属性|作用
--|--
width|矩形宽度
height|矩形高度

## SVG圆形
```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <circle cx="100" cy="50" r="40" stroke="black"
  stroke-width="2" fill="red"/>
</svg>
```
属性|作用
--|--
cx|圆形横坐标
cy|圆心纵坐标
r|圆半径
## SVG椭圆
```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <ellipse cx="300" cy="80" rx="100" ry="50"
  style="fill:yellow;stroke:purple;stroke-width:2"/>
</svg>
```
属性|作用
--|--
cx|圆形横坐标
cy|圆心纵坐标
rx|圆水平半径
ry|圆垂直半径
## SVG直线
```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="0" y1="0" x2="200" y2="200"
  style="stroke:rgb(255,0,0);stroke-width:2"/>
</svg>
```
属性|作用
--|--
x1|起始点横坐标
x2|起始点纵坐标
y1|终止点横坐标
y2|终止点纵坐标
## SVG多边形
```
<svg  height="210" width="500">
  <polygon points="200,10 250,190 160,210"
  style="fill:lime;stroke:purple;stroke-width:1"/>
</svg>
```
* points属性记录多边形各个顶点的坐标
## SVG折线
```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polyline points="20,20 40,25 60,40 80,120 120,140 200,180"
  style="fill:none;stroke:black;stroke-width:3" />
</svg>
```
* points属性记录折线各个点的坐标
## SVG路径
```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <path d="M150 0 L75 200 L225 200 Z" />
</svg>
```
d属性的命令|作用|参数
--|--|--
M|moveto移动到|	(x y)+
L|lineto画线到|(x y)+
H|horizontal lineto|x+
V|vertical lineto|y+
C|curveto三次贝塞尔曲线到|(x1 y1 x2 y2 x y)+
S|smooth curveto光滑三次贝塞尔曲线到|	(x2 y2 x y)+
Q|quadratic Bézier curve二次贝塞尔曲线到|(x1 y1 x y)+
T|smooth quadratic Bézier curveto光滑二次贝塞尔曲线到|(x y)+
A|elliptical Arc椭圆弧|(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+
Z|closepath|闭合路径，形成封闭图形。
注意：以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。
## SVG
# SVG的css属性
* fill填充颜色 默认为黑色
* stroke 笔触颜色 默认为黑色
* stroke-width 笔触宽度 默认为黑色
# SVG的dom属性
* viewbox截取画布的范围 (源点x,源点y,长度,宽度)
