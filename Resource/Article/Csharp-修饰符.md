# 访问修饰符

它们是修饰在类型（类、接口、委托、结构和枚举）和类型成员（字段、属性、方法、构造函数等等）上控制其访问权限的关键字

# 访问修饰符的作用

关键字|作用
--|--
public|成员可以由任何代码访问
internal|成员只能在该项目中访问
protected|成员只能在类或派生类中访问
protected internal|成员只能在该项目中的类或派生类中访问
private|成员只能在该类的代码访问（默认）

# 成员允许的声明的可访问性

属于|默认的成员可访问性|该成员允许的声明的可访问性
--|--|--
enum|public|无
class|private|public\protected\internal\private\protected internal
interface|public|public\无
struct|public|public\internal\private

# 声明修饰符

关键字|作用
--|--
Partial|在整个同一程序集中定义分部类和结构，
Static|声明属于类型本身而不是属于特定对象的成员。
Abstract|抽象类，只能是其他类的基类。类中的方法只声明不实现，方法的实现在他的派生类中完成。
Sealed|指定类不能被继承。
Virtual|用于修饰方法、属性、索引器或事件声明，并且允许在派生类中重写这些对象
Override|提供从基类继承的成员的新实现
New|作修饰符，隐藏从基类成员继承的成员，在不使用 new 修饰符的情况下隐藏成员是允许的，但会生成警告。作运算符，用于创建对象和调用构造函数。
Extern|用于声明在外部实现的方法。 extern 修饰符的常见用法是在使用 Interop 服务调入非托管代码时与 DllImport 特性一起使用。 在这种情况下，还必须将方法声明为 static