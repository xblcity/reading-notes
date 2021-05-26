# vue2.x文档

工作中一直用的react, 大概有一年多没接触vue了，现在因需要使用vue，所以记录一些文档上的注意点。

通篇读下来，和react大部分都很类似。比如列表的渲染，事件绑定，表单双向绑定等等。

## 1.基础部分

## 介绍

vue采用模板语法`{{变量}}`进行数据渲染

vue可以在模板的html标签属性添加指令，以`v-`开头。

- v-if
- v-show
- v-for
- v-bind:key 自定义属性key，且该值是动态的, 简写:key
- v-on:click 点击事件绑定，简写@click
- v-model 数据双向绑定

## vue实例

一个vue实例包含特定的属性，比如`data, name, props`等

每一个vue实例都包含完整的生命周期，我们常在`created`中进行数据获取操作。

## 模板语法

模板 `tempalte` 基于html

插值: `{{}}` 里面可以写JS语句，也可以直接使用vue实例中data对象的变量值

常见  指令以及缩写

## 计算属性和侦听器

一些需要计算的值，比如`message.split('').reverse().join('')`最好把它写成计算属性。需要使用Vue实例的`computed`属性

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

**计算属性**与**方法返回一个值**。区别是计算属性会根据依赖进行缓存。比较像react的`useMemo`。上面例子中，计算属性`reversedMessage`的依赖是`message`，计算器属性默认只有getter。

**与计算属性类似的还有侦听器属性**，`watch`

## Class与Style绑定

在模板语法中，当属性值是js对象或者数组时，需要使用v-bind指令

## 条件渲染

使用`v-if`指令，可以单独使用，也可以结合`v-else` `v-else-if`使用。在React中可以直接使用JSX的三元表达式进行表示

`v-show`仅仅是样式display，包裹的组件**并不具备生命周期**，一开始就会进行渲染

## 列表渲染

指令`v-for`，内容具有指定格式 `item in list`。这里`list`可以是数组，也可以是对象，也可以是一个数字值。搭配`v-bind:key`可以进行更高效渲染。搭配`template`元素可以避免渲染多余html元素

## 事件处理

指令`v-on:事件名`。当事件方法需要传递参数，直接在方法后面加上括号传参即可。但在react中。不使用Bind绑定this的话，需要使用箭头函数。

事件修饰符可以用来阻止冒泡，监听键盘事件等

## 表单输入绑定

指令`v-model`

复选每组对应的v-model应当是一个数组，单选应该对应一个单一值，选择框应该对应的一个单一值或者是一个数组

修饰符`.lazy, .number, .trim`

## 组件基础

当子组件需要出发父组件传递的某个`方法`，需要使用`$emit(方法名)`触发该方法。这样的方法在vue中被叫做自定事件，Why?。。 以`v-on:自定义事件名`表示。这里比较困惑

## 2.深入了解组件

## 组件注册

组件名即`name`属性可以使用`kebab-case`或者`PascalCase`。`components`对象属性可以填写引入的组件名称

## Prop

prop可以传递js中字符串，数组，对象，数组等类型。但是**函数**比较特殊

子组件可以使用props接收传过来的参数，props为对象时，可以对传来的参数值进行验证及设置默认值

## 自定义事件

vue中把属性值为**函数**这样的属性叫做自定义事件

`.sync`修饰符，用于prop“双向绑定”

## 插槽

使用`slot`标签，与react中`prop.children`比较接近

`<slot></slot>`相当于一个预留的位置。你写什么会被用去填充它

## 动态组件&异步组件

使用`<keep-alive></keep-alive>`可以使被包裹的组件避免重复渲染，可以用于tab切换等

## 处理边界情况


## 3.过渡动画

## 进入/离开 & 列表过渡

使用`<transition></transition>`标签包裹要过渡动画的组件

官方封装的过渡动画也具备钩子函数

## 状态过渡

## 4.可复用性 & 组合

## 5.工具

## 6.规模化

## 7.内在

## 8.更多