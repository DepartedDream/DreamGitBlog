# WinForm的几种布局方式
## 默认布局
通过鼠标拖动控件的方式,根据自己的想法布局,控件的大小和位置是绝对的,不会根据窗体大小而改变.
## 边界布局
利用控件Anchor属性进行布局的方法,控件会根据该属性自动缩放.
Dock属性:获取或设置控件停靠到父容器的哪一个边缘
control的Dock属性受z轴离其最近的父元素的影响
Anchor属性:定义某个控件边缘到另一个控件边缘的距离
## 流式布局(Flowlayoutpanel)
也是一个panel，与普通panel的区别是它里面的控件会按照一定的方向流（布局）
属性FlowDirectiaon：LeftToRight从左到右
* TopDawn从上往下
* RightToLeft从右到左
* BottomUp从下往上
## 网格布局(TablelayPanel)
默认两行两列，可以自己添加行或列。
做好表格后，可以往表格里面添加控件。
## 卡片布局(TabControl)
使用选项卡进行布局
## 分割布局(SplitContainer)
属性orientation：调整分割方式，确定拆分器是水平的还是垂直的
* Vertical：垂直；
* Horizontal：水平的
分割线在窗体启动后，也是可以拖动的
