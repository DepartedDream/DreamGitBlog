成员|说明
--|--
字段|是在类范围声明的变量。字段可以是内置数值类型或其他类的实例。例如，日历类可能具有一个包含当前日期的字段。
常量|常量是在编译时设置其值并且不能更改其值的字段或属性。
属性|属性是类中可以像类中的字段一样访问的方法。属性可以为类字段提供保护，以避免字段在对象不知道的情况下被更改。
方法|方法定义类可以执行的操作。方法可以接受提供输入数据的参数，并且可以通过参数返回输出数据。方法还可以不使用参数而直接返回值。
事件|事件向其他对象提供有关发生的事情（如单击按钮或成功完成某个方法）的通知。事件是使用委托定义和触发的。有关更多信息，请参见事件和委托。
运算符|重载运算符被视为类成员。在重载运算符时，在类中将该运算符定义为公共静态方法。预定义运算符（+、*、< 等）不考虑作为成员。有关更多信息，请参见可重载运算符（C# 编程指南）。
索引器|使用索引器可以用类似于数组的方式为对象建立索引。
构造函数|构造函数是在第一次创建对象时调用的方法。它们通常用于初始化对象的数据。
析构函数|C# 中极少使用析构函数。析构函数是当对象即将从内存中移除时由运行时执行引擎调用的方法。它们通常用来确保任何必须释放的资源都得到适当的处理。
嵌套类型|嵌套类型是在其他类型中声明的类型，通常用于描述仅由包含它们的类型所使用的对象。