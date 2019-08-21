# Javascript高级程序设计(第三版)读书笔记

## 第一章 Javascript简介
- 最初是为了处理客户端简单验证
- JS实现包含 ECMAScript, DOM, BOM

## 第二章 "在HTML中使用javascript"
- `<script>`标签
- 使用defer,async异步加载脚本
- 使用`script`实现jsonp

## 第三章 "基本概念"
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


## 第四章 "变量、作用域和内存问题"

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

## 第五章 "引用类型"

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
    console.log('sayNmae')
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
// 重写原型对象切断了现有原型与任何执勤啊已经存在的对象实例之间的联系
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
  Super.call(this) // 执行构造函数，只继承SuperType构造器上的属性(没有使用new调用，所以不存在原型继承哦)
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
即便在别的地方调用了这个函数，我们仍然能够获取到PropertyName这个变量

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
在定义匿名函数之前，我们把this对象赋给了一个名叫that的变量，即使在函数返回之后，闭包也可访问这个变量，因为它是我们包含函数中特意声明的一个变量，即便在函数返回之后，that依然引用着object，所以调用`object. getNameFunc()()`就返回了'My Object'

#### 7.2.3 内存泄漏

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

#### 7.4.3 增强的模块模式

### 7.5 小结