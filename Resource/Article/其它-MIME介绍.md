# MIME介绍

* MIME全称多用途互联网邮件扩展类型(Multipurpose Internet Mail Extensions)
* MIME定义了HTTP协议传递的文件的类型
* MIME类型能够使得浏览器更方便的解析文件
* Http的请求头content-type规定了文件的MIME类型

# MIME通用结构

```
type/subtype
```

* type表示可以被分多个子类的独立类别
* subtype表示细分后的每个类型
* MIME类型对大小写不敏感，但是传统写法都是小写

# 独立类型

类型|描述|典型示例
--|--|--
text|表明文件是普通文本，理论上是人类可读|text/plain, text/html, text/css, text/javascript
image|表明是某种图像。不包括视频，但是动态图（比如动态gif）也使用image类型|image/gif, image/png, image/jpeg, image/bmp, image/webp, image/x-icon, image/vnd.microsoft.icon
audio|表明是某种音频文件|audio/midi, audio/mpeg, audio/webm, audio/ogg, audio/wav
video|表明是某种视频文件|video/webm, video/ogg
application|表明是某种二进制数据|application/octet-stream, application/pkcs12, application/vnd.mspowerpoint, application/xhtml+xml, application/xml,  application/pdf

# 参考
[MIME 类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)