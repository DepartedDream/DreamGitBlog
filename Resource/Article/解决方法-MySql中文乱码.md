# 问题
利用php链接数据库实现“查询”和“添加”，英文字符相安无事，中文确出现乱码，学习发现原因如下：
# 解决方法
```php
$conn = mysqli_connect('localhost', 'root', 'passworld', 'test');
$query = mysqli_query($conn, 'select * from users;');
mysqli_query($conn, 'set names utf8');
```
# 解释
核心就是在进行数据库查询时加了一个'set names utf8'。
mysql5提供了以下几个设置字符集的系统变量：

* character_set_client 客户端字符集
* character_set_connection 客户端与服务器端连接采用的字符集
* character_set_results SELECT查询返回数据的字符集
* character_set_database 数据库采用的字符集

乱码问题一般是由于以上几个变量设置错误照成的，所以只要理解这几个变量，就可以告别乱码了。

使用上述变量，要理解这个核心思想： character_set_client、character_set_connection、character_set_database编码要一致；character_set_results则保证与SELECT返回的结果与当前程序的编码一致。

set names 'utf8' 等同于 ：set  character_set_client = 'utf8',set  character_set_connection = 'utf8',set  character_set_results = 'utf8'同时设置三个系统变量为utf8格式。