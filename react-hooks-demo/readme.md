1. tsx    工作流
  .tsx  React组件 -> webpack.config.js -> 
  awesome-typescript-loader -> tsconfig.json -> typescript .jsx ->
  babel(ployfill+env+plugin 装饰器模式) -> react DOM -> 
  webpack-dev-server html-weboack-plugin footer script bundle.js

2. 最烦的是什么？ react-scripts
  约定

3. hooks 特色
  - useState
    object ...

  - useEffect
    

  - useCallback
  - useMemo
  - useRef
  - useReducer

4. 分析一下react项目是如何运行
jsx
root 根
JSX 编译的过程
正则 <(.+)>...</>
- 节点的类型
  有哪些DOM类型?   
    标签节点 div h4
    组件  递归 
    <></>
    文本  退出


- 做项目中碰到的问题???
  - 文档  api
  - 互相尊重  极客范 运用最新/最稳定的技术
  - useRef  解决闭包的副作用问题
  - 接口数据还没有加载完成, 用户提前退出, 报错 (数据来了，组件没了)
 
数据在hooks 是如何传递
useState -> context 轻量 | reducer 重 | useReducer | mobx --> -->

