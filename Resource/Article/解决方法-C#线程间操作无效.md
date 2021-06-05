# 问题描述

* 在开发winform程序时，新开启的线程无法访问winform控件

# 解决方法

* 访问 Windows 窗体控件本质上不是线程安全的
* 如果有多个线程操作控件状态，可能使控件进入一种不一致的状态，还可能出现其他与线程相关的 bug

## 方法1

* 设置该属性后编译器不会对跨线程的控件访问报错
* 不推荐该方法

```
控件类.CheckForIllegalCrossThreadCalls==false
```

## 方法2

* 使用委托

```csharp
public partial class Form1 : Form
{
    public Form1()
    {
        InitializeComponent();
    }
    public delegate void MyInvoke(string str1, string str2);//定义一个委托事件
    public void DoWork()
    {
        MyInvoke mi = new MyInvoke(UpdateForm);//把updateform方法委托给mi
        //“BeginInvoke”再创建控件的基础句柄所在线程上，用指定的参数异步执行指定委托
        this.BeginInvoke(mi, new object[] { "说谁是文本框呢？", "胡闹" });//后面的两个参数为mi对象的参数，执行委托
    }
    public void UpdateForm(string param1, string param2)//定义一个更新窗体方法
    {
        this.textBox1.Text = param1 + param2;
    }
    private void btnok_Click(object sender, EventArgs e)
    {
        Thread thread = new Thread(new ThreadStart(DoWork));
        thread.Start();
    }
}
```

# 参考

* [线程间操作无效](https://www.cnblogs.com/zhoulitong/p/6412353.html)