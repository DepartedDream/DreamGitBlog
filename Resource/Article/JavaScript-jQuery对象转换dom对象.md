# 原生DOM对象转jQuery对象

```javascript
var box = document.getElementById('box');
var $box = $(box);
```

# jQuery对象转原生DOM对象

```javascript
var $box = $('#box');
var box = $box[0];
```

* jQuery对象实际是一个dom对象数组