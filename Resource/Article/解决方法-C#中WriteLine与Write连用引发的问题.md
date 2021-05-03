# 问题描述

* 当先调用Write方法在调用WriteLine方法时
* Write与WriteLine所输出的内容在一行中

# 解决方法

* WriteLine方法表示在当前输出行的末尾加上换行符
* 故当Write与WriteLine所输出的内容在一行中
* 解决方法即在Write的末尾输出一个换行符