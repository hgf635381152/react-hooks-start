import React, { useState, useMemo } from 'react'

function Example6() {
  const [ a, seta ] = useState('a在代课')
  const [ b, setb ] = useState('b在代课')
  return (
    <>
      <button onClick={() => { seta(new Date().getTime()) }}>a</button>
      <button onClick={() => { setb(new Date().getTime()+'b走来') }}>b</button>
      <ChildComponent name={a}>{b}</ChildComponent>
    </>
  )
}


function ChildComponent({name, children}) {
  function changea(name) {
    console.log('aaaaaaaaaaaaaaaaaaaaaa')
    return name+'a走来了'
  }
  const actiona = useMemo(() => changea(name), [name])
  return (
    <>
      <div>{actiona}</div>
      <div>{children}</div>
    </>
  )
}

export default Example6
