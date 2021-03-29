# 面向对象介绍

* 成员包括字段属性方法 

# 实例化

* 通过类构造函数生成对象的过程

```csharp
Animal a=new Cat()
```

# 字段

* 字段又称为：“成员变量”，一般在类的内部做数据交互使用。一般是private修饰

# 属性 

* 属性其实就是外界访问私有字段的入口，
* 属性本身不保存任何数据，在对属性赋值和读取的时候其实就是操作的对应私有字段。一般是public修饰
* 通过属性可以对私有字段进行检查和保护。

# 类

# 接口

* 接口是把公共示例（非静态）方法和属性组合起来，以封装特定功能的集合。
* 接口只能继承
* 接口不能包含实现其成员的任何代码，只能定义成员本身。
* 接口成员的实现过程只能在接口的类中完成。

# 多态性

* 指同一个实体同时具有多种形式。

## 多态性在C#的实现

### 重载（在同一个类中，方法名相同，参数返回值不同的方法）

```csharp
class Animal
{
	public void Sleep(){}  		
	public int Sleep(int time){}             
}
```

* 当调用Sleep方法时，会根据参数使用对应的方法。

### 重写(方法名相同，返回值参数也相同)

```csharp
class Animal
{  		
	public virtual void Sleep(){}  
}
class Cat
{		
	public override void Sleep(){}
}
```

* 虚(virtual)方法可以直接调用
* 当使用子类构造函数实例化父类对象时(Animal a=new Cat()),调用子类方法。

### 抽象类中重写(方法名相同，返回值参数也相同)

```csharp
abstract class Animal
{  		
	public abstract void Sleep(){}                    	
}
class Cat
{				
	public override void Sleep(){}	
}
```

* 抽象(abstract)方法无法直接调用。

### 隐藏方法(方法名相同，返回值参数也相同)

```csharp
class Animal
{
	public void Sleep(){}
}
class Cat
{		
	public new void Sleep(){}			
}
```

* 当使用子类构造函数实例化父类对象时(Animal a=new Cat()),调用父类方法。