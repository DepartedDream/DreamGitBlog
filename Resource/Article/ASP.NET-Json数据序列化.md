# 环境需求

* C#需要添扩展程序集Json.NET.NET 4.0

# Json序列化

```csharp
Student student = new Student();
student.UserName = "张三";
string json = Newtonsoft.Json.JsonConvert.SerializeObject(student);
//最终输出的结果为:{UserName:"张三"}
```

# Json反序列化

```csharp
string Json = "{UserName:\"张三\"}";
dynamic student = Newtonsoft.Json.JsonConvert.DeserializeObject<dynamic>(Json);
string username = student.UserName;
```