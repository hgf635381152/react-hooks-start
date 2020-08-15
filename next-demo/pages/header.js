import MyHeader from './myheader'
import { Button } from 'antd'

// babel-plugin-import  

function Header() {
  return (
    <>
      <MyHeader />
      <div>JSpang.com</div>
      <div><Button>我是按钮</Button></div>
    </>
  )
}

export default Header