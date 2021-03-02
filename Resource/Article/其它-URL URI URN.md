# URI
URI（Uniform Resource Identifier ）：统一资源标识符，根据某一种规则将一个资源独一无二地标识出来。
# URL
URL（Uniform Resource Locator）：统一资源定位符，它是一种具体的URI，即URL可以用来标识一个资源，而且还指明了如何定位这个资源。

协议类型:[//[访问资源需要的凭证信息@]服务器地址[:端口号]][/资源层级UNIX文件路径]文件名[?查询][#片段ID]
1. 协议类型：HTTP、HTTPS、FTP、mailto等协议
2. 层级URL标记符号(为[//],固定不变)
3. 访问资源需要的凭证信息（可省略）
4. 服务器（域名或者IP地址）
5. 端口号
6. 路径（以“/”字符区别路径中的每一个目录名称）
7. 查询。（GET模式的窗体参数，以“?”字符为起点，每个参数以“&”隔开，再以“=”分开参数名称与数据，通常以UTF8的URL编码，避开字符冲突的问题）
8. 片段（以“#‘字符为起点）
# URN
URN（Uniform Resource Name）：统一资源名称。用于标识某一互联网资源名称的字符串。
# URL与URN与URI的关系
URI可被视为定位符（URL），名称（URN）或两者兼备。
# 例子
http://bitpoetry.io/posts/hello.html(URL)
bitpoetry.io/posts/hello.html#intro(URI)
# 通俗例子
统一资源名（URN）如同一个人的名称，
统一资源定位符（URL）代表一个人的住址。