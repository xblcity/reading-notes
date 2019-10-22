# React Docs

## MAIN CONCEPTS
### Hello World

### Introducing JSX
`const element = <h1>hello world</h1>`   
这种标记语法既不是字符串也不是HTML，它叫做JSX，它是JS的一种语法拓展，我们推荐用它在React描述UI，JSX可能会让你想到模板语法，但其实它拥有JS的全部功能
#### Why JSX
react的渲染逻辑和UI逻辑紧密结合在一起：事件如何被处理，状态如何改变，数据如何被展示
在JS中描述UI较好的选择？
#### USE JSX
- 可以在JSX中放任何合法的JS表达式
- 对于HTML属性，使用驼峰语法
- JSX语法通过babel-preset-env-react以及React.createElement()转换成vdom，即js对象格式
```js
// JSX对象
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
// 经过babel
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
// 执行React.createElement
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

### Rendering Elements
element&components: components是由elements构成的
把React element 转换成DOM node，需要使用`ReactDOM.render()`
```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

#### 如何更新DOM
多次调用`ReactDOM.render()`并不是可取之策，事实上我们只改变了应用的一部分，但是却让整个应用更新，造成了性能上的下降。事实上，大部分应用只需要调用一次`ReactDOM.render()`  
**React Only Updates What’s Necessary**

### Components and Props
Components使得你可以把组件划分成独立可复用的部分，并且可以单独考虑每个部分。  
从概念上讲，组件就像是JS的函数，接收任意输入(称之为props)并且返回可以描述UI的React元素  
react组件分为函数组件和class组件，组件首字母要大写，用于JSX的识别，是react component还是html element  

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
在上述例子中发生了哪些事情呢？  
- 调用ReactDOM.render()并传入react element `<Welcome name="Sara" />`
- React调用Welcome组件并传入`{name："Sara"}`这个props
- Welcome组件返回`<h1>Hello, Sara</h1>`这个element作为结果
- ReactDOM更新视图

##### Tips
- React app通常有一个顶层的App组件，你可以通过很小的组件来构建这个顶层组件
- 组件尽可能拆分成更小的可复用的组件
- props是只读的，不要去改变它，把它当作纯函数对待

## State and Lifecycle
以时钟组件为例，如何改变视图而不是每次调用`ReactDOM.render`,首先需要把函数组件转换成class组件，class组件拥有render方法，也可以拥有自己的state，可以在class constructor中分配一个初始的this.state  
这段代码做了什么呢？//ES6拓展
```js
// 向基本构造函数传递props
constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
```
类组件始终都会用props作为参数调用基本构造函数

在组件中，在某个阶段调用的特殊的函数方法，称之为声明周期方法
在应用中，在组件被销毁后，释放资源是很重要的，一般在`componentWillUnmount`释放副作用，`componentDidMount`方法在组件刚被render到DOM中执行，在此处设置定时器是一个比较好的方式

我们通过setState来改变组件的local state, 完整代码：
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
让我们来回顾一下发生了什么以及一些方法的调用顺序  
1. 当`<Clock/>`传递给`ReactDOM.render()`的时候，react调用Clock组件的构造函数，当Clock需要展示当前时间的时候，它用一个包含当前时间的对象初始化了`this.state`，我们稍后会更新这个state  
2. React接着调用Clock组件的render方法，react通过这个知道哪些应该被展现在屏幕上，React接着用符合render的输出来更新DOM
3. 当Clock的输出插入到DOM之后，React调用`ComponentDidMount()`这个生命周期方法，在这个方法里面，Clock组件通知浏览器设置一个定时器每隔一秒来调用组件的`tick()`方法
4. 浏览器每隔一秒调用`tick()`方法，在这个方法里面，Clock组件通过调用调用`setState()`并传入一个包含当前时间的对象来更新UI，多亏了`setState()`的调用，React知道state已经发生改变，并且再次调用`render()`方法来知道哪些应该被展现在屏幕上，这一次，在`render()`方法里面的`this.state.date`会不一样，因此渲染输出将会包含这个更新过后的时间，React也相应的更新了DOM
5. 如果Clock组件从DOM中移除，react会调用`componentWillUnmount()`生命周期方法，所以定时器停止了  

使用state tips
- 不要直接改变state,这样不会触发重新渲染，唯一可以分配state的地方是在构造函数constructor中
- state更新也许是异步的，this.props,this.state可能会异步更新，不要依赖它们来改变下一次的state, 可以给setState传一个函数参数，该函数方法会接收前一次的state和当前的props作为该方法的两个参数
```js
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```
- react也许为将多次调用setState合并为一次调用setState来提高性能

数据流(The Data Flows Down)  
一个没有父组件以及自组件的组件是无法确定是有状态还是无状态的，所以它们并不需要关心是被定义为函数还是class组件，如：
```js
<FormattedDate date={this.state.date} />
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```
FormattedDate组件在props中会接收date并且不知道它是来自Clock的state还是Clock的props或是只是手打的，这种模式被称为自顶向下(top-down)或者单向(unidirectional)数据流,任何组件的数据派发只会影响在树形结构中它下面的组件，可以认为所有组件都是隔离的

## Handling Events
react元素中处理事件与DOM相似，但也有不同点
- react事件使用驼峰命名法，而不是小写
- 在jsx中需要传递一个函数作为事件处理函数，而不是一个字符串
- 在html中你可以通过return false来阻止html元素的默认行为，但是在react中，需要通过`e.preventDefault()`, e是个合成事件，在react中遵从了W3C标准
- 在jsx中不需要使用addEventListener()来为已经创建的dom绑定事件，相反，只需要提供一个事件按监听函数当元素首次被渲染后

#### js回调函数中的this
由于是window调用的事件处理程序函数，在class中，默认的this是Undefined，为了使得this表现的符合预期，推荐两种方式改变this指向：  
1. bind，需要在constructor构造函数中绑定，或者在jsx事件按处理程序中进行绑定
2. 使用箭头函数，这时的this是静态的，即指向class组件,在class内部定义，或者在回调函数中定义都可以
```js
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
```
但是回调函数的方式，每一次组件渲染都会渲染一个不同的回调函数，大多数情况，是没问题的，但如果在回调中传入了prop，会造成重复多次渲染，推荐在constructor中进行this绑定  

向事件处理程序传递参数
```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
以上两种方式是等价的，分别使用了使用箭头函数和Function.prototype.bind，在大多数情况下，e参数代表作为react事件的第二个参数(在ID之后)，在箭头函数中，我们显示的传递了，但是在使用Bind时，其他任何参数都会被自动转发