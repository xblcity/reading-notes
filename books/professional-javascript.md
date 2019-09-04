# Javascript高级程序设计(第三版)读书笔记
- [第1章 Javascript简介](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第1章-Javascript简介)
- [第2章 在HTML中使用javascript](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第2章-在HTML中使用javascript)
- [第3章 基本概念](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第3章-基本概念)
- [第4章 变量、作用域和内存问题](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第4章-变量、作用域和内存问题)
- [第5章 引用类型](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第5章-引用类型)
- [第6章 面向对象的程序设计](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第6章-面向对象的程序设计)
- [第7章 函数表达式](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第7章-函数表达式)
- [第8章 BOM](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第8章-BOM)
- [第9章 客户端检测](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第9章-客户端检测)
- [第10章 DOM](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第10章-DOM)
- [第11章 DOM扩展](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第11章-DOM扩展)
- [第12章 DOM2和DOM3](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第12章-DOM2和DOM3)
- [第13章 事件](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第13章-事件)
- [第14章 表单脚本](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第14章-表单脚本)
- [第15章 使用Canvas绘图](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第15章-使用Canvas绘图)
- [第16章 HTML5脚本编程](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第16章-HTML5脚本编程)
- [第17章 错误处理与调试](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第17章-错误处理与调试)
- [第18章 JavaScript与XML](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第18章-JavaScript与XML)
- [第19章 E4X](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第19章-E4X)
- [第20章 JSON](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第20章-JSON)
- [第21章 Ajax与Comet](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第21章-Ajax与Comet)
- [第22章 高级技巧](https://github.com/xblcity/reading-notes/blob/master/books/professional-javascript.md#第22章-高级技巧)

:smile: :smiley: :innocent:

## 第1章 Javascript简介
- 最初是为了处理客户端简单验证
- JS实现包含 ECMAScript, DOM, BOM

## 第2章 在HTML中使用javascript
- `<script>`标签
- 使用defer,async异步加载脚本
- 使用`script`实现jsonp

## 第3章 基本概念
### 3.1 语法
#### 3.1.1 区分大小写

#### 3.1.2 标识符
- 就是指变量，函数，属性的名字，或者函数的参数
- 标识符第一个必须是字母，下划线_或美元符号 $

#### 3.1.3 注释
- 单行与多行注释

#### 3.1.4 严格模式
- `"use strict";`

#### 3.1.5 语句
- 行尾加不加分号
- 代码块

### 3.2 关键字和保留字

### 3.3 变量
- 弱类型

### 3.4 数据类型
- 6种简单数据类型，number, string, boolean, null, undefined, symbol
- object类型

#### 3.4.1 typeof操作符
#### 3.4.2 Undefined类型
#### 3.4.3 Null类型
#### 3.4.4 Boolean类型
- if语句自动执行 Boolean()

#### 3.4.5 Number类型
#### 3.4.6 String类型
#### 3.4.7 object类型

### 3.5 操作符
#### 3.5.1 一元操作符
只能操作一个值的操作符叫一元操作符  
递增递减操作符
`--num1 num1-- ++num1 num1++`  
一元加和减操作符
`+num1 -num1`
#### 3.5.2 位操作符
涉及到二进制
#### 3.5.3 布尔操作符
逻辑非！  
逻辑与&&  
逻辑或 ||
#### 3.5.4 乘性操作符
乘法*
除法 、
求模(取余) %
#### 3.5.5 加性操作符
加法  
如果有一个操作数是对象，数值或布尔值，则调佣它们的toString方法，对于Undefined和Null则调用String()方法  
减法
#### 3.5.6 关系操作符
#### 3.5.7 相等操作符
#### 3.5.8 条件操作符
#### 3.5.9 赋值操作符
#### 3.5.10 逗号操作符

### 3.6 语句
#### 3.6.1 if语句
#### 3.6.2 do-while语句
#### 3.6.3 while语句
#### 3.6.4 for语句
#### 3.6.5 for-in语句
#### 3.6.6 label语句
#### 3.6.7 break和continue语句
#### 3.6.8 with语句
#### 3.6.9 switch语句

### 3.7 函数
#### 3.7.1 理解参数
#### 3.7.2 没有重载

### 3.8 小结


## 第4章 变量、作用域和内存问题

### 4.1 基本类型和引用类型的值

#### 4.1.1 动态的属性
- 引用类型的属性是动态的，可以重设

#### 4.1.2 复制变量值
- 复制变量值，复制基本类型值，会创建新值，复制引用类型的值，值的副本是指针

#### 4.1.3 传递参数
- 函数参数是按值传递的，参数是函数内部的局部变量
```js
function setName(obj) {
  obj.name = 'nicocity'
  obj = new Object()
  obj.name = 'Grey'
}
var person = new Object()
setName(person)
console.log(person.name) // 'nicocity'
```
#### 4.1.4 检测类型
- typeof操作符用于检测基础类型(null除外)，object以及function，如`typeof 'a'`,输出string  
- instance操作符检测引用类型, 如`[1,2] instanceof Array`, 输出true  

### 4.2 执行环境及作用域
- 执行环境(execution context)，也称环境  
- web浏览器全局执行环境是window  
- 代码在一个环境中执行时，会创建对象变量的一个作用域链

#### 4.2.1 延长作用域链
- with, try...catch, 块作用域

#### 4.2.2 没有块作用域(X)

### 4.3 垃圾收集

#### 4.3.1 标记清除
- 垃圾收集器在运行时会给内存中所有变量加上标记，然后去掉环境中的变量以及被环境中变量引用的变量的标记(闭包？)，而在此之后再被加上标记的变量被视为准备删除的变量，因为环境中的变量已经无法访问到这些变量了，最后，垃圾搜集器完成内存清除工作，销毁哪些带标记的值并回收它们所占用的内存空间。

#### 4.3.2 引用计数
- 会出现循环引用问题

#### 4.3.3 性能问题

#### 4.3.4 管理内存
- 手动将数据的值设为null，解除引用

### 4.4 小结

## 第5章 引用类型

### 5.1 Object类型
- new Object() 或者 对象字面量 创建对象实例
- 使用. 或者 [] 访问对象属性

### 5.2 Array类型
- 创建方式： new Array(), 字面量， [...Array(20)]  
- length属性

#### 5.2.1 检测数组
- `anArray instanceof Array, Array.isArray(someArray)`

#### 5.2.2 转换方法
- 所有对象都具备的 toString() toLocaleString() valueOf()
- join, 逆向 String.split()

#### 5.2.3 栈方法
- LIFO, Last-In-First-Out  
- pop() push() 不传参则默认取最后一项，会改变原数组

#### 5.2.4 队列方法
- FIFO First-In-First-Out
- shift() unshift() 不传参默认取第一项，会改变原数组

#### 5.2.5 重排序方法
reverse() 和 sort() 后者可以传入自定义回调函数  
sort()传入回调函数return 正值 则说明第一个参数应该位于第二个参数之前，即交换顺序，负数则相反，0则不变
```js
[1,20,5,2].sort(function compare(prev, cur) {
  if (prev < cur) {
    return 1
  } else if (prev > cur) {
    return -1
  } else {
    return 0
  }
}) // 输出 [20, 5, 2, 1]
```

#### 5.2.6 操作方法
- concat() aArray.concat(bArray)
- slice(begin) 或者 slice(begin, end)
- splice() 功能强大但是会改变原数组 splice(beigin, 截取长度, 替换)

#### 5.2.7 位置方法
- indexOf() lastIndexOf() 参数是要查找的项
- es6可以使用 find或者 findIndex迭代方法

#### 5.2.8 迭代方法
- forEach, every, some, filter, map 都可以传递三个参数
- es6 find, findIndex, includes

#### 5.2.9 归并方法
reduce, reduceRight

**ES6新增**: Array.from(),Array.of(),copeWithin(),find,findIndex,fill,includes(ES7)

### 5.3 Date类型
- new Date() 输出时间格式的字符串
- new Date(2131231) 传入毫秒数，也会输出时间格式字符串  
**构造器上面的方法，即Date函数/constructor，或者可以说是prototype的constructor属性上面的方法**  
- Date.parse(new Date()) 传入时间格式字符串，返回毫秒数
- Date.now() 返回毫秒数  
**原型上面的方法，即Date实例的原型(prototype)上面的方法**   
- 例如, new Date().getTime()

#### 5.3.1 继承的方法
来自Object原型链的方法  
toLocaleString()会根据地区的时间格式返回相应时间

#### 5.3.2 日期格式化方法
- toDateString, toTimeString, toLocaleDateString, toLocaleTimeString, toUTCString
- toLocaleTimeString,toLocaleDateString和toLocaleString之间的区别

#### 5.3.3 日期/时间组件方法
Date类型  
getTime// 返回毫秒数, getFullYear, getMounth, getDay, getHours...

### 5.4 RegExp类型
- `const expression = /pattern/ flags` flags包含 g,i,m  
- 元字符必须要转义，如`. [ { ^ $ ? * | \` 需要在前面加上 `\`  
- `const pattern = /[bc]at/i` 匹配第一个bat或者cat，不区分大小写  
- test()

#### 5.4.1 RegExp实例属性

#### 5.4.2 RegExp实例方法
- exec('要检测的字符串') // 返回数组，查找不到返回null
- test('要检测的字符串') // 返回布尔值

#### 5.4.3 RegExp构造函数属性

#### 5.4.4 模式的局限性

### 5.5 Function类型

#### 5.5.1 没有重载
- 后面的函数会覆盖前面的函数，ts有函数重载

#### 5.5.2 函数声明与函数表达式
- 函数声明比函数表达式先被读取，即函数提升

#### 5.5.3 作为值的函数
- 访问函数而不执行函数，需要去掉函数名后面的括号
- 函数可以作为参数
- 函数内部返回函数
```js
function createComparisonFunction(propertyName) {
  return function(object1, object2) {
    var value1 = object1[propertyName]
    var value2 = object2[propertyName]
    if (value1 < value2) {
      return -1
    } else if (value1 > value2) {
      return 1
    } else {
      return 0
    }
  }
}
var data = [{name: 'li', age: 28}, {name: 'nico', age: 21}]
data.sort(createComparisonFunction('name')) // 依据name进行排序
```

#### 5.5.4 函数内部属性
- arguments
- callee
- this

#### 5.5.5 函数属性和方法
构造函数属性  
- length 是函数希望接收到的参数个数
- prototype
原型上方法
- apply/call/bind 改变函数执行作用域/上下文环境/this


### 5.6 基本包装类型
特殊的引用类型  
- Boolean
- Number
- String  
当上述基本值被读取的时候，后台会创建对应的基本包装类型的对象，从而我们可以调用方法来操作这些数据
```js
var s1 = 'some text'
var s2 = s1.substring(2)

// 基本类型值不是对象，不该有方法，当访问s1时，实际执行了下面操作
// 1.创建实例2.在实例上面调用方法3.销毁这个实例
var s1 = new String('some text')
var s2 = s1.substring(2)
s1 = null
```

#### 5.6.1 Boolean类型

#### 5.6.2 Number类型
- toFixed()

#### 5.6.3 String类型
- 属性 length
- concat 大部分还是使用 `+`号
- slice, substring, substr,对原始字符无影响
- slice,substring第一个参数是起始位置，第二个是结束位置，substr第二个参数是返回字符个数
- indexOf，lastIndexOf, `'myname'.indexOf(n)`结果为3，找不到返回-1
- trim,删除前后位置所有空格，`'  sc  '.trim()` 结果 'sc'
- toLowerCase, toUpperCase，大小写转换
- match，与RegExp的exec相同，match只接收正则表达式，`'cat, fat'.match(/.at/)`,返回数组...
- search同match，返回索引或-1
- replace,两个参数，用于替换字符串，`'cat, bat'.replace(/at/g, 'ond')` 返回 `'cond, bond'`
- split，传入要根据分割的符号，不传的分割单个字母，如`'me'.split()` 返回 `'m','e'`
- localeCompare,比较字符串

### 5.7 单体内置对象
#### 5.7.1 Global对象
- encodeURI, encodeURICompoent,后者会对任何非标准字符进行编码，用的更多
- decodeURI, decodeURIComponent,后者可以解码任何特殊字符编码
- eval，传入字符串，但会被当做js语句执行，容易被脚本注入，非常危险
##### Golbal属性
- 特殊值：undefined,NaN,Infinity,构造函数：Object,Array,Function,Boolean,String,Number
- 构造函数：Date, RegExp, Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError
##### ECMAScript虽然没有指出如何访问Global对象，但web浏览器都是将这个全局对象作为window对象的一部分实现的

#### 5.7.2 Math对象
##### Math对象属性
- Math.PI等
##### Math方法
- Math.min(), Math.max() 传入多个number类型值
- 找到数组中最大值，`var values = [1,2,5,7,8]; var max = Math.max.bind(Math, values)`
- 舍入方法，Math.ceil, Math.floor, Math.round
- Math.random, `Math.floor(Math.random()*10 + 1)`
- 还有其他方法，如Math.abs(num)绝对值, Math.exp(num)n次幂, Math.sqrt(num)平方根，Math.cos(x)余弦值，等等。。。

### 5.8 小结
- Object是基础类型，其他引用类型都从Object继承
- Array,Date,RegExp,Function以及三个包装类型 String,Number,Boolean,
- 内置对象Global以及Math

## 第6章 面向对象的程序设计
### 6.1 理解对象
#### 6.1.1 属性类型
##### 数据属性
- 有四个描述其行为的特性：
- Configurable,是否可通过delete删除属性重新定义，Enumerable,是否可以通过for-in循环返回属性
- Writeale,属性值是否可被修改，Value属性的数据值  
修改属性默认特性，需要使用Object.defineProperty(), 接收三个参数
##### 访问器属性
- 不包含数据值，包含一对getter,setter函数，读取访问器属性，会调用getter函数，这个函数负责返回值，写入访问器属性时，会调用setter函数并传入新值，这个函数决定如何处理数据
- configurable, enumrable, get, set
```js
var book = {
  _year: 2004,
  edition: 1
}
Object.defineProperty(book, 'year', {
  get: function() {
    return this._year
  },
  set: function(newValue) {
    if(newValue > 2004) {
      this._year = newValue
      this.edition += newValue - 2004
    }
  }
})
book.year = 2005
console.log(book.edition) // 2
console.log(book.year) // 2005
```
#### 6.1.2 定义多个属性
```js
var book = {}
Object.defineProperties(book, {
  _year: {
    writable: true,
    value: 2004
  },
  year: {
    get: function() {
      return this._year
    },
    set: function newValue() {
      if(newValue > 2004) {
        this._year = newValue
      }
    }
  }
})
```

#### 6.1.3 获取属性的特性
`Object.getOwnPropertyDescriptor(book, '_year')` 得到一个对象，包括'configurable, enumerable, get, set/ writable, value'

### 6.2 创建对象

#### 6.2.1 工厂模式
```js
function createPerson(name, age, job) {
  var o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function() {
    alert(this.name)
  }
  return o
}
var person1 = createPerson('Nicholas', 29, 'Software Engineer')
person1.sayName()
```

#### 6.2.2 构造函数模式
```js
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function() {
    alert(this.name)
  }
}
var person1 = new Person('Nicholas', 29, 'Software Engineer')
var person2 = new Person('Greg', 23, 'Doctor')
person1.sayName()
```
与工厂函数的区别，没有显式创建对象，直接将属性的方法赋给了this对象，没有return语句  
创建构造函数的实例，必须使用new操作符  
new做了一下操作，创建一个新对象，this指向新对象，新对象原型指向构造函数原型，执行代码，返回这个对象
```js
person1.constructor === Person // 原型链查找 true
person2.constructor === Person // 原型链查找 true
person1.__proto__.constructor === Person // true
person1 instanceof Person // true 原型链匹配
person1.sayName === Person2.sayName  // false
```
构造函数缺点，每个方法都要在实例上面重新创建一遍

#### 6.2.3 原型模式
```js
function Person() {

}
Person.prototype.name = 'Nicholas'
Person.prototype.age = 29
Person.prototype.job = 'Software Engineer'
Person.prototype.sayNmae = function() {
  alert(this.name)
}
var person1 = new Person()
person1.sayName() // 'Nicholas'
var person2 = new Person()
person2.sayName() // 'Nicholas'
alert(person1.sayName === Person2.sayName) // true
```
**创建一个函数，函数会自动创建一个proto属性，这个属性指向原型对象，原型对象会自动化获得一个constructor属性，constructor指向构造函数**  
从实例开始查找，找不到则向原型链上查找  
判断是不是实例上面的属性，用xxx.hasOwnProperty('xxx')
单独使用 In 操作符，用 'name' in Person 可以判断属性是否在 原型||实例 上  
可枚举实例属性，Object.keys()  
重写原型的方法  
```js
function Person() {}
Person.prototype = {
  name: 'xx',
  sayName: function() {
    console.log('sayName')
  }
  // 手动设置constructor: Person
}
// constructor属性不再指向Person了，等于重写了prototype
```
下面这个例子
```js
function Person() {}
var friend = new Person()
Person.prototype = {
  constructor: Person,
  name: 'nico',
  sayName: function() {
    console.log(this.name)
  }
}
var friend2 = new Person()
friend.sayName()  // typeError: friend.sayName is not a function， friend的prototype是之前的那个
friend2.sayName()  // 'nico'
// 重写原型对象切断了现有原型与任何已经存在的对象实例之间的联系
```
构造函数缺陷：省略了构造函数传递初始化参数这一环节，结果所有实例在默认情况下都取得了相同的值  
原型中很多属性是共享的，对于函数来说比较合适，对于基本值，甚至是对象，问题比较突出，因为是同一个引用，所以改变这个对象，所有实例上面的这个属性都会改变

#### 6.2.4 组合使用构造函数模式和原型模式

#### 6.2.5 动态原型模式
```js
function Person(name, age, job) {
  // 属性
  this.name = name
  this.age = age
  this.job = job
  // 方法
  if (typeof this.sayName !== 'function') {
    Person.prototype.sayName = function() {
      console.log(this.name)
    }
  }
}
var friend = new Person('nico', 29, 'Software Engineer')
friend.sayName()
```
只有在sayName方法不存在情况下，才会将它添加到原型中，这段代码会在初次调用构造函数时执行

#### 6.2.6 寄生构造函数模式
```js
function createPerson(name, age, job) {
  var o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function() {
    alert(this.name)
  }
  return o
}
var person1 = new createPerson('Nicholas', 29, 'Software Engineer')
person1.sayName()
```
与工厂函数相比，使用了new操作符

#### 6.2.7 稳妥构造函数模式

### 6.3 继承
#### 6.3.1 原型链
```js
Son.prototype = new Father()
```
Son构造函数的原型指向Fatcher的实例  
Son prototype 的 原型是 Father
Son构造函数的原型上没有construtor，因为原型被赋值语句改变了指针  
通过 instanceof 或者 isPrototype来判断原型链

###### 原型链实现继承
```js
function SuperType() {
  this.property = true
}
superType.prototype.getSuperValue = function() {
  return this.property
}

