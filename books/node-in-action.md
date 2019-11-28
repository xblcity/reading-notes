# Node.js实战 第二版 2018

> 时间不是很充分，所以大致过了一下，然后就去实战了

- 第一部分 Node基础知识介绍

  - [第一章 欢迎进入Node.js的世界]()

  - [第二章 Node编程基础]()

  - [第三章 Node Web程序是什么]()

## 第一章 欢迎进入Node.js的世界

在Node中，对于I/O请求，为了解决请求慢的问题，Node用三种技术解决这个问题：事件，异步API，非阻塞I/O

在Node中，回调函数的第一个参数通常是错误对象

Node应用程序主要分为三种类型

- Web应用程序
- 命令行工具，比如npm, webpack
- 后台程序和桌面程序，后台程序就是后台服务，比如pm2，桌面程序一般是用Electron框架写的软件，比如Atom, VS Code

## 第二章 Node编程基础

引入模块的api require 是Node种少数几个同步I/O操作之一

模块引入机制：是核心模块吗？在node_modules中吗？父目录存在吗？在环境变量NODE_PATH指定的目录下吗？==>抛出异常

在web前端程序，界面事件(比如鼠标点击)触发的逻辑，就是异步。服务端异步编程也一样，事件发生会触发响应逻辑，在Node的世界里流行两种响应逻辑管理方式：回调和事件监听。

回到通常用来定义一次性响应的逻辑，对于数据库查询，可以指定一个回调函数来确定如何处理查询结果。这个回调函数可能会显示数据库查询结果，根据这些结果做些计算，或者以查询结果为参数执行另一个回调函数

事件监听器本质上也是一个回调，不同的是，它跟一个概念实体(事件)相关联，例如，当有人在浏览器中点击鼠标时，鼠标点击就是一个需要 处理的事件，在Node中，当有http请求过来时，http请求会发出一个request事件，你可以监听那个request事件，并添加一些响应逻辑，在下面这个例子中，因为用EventEmitter.prototype.on在服务器上绑定了一个监听器，所以每当有request时间发出时，服务器就会调用handleRequest函数

```js
server.on('request', handleRequest)
```

一个Node HTTP服务器实例就是一个事件发射器，一个可以继承，能够添加时间发射及处理能力的类(EventEmitter)

### 用回调函数处理一次性事件

回调是一个函数，它被当做参数传递给异步函数，比如node的fs模块，

```js
fs.readFile('./test.json', (err, data) => {
  if (err) { 
    console.err(err) 
    res.end('Server Error')
  }
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(JSON.parse(data.toString()))
})
```

### 用事件发射器处理重复性事件

事件发射器会触发事件，并且在那些事件被触发时能够处理它们，一些重要的Node API组件比如HTTP服务器，TCP服务器和流都被做成了事件发射器，你也可以创建自己的事件发射器。

比如Node中的TCP socket，它有一个data事件，每当socket中有新数据时就会触发。

```js
const net = require('net')
const server = net.createServer(socket => {
  socket.on('data', data => {
    socket.write(data)
  })
})
server.listen(8888)
```
使用node xxx.js运行，使用命令行`telnet 127.0.0.1 8888` 发送数据给服务器(window没有telnet)

用事件发射器实现简单的发布/预订系统

```js
// Todo
```

### 异步开发要注意的难题

代码执行顺序

流程控制：串行执行/并行执行

## 第三章 Node Web程序是什么