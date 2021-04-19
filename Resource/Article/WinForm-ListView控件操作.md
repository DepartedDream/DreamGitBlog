* 更改listView的属性View为Details
* 更改listView的属性GridLines为True
* 更改listView的属性FullRowSelect为True

```csharp
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
 
namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {

        public Form1()
        {
            InitializeComponent();
            ListViewItem listViewItem = listView1.Items.Add("123");
            listViewItem.SubItems.Add("1");
            listViewItem.SubItems.Add("2");
        }

    }
}
```

* listView1.Items.Add中的文本值类似listViewItem的主键
* listViewItem为表格的一行
* listViewItem.SubItems为表格的每一项