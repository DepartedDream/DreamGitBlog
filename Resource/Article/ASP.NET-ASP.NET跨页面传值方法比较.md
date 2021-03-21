# 传值方法比较

* Response.Redirect不安全，保存在url中，使用方便，只能传输简单对象
* Cookie不安全，存储在客户端
* Form表单Post传值，安全，方便使用，关闭浏览器即失效。
* Form表单Get传值，效果同Response.Redirect。
* Application对象作用范围全局，对所有的用户都有效，存储在服务器，程序关闭即失效，适合公共信息
* Session对象是对于每个单独的用户，关闭当前浏览器即失效，存储在服务器，过多的数据会加大服务器的负载。
* Server.Transfer，url不会变，会将查询字符串和表单数据传递到另一个页面