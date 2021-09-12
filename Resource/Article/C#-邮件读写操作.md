# 邮件发送

* 以下代码采用smtp协议发送邮件
* pop3命令发出后，命令成功服务器会传回+ok开头的信息

```c#
try 
{
    SmtpClient smtpClient = new SmtpClient();
    smtpClient.Host = Program.SmtpAddress;
    smtpClient.EnableSsl = true;
    smtpClient.UseDefaultCredentials = false;
    smtpClient.Credentials = new NetworkCredential(Program.EmailAddress, Program.EmailPwd);
    smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
    using (MailMessage mailMessage = new MailMessage())
    {
        mailMessage.To.Add(receiveAddressTb.Text);
        mailMessage.IsBodyHtml = false;
        mailMessage.Priority = MailPriority.Normal;
        mailMessage.Subject = emailSubjectTb.Text;
        mailMessage.Body = emailContentTb.Text;
        smtpClient.Send(mailMessage);
    }
    MessageBox.Show("发送成功");
}
catch(SmtpException smtpError)
{
    MessageBox.Show("发送失败:" + smtpError.StatusCode
    + "\n\n" + smtpError.Message
    + "\n\n" + smtpError.StackTrace);
}
```

# 邮件读取

* 以下代码采用pop3协议接收邮件

```c#
private void ReceiveForm_Load(object sender, EventArgs e)
{
    try
    {
        initialEmailListThread = new Thread(()=> 
        {
            ConnectServer();
            LoginServer();
            GetEmailList();
        });
        initialEmailListThread.Start();
    }
    catch (Exception exception)
    {
        MyEx.SaveException(exception); ;
        this.Text = exception.Message;
    }
}

private void ConnectServer()
{
    while (true) 
    {
        infoLabel.Text = "正在尝试连接到服务器";
        if (tcpClient != null) tcpClient.Dispose();
        if (networkStream != null) networkStream.Dispose();
        if (streamReader != null) streamReader.Dispose();
        if (streamWriter != null) streamWriter.Dispose();
        tcpClient = new TcpClient(Program.Pop3Address, 110);
        if (tcpClient == null) ConnectServer();
        networkStream = tcpClient.GetStream();
        streamReader = new StreamReader(networkStream, Encoding.UTF8);
        streamWriter = new StreamWriter(networkStream, Encoding.UTF8);
        streamWriter.AutoFlush = true;
        string response = streamReader.ReadLine();
        if (response != null&&response.StartsWith("+OK")) break;
    }
}

private void LoginServer() 
{
    infoLabel.Text = "正在尝试登录到邮箱服务器";
    string response;
    while (true)
    {
        streamWriter.WriteLine($"USER {Program.EmailAddress}");
        response = streamReader.ReadLine();
        if (response != "" && response.StartsWith("+OK")) break;
    }
    while (true)
    {
        streamWriter.WriteLine($"PASS {Program.EmailPwd}");
        response = streamReader.ReadLine();
        if (response != "" && response.StartsWith("+OK")) break;
    }
}

private void QuitServer() 
{
    streamWriter.WriteLine("QUIT");
    string response = streamReader.ReadLine();
}

private void GetEmailList()
{
    infoLabel.Text = "正在读取邮件";
    int emailId = 1;
    while (true) 
    {
        infoLabel.Text = $"正在加载第{emailId}封邮件";
        string response;
        streamWriter.WriteLine($"RETR {emailId}");
        response = streamReader.ReadLine();
        if(response== "-ERR Message not exists") break;
        string emailStr = "";
        while (true)
        {
            response = streamReader.ReadLine();
            emailStr += $"{response}\n";
            if (response == ".") break;
        }
        emailId++;
    }
    infoLabel.Text = "收信成功";
}
```

# pop3协议的命令

* USER username 认证用户名
* PASS password 认证密码认证，认证通过则状态转换 
* APOP name,digest 认可一种安全传输口令的办法，执行成功导致状态转换，请参见 RFC 1321 。
* STAT 处理请求 server 回送邮箱统计资料，如邮件数、 邮件总字节数
* UIDL n 处理 server 返回用于该指定邮件的唯一标识， 如果没有指定，返回所有的。
* LIST n 处理 server 返回指定邮件的大小等 
* RETR n 处理 server 返回邮件的全部文本 
* DELE n 处理 server 标记删除，QUIT 命令执行时才真正删除
* RSET 处理撤消所有的 DELE 命令 
* TOP n,m 处理 返回 n 号邮件的前 m 行内容，m 必须是自然数 
* NOOP 处理 server 返回一个肯定的响应 
* QUIT 希望结束会话。如果 server 处于"处理" 状态，则现在进入"更新"状态，删除那些标记成删除的邮件。如果 server 处于"认可"状态，则结束会话时 server 不进入"更新"状态 。

# 参考

* [POP3常用命令简介](https://blog.csdn.net/iteye_11613/article/details/82671191)