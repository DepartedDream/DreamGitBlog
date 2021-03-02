# 错误信息
at java.util.Scanner.throwFor(Unknown Source)
# 原因
Scanner类在进行初始化是传入的是系统的输入流
```
Scanner sc=new Scanner(System.in)
```
在使用Scanner类的close方法关闭Scanner时,由于所有Scanner类实例均使用用一个输入流,导致所有的Scanner示例无法使用
# 解决方法
只在程序结束的最后使用Scanner类的close方法