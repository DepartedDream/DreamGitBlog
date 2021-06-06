# 事件

事件使用委托来订阅 下面是button的点击事件
例：public event EventHandler Click;

# 委托

用于代表函数的变量，例如public delegate void EventHandler(object sender, EventArgs e);
sender是事件源，表示触发事件的那个组件，比如说你按下按钮，那么sender就是按钮
EventArgs是事件参数，比如说你用鼠标点击窗体，那么EventArgs是会包含点击的位置等等，它用来辅助你处理事件。

# 使用代码动态为按钮订阅点击事件
## 方法1：

```csharp
button1.Click+=ShowTime;
public void ShowTime(objet sender,EventArgs e){}
```

方法一之所以为声明委托，适应为编译器会自动识别方法，并声明委托。
## 方法2：

```csharp
button1.Click+=new EventHandler(ShowTime)
public void ShowTime(objet sender,EventArgs e){}
```

如果是取消订阅则使用-=用于让委托取消事件的订阅

# 注意事项

* 订阅事件的委托必须为事件所对应的委托
* 如果不指定委托直接让函数订阅事件，函数的参数必须与委托的参数相同，编译器会自动使用对应的委托。
* 例如上面的例子中ShowTime函数的参数就与委托EventHandler相同