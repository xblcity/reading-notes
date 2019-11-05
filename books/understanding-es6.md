# 深入理解ES6

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

## 字符串和正则表达式
字符串新增了 includes(), startWith(), endWith()方法，都可以传递两个参数，第一个参数是要检索的文本，第二个是起始位置

repeat方法，接收number类型参数

模板字符串，``可以换行，可以在里面使用${}占位符，中间可以包含任意的js表达式

标签模板：使用函数对模板字符串进行重组