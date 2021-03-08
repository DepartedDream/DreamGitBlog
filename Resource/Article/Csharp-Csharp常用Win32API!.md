```csharp
const int WM_MOUSEWHEEL = 0x020A; //鼠标滚轮
const int WM_LBUTTONDOWN = 0x0201;//鼠标左键
const int WM_LBUTTONUP = 0x0202;
const int WM_KEYDOWN = 0x0100;//模拟按键
const int WM_KEYUP = 0x0101;
const int MOUSEEVENTF_MOVE = 0x0001;//用于琴台鼠标移动
const int MOUSEEVENTF_LEFTDOWN = 0x0002;//前台鼠标单击
const int MOUSEEVENTF_LEFTUP = 0x0004;
const int WM_SETTEXT = 0x000C;//设置文字
const int WM_GETTEXT = 0x000D;//读取文字


[DllImport("kernel32.dll")]
public static extern IntPtr OpenProcess(int dwDesiredAccess, bool bInheritHandle, int dwProcessId);

[DllImport("User32")]
private static extern int FindWindow(string className, string windowName);

[DllImport("User32.dll", EntryPoint = "SendMessage")]
[DllImport("User32.dll", EntryPoint = "SendMessage")]
//hwndParent(通用句柄) hwndChildAfter() className(窗口类名)
private static extern int FindWindowEx(int hwndParent, windowint hwndChildAfter,string className,string windowName);

//
[DllImport("gdi32.dll")]
private static extern uint GetPixel(int hdc, int nXPos, int nYPos);

//
[System.Runtime.InteropServices.DllImport("user32")]
[DllImport("user32.dll")]
static extern bool SetCursorPos(int X, int Y);

//
[DllImport("user32.dll")]
public static extern IntPtr GetWindowRect(IntPtr hWnd, ref RECT rect);


[DllImport("gdi32.dll")]
public static extern IntPtr CreateCompatibleDC(
 IntPtr hdc // handle to DC
);

[DllImport("gdi32.dll")]

[DllImport("user32.dll")]
public static extern IntPtr GetWindowDC(
 IntPtr hwnd
);


[DllImport("user32.dll")]
[return: MarshalAs(UnmanagedType.Bool)]
static extern bool GetWindowRect(int hWnd, ref RECT lpRect);

[StructLayout(LayoutKind.Sequential)]
public struct RECT
{
    public int Left; //最左坐标
    public int Top; //最上坐标
    public int Right; //最右坐标
    public int Bottom; //最下坐标
}

public static Bitmap GetWindowCapture(IntPtr hWnd)
{
    IntPtr hscrdc = GetWindowDC(hWnd);
    RECT windowRect = new RECT();
    GetWindowRect(hWnd, ref windowRect);
    int width = windowRect.Right - windowRect.Left;
    int height = windowRect.Bottom - windowRect.Top;
    IntPtr hbitmap = CreateCompatibleBitmap(hscrdc, width, height);
    IntPtr hmemdc = CreateCompatibleDC(hscrdc);
    SelectObject(hmemdc, hbitmap);
    PrintWindow(hWnd, hmemdc, 0);
    Bitmap bmp = Bitmap.FromHbitmap(hbitmap);
    DeleteDC(hscrdc);//删除用过的对象
    DeleteDC(hmemdc);//删除用过的对象
    return bmp;
}
```csharp


```csharp
[DllImport("user32.dll")]
public static extern void mouse_event(MouseEventFlag flags, int dx, int dy,
```