# 转化到10进制

```csharp
Console.WriteLine($"二进制的10-{Convert.ToString(10, 2)}");
Console.WriteLine($"八进制的10-{Convert.ToString(10, 8)}");
Console.WriteLine($"十六进制的10-{Convert.ToString(10, 16)}");
Console.ReadKey();
```

# 从10进制转换

```csharp
Console.WriteLine($"十进制的1010(二进制)-{Convert.ToInt32("1010",2)}");
Console.WriteLine($"十进制的10(八进制)-{Convert.ToInt32("12",8)}");
Console.WriteLine($"十进制的a(十六进制)-{Convert.ToInt32("a",16)}");
Console.WriteLine($"十进制的a(十六进制)-{Convert.ToInt32("a", 16)}");
```

# 从非10进制转换到非10进制

```csharp
//十六进制转二进制
Console.WriteLine($"{Convert.ToString(Convert.ToInt32("a",16),2)}");
```

# 参考

* [C#进制转换](https://www.cnblogs.com/marvelousone/p/7596760.html)
* [C# 进制转换](https://www.cnblogs.com/rayray/archive/2010/07/12/1775949.html)