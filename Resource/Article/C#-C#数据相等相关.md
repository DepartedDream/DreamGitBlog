# C#的两种等同性

* 逻辑等同性：两个对象在逻辑上代表同样的值
* 引用等同性：如果两个引用指向同一个对象实例

# Equals和==的关系

* Equals方法和==运算符行为是否相同，取决于==运算符或Equals方法之间是否存在引用关系

# 引用类型相等

* 引用类型的Equsals方法定义来自于其父类Object类
* Object类型的Equals方法用于判断对象的引用等同性

# 值类型相等

* 引用类型的Equsals方法定义来自于其父类ValueType类
* ValueType的Equals方法用于判断对象的逻辑等同性
* ValueType没有提供==运算符的默认实现，所以自定义值类型无法使用==运算符，需要类型重载operator==
* 值类型相等大多实现对逻辑等同性的判断

# 参考

[C#初学者对Equals方法的几个常见误解](https://kb.cnblogs.com/page/107604/)