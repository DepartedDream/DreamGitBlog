# 问题描述

* File.Create(filePath)创建文件后，无法被删除
* 显示创建的文件被占用

# 解决方法

* File.Create(filePath)这句代码会返回一个FileStream流与该文件链接，因此被占用。
* 将上面的代码改为File.Create(filePath).Close()即可解决 