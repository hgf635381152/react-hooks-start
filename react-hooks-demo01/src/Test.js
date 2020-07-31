import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
  useEffect(() => {
    console.log('useEffect=>这是Index')
    return () => {
      console.log('Index 走了')
    }
  },[])
  return (
    <h2>Index</h2>
  )
}
function List() {
  useEffect(() => {
    console.log('useEffect=>这是List')
    return () => {
      console.log('List 走了')
    }
  },[])
  return (
    <h2>List</h2>
  )
}



function Test(props) {
  const [ count, setcount ] = useState(0)  // 数组解构
  useEffect(() => {
    console.log('=======================')
    return () => {
      console.log('count 走了')
    }
  }, [count])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {setcount(count+1)}}>Click me</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list" exact component={List} />
      </Router>
    </div>
  )
}



export default Test;