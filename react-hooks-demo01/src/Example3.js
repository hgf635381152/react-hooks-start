import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext()

function Counter() {
  let count = useContext(CountContext)
  return (
    <h2>{count}</h2>
  )
}

function Example3(props) {
  const [count, setcount] = useState(0)  // 数组解构
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setcount(count + 1) }}>Click me</button>
      <CountContext.Provider value={count} >
        <Counter />
      </CountContext.Provider>
    </div>
  )
}



export default Example3;