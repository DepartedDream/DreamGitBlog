# 查看客户端的IP地址 

```csharp
Response.Write(Request.ServerVariables["REMOTE_ADDR"].ToString())
```
         
# 查看客户端的端口号 

```csharp
Response.Write(Request.ServerVariables["REMOTE_PORT"].ToString())
```