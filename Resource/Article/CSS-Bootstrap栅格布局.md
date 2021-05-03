# 引入Bootstrap并设置移动设备优先

```html
<head>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
</head>
```

```html
<body>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</body>
```

# 栅格等级

* 栅格布局存在五种等级，分别对应不同的设备

设备类型|超小屏幕（<576px）|小屏幕（576px≤）|中等屏幕（768px≤）|大屏幕（992px≤）|超大屏幕(1200px≤)
--|--|--|--|--|--
类属性|col-xs-* |col-sm-* |col-md-* |col-lg-* |col-xl-*
|col-xl-*

* .row必须放置在.container内
* .row用来创建行。
* 内容应该放置在列.col内，且唯有列可以是.row的直接子元素。
* 栅格布局一行自动分为最多12列。
* 使用.w-100可以分割栅格栏位为两行
* 如果不为列设置格数，它将平均分配
* 如果设置了.col数值，则不进行自动填充

# 自适应显示与隐藏

类属性|效果
--|--
d-none|隐藏在所有
d-block|所有设备可见
d-sm-none d-md-block|仅在小设备上隐藏
d-sm-none d-lg-block|在小设备和中设备上隐藏
d-none d-sm-block d-md-none|仅在小设备上显示

* 设备等级表示了一个该设备宽度的一个最低值
* d-sm-none d-lg-block可以理解为sm-none-lg即在区间576-none-992隐藏

# 对齐与排列
## 栅格对齐

垂直样式(作用于行)
--|--
居顶(默认)|.align-items-start
居中|.align-items-center
居底|.align-items-end

水平样式(作用于行)
--|--
居左(默认)|.justify-content-start
居中|.justify-content-center
居右|.justify-content-end
间隔相等(分散)|.justify-content-around
间隔对齐(分散)|.justify-content-between

样式(作用于列)
--|--
居顶(默认)|.align-self-start
居中|.align-self-center
居底|.align-self-end

## 栅格排列

* 通过.order-N，N最大为12进行列排序
* .order-first设置为第一列，.order-last为最后一列
* .offset-N .offset-*-N设置列的偏移量，N最大为12
* .ml-N或.mr-N微调列距离 l,r分别表示左右
* .ml-auto和.mr-auto来左右对齐