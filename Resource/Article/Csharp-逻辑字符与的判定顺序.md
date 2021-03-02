```csharp
public static void Main()
{
    Man man=null;
    if (man != null&&man.Age == 18) 
    {
        Console.WriteLine(man.Age);
    }
}
```

* 逻辑字符与是从左往右判定，一旦前面的表达式又一个结果为否，则对后面的不进行判断
* 利用上述结论，可以在一行判断一个对象的属性，且不会因为该对象的引用为空而抛出异常