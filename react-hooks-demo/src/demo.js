import React, { useState, useEffect, useRef, useReducer } from 'react'

const userInfoReducer = (state, action) => {
  switch(action.type) {
    case "setusername":
      return {
        ...state,
        name: action.payload
      }
    case "setlastname":
      return {
        ...state,
        lastname: action.payload
      }
    default:
      return state
  }
}
export const MyComponent = () => {
  const [reducer, dispatch] = useReducer(userInfoReducer, {
    name: 'John',
    lastname: 'Doe'
  })
  return (
    <>
      <h3>{reducer.name} {reducer.lastname}</h3>
      <Editusername name={reducer.name} dispatch={dispatch}/>
      <input 
        type="text" 
        value={reducer.lastname}
        onChange={e => dispatch({
          type: "setlastname",
          payload: e.target.value
        })}
      />
    </>
  )
}

export const Editusername = React.memo(props => {
  console.log("Hey when name get updated, check React.memo")
  return (
    <input
      type="text"
      value={props.name}
      onChange={e => props.dispatch({
        type: "setusername",
        payload: e.target.value
      })}
    />
  )
})





// export const MyComponent = () => {
//   const [visible, setVisible] = useState(false)
//   // mount unmount
//   return (
//     <>
//       {visible && <MyChildComponent/>}
//       <button onClick={() => setVisible(!visible)}>
//         Toggle Child component visibility
//       </button>
//     </>
//   )
// }

// export const MyChildComponent = () => {
//   const [filter, setFilter] = useState('')
//   const [userCollection, setUserCollection] = useState([])
//   const mountedRef = useRef(false)

//   useEffect(() => {
//     mountedRef.current = true
//     return () => {
//       mountedRef.current = false
//     }
//   })

//   const setSafeUserCollection = (userCollection) => {
//     mountedRef.current && setUserCollection(userCollection)
//   }
//   useEffect(() => {
//     setTimeout(() => {
//       fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//       .then(response => response.json())
//       // 不能做
//       .then(json => setSafeUserCollection(json))
//     }, 2500)
//   }, [filter])

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={filter}
//         onChange={e => setFilter(e.target.value)}
//       />
//       <ul>
//         {
//           userCollection.map((user, index) => (
//           <li key={index}>{user.name}</li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }




// export const MyComponent = () => {
//   const [message ,setMessage] = useState('initial message')   
//   const [seconds, setSeconds] = useState(0)
//   const secondsRef = React.useRef(seconds);   // useRef  冲破函数式编程带来的闭包的副作用

//   useEffect(() => {
//     setTimeout(() => {
//       console.log(seconds)
//       setSeconds(1)
//       secondsRef.current = 1
//     },1000)

//     setTimeout(() => {
//       setMessage(`Total seconds: ${secondsRef.current}`)
//     }, 2000)
//   }, [])
  
//   return (
//     <>
//       <h3>{message}</h3>
//       <h4>{seconds}</h4>
//     </>
//   )
// }





// export const MyComponent = () => {
//   const [userInfo, setUserInfo] = useState({
//     name: ' John ',
//     lastname: 'Doe'
//   })

//   setTimeout(() => {
//     setUserInfo({
//       ...userInfo,
//       name: ' John '
//     })
//   }, 2000)
  
//   return (
//     <>
//       <DisplayUsername name={userInfo.name} />
//       <input 
//         type="text"
//         value={userInfo.name}
//         onChange={e => setUserInfo({
//           ...userInfo,
//           name: e.target.value
//         })}
//       />
//     </>
//   )
// }

// export const DisplayUsername = memo(props => {
//   console.log('只在name发生改变时更新')
//   return <h3>{props.name}</h3>
// })




// export const MyComponent = () => {
//   const [filter, setFilter] = useState("")
//   const [userCollection, setUserCollection] = useState([])
//   useEffect(() => {
//     fetch(`http://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//       .then(response => response.json())
//       .then(json => setUserCollection(json))
//   }, [filter])
  
//   return (
//     // github  api  shunwuyu   repos   list
//     <div>
//       <input value={filter} onChange={e => setFilter(e.target.value)} />
//       <ul>
//         {
//           userCollection.map((user, index) => {
//             return (
//               <li key={index}>
//                 {user.name}
//               </li>
//             )
//           })
//         }
//       </ul>
//     </div>
//   )
// }






// const setSatisfactionClass = level => {
//   if (level < 100) {
//     return "very-dissatisfied"
//   }
//   if (level < 200) {
//     return "somewhat-dissatisfied"
//   }
//   if (level < 300) {
//     return "neither"
//   }
//   if (level < 400) {
//     return "somewhat-satisfied"
//   }
//   return "very-satisfied"
// }

// const isSameRange = (preValue, nextValue) => {
//   const preValueClass = setSatisfactionClass(preValue.level)
//   const nextValueClass = setSatisfactionClass(nextValue.level)
//   return preValueClass === nextValueClass
// }

// export const FaceComponent = memo(props => {   // memo 缓存组件   
  
//   const { level } = props;
//   return (
//     <div className={setSatisfactionClass(level)}>

//     </div>
//   )
// }, isSameRange)







// export const MyComponent = props => {
//   const [userInfo, setuserInfo] = useState({
//     name: 'John',
//     lastname: 'Doe'
//   })
//   return (
//     <>
//       <h4>{userInfo.name}{userInfo.lastname}</h4>
//       <input type="text"
//         value={userInfo.name}
//         onChange={(e) => setuserInfo({
//           ...userInfo, name: e.target.value
//         })}
//       />
//       <input type="text"
//         value={userInfo.lastname}
//         onChange={(e) => setuserInfo({
//           ...userInfo, lastname: e.target.value
//         })}
//       />
//     </>
//   )
// }


// export const MyComponent = props => {
//   // JSX -> DOM node
//   const [myName, setmyName] = React.useState('John Doe')
//   return (
//     <>
//       <h4>{myName}</h4>
//       <input type="text" value={myName} 
//       onChange={(e) => setmyName(e.target.value)}>

//       </input>
//     </>
//   )
// }

// export const MyComponent = () => {
//   const [username, setusername] = React.useState("");
//   // unmount
//   useEffect(() => {
//     setTimeout(() => {
//       setusername("超")
//     }, 1500)
//   }, [])
//   return (
//     <>
//       <h4>{username}</h4>
//       <input 
//         type="text" 
//         value={username} 
//         onChange={(e) => setusername(e.target.value)} 
//       />
//     </>
//   )
// }

// export const MyComponent = () => {
//   const [visible, setvisible] = useState(false);   // 不是共享状态  用useState
//   return (
//     <>
//       {visible && <MyChildComponent />}
//       <button onClick={() => setvisible(!visible)}>
//         Toggle Child component visibility
//       </button>
//     </>
//   )
// }

// const MyChildComponent = () => {
//   const [userInfo, setuserInfo] = useState({
//     name: 'John',
//     lastname: 'Doe'
//   })
//   useEffect(() => {
//     console.log('called when the component is mounted.');
//     return (
//       () => {
//         console.log('Called on component unmounted, check the [] on the react use effect')
//       }
//     )
//   })
//   return (
//     <div>
//       <h3>
//         {userInfo.name} {userInfo.lastname}
//       </h3>
//       <input 
//         type="text"
//         onChange={e => setuserInfo({...userInfo, name: e.target.value})}
//       />
//     </div>
//   )
// }