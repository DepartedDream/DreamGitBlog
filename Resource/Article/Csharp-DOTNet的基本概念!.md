# .NET Framework含义

* .NET Framework为微软的一个应用程序开发平台
* 它包括公共语言运行时（Common Language Runtime, CLR）虚拟执行系统和 .NET Framework 类库。

# CLS（common language specification）公共语言规范
 
# CLI（common language infrastructure）：公共语言基础。
一个国际标准。.net框架只是CLI的一个具体实现，所以，还有其他的实现。

# CTS（common type system）公共类型系统
当自己要设计一种面向.net的高级语言时，都要遵循的规范就是CTS，比如C#。任何面向.net的语言都要满足CTS的要求，但不必实现CTS中所有的标准与规定，但语言本身不能有违背CTS的地方。这样的语言编译后生成CIL。

# FCL（Framework Class Library）框架类库
* BCL即基类库,是FCL的一个子集，包含了所有的基础类库。
* FCL中包含了.NET各种框架所应用到类库

# CIL（common intermediate language）通用中间语言
* .net框架下的编程语言经过编译后生成的中间语言
* CIL与平台无关、与语言无关
* CIL的后缀为.il
* CIL的载体为程序集


# CLR(Common Language Runtime/公共语言运行时)
* CLR可以根据目标计算机上的信息，将CIL编译成可以执行的程序
* CLR是一套完整的、高级的虚拟机
* 部分语言在JIT编译后还需要CLR进行托管，例如C#，C++则不用

# 托管代码

* 托管代码包括管理内存，处理安全性，允许进行跨语言调试等功能
* 垃圾回收
  
# JIT(Just In Time/)


# 程序集

* 程序集内部包含CIL代码
* 程序集经由编译器编译得到的，供CLR进一步编译执行的那个中间产物
* 程序集在WINDOWS系统中，它一般表现为·dll或者是·exe的格式可执行程序

  
# .NET程序的编译流程

* 编译时:源代码 --编译-->程序集
* 执行时:程序集 --CLR的JIT编译器编译-->本机代码