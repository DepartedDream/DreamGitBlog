# 错误信息

未找到类型“Model.Student”上的构造函数。无法通过CreateInstance创建该类的示例

```csharp
object[] propValueArray = new object[propArray.Length];
for (int x = 0; x < propArray.Length; x++)
{
    propValueArray[x] = ds.Tables[0].Rows[y][x];
}
T model = (T)Activator.CreateInstance(typeof(T), propValueArray);
```

# 解决方法

通过在该行添加断点，检查后面构造函数的实参与形参的数据类型是否一致。