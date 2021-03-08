# URL编码

* 网络标准RFC 1738做了硬性规定只有字母和数字[0-9a-zA-Z]、一些特殊符号“$-_.+!*'(),”[不包括双引号]、以及某些保留字，才可以不经过编码直接用于URL
* URL编码（URL encoding）的作用是将无法通过URL传输的字符转化为可在因特网上安全传输的格式。
* RFC 1738没有规定具体的编码方法，而是交给应用程序（浏览器）自己决定。这导致“URL编码”成为了一个混乱的领域。
* URL混乱的编码格式可以通过[文章URL中编码URL特殊字符](https://blog.csdn.net/chenlycly/article/details/51820727)了解
* URL混乱的编码格式不同的情况、不同的操作系统、不同的浏览器、不同的网页字符集，将导致完全不同的编码结果。
* 如果想要保证客户端只用一种编码方法向服务器发出请求,需要提前通过编程方法对URL进行编码
* 无论网页的原始编码是什么，一旦被Javascript编码，就都变为unicode字符
* 编码之后的值一般以%开头后接16进制数字

# JavaScript中的URL编码方法
## escape(不推荐使用)

* eacape是DOM中的方法，只能对ASCII符号正确编码
* ECMAScript v3 反对使用该方法
* escape不编码字符有69个：*，+，-，.，/，@，_，0-9，a-z，A-Z
* 解码方法为unescape()

## encodeURI(适合无参数网址编码)

* encodeURI不编码字符有82个：!，#，$，&，'，(，)，*，+，,，-，.，/，:，;，=，?，@，_，~，0-9，a-z，A-Z
* 由于encodeURI不对冒号、斜杠进行编码，所以如果参数为网址其中包含冒号(:)、斜杠(/)，就会解析出错，所以此方法不能对参数进行编码
* 解码方法为decodeURI()

## JavaScript方法:encodeURIComponent(适合网址参数编码)

* encodeURIComponent不编码字符有71个：!， '，(，)，*，-，.，_，~，0-9，a-z，A-Z
* 可以看到此方法对:/都进行了编码，所以不能用它来对网址进行编码。
* 由于此方法对中文，空格，井号(#)，斜线(/)，冒号(:)都进行了编码，所以适合对URI中的参数进行编码。看下面的示例：
* 解码方法为decodeURIComponent

# C#中的URL编码方法
## HttpUtility.UrlEncode&&Server.UrlEncode(不推荐使用)

* HttpUtility.UrlEncode默认使用UTF8格式编码而Server.UrlEncode是使用系统预设格式编码，
* Server.UrlEncode使用系統预设编码做为参数调用HttpUtility.UrlEncode编码
* 如果系统全局都用UTF8格式编码，这两个方法就是一样的。
* HttpUtility.UrlEncode对冒号(:)和斜杠(/)进行了编码，所以不能用来对网址进行编码。
* 参数中空格应该被编码为%20而不是被HttpUtility.UrlEncode编码为加号(+)

## Uri.EscapeUriString(适合网址参数编码)

* 该方法类似JavaScript中的encodeURI方法。
* 所以此方法可以用于网址进行编码，但不能对参数进行编码
* 解码方法为UnescapeDataString

## Uri.EscapeDataString

* 该方法类似JavaScript中的encodeURIComponent方法。
* 所以此方法不可以用于网址进行编码，但可以用于对参数进行编码。
* 解码方法为UnescapeDataString

# 参考

[C# URI编码详解](https://blog.csdn.net/xiaoyong_net/article/details/73381668)
[URL与ASCII](https://blog.csdn.net/weixin_33734785/article/details/92104222)
[URL中编码URL特殊字符](https://blog.csdn.net/chenlycly/article/details/51820727)