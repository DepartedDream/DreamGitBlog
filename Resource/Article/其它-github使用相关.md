# .gitignore文件
* 我们做的每个Git项目中都需要一个“.gitignore”文件，
* 这个文件的作用就是告诉Git哪些文件不需要添加到版本管理中。
* 比如我们项目中的npm包(node_modules)，它在我们项目中是很重要的，但是它占的内存也是很大的，所以一般我们用Git管理的时候是不需要添加npm包的。

# 常用的规则

```
/mtk/ 过滤整个文件夹
*.zip 过滤所有.zip文件
/mtk/do.c 过滤某个具体文件
```

# VisualStudio项目的常见规则

```
/bin/
/obj/
```

# 参考
[".gitignore"](https://www.jianshu.com/p/699ed86028c2)