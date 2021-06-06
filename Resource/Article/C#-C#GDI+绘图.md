# GDI+简单绘图

## 使用pen绘制图形

```C#
Graphics g = e.Graphics; 
//创建画板,这里的画板是由Form提供的.
Pen p = new Pen(Color.Blue, 2);
//定义了一个蓝色,宽度为的画笔
g.DrawLine(p, 10, 10, 100, 100);
//在画板上画直线,起始坐标为(10,10),终点坐标为(100,100)
```

## 使用brush填充图形

```C#
private void Form1_Paint(object sender, PaintEventArgs e)
{
    Graphics graphics = e.Graphics;
    //影线画刷 用于绘制带阴影线的图形
    HatchBrush hatchBrush = new HatchBrush(HatchStyle.Horizontal, Color.Red, Color.FromArgb(255, 128, 255, 255));
    //线性渐变画刷 绘制颜色程线性渐变的图形
    LinearGradientBrush linearGrBrush = new LinearGradientBrush(
        new Point(0, 10),
        new Point(200, 10),
        Color.FromArgb(255, 255, 0, 0),
        Color.FromArgb(255, 0, 0, 255));
    //路径渐变画刷
    GraphicsPath path = new GraphicsPath();
    path.AddEllipse(0, 0, 140, 70);
    PathGradientBrush pathGrBrush = new PathGradientBrush(path);
    pathGrBrush.CenterColor = Color.FromArgb(255, 0, 0, 255);
    Color[] colors = { Color.FromArgb(255, 0, 255, 255) };
    pathGrBrush.SurroundColors = colors;
    //单色画刷 绘制单一颜色的图形
    SolidBrush solidBrush = new SolidBrush(Color.AliceBlue);
    //纹理画刷 绘制使用图片填充的图形
    TextureBrush textureBrush = new TextureBrush(Image.FromFile("图片路径"));
    //选择以上一个画刷用于填充图形
    graphics.FillRectangle(pathGrBrush, new Rectangle(new Point(0, 0), new Size(200, 100)));
}
```

* 绘制其它形状参考[Graphics类api文档](https://docs.microsoft.com/zh-cn/dotnet/api/system.drawing.graphics?view=net-5.0)
* [Brush类api文档](https://docs.microsoft.com/zh-cn/dotnet/api/system.drawing.brush?view=net-5.0)
* [Pen类api文档](https://docs.microsoft.com/zh-cn/dotnet/api/system.drawing.pen?view=net-5.0)

# 参考

* [C# GDI+简单绘图](https://www.cnblogs.com/stg609/archive/2008/03/16/1108333.html)