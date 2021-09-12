# 添加数据

```csharp
public static bool Insert(T t)
{
    try
    {
        List<string> tableValueList = new List<string>();
        foreach (PropertyInfo propertyInfo in typeof(T).GetProperties())
        {
            tableValueList.Add($"'{propertyInfo.GetValue(t)}'");
        }
        SqlCommand cmd = new SqlCommand()
        {
            CommandText = $"INSERT INTO {GetTableName(typeof(T).Name)} VALUES({String.Join(",", tableValueList)})",
            CommandType = CommandType.Text,
            Connection = conn
        };
        conn.Open();
        int effectRowNum = cmd.ExecuteNonQuery();
        return effectRowNum != 0 ? true : false;
    }
    finally
    {
        conn.Close();
    }
}
```

# 删除数据

```csharp
public static bool Delete(int id)
{
    try
    {
        SqlCommand cmd = new SqlCommand()
        {
            Parameters = { new SqlParameter("@id", id) },
            CommandText = $"DELETE FROM {GetTableName(typeof(T).Name)} WHERE {GetTableAttrName(typeof(T).GetProperties()[0].Name)}=@id",
            CommandType = CommandType.Text,
            Connection = conn
        };
        conn.Open();
        int effectRowNum = cmd.ExecuteNonQuery();
        return effectRowNum != 0 ? true : false;
    }
    finally
    {
        conn.Close();
    }
}
```

# 修改数据

```csharp
public static bool Update(int pastId, T t)
{
    try
    {
        SqlCommand cmd = new SqlCommand()
        {
            CommandType = CommandType.Text,
            Connection = conn
        };
        PropertyInfo[] propertyInfoArray = typeof(T).GetProperties();
        string[] sqlParmStrArray = new string[propertyInfoArray.Length];
        for (var i = 0; i < propertyInfoArray.Length; i++)
        {
            string tablePropName = GetTableAttrName(propertyInfoArray[i].Name);
            sqlParmStrArray[i] = $"{tablePropName}=@{tablePropName}";
            cmd.Parameters.Add(new SqlParameter($"@{tablePropName}", propertyInfoArray[i].GetValue(t)));
        }
        string sqlParmStr = String.Join(",", sqlParmStrArray);
        cmd.Parameters.Add(new SqlParameter("@pastId", pastId));
        cmd.CommandText = $"UPDATE  {GetTableName(typeof(T).Name)} SET {sqlParmStr} WHERE {GetTableAttrName(typeof(T).GetProperties()[0].Name)}=@pastId";
        conn.Open();
        int effectRowNum = cmd.ExecuteNonQuery();
        return effectRowNum != 0 ? true : false;
    }
    finally
    {
        conn.Close();
    }
}
```

# 查询数据

```csharp
public static List<T> SelectAll()
{
    try
    {
        SqlCommand cmd = new SqlCommand()
        {
            CommandText = $"SELECT * FROM {GetTableName(typeof(T).Name)}",
            CommandType = CommandType.Text,
            Connection = conn
        };
        DataSet ds = new DataSet();
        SqlDataAdapter da = new SqlDataAdapter(cmd);
        conn.Open();
        da.Fill(ds);
        List<T> modelList = new List<T>();
        if (ds.Tables[0].Rows.Count != 0)
        {
            PropertyInfo[] propArray = typeof(T).GetProperties();
            for (int y = 0; y < ds.Tables[0].Rows.Count; y++)
            {
                object[] propValueArray = new object[propArray.Length];
                for (int x = 0; x < propArray.Length; x++)
                {
                    propValueArray[x] = ds.Tables[0].Rows[y][x];
                }
                T model = (T)Activator.CreateInstance(typeof(T), propValueArray);
                modelList.Add(model);
            }
        }
        return modelList;
    }
    finally
    {
        conn.Close();
    }
}
```


```csharp
public static List<T> SelectAll()
{
    try
    {
        SqlCommand cmd = new SqlCommand()
        {
            CommandText = $"SELECT * FROM {GetTableName(typeof(T).Name)}",
            CommandType = CommandType.Text,
            Connection = conn
        };
        conn.Open();
        SqlDataReader sqlDataReader = cmd.ExecuteReader();
        List<T> modelList = new List<T>();
        while (sqlDataReader.Read())
        {
            object[] propValueArray = new object[sqlDataReader.FieldCount];
            for (int x = 0; x < sqlDataReader.FieldCount; x++)
            {
                propValueArray[x] = sqlDataReader[x];
            }
            T model = (T)Activator.CreateInstance(typeof(T), propValueArray);
            modelList.Add(model);
        }
        return modelList;
    }
    finally
    {
        conn.Close();
    }
}
```