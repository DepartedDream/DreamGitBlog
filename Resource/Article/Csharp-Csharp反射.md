# 反射简介

* 反射通俗解释就是从外部了解一个类
* 通过反射我们可以对源码中并不清楚的类进行操作
* 比如说你不知道方法可能调用的数据类型，通过反射就可以对该类型进行操作

# 反射中涉及的类

* System.Type通过这个类可以访问任何给类的信息
* System.Reflection.Assembly可以用于访问给定程序集的信息,或者把这个程序集加载到程序中。
* System.Activator可以创建对象

# 获取Type类的三种常用方法

```csharp
//从类名获取
Type t=typeof(string)
//从实例获取
string s="asd";
Type t=s.GetType();
//Type类静态方法GetType()
Type t=Type.GetType("System.String");
```

# 用Activator类生成指定对象

```csharp
object[] valueArray = new object[1]{"12312"};
T model = (T)Activator.CreateInstance(typeof(T), valueArray);
//valueArray是参数数组
//CreateInstance会自动调用最符合参数数组的构造函数
//T是要示例化的数据类型
```

# 查看类的所有属性的名称

```csharp
PropertyInfo[] propArray = typeof(T).GetProperties();
for (int x = 0; x < propArray.Length; x++)
{
    Console.WriteLine(propArray[x].Name);
}
//T是要显示的类
```

# 调用反射生成对象的方法，字段和属性

```csharp
//创建student实例
Type type=typeof(Student);
object student = Activator.CreateInstance(type);

//给字段赋值
Field filed=t.GetFiled("name");
filed.SetValue(student,"asd",null)

//给属性赋值
PropertyInfo propertyInfo=type.GetProperty("Name");
propertyInfo.SetValue(student,"asd",null);

//调用方法
MethodInfo methodInfo=student.GetMethod("Study");
methodInfo.Invoke(student,null);
```

# 实例化指定名称程序集中的类

```csharp
Assembly assembly=Assembly.Load("程序集名称");
Type type=assembly.GetType("程序集名称.类名")
object o=Activator.CreateInstance(t,参数数组);
```

# 实例化指定dll中的类

```csharp
Assembly assembly=Assembly.LoadFile("程序集路径");
object o=Activator.CreateInstance("类的完全限定名(包括命名空间)",参数数组);
```

# 反射当前项目中的类

```csharp
Assembly assembly=assmebly.GetExecutingAssembly();
object obj=assembly.CreateInstance("Reflection.MainClass");
```

# 参考

[C#反射机制](https://zhuanlan.zhihu.com/p/41282759)