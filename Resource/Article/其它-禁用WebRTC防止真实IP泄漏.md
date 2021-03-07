# 什么是WebRTC

* WebRTC（Web Real-Time Communication）是一个支持网页浏览器进行实时语音对话或视频对话的技术，是谷歌2010年以6820万美元收购Global IP Solutions公司而获得的一项技术。2011年5月谷歌开放了WebRTC的源代码，在行业内得到了广泛的支持和应用。

# 漏洞影响

* 通过该漏洞，网站管理员可以轻易地通过WebRTC看到用户的真实IP地址，即使用户使用VPN来隐藏自己的IP。该漏洞影响了支持WebRTC的浏览器，包括Google Chrome和Firefox等常见的浏览器。
* 网络安全研究员Paolo Stagno测试了70个VPN提供商，发现其中有16个通过WebRTC泄漏了用户的IP（23％）。你可以通过[这个地址](http://ip.voidsec.com/)来检查你的VPN是否泄漏了你的真实IP。

# 漏洞原理

* WebRTC采用STUN（Session Traversal Utilities for NAT）、TURN和ICE等协议栈对VoIP网络中的防火墙或者NAT进行穿透。用户发送请求至服务器，STUN服务器会返回用户所用系统的IP地址和局域网地址。
* 返回的请求可以通过JavaScript获取，但由于这个过程是在正常的XML/HTTP请求过程之外进行的，所以在开发者控制台看不到。这意味着，这个漏洞的唯一要求就是浏览器要支持WebRTC和JavaScript。

# 解决方法

* 对于用户来说，如果不想自己的真实IP地址泄漏，可以通过禁用WebRTC来防止真实IP地址泄漏。
* Firefox浏览器禁用WebRTC的方法是：在浏览器上输入：about:config。之后搜索：media.peerconnection.enabled。找到它后双击，将其改成 false 即可。
* Chrome浏览器禁用WebRTC的方法是：在Chrome应用商店里，安装一个名为WebRTC Leak Prevent的扩展，然后选择 Use my Porxy server(if present) 即可。

# 参考

[禁用WebRTC防止真实IP泄漏](https://www.williamlong.info/archives/5292.html?utm_medium=website)