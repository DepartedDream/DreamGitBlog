# CSS平行四边形的实现方法

```css
#button1
{
    width: 300px;
    height: 100px;
    background-color: red;
    position: relative;
    left: 100px;
}

#button1::before
{
    width: 100px;
    height: 100px;
    content: '';
    position: absolute;
    top: 0;
    left: -50px;
    background-color: white;
    transform: skew(135deg);
}

#button1::after
{
    width: 100px;
    height: 100px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    left: 250px;
    background-color: white;
    transform: skew(135deg);
}
```