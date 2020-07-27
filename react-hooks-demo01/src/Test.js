import React, { useState } from 'react';

function Test(props) {
  const [ count, setcount ] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {setcount(count+1)}}>Click me</button>
    </div>
  )
}



export default Test;