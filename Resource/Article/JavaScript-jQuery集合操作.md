# 遍历jquery集合

```javascript
$("input").each
(
    function(){}
)
```

```javascript
for(var i=0;i<$("input").length;i++)
{
    $($("input")[i]).html();
}
```