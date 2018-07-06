# vue-base-warp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 项目目录说明

- build // 目录是一些webpack的文件，配置参数

    - build.js // 生产环境构建代码
    - check-versions.js // 检查node&npm等版本
    - dev-client.js // 热加载相关
    - utils.js // 构建配置公用工具
    - vue-loader.conf.js // vue加载器
    -  webpack.base.conf.js // webpack基础环境配置
    - webpack.dev.conf.js //  webpack开发环境配置
    - webpack.prod.conf.js // webpack生产环境配置
    
- config // 项目开发环境配置相关代码 
    
    - dev.env.js  // 开发环境变量
    - index.js //项目一些配置变量
    - prod.env.js // 生产环境变量

- src // 源码目录
    
    - assets // 资源目录 
        
        - images // 图片
        - style // 全局样式
    
    - filters // 全局处理格式
    - libs

      - api // 接口配置文件
      
      - components // 组件
    
        - _common // 公共组件
        - login // 登陆
        - not-found // 404页面

    - mixin // 混合方法
    - router // 前端路由
    - store // 全局vuex
    - utils // 工具
    - App.vue // 页面入口文件
    - main.js // 程序入口文件（入口js文件）

- static // 静态文件
- .babelrc // ES6语法编译配置
- .editorconfig // 定义代码格式
- .gitignore // git上传需要忽略的文件格式
- .postcssrc.js // 主要就是处理css hack
- index.html // 入口页面
- package.json // 项目基本信息

