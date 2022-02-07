# 特征(Attribute)

* 在类、方法、结构、枚举、组件等元素上的声明性标签
* 通过使用特征可以在运行时访问特征信息，从而进行操作

# 实例

```c#
    //MyAttribute为自定义特征
    public class MyAttribute : Attribute
    {
        public string AttrName { get; set; }

        public MyAttribute(string attrName)
        {
            AttrName = attrName;
        }
    }

    public class People
    {
        [MyAttribute("姓名")]
        public string PeopleName { get; set; }
    }

    public class Program
    {
        static void Main(string[] args)
        {
            People people = new People();
            PropertyInfo prop= typeof(People).GetProperty("PeopleName");
            MyAttribute myAttriBute =(MyAttribute)prop.GetCustomAttribute(typeof(MyAttribute));
            Console.WriteLine(myAttriBute.AttrName);
            Console.ReadLine();
        }
    }
```

# 参考
[.NET 支持的编码](https://www.runoob.com/csharp/csharp-attribute.html