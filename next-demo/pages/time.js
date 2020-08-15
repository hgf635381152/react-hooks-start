import React, { useState } from 'react'
import dynamic from 'next/dynamic'
// import One from './one'

const One = dynamic(import('./one'))

function Time() {
  const [nowTime, setnowTime] = useState(Date.now())
  const changeTime = async () => {
    const moment = await import('moment')
    setnowTime(moment.default(Date.now()).format())
  }
  return (
    <>
      <div>显示时间为: {nowTime}</div>
      <div><button onClick={changeTime}>改变事件格式</button></div>
      <One />
    </>
  )
}

export default Time