# JS坐标参数

* clientLeft,clientTop:表示内容区域的左上角相对于整个元素左上角的位置（包括边框）。(取决于边框的像数值？)
* cclientWidth,clientHeight:内容区域的宽高，不包括边框宽度值。
* coffsetLeft,offsetTop:相对于最近的祖先定位元素。
* coffsetParent:某元素的父元素 例如：this.offsetParent.tagName.toLowerCase() 得到body...
* coffsetWidth,offsetHeight 整个元素的尺寸(不包括变宽的宽度)
* cscrollLeft,scrollTop:元素滚动的大小
* scrollWidth,scrollHeight:整个内容区域的宽度(包括需拉动滚动条隐藏起来的那些部分) scrollTop+clientWidth



```js
//图片滚轮放大js
    var zoomSize=100;
    $("#map").on("mousewheel", function (e) {
        if (e.deltaY == 1) {
            var mapTop = parseInt($("#map").css("top").match("-?\\d+")[0]);
            var mapLeft = parseInt($("#map").css("left").match("-?\\d+")[0]);
            var mapWidth = parseInt($("#map").css("width").match("-?\\d+")[0]);
            var mapHeight = parseInt($("#map").css("height").match("-?\\d+")[0]);
            if (mapWidth <= "5000" &&mapWidth <= "5000") {
                $("#map").css("left", `${mapLeft - zoomSize/2}px`);
                $("#map").css("top", `${mapTop - zoomSize/2}px`);
                $("#map").css("width", `${mapWidth + zoomSize}px`);
                $("#map").css("height", `${mapHeight + zoomSize}px`);
            }
        }
        else if (e.deltaY == -1) {
            var mapTop = parseInt($("#map").css("top").match("-?\\d+")[0]);
            var mapLeft = parseInt($("#map").css("left").match("-?\\d+")[0]);
            var mapWidth = parseInt($("#map").css("width").match("-?\\d+")[0]);
            var mapHeight = parseInt($("#map").css("height").match("-?\\d+")[0]);

            if (mapWidth >= "500" && mapWidth >= "500") {
                $("#map").css("left", `${mapLeft + zoomSize/2}px`);
                $("#map").css("top", `${mapTop + zoomSize/2}px`);
                $("#map").css("width", `${mapWidth - zoomSize}px`);
                $("#map").css("height", `${mapHeight - zoomSize}px`);
            }
        }
    });
```

[offsetLeft,clientX ,offsetX 定义和区别](https://www.cnblogs.com/moluxi/p/13601338.html)