# 运算符重载语法实现

```csharp
public static result-type operator unary-operator ( op-type operand )
public static result-type operator binary-operator ( op-type operand, op-type2 operand2 )
public static implicit operator conv-type-out ( conv-type-in operand )
public static explicit operator conv-type-out ( conv-type-in operand )
```

* result-type 运算符的结果类型。
* unary-operator 下列运算符之一：+ - ! ~ ++ — true false
* op-type 第一个（或唯一一个）参数的类型。
* operand 第一个（或唯一一个）参数的名称。
* binary-operator 其中一个：+ - * / % & | ^ << >> == != > < >= <=
* op-type2 第二个参数的类型。
* operand2 第二个参数的名称。
* conv-type-out 类型转换运算符的目标类型。
* conv-type-in 类型转换运算符的输入类型。

# 运算符重载注意事项

* 运算符重载的本质是函数重载
* op-type 和 op-type2 中至少有一个必须是封闭类型（即运算符所属的类型，或理解为自定义的类型）
* 运算符重载要求成对重载比较运算符。如果重载了==，则也必须重载!=，否则产生编译错误
* C# 不允许重载=运算符，但如果重载例如+运算符，编译器会自动使用+运算符的重载来执行+=运算符的操作。
* 运算符只能采用值参数，不能采用 ref 或 out 参数。
* 后两种形式声明了转换运算符。conv-type-in 和 conv-type-out 中正好有一个必须是封闭类型（即，转换运算符只能从它的封闭类型转换为其他某个类型，或从其他某个类型转换为它的封闭类型）
* 任何运算符声明的前面都可以有一个可选的属性（C# 编程指南）列表

# 实例

```csharp
namespace TestConsole
{
    public class Man
    {
        public int Age { get; set; }
        public static Man operator +(Man manA, Man manB)
        {
            Man man = new Man();
            man.Age = manA.Age + manB.Age;
            return man;
        }
    }

    static class Program
    {
        static void Main(string[] args)
        {
            Man manA = new Man() { Age = 12 };
            Man manB = new Man() {Age=13};
            Man man = manA + manB;
            Console.WriteLine(man.Age);
            Console.ReadLine();
        }
    }
}
```

# 可重载和不可重载运算符

运算符|描述
--|--
+, -, !, ~, ++, --	|这些一元运算符只有一个操作数，且可以被重载。
+, -, *, /, %	|这些二元运算符带有两个操作数，且可以被重载。
==, !=, <, >, <=, >=	|这些比较运算符可以被重载。
&&, \|\|	|这些条件逻辑运算符不能被直接重载。
+=, -=, *=, /=, %=	|这些赋值运算符不能被重载。
=, ., ?:, ->, new, is, sizeof, typeof	|这些运算符不能被重载。

# 参考

[C# 运算符重载](https://www.runoob.com/csharp/csharp-operator-overloading.html)