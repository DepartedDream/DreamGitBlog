# LINQ简介

* 语言集成查询 (LINQ) 是一系列直接将查询功能集成到 C# 语言的技术统称。
* 可为以下对象编写LINQ查询 SQL Server 数据库、XML 文档、ADO.NET 数据集以及支持 IEnumerable 或泛型 IEnumerable<T> 接口的任何对象集合

# 查询操作的三个部分

```csharp
class IntroToLINQ
{
    static void Main()
    {
        // 1. 获取数据源。
        int[] numbers = new int[7] { 0, 1, 2, 3, 4, 5, 6 };

        // 2. 创建查询。
        IEnumerable<int> numQuery =
            from num in numbers
            where (num % 2) == 0
            select num;

        // 3. 执行查询。
        foreach (int num in numQuery)
        {
            Console.Write("{0,1} ", num);
        }
    }
}
```

* LINQ 查询变量被类型化为 IEnumerable<T> 或派生类型（如 IQueryable<T>）。
* 可以使用 var 关键字来避免使用泛型语法，从而直接声明LINQ查询变量
* 查询变量本身只存储查询命令。
* 查询变量遍历后才能执行
* 查询变量也可以使用聚合函数ToList()等，来立刻执行

# 基本 LINQ 查询操作
## where子句--筛选

```csharp
var queryLondonCustomers = from cust in customers
                           where cust.City == "London"
                           select cust;
```

## orderby子句--排序

```csharp
//逆序排序
var queryLondonCustomers3 =
    from cust in customers
    where cust.City == "London"
    orderby cust.Name ascending
    select cust;
```

## group子句--分组

```csharp
var queryCustomersByCity =
      from cust in customers
      group cust by cust.City;
```

## join子句--联接

```csharp
var innerJoinQuery =
    from cust in customers
    join dist in distributors on cust.City equals dist.City
    select new { CustomerName = cust.Name, DistributorName = dist.Name };
```