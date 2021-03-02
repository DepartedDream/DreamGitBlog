```csharp
            SqlConnection sqlConnection = new SqlConnection(connstring);
            SqlCommand sqlCommand = new SqlCommand();
            sqlCommand.CommandText = "select * from Hero";
            sqlCommand.CommandType = CommandType.Text;
            sqlCommand.Connection = sqlConnection;
            DataSet dataSet = new DataSet();
            using (sqlConnection) 
            {
                SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(sqlCommand);
                sqlDataAdapter.Fill(dataSet);
            }
            for (int y = 0; y < dataSet.Tables[0].Rows.Count; y++)
            {
                for (int x = 0; x < dataSet.Tables[0].Rows[y].ItemArray.Length; x++)
                {
                    Response.Write(dataSet.Tables[0].Rows[y][x].ToString());
                }
                Response.Write("</br>");
            }
```

# SqlHelper源代码

```csharp
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Reflection;
namespace DAL
{
    public static class SqlHelper<T>
    {
        private static readonly string dbString = "Data Source =localhost;Initial Catalog = EducationMis; Integrated Security = True";

        public static bool Insert(T t)
        {
            using (SqlConnection conn = new SqlConnection(dbString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand();
                List<String> tableValueList = new List<String>();
                foreach (PropertyInfo propertyInfo in typeof(T).GetProperties())
                {
                    tableValueList.Add($"'{propertyInfo.GetValue(t)}'");
                }
                cmd.CommandText = $"INSERT INTO {GetTableName(typeof(T).Name)} VALUES({String.Join(",", tableValueList)})";
                cmd.CommandType = CommandType.Text;
                cmd.Connection = conn;
                bool isEffect = cmd.ExecuteNonQuery() != 0;
                conn.Close();
                return isEffect;
            }
        }

        public static bool Delete(string id)
        {
            using (SqlConnection conn = new SqlConnection(dbString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.Parameters.Add(new SqlParameter($"@id", id));
                cmd.CommandText = $"DELETE FROM {GetTableName(typeof(T).Name)} WHERE {GetTableAttrName(typeof(T).GetProperties()[0].Name)}=@id";
                cmd.CommandType = CommandType.Text;
                cmd.Connection = conn;
                bool isEffect = cmd.ExecuteNonQuery() != 0;
                conn.Close();
                return isEffect;
            }
        }

        public static bool Update(string oldId, T t)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand();
                string sqlParmsStr = "";
                foreach (PropertyInfo prop in typeof(T).GetProperties())
                {
                    string propName = GetTableAttrName(prop.Name);
                    sqlParmsStr += $"{propName}=@{propName}";
                    cmd.Parameters.Add(new SqlParameter(propName, prop.GetValue(t)));
                }
                string idName = GetTableAttrName(typeof(T).GetProperties()[0].Name);
                cmd.Parameters.Add(new SqlParameter(idName, oldId));
                cmd.CommandText = $"UPDATE  {GetTableName(typeof(T).ToString())} SET {sqlParmsStr} WHERE {idName}=@id";
                cmd.CommandType = CommandType.Text;
                cmd.Connection = conn;
                bool isEffect = cmd.ExecuteNonQuery() != 0;
                conn.Close();
                return isEffect;
            }
        }

        public static List<T> Select()
        {
            using (SqlConnection conn = new SqlConnection(dbString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand()
                {
                    CommandText = $"SELECT * FROM {GetTableName(typeof(T).Name)}",
                    CommandType = CommandType.Text,
                    Connection = conn
                };
                DataSet ds = new DataSet();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
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
                conn.Close();
                return modelList;
            }
        }

        public static T SelectById(string id)
        {
            using (SqlConnection conn = new SqlConnection(dbString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand();
                PropertyInfo[] props = typeof(T).GetProperties();
                cmd.CommandText = $"SELECT * FROM {GetTableName(typeof(T).Name)} WHERE {GetTableAttrName(props[0].Name)}=@id";
                cmd.CommandType = CommandType.Text;
                cmd.Connection = conn;
                cmd.Parameters.Add(new SqlParameter("@id", id));
                DataSet ds = new DataSet();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(ds);
                List<object> modelPropList = new List<object>();
                T model=(T)Activator.CreateInstance(typeof(T), modelPropList.ToArray());
                if (ds.Tables[0].Rows.Count != 0) 
                {
                    for (int x = 0; x < props.Length; x++)
                    {
                        props[x].SetValue(model, ds.Tables[0].Rows[0][x]);
                    }
                }
                conn.Close();
                return model;
            }
        }

        private static string GetTableAttrName(string classAttrName)
        {
            string tableAttrName = "";
            for (int i = 0; i < classAttrName.Length; i++)
            {
                if ('A' <= classAttrName[i] && classAttrName[i] <= 'Z' && i != 0)
                {
                    tableAttrName += "_" + Convert.ToChar(classAttrName[i]);
                }
                if ('A' <= classAttrName[i] && classAttrName[i] <= 'Z' && i == 0)
                {
                    tableAttrName += classAttrName[i];
                }
                else if ('a' <= classAttrName[i] && classAttrName[i] <= 'z')
                {
                    tableAttrName += Convert.ToChar(classAttrName[i] - 32);
                }
            }
            return tableAttrName;
        }

        private static string GetTableName(string className)
        {
            string tableName = "";
            for (int i = 0; i < className.Length; i++)
            {
                if ('A' <= className[i] && className[i] <= 'Z' && i != 0)
                {
                    tableName += "_" + Convert.ToChar(className[i]);
                }
                if ('A' <= className[i] && className[i] <= 'Z' && i == 0)
                {
                    tableName += className[i];
                }
                else if ('a' <= className[i] && className[i] <= 'z')
                {
                    tableName += Convert.ToChar(className[i] - 32);
                }
            }
            tableName = "T_" + tableName + "_INFO";
            return tableName;
        }

    }
}
```