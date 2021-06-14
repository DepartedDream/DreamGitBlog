# CSS悬浮触发另一个样式

```css
#button1:hover~#button2
{
    background-color:yellow;
}
#button1:hover #button2
{
    background-color:yellow;
}
```

* element1~element2选择器仅限element1包含element2
* element1 element2选择器仅限element1,element2拥有同一个父元素，element1后面有element2
* 其它情况建议使用js实现