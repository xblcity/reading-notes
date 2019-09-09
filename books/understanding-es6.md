# 深入理解ES6

## 第一章 块级作用域
### var声明及变量提升
### 块级声明
#### let声明
用let代替var来声明变量，就可以把变量限制在当前代码块中。由于let声明不会被提升，因此开发者通常将let声明放在封闭代码块的顶部，一遍整个代码块都可以访问。
#### 禁止重复声明
同一作用域不能用let重复定义已经存在的标识符，但可以在作用域内嵌的作用域用let声明同名变量
#### const声明
const定义的常量无法再赋值

const声明不允许修改绑定，但允许修改值，这也就意味着用const声明对象后，可以修改对象的属性值。
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

#### 临时死区(Temporal Dead Zone)