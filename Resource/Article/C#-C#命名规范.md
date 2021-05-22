# Pascal 规则

每个单词开头的字母大写(如 TestCounter).

# Camel 规则

除了第一个单词外的其他单词的开头字母大写(如testCounter).

# Upper 规则

仅用于一两个字符长的常量的缩写命名,超过三个字符长度应该应用Pascal规则(如 IE).

# bool 加is 例:isEditMode

* 字段\参数(camel式)尽量不要使用缩写
* 命名空间(Pascal 式)
* 属性(camel式)用名词或名词短语命名属性
* 类(Pascal 式)用名词或名词短语命名类减少类名中缩写的使用量
* 事件(Pascal 式)
在事件后加上EventHandler
使用名为sender和e的两个参数。
sender参数代表提出事件的对象，sender参数永远是一个类型对象，即使它可能使用了更为特定的类型。
与事件相关的状态被封装在一个名为e的事件类范例中。
* 接口(Pascal 式)开头用大写字母I
* 方法(Pascal式)用动词或动词短语命名方法类命名指导
 
# 类命名规则

* 类名应该为名词及名词短语，尽可能使用完整的词.
* 使用Pascal规则
* 不要使用类前缀 - 不要使用下划线字符 (_)。
* * 有时候需要提供以字母 I 开始的类名称，虽然该类不是接口。只要 I 是作为类名称组成部分的整个单词的第一个字母，这便是适当的。例如，类名称 IdentityStore 就是适当的。
- 在适当的地方，使用复合单词命名派生的类。派生类名称的第二个部分应当是基类的名称。例如，ApplicationException 对于从名为 Exception 的类派生的类是适当的名称，原因是 ApplicationException 是一种 Exception。请在应用该规则时进行合理的判断。例如，Button 对于从 Control 派生的类是适当的名称。尽管按钮是一种控件，但是将 Control 作为类名称的一部分将使名称不必要地加长。

# 接口命名规则

- 接口名称应该为名词及名词短语或者描述其行为的形容词，尽可能使用完整的词. (Example IComponent or IEnumberable)
- 使用Pascal规则
- 使用字符I为前缀，并紧跟一个大写字母（即接口名的第一个字母大写）

```
interface ICompare
{
int Compare();
}
```

# 枚举命名规则

- 对于 Enum 类型和值名称使用 Pascal 大小写。
- 少用缩写。
- 不要在 Enum 类型名称上使用 Enum 后缀。
- 对大多数 Enum 类型使用单数名称，但是对作为位域的 Enum 类型使用复数名称。
- 总是将 FlagsAttribute 添加到位域 Enum 类型。

# 变量命名
- 在简单的循环语句中计数器变量使用 i, j, k, l, m, n
- 使用 Camel 命名规则

# 方法命名

- 使用Pascal规则
- 对方法名采用一致的动词/宾语或宾语/动词顺序。例如，将动词置于前面时，所使用的名称诸如 InsertWidget 和 InsertSprocket；将宾语置于前面时，所使用的名称诸如 WidgetInsert 和 SprocketInsert。
- 推荐名称应该为动词或动词短语.例如Save，SaveCustomer，而不要使用CustomerSave
- 不要在方法中重复类的名称。例如，如果某个类已命名为 Book，则不要将某个方法称为 Book.CloseBook，而可以将方法命名为 Book.Close。


# 属性命名
- 名称应该为名词及名词短语
- 使用Pascal规则
- 对于bool型属性或者变量使用Is（is）作为前缀，不要使用Flag后缀，例如应该使用IsDeleted,而不要使用DeleteFlag


# 集合命名
- 名称应该为名词及名词短语
- 使用Pascal规则
- 名称后面追加“Collection”


# 事件命名
- event handlers命名使用 EventHandler 后缀.
- 两个参数分别使用 sender 及 e
- 使用Pascal规则
- 事件参数使用EventArgs 后缀
- 事件命名使用语法时态反映其激发的状态，例如 Changed，Changing.
- 考虑使用动词命名. 变量命名
- 在简单的循环语句中计数器变量使用 i, j, k, l, m, n
- 使用 Camel 命名规则

自定义的属性以Attribute结尾
代码如下:
public class AuthorAttribute : Attribute
{
}
自定义的异常以Exception结尾
代码如下:
public class AppException : Exception
{
}

# 其它常用的编码规则

* 代码的缩进。要用Tab，而不要用space.
* 局部变量的名称要有意义。不要用x，y，z等等（除用于For循环变量中可使用i，j，k，l，m，n）。
* 所有的成员变量声明在类的顶端，用一个换行把它和方法分开。
* 用有意义的名字命名namespace，如：产品名、公司名。
* 始终使用"{ }"包含if下的语句，即使只有一条语句。
* 把相似的内容放在一起，比如数据成员、属性、方法、事件等，并适当的使用#region…#endregion。

# 变量命名

* 变量名称应使用驼峰式大小写形式，这是一种编写样式，即第一个单词以小写字母开始，后续每个单词的首字母采用大写形式。 例如：string thisIsCamelCase;。
* 变量名称在应用程序中应具有描述性且有意义。 应为变量选择一个名称，用于表示其将保存的数据类型。
* 变量名称应是附加在一起的一个或多个完整单词。 请勿使用缩写，因为阅读你代码的人可能不清楚该变量的名称。
* 变量名称不应包含变量的数据类型。 你可能会看到使用类似 string strMyValue; 样式的一些建议。 这是几年前的热门样式。 但是，大多数开发者不会再遵循此建议。

# 注释

* 可以用注释添加 TODO(待完成事项) 消息
* 方法的注释要描述方法的上下文
* 尽量不要注释单行代码
* 不要注释.NET 类库，有官方的注释
* 暂时尝试替代解决方法时，可以注释之前的代码
* 不要完全相信注释，在进行许多更新后，它们可能不在有效。

# 空格

* 在赋值运算符的左侧和右侧使用空格。
* 明智地使用空格来提高代码的可读性。
* 具有类似或协同工作的代码行可以使用换行符来创建空行进行分隔。
* 代码块符号｛｝要单独站一行
* 使用 tab 键将代码块与相关的关键字对齐。
* 缩进代码块中的代码以显示所有权。