function SubType() {
  this.subProperty = false
}
// 继承
subType.prototype = new SuperType()

var instance = new SubType()
alert(instance.getSuperValue()) // false
```
原型链存在的问题
```js
function SuperType() {
  this.colors = ['red', 'blue', 'green']
}
function SubType() {
}

// 继承
SubType.prototype = new SuperType()

var instance1 = new SubType()
instance1.colors.push('black')
alert(instance1.colors)  // ['red', 'blue', 'green', 'black']

var instance2 = new SubType()
alert(instance2.colors)  // ['red', 'blue', 'green', 'black']
```
原型链继承缺点很明显，原型链上的属性值由所有SubType实例继承，更改其中一个实例的属性(其实就是原型链上的属性)，会影响到所有实例上的属性(其实也是原型链上的属性)

#### 6.3.2 借用构造函数
```js
function SuperType() {
  this.colors = ['red', 'blue', 'green']
}
function SubType() {
  SuperType.call(this) // 执行构造函数，只继承SuperType构造器上的属性(没有使用new调用，所以不存在原型继承哦)
}

var instance1 = new SubType()
instance1.colors.push('black')
alert(instance1.colors)  // ['red', 'blue', 'green', 'black']

var instance2 = new SubType()
alert(instance2.colors)  // ['red', 'blue', 'green']
```
因为SubType每次生成实例，都会先调用SuperType的构造函数，所以每个实例的color属性互相不影响

###### 传递参数
```js
function SuperType(name) {
  this.name = name
}
function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}
var instance = new SubType('nico', 19)
alert(instance.name, instance.age) // nico 19
```
缺点也很明显，属性，方法都在构造函数中定义，那函数复用也就无从谈起了

#### 6.3.3 组合继承
又称伪经典继承，指的是将原型链和借用构造函数的技术组合到一块，从而发挥二者之长的一种继承模式
```js
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function() {
  alert(this.name)
}

function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name) // 仅仅继承了实例属性(因为没有用new 调用)
  this.age = age
}

// 继承方法
SubType.prototype = new SuperType() // 继承构造函数实例，包括原型上的方法和实例属性（属性没有用到，造成一次浪费）
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function() {
  alert(this.age)
}

var instance1 = new SubType('nico', 22)
instance1.colors.push('black')
alert(instance1.colors)  // ['red', 'blue', 'green']
instance1.sayName() // 'nico'
instance1.sayAge() // 22
```
避免了原型链和借用构造函数的缺陷，instanceof 和 isPropertyof() 能够用于识别基于组合继承创建的对象  
缺点，两次调用了构造函数，有一次造成了属性的浪费

#### 6.3.4 原型式继承

#### 6.3.5 寄生式继承

#### 6.3.6 寄生组合式继承
通过构造函数继承属性，通过原型链混成的形式继承方法（利用object.create方法）
```js
function inheritPrototype(subType, superType) {
  var prototype = object.create(superType.prototype) // prototype对象的原型指向了superType的原型
  prototype.constructor = subType  // 子类拥有自己的构造器
  subType.prototype = prototype  // 子类的原型指向prototype, 而prototype的原型又指向了superType的原型
}
```
```js
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function() {
  alert(this.name)
}

