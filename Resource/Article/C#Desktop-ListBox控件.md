```csharp
foreach (Email email in emailList) 
{
    emailListBox.Items.Add($"{email.EmailId} {email.EmailSubject}");
}
```