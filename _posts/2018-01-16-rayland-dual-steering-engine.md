---
layout: post
title:  "Rayland-DUAL主板控制舵机"
date:   2018-01-16 07:00:00 +0800
categories: FDM SongLei
tags:  3D打印 FDM Rayland-DUAL
author: Song Lei
---

* content
{:toc}
 本文介绍了如何使用`Rayland-DUAL`主板的电机输出接口来控制舵机



## 舵机基本参数

RAYLAND-DUAL可以用来控制舵机，目前暂时只支持脉冲宽度调制的舵机。脉冲宽度调制的舵机能接受`1ms<2ms`脉宽的。其中`1ms`和`2ms`分别对应最左和最右位置，`1.5ms`对应中间位置。

<div align="center">
<img src="{{site.baseurl}}/images/F384E714-1E01-4CA5-832F-39D6FA36AAA2.png" height="240" width="360"  ></div>


这是一款典型舵机的工作参数

<div align="center">
<img src="{{site.baseurl}}/images/DB3D289D-2ABF-4844-9981-C469354DF5E4.png" height="360" width="360"  ></div>

综合上面两个图，舵机的控制典型值有下面三个

| 名称     | 典型值     |
| ------ | ------- |
| 脉冲宽度范围 | 1ms～2ms |
| 脉冲周期   | 20ms    |
| 电压     | 4.8v～6V |
| 死区     | 5us     |

脉冲宽度范围处以死去就是舵机的角度分辨率
$$
LSB = \frac{\Delta_{width}}{T}=1ms/5us = 200
$$
所以控制一个舵机的需要一个byte的数据量。



## 基本参数

| 尺寸        | 115×93 mm    |
| --------- | ------------ |
| 重量        |              |
| 工作温度      | -20～65℃      |
| 主处理器主频    | 1.4GHz       |
| 主处理器类型    | 4核 Cortex A7 |
| 协处理器      | 72MHz        |
| 内存容量      | 1Gbytes      |
| Flash     | 4Gbytes      |
| 最大外接Flash | 32Gbytes     |



