# 深入理解ES6

- [第一章 块级作用域](#第一章-块级作用域)

- [第二章 字符串和正则表达式](#第二章-字符串和正则表达式)

- [第三章 函数](#第三章-函数)

- [第四章 扩展对象的功能性](#第四章-扩展对象的功能性)

- [第五章 解构：使数据访问更便捷](#第五章-解构：使数据访问更便捷)

- [第六章 Symbol和Symbol属性](#第六章-symbol和symbol属性)

- [第七章 Set集合和Map集合](#第七章-set集合和map集合)

## 第一章 块级作用域

var声明及变量提升

块级声明之let声明，用let代替var来声明变量，就可以把变量限制在当前代码块中。由于let声明不会被提升，因此开发者通常将let声明放在封闭代码块的顶部，一遍整个代码块都可以访问。

禁止重复声明，同一作用域不能用let重复定义已经存在的标识符，但可以在作用域内嵌的作用域用let声明同名变量

const声明，const定义的常量无法再赋值，const声明不允许修改绑定，但允许修改值，这也就意味着用const声明对象后，可以修改对象的属性值。
```js
const person = {
  name: 'nic'
}
person.name = 'co' // 修改属性值
person = { // 抛出语法错误 syntax Error
  name: 'co'
}
```
改变person.name并不会抛出任何错误，因为修改的是person包含的值。

临时死区(Temporal Dead Zone)：即无法提升变量，提前引用会抛错

在for循环中使用let，进行块级作用域绑定，避免变量污染，每次循环let声明都会创建一个新变量

当然，使用立即执行函数(IIFE)也会形成块级作用域，比如
```js
var funcs = []
for (var i = 0; i < 10; i++) {
  funcs.push(function(values) {
    return function() {
      console.log(values)
    }
  }(i))
}

funcs.forEach(func => {func()}) // 0~9
```
对于for-in以及for-of也可以使用let

循环中的const 声明：在for循环中，对变量进行重新声明会报错，但是在for-in以及for-of不会报错，因为每次迭代不会修改已有绑定，而是会创建一个新绑定

var声明的全局变量可能会覆盖全局属性，但是let和const声明的变量不会添加为全局对象的属性

## 第二章 字符串和正则表达式

字符串新增了 includes(), startWith(), endWith()方法，都可以传递两个参数，第一个参数是要检索的文本，第二个是起始位置

repeat方法，接收number类型参数

模板字符串，``可以换行，可以在里面使用${}占位符，中间可以包含任意的js表达式

标签模板：使用函数对模板字符串进行重组

## 第三章 函数

函数**形参**默认值

处理无命名参数，ES5:

```js
function pick(object) {
  let result = Object.create(null)
  // 从第二个参数开始
  for(let i = 1; i < arguments.length; i ++) {
    result[arguments[i]] = object[arguments[i]]
  }
  return result
}
let book = {
  title: 'ud',
  author: 'nicholas',
  year: 2016
}
let bookData = pick(book, "author", "year")
console.log(bookData)
```

该函数返回了一个给定对象的副本，包含原始对象属性的特定子集。  
关于pick函数：这个函数接收任意数量的参数,要拷贝属性名称时，要从索引1开始

在ES6中，使用不定参数/剩余参数(rest parameters)，在函数的命名参数前添加三个点(...)就表明这是一个不定参数/剩余参数
```js
// 重写pick函数
function pick(object, ...keys) {
  let result = Object.create(null)
  for (let i = 0; i < keys.length; i ++) {
    result[keys[i]] = object[keys[i]]
  }
  return result
}
```

剩余参数(rest parameters)的使用限制：每个函数最多只能声明一个剩余参数，而且一定要放在所有参数的末尾

与剩余参数比较相似的是展开运算符(spread operator)。剩余参数可以让你指定多个各自独立的参数，并通过整合后的数组来访问，而展开运算符可以让你指定一个数组，将它们打散作为各自独立的参数传入函数。

```js
// 从数组取最大值
let values = [25, 50, 75, 100]
// apply函数第二个参数是数组，在执行max方法时，参数会被打碎
console.log(Math.max.apply(Math, values))
// ES6
console.log(Math.max(...values))
// 展开运算符可以与其他正常传入的参数混合使用
console.log(Math.max(...values, 0))
```
大多数使用apply()方法的情况下展开运算符可能是一个更合适的方案。因为展开运算符可以使得参数为数组的时候进行打散

箭头函数与普通JS函数区别：  
- 没有this, super, arguments和new.target绑定，箭头函数中的this，super,arguments及new.target这些值由外围最近一层非箭头函数决定
- 不能通过new关键字调用，箭头函数没有[[construct]]方法，所以不能被用作构造函数，通过new关键字调用箭头函数，程序会抛错
- 没有原型，由于不可以通过new关键字调用箭头函数，因而没有构建原型的需求，所以箭头函数不存在prototype这个属性
- 不可以改变this的绑定，函数内部的this值不可被改变，在函数生命周期内始终保持一致，不能使用call(), apply(), bind()等方法改变this的值。
- 不支持arguments对象，箭头函数没有arguments绑定，所以你不许通过命名参数和不定参数这两种形式访问函数的参数
- 不支持重复的命名参数，无论在严格或者非严格模式下，箭头函数都不支持重复的命名参数，而在传统函数的规定中，只有在严格模式下才不能有重复的命名参数

箭头函数可以减少this报错，因为this的指向更清楚了，下面是一些例子：
```js
let pageHandler = {
  id: '123',
  init: function() {
    console.log(this) // pageHandler对象
    document.addEventListener('click', function(event) {
      console.log(this)
      this.doSomething(event.type)
    }, false)
  },
  doSomething: function(type) {
    console.log("Handing" + type + "for" + this.id)
  }
}
pageHandler.init()
// 鼠标点击document，this是document

let pageHandler = {
  id: '123',
  init: function() {
    console.log(this)
    document.addEventListener('click', (function(event) {
      this.doSomething(event.type)
    }).bind(this), false)
  },
  doSomething: function(type) {
    console.log("Handing" + type + "for" + this.id)
  }
}
pageHandler.init()
// 鼠标点击document，this是pageHandler对象

let pageHandler = {
  id: '123',
  init: function() {
    console.log(this)
    document.addEventListener('click', 
    event => this.doSomething(event.type), false)
  },
  doSomething: function(type) {
    console.log("Handing" + type + "for" + this.id)
  }
}
pageHandler.init()
// 鼠标点击document，this是pageHandler对象
```
第三个例子，箭头函数中的this是最近一层非箭头函数的this,即init

箭头函数用于数组的一些高阶函数方法，如sort，reduce等，简洁减少代码量

箭头函数没有arguments对象，但是可以访问外围函数的arguments对象，这是arguments标识符的作用域链解决方案所规定的。

## 第四章 扩展对象的功能性

对象字面量语法扩展：

1. 属性初始值的简写：属性与本地变量同名，只写属性名即可
2. 对象方法的简写语法

```js
var person = {
  name: 'ya',
  sayName: function() {
    console.log(this.name)
  }
}
// ES6
var person = {
  name: 'ya',
  sayName() {
    console.log(this.name)
  }
}
```

3. 可计算属性名，当一个对象的属性名包含空格的时候，无法通过object.属性名访问，需要使用object['属性名']访问，当无法提前知道属性名字时？可以用ES6可计算属性实现，可计算属性需要用[]包起来
```js
let lastName = "last name"
let person = {
  "first name": "ya",
  [lastname]: "co"
}
console.log(person["first name"])
console.log(person[lastname]) // 不用加双引号了哦~

let suffix = " name"
let person = {
  ["first" + suffix]: "ya",
  ["last" + lastname]: "co"
}
console.log(person["first name"])
console.log(person["last name"]) // 不用加双引号了哦~
```

### 新增方法

Object.is(),传入两个值，比全等运算符更为精确，因为全等比较+0与-0会得出相同结果

Object.assign()  
混合(Mixin)是js中试下对象组合最流行的一种模式，在一个mixin方法中，一个对象接收来自另一个对象的属性和方法
```js
function minin(receiver, supplier) {
  Object.keys(supplier).forEach(function(key) { // Object.keys(obj)返回一个obj对象属性的数组
    receiver[key] = supplier[key]
  })
  return receiver
}
```
上述方法是对对象的浅复制，当属性值为对象时，只复制对象的引用，mixin方法可以被Object.assign()取代，可接收多个参数，第一个参数是接收对象，后面的是源对象。

注意,Object.assign()不能讲提供者的访问器属性复制到接收对象中

自有属性枚举排序
```js
var obj = {
  a: 1,
  0: 1,
  c: 1,
  2: 1,
  b: 1,
  1: 1,
}
Object.getOwnPropertyNames(obj).join('') // '012acbd'
```
自有属性枚举排序规则：   
1. 所有数字键按升序排序
2. 字符串键按他们被加入对象的顺序排序
3. 所有symbol键按照它们被加入对象的顺序排序

对于for-in， Object.keys(), JSON.stringify()枚举顺序并不明确。

***关于对象的原型***
Object.create()用于创建一个指定原型的对象   
Object.getPrototypeof(对象)以及Object.setPrototypeof(对象，原型)分别用于获取和改变原型   

ES6 的 super可以简化原型访问，比如我们想访问原型上同名的方法，要用`Object.getPrototypeof(this).方法.call(this)`，ES6我们可以直接使用`super.方法()`,要必须在简写方法的对象中才能使用

## 第五章 解构：使数据访问更便捷

```js
// 对象解构
let {type} = node

// 默认值
let {type="bool"} = node

// 非同名局部变量赋值
// 这种语法和传统字面量的语法相悖，原来的语法名称在冒号左边，值在右边，现在变量名称在冒号右边，而需要读取的位置在左边(对象的属性名)
let {name: localName} = node

// 重命名并添加默认值
let {name: localName = "bar"} = node

// 嵌套对象解构
let {local: {start: {name}}} = node

// 数组解构
let [color1, color2] = colors

// 省略元素
let [ , , thirdColor] = colors

// 交换变量
// es5
let a = 1, b = 2, temp
temp = a
a = b
b = temp
// ES6
let a = 2, b = 2
[a, b] = [b, a]

// 默认值
let [color1, color2 = "green"] = colors

// 嵌套数组解构
let [color1, [color11]] = colors

// 剩余元素/不顶元素  rest 
let [color1, ...resColors] = colors

// 克隆数组
// es5
var colors = ["red", "green"]
var cloneColors = colors.concat()
// es6
let colors = ["red", "green"]
let [...cloneColors] = colors

// 混合结构
let {loc: {start}, range: [startIndex]} = node

// ======
// 解构用于传递JS函数参数时
function setCookie(name, value, {secure, path, domain, expires}) {
  // 设置cookie的代码
}
setCookie("type", "js", {
  secure: true,
  expires: 60000
})
// 注意
// 上述函数在调用的时候如果缺失第三个参数，会报错
// 调用时，JS引擎实际做了这些事情
let {secure, path, domain, expires} = options
// options为null, undefined, 或者不传递都会报错

// 如果解构参数是必须的，可以忽略这些问题，如果解构参数是可选的，可以为其提供默认值来解决这个问题
function setCookie(name. value, {secure, path, domain, expires} = {}) {
  ...
}

// =======
// 为解构参数指定默认值
function setCookie(name, value, {
  secure = false,
  expires = new Date(Date.now() + 36000000)
}) { ... }
// 缺点：函数声明比以前复杂，如果解构参数是可选的，仍然要添加一个空对象作为参数，否则像setCookie("type", "js")这样的调用仍然会让程序报出错误。这里建议对于对象类型的解构参数，为其赋予相同解构的默认参数
function setCookie(name, value, {
  secure = false,
  expires = new Date(Date.now() + 36000000)
} = {
  secure: false,
  expires = new Date(Date.now() + 36000000)
}) { ... }
// 第一个对象为解构参数，第二个为默认值，这样会有代码冗余，可以讲默认值提取到一个独立对象中，并且使用该对象作为解构和默认参数的一部分，从而消除这些冗余
const setCookieDefaults = {
  secure: false,
  path: "/",
  domain: "example.com",
  expires: new Date(Date.now() + 36000000)
}
function setCookie(name. value, {
  secure = setCookieDefaults.secure,
  path = setCookieDefault.path,
  domain = setCookieDefault.domain,
  expires = setCookieDefault.expires
} = setCookieDefault) { ... }
```

## 第六章 Symbol和Symbol属性

ES5对象属性名都是字符串，这很容易造成属性名的冲突，ES6中引入新的原始数据类型Symbol，表示独一无二的值

使用Symbol定义对象的可计算属性

Symbol**函数**前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。

```js
let s = Symbol();

typeof s
// "symbol"
```

Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。

```js
let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
```
上面代码中，s1和s2是两个 Symbol 值。如果不加参数，它们在控制台的输出都是Symbol()，不利于区分。有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值。

注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。

```js
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// 有参数的情况
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2 // false
```

Symbol 值不能与其他类型的值进行运算，会报错。

由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。

```js
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```

Symbol 值作为对象属性名时，不能用点运算符。

在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。 否则就是普通的字符串

Object.keys()以及Object.getOwnPropertyNames()这样的方法不返回任何Symbol，可以使用Object.getOwnPropertySymbols()检索Symbol属性

对于已经定义的Symbol属性，仍可以通过Object.defineProperty()和Object.defineProperties()来改变他们

重新使用同一个 Symbol 值，Symbol.for()方法可以做到这一点。Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。

除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。

对象的`Symbol.hasInstance`属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。比如，`foo instanceof Foo`在语言内部，实际调用的是`Foo[Symbol.hasInstance](foo)`。

```js
class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}

[1, 2, 3] instanceof new MyClass() // true
```

well-know Symbol 为标准对象定义了一些只在语言内部可见的功能，它使用的是像Symbol.hasInstance属性这样的全局Symbol常量，这些Symbol统一使用Symbol作为前缀，标准中规定，开发者可以通过多种方法修改对象的特性。

这些 well know Symbol 可以通过 如`object.[Symbol.toPrimitive]` `object.prototype.[Symbol.toPrimitive]`等调用，因为这些是直接定义在对象的属性上的，就是说对象的这个可计算属性值(Symbol)类型，是一个函数，可以直接调用，也可以对其进行重新声明

Symbol.toPrimitive方法

## 第七章 Set集合和Map集合

js中对象的属性名会自动被转换成字符串，数字5会被转换成"5"，对象{}会被转换成`[object Object]`

Set集合是一种包含多个非重复值的有序列表，如果相同，会自动过滤重复的值，所以可以使用Set集合过滤数组的重复元素

Set函数可以接受一个**数组（或者具有 iterable 接口的其他数据结构）**作为参数，用来初始化。

Set主要有`add, has, delete, clear` 方法

```js
let set = new Set()
set.add(5)
set.add("5")
set.size // 2

set.add({})
set.add({})
set.size // 4

set.has(5) // true

set.delete(5)
set.size  // 3

set.clear()
set.size // 0
```

数组去重
```js
const arr = [1,3,5,5,5,5]

const distinct = (arr) => {
  return [...new Set(arr)]  // new Set() 返回一个[只有键]可迭代对象，将其转换成数组
}

distinct(arr)
```

遍历
```js
let set = new Set([1,2])
set.forEach(function(value, key, ownerSet) {
  console.log(key + "" + value)
})
// 1 1
// 2 2
```

Weak Set

原始引用可以被清除

Map，一种可以存储许多键值对的有序列表，键名相同会被覆盖

主要有set, get, has, delete, clear 方法

```js
let map = new Map()
map.set("year", 2016)
map.set("age")
map.set("name", null)
map.get("year") // 2016
map.get("age") // undefined
map.get("name") // null

map.size // 1
map.has("year") // true

map.delete("year")
map.size // 0

map.clear()
```

Map构造函数接受**数组作为参数**，**并且最好是二维数组**, 实际上执行的是下面的算法。

```js
const items = [
  ['name', 'xbl'],
  ['title', 'Author']
]

const map = new Map()

items.forEach(
  ([key, value]) => map.set(key, value)
)
```

```js
let map = new Map([["name", "xbl"], ["age", 25], ["age", 15]])
map.get("name") // xbl
map.get("age") // 15
map.size // 2
```

遍历
```js
let map = new Map([["name", "xbl"], ["age", 25]])
map.forEach(function(value, key, ownerMap) {
  console.log(key + " " + value) 
})
// name xbl
// age 25
```

数组每一项为对象(引用类型)，对 属性名相同的进行去重
```js
function distinct(arr, key) {
  const map = new Map()
  return arr.filter(item => !map.has(item[key]) && map.set(item[key], null)) // 检测map中没有[key]，有则返回false，无则向Map中设置值
}
const list = [
  {
    name: 'xbl',
    age: 15
  },
  {
    name: 'xbl',
    age: 25
  },
  {
    name: 'nico',
    age: 13
  }
]
distinct(list, 'name')
// [
//   {name: "xbl", age: 15},
//   {name: "nico", age: 13}
// ]
```

Weak Map
键名必须是非null类型的对象，可以用来存储DOM元素

## 第八章 迭代器(Iterator)和生成器(Generator)

新的for-of循环，展开运算符(...)，甚至连异步编程都可以使用迭代器

迭代器是一种特殊对象，有个 next() 方法，调用它会返回一个结果对象，这个对象包含两个属性，value和done，结果对象可以继续使用 next()调用

```js
{
  value, // 表示下一个将要返回的值， 没有则返回值，value为undefined(与函数类似)，即表示迭代执行完成
  done  // 布尔值，没有更多可返回数据时返回true, 否则为false
}
```

使用ES5创建迭代器

```js
function createIerator(items) {
  var i = 0
  return {
    next: function() {
      var done = (i >= items.length)
      var value = !done ? items[i++] : undefined
      return {
        done: done,
        value: value
      }
    }
  }
}

var iterator = createIterator([1,2,3])

console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: 3, done: false}
console.log(iterator.next()) // {value: undefined, done: false}

// 之后所有调用都会返回相同内容
console.log(iterator.next()) // {value: undefined, done: false}
```

ES6生成器，可以使创建迭代器对象变得更简单

生成器是一种返回迭代器的函数，通过function关键字后的星号(*)来表示，函数中会用到新的关键字yield。星号可以紧挨着function关键字，也可以在中间添加一个空格。比如

```js
// 生成器
function* createIterator() {
  yield 1
  yield 2
  yield 3
}

// 生成器的调用方式与普通函数相同，只不过返回的是一个迭代器
let iterator = createIterator()

console.log(iterator.next().value) // 1
console.log(iterator.next().value) // 2
console.log(iterator.next().value) // 3
```
yield是ES6的新特性，通过它来指定调用迭代器的next()方法时的返回值及返回顺序，生成迭代器后，连续三次调用它的next()方法返回三个不同的值，生成器的调用过程与其他函数一样，最终返回的是创建好的迭代器。

**每执行完yield语句后函数就会自动停止执行，直到再次调用迭代器的next()方法才会继续执行下一个yield语句**

yield关键字后面可以返回任何值或者表达式，可以通过生成器函数给迭代器添加元素，比如，在循环中使用yield关键字

```js
function *createIterator(items) {
  for(let i = 0; i < items.length ; i ++) {
    yield items[i]
  }
}

let iterator = createIterator([1,2,3])

console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: 3, done: false}
console.log(iterator.next()) // {value: undefined, done: false}
...
```
yield只能在生成器内部使用

```js
// 生成器函数表达式
let createIterator = function *(items) {...}
// 生成器作为 对象的方法，两种写法 
let o = {
  createIterator: function *(items) {
    for (let i = 0; i < items.length; i ++) {
      yield items[i]
    }
  }
}
let o = {
  *createIterator(items) {
    for (let i = 0; i < items.length; i ++) {
      yield items[i]
    }
  }
}

let iterator = o.createIterator([1,2,3])
```

### 可迭代对象与for-of循环

可迭代对象具有Symbol.iterator属性(该属性是一个generator)，对可迭代对象迭代时会使用该属性。

所有集合对象(数组，Set集合, Map集合，字符串, 普通对象不是哦)都是可迭代对象，这些对象有默认的迭代器。ES6新加入的for-of循环就是用到了可迭代对象的Symbol.Iterator属性

for-of循环每执行一次都会调用可迭代对象的next()方法。并将迭代器返回的结果对象的value属性存储在一个变量中，循环将持续执行这一过程直到返回对象的done属性的值为true

```js
let values = [1,2,3]

for (let num of values) {
  console.log(num)
}
```
for-of循环通过嗲用values数组的Symbol.iterator方法来获取迭代器，随着迭代器的next()被多次调用，从其返回对象的value属性读取值并存储在变量num中，分别是1,,3，当结果对象的*done*属性值为true时循环退出，所以num不会被复制为undefined

### 为默认对象创建可迭代对象

默认情况下，开发者定义的对象都是不可迭代对象，但如果给Symbol.iterator属性添加一个生成器，则可以将其变为可迭代对象。

```js
let collection = {
  items: [1,2,3],
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item
    }
  }
}

for (let item of collection) {
  console.log(item) // 1 2 3
} 
```

### 内置迭代器

集合类型比如，数组,Set,Map数据通常有三种迭代器方法，比如entries(), values(), keys()，可以从语义理解,entries()返回键值对，values()返回键值，keys()返回键。

每个集合类型都有默认的迭代器，for-of使用默认的迭代器，数组与Set默认迭代器是values()方法，Map是entries()方法

```js
const a = [1,2,3]
for (let key of a) {
  console.log(key) // 1,2,3
}
for (let key of a.entries()) {
  console.log(key) // [0,1], [1,2], [2,3]
}

const b = new Set(['a', 'b', 'c'])
for (let key of b) {
  console.log(key) // 'a', 'b', 'c'
}
for (let key of b.entries()) {
  console.log(key) // ["a", "a"], ["b", "b"], ["c", "c"]
}

const c = new Map()
c.set("name", "xbl")
c.set("age", 17)
for (let key of c) {
  console.log(key) // ["name", "xbl"], ["age", 17]
}
for (let key of c.entries()) {
  console.log(key) // ["name", "xbl"], ["age", 17]
}
```

使用for-of对字符串与NodeList(Node节点)进行迭代，可以避免for-in循环产生的一些问题

展开运算符可以应用于所有可迭代对象，比如Set, Map集合

### 高级迭代器功能

为next()传递参数，作为上一次yield的返回值，当然，第一次执行next()方法，参数会被忽略，因为上一次并无yield返回值

在迭代器中抛出错误，通过throw方法，如果不使用try-catch语句，那么是生成器抛出的默认错误，使用try-catch可以抛出符合预期的错误，对错误进行处理，使得迭代器可以顺利向后执行。

```js
// 待补充，
```

委托生成器：将多个迭代器合为一个，只需要在调用时加入*即可

```js
function *createNumberIterator() {
  yield 1
  yield 2
}
function *createColorIterator() {
  yield 'blue'
  yield 'green'
}
function *createCombinedIterator() {
  yield *createNumberIterator()
  yield *createColorIterator()
  yield true
}

var iterator = createCombinedIterator()

console.log(iterator.next()) {value: 1, done: false}
console.log(iterator.next()) {value: 2, done: false}
console.log(iterator.next()) {value: 'blue', done: false}
console.log(iterator.next()) {value: 'green', done: false}
console.log(iterator.next()) {value: true, done: false}
console.log(iterator.next()) {value: undefined, done: true}
```

利用生成器的返回值处理复杂任务

```js
function *createNumberIterator() {
  yield 1
  yield 2
  return 3
}

function *createRepeatingIterator(count) {
  for (let i = 0; i < count; i ++) {
    yield "repeat"
  }
}

function *createCombinedIterator() {
  let result = yield *createNumberIterator()
  yield *createRepeatingIterator(count)
}

var iterator = createCombinedIterator()

console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: "repeat", done: false}
console.log(iterator.next()) // {value: "repeat", done: false}
console.log(iterator.next()) // {value: "repeat", done: false}
console.log(iterator.next()) // {value: undefined, done: true}
```

注意，数值3永远不会被返回，只存在于生成器createNumberIterator内部，如果想要输出这个值，需要额外添加一个yield语句

## 第九章 JavaScript中的类

ES5及之前没有类的概念，最相近的思路是创建一个自定义类型：首先创建一个**构造函数**，然后定义另一个方法并赋值给**构造函数的原型**，比如：

```js
function PersonType(name) {
  this.name = name
}

PersonType.prototype.sayName = function() {
  cosnole.log(this.name)
}

var person = new PersonType('xbl')
person.sayName() // 'xbl'

console.log(person instanceof PersonType) // true
console.log(person instanceof Object) // true
```

ES6声明类，需要`class`关键字，`constructor()`来定义构造函数，是实例中的自有属性，不会出现在原型上，其他方法都会挂载到原型上面，中间不需要`逗号`分隔符

类声明
```js
// 类声明不存在变量提升，默认自动运行在严格模式下，类所有方法都不可枚举
class Person {

}
// 类表达式语法
let PersonClass = class {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log(this.name)
  }
}

let PersonClass = class PersonClass2 {

}
console.log(typeof PersonClass) // function
console.log(typeof PersonClass2) // undefined
```

访问器属性

```js
class CustomHTMLElement {
  cosntructor(element) {
    this.element = element
  }
  get html() {
    return this.element.innerHTML
  }
  set html() {
    this.element.innerHTML = value
  }
}

var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, "html")
console.log("get" in descriptor) // true
console.log("set" in descriptor) // true
console.log(descriptor.enumerable) // false

// 等同于ES5
let CustomHTMLElement = (function() {
  "use strict";
  const CustomHTMLElement = function(element) {
    // 确保通过关键字new调用该函数
    if(typeof new.target === "undefined") {  // new.target属性允许你检测函数或构造方法是否是通过new运算符被调用的。
      throw new Error("必须通过关键字new调用构造函数")
    }
    this.element = element
  }

  Object.defineProperty(CustomHTMLElement.prototype, "html", {
    enumerable: false,
    configurable: true,
    get: function() {
      return this.element.innerHTML
    },
    set: function() {
      this.element.innerHTML = value
    }
  })

  return CustomHTMLELement
}())
```

类方法和访问器属性也支持使用可计算名称

类和对象字面量诸多的共同点中，除了方法，访问器属性及可计算名称上的共同点外，还需要另一个相似之处，也就是生成器方法。

```js
class MyClass {
  *createIterator() {
    yield 1
    yield 2
    yield 3
  }
}

let instance = new MyClass()
let iterator = instance.createIterator()

class Collection {
  constructor() {
    this.items = []
  }

  *[Symbol.iterator]() {
    yield *this.items.value()
  }
}

var collection = new Collection()
collection.items.push(1)
collection.items.push(2)
collection.items.push(3)

for(let x of collection) {
  console.log(x)  // 1 2 3
}
```

静态成员：ES5中将方法直接添加到构造函数中来模拟静态成员

```js
function PersonType(name) {
  this.name = name
}
// 静态方法
PersonType.create = function(name) {
  return new PersonType(name)
}
// 实例方法
PersonType.prototype.sayName = function() {
  console.log(this.name)
}
var person = PersonType.create('xbl')
```
由于 `PersonType.create()` 使用的数据不依赖 `PersonType`的实例，因而其会被认为是一个静态方法，ES6中：

```js
class PersonClass {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log(this.name)
  }
  static create(name) {
    return new PersonClass(name)
  }
}
```

需要注意的是，不可以在实例中访问静态成员，必须要直接在类中访问静态成员。

ES5实现继承

```js
function Rectangle(length, width) {
  this.length = length
  this.width = width
}
Rectangle.prototype.getArea = function() {
  return this.length * this.width
}

function Square(length) {
  Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    value: Square,
    enumerable: true,
    writerable: true,
    configurable: true
  }
})
var square = new Square(3)

console.log(square.getArea())
console.log(square instanceof Square)
console.log(square instanceof Rectangle)
```

ES6实现继承/派生类

```js
class Rectangle {
  constructor(length, width) {
    this.length = length
    this.width = width
  }
  getArea() {
    return this.length * this.width
  }
}

class Square extends Rectangle {
  Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    value: Square,
    enumerable: true,
    writable: true,
    configurable: true
  }
})
var square = new Square(3)

console.log(square.getArea()) // 9
console.log(square instanceof Square) // true
console.log(square instanceof Rectangle) // true
```

ES6中只需要super关键字就可以实现继承

```js
class Square extends Rectangle {
  constructor(length) {
    // 等价于 Rectangle.call(this,length,length)
    super(length, length)
  }
}

// 使用了extends却没有super(), super()会被默认创建
```

// Todo ===
===

## 第十章 改进的数组功能

## 第十一章 Promise与异步编程

## 第十二章 代理(Proxy)和反射(Reflection) API

## 第十三章 用模块封装代码













