# jQuery实现侧边栏随页面滚动

```javascript
    $(window).scroll(function()
    {
        $("#article_type_list").css("margin-top",$(window).scrollTop());
    })
```

* 通过window对象的scroll事件触发
* 通过将侧边栏相对其原来位置的上边距值与窗体所在页面的位置值设置相同实现