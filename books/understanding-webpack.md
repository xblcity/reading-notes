# 深入浅出webpack

- [第一章 入门](#第一章-入门)

- [第二章 配置](#第二章-配置)

- [第三章 实战](#第三章-实战)

## 第一章 入门

构建工具比如webpack出现背景：一些新出现的框架，库比如react,vue,ts,less等源代码无法直接运行，必须通过转换后才可以正常运行

构建就是做这件事情，把源代码转换成发布到线上的可执行 JavaScrip、CSS、HTML 代码，包括如下内容。

- 代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS 等。
- 文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等。
- 代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载。
- 模块合并：在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件。
- 自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。
- 代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。
- 自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。

常用构建工具

- Npm Scripts, 是一个任务执行者，npm scripts是npm内置的一个功能，允许在package.json文件中使用scripts字段定义任务

- Grunt与npm类似，也是一个任务执行者

- Gulp是一个基于流的构建工具

- Webpack, 在 Webpack 里一切文件皆模块，通过 Loader 转换文件，通过 Plugin 注入钩子，最后输出由多个模块组合成的文件。Webpack 具有很大的灵活性，能配置如何处理文件，缺点是只能用于采用模块化开发的项目。

- Rollup Rollup 是一个和 Webpack 很类似但专注于 ES6 的模块打包工具。 Rollup 的亮点在于能针对 ES6 源码进行 Tree Shaking 以去除那些已被定义但没被使用的代码，以及 Scope Hoisting 以减小输出文件大小提升运行性能。 然而 Rollup 的这些亮点随后就被 Webpack 模仿和实现。 由于 Rollup 的使用和 Webpack 差不多，但是很多功能尚不完善

## 第二章 配置

配置 Webpack 的方式有两种：

1. 通过一个 JavaScript 文件描述配置，例如使用 webpack.config.js 文件里的配置；
2. 执行 Webpack 可执行文件时通过命令行参数传入，例如 webpack --devtool source-map。

这两种方式可以相互搭配，例如执行 Webpack 时通过命令 webpack --config webpack-dev.config.js 指定配置文件，再去 webpack-dev.config.js 文件里描述部分配置。

### 2.1. Entry

Webpack 会为每个生成的 Chunk 取一个名称，Chunk 的名称和 Entry 的配置有关：

- 如果 entry 是一个 string 或 array，就只会生成一个 Chunk，这时 Chunk 的名称是 main；
- 如果 entry 是一个 object，就可能会出现多个 Chunk，这时 Chunk 的名称是 object 键值对里键的名称。

### 2.2 Output

#### filename

output.filename 配置输出文件的名称，为string 类型。 如果只有一个输出文件，则可以把它写成静态不变的： `filename: 'bundle.js'`

但是在有多个 Chunk 要输出时，就需要借助模版和变量了。前面说到 Webpack 会为每个 Chunk取一个名称，可以根据 Chunk 的名称来区分输出的文件名：`filename: '[name].js'`

内置变量包括：

- id	Chunk 的唯一标识，从0开始
- name	Chunk 的名称
- hash	Chunk 的唯一标识的 Hash 值
- chunkhash	Chunk 内容的 Hash 值

其中 hash 和 chunkhash 的长度是可指定的，[hash:8] 代表取8位 Hash 值，默认是20位。

#### path

output.path 配置输出文件存放在本地的目录，**必须是 string 类型的绝对路径。** 通常通过 Node.js 的 path 模块去获取绝对路径：

```js
path: path.resolve(__dirname, 'dist_[hash]')
// path.resolve() 方法将路径或路径片段的序列解析为绝对路径。给定的路径序列从右到左进行处理
```

#### publicPath

output.publicPath 配置发布到线上资源的 URL 前缀，为string 类型。 默认值是空字符串 ''，可以使用绝对路径或相对路径

```js
// 发布到线上的所有资源的 URL 前缀，string 类型
publicPath: '/assets/', // 放到指定目录下
publicPath: '', // 放到根目录下
publicPath: 'https://cdn.example.com/', // 放到 CDN 上去
```

在使用外部资源，比如图片，文件等。可以配置CDN地址，加快静态资源的访问速度

需要保证服务器有这个资源，否则会404

比如，这样配置

```js
path: path.resolve(__dirname, "public/assets"),
publicPath: "https://cdn.example.com/assets/"
```

打包出后bundle在html中的表现

```js
<script src="https://cdn.example.com/assets/bundle.js"></script>  
```

#### 其他

```js
{
  chunkFilename: '[id].js', // 附加 Chunk 的文件名称
  sourceMapFilename: '[file].map', // 生成的 Source Map 文件名称
  crossOriginLoading: 'use-credentials', // 异步加载跨域的资源时使用的方式
  crossOriginLoading: 'anonymous',
  crossOriginLoading: false,
}
```

就是说所有静态资源都会加一个绝对路径的前缀，即引用网络资源

### 2.3 Module ！！注意，并没有loader配置项

```js
module: {
  rules: [],
  noParse: /jquery|chartjs/  // 不用解析和处理的模块
}
```

### 2.4 resolve

Webpack 在启动后会从配置的入口模块出发找出所有依赖的模块，Resolve 配置 Webpack 如何寻找模块所对应的文件。 Webpack 内置 JavaScript 模块化语法解析功能，默认会采用模块化标准里约定好的规则去寻找，但你也可以根据自己的需要修改默认的规则。

```js
resolve: {
  alias: {
    @: './src' // 通过别名来把原导入路径映射成一个新的导入路径
  }，
  extensions: ['.js', '.json'], // 配置在尝试过程中用到的后缀列表,默认是js json
  extensions: ['.ts', 'js', 'jsx', 'less', '.json'], // 自定义配置
  modules: ['node_modules'], // 默认
  modules: ['./src/components','node_modules'], // 一些模块会大量被其它模块依赖和导入， 这个路径有时候会很长,配置此选项可以不用书写路径
}
```

配置别名，在vs code编辑器需要安装一个插件，以及根目录配置jsconfig

### 2.5 Plugins

Plugin 的配置很简单，plugins 配置项接受一个数组，数组里每一项都是一个要使用的 Plugin 的实例，Plugin 需要的参数通过构造函数传入。

```js
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  plugins: [
    // 所有页面都会用到的公共代码提取到 common 代码块中
    new CommonsChunkPlugin({
      name: 'common',
      chunks: ['a', 'b']
    }),
  ]
};
```

### 2.6 devServer

除了在配置文件里通过 devServer 传入参数外，还可以通过命令行参数传入。

#### hot

模块热替换功能。 DevServer 默认的行为是在发现源代码被更新后会通过自动刷新整个页面来做到实时预览，开启模块热替换功能后将在不刷新整个页面的情况下通过用新模块替换老模块来做到实时预览。

#### 其他

```js
{
  proxy: { // 代理到后端服务接口
    '/api': 'http://localhost:3000'
  },
  inline: true, // todo
  contentBase: path.join(__dirname, 'public'), // 配置 DevServer HTTP 服务器的文件根目录???
  headers: { // 在 HTTP 响应中注入一些 HTTP 响应头
    'X-foo':'bar'
  },
  host: '127.0.0.1', // 默认 
  host: '192.168.10.156', // 局域网其他设备也可以访问 
  prot: '8080',
  allowedHosts: { // 配置HTTP请求白名单
    // 匹配单个域名
    'host.com',
    'sub.host.com',
    // host2.com 和所有的子域名 *.host2.com 都将匹配
    '.host2.com'
  }，
  https: true, // 切换https服务，因为http2以及Service Worker 就必须运行在 HTTPS 之上
  // DevServer 会自动的为你生成一份 HTTPS 证书。

  // 如果你想用自己的证书可以这样配置：
  https: {
    key: fs.readFileSync('path/to/server.key'),
    cert: fs.readFileSync('path/to/server.crt'),
    ca: fs.readFileSync('path/to/ca.pem')
  },
  compress: true, // 配置是否启用 gzip 压缩。boolean 为类型，默认为 false。
  hot: true, // 是否开启模块热替换功能
  cache: true // 是否启用缓存提升构建速度
}
```

### 2.7 其他配置项

#### Target

target 配置项可以让 Webpack 构建出针对不同运行环境的代码。

#### Devtool

devtool 配置 Webpack 如何生成 Source Map，

```js
devtool: 'source-map'
```

#### watch以及watchOptions

Webpack 的监听模式，它支持监听文件更新，在文件发生变化时重新编译。默认关闭，在使用devServer默认是开启的

```js
watch: true,
watchOptions: {
  ignored: /node_modules/,
  aggregateTimeout: 300, // // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
  poll: 1000 // // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的,默认每隔1000毫秒询问一次
}
```

#### Externals

Externals 用来告诉 Webpack 要构建的代码中使用了哪些不用被打包的模块，也就是说这些模版是外部环境提供的，Webpack 在打包时可以忽略它们。

有些 JavaScript 运行环境可能内置了一些全局变量或者模块，例如在你的 HTML HEAD 标签里通过以下代码：

```js
<script src="path/to/jquery.js"></script>
```

引入 jQuery 后，全局变量 jQuery 就会被注入到网页的 JavaScript 运行环境里。

如果想在使用模块化的源代码里导入和使用 jQuery，可能需要这样：

```js
import $ from 'jquery';
$('.my-element');
```

构建后你会发现输出的 Chunk 里包含的 jQuery 库的内容，这导致 jQuery 库出现了2次，浪费加载流量，最好是 Chunk 里不会包含 jQuery 库的内容。

Externals 配置项就是为了解决这个问题。

通过 externals 可以告诉 Webpack JavaScript 运行环境已经内置了那些全局变量，针对这些全局变量不用打包进代码中而是直接使用全局变量。 要解决以上问题，可以这样配置 externals：

```js
module.export = {
  externals: {
    // 把导入语句里的 jquery 替换成运行环境里的全局变量 jQuery
    jquery: 'jQuery'
  }
}
```

#### ResolveLoader

ResolveLoader 用来告诉 Webpack 如何去寻找 Loader，因为在使用 Loader 时是通过其包名称去引用的， Webpack 需要根据配置的 Loader 包名去找到 Loader 的实际代码，以调用 Loader 去处理源文件。该配置项常用于加载本地的 Loader。

### 2.8 整体配置i结构

参考 [webpack整体配置](https://webpack.wuhaolin.cn/2%E9%85%8D%E7%BD%AE/2-8%E6%95%B4%E4%BD%93%E9%85%8D%E7%BD%AE%E7%BB%93%E6%9E%84.html)

### 2.9 多种配置类型

在大多数时候你需要从同一份源代码中构建出多份代码，例如一份用于开发时，一份用于发布到线上。

如果采用导出一个 Object 来描述 Webpack 所需的配置的方法，需要写两个文件。 一个用于开发环境，一个用于线上环境。在启动时通过 webpack --config webpack.config.js 指定使用哪个配置文件。

```js
const path = require('path');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = function (env = {}, argv) {
  const plugins = [];

  const isProduction = env['production'];

  // 在生成环境才压缩
  if (isProduction) {
    plugins.push(
      // 压缩输出的 JS 代码
      new UglifyJsPlugin()
    )
  }

  return {
    plugins: plugins,
    // 在生成环境不输出 Source Map
    devtool: isProduction ? undefined : 'source-map',
  };
}
```

在运行 Webpack 时，会给这个函数传入2个参数，分别是：

1. env：当前运行时的 Webpack 专属环境变量，env 是一个 `Object`。读取时直接访问 `Object` 的属性，设置它需要在启动 Webpack 时带上参数。例如启动命令是 `webpack --env.production --env.bao=foo`时，则 env 的值是 `{"production":"true","bao":"foo"}`。

2. argv：代表在启动 Webpack 时所有通过命令行传入的参数，例如 `--config、--env、--devtool`，可以通过 `webpack -h` 列出所有 `Webpack` 支持的命令行参数。

## 第三章 实战

### 使用ES6语言

虽然目前部分浏览器和 Node.js 已经支持 ES6，但由于它们对 ES6 所有的标准支持不全，这导致在开发中不敢全面地使用 ES6。

通常我们需要把采用 ES6 编写的代码转换成目前已经支持良好的 ES5 代码，这包含2件事：

1. 把新的 ES6 语法用 ES5 实现，例如 ES6 的 class 语法用 ES5 的 prototype 实现。
2. 给新的 API 注入 polyfill ，例如项目使用 fetch API 时，只有注入对应的 polyfill 后，才能在低版本浏览器中正常运行。

Babel 可以方便的完成以上2件事。 Babel 是一个 JavaScript 编译器，能将 ES6 代码转为 ES5 代码，让你使用最新的语言特性而不用担心兼容性问题，并且可以通过插件机制根据需求灵活的扩展。 在 Babel 执行编译的过程中，会从项目根目录下的 .babelrc 文件读取配置。.babelrc 是一个 JSON 格式的文件，内容大致如下：

```js
// json文件不允许有注释
{
  "plugins": [  // 插件，数组
    [
      "transform-runtime",  // 减少冗余代码
      {
        "polyfill": false  // 支持浏览器的范围
      }
    ]
   ],
  "presets": [  // 告诉 Babel 要转换的源码使用了哪些新的语法特性
    [
      "es2015",
      {
        "modules": false
      }
    ],
    "stage-2",
    "react"
  ]
}
```

注：原文的配置是基于babel@6, babel@7配置的插件以及preset名字以及配置项有所变化

并且`presets`的 `@babel/preset-env` 包含了 `babel-preset-es2015` `babel-preset-es2016` `babel-preset-es2017` `babel-preset-latest` 全部

```js
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        // "polyfill": false // polyfill babel7成为默认项
      }
    ]
   ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": auto
      }
    ],
    // "stage-2",
    // react"
  ]
}
```

#### Plugins

#### Presets

presets 属性告诉 Babel 要转换的源码使用了哪些新的语法特性，一个 Presets 对一组新语法特性提供支持，多个 Presets 可以叠加。 Presets 其实是一组 Plugins 的集合，每一个 Plugin 完成一个新语法的转换工作。Presets 是按照 ECMAScript 草案来组织的，通常可以分为以下三大类：

1. 已经被写入 ECMAScript 标准里的特性，由于之前每年都有新特性被加入到标准里，所以又可细分为：

- es2015 包含在2015里加入的新特性；
- es2016 包含在2016里加入的新特性；
- es2017 包含在2017里加入的新特性；
- env 包含当前所有 ECMAScript 标准里的最新特性。

2. 被社区提出来的但还未被写入 ECMAScript 标准里特性，这其中又分为以下四种：

- stage0 只是一个美好激进的想法，有 Babel 插件实现了对这些特性的支持，但是不确定是否会被定为标准；
- stage1 值得被纳入标准的特性；
- stage2 该特性规范已经被起草，将会被纳入标准里；
- stage3 该特性规范已经定稿，各大浏览器厂商和 Node.js 社区开始着手实现；
- stage4 在接下来的一年将会加入到标准里去。

3. 为了支持一些特定应用场景下的语法，和 ECMAScript 标准没有关系，例如 babel-preset-react 是为了支持 React 开发中的 JSX 语法。

注： 

在babel7版本，所有stage全部废除(As of Babel v7, all the stage presets have been deprecated.)

preset-env插件包含了`babel-preset-es2015` `babel-preset-es2016` `babel-preset-es2017` `babel-preset-latest` 插件全部