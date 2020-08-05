import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './styles.css';
import { MyComponent } from './demo'



function App() {
  return (
    <div>
      <MyComponent />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />,rootElement)