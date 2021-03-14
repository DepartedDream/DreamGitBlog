# 泛型

* 泛型可以使一个方法处理不同类型的参数
* 泛型可以达到复用代码的目的

# 泛型是如何工作的

* 控制台程序最终会编译成一个exe程序，exe被点击的时候，会经过JIT(即时编译器)的编译，最终生成二进制代码
* 泛型加入到语法以后，VS自带的编译器又做了升级，升级之后编译时遇到泛型，会做特殊的处理：生成占位符
* 再次经过JIT编译的时候，会把上面编译生成的占位符替换成具体的数据类型

# 泛型的基本使用

```csharp
//定义泛型类
public class GenericClass<T>{}
//定义泛型方法
public void GenericMethod<T>(){}
//定义泛型接口
public interface IGenericInterface<T>{}
```

# 为什么使用泛型不使用object

* object类型是一切类型的父类。
* 通过继承，子类拥有父类的一切属性和行为，任何父类出现的地方，都可以用子类来代替。
* 使用object也可以实现不同数据类型数据的传递
* 使用object可能会进行反复装箱和拆箱，从而会损耗程序的性能
* 使用object可能会导致类型不安全的问题。

# object的类型不安全问题

```csharp
public class Student
{
    public void Study()
    {
        Console.WriteLine("我在学习");
    }
}
public class Teacher
{
    public void Teach()
    {
        Console.WriteLine("我在上课");
    }
}
public static void ShowStudy(object man) 
{
    Student student = (Student)man;
    student.Study();
}
public static void Main()
{
    Student student = new Student();
    Teacher teacher = new Teacher();
    ShowStudy(student);
    ShowStudy(teacher);
    Console.ReadLine();
}
```

* 在ShowStudy方法中，对object进行了强制类型转换
* 将object类装换为student类，由于teacher类不继承该类导致程序报错
* 这里的类型转换的时候失败了就是类型不安全的问题
* 所以要使用泛型约束来对泛型参数进行约束从而解决object类型不安全的问题

# 泛型约束

约束|说明
--|--
T：struct|类型参数必须是值类型
T：class|类型参数必须是引用类型；这一点也适用于任何类、接口、委托或数组类型。
T：new()|类型参数必须具有无参数的公共构造函数。当与其他约束一起使用时，new()|约束必须最后指定。
T：<基类名>|类型参数必须是指定的基类或派生自指定的基类。
T：<接口名称>|类型参数必须是指定的接口或实现指定的接口。可以指定多个接口约束。约束接口也可以是泛型的。

* 使用where关键字进行泛型约束的声明

```csharp
public static T Get<T>(T t) where T : ISports
{
      t.Pingpang();
      return t;
}
```
# 可变性

```csharp
class Program
{
    public class Cat : Animal { }
    public class Animal { }
    public static void Main() 
    {
        Animal[] animalArray=new Cat[3];
    }
```

* 子类引用可以直接转化成父类引用，或者说子类和父类之间存在一种安全的隐式转换
* 可变性就是原本类型上存在的类型转换映射到他们的泛型类型上的能力
* 默认允许可变性类型转换是由继承关系带来的子类引用->父类引用转换

# 变体

* 协变和抗变统称为变体
* 可变性转换和子类到父类转换的方向一样就是协变
* 可变性转换和子类到父类转换的方相反就是抗变

```csharp
class Program
{
    public class Cat : Animal { }
    public class Animal { }
    public class CustomerList<T>: ICustomerListIn<T>, ICustomerListOut<T>
    {
    }
    public interface ICustomerListIn<in T>
    {
    }
    public interface ICustomerListOut<out T>
    {
    }
    public static void Main() 
    {
        ICustomerListOut<Animal> list1 = new CustomerList<Cat>();
        ICustomerListIn<Cat> list2 = new CustomerList<Animal>();
    }
}
```

# 参考
[C#泛型详解](https://www.cnblogs.com/dotnet261010/p/9034594.html)
[协变和抗变](https://blog.csdn.net/sudazf/article/details/17148971)