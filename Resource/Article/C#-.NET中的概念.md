# .NET

* .NET是微软创建的一个开发者平台，它包括开发环境、技术框架、社区论坛、服务支持等。
* .NET平台拥有跨语言性和跨平台性
* .NET的跨语言性:面向.NET平台的编程语言能够相互操作
* .NET的跨平台性：一次编译，应用程序就可以运行在任意.NET框架支持的平台上
* 微软为.NET开发了C#编程语言
* 微软推出的.NET开发工具为Visual Studio。

# CLS CTS CLI

* CLS全称Common language specification(公共语言规范)
* CLS是面向.NET开发中，编写跨语言组件时所遵循的那些共性

* CTS全称Common Type System(公共类型系统)
* CTS是所有面向.NET的高级语言时，都要遵循的规范就是CTS
* CTS的要求任何面向.NET的语言都要满足，但不必实现CTS中所有的标准与规定

* CLI全称Common Language Infrastructure(公共语言基础)
* CLI是微软将CTS等内容提交给国际组织计算机制造联合会ECMA的后生成的一个工业标准

* CTS包含CLS,CTS+

# FCL BCL

* FCL全称Framework Class Library(框架类库)
* FCL即所有由微软开发的类库
* BCL全称Base Class Library(基础类库)
* BCL即包含.NET开发基本功能的FCL。

# .NET Framework

* .NET Framework为微软的一个应用程序开发平台
* 它包括公共语言运行时（Common Language Runtime, CLR）虚拟执行系统和 .NET Framework 类库。

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
* 使用Web服务能够通过Internet虚拟交换数据
* 高级功能还能够创建WCF(Windows Communication Foundation)服务

# 参考

* [C#简单介绍及托管代码](https://blog.csdn.net/weixin_30376163/article/details/99113330)
* [通俗易懂，什么是.NET?什么是.NET Framework？什么是.NET Core?](https://www.cnblogs.com/1996V/p/9037603.html)