import * as React from 'react'

// 子组件   
export interface Name {
  userName: string,
}
export const HelloComponent = (props: Name) => (
    <h2>Hello user: {props.userName}</h2>
)

