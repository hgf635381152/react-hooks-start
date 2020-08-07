class   setState -> 父子组件props + props调用 -> context 
        -> redux useReducer -> mobx connect 灵感  装饰器模式

1. 当数据流层次超过两层， 简单的useState传递有点繁琐
  而redux  useReducer  太重   如果action可以忽略   useContext
  useState React.createContext结合   数据模板+实际操作
  useContext
  
2. reducer 函数是灵魂
  redux  企业级的数据状态安全流程及架构
  - state读可以
  - state 写操作 dispatch action -> reducer -> 新旧状态的切换
  - reducer  一个旧状态通过同样的 type 和 payload 新状态一定是一样的
  - 