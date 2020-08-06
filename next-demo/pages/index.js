import React from 'react'
import Link from 'next/link'


const Home = () => (
  <>
    <div>我是首页</div>
    <div><Link href="/jspangA"><a>去JspangA页面</a></Link></div>
    <div><Link href="/jspangB"><a>去JspangB页面</a></Link></div>
  </>
)

export default Home