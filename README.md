

If you have ideas for more “How To” recipes that should be on this page, [let us know](https://github.com/facebook/create-react-app/issues) or [contribute some!](https://github.com/facebook/create-react-app/edit/master/packages/react-scripts/template/README.md)


##在create-react-app生成的项目基础上更改，
使用koa2模拟的后台数据
界面react16+react-router4+less
基于已有项目修改的，

npm run mock，启动koa，监听3001，端口
npm start 启动开发环境
##在webpackDevServer中配置代理 

  const proxyConfig = {
      // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
      // koa 代码在 ./mock 目录中，启动命令为 npm run mock
      '/api': {
        target: 'http://localhost:3001',
        
        secure: false,
        changeOrigin: true //可否跨域
      }
    }
    代码中多有注释

