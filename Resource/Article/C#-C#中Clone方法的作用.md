# Csharp-Clone方法的作用

## 引用类型传值引发的问题

```csharp
using System;

namespace TestConsole
{
    class Program
    {

        static void Main(string[] args)
        {
            Man man1 = new Man(1, "张三");
            Man man2 = man1;
            man2.Name = "李四";
            Console.WriteLine(man1.Name);
            Console.ReadLine();
        }
    }

    public class Man
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public Man(int Id, string Name)
        {
            this.Id = Id;
            this.Name = Name;
        }

        public Man Clone()
        {
            return new Man(this.Id, this.Name);
        }

    }
}
```

* 在上面的例子中，由于引用数据类型传递的是变量的内存地址，导致修改man2时同时修改了man1，最后man1的名字也变成了李四

## 使用Clone方法

```csharp
using System;

namespace TestConsole
{

    class Program
    {

        static void Main(string[] args)
        {
            Man man1 = new Man(1, "张三");
            Man man2 = man1.Clone();
            man2.Name = "李四";
            Console.WriteLine(man1.Name);
            Console.ReadLine();
        }
    }

    public class Man
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public Man(int Id, string Name)
        {
            this.Id = Id;
            this.Name = Name;
        }

        public Man Clone()
        {
            return new Man(this.Id, this.Name);
        }
    }

}
```

* 通过为Man方法写入一个Clone方法，Clone方法负责使用之前man实例的属性声明一个新的Man实例
* man2和man1进行赋值操作时，传递的是新的对象而不是内存地址，解决了之前引用数据类型引发的问题