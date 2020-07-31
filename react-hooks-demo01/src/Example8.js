import React, { useState, useEffect, useCallback } from 'react'


function useWinSize() {
  const [size, setsize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const onResize = useCallback(() => {
    setsize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return size
}

export default function Example8() {
  const size = useWinSize()

  return (
    <div>
      页面Size: {size.width} * {size.height}
    </div>
  )
}