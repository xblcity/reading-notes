# React 文档总结思考

[文档链接](https://zh-hans.reactjs.org/docs/getting-started.html)

版本: v16.13.1

系统的把 react 文档读一遍，查漏补缺之前没有注意到的点。

- 安装
- 核心概念
- 高级指引
- API REFERENCE
- HOOK
- 测试
- CONCURRENT 模式(实验阶段)
- 贡献
- FAQ

## Hello Word

## JSX 简介

WHY & WHAT

- 为了能够在 JS 中使用标记语言
- JSX 最终会被 babel 转译成名为 `React.createElement()` 函数调用

## 元素渲染

- `ReactDOM.render()` 用于将 `React` 元素渲染到 `DOM` 节点
- 想要改变 `DOM` 节点内容，可以重新调用 `ReactDOM.render()` ，或者把要改变的内容放入状态中，控制状态的改变来触发 `re-render`
- `React` 在更新时会与之前状态进行比对，只更新它需要更新的部分

## 组件 & Props

- 组件首字母必须大写，因为 babel 会根据这个进行不同形式的转换

## State & 生命周期

- 生命周期： `class` 组件声明的特殊的方法，在组件挂载，卸载时会执行这些方法
- 直接修改 `state` 不会触发组件的重新渲染
- `state` 更新可能是异步的，具体场景？
- `state` 更新合并，为了避免这个，可以给 `setState` 传递回调

## 事件处理

- 驼峰命名
- 阻止事件默认行为使用`preventDefault`，`return false`无法生效

定义处理事件处理函数的方法形式

- 在 `class` 中定义方法，并且在 `constructor` 使用 `bind` 对 `this` 进行绑定。在 `class` 中定义的方法默认会被挂载到 `class` 的原型链上
- 属性初始化(实例属性新写法)，因为这种新语法可以使用箭头函数。属性初始化需要与静态属性/静态方法进行区分。
- 在 `class` 中定义方法，在回调中使用进行箭头函数。`onClick={() => this.handleClick()}`

传递参数的两种形式，分别使用箭头函数和 `bind` 实现,使用 `bind` 事件对象会被隐式的进行传递

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

## 条件渲染

- 与运算符& 三目运算符 `condition ? true : false`
- 返回 null 可以阻止组件渲染

## 列表 & key

- 为什么 key 是必须的
- 索引作为 key 的负面影响

## 表单

## 状态提升

## 组合 VS 继承

- 有些组件无法提前知道子组件的具体内容，比如 `sidebar dialog`，这些组件可以使用 `children prop` 将子组件进行渲染
- 上述场景也可以不使用 `children`，将所需的内容传入 `prop`，并使用对应的 `prop`，比如`<SplitPane left={<Contacts />} right={<Chat />} />`
- `react` 组件不需要继承，复用只需要直接引入即可

## React 哲学

- 对 UI 划分组件层级
- 自上而下或者自下而上构建应用，当应用比较简单时，使用自上而下的方式更方便，对于较大型的项目，自下而上构建，并同时为低层组件编写测试是更简单的方式
- 确定 state 位置
- 添加反向数据流-即能触发 state 改变的回调函数

如何确定 state 放置的位置

- 找到根据这个 state 进行渲染的所有组件
- 找到他们的共同所有者组件
- 该共同所有者组件是否拥有该 state
- 如果你找不到一个合适的位置来存放该 state，就可以直接创建一个新的组件来存放该 state，并将这一新组件置于高于共同所有者组件层级的位置。？

> ==============高级指引================

## 无障碍

## 代码分割

WHY & WHAT

- 背景：随着应用变大，代码包也会变大，会导致加载时间过长
- 目的：对代码进行分割能够帮助你“懒加载”当前用户需要的内容，能够显著提高应用的性能，可以避免加载用户不需要的代码，并在初始加载时减少所需加载的代码量

HOW

- 在 webpack 中使用 import-then 语法
- 使用 React.lazy，可以结合 Suspense 使用(用于处理组件加载时的 loading)
- 使用 Loadable Component 库，支持服务端渲染

## Context

- 场景：很多不同层级的组件需要访问相同的数据

使用

1.使用 `React.createContext(初始值)` 创建一个 `Context` 对象，该对象包含 `Provider` 以及 `Consumer` 两个属性(两个属性都是 react 组件) 2.在 `Provider` 中定义要向下传递的 `value` 3.在 class 中使用 value，通过静态属性 `contextType` 接收 `Context` 对象，在 class 内部就可以直接使用 `this.context` 获取到 value 4.在函数组件中使用，需要使用 `Consumer`，并通过 `render-props`(函数作为子元素) 的形式获取到 value 值

## 错误边界

- 只要在 class 组件中定义了`static getDerivedStateFromError` 或 `componentDidCatch` 时，它就会变成一个错误边界，可以当做组件进行使用

## Refs 转发

- 场景：父组件给子组件传递 ref，(常规函数和 class 组件不接受 ref 参数，且 props 中也不存在 ref)
- 使用 React.forwardRef 可以对 ref 进行转发

```js
// 定义组件，接收ref
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// 使用组件，定义ref
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

- 在 HOC 中实现透传(pass through)props 到包裹的组件

## Fragment

- 避免渲染多余 `DOM` 元素，支持 `key` 属性，`<></>`不支持 `key` 属性

## 高阶组件

- 应用场景: 两个组件具备相同的逻辑，仅仅是 props 不同。可以抽成一个高阶组件

注意事项

- 不要改变原始组件，比如改变原始子组件 prototype 上面的生命周期函数
- 透传与本身无关的 props
- 接收两个参数，可以最大化组合，其中第二个参数才是组件，比如 withRouter 高阶组件
- 通过设置 displayName 属性，方便在 dev tools 用于调试
- 不要在 render 方法中使用 HOC，函数式组件不应该在函数内部使用 HOC，这两种都会导致 HOC 的重新挂载与卸载
- 传递 ref 需要使用 React.forwardRef

## 与第三方库协同

- 在 `componentDidMount` 生命周期 注册第三方库实例，在组件卸载时销毁实例

## 深入 JSX

- JSX 只是 React.createElement()的语法糖
- 因为 JSX 会编译为 React.createElement 调用形式，所以 React 库必须包含在 JSX 代码作用域内
- 在 JSX 标签中使用 . 语法
- 动态加载 不同组件
- ...

## 性能优化

- 组件使用 PureComponent, 浅比较策略？
- 使用不可变数据

## Portals

?

## Profiler

?

## 不适用 ES6

- 需要用到`react-create-class`

## 不使用 JSX 的 React

- 每个 JSX 元素知识调用 React.crateElement(component, props, ...children)的语法糖，组件可以是字符串，或者是 Component 的子类，也可以是一个普通的函数

## 协调(reconciliation)

- react differ 策略
- 对子节点递归，当没有 key 时，更新开销可能会比较大，比如在列表的头部插入一个新的节点

## Refs and the DOM

- 可以在 class 组件直接使用 ref 从而获取该 class 组件的实例，但是不能直接用于函数组件上，因为他们没有实例
- 函数式组件可以使用 forwardRef 来接收 refs, 结合 useImperativeHandle 可以向外暴露 refs
- 将 DON refs 暴露给父组件？ refs 暴露给子组件需要使用 React.forwardRef，或者可以通过 ref 回调函数的形式进行传递

## Render

- render-props 会抵消 React.PureComponent 的效果，因为浅比较都会得到 false，每次 render 都会产生一个新的函数，解决方法是定义实例方法

## 静态类型检查

- 使用 typescript

## 严格模式

- 有助于识别不安全的生命周期或者过时以及废弃的 api 等

## 使用 PropTypes 类型检查

- 需要使用 prop-types 第三方包

## 非受控组件

- 对于 Input 可以使用 ref.current.value 获取表单值
- input type=file 始终是非受控组件，它的值只能由用户设置，而不能通过代码控制

## Web Components

- 谷歌推出的浏览器的原生组件

> =======API REFERENCE=========

## React

- React 导出的一些 api

## React.Component

- class 组件声明周期及注意事项

## ReactDOM

## ReactDOMServer

## DOM 元素

- 与普通 html 的差异

## 合成事件

## Test Utilities

## Test Renderer

## Javascript环境要求

## 术语表

元素、组件、props、props.children、state、

声明周期方法、受控&非受控组件、key
