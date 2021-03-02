# Flex容器的属性

属性|作用|值
--|--|--
display|将容器指定为Flex布局。|flex\|inline-flex(行内元素设置)
flex-direction|项目的排列方向|row-reverse\|column\|column-reverse
flex-wrap|项目的换行方式|nowrap\|wrap\|wrap-reverse
flex-flow|flex-direction属性和flex-wrap属性的简写形式|\<flex-direction\>\<flex-wrap\>
justify-content|项目在主轴上的对齐方式|flex-start\|flex-end\|center\|space-between\| space-around
align-items|项目在交叉轴上的对齐方式|flex-start\|flex-end\|center\|baseline\|stretch
align-content|项目在多轴线的对齐方式|flex-start\|flex-end\|center\|space-between|space-around\|stretch;

# Flex项目的属性

属性|作用|值
--|--|--
order|定义项目的排列顺序。数值越小越靠前|\<integer\>
flex-grow|定义项目的放大比例|\<number\>|
flex-shrink|定义了项目的缩小比例|\<number\>|
flex-basis|定义了在分配多余空间之前，项目占据的主轴空间（main size）|\<length\>
flex|flex-grow, flex-shrink 和 flex-basis的简写|none\|[\<'flex-grow'\> \<'flex-shrink'\>?\| \<'flex-basis'\> ]
align-self|允许单个项目有与其他项目不一样的对齐方式|auto \| flex-start \| flex-end \| center \| baseline \| stretch

# 参考

[Flex 布局语法教程](https://www.runoob.com/w3cnote/flex-grammar.html)