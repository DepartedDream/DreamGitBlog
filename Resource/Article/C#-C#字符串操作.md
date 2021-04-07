# 字符串方法

## String.Format--格式化字符串

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = "Jack";
            Console.WriteLine(string.Format("My name is {0}", name));
            Console.WriteLine($"My name is {name}");//$符号等同于String.Format方法
            Console.ReadLine();
        }
    }
}
```

```
My name is Jack
My name is Jack
```

## string.Contains--查询字符串中是否包含指定字符串

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string word = "    asdasd keyasdasdasda d ";
            if (word.Contains("key"))
            {
                Console.WriteLine("There is a key");
            }
            else 
            {
                Console.WriteLine("There is no key");
            }
            Console.ReadKey();
        }
    }
}
```

```
There is a key
```

## string.IndexOf--获取指定字符的索引

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string message = "012345";
            Console.WriteLine(message.IndexOf('3'));
            Console.WriteLine(message.IndexOf("345"));
            Console.ReadKey();
        }
    }
}
```

```
3
3
```

## string.IndexOfAny--获取指定字符数组中第一个出现的字符的索引

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] symble = { '[', ']' };
            string word = "012[4567]90";
            Console.WriteLine(word.IndexOfAny(symble));
            Console.ReadKey();
        }
    }
}
```

```
3
```

## String.Join--将一个字符串数组整合为一个字符串

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] fruit = { "apple", "banana", "pear", "peach" };
            string fruitStr = String.Join("-", fruit);
            Console.WriteLine(fruitStr);
            Console.ReadKey();
        }
    }
}
```

```
apple-banana-pear-peach
```

## string.PadLeft--从左侧位置填充字符串到指定长度

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("0123".PadRight(9) + "9");
            Console.WriteLine("012345678".PadRight(9) + "9");
            Console.ReadKey();
        }
    }
}
```

```
0123     9
0123456789
```

## string.PadRight--从右侧位置填充字符串到指定长度

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("0" + "3456789".PadLeft(9));
            Console.WriteLine("0" + "789".PadLeft(9));
            Console.ReadKey();
        }
    }
}
```

```
0  3456789
0      789
```

## string.Remove--移除从指定位置指定的字符串

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string message = "Hello World!";
            Console.WriteLine(message.Remove(message.IndexOf("Hello"), 5));
            Console.ReadLine();
        }
    }
}
```

```
 World!
```

## string.Replace--将字符串中的指定字符串替换为新的字符串

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = "Jack";
            string wordPattern = "Hello Name!";
            string word = wordPattern.Replace("Name", name);
            Console.WriteLine(word);
            Console.ReadKey();
        }
    }
}
```

```
Hello Jack!
```

## string.SubString--保留从指定位置开始的字符串

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string message = "Hello World!";
            Console.WriteLine(message.Substring(message.IndexOf("World"), 6));
            Console.ReadKey();
        }
    }
}
```

```
World!
```

## string.Split--将字符串拆分成字符数组

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string message = "apple-banaa-pear";
            string[] wordArray = message.Split('-');
            for (int i = 0; i < wordArray.Length; i++)
            {
                Console.WriteLine(wordArray[i]);
            }
            Console.ReadKey();
        }
    }
}
```

```
apple
banaa
pear
```

## string.ToCharArray--将字符串拆分成字符数组

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {

            string message = "abc";
            char[] charArray = message.ToCharArray();
            for (int i = 0; i < charArray.Length; i++)
            {
                Console.WriteLine(charArray[i]);
            }
            Console.ReadKey();
        }
    }
}
```

```
a
b
c
```

## string.Trim--去除掉字符串开头和结尾的指定字符

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string word = "111asd111";
            Console.WriteLine(word.Trim('1'));
            Console.ReadKey();
        }
    }
}
```

```
asd
```


## string.TrmStart--去除字符串开头的指定字符

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string word = "111asd111";
            Console.WriteLine(word.TrimStart('1'));
            Console.ReadKey();
        }
    }
}
```

```
asd111
```

## string.TrmEnd--去除字符串结尾的指定字符

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string word = "111asd111";
            Console.WriteLine(word.TrimEnd('1'));
            Console.ReadKey();
        }
    }
}
```

```
111asd
```

## string.ToLower--将字符串中的所有大写英文字符转换为小写

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string a = "abCdEFGhiJ";
            string b = a.ToLower();
            Console.WriteLine(b);
            Console.ReadKey();
        }
    }
}
```

```
abcdefghij
```

## string.ToUpper--将字符串中的所有小写英文字符转换为大写

```csharp
using System;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string a = "abCdEFGhiJ";
            string b = a.ToUpper();
            Console.WriteLine(b);
            Console.ReadKey();
        }
    }
}
```

```
ABCDEFGHIJ
```


# 字符串内插

* 字符串内插通过使用“模板”和一个/多个内插表达式将多个值合并为单个文本字符串
* 内插表达式是一个变量，由一个左大括号和一个右大括号符号 { } 括起来。 
* 当文本字符串以 $ 字符为前缀时，该字符串将变为字符串模板。

```csharp
string message = greeting + " " + firstName + "!";
string message = $"{greeting} {firstName}!";
```

## 字符串内插中使用格式化字符串

* N3小数点后3位
* C显示所在地区的货币符号
* P2百分数后两位

```csharp
Console.WriteLine($"Invoice Number: {invoiceNumber}");
Console.WriteLine($"Measurement: {productMeasurement:N3} mg");
Console.WriteLine($"Sub Total: {subtotal:C}");
Console.WriteLine($"Tax: {taxPercentage:P2}");
Console.WriteLine($"Total Due: {total:C}");
//Invoice Number: 1201
//Measurement: 25.457 mg
//Sub Total: ¤2,750.00
//Tax: 15.83 %
//otal Due: ¤3,185.19
```