# map
地图组件，包括自适应尺寸和中心位置并可以交互的地图。

<p align='center'><img src='./view.png'></p>

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=@clunch/map"><img src="https://img.shields.io/npm/dm/@clunch/map.svg" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/@clunch/map"><img src="https://img.shields.io/npm/v/@clunch/map.svg" alt="Version"></a>
  <a href="https://github.com/clunch-contrib/map/graphs/commit-activity" target='_blank'><img alt="GitHub repo commit" src="https://img.shields.io/github/last-commit/clunch-contrib/map"></a>
  <a href="https://github.com/clunch-contrib/map/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@clunch/map.svg" alt="License"></a>
  <a href="https://github.com/clunch-contrib/map" target='_blank'><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/clunch-contrib/map?style=social"></a>
</p>

> 温馨提示：未开发完毕。

## 如何使用？

首先，需要安装npm包（目前我们仅支持npm方式管理）：

```
npm install --save clunch @clunch/map
```

然后注册组件：

```js
import Clunch from 'clunch';
import map from '@clunch/map';

Clunch.series('ui-map',map);
```

然后，你就可以使用这个组件了：

```html
<ui-map />
```

-

除了上面的必输项外，还有下列可选项：

|属性|类型|描述|默认值|可选值|
|----|----|----|----|----|

由于此组件是基于[Clunch](https://github.com/hai2007/clunch)开发的，我们默认你已经掌握了相关知识。

[<< 你可以点击此处学习Clunch.js如何使用](https://hai2007.gitee.io/clunch/#/course/introduce?fixed=top)

## 交互事件

图形绘制完成以后，我们可能还需要图形是可交互的，比如鼠标点击某个条目，可以提示对应的信息。

那么，我们可以对```.clunch```改造一下：

```html
<ui-map c-on:click='doit'/>
```

然后，在```new Clunch```的时候添加```doit方法```：

```js
new Clunch({
    ......
    methods:{
        doit(target){
            console.log(target);
        }
    }
});
```

打印的结果如下：

```js
target = {
    attr:当前组件的属性值
    data:你点击区域的信息
    left:点击位置的横坐标
    top:点击位置的纵坐标
    region:点击区域名称
    subRegion:点击子区域名称
    ......
}
```

其中，target.subRegion的格式举例子：

这样子，你就可以添加弹框或者悬浮提示来实现和绘制图形的交互了！

开源协议
---------------------------------------
[MIT](https://github.com/clunch-contrib/map/blob/master/LICENSE)

Copyright (c) 2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
