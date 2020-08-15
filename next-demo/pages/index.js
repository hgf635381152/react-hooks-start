import React from 'react'
import Link from 'next/link'
import Router from 'next/router'


// 只能query传参 ?id=1    next.js
// path react-router  path :id=1

const Home = () => {

  // 6个钩子事件
  // routeChangeStart      路由发生变化时
  // routeChangeComplete   路由结束变化时
  // beforeHistoryChange   浏览器history触发前
  // routeChangeError      路由跳转发生错误时
  // hashChangeStart       hash跳转开始时执行
  // hashChangeComplete    hash跳转完成时

  Router.events.on('routeChangeStart', (...args) => {
    console.log('1.routeChangeStart -> 路由开始变化，参数为:', ...args)
  })
  Router.events.on('routeChangeComplete', (...args) => {
    console.log('2.routeChangeComplete -> 路由变化结束，参数为:', ...args)
  })
  Router.events.on('beforeHistoryChange', (...args) => {
    console.log('3.beforeHistoryChange -> 浏览器history触发，参数为:', ...args)
  })
  Router.events.on('routeChangeError', (...args) => {
    console.log('4.routeChangeError -> 路由跳转发生错误，参数为:', ...args)
  })
  Router.events.on('hashChangeStart', (...args) => {
    console.log('5.hashChangeStart -> hash跳转开始时执行，参数为:', ...args)
  })
  Router.events.on('hashChangeComplete', (...args) => {
    console.log('6.hashChangeComplete -> hash跳转完成时，参数为:', ...args)
  })

  // Lazy  Loading  模块moment   组件user

  function gotouser() {
    Router.push({
      pathname: '/user',
      query: {name: '张三'}
    })
  }
  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href="/user?name=张三"><a>选择张三</a></Link>
        <Link href={{pathname: '/user',query: {name: '李四'}}}><a>选择李四</a></Link>
      </div>
      <div>
        <button onClick={gotouser}>选张三</button>
      </div>
      <div>
        <Link href="#jspang"><a>选择技术胖</a></Link>
      </div>
    </>
  )
}

export default Home


// import React from 'react'
// import Link from 'next/link'
// import Router from 'next/router'


// const Home = () => {
//   function gotoA() {
//     Router.push('/jspangA')
//   }
//   function gotoB() {
//     Router.push('/jspangB')
//   }
//   return (
//     <>
//       <div>我是首页</div>
//       <div><Link href="/jspangA"><a>去JspangA页面</a></Link></div>
//       <div><Link href="/jspangB"><a>去JspangB页面</a></Link></div>
//       <div>
//         <button onClick={gotoA}>JSpangA</button>
//         <button onClick={gotoB}>JSpangB</button>
//       </div>
//     </>
//   )
// }

// export default Home