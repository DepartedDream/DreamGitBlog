# NAT简介

NAT（Network Address Translation即网络地址转换)一种把内部网络（简称为内网）私有IP地址转换为外部网络（简称为外网）公共IP地址的技术，它使得一定范围内的多台主机只利用一个公共IP地址连接到外网，可以在很大程度上缓解了公网IP地址紧缺的问题。

# NAPT简介

NAPT（Network Address Port Translation），即网络地址端口转换，是人们比较熟悉的一种转换方式，使用一个合法公网地址，以不同的协议端口号与不同的内部地址相对应，也就是<内部地址+内部端口>与<外部地址+外部端口>之间的转换，用于企业只有一个公网IP但是有多个业务系统需要被互联网访问的场景。NAPT普遍用于接入设备中，它可以将中小型的网络隐藏在一个合法的IP地址后面。NAPT也被称为“一对多”的NAT，或者叫PAT（Port Address Translations，端口地址转换）、地址超载（address overloading）。

# NAT的类型

| 1    | 2                  | 3            |
| ---- | ------------------ | ------------ |
| NAT  | 基础NAT            | 动态NAT      |
| NAT  | 基础NAT            | 静态NAT      |
| NAPT | 锥形NAT(Core)NAT   | 完全锥形     |
| NAPT | 锥形NAT(Core)NAT   | 受限制锥形   |
| NAPT | 锥形NAT(Core)NAT   | 端口受限锥形 |
| NAPT | 对称(Symmetric)NAT |

# 判断NAT类型能否穿透的方法

| 编号                 | 名称     |
| -------------------- | -------- |
| full cone            | 全椎     |
| Restricted Cone      | ip受限   |
| port Restricted Cone | 端口受限 |
| Symmetric            | 对称     |
穿透关系：上述4种类型，如果定义他们的值为序列号，N为序列号相加。则N<=6可穿透。

# NAT对于通讯的影响

NAT对于存在于内网的两个终端设备通讯时有影响

# 提升NAT类型的方法

* 购买一个固定的外网IP。
* 将光猫变成桥接模式，由原先的光猫拨号改成路由器拨号。
* 打开路由器UPNP选项。
* 指定固定IP给主机，并在路由器里DMZ此IP。