# SqlHelper源代码

```csharp
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Reflection;
using ExceptionHandle;


//Version=1.0
namespace DAL
{
    public static class SqlHelper<T>
    {
        private static readonly SqlConnection conn = new SqlConnection("Data Source =localhost;Initial Catalog = EducationMIS; Integrated Security = True");

        public static bool Insert(T t)
        {
            try
            {
                List<String> tableValueList = new List<String>();
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
                conn.Close();
                return effectRowNum != 0 ? true : false;
            }
            catch (Exception e)
            {
                conn.Close();
                MyExceptionHandler.SaveException(e);
                return false;
            }
        }

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
                conn.Close();
                return effectRowNum != 0 ? true : false;
            }
            catch (Exception e)
            {
                conn.Close();
                MyExceptionHandler.SaveException(e);
                return false;
            }
        }

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
                string[] sqlParmStrArray=new string[propertyInfoArray.Length];
                for (var i = 0; i < propertyInfoArray.Length; i++) 
                {
                    string tablePropName = GetTableAttrName(propertyInfoArray[i].Name);
                    sqlParmStrArray[i]=$"{tablePropName}=@{tablePropName}";
                    cmd.Parameters.Add(new SqlParameter($"@{tablePropName}", propertyInfoArray[i].GetValue(t)));
                }
                string sqlParmStr = String.Join(",", sqlParmStrArray);
                cmd.Parameters.Add(new SqlParameter("@pastId", pastId));
                cmd.CommandText = $"UPDATE  {GetTableName(typeof(T).Name)} SET {sqlParmStr} WHERE {GetTableAttrName(typeof(T).GetProperties()[0].Name)}=@pastId";
                conn.Open();
                int effectRowNum = cmd.ExecuteNonQuery();
                conn.Close();
                return effectRowNum != 0 ? true : false;
            }
            catch (Exception e)
            {
                conn.Close();
                MyExceptionHandler.SaveException(e);
                return false;
            }
        }

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
                conn.Close();
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
            catch (Exception e)
            {
                conn.Close();
                MyExceptionHandler.SaveException(e);
                return null;
            }
        }

        public static T SelectById(int id)
        {
            try
            {
                PropertyInfo[] props = typeof(T).GetProperties();
                SqlCommand cmd = new SqlCommand()
                {
                    CommandText = $"SELECT * FROM {GetTableName(typeof(T).Name)} WHERE {GetTableAttrName(props[0].Name)}=@id",
                    CommandType = CommandType.Text,
                    Connection = conn,
                    Parameters = { new SqlParameter("@id", id) }
                };
                DataSet ds = new DataSet();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                conn.Open();
                da.Fill(ds);
                conn.Close();
                List<object> modelPropList = new List<object>();
                T model = (T)Activator.CreateInstance(typeof(T), modelPropList.ToArray());
                if (ds.Tables[0].Rows.Count != 0)
                {
                    for (int x = 0; x < props.Length; x++)
                    {
                        props[x].SetValue(model, ds.Tables[0].Rows[0][x]);
                    }
                }
                return model;
            }
            catch(Exception e)
            {
                conn.Close();
                MyExceptionHandler.SaveException(e);
                return default(T);
            }
        }

        public static List<T> SelectByGroupNum(int groupNum, int groupSize)
        {
            try
            {
                SqlCommand cmd = new SqlCommand()
                {
                    CommandText = $"SELECT Top {groupSize} * FROM {GetTableName(typeof(T).Name)} " +
                        $"WHERE {GetTableId(typeof(T).Name)} NOT IN" +
                        $"(SELECT Top {(groupNum - 1) * groupSize} {GetTableId(typeof(T).Name)} from {GetTableName(typeof(T).Name)})",
                    CommandType = CommandType.Text,
                    Connection = conn
                };
                DataSet ds = new DataSet();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                conn.Open();
                da.Fill(ds);
                conn.Close();
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
            catch (Exception e)
            {
                conn.Close();
                MyExceptionHandler.SaveException(e);
                return null;
            }
        }

        public static int SelectMaxGroupNum(int groupSize)
        {
            try
            {
                SqlCommand cmd = new SqlCommand()
                {
                    CommandText = $"SELECT COUNT(*) / {groupSize:N1} FROM {GetTableName(typeof(T).Name)}",
                    CommandType = CommandType.Text,
                    Connection = conn
                };
                DataSet ds = new DataSet();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                conn.Open();
                da.Fill(ds);
                conn.Close();
                double maxGroupNum=Convert.ToDouble(ds.Tables[0].Rows[0][0]);
                if (maxGroupNum > Convert.ToInt32(maxGroupNum)) 
                {
                    maxGroupNum += 1;
                }
                return Convert.ToInt32(maxGroupNum);
            }
            catch (Exception e)
            {
                conn.Close();
                MyExceptionHandler.SaveException(e);
                return 0;
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

        private static string GetTableId(string className)
        {
            string classId = "";
            for (int i = 0; i < className.Length; i++)
            {
                if ('A' <= className[i] && className[i] <= 'Z' && i != 0)
                {
                    classId += "_" + Convert.ToChar(className[i]);
                }
                if ('A' <= className[i] && className[i] <= 'Z' && i == 0)
                {
                    classId += className[i];
                }
                else if ('a' <= className[i] && className[i] <= 'z')
                {
                    classId += Convert.ToChar(className[i] - 32);
                }
            }
            return classId += "_ID";
        }

    }
}
```