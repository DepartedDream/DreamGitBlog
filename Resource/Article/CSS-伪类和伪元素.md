# 伪类

* 伪类用于定义元素的特殊状态
* 例如悬停样式，元素焦点样式,选择器的第一个匹配元素
* css3规定伪类使用:表示

```css
/* 鼠标悬停链接 */
a:hover {
  color: #FF00FF;
}
```

# 伪元素

* CSS 伪元素用于设置元素指定部分的样式
* 例如设置元素的首字母、首行的样式
* css3规定伪类使用::表示

```css
/*匹配所有p元素中的首个i元素*/
p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}
```

# 参考

* [CSS 伪类](https://www.w3school.com.cn/css/css_pseudo_classes.asp)
* [CSS 伪元素](https://www.w3school.com.cn/css/css_pseudo_elements.asp)