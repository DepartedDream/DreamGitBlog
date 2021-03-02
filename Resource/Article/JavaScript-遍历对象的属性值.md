```javascript
$(document).ready(
    function ()
    {
        var jsonData = [{ "age": 12, "weight": 12 }, { "age": 13, "weight": 13 }];
        for (var i = 0; i < jsonData.length;i++)
        {
            console.log(jsonData[i]);
            for (var x in jsonData[i])
            {
                console.log(jsonData[i][x]);
            }
        }
    }
)
```