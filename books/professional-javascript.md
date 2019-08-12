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
#### 3.5.2 位操作符
#### 3.5.3 布尔操作符
#### 3.5.4 乘性操作符
#### 3.5.5 加性操作符
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
- splice() 功能强大但是会改变原数组 splce(beigin, 截取长度, 替换)

#### 5.2.7 位置方法
- indexOf() lastIndexOf() 参数是要查找的项
- es6可以使用 find或者 findIndex迭代方法

#### 5.2.8 迭代方法
- forEach, every, some, filter, map 都可以传递三个参数
- es6 find, findIndex, includes

#### 5.2.9 归并方法
reduce, reduceRight

### 5.3 Date类型
- new Date() 输出时间格式的字符串
- new Date(2131231) 传入毫秒数，也会输出时间格式字符串  
构造器上面的方法，即Date函数/constructor，或者可以说是prototype的constructor属性上面的方法
- Date.parse(new Date()) 传入时间格式字符串，返回毫秒数
- Date.now() 返回毫秒数  
原型上面的方法，即Date实例的原型(prototype)上面的方法  
- 例如, new Date().getTime()

#### 5.3.1 继承的方法
来自Object原型链的方法  
toLocaleString()会根据地区的时间格式返回相应时间

#### 5.3.2 日期格式化方法
toDateString, toTimeString, toLocaleDateString, toLocaleTimeString, toUTCString

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

