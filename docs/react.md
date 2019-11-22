# React Docs

> 官方文档是渐进式的，对于理解与使用React很有帮助，记一些我认为比较重要的点

## 目录

- MAIN CONCEPTS

  - [1.Hello World](https://github.com/xblcity/reading-notes/blob/master/docs/react.md#1.Hello-World)
  - [2.Introducing JSX](https://github.com/xblcity/reading-notes/blob/master/docs/react.md#2.Introducing-JSX)
  - [3.Rendering Elements](https://github.com/xblcity/reading-notes/blob/master/docs/react.md#3.Rendering-Elements)
  - [4.Components and Props](https://github.com/xblcity/reading-notes/blob/master/docs/react.md#4.Components-and-Props)
  - [5.State and Lifecycle](https://github.com/xblcity/reading-notes/blob/master/docs/react.md#5.State-and-Lifecycle)
  - [6.Handling Events](https://github.com/xblcity/reading-notes/blob/master/docs/react.md#6.Handling-Events)
  - [7.Conditional Rendering](https://github.com/xblcity/reading-notes/blob/master/docs/react.md#7.Conditional-Rendering)
  - [8.Lists and Keys](https://github.com/xblcity/reading-notes/blob/master/docs/react.md#8.Lists-and-Keys)
  - [9.Forms](https://github.com/xblcity/reading-notes/blob/master/docs/react.md#9.Forms)
  - [10.Lifting State Up](https://github.com/xblcity/reading-notes/blob/master/docs/react.md#10.Lifting-State-Up)
  - [11.Composition vs Inheritance](https://github.com/xblcity/reading-notes/blob/master/docs/react.md#11.Composition-vs-Inheritance)
  - [12.Thinking In React](https://github.com/xblcity/reading-notes/blob/master/docs/react.md#12.Thinking-In-React)

- ADVANCED GUIDES


  

## 第一部分 MAIN CONCEPTS (主要概念)

### 1.Hello World

### 2.Introducing JSX

`const element = <h1>hello world</h1>`   
这种标记语法既不是字符串也不是HTML，它叫做JSX，它是JS的一种语法拓展，我们推荐用它在React描述UI，JSX可能会让你想到模板语法，但其实它拥有JS的全部功能

#### Why JSX

react的渲染逻辑和UI逻辑紧密结合在一起：事件如何被处理，状态如何改变，数据如何被展示

JSX是在JS中描述UI较好的选择？

#### USE JSX

- 可以在JSX中放任何合法的JS表达式，需要加大括号
- 对于HTML属性，使用驼峰语法
- JSX语法通过`@babel/preset-react`以及`React.createElement()`转换成虚拟DOM(virtual DOM)，即js对象格式

```js
// JSX对象
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);  // jsx元素加不加括号有什么区别？ 好像是没有区别，都可以编译执行，()表现的更有可读性吧？
// 经过babel转换
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

### 3.Rendering Elements

element与components的关系: components是由elements构成的   
把React element 转换成真实的DOM node，需要使用`ReactDOM.render()`

```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

#### 如何更新DOM

多次调用`ReactDOM.render()`并不是可取之策，事实上我们只改变了应用的一部分，但是却让整个应用更新，造成了性能上的下降。事实上，大部分应用只需要调用一次`ReactDOM.render()`  

**React Only Updates What’s Necessary**(diff算法)

### 4.Components and Props

Components使得你可以把组件划分成独立可复用的部分，并且可以单独考虑每个部分。  
从概念上讲，组件就像是JS的函数，接收任意输入(称之为props)并且返回可以描述UI的React元素  
react组件分为函数组件和class组件，组件首字母要大写，**用于babel的识别与转换**，babel对于HTML原生元素与React组件的转换结果是不同的。

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
- props是只读的，不要去改变它，把它当作纯函数的参数对待

### 5.State and Lifecycle

以时钟组件为例，如何改变视图而不是每次调用`ReactDOM.render`,首先需要把函数组件转换成class组件，class组件拥有render方法，也可以拥有自己的state，可以在class constructor中分配一个初始的this.state  
这段代码做了什么呢？//ES6拓展：constructor为类的默认方法，通过new的调用可以执行这个方法，每个类都必须要有这个方法，如果没有显示定义，则一个空的constructor被添加到类里面。constructor方法默认返回实例对象，即this，，在constructor定义的都是实例属性~
```js
// 向基本构造函数传递props
constructor(props) {
  super(props);
  this.state = {date: new Date()};
}
```
类组件始终都会用props作为参数调用基本构造函数

在组件中，在某个阶段调用的特殊的函数方法，称之为生命周期方法   
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

使用state的一些建议

- 不要直接改变state,这样不会触发重新渲染，唯一可以分配state的地方是在构造函数constructor中(Q:也可以直接在class内部定义实例属性，在new操作符生成的实例初始化也会携带这个属性，缺点是无法通过传参的方式决定实例属性的值)
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

### 6.Handling Events

react元素中处理事件与DOM相似，但也有不同点
- react事件使用驼峰命名法，而不是小写
- 在jsx中需要传递一个函数作为事件处理函数，而不是一个字符串
- 在html中你可以通过return false来阻止html元素的默认行为，但是在react中，需要通过`e.preventDefault()`, e是个合成事件，在react中遵从了W3C标准
- 在jsx中不需要使用addEventListener()来为已经创建的dom绑定事件，相反，只需要提供一个事件监听函数当元素首次被渲染后

##### js回调函数中的this

在React中，在class中，事件处理函数中的this是Undefined(因为事件处理函数的方法提取出来调用了)，为了使得this表现的符合预期，推荐两种方式改变this指向：  
1. bind，需要在constructor构造函数中绑定，或者在jsx事件按处理程序中进行绑定
2. 使用箭头函数，这时的this是静态的，即指向class类，在class内部定义，或者在事件处理函数中

以下是使用箭头函数的两种不同方式
```js
class LoggingButton extends React.Component {
  // 此语法是ES6 class属性初始化语法，可参照 https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
  // 箭头函数中的this，是它在被定义时的所在函数的this，在这里是LoggingButton
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

// 把事件处理函数改成箭头函数
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 这里存疑？
    // onClick事件传入回调函数，回调函数是个箭头函数，window
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
```
但是回调函数的方式，每一次组件渲染都会渲染一个不同的回调函数，大多数情况，是没问题的，但如果在回调中传入了prop，会造成重复多次渲染，推荐在constructor中使用bind进行this绑定  

向事件处理程序传递参数
```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
以上两种方式是等价的，分别使用了使用箭头函数和Function.prototype.bind，在大多数情况下，e参数代表作为react事件的第二个参数(在ID之后)，在箭头函数中，我们显示的传递了，但是在使用Bind时，其他任何参数都会被自动转发

#### 补充一下在HTML中事件的this
PS.在HTML中事件处理程序的this是window，对于DOM0级和DOM2级事件绑定来说，回调函数中的this是绑定事件的DOM元素，比如
```js
<button onclick="check()">按钮1</button>  // 事件处理程序内容可以是一个js函数，也可以是js代码
<button id="click-button2">按钮2</button>
<button id="click-button3">按钮3</button>
<script>
  var check = function () {
    console.log('按钮1的this', this) // window
  }

  document.querySelector('#click-button2').onclick = function () {
    console.log('按钮2的this', this) // <button id="click-button2">按钮2</button>
  }

  document.querySelector('#click-button3').addEventListener('click', function () {
    console.log('按钮3的this', this)  // <button id="click-button3">按钮3</button>
  })
</script>
```

#### ES6 class中的this

对于es6的class来说，如果把方法提取出来单独使用，this是undefined，如
```js
class A {
  foo() {
    console.log('foo this', this)
  }
  bar() {
    console.log('bar this', this)
  }
}

A.prototype.foo() // class A
const { bar } = new A()
bar()  // undefined
```
一个比较简单的解决办法就是在constructor中使用bind进行this绑定

在react中，JSX中写的事件并没有绑定到对应的真实DOM上，而是通过事件代理的方式，将所有的事件都统一绑定在了document上。这样的方式不仅减少了内存消耗，还能在组件挂载销毁时统一订阅和移除事件。//这里并不是很懂。

### 7.Conditional Rendering

使用if或者条件运算符(三元表达式 a?b:c)或逻辑运算符&&，比如，用户登陆与未登录需要展示不同的UI，这时候就可以使用条件渲染  
在jsx中使用表达式需要包裹大括号  
return null 可以阻止组件渲染，但是组件仍然存在生命周期

### 8.Lists and Keys

Keys帮助react辨别哪个item发生变化，被添加或者被移除。keys应当被赋予给数组里的元素，来给这些元素稳定的标识，一般使用string类型的字符串，不推荐使用数组index作为key，当数组发生变化时，react无法正确判断哪些item发生了变化，会影响正确渲染。  
key作为react的一个提示，但是它们并不会传递给组件。  
如果map()里面嵌套过多，也许是把它提取成组件的好时机

### 9.Forms

HTML中的form元素与其他在react中的dom元素有些不同，因为这些form元素一般有着自己的内部状态

#### Controlled Components

在html中，form元素如`<input/>,<textarea/>,<select/>`等通常拥有自己的内部状态，并且会随着用户输入而更新，但在react中，更新视图的方法只有setState()   

改成受控组件，对于`<input/>`, input的value来源应当是`this.state.value`，而通过input的onChange事件来`setState()`更改`this.state`并且更新UI

对于`<select/>`, 在html中，用select属性表示当前被选中的项，在react中，使用value表示当前被选中的时哪一项，如`<select value={this.state.value} onChange={this.handleChange}/>`，当options为多选时，value可以是一个数组，如`<select multiple={true} value={['B', 'C']}`

对于file input tag，由于它时只读的，所以它不是react的受控组件

### 10.Lifting State Up

几个组件经常会被一个改变的数据源所影响，需要尽量把状态提升至它们最接近的共同祖先  
参考官方例子，比如`Calculator`组件包含多个`TemperatureInput`组件，多个`TemperatureInput`组件的input输入框的值同步改变，所以要把本来在`TemperatureInput`组件的state提升到`Calculator`组件中，由于传递给`TemperatureInput`的props是不能改变的，`TemperatureInput`组件中input值(即temperature)只能通过`this.setState()`改变，但是，temperature的值是通过父组件的props传递进来的，`TemperatureInput`组件无法控制它的值

在react中，这通常可以通过让组件被控制解决，就像是DOM`<input/>`接受一个`value`和`onChange`prop，可以让TemperatureInput接受来自父组件`Calculate`的`temperature`和`onTemperatureChange` prop  
现在，当`TemperatureInput`想要更改它的温度的时候，调用`this.props.onTemperatureChange`即可，如
```js
handleChange(e) {
  this.props.onTemperatureChange(e.target.value)
}
```

官方例子，what happens when you edit an input: // Todo

### 11.Composition vs Inheritance

##### Containment

有些组件不会提前知道它的子组件，这些在那些如侧边栏(Sidebar)或者对话框(Dialog)等代表这通用的盒子比较常见。我们推荐使用特殊的prop`children`来把子元素当作输入直接传递给该组件，即`props.children`，当然，有时候你也可以把组件当作prop传递给容器组件，有点类似插槽(slots),如：
```js
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```

我们不推荐通过继承层次结构创建组件，如果想复用无UI的功能性代码，推荐把它提取成一个单独的js模块

### 12.Thinking In React

对于一个组件复杂组件  
1. Break The UI Into A Component Hierarchy(将UI拆分成组件层次结构)   
从UI的方面拆分组件

2. Build A Static Version in React(在React中创建一个静态的版本)
创建静态版本组件时，不要使用state，state只用于那些有互动性的组件，你可以自上而下或者自下向上创建组件，通常，自顶向下更容易，但在大的项目中，自下而上更容易书写和测试，对于那些可以复用的组件，一般只需要渲染逻辑就可以了(render方法)  

3. Identify The Minimal (but complete) Representation Of UI State(识别UI state的最小(但完整)的表示) 

如何正确构建应用，你需要考虑应用程序需要的最小可变状态，关键时DRY(Don't Repeat Yourself)，在上述例子中，我们有：  
- 商品列表数据
- 用户输入的搜索文字
- checkbox的值
- 被过滤后的商品列表

每种数据需要做以下思考：  
- 是否由父组件传入，如果是，那就不用state
- 是否随着发生变化？如果不变化，那就不用state
- 是否可以由其他的state或者prop计算得出，如果是，就不用state

最后我们得出可以作为state的是，input输入值以及checkbox的值

4. Identify Where Your State Should Live(判断你的state应该存放在哪里)
记住，react只有一种自顶向下的数据流。  
对于，每一个在应用中存在的state，你需要考虑以下几点：   
- 组件的渲染是否依赖state
- 找到一个可以分发这些state的组件
- 在结构上处于较高部分的组件因该拥有state
- 如果你不知道哪个组件要拥有状态，创建一个只拥有state的组件并把它放在结构组件的某一位置

5. Add Inverse Data Flow(添加逆向数据流)
现在需要以另一种方式支持数据流：表单组件的数据更新需要更新`FilterableProductTable`的state，react使数据明确化，与传统的双向数据绑定，确实需要更多的输入


完整示例
```js
// 类别的小标题，传入props类别名称
class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

// 最小组件，一行产品，传入props商品名字和价格
class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

// 用于展示的表格，传入props产品列表数组，关键字，是否只显示打折商品
class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

// 搜索框，props传入input值和change回调，checkbox值和对应change回调
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

// 容器组件，有自己的state，保存text值和checkbox的值，包含两个自组件，并传入相应props
// 容器组件接收外部定义的商品列表prop
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
```

## 第二部分 ADVANCED GUIDES (高级指南)

### 1.Accessibility (易接近性？)

- 在react中可以使用aria-xxx，帮助残障人士理解应用
- 语义化的HTML
- 无障碍表单
- 焦点控制，以编程的方式控制焦点，需使用refs
```js
class CustomTextInput extends React.Component {

  constructor(props) {
    super(props);
    // Create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
  // Use the `ref` callback to store a reference to the text input DOM
  // element in an instance field (for example, this.textInput).
    return (
      <input
        type="text"
        ref={this.textInput}
      />
    );
  }
}
```
再父组件中获取自组件的DOM
```js
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  render() {
    return (
      <CustomTextInput inputRef={this.inputElement} />
    );
  }
}

// Now you can set focus when required.
this.inputElement.current.focus();
```

- 鼠标和指针事件，为window注册事件，当点击document时，移除某些状态
- 更复杂的小组件：尽量使用html中的aria-xx属性
- 其他考虑事项：设置语言，设置html文档标题，颜色对比
- 开发和测试工具：如何更易近性

### 2.Code-Splitting

代码分割，只有在需要的时候才会加载对应的bundle  

- 使用import().then()异步加载，webpack使用了这种语法，但目前js并不支持(在提案中)
- 使用React.lazy()和Suspense()(但是服务端渲染暂不支持，可以使用loadable)，Suspense可以放在任何你希望懒加载的地方

##### 使用Suspense与懒加载

- 为懒加载增加错误处理
- 以路由为单位进行代码分割
- React.lazy()只支持默认的导出

### 3.Context

Context提供一种可以不通过props进行数据传递的方式  
在React应用中，数据是通过props自上而下传递的，但是这在传递一些固定类型的props(如locale preference, UI theme)会比较麻烦，因为很多组件都会用到它，Context提供了一种方式可以共享值，但是不用通过树的每一层明确地传递props。

Context由两部分构成，分别是Provider Component与Consumer Component，首先，创建一个Context，即`const MyContext = React.createContext(defaultValue)`，使用了`React.createContext()`api，并传入了一个初始值，紧接着，使它成为提供者角色`<MyContext.Provider value={} />`，

Consumers可以有多个，Consumers可以获取到上层的Provider，consumer如何获取context的值？在组件上定义一个静态属性`contextType`，值是Provider的context的名称标识，在本例中，是`MyContext`，紧接着，该组件会被绑定一个context属性，然后我们使用`this.context`即可获取Provider的context的值，并且当Provider的context的值发生变化时，Consumer组件的context也会随之发生变化

```js
MyClass.contextType = MyContext // 或者在class内部定义静态属性，如static contextType = MyContext
class MyClass extends React.component {
  render() {
    let value = this.context
    return (
      <div>{value}</div>
    )
  }
}
```

也有一种更简单的办法使用Consumer context，如下，这样让你可以在函数组件中使用context

```js
// 接收回调函数作为child
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```


嵌套传递prop theme
```js
class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  // The Toolbar component 必须要传递一个多余的prop "theme"
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}
```
使用Context
```js
const ThemeContext = React.createContext('light')

class App extends React.component {
  render() {
    // 使用Provider为下面的组件提供 theme，所有在底下的组件都可以获取该值
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  }
}

// 不用传递多余的prop
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 使用一个contextType可以读取context，值即要读取的Provider的context
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```

context常被用于多个在不同嵌套层次的组件需要共享同一些数据时，但是如果你只是想通过多层结构传递数据时，component composition是更好的选择，如下

```js
// 改造之前
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... which renders ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... which renders ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>

// 之后
function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// Now, we have:
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout userLink={...} />
// ... which renders ...
<NavigationBar userLink={...} />
// ... which renders ...
{props.userLink}
```
可以理解为插槽，减少了prop的传递，并且使得根组件有更好的控制，但是会让根组件变得复杂

列一些官网的例子
在context定义回调，使得嵌套组件可以改变context，下例的Consumer两种使用都有列出

```js
// theme-context.js
// 定义Provider Context初始值
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

// App
import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // state包含主题色，以及更新主题色的回调函数
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // 将state都传给Provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

ReactDOM.render(<App />, document.root);

// ThemeTogglerButton
// 引入Provider Context
import {ThemeContext} from './theme-context';

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;

// 这里再写一下，不使用ThemeContext.Consumer的class组件用法
import {ThemeContext} from './theme-context';

class ThemeTogglerButton extends React.component {
  static contextType = ThemeContext
  render() {
    return (
      <button
        onClick={this.context.toggleTheme}
        style={{backgroundColor: this.context.theme.background}}>
        Toggle Theme
      </button>
    );
  }
 }

export default ThemeTogglerButton;
```

Consumer也订阅多个Provider的context，见官网。

使用Context的注意事项，如果把context的值作为一个外部传入值，那么当根组件重新渲染的时候，所有的Consumer组件都会重新渲染，如下例
```js
class App extends React.Component {
  render() {
    return (
      <Provider value={{something: 'something'}}>
        <Toolbar />
      </Provider>
    );
  }
}

// 把value作为父组件的state，只更新要更新的部分
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {something: 'something'},
    };
  }

  render() {
    return (
      <Provider value={this.state.value}>
        <Toolbar />
      </Provider>
    );
  }
}
```

### 4.Error Boundaries
React组件内部的错误会使得状态更新的时候组件报错，但在react中没有优雅处理这种错误的方法

错误边界可以使得React组件在render的时候捕获错误，并展示回退的UI，但错误边界无法捕获下面错误：  
- 事件处理程序
- 异步代码(如定时器回调)
- 服务端渲染
- 错误边界自己抛出的错误

主要利用了`getDerivedStateFromErrors()`以及`componentDidCatch()`

### 5.Forwarding Refs
```js
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```
在上面的例子里发生了什么？   
- 调用`React.createRef()`创建了一个React ref，并给他赋值给一个变量，这里我们叫ref
- 我们把ref作为一个JSX属性传递给`FancyButton`组件
- React通过`React.forwardRef()`即`(props, ref) => ...`把ref传递进来
- 我们给`<button>`元素添加ref属性来传递`ref`
- 当给定了ref后，ref.current就指向了`<button>`这个元素

要注意的是，ref参数只有在你使用`React.createRef()`的时候才会作为第二个参数传递

### 6.Fragments
在react中一个组件返回多个元素是很常见的，Fragment可以使你将多个元素包裹但是不产生多余的DOM节点，因为react一个组件必须要有一个唯一的DOM节点，不想产生多余的DOM节点就可以用Fragment，简洁语法：`<></>`，但是不支持keys或者属性，另外需要注意的是，key是唯一可以传递给`Fragment`的属性

### 7.Higher-Order Components
HOC是一种复用组件逻辑的一种高级技术，具体来说，HOC是一个可以接收组件并return一个新class组件的函数，HOC在react的第三方库很常见，比如redux的`connect`，再`connect`中是通过一个高阶函数返回一个高阶组件的形式来实现HOC的

```js
import React from 'react';

function withSimple(WrappedComponent, title) { // 注意，这里的W要大写，因为是自定义组件要用于渲染
  // 这里经过babel转换后的vnode, type是React.createElement()，支持的格式，转换成了字符串
  return class extends React.Component {
    render() {
      return <WrappedComponent title={title}/>
    }
  }
  // 如果是直接return了组件呢？经过babel转换后的vnode，type是class Text，不是React.createElement()支持的格式，应该是string
  return <wrappedComponent />
}


class Test extends React.Component {
  render() {
    return <div>{this.props.title}</div>
  }
}

const App = withSimple(Test, '这是标题')
console.log('打印App', App)

export default App

// 一般第三方HOC是个柯里化函数，处理第一个参数，再处理第二个组件参数，比如
const withSimple = (title) => (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent title={title}/>
    }
  }
}

class Test extends React.Component {
  render() {
    return <div>{this.props.title}</div>
  }
}

const App = withSimple('这是一个标题')(Test)

export default App

// 实际中的一个例子，执行并接收一个参数
connect(mapStateToProps)(Form.create()(AskForm))

// 如果使用ES5的方式，实现HOC柯里化
function withSimple(title) {
  return function(WrappedComponent) {
    return class extends React.Component {
      render() {
        return <WrappedComponent title={title}/>
      }
    }
  }
}
```
经过高阶组件处理后的新的组件在React Dev Tools中查看，不会多出组件，处理后的新组件依然是原来组件的名字   
可以在JSX元素标签内通过`{...this.props}`把所有的props都传递给子组件

如果我们使用了多个高阶函数，比如使用了withRouter以及connect这两个第三方高阶函数，下面是它的实现。
```js
const EnhancedComponent = withRouter(connect(commentSelector)(WrappedComponent))
// 可以使用一个工具方法，compose(f, g, h)的作用就是，将其转换成 (...args) => f(g(h(..args)))
const enhance = compose(withRouter, connect(commentSelector))
const EnhanceComponent = enhance(WrappedComponent)
```

### Integrating with Other Libraries