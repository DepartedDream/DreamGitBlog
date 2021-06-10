# DdTable CSS文件

```csharp
#ddTable
{
    margin: 1vh auto 0 auto;
    background-color: rgba(0,0,0,0.7);
    border-radius: 25px;
    color: white;
}

#ddTable > .dd_row
{
    display: table-row;
}

#ddTable > .dd_head_row > .dd_cell
{
    border-bottom: 1px solid white;
}

#ddTable > .dd_row > .dd_cell
{
    min-width: 100px;
    max-width: 200px;
    height: 25px;
    line-height: 25px;
    color: white;
    text-align: center;
    cursor: default;
    display: table-cell;
    overflow: hidden;
}

#ddTable > .dd_row > .dd_insert_tb,
#ddTable > .dd_row > .dd_update_tb,
#ddTable > .dd_row > .dd_search_tb
{
    color: white;
    border-bottom: 1px dotted #AFECAB;
    cursor: text;
}

#ddTable > .dd_row > .dd_insert_tb:focus,
#ddTable > .dd_row > .dd_update_tb:focus,
#ddTable > .dd_row > .dd_search_tb:focus
{
    border-bottom: 1px solid #AFECAB;
    outline: none;
}

#ddTable > .dd_row > .dd_insert_btn:active,
#ddTable > .dd_row > .dd_del_btn:active,
#ddTable > .dd_row > .dd_update_btn:active,
#ddTable > .dd_row > .dd_search_btn:active
{
    position: relative;
    top: 1px;
}

#ddTable > .dd_row > .dd_insert_btn,
#ddTable > .dd_row > .dd_del_btn,
#ddTable > .dd_row > .dd_update_btn,
#ddTable > .dd_row > .dd_search_btn
{
    border: 1px solid black;
}

#ddTable > .dd_row > .dd_search_btn
{
    background-color: #637aad;
    text-shadow: 0px 1px 0px #7a8eb9;
}

#ddTable > .dd_row > .dd_search_btn:hover
{
    background-color: #5972a7;
    cursor: pointer;
}

#ddTable > .dd_row > .dd_insert_btn
{
    background-color: #3d93f6;
    text-shadow: 0px 1px 0px #1571cd;
}

#ddTable > .dd_row > .dd_insert_btn:hover
{
    background-color: #1e62d0;
    cursor: pointer;
}

#ddTable > .dd_row > .dd_update_btn
{
    background-color: #f7ab28;
    text-shadow: 0px 1px 0px #b3701e;
}

#ddTable > .dd_row > .dd_update_btn:hover
{
    background-color: #d48e1e;
    cursor: pointer;
}

#ddTable > .dd_row > .dd_del_btn
{
    background-color: #f24437;
    text-shadow: 0px 1px 0px #810d05;
}

#ddTable > .dd_row > .dd_del_btn:hover
{
    background-color: #c62d1f;
    cursor: pointer;
}

#ddTable > .dd_page_list
{
    display: flex;
    justify-content: space-around;
    margin: 10px auto 0 auto;
    flex-wrap: wrap;
    min-width: 20vw;
    max-width: 30vw;
}

#ddTable > .dd_page_list > .dd_page_btn
{
    border-radius: 25px;
    display: block;
    width: 25px;
    height: 25px;
    line-height: 25px;
    color: white;
    text-align: center;
    background-color: #74ad5a;
    border: 1px solid #3b6e22;
    text-shadow: #92b879;
    cursor: pointer;
}

#ddTable > .dd_page_list > .dd_page_btn:hover
{
    background-color: #467031;
}

#ddTable > .dd_page_list > .dd_page_btn:active
{
    position: relative;
    top: 1px;
}
```

# DdTable处理器程序

