# URI

* URI全称(Uniform Resource Identifier/统一资源标识符)
* URI是一个用于标识某一互联网资源名称的字符串。
* URL和URN是URI的两种不同的实现方式，
* URL和URN均可以被叫做URI。

# URL

* URL全称(Uniform Resource Locator/统一资源定位符)
* URL它是一种具体的URI
* URL通过文件路径定位文件
* URL表示的路径位置一旦改变,就无法定位文件,故开发了URN

URL的写法

```
协议类型:[//[访问资源需要的凭证信息@]服务器地址[:端口号]][/资源层级UNIX文件路径]文件名[?查询][#片段ID]
1. 协议类型：HTTP、HTTPS、FTP、mailto等协议
2. 层级URL标记符号(为[//],固定不变)
3. 访问资源需要的凭证信息（可省略）
4. 服务器（域名或者IP地址）
5. 端口号
6. 路径（以“/”字符区别路径中的每一个目录名称）
7. 查询。（GET模式的窗体参数，以“?”字符为起点，每个参数以“&”隔开，再以“=”分开参数名称与数据，通常以UTF8的URL编码，避开字符冲突的问题）
8. 片段（以“#‘字符为起点）
```

# URN

* URN全称(Uniform Resource Namer/统一资源名称)
* URN通过一个字符串与文件相绑定
* URN即使文件路径改变,也可以通过解析器，解析当前URN而获得新的位置
* URN由于解析器过于复杂,故没有普及

# 参考
[URL、URN、URI的区别](https://www.bilibili.com/video/BV1JE411N7rE?from=search&seid=2599910169794207934)