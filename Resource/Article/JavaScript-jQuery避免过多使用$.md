# JavaScript-jQuery避免过多使用$

```html
$('.nav a').click(function() {
  $(this).hide();
  $(this).css('color', 'red');
  $(this).show();
  alert('something else');
  $(this).hide();
  return false;
});
```

* 每次使用$,jQuery都会队dom树进行遍历,过多的遍历会造成性能浪费
* 应该使用变量存储过多使用的jQuery对象

# 参考

[GBin1分享：jQuery新手技巧之“避免过多使用$('.someclass')”](https://www.cnblogs.com/gbin1/archive/2011/10/08/2201970.html)