---
layout: post
title:  "DLP H3 与 A33通讯协议"
date:   2018-03-05 07:00:00 +0800
categories: FDM 
tags:  FDM SongLei
author: Song Lei
---

* content
{:toc}

`DLP H3` 与 `A33`通讯协议



# H3 与 A33通讯协议

## 从A33到H3

| 包头   | 包长   | 类型   | 数据内容   | 备注        |
| ---- | ---- | ---- | ------ | --------- |
| 0x3A | 6    | 0    | NULL   | 查询当前屏幕分辨率 |
| 0x3A | 6+N  | 1    | 字符串    | 告知图片分辨率   |
| 0x3A | 6+N  | 2    | 字符串    | 设置屏幕分辨率   |
| 0x3A | 6+N  | 3    | 图片二进制  | 发送图片      |
| 0x3A | 6    | 4    | NULL   | 显示图片      |
| 0x3A | 6    | 5    | NULL   | 清空屏幕      |
| 0x3A | 6+N  | 6    | STL二进制 | 发送待切片模型   |
| 0x3A | 6+N  | 7    | 字符串    | 设置切片层高    |
| 0x3A | 6    | 8    | NULL   | 查询分辨率列表   |

## 从H3到A33

H3对类型0和类型8的包会做出反馈，反馈内容为字符串

| 查询包类型 | 反馈内容                                | 典型值                                | 备注      |
| ----- | ----------------------------------- | ---------------------------------- | ------- |
| 0     | resolution_x*resolution_yP刷新率\nOK\n | 1920*1080p60\nOK\n                 | 当前分辨率   |
| 8     | 分辨率列表\nOK\n                         | 480i use "-m 480i" or "-m 0"\nOK\n | 所有可选分辨率 |
|       |                                     |                                    |         |

