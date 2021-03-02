# 什么是字符串内插

* 字符串内插通过使用“模板”和一个/多个内插表达式将多个值合并为单个文本字符串
* 内插表达式是一个变量，由一个左大括号和一个右大括号符号 { } 括起来。 
* 当文本字符串以 $ 字符为前缀时，该字符串将变为字符串模板。

```csharp
string message = greeting + " " + firstName + "!";
string message = $"{greeting} {firstName}!";
```

# 使用字符串内插显示特殊格式

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