function SubType(name, age) { 
  SuperType.call(this, name) // 只继承SuperType的实例属性，并传参
  this.age = age
}
inheritPrototype(SubType, SuperType) // 自定义原型链的指向
SubType.sayAge = function() {
  alert(this.age)
}
```

### 6.4 总结

## 第7章 函数表达式
函数声明，函数声明存在函数提升
```js
function sayName (name) {
  console.log(name)
} 
// function 是关键字， sayName是标识符
sayName.name // sayName
```
函数表达式
```js
var sayName = function (name) {
  console.log(name)
}
```
这种形式看起来像常规的变量赋值语句，即创建一个函数，并把它赋值给变量sayName  
这种情况下创建的函数叫做匿名函数(anonymous function), 因为function 关键字后面没有标识符(匿名函数有时候也叫拉达姆函数)  

**函数声明，如果重复声明，后面的声明会覆盖前面的声明**
**在把函数当成值来使用的时候，都可以使用匿名函数，但这并不是匿名函数的唯一用途**

### 7.1 递归
递归函数是在一个函数通过名字调用自身的情况下构成的
```js
function factorial(num) {  // factorial是阶乘的意思
  if (num <= 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}
```
这是一个经典的递归阶乘
```js
var anotherFactorial = factorial
factorial = null
alert(anotherFactorial(4)) // 出错
```
在调用anotherFactorial时，必须要执行factorial，但是factorial已经是null了，所以报错  
上述赋值赋值语句，即声明了 一个  函数表达式  

可以用arguments.callee解决函数调用自身出错的情况
```js
function factorial(num) {
  if (num <= 1) {
    return 1
  } else {
    return num * arguments.callee(num - 1)
  }
}
```

### 7.2 闭包
以下述代码为例  
比较两个对象的属性值，并进行排序
```js
function createComparisonFunction(propertyName) {
  return function (object1, object2) {
    var value1 = object1(propertyName)
    var value2 = object2(propertyName)
    if (value1 < value2) {
      return -1  // 小在大前面，不交换顺序，升序排序
    } else (value > value) {
      return 1
    } else {
      return 0
    }
  }
}
```
即便在别的地方调用了这个返回的函数，我们仍然能够获取到PropertyName这个变量

**当函数第一次被调用时，会创建一个执行环境(execution context) 及相应的作用域链，并把作用域链赋值给一个特殊的属性[[scope]]，然后，使用this， arguments和其他命名参数的值来初始化函数的活动对象(activation object), 在作用域链中，外部函数的活动对象始终处于第二位，外部函数的外部函数的活动对象处于第三位，...... 直到作用域链终点的全局执行环境(即变量的查找过程)**

在函数执行过程中，为了读取和写入变量的值，就需要在作用域链查找变量

```js
var compare = createComparisonFunction('name')
var result = compare({name: 'nico'}, {name: 'luffy'})
```
在匿名函数从 createComparisonFunction() 中被返回后，它的作用域链被初始化为包含createComparisonFunction() 函数的活动对象和全局变量对象，这样，匿名函数就可以访问在 createComparisonFunction() 中定义的所有变量，更为重要的是，createComparisonFunction() 函数在执行完毕后，其活动对象也不会被销毁，因为匿名函数的作用域链仍然在引用这个活动对象。换句话说，当createComparisonFunction() 函数返回后，其执行环境的作用域链会被销毁，但它的活动对象仍然留在内存中，直到匿名函数被销毁后，createComparisonFunction()的活动对象才会被销毁，例如:
```js
// 创建函数
var compareNames = createComparisonFunction('name')
// 调用函数
var result = compareNames({name: 'nico'}, {name: 'luffy'})
// 解除对匿名函数的引用(以便释放内存)
compareNames = null
```

![执行环境与作用域链](../images/pro_js/execution_context.jpg)

上图展示了调用compareNames()的过程中产生的作用域链之间的关系，compareNames的执行环境中有三个变量，object1,object2,arguments，但同时又引用了createComparisonFunction作用域的值，因此，createComparisonFunction的活动对象也被推进了执行环境，，而所有函数的作用域链末端都有个全局执行的环境

#### 7.2.1 闭包与变量

#### 7.2.2 关于this对象
this是基于函数的执行环境绑定的，
```js
var name = 'The Window'
var object = {
  name: 'My Object',
  getNameFunc: function() {
    return function() {
      return this.name
    }
  }
}
alert(object. getNameFunc()()) // 'The Window'，在非严格模式下
```
object包括一个方法getNameFunc，这个函数返回一个匿名函数，而匿名函数又返回this.name  
执行` object.getNameFunc() ` 会立即返回一个函数,因此调用`object.getNameFunc()()`就会立即调用它返回的函数，结果就是返回一个字符串  
这个例子返回的是`The Window`，即全局name的值，为什么匿名函数没有取得包含作用域(或外部作用域)的this对象呢？  

**每个函数被调用的时候，其活动对象都会自动取得两个特殊变量: this和arguments，内部函数在搜寻这两个变量时，只会搜到其活动变量为止，因为返回的匿名函数外部的活动变量是window?**
改造：
```js
var name = 'The Window'
var object = {
  name: 'My Object',
  getNameFunc: function() {
    var that = this
    return function() {
      return that.name
    }
  }
}
alert(object. getNameFunc()()) 
```
在定义匿名函数之前，我们把this对象赋给了一个名叫that的变量，即使在函数返回之后，闭包也可访问这个变量，  
通过`that = this`这个赋值语句，匿名函数的活动对象的变量`that`引用着`getNameFunc()`，因此，匿名函数的执行环境就延伸到了`getNameFunc()`，因此可以获得`getNameFunc`的`this`变量  

> 在几种特殊的情况下，this的值可能会意外的改变
```js
var name = 'The Window'
var object = {
  name: 'My Object',
  getName: function() {
    return this.name
  }
}
// 调用
object.getName()
(object.getName)()
(object.getName = object.getName)()
```
第一行代码像平常一样调用了object.getName()，返回的是My Object  
第二行代码在调用这个方法之前加了括号，加上括号之后，就好像在引用一个函数，但this的值得到了维持，因为object.getName和(object.getName)的定义是相同的  
第三行代码先执行了一条赋值语句，然后再调用赋值后的结果，因为这个函数表达式的值是函数本身，所以this的值不可能得到维持，所以就返回了`The Window` ？？？

#### 7.2.3 内存泄漏
```js
function assignHandler() {
  var element = document.getElementById('someElement')
  element.onClick = function() {
    alert(element.id)
  }
}
```
以上代码创建了作为element元素事件处理的闭包，而这个闭包又创建了循环引用？？？(事件在第13章)，匿名函数保存了一个对assignHandler活动对象的引用，因此导致无法减少element的引用数，只要匿名函数存在，element的引用数至少为1，因此它所占用的内存就永远不会被回收
```js
function assignHandler() {
  var element = document.getElementById('someElement')
  var id = element.id
  element.onClick = function() {
    alert(id)
  }
  element = null 
}
```
稍微改造一下，但是并不能完全解决内存泄漏问题

### 7.3 模仿块级作用域
匿名函数
```js
(function() {
  // 这里是块级作用域
})()
```
```js
var someFunction = function() {
  // 这里是块级作用域
}
someFunction()
```
```js
function () {
  // 这里是块级作用域
}() // 报错
```
这段代码会报语法错误，因为Javascript将function关键字当作一个函数声明的开始，而函数声明后面不能跟圆括号，然而，函数表达式的后面可以跟圆括号，要将函数声明转换成函数表达式，只需要像下面这样给它加上圆括号即可
```js
(function() {
  // 这里是块级作用域
})()
```
无论在什么地方，只要临时需要一些变量，就可以使用私有作用域，例如
```js
function outputNumbers(count) {
  (function() {
    for(var i = 0; i < count; i ++) {
      alert(i)
    }
  })()
  alert(i) // 报错
}
```

### 7.4 私有变量
js中没有私有成员的概念，所有对象属性都是公有的，不过有私有变量的概念，任何函数中定义的变量，都可以认为是私有变量，因为不能在函数的外部访问这些变量  
私有变量包括函数的参数，局部变量和函数内部定义的其他函数
```js
function add(num1, num2) {
  var sum = num1 + num2
  return sum
}
```
add函数包括三个局部变量，num1,num2,sum，在函数内部可以访问这些变量，但在函数外部访问不到  
如果在函数内部创建一个闭包，那么闭包通过自己的作用域链也可以访问这些变量，利用这一点，就可以创建用于访问私有变量的公有方法  
我们把有权访问私有变量和私有函数的公有方法成为特权方法  
有两种在对象上创建特权方法的方式，第一种是在构造函数中定义特权方法，基本模式如下： (第二种是私有作用域方式)
```js
function MyObject() {
  // 私有变量和私有函数
  var privateVariable = 10
  function privateFunction() {
    return false
  }
  // 特权方法
  this.publicMethod = function () {
    privateVariable ++
    return privateFunction()
  }
}
```
对于这个例子，变量privateVariable和函数privateFunction()只能通过特权方法publicMethod()来访问

#### 7.4.1 静态私有变量
```js
(function() {

})()
```

#### 7.4.2 模块模式
```js
var singleton = function() {  // singleton是单例的意思
  // 私有变量和私有函数
  var privateVariable = 10
  function privateFunction() {
    return false
  }
  // 特权/公有方法和属性
  return {
    publicProperty: true,
    publicMethod: function() {
      privateVariable ++
      return privateFunction()
    }
  }
}
```
这个函数返回的对象字面量只包含公开的属性和方法

#### 7.4.3 增强的模块模式

### 7.5 小结
- 函数表达式不同于函数声明，函数声明要求有名字，但是函数表达式并不需要，没有名字的函数表达式也叫匿名函数
- 在函数内部定义了其他函数时，就创建了闭包，闭包有权访问包含函数内部的所有变量
- 通常，函数的作用域及其所有变量都会在函数执行结束后被销毁，但是，当一个函数返回了一个闭包时，这个函数的作用域将一直在内存中保存到闭包不存在为止

## 第8章 BOM
### 8.1 window对象
BOM核心是window，它表示浏览器的一个实例，在浏览器中，window扮演着双重角色，它既是javascript访问浏览器窗口的一个接口，又是ECMAScript规定的Global对象(?)，这意味着在网页中定义的任何一个对象，变量和函数，都已window作为其Global对象，因此有权访问parseInt()等方法
#### 8.1.1 全局作用域
```js
var age = 22
function sayAge() {
  alert(this.age)
}
alert(window.age) // 29
sayAge() // 29
window.sayAge() // 29
```

#### 8.1.2 窗口关系及框架

#### 8.1.3 窗口位置
```js
screenTop screenLeft ?
screenX screenY ?
```

#### 8.1.4 窗口大小
```js
innerHeight innerWidth
outerHeight outerWidth
调整窗口 window.resizeTo(100, 100) ?
```

#### 8.1.5 导航和打开窗口
`window.open()`  
接收四个参数，要加载的URL，窗口目标，一个特性字符串，一个表示新页面是否取代浏览器历史记录中当前加载页面的布尔值  
如果给window.open传递的第二个参数并不是一个已经存在的窗口或者框架，那么该方法会对第三个参数上传入的字符串创建一个新窗口或标签页  
第三个参数包含` left top width height resizable scrollbars ` 等等，如
```js
window.open('http://baidu.com', 'height=500, width=200, top=10, left=20, resizable=yes')
// 打开与关闭
var newWindow = window.open('http://baidu.com', 'height=500, width=200, top=10, left=20, resizable=yes')
newWindow.resizeTo(500, 500) // 调整大小
newWindow.moveTo(10,10) // 移动位置
newWindow.close() // 关闭窗口，仅限通过window.open()打开的窗口
```
安全限制：曾经有一段时间，广告商经常会把弹出窗口打扮成系统对话框的模样，引诱用户去点击其中的广告，浏览器有各自的屏蔽策略

#### 8.1.6 间歇调用与超时调用
```js
// 不推荐
setTimeout('alert("hello word")', 1000)  // 如果第一个参数传入字符串，则会像eval()函数表现一致，即执行字符串里的代码
// 推荐的写法
setTimeout(function() {
  alert('hello world')
}, 1000)
```
setTimeout第二个参数是一个表示等待多长事件的毫秒数，但经过该时间的指定的代码并不一定会执行，js是单线程解释器，因此一段时间只能执行一段代码，为了控制要执行的代码，就有一个javascript任务队列，这些任务会按照它们被添加的顺序执行，setTimeout第二个参数告诉js再过多长时间把当前任务添加的js任务队列，如果队列是空的，那么添加的代码会立即执行，如果队列不是空的，那么它就要等前面的代码执行完了以后再执行  

调用setTimeout之后，该方法会返回一个数值ID，这个超时ID是计划执行代码的唯一标识符，可以通过它取消超时调用。要取消尚未调用的超时调用计划，可以调用clearTimeout()方法并将相应的超时ID作为参数传递给它
```js
// 设置超时调用
var timeId = setTimeout(function() {
  alert('hello world')
})
// 把它取消
clearTimeout(timeoutId)
```
在设置超时调用之前调用clearTimeout，就像什么都没有发生一样  

间歇调用setInterval,接收参数与setTimeout相同  
调用setInterval也同样会返回一个间歇调用ID，该ID可用于在将来某个时间取消间歇调用  
取消间歇调用的重要性要远远超过取消超时调用，因为在不加干涉的情况下，间歇调用会一直执行到页面卸载
```js
var num = 0
var max = 10
var interval = null

function incrementNumber() {
  num ++
  // 执行次数达到max指定值，则取消尚未执行的调用
  if (num === max) {
    clearInterval(intervalId)
    alert('Done')
  }
}

intervalId = setInterval(incrementNumber, 500)
```
可以使用超时调用，模拟间歇调用，最好不要使用间歇调用

#### 8.1.7 系统对话框
`alert() confirm() prompt()`可以调用系统对话框向用户展示信息，外观由操作系统或浏览器决定，通过这几个方法打开的对话框都是同步和模态的，显示这些对话框的时候代码hui停止执行，关掉这些对话框代码又恢复执行  
异步执行的对话框
```js
window.print() // 打印
window.find() // 查找页面中的值
```

### 8.2 location对象
location对象是一个很特别的对象，因为它既是window对象的属性，也是document对象的属性    

| 属性名 | 例子 | 说明 
| ----- | ---------- | ------------- 
| hash  | #mine |
| host  | m.com:80 |
| hostname | m.com |
| href | m.com/user |
| pathname | /user |
| port | 80 |
| protocol | http: |
| search | ?name=li |

#### 8.2.1 查询字符串参数
search属性并不能逐个访问其中的每个查询字符串参数，我们可以创建一个函数，用以解析查询字符串，然后返回包含所有参数的一个对象
```js
function getQueryStringArgs() {
  // 取得查询字符串并去掉开头的?
  var qs = location.search.length > 0 ? location.search.substring(1) : ''
  var args = {} // 保存数据的对象
  // 取得每一项，即保存到数组
  var items = qs.length > 0 ? qs.split('&') : []
  var len = items.length

  for (var i = 0; i < len; i ++) {
    var item = items[i].split('=') // item也是一个被分割的数组
    var name = decodeURIComponent(item[0]) // 字符串是被编码过的
    var value = decodeURIComponent(item[1])
    if (name.length) {
      args[name] = value
    } 
  }

  return args
}
```

#### 8.2.2 位置操作
location.href, hash, host, hostname, port, search 等等都会在浏览器产生历史记录，可以通过后退返回  
要禁用这种行为，可以使用`replace`  
`reload` 可以重新加载当前页面

### 8.3 navigator对象
|属性或方法  | 说明
|--------- | ---------
| userAgent | 浏览器的用户代理字符串
|... | ...

#### 8.3.1 检测插件
```js
function hasPlugin(name) {
  name = name.toLowerCase()
  for (var i = 0; i < navigator.plugins.length; i ++) {
    if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
      return true
    }
  }
  return false
}
alert(hasPlugin('Chrome PDF Plugin'))
```

#### 8.3.2 注册处理程序

### 8.4 screen对象
获取的是设备屏幕相关属性
| 属性 | 说明
| -------- | ---------
| width |
| height |

### 8.5 history对象
```js
history.go(1)
history.go(-1)
history.go(2)
history.go('baidu.com') // 只要浏览器历史记录里有这个值，就会跳转
// 代替go
history.forward()
history.back()
history.length // 历史记录的条数 ？？
```

### 8.6 小结

## 第9章 客户端检测
由于浏览器之间的差异

### 9.1 能力检测
识别浏览器的能力

### 9.2 怪癖检测(quirks detection)

### 9.3 用户代理检测
navigator.userAgent
Mozilla/版本号 [语言] (平台：加密类型) 
`"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"`

### 9.4 总结

## 第10章 DOM

### 10.1 节点层次
`<html>`元素称之为文档元素
![文档树解构](../images/pro_js/document_tree.jpg)

#### 10.1.1 Node类型
*nodeName和nodeValue属性*  
节点关系使用childNodes属性，其中包含一个NodeList对象，类数组对象，可以使用`Array.prototype.slice(xxx, 0)` 或`Array.from()`将其转换成数组对象  
每个节点都有parentNode, previousSibling, nextSibling属性  
父节点的firstChild和 lastChild分别指向父节点的第一个和最后一个节点
```js
someNode.childNodes[0]
someNode.previousSibling()
```

操作节点  
`appendChild()` 末尾增加节点  
`insertBefore()` 插入到指定节点   
`replaceChild()`接收两个参数，要插入的节点和要替换的节点  
`cloneNode()`  

#### 10.1.2 Document类型  
Document对象是window对象的一个属性   
Document节点具有以下特征：  
nodeType为9，nodeName为'#document',nodeValue为null,parentNode为null,ownerDocument为null

文档的子节点：
```js
var html = document.documentElement  // 取得对<html>的引用
var body = document.body  // 取得对<body>的引用
var doctype = document.doctype  // 取得对<!DOCTYPE>的引用
var originTitle = document.title // 取得文档标题
document.title = 'New Page' // 设置文档标题
var url = document.URL // 取得完整的URL
var domain = document.domain // 取得域名
```

查找元素  
getElementById,getElementByTagName......  
文档写入  
write,open

#### 10.1.3 Element类型
Element节点具有以下特征：  
nodeType, nodeName, nodeValue值为null, parentNode可能是Document或者Element  
```js
if (element.tagName.toLowerCase() === 'div') {
  // 在此执行某些操作
}
``` 
##### 1.HTML元素
##### 2.取得属性
```js
var  div = document.getElementById('myDiv')
alert(div.getAttribute('id')) // 获取id属性的值
```
##### 3.设置属性
`setAttribute`
##### 4.Attributes属性
##### 5.创建元素
`document.createElement`
##### 6.元素的子元素
`childNodes`  
`nodeType === 1`表明是元素节点

#### 10.1.4 Text类型
nodeType是3，nodeName是'#text', nodeValue的值为节点所包含的文本，parentNode是一个Element，没有子节点
- 创建文本节点，规范化文本节点，分割文本节点

#### 10.1.5 Comment类型
#### 10.1.6 CDATASection类型
#### 10.1.7 DocumentType类型
#### 10.1.8 DocumentFragment类型
#### 10.1.9 Attr类型

### 10.2 DOM操作技术
#### 10.2.1 动态脚本
`<script>`
#### 10.2.2 动态样式
`<style>``<link>`
#### 10.2.3 操作表格
`<table>`元素是HTML中最复杂的结构之一
```html
<table>
  <tbody>
    <tr>
      <td>Cell 1,1</td>
      <td>Cell 2,1</td>
    </tr>
    <tr>
      <td>Cell 1,2</td>
      <td>Cell 2,2</td>
    </tr>
  </tbody>
