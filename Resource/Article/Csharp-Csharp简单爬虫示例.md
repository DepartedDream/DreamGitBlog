# 

```csharp
        public static string GetUrltoHtml(string Url, Encoding encode)
        {         
            try
            {
                //构造httpwebrequest对象，注意，这里要用Create而不是new
                HttpWebRequest wReq = (HttpWebRequest)WebRequest.Create(Url);

                //伪造浏览器数据，避免被防采集程序过滤
                wReq.UserAgent = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; .NET CLR 1.1.4322; .NET CLR 2.0.50215; CrazyCoder.cn;www.aligong.com)";
                 //注意，为了更全面，可以加上如下一行，避开ASP常用的POST检查              
                 wReq.Referer = "http://www.aligong.com/";//您可以将这里替换成您要采集页面的主页
                HttpWebResponse wResp = wReq.GetResponse() as HttpWebResponse;// 获取输入流
                System.IO.Stream respStream = wResp.GetResponseStream();
                System.IO.StreamReader reader = new System.IO.StreamReader(respStream, encode);
                string content = reader.ReadToEnd();
                reader.Close();
                reader.Dispose();
                return content;
            }
            catch (System.Exception ex)
            {
              
            }
            return "";
        }
```