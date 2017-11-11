# simple-automation

   >Q: 为什么搭建一个 pug + sass + es2015 的脚手架
   
   >A: 可以使用自己不同的编码风格在一些团队项目中，比如现在的传统自适应页面开发，最终生产符合团队代码规范的页面。
  
   ## 使用
     1. npm install
     2. // config.user 配置自己的文件路径 
     3. gulp   
   
   > 请看代码内注释 
   ## 存在的问题
    * 没有实现自动更换css,js 路径
    * 错误会中断gulp进程
   ---
## 如何搭建 pug + sass + es2015 传统页面开发环境
  * 关于gulp [gulp入门指南](http://www.gulpjs.com.cn/docs/getting-started/)
    ##### 使用es2015通过babel
    * [using-es6-with-gulp](https://markgoodyear.com/2015/06/using-es6-with-gulp/)
    * [glup-and-es6](https://www.w3cplus.com/workflow/glup-and-es6.html)
    * [babel for gulp](https://babeljs.cn/docs/setup/#installation)
   
  * 关于Sass [sass快速入门](https://www.sass.hk/guide/)
  * 关于pug  [pug入门](https://pugjs.org/api/getting-started.html)
  * 关于[browsersync](http://www.browsersync.cn/docs/gulp/)
     >如果html没写头部,不能触发刷新！！！
  * 关于[ESLint](http://eslint.cn/docs/rules/)
  
  ---
  * 思路描述
  
        // 基本脚手架
        npm install --save-dev gulp
        npm install --save-dev babel-core babel-preset-env
        npm install --save-dev browser-sync
        // sass => css
        npm install --save-dev  gulp-sass gulp-autoprefixer
        // pug => html
        npm install --save-dev gulp-pug
        // es6 => es5
        npm install --save-dev gulp-eslint gulp-eslint-if-fixed gulp-babel