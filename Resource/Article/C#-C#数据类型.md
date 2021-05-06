# 内置类型

内置类型：在C#中可以直接通过关键字声明的类型为内置类型，这些内置类型关键字都有一个与映射的类。

# 值类型与引用类型

* [值类型微软文档](https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/value-types)
* 所有值类型都隐式继承自类 System.ValueType类

## 简单值类型

* 简单值类型包括char和bool类型

## 整形值类型

* 有符号整形值类型取值范围排序:sbyte < int < short < long
* 无符号整形值类型取值范围排序:byte < uint < ushort < ulong

## 枚举类型

* [枚举类型微软文档](https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/enum)
* 枚举类型是由一组命名的值类型常量定义的值类型。
* 枚举常用于定义一组常用的常量，例如星期，季节等

## 浮点型值类型

* 浮点型值类型型取值范围排序float < double < decimal
* float和double采用二进制进行存储，在计算时可能出现较小的误差
* decimal采用十进制存储，计算精准，但会占用较多内存
* float定义时数字后要加f,double加d,decimal加m
* 整数不加后缀默认数据类型为int
* 小数不加后缀默认数据类型为double
* 在进行数值计算时，计算结果的数据类型与精度高的变量相同

## 结构类型/自定义值类型

* [结构类型微软文档](https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/struct)
* 结构类型类似于一个值类型的类，或者说一个可以自定义的值类型
* 结构类型是一种可封装数据和相关功能的值类型

# 引用类型

* [引用类型微软文档](https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/reference-types)
* 引用类型都继承于object类
* 引用类型包括数组、类、接口和字符串
* 引用类型变量存储的是对象的引用
* 引用类型的引用存储在栈中，对象存储在堆中
* 引用类型，两种变量可引用同一对象；因此，对一个变量执行的操作会影响另一个变量所引用的对象
* String类型在进行修改时创建的是新的String对象，固不会影响之前的变量

# 参考

[在 C# 代码中选择正确的数据类型](https://docs.microsoft.com/zh-cn/learn/modules/csharp-choose-data-type/)