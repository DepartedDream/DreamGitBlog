# Socket类(套接字类)
## 服务端

```csharp
socket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);//实例化套接字
IPAddress address= IPAddress.Parse(ip);//实例化ip对象，ip为String类型
IPEndPoint endPoint = new IPEndPoint(address, port);//实例化网络端口包括ip和端口
socket.Bind(endPoint);//将套接字与端口绑定
socket.Listen(Max)//Max为最大连接数
Socket bindSocket = socket.Accept();//等待客户端链接，并为连接的客户端建立套接字

/*接受消息*/
byte[] buffer = new byte[1024 * 1024 * 2];//建立2mb缓存区
int length=bindSocket.Receive(buffer);//将数据存贮到缓存区，并记录数据长度
string name = Encoding.UTF8.GetString(buffer, 0, length);//将传输的数据转换为字符串

/*发送消息*/
string messsage="asd";//定义要传输的消息
byte[] buffer = Encoding.UTF8.GetBytes(messsage);//将消息转换为byte类型
bindSocket.Send(buffer);//发送消息
```

## 客户端

```csharp
socket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);//实例化套接字
IPAddress address= IPAddress.Parse(ip);//实例化ip对象，ip为String类型
IPEndPoint endPoint = new IPEndPoint(address, port);//实例化网络端口包括ip和端口
hostSocket.Connect(serverEndPoint);//与服务器端口连接

/*接受消息*/
byte[] buffer = new byte[1024 * 1024 * 2];//建立2mb缓存区
int length=hostSocket.Receive(buffer);//将数据存贮到缓存区，并记录数据长度
string name = Encoding.UTF8.GetString(buffer, 0, length);//将传输的数据转换为字符串

/*发送消息*/
string messsage="asd";//定义要传输的消息
byte[] buffer = Encoding.UTF8.GetBytes(messsage);//将消息转换为byte类型
hostSocket.Send(buffer);//发送消息
```