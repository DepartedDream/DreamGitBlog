# 问题描述

* 在一个线程内部结束该进程后面的方法无法正确执行

# 解决方法

* 在一个线程内部结束该进程后，由于本线程结束，后面的方法故无法执行
* 可以通过其它仍在运行的线程结束该线程
* 或者保证该进程运行的最后一个进程是结束改进程的方法