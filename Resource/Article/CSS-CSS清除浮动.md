# CSS浮动

* 当为一个元素设置浮动时，该元素会脱离标准流
* 如果浮动元素的前一个元素不浮动，则该元素顶部会与顶部元素的底部相重合，并位于其下。
* 如果浮动元素的前一个元素浮动，则该元素会置于前一个浮动元素后

```html
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<style>
		.div1 {
			background-color: green;
			width: 100px;
			height: 100px;
		}

		.div2 {
			background-color: red;
			width: 200px;
			height: 200px;
			float: left;
		}

		.div3 {
			background-color: yellow;
			width: 300px;
			height: 300px;
		}

		.div4 {
			background-color: purple;
			width: 400px;
			height: 400px;
		}
	</style>
</head>

<body>
	<div class="div1">div1</div>
	<div class="div2">div2</div>
	<div class="div3">div3</div>
	<div class="div4">div4</div>
</body>

</html>
```

# CSS清除浮动

*  清除可以理解为打破浮动的横向排列
*  清除浮动只能应用非首个浮动元素

```html
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<style>
		.div1 {
			background-color: green;
			width: 100px;
			height: 100px;
		}

		.div2 {
			background-color: red;
			width: 200px;
			height: 200px;
			float: left;
		}

		.div3 {
			background-color: yellow;
			width: 300px;
			height: 300px;
			float: left;
			clear: left;
		}

		.div4 {
			background-color: purple;
			width: 400px;
			height: 400px;
			float: left;
		}
	</style>
</head>

<body>
	<div class="div1">div1</div>
	<div class="div2">div2</div>
	<div class="div3">div3</div>
	<div class="div4">div4</div>
</body>

</html>
```

# 参考
[经验分享：CSS浮动(float,clear)通俗讲解](https://www.cnblogs.com/iyangyuan/archive/2013/03/27/2983813.html)