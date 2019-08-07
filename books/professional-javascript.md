# Javascript高级程序设计(第三版)读书笔记

## 第一章 Javascript简介
- 最初是为了处理客户端简单验证
- JS实现包含 ES, DOM, BOM

## 第二章 "在HTML中使用javascript"
- `<script>`标签
- 使用defer,async异步加载脚本
- 使用`script`实现jsonp

## 第三章 "基本概念"
- 区分大小写
- 标识符，注释，严格模式
- 语句
- 关键字和保留字
- 变量
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

#### 3.4.1 typeof操作符

#### 3.4.2 Undefined类型

#### 3.4.3 Null类型

#### 3.4.4 Boolean类型
- if语句自动执行 Boolean()

#### 3.4.5 Number类型

### 3.4 数据类型

### 3.5 操作符

### 3.6 语句

### 3.7 函数


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
- Date.parse(new Date()) 传入时间格式字符串，返回毫秒数
- Date.now() 返回毫秒数

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
- exec('要检测的字符串') // 返回数组
- test('要检测的字符串') // 返回布尔值

#### 5.4.3 RegExp构造函数属性

#### 5.4.4 模式的局限性

### 5.5 Function类型

#### 5.5.1 没有重载
- 后面的函数会覆盖前面的函数，ts有函数重载

#### 5.5.2 函数声明与函数表达式


