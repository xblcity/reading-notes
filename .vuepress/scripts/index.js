const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const chalk = require("chalk");
const { handleContent } = require("./util.js");

const preUrl = "https://github.com/xblcity/reading-notes/blob/master";
const mdPath = path.resolve(__dirname, "../../README.md");

const preContent = `# :book:reading-notes

> 看过的一些关于前端的纸质以及电子书的读书笔记

> 记录一些重要的点，便于查阅，温故而知新

[线上版本](https://xblcity.github.io/reading-notes)

- [2019年](#zzz2019年)

- [2020年](#zzz2020年)

- [未来可能会读的书](#zzz未来可能会读的书)
`;

const endContent = `
## :zzz:未来可能会读的书

- 网络

  - HTTP权威指南 2012

- HTML5/CSS3

  - HTML5秘籍（第2版） 2015

  - 精通CSS 高级Web解决标准方案 第三版 2019
  
- JS编程思路

  - Javascript忍者秘籍 第二版 2018

  - Javascript语言精粹(修订版) 2012

  - JS 函数式编程指南 Gitbook 2019

  - ~~JavaScript设计模式与开发实践 曾探 2015~~

  - ~~高性能网站建设指南(第二版) 2015~~

  - ~~高性能JavaScript 2011~~

  - ~~web性能权威指南 2013~~

  - ~~学习JavaScript数据结构与算法 2015~~

  - ~~JavaScript ES6函数式编程入门经典 2017~~

  - ~~JavaScript面向对象精要 2015~~

  - ~~编写可维护的JavaScript 2013~~
  
- 前端工程师

  - ~~Web全栈工程师的自我修养 2015~~

  - ~~高效前端：Web高效编程与优化实践 2018~~

  - ~~现代前端技术解析 2017~~

  - ~~了不起的JavaScript工程师：从前端到全端高级进阶 2019~~

- 网页动画与游戏

  - ~~HTML5 Canvas核心技术 2013~~

  - ~~WebGL编程指南 2014~~

  - ~~Three.js开发指南 2015~~
`;

try {
  const configFile = path.resolve(__dirname, "../config.yml");
  const doc = yaml.load(fs.readFileSync(configFile, "utf8"));
  const docConfig = doc.themeConfig.sidebar;
  if (docConfig) {
    handleContent(docConfig, preUrl, mdPath, preContent, endContent, ".md");
    console.log(chalk.blueBright("README创建完成!"));
  }
} catch (e) {
  console.log(e);
}
