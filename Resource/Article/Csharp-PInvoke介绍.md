# P/Invoke介绍

P/Invoke允许一个.NET语言调用非托管的其它基于.net框架的代码

# C#通过P/Invoke方式调用Windows API

* 首先使用网站[win32api文档](https://docs.microsoft.com/en-us/windows/win32/api/)查看需要使用函数的api文档,以MessageBox函数举例,以下为该函数的语义(Syntax
)

```C++
int MessageBox(
  HWND    hWnd,
  LPCTSTR lpText,
  LPCTSTR lpCaption,
  UINT    uType
);
```

* 之后要将参数的数据类型转换为C#的托管数据类型
* HWND类型，表示一个窗口句柄，c#中可以使用Intptr类型，表示一个指针或者句柄
* LPCTSTR(L‌ong P‌ointer to a C‌onst T‌CHAR String) 所以这是一个字符串
* UINT，我们直接在c#中有对应的uint
* 转化结果为

```csharp
public class Win32
{
    [DllImport("user32.dll")]
    public static extern IntPtr MessageBox(int hWnd, String text, String caption, uint type);
}
```

* 如果不会写函数的调用方法，可以通过网站[PInvoke.NET](https://www.pinvoke.net/default.aspx/user32.mouse_event)查询
* 最后要，添加对System.Runtime.InteropServices的引用

# 参考

[手把手教你PInvoke](https://blog.csdn.net/htxhtx123/article/details/104323450)