# Webpack 前端工程化

这门课学着很费劲，一是对webpack并不熟，二是插件，loader以及配置真的比较多，记不过来，还有就是课程并不是使用webpack4最新的配置

我把我认为比较重要的部分记录下来

## 前端模块化历史
js的模块化：命名空间，CommonJS，AMD/CMD/UMD, ES6 module

命名空间会冲突，commonJS一个文件即一个模块，同步加载，AMD,async modlue definition，实践是requireJS,使用define定义模块，require加载模块，CMD,common module definition,实践seaJS，与AMD区别是尽可能懒执行,UMD，universal module definition用于判断当前支持的模块

css设计模式演变

OOCSS(object oriented),SMACSS，可扩展的css结构,由base,layout,module,state,theme组合，减少代码量，Atomic CSS(原子)，如mt-10 w-100,易于组合，bootstrap有很多这样的实践，MCSS，层级CSS， AMCSS，属性，如size="large"，BEM,block,element,modifier,即块，元素，状态，如`<button class="button button-state-danger"></button>`，在bootstrap也有很多实践

## 配置打包
配置项核心部分：entry,output,plugins,loader,  
重要名词：chunk(代码块), bundle(包)，module(模块)

只要有入口文件，并设置打包后的路径，再加上一些处理不同文件的loader，我们就可以直接打包出一个对依赖进行处理后的一个bundle  

如果只打包js文件，我们甚至可以不用loader

```js
// webpack.config.js
module.exports = {
    entry: {
        app: './src/index'
    }
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}
```

## 配置loader，处理文件
`babel： babel-loader @babel/core @babel/preset-env`，把es6语法转换为es5，因为很多浏览器无法支持es6++

必要要有配置，可以单独写一个`.babelrc`文件，也可以在webpack配置文件中书写`options`，其中presets可以指定要兼容的浏览器版本，如ie8+等 。

```js
// .babelrc
{
    "presets": [
        ["@babel/preset-env", {
            "targets": {
                "browsers": ["last 2 versions"]
            }
        }]
    ]
}
```

`@babel/polyfill`, 需要结合上面的插件使用

抹平浏览器对js实现的差异，@babel/runtime功能与polyfill类似，但还可以用于框架开发环境下减少全局污染

`ts-loader, awesome-typescript-loader`(后者利用了缓存?处理更快？)。 

搭配babel-loader使用，先用ts-loader处理，再用babel-loader处理
必须要有tsconfig文件，包含complierOptions,include(要处理的文件夹),exclude等选项。为了让第三方库在使用ts的时候如传参错误在打包的时候报出，我们需要使用声明文件，如@types/loadash 

```js
// ts.config.js
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "typeRoots": [
            "./node_modules/@type",
            "./typings/modules"
        ]
    },

    "include": [
        "./src/*"
    ],

    "exclude": [
        "./node_modules"
    ]
}
```

`style-loader css-loader`

style-loader,处理html中的样式，css-loader用于js中引入css，多个loader自右向左执行

css-loader的options如css-module,minus, css module就是从一个css文件引入一个style变量，再使用这个style上的class，在打包并在浏览器内执行时，样式名会被编译成一个hash（通常设置），不会被不同文件的同class影响

`less-loader`

less-loader，less-loader在处理less文件时，use选项时要写到最后(因为从后往前执行loader)，放在style-loader, css-loader之后

`postcss-loader`  ~~`extract-text-webpack-plugin`~~ 第四版已废弃
 autoprefixer(加前缀) cssnano（css压缩） cssnext(css未来语法) broswerlist（设置要兼容的浏览器版本）

 使用postcss-sprites生成雪碧图， postcss-loader用于处理css文件，但是可以在options的plugin选项配置一些postcss的插件，如postcss-sprites,但是只想让部分图片生成雪碧图的配置？

 ```js
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 module.exports = {
     module: {
         rules: [
             {
                 test: /\.less$/,
                 use: [
                     {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        // you can specify a publicPath here
                        // by default it uses publicPath in webpackOptions.output
                        publicPath: '../',
                        hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        loader: 'style-loader',
                        options: {
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                // 自动加浏览器前缀
                            ]
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                    ]
                 })
             }
         ]
     }
 }
 ```

 `file-loader url-loader`

 处理图片： file-loader,配置options打包的路径outputPath以及publicPath， url-loader可以把图片转换成base64编码，options配置大小边界值,url-loader是file-loader的超集

 处理字体文件，如ttf, svg等

 `img-loader`

 压缩图片

## 配置plugin，优化打包

`HtmlWebpackPlugin` `CleanWebpackPlugin`

前者用于每次打包都会生成新的html文件，后者每次打包都会先清理dist文件夹

`CopyWebpackPlugin`

将src下的其他文件直接复制到dist文件夹

`optimization.splitChunks ` ~~`CommonsChunkPlugin`~~  production环境默认开启

是webpack的内置插件，只需要配置一下即可开启代码分割


~~减少公共代码重复引用，减小打包体积，会打包出一个公用的chunk包，使用插件CommonsChunkPlugin，是webpack自带的optimize(优化)插件，配置options见官网~~

