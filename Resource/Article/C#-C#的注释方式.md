# 注释方法
## 常规注释方式

* 以“//”符号开始，任何位于“//”符号后的本行文字都视为注释
* 以“/*”开始，“*/”结束。任何介于这对符号之间的文字块都视为注释
```csharp

//单行注释
/*块注释*/
```

## XML注释方式

* “///”符号是一种XML注释方式
* 在visual studio编译器中输入///将自动填充XML注释方式格式
* 该注释方式可以在键入方法名和参数的过程中看到用XML注释的智能提示

```csharp
namespace TestConsole
{
    public class People 
    {
        /// <summary>
        /// 人类的本质是复读机
        /// </summary>
        /// <param name="word">说的话</param>
        /// <param name="time">说话重复的次数</param>
        public void Say(string word = "hello wolrd",int time=1)
        {
            for(int i = 0; i <time; i++) 
            {
                Console.WriteLine(word);
            }
        }
    }
}
```

* XML注释标记表格如下

标签|说明
--|--
```<code></code>```|程序代码
```<example></example>```|程序范例
```<exception></exception>```|异常描述
```<list type=""></list>```|添加清单项目
```<parm name="name"></parm>```|描述方法的参数
```<remark></remark>```|描述详细信息
```<returns></returns>```|方法的返回值
```<seealso cref="member"></code>```|参考到其他说明
```<permission></permission>```|成员的存取权限
```<summary></summary>```|简短的描述
```<value></value>```|描述属性

## region注释方式

* region预处理指令用于给程序段添加逻辑功能注释
* 让某一部分代码实现的逻辑功能看起来更清晰
* 被包围的代码还可以折叠和展开

```csharp
#region
for(int i = 0; i <time; i++) 
{
    Console.WriteLine(word);
}
#endregion
```

# 参考

[C# 三种代码注释方式](https://blog.csdn.net/weixin_40522523/article/details/88369280)