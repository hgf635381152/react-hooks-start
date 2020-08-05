import React, { useEffect, useRef } from 'react';
import pullToRefresh from './pullDown'
import './App.css';
const { init } = pullToRefresh()
function App() {
  const contentRef = useRef();
  const ptrRef = useRef();
  const bodyRef = useRef()
  useEffect(() => {
    init({
      contentEl: contentRef.current,
      ptrEl: ptrRef.current,
      bodyEl: bodyRef.current
    })
  }, [])
  return (
    <div className="body-wrap" ref={bodyRef}>
      <div ref={ptrRef} className="ptr-wrap">
        <div className="loading" />
      </div>
      <header ref={contentRef} className="content-wrap">
        <p>
          Edit <code>src/App.js</code> and save to reload.58777
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;