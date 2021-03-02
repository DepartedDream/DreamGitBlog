# dynamic关键字
dynamic是FrameWork4.0的新特性。dynamic的出现让C#具有了弱语言类型的特性。编译器在编译的时候不再对类型进行检查，编译期默认dynamic对象支持你想要的任何特性。dynamic被编译后，实际是一个object类型.只不过编译器会对dynamic类型进行特殊处理，让它在编译期间不进行任何的类型检查，而是将类型检查放到了运行期。

# out关键字
方法可在完成时返回值或返回“void”，后者意味着不返回值。 方法还可以选择性地返回所有参数的值，这些值的定义与任何其他输入参数一样，但包含 out 关键字。

使用 out 参数调用方法时，还必须在变量前使用关键字 out，以便保存值。 因此，在调用将用于存储由方法返回的 out 参数值的方法之前，必须先定义一个变量。 然后，即可在代码的其余部分使用包含 out 参数的值。

```csharp
static void Main(string[] args)
{
    int addend1;
    int addend2;
    int sum;
    Add(1, 2,out addend1,out addend2, out sum);
    Console.WriteLine($"{ addend1}+{ addend2}={sum}");
    Console.ReadLine();
}
static void Add(int a,int b,out int addend1, out int addend2, out int sum) 
{
    addend1 = a;
    addend2 = b;
    sum = a + b;
}
```

# ref关键字

# var关键字
var 是3.5新出的一个定义变量的类型，其实也就是弱化类型的定义，VAR可代替任何类型编译器会根据上下文来判断你到底是想用什么类型的，至于什么情况下用到VAR ，我想就是你无法确定自己将用的是什么类型，就可以使用VAR 类似 OBJECT 但是效率比OBJECT高点。

var定义变量的四个特点:

* 必须在定义时初始化。也就是必须是var s = “abcd”形式，而不能是如下形式: var s; s = “abcd”;
* 一但初始化完成，就不能再给变量赋与初始化值类型不同的值了。
* var要求是局部变量。
* 使用var定义变量和object不同，它在效率上和使用强类型方式定义变量完全一样。
