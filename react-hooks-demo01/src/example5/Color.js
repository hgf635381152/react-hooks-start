import React, { createContext, useReducer } from 'react'
import ShowArea from './ShowArea'
import Buttons from './Buttons'

export const ColorContext = createContext({})

export const UPDATE_COLOR = "UPDATE_COLOR"

const reducer = (state, action) => {
  switch(action.type) {
    case UPDATE_COLOR:
      return action.color
    default:
      return state
  }
}

export const Color = () => {
  const [color, dispatch] = useReducer(reducer, 'blue')
  return (
    <ColorContext.Provider value={{color, dispatch}}>
      {/* {props.children} */}
      <ShowArea />
      <Buttons />
    </ColorContext.Provider>
  )
}