# 深入浅出node.js
- [第一章 Node简介](https://github.com/xblcity/reading-notes/blob/master/books/node.md#第一章-node简介)
- [第二章 Node简介](https://github.com/xblcity/reading-notes/blob/master/books/node.md#第二章-模块机制)

## 第一章 Node简介
### 1.1 Node的诞生历程
### 1.2 Node的命名与起源
### 1.3 Node给Javascript带来的意义
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

## 第二章 模块机制
js诞生之初，web1.0时代，js这种脚本语言主要有两个作用广为流传，一是表单校验，而是网页特效。web2.0时代，各种前端库和框架被开发出来，随后更多的应用需求在前端被实现，js也从表单校验跃迁到应用开发的级别上  
js不断被类剧和抽象，以更好地组织业务逻辑，从另一个角度而言，它也道出了js先天就缺乏的一项功能：模块。  
在其他高级语言中，Java有类文件，Python有import机制，Ruby有require，PHP有include和requrie，而js通过`<script>`标签引入代码的方式显得杂乱无章，语言自身毫无组织和约束能力。人们不得不用命名空间等方式人为地约束代码，以求达到安全和易用的目的

### 2.1 CommonJS规范
#### 2.1.1 CommonJS的出发点
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