```csharp
using System;
using System.Collections.Generic;
using System.Web;
using System.Collections.Specialized;
using System.Reflection;
using System.Linq;

namespace UI
{
    public class DdTableHandler : IHttpHandler
    {
        public bool IsReusable{get { return false; } }

        public void ProcessRequest(HttpContext context)
        {
            try
            {
                NameValueCollection jsData = context.Request.QueryString;
                string tableData = GetTableJsonData(jsData);
                context.Response.Write(tableData);
            }
            catch (Exception exception)
            {
                MyException.MyExceptionHandler.SaveException(exception);
            }
        }

        private static string GetTableJsonData(NameValueCollection requestData)
        {
            string methodName = requestData.Get("methodName");
            if (methodName == null)
            {
                throw new Exception("没有指定方法名");
            }
            string typeName = requestData.Get("typeName");
            if (typeName == null)
            {
                throw new Exception("没有指定类名");
            }
            Assembly dalAssembly = Assembly.Load("DAL");
            List<Type> dalTypeList = dalAssembly.GetTypes().ToList<Type>();
            Assembly modelAssembly = Assembly.Load("Model");
            List<Type> modelTypeList = modelAssembly.GetTypes().ToList<Type>();
            Type typeDAL = dalTypeList.Find((Type pTypeDAL) => pTypeDAL.Name == typeName + "DAL");
            Type type = modelTypeList.Find((Type pType) => pType.Name == typeName);
            object tableData = new object();
            if (methodName == "Insert")
            {
                object[] typeArray = Uri.UnescapeDataString(requestData.Get("type")).Split(',');
                object[] paramArray = { Activator.CreateInstance(type, typeArray) };
                tableData = typeDAL.GetMethod(methodName).Invoke(null, paramArray);
            }
            else if (methodName == "Delete")
            {
                object[] paramArray = { Int32.Parse(requestData.Get("id")) };
                tableData = typeDAL.GetMethod(methodName).Invoke(null, paramArray);
            }
            else if (methodName == "Update")
            {
                object[] typeArray = Uri.UnescapeDataString(requestData.Get("type")).Split(',');
                object[] paramArray = { Int32.Parse(requestData.Get("pastId")), Activator.CreateInstance(type, typeArray) };
                tableData = typeDAL.GetMethod(methodName).Invoke(null, paramArray);
            }
            else if (methodName == "GetTypeAttr") 
            {
                List<string> modelTypeNameList = new List<string>();
                foreach (PropertyInfo propertyInfo in type.GetProperties())
                {
                    modelTypeNameList.Add(propertyInfo.Name);
                }
                tableData= modelTypeNameList;
            }
            else if (methodName == "SelectAttr")
            {
                object[] paramArray = { Uri.UnescapeDataString(requestData.Get("attrNameArray")), Uri.UnescapeDataString(requestData.Get("attrValueArray")) };
                tableData = typeDAL.GetMethod(methodName).Invoke(null, paramArray);
            }
            else if (methodName == "SelectGroup")
            {
                object[] paramArray = { Int32.Parse(requestData.Get("groupNum")),
                    Int32.Parse(requestData.Get("groupSize")) };
                tableData = typeDAL.GetMethod(methodName).Invoke(null, paramArray);
            }
            else if (methodName == "SelectGroupAttr")
            {
                object[] paramArray = { Int32.Parse(requestData.Get("groupNum")),
                    Int32.Parse(requestData.Get("groupSize")),
                    Uri.UnescapeDataString(requestData.Get("attrNameArray")).Split(','),
                    Uri.UnescapeDataString(requestData.Get("attrValueArray")).Split(',')};
                tableData = typeDAL.GetMethod(methodName).Invoke(null, paramArray);
            }
            else if (methodName == "SelectMaxGroup")
            {
                object[] paramArray = { Int32.Parse(requestData.Get("groupSize")) };
                tableData = typeDAL.GetMethod(methodName).Invoke(null, paramArray);
            }
            else if (methodName == "SelectMaxGroupAttr")
            {
                object[] paramArray = { Int32.Parse(requestData.Get("groupSize")),
                    Uri.UnescapeDataString(requestData.Get("attrNameArray")).Split(','),
                    Uri.UnescapeDataString(requestData.Get("attrValueArray")).Split(',')};
                tableData = typeDAL.GetMethod(methodName).Invoke(null, paramArray);
            }
            return Newtonsoft.Json.JsonConvert.SerializeObject(tableData);
        }
    }
}
```

```

```