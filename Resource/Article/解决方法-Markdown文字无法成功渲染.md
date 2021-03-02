# 问题描述

MarkDown写出的文本无法正常渲染

文本内容如下：

```
# asdasd
asdasd
--|--|--
asd|asd|asd
```

渲染效果如下

asdasd
--|--|--
asd|asd|asd

# 解决方法

Markdown根据段落来进行渲染，如果两个段落的格式不同需要进行分段，分段要使用换行符号。改成如下即可

```
# asdasd

asdasd

--|--|--
asd|asd|asd
```