# 深入理解ES6

- [第一章 块级作用域](https://github.com/xblcity/reading-notes/blob/master/books/understanding-es6.md#第一章-块级作用域)

- [第二章 字符串和正则表达式](https://github.com/xblcity/reading-notes/blob/master/books/understanding-es6.md#第二章-字符串和正则表达式)

- [第三章 函数](https://github.com/xblcity/reading-notes/blob/master/books/understanding-es6.md#第三章-函数)

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
  au66ythor: 'nicholas',
  year: 2016
}
let bookData = pick(book, "author", "year")
console.log(bookData)
```
该函数反悔了一个给定对象的副本，包含原始对象属性的特定子集。  
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

剩余参数的使用限制：每个函数最多只能声明一个不定参数，而且一定要放在所有参数的末尾

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
大多数使用apply()方法的情况下展开运算符可能是一个更合适的方案。因为展开运算符可以使得参数为数组

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
// 鼠标点击document，this是docuemnts

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