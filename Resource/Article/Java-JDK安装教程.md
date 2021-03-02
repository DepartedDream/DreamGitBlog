# 下载过程

* 登录Oracle官网

[Oracle官网](https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=orcale&oq=java%25E5%25AE%2589%25E8%25A3%2585&rsv_pq=bdfb4d4a000169c8&rsv_t=e2fclUTa6Aqm%2FyD4a0pzDagWc7kIW52s3v2%2BvXgD0efvExvx%2B50M5QBpSSk&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=7&rsv_sug1=7&rsv_sug7=101&rsv_sug2=0&rsv_btype=t&inputT=1714&rsv_sug4=1714)

* 在官网产品界面找到JDK的下载位置,点击下载

[JDK下载](https://www.oracle.com/java/technologies/javase-downloads.html)

# Java环境变量设置

1. 新建环境变量JAVA_HOME,设置值为电脑上JDK安装的绝对路径
2. 新建环境变量CLASSPATH,设置值为;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;
3. 新建两个系统变量PATH,值分别为%JAVA_HOME%\bin,%JAVA_HOME%\jre\bin