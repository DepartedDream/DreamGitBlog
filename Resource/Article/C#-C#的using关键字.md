# using 关键字的作用
## 引用命名空间

* using + 命名空间名字，这样可以在程序中直接用命令空间中的类型，而不必指定类型的详细命名空间，

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
```

## 重命名命名空间

* 为命名空间重命名

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using aClass = NameSpace1.MyClass;
using bClass = NameSpace2.MyClass;
```

## 释放对象资源

* 当对象脱离using代码块时，会自动释放对象
* 即使using代码块中发生异常，对象依旧会被释放 [详情]((https://blog.csdn.net/xc917563264/article/details/89918801))
* using语句中只能包含实现了IDisposable接口的类

```csharp
public class MyCommand
{
    public void Fun1()
    {
        using (MyConnection conn = new MyConnection())
        {
            conn.Open();
        }
    }
}
```

# 参考

[如果using语句中出现异常，资源会被释放掉吗？](https://blog.csdn.net/xc917563264/article/details/89918801)
[C# using 三种使用方式](https://www.cnblogs.com/mslalan/p/7452021.html)