| 选择器                 | 示例             | 示例说明                                         |
| ---------------------- | ---------------- | ------------------------------------------------ |
| .class                 | .intro           | 选择所有class="intro"的元素                      |
| #id                    | #firstname       | 选择所有id="firstname"的元素                     |
| *                      | *                | 选择所有元素                                     |
| element                | p                | 选择所有p元素                                    |
| element,element        | div,p            | 选择所有div元素和p元素                           |
| element element        | div p            | 选择div元素内所有子元素p                        |
| element>element        | div>p            | 选择div元素内所有直接子元素p                      |
| element~element        | div~p            | 选择div元素后的所有兄弟p元素(div,p同父,div在p后)  |
| element+element        | div+p            | 选择div元素后的第一个p元素(div,p同父,div在p后)    |
| [attribute]            | [target]         | 选择所有带有target属性元素                       |
| [attribute=value]      | [target=-blank]  | 选择所有使用target="-blank"的元素                |
| [attribute~=value]     | [title~=flower]  | 选择标题属性包含单词"flower"的所有元素           |
| [attribute\|=language] | [lang\|=en]      | 选择 lang 属性以 en 为开头的所有元素             |
| [attribute^=value]     | a[src^="https"]  | 选择每一个src属性的值以"https"开头的元素         |
| [attribute$=value]     | a[src$=".pdf"]   | 选择每一个src属性的值以".pdf"结尾的元素          |
| [attribute*=value]     | a[src*="runoob"] | 选择每一个src属性的值包含子字符串"runoob"的元素  |
| :active                | a:active         | 选择活动链接                                    |
| :hover                 | a:hover          | 选择鼠标在链接上面时                             |
| :nth-child(n)          | p:nth-child(2)   | 选择每个p元素是其父级的第二个子元素              |

# 参考

[CSS选择器](https://www.runoob.com/cssref/css-selectors.html)