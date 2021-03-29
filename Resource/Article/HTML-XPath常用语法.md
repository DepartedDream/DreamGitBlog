# Xpath简介

* Xpath用于在XML文档中对元素属性进行定位

# Xpath常用语法实例

| 路径表达式                         | 结果                                                                                      |
| ---------------------------------- | ----------------------------------------------------------------------------------------- |
| bookstore                          | 选取 bookstore 元素的所有子节点。                                                         |
| /bookstore                         | 选取根元素 bookstore（绝对路径）。                                                        |
| bookstore/book                     | 选取属于 bookstore 的子元素的所有 book 元素。                                             |
| //book                             | 选取所有 book 子元素，而不管它们在文档中的位置。                                          |
| bookstore//book                    | 选择属于 bookstore 元素的后代的所有 book 元素，而不管它们位于bookstore 之下的什么位置。   |
| //@lang                            | 选取名为 lang 的所有属性。                                                                |
| /bookstore/book[1]                 | 选取属于 bookstore 子元素的第一个 book 元素。                                             |
| /bookstore/book[last()]            | 选取属于 bookstore 子元素的最后一个 book 元素。                                           |
| /bookstore/book[last()-1]          | 选取属于 bookstore 子元素的倒数第二个 book 元素。                                         |
| /bookstore/book[position()<3]      | 选取最前面的两个属于 bookstore 元素的子元素的 book 元素。                                 |
| //title[@lang]                     | 选取所有拥有名为 lang 的属性的 title 元素。                                               |
| //title[@lang='eng']               | 选取所有 title 元素，且这些元素拥有值为 eng 的 lang 属性。                                |
| /bookstore/book[price>35.00]       | 选取 bookstore 元素的所有 book 元素，且其中的 price 元素的值须大于 35.00。                |
| /bookstore/book[price>35.00]/title | 选取 bookstore 元素中的 book 元素的所有 title 元素，且其中的 price 元素的值须大于 35.00。 |

# 
# 参考

[XPath 语法](https://www.w3school.com.cn/xpath/xpath_syntax.asp)