</table>
```

#### 10.2.4 使用NodeList

### 10.3 小结

## 第11章 DOM扩展
### 11.1 选择符API
#### 11.1.1 querySelector()方法
#### 11.1.2 querySelectorAll()方法
#### 11.1.3 matchesSelector()方法

### 11.2 元素遍历
### 11.3 HTML5
#### 11.3.1 与类相关的扩充
getElementsByClassName
#### 11.3.2 焦点管理
#### 11.3.3 HTMLDocument的变化
#### 11.3.4 字符集属性
#### 11.3.5 自定义数据属性
要添加前缀 data-
#### 11.3.6 插入标记
innerHTML outerHTML
#### 11.3.7  scrollIntoView()方法

### 11.4 专有扩展
#### 11.4.1 文档模式
#### 11.4.2 children属性
#### 11.4.3 contains()方法
#### 11.4.4 插入文本
innerText outText
#### 11.4.5 滚动

### 11.5 小结

## 第12章 DOM2和DOM3
### 12.1 DOM的变化
### 12.2 样式
#### 12.2.1 访问元素的样式
支持style属性的HTML元素在JS中都有一个对应的style属性，对于使用短划线-的属性要使用驼峰命名法  
虽然style对象能够提供支持style特性的任何元素的样式信息，但它不包含那些从其他样式表层叠而来并影响到当前元素的样式信息  
DOM2级样式提供了getComputedStyle()方法，可以传入两个参数
```js
let elem1 = document.getElementById("elemId");
let style = window.getComputedStyle(elem1, null);

// 它等价于
// let style = document.defaultView.getComputedStyle(elem1, null);
```
#### 12.2.2 操作样式表
#### 12.2.3 元素大小
偏移量(offset dimension)
```js
offsetHeight // 垂直方向
offsetWidth // 水平方向，包括元素宽度，滚动条，左右边框宽度
offsetLeft // 左外边框至元素左内边框距离
offsetTop // 元素上外边框至元素上内边框距离
```
![图示](../images/pro_js/offset.jpg)  

客户区大小(client dimension)
```js
clientHeight // 不包含边框的元素高度
clientWidth
```
![client dimension](../images/pro_js/client_dimension.jpg)

滚动大小(scroll dimension)
```js
scrollHeight // 元素内容总高度(真实高度，>=scrollTop)
scrollWidth
scrollLeft 
scrollTop  // 当前元素页面显示区域距离顶部距离，包含滚动条，<= scrollHeight，除了html元素其他为0？
document.documentElement.scrollHeight // 带有滚动条的页面总高度 <html>
document.documentElement.scrollTop  // 视口
document.body.scrollHeight // 带有滚动条的页面总高度 <body> , 可以替代上面的方式
document.body.scrollTop // 视口
```
![client dimension](../images/pro_js/scroll_dimension.jpg)

元素大小  
getBoundingClientRect(), 这个方法会返回一个矩形对象，包含四个属性: left,top,right,bottom, 获取元素在页面中相对于视口(视觉区域)的位置

### 12.3 遍历
dom节点的遍历
#### 12.3.1 NodeIterator
#### 12.3.2 TreeWalker

### 12.4 范围
#### 12.4.1 DOM中的范围
#### 12.4.2 IE8及更早版本的范围

### 12.5 小结
DOM2级规范定义了一些模块，用于增强DOM1级  
DOM2级样式模块主要针对操作元素的样式信息而开发，其特性简洁总结如下：  
- 每个元素有一个关联的style对象，用来确定和修改元素的行内样式
- 确定某个元素的计算样式，使用getComputedStyle()

## 第13章 事件
### 13.1 事件流
#### 13.1.1 事件冒泡(event bubbling)
事件开始由最具体的元素(文档嵌套层次最深的那个节点)接收，然后逐级向上传播到较为不具体的节点(文档)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <div>Click me</div>
</body>
</html>
```
当点击了div元素，那么这个click事件会按照下面顺序传播：div -> body -> html -> document

