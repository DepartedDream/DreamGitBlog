# 问题描述

在使用foreach循环遍历List列表时报错：System.InvalidOperationException: 集合已修改；可能无法执行枚举操作。


# 解决方法

* 将foreach循环改为for循环
* foreach循环是只读的,被遍历的集合无法进行修改
* 且被遍历的集合如果被修改，也将导致该集合无法使用foreach遍历