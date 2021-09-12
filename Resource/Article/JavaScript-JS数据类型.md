# JavaScript字符串

```javascript
var a="asdas";
```

# JavaScript数字

```javascript
var a=1;
```

# JavaScript布尔

```javascript
var a=true;
```

# Undefined和Null

* Undefined表示变量未定义,对应数值为0
* Null表示变量定义但为空值,对应数值为NaN
* 无需刻意区分二者

```javascript
var a=Undefined;
var b=Null;
```

# JavaScript数组

```javascript
var myCars=new Array();
myCars[0]="Saab";      
myCars[1]="Volvo";
myCars[2]="BMW";
var myCars=new Array("Saab","Volvo","BMW");
var myCars=["Saab","Volvo","BMW"];
```

# JavaScript对象

```javascript
var man=
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
var manArray = [{"age": 12, "weight": 12 }, { "age": 13, "weight": 13}];//定义对象数组
console.log(man["age"]);//调用对象属性
man.helloWorld();//调用对象方法
for (var key in man)
{
    console.log(key);//遍历对象的键名
    console.log(man[key]);//遍历对象的属性
}
```