#### 13.1.2 事件捕获(event capturing)
事件捕获的思想是不太具体的节点更早接收事件，而具体的节点应该最后接收到事件，事件捕获的用意在于在事件到达预定目标之前捕获它  
当点击了div元素，会以下面顺序触发click事件：document -> html -> body -> div  
不过大部分浏览器是从window对象开始的

#### 13.1.3 DOM事件流
DOM2级事件规定的事件流包括三个阶段，事件捕获阶段，处于目标阶段和事件冒泡阶段

### 13.2 事件处理程序
事件就是用户或者浏览器自身执行的某种动作，如click, load和mouseover都是事件的名字，而相应某个事件的函数就叫做事件处理程序(或事件监听器)，事件处理程序的名字以“on”开头，因此click事件的处理程序就是onclick, load的事件处理程序就是onload
#### 13.2.1 HTML事件处理程序
```js
// 通过指定onclick特性并将一些Javascript代码作为它的值来定义的，因为这个值是Js,所以不能再其中使用未经转义的HTML语法字符，如&，双引号"", <或>
<input type="button" value="Click Me" onclick="alert('clicked !')">

// 调用在其他页面定义的脚本
<input type="button" value="Click Me" onclick="showMessage()">
  <script>
    function showMessage() {
      alert('Hello World')
    }
  </script>
```
指定事件处理程序会创建一个封装着元素属性值的函数，这个函数有一个局部变量event，也就是事件对象  
如果用户在解析showMessage函数之前就单击了按钮，就会引发错误，可以使用try...catch把showMessage包裹起来  
HTML指定事件处理程序一个缺点是HTML与JS代码紧密耦合，如果要更换事件处理程序，要同时改动HTML代码和Javascript代码，更多转而使用JS指定事件处理程序

#### 13.2.2 DOM0级事件处理程序
每个元素都有自己的事件处理程序属性，这些属性通常小写，如onclick，将这种属性的值设置为一个函数，就可以指定事件处理程序
```js
var btn = document.getElementById('myBtn')
btn.onclick = function() {
  alert('Clicked')
}
```
使用DOM0级方法指定的事件处理程序是在元素的作用域中执行，换句话说，程序中的this引用当前元素
```js
var btn = document.getElementById('myBtn')
btn.onclick = function() {
  alert(this) // myBtn
}
btn.onclick = null // 删除事件处理程序
```

#### 13.2.3 DOM2级事件处理程序
"DOM2级事件处理程序"定义了两个方法，用于指定和删除事件处理程序的操作：addEventListener() 和 removeEventListener()，所有DOM节点都包含这两个方法，他们接收三个参数，要处理的事件名，作为事件处理的函数，一个布尔值，布尔值如果是true，表示在捕获阶段调用事件处理程序，若为false，则在冒泡阶段调用事件处理程序，默认是false
```js
var btn = document.getElementById('myBtn')
btn.addEventListener("click", function() {
  alert(this.id)
}, false)
btn.removeEventListener("click", function() { // 没有用， 参数必须要与传入addEventListener相同
  alert(this.id)
}, false)
```
```js
var btn = document.getElementById('myBtn')
var handler = function() {
  alert(this.id)
}
btn.addEventListener("click", handler, false)
btn.removeEventListener("click", handler, false) // 有效
```

#### 13.2.4 IE事件处理程序
attachEvent, detachEvent, 两个参数，第一个参数加on

#### 13.2.5 跨浏览器的事件处理程序

### 13.3 事件对象
触发DOM的某个事件时，会产生一个事件对象event, 这个对象包含着所有与事件相关的信息，包括导致事件的元素，事件的类型，及其他与特定事件相关的信息，例如，鼠标操作导致的事件对象中，会包含鼠标位置的信息，而键盘操作导致的事件对象中，会包含与按下的键有关的信息   
只有在事件处理程序执行期间，event

#### 13.3.1 DOM中的事件对象
| 属性/方法      |  类型      | 读/写   | 说明
| -------       | ---------- | ----------- | ---------
| bubbles       |  Boolean   |  只读   | 表示事件是否冒泡
| cancelable    | Boolean    |  只读   |  表示是否可以取消事件的默认行为
| currentTarget | Element    |  只读   | 其事件处理程序当前正在处理事件的那个元素
| detail        |  Integer   |  只读   |  与事件相关的细节信息
| eventPhase    | Integer    |  只读   | 调用事件处理程序的阶段，1表示捕获，2表示处理目标，3表示冒泡阶段
| preventDefault  |  Function | 只读   | 取消事件默认行为，cancelable是true，可以使用这个方法
| stopPropagation |  Function |  只读  |  取消事件的进一步捕获或冒泡，如果bubbles为true，可以使用这个方法
| stopImmediatePropagation  |  Function  | 只读  |  取消事件的进一步捕获或冒泡，同时阻止任何事件处理程序被调用(DOM3级事件中新增)
| target        | Element    | 只读    | 事件的目标
| type          |  String    |  只读   |  触发事件的类型

在事件处理程序内部，对象this始终等于currentTarget的值，而target只包含事件的实际目标，如果直接将事件处理程序指定给了目标元素，则this, currentTarget, target包含相同的值
```js
var btn = document.getElementById('myBtn')
btn.onclick = function(event) {
  alert(event.currentTarget === this)  // true
  alert(event.target === this)  // true
}
```
由于click事件的目标是按钮，因此这三个值是相等的  
如果事件处理程序在父元素body上面，但是点击了btn元素
```js
document.body.onclick = function() {
  alert(event.currentTarget === document.body) // true
  alert(this === document.body) // true
  alert(event.target === document.getElementById('myBtn')) // true
}
```
this和currentTarget等于document 因为事件处理程序是注册到这个元素上的，而target却等于按钮元素，因为它是target的真正目标  
当需要通过一个函数处理多个事件时，可以使用type属性
```js
var btn = document.getElementById('myBtn')
var handler = function(event) {
  switch(event.type) {
    case "click":
      alert('Clicked!')
      break
    case "mouseover":
      event.target.style.backgroundColor = 'red'
      break
    case "mouseout":
      event.target.style.backgroundColor = ''
      break
  }
}
btn.onclick = handler
btn.mouseover = handler
btn.mouseout = handler
```
阻止事件默认行为，如链接的默认行为  
阻止事件的传播，即取消事件的冒泡与捕获

#### 13.3.2 IE中的事件对象
#### 13.3.3 跨浏览器的事件对象

### 13.4 事件类型
DOM3级事件规定了以下几类事件
- UI(User Interface，用户界面)事件，当用户与界面上的元素交互时触发
- 焦点事件，当元素获得或者失去焦点时触发
- 鼠标事件，当用户通过鼠标在页面执行操作时触发
- 滚轮事件
- 文本事件
- 键盘事件
- 合成事件，输入法输入字符时触发
- 变动事件，底层DOM结构发生变化时触发

#### 13.4.1 UI事件
- load 页面加载完，在window上面触发，包括所有图像,js,css
- unload 页面完全卸载在window上面触发
- error JS发生错误时在window上触发
- resize
- scroll 

#### 13.4.2 焦点事件
- blur 元素失去焦点时触发，这个事件不会冒泡
- focus 元素获得焦点时触发，这个事件不会冒泡
- focusin 元素获得焦点时触发，这个事件会冒泡
- focusout

#### 13.4.3 鼠标与滚轮事件
- click
- dbclick
- mousedown
- mouseenter
- mouseleave
- mousemove
- mouseout
- mouseover
- mouseup   

鼠标事件的事件对象
- 客户区坐标位置，clientX, clientY，在视口中的位置
- 页面坐标位置， pageX, pageY，页面本身包括滚动区域，pageX = clientX + document.documentElement.scrollLeft/document.body.scrollLeft
- 屏幕坐标位置，相对于整个电脑屏幕的位置，screenX, screenY
- 修改键？
- 相关元素？
- 鼠标按钮
- 更多的事件信息

#### 13.4.4 键盘与文本事件
- keydown 用户按键盘任意键触发，按住不发会重复触发
- keypress 用户按键盘字符键触发，按住不放会重复触发
- keyup 用户释放键盘上的键触发  

键码，keydown,keyup事件发生时，event对象keyCode属性会包含一个代码，与键盘上一个特定的键对应

###### textInput事件
event对象有一个inputMethod属性，1表示键盘输入，2表示粘贴的，手写，语音...

#### 13.4.5 复合事件(composition event)
#### 13.4.6 变动事件
#### 13.4.7 HTML5事件
- ...hashchange
#### 13.4.8 设备事件
监听设备方向变化与移动
#### 13.4.9 触摸与手势事件
##### 1.触摸事件
- touchstart, touchmove, touchend, touchcancel 
- 触摸事件也有event对象
##### 2.手势事件

### 13.5 内存和性能
添加过多事件处理程序会影响页面的整体运行性能，导致这一问题的原因是多方面的，首先，每个函数都是对象，都会占用内存，内存中对象越多，性能就越差，其次，必须事先指定所有事件处理程序而导致的DOM访问次数，会延迟整个页面的交互就绪时间，从如何利用好事件处理程序的角度来说，还是有一些方法可以提高性能的

#### 13.5.1 事件委托
事件委托利用事件冒泡原理，将事件处理程序添加到最外面的元素
```js
<ul id="myList">
  <li id="something">Go somewhere</li>
  <li id="somewhere">Do something</li>
  <li id="sayHi">Say Hi</li>
</ul>
var list = document.getElementById("myList")
list.addEventListener("click", function(event) {
  var target = event.target  // target 捕获到触发事件的最小元素
  switch(target.id) {
    case "something":
      document.title = "change the document title"
      break
    case "somewhere":
      location.href = "xblcity.com"
      break
    case "sayHi":
      alert("hi")
      break
  }
})
```
由于事件会冒泡，最终都会由这个函数处理

#### 13.5.2 移除事件处理程序
当你知道某个元素即将被移除，最好手动移除事件处理程序

### 13.6 模拟事件
#### 13.6.1 DOM中的事件模拟
#### 13.6.2 IE中的事件模拟

### 13.7 小结

## 第14章 表单脚本
### 14.1 表单的基本知识
在HTML中，表单是由`<form>`元素来表示的，而在javascript中，表单对应的是HTMLFormElement类型，HTMLFormElement继承了HTMLElement，因而与其他HTML元素有相同的默认属性，但是,HTMLFormElement也有自己独有的方法和属性  

