import React, { useRef, useState, useEffect } from 'react'


function Example7() {
  const inputEl = useRef(null)
  const [ text, settext] = useState('jsp')

  const onButtonClick = () => {
    inputEl.current.value = "Hello, World"
    console.log(inputEl)
  }

  const textRef = useRef()
  useEffect(() => {
    textRef.current = text
    console.log(textRef.current)
  }, [text])

  return (
    <div>
      <input ref={inputEl} type="text"></input>
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br />
      <br />
      <input value={text} onChange={(e) => {settext(e.target.value)}}/>
    </div>
  )
}


export default Example7