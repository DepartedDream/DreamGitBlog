# 可空类型修饰符（?）

* 引用类型可以使用空引用表示一个不存在的值，而值类型通常不能表示为空。
* 为了使值类型也可为空，就可以使用可空类型，即用可空类型修饰符"？"来表示，表现形式为"T？"
* T? 其实是System.Nullable(泛型结构）的缩写形式
* 也就意味着当你用到T？时编译器编译 时会把T？编译成System.Nullable的形式。

# 三元（运算符）表达式（?:)

* 例如：x?y:z 表示如果表达式x为true，则返回y；如果x为false，则返回z，
* 是省略if{}else{}的简单形式。

# 空合并运算符（??）

* 用于定义可空类型和引用类型的默认值。
* 如果此运算符的左操作数不为null，则此运算符将返回左操作数，否则返回右操作数。
* 空合并运算符为右结合运算符，即操作时从右向左进行组合的。如，“a??b??c”的形式按“a??(b??c)”计算。

# 示例 

```csharp
    static void Main(string[] args)
    {
       double? num1 = null;//?说明num1可以为空
       double? num2 = 3.14157;
       double num3;
       num3 = num1 ?? 5.34;//num1 如果为空值则返回 5.34
       Console.WriteLine("num3 的值： {0}", num3);
       num3 = num2 ?? 5.34;
       Console.WriteLine("num3 的值： {0}", num3);
       num3=true?1:2;
       Console.WriteLine("num3 的值： {0}", num3);
       num3=false?1:2;
       Console.WriteLine("num3 的值： {0}", num3);
       Console.ReadLine();
    }
```

# 参考

[C# ？？ 和？](https://www.cnblogs.com/balcon/p/10475081.html)
[C# ？与？？区别](https://blog.csdn.net/qq_23018459/article/details/88037178)