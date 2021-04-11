# 定义对象

```javascript
var man1= { "age": 12, "weight": 12 };
var man2=
{
    "age": 12, 
    "weight": 12,
    helloWorld: function ()
    {
        console.log("HelloWorld");
    },
    helloWorldPlus: function ()
    {
        this.helloWorld();
        this.helloWorld();
    }
}
var manArray = [{"age": 12, "weight": 12 }, { "age": 13, "weight": 13}];
```

# 调用属性值

```javascript
var man2=
{
    "age": 12, 
    "weight": 12,
    helloWorld: function ()
    {
        console.log("HelloWorld");
    },
    helloWorldPlus: function ()
    {
        this.helloWorld();
        this.helloWorld();
    }
}
console.log(man2["age"]);
man2.helloWorld();
```

# 遍历对象属性值

```javascript
var man1 = { "age": 20, "weight": 60 };
for (var key in man1)
{
    console.log(man1[key]);
}
```

# 遍历对象属性名

```javascript
var man1 = { "age": 20, "weight": 60 };
for (var key in man1)
{
    console.log(key);
}
```