| 属性/方法 |  说明 
| ------  | ------
| action  |  接收请求的URL
| method  |  要发送的HTTP请求类型，通常是get或者post
| name    |  表单的名称
| submit() | 提交表单
| reset()  | 将所有表单域重置为默认值

#### 14.1.1 提交表单
使用input或者button都可以定义提交按钮，只要把type设置为submit即可
```js
<input type="submit" value="Submit Form"/>
<button type="submit">Submit Form</button>
// 图像按钮
<input type="image" src="button.gif">
```
校验表单数据，并阻止默认行为
```js
var form = document.getElementById("myForm")
form.addEventListener('submit', function(e) {
  // 阻止默认事件
  e.preventDefault()
})
// 或者
form.submit() // 不会触发submit事件，
```

#### 14.1.2 重置表单
表单控件type时reset或者添加reset事件或者给formElement调用reset()方法

#### 14.1.3 表单字段
###### 1.共有的表单字段属性
|  属性  |  作用
|  ----- | ------
| disabled | 布尔值，当前字段是否被禁用
| name    | 当前字段的属性
| type  |  当前字段的类型
| value  | 当前字段被提交给服务器的值，对文件字段来说，这个属性是只读的，包含着文件在计算机中的路径

也可以通过js动态修改属性值
```js
input.disabled = true
```
###### 2.共有的表单字段方法
focus()和blur()  
focus方法用于将浏览器的焦点设置到表单字段，即激活表单字段，使其可以响应键盘事件  
在页面加载完毕后，将焦点转移到表单的第一个字段，为此，可以监听表单的load事件，并在该事件发生时在表单的第一个字段调用focus方法
```js
window.addEventListener('load', function() {
  inputElement.focus()
})
```
HTML5增加了autofocus属性(布尔值)，设置该属性，不用js就可以自动把焦点移动到相应字段
```html
<input type="text" autofocus>
```
blur()使表单元素失去焦点

###### 2.共有的表单字段方法
blur,change,focus，change对于`<input/>`和`<textarea/>`元素，在他们失去焦点且value值改变时触发，对于`<select/>`元素，在其选项改变时触发  
focus和blur事件以某种方式改变用户界面，如文本框显示一个下拉选项菜单，或者在focus或者blur的时候改变它的样式  
change用于验证表单

### 14.2 文本框脚本
`<input/>`以及`<textarea/>`
```html
<input type="text" size="25" maxlength="50" value="initial value" />
```
size表示能显示的最大字符数，maxlength表示能输入的最大字符数，value用于设置文本框的初始值  
`<textarea/>`可以使用rows和cols属性，初始值必须要放在`<textarea>init value</textarea>`闭合标签内

#### 14.2.1 选择文本
select()，在文本框获得焦点时选择其所有文本
###### 1.select事件
###### 2.取得选择的文本
两个属性selectionStart，selectionEnd
```js
function getSelectedText(textbox) {
  return textbox.value.substring(textbox.selectionStart, textbox.selectionEnd)
}
```

#### 14.2.2 过滤输入
###### 1.屏蔽字符
```js
textbox.addEventListener('keypress', function(event) {
  if(!/\d/.test(value)) {  // 如果测试失败，屏蔽默认提交事件
    event.preventDefault()
  }
})
```
###### 1.操作粘贴板
| 剪贴板事件 | 作用
| --------   | ------
| beforecopy | 复制操作前触发
| copy       | 发生复制时触发
| beforecut  | 发生剪切操作前触发
| cut        |
| beforepaste|
| paste      |

#### 14.2.3 自动切换焦点
在用户填写完当前字段，自动将焦点切换到下一字段  
监听input的length值，达到某一临界点则将下一个input元素focus

#### 14.2.4 HTML5约束验证API
###### 1.必填字段
required
###### 2.其他输入类型
type = email/url
###### 3.数值范围
```html
<input type="number"  min="0" max="100" step="5" name="count" />
```
数值范围0-100，每次加减5，也可以用js限制
```js
input.stepUp()
input.stepUp(5)
input.stepDown()
input.stepDown(5)
```
###### 4.输入模式
pattern属性，这个属性是一个正则表达式，用于匹配文本框中的值  
例如，如果只想允许在文本字段中输入数值
```js
<input type="text" pattern="\d+" name="count" />
```

###### 5.检测有效性
```js
if (value.checkValidity()) {
  // 字段有效，继续
} else {
  // 字段无效
}
```
checkValidity()方法可以简单的告诉你字段是否有效，validity属性会告诉为什么有效或无效，这个对象包含一系列属性，每个属性返回一个布尔值，如  
valid,rangeOverflow,tooLong 等等

###### 6.禁用验证
novalidate属性

### 14.3 选择框脚本
`<select/>`与`<option/>`  
HTMLSelectElement还提供了下面属性和方法    
multiple，selectedIndex, size, options(是一个包含子元素的数组), add(newOption, relOption)  
HTMLOptionElement还有下面属性和方法
index, label, selected(布尔值,true表示被选中), value, text(选项的文本)

#### 14.3.1 选择选项
selected属性
#### 14.3.2 添加选项
```js
var newOption = document.createElement("option")
newOption.appendChild(document.createTextNode("Option Text"))
newOption.setAttribute("value", "Option Value")

selectbox.appendChild(newOption)
```
#### 14.3.3 移动和重排选项

### 14.4 表单序列化
表单提交期间，浏览器是怎样将数据发送给浏览器的  
- 对表单的名称和值进行URL编码，使用和号(&)分割
- 不发送禁用的表单字段
- 只发送勾选的复选框和单选按钮
- 不发送type为reset的button按钮
- 多选选择框中的每个选中的值单独一个条目
- 在单击提交按钮提交表单情况下，也会发送提交按钮，否则，不发送提交按钮
- select元素的值，就是选中的option的value特性的值

### 14.5 富文本编辑
在页面内嵌入一个包含空HTML页面的iframe  
designMode设置为on，整个文档就变得可编辑
#### 14.5.1 使用contenteditable属性
#### 14.5.2 操作富文本
#### 14.5.3 富文本选区
getSelection方法,document.getSelection()返回一个对象
#### 14.5.3 表单与富文本

### 14.6 小结

## 第15章 使用Canvas绘图
### 15.1 基本用法
先设置width与height属性值，单位px，然后获取绘图上下文(调用getContext()并传入上下文的名字)
```js
<canvas id="drawing" width="200" height="200"></canvas>
var drawing = document.getElementById("drawing")
var context = drawing.getContext("2d")
```

### 15.2 2D上下文
#### 15.2.1 填充和描边
填充，就是用指定的样式(颜色，渐变或图像)填充图形，描边，就是只在图形的边缘描线  
设置fillStyle以及strokeStyle

#### 15.2.2 绘制矩形
矩形是唯一一种可以直接在2D上下文中绘制的图形，方法包括`fillRect()``strokeRect()``clearRect()`，这三个方法都能接收四个参数，矩形的x坐标，y坐标，宽度，高度。单位都是像素
```js
var drawing = document.getElementById("drawing")
var context = drawing.getContext("2d")
// 绘制红色矩形, 注意，fillStyle要在fillRect前面，否则不生效，canvas默认颜色是黑色
context.fillStyle = "#ff0000"
context.fillRect(10, 10, 50, 50)
// 绘制半透明蓝色矩形,两个矩形会有重叠
context.fillStyle = "rgba(0,0,255,0.5)"
context.fillRect(30, 30, 50, 50)
// 清除一部分矩形
context.clearRect(40,40,10,10)
// 绘制线矩形边
context.strokeStyle = "#ddd"
context.strokeRect(10, 10, 50, 50)
```

#### 15.2.3 绘制路径
通过路径可以创建复杂的形状和线条，要绘制路径，首先要调用beginPath()方法，然后再调用下列方法实际的绘制路径  

|  方法  |  作用
|  ----- | -------
| arc(x,y,radius,startAngle,endAngle,counterclockwise) | 以(x,y)为圆心绘制弧线，半径为radius，设置起始终止角，最后一个是否按逆时针计算，false表示顺时针
| arcTo(x1,y1,x2,y2,radius) | 从上一点开始绘制一条弧线，到(x2,y2)为止，并且以给定的半径radius穿过(x1,y1)
| bezierCurveTo(clx,cly,c2x,c2y,x,y) | 从上一点开始绘制一条曲线，到(x,y)为止，并且(c1x,c1y)和(c2x,c2y)为控制点
| lineTo(x,y) | 从上一点绘制一条直线，到(x,y)为止
| moveTo(x,y) | 将绘图游标移动到(x,y)，不画线
| quadraticCurveTo(cx,cy,x,y) | 从上一点绘制一条二次曲线，到(x,y)为止，并且以(cx,cy)为控制点
| rect(x,y,width,height) | 从点(x,y)开始绘制一个矩形，这个方法绘制的是矩形路径，而不是strokeRect()和fillRect()所绘制的独立的形状

创建路径之后，接下来有几种可能的选择，如果想绘制一条连接到路径起点的线条，可以调用closePath()，如果路径已经完成，你想用fillStyle()填充它，可以调用fill()方法。另外，还可以调用stroke()方法对路径进行描边，描边使用的是strokeStyle。最后还可以调用clip()，这个方法可以在路径上创建一个剪切区域。  

closePath()会创建一个起始点到终点的线
```js
var drawing = document.getElementById("drawing")
var context = drawing.getContext("2d")
// 开始路径
context.beginPath()
// 绘制外圆
context.arc(100, 100, 99, 0, 2*Math.PI, false)
// 绘制内圆
context.moveTo(194, 100)
context.arc(100, 100, 94, 0, 2*Math.PI, false)
// 绘制分针
context.moveTo(100, 100)
context.lineTo(100, 15)
// 绘制时针
context.moveTo(100, 100)
context.lineTo(35, 100)
// 描边路径
context.stroke()
```
绘制一个简单的Q  
```js
context.beginPath()
context.arc(100, 100, 50, 0, 2 * Math.PI, true)
context.strokeStyle = "#cdf"
context.stroke()
context.moveTo(120, 120)
context.lineTo(150, 150)
context.lineWidth = 10
context.lineCap = "round"
context.strokeStyle = "#cee"
context.stroke()
```

#### 15.2.4 绘制文本
绘制文本主要有两个方法 `fillText()`和`strokeText()`,两个方法都接收四个参数: 要绘制的文本字符串，x坐标, y坐标, 可选的最大像素宽度，这两个方法都以下列三个属性为基础：font,textAlign,textBaseline，他们都有默认初始值
```js
// 在上面代码基础上
context.font = "bold 14px Arial"
context.textAlign = "center" // 中间对齐
context.textBaseline = "middle" // 中间对齐
context.fillText("12", 100, 20)
```

#### 15.2.5 变换
通过如下方法改变矩阵: rotate(angle), scale(scaleX, scaleY), translate(x,y), transform(...)

#### 15.2.6 绘制图像
drawImage(), 传入一个HTML图片元素，并传入图像起点的x,y坐标

#### 15.2.7 阴影
shadowColor shadowOffsetX shadowOffsetY shadowBlur

