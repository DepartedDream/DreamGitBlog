# EF框架的三种模式

## Database First

### 定义
Existing Database-->Generated Data Model(.edmx)

通过存在的数据库，生成对应的edmx文件

### 操作方法

* 新建ADO.NET实体数据模型，修改文件名
* 选择来自数据库的EF设计器
* 选择数据库


## Model First

### 定义

Data Model(.edmx)-->Generated Database

通过设计或更改edmx文件，生成或修改数据库

### 操作方法

* 新建ADO.NET实体数据模型，修改文件名
* 选择空EF设计器模型
* 在SQl中新建一个空的数据库
* 在emdx文件视图中设计数据库
* 在emdx文件视图中右键实体选择生成根据模型生成数据库
* 选择数据库链接为新建的空数据库
* 生成DDL文件，并执行

## Code First

### 定义

Data Model(classed)-->Generated Database

通过写好的类代码，生成或修改数据库

### 操作方法

* 新建ADO.NET实体数据模型，修改文件名
* 选择空Code First模型
* 使用nuget在model项目安装中EntityFramework框架包
* 在解决方案中的“启动项目”的配置文件中添加数据库链接字符串,链接字符串名称同数据库名称

```
<add name="数据库名" providerName="System.Data.Sqlclient" connectionString="Data Source=localhost;Initial Catalog=数据库名;;Integrated Security=True"/>
```

* 执行数据库迁移
* 数据库迁移时生成的类可能与命名空间重复导致无法生成数据库。

### 编写code-first模式中的类

```C#
namespace MVCTest.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class BookManagerDB : DbContext//数据库上下文类
    {
        public BookManagerDB()
            : base("name=BookManagerDB")
        {
        }
        public virtual DbSet<User> User { get; set; }
    }
}
```

```C#
namespace MVCTest.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("User")]
    public partial class User//对应表的模型类
    {
        public string UserId { get; set; }

        public string UserName { get; set; }

        public int? UserAge { get; set; }

        public int UserSex { get; set; }
    }
}
```

### 数据库迁移
在Code First中修改数据库属性或数据后，用于数据迁移和更新数据库。

* Visual Studio界面->工具->NuGet程序包管理员->程序包管理员控制台(Package Manager Console)
* 在包管理器的默认项目中选择要进行迁移的项目
* 输入以下指令

```
enable-migrations   //为项目启动数据库迁移，执行成功后回生成Migrations文件夹和Configuration.cs配置文件
add-migration 迁移类名   //为某个类搭建基架，会在Migrations文件夹中生成对应的迁移文件，更新后可删除
update-database     //更新数据库
```

# LINQ介绍

语言集成查询 (LINQ) 是一系列直接将查询功能集成到 C# 语言的技术统称。LINQ 系列技术提供了针对对象 (LINQ to Objects)、关系数据库 (LINQ to SQL) 和 XML (LINQ to XML) 的一致查询体验。

# LINQ的操作对象

SQL Server 数据库、XML 文档、ADO.NET 数据集以及支持 IEnumerable 或泛型 IEnumerable < T > 接口的任何对象集合

# LINQ语句的数据库操作

```csharp
private static OwDBContext db = new OwDBContext();//首先声明数据库上下文

public static bool InsertMap(Map map)//添加数据
{
    try
    {
        db.Map.Add(map);
        db.SaveChanges();
        return true;
    }
    catch(Exception)
    {
        return false;
    }
}

public static bool DeleteMap(string mapId)//删除数据
{
    try
    {
        Map map=db.Map.Find(mapId);
        db.Map.Remove(map);
        db.SaveChanges();
        return true;
    }
    catch (Exception)
    {
        return false;
    }
}

public static bool UpdateMap(string oldMapId, Map map)//修改数据
{
    try
    {
        Map oldMap = db.Map.Find(oldMapId);
        oldMap.MapId = map.MapId;
        oldMap.MapName = map.MapName;
        oldMap.MapType = map.MapType;
        db.SaveChanges();
        return true;
    }
    catch(Exception)
    {
        return false;
    }
}

public static List<Map> SelectAllMap()//查询数据
{
    return db.Map.ToList();//类需要有一个无参构造方法
}
```