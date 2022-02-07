```csharp
namespace ConsoleApp1
{
    public class Program
    {
        static void Main(string[] args)
        {
            string targetDirPath = "";
            DirectoryInfo dir = new DirectoryInfo(targetDirPath);
            FileInfo[] fileArray = dir.GetFiles();
            for (int i = 0; i < fileArray.Length; i++) 
            {
                fileArray[i].MoveTo("");
            }
        }
    }
}
```