#### 15.2.8 渐变
创建渐变对象，gradient, `context.createLinearGradient()`
```js
var drawing = document.getElementById("drawing")
var context = drawing.getContext("2d")
// 渐变
var gradient = context.createLinearGradient(10, 10, 50, 50) // 起始坐标与终点坐标
gradient.addColorStop(0, "white")
gradient.addColorStop(1, "black")
// 绘制渐变色矩形
context.fillStyle = gradient
context.fillRect(10, 10, 50, 50)
```

#### 15.2.9 模式
重复的图像  
```js
var pattern = context.createPattern(image, "repeat") 
// 绘制图形
context.fillStyle = pattern
context.fillRect(10,10,150,150)
```

#### 15.2.10 使用图像数据
通过getImageData()获得原始图像数据，接收四个参数

#### 15.2.11 合成
globalAlpha和globalCompositionOperation,前者用于设置透明度

### 15.3 WebGL
WebGL是针对canvas的3d上下文
#### 15.3.1 类型化数组
WebGL涉及的复杂计算需要提前知道数值的精度，而标准的javascript无法满足需求，为此，WebGL引入了一个概念，叫做类型化数组(typed arrays)  
类型化数组的核心就是一个叫ArrayBuffer的类型

#### 15.3.2 WebGL上下文
```js
<canvas id="drawing" width="200" height="200"></canvas>
var drawing = document.getElementById("drawing")
var gl = drawing.getContext()
```

#### 15.3.3 支持
浏览器 WebGL API, 计算机的显示驱动程序

### 15.4 小结

## 第16章 HTML5脚本编程
### 16.1 跨文档消息传递
cross-document messaging, 有时简称XDM,指的是不同域的页面间传递信息  
核心是postMessage()方法，接收两个参数，一条消息和一个表示接收方来自哪个域的字符串

### 16.2 原生拖放
#### 16.2.1 拖放事件
拖动某元素时，依次触发下列事件：dragstart, drag, dragend  
当某个元素被拖动到一个有效的防止目标时，下列事件会依次发生: dragenter, dragover, dragleave/drop

#### 16.2.2 自定义放置目标
#### 16.2.3 dataTransfer对象
#### 16.2.4 dropEffect与effectAllowed
利用dataTransfer对象，不光能够传输数据，还能通过它来确定被拖动的元素以及作为放置目标的元素能够接收什么操作，为此，需要访问dataTransfer两个属性，dropEffect和effectAllowed
#### 16.2.5 可拖动
默认情况下，图像，链接和文本是可以拖动的，文本只有在被选中的时候才可以拖动，而图像和链接在任何时候都可以拖动   
让其他元素可以拖动也是可能的，HTML5为所有元素规定了一个draggable属性，表示元素是否可以拖动，图像和链接自动被设置成了true
#### 16.2.6 其他成员
HTML5规定dataTransfer对象还包含下面属性和方法...

### 16.3 媒体元素
`<audio>与<video/>`  

#### 16.3.1 属性
| 属性值 | 作用
| ----   | ----
| src   |
| width  | 
| height | 
| poster | 加载内容时显示一幅图像
| autoplay |  
| controls  | 是否显示控件
| readyState | 表示媒体是否就绪了
| ... | ...

#### 16.3.2 事件
| 事件  |  触发时机
| ----  | ------
| canplay | 可以播放时，readyState是2
| play  |  媒体接收指令开始播放
| playing | 媒体已实际开始播放
| ... | ...

#### 16.3.3 自定义媒体播放器
play和pause方法可以手动控制媒体文件的播放

#### 16.3.4 检测编解码器的支持情况
#### 16.3.5 Audio类型
`<audio/>` 元素有一个原生的js构造函数Audio，可以在任何时候播放音频  
```js
var audio = new Audio("sound.mp3")
audio.addEventListener("canplaythrough", function() {
  audio.play()
})
```

#### 16.4 历史状态管理
用户的每一次操作不一定打开一个全新的页面，因此，前进后退也就失去了作用  
history.pushState会创建新的历史状态，触发window的popstate事件

### 16.5 小结
HTML5除了定义新的标记规则，还定义了一些js API, 这些api是为了让开发人员创建出更好的，能够与桌面应用媲美的用户界面而设计的  
- 跨文档消息传递API能够让我们在不降低同源策略安全性的前提下，在来自不同域的文档间传递消息
- 原生拖放功能让我们可以方便的指定某个元素可拖动，并在操作系统要放置时做出响应，还可以创建自定义的可拖动元素及放置目标
- 新的媒体元素`audio`与`video`拥有自己的视频与音频交互的API
- 历史状态管理让我们可以不必卸载当前页面即可修改浏览器的历史状态栈，有了这种机制，用户就可以通过“前进”，“后退”按钮在页面状态间切换，这些状态完全由js控制

## 第17章 错误处理与调试
### 17.1 浏览器报告的错误
#### 17.1.1 IE
#### 17.1.2 Firefox
#### 17.1.3 Safari
#### 17.1.4 Opera
#### 17.1.5 Chrome

### 17.2 错误处理
#### 17.2.1 try-catch语句
```js
// 与java相似
try {
  // 可能会导致错误的代码
} catch(error) {
  // 在错误发生时怎么处理
}
```
###### 1.finally子句，即使出错，依然会执行
```js
function testFinally() {
  try {
    return 2
  } catch(catch) {
    return 1
  } finally {
    return 0
  }
}
// 最终会返回0
```
###### 2. 错误类型
7种错误类型(构造函数)  

| 错误类型
| -----
| Error
| EvalError
| RangeError
| ReferenceError
| SyntaxError
| TypeError
| URIError

```js
try {
  someFunc()
} catch(error) {
  if (error instanceof TypeError) {
    // 处理类型错误
  } else if(error instanceof ReferenceError) {
    // 处理引用错误
  } else {
    // 处理其他类型的错误
  }
}
```
包含在message的属性的错误会因浏览器而异

#### 17.2.2 抛出错误
与try-catch语句相配的还有一个throw操作符，用于随时抛出自定义错误，这个值是什么类型，没有要求，下面代码都是有效的
```js
throw 123456
throw true
```
在遇到throw操作符时，代码会立即停止执行。仅当有try-catch语句捕获到被抛出的值时，代码才会继续执行  
`throw new Error('something wrong')`，这个代码抛出了一个通用错误，带有一条自定义错误消息，浏览器会像处理自己生成的错误一样，来处理这行代码抛出的错误  
```js
throw new SyntaxError("I don't like your syntax")
throw new ReferenceError("haha")
```
在创建自定义错误类型时，最常用的是Error, RangeError, ReferenceError, TypeError
###### 1. 抛出错误的时机
```js
function process(values) {
  values.sort()
  for(var i = 0; i < values.length; i ++) {
    if (values[i] > 100) {
      return values[i]
    }
  }
  return -1
}
```
如果给这个函数传递一个字符串参数，sort()调用就会失败，各个浏览器的报错信息可能不一样，这种情况下，带有适当信息的自定义错误能够显著提升代码的可维护性
```js
function process(values) {
  if(!(values instanceof Array)) {
    throw new Error("process(): Argument must be an array")
  }
  values.sort()
  for(var i = 0; i < values.length; i ++) {
    if (values[i] > 100) {
      return values[i]
    }
  }
  return -1
}
```
如果values不是数组，就会抛出错误

#### 17.2.3 错误(error)事件
任何没有通过try-catch处理的错误都会触发window对象的error事件。onerror事件处理程序不会创建event对象，但它可以接收三个参数，错误消息，错误所在的URL和行号。多数情况下，只有错误信息有用
```js
// 好像没用？
window.onerror = function(message, url, line) {
  alert(message)
  return false // 阻止浏览器默认处理错误行为，相当于全局的try-catch
}
```

#### 17.2.4 处理错误的策略
#### 17.2.5 常见的错误类型
一般来说，需要关注三种错误：类型转换错误，数据类型错误，通信错误。
###### 1.类型转换错误
在使用`==`以及`!=`以及`if()`会出现类型转换错误
###### 2.数据类型错误
```js
function getQueryString(url) {
  var pos = url.indexOf("?")
  if(pos > -1) {
    return url.substring(pos + 1)
  }
  return ""
}
```
如果传入其他数据就会导致错误，添加一个简单的类型检测语句，就可以确保函数不那么容易报错
```js
function getQueryString(url) {
  if (typeof url === "string") {
    var pos = url.indexOf("?")
    if(pos > -1) {
      return url.substring(pos + 1)
    }
  }
  return ""
}
```
###### 3.通信错误
随着Ajax编程的兴起，Web应用程序在其声明周期内动态加载信息或功能，已经成为一件司空见惯的事，但是，js与服务器之间的任何一次通信，都有可能产生错误

#### 17.2.6 区分致命错误和非致命错误
区分的主要依据是看它们对用户的影响
```js
for (var i = 0; i < mods.length; i ++) {
  mods[i].init() // 可能导致致命错误
}
```
对每个模块调用init方法，任何模块的init方法如果出错，都会导致后续模块无法初始化
```js
for (var i = 0; i < mods.length; i ++) {
  try {
    mods[i].init()
  } catch(error) {
    // 在这里处理错误
  }
}
```
#### 17.2.7 把错误记录到服务器
在`catch`的时候做相应的处理

### 17.3 调试技术
alert?!
#### 17.3.1 将消息记录到控制台
通过console对象向JS控制台写入消息，这个对象具有下面方法  
error,info,log,warn,dir...
#### 17.3.2 将消息记录到当前页面
#### 17.3.3 抛出错误
```js
function divide(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error("divide(): Both arguments must be numbers")
  }
  return num1/num2
}
```

### 17.4 常见的IE错误
#### 17.4.1 操作终止
#### 17.4.2 无效字符
#### 17.4.3 未找到成员
#### 17.4.4 未知运行时错误
#### 17.4.5 语法错误
#### 17.4.6 系统无法找到指定资源

### 17.5 小结
避免浏览器响应js错误的方法
- 在可能发生错误的地方使用try-catch语句，这样你还有机会以适当的方式对错误进行响应，而不必沿用浏览器处理错误的机制  
分析错误来源，并指定错误处理的方案
- 致命错误与非致命错误
- 判断可能发生的错误

## 第18章 JavaScript与XML
### 18.1 浏览器对XML DOM的支持
#### 18.1.1 DOM2的核心?
#### 18.1.2 DOMParser类型
#### 18.1.3 XMLSerializer类型
#### 18.1.4 IE8及之前版本的XML
#### 18.1.5 跨浏览器处理XML
### 18.2 浏览器对Xpath的支持
#### 18.2.1 DOM3级Xpath
#### 18.2.2 IE中的Xpath
#### 18.2.3 跨浏览器使用Xpath
### 18.3 浏览器对XSLT的支持
#### 18.3.1 IE中的XSLT
#### 18.3.2 XSLTProcessor类型
#### 18.3.3 跨浏览器使用XSLT
### 18.3 小结

## 第19章 E4X
E4X目的是为操作XML数据提供与标准ECMAScript更相近的语法

## 第20章 JSON
JSON是一种数据格式，不是一种编程语言
### 20.1 语法
JSON语法可以标识下面三种类型的值：简单值，对象，数组
#### 20.1.1 简单值
字符串必须使用双引号，简单值也可以是数值，布尔值，null
#### 20.1.2 对象
属性要加双引号
#### 20.1.3 数组
采用js数组的字面量形式

