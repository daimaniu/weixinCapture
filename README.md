#基于phantomjs的微信长文章截图

>微信的文章现在已经是很多人获取『知识』的必不可少的途径，很多时候他们还想收藏，保存，做笔记的需求，但是在手机端的网页上我们无法在其上做笔记，只能将他们转化为图片才能操作，所以才有本文中这个主题。


###Phantomjs简介

   PhantomJS是一个无界面的,可脚本编程的WebKit浏览器引擎。它原生支持多种web 标准：DOM 操作，CSS选择器，JSON，Canvas 以及SVG。
   
   phantomjs 可以做什么？

    无UI界面的网站测试
    屏幕快照
    页面操作自动化
    网络监控

####安装

http://phantomjs.org/download.html 下载页面下，按说明直接安装即可.


###node-phantom-simple介绍

一个简单的Node.js 和 PhantomJS的桥接。

###运行

```
git clone git@github.com:daimaniu/weixinCapture.git

npm install

node shoot.js

```

###请求测试
http://localhost:1337/{weixin_url}

例如
http://localhost:1337/http://mp.weixin.qq.com/s?__biz=MzA4NzgxMzQzMA==&mid=2654156743&idx=1&sn=4861814b5f1eceb4236bc6d2c7611bcb&scene=0#wechat_redirect

即可获得截图文件

[点击查看截图效果](http://ww4.sinaimg.cn/mw690/5d68e2a9gw1f46aefti2oj20b45yyhdt.jpg)

###修改说明

forked from git://github.com/hankmander/screenshooter.git

仅仅做了一个lazy load的优化，因为微信有一个图片懒加载.

1. 	载入 jquery.min.js 
2. 用$获取懒加载的图片，并替换属性src 为 data-src懒加载里实际的图片地址.

###版权说明

>ps:本文作者系代码牛(daimaniu.cn 面对面的技术主题分享平台)讲师keepcleargas，对技术分享感兴趣的同学可关注 代码牛 公众号，获取最新的技术分享信息.



