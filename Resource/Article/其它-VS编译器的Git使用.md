# 本地Git库的创建与使用
## 创建解决方案
首先创建解决方案，并对其中的代码文件进行编写
## 创建本地Git库
文件存在修改后，编译器状态栏的右下角会显示添加到源代码管理，点击该按钮，并选择Git

# 团队资源管理器

## 团队资源管理器的介绍

团队资源管理器用于管理Git库

## 团队资源管理器的顶部按钮

主界面(图标为房子)--进入团队组员管理器的所选定的Git库的主界面
管理链接(图标为电源插头)--进入团队组员管理器的连接界面

## 团队资源管理器-连接界面

该界面用于管理本地和远程Git库，通过在该界面双击指定的Git库的主界面

本地Git库-新建:新建一个本地Git库

* 新建Git库的路径必须为空文件夹

本地Git库-添加:导入一个现存的Git库

本地Git库-克隆:从指定的URL路径拷贝Git库

## 团队资源管理器-主页界面

用于进行指定的Git库操作

## 团队资源管理器-更改界面

更改:用于保存你对当前分支的更改

* 提交分支必须输入描述信息
* 如果当前分支的修改没有保存，则无法切换到其它分支

更改数：显示全部修改的文件

* 通过点击更改数后面的+可以暂存更改，只能存储一个，并不能一键恢复，用于对比之前的修改
* 通过点击修改的文件可以对比具体的修改代码

储藏:临时存储当前修改，并把分支恢复到修改前的状态，可以切换到其它分支工作

* 可以选择输入描述信息，推荐输入
* 储藏--应用:即恢复储藏，并保留储藏
* 储藏--弹出:即恢复储藏，并删除储藏
* 储藏--放下:即删除该储藏

## 团队资源管理器-分支界面

分支用于管理该Git库的全部分支，分支即项目的不同版本

* 右键分支可以查看历史记录

新建分支:创建一个新的分支

* 新建分支需要选择以哪一个分支为基础
* 签出文件:从代码管理工具中获得最新版本的文件

合并:合并两个分支

* 不同分支存在冲突时，需要解决冲突才能合并

变基：类似合并，得到的历史记录是一条直线，无分支。

## 团队资源管理器-拉取请求界面

## 团队资源管理器-同步界面

同步:同步服务端里最新的版本

提取:提取服务器里最新版本到本地缓存

推送:直接将本地代码存储到服务器

拉取:拉取缓存的版本

推送到服务器分两种情况：

* 你本地就是最新版本，直接推送到服务器
* 服务端代码已经被其他人修改内容，提取-->同步-->推送

## 团队资源管理器-解决方案

* 一个Git库可以同时存在多个解决方案
* Git库主界面显示了当前库存在的全部解决方案
* Git库主界面可以打开和新建多个解决方案
* 删除Git库的解决方案需要到文件夹视图中删除解决方案文件夹