---
title: 数据可视化话 - css3
---



## 概念

>   优点

数据可视化主要指借助与**图形化**的手段，清晰有效的**传达与沟通信息**

数据可视化通常用**柱状图**、**折线图**、**饼图**、**玫瑰图**、**散点图**等图形来**传递信息**

也可以使用**点**、**线**、**面**、**地图**来对**数字数据**进行**编码**展示，在视觉上传达关键信息

可视化可以帮助用户**分析与推理数据**，让复杂数据更容易理解与使用

>   发展历史

**18世纪**就开始有有人手绘**柱状图、折线图这些**可视化图形表了

随着**计算机应用**的发展，数理统计把**数据可视化**变成可一门**科学**（**计算机图形学**、**统计学**、**分析学**），并运用到各个行业

>   可视化-实现方案

-   前端可视化技术
    -   底层图形引擎：`Skia`、`OpenGL`  （一级）
        -   `2D`、`2.5D`大多基于`Skia`，也能绘制3D
        -   `3D`、游戏、绘图软件等大多基于`OpenGL`
    -   `W3C`提供：`CSS3`、`Canvas`、`SVG`、`WebGL`  （二级）
        -   `canvas`和`svg`就是基于`Skia`的，`WebGL`则底层基于`OpenGL`实现
    -   JavaScript 第三方插件动画库，基于`W3C`提供的这些技术来实现 （三级）
        -   `ZRender` 可以选择使用 `Canvas` 或 `SVG` 
        -   `Echarts` 基于 `ZRender` ，通过**配置**绘制 柱状图、折线图等
        -   `AntV` 包括 `G2、G3、G6、G7`等
        -   `Highcharts` 和 `Echarts` 类似，因为收费的，提供更全的一些东西
        -   `D3.js` 比`Echarts` 更加灵活 ，通过`js实现绘制` 它们的关系犹如 Vue2 和 React，一个通过配置，一个通过函数
        -   `Three.js`   基于 `WebGL`（规矩需要CAD设计思想，懂一些3d概念才会写，镜头、摄像机、灯光、材质、场景等概念）
        -   百度地图 、高德地图等
    -   低代码可视化平台：阿里云（`DataV`）、腾讯云图、网易有数等
        -    通过地代码，基本不需要写代码，买来就能开发者可视化页面
        -   使用模板 或 通过一些控件拉取，拼接成一个大屏页面

## CSS3
> 坐标系

**X轴**：中心点向左， **Y轴**：中心点向下(与数学相反)， **Z轴**： 垂直屏幕

所有动画都是要参照于坐标系的，`transform` 属性变化的元素 会受到 `transform-origin` 影响，改变形变的**原点**

css元素**默认**坐标系**原点**在左上角，通过`transform`时， `transform-origin 默认 50% 50%`,  坐标系**原点**会默认变为元素**中心点**

`transform` 会是坐标系发送倾斜，后期动画都是基于最新坐标系进行运动的

> 2D动画

```css
transform 旋转 缩放 倾斜 平移 给某个元素实现2D形变
transform-origin 设置原点 left == 0 50%
```

>   3D动画

```css
transform: translate3d(x,y,z) /* 所有涉及到3d 的属性 都会启用计算机的GPU提高性能速度 */
transform: rotate3d(0,0,1,45deg) == rotateZ(45deg) /* 轴轴旋转45 角度  */
transform: translate3d(100px,0,0) ==   translateX(100px)
transform: scale3d(2,0,0) == scaleX(2) /* 1倍 保持不变 */
```

>    3D 透视  perspective

定了**观察者**与**z=0(平面)**的距离，使具有**三维位置变换**的元素产生**透视效果(近大远小)**，

**z>0** 的三维元素比正常的大，而 **z<0** 时则比正常的小，大小程度有具体值绝对 

```css
/* 形变元素父元素定义透视属性效果 */
perspective:200px;

/* 形变元素自身定义透视属性效果 */
transform:perspective(200px) translateX(199px); /* 这时就直接粘着眼睛了，这个屏幕都是这个元素 */
transform:perspective(200px) translateX(201px); /* 元素到眼睛后面，就看不见了 */
```

>   3D 空间  transform-style

设置元素的子元素是处于什么空间

```css
/* 父元素设置 */
transform-style:flat /*2D空间平面*/
transform-style:preserve-3d /*3D空间 否则无法看出3d的感觉 不仅在父集元素放大缩小，还会会穿过平面*/
```

>   3D 背面可见性

```css
/* 变形元素的属性，变形元素背面朝向用户时，是否内容可见 */
backface-visibility:visible; 
backface-visibility:hidden;
```

### 动画性能优化

![](D:\MyData\projects\lzo-docs-blog\static\img\2022-12-06_231445.jpg)

谷歌浏览器 console 下面三个点 --> more tools --> layers 查看动画图层

