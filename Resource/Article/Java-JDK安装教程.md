# 下载过程

* 登录Oracle官网

[Oracle官网](https://www.oracle.com/index.html)

* 在官网产品界面找到JDK的下载位置,点击下载

[JDK下载](https://www.oracle.com/java/technologies/javase-downloads.html)

# Java环境变量设置

1. 新建环境变量JAVA_HOME,设置值为电脑上JDK安装的绝对路径
2. 新建环境变量CLASSPATH,设置值为;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;
3. 新建两个系统变量PATH,值分别为%JAVA_HOME%\bin,%JAVA_HOME%\jre\bin