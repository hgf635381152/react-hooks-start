import React, { useState } from 'react';


let showSex = true;

function Example(props) {
  const [age, setAge] = useState(18) // 数组解构
  const [sex, setSex] = useState('男')
  const [work, setWork] = useState('前端') 
  return (
    <div>
      <p>JSPang今年: {age}岁</p>
      <p>性别: {sex}</p>
      <p>工作是: {work}</p>
    </div>
  )
}



export default Example;