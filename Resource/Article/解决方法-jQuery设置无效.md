# 问题描述

通过jquery的CSS方法为标签设置样式无效

# 解决方法

* 通过观察html代码发现jQuery的css方法是通过html标记的style属性实现的
* 如果该标签设置了同样的CSS样式，优先级较低，故不会显示
* 删除CSS样式即可