# margin塌陷问题

* 在文档流中，父元素的高度默认是被子元素撑开的
* 元素设置浮动之后，子元素会完全脱离文档流
* 导致子元素无法撑开父元素的高度，导致父元素高度塌陷

# margin合并问题

* 上下位置关系的两个div容器，同时使用margin-top、margin-bottom设置间距
* 两个div容器间距为margin-top、margin-bottom中大的值，而不是它们的和