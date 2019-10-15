# 深入浅出node.js
- [第一章 Node简介](https://github.com/xblcity/reading-notes/blob/master/books/node.md#第一章-node简介)
- [第二章 Node简介](https://github.com/xblcity/reading-notes/blob/master/books/node.md#第二章-模块机制)

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

### 5.7 总结
Node将js的主要应用场景扩散到了服务器端，需要考虑的细节也与浏览器不同，需要更严谨地为每一份资源作出安排

## 第六章 理解Buffer
文件和网络I/O对于前端开发者而言都是不曾有的应用场景。  
由于应用场景不同，在Node中，应用需要处理网络协议，操作数据库，处理图片，接收上传文件等，在网络流和文件的操作中，还要处理大量二进制数据,js自带的字符串远远不能满足这些需求，于是Buffer对象应运而生。

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

### 第七章 网络编程