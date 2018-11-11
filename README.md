#React-Demo
基于Reactjs && Node 通讯的简单演示
Reactjs && ES6 && webpack构建移动端京东首页
基于文件系统的Node.js服务端
Mou icon

安装与运行程序
克隆项目

___ $ git clone https://github.com/CanFoo/react.git___ 
分别进入react目录和server目录下安装依赖包

___  $ npm install___ 
在server目录下启动后台服务

___ $ npm run start___ 
在react目录下启动webpack服务

___ $ npm run dev___ 
发布项目文件命令

___ $ npm run build___ 
执行完npm run dev命令后，打开浏览器 http://localhost:8080/运行项目，后台服务端口为 3000

 
##在create-react-app生成的项目基础上更改，
使用koa2模拟的后台数据
界面react16+react-router4+less
基于已有项目修改的，

npm run mock，启动koa，监听3001，端口
npm start 启动开发环境
##在webpackDevServer中配置代理 

```
  const proxyConfig = {
      // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
      // koa 代码在 ./mock 目录中，启动命令为 npm run mock
      '/api': {
        target: 'http://localhost:3001',
        
        secure: false,
        changeOrigin: true //可否跨域
      }
    }
    
```
    代码中多有注释

