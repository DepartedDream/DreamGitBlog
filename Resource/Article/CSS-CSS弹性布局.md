# 弹性布局简介

Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。

# 弹性布局基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

[弹性布局演示demo](https://codepen.io/justd/full/yydezN)

# 容器属性

* flex-direction: row | row-reverse | column | column-reverse;
* flex-wrap: nowrap | wrap | wrap-reverse;
* flex-flow: <'flex-direction'> <'flex-wrap'>;
* justify-content: flex-start | flex-end | center | space-between | space-around;
* align-items: flex-start | flex-end | center | baseline | stretch;
* align-content: flex-start | flex-end | center | space-between | space-around | stretch;

# 项目属性

* order: <'integer'>;
* flex-grow: <number>; /* default 0 */
* flex-shrink: <number>; /* default 1 */
* flex-basis: <length> | auto; /* default auto */
* flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
* align-self: auto | flex-start | flex-end | center | baseline | stretch;

# 参考

[菜鸟教程](https://www.runoob.com/w3cnote/flex-grammar.html)