### 20.2 解析与序列化
#### 20.2.1 JSON对象
早期使用js的eval函数，但是会有风险  
JSON对象有两个方法， `stringify()`和`parse()`
#### 20.2.2 序列化选项
第二个参数是一个数组或函数
#### 20.2.3 解析选项
也可以传第二个参数函数，在解析Date函数时可能会用到

### 20.3 小结

## 第21章 Ajax与Comet
Asynchronous JavaScript + XML 的简写  

Ajax技术的核心是XMLHttpRequest对象，简称XHR

### 21.1 XMLHttpRequest对象
#### 21.1.1 XHR的用法
使用XHR对象时，要调用的第一个方法是open()，接收三个参数，请求类型(如'get','post')，请求的URL路径，是否异步(默认true)  

`xhr.open('get', 'cc.com/cc')`,这行代码会启动一个针对cc.com/cc的GET请求，调用open方法并不会真正发送请求，而只是启动一个请求以备发送  

要发送请求，必须要使用`send()`方法，接收一个参数，即要发送的数据,没有数据则传null 

在收到响应后，响应数据会自动填充XHR对象的属性，相关属性如下  

| 属性  | 说明
| ----  | ------
| responseText  | 返回的文本
| status  |  响应的HTTP状态

发送异步请求时，可以检测XHR的readyState属性，该属性表示请求/响应过程的当前活动阶段  

| 值 | 说明
| 0 | 未初始化
| 1 | 启动，已调用open()方法，但尚未调用send()方法
| 2 | 发送，已调用send()方法，但尚未收到响应
| 3 | 接收，已收到部分响应数据
| 4 | 完成。已经接收到全部响应数据，而且已经可以在客户端使用了

只要readyState属性的值由一个值变成另一个值，就会触发一次readystatechange事件，可以用这个事件来检测每次状态变化之后的readyState的值，通常我们只对readyState为4的值感兴趣
```js
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    if (xhr.state >= 200 && xhr.state < 300 || xhr.state = 304) {
      alert(xhr.responseText)
    } else {
      alert('request was unsuccessful' + xhr.status)
    }
  }
}
xhr.open('get', 'cc.com')
xhr.send(null)
```

#### 21.1.2 HTTP头部信息
| 值 | 说明
| ----- | -----
| Accept | 浏览器能够处理的内容类型
| Accept-Charset |
| Accept-Encoding |
| Accept-Language | 
| Connection | 浏览器与服务器之间的连接类型
| Cookie | 当前页面设置的任何cookie
| Host | 发出请求的页面所在的域
| Referer |
| User-Agent | 浏览器的用户代理字符串

在调用`open`之后`send`之前调用`setRequestHeader`

#### 21.1.3 GET请求

#### 21.1.4 POST请求
```js
function submitData() {
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function() {
    if (xhr.readystate === 4) {
      if (xhr.stateCode >= 200 && xhr.stateCode < 300 || xhr.stateCode === 304) {
        console.log(xhr.responseText)
      } else {
        alert(`request is unsuccessful`, xhr.status)
      }
    }
  }
  xhr.open("post", "ex.com")
  xhr.setRequestHeader("Content-Type", " application/x-www-form-urlencoded") // form表单会被编译成key-value发送到服务端
  xhr.send("// from表单的数据")
}
```

### 21.2 XMLHttpRequest 2级
#### 21.2.1 FormData
用于表单数据的序列化  
```js
var data = new FormData()
data.append("name", "nico")
```

#### 21.2.2 超时设定
ie8为xhr对象添加了一个timeout属性，表示在等待多少毫秒之后就终止，给定timeout属性后，如果在规定时间内没有收到响应，就会触发timeout事件，进而调用ontimeout事件处理程序
```js
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = ...
xhr.open(...)
xhr.timeout = 1000
xhr,ontimeout = function() {
  alert('request did not return in a second')
}
xhr.send()
```
未避免浏览器报错，可以把检查status属性的语句封装在一个try-catch语句中

#### 21.2.3 overrideMimeType()方法

### 21.3 进度事件
6个进度事件：loadstart, progress, error, about, load, loadend
#### 21.3.1 load事件
#### 21.3.2 progress事件

### 21.4 跨源资源共享
通过XHR实现Ajax通信的一个主要限制，来源于跨域安全策略。默认情况下，XHR对象只能访问与包含它的页面位于同一个域中的资源，这种安全策略可以预防某些恶意行为。但是，实现合理的跨域请求对开发某些浏览器的应用也是至关重要的。
CORS(cross-origin resource sharing,跨域资源共享)，定义访问跨域资源时，浏览器域服务器因该如何沟通，CORS背后的思想，就是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是否应该成功  

如发送请求，自定义Origin
```js
Origin: http://ex.com
```
服务器如果认为这个请求可以接受，就在Access-Control-Allow-Origin头部回发相同的源信息，如果是公共资源，可以发*
```js
Access-Control-Allow-Origin: http://ex.com
```
如果没有这个头部，或者有这个头部但源信息不匹配，浏览器就会驳回请求

#### 21.4.1 IE对CORS的实现
#### 21.4.2 其他浏览器对CORS的实现
#### 21.4.3 Preflighted Requests
服务器通过在响应中发送如下头部与浏览器进行沟通
```js
Access-Control-Allow-Origin:
Access-Control-Allow-Methods: 允许的方法
Access-Control-Allow-Headers: 允许的头部
Access-Control-Max-Age: 应该将这个preflight请求缓存多长时间(以秒表示)
```
#### 21.4.4 带凭据的请求
默认情况下，跨域请求不提供凭据，如cookie，HTTP认证及客户端SSL证明等，通过将withCredentials属性设置为true,可以指定某个请求应该发送凭据  
如果服务器接收这样的请求，需设置：
```js
Access-Control-Allow-Credentials: true
```

#### 21.4.5 跨浏览器的CORS

### 21.5 其他跨域技术
#### 21.5.1 图像Ping
#### 21.5.2 JSONP
JSONP是JSON with padding的简写，是应用JSON的一种新方法，JSONP是被包含在函数调用的JSON,如`callback({"name": "nico"})`  
JSONP由两部分组成：回调函数和数据，回调函数的名字一般是在请求中指定的，而数据就是传入回调函数的JSON数据
```js

function handleResponse(response) {
  alert(response)
}
var script = document.createElement("script")
script.src = 'http://ex.com/json/？callback=handleResponse'
document.body.insertBefore(script, document.body.firstChild)
```
JSONP优点：简单易用  
缺点：JSONP是在其他域中执行，如果其他域不安全，可能相应会夹带一些恶意代码。同时,要确定JSONP请求是否失败并不容易，需要使用计时器检测指定时间内是否收到了响应
#### 21.5.3 Comet
Comet指的是一种更高级的ajax技术(经常也有人称为“服务器推送”)，ajax是一种页向服务器请求的技术，而Comet则是一种服务器向页面推送数据的技术。Comet能够让信息近乎实时的被推送到页面上，非常适合处理体育比赛的分数和股票报价。  

Comet实现方式有两种：长轮询和流。  
传统轮询又叫短轮询，即浏览器定时向服务器发送请求，看有没有更新的数据。长轮询把传统轮询颠倒了一下，页面发送一个到服务器的请求，然后服务器一直保持连接打开，直到有数据可发送。发送完数据之后，浏览器关闭连接，随机又发送一个到服务器的新请求，这一过程在页面打开期间一致持续不断。  
第二种流行的Comet实现是HTTP流，浏览器向服务器发送一个请求，而服务器保持连接打开，然后周期性的向浏览器发送数据
#### 21.5.4 服务器发送事件
#### 21.5.5 Web Sockets
在持久连接上提供双向通信，在js中创建了websocket之后，会有一个HTTP请求发送到浏览器以发送连接，再取得服务器响应后，建立的连接会使用HTTP升级从HTTP协议交换为Web Socket协议。也就是说，标准的HTTP服务器无法实现Web Socket，只有支持这种协议的专门服务器才能正常工作。
```js
// 建立websocket
var socket = new WebSocket("city.com")
```
同源策略对websocket不适用，因此可以通过它打开到任何站点的连接，至于是否会与某个域中的页面通信，则完全取决于服务器  

WebSocket也有一个表示当前状态的readyState属性   
| 值  |  说明
| ----- | ------
| WebSocket.OPENING(0) | 正在建立连接
| WebSocket.OPEN(1) | 已经建立连接
| WebSocket.CLOSING(2) | 正在关闭连接
| WebSocket.CLOSE(3) | 已经关闭连接

关闭WebSocket 连接，使用`close()`方法  

发送数据，使用`send()`,只能发送纯文本数据，复杂数据结构需要先进行序列化  

服务端发来消息时，websocket对象会触发message事件，返回的数据保存在event.data里面
```js
socket.onmessage = function(event) {
  var data = event.data
  // 处理数据
}
```
websocket对象还有其他三个事件，在连接生命周期的不同阶段触发，`open, error, close`,websocket不支持DOM2事件监听器
```js
var socket = new WebSocket("city.com")
socket.onopen = function() {
  alert('Connection established')
}
socket.onerror = function() {
  alert('Connection error')
}
socket.onclose = function() {
  alert('Connection closed')
}
```
其中，只有close的事件对象(event)有额外信息，事件对象有三个额外属性: wasClean(是否明确关闭) code(服务器状态码) reason(服务器发回的消息)

#### 21.5.6 SSE与Web Sockets

### 21.6 安全
对于未被授权系统有权访问某个资源的情况，称之为CSRF(Cross-Site Request Forgery, 跨站点请求伪造)，未被授权系统会伪装自己，让处理请求的服务器认为它是合法的  

通常做法
- 要求以SSL连接来访问可以通过XHR请求的资源
- 要求每一次请求都要附带经过相应算法计算得到的验证码

下面防范CSRF攻击不起作用
- 要求发送POST而不是GET请求--很容易改变
- 检查来源URL以确定是否可信--来源记录很容易伪造
- 基于cookie信息进行验证--同样很容易伪造 

### 21.7 小结

## 第22章 高级技巧
### 22.1 高级函数
#### 22.1.1 安全的类型检测
#### 22.1.2 作用域安全的构造函数
构造函数执行的时候如果不写`new`操作符，this会意外的指向window对象
#### 22.1.3 惰性载入函数
#### 22.1.4 函数绑定
将函数绑定到指定环境的函数 bind apply
#### 函数柯里化
与函数绑定密切相关的主题是函数柯里化(function currying),它用于创建已经设置好一个或多个参数的函数。函数柯里化的基本方法和函数绑定是一样的：使用一个闭包返回一个函数。两者的区别在于，当函数被调用时，返回的函数还需要设置一些传入的参数。
```js
function add(num1, num2) {
  return num1 + num2
}
function curriedAdd(num2) {
  return add(5, num2)
}
alert(add(2,3)) // 5
alert(curriedAdd(3)) // 8
```
柯里化函数通常由以下步骤动态创建：调用另一个函数并为它传入要柯里化的函数和必要参数，下面是创建柯里化函数的通用方法
```js
function curry(fn) {
  var args = Array.prototype.slice.call(arguments, 1) // 从第一个截取参数数组，因为第一个参数是要进行柯里化的函数
  return function() {
    var innerArgs = Array.prototype.call(arguments) // 获取内部匿名函数的参数
    var finalArgs = args.concat(innerArgs)
    return fn.apply(null, finalArgs) // 传入最终参数
  }
}
```