代码分割：将不同用途的公用代码提取至不同bundle，并用options的chunk选项配置要提取的范围，在webpack4中被移除，取而代之的是SplitChunksPlugin（官网）

代码分割(split code)和懒加载(lazy load), 代码分割值动态引入：require.ensure()传入回调，回调内部引用别的模块,webpack3已经支持了es6模块的动态引入， 代码分割分离了业务代码，公用代码和第三方依赖，并且分离了首次加载和访问后加载的代码（上节的CommonPlugin也是代码分割的一部分）

```js
// webpack.config.js
module.exports = {
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/, // Controls which modules are selected by this cache group
                    name: 'vendor',  // 指定打包的名字
                    chunks: 'all',  // This indicates which chunks will be selected for optimization
                }
            }
        }
    }
}
```

`懒加载`

`tree-shaking` webpack4默认开启了 tree shaking,利用了uglifyPlugin插件

es6的模块支持了webpack 的 tree shaking，需要用到uglifyPlugin插件，lodash的es6模块用法，需要安装lodash-es, babel-plugin-lodash, 也可以只引用lodash某个方法的包(如lodash/join)，css也有tree shaking

`开启缓存` `多线程` `happypack`

```js
module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
    ],
  },
};
```



引入第三方库，使用cdn引入script资源，这样全局变量就可以在任何页面使用了， 第二种是使用npm安装，并使用webpack.ProvidePlugin插件配置全局变量 第三种是使用npm安装，resolve配置，配置第三库从哪里找， 第四种npm安装，使用imports-loader引入第三方包

自动生成html插件html-webpack-plugin，构造函数传入{}对象options,配置文件名，模板，是否压缩等


## 配置开发环境

开发环境，好处：调试开发方便 watch mode webpack会自动更新，但是需要手动刷新浏览器。 webpack-dev-server,推荐 webpack-dev-middle,需要熟悉node，然后自行搭建webpack node环境

webpack-dev-server，运行在内存中，在dist找不到打包的文件，需要自行打包 优点：live reloading, 路径重定向，浏览器显示编译错误，接口代理，支持模块热更新 配置：contentBase, port(端口), inline,proxy,hot(模块热更新)，openpage,lazy,overlay(遮罩层错误提示),historyApiFallback

Proxy代理，运用http-proxy-middleware，可以查阅相关文档 "/api"下设置：target（设置请求目标的域）, changeOrigin(设置跨域), headers:设置cookie做请求头，logLevel: "debug"打印接口请求信息,pathRewrite: 配置路径别名

热更新：保持应用数据状态(state等)，提升开发效率。devServer设置为true，并使用hot-module-replacement-plugin，热更新的时候,loader会帮我们自动完成，vue,react,angular自带的热更新的loader也会帮助进行热更新。 配置module.hot...

## 配置react开发环境

## 这是课程目录

* 第一章 课程简介
    * 1.1 前端开发历史发展
    * 1.2 导学

* 第二章 Webpack 学习准备
    * 2.1 模块化思想
    * 2.2 开发环境准备
    * 2.3 webpack 简介
    * 2.4 webpack 核心概念

* 第三章 由浅入深 Webpack
    * 3.1 使用 webpack （webpack-cli）
    * 3.2 打包 JS (三种不同模块化规范的js在webpack 中的打包)
    * 3.3 编译 ES6(babel 和 runtime)
    * 3.4 编译 Typescript
    * 3.5 提取公共代码
    * 3.6 代码分割 和 懒加载
    * 3.7 打包 CSS (style-loader)
    * 3.8 处理 CSS (css-loader)
    * 3.9 配置 CSS 预处理器 (less-loader)
    * 3.10 提取 CSS 到单独文件
    * 3.11 posscss
    * 3.12 JS Tree-shaking
    * 3.13 CSS Tree-shaking
    * 3.14 图片处理
    * 3.15 自动合成sprite
    * 3.16 处理字体文件
    * 3.17 处理第三方 JS 库
    * 3.18 处理 HTML 

* 第四章 Webpack 环境配置
    * 4.1 Webpack Watch mode
    * 4.2 Webpack-dev-server historyApiFallback
    * 4.3 Webpack-dev-server 接口代理 proxy
    * 4.4 Hot Moduel Reloading
    * 4.5 区分开发环境 和 生产环境
    * 4.6 使用 middle 来搭建开发环境

* 第五章 Webpack 实战场景
    * 5.1 分析打包结果
    * 5.2 优化打包速度
    * 5.3 长缓存优化
    * 5.4 多页面应用

* 第六章 Webpack 和 Vue
    * 6.1 vue-cli 介绍
    * 6.2 vue-cli webpack template
    * 6.3 vue-cli webpack 开发配置
    * 6.4 使用 vue-cli 生成项目实现 todolist

* 第七章 Webpack 和 React
    * 7.1 create-react-app 介绍
    * 7.2 create-react-app 运行脚本
    * 7.3 create-react-app 相关配置
    * 7.4 create-react-app 自定义配置 和 模块热更新

* 第八章 Webpack 和 Angular
    * 8.1 Angular-cli 介绍
    * 8.2 Angular-cli 的配置和模块热更新

* 第九章 课程总结
    * 9.1 Webpack 面试常见问题
    * 9.2 课程回顾以及结语
