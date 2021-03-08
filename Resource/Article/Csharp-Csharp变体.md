# 变体

协变和抗变统称为变体
## 协变

子类引用隐式转化成父类引用
## 抗变

父类引用隐式转化成子类引用

## 泛型接口中的协变和抗变
例子：

```csharp
public class Sharp
{
}
public class Rectange : Sharp
{
}
```

加out关键字后泛型接口将支持协变

```csharp
public interface ICovariant<out T>
{
}
static void Main(string[] args)
{
    ICovariant<Sharp> isharp = new Sharp();
    ICovariant<Rectange> irect = new Rectange();
    irect = isharp;
}
```
加in关键字后泛型接口将支持抗变

```csharp
public interface ICovariant<in T>
{
}
static void Main(string[] args)
{
    ICovariant<Sharp> isharp = new Sharp();
    ICovariant<Rectange> irect = new Rectange();
    irect = isharp;
}
```