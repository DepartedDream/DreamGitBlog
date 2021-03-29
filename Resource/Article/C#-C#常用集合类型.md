# ArrayList(数组列表)

* 数组列表中的元素的数据类型为object
* 数组列表继承IList接口可以按索引访问

# Queue(队列)

* 队列，先进先出。enqueue方法入队列，dequeue方法出队列。

# Stack(栈)

* 栈，后进先出。push方法入栈，pop方法出栈。

# Hashtable(哈希表)

* 用键值访问哈希表的元素相比其它集合有更好的性能
* 哈希表存储的是键值对，键与值的数据类型为object
* 哈希表中的键具有唯一性

# SortedList(有序表)

* 有序表中的元素经过自动排序

# NameValueCollection(专用集合)

* 名称值集合存储的是键值对
* 名称值集合不同于哈希表，键值可以不固定。

# List<T>(泛型列表)

* 泛型列表可以指定存储元素的数据类型从而提高性能

# 总结

* 集合都使用Count属性获取大小
* 非泛型集合的存数元素的数据类型为obejct或object键值对
* 键值集合存储可以使用DictionaryEntry进行遍历