# .NET Framework

* .NET Framework为微软的一个应用程序开发平台
* 它包括公共语言运行时（Common Language Runtime, CLR）虚拟执行系统和 .NET Framework 类库。

# CLS（common language specification）公共语言规范

# CLI

* CLI全称（common language infrastructure）：公共语言基础。
* CLI是一个国际标准
* .net框架只是CLI的一个具体实现

# CTS

* CTS全称（common type system）公共类型系统
* 当自己要设计一种面向.net的高级语言时，都要遵循的规范就是CTS
* 任何面向.net的语言都要满足CTS的要求，但不必实现CTS中所有的标准与规定
* 语言本身不能有违背CTS的地方。这样的语言编译后生成CIL。

# FCL

* FCL全称（Framework Class Library）框架类库
* BCL即基类库,是FCL的一个子集，包含了所有的基础类库。
* FCL中包含了.NET各种框架所应用到类库

# CLR

* CLR全称Common Language Runtime/公共语言运行时
* CLR可以根据目标计算机上的信息，将CIL编译成可以执行的程序
* CLR是一套完整的、高级的虚拟机
* 部分语言在JIT编译后还需要CLR进行托管，例如C#，C++则不用

# JIT

* JIT全称Just In-Time compile/即时编译
* JIT就是在需要运行的时候，才将对应的IL代码编译为本机的机器码
* JIT是.NET运行可执行程序的基本方式

# Assembly(程序集)

* 程序集是由.NET语言的编译器接受源代码文件产生的输出文件
* 程序集包含CIL代码,元数据(metadata),程序集清单,一些资源集
* 程序集经由编译器编译得到的
* 程序集是中间产物,并不是计算机最终运行的机器码
* 程序集在WINDOWS系统中，它一般表现为·dll或者是·exe的格式可执行程序

# CIL

* CIL全称common intermediate language/通用中间语言
* CIL是一种独立于具体CPU和平台的指令集
* CIL在.NET中的载体为程序集

# 托管代码

* 托管代码由公共语言执行库CLR环境(而不是直接由操作系统)执行的代码.
* 托管代码从CLR环境中获得垃圾回收、类型检查、安全支持等服务

# 非托管代码

* 在公共语言执行库环境的外部,由操作系统直接执行的代码
* 非托管代码必须提供自己的垃圾回收、类型检查、安全支持等服务

# GAC

* GAC全称Global Assembly Cache，全局程序集缓存
* GAC解决了几个程序共享某一个程序集的问题。不必再将那个被共享的程序集拷贝到应用程序目录了，
* .NET应用程序在加载的时候，会首先查看GAC本机的机器码，如果有就可以直接使用，没有再到应用程序目录进行查找。

# .NET程序的编译流程

* 编译时:源代码-->编译-->程序集
* 执行时:程序集-->CLR的JIT编译器编译-->本机的机器码-->JIT将编译好的代码储存在GAC中
* 再次执行时:直接执行储存在GAC代码

# Windows应用程序

* 这些应用程序(如微软office)具有熟悉的Windows外观和操作方式
* 使用.NET Framework的Windows Forms模块(一个控件库,当中控件如button,可用于创建Windows用户界面UI)能够生成这样的应用程序
* 或者使用WPF(Windows Presentation Foundation)建立更灵活卓越的Windows应用程序

# Web应用程序

* Web应用程序是一些Web页面，可通过不论什么Web浏览器查看
* .NET Framework包含一个动态生成Web内容的强大系统，这个系统叫Active Server Pages.NET(ASP.NET),
* 可以通过Web Forms框架创建ASP.NET应用程序

# Web服务

* Web服务是创建各种分布式应用程序的新方式
,使用Web服务能够通过Internet虚拟交换数据.高级功能还能够创建WCF(Windows Communication Foundation)服务.


# 参考

[C#简单介绍及托管代码](https://blog.csdn.net/weixin_30376163/article/details/99113330)
[https://zhuanlan.zhihu.com/p/68158037]()