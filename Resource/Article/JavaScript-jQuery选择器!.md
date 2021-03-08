# jQuery下载

[jQuery下载](https://jquery.com/download/)

# 获取jQuery对象及jQuery对象的转换

## 使用选择器获取jQuery对象

语法|作用
--|--
$("#id")|id选择器获取jQuery对象
$(".class")|类选择器获取jQuery对象
$("button")|标签选择器获取jQuery对象

注意:使用选择器时,务必要在html元素加载完成后使用,也就是在$(document).ready()方法中执行选择器

## 将dom对象转化成jQuery对象

语法|作用
--|--
$(dom对象)|将dom对象转化成jquery对象

## jQuery对象转dom对象

```
jQuery对象[0]
```